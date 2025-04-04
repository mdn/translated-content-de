---
title: WebXR Device API
slug: Web/API/WebXR_Device_API
l10n:
  sourceCommit: 832bcb292fdf15ce9ba842f9a5025b5593454a65
---

{{DefaultAPISidebar("WebXR Device API")}}{{SecureContext_Header}}{{SeeCompatTable}}

**WebXR** ist eine Gruppe von Standards, die zusammen verwendet werden, um das Rendern von 3D-Szenen auf Hardware zu unterstützen, die für die Präsentation virtueller Welten (**Virtual Reality** oder **VR**) oder für das Hinzufügen grafischer Bilder zur realen Welt (**Augmented Reality** oder **AR**) entwickelt wurde. Die **WebXR Device API** implementiert den Kern des WebXR-Funktionssatzes, verwaltet die Auswahl der Ausgabegeräte, rendert die 3D-Szene auf das gewählte Gerät mit der geeigneten Bildrate und verwaltet Bewegungsvektoren, die mithilfe von Eingabesteuerungen erstellt werden.

WebXR-kompatible Geräte umfassen vollständig immersive 3D-Headsets mit Bewegungs- und Orientierungstracking, Brillen, die Grafiken über die reale Welt zeigen, die durch die Rahmen hindurchgehen, und tragbare Mobiltelefone, die die Realität erweitern, indem sie die Welt mit einer Kamera erfassen und die Szene mit computergenerierten Bildern erweitern.

Um diese Dinge zu erreichen, bietet die WebXR Device API die folgenden Hauptfunktionen:

- Finden von kompatiblen VR- oder AR-Ausgabegeräten
- Rendern einer 3D-Szene auf das Gerät mit einer geeigneten Bildrate
- (Optional) Spiegeln der Ausgabe auf ein 2D-Display
- Erstellen von Vektoren, die die Bewegungen von Eingabesteuerungen repräsentieren

Auf der grundlegendsten Ebene wird eine Szene in 3D präsentiert, indem die Perspektive berechnet wird, die auf die Szene angewendet werden muss, um sie aus der Sicht jedes Benutzerauges zu rendern, indem die Position jedes Auges berechnet und die Szene von dieser Position aus gerendert wird, wobei in die Richtung geblickt wird, in die der Benutzer gerade schaut. Jedes dieser beiden Bilder wird in einen einzigen Framebuffer gerendert, mit dem gerenderten Bild des linken Auges auf der linken Seite und dem Standpunkt des rechten Auges auf der rechten Hälfte des Puffers. Sobald die Perspektiven beider Augen auf die Szene gerendert wurden, wird der resultierende Framebuffer dem WebXR-Gerät übergeben, um ihn dem Benutzer durch sein Headset oder ein anderes geeignetes Anzeigegerät zu präsentieren.

Während die ältere [WebVR API](/de/docs/Web/API/WebVR_API) ausschließlich zur Unterstützung von Virtual Reality (VR) entwickelt wurde, bietet WebXR Unterstützung sowohl für VR als auch für Augmented Reality (AR) im Web. Die Unterstützung für AR-Funktionen wird durch das WebXR Augmented Reality Module hinzugefügt.

Ein typisches XR-Gerät kann entweder 3 oder 6 Freiheitsgrade haben und kann mit oder ohne externen Positionssensor ausgestattet sein.

Das Equipment kann auch einen Beschleunigungsmesser, ein Barometer oder andere Sensoren enthalten, die benutzt werden, um zu erkennen, wann der Benutzer sich durch den Raum bewegt, seinen Kopf dreht oder Ähnliches.

## WebXR-Referenzdokumentation

<div class="index">

### Initialisierung

- [`navigator.xr`](/de/docs/Web/API/Navigator/xr)
- [`XRSystem`](/de/docs/Web/API/XRSystem)
- [`XRPermissionStatus`](/de/docs/Web/API/XRPermissionStatus)
- `Permissions-Policy`: [`xr-spatial-tracking`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/xr-spatial-tracking)

### Sitzung

- [`XRSession`](/de/docs/Web/API/XRSession)
- [`XRSessionEvent`](/de/docs/Web/API/XRSessionEvent)
- [`XRRenderState`](/de/docs/Web/API/XRRenderState)

### Frame-Schleife

- [`XRFrame`](/de/docs/Web/API/XRFrame)

### Räume

- [`XRSpace`](/de/docs/Web/API/XRSpace)
- [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace)
- [`XRBoundedReferenceSpace`](/de/docs/Web/API/XRBoundedReferenceSpace)
- [`XRReferenceSpaceEvent`](/de/docs/Web/API/XRReferenceSpaceEvent)
- [`XRJointSpace`](/de/docs/Web/API/XRJointSpace)

### Ansichten

- [`XRView`](/de/docs/Web/API/XRView)
- [`XRViewport`](/de/docs/Web/API/XRViewport)

### Geometrische Primitive

- [`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform)

### Pose

- [`XRPose`](/de/docs/Web/API/XRPose)
- [`XRJointPose`](/de/docs/Web/API/XRJointPose)
- [`XRViewerPose`](/de/docs/Web/API/XRViewerPose)

### Eingabe

- [`XRHand`](/de/docs/Web/API/XRHand)
- [`XRInputSource`](/de/docs/Web/API/XRInputSource)
- [`XRInputSourceArray`](/de/docs/Web/API/XRInputSourceArray)
- [`XRInputSourceEvent`](/de/docs/Web/API/XRInputSourceEvent)
- [`XRInputSourcesChangeEvent`](/de/docs/Web/API/XRInputSourcesChangeEvent)

### Ebenen

- [`XRLayer`](/de/docs/Web/API/XRLayer)
- [`XRLayerEvent`](/de/docs/Web/API/XRLayerEvent)
- [`XRCompositionLayer`](/de/docs/Web/API/XRCompositionLayer)
- [`XRCubeLayer`](/de/docs/Web/API/XRCubeLayer)
- [`XRCylinderLayer`](/de/docs/Web/API/XRCylinderLayer)
- [`XREquirectLayer`](/de/docs/Web/API/XREquirectLayer)
- [`XRProjectionLayer`](/de/docs/Web/API/XRProjectionLayer)
- [`XRQuadLayer`](/de/docs/Web/API/XRQuadLayer)
- [`XRMediaBinding`](/de/docs/Web/API/XRMediaBinding)

### WebGL-Bindung

- [`XRWebGLBinding`](/de/docs/Web/API/XRWebGLBinding)
- [`WebGLRenderingContext.makeXRCompatible()`](/de/docs/Web/API/WebGLRenderingContext/makeXRCompatible)
- [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer)
- [`XRSubImage`](/de/docs/Web/API/XRSubImage)
- [`XRWebGLSubImage`](/de/docs/Web/API/XRWebGLSubImage)

### Anker

- [`XRAnchor`](/de/docs/Web/API/XRAnchor)
- [`XRAnchorSet`](/de/docs/Web/API/XRAnchorSet)

### Tiefenerfassung

- [`XRDepthInformation`](/de/docs/Web/API/XRDepthInformation)
- [`XRCPUDepthInformation`](/de/docs/Web/API/XRCPUDepthInformation)
- [`XRWebGLDepthInformation`](/de/docs/Web/API/XRWebGLDepthInformation)

### Trefferüberprüfung

- [`XRHitTestSource`](/de/docs/Web/API/XRHitTestSource)
- [`XRTransientInputHitTestSource`](/de/docs/Web/API/XRTransientInputHitTestSource)
- [`XRHitTestResult`](/de/docs/Web/API/XRHitTestResult)
- [`XRTransientInputHitTestResult`](/de/docs/Web/API/XRTransientInputHitTestResult)
- [`XRRay`](/de/docs/Web/API/XRRay)

### Schätzung der Beleuchtung

- [`XRLightEstimate`](/de/docs/Web/API/XRLightEstimate)
- [`XRLightProbe`](/de/docs/Web/API/XRLightProbe)

</div>

## Leitfäden und Tutorials

Die folgenden Leitfäden und Tutorials sind großartige Ressourcen, um zu lernen, wie man WebXR und die zugrunde liegenden Konzepte von 3D- und VR/AR-Grafiken versteht.

<div class="index">

### Grundlagen und Grundlagenwissen

- [Grundlagen von WebXR](/de/docs/Web/API/WebXR_Device_API/Fundamentals)
- [Matrixmathematik für das Web](/de/docs/Web/API/WebGL_API/Matrix_math_for_the_web)
- [Lebenszyklus der WebXR-Anwendung](/de/docs/Web/API/WebXR_Device_API/Lifecycle)

### Erstellen einer Mixed-Reality-Erfahrung

- [Starten und Beenden einer WebXR-Sitzung](/de/docs/Web/API/WebXR_Device_API/Startup_and_shutdown)
- [Geometrie und Referenzräume in WebXR](/de/docs/Web/API/WebXR_Device_API/Geometry)
- [Raumverfolgung in WebXR](/de/docs/Web/API/WebXR_Device_API/Spatial_tracking)
- [Rendering und der WebXR-Frame-Animationsrückruf](/de/docs/Web/API/WebXR_Device_API/Rendering)
- [Perspektiven und Betrachter: Simulieren von Kameras in WebXR](/de/docs/Web/API/WebXR_Device_API/Cameras)
- [Eine perspektivische Retrospektive für WebXR-Entwickler](/de/docs/Web/API/WebXR_Device_API/Perspective)
- [Beleuchtung einer WebXR-Umgebung](/de/docs/Web/API/WebXR_Device_API/Lighting)
- [Verwendung von begrenzten Referenzräumen](/de/docs/Web/API/WebXR_Device_API/Bounded_reference_spaces)

### Interaktiv gestalten

- [Bewegung, Orientierung und Bewegung: Ein WebXR-Beispiel](/de/docs/Web/API/WebXR_Device_API/Movement_and_motion)
- [Eingaben und Eingabequellen](/de/docs/Web/API/WebXR_Device_API/Inputs)
- [Zielen und Treffererkennung](/de/docs/Web/API/WebXR_Device_API/Targeting)

### Leistung und Sicherheit

- [WebXR-Leistungsleitfaden](/de/docs/Web/API/WebXR_Device_API/Performance)
- [Berechtigungen und Sicherheit für WebXR](/de/docs/Web/API/WebXR_Device_API/Permissions_and_security)

</div>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Grafiken zeichnen](/de/docs/Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics)
- [WebGL API](/de/docs/Web/API/WebGL_API): Beschleunigte 2D- und 3D-Grafiken im Web
- [Canvas API](/de/docs/Web/API/Canvas_API): 2D-Zeichnen für das Web
- [Canvas-Tutorial](/de/docs/Web/API/Canvas_API/Tutorial)
