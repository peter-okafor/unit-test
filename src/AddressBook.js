function AddressBook() {
	this.allContacts = [];
	this.initialComplete = false;
}
AddressBook.prototype.getInitialContacts = function(cb) {
	var self = this;
	setTimeout(function() {
		self.initialComplete = true;
		if (cb) {
			return cb();
		}
	}, 3);
};
AddressBook.prototype.addContact = function(theContact) {
	this.allContacts.push(theContact);
}
AddressBook.prototype.getContact = function(theIndex) {
	return this.allContacts[theIndex];
}
AddressBook.prototype.deleteContact = function(theIndex) {
	this.allContacts.splice(theIndex, 1)
};