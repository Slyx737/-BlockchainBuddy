async function sendMessageToChatGPT(input) {
  let apiKey;
  // Get your API key from Chrome storage
  chrome.storage.sync.get(['apiKey'], function(result) {
    apiKey = result.apiKey;
  });

  // Prepare the data to be sent to the ChatGPT API
  const data = {
    prompt: input,
    // Add any additional parameters required for the API call
  };

  try {
    // Make the API call
    const response = await fetch("https://api.openai.com/v1/engines/davinci-codex/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + apiKey
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Process the response and extract the relevant information
    const jsonResponse = await response.json();
    const aiResponse = jsonResponse.choices[0].text;

    return aiResponse;
  } catch (error) {
    console.log('There was a problem with the fetch operation: ' + error.message);
    // Maybe update the UI to inform the user that there was a problem.
    return "There was a problem processing your request. Please try again.";
  }
}

// Event listener for user input (e.g., button click or pressing Enter)
document.getElementById("sendButton").addEventListener("click", async () => {
  const userInput = document.getElementById("userInput").value;
  const sendButton = document.getElementById("sendButton");

  // Disable the button and change its text
  sendButton.disabled = true;
  sendButton.innerText = "Sending...";

  // Call the sendMessageToChatGPT function and display the AI's response
  const aiResponse = await sendMessageToChatGPT(userInput);

  // Re-enable the button and change its text back
  sendButton.disabled = false;
  sendButton.innerText = "Send";

  displayMessage(aiResponse);
});

// Function to display messages in the chat area
function displayMessage(message) {
  const chatArea = document.getElementById("chatArea");
  const messageElement = document.createElement("p");
  messageElement.textContent = message;
  chatArea.appendChild(messageElement);

  // Make the chat area scroll to the bottom
  chatArea.scrollTop = chatArea.scrollHeight;
}

// Save your API key to Chrome storage
chrome.storage.sync.set({apiKey: 'your_api_key'}, function() {
  console.log('API key is stored in Chrome storage');
});
