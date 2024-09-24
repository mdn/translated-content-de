---
title: Access-Control-Request-Method
slug: Web/HTTP/Headers/Access-Control-Request-Method
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

Der **`Access-Control-Request-Method`** Anforderungsheader wird
von Browsern verwendet, wenn eine {{glossary("preflight request","Vorab-Anfrage")}} gesendet wird. Er informiert den Server darüber,
welche [HTTP-Methode](/de/docs/Web/HTTP/Methods) bei der
tatsächlichen Anfrage verwendet wird. Dieser Header ist notwendig, da die Vorab-Anfrage immer eine
{{HTTPMethod("OPTIONS")}} ist und nicht die gleiche Methode wie die tatsächliche Anfrage verwendet.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request header","Anforderungsheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name","Verbotener Header-Name")}}</th>
      <td>ja</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Access-Control-Request-Method: <method>
```

## Direktiven

- \<method>
  - : Eine der [HTTP-Anforderungsmethoden](/de/docs/Web/HTTP/Methods), zum Beispiel {{HTTPMethod("GET")}}, {{HTTPMethod("POST")}}, oder {{HTTPMethod("DELETE")}}.

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
