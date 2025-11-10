---
title: Allow header
short-title: Allow
slug: Web/HTTP/Reference/Headers/Allow
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP **`Allow`** {{Glossary("response_header", "Antwort-Header")}} listet die Menge der von einer Ressource unterstützten [Anfragemethoden](/de/docs/Web/HTTP/Reference/Methods) auf. Dieser Header muss gesendet werden, wenn der Server mit einem {{HTTPStatus("405", "405 Method Not Allowed")}} Statuscode antwortet, um anzuzeigen, welche Anfragemethoden stattdessen verwendet werden können. Ein leerer `Allow`-Wert zeigt an, dass die Ressource keine Anfragemethoden zulässt, was vorübergehend für eine gegebene Ressource auftreten kann.

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
  - : Eine durch Kommas getrennte Liste der von einer Ressource unterstützten zulässigen Anfragemethoden.

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
