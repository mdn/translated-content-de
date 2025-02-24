---
title: Access-Control-Allow-Credentials
slug: Web/HTTP/Headers/Access-Control-Allow-Credentials
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}

Der HTTP-**`Access-Control-Allow-Credentials`**-{{Glossary("response_header", "Antwort-Header")}} teilt Browsern mit, ob der Server erlaubt, dass Anmeldedaten in Cross-Origin-HTTP-Anfragen enthalten sind.

Anmeldedaten umfassen Cookies, {{Glossary("TLS", "Transport Layer Security (TLS)")}}-Client-Zertifikate oder Authentifizierungs-Header mit einem Benutzernamen und Passwort. Standardmäßig werden diese Anmeldedaten nicht in Cross-Origin-Anfragen gesendet, und dies zu tun, kann eine Website anfällig für {{Glossary("CSRF", "Cross-Site Request Forgery (CSRF)")}}-Angriffe machen.

Ein Client kann auf verschiedene Weise darum bitten, dass Anmeldedaten in Cross-Site-Anfragen enthalten sind:

- Durch die Nutzung von [`fetch()`](/de/docs/Web/API/Window/fetch), indem die [`credentials`](/de/docs/Web/API/RequestInit#credentials)-Option auf `"include"` gesetzt wird.
- Durch die Nutzung von [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest), indem die [`XMLHttpRequest.withCredentials`](/de/docs/Web/API/XMLHttpRequest/withCredentials)-Eigenschaft auf `true` gesetzt wird.
- Durch die Nutzung von [`EventSource()`](/de/docs/Web/API/EventSource), indem die [`EventSource.withCredentials`](/de/docs/Web/API/EventSource/withCredentials)-Eigenschaft auf `true` gesetzt wird.

Wenn Anmeldedaten enthalten sind:

- Für {{Glossary("Preflight_request", "voreingeforderte")}} Anfragen: Die Voreingabe-Anfrage enthält keine Anmeldedaten.
  Wenn die Antwort des Servers auf die Voreingabe-Anfrage den `Access-Control-Allow-Credentials`-Header auf `true` setzt, dann enthält die eigentliche Anfrage Anmeldedaten; andernfalls meldet der Browser einen Netzwerkfehler.
- Für nicht voreingeforderte Anfragen: Die Anfrage enthält Anmeldedaten, und wenn die Antwort des Servers den `Access-Control-Allow-Credentials`-Header nicht auf `true` setzt, meldet der Browser einen Netzwerkfehler.

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
  - : Der Server erlaubt, dass Anmeldedaten in Cross-Origin-HTTP-Anfragen enthalten sind.
    Dies ist der einzige gültige Wert für diesen Header und dieser ist case-sensitive.
    Wenn Sie keine Anmeldedaten benötigen, lassen Sie diesen Header ganz weg, anstatt seinen Wert auf `false` zu setzen.

## Beispiele

Anmeldedaten zulassen:

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
