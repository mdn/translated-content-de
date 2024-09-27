---
title: "XRPose: Transform-Eigenschaft"
short-title: transform
slug: Web/API/XRPose/transform
l10n:
  sourceCommit: 8a9085b96d0135920be9b281d4500ff72a7a8369
---

{{APIRef("WebXR Device API")}}{{SecureContext_header}}

Das schreibgeschützte Attribut `transform` der [`XRPose`](/de/docs/Web/API/XRPose)-Schnittstelle ist ein [`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform)-Objekt, das die Position und Orientierung der Pose relativ zum Basis-[`XRSpace`](/de/docs/Web/API/XRSpace) liefert, wie sie angegeben wurde, als die Pose durch Aufrufen von [`XRFrame.getPose()`](/de/docs/Web/API/XRFrame/getPose) abgerufen wurde.

## Wert

Ein [`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform), das die Position und Orientierung der [`XRPose`](/de/docs/Web/API/XRPose) relativ zu dem [`XRFrame`](/de/docs/Web/API/XRFrame) liefert, mit dem diese `XRPose` ausgerichtet ist. Dies ist die gleiche Pose, die von der [`getPose()`](/de/docs/Web/API/XRFrame/getPose)-Methode des Frames zurückgegeben wird.

## Beispiele

Dieser Handler für das [`XRSession`](/de/docs/Web/API/XRSession)-Ereignis [`select`](/de/docs/Web/API/XRSession/select_event) verarbeitet Ereignisse für verfolgte Zeiger. Er bestimmt das anvisierte Objekt, indem er die Pose des Ereignisrahmens in eine Funktion namens `findTargetUsingRay()` übergibt, und leitet das Ereignis je nach Händigkeit des Benutzers unterschiedlich weiter; dies geschieht durch den Vergleich des Wertes der [`XRInputSource`](/de/docs/Web/API/XRInputSource)-Eigenschaft [`handedness`](/de/docs/Web/API/XRInputSource/handedness) mit einem Wert in der Variable `user.handedness`. Wenn die Quelle ein Controller in der primären Hand des Benutzers ist, wird eine Funktion namens `primaryAction()` für das anvisierte Objekt aufgerufen; andernfalls wird die Funktion `offHandAction()` des anvisierten Objekts aufgerufen.

```js
xrSession.addEventListener("select", (event) => {
  let source = event.inputSource;
  let frame = event.frame;
  let targetRayPose = frame.getPose(source.targetRaySpace, myRefSpace);
  let targetObject = findTargetUsingRay(targetRay.transform.matrix);

  if (source.targetRayMode === "tracked-pointer") {
    if (source.handedness === user.handedness) {
      targetObject.primaryAction();
    } else {
      targetObject.offHandAction();
    }
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
