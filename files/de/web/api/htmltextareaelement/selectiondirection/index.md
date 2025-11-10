---
title: "HTMLTextAreaElement: selectionDirection-Eigenschaft"
short-title: selectionDirection
slug: Web/API/HTMLTextAreaElement/selectionDirection
l10n:
  sourceCommit: 76d6c2c2bcca61d0d14ed464356716090097bc7a
---

<!--  -->

{{APIRef("HTML DOM")}}

Die **`selectionDirection`**-Eigenschaft des [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement)-Interfaces gibt die aktuelle Richtung der Auswahl an. Die möglichen Werte sind `"forward"`, `"backward"` und `"none"`. Der Wert `forward` zeigt an, dass die Auswahl in der Start-zu-Ende-Richtung des aktuellen Gebietsschemas durchgeführt wurde, wobei `backward` die entgegengesetzte Richtung anzeigt. Der Wert `none` tritt auf, wenn die Richtung unbekannt ist. Diese Eigenschaft kann verwendet werden, um die Richtung des ausgewählten Textes des `<textarea>` sowohl abzurufen als auch zu ändern.

Das Setzen von `selectionDirection` auf einen neuen Wert löst die Ereignisse [`selectionchange`](/de/docs/Web/API/HTMLTextAreaElement/selectionchange_event) und [`select`](/de/docs/Web/API/HTMLTextAreaElement/select_event) aus.

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
- [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement)
- [`HTMLTextAreaElement.selectionStart`](/de/docs/Web/API/HTMLTextAreaElement/selectionStart)
- [`HTMLTextAreaElement.selectionEnd`](/de/docs/Web/API/HTMLTextAreaElement/selectionEnd)
- [`HTMLTextAreaElement.textLength`](/de/docs/Web/API/HTMLTextAreaElement/textLength)
- [`HTMLTextAreaElement.select()`](/de/docs/Web/API/HTMLTextAreaElement/select)
- [`HTMLTextAreaElement.setSelectionRange()`](/de/docs/Web/API/HTMLTextAreaElement/setSelectionRange)
- [`HTMLTextAreaElement.setRangeText()`](/de/docs/Web/API/HTMLTextAreaElement/setRangeText)
- [`HTMLInputElement.selectionDirection`](/de/docs/Web/API/HTMLInputElement/selectionDirection)
- [`Selection`](/de/docs/Web/API/Selection)
- {{cssxref("::selection")}}-Pseudoelement
