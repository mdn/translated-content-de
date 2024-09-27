---
title: "HTMLTextAreaElement: selectionStart-Eigenschaft"
short-title: selectionStart
slug: Web/API/HTMLTextAreaElement/selectionStart
l10n:
  sourceCommit: b921b8d779314f2098a1669d8269b36107ecfbb1
---

{{APIRef("HTML DOM")}}

Die **`selectionStart`** Eigenschaft des [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement) Interfaces gibt die Startposition der aktuellen Textauswahl in einem {{HTMLElement("textarea")}}-Element an. Es ist eine Zahl, die den Anfangsindex des ausgewählten Textes darstellt. Sie kann verwendet werden, um sowohl den Start- als auch den Endindex des ausgewählten Textes eines `<textarea>`-Elements abzurufen und festzulegen.

Wenn nichts ausgewählt ist, ist der Wert sowohl von `selectionStart` als auch von [`selectionEnd`](/de/docs/Web/API/HTMLTextAreaElement/selectionEnd) die Position des Cursors (Einfügemarke) innerhalb des `<textarea>`-Elements.

Wenn `selectionStart` auf einen Wert größer als der aktuelle Wert von [`selectionEnd`](/de/docs/Web/API/HTMLTextAreaElement/selectionEnd) gesetzt wird, werden sowohl die `selectionStart` als auch die `selectionEnd` Eigenschaften auf diesen Wert aktualisiert. Ist dieser Wert gleich oder größer als die [`textLength`](/de/docs/Web/API/HTMLTextAreaElement/textLength), werden beide Eigenschaften auf den Wert der `textLength`-Eigenschaft gesetzt.

Der Eigenschaftswert kann abgerufen und gesetzt werden, ohne dass das `<textarea>` den Fokus hat, aber das Element muss den Fokus haben, damit das {{cssxref("::selection")}} Pseudoelement den ausgewählten Text übereinstimmt.

Das Setzen von `selectionStart` auf einen neuen Wert löst die [`selectchange`](/de/docs/Web/API/HTMLTextAreaElement/selectionchange_event) und [`select`](/de/docs/Web/API/HTMLTextAreaElement/select_event) Ereignisse aus.

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
