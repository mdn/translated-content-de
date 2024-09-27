---
title: "ScreenDetailed: top Eigenschaft"
short-title: top
slug: Web/API/ScreenDetailed/top
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("Window Management API")}}{{seecompattable}}{{SecureContext_Header}}

Die **`top`**-Eigenschaft des schreibgeschützten
[`ScreenDetailed`](/de/docs/Web/API/ScreenDetailed) Interfaces ist eine Zahl, die die y-Koordinate (obere Kante) des gesamten Bildschirmbereichs innerhalb der Anordnung des virtuellen Bildschirmsystems des Betriebssystems relativ zum [Multi-Screen-Ursprung](/de/docs/Web/API/Window_Management_API/Multi-screen_origin) darstellt.

Dieser Wert entspricht der tatsächlichen oberen Kante und ignoriert dabei jegliche vom Betriebssystem gezeichnete UI-Elemente am oberen Rand des Bildschirms. Fenster können in diesen Bereichen nicht platziert werden; um die obere Koordinate des Bildschirmbereichs zu erhalten, in dem Fenster platziert werden können, verwenden Sie [`ScreenDetailed.availTop`](/de/docs/Web/API/ScreenDetailed/availTop).

> [!NOTE]
> In Firefox ist eine nicht standardmäßige Implementierung der `top`-Eigenschaft im `Screen` Interface verfügbar. Siehe das [nicht standardmäßige Beispiel](#nicht_standardmäßiges_beispiel) unten für Details zur Verwendung und die [`Screen`](/de/docs/Web/API/Screen#browser_compatibility) Referenzseite für Informationen zur Browserunterstützung in Bezug auf die nicht standardmäßige Implementierung.

## Wert

Eine Zahl.

## Beispiele

### Beispiel des Window Management API

```js
// Available in browsers that support the Window Management API
const screenDetails = await window.getScreenDetails();

// Return the absolute top value of the first screen
const screen1Top = screenDetails.screens[0].top;
```

### Nicht standardmäßiges Beispiel

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
