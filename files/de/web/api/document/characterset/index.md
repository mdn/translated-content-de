---
title: "Document: characterSet-Eigenschaft"
short-title: characterSet
slug: Web/API/Document/characterSet
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{ ApiRef("DOM") }}

Die **`Document.characterSet`**-Eigenschaft (nur lesbar) gibt die [Zeichenkodierung](/de/docs/Glossary/Character_encoding) des Dokuments zurück, mit der es derzeit gerendert wird.

> [!NOTE]
> Ein "Zeichensatz" und eine "Zeichenkodierung" sind verwandt, aber unterschiedlich. Trotz des Namens dieser Eigenschaft gibt sie die _Kodierung_ zurück.

## Wert

Ein String.

## Beispiele

```html
<button onclick="console.log(document.characterSet);">
  Log character encoding
</button>
<!-- displays document's character encoding in the dev console, such as "ISO-8859-1" or "UTF-8" -->
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
