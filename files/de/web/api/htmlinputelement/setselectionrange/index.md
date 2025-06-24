---
title: "HTMLInputElement: setSelectionRange() Methode"
short-title: setSelectionRange()
slug: Web/API/HTMLInputElement/setSelectionRange
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("HTML DOM")}}

Die **`HTMLInputElement.setSelectionRange()`** Methode legt die Anfangs- und Endposition der aktuellen Textauswahl in einem {{HTMLElement("input")}} oder {{HTMLElement("textarea")}} Element fest.

Das Element muss fokussiert sein, damit der Aufruf eine Wirkung hat.

Optional können Sie die Richtung angeben, in der die Auswahl als erfolgt betrachtet werden soll. Dies ermöglicht es Ihnen beispielsweise anzugeben, dass die Auswahl durch Klicken und Ziehen des Benutzers vom Ende des ausgewählten Textes zurück zum Anfang gesetzt wurde.

Diese Methode aktualisiert die Eigenschaften [`HTMLInputElement.selectionStart`](/de/docs/Web/API/HTMLInputElement/selectionStart), [`HTMLInputElement.selectionEnd`](/de/docs/Web/API/HTMLInputElement/selectionEnd) und [`HTMLInputElement.selectionDirection`](/de/docs/Web/API/HTMLInputElement/selectionDirection) in einem Aufruf.

Das Element muss einer der folgenden Eingabetypen haben: [`password`](/de/docs/Web/HTML/Reference/Elements/input/password), [`search`](/de/docs/Web/HTML/Reference/Elements/input/search), [`tel`](/de/docs/Web/HTML/Reference/Elements/input/tel), [`text`](/de/docs/Web/HTML/Reference/Elements/input/text), oder [`url`](/de/docs/Web/HTML/Reference/Elements/input/url). Andernfalls wirft der Browser eine `InvalidStateError` Ausnahme.

Wenn Sie den **gesamten** Text eines Eingabeelements auswählen möchten, können Sie stattdessen die Methode [HTMLInputElement.select()](/de/docs/Web/API/HTMLInputElement/select) verwenden.

## Syntax

```js-nolint
setSelectionRange(selectionStart, selectionEnd)
setSelectionRange(selectionStart, selectionEnd, selectionDirection)
```

### Parameter

- `selectionStart`
  - : Der nullbasierte Index des ersten ausgewählten Zeichens. Ein Index größer als die Länge
    des Werts des Elements wird als Zeiger auf das Ende des Werts behandelt.
- `selectionEnd`

  - : Der nullbasierte Index des Zeichens _nach_ dem letzten ausgewählten Zeichen. Ein
    Index größer als die Länge des Werts des Elements wird als Zeiger auf das Ende des Werts behandelt. Wenn `selectionEnd` kleiner als `selectionStart` ist, werden beide als der Wert von `selectionEnd` betrachtet.

- `selectionDirection` {{optional_inline}}
  - : Ein String, der die Richtung angibt, in der die Auswahl als durchgeführt betrachtet wird. Mögliche Werte:
    - `"forward"`
    - `"backward"`
    - `"none"` wenn die Richtung unbekannt oder irrelevant ist. Standardwert.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Element nicht einer der folgenden Eingabetypen ist: [`password`](/de/docs/Web/HTML/Reference/Elements/input/password), [`search`](/de/docs/Web/HTML/Reference/Elements/input/search), [`tel`](/de/docs/Web/HTML/Reference/Elements/input/tel), [`text`](/de/docs/Web/HTML/Reference/Elements/input/text), oder [`url`](/de/docs/Web/HTML/Reference/Elements/input/url).

## Beispiele

Klicken Sie auf die Schaltfläche in diesem Beispiel, um das dritte, vierte und fünfte Zeichen im
Textfeld auszuwählen ("zil" im Wort "Mozilla").

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
