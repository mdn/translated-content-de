---
title: "ProcessingInstruction: removeAttribute()-Methode"
short-title: removeAttribute()
slug: Web/API/ProcessingInstruction/removeAttribute
l10n:
  sourceCommit: e316526e520d8163e9151dca8973eb777b5285e0
---

{{ APIRef("DOM") }}{{SeeCompatTable}}

Die **`removeAttribute()`**-Methode des [`ProcessingInstruction`](/de/docs/Web/API/ProcessingInstruction) entfernt das Attribut mit dem angegebenen Namen aus der Verarbeitungsanweisung.

## Syntax

```js-nolint
removeAttribute(attrName)
```

### Parameter

- `attrName`
  - : Ein String, der den Namen des Attributs angibt, das aus der Verarbeitungsanweisung entfernt werden soll. Wenn das angegebene Attribut nicht existiert, gibt `removeAttribute()` zurück, ohne einen Fehler zu erzeugen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Verwendungshinweise

Sie sollten `removeAttribute()` verwenden, anstatt den Attributwert auf `null` zu setzen (entweder direkt oder durch Verwendung von [`setAttribute()`](/de/docs/Web/API/ProcessingInstruction/setAttribute)).
Viele Attribute verhalten sich nicht wie erwartet, wenn Sie sie auf `null` setzen.

## Beispiele

### Grundlegende Verwendung

```js
const pi = document.createProcessingInstruction("start", 'name="placeholder"');

pi.removeAttribute("name");
console.log(pi);
// logs:
// <?start?>
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
- [`ProcessingInstruction.toggleAttribute()`](/de/docs/Web/API/ProcessingInstruction/toggleAttribute)
