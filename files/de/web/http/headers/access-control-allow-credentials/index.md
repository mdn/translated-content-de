---
title: Access-Control-Allow-Credentials
slug: Web/HTTP/Headers/Access-Control-Allow-Credentials
l10n:
  sourceCommit: 58ad1df59f2ffb9ecab4e27fe1bdf1eb5a55f89b
---

{{HTTPSidebar}}

Der **`Access-Control-Allow-Credentials`** Antwort-Header teilt Browsern mit, ob der Server es erlaubt, dass Cross-Origin-HTTP-Anfragen Anmeldeinformationen enthalten.

Anmeldeinformationen sind Cookies, [TLS](/de/docs/Glossary/TLS) Client-Zertifikate oder Authentifizierungs-Header, die einen Benutzernamen und ein Passwort enthalten. Standardmäßig werden diese Anmeldeinformationen bei Cross-Origin-Anfragen nicht gesendet, da dies eine Seite anfällig für [CSRF](/de/docs/Glossary/CSRF) Angriffe machen kann.

Ein Client kann auf verschiedene Weise verlangen, dass Anmeldeinformationen bei Cross-Site-Anfragen eingeschlossen werden:

- Verwendung von [`fetch()`](/de/docs/Web/API/Window/fetch), durch Setzen der [`credentials`](/de/docs/Web/API/RequestInit#credentials) Option auf `"include"`.
- Verwendung von [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest), durch Setzen der [`XMLHttpRequest.withCredentials`](/de/docs/Web/API/XMLHttpRequest/withCredentials) Eigenschaft auf `true`.
- Verwendung von [`EventSource()`](/de/docs/Web/API/EventSource), durch Setzen der [`EventSource.withCredentials`](/de/docs/Web/API/EventSource/withCredentials) Eigenschaft auf `true`.

Wenn der Client angefordert hat, dass Anmeldeinformationen einbezogen werden:

- Wenn die Anfrage [vorgeprüft](/de/docs/Glossary/Preflight_request) wird, dann enthält die Vorab-Anfrage keine Anmeldeinformationen. Wenn die Serverantwort auf die Vorab-Anfrage den `Access-Control-Allow-Credentials` Header auf `true` setzt, dann wird die tatsächliche Anfrage Anmeldeinformationen enthalten: andernfalls meldet der Browser einen Netzwerkfehler.

- Wenn die Anfrage nicht vorgeprüft wird, enthält die Anfrage Anmeldeinformationen, und wenn die Serverantwort den `Access-Control-Allow-Credentials` Header nicht auf `true` setzt, meldet der Browser einen Netzwerkfehler.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>[Antwort-Header](/de/docs/Glossary/Response_header)</td>
    </tr>
    <tr>
      <th scope="row">[Verbotener Header-Name](/de/docs/Glossary/Forbidden_header_name)</th>
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
  - : Der einzige gültige Wert für diesen Header ist `true` (Groß-/Kleinschreibung beachten). Wenn Sie keine Anmeldeinformationen benötigen, lassen Sie diesen Header vollständig weg (anstatt seinen Wert auf `false` zu setzen).

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
