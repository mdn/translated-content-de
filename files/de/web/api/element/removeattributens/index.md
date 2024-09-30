---
title: "Element: removeAttributeNS() Methode"
short-title: removeAttributeNS()
slug: Web/API/Element/removeAttributeNS
l10n:
  sourceCommit: 20c51db7895b1b6f41d4fa90e71830f4b6678eea
---

{{ APIRef("DOM") }}

Die **`removeAttributeNS()`** Methode des [`Element`](/de/docs/Web/API/Element)-Interfaces entfernt das angegebene Attribut mit dem angegebenen Namensraum von einem Element.

Wenn Sie mit HTML arbeiten und das angeforderte Attribut nicht als Teil eines spezifischen Namensraums angeben müssen, verwenden Sie stattdessen die [`removeAttribute()`](/de/docs/Web/API/Element/removeAttribute) Methode.

## Syntax

```js-nolint
removeAttributeNS(namespace, attrName)
```

### Parameter

- `namespace`
  - : Ein String, der den Namensraum des Attributs enthält.
- `attrName`
  - : Ein String, der den Namen des Attributs enthält, das aus dem aktuellen Knoten entfernt werden soll.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

## Beispiele

```js
// Given:
//   <div id="div1" xmlns:special="http://www.mozilla.org/ns/specialspace"
//     special:specialAlign="utterleft" width="200px" />
d = document.getElementById("div1");
d.removeAttributeNS("http://www.mozilla.org/ns/specialspace", "specialAlign");
// Now: <div id="div1" width="200px" />
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element.hasAttributeNS()`](/de/docs/Web/API/Element/hasAttributeNS)
- [`Element.getAttributeNS()`](/de/docs/Web/API/Element/getAttributeNS)
- [`Element.setAttributeNS()`](/de/docs/Web/API/Element/setAttributeNS)
