---
title: "HTMLTextAreaElement: readOnly-Eigenschaft"
short-title: readOnly
slug: Web/API/HTMLTextAreaElement/readOnly
l10n:
  sourceCommit: 30d0a926fffe7bcf586def53959c12a5e526fa26
---

{{ APIRef("HTML DOM") }}

Die **`readOnly`**-Eigenschaft der {{DOMxRef("HTMLTextAreaElement")}}-Schnittstelle zeigt an, dass der Benutzer den Wert des Steuerungselements nicht ändern kann. Im Gegensatz zum {{domxref("HTMLTextAreaElement.disabled", "disabled")}}-Attribut verhindert das `readonly`-Attribut nicht, dass der Benutzer im Steuerungselement klickt oder Texte auswählt. Es spiegelt das [`readonly`](/de/docs/Web/HTML/Element/textarea#readonly)-Attribut des {{htmlelement("textarea")}}-Elements wider.

## Wert

Ein boolean.

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
- {{DOMXref("HTMLTextAreaElement.disabled")}}
- {{cssxref(":read-only")}} Pseudoklasse
