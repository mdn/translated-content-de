---
title: "Element: removeAttribute()-Methode"
short-title: removeAttribute()
slug: Web/API/Element/removeAttribute
l10n:
  sourceCommit: 990ab6637bb4d44f059597262cbf3c51abae79eb
---

{{ APIRef("DOM") }}

Die Methode **`removeAttribute()`** des [`Element`](/de/docs/Web/API/Element) entfernt das Attribut mit dem angegebenen Namen vom Element.

## Syntax

```js-nolint
removeAttribute(attrName)
```

### Parameter

- `attrName`
  - : Ein String, der den Namen des Attributs angibt, das vom Element entfernt werden soll. Wenn das angegebene Attribut nicht existiert, kehrt `removeAttribute()` zurück, ohne einen Fehler zu erzeugen.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

## Hinweise zur Verwendung

Sie sollten `removeAttribute()` verwenden, anstatt den Attributwert entweder direkt oder mit [`setAttribute()`](/de/docs/Web/API/Element/setAttribute) auf `null` zu setzen. Viele Attribute werden nicht wie erwartet funktionieren, wenn Sie sie auf `null` setzen.

## Beispiele

```js
// Given: <div id="div1" disabled width="200px">
document.getElementById("div1").removeAttribute("disabled");
// Now: <div id="div1" width="200px">
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element.hasAttribute()`](/de/docs/Web/API/Element/hasAttribute)
- [`Element.getAttribute()`](/de/docs/Web/API/Element/getAttribute)
- [`Element.setAttribute()`](/de/docs/Web/API/Element/setAttribute)
- [`Element.toggleAttribute()`](/de/docs/Web/API/Element/toggleAttribute)
