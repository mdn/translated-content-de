---
title: Last-Modified
slug: Web/HTTP/Headers/Last-Modified
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

Der **`Last-Modified`** HTTP-Antwortheader enthält ein Datum und eine Uhrzeit, zu der der Ursprungsserver glaubt, dass die Ressource zuletzt geändert wurde. Er wird als Validator verwendet, um festzustellen, ob die Ressource dieselbe wie die zuvor gespeicherte ist. Weniger genau als ein {{HTTPHeader("ETag")}}-Header, dient er als Ersatzmechanismus. Bedingte Anfragen, die {{HTTPHeader("If-Modified-Since")}}- oder {{HTTPHeader("If-Unmodified-Since")}}-Header enthalten, nutzen dieses Feld.

`Last-Modified` wird auch von [Crawlern](/de/docs/Glossary/Crawler) verwendet, um die Crawl-Frequenz anzupassen, von Browsern beim [heuristischen Caching](/de/docs/Web/HTTP/Caching#heuristic_caching) und von Content-Management-Systemen (CMS), um die Zeit anzuzeigen, zu der der Inhalt zuletzt geändert wurde.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>[Repräsentations-Header](/de/docs/Glossary/Representation_header)</td>
    </tr>
    <tr>
      <th scope="row">[Verbotener Header-Name](/de/docs/Glossary/Forbidden_header_name)</th>
      <td>nein</td>
    </tr>
    <tr>
      <th scope="row">
        [CORS-gesicherter Antwort-Header](/de/docs/Glossary/CORS-safelisted_response_header)
      </th>
      <td>ja</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Last-Modified: <day-name>, <day> <month> <year> <hour>:<minute>:<second> GMT
```

## Direktiven

- \<day-name>
  - : Einer von "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" oder "Sun" (Groß-/Kleinschreibung beachten).
- \<day>
  - : Zweistellige Tagesnummer, z.B. "04" oder "23".
- \<month>
  - : Einer von "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov",
    "Dec" (Groß-/Kleinschreibung beachten).
- \<year>
  - : Vierstellige Jahreszahl, z.B. "1990" oder "2016".
- \<hour>
  - : Zweistellige Stundenzahl, z.B. "09" oder "23".
- \<minute>
  - : Zweistellige Minutenzahl, z.B. "04" oder "59".
- \<second>
  - : Zweistellige Sekundenzahl, z.B. "04" oder "59".
- `GMT`
  - : Greenwich Mean Time. HTTP-Daten werden immer in GMT und nie in Ortszeit angegeben.

## Beispiele

```http
Last-Modified: Wed, 21 Oct 2015 07:28:00 GMT
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("If-Modified-Since")}}
- {{HTTPHeader("If-Unmodified-Since")}}
- {{HTTPHeader("Etag")}}
