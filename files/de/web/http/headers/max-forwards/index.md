---
title: Max-Forwards
slug: Web/HTTP/Headers/Max-Forwards
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}

Der HTTP **`Max-Forwards`** {{Glossary("request_header", "Request-Header")}} wird mit der {{HTTPMethod("TRACE")}}-Methode verwendet, um die Anzahl der Knoten (meist {{Glossary("Proxy_server", "Proxies")}}) zu begrenzen, die die Anfrage durchläuft.
Sein Wert ist eine Ganzzahl, die die _maximale Anzahl_ der Knoten angibt, die besucht werden muss.
An jedem Knoten wird der Wert dekrementiert und die `TRACE`-Anfrage zum nächsten Knoten weitergeleitet, bis das Ziel erreicht wird oder der empfangene Wert von `Max-Forwards` null ist.
Dann wird die Anfrage (unter Ausschluss sensibler Header, wenn angemessen) als der Inhalt einer {{HTTPStatus("200")}}-Antwort zurückgesendet.
Dies ermöglicht es dem Client zu sehen, was am anderen Ende der Anfragereihe empfangen wird (der {{HTTPHeader("Via")}}-Header ist von besonderem Interesse) zu Test- oder Diagnosezwecken.

Wenn der `Max-Forwards`-Header in einer `TRACE`-Anfrage nicht vorhanden ist, wird ein Knoten davon ausgehen, dass keine maximale Anzahl von Weiterleitungen vorliegt.

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

Dieses Feature ist weder auf Browser ausgerichtet noch in Browsern implementiert.

## Siehe auch

- {{HTTPMethod("TRACE")}}-Methode
- {{HTTPStatus("405", "405 Method Not Allowed")}}
