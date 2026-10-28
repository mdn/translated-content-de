---
title: "HTMLInputElement: Methode setSelectionRange()"
short-title: setSelectionRange()
slug: Web/API/HTMLInputElement/setSelectionRange
l10n:
  sourceCommit: 3869033353873623537ef2d810c1406a7299b49c
---

{{APIRef("HTML DOM")}}

Die Methode **`setSelectionRange()`** der Schnittstelle [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) legt die Start- und Endposition der aktuellen Textauswahl in einem {{HTMLElement("input")}}-Element fest. Der Auswahlzustand wird sofort aktualisiert; die Hervorhebung ist jedoch erst sichtbar, wenn das Element den Fokus hat.

Diese Methode aktualisiert die Eigenschaften [`HTMLInputElement.selectionStart`](/de/docs/Web/API/HTMLInputElement/selectionStart), [`HTMLInputElement.selectionEnd`](/de/docs/Web/API/HTMLInputElement/selectionEnd) und [`HTMLInputElement.selectionDirection`](/de/docs/Web/API/HTMLInputElement/selectionDirection) in einem einzigen Aufruf. Wenn Sie den **gesamten** Text eines Eingabeelements auswählen möchten, können Sie stattdessen die Methode [`select()`](/de/docs/Web/API/HTMLInputElement/select) verwenden.

Die Auswahl in einem Eingabeelement kann entweder einen Zeichenbereich umfassen oder nur aus einer Einfügemarke bestehen, wenn kein Text ausgewählt ist. Indem Sie `selectionStart` und `selectionEnd` auf denselben Wert setzen, können Sie die Einfügemarke an eine bestimmte Position im Textfeld verschieben.

## Syntax

```js-nolint
setSelectionRange(selectionStart, selectionEnd)
setSelectionRange(selectionStart, selectionEnd, selectionDirection)
```

### Parameter

- `selectionStart`
  - : Der nullbasierte Index des ersten ausgewählten Zeichens. Ein Index, der größer als die Länge des Werts des Elements ist, wird so behandelt, als würde er auf das Ende des Werts zeigen. Siehe die Eigenschaft [`selectionStart`](/de/docs/Web/API/HTMLInputElement/selectionStart).
- `selectionEnd`
  - : Der nullbasierte Index des Zeichens _nach_ dem letzten ausgewählten Zeichen. Ein Index, der größer als die Länge des Werts des Elements ist, wird so behandelt, als würde er auf das Ende des Werts zeigen. Wenn `selectionEnd` kleiner als `selectionStart` ist, werden beide als Wert von `selectionEnd` behandelt. Siehe die Eigenschaft [`selectionEnd`](/de/docs/Web/API/HTMLInputElement/selectionEnd).
- `selectionDirection` {{optional_inline}}
  - : Eine Zeichenfolge, die angibt, in welcher Richtung die Auswahl als erfolgt gilt. Siehe die Eigenschaft [`selectionDirection`](/de/docs/Web/API/HTMLInputElement/selectionDirection). Mögliche Werte:
    - `"forward"`
    - `"backward"`
    - `"none"`, wenn die Richtung unbekannt oder unerheblich ist. Standardwert.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Element keinen der folgenden Eingabetypen hat: [`password`](/de/docs/Web/HTML/Reference/Elements/input/password), [`search`](/de/docs/Web/HTML/Reference/Elements/input/search), [`tel`](/de/docs/Web/HTML/Reference/Elements/input/tel), [`text`](/de/docs/Web/HTML/Reference/Elements/input/text) oder [`url`](/de/docs/Web/HTML/Reference/Elements/input/url).

## Beispiele

### Text auswählen

Klicken Sie in diesem Beispiel auf die Schaltfläche, um das dritte, vierte und fünfte Zeichen im Textfeld auszuwählen („zil“ im Wort „Mozilla“).

#### HTML

```html
<input type="text" id="text-box" size="20" value="Mozilla" />
<button>Select text</button>
```

#### JavaScript

```js
function selectText() {
  const input = document.getElementById("text-box");
  input.focus();
  input.setSelectionRange(2, 5);
}

document.querySelector("button").addEventListener("click", selectText);
```

#### Ergebnis

{{EmbedLiveSample("Selecting text")}}

### Einfügemarke verschieben

Wenn Sie für `selectionStart` und `selectionEnd` denselben Wert übergeben, wird die Einfügemarke verschoben, ohne Text auszuwählen. Wählen Sie eine Position und klicken Sie auf die Schaltfläche, um die Einfügemarke dorthin zu verschieben. Position `0` liegt vor dem ersten Zeichen und Position `7` hinter dem letzten.

#### HTML

```html
<input type="text" id="caret-box" size="20" value="Mozilla" />
<label>
  Position
  <input type="number" id="caret-position" min="0" max="7" value="2" />
</label>
<button>Move caret</button>
```

#### JavaScript

```js
const input = document.getElementById("caret-box");
const position = document.getElementById("caret-position");

document.querySelector("button").addEventListener("click", () => {
  const index = position.valueAsNumber;
  input.focus();
  input.setSelectionRange(index, index);
});
```

#### Ergebnis

{{EmbedLiveSample("Moving the caret")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("input")}}
- {{HTMLElement("textarea")}}
- [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)
- [`Selection`](/de/docs/Web/API/Selection)
