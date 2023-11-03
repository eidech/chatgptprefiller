// Delay the execution of the script for a specified period (e.g., 1000 milliseconds or 1 second)
setTimeout(function () {
  // Get the entire query string from the URL
  const queryString = window.location.search;

  // Parse the query string to extract specific parameters
  const urlParams = new URLSearchParams(queryString);

  // Get the value of a specific parameter (e.g., "prompt")
  const promptParam = urlParams.get("prompt");

  // Check if the "prompt" parameter exists and has a value
  if (promptParam) {
    // Use the extracted value (promptParam) as needed
    console.log("Prompt from URL:", promptParam);

    // Find the textarea element by ID
    const textarea = document.getElementById("prompt-textarea");

    if (textarea) {
      textarea.value = promptParam;
    } else {
      console.log("Textarea element not found.");
    }
  } else {
    console.log("Prompt parameter not found in the URL.");
  }
}, 1000); // Delay for 1000 milliseconds (1 second)
