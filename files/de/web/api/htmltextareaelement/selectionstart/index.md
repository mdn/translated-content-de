---
title: "HTMLTextAreaElement: selectionStart-Eigenschaft"
short-title: selectionStart
slug: Web/API/HTMLTextAreaElement/selectionStart
l10n:
  sourceCommit: a7444882eb1b18918f3c924d83eb3c78f245643a
---

{{APIRef("HTML DOM")}}

Die **`selectionStart`**-Eigenschaft der [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement)-Schnittstelle gibt die Startposition der aktuellen Textauswahl in einem {{HTMLElement("textarea")}}-Element an. Es handelt sich um eine Zahl, die den Anfangsindex des ausgewählten Textes repräsentiert. Sie kann verwendet werden, um sowohl den Startindex des ausgewählten Textes abzurufen als auch festzulegen.

Wenn nichts ausgewählt ist, entspricht der Wert von `selectionStart` und [`selectionEnd`](/de/docs/Web/API/HTMLTextAreaElement/selectionEnd) der Position des Cursors (Eingabemarkierung) innerhalb des `<textarea>`-Elements.

Wenn `selectionStart` auf einen Wert größer als der aktuelle Wert von [`selectionEnd`](/de/docs/Web/API/HTMLTextAreaElement/selectionEnd) gesetzt wird, werden sowohl `selectionStart` als auch `selectionEnd` auf diesen Wert aktualisiert. Wenn dieser Wert gleich oder größer als [`textLength`](/de/docs/Web/API/HTMLTextAreaElement/textLength) ist, werden beide Eigenschaften auf den Wert der `textLength`-Eigenschaft gesetzt.

Der Eigenschaftswert kann abgerufen und gesetzt werden, ohne dass das `<textarea>` den Fokus hat, aber das Element muss den Fokus haben, damit das {{cssxref("::selection")}}-Pseudo-Element mit dem ausgewählten Text übereinstimmt.

Das Festlegen eines neuen Wertes für `selectionStart` löst die [`selectchange`](/de/docs/Web/API/HTMLTextAreaElement/selectionchange_event)- und [`select`](/de/docs/Web/API/HTMLTextAreaElement/select_event)-Ereignisse aus.

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
