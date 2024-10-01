---
title: "CSSStyleDeclaration: removeProperty() Methode"
short-title: removeProperty()
slug: Web/API/CSSStyleDeclaration/removeProperty
l10n:
  sourceCommit: 20c51db7895b1b6f41d4fa90e71830f4b6678eea
---

{{ APIRef("CSSOM") }}

Die Schnittstelle der Methode **`CSSStyleDeclaration.removeProperty()`** entfernt eine Eigenschaft aus einem CSS-Stildeklarationsobjekt.

## Syntax

```js-nolint
removeProperty(property)
```

### Parameter

- `property`
  - : Ein String, der den Namen der zu entfernenden Eigenschaft repräsentiert. Mehrwortige Eigenschaftsnamen sind mit Bindestrichen verbunden ({{Glossary("kebab_case", "kebab-case")}}) und nicht im {{Glossary("camel_case", "camel-cased")}}.

### Rückgabewert

Ein String, der dem Wert der CSS-Eigenschaft entspricht, bevor sie entfernt wurde.

### Ausnahmen

- `NoModificationAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Eigenschaft oder der Deklarationsblock schreibgeschützt ist.

## Beispiele

Der folgende JavaScript-Code entfernt die CSS-Eigenschaft `background-color` aus einer Selektorregel:

```js
const declaration = document.styleSheets[0].rules[0].style;
const oldValue = declaration.removeProperty("background-color");
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
