---
title: "HTMLTableElement: tBodies-Eigenschaft"
short-title: tBodies
slug: Web/API/HTMLTableElement/tBodies
l10n:
  sourceCommit: d47348199a379f68bea876a403eb510628ec4ccb
---

{{APIRef("HTML DOM")}}

Die **`HTMLTableElement.tBodies`**-Eigenschaft gibt eine Live-[`HTMLCollection`](/de/docs/Web/API/HTMLCollection) der `tbody`-Elemente in einem {{htmlElement("table")}} zurück.

Obwohl die Eigenschaft schreibgeschützt ist, ist das zurückgegebene Objekt live und erlaubt die Modifikation seines Inhalts.

Die zurückgegebene Sammlung umfasst implizite {{HTMLElement("tbody")}}-Elemente. Zum Beispiel:

```html
<table>
  <tr>
    <td>cell one</td>
  </tr>
</table>
```

Das vom obigen HTML generierte HTML DOM wird ein {{HTMLElement("tbody")}}-Element haben, obwohl die Tags im Quell-HTML nicht enthalten sind.

## Wert

Eine Live-[`HTMLCollection`](/de/docs/Web/API/HTMLCollection).

## Beispiele

Dieser Code-Ausschnitt ermittelt die Anzahl der `tbody`-Elemente in einer Tabelle.

```js
myTable.tBodies.length;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLCollection`](/de/docs/Web/API/HTMLCollection)
- {{HTMLElement("tbody")}}
