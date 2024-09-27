---
title: Max-Forwards
slug: Web/HTTP/Headers/Max-Forwards
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

Der **`Max-Forwards`** Anforderungs-HTTP-Header wird mit der [`TRACE`](/de/docs/Web/HTTP/Methods/TRACE)-Methode verwendet, um die Anzahl der Knoten (normalerweise Proxies) zu begrenzen, die die Anforderung durchläuft. Sein Wert ist ein ganzzahliger Wert, der die _maximale Anzahl_ der Knoten angibt, die er besuchen muss. An jedem Knoten wird der Wert verringert, und die `TRACE`-Anforderung wird an den nächsten Knoten weitergeleitet, bis das Ziel erreicht ist oder der empfangene Wert von `Max-Forwards` null ist. Die Anforderung wird dann, mit Ausnahme einiger Header, als der Body einer `200 OK`-Antwort zurückgesendet.

Wenn der `Max-Forwards`-Header in einer `TRACE`-Anforderung nicht vorhanden ist, nimmt ein Knoten an, dass es keine maximale Anzahl von Weiterleitungen gibt.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>[Request header](/de/docs/Glossary/Request_header)</td>
    </tr>
    <tr>
      <th scope="row">[Forbidden header name](/de/docs/Glossary/Forbidden_header_name)</th>
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

Dieses Feature ist weder für Browser gedacht noch in ihnen implementiert.

## Siehe auch

- Die HTTP-[`TRACE`](/de/docs/Web/HTTP/Methods/TRACE)-Methode
