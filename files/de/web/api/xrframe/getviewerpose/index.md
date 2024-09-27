---
title: "XRFrame: getViewerPose() Methode"
short-title: getViewerPose()
slug: Web/API/XRFrame/getViewerPose
l10n:
  sourceCommit: 8a9085b96d0135920be9b281d4500ff72a7a8369
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`getViewerPose()`**-Methode, ein Mitglied des [`XRFrame`](/de/docs/Web/API/XRFrame) Interfaces, gibt ein [`XRViewerPose`](/de/docs/Web/API/XRViewerPose)-Objekt zurück, das die Pose (Position und Orientierung) des Betrachters relativ zum angegebenen Referenzraum beschreibt.

Sehen Sie die [`getPose()`](/de/docs/Web/API/XRFrame/getPose) Methode für eine Möglichkeit, eine Pose zu berechnen, die den Unterschied zwischen zwei Räumen darstellt.

## Syntax

```js-nolint
getViewerPose(referenceSpace)
```

### Parameter

- `referenceSpace`
  - : Ein [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace) Objekt, das den Raum angibt, der als Referenzpunkt oder Basis für die Berechnung der aktuellen Pose des Betrachters verwendet werden soll.

### Rückgabewert

Ein [`XRViewerPose`](/de/docs/Web/API/XRViewerPose), das die Position und Orientierung des Betrachters relativ zum angegebenen Referenzraum beschreibt.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `getViewerPose()` nicht im Kontext eines Rückrufs an die [`XRSession.requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame)-Session aufgerufen wurde.

## Beispiele

In dieser Rückruffunktion für [`requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame) wird die [`XRViewerPose`](/de/docs/Web/API/XRViewerPose), die den Blickpunkt des Betrachters auf die Welt beschreibt, durch einen Aufruf von `getViewerPose()` auf dem [`XRFrame`](/de/docs/Web/API/XRFrame), der in den Rückruf übergeben wurde, erhalten.

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
