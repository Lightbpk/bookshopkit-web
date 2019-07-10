console.log('init script start')

var booksBase = firebase.database().ref('booksBase')
//var bookStorage = firebase.storage().ref('books')
//var previewStorage = firebase.storage().ref('previews')

booksBase.once('value',function(snapshot){
    var b1 = snapshot.child('b1').child('Name').val()
    var b2 = snapshot.child('b2').child('Name').val()
    var b3 = snapshot.child('b3').child('Name').val()
    var FirstBookIMG = document.getElementById('FirstBookIMG')
    var SecondBookIMG = document.getElementById('SecondBookIMG')
    var ThirdBookIMG = document.getElementById('ThirdBookIMG')
    var b1prev = snapshot.child('b1').child('Preview').val()
    var b2prev = snapshot.child('b2').child('Preview').val()
    if (snapshot.child('b3').hasChild('Preview')){
        var b3prev = snapshot.child('b3').child('Preview').val()
    }
    else{
        var b3prev = "emptybook.png"
    }
    document.getElementById('b1name').innerHTML = b1
    document.getElementById('b2name').innerHTML = b2
    document.getElementById('b3name').innerHTML = b3
    //FirstBookIMG.src="https://firebasestorage.googleapis.com/v0/b/bookshopkit.appspot.com/o/previews%2Flast_wish.jpg?alt=media&token=a89b04e3-f73f-484e-8079-6bc80ac37aea"
    FirstBookIMG.src =b1prev
    SecondBookIMG.src =b2prev
    ThirdBookIMG.src =b3prev
    FirstBookIMG.onclick = function () {
        console.log('First bock click')
        document.location.href = "bookinfo.html"
    }
})
