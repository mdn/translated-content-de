---
title: "HTMLTableElement: tFoot-Eigenschaft"
short-title: tFoot
slug: Web/API/HTMLTableElement/tFoot
l10n:
  sourceCommit: ea061caed30f127a79157d07c538d26f01b8702b
---

{{APIRef("HTML DOM")}}

Die **`tFoot`**-Eigenschaft des [`HTMLTableElement`](/de/docs/Web/API/HTMLTableElement)-Interfaces repräsentiert das erste {{HTMLElement("tfoot")}}-Elementkind der gegebenen {{HTMLElement("table")}}, oder `null`, falls ein solches Element nicht existiert.

## Wert

Ein [`HTMLTableSectionElement`](/de/docs/Web/API/HTMLTableSectionElement) (das immer ein `tfoot` ist) oder `null`.

Diese Eigenschaft kann zugewiesen werden, was dazu führt, dass das bestehende erste {{HTMLElement("tfoot")}}-Elementkind, falls vorhanden, entfernt wird und der gegebene Wert, falls er nicht `null` ist, als letztes Kind eingefügt wird. Daher hat das Setzen von `null` denselben Effekt wie das Aufrufen von [`deleteTFoot()`](/de/docs/Web/API/HTMLTableElement/deleteTFoot). Wenn der zugewiesene Wert kein [`HTMLTableSectionElement`](/de/docs/Web/API/HTMLTableSectionElement) oder `null` ist, wird ein {{jsxref("TypeError")}} ausgelöst; wenn es sich nicht um ein {{HTMLElement("tfoot")}}-Element oder `null` handelt, wird ein `HierarchyRequestError` [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst.

## Beispiele

```js
if (table.tFoot) {
  // Do something with the tfoot
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLTableElement.caption`](/de/docs/Web/API/HTMLTableElement/caption)
- [`HTMLTableElement.tBodies`](/de/docs/Web/API/HTMLTableElement/tBodies)
- [`HTMLTableElement.tHead`](/de/docs/Web/API/HTMLTableElement/tHead)
- [`HTMLTableElement.createTFoot()`](/de/docs/Web/API/HTMLTableElement/createTFoot)
- [`HTMLTableElement.deleteTFoot()`](/de/docs/Web/API/HTMLTableElement/deleteTFoot)
