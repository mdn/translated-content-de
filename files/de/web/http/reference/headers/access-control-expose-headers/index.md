---
title: Access-Control-Expose-Headers header
short-title: Access-Control-Expose-Headers
slug: Web/HTTP/Reference/Headers/Access-Control-Expose-Headers
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}

Der HTTP **`Access-Control-Expose-Headers`** {{Glossary("response_header", "Antwort-Header")}} ermöglicht es einem Server anzugeben, welche Antwort-Header den in einem Browser laufenden Skripten im Rahmen einer Cross-Origin-Anfrage zugänglich gemacht werden sollen.

Standardmäßig werden nur die {{Glossary("CORS-safelisted_response_header", "CORS-sicheren Antwort-Header")}} offengelegt. Damit Clients auf andere Header zugreifen können, muss der Server diese im `Access-Control-Expose-Headers` Header auflisten.

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
  - : Eine Liste von null oder mehr durch Kommas getrennte [Header-Namen](/de/docs/Web/HTTP/Reference/Headers), auf die Clients in einer Antwort zugreifen dürfen.
    Diese sind _zusätzlich_ zu den {{Glossary("CORS-safelisted_response_header", "CORS-sicheren Antwort-Headern")}}.
- `*` (Wildcard)
  - : Jeder Header.
    Der Wert `*` zählt nur als spezieller Wildcard-Wert für Anfragen ohne Berechtigungsnachweise (Anfragen ohne [HTTP-Cookies](/de/docs/Web/HTTP/Guides/Cookies) oder HTTP-Authentifizierungsinformationen).
    Bei Anfragen mit Berechtigungsnachweisen wird es als der wörtliche Header-Name `*` behandelt.

## Beispiele

Die {{Glossary("CORS-safelisted_response_header", "CORS-sicheren Antwort-Header")}} sind: {{HTTPHeader("Cache-Control")}}, {{HTTPHeader("Content-Language")}}, {{HTTPHeader("Content-Length")}}, {{HTTPHeader("Content-Type")}}, {{HTTPHeader("Expires")}}, {{HTTPHeader("Last-Modified")}}, {{HTTPHeader("Pragma")}}. Um einen nicht CORS-sicheren Antwort-Header offenzulegen, können Sie Folgendes angeben:

```http
Access-Control-Expose-Headers: Content-Encoding
```

Um zusätzlich einen benutzerdefinierten Header wie `Kuma-Revision` offenzulegen, können Sie mehrere durch Kommas getrennte Header angeben:

```http
Access-Control-Expose-Headers: Content-Encoding, Kuma-Revision
```

Für Anfragen ohne Berechtigungsnachweise kann ein Server auch mit einem Wildcard-Wert antworten:

```http
Access-Control-Expose-Headers: *
```

Ein Server kann auch mit dem Wert `*` bei Anfragen mit Berechtigungsnachweisen antworten, aber in diesem Fall würde er sich auf einen Header mit dem Namen `*` beziehen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Access-Control-Allow-Headers")}}
- {{HTTPHeader("Access-Control-Allow-Origin")}}
