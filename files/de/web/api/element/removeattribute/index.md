---
title: "Element: removeAttribute()-Methode"
short-title: removeAttribute()
slug: Web/API/Element/removeAttribute
l10n:
  sourceCommit: 990ab6637bb4d44f059597262cbf3c51abae79eb
---

{{ APIRef("DOM") }}

Die {{domxref("Element")}}-Methode **`removeAttribute()`** entfernt das Attribut mit dem angegebenen Namen aus dem Element.

## Syntax

```js-nolint
removeAttribute(attrName)
```

### Parameter

- `attrName`
  - : Ein String, der den Namen des Attributs angibt, das vom Element entfernt werden soll. Wenn das angegebene Attribut nicht existiert, gibt `removeAttribute()` ohne Fehler zurück.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Anwendungshinweise

Sie sollten `removeAttribute()` anstelle des direktes Setzens des Attributwerts auf `null` oder durch Nutzung von {{domxref("Element.setAttribute", "setAttribute()")}} verwenden. Viele Attribute verhalten sich nicht wie erwartet, wenn Sie sie auf `null` setzen.

## Beispiele

```js
// Gegeben: <div id="div1" disabled width="200px">
document.getElementById("div1").removeAttribute("disabled");
// Jetzt: <div id="div1" width="200px">
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Element.hasAttribute()")}}
- {{domxref("Element.getAttribute()")}}
- {{domxref("Element.setAttribute()")}}
- {{domxref("Element.toggleAttribute()")}}
