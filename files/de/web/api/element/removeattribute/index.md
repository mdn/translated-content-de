---
title: "Element: removeAttribute()-Methode"
short-title: removeAttribute()
slug: Web/API/Element/removeAttribute
l10n:
  sourceCommit: 990ab6637bb4d44f059597262cbf3c51abae79eb
---

{{ APIRef("DOM") }}

Die [`Element`](/de/docs/Web/API/Element)-Methode **`removeAttribute()`** entfernt das Attribut mit dem angegebenen Namen aus dem Element.

## Syntax

```js-nolint
removeAttribute(attrName)
```

### Parameter

- `attrName`
  - : Ein Zeichenfolgenwert, der den Namen des zu entfernenden Attributs aus dem Element angibt. Wenn das angegebene Attribut nicht existiert, gibt `removeAttribute()` zurück, ohne einen Fehler zu erzeugen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Anwendungshinweise

Sie sollten `removeAttribute()` verwenden, anstatt den Attributwert entweder direkt oder mit [`setAttribute()`](/de/docs/Web/API/Element/setAttribute) auf `null` zu setzen. Viele Attribute verhalten sich nicht wie erwartet, wenn Sie sie auf `null` setzen.

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
