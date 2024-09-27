---
title: "ScreenDetailed: availTop-Eigenschaft"
short-title: availTop
slug: Web/API/ScreenDetailed/availTop
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("Window Management API")}}{{seecompattable}}{{SecureContext_Header}}

Die **`availTop`** schreibgeschützte Eigenschaft der [`ScreenDetailed`](/de/docs/Web/API/ScreenDetailed)-Schnittstelle ist eine Zahl, die die y-Koordinate (obere Kante) des verfügbaren Bildschirmbereichs innerhalb der virtuellen Bildschirmkonfiguration des Betriebssystems darstellt, relativ zum [Multi-Screen-Ursprung](/de/docs/Web/API/Window_Management_API/Multi-screen_origin).

Dies entspricht der [`ScreenDetailed.top`](/de/docs/Web/API/ScreenDetailed/top)-Eigenschaft zuzüglich der Höhe eines beliebigen am oberen Bildschirmrand gezeichneten Betriebssystem-UI-Elementes. Fenster können in diesen Bereichen nicht platziert werden, daher ist `availTop` nützlich, um Ihnen die obere Grenze des tatsächlich verfügbaren Bereichs zum Öffnen oder Platzieren von Fenstern zu geben.

> [!NOTE]
> Eine nicht standardisierte Implementierung der `availTop`-Eigenschaft ist in allen Browsern auf der `Screen`-Schnittstelle verfügbar. Siehe das [Beispiel für Nicht-Standard](#nicht-standard_beispiel) unten für Nutzungshinweise und die [`Screen`](/de/docs/Web/API/Screen#browser_compatibility) Referenzseite für Informationen zur Browser-Unterstützung der nicht standardisierten Implementierung.

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

### Nicht-standard Beispiel

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
