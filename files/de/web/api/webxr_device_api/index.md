---
title: WebXR Device API
slug: Web/API/WebXR_Device_API
l10n:
  sourceCommit: b065c09b79d18abf0f04778c9307e1c312b8c6f9
---

{{DefaultAPISidebar("WebXR Device API")}}{{SecureContext_Header}}{{SeeCompatTable}}

**WebXR** ist eine Gruppe von Standards, die verwendet werden, um das Rendern von 3D-Szenen auf Hardware zu unterstützen, die für die Darstellung virtueller Welten (**Virtual Reality** oder **VR**) entwickelt wurde, oder um grafische Bilder zur realen Welt hinzuzufügen (**Augmented Reality** oder **AR**). Die **WebXR Device API** implementiert den Kern der WebXR-Funktionssammlung, verwaltet die Auswahl von Ausgabegeräten, rendert die 3D-Szene auf das gewählte Gerät mit der geeigneten Bildrate und verwaltet Bewegungsvektoren, die mit Hilfe von Eingabesteuerungen erstellt werden.

WebXR-kompatible Geräte umfassen vollständig immersive 3D-Headsets mit Bewegungs- und Orientierungserfassung, Brillen, die Grafik über der durch die Gläser sichtbaren Szene überlagern, und Handys, die durch Aufnahme der Welt mit einer Kamera die Realität erweitern und diese Szene mit computererzeugten Bildern ergänzen.

Um diese Dinge zu erreichen, bietet die WebXR Device API die folgenden Hauptfunktionen:

- Finden von kompatiblen VR- oder AR-Ausgabegeräten
- Rendern einer 3D-Szene auf das Gerät mit einer geeigneten Bildrate
- (Optional) Spiegeln der Ausgabe auf ein 2D-Display
- Erstellen von Vektoren, die die Bewegungen der Eingabesteuerungen darstellen

Auf der grundlegendsten Ebene wird eine Szene in 3D präsentiert, indem die Perspektive berechnet wird, die auf die Szene angewendet werden soll, um sie aus dem Blickwinkel jedes Auges des Benutzers zu rendern. Das geschieht durch Berechnung der Position jedes Auges und Rendern der Szene von dieser Position aus, in Blickrichtung des Benutzers. Jeder dieser beiden Renderings wird in ein Einzelbild gepuffert, wobei das Bild des linken Auges auf der linken und das Bild des rechten Auges auf der rechten Hälfte des Puffers dargestellt wird. Sobald die Perspektiven beider Augen der Szene gerendert wurden, wird der resultierende Framebuffer an das WebXR-Gerät gesendet, um dem Benutzer über das Headset oder ein anderes geeignetes Anzeigegerät präsentiert zu werden.

Während die ältere [WebVR API](/de/docs/Web/API/WebVR_API) ausschließlich zur Unterstützung von Virtual Reality (VR) entwickelt wurde, bietet WebXR Unterstützung sowohl für VR als auch für Augmented Reality (AR) im Web. Die Unterstützung von AR-Funktionalitäten wird durch das WebXR Augmented Reality Modul hinzugefügt.

Ein typisches XR-Gerät kann entweder 3 oder 6 Freiheitsgrade haben und verfügt möglicherweise über keinen oder einen externen Positionssensor.

Die Ausrüstung kann auch einen Beschleunigungsmesser, ein Barometer oder andere Sensoren umfassen, die verwendet werden, um zu erkennen, wann der Benutzer sich durch den Raum bewegt, den Kopf dreht oder Ähnliches.

## WebXR-Referenzdokumente

<div class="index">

### Initialisierung

- [`navigator.xr`](/de/docs/Web/API/Navigator/xr)
- [`XRSystem`](/de/docs/Web/API/XRSystem)
- [`XRPermissionStatus`](/de/docs/Web/API/XRPermissionStatus)
- `Permissions-Policy`: [`xr-spatial-tracking`](/de/docs/Web/HTTP/Headers/Permissions-Policy/xr-spatial-tracking)

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

### Schichten

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

### Tiefensensorik

- [`XRDepthInformation`](/de/docs/Web/API/XRDepthInformation)
- [`XRCPUDepthInformation`](/de/docs/Web/API/XRCPUDepthInformation)
- [`XRWebGLDepthInformation`](/de/docs/Web/API/XRWebGLDepthInformation)

### Treffererkennung

- [`XRHitTestSource`](/de/docs/Web/API/XRHitTestSource)
- [`XRTransientInputHitTestSource`](/de/docs/Web/API/XRTransientInputHitTestSource)
- [`XRHitTestResult`](/de/docs/Web/API/XRHitTestResult)
- [`XRTransientInputHitTestResult`](/de/docs/Web/API/XRTransientInputHitTestResult)
- [`XRRay`](/de/docs/Web/API/XRRay)

### Lichtschätzung

- [`XRLightEstimate`](/de/docs/Web/API/XRLightEstimate)
- [`XRLightProbe`](/de/docs/Web/API/XRLightProbe)

</div>

## Leitfäden und Tutorials

Die folgenden Leitfäden und Tutorials sind eine hervorragende Ressource, um zu lernen, wie man WebXR und die zugrunde liegenden 3D- sowie VR/AR-Grafikkonzepte versteht.

<div class="index">

### Grundlagen und Basics

- [Grundlagen von WebXR](/de/docs/Web/API/WebXR_Device_API/Fundamentals)
- [Matrix-Mathematik für das Web](/de/docs/Web/API/WebGL_API/Matrix_math_for_the_web)
- [WebXR-Anwendungslebenszyklus](/de/docs/Web/API/WebXR_Device_API/Lifecycle)

### Eine Mixed-Reality-Erfahrung schaffen

- [Starten und Beenden einer WebXR-Sitzung](/de/docs/Web/API/WebXR_Device_API/Startup_and_shutdown)
- [Geometrie und Referenzräume in WebXR](/de/docs/Web/API/WebXR_Device_API/Geometry)
- [Räumliches Tracking in WebXR](/de/docs/Web/API/WebXR_Device_API/Spatial_tracking)
- [Rendern und WebXR-Frame-Animationsrückruf](/de/docs/Web/API/WebXR_Device_API/Rendering)
- [Blickpunkte und Betrachter: Kamerasimulation in WebXR](/de/docs/Web/API/WebXR_Device_API/Cameras)
- [Ein Perspektiven-Retrospektive für WebXR-Entwickler](/de/docs/Web/API/WebXR_Device_API/Perspective)
- [Beleuchtung einer WebXR-Umgebung](/de/docs/Web/API/WebXR_Device_API/Lighting)
- [Verwendung begrenzter Referenzräume](/de/docs/Web/API/WebXR_Device_API/Bounded_reference_spaces)

### Interaktivität erhöhen

- [Bewegung, Orientierung und Bewegung: Ein WebXR-Beispiel](/de/docs/Web/API/WebXR_Device_API/Movement_and_motion)
- [Eingaben und Eingabequellen](/de/docs/Web/API/WebXR_Device_API/Inputs)
- [Zielen und Treffererkennung](/de/docs/Web/API/WebXR_Device_API/Targeting)

### Leistung und Sicherheit

- [WebXR-Leitfaden zur Leistung](/de/docs/Web/API/WebXR_Device_API/Performance)
- [Berechtigungen und Sicherheit für WebXR](/de/docs/Web/API/WebXR_Device_API/Permissions_and_security)

</div>

## Spezifikationen

<table>
  <thead>
    <tr>
      <th>Specification</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="https://immersive-web.github.io/webxr/"><strong>WebXR Device API</strong></a>
      (<a href="https://github.com/immersive-web/webxr">Source</a>,
       <a href="https://github.com/immersive-web/webxr/issues">Issues</a>,
       <a href="https://github.com/immersive-web/webxr/blob/master/explainer.md">Explainer</a>)</td>
    </tr>
    <tr>
      <td><a href="https://immersive-web.github.io/anchors/"><strong>WebXR Anchors Module</strong></a>
      (<a href="https://github.com/immersive-web/anchors">Source</a>,
       <a href="https://github.com/immersive-web/anchors/issues">Issues</a>,
       <a href="https://github.com/immersive-web/anchors/blob/master/explainer.md">Explainer</a>)</td>
    </tr>
    <tr>
      <td><a href="https://immersive-web.github.io/webxr-ar-module/"><strong>WebXR Augmented Reality Module</strong></a>
      (<a href="https://github.com/immersive-web/webxr-ar-module">Source</a>,
       <a href="https://github.com/immersive-web/webxr-ar-module/issues">Issues</a>,
       <a href="https://github.com/immersive-web/webxr-ar-module/blob/master/ar-module-explainer.md">Explainer</a>)</td>
    </tr>
    <tr>
      <td><a href="https://immersive-web.github.io/depth-sensing/"><strong>WebXR Depth Sensing Module</strong></a>
      (<a href="https://github.com/immersive-web/depth-sensing">Source</a>,
       <a href="https://github.com/immersive-web/depth-sensing/issues">Issues</a>,
       <a href="https://github.com/immersive-web/depth-sensing/blob/main/explainer.md">Explainer</a>)</td>
    </tr>
    <tr>
      <td><a href="https://immersive-web.github.io/dom-overlays/"><strong>WebXR DOM Overlays Module</strong></a>
      (<a href="https://github.com/immersive-web/dom-overlays">Source</a>,
       <a href="https://github.com/immersive-web/dom-overlays/issues">Issues</a>,
       <a href="https://github.com/immersive-web/dom-overlays/blob/master/explainer.md">Explainer</a>)</td>
    </tr>
    <tr>
      <td><a href="https://immersive-web.github.io/webxr-gamepads-module/"><strong>WebXR Gamepads Module</strong></a>
      (<a href="https://github.com/immersive-web/webxr-gamepads-module">Source</a>,
       <a href="https://github.com/immersive-web/webxr-gamepads-module/issues">Issues</a>,
       <a href="https://github.com/immersive-web/webxr-gamepads-module/blob/master/gamepads-module-explainer.md">Explainer</a>)</td>
    </tr>
    <tr>
      <td><a href="https://immersive-web.github.io/webxr-hand-input/"><strong>WebXR Hand Input Module</strong></a>
      (<a href="https://github.com/immersive-web/webxr-hand-input">Source</a>,
       <a href="https://github.com/immersive-web/webxr-hand-input/issues">Issues</a>,
       <a href="https://github.com/immersive-web/webxr-hand-input/blob/master/explainer.md">Explainer</a>)</td>
    </tr>
    <tr>
      <td><a href="https://immersive-web.github.io/hit-test/"><strong>WebXR Hit Test Module</strong></a>
      (<a href="https://github.com/immersive-web/hit-test">Source</a>,
       <a href="https://github.com/immersive-web/hit-test/issues">Issues</a>,
       <a href="https://github.com/immersive-web/hit-test/blob/master/hit-testing-explainer.md">Explainer</a>)</td>
    </tr>
    <tr>
      <td><a href="https://immersive-web.github.io/layers/"><strong>WebXR Layers API</strong></a>
      (<a href="https://github.com/immersive-web/layers">Source</a>,
       <a href="https://github.com/immersive-web/layers/issues">Issues</a>,
       <a href="https://github.com/immersive-web/layers/blob/master/explainer.md">Explainer</a>)</td>
    </tr>
    <tr>
      <td><a href="https://immersive-web.github.io/lighting-estimation/"><strong>WebXR Lighting Estimation API</strong></a>
      (<a href="https://github.com/immersive-web/lighting-estimation">Source</a>,
       <a href="https://github.com/immersive-web/lighting-estimation/issues">Issues</a>,
       <a href="https://github.com/immersive-web/lighting-estimation/blob/main/lighting-estimation-explainer.md">Explainer</a>)</td>
    </tr>
  </tbody>
</table>

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Grafiken im Web](/de/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML#other_graphics_on_the_web)
- [Grafiken zeichnen](/de/docs/Learn/JavaScript/Client-side_web_APIs/Drawing_graphics)
- [WebGL API](/de/docs/Web/API/WebGL_API): Beschleunigte 2D- und 3D-Grafik im Web
- [Canvas API](/de/docs/Web/API/Canvas_API): 2D-Zeichnungen für das Web
- [Canvas-Tutorial](/de/docs/Web/API/Canvas_API/Tutorial)
