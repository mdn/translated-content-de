---
title: Access-Control-Allow-Credentials header
short-title: Access-Control-Allow-Credentials
slug: Web/HTTP/Reference/Headers/Access-Control-Allow-Credentials
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP-**`Access-Control-Allow-Credentials`**-{{Glossary("response_header", "Antwort-Header")}} teilt Browsern mit, ob der Server das Einbeziehen von Anmeldeinformationen in Cross-Origin-HTTP-Anfragen erlaubt.

Anmeldeinformationen umfassen Cookies, {{Glossary("TLS", "Transport Layer Security (TLS)")}}-Client-Zertifikate oder Authentifizierungs-Header, die einen Benutzernamen und ein Passwort enthalten. Standardmäßig werden diese Anmeldeinformationen nicht in Cross-Origin-Anfragen gesendet, da dies eine Website anfällig für {{Glossary("CSRF", "Cross-Site Request Forgery (CSRF)")}}-Angriffe machen kann.

Ein Client kann auf verschiedene Weise verlangen, dass Anmeldeinformationen in abteilungsübergreifende Anfragen einbezogen werden:

- Verwendung von [`fetch()`](/de/docs/Web/API/Window/fetch), indem die [`credentials`](/de/docs/Web/API/RequestInit#credentials)-Option auf `"include"` gesetzt wird.
- Verwendung von [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest), indem die [`XMLHttpRequest.withCredentials`](/de/docs/Web/API/XMLHttpRequest/withCredentials)-Eigenschaft auf `true` gesetzt wird.
- Verwendung von [`EventSource()`](/de/docs/Web/API/EventSource), indem die [`EventSource.withCredentials`](/de/docs/Web/API/EventSource/withCredentials)-Eigenschaft auf `true` gesetzt wird.

Wenn Anmeldeinformationen einbezogen werden:

- Für {{Glossary("Preflight_request", "Preflighted-Anfragen")}}: Die Preflight-Anfrage enthält keine Anmeldeinformationen.
  Wenn die Antwort des Servers auf die Preflight-Anfrage den `Access-Control-Allow-Credentials`-Header auf `true` setzt, wird die tatsächliche Anfrage Anmeldeinformationen enthalten; andernfalls meldet der Browser einen Netzwerkfehler.
- Für nicht-preflighted Anfragen: Die Anfrage wird Anmeldeinformationen enthalten, und wenn die Antwort des Servers den `Access-Control-Allow-Credentials`-Header nicht auf `true` setzt, meldet der Browser einen Netzwerkfehler.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotene Anforderungs-Header")}}</th>
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
  - : Der Server erlaubt, dass Anmeldeinformationen in Cross-Origin-HTTP-Anfragen einbezogen werden.
    Dies ist der einzige gültige Wert für diesen Header und ist case-sensitive.
    Wenn Sie keine Anmeldeinformationen benötigen, lassen Sie diesen Header vollständig weg, anstatt seinen Wert auf `false` zu setzen.

## Beispiele

Erlauben von Anmeldeinformationen:

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
