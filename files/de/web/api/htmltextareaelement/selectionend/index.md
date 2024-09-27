---
title: "HTMLTextAreaElement: selectionEnd-Eigenschaft"
short-title: selectionEnd
slug: Web/API/HTMLTextAreaElement/selectionEnd
l10n:
  sourceCommit: b921b8d779314f2098a1669d8269b36107ecfbb1
---

{{APIRef("HTML DOM")}}

Die **`selectionEnd`**-Eigenschaft des [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement)-Interfaces gibt die Endposition der aktuellen Textauswahl in einem {{HTMLElement("textarea")}}-Element an. Es ist eine Zahl, die den letzten Index des ausgewählten Textes darstellt. Sie kann sowohl verwendet werden, um den Index des Endes eines ausgewählten Textes in einem `<textarea>` abzurufen als auch zu setzen.

Wenn nichts ausgewählt ist, ist der Wert von sowohl [`selectionStart`](/de/docs/Web/API/HTMLTextAreaElement/selectionStart) als auch `selectionEnd` die Position des Cursors (Eingabemarkers) im `<textarea>`-Element.

Wird `selectionEnd` auf einen Wert kleiner als der aktuelle Wert von [`selectionStart`](/de/docs/Web/API/HTMLTextAreaElement/selectionStart) gesetzt, werden sowohl die `selectionEnd`- als auch die `selectionStart`-Eigenschaften auf diesen Wert aktualisiert. Wenn beide Werte kleiner als 0 sind, werden beide Eigenschaften auf den Wert der [`textLength`](/de/docs/Web/API/HTMLTextAreaElement/textLength)-Eigenschaft gesetzt.

Der Eigenschaftswert kann abgerufen und gesetzt werden, ohne dass das `<textarea>` den Fokus hat. Jedoch muss das Element den Fokus haben, damit das {{cssxref("::selection")}}-Pseudoelement den ausgewählten Text übereinstimmt.

Das Setzen der `selectionEnd` auf einen neuen Wert löst die Ereignisse [`selectchange`](/de/docs/Web/API/HTMLTextAreaElement/selectionchange_event) und [`select`](/de/docs/Web/API/HTMLTextAreaElement/select_event) aus.

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
- [`selectionChange`](/de/docs/Web/API/HTMLTextAreaElement/selectionChange_event) Ereignis
- [`HTMLTextAreaElement.select()`](/de/docs/Web/API/HTMLTextAreaElement/select)
- [`HTMLTextAreaElement.setSelectionRange()`](/de/docs/Web/API/HTMLTextAreaElement/setSelectionRange)
- [`HTMLTextAreaElement.setRangeText()`](/de/docs/Web/API/HTMLTextAreaElement/setRangeText)
- [`HTMLInputElement.selectionEnd`](/de/docs/Web/API/HTMLInputElement/selectionEnd)
- [`Selection`](/de/docs/Web/API/Selection)
- {{cssxref("::selection")}} Pseudoelement
