---
title: "Element: hasAttributeNS() Methode"
short-title: hasAttributeNS()
slug: Web/API/Element/hasAttributeNS
l10n:
  sourceCommit: 20c51db7895b1b6f41d4fa90e71830f4b6678eea
---

{{ APIRef("DOM") }}

Die **`hasAttributeNS()`** Methode des {{domxref("Element")}} Interfaces gibt einen booleschen Wert zurück, der angibt, ob das aktuelle Element das angegebene Attribut mit dem angegebenen Namensraum besitzt.

Wenn Sie mit HTML-Dokumenten arbeiten und das angeforderte Attribut nicht als Teil eines spezifischen Namensraums angeben müssen, verwenden Sie stattdessen die {{domxref("Element.hasAttribute()", "hasAttribute()")}} Methode.

## Syntax

```js-nolint
hasAttributeNS(namespace, localName)
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
// Überprüfen Sie, ob das Attribut existiert, bevor Sie einen Wert setzen
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

- {{domxref("Element.getAttributeNS()")}}
- {{domxref("Element.setAttributeNS()")}}
- {{domxref("Element.removeAttributeNS()")}}
