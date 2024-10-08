---
title: "EditContext: EditContext()-Konstruktor"
short-title: EditContext()
slug: Web/API/EditContext/EditContext
l10n:
  sourceCommit: c9fe79713a9323e8f1492c3c5b802fc8776a5f6a
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

Der **`EditContext()`**-Konstruktor gibt ein neues [`EditContext`](/de/docs/Web/API/EditContext)-Objekt zurück.

## Syntax

```js-nolint
new EditContext()
new EditContext(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein optionales Objekt mit den folgenden Eigenschaften:
    - `text`
      - : Ein String, um den initialen Text des `EditContext` festzulegen.
    - `selectionStart`
      - : Eine Zahl, um den Anfang der initialen Auswahl des `EditContext` festzulegen.
    - `selectionEnd`
      - : Eine Zahl, um das Ende der initialen Auswahl des `EditContext` festzulegen.

## Beispiele

### Instanziierung eines `EditContext`-Objekts

Das folgende Beispiel erstellt ein neues `EditContext`-Objekt mit dem initialen Text "Hello world!" und der initialen Auswahl, die den gesamten Text abdeckt.

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

- Die [`EditContext`](/de/docs/Web/API/EditContext)-Schnittstelle, zu der es gehört.
