---
title: Access-Control-Expose-Headers
slug: Web/HTTP/Reference/Headers/Access-Control-Expose-Headers
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Der HTTP **`Access-Control-Expose-Headers`** {{Glossary("response_header", "Antwort-Header")}} ermöglicht es einem Server anzugeben, welche Antwort-Header für Skripte, die im Browser ausgeführt werden, im Rahmen einer Cross-Origin-Anfrage verfügbar gemacht werden sollen.

Standardmäßig werden nur die {{Glossary("CORS-safelisted_response_header", "CORS-sicheren Antwort-Header")}} exponiert. Damit Clients auf andere Header zugreifen können, muss der Server diese im `Access-Control-Expose-Headers`-Header auflisten.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungs-Header")}}</th>
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
  - : Eine Liste von null oder mehr durch Kommata getrennten [Header-Namen](/de/docs/Web/HTTP/Reference/Headers), auf die Clients in einer Antwort zugreifen dürfen.
    Diese sind _zusätzlich_ zu den {{Glossary("CORS-safelisted_response_header", "CORS-sicheren Antwort-Headern")}}.
- `*` (Wildcard)
  - : Jeder beliebige Header.
    Der Wert `*` zählt nur als spezieller Wildcard-Wert für Anfragen ohne Anmeldeinformationen (Anfragen ohne [HTTP-Cookies](/de/docs/Web/HTTP/Guides/Cookies) oder HTTP-Authentifizierungsinformationen).
    Bei Anfragen mit Anmeldeinformationen wird es als der literal Header-Name `*` behandelt.

## Beispiele

Die {{Glossary("CORS-safelisted_response_header", "CORS-sicheren Antwort-Header")}} sind: {{HTTPHeader("Cache-Control")}}, {{HTTPHeader("Content-Language")}}, {{HTTPHeader("Content-Length")}}, {{HTTPHeader("Content-Type")}}, {{HTTPHeader("Expires")}}, {{HTTPHeader("Last-Modified")}}, {{HTTPHeader("Pragma")}}. Um einen nicht CORS-sicheren Antwort-Header zu exponieren, kann man folgendes angeben:

```http
Access-Control-Expose-Headers: Content-Encoding
```

Um zusätzlich einen benutzerdefinierten Header wie `Kuma-Revision` zu exponieren, können Sie mehrere durch Komma getrennte Header angeben:

```http
Access-Control-Expose-Headers: Content-Encoding, Kuma-Revision
```

Für Anfragen ohne Anmeldeinformationen kann ein Server auch mit einem Wildcard-Wert antworten:

```http
Access-Control-Expose-Headers: *
```

Ein Server kann auch für Anfragen mit Anmeldeinformationen mit dem Wert `*` antworten, wobei in diesem Fall auf einen Header mit dem Namen `*` verwiesen wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Access-Control-Allow-Headers")}}
- {{HTTPHeader("Access-Control-Allow-Origin")}}
