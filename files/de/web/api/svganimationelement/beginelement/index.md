---
title: "SVGAnimationElement: beginElement() Methode"
short-title: beginElement()
slug: Web/API/SVGAnimationElement/beginElement
l10n:
  sourceCommit: 4028c85f43556109e830604df2d96217f40c66a7
---

{{APIRef("SVG")}}

Die [`SVGAnimationElement`](/de/docs/Web/API/SVGAnimationElement)-Methode `beginElement()` erzeugt eine Startinstanzzeit für die aktuelle Zeit. Die neue Instanzzeit wird zur Liste der Startinstanzzeiten hinzugefügt. Das Verhalten dieser Methode entspricht `beginElementAt(0)`.

## Syntax

```js-nolint
beginElement()
```

### Parameter

Keine.

### Rückgabewert

Keine

## Beispiele

Dieses Beispiel zeigt, wie `beginElement()` verwendet wird, um ein Animationselement zu starten:

```js
const animationElement = document.querySelector("animate");
animationElement.beginElement();
console.log("Animation has started.");
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
