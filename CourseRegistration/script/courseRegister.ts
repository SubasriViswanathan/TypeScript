let autoIncrementId=1001;
let autoIncrementCourseId=1001;

let currentuserId:string;
let currentuserName:string;
let totalDays:string;

class newUser
{
    userId:string;
    userName:string;
    userAge:number;
    userPhoneNumber:number;
    constructor(paramuserName:string,paramuserAge:number,paramuserPhoneNumber:number)
    {
        autoIncrementId++;
        this.userId=autoIncrementId.toString();
        this.userName=paramuserName;
        this.userAge=paramuserAge;
        this.userPhoneNumber=paramuserPhoneNumber;
    }
}

class Course
{
    courseId:string;
    coursename:string;
    courseRequiredDays:number;
    userId:string;

    constructor(paramcourseName:string,paramcourseRequiredDays:number,paramuserId:string)
    {
        autoIncrementCourseId++;

        this.courseId=autoIncrementCourseId.toString();
        this.coursename=paramcourseName;
        this.courseRequiredDays=paramcourseRequiredDays;
        this.userId=paramuserId;
    }
}
let UserArray:newUser[]= new Array<newUser>();

let currentusername:newUser;
    
let CourseArray:Course[]=new Array<Course>();

function newUserFun()
{
    (document.getElementById('maindiv') as HTMLDivElement).style.display="none";
    (document.getElementById('newUserPagediv') as HTMLDivElement).style.visibility="visible";

}
function addnewuser()
{

    let _name = (document.getElementById("newUserName") as HTMLInputElement).value;
    let _Age=(document.getElementById('newUserAge') as HTMLInputElement).value;
    let _userPhoneNumber=document.getElementById('newUserMobileNumber') as HTMLInputElement;
    let user1:newUser=new newUser(_name,+_Age,+_userPhoneNumber);

    UserArray.push(user1);
    alert(`${user1.userName} your registeration is completed ID ${user1.userId}`);

    (document.getElementById("newUserPagediv") as HTMLDivElement).style.display = "none";
    (document.getElementById('maindiv') as HTMLDivElement).style.display="block";
}
function existingUser()
{
    (document.getElementById('maindiv') as HTMLDivElement).style.display="none";
    (document.getElementById('existingUserdiv')as HTMLDivElement).style.visibility="visible";
}
function optionPage() {
    (document.getElementById('existingUserdiv')as HTMLDivElement).style.visibility="visible";
    (document.getElementById('maindiv') as HTMLDivElement).style.display="none";
    let userid=(document.getElementById('userId') as HTMLInputElement).value;
    let action: newUser = null;
    for (let i = 0; i < UserArray.length; i++)
     {
        if ((userid == UserArray[i].userId))
        {
            action = UserArray[i];
            currentusername = action;
        }

    }
    if (action == null)
    {
        alert("please enter valid ID");
    }
    else
     {
            (document.getElementById('existingUserDetails') as HTMLElement).innerHTML=(`<h1>Hi ${action.userName}<h1>`);
            (document.getElementById('maindiv')as HTMLDivElement).style.display="none";
            (document.getElementById('existingUserdiv')as HTMLDivElement).style.display="none";
            (document.getElementById('optionPagediv')as HTMLDivElement).style.visibility="visible";
    }

}
function availableCourse()
{
    (document.getElementById('availablecoursediv')as HTMLDivElement).style.visibility="visible";
    (document.getElementById('optionPagediv')as HTMLDivElement).style.display="none";

}
function enrollCourse()
{
    
    let _course=(document.getElementById('selector') as HTMLInputElement).value;
    let _courseRequiredDays=(document.getElementById('requireddays')as HTMLInputElement).value;
    let _userid=currentuserId;

    let course1:Course=new Course(_course,+_courseRequiredDays,_userid);

    CourseArray.push(course1);

    alert("Enrolled Successfully");

    (document.getElementById('availablecoursediv')as HTMLDivElement).style.display="none";
    (document.getElementById('optionPagediv')as HTMLDivElement).style.display="block";
    
}
function enrolledCourse()
{

    let totalDays=0;

    (document.getElementById('optionPagediv')as HTMLDivElement).style.display="none";
    (document.getElementById('enrolldiv')as HTMLDivElement).style.visibility="visible";
    (document.getElementById("maindiv") as HTMLElement).style.display="none";
    
    for(let i=0;i<CourseArray.length;i++)
    {
        if(CourseArray[i].courseId ==currentuserId)
        {
            totalDays+=CourseArray[i].courseRequiredDays ;
        }
    }

    let history=(document.getElementById("courselist") as HTMLLabelElement);
    let tot=(document.getElementById("count") as HTMLLabelElement);

    for(let i=0;i<CourseArray.length;i++)
    {
        if(CourseArray[i].courseId==currentuserId)
        {
            history.innerHTML += `You buyed ${CourseArray[i].coursename} for ${CourseArray[i].courseRequiredDays} days <br>`; 
              
        }
    }
    tot.innerHTML += `Your total cost is ${totalDays}`;

}