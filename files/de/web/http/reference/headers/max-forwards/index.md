---
title: Max-Forwards header
short-title: Max-Forwards
slug: Web/HTTP/Reference/Headers/Max-Forwards
l10n:
  sourceCommit: 77b4195dec3174497169d2e2de35e1eae29139f0
---

Der HTTP **`Max-Forwards`** {{Glossary("request_header", "Request-Header")}} wird zusammen mit der {{HTTPMethod("TRACE")}}- und der {{HTTPMethod("OPTIONS")}}-Methode verwendet, um die Anzahl der Knoten (in der Regel {{Glossary("Proxy_server", "Proxys")}}) zu begrenzen, durch die die Anfrage weitergeleitet wird.

Sein Wert ist eine Ganzzahl, die die _maximale Anzahl_ von Knoten angibt, die besucht werden müssen.
An jedem Knoten wird der Wert dekrementiert, und die Anfrage wird an den nächsten Knoten weitergeleitet, bis das Ziel erreicht ist oder der empfangene Wert von `Max-Forwards` null ist.
Die Anfrage wird dann (ausgenommen sensible Header, wo dies zutrifft) als Body einer {{HTTPStatus("200")}}-Antwort zurückgesendet.
Dies ermöglicht es dem Client, zu sehen, was am anderen Ende der Anfragenkette empfangen wird (der {{HTTPHeader("Via")}}-Header ist von besonderem Interesse) zu Test- oder Diagnosezwecken.

Wenn der `Max-Forwards`-Header in einer `TRACE`- oder `OPTIONS`-Anfrage nicht vorhanden ist, wird ein Knoten annehmen, dass es keine maximale Anzahl von Weiterleitungen gibt.

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

Dieses Feature ist weder für Browser gedacht, noch in ihnen implementiert.

## Siehe auch

- {{HTTPMethod("TRACE")}}-Methode
- {{HTTPMethod("OPTIONS")}}-Methode
- {{HTTPStatus("405", "405 Method Not Allowed")}}
