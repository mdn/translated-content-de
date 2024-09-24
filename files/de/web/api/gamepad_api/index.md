---
title: Gamepad-API
slug: Web/API/Gamepad_API
l10n:
  sourceCommit: 8beb479c558d4220932721e61b6a334d5b5c274a
---

{{securecontext_header}}{{DefaultAPISidebar("Gamepad API")}}

Die **Gamepad-API** bietet Entwicklern eine Möglichkeit, in einfacher und konsistenter Weise auf Signale von Gamepads und anderen Spielcontrollern zuzugreifen und darauf zu reagieren. Sie enthält drei Schnittstellen, zwei Ereignisse und eine spezielle Funktion, um darauf zu reagieren, wenn Gamepads verbunden oder getrennt werden, und um weitere Informationen über die Gamepads selbst sowie die momentan gedrückten Tasten und anderen Steuerungen zu erhalten.

## Schnittstellen

- [`Gamepad`](/de/docs/Web/API/Gamepad)
  - : Stellt ein mit dem Computer verbundenes Gamepad/Controller dar.
- [`GamepadButton`](/de/docs/Web/API/GamepadButton)
  - : Stellt eine Taste auf einem der verbundenen Controller dar.
- [`GamepadEvent`](/de/docs/Web/API/GamepadEvent)
  - : Das Ereignisobjekt, das Ereignisse darstellt, die im Zusammenhang mit Gamepads ausgelöst werden.

### Experimentelle Gamepad-Erweiterungen

- [`GamepadHapticActuator`](/de/docs/Web/API/GamepadHapticActuator)
  - : Repräsentiert Hardware im Controller, die entwickelt wurde, um dem Benutzer haptisches Feedback zu geben (falls verfügbar), meist Vibrationstechnologie.
- [`GamepadPose`](/de/docs/Web/API/GamepadPose)
  - : Stellt die Pose eines Controllers dar (z. B. Position und Orientierung im 3D-Raum) im Falle eines [WebVR](/de/docs/Web/API/WebVR_API) Controllers. Dies wird von dem neueren [WebXR](/de/docs/Web/API/WebXR_Device_API) Standard _nicht_ verwendet.

### Erweiterungen für andere Schnittstellen

#### Navigator

- {{domxref("Navigator.getGamepads()")}}
  - : Eine Erweiterung des {{domxref("Navigator")}} Objekts, die ein Array von {{domxref("Gamepad")}} Objekten zurückgibt, eines für jedes verbundene Gamepad.

#### Fensterereignisse

- {{domxref("Window.gamepadconnected_event", "gamepadconnected")}}
  - : Ein Ereignis, das ausgelöst wird, wenn ein Gamepad verbunden wird.
- {{domxref("Window.gamepaddisconnected_event", "gamepaddisconnected")}}
  - : Ein Ereignis, das ausgelöst wird, wenn ein Gamepad getrennt wird.

## Tutorials und Anleitungen

- [Verwendung der Gamepad-API](/de/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
- [Implementierung von Steuerungen mit der Gamepad-API](/de/docs/Games/Techniques/Controls_Gamepad_API)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Die Gamepad-API](https://hacks.mozilla.org/2013/12/the-gamepad-api/) von Ted Mielczarek und Robert Nyman
- [Einfache API-Demoseite](https://luser.github.io/gamepadtest/) ([Quelle](https://github.com/luser/gamepadtest))
