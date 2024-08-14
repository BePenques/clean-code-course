// Nomenclatura de variáveis

const listOfUserCategories = [
  {
    title: 'User',
    followers: 5
  },
  {
    title: 'Friendly',
    followers: 50,
  },
  {
    title: 'Famous',
    followers: 500,
  },
  {
    title: 'Super Star',
    followers: 1000,
  },
]

export default async function getCategoryByGithubUsername(req, res) {
  const githubUsername = String(req.query.username)

  if (!githubUsername) {
    return res.status(400).json({
      message: `Please provide an username to search on the github API`
    })
  }

  const responseGithubUserData = await fetch(`https://api.github.com/users/${githubUsername}`);

  if (responseGithubUserData.status === 404) {
    return res.status(400).json({
      message: `User with username "${githubUsername}" not found`
    })
  }

  const githubUserData = await responseGithubUserData.json()

  const listOfOrderedUserCategories = listOfUserCategories.sort((a, b) =>  b.followers - a.followers); 

  const userCategory = listOfOrderedUserCategories.find(i => githubUserData.followers > i.followers)

  const githubUsernameAndCategory = {
    githubUsername,
    category: userCategory.title
  }

  return githubUsernameAndCategory
}

getCategoryByGithubUsername({ query: {
  username: 'josepholiveira'
}}, {})