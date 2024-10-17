---
title: "Auswahl: addRange()-Methode"
short-title: addRange()
slug: Web/API/Selection/addRange
l10n:
  sourceCommit: 00f46adb5616d826821d63b11eac285faf1cf4a5
---

{{ ApiRef("DOM") }}

Die **`Selection.addRange()`**-Methode fügt einer [`Selection`](/de/docs/Web/API/Selection) ein [`Range`](/de/docs/Web/API/Range) hinzu.

## Syntax

```js-nolint
addRange(range)
```

### Parameter

- `range`
  - : Ein [`Range`](/de/docs/Web/API/Range)-Objekt, das zur [`Selection`](/de/docs/Web/API/Selection) hinzugefügt wird.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

> [!NOTE]
> Derzeit unterstützt nur Firefox mehrere Auswahlbereiche, andere Browser werden keine neuen Bereiche zur Auswahl hinzufügen, wenn diese bereits einen enthält.

### HTML

```html
<p>
  I <strong>insist</strong> that you <strong>try</strong> selecting the
  <strong>strong words</strong>.
</p>
<button>Select strong words</button>
```

### JavaScript

```js
let button = document.querySelector("button");

button.addEventListener("click", () => {
  const selection = window.getSelection();
  const strongElems = document.getElementsByTagName("strong");

  if (selection.rangeCount > 0) {
    selection.removeAllRanges();
  }

  for (const node of strongElems) {
    const range = document.createRange();
    range.selectNode(node);
    selection.addRange(range);
  }
});
```

### Ergebnis

{{EmbedLiveSample("Examples")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Selection`](/de/docs/Web/API/Selection), die Schnittstelle, zu der diese Methode gehört
