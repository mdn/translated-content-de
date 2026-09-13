---
title: "ProcessingInstruction: toggleAttribute() Methode"
short-title: toggleAttribute()
slug: Web/API/ProcessingInstruction/toggleAttribute
l10n:
  sourceCommit: e316526e520d8163e9151dca8973eb777b5285e0
---

{{APIRef("DOM")}}{{SeeCompatTable}}

Die **`toggleAttribute()`** Methode der [`ProcessingInstruction`](/de/docs/Web/API/ProcessingInstruction) Schnittstelle schaltet ein boolesches Attribut an der angegebenen Verarbeitungsvorschrift um, indem es entfernt wird, wenn es vorhanden ist, und hinzugefügt wird, wenn es nicht vorhanden ist.

## Syntax

```js-nolint
toggleAttribute(name)
toggleAttribute(name, force)
```

### Parameter

- `name`
  - : Ein String, der den Namen des Attributs angibt, das umgeschaltet werden soll.
- `force` {{optional_inline}}
  - : Ein boolescher Wert, der die folgenden Auswirkungen hat:
    - Wenn er überhaupt nicht angegeben wird, wird das Attribut entfernt, wenn es vorhanden ist, und hinzugefügt, wenn es nicht vorhanden ist.
    - Wenn auf `true` gesetzt, wird das Attribut hinzugefügt, wenn es nicht vorhanden ist, aber es wird nicht entfernt, wenn es vorhanden ist.
    - Wenn auf `false` gesetzt, wird das Attribut entfernt, wenn es vorhanden ist, aber es wird nicht hinzugefügt, wenn es nicht vorhanden ist.

### Rückgabewert

`true`, wenn das Attribut nach Abschluss der `toggleAttribute()` Operation vorhanden ist, und `false`, wenn nicht.

### Ausnahmen

- `InvalidCharacterError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Der angegebene Attributname `name` enthält ein oder mehrere Zeichen, die in Attributnamen ungültig sind. Der `name` muss mindestens ein Zeichen enthalten und darf keine ASCII-Leerzeichen, `NULL`, `/`, `=` oder `>` (U+0000, U+002F, U+003D oder U+003E) enthalten.

## Beispiele

### Grundlegende Nutzung

```js
const pi = document.createProcessingInstruction("start", 'name=""');

pi.toggleAttribute("name");
pi.toggleAttribute("surname");
console.log(pi);
// logs:
// <?start surname=""?>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`ProcessingInstruction.hasAttribute()`](/de/docs/Web/API/ProcessingInstruction/hasAttribute)
- [`ProcessingInstruction.hasAttributes()`](/de/docs/Web/API/ProcessingInstruction/hasAttributes)
- [`ProcessingInstruction.getAttribute()`](/de/docs/Web/API/ProcessingInstruction/getAttribute)
- [`ProcessingInstruction.getAttributeNames()`](/de/docs/Web/API/ProcessingInstruction/getAttributeNames)
- [`ProcessingInstruction.setAttribute()`](/de/docs/Web/API/ProcessingInstruction/setAttribute)
- [`ProcessingInstruction.removeAttribute()`](/de/docs/Web/API/ProcessingInstruction/removeAttribute)
