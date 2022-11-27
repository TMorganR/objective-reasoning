// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘
function isAdmin(user){
    if(user.userRole === 'ADMIN'){
        return true
    } else {
        return false
    }
}

let user1 = {
    firstName: 'John',
    lastName: 'Doe',
    userRole: 'REGULAR_USER'
}

let user2 = {
    firstName: 'Mack',
    lastName: 'Black',
    userRole: 'ADMIN'
}

console.log(isAdmin(user1))
console.log(isAdmin(user2))


function getEmail(user){
    let emailUser = (`${user.firstName}.${user.lastName} @codeimmersives.com`)
    return emailUser.toLowerCase()
}

let ciUser = {
    firstName: 'Tyler',
    lastName: 'Morgan'
}

console.log(getEmail(ciUser))


function getPlaylistLength(playlistFile){
    songNum = playlistFile.songs.length
    return songNum
}

let playlistExample = {
    name: 'Vibez',
    songs: ['Bittersweet', 'Last Last']
}

console.log(getPlaylistLength(playlistExample))


function getHardestHomework(homeworkArray){

    let lowestHw = homeworkArray[0]

    for(let i = 0; i < homeworkArray.length; i++){
        if(homeworkArray[i].averageScore < lowestHw.averageScore){
            lowestHw = homeworkArray[i]
        }
    }
    return lowestHw.name

}

console.log(getHardestHomework([
    {name: 'hip-hop-array', averageScore: 20},
    {name: 'wait-i-object', averageScore: 100},
    {name: 'objective-reasoning', averageScore: 55}
]))


function createPhonebook(namesArray, NumbersArray){

    let phonebook = {}

    for(let i = 0; i < namesArray.length; i++){
        phonebook[namesArray[i]] = NumbersArray[i]
    }
    return phonebook
}

console.log(createPhonebook(['TJ', 'Maxx'], ['301-555-4444', '304-221-2211']))

// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof isAdmin === 'undefined') {
    isAdmin = undefined;
}
if (typeof getEmail === 'undefined') {
    getEmail = undefined;
}
if (typeof getPlaylistLength === 'undefined') {
    getPlaylistLength = undefined;
}
if (typeof getHardestHomework === 'undefined') {
    getHardestHomework = undefined;
}
if (typeof createPhonebook === 'undefined') {
    createPhonebook = undefined;
}

module.exports = {
    isAdmin,
    getEmail,
    getPlaylistLength,
    getHardestHomework,
    createPhonebook
};