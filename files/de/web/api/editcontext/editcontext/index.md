---
title: "EditContext: EditContext() Konstruktor"
short-title: EditContext()
slug: Web/API/EditContext/EditContext
l10n:
  sourceCommit: c9fe79713a9323e8f1492c3c5b802fc8776a5f6a
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

Der **`EditContext()`** Konstruktor gibt ein neues {{DOMxRef("EditContext")}}-Objekt zurück.

## Syntax

```js-nolint
new EditContext()
new EditContext(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein optionales Objekt mit den folgenden Eigenschaften:
    - `text`
      - : Ein String zur Festlegung des anfänglichen Textes des `EditContext`.
    - `selectionStart`
      - : Eine Zahl, um den anfänglichen Beginn der Auswahl des `EditContext` festzulegen.
    - `selectionEnd`
      - : Eine Zahl, um das anfängliche Ende der Auswahl des `EditContext` festzulegen.

## Beispiele

### Initialisierung eines `EditContext`-Objekts

Im folgenden Beispiel wird ein neues `EditContext`-Objekt mit dem anfänglichen Text "Hello world!" und der anfänglichen Auswahl, die den gesamten Text umfasst, erstellt.

```html
<div id="editor"></div>
```

```js
const initialText = "Hello world!";

const editContext = new EditContext({
  text: initialText,
  selectionStart: 0,
  selectionEnd: initialText.length,
});

const editorElement = document.getElementById("editor");
editorElement.editContext = editContext;

console.log(
  `EditContext object ready. Text: ${editContext.text}. Selection: ${editContext.selectionStart} - ${editContext.selectionEnd}.`,
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die {{DOMxRef("EditContext")}}-Schnittstelle, zu der es gehört.
