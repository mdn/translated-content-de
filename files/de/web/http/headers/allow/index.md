---
title: Allow
slug: Web/HTTP/Headers/Allow
l10n:
  sourceCommit: 92b03e46cef6be37de60799363e3e33e3415b491
---

{{HTTPSidebar}}

Der HTTP **`Allow`** {{Glossary("response_header", "Antwort-Header")}} listet die Menge der von einer Ressource unterstützten [Anfragemethoden](/de/docs/Web/HTTP/Methods) auf. Dieser Header muss gesendet werden, wenn der Server mit einem {{HTTPStatus("405", "405 Method Not Allowed")}} Statuscode antwortet, um anzugeben, welche Anfragemethoden stattdessen verwendet werden können. Ein leerer `Allow`-Wert deutet darauf hin, dass die Ressource keine Anfragemethoden zulässt, was vorübergehend für eine gegebene Ressource auftreten kann.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
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
  - : Eine kommaseparierte Liste von erlaubten Anfragemethoden, die von einer Ressource unterstützt werden.

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
