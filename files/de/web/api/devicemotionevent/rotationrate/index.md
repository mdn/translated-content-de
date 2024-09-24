---
title: "DeviceMotionEvent: rotationRate-Eigenschaft"
short-title: rotationRate
slug: Web/API/DeviceMotionEvent/rotationRate
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{APIRef("Device Orientation Events")}}{{securecontext_header}}

Die **`rotationRate`**-Eigenschaft der {{domxref("DeviceMotionEvent")}}-Schnittstelle gibt die Rate zurück, mit der das Gerät um jede seiner Achsen in Grad pro Sekunde rotiert.

> [!NOTE]
> Wenn die Hardware nicht in der Lage ist, diese Information bereitzustellen, gibt diese Eigenschaft `null` zurück.

## Wert

Die `rotationRate`-Eigenschaft ist ein schreibgeschütztes Objekt, das die Rotationsraten des Geräts um jede seiner Achsen beschreibt:

- `alpha`
  - : Die Rate, mit der das Gerät um seine Z-Achse rotiert; also eine Verdrehung um eine Linie senkrecht zum Bildschirm.
- `beta`
  - : Die Rate, mit der das Gerät um seine X-Achse rotiert; das heißt, von vorne nach hinten.
- `gamma`
  - : Die Rate, mit der das Gerät um seine Y-Achse rotiert; das heißt, von Seite zu Seite.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Device orientation events/Detecting device orientation", "Erkennung der Geräteausrichtung", "", "nocode")}}
- {{domxref("Device orientation events/Orientation and motion data explained", "Orientierungs- und Bewegungsdaten erklärt", "", "nocode")}}
- {{DOMxRef("Window/devicemotion_event", "devicemotion")}}-Event
