---
title: "ScreenDetailed: availTop-Eigenschaft"
short-title: availTop
slug: Web/API/ScreenDetailed/availTop
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("Window Management API")}}{{seecompattable}}{{SecureContext_Header}}

Die **`availTop`** schreibgeschützte Eigenschaft des [`ScreenDetailed`](/de/docs/Web/API/ScreenDetailed)-Interfaces ist eine Zahl, die die y-Koordinate (obere Kante) des verfügbaren Bildschirmbereichs innerhalb des virtuellen Bildschirmarrangements des Betriebssystems darstellt, relativ zum [Multi-Screen-Ursprung](/de/docs/Web/API/Window_Management_API/Multi-screen_origin).

Diese entspricht der [`ScreenDetailed.top`](/de/docs/Web/API/ScreenDetailed/top)-Eigenschaft, zuzüglich der Höhe eines beliebigen Betriebssystem-UI-Elements, das oben auf dem Bildschirm gezeichnet wird. Fenster können nicht in diesen Bereichen platziert werden, daher ist `availTop` nützlich, um Ihnen die obere Grenze des tatsächlichen Bereichs zu geben, der zum Öffnen oder Platzieren von Fenstern verfügbar ist.

> [!NOTE]
> Eine nicht standardmäßige Implementierung der `availTop`-Eigenschaft ist in allen Browsern im `Screen`-Interface verfügbar. Siehe das [Nicht-standardmäßige Beispiel](#nicht-standardmäßiges_beispiel) unten für Anwendungsdetails und die [`Screen`](/de/docs/Web/API/Screen#browser_compatibility)-Referenzseite für Informationen zur Browserunterstützung in Bezug auf die nicht standardmäßige Implementierung.

## Wert

Eine Zahl.

## Beispiele

### Window Management API Beispiel

```js
// Available in browsers that support the Window Management API
const screenDetails = await window.getScreenDetails();

// Return the availTop value of the first screen
const screen1AvailTop = screenDetails.screens[0].availTop;
```

### Nicht-standardmäßiges Beispiel

```js
// Available in all browsers
// Return the availTop value of the current screen
const screenAvailTop = window.screen.availTop;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Window Management API](/de/docs/Web/API/Window_Management_API)
