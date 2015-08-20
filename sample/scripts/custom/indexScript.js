﻿// contains JS code related index.html file
// IIFE
(function () {
    "use strict";
    
    // get all the employees as a json object list
    var employees = GetEmployeeJsonObjs();

    // drawing the JS data table
    DrawJqDataTable(employees);

    // used to draw JQ data table
    function DrawJqDataTable(employees)
    {
        $('#employeeTbl').dataTable({
            "data": employees,
            "aoColumns": [
                    { "mData": "id", "sTitle": "ID", "bVisible": false },
                    { "mData": "name", "sTitle": "Name" },
                    { "mData": "joinDate", "sTitle": "Joined Date" },
                    { "mData": "salary", "sTitle": "Salary" },
                    { "mData": "departmentName", "sTitle": "Department" },
                    {
                        "mData": "logo", "sTitle": "Logo", "mRender": function (data, type, row) {
                            if (data != null) {
                                return '<img src = ' + data + ' ></img>';
                            }
                            else {
                                return "No Logo to show";
                            }
                        },
                        "aTargets": [0]
                    },                    
                    { "sTitle": "View More", "defaultContent": "<button class='employeeInfo'>Info!</button>" },
                    { "sTitle": "Edit Info", "defaultContent": "<button class='employeeEdit'>Edit</button>" },
            ]
        });
    }
    
    // used to return the employee objects
    function GetEmployeeJsonObjs()
    {
        // you can include ajax or web service call to get the real employee objects from the server side
        // dummy data - hard coded
        var employees = [
            { "id": 1, "name": "Jack Dawson", "joinDate": new Date(2011, 10, 30), "salary": 1500.5555, "departmentName": "Engineering", "logo": '../sample/logos/engineering.png' },
            { "id": 2, "name": "Kate Hamilton", "joinDate": new Date(2012, 12, 30), "salary": 1300.999, "departmentName": "Marketting", "logo": '../sample/logos/marketting.png' },
            { "id": 3, "name": "Sean Williams", "joinDate": new Date(2013, 1, 1), "salary": 1200.999, "departmentName": "Finance", "logo": '../sample/logos/finance.png' },
            { "id": 4, "name": "James Swayer", "joinDate": new Date(2013, 2, 1), "salary": 1300.999, "departmentName": "Human Resource", "logo": '../sample/logos/humanResource.png' },
            { "id": 5, "name": "Jack Siddle", "joinDate": new Date(2011, 10, 30), "salary": 1500.5555, "departmentName": "Engineering", "logo": '../sample/logos/engineering.png' },
            { "id": 6, "name": "Gill James", "joinDate": new Date(2012, 12, 30), "salary": 1300.999, "departmentName": "Marketting", "logo": '../sample/logos/marketting.png' },
            { "id": 7, "name": "Alex Starc", "joinDate": new Date(2013, 1, 1), "salary": 1200.999, "departmentName": "Finance", "logo": '../sample/logos/finance.png' },
            { "id": 8, "name": "Micheal Clark", "joinDate": new Date(2013, 2, 1), "salary": 1300.999, "departmentName": "Human Resource", "logo": '../sample/logos/humanResource.png' }
        ];
        return employees;
    }

    

})();