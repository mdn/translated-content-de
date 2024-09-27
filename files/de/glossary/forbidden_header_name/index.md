---
title: Verbotener Header-Name
slug: Glossary/Forbidden_header_name
l10n:
  sourceCommit: 50e5edd07155de2eec2a8b6b2ad95820748cfec7
---

{{GlossarySidebar}}

Ein **verbotener Header-Name** ist der Name eines [HTTP-Headers](/de/docs/Web/HTTP/Headers), der nicht programmgesteuert modifiziert werden kann; genauer gesagt, ein HTTP-**Request**-Header-Name (im Gegensatz zu einem [verbotenen Antwort-Header-Namen](/de/docs/Glossary/Forbidden_response_header_name)).

Das Modifizieren solcher Header ist verboten, da der Benutzeragent die vollständige Kontrolle über sie behält. Namen, die mit `Sec-` beginnen, sind reserviert, um neue Header zu erstellen, die sicher vor [APIs](/de/docs/Glossary/API) sind, die Entwicklern die Kontrolle über Header gewähren, wie etwa [`fetch()`](/de/docs/Web/API/Window/fetch).

Verbotene Header-Namen beginnen mit `Proxy-` oder `Sec-`, oder gehören zu den folgenden Namen:

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
> Der {{HTTPHeader("User-Agent")}}-Header ist laut [Spezifikation](https://fetch.spec.whatwg.org/#terminology-headers) nicht mehr verboten — siehe Liste verbotener Header-Namen (dies wurde in Firefox 43 implementiert) — er kann nun in einem Fetch-[Headers](/de/docs/Web/API/Headers)-Objekt oder mit der [setRequestHeader()](/de/docs/Web/API/XMLHttpRequest/setRequestHeader)-Methode von `XMLHttpRequest` gesetzt werden. Chrome entfernt jedoch stillschweigend den Header aus Fetch-Anfragen (siehe [Chromium-Bug 571722](https://crbug.com/571722)).

> [!NOTE]
> Obwohl der {{HTTPHeader("Referer")}}-Header [in der Spezifikation](https://fetch.spec.whatwg.org/#forbidden-request-header) als verbotener Header aufgeführt ist, behält der Benutzeragent nicht die vollständige Kontrolle darüber und der Header kann programmgesteuert modifiziert werden. Zum Beispiel kann bei Verwendung von [`fetch()`](/de/docs/Web/API/Window/fetch) der {{HTTPHeader("Referer")}}-Header programmgesteuert über die [`referrer`-Option](/de/docs/Web/API/RequestInit#referrer) modifiziert werden.

## Siehe auch

- Verwandte Glossar-Begriffe:
  - [Verbotener Antwort-Header-Name](/de/docs/Glossary/Forbidden_response_header_name)
