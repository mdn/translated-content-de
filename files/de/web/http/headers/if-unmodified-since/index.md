---
title: If-Unmodified-Since
slug: Web/HTTP/Headers/If-Unmodified-Since
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

Der HyperText Transfer Protocol (HTTP) **`If-Unmodified-Since`** Anforderungsheader macht die Anfrage für die Ressource bedingt: Der Server wird die angeforderte Ressource senden oder sie im Falle einer {{HTTPMethod("POST")}} oder einer anderen nicht-{{Glossary("Safe/HTTP", "sicheren")}} Methode akzeptieren, nur wenn die Ressource nicht nach dem in diesem HTTP-Header angegebenen Datum geändert wurde. Wenn die Ressource nach dem angegebenen Datum geändert wurde, wird die Antwort ein {{HTTPStatus("412", "412 Precondition Failed")}} Fehler sein.

Der **`If-Unmodified-Since`** HTTP-Header wird häufig in den folgenden Situationen verwendet:

- In Verbindung mit nicht-{{Glossary("Safe/HTTP", "sicheren")}} Methoden, wie {{HTTPMethod("POST")}}, kann dieser Header verwendet werden, um eine [optimistische Parallelitätskontrolle](https://en.wikipedia.org/wiki/Optimistic_concurrency_control) zu implementieren, wie es einige Wikis tun: Bearbeitungen werden abgelehnt, wenn das gespeicherte Dokument seit der ursprünglichen Abruf verändert wurde.
- In Verbindung mit einer Bereichsanfrage mittels des {{HTTPHeader("Range")}} Headers kann dieser Header verwendet werden, um sicherzustellen, dass das neu angeforderte Fragment aus einem unveränderten Dokument stammt.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Anforderungsheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
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
  - : Eine 3-Buchstaben-Beschreibung des Wochentags. Einer von "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", oder "Sun" (beachten Sie die Groß- und Kleinschreibung).
- \<day>
  - : Eine zweistellige Tageszahl des Monats. Beispiele: "04", "23".
- \<month>
  - : Eine 3-Buchstaben-Beschreibung des Monats. Einer von "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" (beachten Sie die Groß- und Kleinschreibung).
- \<year>
  - : Eine vierstellige Jahreszahl. Beispiele: "1990", "2016".
- \<hour>
  - : Eine zweistellige Stundenzahl basierend auf einem 24-Stunden-System. Beispiele: "09", "23".
- \<minute>
  - : Eine zweistellige Minutenzahl. Beispiele: "04", "59".
- \<second>
  - : Eine zweistellige Sekundenzahl. Beispiele: "04", "59".
- `GMT`
  - : Greenwich Mean Time. HTTP-Daten werden immer in GMT ausgedrückt, niemals in Ortszeit.

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
