---
title: XRFrame
slug: Web/API/XRFrame
l10n:
  sourceCommit: b5b33acd44e7bb9c7be2efc75ba9a04b8bf8b2b2
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}{{SeeCompatTable}}

Ein Objekt des [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) **`XRFrame`** wird an die Rückruffunktion von {{domxref("XRSession.requestAnimationFrame", "requestAnimationFrame()")}} übergeben und bietet Zugriff auf die Informationen, die benötigt werden, um einen einzelnen Animationsframe für eine {{domxref("XRSession")}} zu rendern, die eine VR- oder AR-Szene beschreibt. Ereignisse, die den Tracking-Status von Objekten kommunizieren, liefern ebenfalls einen `XRFrame`-Verweis als Bestandteil ihrer Struktur.

Zusätzlich zu einem Verweis auf die {{domxref("XRSession")}}, für die dieser Frame gerendert werden soll, stellt die Methode {{domxref("XRFrame.getViewerPose", "getViewerPose()")}} die {{domxref("XRViewerPose")}} zur Verfügung, die die Position und Orientierung des Betrachters im Raum beschreibt. Mit {{domxref("XRFrame.getPose", "getPose()")}} kann eine {{domxref("XRPose")}} erstellt werden, die die relative Position eines {{domxref("XRSpace")}} zu einem anderen beschreibt.

## Instanzeigenschaften

- {{DOMxRef("XRFrame.session", "session")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Die {{DOMxRef("XRSession")}}, für die dieses `XRFrame` die Tracking-Details aller Objekte beschreibt. Die Informationen über ein bestimmtes Objekt können durch Aufrufen einer der Methoden auf dem Objekt erhalten werden.
- {{DOMxRef("XRFrame.trackedAnchors", "trackedAnchors")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein {{domxref("XRAnchorSet")}}, das alle Anker enthält, die im Frame noch verfolgt werden.

## Instanzmethoden

- {{domxref("XRFrame.createAnchor()", "createAnchor()")}} {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das zu einem freischwebenden {{domxref("XRAnchor")}}-Objekt aufgelöst wird.
- {{domxref("XRFrame.fillJointRadii()", "fillJointRadii()")}} {{Experimental_Inline}}
  - : Füllt ein {{jsxref("Float32Array")}} mit Radien für eine Liste von Handgelenkraumen. Gibt `true` zurück, wenn erfolgreich für alle Räume.
- {{domxref("XRFrame.fillPoses()", "fillPoses()")}} {{Experimental_Inline}}
  - : Füllt ein {{jsxref("Float32Array")}} mit den Matrizen der Posen, relativ zu einem gegebenen Basisraum. Gibt `true` zurück, wenn alle Räume eine gültige Pose haben.
- {{domxref("XRFrame.getDepthInformation()", "getDepthInformation()")}} {{Experimental_Inline}}
  - : Gibt ein {{domxref("XRCPUDepthInformation")}}-Objekt zurück, das CPU-Tiefeninformationen für den Frame enthält.
- {{domxref("XRFrame.getHitTestResults()", "getHitTestResults()")}} {{Experimental_Inline}}
  - : Gibt ein Array von {{domxref("XRHitTestResult")}}-Objekten zurück, die Hit-Test-Ergebnisse für eine bestimmte {{domxref("XRHitTestSource")}} enthalten.
- {{domxref("XRFrame.getHitTestResultsForTransientInput()", "getHitTestResultsForTransientInput()")}} {{Experimental_Inline}}
  - : Gibt ein Array von {{domxref("XRTransientInputHitTestResult")}}-Objekten zurück, die Hit-Test-Ergebnisse für eine bestimmte {{domxref("XRTransientInputHitTestSource")}} enthalten.
- {{domxref("XRFrame.getJointPose()", "getJointPose()")}} {{Experimental_Inline}}
  - : Gibt ein {{domxref("XRJointPose")}}-Objekt zurück, das die Pose eines Handgelenks (siehe {{domxref("XRHand")}}) relativ zu einem gegebenen Basisraum bereitstellt.
- {{domxref("XRFrame.getLightEstimate()", "getLightEstimate()")}} {{Experimental_Inline}}
  - : Gibt ein {{domxref("XRLightEstimate")}}-Objekt zurück, das geschätzte Lichtwerte für eine {{domxref("XRLightProbe")}} enthält.
- {{DOMxRef("XRFrame.getPose", "getPose()")}} {{Experimental_Inline}}
  - : Gibt ein {{domxref("XRPose")}}-Objekt zurück, das die räumliche Beziehung zwischen den beiden angegebenen {{domxref("XRSpace")}}-Objekten darstellt.
- {{DOMxRef("XRFrame.getViewerPose", "getViewerPose()")}} {{Experimental_Inline}}
  - : Gibt eine {{domxref("XRViewerPose")}} zurück, die die Position und Orientierung des Betrachters in einem gegebenen {{domxref("XRReferenceSpace")}} beschreibt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebXR Device API](/de/docs/Web/API/WebXR_Device_API)
- [Räumliches Tracking in WebXR](/de/docs/Web/API/WebXR_Device_API/Spatial_tracking)
