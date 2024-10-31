---
title: Access-Control-Allow-Credentials
slug: Web/HTTP/Headers/Access-Control-Allow-Credentials
l10n:
  sourceCommit: 92b03e46cef6be37de60799363e3e33e3415b491
---

{{HTTPSidebar}}

Der HTTP-**`Access-Control-Allow-Credentials`**-{{Glossary("response_header", "Antwort-Header")}} teilt Browsern mit, ob der Server zulässt, dass Anmeldedaten in Cross-Origin-HTTP-Anfragen enthalten sind.

Zu den Anmeldedaten gehören Cookies, {{Glossary("TLS", "Transport Layer Security (TLS)")}}-Client-Zertifikate oder Authentifizierungs-Header, die einen Benutzernamen und ein Passwort enthalten. Standardmäßig werden diese Anmeldedaten nicht in Cross-Origin-Anfragen gesendet, da dies eine Website für {{Glossary("CSRF", "Cross-Site Request Forgery (CSRF)")}}-Angriffe anfällig machen kann.

Ein Client kann auf verschiedene Weise um die Einbeziehung von Anmeldedaten in Cross-Site-Anfragen bitten:

- Durch die Verwendung von [`fetch()`](/de/docs/Web/API/Window/fetch), indem die [`credentials`](/de/docs/Web/API/RequestInit#credentials)-Option auf `"include"` gesetzt wird.
- Durch die Verwendung von [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest), indem die [`XMLHttpRequest.withCredentials`](/de/docs/Web/API/XMLHttpRequest/withCredentials)-Eigenschaft auf `true` gesetzt wird.
- Durch die Verwendung von [`EventSource()`](/de/docs/Web/API/EventSource), indem die [`EventSource.withCredentials`](/de/docs/Web/API/EventSource/withCredentials)-Eigenschaft auf `true` gesetzt wird.

Wenn Anmeldedaten enthalten sind:

- Für {{Glossary("Preflight_request", "vorgeprüfte")}} Anfragen: Die Vorab-Anfrage enthält keine Anmeldedaten.
  Wenn die Antwort des Servers auf die Vorab-Anfrage den `Access-Control-Allow-Credentials`-Header auf `true` setzt, dann wird die eigentliche Anfrage Anmeldedaten enthalten; andernfalls meldet der Browser einen Netzwerkfehler.
- Für nicht vorgeprüfte Anfragen: Die Anfrage enthält Anmeldedaten, und wenn die Antwort des Servers den `Access-Control-Allow-Credentials`-Header nicht auf `true` setzt, meldet der Browser einen Netzwerkfehler.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
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
  - : Der Server erlaubt es, dass Anmeldedaten in Cross-Origin-HTTP-Anfragen enthalten sind.
    Dies ist der einzige gültige Wert für diesen Header und er ist groß- und kleinschreibungsempfindlich.
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
