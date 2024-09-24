---
title: "HTMLTextAreaElement: selectionEnd-Eigenschaft"
short-title: selectionEnd
slug: Web/API/HTMLTextAreaElement/selectionEnd
l10n:
  sourceCommit: b921b8d779314f2098a1669d8269b36107ecfbb1
---

{{APIRef("HTML DOM")}}

Die **`selectionEnd`**-Eigenschaft des {{domxref("HTMLTextAreaElement")}}-Interfaces gibt die Endposition der aktuellen Textauswahl in einem {{HTMLElement("textarea")}}-Element an. Es ist eine Zahl, die den letzten Index des ausgewählten Textes darstellt. Sie können sowohl den Index des Endes des ausgewählten Texts in einem `<textarea>` abrufen als auch festlegen.

Wenn nichts ausgewählt ist, entspricht der Wert sowohl von {{domxref("HTMLTextAreaElement.selectionStart", "selectionStart")}} als auch `selectionEnd` der Position des Cursors (Einfügemarke) innerhalb des `<textarea>`-Elements.

Wenn `selectionEnd` auf einen Wert gesetzt wird, der kleiner als der aktuelle Wert von {{domxref("HTMLTextAreaElement.selectionStart", "selectionStart")}} ist, werden sowohl `selectionEnd` als auch `selectionStart` auf diesen Wert aktualisiert. Wenn beide Werte kleiner als 0 sind, werden beide Eigenschaften auf den Wert der {{domxref("HTMLTextAreaElement.textLength", "textLength")}}-Eigenschaft gesetzt.

Der Eigenschaftswert kann abgerufen und festgelegt werden, ohne dass das `<textarea>` den Fokus haben muss, aber das Element muss den Fokus haben, damit das {{cssxref("::selection")}} Pseudo-Element den ausgewählten Text übereinstimmt.

Das Setzen von `selectionEnd` auf einen neuen Wert löst die Ereignisse {{domxref("HTMLTextAreaElement.selectionchange_event", "selectchange")}} und {{domxref("HTMLTextAreaElement.select_event", "select")}} aus.

## Wert

Eine nicht negative Zahl.

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
- {{domxref("HTMLTextAreaElement")}}
- {{domxref("HTMLTextAreaElement.selectionStart")}}
- {{domxref("HTMLTextAreaElement.selectionDirection")}}
- {{domxref("HTMLTextAreaElement.textLength")}}
- {{domxref("HTMLTextAreaElement.selectionChange_event", "selectionChange")}} event
- {{domxref("HTMLTextAreaElement.select()")}}
- {{domxref("HTMLTextAreaElement.setSelectionRange()")}}
- {{domxref("HTMLTextAreaElement.setRangeText()")}}
- {{domxref("HTMLInputElement.selectionEnd")}}
- {{domxref("Selection")}}
- {{cssxref("::selection")}} Pseudo-Element
