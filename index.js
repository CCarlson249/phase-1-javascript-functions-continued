// code your solution here
function saturdayFun(activity) {
    let plan;
    if (activity === undefined) {
        plan = "roller-skate";
    } else {
        plan = activity;
    }
    return "This Saturday, I want to " + plan + "!";
    }


    function mondayWork(job) {
        let work;
        if (job === undefined) {
            job = "go to the office";
        } else { work = job;
        } return "This Monday, I will " + job + ".";
    }


    function wrapAdjective(flair = '*') {
        return function(adjective = "special") {
          return `You are ${flair}${adjective}${flair}!`;
        }
      }
      