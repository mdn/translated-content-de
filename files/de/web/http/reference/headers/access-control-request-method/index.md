---
title: Access-Control-Request-Method
slug: Web/HTTP/Reference/Headers/Access-Control-Request-Method
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Der HTTP **`Access-Control-Request-Method`** {{Glossary("request_header", "Request-Header")}} wird von Browsern verwendet, wenn sie eine {{Glossary("preflight_request", "Preflight-Anfrage")}} senden möchten, um dem Server mitzuteilen, welche [HTTP-Methode](/de/docs/Web/HTTP/Reference/Methods) bei der tatsächlichen Anfrage verwendet wird. Dieser Header ist notwendig, da die Preflight-Anfrage immer eine {{HTTPMethod("OPTIONS")}}-Anfrage ist und nicht die gleiche Methode wie die tatsächliche Anfrage verwendet.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Request-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Request-Header")}}</th>
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
  - : Eine [HTTP-Anfragemethode](/de/docs/Web/HTTP/Reference/Methods); zum Beispiel {{HTTPMethod("GET")}}, {{HTTPMethod("POST")}} oder {{HTTPMethod("DELETE")}}.

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
