---
title: If-Unmodified-Since
slug: Web/HTTP/Headers/If-Unmodified-Since
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}

Der HTTP **`If-Unmodified-Since`** {{Glossary("request_header", "Anforderungsheader")}} macht die Anfrage für die Ressource [konditional](/de/docs/Web/HTTP/Conditional_requests).
Der Server wird die angeforderte Ressource senden (oder annehmen im Fall eines {{HTTPMethod("POST")}} oder einer anderen nicht-{{Glossary("Safe/HTTP", "sicheren")}} Methode) nur, wenn die Ressource auf dem Server seit dem Datum im Anforderungsheader nicht verändert wurde.
Wenn die Ressource nach dem angegebenen Datum modifiziert wurde, wird die Antwort ein {{HTTPStatus("412", "412 Precondition Failed")}} Fehler sein.

Der `If-Unmodified-Since` Header wird häufig in den folgenden Situationen verwendet:

- In Verbindung mit nicht-{{Glossary("Safe/HTTP", "sicheren")}} Methoden wie {{HTTPMethod("POST")}}, kann dieser Header verwendet werden, um eine [optimistische Nebenläufigkeitskontrolle](https://en.wikipedia.org/wiki/Optimistic_concurrency_control) zu implementieren, wie es einige Wikis tun: Revisionen werden abgelehnt, wenn das gespeicherte Dokument seit der ursprünglichen Abrufung geändert wurde, um Konflikte zu vermeiden.
- In Verbindung mit einer Bereichsanfrage unter Verwendung des {{HTTPHeader("Range")}} Headers, kann dieser Header verwendet werden, um sicherzustellen, dass das neue angeforderte Fragment von einem unveränderten Dokument stammt.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Anforderungsheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungsheader")}}</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
If-Unmodified-Since: <day-name>, <day> <month> <year> <hour>:<minute>:<second> GMT
```

## Direktiven

- `<day-name>`
  - : Einer von `Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat`, oder `Sun` (Groß/Kleinschreibung beachten).
- `<day>`
  - : 2-stelliges Tagesnummer, z.B., "04" oder "23".
- `<month>`
  - : Einer von `Jan`, `Feb`, `Mar`, `Apr`, `May`, `Jun`, `Jul`, `Aug`, `Sep`, `Oct`, `Nov`, `Dec` (Groß/Kleinschreibung beachten).
- `<year>`
  - : 4-stelliges Jahreszahl, z.B., "1990" oder "2016".
- `<hour>`
  - : 2-stellige Stundenzahl, z.B., "09" oder "23".
- `<minute>`
  - : 2-stellige Minutenzahl, z.B., "04" oder "59".
- `<second>`
  - : 2-stellige Sekundenzahl, z.B., "04" oder "59".
- GMT
  - : Greenwich Mean Time. HTTP-Daten sind immer in GMT ausgedrückt, niemals in lokaler Zeit.

## Beispiele

```http
If-Unmodified-Since: Wed, 21 Oct 2015 07:28:00 GMT
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTTP konditionale Anfragen](/de/docs/Web/HTTP/Conditional_requests) Leitfaden
- {{HTTPHeader("Last-Modified")}}
- {{HTTPHeader("If-Range")}}, {{HTTPHeader("Range")}} Bereichsanfrage-Header
- {{HTTPHeader("If-Match")}}, {{HTTPHeader("If-Modified-Since")}}, {{HTTPHeader("If-None-Match")}} konditionale Anforderungsheader
- {{HTTPStatus("304", "304 Not Modified")}}, {{HTTPStatus("412", "412 Precondition Failed")}} Antwortstatuscodes
