Type.registerNamespace("Extensions");

Extensions.WhoDidIt = function Extensions$WhoDidIt()
{
    Type.enableInterface(this, "Sherlock.Interface");
	this.addInterface("Tridion.Cme.Command", ["WhoDidIt"]);
};

Extensions.WhoDidIt.prototype.isAvailable = function WhoDidIt$isAvailable(selection, pipeline) {
    // Only show option for versioned items
    var items = selection.getItems();
    if (items.length > 1)
        return false;

    if (items.length == 1) {
        var item = $models.getItem(selection.getItem(0));
        if (item.getItemType() == $const.ItemType.STRUCTURE_GROUP || item.getItemType() == $const.ItemType.FOLDER || item.getItemType() == $const.ItemType.PUBLICATION) {
            return false;
        }
        return true;
    }
};

Extensions.WhoDidIt.prototype.isEnabled = function WhoDidIt$isEnabled(selection, pipeline) {
    var items = selection.getItems();
    if (items.length == 1) {        
            return true;
    }
    else {
        return false;
    }
};

Extensions.WhoDidIt.prototype._execute = function WhoDidIt$_execute(selection, pipeline) {
    // Comment line below once client is working and you want to test the server
    alert('Excellent!');

    // UnComment - Show Popup that calls Web Service using AJAX
    var selectedID = selection.getItem(0);
    var host = window.location.protocol + "//" + window.location.host;
    var url = host + '/WebUI/Editors/WhoDidIt/client/html/popup.htm?Uri=' + selectedID;
    var popup = $popup.create(url, "toolbar=no,width=400px,height=200px,resizable=false,scrollbars=false", null);
    popup.open();
};