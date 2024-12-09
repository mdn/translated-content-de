---
title: X-Powered-By
slug: Web/HTTP/Headers/X-Powered-By
l10n:
  sourceCommit: ed041385cf874deec203e820fd415bdcd6f98a19
---

{{HTTPSidebar}}

Der HTTP-**`X-Powered-By`**-{{Glossary("response_header", "Antwortheader")}} ist ein nicht standardisierter Header zur Identifizierung der Anwendung oder des Frameworks, das die Antwort generiert hat.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwortheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_response_header_name", "Verbotener Antwortheader-Name")}}</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
X-Powered-By: <application>
```

## Direktiven

- `<application>`
  - : Ein String, der die Serveranwendung oder das Framework beschreibt.

## Beispiele

### Express X-Powered-By Header

Express-Anwendungen fügen normalerweise den `X-Powered-By`-Header in Antworten ein, wobei der String `express` als Feldwert verwendet wird:

```http
X-Powered-By: express
```

## Spezifikationen

Nicht Teil einer aktuellen Spezifikation.

## Siehe auch

- {{HTTPHeader("X-Forwarded-Host")}}, {{HTTPHeader("X-Forwarded-For")}}, {{HTTPHeader("X-Forwarded-Proto")}} Header
- {{HTTPHeader("Via")}}
- {{HTTPHeader("Forwarded")}}
