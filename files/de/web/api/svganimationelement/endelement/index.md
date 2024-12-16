---
title: "SVGAnimationElement: endElement()-Methode"
short-title: endElement()
slug: Web/API/SVGAnimationElement/endElement
l10n:
  sourceCommit: 4028c85f43556109e830604df2d96217f40c66a7
---

{{APIRef("SVG")}}

Die Methode `endElement()` des [`SVGAnimationElement`](/de/docs/Web/API/SVGAnimationElement) erstellt eine Endinstanzzeit für die aktuelle Zeit. Die neue Instanzzeit wird der Liste der Endinstanzzeiten hinzugefügt. Das Verhalten dieser Methode entspricht `endElementAt(0)`.

## Syntax

```js-nolint
endElement()
```

### Parameter

Keine.

### Rückgabewert

Keine

## Beispiele

Dieses Beispiel zeigt, wie `endElement()` verwendet wird, um ein Animationselement zu beenden:

```js
const animationElement = document.querySelector("animate");
animationElement.endElement();
console.log("Animation has ended.");
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
