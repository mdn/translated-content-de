---
title: "CSS: paintWorklet statische Eigenschaft"
short-title: paintWorklet
slug: Web/API/CSS/paintWorklet_static
l10n:
  sourceCommit: 3b39e41fb9393a13b16aaf58ba25174a62205041
---

{{APIRef("CSSOM")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die statische, schreibgeschützte **`paintWorklet`**-Eigenschaft der {{DOMxRef("CSS")}} Schnittstelle bietet Zugriff auf das Paint-[Worklet](/de/docs/Web/API/Worklet), das programmgesteuert ein Bild erzeugt, an dem eine CSS-Eigenschaft eine Datei erwartet.

## Wert

Das zugehörige {{DOMxRef('Worklet')}}-Objekt.

## Beispiele

Das folgende Beispiel zeigt, wie ein Paint-[Worklet](/de/docs/Web/API/Worklet) aus seiner js-Datei geladen wird, und nutzt dazu Feature-Erkennung.

```js
if ("paintWorklet" in CSS) {
  CSS.paintWorklet.addModule("checkerboard.js");
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Painting API](/de/docs/Web/API/CSS_Painting_API)
- [Houdini APIs](/de/docs/Web/API/Houdini_APIs)
