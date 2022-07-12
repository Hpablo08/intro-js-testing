class Tweet {
  constructor(userName, tweetText, link) {
    this.sender = userName
    this.content = tweetText
    this.link = link || "no link provided"
    this.likes = 0
    this.retweets = 0
    this.replies = []
    this.replyCount = 0
    this.likes = 0
}
like() {
  this.likes++
}
retweet(){
  this.retweets++
}
reply(expected){
this.replyCount++
this.replies.push(expected)

}
}



module.exports = Tweet;
