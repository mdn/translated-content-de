---
title: Access-Control-Allow-Credentials
slug: Web/HTTP/Headers/Access-Control-Allow-Credentials
l10n:
  sourceCommit: 58ad1df59f2ffb9ecab4e27fe1bdf1eb5a55f89b
---

{{HTTPSidebar}}

Der **`Access-Control-Allow-Credentials`** Antwort-Header teilt Browsern mit, ob der Server erlaubt, dass Cross-Origin-HTTP-Anfragen Anmeldeinformationen enthalten.

Anmeldeinformationen sind Cookies, {{glossary("TLS")}}-Client-Zertifikate oder Authentifizierungs-Header, die einen Benutzernamen und ein Passwort enthalten. Standardmäßig werden diese Anmeldeinformationen nicht in Cross-Origin-Anfragen gesendet, da dies eine Website anfällig für {{glossary("CSRF")}}-Angriffe machen kann.

Ein Client kann verlangen, dass Anmeldeinformationen in Anfragen an andere Domänen eingeschlossen werden, auf verschiedene Weisen:

- Durch die Verwendung von {{domxref("Window/fetch", "fetch()")}}, indem die [`credentials`](/de/docs/Web/API/RequestInit#credentials) Option auf `"include"` gesetzt wird.
- Durch die Verwendung von {{domxref("XMLHttpRequest")}}, indem die {{domxref("XMLHttpRequest.withCredentials")}} Eigenschaft auf `true` gesetzt wird.
- Durch die Verwendung von {{domxref("EventSource()")}}, indem die {{domxref("EventSource.withCredentials")}} Eigenschaft auf `true` gesetzt wird.

Wenn der Client verlangt hat, dass Anmeldeinformationen einbezogen werden:

- Falls die Anfrage {{glossary("Preflight_request", "vorab gesichtet")}} wird, enthält die Vorab-Anfrage keine Anmeldeinformationen. Wenn die Antwort des Servers auf die Vorab-Anfrage den `Access-Control-Allow-Credentials` Header auf `true` setzt, wird die tatsächliche Anfrage Anmeldeinformationen enthalten: anderenfalls meldet der Browser einen Netzwerkfehler.

- Falls die Anfrage nicht vorab gesichtet wird, wird die Anfrage Anmeldeinformationen enthalten, und wenn die Antwort des Servers nicht den `Access-Control-Allow-Credentials` Header auf `true` setzt, meldet der Browser einen Netzwerkfehler.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Verbotener Header-Name")}}</th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Access-Control-Allow-Credentials: true
```

## Direktiven

- `true`
  - : Der einzige gültige Wert für diesen Header ist `true` (Groß-/Kleinschreibung beachten). Wenn Sie keine Anmeldeinformationen benötigen, lassen Sie diesen Header vollständig weg (statt seinen Wert auf `false` zu setzen).

## Beispiele

Anmeldeinformationen erlauben:

```http
Access-Control-Allow-Credentials: true
```

Verwendung von {{domxref("Window/fetch", "fetch()")}} mit Anmeldeinformationen:

```js
fetch(url, {
  credentials: "include",
});
```

Verwendung von {{domxref("XMLHttpRequest")}} mit Anmeldeinformationen:

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

- {{domxref("XMLHttpRequest.withCredentials")}}
- {{domxref("Request.Request()", "Request()")}}
