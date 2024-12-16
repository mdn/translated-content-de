---
title: "SVGAnimationElement: endElementAt()-Methode"
short-title: endElementAt()
slug: Web/API/SVGAnimationElement/endElementAt
l10n:
  sourceCommit: 4028c85f43556109e830604df2d96217f40c66a7
---

{{APIRef("SVG")}}

Die Methode `endElementAt()` des [`SVGAnimationElement`](/de/docs/Web/API/SVGAnimationElement) erstellt einen Endzeitpunkt für die aktuelle Zeit plus den angegebenen Offset. Die neue Instanzzeit wird der Liste der Endinstanzzeiten hinzugefügt.

## Syntax

```js-nolint
endElementAt(offset)
```

### Parameter

- `offset`
  - : Ein Float, der den Offset von der aktuellen Dokumentzeit in Sekunden darstellt, zu dem das Element beendet werden soll.

### Rückgabewert

Keiner

## Beispiele

Dieses Beispiel zeigt, wie `endElementAt()` verwendet wird, um ein Animationselement nach einer Verzögerung von 2 Sekunden zu beenden:

```js
const animationElement = document.querySelector("animate");
animationElement.endElementAt(2);
console.log("Animation will end after a 2-second delay.");
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
