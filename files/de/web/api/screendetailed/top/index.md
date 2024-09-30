---
title: "ScreenDetailed: top Eigenschaft"
short-title: top
slug: Web/API/ScreenDetailed/top
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("Window Management API")}}{{seecompattable}}{{SecureContext_Header}}

Die **`top`**-Eigenschaft der schreibgeschützten
[`ScreenDetailed`](/de/docs/Web/API/ScreenDetailed)-Schnittstelle ist eine Zahl, die die y-Koordinate (obere Kante) des gesamten Bildschirmbereichs innerhalb der Betriebssystem-Virtualscreen-Anordnung darstellt, relativ zum [Multi-Screen-Ursprung](/de/docs/Web/API/Window_Management_API/Multi-screen_origin).

Dies entspricht der tatsächlichen oberen Kante, ohne Berücksichtigung von UI-Elementen des Betriebssystems, die am oberen Bildschirmrand gezeichnet werden. Fenster können nicht in diesen Bereichen platziert werden; um die obere Koordinate des Bildschirmbereichs zu erhalten, in dem Fenster platziert werden können, verwenden Sie [`ScreenDetailed.availTop`](/de/docs/Web/API/ScreenDetailed/availTop).

> [!NOTE]
> In Firefox ist eine nicht standardisierte Implementierung der `top`-Eigenschaft auf der `Screen`-Schnittstelle verfügbar. Weitere Informationen zur Verwendung finden Sie im [Nicht-standardmäßigen Beispiel](#nicht-standardmäßiges_beispiel) unten und auf der [`Screen`](/de/docs/Web/API/Screen#browser_compatibility)-Referenzseite für Informationen zur Browser-Unterstützung in Bezug auf die nicht standardisierte Implementierung.

## Wert

Eine Zahl.

## Beispiele

### Beispiel für die Window Management API

```js
// Available in browsers that support the Window Management API
const screenDetails = await window.getScreenDetails();

// Return the absolute top value of the first screen
const screen1Top = screenDetails.screens[0].top;
```

### Nicht-standardmäßiges Beispiel

```js
// Available in Firefox
// Return the absolute top value of the current screen
const screenTop = window.screen.top;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Window Management API](/de/docs/Web/API/Window_Management_API)
