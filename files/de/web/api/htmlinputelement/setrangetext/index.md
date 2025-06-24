---
title: "HTMLInputElement: setRangeText() Methode"
short-title: setRangeText()
slug: Web/API/HTMLInputElement/setRangeText
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("HTML DOM")}}

Die **`HTMLInputElement.setRangeText()`** Methode ersetzt einen Textbereich in einem {{HTMLElement("input")}} oder {{HTMLElement("textarea")}} Element mit einem neuen String.

## Syntax

```js-nolint
setRangeText(replacement)
setRangeText(replacement, start)
setRangeText(replacement, start, end)
setRangeText(replacement, start, end, selectMode)
```

### Parameter

- `replacement`
  - : Der einzufügende String.
- `start` {{optional_inline}}
  - : Der 0-basierte Index des ersten Zeichens, das ersetzt werden soll. Standardmäßig der aktuelle Wert von `selectionStart` (der Beginn der aktuellen Benutzerauswahl).
- `end` {{optional_inline}}
  - : Der 0-basierte Index des Zeichens _nach_ dem letzten zu ersetzenden Zeichen. Standardmäßig der aktuelle Wert von `selectionEnd` (das Ende der aktuellen Benutzerauswahl).
- `selectMode` {{optional_inline}}
  - : Ein String, der definiert, wie die Auswahl nach dem Ersetzen des Textes gesetzt werden soll. Mögliche Werte:
    - `"select"` wählt den neu eingefügten Text aus.
    - `"start"` verschiebt die Auswahl direkt vor den eingefügten Text.
    - `"end"` verschiebt die Auswahl direkt hinter den eingefügten Text.
    - `"preserve"` versucht, die Auswahl beizubehalten. Dies ist der Standardwert.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Klicken Sie in diesem Beispiel auf die Schaltfläche, um einen Teil des Textes im Textfeld zu ersetzen. Der neu eingefügte Text wird anschließend hervorgehoben (ausgewählt).

### HTML

```html
<input
  type="text"
  id="text-box"
  size="30"
  value="This text has NOT been updated." />
<button>Update text</button>
```

### JavaScript

```js
function selectText() {
  const input = document.getElementById("text-box");
  input.focus();
  input.setRangeText("ALREADY", 14, 17, "select");
}

document.querySelector("button").addEventListener("click", selectText);
```

### Ergebnis

{{EmbedLiveSample("Examples")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("input")}}
- {{HTMLElement("textarea")}}
- [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)
- [`Selection`](/de/docs/Web/API/Selection)
