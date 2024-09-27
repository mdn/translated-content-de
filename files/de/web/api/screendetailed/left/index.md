---
title: "ScreenDetailed: left Eigenschaft"
short-title: left
slug: Web/API/ScreenDetailed/left
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("Window Management API")}}{{seecompattable}}{{SecureContext_Header}}

Die **`left`** schreibgeschützte Eigenschaft des [`ScreenDetailed`](/de/docs/Web/API/ScreenDetailed)-Interfaces ist eine Zahl, die die x-Koordinate (linker Rand) des gesamten Bildschirmbereichs innerhalb des virtuellen Bildschirm-Layouts des Betriebssystems darstellt, relativ zum [Multi-Screen-Ursprung](/de/docs/Web/API/Window_Management_API/Multi-screen_origin).

Dies entspricht dem tatsächlichen linken Rand, wobei jegliche UI-Elemente des Betriebssystems ignoriert werden, die am linken Rand des Bildschirms gezeichnet sind. Fenster können in diesen Bereichen nicht platziert werden; um die linke Koordinate des Bildschirmbereichs zu erhalten, in dem Fenster platziert werden können, verwenden Sie [`ScreenDetailed.availLeft`](/de/docs/Web/API/ScreenDetailed/availLeft).

> [!NOTE]
> In Firefox ist eine nicht-standardmäßige Implementierung der `left`-Eigenschaft im `Screen`-Interface verfügbar. Siehe das [nicht-standardmäßige Beispiel](#non-standard_beispiel) unten für Nutzungshinweise, und sehen Sie auf der [`Screen`](/de/docs/Web/API/Screen#browser_compatibility) Referenzseite nach Informationen zur Browserunterstützung in Bezug auf die nicht-standardmäßige Implementierung.

## Wert

Eine Zahl.

## Beispiele

### Window Management API-Beispiel

```js
// Available in browsers that support the Window Management API
const screenDetails = await window.getScreenDetails();

// Return the absolute left value of the first screen
const screen1Left = screenDetails.screens[0].left;
```

### Nicht-standardmäßiges Beispiel

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
