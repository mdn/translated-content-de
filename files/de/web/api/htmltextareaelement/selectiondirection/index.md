---
title: "HTMLTextAreaElement: Eigenschaft selectionDirection"
short-title: selectionDirection
slug: Web/API/HTMLTextAreaElement/selectionDirection
l10n:
  sourceCommit: b921b8d779314f2098a1669d8269b36107ecfbb1
---

<!--  -->

{{APIRef("HTML DOM")}}

Die **`selectionDirection`**-Eigenschaft des {{domxref("HTMLTextAreaElement")}}-Interfaces gibt die aktuelle Richtung der Auswahl an. Die möglichen Werte sind `"forward"`, `"backward"` und `"none"`. Der Wert `forward` gibt an, dass die Auswahl in der Start-zu-Ende-Richtung der aktuellen Lokalisierung erfolgte, während `backward` die entgegengesetzte Richtung anzeigt. Der Wert `none` tritt auf, wenn die Richtung unbekannt ist. Diese Eigenschaft kann verwendet werden, um sowohl die Richtung des ausgewählten Textes eines `<textarea>`-Elements abzurufen als auch zu ändern.

Das Setzen von `selectionDirection` auf einen neuen Wert löst die Ereignisse {{domxref("HTMLTextAreaElement.selectionchange_event", "selectchange")}} und {{domxref("HTMLTextAreaElement.select_event", "select")}} aus.

## Wert

Ein String; `"forward"`, `"backward"` oder `"none"`.

## Beispiele

```js
const textarea = document.getElementById("text-box");
const end = textarea.selectionDirection;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("textarea")}}
- {{domxref("HTMLTextAreaElement")}}
- {{domxref("HTMLTextAreaElement.selectionStart")}}
- {{domxref("HTMLTextAreaElement.selectionEnd")}}
- {{domxref("HTMLTextAreaElement.textLength")}}
- {{domxref("HTMLTextAreaElement.select()")}}
- {{domxref("HTMLTextAreaElement.setSelectionRange()")}}
- {{domxref("HTMLTextAreaElement.setRangeText()")}}
- {{domxref("HTMLInputElement.selectionDirection")}}
- {{domxref("Selection")}}
- {{cssxref("::selection")}} Pseudo-Element
