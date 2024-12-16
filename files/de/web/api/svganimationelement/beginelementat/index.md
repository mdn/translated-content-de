---
title: "SVGAnimationElement: beginElementAt()-Methode"
short-title: beginElementAt()
slug: Web/API/SVGAnimationElement/beginElementAt
l10n:
  sourceCommit: 4028c85f43556109e830604df2d96217f40c66a7
---

{{APIRef("SVG")}}

Die Methode `beginElementAt()` des [`SVGAnimationElement`](/de/docs/Web/API/SVGAnimationElement) erzeugt eine Anfangsinstanzzeit für die aktuelle Zeit plus dem angegebenen Offset. Die neue Instanzzeit wird zur Liste der Anfangsinstanzzeiten hinzugefügt.

## Syntax

```js-nolint
beginElementAt(offset)
```

### Parameter

- `offset`
  - : Ein Gleitkommawert, der den Offset in Sekunden von der aktuellen Dokumentzeit darstellt, zu dem das Element beginnen soll.

### Rückgabewert

Keiner

## Beispiele

Dieses Beispiel zeigt, wie `beginElementAt()` verwendet wird, um ein Animations-Element nach einer Verzögerung von 2 Sekunden zu starten:

```js
const animationElement = document.querySelector("animate");
animationElement.beginElementAt(2);
console.log("Animation will start after a 2-second delay.");
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
