---
title: Via header
short-title: Via
slug: Web/HTTP/Reference/Headers/Via
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}

Der **`Via`** {{Glossary("request_header", "Anforderungs-")}} und {{Glossary("response_header", "Antwortheader")}} wird von {{Glossary("Proxy_server", "Proxies")}}, sowohl vorwärts als auch rückwärts, hinzugefügt. Er wird verwendet, um Nachrichtenweiterleitungen zu verfolgen, Anforderungsschleifen zu vermeiden und die Protokollfähigkeiten der Sender entlang der Anfrage-/Antwortkette zu identifizieren.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Anforderungsheader")}},
        {{Glossary("Response_header", "Antwortheader")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungsheader")}}</th>
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
  - : Der Name des verwendeten Protokolls, wie "HTTP".
- `<protocol-version>`
  - : Die Version des verwendeten Protokolls, wie "1.1".
- `<host>`
  - : Öffentliche Proxy-URL und optional `<port>`.
    Wenn ein Host nicht angegeben wird, muss ein `<pseudonym>` verwendet werden.
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
