---
title: "GamepadPose: position-Eigenschaft"
short-title: position
slug: Web/API/GamepadPose/position
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{APIRef("WebVR API")}}{{SeeCompatTable}}

Die **`position`** schreibgeschützte Eigenschaft des [`GamepadPose`](/de/docs/Web/API/GamepadPose)-Interfaces gibt die Position des [`Gamepad`](/de/docs/Web/API/Gamepad) als 3D-Vektor zurück.

Das Koordinatensystem ist wie folgt:

- Positives X ist zur Rechten des Benutzers.
- Positives Y ist nach oben.
- Positives Z ist hinter dem Benutzer.

Positionen werden in Metern von einem Ursprungspunkt aus gemessen – dieser Punkt ist die Position, bei der der Sensor zuerst gelesen wurde.

## Wert

Ein {{jsxref("Float32Array")}}, oder `null`, wenn das Gamepad keine Positionsdaten bereitstellen kann.

> [!NOTE]
> Benutzeragenten können simulierte Positionswerte durch bestimmte Techniken bereitstellen; in diesem Fall sollten sie dennoch [`GamepadPose.hasPosition`](/de/docs/Web/API/GamepadPose/hasPosition) als false melden.

## Beispiele

TBD

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
- [Gamepad API](/de/docs/Web/API/Gamepad_API)
