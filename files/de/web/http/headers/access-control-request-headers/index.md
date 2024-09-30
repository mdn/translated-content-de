---
title: Access-Control-Request-Headers
slug: Web/HTTP/Headers/Access-Control-Request-Headers
l10n:
  sourceCommit: 58ad1df59f2ffb9ecab4e27fe1bdf1eb5a55f89b
---

{{HTTPSidebar}}

Der **`Access-Control-Request-Headers`** Request-Header wird von Browsern verwendet, wenn eine [Vorab-Anfrage](/de/docs/Glossary/preflight_request) gesendet wird, um den Server darüber zu informieren, welche [HTTP-Header](/de/docs/Web/HTTP/Headers) der Client möglicherweise bei der eigentlichen Anfrage senden wird (beispielsweise mit [`fetch()`](/de/docs/Web/API/Window/fetch) oder [`XMLHttpRequest.setRequestHeader()`](/de/docs/Web/API/XMLHttpRequest/setRequestHeader)). Der ergänzende serverseitige Header {{HTTPHeader("Access-Control-Allow-Headers")}} wird auf diesen browserseitigen Header antworten.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>[Request-Header](/de/docs/Glossary/Request_header)</td>
    </tr>
    <tr>
      <th scope="row">[Verbotener Header-Name](/de/docs/Glossary/Forbidden_header_name)</th>
      <td>ja</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Access-Control-Request-Headers: <header-name>,<header-name>,…
```

## Direktiven

- \<header-name>
  - : Eine sortierte Liste eindeutiger, kommagetrennter, kleingeschriebener [HTTP-Header](/de/docs/Web/HTTP/Headers), die in die Anfrage aufgenommen werden.

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
