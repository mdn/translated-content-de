---
title: "HTMLTextAreaElement: selectionEnd-Eigenschaft"
short-title: selectionEnd
slug: Web/API/HTMLTextAreaElement/selectionEnd
l10n:
  sourceCommit: 5e28cf03014f1942a39dc0b5f52ee0249e3de859
---

{{APIRef("HTML DOM")}}

Die **`selectionEnd`**-Eigenschaft des [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement)-Interfaces gibt die Endposition der aktuellen Textauswahl in einem {{HTMLElement("textarea")}}-Element an. Es handelt sich um eine Zahl, die den letzten Index des ausgewählten Textes darstellt. Sie kann verwendet werden, um sowohl den Index des Endes eines ausgewählten Textes in einem `<textarea>` abzurufen als auch festzulegen.

Wenn nichts ausgewählt ist, entspricht der Wert von sowohl [`selectionStart`](/de/docs/Web/API/HTMLTextAreaElement/selectionStart) als auch `selectionEnd` der Position des Cursors (Eingabemarke) innerhalb des `<textarea>`-Elements.

Das Setzen von `selectionEnd` auf einen Wert, der kleiner ist als der aktuelle Wert von [`selectionStart`](/de/docs/Web/API/HTMLTextAreaElement/selectionStart), aktualisiert sowohl die `selectionEnd`- als auch die `selectionStart`-Eigenschaften auf diesen Wert. Wenn beide Werte kleiner als 0 sind, werden beide Eigenschaften auf den Wert der [`textLength`](/de/docs/Web/API/HTMLTextAreaElement/textLength)-Eigenschaft gesetzt.

Der Eigenschaftswert kann abgerufen und festgelegt werden, ohne dass das `<textarea>` den Fokus haben muss, aber das Element muss den Fokus haben, damit das {{cssxref("::selection")}}-Pseudo-Element den ausgewählten Text übereinstimmt.

Das Setzen von `selectionEnd` auf einen neuen Wert löst die [`selectionchange`](/de/docs/Web/API/HTMLTextAreaElement/selectionchange_event)- und [`select`](/de/docs/Web/API/HTMLTextAreaElement/select_event)-Ereignisse aus.

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
- [`selectionchange`](/de/docs/Web/API/HTMLTextAreaElement/selectionchange_event)-Ereignis
- [`HTMLTextAreaElement.select()`](/de/docs/Web/API/HTMLTextAreaElement/select)
- [`HTMLTextAreaElement.setSelectionRange()`](/de/docs/Web/API/HTMLTextAreaElement/setSelectionRange)
- [`HTMLTextAreaElement.setRangeText()`](/de/docs/Web/API/HTMLTextAreaElement/setRangeText)
- [`HTMLInputElement.selectionEnd`](/de/docs/Web/API/HTMLInputElement/selectionEnd)
- [`Selection`](/de/docs/Web/API/Selection)
- {{cssxref("::selection")}}-Pseudo-Element
