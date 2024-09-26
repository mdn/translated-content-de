---
title: Access-Control-Request-Headers
slug: Web/HTTP/Headers/Access-Control-Request-Headers
l10n:
  sourceCommit: 58ad1df59f2ffb9ecab4e27fe1bdf1eb5a55f89b
---

{{HTTPSidebar}}

Der **`Access-Control-Request-Headers`** Anforderungsheader wird von Browsern verwendet, wenn eine {{glossary("preflight request", "Preflight-Anfrage")}} gesendet wird, um dem Server mitzuteilen, welche [HTTP-Header](/de/docs/Web/HTTP/Headers) der Client möglicherweise sendet, wenn die eigentliche Anfrage gestellt wird (z.B. mit {{domxref("Window/fetch", "fetch()")}} oder {{domxref("XMLHttpRequest.setRequestHeader()")}}). Der entsprechende serverseitige Header {{HTTPHeader("Access-Control-Allow-Headers")}} antwortet auf diesen browserseitigen Header.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request header", "Anforderungsheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name", "Verbotener Header-Name")}}</th>
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
  - : Eine sortierte Liste von einzigartigen, kommagetrennten, kleingeschriebenen [HTTP-Headern](/de/docs/Web/HTTP/Headers), die in der Anfrage enthalten sind.

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
