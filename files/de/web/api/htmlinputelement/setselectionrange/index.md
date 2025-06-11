---
title: "HTMLInputElement: setSelectionRange() Methode"
short-title: setSelectionRange()
slug: Web/API/HTMLInputElement/setSelectionRange
l10n:
  sourceCommit: 7cd51a73ad94df604db79ccacbbe0513d0967650
---

{{APIRef("HTML DOM")}}

Die **`HTMLInputElement.setSelectionRange()`**-Methode legt die Start- und Endpositionen der aktuellen Textauswahl in einem {{HTMLElement("input")}}- oder {{HTMLElement("textarea")}}-Element fest.

Das Element muss fokussiert sein, damit der Aufruf Wirkung zeigt.

Optional können Sie die Richtung angeben, in der die Auswahl vorgenommen wurde. Damit können Sie beispielsweise angeben, dass die Auswahl vom Benutzer erstellt wurde, indem er vom Ende des ausgewählten Textes zum Anfang gezogen hat.

Diese Methode aktualisiert die Eigenschaften [`HTMLInputElement.selectionStart`](/de/docs/Web/API/HTMLInputElement/selectionStart), [`HTMLInputElement.selectionEnd`](/de/docs/Web/API/HTMLInputElement/selectionEnd) und [`HTMLInputElement.selectionDirection`](/de/docs/Web/API/HTMLInputElement/selectionDirection) in einem Aufruf.

Das Element muss einen der folgenden Eingabetypen haben: [`password`](/de/docs/Web/HTML/Reference/Elements/input/password), [`search`](/de/docs/Web/HTML/Reference/Elements/input/search), [`tel`](/de/docs/Web/HTML/Reference/Elements/input/tel), [`text`](/de/docs/Web/HTML/Reference/Elements/input/text) oder [`url`](/de/docs/Web/HTML/Reference/Elements/input/url). Andernfalls wirft der Browser eine `InvalidStateError`-Ausnahme.

Wenn Sie **alle** Texte eines Eingabeelements auswählen möchten, können Sie stattdessen die Methode [HTMLInputElement.select()](/de/docs/Web/API/HTMLInputElement/select) verwenden.

## Syntax

```js-nolint
setSelectionRange(selectionStart, selectionEnd)
setSelectionRange(selectionStart, selectionEnd, selectionDirection)
```

### Parameter

- `selectionStart`
  - : Der 0-basierte Index des ersten ausgewählten Zeichens. Ein Index, der größer als die Länge des Werts des Elements ist, wird als Zeiger auf das Ende des Wertes behandelt.
- `selectionEnd`

  - : Der 0-basierte Index des Zeichens _nach_ dem letzten ausgewählten Zeichen. Ein Index, der größer als die Länge des Werts des Elements ist, wird als Zeiger auf das Ende des Wertes behandelt. Wenn `selectionEnd` kleiner als `selectionStart` ist, werden beide als Wert von `selectionEnd` behandelt.

- `selectionDirection` {{optional_inline}}

  - : Ein Zeichenfolgenwert, der die Richtung angibt, in der die Auswahl vorgenommen wurde. Mögliche Werte:

    - `"forward"`
    - `"backward"`
    - `"none"` wenn die Richtung unbekannt oder irrelevant ist. Standardwert.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Element nicht einer der folgenden Eingabetypen ist: [`password`](/de/docs/Web/HTML/Reference/Elements/input/password), [`search`](/de/docs/Web/HTML/Reference/Elements/input/search), [`tel`](/de/docs/Web/HTML/Reference/Elements/input/tel), [`text`](/de/docs/Web/HTML/Reference/Elements/input/text) oder [`url`](/de/docs/Web/HTML/Reference/Elements/input/url).

## Beispiele

Klicken Sie in diesem Beispiel auf den Button, um die dritte, vierte und fünfte Zeichen in der Textbox auszuwählen ("zil" im Wort "Mozilla").

### HTML

```html
<input type="text" id="text-box" size="20" value="Mozilla" />
<button>Select text</button>
```

### JavaScript

```js
function selectText() {
  const input = document.getElementById("text-box");
  input.focus();
  input.setSelectionRange(2, 5);
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
