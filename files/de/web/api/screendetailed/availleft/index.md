---
title: "ScreenDetailed: availLeft-Eigenschaft"
short-title: availLeft
slug: Web/API/ScreenDetailed/availLeft
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("Window Management API")}}{{seecompattable}}{{SecureContext_Header}}

Die schreibgeschützte Eigenschaft **`availLeft`** der Schnittstelle [`ScreenDetailed`](/de/docs/Web/API/ScreenDetailed) ist eine Zahl, die die x-Koordinate (linke Kante) des verfügbaren Bildschirmbereichs innerhalb der virtuellen Bildschirm-Anordnung des Betriebssystems darstellt, relativ zum [Multi-Screen-Ursprung](/de/docs/Web/API/Window_Management_API/Multi-screen_origin).

Dies ist gleich der Eigenschaft [`ScreenDetailed.left`](/de/docs/Web/API/ScreenDetailed/left) zuzüglich der Breite von jeglichen Betriebssystem-UI-Elementen, die auf der linken Seite des Bildschirms gezeichnet werden. In diesen Bereichen können keine Fenster platziert werden, daher ist `availLeft` nützlich, um Ihnen die linke Grenze des tatsächlichen Bereichs zu geben, der zum Öffnen oder Platzieren von Fenstern verfügbar ist.

> [!NOTE]
> Eine nicht standardisierte Implementierung der `availLeft`-Eigenschaft ist auf der `Screen`-Schnittstelle in allen Browsern verfügbar. Sehen Sie sich das [Nicht-standardisierte Beispiel](#nicht-standardisiertes_beispiel) unten für Anwendungsdetails an und die Referenzseite [`Screen`](/de/docs/Web/API/Screen#browser_compatibility) für Informationen zur Browserunterstützung bezüglich der nicht standardisierten Implementierung.

## Wert

Eine Zahl.

## Beispiele

### Beispiel für die Window Management API

```js
// Available in browsers that support the Window Management API
const screenDetails = await window.getScreenDetails();

// Return the availLeft value of the first screen
const screen1AvailLeft = screenDetails.screens[0].availLeft;
```

### Nicht-standardisiertes Beispiel

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
