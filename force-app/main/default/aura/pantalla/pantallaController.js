
({
    clickStart: function (component, event, helper) {
        document.getElementById("pantalla").style.display = "block";
        component.set("v.score", 0)
        
        var action = component.get("c.getRandomNum");
        action.setParams({
            "min": 1,
            "max": 8
        });
        action.setCallback(this, function (response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                var NumAleatorio = response.getReturnValue();
                var randomEvent = $A.get("e.c:random");
                randomEvent.setParams({ "random": NumAleatorio });
                randomEvent.fire();
                console.log(NumAleatorio);
            }
        });
        $A.enqueueAction(action);
    },

    clickContinue: function (component, event, helper) {
        var action = component.get("c.getRandomNum");
        action.setParams({
            "min": 1,
            "max": 8
        });
        action.setCallback(this, function (response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                var NumAleatorio = response.getReturnValue();
                var randomEvent = $A.get("e.c:random");
                console.log(event.getParam("correcto"));
                if (event.getParam("correcto")) {
                    component.set("v.score", component.get("v.score") + 1)
                    console.log("score", component.get("v.score"));
                } else {
                    component.set("v.score", 0)
                    console.log("score", component.get("v.score"));
                }
                randomEvent.setParams({ "random": NumAleatorio });
                randomEvent.fire();
                console.log(NumAleatorio);
            }
        });
        $A.enqueueAction(action);
    },
    alertscore: function (component, event, helper) {
        alert(component.get("v.score"));
    }
})
