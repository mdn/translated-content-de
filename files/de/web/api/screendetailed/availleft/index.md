---
title: "ScreenDetailed: availLeft Eigenschaft"
short-title: availLeft
slug: Web/API/ScreenDetailed/availLeft
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("Window Management API")}}{{seecompattable}}{{SecureContext_Header}}

Die schreibgeschützte Eigenschaft **`availLeft`** des [`ScreenDetailed`](/de/docs/Web/API/ScreenDetailed)-Interfaces ist eine Zahl, die die x-Koordinate (linker Rand) der verfügbaren Bildschirmfläche innerhalb der Anordnung des virtuellen Bildschirms des Betriebssystems, relativ zum [Multi-Screen-Ursprung](/de/docs/Web/API/Window_Management_API/Multi-screen_origin), darstellt.

Diese entspricht der [`ScreenDetailed.left`](/de/docs/Web/API/ScreenDetailed/left)-Eigenschaft, zuzüglich der Breite von OS-UI-Elementen, die links auf dem Bildschirm gezeichnet sind. In diesen Bereichen können keine Fenster platziert werden, daher ist `availLeft` nützlich, um Ihnen die linke Grenze des tatsächlich verfügbaren Bereichs zum Öffnen oder Platzieren von Fenstern zu geben.

> [!NOTE]
> Eine nicht standardmäßige Implementierung der `availLeft`-Eigenschaft ist auf dem `Screen`-Interface in allen Browsern verfügbar. Siehe das [Nicht-standardmäßige Beispiel](#nicht-standardmäßiges_beispiel) unten für Details zur Verwendung, und sehen Sie die [`Screen`](/de/docs/Web/API/Screen#browser_compatibility)-Referenzseite für Informationen zur Browser-Unterstützung in Bezug auf die nicht standardmäßige Implementierung.

## Wert

Eine Zahl.

## Beispiele

### Window Management API Beispiel

```js
// Available in browsers that support the Window Management API
const screenDetails = await window.getScreenDetails();

// Return the availLeft value of the first screen
const screen1AvailLeft = screenDetails.screens[0].availLeft;
```

### Nicht-standardmäßiges Beispiel

```js
// Available in all browsers
// Return the availLeft value of the current screen
const screenAvailLeft = window.screen.availLeft;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Window Management API](/de/docs/Web/API/Window_Management_API)
