---
title: "DeviceMotionEvent: Eigenschaft rotationRate"
short-title: rotationRate
slug: Web/API/DeviceMotionEvent/rotationRate
l10n:
  sourceCommit: 03d7663c2965d67eca296f6a27aa8a651de7dfee
---

{{APIRef("Device Orientation Events")}}{{securecontext_header}}

Die schreibgeschützte Eigenschaft **`rotationRate`** des [`DeviceMotionEvent`](/de/docs/Web/API/DeviceMotionEvent)-Interfaces gibt die Rate zurück, mit der sich das Gerät um jede seiner Achsen in Grad pro Sekunde dreht.

> [!NOTE]
> Wenn die Hardware nicht in der Lage ist, diese
> Informationen bereitzustellen, gibt diese Eigenschaft `null` zurück.

## Wert

Die Eigenschaft `rotationRate` ist ein schreibgeschütztes Objekt, das die Rotationsraten des Geräts um jede seiner Achsen beschreibt:

- `alpha`
  - : Die Rate, mit der sich das Gerät um seine X-Achse dreht; das heißt, von vorne nach hinten.
- `beta`
  - : Die Rate, mit der sich das Gerät um seine Y-Achse dreht; das heißt, von Seite zu Seite.
- `gamma`
  - : Die Rate, mit der sich das Gerät um seine Z-Achse dreht; das heißt, es wird um eine Linie verdreht, die senkrecht zum Bildschirm steht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Erkennung der Geräteausrichtung](/de/docs/Web/API/Device_orientation_events/Detecting_device_orientation)
- [Erklärung der Orientierungs- und Bewegungsdaten](/de/docs/Web/API/Device_orientation_events/Orientation_and_motion_data_explained)
- [`devicemotion`](/de/docs/Web/API/Window/devicemotion_event)-Ereignis
