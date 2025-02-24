---
title: Location
slug: Web/HTTP/Headers/Location
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}

Der HTTP **`Location`** {{Glossary("response_header", "Antwort-Header")}} gibt die URL an, zu der eine Seite umgeleitet werden soll. Er hat nur eine Bedeutung, wenn er mit einer `3XX` [Umleitungsantwort](/de/docs/Web/HTTP/Status#redirection_messages) oder einer {{HTTPStatus("201", "201 Created")}} Statusantwort bereitgestellt wird.

Bei Umleitungen hängt die HTTP-Methode, die verwendet wird, um die Seite abzurufen, auf die durch `Location` verwiesen wird, von der ursprünglichen Methode und der Art der Umleitung ab:

- {{HTTPStatus("303", "303 See Other")}} Antworten führen immer zu einer {{HTTPMethod("GET")}} Anfrage in der Umleitung.
- {{HTTPStatus("307", "307 Temporary Redirect")}} und {{HTTPStatus("308", "308 Permanent Redirect")}} verwenden die gleiche Methode wie die initiale Anfrage.
- {{HTTPStatus("301", "301 Moved Permanently")}} und {{HTTPStatus("302", "302 Found")}} sollten die gleiche Anfragemethode wie die initiale Anfrage verwenden, obwohl dies bei älteren User-Agents nicht garantiert ist.

Alle Antworten mit einer der oben genannten Statuscodes enthalten einen `Location` Header.

Im Falle einer Ressourcenerstellung gibt er die URL der neu erstellten Ressource an, sodass ein Client sofort eine Anfrage dafür stellen kann.

`Location` und {{HTTPHeader("Content-Location")}} sind unterschiedlich. `Content-Location` zeigt die URL an, die verwendet werden soll, um in Zukunft direkt auf die Ressource zuzugreifen, wenn eine [Inhaltsverhandlung](/de/docs/Web/HTTP/Content_negotiation) stattgefunden hat. `Location` ist mit der Antwort verbunden, während {{HTTPHeader("Content-Location")}} mit der zurückgegebenen Repräsentation verbunden ist.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
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
- Statusantworten, die einen `Location` Header enthalten: {{HTTPStatus("201")}}, {{HTTPStatus("301")}}, {{HTTPStatus("302")}}, {{HTTPStatus("303")}}, {{HTTPStatus("307")}}, {{HTTPStatus("308")}}.
