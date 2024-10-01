---
title: Access-Control-Expose-Headers
slug: Web/HTTP/Headers/Access-Control-Expose-Headers
l10n:
  sourceCommit: 5bd9fe2b25c6eee2a14d0406ce7116998fa48c13
---

{{HTTPSidebar}}

Der **`Access-Control-Expose-Headers`** Antwort-Header ermöglicht es einem Server anzugeben, welche Antwort-Header für Skripte im Browser zugänglich sein sollen, als Antwort auf eine Cross-Origin-Anfrage.

Standardmäßig sind nur die {{Glossary("CORS-safelisted_response_header", "CORS-safelisted response headers")}} freigegeben. Damit Clients auf andere Header zugreifen können, muss der Server diese durch den `Access-Control-Expose-Headers` Header auflisten.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Access-Control-Expose-Headers: [<header-name>[, <header-name>]*]
Access-Control-Expose-Headers: *
```

## Anweisungen

- \<header-name>
  - : Eine Liste von null oder mehr durch Kommas getrennten [Header-Namen](/de/docs/Web/HTTP/Headers), auf die Clients von einer Antwort zugreifen dürfen. Diese sind _zusätzlich_ zu den {{Glossary("CORS-safelisted_response_header", "CORS-safelisted response headers")}}.
- `*` (Wildcard)
  - : Der Wert `*` zählt nur als spezieller Wildcard-Wert für Anfragen ohne Anmeldedaten (Anfragen ohne [HTTP-Cookies](/de/docs/Web/HTTP/Cookies) oder HTTP-Authentifizierungsinformationen).
    Bei Anfragen mit Anmeldedaten wird er als der buchstäbliche Header-Name `*` behandelt.

## Beispiele

Die {{Glossary("CORS-safelisted_response_header", "CORS-safelisted response headers")}} sind: {{HTTPHeader("Cache-Control")}}, {{HTTPHeader("Content-Language")}}, {{HTTPHeader("Content-Length")}}, {{HTTPHeader("Content-Type")}}, {{HTTPHeader("Expires")}}, {{HTTPHeader("Last-Modified")}}, {{HTTPHeader("Pragma")}}. Um einen nicht-CORS-safelisted response header freizugeben, können Sie folgendes spezifizieren:

```http
Access-Control-Expose-Headers: Content-Encoding
```

Um zusätzlich einen benutzerdefinierten Header, wie `Kuma-Revision`, freizugeben, können Sie mehrere durch Kommas getrennte Header angeben:

```http
Access-Control-Expose-Headers: Content-Encoding, Kuma-Revision
```

Für Anfragen ohne Anmeldedaten kann ein Server auch mit einem Wildcard-Wert antworten:

```http
Access-Control-Expose-Headers: *
```

Ein Server kann auch mit dem `*` Wert für Anfragen mit Anmeldedaten antworten, aber in diesem Fall würde er sich auf einen Header mit dem Namen `*` beziehen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Access-Control-Allow-Headers")}}
- {{HTTPHeader("Access-Control-Allow-Origin")}}
