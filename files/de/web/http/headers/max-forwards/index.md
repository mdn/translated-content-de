---
title: Max-Forwards
slug: Web/HTTP/Headers/Max-Forwards
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

Der **`Max-Forwards`** HTTP-Request-Header wird mit der [`TRACE`](/de/docs/Web/HTTP/Methods/TRACE)-Methode verwendet, um die Anzahl der Knoten (normalerweise Proxys) zu begrenzen, die eine Anfrage passiert. Sein Wert ist eine Ganzzahl, die die _maximale Anzahl_ an Knoten angibt, die besucht werden muss. An jedem Knoten wird der Wert dekrementiert und die `TRACE`-Anfrage zum nächsten Knoten weitergeleitet, bis das Ziel erreicht ist oder der empfangene Wert von `Max-Forwards` null ist. Die Anfrage wird dann mit Ausnahme einiger Header als Body einer `200 OK`-Antwort zurückgesendet.

Wenn der `Max-Forwards`-Header in einer `TRACE`-Anfrage nicht vorhanden ist, wird ein Knoten annehmen, dass es keine maximale Anzahl von Weiterleitungen gibt.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Verbotener Headername")}}</th>
      <td>nein</td>
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

## Browserkompatibilität

Dieses Feature ist weder auf Browser ausgerichtet noch in diesen implementiert.

## Siehe auch

- Die HTTP-[`TRACE`](/de/docs/Web/HTTP/Methods/TRACE)-Methode
