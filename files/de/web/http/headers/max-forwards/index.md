---
title: Max-Forwards
slug: Web/HTTP/Headers/Max-Forwards
l10n:
  sourceCommit: cadc98b0f5f2a770c6ab9b1ca0bf31a90378c6df
---

{{HTTPSidebar}}

Der HTTP **`Max-Forwards`** {{Glossary("request_header", "Request-Header")}} wird mit der {{HTTPMethod("TRACE")}}-Methode verwendet, um die Anzahl der Knoten (in der Regel {{Glossary("Proxy_server", "Proxys")}}) zu begrenzen, durch die die Anfrage geleitet wird. Sein Wert ist eine ganze Zahl, die die _maximale Anzahl_ von Knoten angibt, die es durchlaufen muss. Bei jedem Knoten wird der Wert dekrementiert und die `TRACE`-Anfrage wird an den nächsten Knoten weitergeleitet, bis das Ziel erreicht ist oder der erhaltene Wert von `Max-Forwards` null ist. Die Anfrage wird dann (ohne sensible Header, wo dies angemessen ist) als Körper einer {{HTTPStatus("200")}}-Antwort zurückgesendet. Dies ermöglicht es dem Client, zu sehen, was am anderen Ende der Anfragestrecke empfangen wird (der {{HTTPHeader("Via")}}-Header ist von besonderem Interesse) für Test- oder Diagnosezwecke.

Wenn der `Max-Forwards`-Header in einer `TRACE`-Anfrage nicht vorhanden ist, geht ein Knoten davon aus, dass es keine maximale Anzahl von Weiterleitungen gibt.

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

Diese Funktion ist weder auf Browser ausgerichtet noch in ihnen implementiert.

## Siehe auch

- {{HTTPMethod("TRACE")}}-Methode
- {{HTTPStatus("405", "405 Method Not Allowed")}}
