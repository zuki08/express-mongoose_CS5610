var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var AuthorSchema = new Schema(
  {
    first_name: {type: String, required: true, maxLength: 100},
    family_name: {type: String, required: true, maxLength: 100},
    date_of_birth: {type: Date},
    date_of_death: {type: Date},
  }
);

// Virtual for author's full name
AuthorSchema
.virtual('name')
.get(function () {
// To avoid errors in cases where an author does not have either a family name or first name
// We want to make sure we handle the exception by returning an empty string for that case
  var fullname = '';
  if (this.first_name && this.family_name) {
    fullname = this.family_name + ', ' + this.first_name
  }
  if (!this.first_name || !this.family_name) {
    fullname = '';
  }
  return fullname;
});

AuthorSchema
.virtual("lifespan")
.get(function() {
  if(this.date_of_birth === undefined && this.date_of_death === undefined){
    return "";
  }
  if(this.date_of_birth !== undefined && this.date_of_death === undefined){
    return `${this.date_of_birth.getFullYear()} - `;
  }
  if(this.date_of_birth === undefined && this.date_of_death !== undefined){
    return `Unknown - ${this.date_of_death.getFullYear()}`;
  }
  return `${this.date_of_birth.getFullYear()} - ${this.date_of_death.getFullYear()}`;
});


//Export model
module.exports = mongoose.model('Author', AuthorSchema);