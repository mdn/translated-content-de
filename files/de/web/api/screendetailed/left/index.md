---
title: "ScreenDetailed: linke Eigenschaft"
short-title: linke
slug: Web/API/ScreenDetailed/left
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("Window Management API")}}{{seecompattable}}{{SecureContext_Header}}

Die **`left`** schreibgeschützte Eigenschaft der
{{domxref("ScreenDetailed")}}-Schnittstelle ist eine Zahl, die die x-Koordinate (linke Kante) des gesamten Bildschirmbereichs innerhalb der virtuellen Bildschirmaufteilung des Betriebssystems darstellt. Sie ist relativ zum [Multi-Screen-Ursprung](/de/docs/Web/API/Window_Management_API/Multi-screen_origin).

Dies entspricht der tatsächlichen linken Kante, wobei jegliche vom Betriebssystem gezeichneten UI-Elemente an der linken Seite des Bildschirms ignoriert werden. Fenster können nicht in diesen Bereichen platziert werden; um die linke Koordinate des Bereichs zu erhalten, in dem Fenster platziert werden können, verwenden Sie {{domxref("ScreenDetailed.availLeft")}}.

> [!NOTE]
> In Firefox ist eine nicht standardisierte Implementierung der `left`-Eigenschaft auf der `Screen`-Schnittstelle verfügbar. Details zur Verwendung finden Sie im [nicht standardisierten Beispiel](#nicht_standardisiertes_beispiel) unten und besuchen Sie die [`Screen`](/de/docs/Web/API/Screen#browser_compatibility) Referenzseite für Informationen zur Browserunterstützung der nicht standardisierten Implementierung.

## Wert

Eine Zahl.

## Beispiele

### Beispiel für Window Management API

```js
// Verfügbar in Browsern, die die Window Management API unterstützen
const screenDetails = await window.getScreenDetails();

// Gibt den absoluten linken Wert des ersten Bildschirms zurück
const screen1Left = screenDetails.screens[0].left;
```

### Nicht standardisiertes Beispiel

```js
// Verfügbar in Firefox
// Gibt den absoluten linken Wert des aktuellen Bildschirms zurück
const screenLeft = window.screen.left;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Window Management API](/de/docs/Web/API/Window_Management_API)
