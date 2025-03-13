---
title: Location
slug: Web/HTTP/Reference/Headers/Location
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Der HTTP **`Location`** {{Glossary("response_header", "Antwort-Header")}} gibt die URL an, an die eine Seite umgeleitet werden soll.
Er hat nur Bedeutung, wenn er mit einer `3XX` [Umleitungsantwort](/de/docs/Web/HTTP/Reference/Status#redirection_messages) oder einer {{HTTPStatus("201", "201 Created")}} Statusantwort gesendet wird.

Bei Umleitungen hängt die HTTP-Methode, die verwendet wird, um die umgeleitete Anfrage auszuführen, von der ursprünglichen Methode und der Art der Umleitung ab:

- {{HTTPStatus("303", "303 See Other")}} Antworten resultieren immer in einer {{HTTPMethod("GET")}} Anfrage bei der Umleitung.
- {{HTTPStatus("307", "307 Temporary Redirect")}} und {{HTTPStatus("308", "308 Permanent Redirect")}} verwenden die gleiche Methode wie die auslösende Anfrage.
- {{HTTPStatus("301", "301 Moved Permanently")}} und {{HTTPStatus("302", "302 Found")}} sollten die gleiche Anfragemethode verwenden wie die auslösende Anfrage, obwohl dies für ältere User-Agents nicht garantiert ist.

Alle Antworten mit einem der oben genannten Statuscodes enthalten einen `Location` Header.

Im Falle der Ressourcenerstellung gibt sie die URL der neu erstellten Ressource an, sodass ein Client sofort eine Anfrage dafür stellen kann.

`Location` und {{HTTPHeader("Content-Location")}} unterscheiden sich.
`Content-Location` gibt die URL an, die direkt zur Ressource führt, wenn eine [Inhaltsaushandlung](/de/docs/Web/HTTP/Guides/Content_negotiation) stattgefunden hat.
`Location` ist mit der Antwort verbunden, während {{HTTPHeader("Content-Location")}} mit der zurückgegebenen Repräsentation verknüpft ist.

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
- Statusantworten einschließlich eines `Location` Headers: {{HTTPStatus("201")}}, {{HTTPStatus("301")}}, {{HTTPStatus("302")}}, {{HTTPStatus("303")}}, {{HTTPStatus("307")}}, {{HTTPStatus("308")}}.
