---
title: "ScreenDetailed: availTop-Eigenschaft"
short-title: availTop
slug: Web/API/ScreenDetailed/availTop
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("Window Management API")}}{{seecompattable}}{{SecureContext_Header}}

Die schreibgeschützte **`availTop`**-Eigenschaft der {{domxref("ScreenDetailed")}}-Schnittstelle ist eine Zahl, die die y-Koordinate (obere Kante) des verfügbaren Bildschirmbereichs innerhalb des virtuellen Bildschirmarrangements des Betriebssystems darstellt, relativ zum [Multi-Screen-Ursprung](/de/docs/Web/API/Window_Management_API/Multi-screen_origin).

Diese ist gleich der {{domxref("ScreenDetailed.top")}}-Eigenschaft, zuzüglich der Höhe jeglicher OS-Oberflächenelemente, die oben auf dem Bildschirm angezeigt werden. In diesen Bereichen können keine Fenster platziert werden, daher ist `availTop` nützlich, um die obere Grenze des tatsächlich verfügbaren Bereichs zum Öffnen oder Platzieren von Fenstern zu bestimmen.

> [!NOTE]
> Eine nicht standardmäßige Implementierung der `availTop`-Eigenschaft ist auf der `Screen`-Schnittstelle in allen Browsern verfügbar. Siehe das [nicht standardmäßige Beispiel](#nicht_standardmäßiges_beispiel) unten für Anwendungsdetails und die [`Screen`](/de/docs/Web/API/Screen#browser_compatibility)-Referenzseite für Informationen zur Browserunterstützung in Bezug auf die nicht standardmäßige Implementierung.

## Wert

Eine Zahl.

## Beispiele

### Beispiel für die Window Management API

```js
// Verfügbar in Browsern, die die Window Management API unterstützen
const screenDetails = await window.getScreenDetails();

// Gibt den availTop-Wert des ersten Bildschirms zurück
const screen1AvailTop = screenDetails.screens[0].availTop;
```

### Nicht standardmäßiges Beispiel

```js
// In allen Browsern verfügbar
// Gibt den availTop-Wert des aktuellen Bildschirms zurück
const screenAvailTop = window.screen.availTop;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Window Management API](/de/docs/Web/API/Window_Management_API)
