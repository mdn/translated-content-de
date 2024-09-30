---
title: "XRInputSourceEvent: frame-Eigenschaft"
short-title: frame
slug: Web/API/XRInputSourceEvent/frame
l10n:
  sourceCommit: 8a9085b96d0135920be9b281d4500ff72a7a8369
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

Die schreibgeschützte [`XRInputSourceEvent`](/de/docs/Web/API/XRInputSourceEvent)-Eigenschaft **`frame`** spezifiziert ein [`XRFrame`](/de/docs/Web/API/XRFrame)-Objekt, das den Ereignisrahmen darstellt, in dem eine [WebXR](/de/docs/Web/API/WebXR_Device_API)-Benutzereingabe aufgetreten ist. Somit kann es sich um ein Ereignis handeln, das in der Vergangenheit aufgetreten ist und nicht um ein aktuelles oder bevorstehendes Ereignis.

## Wert

Ein [`XRFrame`](/de/docs/Web/API/XRFrame), der den Ereignisrahmen angibt, bei dem das durch das Objekt beschriebene Benutzereingabeereignis stattgefunden hat.

## Verwendungshinweise

Der Ereignisrahmen entspricht nicht einem visuellen Frame, wie er an die Frame-Rendering-Callback-Funktion geliefert wird (siehe [Rendering und der WebXR-Frame-Rendering-Callback](/de/docs/Web/API/WebXR_Device_API/Rendering) für Details zum Callback). Stattdessen ist der durch die `frame`-Eigenschaft angegebene `XRFrame` eine Methode, um Zugang zur [`getPose()`](/de/docs/Web/API/XRFrame/getPose)-Methode zu bieten, die verwendet werden kann, um die relativen Positionen der Objekte in der Szene zu dem Zeitpunkt zu erhalten, als das Ereignis aufgetreten ist.

Da es sich beim Ereignisrahmen jedoch nicht um einen Animationsrahmen handelt, gibt es keine Betrachterposition, die den aktuellen Blickwinkel des Betrachters darstellt; die Ergebnisse des Aufrufs von [`getViewerPose()`](/de/docs/Web/API/XRFrame/getViewerPose) werden eine [`XRViewerPose`](/de/docs/Web/API/XRViewerPose) mit einer leeren [`views`](/de/docs/Web/API/XRViewerPose/views)-Liste sein.

## Beispiele

Dieser Code zeigt einen Handler für das [`selectstart`](/de/docs/Web/API/XRSession/selectstart_event)-Ereignis, das die Pose des Zielstrahls aus dem Frame erhält und die Pose, die den Strahl darstellt (`event.inputSource.targetRaySpace`), auf den gesamten Referenzraum `myRefSpace` abbildet.

Wenn das Ergebnis nicht `null` ist, wird die Transformation der Zielstrahlpose an eine Funktion namens `myCheckAndHandleHit()` übergeben, um zu überprüfen, ob der Strahl auf etwas zeigte, als das "Select" ausgelöst wurde.

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
