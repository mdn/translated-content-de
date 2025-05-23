---
title: Location header
short-title: Location
slug: Web/HTTP/Reference/Headers/Location
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}

Der HTTP **`Location`** {{Glossary("response_header", "Antwort-Header")}} gibt die URL an, zu der eine Seite umgeleitet werden soll. Er hat nur dann eine Bedeutung, wenn er mit einer `3XX` [Umleitungsantwort](/de/docs/Web/HTTP/Reference/Status#redirection_messages) oder einer {{HTTPStatus("201", "201 Created")}} Statusantwort gesendet wird.

Bei Umleitungen hängt die HTTP-Methode, die zur Durchführung der umgeleiteten Anfrage verwendet wird, um die durch `Location` angegebene Seite abzurufen, von der ursprünglichen Methode und der Art der Umleitung ab:

- {{HTTPStatus("303", "303 See Other")}} Antworten führen immer zu einer {{HTTPMethod("GET")}} Anfrage in der Umleitung.
- {{HTTPStatus("307", "307 Temporary Redirect")}} und {{HTTPStatus("308", "308 Permanent Redirect")}} verwenden die gleiche Methode wie die ursprüngliche Anfrage.
- {{HTTPStatus("301", "301 Moved Permanently")}} und {{HTTPStatus("302", "302 Found")}} sollten die gleiche Anfragemethode wie die ursprüngliche Anfrage verwenden, obwohl dies für ältere User-Agents nicht garantiert ist.

Alle Antworten mit einem der oben genannten Statuscodes beinhalten einen `Location`-Header.

Im Falle einer Ressourcenerstellung gibt er die URL der neu erstellten Ressource an, damit ein Client sofort eine Anfrage dafür stellen kann.

`Location` und {{HTTPHeader("Content-Location")}} sind unterschiedlich. `Content-Location` gibt die URL an, die bei zukünftigen direkten Zugriffen auf die Ressource zu verwenden ist, wenn eine [Inhaltsaushandlung](/de/docs/Web/HTTP/Guides/Content_negotiation) stattgefunden hat. `Location` ist mit der Antwort verbunden, während {{HTTPHeader("Content-Location")}} mit der dargestellten Repräsentation verbunden ist.

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
  - : Kann relativ zur Anfrage-URL oder eine absolute URL sein.

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
