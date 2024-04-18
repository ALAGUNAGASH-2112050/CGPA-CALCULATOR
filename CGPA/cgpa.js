function addsub(){
    let tab = document.getElementById('table');
    let newrow = document.createElement('tr');
    newrow.innerHTML = `<td><input type="text" class="sname" placeholder=""></td>
    <td><input type="number" class="credit" placeholder=""></td>
    <td><input type="text" class="grade" maxlength="2" placeholder=""></td>
    <td><input type="number" class="point" hidden></td>`;
    tab.appendChild(newrow);
    }
    function gpa(){
    let credit = document.querySelectorAll('.credit');
    let creditarr=[];
    let totalcredit = 0;
    for(let i=0;i<credit.length;i++){
    creditarr.push(credit[i].value);
    totalcredit+=parseFloat(creditarr[i]);
    }
    let grade = document.querySelectorAll('.grade');
    let gradearr=[];
    for(let i=0;i<grade.length;i++){
    gradearr.push(grade[i].value);
    }
    let point = document.querySelectorAll('.point');
    let totalgp = 0;
    for(let i=0;i<point.length;i++){
    let g = gradearr[i];
    let gp=0;
    if(g=="O"){
    gp=10;
    }
    else if(g=="A+"){
    gp=9;
    }
    else if(g=="A"){
    gp=8;
    }
    else if(g=="B+"){
    gp=7;
    }
    else if(g=="B"){}
    else if(g=="C"){
    gp=5;
    }
    point[i].value = creditarr[i]*gp;
    totalgp+=parseFloat(point[i].value);
    }
    if(totalcredit==0 || totalgp==0){
    alert('Enter the credits and grades for all the subjects')
    }
    else{
    let ans = (totalgp/totalcredit).toFixed(2);
    let res = document.getElementById('result');
    res.innerHTML ="GPA = "+ans;
    }
    }