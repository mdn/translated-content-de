---
title: "EditContext: attachedElements()-Methode"
short-title: attachedElements()
slug: Web/API/EditContext/attachedElements
l10n:
  sourceCommit: c9fe79713a9323e8f1492c3c5b802fc8776a5f6a
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

Die **`attachedElements()`**-Methode des [`EditContext`](/de/docs/Web/API/EditContext)-Interfaces gibt ein {{jsxref("Array")}} zurück, das nur ein Element enthält. Dieses Element ist dasjenige, das mit dem `EditContext`-Objekt verknüpft ist.

## Syntax

```js-nolint
attachedElements()
```

### Rückgabewert

Ein {{jsxref("Array")}}, das ein [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Objekt enthält.

Es kann nur ein Element mit einer `EditContext`-Instanz verknüpft sein, daher wird das zurückgegebene Array immer ein Element enthalten. Sollte die API in Zukunft erweitert werden, um mehrere verknüpfte Elemente zu unterstützen, wird der Rückgabewert ein Array mit mehreren Elementen sein.

## Beispiele

### Ermitteln des mit einer `EditContext`-Instanz verknüpften Elements

Dieses Beispiel zeigt, wie die Methode `attachedElements` verwendet wird, um das Element zu erhalten, das mit einer `EditContext`-Instanz verknüpft ist.

```html
<canvas id="editor-canvas"></canvas>
```

```js
const canvas = document.getElementById("editor-canvas");
const editContext = new EditContext();
canvas.editContext = editContext;

const attachedElements = editContext.attachedElements();
console.log(attachedElements[0] === canvas); // true
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`EditContext`](/de/docs/Web/API/EditContext)-Interface, zu dem es gehört.
