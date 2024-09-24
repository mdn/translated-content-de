---
title: "Selection: addRange() Methode"
short-title: addRange()
slug: Web/API/Selection/addRange
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{ ApiRef("DOM") }}

Die **`Selection.addRange()`** Methode fügt ein
{{domxref("Range")}} zu einer {{domxref("Selection")}} hinzu.

## Syntax

```js-nolint
addRange(range)
```

### Parameter

- `range`
  - : Ein {{ domxref("Range") }}-Objekt, das der {{domxref("Selection")}} hinzugefügt wird.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

> [!NOTE]
> Derzeit unterstützt nur Firefox mehrere Auswahlbereiche. Andere Browser fügen keine zusätzlichen Bereiche zur Auswahl hinzu, wenn bereits einer vorhanden ist.

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
  const strongs = document.getElementsByTagName("strong");

  if (selection.rangeCount > 0) {
    selection.removeAllRanges();
  }

  for (const node of strongs) {
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

- {{domxref("Selection")}}, die Schnittstelle, zu der diese Methode gehört
