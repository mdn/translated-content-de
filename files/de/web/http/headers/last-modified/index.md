---
title: Last-Modified
slug: Web/HTTP/Headers/Last-Modified
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}

Der HTTP **`Last-Modified`** {{Glossary("response_header", "Antwort-Header")}} enthält ein Datum und eine Uhrzeit, die angeben, wann der Ursprungsserver glaubt, dass die Ressource zuletzt geändert wurde. Er wird als Validator in [konditionalen Anfragen](/de/docs/Web/HTTP/Conditional_requests) ({{HTTPHeader("If-Modified-Since")}} oder {{HTTPHeader("If-Unmodified-Since")}}) verwendet, um festzustellen, ob eine angeforderte Ressource identisch mit einer bereits vom Client gespeicherten ist. Er ist weniger genau als ein {{HTTPHeader("ETag")}}, um den Inhalt einer Datei zu bestimmen, kann aber als Rückfallmechanismus verwendet werden, wenn ETags nicht verfügbar sind.

`Last-Modified` wird auch von {{Glossary("Crawler", "Crawlern")}} verwendet, um die Crawl-Häufigkeit anzupassen, von Browsern beim [heuristischen Caching](/de/docs/Web/HTTP/Caching#heuristic_caching) und von Content-Management-Systemen (CMS) genutzt, um die Zeit anzuzeigen, wann der Inhalt zuletzt geändert wurde.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}, {{Glossary("Representation_header", "Repräsentations-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungs-Header")}}</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_response_header", "CORS-sicherer Antwort-Header")}}
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
  - : Einer von "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" oder "Sun" (groß-/kleinschreibungssensitiv).
- `<day>`
  - : Zweistellige Tagesnummer, z.B. "04" oder "23".
- `<month>`
  - : Einer von "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" (groß-/kleinschreibungssensitiv).
- `<year>`
  - : Vierstellige Jahreszahl, z.B. "1990" oder "2016".
- `<hour>`
  - : Zweistellige Stundenzahl, z.B. "09" oder "23".
- `<minute>`
  - : Zweistellige Minutenzahl, z.B. "04" oder "59".
- `<second>`
  - : Zweistellige Sekundenzahl, z.B. "04" oder "59".
- GMT
  - : Greenwich Mean Time. HTTP-Daten werden immer in GMT und niemals in Ortszeit angegeben.

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
- [HTTP-Konditionale Anfragen](/de/docs/Web/HTTP/Conditional_requests) Leitfaden
- {{HTTPHeader("If-Match")}}, {{HTTPHeader("If-Modified-Since")}}, {{HTTPHeader("If-Unmodified-Since")}}, {{HTTPHeader("If-None-Match")}} konditionale Anforderungs-Header
- {{HTTPStatus("304", "304 Not Modified")}}, {{HTTPStatus("412", "412 Precondition Failed")}} Antwortstatus-Codes
