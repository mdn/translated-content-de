---
title: Access-Control-Request-Method
slug: Web/HTTP/Headers/Access-Control-Request-Method
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}

Der HTTP-**`Access-Control-Request-Method`**-{{Glossary("request_header", "Anforderungsheader")}} wird von Browsern verwendet, wenn eine {{Glossary("preflight_request", "Preflight-Anfrage")}} gesendet wird, um dem Server mitzuteilen, welche [HTTP-Methode](/de/docs/Web/HTTP/Methods) bei der tatsächlichen Anfrage verwendet wird.
Dieser Header ist notwendig, weil die Preflight-Anfrage immer eine {{HTTPMethod("OPTIONS")}} ist und nicht die gleiche Methode wie die eigentliche Anfrage verwendet.

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
Access-Control-Request-Method: <method>
```

## Direktiven

- `<method>`
  - : Eine [HTTP-Anfragemethode](/de/docs/Web/HTTP/Methods), zum Beispiel {{HTTPMethod("GET")}}, {{HTTPMethod("POST")}} oder {{HTTPMethod("DELETE")}}.

## Beispiele

```http
Access-Control-Request-Method: POST
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Access-Control-Request-Headers")}}
