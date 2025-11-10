---
title: "HTMLTextAreaElement: selectionEnd-Eigenschaft"
short-title: selectionEnd
slug: Web/API/HTMLTextAreaElement/selectionEnd
l10n:
  sourceCommit: 76d6c2c2bcca61d0d14ed464356716090097bc7a
---

{{APIRef("HTML DOM")}}

Die **`selectionEnd`**-Eigenschaft des [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement)-Interfaces gibt die Endposition der aktuellen Textselektion in einem {{HTMLElement("textarea")}}-Element an. Es ist eine Zahl, die den letzten Index des ausgewählten Textes darstellt. Sie kann sowohl zum Abrufen als auch zum Festlegen des Indexes des Endes eines `\<textarea>` ausgewählten Textes verwendet werden.

Wenn nichts ausgewählt ist, entspricht der Wert sowohl von [`selectionStart`](/de/docs/Web/API/HTMLTextAreaElement/selectionStart) als auch von `selectionEnd` der Position des Cursors (Einfügemarke) innerhalb des `<textarea>`-Elements.

Wenn `selectionEnd` auf einen Wert kleiner als der aktuelle Wert von [`selectionStart`](/de/docs/Web/API/HTMLTextAreaElement/selectionStart) gesetzt wird, werden sowohl die `selectionEnd`- als auch die `selectionStart`-Eigenschaften auf diesen Wert aktualisiert. Wenn beide Werte kleiner als 0 sind, werden beide Eigenschaften auf den Wert der [`textLength`](/de/docs/Web/API/HTMLTextAreaElement/textLength)-Eigenschaft gesetzt.

Der Eigenschaftswert kann abgerufen und gesetzt werden, ohne dass das `<textarea>` den Fokus hat, aber das Element muss den Fokus haben, damit das {{cssxref("::selection")}}-Pseudo-Element den ausgewählten Text zuordnen kann.

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
- [`selectionChange`](/de/docs/Web/API/HTMLTextAreaElement/selectionchange_event)-Ereignis
- [`HTMLTextAreaElement.select()`](/de/docs/Web/API/HTMLTextAreaElement/select)
- [`HTMLTextAreaElement.setSelectionRange()`](/de/docs/Web/API/HTMLTextAreaElement/setSelectionRange)
- [`HTMLTextAreaElement.setRangeText()`](/de/docs/Web/API/HTMLTextAreaElement/setRangeText)
- [`HTMLInputElement.selectionEnd`](/de/docs/Web/API/HTMLInputElement/selectionEnd)
- [`Selection`](/de/docs/Web/API/Selection)
- {{cssxref("::selection")}}-Pseudo-Element
