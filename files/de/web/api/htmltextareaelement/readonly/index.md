---
title: "HTMLTextAreaElement: readOnly-Eigenschaft"
short-title: readOnly
slug: Web/API/HTMLTextAreaElement/readOnly
l10n:
  sourceCommit: 30d0a926fffe7bcf586def53959c12a5e526fa26
---

{{ APIRef("HTML DOM") }}

Die **`readOnly`**-Eigenschaft der [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement)-Schnittstelle zeigt an, dass der Benutzer den Wert des Steuerelements nicht ändern kann. Im Gegensatz zum [`disabled`](/de/docs/Web/API/HTMLTextAreaElement/disabled)-Attribut verhindert das `readonly`-Attribut nicht, dass der Benutzer im Steuerelement klickt oder auswählt. Es spiegelt das `{{htmlelement("textarea")}}`-Element des [`readonly`](/de/docs/Web/HTML/Element/textarea#readonly)-Attributs wider.

## Wert

Ein Boolean.

## Beispiele

```js
const textareaElement = document.getElementById("comment");
console.log(textArea.readOnly);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("textarea")}}
- [`HTMLTextAreaElement.disabled`](/de/docs/Web/API/HTMLTextAreaElement/disabled)
- {{cssxref(":read-only")}} Pseudo-Klasse
