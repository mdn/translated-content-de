---
title: Allow header
short-title: Allow
slug: Web/HTTP/Reference/Headers/Allow
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}

Der HTTP **`Allow`** {{Glossary("response_header", "Antwort-Header")}} listet die Menge der von einer Ressource unterstützten [Anfragemethoden](/de/docs/Web/HTTP/Reference/Methods) auf.
Dieser Header muss gesendet werden, wenn der Server mit einem {{HTTPStatus("405", "405 Method Not Allowed")}}-Statuscode antwortet, um anzuzeigen, welche Anfragemethoden stattdessen verwendet werden können.
Ein leerer `Allow`-Wert gibt an, dass die Ressource keine Anfragemethoden zulässt, was möglicherweise vorübergehend für eine bestimmte Ressource auftritt.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungs-Header")}}</th>
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
  - : Eine durch Kommas getrennte Liste der von einer Ressource unterstützten Anfragemethoden.

## Beispiele

```http
Allow: GET, POST, HEAD
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- {{HTTPStatus("405", "405 Method Not Allowed")}}-Statuscode
- {{HTTPHeader("Server")}}
- {{HTTPMethod("OPTIONS")}}
