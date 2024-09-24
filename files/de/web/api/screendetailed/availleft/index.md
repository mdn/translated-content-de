---
title: "ScreenDetailed: availLeft-Eigenschaft"
short-title: availLeft
slug: Web/API/ScreenDetailed/availLeft
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("Window Management API")}}{{seecompattable}}{{SecureContext_Header}}

Die **`availLeft`**-Eigenschaft der Schnittstelle {{domxref("ScreenDetailed")}} ist eine schreibgeschützte Zahl, die die x-Koordinate (linker Rand) des verfügbaren Bildschirmbereichs innerhalb der virtuellen Bildschirmkonfiguration des Betriebssystems darstellt, relativ zum [Multi-Screen-Ursprung](/de/docs/Web/API/Window_Management_API/Multi-screen_origin).

Dieser Wert entspricht der {{domxref("ScreenDetailed.left")}}-Eigenschaft, plus der Breite eines Betriebssystem-UI-Elements, das auf der linken Bildschirmseite gezeichnet wird. Fenster können in diesen Bereichen nicht platziert werden, daher ist `availLeft` nützlich, um die linke Grenze des tatsächlich verfügbaren Bereichs zum Öffnen oder Platzieren von Fenstern anzugeben.

> [!NOTE]
> Eine nicht-standardmäßige Implementierung der `availLeft`-Eigenschaft ist in allen Browsern über die `Screen`-Schnittstelle verfügbar. Siehe das [nicht-standardmäßige Beispiel](#non-standard_beispiel) unten für Details zur Verwendung und die [`Screen`](/de/docs/Web/API/Screen#browser_compatibility) Referenzseite für Informationen zur Browserunterstützung im Zusammenhang mit der nicht-standardmäßigen Implementierung.

## Wert

Eine Zahl.

## Beispiele

### Window Management API Beispiel

```js
// Verfügbar in Browsern, die die Window Management API unterstützen
const screenDetails = await window.getScreenDetails();

// Gibt den availLeft-Wert des ersten Bildschirms zurück
const screen1AvailLeft = screenDetails.screens[0].availLeft;
```

### Non-standard Beispiel

```js
// Verfügbar in allen Browsern
// Gibt den availLeft-Wert des aktuellen Bildschirms zurück
const screenAvailLeft = window.screen.availLeft;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Window Management API](/de/docs/Web/API/Window_Management_API)
