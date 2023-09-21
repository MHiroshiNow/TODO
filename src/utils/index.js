export function getCsrfToken() {
    let value = "; " + document.cookie;
    let parts = value.split("; csrftoken=");
    if (parts.length === 2) return parts.pop().split(";").shift();
}
