---
title: "HTMLTextAreaElement: readOnly-Eigenschaft"
short-title: readOnly
slug: Web/API/HTMLTextAreaElement/readOnly
l10n:
  sourceCommit: 30d0a926fffe7bcf586def53959c12a5e526fa26
---

{{ APIRef("HTML DOM") }}

Die **`readOnly`**-Eigenschaft des [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement)-Interfaces zeigt an, dass der Benutzer den Wert der Steuerung nicht ändern kann. Im Gegensatz zum [`disabled`](/de/docs/Web/API/HTMLTextAreaElement/disabled)-Attribut verhindert das `readonly`-Attribut nicht, dass der Benutzer auf das Steuerungselement klickt oder es auswählt. Es spiegelt das [`readonly`](/de/docs/Web/HTML/Element/textarea#readonly)-Attribut des {{htmlelement("textarea")}}-Elements wider.

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
- [`HTMLTextAreaElement.disabled`](/de/docs/Web/API/HTMLTextAreaElement/disabled)
- {{cssxref(":read-only")}} Pseudoklasse
