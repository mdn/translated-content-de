---
title: "HTMLTextAreaElement: minLength-Eigenschaft"
short-title: minLength
slug: Web/API/HTMLTextAreaElement/minLength
l10n:
  sourceCommit: 8cf200c4039f6399b6696fc710bee1c4b395d401
---

{{ApiRef("HTML DOM")}}

Die **`minLength`**-Eigenschaft des [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement)-Interfaces gibt die minimale Anzahl von Zeichen (in UTF-16 Code-Einheiten) an, die erforderlich sind, damit der Wert des {{HTMLElement("textarea")}}-Elements gültig ist. Sie spiegelt das [`minlength`](/de/docs/Web/HTML/Element/textarea#minlength)-Attribut des Elements wider. `-1` bedeutet, dass keine Mindestlängenanforderung besteht.

> [!NOTE]
> Wenn das `<textarea>`-Element einen Wert hat und dieser Wert weniger Zeichen enthält als das `minlength`-Attribut erfordert, wird das Element als ungültig angesehen und die [`ValidityState`](/de/docs/Web/API/ValidityState)-Objekt-Eigenschaft [`tooShort`](/de/docs/Web/API/ValidityState/tooShort) wird `true` sein.

## Wert

Eine Zahl, die das `minlength` des Elements darstellt, falls vorhanden, oder `-1`.

## Beispiel

Mit folgendem HTML:

```html
<p>
  <label for="comment">Comment</label>
  <textarea id="comment" minlength="10" maxlength="200" /></textarea>
</p>
```

Sie können die `minLength`-Eigenschaft verwenden, um den Wert des `minlength`-Attributs des `<textarea>` zu erhalten oder festzulegen:

```js
const textareaElement = document.querySelector("#comment");
console.log(`Element's minLength: ${textareaElement.minLength}`); // "Element's minlength: 10"
textareaElement.minLength = 5; // updates the element's minlength attribute value
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLTextAreaElement.value`](/de/docs/Web/API/HTMLTextAreaElement/value)
- [`HTMLTextAreaElement.maxLength`](/de/docs/Web/API/HTMLTextAreaElement/maxLength)
- [`ValidityState.tooShort`](/de/docs/Web/API/ValidityState/tooShort)
