---
title: "HTMLInputElement: setSelectionRange()-Methode"
short-title: setSelectionRange()
slug: Web/API/HTMLInputElement/setSelectionRange
l10n:
  sourceCommit: 20c51db7895b1b6f41d4fa90e71830f4b6678eea
---

{{APIRef("HTML DOM")}}

Die **`HTMLInputElement.setSelectionRange()`**-Methode legt die Start- und Endpositionen der aktuellen Textauswahl in einem {{HTMLElement("input")}}- oder {{HTMLElement("textarea")}}-Element fest.

Das Element muss fokussiert sein, damit der Aufruf eine Wirkung hat.

Optional können Sie die Richtung angeben, in der die Auswahl erfolgt ist. Dies ermöglicht es, beispielsweise anzugeben, dass die Auswahl durch den Benutzer vorgenommen wurde, indem er vom Ende des ausgewählten Texts zum Anfang gezogen hat.

Diese Methode aktualisiert die Eigenschaften {{domxref("HTMLInputElement.selectionStart")}}, {{domxref("HTMLInputElement.selectionEnd")}} und {{domxref("HTMLInputElement.selectionDirection")}} in einem Aufruf.

Das Element muss einer der folgenden Eingabetypen haben: [`password`](/de/docs/Web/HTML/Element/input/password), [`search`](/de/docs/Web/HTML/Element/input/search), [`tel`](/de/docs/Web/HTML/Element/input/tel), [`text`](/de/docs/Web/HTML/Element/input/text) oder [`url`](/de/docs/Web/HTML/Element/input/url). Andernfalls wirft der Browser eine `InvalidStateError`-Ausnahme.

Wenn Sie **alle** Texte eines Eingabeelements auswählen möchten, können Sie stattdessen die [HTMLInputElement.select()](/de/docs/Web/API/HTMLInputElement/select)-Methode verwenden.

## Syntax

```js-nolint
setSelectionRange(selectionStart, selectionEnd)
setSelectionRange(selectionStart, selectionEnd, selectionDirection)
```

### Parameter

- `selectionStart`
  - : Der 0-basierte Index des ersten ausgewählten Zeichens. Ein Index, der größer als die Länge des Elementwerts ist, wird als Verweis auf das Ende des Werts behandelt.
- `selectionEnd`

  - : Der 0-basierte Index des Zeichens _nach_ dem letzten ausgewählten Zeichen. Ein
    Index, der größer als die Länge des Elementwerts ist, wird als Verweis auf das Ende
    des Werts behandelt. Ist `selectionEnd` kleiner als `selectionStart`, werden beide als der Wert von `selectionEnd` betrachtet.

- `selectionDirection` {{optional_inline}}

  - : Ein String, der die Richtung angibt, in der die Auswahl vorgenommen wurde. Mögliche Werte:

    - `"forward"`
    - `"backward"`
    - `"none"`, wenn die Richtung unbekannt oder irrelevant ist. Standardwert.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn das Element nicht einer der folgenden Eingabetypen entspricht: [`password`](/de/docs/Web/HTML/Element/input/password), [`search`](/de/docs/Web/HTML/Element/input/search), [`tel`](/de/docs/Web/HTML/Element/input/tel), [`text`](/de/docs/Web/HTML/Element/input/text), oder [`url`](/de/docs/Web/HTML/Element/input/url).

## Beispiele

Klicken Sie auf die Schaltfläche in diesem Beispiel, um das dritte, vierte und fünfte Zeichen im
Textfeld ("zil" im Wort "Mozilla") auszuwählen.

### HTML

```html
<input type="text" id="text-box" size="20" value="Mozilla" />
<button onclick="selectText()">Select text</button>
```

### JavaScript

```js
function selectText() {
  const input = document.getElementById("text-box");
  input.focus();
  input.setSelectionRange(2, 5);
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
