---
title: "HTMLTextAreaElement: selectionStart Eigenschaft"
short-title: selectionStart
slug: Web/API/HTMLTextAreaElement/selectionStart
l10n:
  sourceCommit: 083de2f5a832aef7994a043e00cb953703e4a5d5
---

{{APIRef("HTML DOM")}}

Die **`selectionStart`** Eigenschaft des [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement)-Interfaces gibt die Startposition der aktuellen Textauswahl in einem {{HTMLElement("textarea")}} Element an. Es handelt sich dabei um eine Zahl, die den Anfangsindex des ausgewählten Textes darstellt. Sie kann verwendet werden, um sowohl den Anfangsindex des ausgewählten Textes in einem `<textarea>` abzurufen als auch festzulegen.

Wenn nichts ausgewählt ist, entspricht der Wert von `selectionStart` und [`selectionEnd`](/de/docs/Web/API/HTMLTextAreaElement/selectionEnd) der Position des Cursors (Caret) im `<textarea>`-Element.

Wenn `selectionStart` auf einen Wert größer als der aktuelle Wert von [`selectionEnd`](/de/docs/Web/API/HTMLTextAreaElement/selectionEnd) gesetzt wird, aktualisiert dies sowohl die `selectionStart`- als auch die `selectionEnd`-Eigenschaft auf diesen Wert. Wenn dieser Wert gleich oder größer als die [`textLength`](/de/docs/Web/API/HTMLTextAreaElement/textLength) ist, werden beide Eigenschaften auf den Wert der `textLength`-Eigenschaft gesetzt.

Der Eigenschaftswert kann abgerufen und gesetzt werden, ohne dass das `<textarea>` den Fokus hat, allerdings muss das Element den Fokus haben, damit das {{cssxref("::selection")}} Pseudo-Element mit dem ausgewählten Text übereinstimmt.

Das Setzen von `selectionStart` auf einen neuen Wert löst die [`selectionchange`](/de/docs/Web/API/HTMLTextAreaElement/selectionchange_event) und [`select`](/de/docs/Web/API/HTMLTextAreaElement/select_event) Ereignisse aus.

## Wert

Eine nicht-negative Zahl.

## Beispiele

```js
const textarea = document.getElementById("text-box");
const start = textarea.selectionStart;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("textarea")}}
- [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement)
- [`HTMLTextAreaElement.selectionEnd`](/de/docs/Web/API/HTMLTextAreaElement/selectionEnd)
- [`HTMLTextAreaElement.selectionDirection`](/de/docs/Web/API/HTMLTextAreaElement/selectionDirection)
- [`HTMLTextAreaElement.textLength`](/de/docs/Web/API/HTMLTextAreaElement/textLength)
- [`HTMLTextAreaElement.select()`](/de/docs/Web/API/HTMLTextAreaElement/select)
- [`HTMLTextAreaElement.setSelectionRange()`](/de/docs/Web/API/HTMLTextAreaElement/setSelectionRange)
- [`HTMLTextAreaElement.setRangeText()`](/de/docs/Web/API/HTMLTextAreaElement/setRangeText)
- [`HTMLInputElement.selectionStart`](/de/docs/Web/API/HTMLInputElement/selectionStart)
- [`Selection`](/de/docs/Web/API/Selection)
- {{cssxref("::selection")}} Pseudo-Element
