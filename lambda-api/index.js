exports.handler = async (event) => {
  // Log the incoming request to CloudWatch Logs
  console.log("Received data:", event.body);

  // Generate a random ID for the submission
  const submissionId = Math.random().toString(36).substring(2, 10);

  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      message: "Data successfully received and logged!",
      id: submissionId,
    }),
  };
};
