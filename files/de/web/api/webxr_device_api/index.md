---
title: WebXR Device API
slug: Web/API/WebXR_Device_API
l10n:
  sourceCommit: 15e12ff9faca3923ffb811d601ab589f4b2918e0
---

{{DefaultAPISidebar("WebXR Device API")}}{{SecureContext_Header}}{{SeeCompatTable}}

**WebXR** ist eine Gruppe von Standards, die zusammen genutzt werden, um das Rendern von 3D-Szenen auf Hardware zu unterstützen, die für die Präsentation virtueller Welten (**Virtual Reality** oder **VR**) entwickelt wurde, oder um grafische Bilder zur realen Welt hinzuzufügen (**Augmented Reality** oder **AR**). Die **WebXR-Geräte-API** implementiert den Kern des WebXR-Feature-Sets, verwaltet die Auswahl der Ausgabegeräte, rendert die 3D-Szene auf das gewählte Gerät mit der entsprechenden Bildrate und verwaltet Bewegungsvektoren, die unter Verwendung von Eingabesteuerungen erstellt werden.

WebXR-kompatible Geräte umfassen vollständig immersive 3D-Headsets mit Bewegungs- und Orientierungserfassung, Brillen, die Grafiken über die reale Welt-Szene legen, die durch die Gläser hindurchgeht, sowie Handys, die die Realität erweitern, indem sie die Welt mit einer Kamera erfassen und diese Szene mit computergenerierten Bildern ergänzen.

Um diese Dinge zu erreichen, bietet die WebXR-Geräte-API die folgenden Hauptfunktionen:

- Finden von kompatiblen VR- oder AR-Ausgabegeräten
- Rendern einer 3D-Szene auf das Gerät mit einer angemessenen Bildrate
- (Optional) Spiegelung der Ausgabe auf ein 2D-Display
- Erstellen von Vektoren, die die Bewegungen von Eingabesteuerungen darstellen

Auf der grundlegendsten Ebene wird eine Szene in 3D präsentiert, indem die Perspektive berechnet wird, die auf die Szene angewendet werden soll, um sie aus der Sicht jedes Benutzerauges zu rendern, indem die Position jedes Auges berechnet wird und die Szene von dieser Position aus gerendert wird, in die Richtung schauend, die der Benutzer gerade ansieht. Jedes dieser beiden Bilder wird in ein einzelnes Framebuffer gerendert, wobei das gerenderte Bild des linken Auges auf der linken Seite und die Ansicht des rechten Auges in der rechten Hälfte des Buffers gerendert ist. Sobald die Perspektiven der Szene für beide Augen gerendert wurden, wird das resultierende Framebuffer an das WebXR-Gerät geliefert, um es dem Benutzer über sein Headset oder ein anderes geeignetes Anzeigegerät zu präsentieren.

Während die ältere [WebVR-API](/de/docs/Web/API/WebVR_API) ausschließlich zur Unterstützung von Virtual Reality (VR) entwickelt wurde, bietet WebXR Unterstützung sowohl für VR als auch für Augmented Reality (AR) im Web. Die Unterstützung für AR-Funktionalität wird durch das WebXR Augmented Reality Module hinzugefügt.

Ein typisches XR-Gerät kann entweder 3 oder 6 Freiheitsgrade haben und möglicherweise oder möglicherweise nicht über einen externen Positionssensor verfügen.

Die Ausrüstung kann auch ein Beschleunigungsmesser, Barometer oder andere Sensoren enthalten, die genutzt werden, um zu erkennen, wann sich der Benutzer durch den Raum bewegt, seinen Kopf dreht oder ähnliches.

## WebXR-Referenzdokumente

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
- [`XRVisibilityMaskChangeEvent`](/de/docs/Web/API/XRVisibilityMaskChangeEvent)

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

### Tiefenmessung

- [`XRDepthInformation`](/de/docs/Web/API/XRDepthInformation)
- [`XRCPUDepthInformation`](/de/docs/Web/API/XRCPUDepthInformation)
- [`XRWebGLDepthInformation`](/de/docs/Web/API/XRWebGLDepthInformation)

### Treffererkennung

- [`XRHitTestSource`](/de/docs/Web/API/XRHitTestSource)
- [`XRTransientInputHitTestSource`](/de/docs/Web/API/XRTransientInputHitTestSource)
- [`XRHitTestResult`](/de/docs/Web/API/XRHitTestResult)
- [`XRTransientInputHitTestResult`](/de/docs/Web/API/XRTransientInputHitTestResult)
- [`XRRay`](/de/docs/Web/API/XRRay)

### Beleuchtungsschätzung

- [`XRLightEstimate`](/de/docs/Web/API/XRLightEstimate)
- [`XRLightProbe`](/de/docs/Web/API/XRLightProbe)

</div>

## Leitfäden und Tutorials

Die folgenden Leitfäden und Tutorials sind eine großartige Ressource, um zu lernen, wie Sie WebXR und die zugrunde liegenden 3D- sowie VR/AR-Grafik-Konzepte verstehen können.

<div class="index">

### Grundlagen und Grundlagen

- [Grundlagen von WebXR](/de/docs/Web/API/WebXR_Device_API/Fundamentals)
- [Matrix-Mathematik für das Web](/de/docs/Web/API/WebGL_API/Matrix_math_for_the_web)
- [Lebenszyklus einer WebXR-Anwendung](/de/docs/Web/API/WebXR_Device_API/Lifecycle)

### Erstellung einer Mixed-Reality-Erfahrung

- [Starten und Beenden einer WebXR-Sitzung](/de/docs/Web/API/WebXR_Device_API/Startup_and_shutdown)
- [Geometrie und Referenzräume in WebXR](/de/docs/Web/API/WebXR_Device_API/Geometry)
- [Räumliche Verfolgung in WebXR](/de/docs/Web/API/WebXR_Device_API/Spatial_tracking)
- [Rendering und der WebXR-Frame-Animations-Callback](/de/docs/Web/API/WebXR_Device_API/Rendering)
- [Ansichten und Betrachter: Simulieren von Kameras in WebXR](/de/docs/Web/API/WebXR_Device_API/Cameras)
- [Eine Perspektive Retrospektive für WebXR-Entwickler](/de/docs/Web/API/WebXR_Device_API/Perspective)
- [Beleuchtung einer WebXR-Umgebung](/de/docs/Web/API/WebXR_Device_API/Lighting)
- [Verwendung von begrenzten Referenzräumen](/de/docs/Web/API/WebXR_Device_API/Bounded_reference_spaces)

### Interaktiv machen

- [Bewegung, Orientierung und Bewegung: Ein WebXR-Beispiel](/de/docs/Web/API/WebXR_Device_API/Movement_and_motion)
- [Eingaben und Eingabequellen](/de/docs/Web/API/WebXR_Device_API/Inputs)
- [Zielerfassung und Treffererkennung](/de/docs/Web/API/WebXR_Device_API/Targeting)

### Leistung und Sicherheit

- [WebXR Leistungsleitfaden](/de/docs/Web/API/WebXR_Device_API/Performance)
- [Berechtigungen und Sicherheit für WebXR](/de/docs/Web/API/WebXR_Device_API/Permissions_and_security)

</div>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Grafiken zeichnen](/de/docs/Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics)
- [WebGL-API](/de/docs/Web/API/WebGL_API): Beschleunigte 2D- und 3D-Grafiken im Web
- [Canvas-API](/de/docs/Web/API/Canvas_API): 2D-Zeichnen für das Web
- [Canvas-Tutorial](/de/docs/Web/API/Canvas_API/Tutorial)
