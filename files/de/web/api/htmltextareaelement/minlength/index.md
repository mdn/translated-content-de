---
title: "HTMLTextAreaElement: minLength-Eigenschaft"
short-title: minLength
slug: Web/API/HTMLTextAreaElement/minLength
l10n:
  sourceCommit: 8cf200c4039f6399b6696fc710bee1c4b395d401
---

{{ApiRef("HTML DOM")}}

Die **`minLength`**-Eigenschaft des {{domxref("HTMLTextAreaElement")}}-Interfaces gibt die minimale Anzahl an Zeichen (in UTF-16 Code-Einheiten) an, die für den Wert des {{HTMLElement("textarea")}}-Elements erforderlich ist, um gültig zu sein. Sie entspricht dem [`minlength`](/de/docs/Web/HTML/Element/textarea#minlength)-Attribut des Elements. `-1` bedeutet, dass es keine Mindestlängenanforderung gibt.

> [!NOTE]
> Wenn das Textfeld einen Wert hat und dieser Wert weniger Zeichen enthält, als das `minlength`-Attribut erfordert, wird das Element als ungültig betrachtet, und die {{domxref("ValidityState")}}-Objekteigenschaft {{domxref("ValidityState.tooShort", "tooShort")}} wird `true` sein.

## Wert

Eine Zahl, die dem `minlength` des Elements entspricht, falls vorhanden, oder `-1`.

## Beispiel

Gegeben sei das folgende HTML:

```html
<p>
  <label for="comment">Kommentar</label>
  <textarea id="comment" minlength="10" maxlength="200" /></textarea>
</p>
```

Sie können die `minLength`-Eigenschaft verwenden, um den `minlength`-Attributwert des `<textarea>`-Elements abzurufen oder festzulegen:

```js
const textareaElement = document.querySelector("#comment");
console.log(`Element's minLength: ${textareaElement.minLength}`); // "Element's minlength: 10"
textareaElement.minLength = 5; // aktualisiert den minlength-Attributwert des Elements
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("HTMLTextAreaElement.value")}}
- {{domxref("HTMLTextAreaElement.maxLength")}}
- {{domxref("ValidityState.tooShort")}}
