---
title: Allow
slug: Web/HTTP/Headers/Allow
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}

Der HTTP **`Allow`** {{Glossary("response_header", "Antwortheader")}} listet die Menge der von einer Ressource unterstützten [Anfrage-Methoden](/de/docs/Web/HTTP/Methods) auf. Dieser Header muss gesendet werden, wenn der Server mit einem {{HTTPStatus("405", "405 Method Not Allowed")}} Status-Code antwortet, um anzuzeigen, welche Anfrage-Methoden stattdessen verwendet werden können. Ein leerer `Allow`-Wert zeigt an, dass die Ressource keine Anfrage-Methoden zulässt, was möglicherweise vorübergehend für eine gegebene Ressource auftritt.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwortheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anfrage-Header")}}</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Allow: <http-methods>
```

## Direktiven

- `<http-methods>`
  - : Eine durch Kommas getrennte Liste der von einer Ressource unterstützten erlaubten Anfrage-Methoden.

## Beispiele

```http
Allow: GET, POST, HEAD
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- {{HTTPStatus("405", "405 Method Not Allowed")}} Status-Code
- {{HTTPHeader("Server")}}
- {{HTTPMethod("OPTIONS")}}
