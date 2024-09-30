---
title: Forbidden header name
slug: Glossary/Forbidden_header_name
l10n:
  sourceCommit: 50e5edd07155de2eec2a8b6b2ad95820748cfec7
---

{{GlossarySidebar}}

Ein **verbotener Header-Name** ist der Name eines [HTTP-Headers](/de/docs/Web/HTTP/Headers), der programmatisch nicht modifiziert werden kann; speziell ein HTTP-**Request**-Header-Name (im Gegensatz zu einem [verbotenen Antwort-Header-Name](/de/docs/Glossary/Forbidden_response_header_name)).

Die Modifikation solcher Header ist verboten, da der Benutzeragent die volle Kontrolle über sie behält. Namen, die mit `Sec-` beginnen, sind reserviert, um neue Header zu erstellen, die vor [APIs](/de/docs/Glossary/API) sicher sind, die Entwicklern die Kontrolle über Header gewähren, wie z.B. [`fetch()`](/de/docs/Web/API/Window/fetch).

Verbotene Header-Namen beginnen mit `Proxy-` oder `Sec-` oder gehören zu den folgenden Namen:

- {{HTTPHeader("Accept-Charset")}}
- {{HTTPHeader("Accept-Encoding")}}
- {{HTTPHeader("Access-Control-Request-Headers")}}
- {{HTTPHeader("Access-Control-Request-Method")}}
- {{HTTPHeader("Connection")}}
- {{HTTPHeader("Content-Length")}}
- {{HTTPHeader("Cookie")}}
- {{HTTPHeader("Date")}}
- {{HTTPHeader("DNT")}}
- {{HTTPHeader("Expect")}}
- {{HTTPHeader("Host")}}
- {{HTTPHeader("Keep-Alive")}}
- {{HTTPHeader("Origin")}}
- {{HTTPHeader("Permissions-Policy")}}
- `Proxy-`
- `Sec-`
- {{HTTPHeader("Referer")}}
- {{HTTPHeader("TE")}}
- {{HTTPHeader("Trailer")}}
- {{HTTPHeader("Transfer-Encoding")}}
- {{HTTPHeader("Upgrade")}}
- {{HTTPHeader("Via")}}

> [!NOTE]
> Der {{HTTPHeader("User-Agent")}} Header ist gemäß [Spezifikation](https://fetch.spec.whatwg.org/#terminology-headers) nicht mehr verboten — siehe Liste der verbotenen Header-Namen (dies wurde in Firefox 43 implementiert) — er kann nun in einem Fetch [Headers](/de/docs/Web/API/Headers) Objekt gesetzt werden oder mit der [setRequestHeader()](/de/docs/Web/API/XMLHttpRequest/setRequestHeader) Methode von `XMLHttpRequest`. Allerdings wird Chrome diesen Header stillschweigend aus Fetch-Anfragen entfernen (siehe [Chromium Bug 571722](https://crbug.com/571722)).

> [!NOTE]
> Während der {{HTTPHeader("Referer")}} Header in der [Spezifikation](https://fetch.spec.whatwg.org/#forbidden-request-header) als verbotener Header aufgeführt ist, behält der Benutzeragent nicht die volle Kontrolle darüber und der Header kann programmatisch modifiziert werden. Zum Beispiel kann bei der Verwendung von [`fetch()`](/de/docs/Web/API/Window/fetch) der {{HTTPHeader("Referer")}} Header programmatisch über die [`referrer` Option](/de/docs/Web/API/RequestInit#referrer) geändert werden.

## Siehe auch

- Verwandte Glossarbegriffe:
  - [Forbidden response header name](/de/docs/Glossary/Forbidden_response_header_name)
