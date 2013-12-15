var Jsonix = require("jsonix-smart");

var context = module.exports = new Jsonix.SmartContext([
  require("./mappings/oasis_names_tc_xacml__3_0_core_schema_wd_17").oasis_names_tc_xacml__3_0_core_schema_wd_17,
]);

var Response = context.getClass("urn:oasis:names:tc:xacml:3.0:core:schema:wd-17", "Response");

Response.prototype.getDecisions = function getDecisions() {
  if (typeof this.value !== "object" || this.value === null) {
    return null;
  }

  if (!Array.isArray(this.value.result)) {
    return null;
  }

  return this.value.result.map(function(e) {
    if (typeof e !== "object" || e === null) {
      return null;
    }

    if (typeof e.value !== "object" || e.value === null) {
      return null;
    }

    if (typeof e.value.decision !== "string") {
      return null;
    }

    return e.value.decision;
  });
};
