({
    checkTopo: function(component, event, helper) {
        component.set("v.color", "azul");
        component.set("v.random", event.getParam("random"));
        if (event.getParam("random") == component.get("v.posicion")) {
            component.set("v.color", "rojo");
        }
    },    
    click: function(component, event, helper) {
        var randomEvent = $A.get("e.c:correcto");
        if (component.get("v.random") == component.get("v.posicion")) {
            randomEvent.setParams({"correcto": true});
            randomEvent.fire();
            console.log(true);
        }else{
            randomEvent.setParams({"correcto": false});
            randomEvent.fire();
            console.log(false);
        }
    }

    
})