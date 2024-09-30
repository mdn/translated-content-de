---
title: "Element: hasAttributeNS() Methode"
short-title: hasAttributeNS()
slug: Web/API/Element/hasAttributeNS
l10n:
  sourceCommit: 20c51db7895b1b6f41d4fa90e71830f4b6678eea
---

{{ APIRef("DOM") }}

Die **`hasAttributeNS()`** Methode des [`Element`](/de/docs/Web/API/Element) Interfaces gibt einen booleschen Wert zurück, der angibt, ob das aktuelle Element das angegebene Attribut mit dem angegebenen Namensraum besitzt.

Wenn Sie mit HTML-Dokumenten arbeiten und das angeforderte Attribut nicht als Teil eines bestimmten Namensraums angeben müssen, verwenden Sie stattdessen die [`hasAttribute()`](/de/docs/Web/API/Element/hasAttribute) Methode.

## Syntax

```js-nolint
hasAttributeNS(namespace,localName)
```

### Parameter

- `namespace`
  - : Ein String, der den Namensraum des Attributs angibt.
- `localName`
  - : Der Name des Attributs.

### Rückgabewert

Ein Boolescher Wert.

## Beispiele

```js
// Check that the attribute exists before you set a value
const d = document.getElementById("div1");
if (
  d.hasAttributeNS("http://www.mozilla.org/ns/specialspace/", "special-align")
) {
  d.setAttribute("align", "center");
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element.getAttributeNS()`](/de/docs/Web/API/Element/getAttributeNS)
- [`Element.setAttributeNS()`](/de/docs/Web/API/Element/setAttributeNS)
- [`Element.removeAttributeNS()`](/de/docs/Web/API/Element/removeAttributeNS)
