---
title: "EditContext: attachedElements() Methode"
short-title: attachedElements()
slug: Web/API/EditContext/attachedElements
l10n:
  sourceCommit: ffff697fbd3004c3da50323ef4d868b3ad47e4d0
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

Die **`attachedElements()`** Methode der [`EditContext`](/de/docs/Web/API/EditContext) Schnittstelle gibt ein {{jsxref("Array")}} zurück, das nur ein Element enthält. Dieses Element ist dasjenige, das mit dem `EditContext`-Objekt verknüpft ist.

## Syntax

```js-nolint
attachedElements()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Array")}} mit einem [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Objekt.

Da nur ein Element mit einer `EditContext`-Instanz verknüpft sein kann, wird das zurückgegebene Array immer ein Element enthalten. Falls die API in Zukunft erweitert wird, um mehrere verknüpfte Elemente zu unterstützen, wird der Rückgabewert ein Array mit mehreren Elementen sein.

## Beispiele

### Abrufen des Elements, das mit einer `EditContext`-Instanz verknüpft ist

Dieses Beispiel zeigt, wie die Methode `attachedElements` verwendet wird, um das Element abzurufen, das mit einer `EditContext`-Instanz verknüpft ist.

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

- Die [`EditContext`](/de/docs/Web/API/EditContext) Schnittstelle, zu der es gehört.
