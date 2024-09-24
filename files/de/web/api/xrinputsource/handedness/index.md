---
title: "XRInputSource: Eigenschaft handedness"
short-title: handedness
slug: Web/API/XRInputSource/handedness
l10n:
  sourceCommit: 6197320c2f25a975ee4f7df4b8d5b48bf8d01562
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

Die schreibgeschützte {{domxref("XRInputSource")}}-Eigenschaft **`handedness`** gibt an, mit welcher Hand des Benutzers die WebXR-Eingabequelle verknüpft ist oder ob sie überhaupt nicht mit einer Hand verbunden ist.

## Wert

Ein String, der angibt, ob der Eingaberegler in einer der Hände des Benutzers gehalten wird und wenn ja, in welcher. Der Wert ist einer der folgenden:

- `none`
  - : Der Eingaberegler ist nicht mit einer der Hände des Benutzers verbunden.
- `left`
  - : Der Eingaberegler wird in der linken Hand des Benutzers gehalten, getragen oder ist daran befestigt.
- `right`
  - : Der Eingaberegler wird in der rechten Hand des Benutzers gehalten, getragen oder ist daran befestigt.

## Verwendungshinweise

Wenn die Eingabequelle nicht mit einer Hand des Benutzers verknüpft ist (sei es, weil sie gehalten, befestigt oder getragen wird), ist der Wert von `handedness` `none`. Dies kann beispielsweise auf eine Eingabequelle hinweisen, die nicht handgehalten ist, wie z.B. Steuerungen, die in ein Headset integriert sind oder ein Eingabegerät, das am Kopf oder Körper befestigt ist.

## Beispiele

Ein wichtiger Anwendungsfall für `handedness` ist es, zu bestimmen, in welcher Hand ein Controller sich befindet, um eine Darstellung dieser Hand (oder des Geräts, das diese Hand steuert) im virtuellen Raum zu zeichnen.

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

Diese Funktion, die bei jedem Animationsframe (oder möglicherweise nur periodisch, je nach erforderlichem Maß an Glätte und eventuellen Leistungsbeschränkungen) aufgerufen wird, durchsucht die Liste der Eingabequellen nach solchen, die eine {{domxref("XRInputSource.gripSpace", "gripSpace")}} haben, die nicht `null` ist. Wenn ein `gripSpace` vorhanden ist, bedeutet das, dass es sich um ein handgehaltenes Gerät handelt, das, wenn möglich, sichtbar dargestellt werden sollte.

Wenn `gripSpace` nicht `null` ist, fährt die Funktion fort, die Pose für den `gripSpace`, transformiert in den aktuellen Referenzraum, zu erhalten. Falls diese dann gültig ist, wird eine Funktion namens `myRenderHandObject()` mit der Pose des Griffs und dem Wert von `handedness` aufgerufen. Anschließend wird das entsprechende Modell für die korrekte Hand positioniert und geformt gezeichnet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebXR Device API](/de/docs/Web/API/WebXR_Device_API)
- [Eingaben und Eingabequellen](/de/docs/Web/API/WebXR_Device_API/Inputs)
- [Verwendung von Gamepads in WebXR-Anwendungen](/de/docs/Web/API/WebXR_Device_API/Gamepads)
