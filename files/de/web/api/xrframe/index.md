---
title: XRFrame
slug: Web/API/XRFrame
l10n:
  sourceCommit: b5b33acd44e7bb9c7be2efc75ba9a04b8bf8b2b2
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}{{SeeCompatTable}}

Ein [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) **`XRFrame`** Objekt wird in die [`requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame) Callback-Funktion übergeben und bietet Zugriff auf die Informationen, die benötigt werden, um einen einzelnen Animationsframe für eine [`XRSession`](/de/docs/Web/API/XRSession) zu rendern, die eine VR- oder AR-Szene beschreibt. Ereignisse, die den Tracking-Zustand von Objekten kommunizieren, liefern ebenfalls eine `XRFrame` Referenz als Teil ihrer Struktur.

Zusätzlich zur Bereitstellung einer Referenz zur [`XRSession`](/de/docs/Web/API/XRSession), für die dieser Frame gerendert werden soll, wird die Methode [`getViewerPose()`](/de/docs/Web/API/XRFrame/getViewerPose) bereitgestellt, um die [`XRViewerPose`](/de/docs/Web/API/XRViewerPose) zu erhalten, die die Position und Orientierung des Betrachters im Raum beschreibt. Mit [`getPose()`](/de/docs/Web/API/XRFrame/getPose) kann eine [`XRPose`](/de/docs/Web/API/XRPose) erstellt werden, die die relative Position eines [`XRSpace`](/de/docs/Web/API/XRSpace) relativ zu einem anderen beschreibt.

## Instanz-Eigenschaften

- [`session`](/de/docs/Web/API/XRFrame/session) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Die [`XRSession`](/de/docs/Web/API/XRSession), für die dieses `XRFrame` die Tracking-Details für alle Objekte beschreibt. Informationen über ein spezifisches Objekt können durch Aufrufen einer der Methoden auf dem Objekt erhalten werden.
- [`trackedAnchors`](/de/docs/Web/API/XRFrame/trackedAnchors) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein [`XRAnchorSet`](/de/docs/Web/API/XRAnchorSet), das alle im Frame noch verfolgten Anker enthält.

## Instanz-Methoden

- [`createAnchor()`](/de/docs/Web/API/XRFrame/createAnchor) {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das zu einem frei schwebenden [`XRAnchor`](/de/docs/Web/API/XRAnchor) Objekt aufgelöst wird.
- [`fillJointRadii()`](/de/docs/Web/API/XRFrame/fillJointRadii) {{Experimental_Inline}}
  - : Füllt ein {{jsxref("Float32Array")}} mit Radien für eine Liste von Handgelenkräumen. Gibt `true` zurück, wenn es für alle Räume erfolgreich ist.
- [`fillPoses()`](/de/docs/Web/API/XRFrame/fillPoses) {{Experimental_Inline}}
  - : Füllt ein {{jsxref("Float32Array")}} mit den Matrizen der Posen relativ zu einem gegebenen Basisraum. Gibt `true` zurück, wenn alle Räume eine gültige Pose haben.
- [`getDepthInformation()`](/de/docs/Web/API/XRFrame/getDepthInformation) {{Experimental_Inline}}
  - : Gibt ein [`XRCPUDepthInformation`](/de/docs/Web/API/XRCPUDepthInformation) Objekt zurück, das CPU-Tiefeninformationen für den Frame enthält.
- [`getHitTestResults()`](/de/docs/Web/API/XRFrame/getHitTestResults) {{Experimental_Inline}}
  - : Gibt ein Array von [`XRHitTestResult`](/de/docs/Web/API/XRHitTestResult) Objekten zurück, die Hit-Test-Ergebnisse für eine gegebene [`XRHitTestSource`](/de/docs/Web/API/XRHitTestSource) enthalten.
- [`getHitTestResultsForTransientInput()`](/de/docs/Web/API/XRFrame/getHitTestResultsForTransientInput) {{Experimental_Inline}}
  - : Gibt ein Array von [`XRTransientInputHitTestResult`](/de/docs/Web/API/XRTransientInputHitTestResult) Objekten zurück, die Hit-Test-Ergebnisse für eine gegebene [`XRTransientInputHitTestSource`](/de/docs/Web/API/XRTransientInputHitTestSource) enthalten.
- [`getJointPose()`](/de/docs/Web/API/XRFrame/getJointPose) {{Experimental_Inline}}
  - : Gibt ein [`XRJointPose`](/de/docs/Web/API/XRJointPose) Objekt zurück, das die Pose eines Handgelenks (siehe [`XRHand`](/de/docs/Web/API/XRHand)) relativ zu einem gegebenen Basisraum bereitstellt.
- [`getLightEstimate()`](/de/docs/Web/API/XRFrame/getLightEstimate) {{Experimental_Inline}}
  - : Gibt ein [`XRLightEstimate`](/de/docs/Web/API/XRLightEstimate) Objekt zurück, das geschätzte Beleuchtungswerte für eine [`XRLightProbe`](/de/docs/Web/API/XRLightProbe) enthält.
- [`getPose()`](/de/docs/Web/API/XRFrame/getPose) {{Experimental_Inline}}
  - : Gibt ein [`XRPose`](/de/docs/Web/API/XRPose) Objekt zurück, das die räumliche Beziehung zwischen den beiden angegebenen [`XRSpace`](/de/docs/Web/API/XRSpace) Objekten darstellt.
- [`getViewerPose()`](/de/docs/Web/API/XRFrame/getViewerPose) {{Experimental_Inline}}
  - : Gibt eine [`XRViewerPose`](/de/docs/Web/API/XRViewerPose) zurück, die die Position und Orientierung des Betrachters in einem gegebenen [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace) beschreibt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebXR Device API](/de/docs/Web/API/WebXR_Device_API)
- [Räumliches Tracking in WebXR](/de/docs/Web/API/WebXR_Device_API/Spatial_tracking)
