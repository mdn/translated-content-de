---
title: If-Unmodified-Since
slug: Web/HTTP/Headers/If-Unmodified-Since
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

Das **`If-Unmodified-Since`** Anfrage-Header im HyperText Transfer Protocol (HTTP) macht die Anfrage für die Ressource bedingt: Der Server sendet die angeforderte Ressource oder akzeptiert sie im Falle einer {{HTTPMethod("POST")}} oder einer anderen nicht {{Glossary("Safe/HTTP", "safe")}} Methode nur, wenn die Ressource nicht nach dem im HTTP-Header angegebenen Datum modifiziert wurde. Falls die Ressource nach dem angegebenen Datum verändert wurde, ist die Antwort ein Fehler mit dem Status {{HTTPStatus("412", "412 Precondition Failed")}}.

Das **`If-Unmodified-Since`** HTTP-Header wird häufig in den folgenden Situationen verwendet:

- In Verbindung mit nicht {{Glossary("Safe/HTTP", "safe")}} Methoden, wie {{HTTPMethod("POST")}}, kann dieses Header zur Implementierung einer [optimistischen Nebenläufigkeitskontrolle](https://en.wikipedia.org/wiki/Optimistic_concurrency_control) genutzt werden, wie es von einigen Wikis praktiziert wird: Änderungen werden abgelehnt, wenn das gespeicherte Dokument seit dem Abruf des Originals verändert wurde.
- In Verbindung mit einer Bereichsanfrage unter Verwendung des {{HTTPHeader("Range")}} Headers kann dieses Header verwendet werden, um sicherzustellen, dass das neu angeforderte Fragment aus einem unveränderten Dokument stammt.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>no</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
If-Unmodified-Since: <day-name>, <day> <month> <year> <hour>:<minute>:<second> GMT
```

## Direktiven

- \<day-name>
  - : Eine 3-Buchstaben-Beschreibung des Wochentages. Eine der Möglichkeiten: "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", oder "Sun" (case-sensitive).
- \<day>
  - : Eine 2-stellige Tagesnummer des Monats. Beispiele: "04", "23".
- \<month>
  - : Eine 3-Buchstaben-Beschreibung des Monats. Eine der Möglichkeiten: "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" (case-sensitive).
- \<year>
  - : Eine 4-stellige Jahreszahl. Beispiele: "1990", "2016".
- \<hour>
  - : Eine 2-stellige Stundenzahl basierend auf einem 24-Stunden-System. Beispiele: "09", "23".
- \<minute>
  - : Eine 2-stellige Minutenzahl. Beispiele: "04", "59".
- \<second>
  - : Eine 2-stellige Sekundenzahl. Beispiele: "04", "59".
- `GMT`
  - : Greenwich Mean Time. HTTP-Daten werden immer in GMT und niemals in lokaler Zeit ausgedrückt.

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
