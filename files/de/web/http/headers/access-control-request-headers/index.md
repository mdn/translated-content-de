---
title: Access-Control-Request-Headers
slug: Web/HTTP/Headers/Access-Control-Request-Headers
l10n:
  sourceCommit: 92b03e46cef6be37de60799363e3e33e3415b491
---

{{HTTPSidebar}}

Der HTTP **`Access-Control-Request-Headers`** {{Glossary("request_header", "Request-Header")}} wird von Browsern verwendet, wenn eine {{Glossary("preflight_request", "Preflight-Anfrage")}} gestellt wird, um dem Server mitzuteilen, welche [HTTP-Header](/de/docs/Web/HTTP/Headers) der Client senden könnte, wenn die eigentliche Anfrage gestellt wird (zum Beispiel mit [`fetch()`](/de/docs/Web/API/Window/fetch) oder [`XMLHttpRequest.setRequestHeader()`](/de/docs/Web/API/XMLHttpRequest/setRequestHeader)). Der entsprechende serverseitige Header {{HTTPHeader("Access-Control-Allow-Headers")}} antwortet auf diesen browserseitigen Header.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Request-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
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
  - : Eine sortierte Liste von eindeutigen, kommagetrennten, kleingeschriebenen [HTTP-Headern](/de/docs/Web/HTTP/Headers), die in der Anfrage enthalten sind.

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
