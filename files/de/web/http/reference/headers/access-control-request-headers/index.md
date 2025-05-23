---
title: Access-Control-Request-Headers header
short-title: Access-Control-Request-Headers
slug: Web/HTTP/Reference/Headers/Access-Control-Request-Headers
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}

Der HTTP-**`Access-Control-Request-Headers`**-{{Glossary("request_header", "Anforderungsheader")}} wird von Browsern bei der Ausgabe einer {{Glossary("preflight_request", "Preflight-Anfrage")}} verwendet, um dem Server mitzuteilen, welche [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers) der Client senden könnte, wenn die eigentliche Anfrage gestellt wird (zum Beispiel mit [`fetch()`](/de/docs/Web/API/Window/fetch) oder [`XMLHttpRequest.setRequestHeader()`](/de/docs/Web/API/XMLHttpRequest/setRequestHeader)). Der dazugehörige serverseitige Header {{HTTPHeader("Access-Control-Allow-Headers")}} wird auf diesen browserseitigen Header antworten.

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
  - : Eine sortierte Liste von einzigartigen, kommagetrennten, kleingeschriebenen [HTTP-Headern](/de/docs/Web/HTTP/Reference/Headers), die in der Anfrage enthalten sind.

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
