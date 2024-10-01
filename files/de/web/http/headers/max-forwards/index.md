---
title: Max-Forwards
slug: Web/HTTP/Headers/Max-Forwards
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

Der **`Max-Forwards`** Anforderungs-HTTP-Header wird mit der [`TRACE`](/de/docs/Web/HTTP/Methods/TRACE) Methode verwendet, um die Anzahl der Knoten (normalerweise Proxys) zu begrenzen, die eine Anfrage durchläuft. Sein Wert ist eine Ganzzahl, die die _maximale Anzahl_ von Knoten angibt, die es passieren muss. An jedem Knoten wird der Wert dekrementiert und die `TRACE`-Anfrage wird zum nächsten Knoten weitergeleitet, bis das Ziel erreicht ist oder der empfangene Wert von `Max-Forwards` null ist. Die Anfrage wird dann, abgesehen von einigen Headern, als der Körper einer `200 OK` Antwort zurückgesendet.

Wenn der `Max-Forwards` Header in einer `TRACE`-Anfrage nicht vorhanden ist, wird ein Knoten davon ausgehen, dass es keine maximale Anzahl von Weiterleitungen gibt.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Anforderungs-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
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

## Browser-Kompatibilität

Diese Funktion ist weder auf Browser abgestimmt noch in Browsern implementiert.

## Siehe auch

- Die HTTP [`TRACE`](/de/docs/Web/HTTP/Methods/TRACE) Methode
