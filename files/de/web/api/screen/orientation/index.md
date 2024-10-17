---
title: "Screen: orientation-Eigenschaft"
short-title: orientation
slug: Web/API/Screen/orientation
l10n:
  sourceCommit: 00f46adb5616d826821d63b11eac285faf1cf4a5
---

{{APIRef("Screen Orientation API")}}

Die **`orientation`**-Eigenschaft, eine schreibgeschützte Eigenschaft der [`Screen`](/de/docs/Web/API/Screen)-Schnittstelle, gibt die aktuelle Ausrichtung des Bildschirms zurück.

## Wert

Eine Instanz von [`ScreenOrientation`](/de/docs/Web/API/ScreenOrientation), die die Ausrichtung des Bildschirms darstellt.

Beachten Sie, dass ältere, mit Präfix versehene Versionen einen String zurückgaben, der dem [`ScreenOrientation.type`](/de/docs/Web/API/ScreenOrientation/type) entspricht.

## Beispiele

```js
switch (screen.orientation.type) {
  case "landscape-primary":
    console.log("That looks good.");
    break;
  case "landscape-secondary":
    console.log("Mmm… the screen is upside down!");
    break;
  case "portrait-secondary":
  case "portrait-primary":
    console.log("Mmm… you should rotate your device to landscape");
    break;
  default:
    console.log("The orientation API isn't supported in this browser :(");
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`ScreenOrientation`](/de/docs/Web/API/ScreenOrientation)
- [`orientationchange`](/de/docs/Web/API/Screen/orientationchange_event) Ereignis
- [Verwalten der Bildschirmausrichtung](/de/docs/Web/API/CSS_Object_Model/Managing_screen_orientation)
