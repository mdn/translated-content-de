---
title: "HTMLTableElement: tBodies-Eigenschaft"
short-title: tBodies
slug: Web/API/HTMLTableElement/tBodies
l10n:
  sourceCommit: ea061caed30f127a79157d07c538d26f01b8702b
---

{{APIRef("HTML DOM")}}

Die **`tBodies`**-Schreibgeschützt-Eigenschaft des [`HTMLTableElement`](/de/docs/Web/API/HTMLTableElement)-Interfaces gibt eine Live-[`HTMLCollection`](/de/docs/Web/API/HTMLCollection) aller {{HTMLElement("tbody")}}-Elementkinder des gegebenen {{HTMLElement("table")}} zurück.

Obwohl die Eigenschaft schreibgeschützt ist, ist das zurückgegebene Objekt live und wird automatisch aktualisiert, wenn sich das `HTMLTableElement` ändert.

Die zurückgegebene Sammlung umfasst implizite {{HTMLElement("tbody")}}-Elemente. Zum Beispiel:

```html
<table>
  <tr>
    <td>cell one</td>
  </tr>
</table>
```

Das aus dem obigen HTML generierte HTML DOM wird ein {{HTMLElement("tbody")}}-Element haben, auch wenn die Tags nicht im Quell-HTML enthalten sind.

## Wert

Eine Live-[`HTMLCollection`](/de/docs/Web/API/HTMLCollection) von [`HTMLTableSectionElement`](/de/docs/Web/API/HTMLTableSectionElement) (welche alle `tbody` sind) Objekten.

## Beispiele

Dieser Schnipsel ermittelt die Anzahl der `tbody`-Elemente in einer Tabelle.

```js
myTable.tBodies.length;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLTableElement.caption`](/de/docs/Web/API/HTMLTableElement/caption)
- [`HTMLTableElement.tFoot`](/de/docs/Web/API/HTMLTableElement/tFoot)
- [`HTMLTableElement.tHead`](/de/docs/Web/API/HTMLTableElement/tHead)
- [`HTMLTableElement.createTBody()`](/de/docs/Web/API/HTMLTableElement/createTBody)
