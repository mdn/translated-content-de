---
title: "PointerEvent: width Eigenschaft"
short-title: width
slug: Web/API/PointerEvent/width
l10n:
  sourceCommit: 2ccbd062264d0a2a34f185a3386cb272f42c50f5
---

{{ APIRef("Pointer Events") }}

Die **`width`** schreibgeschützte Eigenschaft des [`PointerEvent`](/de/docs/Web/API/PointerEvent)-Interfaces repräsentiert die Breite der Kontaktfläche des Zeigers entlang der x-Achse, gemessen in CSS-Pixeln. Abhängig von der Quelle des Zeigereingabegeräts (wie z. B. einem Finger) kann für einen gegebenen Zeiger bei jedem Ereignis ein anderer Wert erzeugt werden.

Wenn die Eingabehardware die Geometrie der Kontaktfläche nicht an den Browser melden kann, beträgt die Standardbreite `1`.

## Wert

Die Breite der Kontaktfläche des Ereignisses (in CSS-Pixeln).

## Beispiele

Dieses Beispiel veranschaulicht die Verwendung der `width`- und [`height`](/de/docs/Web/API/PointerEvent/height)-Eigenschaften des [`PointerEvent`](/de/docs/Web/API/PointerEvent)-Interfaces zur Berechnung der Kontaktfläche.

```js
target.addEventListener("pointerdown", (ev) => {
  // Calculate the contact area
  const area = ev.width * ev.height;
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
