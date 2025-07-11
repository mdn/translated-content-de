---
title: Location header
short-title: Location
slug: Web/HTTP/Reference/Headers/Location
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP **`Location`** {{Glossary("response_header", "Antwort-Header")}} gibt die URL an, zu der eine Seite umgeleitet werden soll. Er hat nur eine Bedeutung, wenn er zusammen mit einer `3XX` [Umleitungsantwort](/de/docs/Web/HTTP/Reference/Status#redirection_messages) oder einer {{HTTPStatus("201", "201 Created")}} Statusantwort bereitgestellt wird.

Bei Umleitungen hängt die HTTP-Methode, die verwendet wird, um die umgeleitete Anfrage abzurufen, die auf das mit `Location` angegebene Ziel zeigt, von der ursprünglichen Methode und der Art der Umleitung ab:

- {{HTTPStatus("303", "303 See Other")}} Antworten führen immer zu einer {{HTTPMethod("GET")}} Anfrage in der Umleitung.
- {{HTTPStatus("307", "307 Temporary Redirect")}} und {{HTTPStatus("308", "308 Permanent Redirect")}} verwenden dieselbe Methode wie die ursprüngliche Anfrage.
- {{HTTPStatus("301", "301 Moved Permanently")}} und {{HTTPStatus("302", "302 Found")}} sollten dieselbe Anfragemethode verwenden wie die ursprüngliche Anfrage, obwohl dies bei älteren User-Agents nicht garantiert ist.

Alle Antworten mit einem der oben genannten Statuscodes enthalten einen `Location`-Header.

Im Falle der Ressourcenerstellung gibt er die URL der neu erstellten Ressource an, damit ein Client sofort eine Anfrage dafür stellen kann.

`Location` und {{HTTPHeader("Content-Location")}} sind unterschiedlich. `Content-Location` gibt die URL an, die verwendet werden kann, um die Ressource in Zukunft direkt zuzugreifen, wenn eine [Inhaltsverhandlung](/de/docs/Web/HTTP/Guides/Content_negotiation) stattgefunden hat. `Location` ist mit der Antwort assoziiert, während {{HTTPHeader("Content-Location")}} mit der zurückgegebenen Repräsentation assoziiert ist.

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
Location: <url>
```

## Anweisungen

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
- Statusantworten, die einen `Location`-Header enthalten: {{HTTPStatus("201")}}, {{HTTPStatus("301")}}, {{HTTPStatus("302")}}, {{HTTPStatus("303")}}, {{HTTPStatus("307")}}, {{HTTPStatus("308")}}.
