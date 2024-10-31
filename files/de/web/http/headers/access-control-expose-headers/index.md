---
title: Access-Control-Expose-Headers
slug: Web/HTTP/Headers/Access-Control-Expose-Headers
l10n:
  sourceCommit: 92b03e46cef6be37de60799363e3e33e3415b491
---

{{HTTPSidebar}}

Der HTTP **`Access-Control-Expose-Headers`** {{Glossary("response_header", "Antwort-Header")}} ermöglicht es einem Server anzugeben, welche Antwort-Header für Skripte, die im Browser laufen, als Reaktion auf eine Cross-Origin-Anfrage verfügbar gemacht werden sollen.

Standardmäßig werden nur die {{Glossary("CORS-safelisted_response_header", "CORS-Whitelist-Antwort-Header")}} freigegeben. Damit Clients auf andere Header zugreifen können, muss der Server diese mittels des Headers `Access-Control-Expose-Headers` auflisten.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
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
Access-Control-Expose-Headers: [<header-name>[, <header-name>]*]
Access-Control-Expose-Headers: *
```

## Direktiven

- `<header-name>`
  - : Eine Liste von null oder mehr durch Komma getrennten [Header-Namen](/de/docs/Web/HTTP/Headers), auf die Clients in einer Antwort zugreifen dürfen.
    Diese sind _zusätzlich_ zu den {{Glossary("CORS-safelisted_response_header", "CORS-Whitelist-Antwort-Headern")}}.
- `*` (Wildcard)
  - : Jeder Header.
    Der Wert `*` zählt nur als spezieller Wildcard-Wert für Anfragen ohne Anmeldedaten (Anfragen ohne [HTTP-Cookies](/de/docs/Web/HTTP/Cookies) oder HTTP-Authentifizierungsinformationen).
    Bei Anfragen mit Anmeldedaten wird er als literaler Header-Name `*` behandelt.

## Beispiele

Die {{Glossary("CORS-safelisted_response_header", "CORS-Whitelist-Antwort-Header")}} sind: {{HTTPHeader("Cache-Control")}}, {{HTTPHeader("Content-Language")}}, {{HTTPHeader("Content-Length")}}, {{HTTPHeader("Content-Type")}}, {{HTTPHeader("Expires")}}, {{HTTPHeader("Last-Modified")}}, {{HTTPHeader("Pragma")}}. Um einen nicht-CORS-Whitelist-Antwort-Header freizugeben, können Sie angeben:

```http
Access-Control-Expose-Headers: Content-Encoding
```

Um zusätzlich einen benutzerdefinierten Header, wie `Kuma-Revision`, freizugeben, können Sie mehrere Header durch ein Komma getrennt spezifizieren:

```http
Access-Control-Expose-Headers: Content-Encoding, Kuma-Revision
```

Für Anfragen ohne Anmeldedaten kann ein Server auch mit einem Wildcard-Wert antworten:

```http
Access-Control-Expose-Headers: *
```

Ein Server kann auch für Anfragen mit Anmeldedaten mit dem Wert `*` antworten, aber in diesem Fall würde er sich auf einen Header mit dem Namen `*` beziehen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Access-Control-Allow-Headers")}}
- {{HTTPHeader("Access-Control-Allow-Origin")}}
