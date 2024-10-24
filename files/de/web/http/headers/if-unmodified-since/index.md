---
title: If-Unmodified-Since
slug: Web/HTTP/Headers/If-Unmodified-Since
l10n:
  sourceCommit: cadc98b0f5f2a770c6ab9b1ca0bf31a90378c6df
---

{{HTTPSidebar}}

Der HTTP-**`If-Unmodified-Since`**-{{Glossary("request_header", "Request-Header")}} macht die Anfrage nach der Ressource [bedingt](/de/docs/Web/HTTP/Conditional_requests). Der Server sendet die angeforderte Ressource (oder akzeptiert sie im Fall eines {{HTTPMethod("POST")}} oder einer anderen nicht-{{Glossary("Safe/HTTP", "sicheren")}} Methode) nur, wenn die Ressource auf dem Server nach dem Datum im Anforderungsheader nicht geändert wurde. Wenn die Ressource nach dem angegebenen Datum geändert wurde, wird die Antwort ein {{HTTPStatus("412", "412 Precondition Failed")}}-Fehler sein.

Der `If-Unmodified-Since`-Header wird häufig in den folgenden Situationen verwendet:

- In Verbindung mit nicht-{{Glossary("Safe/HTTP", "sicheren")}} Methoden wie {{HTTPMethod("POST")}} kann dieser Header verwendet werden, um eine [optimistische Nebenläufigkeitskontrolle](https://en.wikipedia.org/wiki/Optimistic_concurrency_control) zu implementieren, wie dies bei einigen Wikis der Fall ist: Revisionen werden abgelehnt, wenn das gespeicherte Dokument seit dem ursprünglichen Abruf geändert wurde, um Konflikte zu vermeiden.
- In Verbindung mit einer Bereichsanfrage unter Verwendung des {{HTTPHeader("Range")}}-Headers kann dieser Header verwendet werden, um sicherzustellen, dass das neu angeforderte Fragment von einem unveränderten Dokument stammt.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Request-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
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
  - : Einer von "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", oder "Sun" (groß-/kleinschreibungssensitiv).
- `<day>`
  - : Zweistellige Tageszahl, z.B. "04" oder "23".
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
If-Unmodified-Since: Wed, 21 Oct 2015 07:28:00 GMT
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTTP Bedingte Anfragen](/de/docs/Web/HTTP/Conditional_requests) Leitfaden
- {{HTTPHeader("Last-Modified")}}
- {{HTTPHeader("If-Range")}}, {{HTTPHeader("Range")}} Bereichsanforderungs-Header
- {{HTTPHeader("If-Match")}}, {{HTTPHeader("If-Modified-Since")}}, {{HTTPHeader("If-None-Match")}} bedingte Anforderungs-Header
- {{HTTPStatus("304", "304 Not Modified")}}, {{HTTPStatus("412", "412 Precondition Failed")}} Antwortstatuscodes
