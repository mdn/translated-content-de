---
title: "ScreenDetailed: left-Eigenschaft"
short-title: left
slug: Web/API/ScreenDetailed/left
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("Window Management API")}}{{seecompattable}}{{SecureContext_Header}}

Die **`left`**-Eigenschaft der [`ScreenDetailed`](/de/docs/Web/API/ScreenDetailed)-Schnittstelle ist eine schreibgeschützte Zahl, die die x-Koordinate (linker Rand) des gesamten Bildschirmbereichs innerhalb der Anordnung des virtuellen Bildschirms des Betriebssystems darstellt, relativ zum [Ursprung des Multi-Screen](/de/docs/Web/API/Window_Management_API/Multi-screen_origin).

Dies entspricht dem tatsächlichen linken Rand, wobei alle vom Betriebssystem gezeichneten UI-Elemente am linken Bildschirmrand ignoriert werden. Fenster können in diesen Bereichen nicht platziert werden; um die linke Koordinate des Bildschirmbereichs zu erhalten, in dem Fenster platziert werden können, verwenden Sie [`ScreenDetailed.availLeft`](/de/docs/Web/API/ScreenDetailed/availLeft).

> [!NOTE]
> In Firefox ist eine nicht standardisierte Implementierung der `left`-Eigenschaft in der `Screen`-Schnittstelle verfügbar. Siehe das [nicht standardisierte Beispiel](#nicht_standardisiertes_beispiel) unten für Details zur Nutzung und die [`Screen`](/de/docs/Web/API/Screen#browser_compatibility)-Referenzseite für Browserunterstützungsinformationen zur nicht standardisierten Implementierung.

## Wert

Eine Zahl.

## Beispiele

### Window Management API Beispiel

```js
// Available in browsers that support the Window Management API
const screenDetails = await window.getScreenDetails();

// Return the absolute left value of the first screen
const screen1Left = screenDetails.screens[0].left;
```

### Nicht standardisiertes Beispiel

```js
// Available in Firefox
// Return the absolute left value of the current screen
const screenLeft = window.screen.left;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Window Management API](/de/docs/Web/API/Window_Management_API)
