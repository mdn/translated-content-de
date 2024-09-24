---
title: Zugriffskontrolle-Anfrage-Header
slug: Web/HTTP/Headers/Access-Control-Request-Headers
l10n:
  sourceCommit: 58ad1df59f2ffb9ecab4e27fe1bdf1eb5a55f89b
---

{{HTTPSidebar}}

Der **`Access-Control-Request-Headers`** Anfrage-Header wird von Browsern verwendet, wenn sie eine {{glossary("preflight request", "Preflight-Anfrage")}} senden, um dem Server mitzuteilen, welche [HTTP-Header](/de/docs/Web/HTTP/Headers) der Client möglicherweise sendet, wenn die eigentliche Anfrage gestellt wird (zum Beispiel mit {{domxref("Window/fetch", "fetch()")}} oder {{domxref("XMLHttpRequest.setRequestHeader()")}}). Der ergänzende serverseitige Header {{HTTPHeader("Access-Control-Allow-Headers")}} beantwortet diesen browserseitigen Header.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request header", "Anfrage-Header")}}</td>
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
  - : Eine sortierte Liste von einzigartigen, durch Kommas getrennten, kleingeschriebenen [HTTP-Headern](/de/docs/Web/HTTP/Headers), die in der Anfrage enthalten sind.

## Beispiele

```http
Access-Control-Request-Headers: content-type,x-pingother
```

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Access-Control-Request-Method")}}
