---
title: Max-Forwards
slug: Web/HTTP/Headers/Max-Forwards
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

Der **`Max-Forwards`** HTTP-Header einer Anfrage wird in Verbindung mit der [`TRACE`](/de/docs/Web/HTTP/Methods/TRACE)-Methode verwendet, um die Anzahl der Knoten (gewöhnlich Proxies) zu begrenzen, die die Anfrage durchläuft. Sein Wert ist eine Ganzzahl, die die _maximale Anzahl_ der Knoten angibt, die sie passieren muss. An jedem Knoten wird der Wert dekrementiert und die `TRACE`-Anfrage wird zum nächsten Knoten weitergeleitet, bis das Ziel erreicht ist oder der empfangene Wert von `Max-Forwards` null ist. Dann wird die Anfrage, mit Ausnahme einiger Header, als der Body einer `200 OK`-Antwort zurückgesendet.

Wenn der `Max-Forwards`-Header in einer `TRACE`-Anfrage nicht vorhanden ist, nimmt ein Knoten an, dass es keine maximale Anzahl von Weiterleitungen gibt.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
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

Dieses Feature ist weder für Browser bestimmt noch in diesen implementiert.

## Siehe auch

- Die HTTP-Methode [`TRACE`](/de/docs/Web/HTTP/Methods/TRACE)
