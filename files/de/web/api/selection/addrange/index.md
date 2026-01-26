---
title: "Selection: Methode addRange()"
short-title: addRange()
slug: Web/API/Selection/addRange
l10n:
  sourceCommit: da1442e0040419eb105f0720fd539adb5d5ca286
---

{{ ApiRef("DOM") }}

Die **`Selection.addRange()`**-Methode fügt einer [`Selection`](/de/docs/Web/API/Selection) einen [`Range`](/de/docs/Web/API/Range) hinzu.

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

Beachten Sie, dass nur Firefox mehrere Auswahlbereiche unterstützt. In diesem Beispiel werden andere Browser keine neuen Bereiche zur Auswahl hinzufügen, wenn bereits einer enthalten ist.

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

- [`Selection`](/de/docs/Web/API/Selection), das Interface, zu dem diese Methode gehört
