---
title: "HTMLTextAreaElement: selectionEnd-Eigenschaft"
short-title: selectionEnd
slug: Web/API/HTMLTextAreaElement/selectionEnd
l10n:
  sourceCommit: 92e5c0d4ac1ea1a8d78342cbb3d9dcbce705b015
---

{{APIRef("HTML DOM")}}

Die **`selectionEnd`**-Eigenschaft des [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement)-Interfaces gibt die Endposition der aktuellen Textauswahl in einem {{HTMLElement("textarea")}}-Element an. Es ist eine Zahl, die den letzten Index des ausgewählten Textes darstellt. Mit ihr kann sowohl der Index des Endes des ausgewählten Textes in einem `<textarea>` abgerufen als auch gesetzt werden.

Wenn nichts ausgewählt ist, entspricht der Wert sowohl von [`selectionStart`](/de/docs/Web/API/HTMLTextAreaElement/selectionStart) als auch von `selectionEnd` der Position des Cursors (Caret) innerhalb des `<textarea>`-Elements.

Wenn `selectionEnd` auf einen Wert kleiner als der aktuelle Wert von [`selectionStart`](/de/docs/Web/API/HTMLTextAreaElement/selectionStart) gesetzt wird, werden sowohl die Eigenschaften `selectionEnd` als auch `selectionStart` auf diesen Wert aktualisiert. Wenn beide Werte kleiner als 0 sind, werden beide Eigenschaften auf den Wert der [`textLength`](/de/docs/Web/API/HTMLTextAreaElement/textLength)-Eigenschaft gesetzt.

Der Eigenschaftswert kann abgerufen und gesetzt werden, ohne dass das `<textarea>` den Fokus hat, aber das Element muss den Fokus haben, damit das {{cssxref("::selection")}}-Pseudoelement den ausgewählten Text übereinstimmt.

Wenn `selectionEnd` auf einen neuen Wert gesetzt wird, werden die Ereignisse [`selectchange`](/de/docs/Web/API/HTMLTextAreaElement/selectionchange_event) und [`select`](/de/docs/Web/API/HTMLTextAreaElement/select_event) ausgelöst.

## Wert

Eine nicht-negative Zahl.

## Beispiele

```js
const textarea = document.getElementById("text-box");
const end = textarea.selectionEnd;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("textarea")}}
- [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement)
- [`HTMLTextAreaElement.selectionStart`](/de/docs/Web/API/HTMLTextAreaElement/selectionStart)
- [`HTMLTextAreaElement.selectionDirection`](/de/docs/Web/API/HTMLTextAreaElement/selectionDirection)
- [`HTMLTextAreaElement.textLength`](/de/docs/Web/API/HTMLTextAreaElement/textLength)
- [`selectionChange`](/de/docs/Web/API/HTMLTextAreaElement/selectionchange_event) Ereignis
- [`HTMLTextAreaElement.select()`](/de/docs/Web/API/HTMLTextAreaElement/select)
- [`HTMLTextAreaElement.setSelectionRange()`](/de/docs/Web/API/HTMLTextAreaElement/setSelectionRange)
- [`HTMLTextAreaElement.setRangeText()`](/de/docs/Web/API/HTMLTextAreaElement/setRangeText)
- [`HTMLInputElement.selectionEnd`](/de/docs/Web/API/HTMLInputElement/selectionEnd)
- [`Selection`](/de/docs/Web/API/Selection)
- {{cssxref("::selection")}} Pseudoelement
