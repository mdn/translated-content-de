---
title: Access-Control-Allow-Credentials
slug: Web/HTTP/Headers/Access-Control-Allow-Credentials
l10n:
  sourceCommit: 58ad1df59f2ffb9ecab4e27fe1bdf1eb5a55f89b
---

{{HTTPSidebar}}

Der **`Access-Control-Allow-Credentials`** Antwort-Header teilt Browsern mit, ob der Server erlaubt, dass Cross-Origin HTTP-Anfragen Anmeldeinformationen enthalten.

Anmeldeinformationen sind Cookies, {{glossary("TLS")}}-Client-Zertifikate oder Authentifizierungs-Header, die einen Benutzernamen und ein Passwort enthalten. Standardmäßig werden diese Anmeldeinformationen bei Cross-Origin-Anfragen nicht mitgesendet, da dies eine Website anfällig für {{glossary("CSRF")}}-Angriffe machen kann.

Ein Client kann auf verschiedene Weise verlangen, dass Anmeldeinformationen in Anfragen über Seiten hinweg enthalten sein sollen:

- Durch die Verwendung von {{domxref("Window/fetch", "fetch()")}}, indem die [`credentials`](/de/docs/Web/API/RequestInit#credentials) Option auf `"include"` gesetzt wird.
- Durch die Verwendung von {{domxref("XMLHttpRequest")}}, indem die {{domxref("XMLHttpRequest.withCredentials")}} Eigenschaft auf `true` gesetzt wird.
- Durch die Verwendung von {{domxref("EventSource()")}}, indem die {{domxref("EventSource.withCredentials")}} Eigenschaft auf `true` gesetzt wird.

Falls der Client angefordert hat, dass Anmeldeinformationen einbezogen werden:

- Wenn die Anfrage {{glossary("Preflight_request", "preflighted")}} ist, dann enthält die Preflight-Anfrage keine Anmeldeinformationen. Wenn die Serverantwort auf die Preflight-Anfrage den `Access-Control-Allow-Credentials` Header auf `true` setzt, wird die eigentliche Anfrage Anmeldeinformationen enthalten; ansonsten meldet der Browser einen Netzwerkfehler.

- Wenn die Anfrage nicht preflighted ist, dann wird die Anfrage Anmeldeinformationen enthalten, und wenn die Serverantwort den `Access-Control-Allow-Credentials` Header nicht auf `true` setzt, meldet der Browser einen Netzwerkfehler.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Access-Control-Allow-Credentials: true
```

## Anweisungen

- `true`
  - : Der einzige gültige Wert für diesen Header ist `true` (groß-/kleinschreibungssensitiv). Wenn Sie keine Anmeldeinformationen benötigen, lassen Sie diesen Header ganz weg (anstatt seinen Wert auf `false` zu setzen).

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

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- {{domxref("XMLHttpRequest.withCredentials")}}
- {{domxref("Request.Request()", "Request()")}}
