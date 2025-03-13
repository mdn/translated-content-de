---
title: Max-Forwards
slug: Web/HTTP/Reference/Headers/Max-Forwards
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Der HTTP-**`Max-Forwards`**-{{Glossary("request_header", "Anforderungsheader")}} wird mit der {{HTTPMethod("TRACE")}}-Methode verwendet, um die Anzahl der Knoten (normalerweise {{Glossary("Proxy_server", "Proxys")}}), durch die die Anfrage geht, zu begrenzen. Sein Wert ist eine ganze Zahl, die die _maximale Anzahl_ der Knoten angibt, die besucht werden müssen. An jedem Knoten wird der Wert dekrementiert und die `TRACE`-Anfrage wird an den nächsten Knoten weitergeleitet, bis das Ziel erreicht ist oder der empfangene `Max-Forwards`-Wert null ist. Die Anfrage wird dann (unter Ausschluss sensibler Header, wo zutreffend) als der Body einer {{HTTPStatus("200")}}-Antwort zurückgesendet. Dadurch kann der Client sehen, was am anderen Ende der Anforderungskette empfangen wird (der {{HTTPHeader("Via")}}-Header ist von besonderem Interesse), zu Test- oder Diagnosezwecken.

Wenn der `Max-Forwards`-Header in einer `TRACE`-Anfrage nicht vorhanden ist, nimmt ein Knoten an, dass es keine maximale Anzahl von Weiterleitungen gibt.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Anforderungsheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungsheader")}}</th>
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

Dieses Feature ist weder auf Browser ausgelegt noch in ihnen implementiert.

## Siehe auch

- {{HTTPMethod("TRACE")}}-Methode
- {{HTTPStatus("405", "405 Method Not Allowed")}}
