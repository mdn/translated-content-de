---
title: Last-Modified header
short-title: Last-Modified
slug: Web/HTTP/Reference/Headers/Last-Modified
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}

Der HTTP **`Last-Modified`** {{Glossary("response_header", "Antwort-Header")}} enthält ein Datum und eine Uhrzeit, zu der der Ursprungsserver glaubt, dass die Ressource zuletzt geändert wurde. Er wird als Validator in [Bedingten Anfragen](/de/docs/Web/HTTP/Guides/Conditional_requests) ({{HTTPHeader("If-Modified-Since")}} oder {{HTTPHeader("If-Unmodified-Since")}}) verwendet, um festzustellen, ob eine angeforderte Ressource dieselbe ist wie eine, die bereits vom Client gespeichert wurde. Er ist weniger genau als ein {{HTTPHeader("ETag")}} zur Bestimmung des Datei-Inhalts, kann jedoch als Fallback-Mechanismus verwendet werden, wenn ETags nicht verfügbar sind.

`Last-Modified` wird auch von {{Glossary("Crawler", "Crawlern")}} genutzt, um die Crawl-Frequenz anzupassen, von Browsern im [heuristischen Caching](/de/docs/Web/HTTP/Guides/Caching#heuristic_caching), und von Content-Management-Systemen (CMS), um die Zeit anzuzeigen, zu der der Inhalt zuletzt geändert wurde.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}, {{Glossary("Representation_header", "Repräsentations-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anfrage-Header")}}</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_response_header", "CORS-safelisted Antwort-Header")}}
      </th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Last-Modified: <day-name>, <day> <month> <year> <hour>:<minute>:<second> GMT
```

## Direktiven

- `<day-name>`
  - : Einer von "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", oder "Sun" (Groß- und Kleinschreibung beachten).
- `<day>`
  - : 2-stellige Tageszahl, z. B. "04" oder "23".
- `<month>`
  - : Einer von "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" (Groß- und Kleinschreibung beachten).
- `<year>`
  - : 4-stellige Jahreszahl, z. B. "1990" oder "2016".
- `<hour>`
  - : 2-stellige Stundenzahl, z. B. "09" oder "23".
- `<minute>`
  - : 2-stellige Minutenzahl, z. B. "04" oder "59".
- `<second>`
  - : 2-stellige Sekundenzahl, z. B. "04" oder "59".
- GMT
  - : Greenwich Mean Time. HTTP-Daten werden immer in GMT ausgedrückt, niemals in lokaler Zeit.

## Beispiele

```http
Last-Modified: Wed, 21 Oct 2015 07:28:00 GMT
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Etag")}}
- [HTTP Bedingte Anfragen](/de/docs/Web/HTTP/Guides/Conditional_requests) Leitfaden
- {{HTTPHeader("If-Match")}}, {{HTTPHeader("If-Modified-Since")}}, {{HTTPHeader("If-Unmodified-Since")}}, {{HTTPHeader("If-None-Match")}} bedingte Anfrage-Header
- {{HTTPStatus("304", "304 Not Modified")}}, {{HTTPStatus("412", "412 Precondition Failed")}} Antwort-Statuscodes
