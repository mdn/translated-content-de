---
title: "GamepadPose: position-Eigenschaft"
short-title: position
slug: Web/API/GamepadPose/position
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{APIRef("WebVR API")}}{{SeeCompatTable}}

Die schreibgeschützte **`position`**-Eigenschaft der {{domxref("GamepadPose")}}-Schnittstelle gibt die Position des {{domxref("Gamepad")}} als 3D-Vektor zurück.

Das Koordinatensystem ist wie folgt definiert:

- Positives X ist zur rechten Seite des Nutzers.
- Positives Y ist nach oben.
- Positives Z ist hinter dem Nutzer.

Positionen werden in Metern von einem Ursprungsort gemessen – dieser Punkt ist die Position, an der der Sensor zuerst ausgelesen wurde.

## Wert

Ein {{jsxref("Float32Array")}} oder `null`, wenn das Gamepad keine Positionsdaten liefern kann.

> [!NOTE]
> Benutzeragenten können emulierte Positionswerte durch bestimmte Techniken bereitstellen; in diesem Fall sollten sie dennoch {{domxref("GamepadPose.hasPosition")}} als false melden.

## Beispiele

TBD

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
- [Gamepad API](/de/docs/Web/API/Gamepad_API)
