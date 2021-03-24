class Validator {
  constructor() {
    this._errors = [];
  }

  get Errors() {
    return this._errors;
  }

  /**
   *
   * @param schema
   * @param dataToValidate
   * @returns {boolean}
   */
  isValid(schema = {}, dataToValidate) {
    //console.log(schema)
    //console.log(dataToValidate)
    //console.log({schema: schema, dataToValidate: dataToValidate})
    
    if (schema.type === "number" &&  typeof dataToValidate === "number") {
      //console.log({schema: schema, dataToValidate: dataToValidate});
      if ("maximum" in schema){ 
        if (schema.maximum > dataToValidate) {
          return true;
        }
      }

        if ("minimum" in schema) {
          if (schema.minimum < dataToValidate) {
            return true;
          }
        }    

    } 
    return false;
  }
}
