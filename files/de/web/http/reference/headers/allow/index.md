---
title: Allow
slug: Web/HTTP/Reference/Headers/Allow
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Der HTTP **`Allow`** {{Glossary("response_header", "Antwort-Header")}} listet die Menge der von einer Ressource unterstützten [Anfragemethoden](/de/docs/Web/HTTP/Reference/Methods) auf. Dieser Header muss gesendet werden, wenn der Server mit einem {{HTTPStatus("405", "405 Method Not Allowed")}} Statuscode antwortet, um anzuzeigen, welche Anfragemethoden stattdessen verwendet werden können. Ein leerer `Allow`-Wert zeigt an, dass die Ressource keine Anfragemethoden erlaubt, was vorübergehend für eine gegebene Ressource auftreten kann.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
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
  - : Eine kommagetrennte Liste der von einer Ressource unterstützten erlaubten Anfragemethoden.

## Beispiele

```http
Allow: GET, POST, HEAD
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- {{HTTPStatus("405", "405 Method Not Allowed")}} Statuscode
- {{HTTPHeader("Server")}}
- {{HTTPMethod("OPTIONS")}}
