function getFirstFiveRatings(ratings) {
  let start = 1;   // índice inicial
  let end = 4;     // índice final (não inclusivo)
  let subArray = [];

  for (let i = start; i < end; i++) {
      subArray.push(ratings[i]);
  }

  return ratings.length >= 5 && subArray

  
}

function sumFirstFiveRatings(ratings) {
  const ratingsBool = Boolean(ratings)

  if (ratingsBool) {
    const firstFiveRatings = getFirstFiveRatings(ratings)

    if (!firstFiveRatings) return { error: 'there must be at least 5 ratings' }

    let ratingsSum = 0;

    for (const rating of firstFiveRatings) {
      ratingsSum += Number(rating)
    }

    return { ratingsSum, created_at: String(new Date()) }
  }

  return { error: 'ratings is required' }
}

const appRatings = ['5', '3', '4', '4', '5', '1', '5', '4', '4', '3']
sumFirstFiveRatings(appRatings)