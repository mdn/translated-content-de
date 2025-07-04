---
title: Access-Control-Expose-Headers header
short-title: Access-Control-Expose-Headers
slug: Web/HTTP/Reference/Headers/Access-Control-Expose-Headers
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP **`Access-Control-Expose-Headers`** {{Glossary("response_header", "Antwort-Header")}} ermöglicht einem Server anzugeben, welche Antwort-Header für Skripte, die im Browser als Antwort auf eine Cross-Origin-Anfrage ausgeführt werden, verfügbar gemacht werden sollen.

Standardmäßig werden nur die {{Glossary("CORS-safelisted_response_header", "CORS-safelisted Antwort-Header")}} freigegeben. Damit Clients auf andere Header zugreifen können, muss der Server sie mithilfe des `Access-Control-Expose-Headers` Headers auflisten.

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
Access-Control-Expose-Headers: [<header-name>[, <header-name>]*]
Access-Control-Expose-Headers: *
```

## Direktiven

- `<header-name>`
  - : Eine Liste von null oder mehr durch Kommas getrennten [Headernamen](/de/docs/Web/HTTP/Reference/Headers), auf die Clients in einer Antwort zugreifen dürfen.
    Diese sind _zusätzlich_ zu den {{Glossary("CORS-safelisted_response_header", "CORS-safelisted Antwort-Headern")}}.
- `*` (Wildcard)
  - : Beliebiger Header.
    Der Wert `*` zählt nur als spezieller Wildcard-Wert für Anfragen ohne Anmeldeinformationen (Anfragen ohne [HTTP-Cookies](/de/docs/Web/HTTP/Guides/Cookies) oder HTTP-Authentifizierungsinformationen).
    Bei Anfragen mit Anmeldeinformationen wird es als der wörtliche Headername `*` behandelt.

## Beispiele

Die {{Glossary("CORS-safelisted_response_header", "CORS-safelisted Antwort-Header")}} sind: {{HTTPHeader("Cache-Control")}}, {{HTTPHeader("Content-Language")}}, {{HTTPHeader("Content-Length")}}, {{HTTPHeader("Content-Type")}}, {{HTTPHeader("Expires")}}, {{HTTPHeader("Last-Modified")}}, {{HTTPHeader("Pragma")}}. Um einen nicht-CORS-safelisted Antwort-Header freizugeben, können Sie angeben:

```http
Access-Control-Expose-Headers: Content-Encoding
```

Um zusätzlich einen benutzerdefinierten Header freizugeben, wie zum Beispiel `Kuma-Revision`, können Sie mehrere Header durch ein Komma getrennt angeben:

```http
Access-Control-Expose-Headers: Content-Encoding, Kuma-Revision
```

Für Anfragen ohne Anmeldeinformationen kann ein Server auch mit einem Wildcard-Wert antworten:

```http
Access-Control-Expose-Headers: *
```

Ein Server kann auch mit dem Wert `*` für Anfragen mit Anmeldeinformationen antworten, in diesem Fall würde es sich jedoch auf einen Header namens `*` beziehen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Access-Control-Allow-Headers")}}
- {{HTTPHeader("Access-Control-Allow-Origin")}}
