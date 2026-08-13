---
title: "XRInputSource: handedness Eigenschaft"
short-title: handedness
slug: Web/API/XRInputSource/handedness
l10n:
  sourceCommit: 46a755ea71206e4512e3639596e6f68f4e71f041
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

Die schreibgeschützte [`XRInputSource`](/de/docs/Web/API/XRInputSource)-Eigenschaft **`handedness`** gibt an, mit welcher Hand des Benutzers die WebXR-Eingabequelle verbunden ist oder ob sie überhaupt keiner Hand zugeordnet ist.

## Wert

Ein String, der anzeigt, ob der Eingaberegler in einer der Hände des Benutzers gehalten wird und, falls ja, in welcher Hand. Der Wert ist einer der folgenden:

- `none`
  - : Der Eingaberegler ist keiner Hand des Benutzers zugeordnet.
- `left`
  - : Der Eingaberegler wird in der linken Hand des Benutzers gehalten, getragen oder ist daran befestigt.
- `right`
  - : Der Eingaberegler wird in der rechten Hand des Benutzers gehalten, getragen oder ist daran befestigt.

## Verwendungshinweise

Wenn die Eingabequelle nicht mit einer Hand des Benutzers verbunden ist (sei es durch Halten, Befestigen oder Tragen), ist der Wert von `handedness` `none`. Dies kann beispielsweise auf eine Eingabequelle hindeuten, die nicht handgehalten ist, wie etwa Steuerungen, die in ein Headset eingebaut sind, oder ein Eingabegerät, das am Kopf oder Körper angebracht ist.

## Beispiele

Ein wichtiges Anwendungsszenario für `handedness` ist die Bestimmung, in welcher Hand sich ein Controller befindet, damit Sie eine Darstellung dieser Hand (oder das Gerät, das diese Hand steuert) im virtuellen Raum zeichnen können.

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

Diese Funktion, die bei jedem Animationsframe (oder möglicherweise nur periodisch, je nach erforderlichem Grad an Glätte und etwaigen Leistungsbeschränkungen) aufgerufen wird, durchsucht die Liste der Eingabequellen und sucht nach solchen, die über einen [`gripSpace`](/de/docs/Web/API/XRInputSource/gripSpace) verfügen, der nicht `null` ist. Wenn ein `gripSpace` vorhanden ist, bedeutet das, dass die Eingabequelle ein handgehaltenes Gerät irgendeiner Art ist und nach Möglichkeit sichtbar gerendert werden sollte.

Wenn `gripSpace` nicht `null` ist, setzt die Funktion fort, die Pose für den `gripSpace` zu erhalten, die in den aktuellen Referenzraum transformiert wird. Vorausgesetzt, dass das dann gültig ist, wird eine Funktion namens `myRenderHandObject()` mit der Pose des Griffs und dem Wert von `handedness` aufgerufen. Diese zeichnet dann das entsprechende Modell, positioniert und geformt für die korrekte Hand.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebXR Device API](/de/docs/Web/API/WebXR_Device_API)
- [Eingaben und Eingabequellen](/de/docs/Web/API/WebXR_Device_API/Inputs)
