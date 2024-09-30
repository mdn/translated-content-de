---
title: Access-Control-Allow-Credentials
slug: Web/HTTP/Headers/Access-Control-Allow-Credentials
l10n:
  sourceCommit: 58ad1df59f2ffb9ecab4e27fe1bdf1eb5a55f89b
---

{{HTTPSidebar}}

Der **`Access-Control-Allow-Credentials`** Antwortheader teilt Browsern mit, ob der Server erlaubt, dass Cross-Origin HTTP-Anfragen Anmeldeinformationen beinhalten.

Anmeldeinformationen sind Cookies, [TLS](/de/docs/Glossary/TLS)-Client-Zertifikate oder Authentifizierungsheader, die einen Benutzernamen und ein Passwort enthalten. Standardmäßig werden diese Anmeldeinformationen in Cross-Origin-Anfragen nicht gesendet, da dies eine Website anfällig für [CSRF](/de/docs/Glossary/CSRF)-Angriffe machen kann.

Ein Client kann auf verschiedene Weise verlangen, dass Anmeldeinformationen in Cross-Site-Anfragen enthalten sein sollen:

- Verwendung von [`fetch()`](/de/docs/Web/API/Window/fetch), indem die [`credentials`](/de/docs/Web/API/RequestInit#credentials)-Option auf `"include"` gesetzt wird.
- Verwendung von [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest), indem die [`XMLHttpRequest.withCredentials`](/de/docs/Web/API/XMLHttpRequest/withCredentials)-Eigenschaft auf `true` gesetzt wird.
- Verwendung von [`EventSource()`](/de/docs/Web/API/EventSource), indem die [`EventSource.withCredentials`](/de/docs/Web/API/EventSource/withCredentials)-Eigenschaft auf `true` gesetzt wird.

Wenn der Client verlangt hat, dass Anmeldeinformationen enthalten sein sollen:

- Ist die Anfrage [vorab geprüft](/de/docs/Glossary/Preflight_request), dann beinhaltet die Vorab-Anfrage keine Anmeldeinformationen. Setzt die Serverantwort auf die Vorab-Anfrage den `Access-Control-Allow-Credentials`-Header auf `true`, so wird die eigentliche Anfrage Anmeldeinformationen enthalten: andernfalls meldet der Browser einen Netzwerkfehler.

- Ist die Anfrage nicht vorab geprüft, dann wird die Anfrage Anmeldeinformationen enthalten, und wenn die Serverantwort nicht den `Access-Control-Allow-Credentials`-Header auf `true` setzt, meldet der Browser einen Netzwerkfehler.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>[Antwortheader](/de/docs/Glossary/Response_header)</td>
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
  - : Der einzige gültige Wert für diesen Header ist `true` (Groß-/Kleinschreibung beachten). Wenn Sie keine Anmeldeinformationen benötigen, lassen Sie diesen Header komplett weg (anstatt seinen Wert auf `false` zu setzen).

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
