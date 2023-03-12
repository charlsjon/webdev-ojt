var submit = document.querySelector('#submit')
submit.addEventListener('click', function () {
    var firstname = document.querySelector('.readfname');
    var writefname = document.createElement('h4');
    var inputfname = document.querySelector('#infname').value; 
    
    var lastname = document.querySelector('.readlname');
    var writelname = document.createElement('h4');
    var inputlname = document.querySelector('#inlname').value;

    var agenumber = document.querySelector('.readage');
    var writeage = document.createElement('h4');
    var inputage = document.querySelector('#inage').value;

    var addressname = document.querySelector('.readaddress');
    var writeaddress = document.createElement('h4');
    var inputaddress = document.querySelector('#inaddress').value;

    var contactnumber = document.querySelector('.readcontnum');
    var writecontact = document.createElement('h4');
    var inputcontact = document.querySelector('#incontnum').value;

    var picture = document.querySelector('.image');
    var pictureContent = document.createElement('img');
    var inputpicture = document.querySelector('#inpic');

    firstname.appendChild(writefname).classList.add('fname-input');
    document.querySelector('.fname-input').innerHTML = inputfname;

    lastname.appendChild(writelname).classList.add('lname-input');
    document.querySelector('.lname-input').innerHTML = inputlname;

    agenumber.appendChild(writeage).classList.add('age-input');
    document.querySelector('.age-input').innerHTML = inputage;

    addressname.appendChild(writeaddress).classList.add('address-input');
    document.querySelector('.address-input').innerHTML = inputaddress;

    contactnumber.appendChild(writecontact).classList.add('contact-input');
    document.querySelector('.contact-input').innerHTML = inputcontact;

    picture.appendChild(pictureContent).classList.add('picture-input');
    document.querySelector('.picture-input').setAttribute('src', inputpicture.value.split('\\')[2]);
    console.log(inputpicture.value)

    document.querySelector('.wrapper2').style.display = "flex";
}) 

var goBack = document.querySelector('#goBack')

goBack.addEventListener('click', function(){
    document.querySelector('.wrapper2').style.display = 'none';


}) 