---
title: "HTMLTableElement: caption-Eigenschaft"
short-title: caption
slug: Web/API/HTMLTableElement/caption
l10n:
  sourceCommit: ea061caed30f127a79157d07c538d26f01b8702b
---

{{APIRef("HTML DOM")}}

Die **`caption`**-Eigenschaft des [`HTMLTableElement`](/de/docs/Web/API/HTMLTableElement)-Interfaces repräsentiert das erste {{HTMLElement("caption")}}-Elementkind des gegebenen {{HTMLElement("table")}}, oder `null`, wenn kein solches Element existiert.

## Wert

Ein [`HTMLTableCaptionElement`](/de/docs/Web/API/HTMLTableCaptionElement) oder `null`.

Diese Eigenschaft kann zugewiesen werden, was dazu führt, dass das vorhandene erste {{HTMLElement("caption")}}-Elementkind, falls vorhanden, entfernt wird und der angegebene Wert, sofern er nicht `null` ist, als erstes Kind eingefügt wird. Daher hat das Setzen von `null` die gleiche Wirkung wie der Aufruf von [`deleteCaption()`](/de/docs/Web/API/HTMLTableElement/deleteCaption). Wenn der zugewiesene Wert kein [`HTMLTableCaptionElement`](/de/docs/Web/API/HTMLTableCaptionElement) oder `null` ist, wird ein {{jsxref("TypeError")}} geworfen.

## Beispiele

```js
if (table.caption) {
  // Do something with the caption
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLTableElement.tBodies`](/de/docs/Web/API/HTMLTableElement/tBodies)
- [`HTMLTableElement.tFoot`](/de/docs/Web/API/HTMLTableElement/tFoot)
- [`HTMLTableElement.tHead`](/de/docs/Web/API/HTMLTableElement/tHead)
- [`HTMLTableElement.createCaption()`](/de/docs/Web/API/HTMLTableElement/createCaption)
- [`HTMLTableElement.deleteCaption()`](/de/docs/Web/API/HTMLTableElement/deleteCaption)
