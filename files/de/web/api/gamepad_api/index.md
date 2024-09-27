---
title: Gamepad API
slug: Web/API/Gamepad_API
l10n:
  sourceCommit: 8beb479c558d4220932721e61b6a334d5b5c274a
---

{{securecontext_header}}{{DefaultAPISidebar("Gamepad API")}}

Die **Gamepad API** bietet Entwicklern eine Möglichkeit, auf Signale von Gamepads und anderen Game-Controllern zuzugreifen und darauf in einer einfachen, konsistenten Weise zu reagieren. Sie enthält drei Schnittstellen, zwei Ereignisse und eine spezielle Funktion, um darauf zu reagieren, dass Gamepads verbunden oder getrennt werden, sowie um weitere Informationen über die Gamepads selbst und die aktuell gedrückten Tasten und anderen Steuerungen zu erhalten.

## Schnittstellen

- [`Gamepad`](/de/docs/Web/API/Gamepad)
  - : Stellt ein mit dem Computer verbundenes Gamepad/Controller dar.
- [`GamepadButton`](/de/docs/Web/API/GamepadButton)
  - : Stellt eine Taste auf einem der verbundenen Controller dar.
- [`GamepadEvent`](/de/docs/Web/API/GamepadEvent)
  - : Das Ereignisobjekt, das für Ereignisse ausgelöst wird, die mit Gamepads zusammenhängen.

### Experimentelle Gamepad-Erweiterungen

- [`GamepadHapticActuator`](/de/docs/Web/API/GamepadHapticActuator)
  - : Stellt Hardware im Controller dar, die entworfen wurde, um dem Benutzer haptisches Feedback zu geben (falls verfügbar), meist Vibrationstechnologie.
- [`GamepadPose`](/de/docs/Web/API/GamepadPose)
  - : Stellt die Pose eines Controllers dar (z. B. Position und Orientierung im 3D-Raum) im Fall eines [WebVR](/de/docs/Web/API/WebVR_API) Controllers. Dies wird _nicht_ vom neueren [WebXR](/de/docs/Web/API/WebXR_Device_API) Standard verwendet.

### Erweiterungen für andere Schnittstellen

#### Navigator

- [`Navigator.getGamepads()`](/de/docs/Web/API/Navigator/getGamepads)
  - : Eine Erweiterung des [`Navigator`](/de/docs/Web/API/Navigator) Objekts, die ein Array von [`Gamepad`](/de/docs/Web/API/Gamepad) Objekten zurückgibt, eines für jedes verbundene Gamepad.

#### Fensterereignisse

- [`gamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event)
  - : Ein Ereignis, das ausgelöst wird, wenn ein Gamepad verbunden wird.
- [`gamepaddisconnected`](/de/docs/Web/API/Window/gamepaddisconnected_event)
  - : Ein Ereignis, das ausgelöst wird, wenn ein Gamepad getrennt wird.

## Tutorials und Leitfäden

- [Verwendung der Gamepad API](/de/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
- [Implementierung von Steuerungen mit der Gamepad API](/de/docs/Games/Techniques/Controls_Gamepad_API)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [The Gamepad API](https://hacks.mozilla.org/2013/12/the-gamepad-api/) von Ted Mielczarek und Robert Nyman
- [Einfache API-Demoseite](https://luser.github.io/gamepadtest/) ([Quelle](https://github.com/luser/gamepadtest))
