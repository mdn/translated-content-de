---
title: Gamepad API
slug: Web/API/Gamepad_API
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{securecontext_header}}{{DefaultAPISidebar("Gamepad API")}}

Die **Gamepad-API** bietet Entwicklern eine Möglichkeit, Signale von Gamepads und anderen Spielcontrollern einfach und konsistent zu verarbeiten. Sie enthält drei Schnittstellen, zwei Ereignisse und eine spezielle Funktion, um auf das Anschließen und Trennen von Gamepads zu reagieren sowie um weitere Informationen über die Gamepads und aktuell gedrückte Tasten und andere Steuerungen zu erhalten.

## Schnittstellen

- [`Gamepad`](/de/docs/Web/API/Gamepad)
  - : Repräsentiert ein an den Computer angeschlossenes Gamepad/Controller.
- [`GamepadButton`](/de/docs/Web/API/GamepadButton)
  - : Repräsentiert eine Taste auf einem der angeschlossenen Controller.
- [`GamepadEvent`](/de/docs/Web/API/GamepadEvent)
  - : Das Ereignisobjekt, das Ereignisse repräsentiert, die im Zusammenhang mit Gamepads ausgelöst werden.

### Experimentelle Gamepad-Erweiterungen

- [`GamepadHapticActuator`](/de/docs/Web/API/GamepadHapticActuator)
  - : Repräsentiert die Hardware im Controller, die darauf ausgelegt ist, dem Benutzer haptisches Feedback zu geben (falls verfügbar), meistens handelt es sich dabei um Vibrationshardware.
- [`GamepadPose`](/de/docs/Web/API/GamepadPose)
  - : Repräsentiert die Pose eines Controllers (z. B. Position und Orientierung im 3D-Raum) im Fall eines [WebVR](/de/docs/Web/API/WebVR_API)-Controllers. Dies wird _nicht_ vom neueren [WebXR](/de/docs/Web/API/WebXR_Device_API)-Standard verwendet.

### Erweiterungen zu anderen Schnittstellen

#### Navigator

- [`Navigator.getGamepads()`](/de/docs/Web/API/Navigator/getGamepads)
  - : Eine Erweiterung des [`Navigator`](/de/docs/Web/API/Navigator)-Objekts, die ein Array von [`Gamepad`](/de/docs/Web/API/Gamepad)-Objekten zurückgibt, eines für jedes angeschlossene Gamepad.

#### Window-Ereignisse

- [`gamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event)
  - : Ein Ereignis, das ausgelöst wird, wenn ein Gamepad angeschlossen wird.
- [`gamepaddisconnected`](/de/docs/Web/API/Window/gamepaddisconnected_event)
  - : Ein Ereignis, das ausgelöst wird, wenn ein Gamepad getrennt wird.

## Anleitungen und Leitfäden

- [Verwendung der Gamepad-API](/de/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
- [Implementierung von Steuerungen mit der Gamepad-API](/de/docs/Games/Techniques/Controls_Gamepad_API)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [The Gamepad API](https://hacks.mozilla.org/2013/12/the-gamepad-api/) von Ted Mielczarek und Robert Nyman
- [Einfache API-Demoseite](https://luser.github.io/gamepadtest/) ([Quellcode](https://github.com/luser/gamepadtest))
