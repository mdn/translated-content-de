---
title: "CSS: paintWorklet statische Eigenschaft"
short-title: paintWorklet
slug: Web/API/CSS/paintWorklet_static
l10n:
  sourceCommit: 3b39e41fb9393a13b16aaf58ba25174a62205041
---

{{APIRef("CSSOM")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die statische, schreibgeschützte **`paintWorklet`**-Eigenschaft der [`CSS`](/de/docs/Web/API/CSS)-Schnittstelle bietet Zugriff auf den Paint-[Worklet](/de/docs/Web/API/Worklet), der auf programmatische Weise ein Bild erzeugt, wo eine CSS-Eigenschaft eine Datei erwartet.

## Wert

Das zugehörige [`Worklet`](/de/docs/Web/API/Worklet)-Objekt.

## Beispiele

Das folgende Beispiel zeigt, wie ein Paint-[Worklet](/de/docs/Web/API/Worklet) aus seiner js-Datei geladen wird und durch Feature-Erkennung erfolgt.

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
- [Houdini-APIs](/de/docs/Web/API/Houdini_APIs)
