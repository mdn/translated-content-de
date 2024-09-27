---
title: "Screen: orientation-Eigenschaft"
short-title: orientation
slug: Web/API/Screen/orientation
l10n:
  sourceCommit: f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{APIRef("Screen Orientation API")}}

Die **`orientation`**-Eigenschaft des [`Screen`](/de/docs/Web/API/Screen)-Interfaces ist eine schreibgeschützte Eigenschaft und gibt die aktuelle Ausrichtung des Bildschirms zurück.

## Wert

Eine Instanz von [`ScreenOrientation`](/de/docs/Web/API/ScreenOrientation), die die Ausrichtung des Bildschirms darstellt.

Beachten Sie, dass ältere, mit Präfix versehene Versionen einen String zurückgaben, der dem [`ScreenOrientation.type`](/de/docs/Web/API/ScreenOrientation/type) äquivalent ist.

## Beispiele

```js
switch (screen.orientation.type) {
  case "landscape-primary":
    console.log("That looks good.");
    break;
  case "landscape-secondary":
    console.log("Mmmh… the screen is upside down!");
    break;
  case "portrait-secondary":
  case "portrait-primary":
    console.log("Mmmh… you should rotate your device to landscape");
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
- [Verwaltung der Bildschirmausrichtung](/de/docs/Web/API/CSS_Object_Model/Managing_screen_orientation)
