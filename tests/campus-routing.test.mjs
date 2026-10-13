import assert from "node:assert/strict";
import test from "node:test";
import { campusFromIpLocation } from "../app/campus-routing.js";

test("routes Vietnamese Quy Nhơn IP locations to the Quy Nhơn campus", () => {
  for (const city of ["Quy Nhon", "Quy Nhơn", "Qui Nhon", "Thành phố Quy Nhơn", "Quy Nhon City"]) {
    assert.equal(campusFromIpLocation({ success: true, country_code: "VN", city }), "quy-nhon");
  }
});

test("keeps other or unavailable IP locations on TP.HCM", () => {
  assert.equal(campusFromIpLocation({ success: true, country_code: "VN", city: "Ho Chi Minh City" }), "hcm");
  assert.equal(campusFromIpLocation({ success: true, country_code: "VN", city: "Da Nang" }), "hcm");
  assert.equal(campusFromIpLocation({ success: true, country_code: "US", city: "Quy Nhon" }), "hcm");
  assert.equal(campusFromIpLocation({ success: false, city: "Quy Nhon" }), null);
  assert.equal(campusFromIpLocation(null), null);
});
