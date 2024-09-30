---
title: "XRInputSource: handedness-Eigenschaft"
short-title: handedness
slug: Web/API/XRInputSource/handedness
l10n:
  sourceCommit: 6197320c2f25a975ee4f7df4b8d5b48bf8d01562
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

Die schreibgeschützte [`XRInputSource`](/de/docs/Web/API/XRInputSource)-Eigenschaft **`handedness`** gibt an, mit welcher Hand des Benutzers die WebXR-Eingabequelle verbunden ist oder ob sie überhaupt nicht mit einer Hand verbunden ist.

## Wert

Ein String, der angibt, ob der Eingaberegler in einer der Hände des Benutzers gehalten wird, und wenn ja, in welcher Hand. Der Wert ist einer der folgenden:

- `none`
  - : Der Eingaberegler ist nicht mit einer der Hände des Benutzers verbunden.
- `left`
  - : Der Eingaberegler wird in der linken Hand des Benutzers gehalten, getragen oder ist daran befestigt.
- `right`
  - : Der Eingaberegler wird in der rechten Hand des Benutzers gehalten, getragen oder ist daran befestigt.

## Hinweise zur Verwendung

Wenn die Eingabequelle kein Gerät ist, das mit der Hand eines Benutzers verbunden ist (sei es durch Halten, Befestigen oder Tragen), ist der Wert von `handedness` `none`. Dies kann beispielsweise auf eine Eingabequelle hinweisen, die nicht in der Hand gehalten wird, wie Steuerungen, die in ein Headset eingebaut sind, oder ein Eingabegerät, das am Kopf oder Körper befestigt ist.

## Beispiele

Ein wichtiges Anwendungsbeispiel für `handedness` ist es, zu bestimmen, in welcher Hand sich ein Controller befindet, damit Sie eine Darstellung dieser Hand (oder des Geräts, das diese Hand steuert) im virtuellen Raum zeichnen können.

```js
function updateInputSources(session, frame, refSpace) {
  for (const source of session.inputSources) {
    if (source.gripSpace) {
      const gripPose = frame.getPose(source.gripSpace, refSpace);

      if (gripPose) {
        myRenderHandObject(gripPose, inputSource.handedness);
      }
    }
  }
}
```

Diese Funktion, die in jedem Animationsrahmen (oder möglicherweise nur regelmäßig, je nach erforderlichem Glättungsgrad und etwaigen Leistungsbeschränkungen) aufgerufen wird, durchsucht die Liste der Eingabequellen und sucht nach solchen, die ein [`gripSpace`](/de/docs/Web/API/XRInputSource/gripSpace) haben, das nicht `null` ist. Wenn ein `gripSpace` vorhanden ist, bedeutet das, dass die Eingabequelle eine Art handgehaltenes Gerät ist, das nach Möglichkeit sichtbar gerendert werden sollte.

Wenn `gripSpace` nicht `null` ist, holt die Funktion die Pose für das `gripSpace`, die in den aktuellen Referenzraum transformiert wird. Wenn diese dann gültig ist, wird eine Funktion namens `myRenderHandObject()` mit der Pose des Griffs und dem Wert von `handedness` aufgerufen. Sie zeichnet dann das entsprechende Modell, das für die richtige Hand positioniert und geformt ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebXR Device API](/de/docs/Web/API/WebXR_Device_API)
- [Eingaben und Eingabequellen](/de/docs/Web/API/WebXR_Device_API/Inputs)
- [Verwendung von Gamepads in WebXR-Anwendungen](/de/docs/Web/API/WebXR_Device_API/Gamepads)
