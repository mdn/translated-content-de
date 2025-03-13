---
title: Via
slug: Web/HTTP/Reference/Headers/Via
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Der **`Via`** {{Glossary("request_header", "Request-")}} und {{Glossary("response_header", "Response-Header")}} wird von {{Glossary("Proxy_server", "Proxys")}} hinzugefügt, sowohl Forward- als auch Reverse-Proxys.
Er wird verwendet, um Nachrichtenweiterleitungen zu verfolgen, Anforderungsschleifen zu vermeiden und die Protokollfähigkeiten der Sender entlang der Anforderungs-/Antwortkette zu identifizieren.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Request-Header")}},
        {{Glossary("Response_header", "Response-Header")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Request-Header")}}</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Via: [<protocol-name>/]<protocol-version> <host>[:<port>]
Via: [<protocol-name>/]<protocol-version> <pseudonym>
```

## Direktiven

- `<protocol-name>` {{optional_inline}}
  - : Der Name des verwendeten Protokolls, wie zum Beispiel "HTTP".
- `<protocol-version>`
  - : Die Version des verwendeten Protokolls, wie zum Beispiel "1.1".
- `<host>`
  - : Öffentliche Proxy-URL und optionaler `<port>`.
    Wenn kein Host angegeben wird, muss ein `<pseudonym>` verwendet werden.
- `<pseudonym>`
  - : Name/Alias eines internen Proxys.
    Wenn kein Pseudonym angegeben wird, muss ein `<host>` verwendet werden.

## Beispiele

```http
Via: 1.1 vegur
Via: HTTP/1.1 GWA
Via: 1.0 fred, 1.1 p.example.net
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("X-Forwarded-For")}}
- [Herokus Proxy-Bibliothek Vegur](https://github.com/heroku/vegur)
