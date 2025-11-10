---
title: X-Powered-By header
short-title: X-Powered-By
slug: Web/HTTP/Reference/Headers/X-Powered-By
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

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

### Express X-Powered-By-Header

Express-Anwendungen enthalten normalerweise den `X-Powered-By`-Header in Antworten mit dem String `express` als Feldwert:

```http
X-Powered-By: express
```

## Spezifikationen

Kein Teil einer aktuellen Spezifikation.

## Siehe auch

- {{HTTPHeader("X-Forwarded-Host")}}, {{HTTPHeader("X-Forwarded-For")}}, {{HTTPHeader("X-Forwarded-Proto")}} Header
- {{HTTPHeader("Via")}}
- {{HTTPHeader("Forwarded")}}
