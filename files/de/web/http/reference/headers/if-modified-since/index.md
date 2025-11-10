---
title: If-Modified-Since header
short-title: If-Modified-Since
slug: Web/HTTP/Reference/Headers/If-Modified-Since
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP **`If-Modified-Since`** {{Glossary("request_header", "Anforderungs-Header")}} macht eine Anfrage [konditional](/de/docs/Web/HTTP/Guides/Conditional_requests).
Der Server sendet die angeforderte Ressource mit einem {{HTTPStatus("200")}}-Status nur dann zurück, wenn sie nach dem Datum im `If-Modified-Since`-Header modifiziert wurde.
Wenn die Ressource seitdem nicht geändert wurde, ist die Antwort ein {{HTTPStatus("304")}} ohne jeden Inhalt, und der {{HTTPHeader("Last-Modified")}}-Antwortheader der vorherigen Anfrage enthält das Datum der letzten Änderung.

Im Gegensatz zu {{HTTPHeader("If-Unmodified-Since")}} kann `If-Modified-Since` nur mit {{HTTPMethod("GET")}} oder {{HTTPMethod("HEAD")}} verwendet werden.
Wenn es in Kombination mit {{HTTPHeader("If-None-Match")}} verwendet wird, wird es ignoriert, es sei denn, der Server unterstützt `If-None-Match` nicht.

Der häufigste Anwendungsfall besteht darin, eine zwischengespeicherte Entität zu aktualisieren, die keinen zugehörigen {{HTTPHeader("ETag")}} hat.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Anforderungs-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungs-Header")}}</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
If-Modified-Since: <day-name>, <day> <month> <year> <hour>:<minute>:<second> GMT
```

## Direktiven

- `<day-name>`
  - : Einer von `Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat` oder `Sun` (Groß- und Kleinschreibung beachten).
- `<day>`
  - : Zweistellige Tagesnummer, z.B. "04" oder "23".
- `<month>`
  - : Einer von `Jan`, `Feb`, `Mar`, `Apr`, `May`, `Jun`, `Jul`, `Aug`, `Sep`, `Oct`, `Nov`, `Dec` (Groß- und Kleinschreibung beachten).
- `<year>`
  - : Vierstellige Jahreszahl, z.B. "1990" oder "2016".
- `<hour>`
  - : Zweistellige Stundenzahl, z.B. "09" oder "23".
- `<minute>`
  - : Zweistellige Minutenzahl, z.B. "04" oder "59".
- `<second>`
  - : Zweistellige Sekundenzahl, z.B. "04" oder "59".
- GMT
  - : Greenwich Mean Time. HTTP-Daten werden immer in GMT angegeben, niemals in Ortszeit.

## Beispiele

```http
If-Modified-Since: Wed, 21 Oct 2015 07:28:00 GMT
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("ETag")}}
- {{HTTPHeader("If-Match")}}, {{HTTPHeader("If-None-Match")}}, {{HTTPHeader("If-Unmodified-Since")}} konditionelle Anforderungs-Header
- {{HTTPStatus("304", "304 Not Modified")}}, {{HTTPStatus("412", "412 Precondition Failed")}} Antwortstatus-Codes
