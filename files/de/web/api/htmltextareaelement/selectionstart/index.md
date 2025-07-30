---
title: "HTMLTextAreaElement: selectionStart-Eigenschaft"
short-title: selectionStart
slug: Web/API/HTMLTextAreaElement/selectionStart
l10n:
  sourceCommit: 76d6c2c2bcca61d0d14ed464356716090097bc7a
---

{{APIRef("HTML DOM")}}

Die **`selectionStart`**-Eigenschaft des [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement)-Interfaces gibt die Startposition der aktuellen Textauswahl in einem {{HTMLElement("textarea")}}-Element an. Es ist eine Zahl, die den Anfangsindex des ausgewählten Texts darstellt. Diese Eigenschaft kann verwendet werden, um sowohl den Anfangsindex des ausgewählten Textes zu ermitteln als auch festzulegen.

Wenn nichts ausgewählt ist, ist der Wert sowohl von `selectionStart` als auch von [`selectionEnd`](/de/docs/Web/API/HTMLTextAreaElement/selectionEnd) die Position des Cursors (Einfügemarke) innerhalb des `<textarea>`-Elements.

Das Festlegen von `selectionStart` auf einen Wert, der größer ist als der aktuelle Wert von [`selectionEnd`](/de/docs/Web/API/HTMLTextAreaElement/selectionEnd), aktualisiert sowohl die Eigenschaften `selectionStart` als auch `selectionEnd` auf diesen Wert. Wenn dieser Wert gleich oder größer als die [`textLength`](/de/docs/Web/API/HTMLTextAreaElement/textLength) ist, werden beide Eigenschaften auf den Wert der Eigenschaft `textLength` gesetzt.

Der Eigenschaftswert kann abgerufen und festgelegt werden, ohne dass das `<textarea>` den Fokus hat, aber das Element muss fokussiert sein, damit das {{cssxref("::selection")}}-Pseudoelement den ausgewählten Text übereinstimmt.

Das Einstellen von `selectionStart` auf einen neuen Wert löst die Ereignisse [`selectionchange`](/de/docs/Web/API/HTMLTextAreaElement/selectionchange_event) und [`select`](/de/docs/Web/API/HTMLTextAreaElement/select_event) aus.

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
- {{cssxref("::selection")}}-Pseudoelement
