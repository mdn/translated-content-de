---
title: If-Unmodified-Since
slug: Web/HTTP/Reference/Headers/If-Unmodified-Since
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Der HTTP **`If-Unmodified-Since`** {{Glossary("request_header", "Request Header")}} macht die Anforderung für die Ressource [bedingt](/de/docs/Web/HTTP/Guides/Conditional_requests).
Der Server sendet die angeforderte Ressource (oder akzeptiert sie im Fall eines {{HTTPMethod("POST")}} oder einer anderen nicht-{{Glossary("Safe/HTTP", "sicheren")}} Methode) nur, wenn die Ressource auf dem Server nach dem Datum im Request Header nicht modifiziert wurde.
Wenn die Ressource nach dem angegebenen Datum modifiziert wurde, wird die Antwort ein {{HTTPStatus("412", "412 Precondition Failed")}} Fehler sein.

Der `If-Unmodified-Since` Header wird häufig in den folgenden Situationen verwendet:

- In Kombination mit nicht-{{Glossary("Safe/HTTP", "sicheren")}} Methoden wie {{HTTPMethod("POST")}} kann dieser Header verwendet werden, um eine [optimistische Parallelitätskontrolle](https://en.wikipedia.org/wiki/Optimistic_concurrency_control) zu implementieren, wie es einige Wikis tun: Revisionen werden abgelehnt, wenn das gespeicherte Dokument seit dem Abruf des Originals geändert wurde, um Konflikte zu vermeiden.
- In Verbindung mit einer Bereichsanfrage unter Verwendung des {{HTTPHeader("Range")}} Headers kann dieser Header verwendet werden, um sicherzustellen, dass das neu angeforderte Fragment aus einem unmodifizierten Dokument stammt.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Request Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Request Header")}}</th>
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
  - : Einer von `Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat` oder `Sun` (Groß-/Kleinschreibung beachten).
- `<day>`
  - : 2-stellige Tagesnummer, z.B. "04" oder "23".
- `<month>`
  - : Einer von `Jan`, `Feb`, `Mar`, `Apr`, `May`, `Jun`, `Jul`, `Aug`, `Sep`, `Oct`, `Nov`, `Dec` (Groß-/Kleinschreibung beachten).
- `<year>`
  - : 4-stellige Jahreszahl, z.B. "1990" oder "2016".
- `<hour>`
  - : 2-stellige Stundenzahl, z.B. "09" oder "23".
- `<minute>`
  - : 2-stellige Minutenzahl, z.B. "04" oder "59".
- `<second>`
  - : 2-stellige Sekundenzahl, z.B. "04" oder "59".
- GMT
  - : Greenwich Mean Time. HTTP-Daten werden immer in GMT angegeben, niemals in Ortszeit.

## Beispiele

```http
If-Unmodified-Since: Wed, 21 Oct 2015 07:28:00 GMT
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTTP-Bedingte Anforderungen](/de/docs/Web/HTTP/Guides/Conditional_requests) Leitfaden
- {{HTTPHeader("Last-Modified")}}
- {{HTTPHeader("If-Range")}}, {{HTTPHeader("Range")}} Bereichsanfrage-Header
- {{HTTPHeader("If-Match")}}, {{HTTPHeader("If-Modified-Since")}}, {{HTTPHeader("If-None-Match")}} bedingte Anfrage-Header
- {{HTTPStatus("304", "304 Not Modified")}}, {{HTTPStatus("412", "412 Precondition Failed")}} Antwortstatuscodes
