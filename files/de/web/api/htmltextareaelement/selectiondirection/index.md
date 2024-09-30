---
title: "HTMLTextAreaElement: selectionDirection-Eigenschaft"
short-title: selectionDirection
slug: Web/API/HTMLTextAreaElement/selectionDirection
l10n:
  sourceCommit: b921b8d779314f2098a1669d8269b36107ecfbb1
---

<!--  -->

{{APIRef("HTML DOM")}}

Die **`selectionDirection`**-Eigenschaft der [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement)-Schnittstelle gibt die aktuelle Richtung der Auswahl an. Die möglichen Werte sind `"forward"`, `"backward"` und `"none"`. Der Wert `forward` zeigt an, dass die Auswahl in der Start-zu-Ende-Richtung der aktuellen Sprache erfolgte, während `backward` die entgegengesetzte Richtung angibt. Der Wert `none` tritt auf, wenn die Richtung unbekannt ist. Sie kann verwendet werden, um sowohl die Richtung des im `<textarea>` ausgewählten Textes abzurufen als auch zu ändern.

Das Festlegen von `selectionDirection` auf einen neuen Wert löst die Ereignisse [`selectchange`](/de/docs/Web/API/HTMLTextAreaElement/selectionchange_event) und [`select`](/de/docs/Web/API/HTMLTextAreaElement/select_event) aus.

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
- {{cssxref("::selection")}} Pseudoelement
