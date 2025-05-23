---
title: Max-Forwards header
short-title: Max-Forwards
slug: Web/HTTP/Reference/Headers/Max-Forwards
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}

Der HTTP-**`Max-Forwards`**-{{Glossary("request_header", "Request-Header")}} wird mit der {{HTTPMethod("TRACE")}}-Methode verwendet, um die Anzahl der Knoten (in der Regel {{Glossary("Proxy_server", "Proxies")}}), durch die die Anfrage geleitet wird, zu begrenzen. Sein Wert ist eine Ganzzahl, die die _maximale Anzahl_ von Knoten angibt, die die Anfrage passieren muss. An jedem Knoten wird der Wert verringert, und die `TRACE`-Anfrage wird an den nächsten Knoten weitergeleitet, bis das Ziel erreicht ist oder der empfangene Wert von `Max-Forwards` null ist. Die Anfrage wird dann zurückgesendet (sensible Header werden dabei soweit möglich ausgeschlossen) und dient als Inhalt einer {{HTTPStatus("200")}}-Antwort. Dies ermöglicht es dem Client zu sehen, was am anderen Ende der Anfragestrecke empfangen wird (der {{HTTPHeader("Via")}}-Header ist dabei von besonderem Interesse) für Test- oder Diagnosezwecke.

Wenn der `Max-Forwards`-Header in einer `TRACE`-Anfrage nicht vorhanden ist, wird ein Knoten annehmen, dass es keine maximale Anzahl von Weiterleitungen gibt.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Request-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Request-Header")}}</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Max-Forwards: <integer>
```

## Beispiele

```http
Max-Forwards: 0
Max-Forwards: 10
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Dieses Feature ist weder für Browser vorgesehen noch in ihnen implementiert.

## Siehe auch

- {{HTTPMethod("TRACE")}}-Methode
- {{HTTPStatus("405", "405 Method Not Allowed")}}
