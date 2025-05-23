---
title: X-Powered-By header
short-title: X-Powered-By
slug: Web/HTTP/Reference/Headers/X-Powered-By
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}

Der HTTP-**`X-Powered-By`**-{{Glossary("response_header", "Antwortheader")}} ist ein nicht standardmäßiger Header zur Identifizierung der Anwendung oder des Frameworks, das die Antwort generiert hat.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>{{Glossary("Response_header", "Antwortheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_response_header_name", "Verbotener Antwortheadername")}}</th>
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
  - : Eine Zeichenkette, die die Serveranwendung oder das Framework beschreibt.

## Beispiele

### Express X-Powered-By-Header

Express-Anwendungen fügen in der Regel den `X-Powered-By`-Header mit der Zeichenfolge `express` als Wert in die Antworten ein:

```http
X-Powered-By: express
```

## Spezifikationen

Teil keiner aktuellen Spezifikation.

## Siehe auch

- {{HTTPHeader("X-Forwarded-Host")}}, {{HTTPHeader("X-Forwarded-For")}}, {{HTTPHeader("X-Forwarded-Proto")}} Header
- {{HTTPHeader("Via")}}
- {{HTTPHeader("Forwarded")}}
