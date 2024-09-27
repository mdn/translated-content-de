---
title: Allow
slug: Web/HTTP/Headers/Allow
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

Der **`Allow`** Header listet die Menge der von einer Ressource unterstützten Methoden auf.

Dieser Header muss gesendet werden, wenn der Server mit einem {{HTTPStatus("405")}} `Method Not Allowed` Statuscode antwortet, um anzuzeigen, welche Anfragemethoden verwendet werden können. Ein leerer `Allow`-Header deutet darauf hin, dass die Ressource keine Anfragemethoden erlaubt, was möglicherweise vorübergehend für eine bestimmte Ressource auftritt.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>[Antwort-Header](/de/docs/Glossary/Response_header)</td>
    </tr>
    <tr>
      <th scope="row">[Unzulässiger Header-Name](/de/docs/Glossary/Forbidden_header_name)</th>
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
