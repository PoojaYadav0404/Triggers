function DelTriggers(){
  var Triggers = ScriptApp.getProjectTriggers();
    if (Triggers.length > 0) {
      Triggers.forEach(trig => {
        ScriptApp.deleteTrigger(trig);
      })
    }
}
