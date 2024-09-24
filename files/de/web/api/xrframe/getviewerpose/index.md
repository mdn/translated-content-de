---
title: "XRFrame: Methode getViewerPose()"
short-title: getViewerPose()
slug: Web/API/XRFrame/getViewerPose
l10n:
  sourceCommit: 8a9085b96d0135920be9b281d4500ff72a7a8369
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`getViewerPose()`**-Methode, ein Mitglied der {{domxref("XRFrame")}}-Schnittstelle, gibt ein {{domxref("XRViewerPose")}}-Objekt zurück, das die Pose (Position und Orientierung) des Betrachters relativ zum angegebenen Referenzraum beschreibt.

Siehe die {{domxref("XRFrame.getPose", "getPose()")}}-Methode, um eine Pose zu berechnen, die den Unterschied zwischen zwei Räumen darstellt.

## Syntax

```js-nolint
getViewerPose(referenceSpace)
```

### Parameter

- `referenceSpace`
  - : Ein {{domxref("XRReferenceSpace")}}-Objekt, das den Raum angibt, der als Referenzpunkt oder Basis für die Berechnung der aktuellen Pose des Betrachters verwendet werden soll.

### Rückgabewert

Ein {{domxref("XRViewerPose")}}, das die Position und Orientierung des Betrachters relativ zum angegebenen Referenzraum beschreibt.

### Ausnahmen

- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn `getViewerPose()` nicht im Kontext eines Rückrufs für die {{domxref("XRSession.requestAnimationFrame", "XRSession.requestAnimationFrame()")}}-Sitzung aufgerufen wurde.

## Beispiele

In dieser Rückruffunktion für {{domxref("XRSession.requestAnimationFrame", "requestAnimationFrame()")}} wird das {{domxref("XRViewerPose")}}, das den Standpunkt des Betrachters auf die Welt beschreibt, durch Aufruf von `getViewerPose()` auf dem {{domxref("XRFrame")}} ermittelt, das an den Rückruf übergeben wird.

```js
viewerPose = xrFrame.getViewerPose(xrReferenceSpace);

if (viewerPose) {
  /* render the pose's views */
}
```

Um ein vollständiges Beispiel zu sehen, werfen Sie einen Blick auf [Bewegung, Orientierung und Bewegung](/de/docs/Web/API/WebXR_Device_API/Movement_and_motion).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
