---
title: Allow
slug: Web/HTTP/Headers/Allow
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

Der **`Allow`**-Header listet die Menge der von einer Ressource unterstützten Methoden auf.

Dieser Header muss gesendet werden, wenn der Server mit einem {{HTTPStatus("405")}} `Method Not Allowed` Statuscode antwortet, um anzuzeigen, welche Anfragemethoden verwendet werden können. Ein leerer `Allow`-Header zeigt an, dass die Ressource keine Anfragemethoden zulässt, was beispielsweise vorübergehend für eine bestimmte Ressource auftreten kann.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Allow: <http-methods>
```

## Direktiven

- \<http-methods>
  - : Die durch Kommas getrennte Liste der erlaubten [HTTP-Anfragemethoden](/de/docs/Web/HTTP/Methods).

## Beispiele

```http
Allow: GET, POST, HEAD
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- {{HTTPStatus("405")}}
- {{HTTPHeader("Server")}}
