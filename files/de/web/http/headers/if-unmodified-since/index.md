---
title: If-Unmodified-Since
slug: Web/HTTP/Headers/If-Unmodified-Since
l10n:
  sourceCommit: edefa50f18613599b92e2eb3e9556fbde220b360
---

{{HTTPSidebar}}

Der HTTP **`If-Unmodified-Since`** {{Glossary("request_header", "Request Header")}} macht die Anforderung der Ressource [bedingt](/de/docs/Web/HTTP/Conditional_requests). Der Server sendet die angeforderte Ressource (oder akzeptiert sie im Fall von {{HTTPMethod("POST")}} oder einer anderen nicht-{{Glossary("Safe/HTTP", "sicheren")}} Methode) nur, wenn die Ressource auf dem Server nach dem Datum im Request Header nicht geändert wurde. Wenn die Ressource nach dem angegebenen Datum geändert wurde, wird die Antwort ein {{HTTPStatus("412", "412 Precondition Failed")}} Fehler sein.

Der `If-Unmodified-Since` Header wird üblicherweise in den folgenden Situationen verwendet:

- In Verbindung mit nicht-{{Glossary("Safe/HTTP", "sicheren")}} Methoden wie {{HTTPMethod("POST")}} kann dieser Header zur Implementierung einer [optimistischen nebenläufigen Steuerung](https://en.wikipedia.org/wiki/Optimistic_concurrency_control) verwendet werden, wie es manche Wikis tun: Überarbeitungen werden abgelehnt, wenn das gespeicherte Dokument seit dem Abrufen des Originals geändert wurde, um Konflikte zu vermeiden.
- In Verbindung mit einer Bereichsanfrage unter Verwendung des {{HTTPHeader("Range")}} Headers kann dieser Header verwendet werden, um sicherzustellen, dass das neu angeforderte Fragment von einem unveränderten Dokument stammt.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Request Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Unzulässiger Header-Name")}}</th>
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
  - : Einer von `Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat`, oder `Sun` (Groß-/Kleinschreibung beachten).
- `<day>`
  - : Zweistellige Tagesnummer, z. B. "04" oder "23".
- `<month>`
  - : Einer von `Jan`, `Feb`, `Mar`, `Apr`, `May`, `Jun`, `Jul`, `Aug`, `Sep`, `Oct`, `Nov`, `Dec` (Groß-/Kleinschreibung beachten).
- `<year>`
  - : Vierstellige Jahreszahl, z. B. "1990" oder "2016".
- `<hour>`
  - : Zweistellige Stundenzahl, z. B. "09" oder "23".
- `<minute>`
  - : Zweistellige Minutenzahl, z. B. "04" oder "59".
- `<second>`
  - : Zweistellige Sekundenzahl, z. B. "04" oder "59".
- GMT
  - : Greenwich Mean Time. HTTP-Daten werden immer in GMT angegeben, niemals in lokaler Zeit.

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
- {{HTTPHeader("If-Range")}}, {{HTTPHeader("Range")}} Bereichsanfrage-Header
- {{HTTPHeader("If-Match")}}, {{HTTPHeader("If-Modified-Since")}}, {{HTTPHeader("If-None-Match")}} bedingte Anfrage-Header
- {{HTTPStatus("304", "304 Not Modified")}}, {{HTTPStatus("412", "412 Precondition Failed")}} Antwortstatuscodes
