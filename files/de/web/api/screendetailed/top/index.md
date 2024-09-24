---
title: "ScreenDetailed: top-Eigenschaft"
short-title: top
slug: Web/API/ScreenDetailed/top
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("Window Management API")}}{{seecompattable}}{{SecureContext_Header}}

Die **`top`**-Eigenschaft des {{domxref("ScreenDetailed")}}-Interfaces ist eine schreibgeschützte Zahl, die die y-Koordinate (obere Kante) des gesamten Bildschirmbereichs innerhalb der Anordnung des virtuellen Bildschirms des Betriebssystems darstellt, relativ zum [Multi-Screen-Ursprung](/de/docs/Web/API/Window_Management_API/Multi-screen_origin).

Diese entspricht der echten oberen Kante, wobei Elemente der Benutzeroberfläche des Betriebssystems an der Oberseite des Bildschirms ignoriert werden. Fenster können nicht in diesen Bereichen platziert werden; um die obere Koordinate des Bildschirmbereichs zu erhalten, in dem Fenster platziert werden können, verwenden Sie {{domxref("ScreenDetailed.availTop")}}.

> [!NOTE]
> In Firefox ist eine nicht standardisierte Implementierung der `top`-Eigenschaft im `Screen`-Interface verfügbar. Einzelheiten zur Verwendung finden Sie im untenstehenden [nicht standardisierten Beispiel](#nicht_standardisiertes_beispiel), und auf der [`Screen`](/de/docs/Web/API/Screen#browser_compatibility)-Referenzseite finden Sie Informationen zur Browserunterstützung in Bezug auf die nicht standardisierte Implementierung.

## Wert

Eine Zahl.

## Beispiele

### Beispiel für Window Management API

```js
// Verfügbar in Browsern, die die Window Management API unterstützen
const screenDetails = await window.getScreenDetails();

// Geben Sie den absoluten oberen Wert des ersten Bildschirms zurück
const screen1Top = screenDetails.screens[0].top;
```

### Nicht standardisiertes Beispiel

```js
// Verfügbar in Firefox
// Geben Sie den absoluten oberen Wert des aktuellen Bildschirms zurück
const screenTop = window.screen.top;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Window Management API](/de/docs/Web/API/Window_Management_API)
