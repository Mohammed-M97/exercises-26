// Smallest unused ID
function nextId(ids) {
  // Create a set to store the used IDs
  const usedIds = new Set(ids);

  // Start from 0 and increment until an unused ID is found
  let i = 0;
  while (usedIds.has(i)) {
    i++;
  }

  return i;
}

console.log(nextId([1, 2, 0, 2, 3, 5]));
