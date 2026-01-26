---
title: Access-Control-Allow-Credentials header
short-title: Access-Control-Allow-Credentials
slug: Web/HTTP/Reference/Headers/Access-Control-Allow-Credentials
l10n:
  sourceCommit: 7f6778934020a9b5b82b4dd8ca79a99bc9950c2a
---

Der HTTP **`Access-Control-Allow-Credentials`** {{Glossary("response_header", "Response-Header")}} teilt den Browsern mit, ob der Server erlaubt, dass Anmeldedaten in Cross-Origin-HTTP-Anfragen eingeschlossen werden.

Anmeldedaten umfassen Cookies, {{Glossary("TLS", "Transport Layer Security (TLS)")}} Client-Zertifikate oder Authentifizierungsheader, die einen Benutzernamen und ein Passwort enthalten.
Standardmäßig werden diese Anmeldedaten nicht in Cross-Origin-Anfragen gesendet, da dies eine Seite anfällig für {{Glossary("CSRF", "Cross-Site Request Forgery (CSRF)")}} Angriffe machen kann.

Ein Client kann auf mehrere Arten darum bitten, dass Anmeldedaten in Cross-Site-Anfragen einbezogen werden:

- Verwendung von [`fetch()`](/de/docs/Web/API/Window/fetch), indem die [`credentials`](/de/docs/Web/API/RequestInit#credentials) Option auf `"include"` gesetzt wird.
- Verwendung von [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest), indem die [`XMLHttpRequest.withCredentials`](/de/docs/Web/API/XMLHttpRequest/withCredentials) Eigenschaft auf `true` gesetzt wird.
- Verwendung von [`EventSource()`](/de/docs/Web/API/EventSource), indem die [`EventSource.withCredentials`](/de/docs/Web/API/EventSource/withCredentials) Eigenschaft auf `true` gesetzt wird.

Wenn Anmeldedaten einbezogen werden:

- Für {{Glossary("Preflight_request", "Preflighted")}} Anfragen: Die Vorab-Anfrage enthält keine Anmeldedaten.
  Wenn die Server-Antwort auf die Vorab-Anfrage den `Access-Control-Allow-Credentials` Header auf `true` setzt, wird die tatsächliche Anfrage Anmeldedaten enthalten; andernfalls meldet der Browser einen Netzwerkfehler.
- Für nicht vorabgeprüfte Anfragen: Die Anfrage enthält Anmeldedaten, und wenn die Server-Antwort den `Access-Control-Allow-Credentials` Header nicht auf `true` setzt, meldet der Browser einen Netzwerkfehler.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Response-Header")}}</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Access-Control-Allow-Credentials: true
```

## Direktiven

- `true`
  - : Der Server erlaubt, dass Anmeldedaten in Cross-Origin HTTP-Anfragen enthalten sind.
    Dies ist der einzige gültige Wert für diesen Header und ist groß- und kleinschreibungssensitiv.
    Wenn Sie keine Anmeldedaten benötigen, lassen Sie diesen Header vollständig weg, anstatt seinen Wert auf `false` zu setzen.

## Beispiele

Anmeldedaten erlauben:

```http
Access-Control-Allow-Credentials: true
```

Verwendung von [`fetch()`](/de/docs/Web/API/Window/fetch) mit Anmeldedaten:

```js
fetch(url, {
  credentials: "include",
});
```

Verwendung von [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) mit Anmeldedaten:

```js
const xhr = new XMLHttpRequest();
xhr.open("GET", "http://example.com/", true);
xhr.withCredentials = true;
xhr.send(null);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`XMLHttpRequest.withCredentials`](/de/docs/Web/API/XMLHttpRequest/withCredentials)
- [`Request()`](/de/docs/Web/API/Request/Request)
