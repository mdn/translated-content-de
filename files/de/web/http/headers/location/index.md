---
title: Location
slug: Web/HTTP/Headers/Location
l10n:
  sourceCommit: cadc98b0f5f2a770c6ab9b1ca0bf31a90378c6df
---

{{HTTPSidebar}}

Der HTTP-**`Location`**-{{Glossary("response_header", "Antwort-Header")}} gibt die URL an, zu der eine Seite umgeleitet werden soll.
Er hat nur eine Bedeutung, wenn er mit einer `3XX`-[Umleitungsantwort](/de/docs/Web/HTTP/Status#redirection_messages) oder einer {{HTTPStatus("201", "201 Created")}} Statusantwort gesendet wird.

Bei Umleitungen hängt die HTTP-Methode, die verwendet wird, um die angeforderte Seite, die durch `Location` angegeben wird, abzurufen, von der ursprünglichen Methode und der Art der Umleitung ab:

- {{HTTPStatus("303", "303 See Other")}} Antworten führen immer zu einer {{HTTPMethod("GET")}} Anfrage in der Umleitung.
- {{HTTPStatus("307", "307 Temporary Redirect")}} und {{HTTPStatus("308", "308 Permanent Redirect")}} verwenden die gleiche Methode wie die ursprüngliche Anfrage.
- {{HTTPStatus("301", "301 Moved Permanently")}} und {{HTTPStatus("302", "302 Found")}} sollten die gleiche Anfragemethode wie die ursprüngliche Anfrage verwenden, obwohl dies bei älteren User-Agents nicht garantiert ist.

Alle Antworten mit einem der oben genannten Statuscodes beinhalten einen `Location`-Header.

Im Fall der Erstellung von Ressourcen gibt er die URL der neu erstellten Ressource an, sodass ein Client sofort eine Anfrage dafür stellen kann.

`Location` und {{HTTPHeader("Content-Location")}} sind unterschiedlich.
`Content-Location` gibt die URL an, die verwendet werden soll, um in Zukunft direkt auf die Ressource zuzugreifen, wenn [Inhaltsverhandlung](/de/docs/Web/HTTP/Content_negotiation) stattgefunden hat.
`Location` ist mit der Antwort verknüpft, während {{HTTPHeader("Content-Location")}} mit der zurückgegebenen Repräsentation verknüpft ist.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
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
- Statusantworten, die einen `Location`-Header enthalten: {{HTTPStatus("201")}}, {{HTTPStatus("301")}}, {{HTTPStatus("302")}}, {{HTTPStatus("303")}}, {{HTTPStatus("307")}}, {{HTTPStatus("308")}}.
