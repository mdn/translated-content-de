---
title: Access-Control-Request-Method
slug: Web/HTTP/Headers/Access-Control-Request-Method
l10n:
  sourceCommit: 92b03e46cef6be37de60799363e3e33e3415b491
---

{{HTTPSidebar}}

Der HTTP **`Access-Control-Request-Method`** {{Glossary("request_header", "Request-Header")}} wird von Browsern verwendet, wenn sie eine {{Glossary("preflight_request", "Preflight-Anfrage")}} stellen, um dem Server mitzuteilen, welche [HTTP-Methode](/de/docs/Web/HTTP/Methods) bei der tatsächlichen Anfrage verwendet wird. Dieser Header ist notwendig, weil die Preflight-Anfrage immer eine {{HTTPMethod("OPTIONS")}} ist und nicht die gleiche Methode wie die tatsächliche Anfrage verwendet.

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
Access-Control-Request-Method: <method>
```

## Direktiven

- `<method>`
  - : Eine [HTTP-Anfragemethode](/de/docs/Web/HTTP/Methods); zum Beispiel {{HTTPMethod("GET")}}, {{HTTPMethod("POST")}} oder {{HTTPMethod("DELETE")}}.

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
