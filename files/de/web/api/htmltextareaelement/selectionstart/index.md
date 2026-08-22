---
title: "HTMLTextAreaElement: selectionStart-Eigenschaft"
short-title: selectionStart
slug: Web/API/HTMLTextAreaElement/selectionStart
l10n:
  sourceCommit: b2c48c8b7c097aeab4bc15a388c913f466f40e25
---

{{APIRef("HTML DOM")}}

Die **`selectionStart`**-Eigenschaft des [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement)-Interfaces gibt die Startposition der aktuellen Textauswahl in einem {{HTMLElement("textarea")}}-Element an. Es ist eine Zahl, die den Anfangsindex des ausgewählten Textes darstellt. Sie kann verwendet werden, um sowohl den Startindex des Beginns eines `<textarea>`-ausgewählten Textes abzurufen als auch zu setzen.

Wenn nichts ausgewählt ist, entspricht der Wert von sowohl `selectionStart` als auch [`selectionEnd`](/de/docs/Web/API/HTMLTextAreaElement/selectionEnd) der Position des Cursors innerhalb des `<textarea>`-Elements.

Wenn `selectionStart` auf einen Wert größer als der aktuelle Wert von [`selectionEnd`](/de/docs/Web/API/HTMLTextAreaElement/selectionEnd) gesetzt wird, aktualisieren sich sowohl die `selectionStart`- als auch `selectionEnd`-Eigenschaften auf diesen Wert. Ist dieser Wert gleich oder größer als die [`textLength`](/de/docs/Web/API/HTMLTextAreaElement/textLength), werden beide Eigenschaften auf den Wert der `textLength`-Eigenschaft gesetzt.

Der Eigenschaftswert kann abgerufen und gesetzt werden, ohne dass der `<textarea>` den Fokus haben muss, aber das Element benötigt den Fokus, damit das {{cssxref("::selection")}} Pseudoelement dem ausgewählten Text entspricht.

Das Setzen von `selectionStart` auf einen neuen Wert löst die [`selectionchange`](/de/docs/Web/API/HTMLTextAreaElement/selectionchange_event)- und [`select`](/de/docs/Web/API/HTMLTextAreaElement/select_event)-Events aus.

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
- {{cssxref("::selection")}} Pseudoelement
