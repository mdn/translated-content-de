---
title: "HTMLTableElement: tHead-Eigenschaft"
short-title: tHead
slug: Web/API/HTMLTableElement/tHead
l10n:
  sourceCommit: ea061caed30f127a79157d07c538d26f01b8702b
---

{{APIRef("HTML DOM")}}

Die **`tHead`**-Eigenschaft der [`HTMLTableElement`](/de/docs/Web/API/HTMLTableElement)-Schnittstelle repräsentiert das erste {{HTMLElement("thead")}}-Element-Kind des gegebenen {{HTMLElement("table")}}, oder `null`, wenn ein solches Element nicht existiert.

## Wert

Ein [`HTMLTableSectionElement`](/de/docs/Web/API/HTMLTableSectionElement) (das immer ein `thead` ist) oder `null`.

Diese Eigenschaft kann zugewiesen werden, wodurch das bestehende erste {{HTMLElement("thead")}}-Element-Kind, falls vorhanden, entfernt wird, und der gegebene Wert, sofern er nicht `null` ist, unmittelbar vor das erste Element-Kind platziert wird, das weder ein {{HTMLElement("caption")}} noch ein {{HTMLElement("colgroup")}} ist, oder als letztes Kind, wenn es kein solches Element gibt. Daher hat das Festlegen auf `null` die gleiche Wirkung wie ein Aufruf von [`deleteTHead()`](/de/docs/Web/API/HTMLTableElement/deleteTHead). Wenn der zugewiesene Wert weder ein [`HTMLTableSectionElement`](/de/docs/Web/API/HTMLTableSectionElement) noch `null` ist, wird ein {{jsxref("TypeError")}} ausgelöst; andernfalls, wenn es kein {{HTMLElement("thead")}}-Element oder `null` ist, wird ein `HierarchyRequestError` [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst.

## Beispiele

```js
if (table.tHead) {
  // Do something with the thead
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLTableElement.caption`](/de/docs/Web/API/HTMLTableElement/caption)
- [`HTMLTableElement.tBodies`](/de/docs/Web/API/HTMLTableElement/tBodies)
- [`HTMLTableElement.tFoot`](/de/docs/Web/API/HTMLTableElement/tFoot)
- [`HTMLTableElement.createTHead()`](/de/docs/Web/API/HTMLTableElement/createTHead)
- [`HTMLTableElement.deleteTHead()`](/de/docs/Web/API/HTMLTableElement/deleteTHead)
