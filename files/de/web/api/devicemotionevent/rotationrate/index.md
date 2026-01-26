---
title: "DeviceMotionEvent: rotationRate-Eigenschaft"
short-title: rotationRate
slug: Web/API/DeviceMotionEvent/rotationRate
l10n:
  sourceCommit: aea3376188f5094fa2ad7295d664b1cd23516916
---

{{APIRef("Device Orientation Events")}}{{securecontext_header}}

Die schreibgeschützte **`rotationRate`**-Eigenschaft der [`DeviceMotionEvent`](/de/docs/Web/API/DeviceMotionEvent)-Schnittstelle gibt die Geschwindigkeit zurück, mit der sich das Gerät um jede seiner Achsen dreht, angegeben in Grad pro Sekunde.

> [!NOTE]
> Wenn die Hardware nicht in der Lage ist, diese Information bereitzustellen,
> gibt diese Eigenschaft `null` zurück.

## Wert

Die `rotationRate`-Eigenschaft ist ein schreibgeschütztes Objekt, das die Rotationsgeschwindigkeiten des Geräts um jede seiner Achsen beschreibt:

- `alpha`
  - : Die Geschwindigkeit, mit der das Gerät um seine X-Achse rotiert, das heißt, von vorne nach hinten.
- `beta`
  - : Die Geschwindigkeit, mit der das Gerät um seine Y-Achse rotiert, das heißt, von Seite zu Seite.
- `gamma`
  - : Die Geschwindigkeit, mit der das Gerät um seine Z-Achse rotiert, das heißt, das Verdrehen um eine Linie, die senkrecht zum Bildschirm steht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Erkennung der Geräteorientierung](/de/docs/Web/API/Device_orientation_events/Detecting_device_orientation)
- [Erläuterung von Orientierungs- und Bewegungsdaten](/de/docs/Web/API/Device_orientation_events/Orientation_and_motion_data_explained)
- [`devicemotion`](/de/docs/Web/API/Window/devicemotion_event)-Ereignis
