---
title: If-Unmodified-Since header
short-title: If-Unmodified-Since
slug: Web/HTTP/Reference/Headers/If-Unmodified-Since
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}

Der HTTP-**`If-Unmodified-Since`**-{{Glossary("request_header", "Request-Header")}} macht die Anfrage nach der Ressource [bedingt](/de/docs/Web/HTTP/Guides/Conditional_requests). Der Server sendet die angeforderte Ressource (oder akzeptiert sie im Falle eines {{HTTPMethod("POST")}} oder einer anderen nicht-{{Glossary("Safe/HTTP", "sicheren")}} Methode) nur, wenn die Ressource auf dem Server nach dem Datum im Request-Header nicht verändert wurde. Wenn die Ressource nach dem angegebenen Datum verändert wurde, ist die Antwort ein {{HTTPStatus("412", "412 Precondition Failed")}}-Fehler.

Der `If-Unmodified-Since`-Header wird häufig in den folgenden Situationen verwendet:

- In Verbindung mit nicht-{{Glossary("Safe/HTTP", "sicheren")}} Methoden wie {{HTTPMethod("POST")}} kann dieser Header verwendet werden, um eine [optimistische Nebenläufigkeitskontrolle](https://en.wikipedia.org/wiki/Optimistic_concurrency_control) zu implementieren, wie es von einigen Wikis gemacht wird: Überarbeitungen werden abgelehnt, wenn das gespeicherte Dokument seit dem Abruf des Originals geändert wurde, um Konflikte zu vermeiden.
- In Verbindung mit einer Bereichsanfrage unter Verwendung des {{HTTPHeader("Range")}}-Headers kann dieser Header verwendet werden, um sicherzustellen, dass das neu angeforderte Fragment aus einem unveränderten Dokument stammt.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Request-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Request-Header")}}</th>
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
  - : Einer von `Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat` oder `Sun` (Groß- und Kleinschreibung beachten).
- `<day>`
  - : 2-stellige Tagesnummer, z.B. "04" oder "23".
- `<month>`
  - : Einer von `Jan`, `Feb`, `Mar`, `Apr`, `May`, `Jun`, `Jul`, `Aug`, `Sep`, `Oct`, `Nov`, `Dec` (Groß- und Kleinschreibung beachten).
- `<year>`
  - : 4-stellige Jahreszahl, z.B. "1990" oder "2016".
- `<hour>`
  - : 2-stellige Stundenzahl, z.B. "09" oder "23".
- `<minute>`
  - : 2-stellige Minutenzahl, z.B. "04" oder "59".
- `<second>`
  - : 2-stellige Sekundenzahl, z.B. "04" oder "59".
- GMT
  - : Greenwich Mean Time. HTTP-Daten werden immer in GMT ausgedrückt, niemals in lokaler Zeit.

## Beispiele

```http
If-Unmodified-Since: Wed, 21 Oct 2015 07:28:00 GMT
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Leitfaden zu HTTP-Bedingungsanfragen](/de/docs/Web/HTTP/Guides/Conditional_requests)
- {{HTTPHeader("Last-Modified")}}
- {{HTTPHeader("If-Range")}}, {{HTTPHeader("Range")}} Bereichsanfrage-Header
- {{HTTPHeader("If-Match")}}, {{HTTPHeader("If-Modified-Since")}}, {{HTTPHeader("If-None-Match")}} Bedingungsanfrage-Header
- {{HTTPStatus("304", "304 Not Modified")}}, {{HTTPStatus("412", "412 Precondition Failed")}} Antwortstatuscodes
