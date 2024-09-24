---
title: GamepadPose
slug: Web/API/GamepadPose
l10n:
  sourceCommit: 5e98fd9cfbec6e28044a27c58bffca5ae464ec8b
---

{{securecontext_header}}{{APIRef("Gamepad API")}}{{SeeCompatTable}}

Die **`GamepadPose`**-Schnittstelle der [Gamepad-API](/de/docs/Web/API/Gamepad_API) repräsentiert die Pose eines [WebVR](/de/docs/Web/API/WebVR_API)-Controllers zu einem gegebenen Zeitpunkt (einschließlich Informationen zu Orientierung, Position, Geschwindigkeit und Beschleunigung).

Diese Schnittstelle ist über die {{domxref("Gamepad.pose")}}-Eigenschaft zugänglich.

## Instanz-Eigenschaften

- {{domxref("GamepadPose.hasOrientation")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen Boolean zurück, der angibt, ob das Gamepad in der Lage ist, Orientierungsinformationen zurückzugeben (`true`) oder nicht (`false`).
- {{domxref("GamepadPose.hasPosition")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen Boolean zurück, der angibt, ob das Gamepad in der Lage ist, Positionsinformationen zurückzugeben (`true`) oder nicht (`false`).
- {{domxref("GamepadPose.position")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die Position des {{domxref("Gamepad")}} als 3D-Vektor zurück.
- {{domxref("GamepadPose.linearVelocity")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die lineare Geschwindigkeit des {{domxref("Gamepad")}}, in Metern pro Sekunde, zurück.
- {{domxref("GamepadPose.linearAcceleration")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die lineare Beschleunigung des {{domxref("Gamepad")}}, in Metern pro Sekunde quadrat, zurück.
- {{domxref("GamepadPose.orientation")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die Orientierung des {{domxref("Gamepad")}} als Quaternion-Wert zurück.
- {{domxref("GamepadPose.angularVelocity")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die Winkelgeschwindigkeit des {{domxref("Gamepad")}}, in Radiant pro Sekunde, zurück.
- {{domxref("GamepadPose.angularAcceleration")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die Winkelbeschleunigung des {{domxref("Gamepad")}}, in Metern pro Sekunde quadrat, zurück.

## Beispiele

TBD.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
- [Gamepad API](/de/docs/Web/API/Gamepad_API)
