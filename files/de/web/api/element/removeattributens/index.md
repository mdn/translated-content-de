---
title: "Element: removeAttributeNS() Methode"
short-title: removeAttributeNS()
slug: Web/API/Element/removeAttributeNS
l10n:
  sourceCommit: 20c51db7895b1b6f41d4fa90e71830f4b6678eea
---

{{ APIRef("DOM") }}

Die **`removeAttributeNS()`** Methode der
{{domxref("Element")}} Schnittstelle entfernt das angegebene Attribut mit dem angegebenen Namespace von einem Element.

Wenn Sie mit HTML arbeiten und das angeforderte Attribut nicht als Teil eines bestimmten Namespace spezifizieren müssen, verwenden Sie stattdessen die {{domxref("Element.removeAttribute()", "removeAttribute()")}} Methode.

## Syntax

```js-nolint
removeAttributeNS(namespace, attrName)
```

### Parameter

- `namespace`
  - : Ein String, der den Namespace des Attributs enthält.
- `attrName`
  - : Ein String, der den Namen des Attributs angibt, das aus dem
    aktuellen Knoten entfernt werden soll.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
// Gegeben:
//   <div id="div1" xmlns:special="http://www.mozilla.org/ns/specialspace"
//     special:specialAlign="utterleft" width="200px" />
d = document.getElementById("div1");
d.removeAttributeNS("http://www.mozilla.org/ns/specialspace", "specialAlign");
// Jetzt: <div id="div1" width="200px" />
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Element.hasAttributeNS()")}}
- {{domxref("Element.getAttributeNS()")}}
- {{domxref("Element.setAttributeNS()")}}
