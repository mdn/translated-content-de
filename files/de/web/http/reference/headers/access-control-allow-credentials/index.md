---
title: Access-Control-Allow-Credentials header
short-title: Access-Control-Allow-Credentials
slug: Web/HTTP/Reference/Headers/Access-Control-Allow-Credentials
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}

Der HTTP **`Access-Control-Allow-Credentials`** {{Glossary("response_header", "Antwort-Header")}} informiert Browser darüber, ob der Server erlaubt, dass Anmeldeinformationen in Cross-Origin HTTP-Anfragen enthalten sind.

Anmeldeinformationen umfassen Cookies, {{Glossary("TLS", "Transport Layer Security (TLS)")}} Client-Zertifikate oder Authentifizierungsheader, die einen Benutzernamen und ein Passwort enthalten.
Standardmäßig werden diese Anmeldeinformationen in Cross-Origin-Anfragen nicht gesendet, da dies eine Webseite anfällig für {{Glossary("CSRF", "Cross-Site Request Forgery (CSRF)")}}-Angriffe machen kann.

Ein Client kann auf verschiedene Weise verlangen, dass Anmeldeinformationen in Cross-Site-Anfragen enthalten sind:

- Durch die Verwendung von [`fetch()`](/de/docs/Web/API/Window/fetch), indem die [`credentials`](/de/docs/Web/API/RequestInit#credentials)-Option auf `"include"` gesetzt wird.
- Durch die Verwendung von [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest), indem die [`XMLHttpRequest.withCredentials`](/de/docs/Web/API/XMLHttpRequest/withCredentials)-Eigenschaft auf `true` gesetzt wird.
- Durch die Verwendung von [`EventSource()`](/de/docs/Web/API/EventSource), indem die [`EventSource.withCredentials`](/de/docs/Web/API/EventSource/withCredentials)-Eigenschaft auf `true` gesetzt wird.

Wenn Anmeldeinformationen enthalten sind:

- Für {{Glossary("Preflight_request", "Preflight")}}-Anfragen: Die Preflight-Anfrage enthält keine Anmeldeinformationen.
  Wenn die Serverantwort auf die Preflight-Anfrage den `Access-Control-Allow-Credentials`-Header auf `true` setzt, wird die eigentliche Anfrage Anmeldeinformationen enthalten. Andernfalls meldet der Browser einen Netzwerkfehler.
- Für nicht vorab geprüfte Anfragen: Die Anfrage enthält Anmeldeinformationen, und wenn die Serverantwort den `Access-Control-Allow-Credentials`-Header nicht auf `true` setzt, meldet der Browser einen Netzwerkfehler.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anfrage-Header")}}</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Access-Control-Allow-Credentials: true
```

## Direktiven

- `true`
  - : Der Server erlaubt, dass Anmeldeinformationen in Cross-Origin HTTP-Anfragen enthalten sind.
    Dies ist der einzige gültige Wert für diesen Header und er ist case-sensitive.
    Wenn Sie keine Anmeldeinformationen benötigen, sollten Sie diesen Header vollständig weglassen, anstatt den Wert auf `false` zu setzen.

## Beispiele

Anmeldeinformationen erlauben:

```http
Access-Control-Allow-Credentials: true
```

Verwendung von [`fetch()`](/de/docs/Web/API/Window/fetch) mit Anmeldeinformationen:

```js
fetch(url, {
  credentials: "include",
});
```

Verwendung von [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) mit Anmeldeinformationen:

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
