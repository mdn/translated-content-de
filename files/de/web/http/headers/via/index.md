---
title: Via
slug: Web/HTTP/Headers/Via
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

Der **`Via`** allgemeine Header wird von Proxys hinzugefügt, sowohl vorwärts als auch rückwärts, und kann in den Anforderungs- oder Antwort-Headern erscheinen. Er wird verwendet, um Nachrichtenweiterleitungen zu verfolgen, Anforderungsschleifen zu vermeiden und die Protokollfähigkeiten von Sendern entlang der Anforderungs-/Antwortkette zu identifizieren.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Anforderungs-Header")}},
        {{Glossary("Response_header", "Antwort-Header")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
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
  - : Optional. Der Name des verwendeten Protokolls, wie zum Beispiel "HTTP".
- \<protocol-version>
  - : Die Version des verwendeten Protokolls, wie zum Beispiel "1.1".
- \<host> und \<port>
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
