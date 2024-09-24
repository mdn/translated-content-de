---
title: "HTMLInputElement: setRangeText() Methode"
short-title: setRangeText()
slug: Web/API/HTMLInputElement/setRangeText
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{APIRef("HTML DOM")}}

Die **`HTMLInputElement.setRangeText()`** Methode ersetzt eine Textspanne in einem {{HTMLElement("input")}}- oder {{HTMLElement("textarea")}}-Element durch einen neuen String.

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
  - : Der nullbasierte Index des ersten zu ersetzenden Zeichens. Standardmäßig der aktuelle
    `selectionStart`-Wert (der Anfang der aktuellen Benutzerauswahl).
- `end` {{optional_inline}}
  - : Der nullbasierte Index des Zeichens _nach_ dem letzten zu ersetzenden Zeichen.
    Standardmäßig der aktuelle `selectionEnd`-Wert (das Ende der aktuellen Benutzerauswahl).
- `selectMode` {{optional_inline}}

  - : Ein String, der definiert, wie die Auswahl nach dem Ersetzen des Textes festgelegt werden soll.
    Mögliche Werte:

    - `"select"` wählt den neu eingefügten Text aus.
    - `"start"` verschiebt die Auswahl direkt vor den eingefügten Text.
    - `"end"` verschiebt die Auswahl direkt nach den eingefügten Text.
    - `"preserve"` versucht, die Auswahl zu bewahren. Dies ist der Standardwert.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Klicken Sie auf die Schaltfläche in diesem Beispiel, um einen Teil des Textes im Textfeld zu ersetzen. Der neu eingefügte Text wird anschließend hervorgehoben (ausgewählt).

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
- {{domxref("HTMLInputElement")}}
- {{domxref("Selection")}}
