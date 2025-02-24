---
title: Access-Control-Request-Headers
slug: Web/HTTP/Headers/Access-Control-Request-Headers
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}

Der HTTP **`Access-Control-Request-Headers`** {{Glossary("request_header", "Anforderungsheader")}} wird von Browsern bei der Ausgabe einer {{Glossary("preflight_request", "Voranfrage")}} verwendet, um dem Server mitzuteilen, welche [HTTP-Header](/de/docs/Web/HTTP/Headers) der Client senden könnte, wenn die eigentliche Anfrage gestellt wird (wie z. B. mit [`fetch()`](/de/docs/Web/API/Window/fetch) oder [`XMLHttpRequest.setRequestHeader()`](/de/docs/Web/API/XMLHttpRequest/setRequestHeader)). Der ergänzende serverseitige Header von {{HTTPHeader("Access-Control-Allow-Headers")}} wird auf diesen clientseitigen Header antworten.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Anforderungsheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungsheader")}}</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Access-Control-Request-Headers: <header-name>,<header-name>,…
```

## Direktiven

- `<header-name>`
  - : Eine sortierte Liste von eindeutigen, kommagetrennten, in Kleinbuchstaben geschriebenen [HTTP-Headern](/de/docs/Web/HTTP/Headers), die in der Anfrage enthalten sind.

## Beispiele

```http
Access-Control-Request-Headers: content-type,x-pingother
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Access-Control-Request-Method")}}
