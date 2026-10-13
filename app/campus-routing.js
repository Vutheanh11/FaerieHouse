export const MANUAL_CAMPUS_KEY = "faerie-campus-manual-v1";
export const IP_CAMPUS_KEY = "faerie-campus-ip-v1";

/** @param {unknown} response @returns {"hcm" | "quy-nhon" | null} */
export function campusFromIpLocation(response) {
  if (!response || typeof response !== "object" || !("success" in response) || response.success !== true) {
    return null;
  }

  const countryCode = "country_code" in response && typeof response.country_code === "string"
    ? response.country_code.toUpperCase() : "";
  const city = "city" in response && typeof response.city === "string"
    ? response.city.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/đ/g, "d")
      .toLowerCase().replace(/[^a-z]+/g, " ").trim()
    : "";

  return countryCode === "VN" && /^(?:thanh pho )?(?:quy|qui) nhon(?: city)?$/.test(city)
    ? "quy-nhon" : "hcm";
}
