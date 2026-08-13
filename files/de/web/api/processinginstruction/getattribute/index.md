---
title: "ProcessingInstruction: getAttribute() Methode"
short-title: getAttribute()
slug: Web/API/ProcessingInstruction/getAttribute
l10n:
  sourceCommit: b449f4c0a3d1a9cf33ac0c49c685cbf000cc829e
---

{{APIRef("DOM")}}

Die **`getAttribute()`**-Methode der [`ProcessingInstruction`](/de/docs/Web/API/ProcessingInstruction)-Schnittstelle gibt den Wert eines angegebenen Attributs auf der Verarbeitungshinweis zurück.

Wenn das angegebene Attribut nicht existiert, wird der zurückgegebene Wert `null` sein.

## Syntax

```js-nolint
getAttribute(attributeName)
```

### Parameter

- `attributeName`
  - : Der Name des Attributs, dessen Wert Sie abrufen möchten.

### Rückgabewert

Ein String, der den Wert von `attributeName` enthält, wenn das Attribut existiert; ansonsten `null`.

## Beschreibung

### Groß- und Kleinschreibung

Die Argumente der Verarbeitungshinweise sind case-sensitiv.

### Dekodierte Zeichenreferenzen in Attributwerten

HTML {{Glossary("Character_reference", "Zeichenreferenzen")}} in einem Attributsquellcode (zum Beispiel `&lt;`, `&amp;` oder `&#x3C;`) werden vom HTML-Parser dekodiert, wenn das Dokument geparst wird, sodass `getAttribute()` den dekodierten Wert und nicht den Quellwert zurückgibt.

Zum Beispiel:

```js
const pi = document.createProcessingInstruction(
  "start",
  'data-payload="&lt;b&gt;hi&lt;/b&gt;"',
);

pi.getAttribute("data-payload");
// <b>hi</b>
```

## Beispiele

### Grundlegende Nutzung

```js
const pi = document.createProcessingInstruction("start", 'name="placeholder"');

console.log(pi.getAttribute("name"));
// Logs:
// "placeholder"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`ProcessingInstruction.hasAttribute()`](/de/docs/Web/API/ProcessingInstruction/hasAttribute)
- [`ProcessingInstruction.hasAttributes()`](/de/docs/Web/API/ProcessingInstruction/hasAttributes)
- [`ProcessingInstruction.getAttributeNames()`](/de/docs/Web/API/ProcessingInstruction/getAttributeNames)
- [`ProcessingInstruction.setAttribute()`](/de/docs/Web/API/ProcessingInstruction/setAttribute)
- [`ProcessingInstruction.removeAttribute()`](/de/docs/Web/API/ProcessingInstruction/removeAttribute)
- [`ProcessingInstruction.toggleAttribute()`](/de/docs/Web/API/ProcessingInstruction/toggleAttribute)
