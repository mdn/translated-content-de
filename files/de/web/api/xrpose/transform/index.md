---
title: "XRPose: transform-Eigenschaft"
short-title: transform
slug: Web/API/XRPose/transform
l10n:
  sourceCommit: 8a9085b96d0135920be9b281d4500ff72a7a8369
---

{{APIRef("WebXR Device API")}}{{SecureContext_header}}

Das schreibgeschützte Attribut `transform` der
{{DOMxRef("XRPose")}}-Schnittstelle ist ein {{DOMxRef("XRRigidTransform")}}-Objekt, das
die Position und Orientierung der Pose relativ zum Basis-{{DOMxRef("XRSpace")}}
bereitstellt, wie angegeben, als die Pose durch Aufruf von
{{domxref("XRFrame.getPose()")}} abgerufen wurde.

## Wert

Ein {{domxref("XRRigidTransform")}}, der die Position und Orientierung der
{{domxref("XRPose")}} relativ zu dem {{domxref("XRFrame")}}, zu dem diese
`XRPose` ausgerichtet ist, bereitstellt. Dies ist die gleiche Pose, die vom
Frame mit der Methode {{domxref("XRFrame.getPose", "getPose()")}} zurückgegeben wird.

## Beispiele

Dieser Handler für das {{domxref("XRSession")}}-Ereignis {{domxref("XRSession.select_event", "select")}} verarbeitet Ereignisse für verfolgte Zeigegeräte. Er ermittelt das anvisierte Objekt, indem er die Pose des Ereignisrahmens in eine Funktion namens `findTargetUsingRay()` übergibt, und verteilt dann das Ereignis je nach Händigkeit des Nutzers unterschiedlich; dies geschieht durch den Vergleich des Wertes der {{domxref("XRInputSource")}}-Eigenschaft
{{domxref("XRInputSource.handedness", "handedness")}} mit einem Wert in der Variable
`user.handedness`. Wenn die Quelle ein Controller in der primären Hand des Nutzers ist, wird eine Funktion am anvisierten Objekt namens `primaryAction()` aufgerufen; andernfalls wird die Funktion `offHandAction()` des anvisierten Objekts aufgerufen.

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
