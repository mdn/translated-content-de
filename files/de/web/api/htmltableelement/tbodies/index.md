---
title: "HTMLTableElement: tBodies-Eigenschaft"
short-title: tBodies
slug: Web/API/HTMLTableElement/tBodies
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("HTML DOM")}}

Die **`HTMLTableElement.tBodies`** schreibgeschützte Eigenschaft gibt eine
lebendige [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) der Körper in einem {{htmlElement("table")}} zurück.

Obwohl die Eigenschaft schreibgeschützt ist, ist das zurückgegebene Objekt "live" und erlaubt die
Änderung seines Inhalts.

Die zurückgegebene Sammlung schließt implizite {{HTMLElement("tbody")}}-Elemente mit ein. Zum Beispiel:

```html
<table>
  <tr>
    <td>cell one</td>
  </tr>
</table>
```

Der aus dem obigen HTML generierte HTML-DOM wird ein {{HTMLElement("tbody")}}-Element enthalten,
auch wenn die Tags nicht im Quell-HTML enthalten sind.

## Wert

Eine lebendige [`HTMLCollection`](/de/docs/Web/API/HTMLCollection).

## Beispiele

Dieses Snippet ermittelt die Anzahl der Körper in einer Tabelle.

```js
mytable.tBodies.length;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLCollection`](/de/docs/Web/API/HTMLCollection)
- {{HTMLElement("tbody")}}
