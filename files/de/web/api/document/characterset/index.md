---
title: "Document: characterSet-Eigenschaft"
short-title: characterSet
slug: Web/API/Document/characterSet
l10n:
  sourceCommit: 06bb5f22d50ff3579a12aebf7e8c9f02cfa2468b
---

{{ ApiRef("DOM") }}

Die **`Document.characterSet`**-Eigenschaft (nur lesbar) gibt die {{Glossary("Character_encoding", "Zeichenkodierung")}} des Dokuments zurück, mit der es aktuell gerendert wird.

> [!NOTE]
> Ein "Zeichensatz" und eine "Zeichenkodierung" sind verwandt, aber unterschiedlich. Trotz des Namens dieser Eigenschaft gibt sie die _Kodierung_ zurück.

## Wert

Ein String.

## Beispiele

```js
console.log(document.characterSet);
// document's character encoding, such as "ISO-8859-1" or "UTF-8"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
