---
title: GamepadPose
slug: Web/API/GamepadPose
l10n:
  sourceCommit: 3020adac456187cf18edeb20613482fb73b38c1e
---

{{APIRef("Gamepad API")}}{{SeeCompatTable}}

Das **`GamepadPose`**-Interface der [Gamepad API](/de/docs/Web/API/Gamepad_API) repräsentiert die Pose eines [WebVR](/de/docs/Web/API/WebVR_API)-Controllers zu einem bestimmten Zeitstempel (dies beinhaltet Informationen zur Orientierung, Position, Geschwindigkeit und Beschleunigung).

Dieses Interface ist über die Eigenschaft [`Gamepad.pose`](/de/docs/Web/API/Gamepad/pose) zugänglich.

## Instanz-Eigenschaften

- [`GamepadPose.hasOrientation`](/de/docs/Web/API/GamepadPose/hasOrientation) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen Boolean zurück, der angibt, ob das Gamepad in der Lage ist, Orientierungsinformationen zurückzugeben (`true`) oder nicht (`false`).
- [`GamepadPose.hasPosition`](/de/docs/Web/API/GamepadPose/hasPosition) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen Boolean zurück, der angibt, ob das Gamepad in der Lage ist, Positionsinformationen zurückzugeben (`true`) oder nicht (`false`).
- [`GamepadPose.position`](/de/docs/Web/API/GamepadPose/position) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die Position des [`Gamepad`](/de/docs/Web/API/Gamepad) als 3D-Vektor zurück.
- [`GamepadPose.linearVelocity`](/de/docs/Web/API/GamepadPose/linearVelocity) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die lineare Geschwindigkeit des [`Gamepad`](/de/docs/Web/API/Gamepad) in Metern pro Sekunde zurück.
- [`GamepadPose.linearAcceleration`](/de/docs/Web/API/GamepadPose/linearAcceleration) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die lineare Beschleunigung des [`Gamepad`](/de/docs/Web/API/Gamepad) in Metern pro Sekunde pro Sekunde zurück.
- [`GamepadPose.orientation`](/de/docs/Web/API/GamepadPose/orientation) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die Orientierung des [`Gamepad`](/de/docs/Web/API/Gamepad) als Quaternion-Wert zurück.
- [`GamepadPose.angularVelocity`](/de/docs/Web/API/GamepadPose/angularVelocity) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die Winkelgeschwindigkeit des [`Gamepad`](/de/docs/Web/API/Gamepad) in Radiant pro Sekunde zurück.
- [`GamepadPose.angularAcceleration`](/de/docs/Web/API/GamepadPose/angularAcceleration) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die Winkelbeschleunigung des [`Gamepad`](/de/docs/Web/API/Gamepad) in Metern pro Sekunde pro Sekunde zurück.

## Beispiele

TBD.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
- [Gamepad API](/de/docs/Web/API/Gamepad_API)
