---
title: Wenn-Bereich
slug: Web/HTTP/Headers/If-Range
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

Der **`If-Range`** HTTP-Anforderungs-Header macht eine Bereichsanfrage bedingt: Wenn die Bedingung erfüllt ist, wird die Bereichsanfrage ausgeführt und der Server sendet eine {{HTTPStatus("206")}} `Partial Content`-Antwort mit dem entsprechenden Inhalt. Wenn die Bedingung nicht erfüllt ist, wird die vollständige Ressource mit einem {{HTTPStatus("200")}} `OK`-Status zurückgesendet.

Dieser Header kann entweder mit dem {{HTTPHeader("Last-Modified")}}-Validator oder mit {{HTTPHeader("ETag")}} verwendet werden, jedoch nicht mit beiden.

Der häufigste Anwendungsfall ist die Wiederaufnahme eines Downloads, um sicherzustellen, dass die gespeicherte Ressource seit dem Empfang des letzten Fragments nicht geändert wurde.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
If-Range: <day-name>, <day> <month> <year> <hour>:<minute>:<second> GMT
If-Range: <etag>
```

## Direktiven

- \<etag>
  - : Ein Entity-Tag, das die angeforderte Ressource eindeutig repräsentiert. Es ist eine Zeichenkette aus ASCII-Zeichen, die in Anführungszeichen gesetzt ist (wie `"675af34563dc-tr34"`). Ein schwaches Entity-Tag (eines, das mit `W/` gekennzeichnet ist) darf in diesem Header nicht verwendet werden.
- \<day-name>
  - : Einer von "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" oder "Sun" (groß-/kleinschreibungssensitiv).
- \<day>
  - : 2-stellige Tagesnummer, z. B. "04" oder "23".
- \<month>
  - : Einer von "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" (groß-/kleinschreibungssensitiv).
- \<year>
  - : 4-stellige Jahreszahl, z. B. "1990" oder "2016".
- \<hour>
  - : 2-stellige Stundenzahl, z. B. "09" oder "23".
- \<minute>
  - : 2-stellige Minutenzahl, z. B. "04" oder "59".
- \<second>
  - : 2-stellige Sekundenzahl, z. B. "04" oder "59".
- `GMT`
  - : Greenwich Mean Time. HTTP-Daten werden immer in GMT ausgedrückt, niemals in lokaler Zeit.

## Beispiele

```http
If-Range: Wed, 21 Oct 2015 07:28:00 GMT
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("ETag")}}
- {{HTTPHeader("Last-Modified")}}
- {{HTTPHeader("If-Modified-Since")}}
- {{HTTPHeader("If-Unmodified-Since")}}
- {{HTTPHeader("If-Match")}}
- {{HTTPHeader("If-None-Match")}}
- {{HTTPStatus("206", "206 Partial Content")}}
- [HTTP-Bedingte Anfragen](/de/docs/Web/HTTP/Conditional_requests)
