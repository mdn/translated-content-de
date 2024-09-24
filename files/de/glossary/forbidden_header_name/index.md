---
title: Verbotener Header-Name
slug: Glossary/Forbidden_header_name
l10n:
  sourceCommit: 50e5edd07155de2eec2a8b6b2ad95820748cfec7
---

{{GlossarySidebar}}

Ein **verbotener Header-Name** ist der Name eines [HTTP-Headers](/de/docs/Web/HTTP/Headers), der programmatisch nicht modifiziert werden kann, speziell der Name eines HTTP **Anfrage**-Headers (im Gegensatz zu einem {{Glossary("Forbidden response header name")}}).

Das Modifizieren solcher Header ist verboten, da der Benutzeragent die vollständige Kontrolle über sie behält. Namen, die mit `Sec-` beginnen, sind für die Erstellung neuer Header reserviert, die sicher vor {{glossary("API","APIs")}} sind, die Entwicklern die Kontrolle über Header gewähren, wie z.B. {{domxref("Window/fetch", "fetch()")}}.

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
> Der {{HTTPHeader("User-Agent")}} Header ist nicht mehr verboten, [laut Spezifikation](https://fetch.spec.whatwg.org/#terminology-headers) — siehe Liste der verbotenen Header-Namen (dies wurde in Firefox 43 implementiert) — er kann nun in einem Fetch [Headers](/de/docs/Web/API/Headers) Objekt gesetzt werden, oder mit der [setRequestHeader()](/de/docs/Web/API/XMLHttpRequest/setRequestHeader) Methode von `XMLHttpRequest`. Allerdings entfernt Chrome den Header stillschweigend aus Fetch-Anfragen (siehe [Chromium Bug 571722](https://crbug.com/571722)).

> [!NOTE]
> Obwohl der {{HTTPHeader("Referer")}} Header als verbotener Header [in der Spezifikation](https://fetch.spec.whatwg.org/#forbidden-request-header) aufgeführt ist, behält der Benutzeragent nicht die vollständige Kontrolle darüber und der Header kann programmatisch modifiziert werden. Zum Beispiel kann der {{HTTPHeader("Referer")}} Header beim Verwenden von [`fetch()`](/de/docs/Web/API/Window/fetch) über die [`referrer` option](/de/docs/Web/API/RequestInit#referrer) programmatisch modifiziert werden.

## Siehe auch

- Verwandte Glossarbegriffe:
  - {{Glossary("Forbidden response header name")}}
