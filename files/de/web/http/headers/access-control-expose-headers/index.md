---
title: Access-Control-Expose-Headers
slug: Web/HTTP/Headers/Access-Control-Expose-Headers
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}

Der HTTP **`Access-Control-Expose-Headers`** {{Glossary("response_header", "Antwort-Header")}} ermöglicht es einem Server, anzugeben, welche Antwort-Header für Skripte im Browser im Rahmen einer Cross-Origin-Anfrage zugänglich gemacht werden sollen.

Standardmäßig sind nur die {{Glossary("CORS-safelisted_response_header", "CORS-sicherheitsgelisteten Antwort-Header")}} verfügbar. Damit Clients auf andere Header zugreifen können, muss der Server sie im `Access-Control-Expose-Headers`-Header aufführen.

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
  - : Eine Liste von null oder mehr durch Kommas getrennten [Header-Namen](/de/docs/Web/HTTP/Headers), auf die Clients bei einer Antwort zugreifen dürfen.
    Diese sind _zusätzlich_ zu den {{Glossary("CORS-safelisted_response_header", "CORS-sicherheitsgelisteten Antwort-Headern")}}.
- `*` (Wildcard)
  - : Jeder Header.
    Der Wert `*` zählt nur als spezieller Wildcard-Wert für Anfragen ohne Anmeldeinformationen (Anfragen ohne [HTTP-Cookies](/de/docs/Web/HTTP/Cookies) oder HTTP-Authentifizierungsinformationen).
    Bei Anfragen mit Anmeldeinformationen wird er als der wörtliche Header-Name `*` behandelt.

## Beispiele

Die {{Glossary("CORS-safelisted_response_header", "CORS-sicherheitsgelisteten Antwort-Header")}} sind: {{HTTPHeader("Cache-Control")}}, {{HTTPHeader("Content-Language")}}, {{HTTPHeader("Content-Length")}}, {{HTTPHeader("Content-Type")}}, {{HTTPHeader("Expires")}}, {{HTTPHeader("Last-Modified")}}, {{HTTPHeader("Pragma")}}. Um einen nicht-CORS-sicherheitsgelisteten Antwort-Header freizugeben, können Sie angeben:

```http
Access-Control-Expose-Headers: Content-Encoding
```

Um zusätzlich einen benutzerdefinierten Header wie `Kuma-Revision` freizugeben, können Sie mehrere Header durch Komma getrennt angeben:

```http
Access-Control-Expose-Headers: Content-Encoding, Kuma-Revision
```

Für Anfragen ohne Anmeldeinformationen kann ein Server auch mit einem Wildcard-Wert antworten:

```http
Access-Control-Expose-Headers: *
```

Ein Server kann auch mit dem Wert `*` für Anfragen mit Anmeldeinformationen antworten, aber in diesem Fall würde es sich auf einen Header mit dem Namen `*` beziehen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Access-Control-Allow-Headers")}}
- {{HTTPHeader("Access-Control-Allow-Origin")}}
