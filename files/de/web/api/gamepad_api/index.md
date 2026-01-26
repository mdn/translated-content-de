---
title: Gamepad API
slug: Web/API/Gamepad_API
l10n:
  sourceCommit: 3020adac456187cf18edeb20613482fb73b38c1e
---

{{DefaultAPISidebar("Gamepad API")}}

Die **Gamepad-API** ermöglicht es Entwicklern, Signale von Gamepads und anderen Spielcontrollern auf einfache und konsistente Weise zu verarbeiten. Sie umfasst drei Schnittstellen, zwei Ereignisse und eine spezielle Funktion, um auf das Anschließen und Trennen von Gamepads zu reagieren und um weitere Informationen über die Gamepads selbst sowie die aktuell gedrückten Tasten und anderen Steuerungen zu erhalten.

## Schnittstellen

- [`Gamepad`](/de/docs/Web/API/Gamepad)
  - : Stellt ein mit dem Computer verbundenes Gamepad/Controller dar.
- [`GamepadButton`](/de/docs/Web/API/GamepadButton)
  - : Stellt eine Taste auf einem der verbundenen Controller dar.
- [`GamepadEvent`](/de/docs/Web/API/GamepadEvent)
  - : Das Ereignisobjekt, das für Ereignisse im Zusammenhang mit Gamepads ausgelöst wird.

### Experimentelle Gamepad-Erweiterungen

- [`GamepadHapticActuator`](/de/docs/Web/API/GamepadHapticActuator)
  - : Stellt Hardware im Controller dar, die für die Bereitstellung von haptischem Feedback für den Benutzer ausgelegt ist (falls verfügbar), am häufigsten Vibrationstechnik.
- [`GamepadPose`](/de/docs/Web/API/GamepadPose)
  - : Stellt die Haltung eines Controllers dar (z. B. Position und Orientierung im 3D-Raum) im Fall eines [WebVR](/de/docs/Web/API/WebVR_API) Controllers. Dies wird _nicht_ vom neueren [WebXR](/de/docs/Web/API/WebXR_Device_API) Standard verwendet.

### Erweiterungen zu anderen Schnittstellen

#### Navigator

- [`Navigator.getGamepads()`](/de/docs/Web/API/Navigator/getGamepads)
  - : Eine Erweiterung des [`Navigator`](/de/docs/Web/API/Navigator)-Objekts, die ein Array von [`Gamepad`](/de/docs/Web/API/Gamepad)-Objekten zurückgibt, eines für jedes angeschlossene Gamepad.

#### Fenster-Ereignisse

- [`gamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event)
  - : Ein Ereignis, das ausgelöst wird, wenn ein Gamepad verbunden wird.
- [`gamepaddisconnected`](/de/docs/Web/API/Window/gamepaddisconnected_event)
  - : Ein Ereignis, das ausgelöst wird, wenn ein Gamepad getrennt wird.

## Tutorials und Leitfäden

- [Verwendung der Gamepad-API](/de/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
- [Implementierung von Steuerungen mit der Gamepad-API](/de/docs/Games/Techniques/Controls_Gamepad_API)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Die Gamepad-API](https://hacks.mozilla.org/2013/12/the-gamepad-api/) von Ted Mielczarek und Robert Nyman
- [Einfaches API-Demoseite](https://luser.github.io/gamepadtest/) ([Quelle](https://github.com/luser/gamepadtest))
