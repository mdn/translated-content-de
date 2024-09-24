---
title: "Screen: orientation-Eigenschaft"
short-title: orientation
slug: Web/API/Screen/orientation
l10n:
  sourceCommit: f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{APIRef("Screen Orientation API")}}

Die schreibgeschützte **`orientation`**-Eigenschaft der {{DOMxRef("Screen")}}-Schnittstelle gibt die aktuelle Ausrichtung des Bildschirms zurück.

## Wert

Eine Instanz von {{DOMxRef("ScreenOrientation")}}, die die Ausrichtung des Bildschirms darstellt.

Beachten Sie, dass ältere, vorgepräfixte Versionen einen String zurückgaben, der äquivalent zu {{DOMxRef("ScreenOrientation.type")}} ist.

## Beispiele

```js
switch (screen.orientation.type) {
  case "landscape-primary":
    console.log("Das sieht gut aus.");
    break;
  case "landscape-secondary":
    console.log("Mmmh… der Bildschirm steht kopfüber!");
    break;
  case "portrait-secondary":
  case "portrait-primary":
    console.log("Mmmh… Sie sollten Ihr Gerät in den Querformatmodus drehen");
    break;
  default:
    console.log("Die Orientation-API wird in diesem Browser nicht unterstützt :(");
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{DOMxRef("ScreenOrientation")}}
- {{DOMxRef("Screen.orientationchange_event", "orientationchange")}}-Ereignis
- [Verwalten der Bildschirmausrichtung](/de/docs/Web/API/CSS_Object_Model/Managing_screen_orientation)
