function isDate(input) {
  // Check if it's a valid Date object
  if (input instanceof Date && !isNaN(input)) {
    return true;
  }

  // Check if it's a valid date string
  if (typeof input === "string") {
    const parsed = new Date(input);
    return !isNaN(parsed);
  }

  return false;
}