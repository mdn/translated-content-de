---
title: Allow header
short-title: Allow
slug: Web/HTTP/Reference/Headers/Allow
l10n:
  sourceCommit: 7f6778934020a9b5b82b4dd8ca79a99bc9950c2a
---

Der HTTP **`Allow`** {{Glossary("response_header", "Response-Header")}} listet die Menge an [Request-Methoden](/de/docs/Web/HTTP/Reference/Methods) auf, die von einer Ressource unterstützt werden.
Dieser Header muss gesendet werden, wenn der Server mit einem {{HTTPStatus("405", "405 Method Not Allowed")}} Statuscode antwortet, um anzugeben, welche Request-Methoden stattdessen verwendet werden können.
Ein leerer `Allow`-Wert zeigt an, dass die Ressource keine Request-Methoden erlaubt, was möglicherweise vorübergehend für eine gegebene Ressource auftreten kann.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Response-Header")}}</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Allow: <http-methods>
```

## Direktiven

- `<http-methods>`
  - : Eine kommagetrennte Liste der erlaubten Request-Methoden, die von einer Ressource unterstützt werden.

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
