---
title: "HTMLTextAreaElement: selectionStart-Eigenschaft"
short-title: selectionStart
slug: Web/API/HTMLTextAreaElement/selectionStart
l10n:
  sourceCommit: b921b8d779314f2098a1669d8269b36107ecfbb1
---

{{APIRef("HTML DOM")}}

Die **`selectionStart`**-Eigenschaft der {{domxref("HTMLTextAreaElement")}}-Schnittstelle gibt die Startposition der aktuellen Textauswahl in einem {{HTMLElement("textarea")}}-Element an. Sie ist eine Zahl, die den Startindex des ausgewählten Textes darstellt. Sie kann sowohl verwendet werden, um den Startindex des ausgewählten Textes in einem `<textarea>` zu ermitteln als auch festzulegen.

Wenn nichts ausgewählt ist, entspricht der Wert von sowohl `selectionStart` als auch {{domxref("HTMLTextAreaElement.selectionEnd", "selectionEnd")}} der Position des Cursors (Caret) innerhalb des `<textarea>`-Elements.

Wird `selectionStart` auf einen Wert größer als der aktuelle Wert von {{domxref("HTMLTextAreaElement.selectionEnd", "selectionEnd")}} gesetzt, werden sowohl die `selectionStart`- als auch die `selectionEnd`-Eigenschaften auf diesen Wert aktualisiert. Wenn dieser Wert gleich oder größer als die {{domxref("HTMLTextAreaElement.textLength", "textLength")}} ist, werden beide Eigenschaften auf den Wert der `textLength`-Eigenschaft gesetzt.

Der Eigenschaftswert kann abgerufen und festgelegt werden, ohne dass das `<textarea>` den Fokus hat, aber das Element muss den Fokus haben, damit das {{cssxref("::selection")}}-Pseudoelement den ausgewählten Text übereinstimmt.

Das Setzen von `selectionStart` auf einen neuen Wert löst die {{domxref("HTMLTextAreaElement.selectionchange_event", "selectchange")}}- und {{domxref("HTMLTextAreaElement.select_event", "select")}}-Ereignisse aus.

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
- {{domxref("HTMLTextAreaElement")}}
- {{domxref("HTMLTextAreaElement.selectionEnd")}}
- {{domxref("HTMLTextAreaElement.selectionDirection")}}
- {{domxref("HTMLTextAreaElement.textLength")}}
- {{domxref("HTMLTextAreaElement.select()")}}
- {{domxref("HTMLTextAreaElement.setSelectionRange()")}}
- {{domxref("HTMLTextAreaElement.setRangeText()")}}
- {{domxref("HTMLInputElement.selectionStart")}}
- {{domxref("Selection")}}
- {{cssxref("::selection")}} Pseudoelement
