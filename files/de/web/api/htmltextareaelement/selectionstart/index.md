---
title: "HTMLTextAreaElement: selectionStart-Eigenschaft"
short-title: selectionStart
slug: Web/API/HTMLTextAreaElement/selectionStart
l10n:
  sourceCommit: e13b6ffe7c9cb05c6a89fcb3c8fcbc987eb05211
---

{{APIRef("HTML DOM")}}

Die **`selectionStart`**-Eigenschaft des [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement)-Interfaces gibt die Startposition der aktuellen Textauswahl in einem {{HTMLElement("textarea")}}-Element an. Es handelt sich dabei um eine Zahl, die den Anfangsindex des ausgewählten Textes darstellt. Diese Eigenschaft kann verwendet werden, um sowohl den Startindex des ausgewählten Textes in einem `<textarea>` abzurufen als auch festzulegen.

Wenn nichts ausgewählt ist, entspricht der Wert von sowohl `selectionStart` als auch [`selectionEnd`](/de/docs/Web/API/HTMLTextAreaElement/selectionEnd) der Position des Cursors (Einfügemarke) innerhalb des `<textarea>`-Elements.

Wird `selectionStart` auf einen Wert gesetzt, der größer ist als der aktuelle Wert von [`selectionEnd`](/de/docs/Web/API/HTMLTextAreaElement/selectionEnd), werden sowohl die `selectionStart`- als auch die `selectionEnd`-Eigenschaften auf diesen Wert aktualisiert. Sollte dieser Wert gleich oder größer als die [`textLength`](/de/docs/Web/API/HTMLTextAreaElement/textLength) sein, werden beide Eigenschaften auf den Wert der `textLength`-Eigenschaft gesetzt.

Der Eigenschaftswert kann abgerufen und gesetzt werden, ohne dass das `<textarea>` den Fokus haben muss. Jedoch muss das Element den Fokus haben, damit das {{cssxref("::selection")}}-Pseudo-Element den ausgewählten Text übereinstimmt.

Das Setzen eines neuen Wertes für `selectionStart` löst die [`selectchange`](/de/docs/Web/API/HTMLTextAreaElement/selectionchange_event)- und [`select`](/de/docs/Web/API/HTMLTextAreaElement/select_event)-Ereignisse aus.

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
