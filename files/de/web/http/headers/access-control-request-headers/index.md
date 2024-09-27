---
title: Access-Control-Request-Headers
slug: Web/HTTP/Headers/Access-Control-Request-Headers
l10n:
  sourceCommit: 58ad1df59f2ffb9ecab4e27fe1bdf1eb5a55f89b
---

{{HTTPSidebar}}

Der **`Access-Control-Request-Headers`** Anforderungsheader wird von Browsern verwendet, wenn eine [Preflight-Anfrage](/de/docs/Glossary/preflight_request) gestellt wird, um dem Server mitzuteilen, welche [HTTP-Header](/de/docs/Web/HTTP/Headers) der Client senden könnte, wenn die tatsächliche Anfrage gestellt wird (zum Beispiel mit [`fetch()`](/de/docs/Web/API/Window/fetch) oder [`XMLHttpRequest.setRequestHeader()`](/de/docs/Web/API/XMLHttpRequest/setRequestHeader)). Der komplementäre Server-seitige Header {{HTTPHeader("Access-Control-Allow-Headers")}} beantwortet diesen Browser-seitigen Header.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>[Anforderungsheader](/de/docs/Glossary/Request_header)</td>
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
