/**
 * Created by liying on 2014/10/22.
 */
var express = require('express');
var router = express.Router();

var jobs = {'state': 1,
    data: [
        {
            'jobName': '测试项目工作名称01',
            'jobProName': '松原专家抽取管理系统',
            'jobEndTime': '2014/10/20',
            'jobAssignPerson': '李迎'
        },
        {
            'jobName': '测试项目工作名称02',
            'jobProName': '松原专家抽取管理系统',
            'jobEndTime': '2014/10/20',
            'jobAssignPerson': '李迎'
        },
        {
            'jobName': '测试项目工作名称03',
            'jobProName': '松原专家抽取管理系统',
            'jobEndTime': '2014/10/20',
            'jobAssignPerson': '李迎'
        },
        {
            'jobName': '测试项目工作名称04',
            'jobProName': '松原专家抽取管理系统',
            'jobEndTime': '2014/10/20',
            'jobAssignPerson': '李迎'
        },
        {
            'jobName': '测试项目工作名称05',
            'jobProName': '松原专家抽取管理系统',
            'jobEndTime': '2014/10/20',
            'jobAssignPerson': '李迎'
        },
        {
            'jobName': '测试项目工作名称06',
            'jobProName': '松原专家抽取管理系统',
            'jobEndTime': '2014/10/20',
            'jobAssignPerson': '李迎'
        }
    ]
};
/* GET users listing. */
router.get('/', function (req, res) {
    res.json(jobs);
});

module.exports = router;
