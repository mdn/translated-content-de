---
title: If-Unmodified-Since
slug: Web/HTTP/Headers/If-Unmodified-Since
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

Das Hypertext Transfer Protocol (HTTP) **`If-Unmodified-Since`** Anforderungsheader macht die Anfrage für die Ressource bedingt: Der Server wird die angeforderte Ressource senden oder sie im Falle eines {{HTTPMethod("POST")}} oder einer anderen nicht-[sicheren](/de/docs/Glossary/Safe/HTTP) Methode akzeptieren, nur wenn die Ressource nach dem durch diesen HTTP-Header angegebenen Datum nicht geändert wurde. Wenn die Ressource nach dem angegebenen Datum geändert wurde, wird die Antwort ein {{HTTPStatus("412", "412 Precondition Failed")}} Fehler sein.

Der **`If-Unmodified-Since`** HTTP-Header wird häufig in den folgenden Situationen verwendet:

- In Verbindung mit nicht-[sicheren](/de/docs/Glossary/Safe/HTTP) Methoden wie {{HTTPMethod("POST")}}, kann dieser Header zur Implementierung einer [optimistischen Nebenläufigkeitskontrolle](https://en.wikipedia.org/wiki/Optimistic_concurrency_control) verwendet werden, wie es bei einigen Wikis gemacht wird: Änderungen werden abgelehnt, wenn das gespeicherte Dokument seit dem Abruf des Originals geändert wurde.
- In Verbindung mit einer Bereichsanfrage unter Verwendung des {{HTTPHeader("Range")}} Headers, kann dieser Header verwendet werden, um sicherzustellen, dass das neu angeforderte Fragment aus einem unveränderten Dokument stammt.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>[Anforderungsheader](/de/docs/Glossary/Request_header)</td>
    </tr>
    <tr>
      <th scope="row">[Verbotener Header-Name](/de/docs/Glossary/Forbidden_header_name)</th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
If-Unmodified-Since: <day-name>, <day> <month> <year> <hour>:<minute>:<second> GMT
```

## Direktiven

- \<day-name>
  - : Eine 3-Buchstaben-Beschreibung des Wochentags. Einer von "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" oder "Sun" (Groß-/Kleinschreibung beachten).
- \<day>
  - : Eine 2-stellige Tagesnummer des Monats. Beispiele: "04", "23".
- \<month>
  - : Eine 3-Buchstaben-Beschreibung des Monats. Einer von "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" (Groß-/Kleinschreibung beachten).
- \<year>
  - : Eine 4-stellige Jahreszahl. Beispiele: "1990", "2016".
- \<hour>
  - : Eine 2-stellige Stundenzahl basierend auf einem 24-Stunden-System. Beispiele: "09", "23".
- \<minute>
  - : Eine 2-stellige Minutenzahl. Beispiele: "04", "59".
- \<second>
  - : Eine 2-stellige Sekundenzahl. Beispiele: "04", "59".
- `GMT`
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

- {{HTTPHeader("Last-Modified")}}
- {{HTTPHeader("If-Modified-Since")}}
- {{HTTPHeader("If-Match")}}
- {{HTTPHeader("If-None-Match")}}
- {{HTTPHeader("Range")}}
- {{HTTPStatus("412", "412 Precondition Failed")}}
