---
title: "XRInputSourceEvent: frame-Eigenschaft"
short-title: frame
slug: Web/API/XRInputSourceEvent/frame
l10n:
  sourceCommit: 8a9085b96d0135920be9b281d4500ff72a7a8369
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

Die schreibgeschützte {{domxref("XRInputSourceEvent")}}-Eigenschaft **`frame`** gibt ein {{domxref("XRFrame")}}-Objekt an, das den Ereignisrahmen darstellt, währenddessen eine [WebXR](/de/docs/Web/API/WebXR_Device_API)-Benutzereingabe erfolgte. Dies kann dementsprechend ein Ereignis sein, das in der Vergangenheit stattgefunden hat, anstatt ein aktuelles oder bevorstehendes Ereignis zu sein.

## Wert

Ein {{domxref("XRFrame")}}, der den Ereignisrahmen angibt, bei dem das durch das Objekt beschriebene Benutzereingabeereignis stattgefunden hat.

## Nutzungshinweise

Der Ereignisrahmen entspricht nicht einem visuellen Rahmen, wie er an die Frame-Rendering-Callback-Funktion übergeben wird (siehe [Rendering und der WebXR Frame-Rendering-Callback](/de/docs/Web/API/WebXR_Device_API/Rendering) für Details zum Callback). Stattdessen ist der durch die `frame`-Eigenschaft angegebene `XRFrame` eine Methode, um Zugriff auf die {{domxref("XRFrame.getPose", "getPose()")}}-Methode zu bieten, die Sie verwenden können, um die relativen Positionen der Objekte in der Szene zu dem Zeitpunkt zu erhalten, an dem das Ereignis stattgefunden hat.

Da der Ereignisrahmen jedoch kein Animationsrahmen ist, gibt es keine Viewer-Pose, die die aktuelle Sichtweise des Betrachters darstellt; die Ergebnisse eines Aufrufs von {{domxref("XRFrame.getViewerPose", "getViewerPose()")}} werden eine {{domxref("XRViewerPose")}} mit einer leeren {{domxref("XRViewerPose.views", "views")}}-Liste sein.

## Beispiele

Dieser Code zeigt einen Handler für das {{domxref("XRSession.selectstart_event", "selectstart")}}-Ereignis, der die Pose des Zielstrahls aus dem Rahmen erhält und die Pose, die den Strahl darstellt (`event.inputSource.targetRaySpace`), auf den gesamten Referenzraum `myRefSpace` abbildet.

Dann, falls das Ergebnis nicht `null` ist, wird die Transformation der Zielstrahl-Pose in eine Funktion namens `myCheckAndHandleHit()` übergeben, um zu prüfen, ob der Strahl auf etwas zeigte, als die Auswahl ausgelöst wurde.

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
