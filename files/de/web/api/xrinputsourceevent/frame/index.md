---
title: "XRInputSourceEvent: frame-Eigenschaft"
short-title: frame
slug: Web/API/XRInputSourceEvent/frame
l10n:
  sourceCommit: 8a9085b96d0135920be9b281d4500ff72a7a8369
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

Die schreibgeschützte [`XRInputSourceEvent`](/de/docs/Web/API/XRInputSourceEvent) Eigenschaft **`frame`** spezifiziert ein [`XRFrame`](/de/docs/Web/API/XRFrame)-Objekt, das den Ereignisrahmen darstellt, während dem eine Benutzereingabe im [WebXR](/de/docs/Web/API/WebXR_Device_API) auftrat. Dies kann somit ein Ereignis sein, das in der Vergangenheit stattgefunden hat und nicht unbedingt ein aktuelles oder bevorstehendes Ereignis ist.

## Wert

Ein [`XRFrame`], das den Ereignisrahmen angibt, in dem das durch das Objekt beschriebene Benutzereingabeereignis stattgefunden hat.

## Verwendungshinweise

Der Ereignisrahmen entspricht nicht einem visuellen Frame, wie er der Frame-Rendering-Callback-Funktion bereitgestellt wird (siehe [Rendering und der WebXR Frame-Rendering-Callback](/de/docs/Web/API/WebXR_Device_API/Rendering) für Details zum Callback). Stattdessen dient das `XRFrame`, das durch die `frame`-Eigenschaft spezifiziert wird, als Methode, um Zugriff auf die [`getPose()`](/de/docs/Web/API/XRFrame/getPose)-Methode zu gewähren, mit der Sie die relativen Positionen der Objekte in der Szene zum Zeitpunkt des Ereignisses erhalten können.

Da der Ereignisrahmen jedoch kein Animationsrahmen ist, steht keine Betrachterpose zur Verfügung, um den aktuellen Standpunkt des Betrachters darzustellen; die Ergebnisse des Aufrufs von [`getViewerPose()`](/de/docs/Web/API/XRFrame/getViewerPose) werden eine [`XRViewerPose`](/de/docs/Web/API/XRViewerPose) mit einer leeren [`views`](/de/docs/Web/API/XRViewerPose/views)-Liste sein.

## Beispiele

Dieser Code zeigt einen Handler für das [`selectstart`](/de/docs/Web/API/XRSession/selectstart_event)-Ereignis, der die Pose des Zielstrahls aus dem Frame erhält und die Pose, die den Strahl darstellt (`event.inputSource.targetRaySpace`), auf den Gesamt-Referenzraum `myRefSpace` abbildet.

Dann, falls das Ergebnis nicht `null` ist, wird die Transformation der Zielstrahlpose in eine Funktion namens `myCheckAndHandleHit()` übergeben, um zu überprüfen, ob der Strahl auf etwas zeigte, als die Auswahl ausgelöst wurde.

```js
xrSession.onselectstart = (event) => {
  let targetRayPose = event.frame.getPose(
    event.inputSource.targetRaySpace,
    myRefSpace,
  );
  if (targetRayPose) {
    checkAndHandleHit(targetRayPose.transform);
  }
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
