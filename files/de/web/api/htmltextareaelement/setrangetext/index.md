---
title: "HTMLTextAreaElement: setRangeText()-Methode"
short-title: setRangeText()
slug: Web/API/HTMLTextAreaElement/setRangeText
l10n:
  sourceCommit: b921b8d779314f2098a1669d8269b36107ecfbb1
---

{{APIRef("HTML DOM")}}

Die **`setRangeText()`**-Methode der {{domxref("HTMLTextAreaElement")}}-Schnittstelle ersetzt einen Textbereich in einem {{HTMLElement("textarea")}}-Element durch neuen Text, der als Argument übergeben wird.

Zusätzliche optionale Parameter umfassen den Beginn des zu ändernden Textabschnitts, das Ende des Abschnitts und ein Schlüsselwort, das definiert, welcher Teil des `<textarea>` nach der Textaktualisierung ausgewählt werden soll. Wenn die Argumente `startSelection` und `endSelection` nicht bereitgestellt werden, wird angenommen, dass der Bereich die Auswahl ist.

Das letzte Argument bestimmt, wie die Auswahl gesetzt wird, nachdem der Text ersetzt wurde. Die möglichen Werte sind `"select"`, bei dem der neu eingefügte Text ausgewählt wird, `"start"`, bei dem die Auswahl direkt vor den eingefügten Text verschoben wird, `"end"`, bei dem die Auswahl direkt nach den eingefügten Text verschoben wird, oder der Standardwert `"preserve"`, der versucht, die Auswahl zu erhalten.

Zusätzlich werden die Events {{domxref("HTMLTextAreaElement.select_event", "select")}} und {{domxref("HTMLTextAreaElement.selectionchange_event", "selectchange")}} ausgelöst.

## Syntax

```js-nolint
setRangeText(replacement)
setRangeText(replacement, startSelection)
setRangeText(replacement, startSelection, endSelection)
setRangeText(replacement, startSelection, endSelection, selectMode)
```

### Parameter

- `replacement`
  - : Der einzufügende String.
- {{domxref("HTMLTextAreaElement.selectionStart", "selectionStart")}} {{optional_inline}}
  - : Der Index des ersten ausgewählten Zeichens. Ein Index, der größer als die Länge des Wertes des Elements ist, wird als Verweis auf das Ende des Wertes behandelt.
- {{domxref("HTMLTextAreaElement.selectionEnd", "selectionEnd")}} {{optional_inline}}
  - : Der Index des Zeichens _nach_ dem zuletzt ausgewählten Zeichen. Ein Index, der größer als die Länge des Wertes des Elements ist, wird als Verweis auf das Ende des Wertes behandelt. Wenn `selectionEnd` kleiner als `selectionStart` ist, dann werden beide als Wert von `selectionEnd` behandelt.
- `selectMode` {{optional_inline}}
  - : Ein Schlüsselwort, entweder `select`, `start`, `end` oder der Standard `preserve`, das definiert, wie die Auswahl gesetzt werden soll, nachdem der Text ersetzt wurde.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

## Beispiele

Klicken Sie auf die Schaltfläche in diesem Beispiel, um einen Teil des Textes im Textfeld zu ersetzen. Der neu eingefügte Text wird danach hervorgehoben (ausgewählt).

### HTML

```html
<label for="ta">Beispieltexteingabe:</label>
<textarea id="ta">
  Dieser Text wurde NICHT aktualisiert.
</textarea>
<button id="btn">Text aktualisieren</button>
```

### JavaScript

```js
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  changeText();
});

function changeText() {
  const textarea = document.getElementById("text-box");
  textarea.focus();
  textarea.setRangeText("ALREADY", 14, 17, "select");
}
```

### Ergebnis

{{EmbedLiveSample("Examples")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("textarea")}}
- {{domxref("HTMLTextAreaElement")}}
- {{domxref("HTMLTextAreaElement.select()")}}
- {{domxref("HTMLTextAreaElement.setSelectionRange()")}}
- {{domxref("HTMLTextAreaElement.textLength")}}
- {{domxref("Selection")}}
- {{cssxref("::selection")}} Pseudo-Element
