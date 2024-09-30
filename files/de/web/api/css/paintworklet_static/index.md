---
title: "CSS: paintWorklet statische Eigenschaft"
short-title: paintWorklet
slug: Web/API/CSS/paintWorklet_static
l10n:
  sourceCommit: 3b39e41fb9393a13b16aaf58ba25174a62205041
---

{{APIRef("CSSOM")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die statische, schreibgeschützte **`paintWorklet`**-Eigenschaft des [`CSS`](/de/docs/Web/API/CSS)-Interfaces bietet Zugriff auf das Paint-[worklet](/de/docs/Web/API/Worklet), das programmgesteuert ein Bild erzeugt, wenn eine CSS-Eigenschaft eine Datei erwartet.

## Wert

Das zugeordnete [`Worklet`](/de/docs/Web/API/Worklet)-Objekt.

## Beispiele

Das folgende Beispiel zeigt das Laden eines Paint-[worklet](/de/docs/Web/API/Worklet) aus seiner js-Datei und tut dies durch Feature-Erkennung.

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
