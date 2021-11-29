var autoIncrementId = 1001;
var autoIncrementCourseId = 1001;
var currentuserId;
var currentuserName;
var totalDays;
var newUser = /** @class */ (function () {
    function newUser(paramuserName, paramuserAge, paramuserPhoneNumber) {
        autoIncrementId++;
        this.userId = autoIncrementId.toString();
        this.userName = paramuserName;
        this.userAge = paramuserAge;
        this.userPhoneNumber = paramuserPhoneNumber;
    }
    return newUser;
}());
var Course = /** @class */ (function () {
    function Course(paramcourseName, paramcourseRequiredDays, paramuserId) {
        autoIncrementCourseId++;
        this.courseId = autoIncrementCourseId.toString();
        this.coursename = paramcourseName;
        this.courseRequiredDays = paramcourseRequiredDays;
        this.userId = paramuserId;
    }
    return Course;
}());
var UserArray = new Array();
var currentusername;
var CourseArray = new Array();
function newUserFun() {
    document.getElementById('maindiv').style.display = "none";
    document.getElementById('newUserPagediv').style.visibility = "visible";
}
function addnewuser() {
    var _name = document.getElementById("newUserName").value;
    var _Age = document.getElementById('newUserAge').value;
    var _userPhoneNumber = document.getElementById('newUserMobileNumber');
    var user1 = new newUser(_name, +_Age, +_userPhoneNumber);
    UserArray.push(user1);
    alert("".concat(user1.userName, " your registeration is completed ID ").concat(user1.userId));
    document.getElementById("newUserPagediv").style.display = "none";
    document.getElementById('maindiv').style.display = "block";
}
function existingUser() {
    document.getElementById('maindiv').style.display = "none";
    document.getElementById('existingUserdiv').style.visibility = "visible";
}
function optionPage() {
    document.getElementById('existingUserdiv').style.visibility = "visible";
    document.getElementById('maindiv').style.display = "none";
    var userid = document.getElementById('userId').value;
    var action = null;
    for (var i = 0; i < UserArray.length; i++) {
        if ((userid == UserArray[i].userId)) {
            action = UserArray[i];
            currentusername = action;
        }
    }
    if (action == null) {
        alert("please enter valid ID");
    }
    else {
        document.getElementById('existingUserDetails').innerHTML = ("<h1>Hi ".concat(action.userName, "<h1>"));
        document.getElementById('maindiv').style.display = "none";
        document.getElementById('existingUserdiv').style.display = "none";
        document.getElementById('optionPagediv').style.visibility = "visible";
    }
}
function availableCourse() {
    document.getElementById('availablecoursediv').style.visibility = "visible";
    document.getElementById('optionPagediv').style.display = "none";
}
function enrollCourse() {
    var _course = document.getElementById('selector').value;
    var _courseRequiredDays = document.getElementById('requireddays').value;
    var _userid = currentuserId;
    var course1 = new Course(_course, +_courseRequiredDays, _userid);
    CourseArray.push(course1);
    alert("Enrolled Successfully");
    document.getElementById('availablecoursediv').style.display = "none";
    document.getElementById('optionPagediv').style.display = "block";
}
function enrolledCourse() {
    var totalDays = 0;
    document.getElementById('optionPagediv').style.display = "none";
    document.getElementById('enrolldiv').style.visibility = "visible";
    document.getElementById("maindiv").style.display = "none";
    for (var i = 0; i < CourseArray.length; i++) {
        if (CourseArray[i].courseId == currentuserId) {
            totalDays += CourseArray[i].courseRequiredDays;
        }
    }
    var history = document.getElementById("courselist");
    var tot = document.getElementById("count");
    for (var i = 0; i < CourseArray.length; i++) {
        if (CourseArray[i].courseId == currentuserId) {
            history.innerHTML += "You buyed ".concat(CourseArray[i].coursename, " for ").concat(CourseArray[i].courseRequiredDays, " days <br>");
        }
    }
    tot.innerHTML += "Your total cost is ".concat(totalDays);
}
