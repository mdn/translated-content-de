---
title: "HTMLTextAreaElement: readOnly-Eigenschaft"
short-title: readOnly
slug: Web/API/HTMLTextAreaElement/readOnly
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ APIRef("HTML DOM") }}

Die **`readOnly`**-Eigenschaft der [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement)-Schnittstelle gibt an, dass der Benutzer den Wert des Steuerelements nicht ändern kann. Im Gegensatz zum [`disabled`](/de/docs/Web/API/HTMLTextAreaElement/disabled)-Attribut verhindert das `readonly`-Attribut nicht, dass der Benutzer das Steuerelement anklickt oder darin eine Auswahl trifft. Es spiegelt das `readonly`-Attribut des {{htmlelement("textarea")}}-Elements wider.

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
