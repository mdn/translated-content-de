---
title: X-Powered-By
slug: Web/HTTP/Reference/Headers/X-Powered-By
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Der HTTP **`X-Powered-By`** [Antwort-Header](/de/docs/Glossary/response_header) ist ein nicht-standardmäßiger Header, der die Anwendung oder das Framework identifiziert, das die Antwort generiert hat.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>[Antwort-Header](/de-DE/docs/Glossary/Response_header)</td>
    </tr>
    <tr>
      <th scope="row">[Verbotener Antwort-Header-Name](/de-DE/docs/Glossary/Forbidden_response_header_name)</th>
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
  - : Eine Zeichenfolge, die die Serveranwendung oder das Framework beschreibt.

## Beispiele

### Express X-Powered-By Header

Express-Anwendungen fügen normalerweise den `X-Powered-By` Header in Antworten ein, wobei die Zeichenfolge `express` als Feldwert verwendet wird:

```http
X-Powered-By: express
```

## Spezifikationen

Teil keiner aktuellen Spezifikation.

## Siehe auch

- {{HTTPHeader("X-Forwarded-Host")}}, {{HTTPHeader("X-Forwarded-For")}}, {{HTTPHeader("X-Forwarded-Proto")}} Header
- {{HTTPHeader("Via")}}
- {{HTTPHeader("Forwarded")}}
