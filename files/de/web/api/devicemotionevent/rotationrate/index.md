---
title: "DeviceMotionEvent: rotationRate-Eigenschaft"
short-title: rotationRate
slug: Web/API/DeviceMotionEvent/rotationRate
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{APIRef("Device Orientation Events")}}{{securecontext_header}}

Die schreibgeschützte **`rotationRate`**-Eigenschaft des [`DeviceMotionEvent`](/de/docs/Web/API/DeviceMotionEvent)-Interfaces gibt die Geschwindigkeit an, mit der sich das Gerät in Grad pro Sekunde um jede seiner Achsen dreht.

> [!NOTE]
> Wenn die Hardware nicht in der Lage ist, diese
> Informationen bereitzustellen, gibt diese Eigenschaft `null` zurück.

## Wert

Die `rotationRate`-Eigenschaft ist ein schreibgeschütztes Objekt, das die Rotationsgeschwindigkeiten des Geräts um jede seiner Achsen beschreibt:

- `alpha`
  - : Die Geschwindigkeit, mit der sich das Gerät um seine Z-Achse dreht; das heißt, es wird um eine Linie gedreht, die senkrecht zum Bildschirm steht.
- `beta`
  - : Die Geschwindigkeit, mit der sich das Gerät um seine X-Achse dreht; das heißt, von vorne nach hinten.
- `gamma`
  - : Die Geschwindigkeit, mit der sich das Gerät um seine Y-Achse dreht; das heißt, von Seite zu Seite.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Erkennung der Geräteausrichtung](/de/docs/Web/API/Device_orientation_events/Detecting_device_orientation)
- [Erläuterung von Orientierungs- und Bewegungsdaten](/de/docs/Web/API/Device_orientation_events/Orientation_and_motion_data_explained)
- [`devicemotion`](/de/docs/Web/API/Window/devicemotion_event) Ereignis
