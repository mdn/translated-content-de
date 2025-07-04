---
title: Access-Control-Request-Headers header
short-title: Access-Control-Request-Headers
slug: Web/HTTP/Reference/Headers/Access-Control-Request-Headers
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP **`Access-Control-Request-Headers`** {{Glossary("request_header", "Anforderungs-Header")}} wird von Browsern verwendet, wenn sie eine {{Glossary("preflight_request", "Preflight-Anfrage")}} senden, um den Server darüber zu informieren, welche [HTTP-Headers](/de/docs/Web/HTTP/Reference/Headers) der Client möglicherweise sendet, wenn die eigentliche Anfrage durchgeführt wird (zum Beispiel mit [`fetch()`](/de/docs/Web/API/Window/fetch) oder [`XMLHttpRequest.setRequestHeader()`](/de/docs/Web/API/XMLHttpRequest/setRequestHeader)). Der komplementäre Server-seitige Header {{HTTPHeader("Access-Control-Allow-Headers")}} wird auf diesen Browser-seitigen Header antworten.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Anforderungs-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungs-Header")}}</th>
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
  - : Eine sortierte Liste von einzigartigen, kommagetrennten, in Kleinbuchstaben geschriebenen [HTTP-Headers](/de/docs/Web/HTTP/Reference/Headers), die in der Anfrage enthalten sind.

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
