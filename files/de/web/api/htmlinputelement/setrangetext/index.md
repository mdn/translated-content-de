---
title: "HTMLInputElement: Methode setRangeText()"
short-title: setRangeText()
slug: Web/API/HTMLInputElement/setRangeText
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{APIRef("HTML DOM")}}

Die Methode **`HTMLInputElement.setRangeText()`** ersetzt einen Textbereich in einem {{HTMLElement("input")}}- oder {{HTMLElement("textarea")}}-Element durch einen neuen String.

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
  - : Der indexbasierte Startpunkt des ersten zu ersetzenden Zeichens. Standard ist der aktuelle Wert von `selectionStart` (der Beginn der aktuellen Benutzerauswahl).
- `end` {{optional_inline}}
  - : Der indexbasierte Punkt nach dem letzten zu ersetzenden Zeichen. Standard ist der aktuelle Wert von `selectionEnd` (das Ende der aktuellen Benutzerauswahl).
- `selectMode` {{optional_inline}}

  - : Ein String, der definiert, wie die Auswahl nach dem Ersetzen des Textes festgelegt werden soll. Mögliche Werte:

    - `"select"` wählt den neu eingefügten Text aus.
    - `"start"` verschiebt die Auswahl direkt vor den eingefügten Text.
    - `"end"` verschiebt die Auswahl direkt nach den eingefügten Text.
    - `"preserve"` versucht, die Auswahl beizubehalten. Dies ist der Standardwert.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Klicken Sie auf den Button in diesem Beispiel, um einen Teil des Textes im Textfeld zu ersetzen. Der neu eingefügte Text wird anschließend hervorgehoben (ausgewählt).

### HTML

```html
<input
  type="text"
  id="text-box"
  size="30"
  value="This text has NOT been updated." />
<button onclick="selectText()">Update text</button>
```

### JavaScript

```js
function selectText() {
  const input = document.getElementById("text-box");
  input.focus();
  input.setRangeText("ALREADY", 14, 17, "select");
}
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
