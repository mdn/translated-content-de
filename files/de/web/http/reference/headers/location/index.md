---
title: Location header
short-title: Location
slug: Web/HTTP/Reference/Headers/Location
l10n:
  sourceCommit: 7f6778934020a9b5b82b4dd8ca79a99bc9950c2a
---

Der HTTP-**`Location`**-{{Glossary("response_header", "Antwortheader")}} gibt die URL an, zu der eine Seite umgeleitet werden soll.
Er hat nur dann eine Bedeutung, wenn er zusammen mit einer `3XX`-[Umleitungsantwort](/de/docs/Web/HTTP/Reference/Status#redirection_messages) oder einer {{HTTPStatus("201", "201 Created")}}-Statusantwort bereitgestellt wird.

Bei Umleitungen hängt die im umgeleiteten Request verwendete HTTP-Methode, um die durch `Location` angegebene Seite abzurufen, von der ursprünglichen Methode und der Art der Umleitung ab:

- {{HTTPStatus("303", "303 See Other")}}-Antworten führen immer zu einem {{HTTPMethod("GET")}}-Request in der Umleitung.
- {{HTTPStatus("307", "307 Temporary Redirect")}} und {{HTTPStatus("308", "308 Permanent Redirect")}} verwenden die gleiche Methode wie der auslösende Request.
- {{HTTPStatus("301", "301 Moved Permanently")}} und {{HTTPStatus("302", "302 Found")}} sollten die gleiche Request-Methode wie der auslösende Request verwenden, obwohl dies für ältere User-Agents nicht garantiert ist.

Alle Antworten mit einem der obigen Statuscodes beinhalten einen `Location`-Header.

Im Falle der Ressourcenerstellung gibt er die URL der neu erstellten Ressource an, damit ein Client sofort einen Request dafür machen kann.

`Location` und {{HTTPHeader("Content-Location")}} sind unterschiedlich.
`Content-Location` gibt die URL an, die verwendet werden soll, um in Zukunft direkt auf die Ressource zuzugreifen, wenn eine [Inhaltsverhandlung](/de/docs/Web/HTTP/Guides/Content_negotiation) stattgefunden hat.
`Location` ist mit der Antwort assoziiert, während {{HTTPHeader("Content-Location")}} mit der zurückgegebenen Darstellung assoziiert ist.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwortheader")}}</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Location: <url>
```

## Direktiven

- `<url>`
  - : Kann relativ zur Anforderungs-URL oder eine absolute URL sein.

## Beispiele

```http
Location: /index.html
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Content-Location")}}
- Statusantworten, die einen `Location`-Header beinhalten: {{HTTPStatus("201")}}, {{HTTPStatus("301")}}, {{HTTPStatus("302")}}, {{HTTPStatus("303")}}, {{HTTPStatus("307")}}, {{HTTPStatus("308")}}.
