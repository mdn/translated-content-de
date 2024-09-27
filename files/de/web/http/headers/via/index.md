---
title: Via
slug: Web/HTTP/Headers/Via
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

Der allgemeine Header **`Via`** wird von Proxys hinzugefügt, sowohl vorwärts- als auch rückwärtsgerichtet, und kann in den Anfrage- oder Antwortheaders erscheinen. Er wird verwendet, um Nachrichtenweiterleitungen zu verfolgen, Anfrageschleifen zu vermeiden und die Protokollfähigkeiten der Absender entlang der Anfrage-/Antwortkette zu identifizieren.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        [Anfrage-Header](/de/docs/Glossary/Request_header),
        [Antwort-Header](/de/docs/Glossary/Response_header)
      </td>
    </tr>
    <tr>
      <th scope="row">[Verbotener Header-Name](/de/docs/Glossary/Forbidden_header_name)</th>
      <td>ja</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Via: [ <protocol-name> "/" ] <protocol-version> <host> [ ":" <port> ]
Via: [ <protocol-name> "/" ] <protocol-version> <pseudonym>
```

## Direktiven

- \<protocol-name>
  - : Optional. Der Name des verwendeten Protokolls, wie z. B. "HTTP".
- \<protocol-version>
  - : Die Version des verwendeten Protokolls, wie z. B. "1.1".
- \<host> and \<port>
  - : Öffentliche Proxy-URL und Port.
- \<pseudonym>
  - : Name/Alias eines internen Proxys.

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
