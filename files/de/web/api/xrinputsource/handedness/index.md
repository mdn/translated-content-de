---
title: "XRInputSource: handedness-Eigenschaft"
short-title: handedness
slug: Web/API/XRInputSource/handedness
l10n:
  sourceCommit: 6197320c2f25a975ee4f7df4b8d5b48bf8d01562
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

Die schreibgeschützte [`XRInputSource`](/de/docs/Web/API/XRInputSource)-Eigenschaft **`handedness`** gibt an, mit welcher Hand des Benutzers die WebXR-Eingabequelle verbunden ist oder ob sie mit keiner Hand verbunden ist.

## Wert

Ein String, der anzeigt, ob der Eingaberegler in einer der Hände des Benutzers gehalten wird und wenn ja, in welcher Hand. Der Wert ist einer der folgenden:

- `none`
  - : Der Eingaberegler ist nicht mit einer der Hände des Benutzers verbunden.
- `left`
  - : Der Eingaberegler wird in der linken Hand des Benutzers gehalten, getragen oder ist damit verbunden.
- `right`
  - : Der Eingaberegler wird in der rechten Hand des Benutzers gehalten, getragen oder ist damit verbunden.

## Nutzungshinweise

Wenn die Eingabequelle kein mit einer Hand des Benutzers verbundenes Gerät ist (sei es durch Halten, Tragen oder Befestigung), ist der Wert von `handedness` `none`. Dies könnte beispielsweise auf eine Eingabequelle hinweisen, die nicht handgeführt ist, wie Steuerungen, die in ein Headset eingebaut sind oder ein Eingabegerät, das am Kopf oder Körper befestigt ist.

## Beispiele

Eine wichtige Nutzungsszenerie für `handedness` ist es, festzustellen, in welcher Hand ein Controller sich befindet, damit eine Darstellung dieser Hand (oder des Geräts, das die Hand steuert) im virtuellen Raum gezeichnet werden kann.

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

Diese Funktion, die in jedem Animationsrahmen (oder möglicherweise nur periodisch, abhängig vom erforderlichen Maß an Glättung und Leistungseinschränkungen) aufgerufen würde, durchsucht die Liste der Eingabequellen nach solchen, die ein [`gripSpace`](/de/docs/Web/API/XRInputSource/gripSpace) haben, das nicht `null` ist. Wenn ein `gripSpace` vorhanden ist, bedeutet das, dass die Eingabequelle eine Art handgehaltenes Gerät ist, das nach Möglichkeit sichtbar dargestellt werden sollte.

Wenn `gripSpace` nicht `null` ist, fährt die Funktion fort, die Pose für das `gripSpace` in den aktuellen Referenzraum zu transformieren. Wenn diese dann gültig ist, wird eine Funktion namens `myRenderHandObject()` mit der Pose des Griffs und dem Wert von `handedness` aufgerufen. Diese zeichnet dann das entsprechende Modell, das für die korrekte Hand positioniert und gestaltet ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebXR Device API](/de/docs/Web/API/WebXR_Device_API)
- [Inputs und Eingabequellen](/de/docs/Web/API/WebXR_Device_API/Inputs)
- [Gamepads in WebXR-Anwendungen verwenden](/de/docs/Web/API/WebXR_Device_API/Gamepads)
