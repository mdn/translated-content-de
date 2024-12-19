---
title: WebXR Device API
slug: Web/API/WebXR_Device_API
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{DefaultAPISidebar("WebXR Device API")}}{{SecureContext_Header}}{{SeeCompatTable}}

**WebXR** ist eine Gruppe von Standards, die zusammen verwendet werden, um das Rendern von 3D-Szenen auf Hardware zu unterstützen, die für die Darstellung virtueller Welten (**Virtual Reality**, oder **VR**) ausgelegt ist, oder um grafische Bilder zur realen Welt hinzuzufügen (**Augmented Reality**, oder **AR**). Die **WebXR Geräte-API** implementiert den Kern des WebXR-Feature-Sets, indem sie die Auswahl der Ausgabegeräte verwaltet, die 3D-Szene dem ausgewählten Gerät mit der angemessenen Bildrate darstellt und Bewegungsvektoren verwaltet, die mit Eingabegeräten erstellt werden.

Zu den mit WebXR kompatiblen Geräten gehören vollständig immersive 3D-Headsets mit Bewegungs- und Orientierungserfassung, Brillen, die Grafiken über die durch die Rahmen laufende reale Szene legen, und tragbare Mobiltelefone, die die Realität erweitern, indem sie die Welt mit einer Kamera erfassen und diese Szene mit computergenerierten Bildern ergänzen.

Um diese Aufgaben zu erfüllen, bietet die WebXR Geräte-API die folgenden wesentlichen Funktionen:

- Finden kompatibler VR- oder AR-Ausgabegeräte
- Eine 3D-Szene auf dem Gerät bei einer angemessenen Bildrate rendern
- (Optional) Spiegeln der Ausgabe auf ein 2D-Display
- Erstellen von Vektoren, die die Bewegungen von Eingabesteuerungen darstellen

Auf der grundlegendsten Ebene wird eine Szene in 3D präsentiert, indem die Perspektive berechnet wird, die auf die Szene angewendet werden soll, um sie aus dem Blickwinkel jedes Auges des Benutzers zu rendern, indem die Position jedes Auges berechnet und die Szene von dieser Position aus gerendert wird, indem in die Richtung geschaut wird, in die der Benutzer gerade schaut. Jedes dieser beiden Bilder wird in ein einzelnes Framebuffer gerendert, wobei das Bild für das linke Auge links und das Bild für das rechte Auge in die rechte Hälfte des Puffers gerendert wird. Sobald die Perspektiven beider Augen auf die Szene gerendert wurden, wird das resultierende Framebuffer dem WebXR-Gerät geliefert, um es dem Benutzer durch ihr Headset oder ein anderes geeignetes Anzeigegerät zu präsentieren.

Während die ältere [WebVR API](/de/docs/Web/API/WebVR_API) ausschließlich für die Unterstützung von Virtual Reality (VR) entwickelt wurde, bietet WebXR Unterstützung sowohl für VR als auch für Augmented Reality (AR) im Web. Die Unterstützung für AR-Funktionalität wird durch das WebXR Augmented Reality-Modul hinzugefügt.

Ein typisches XR-Gerät kann entweder 3 oder 6 Freiheitsgrade haben und kann über einen externen Positionssensor verfügen oder nicht.

Die Ausrüstung kann auch ein Beschleunigungsmesser, ein Barometer oder andere Sensoren umfassen, die verwendet werden, um zu erfassen, wann sich der Benutzer durch den Raum bewegt, seinen Kopf dreht oder ähnliches.

## WebXR Referenzdokumente

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

### WebGL-Verbindung

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

### Objekterkennungstest

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

Die folgenden Leitfäden und Tutorials sind großartige Ressourcen, um zu lernen, wie man WebXR und die zugrunde liegenden 3D- sowie VR/AR-Grafikkonzepte versteht.

<div class="index">

### Grundlagen und Basics

- [Grundlagen von WebXR](/de/docs/Web/API/WebXR_Device_API/Fundamentals)
- [Matrixmathematik für das Web](/de/docs/Web/API/WebGL_API/Matrix_math_for_the_web)
- [Lebenszyklus einer WebXR-Anwendung](/de/docs/Web/API/WebXR_Device_API/Lifecycle)

### Erstellen einer Mixed-Reality-Erfahrung

- [Starten und Beenden einer WebXR-Sitzung](/de/docs/Web/API/WebXR_Device_API/Startup_and_shutdown)
- [Geometrie und Referenzräume in WebXR](/de/docs/Web/API/WebXR_Device_API/Geometry)
- [Räumliche Verfolgung in WebXR](/de/docs/Web/API/WebXR_Device_API/Spatial_tracking)
- [Rendern und der WebXR-Frame-Animations-Callback](/de/docs/Web/API/WebXR_Device_API/Rendering)
- [Standpunkte und Betrachter: Simulation von Kameras in WebXR](/de/docs/Web/API/WebXR_Device_API/Cameras)
- [Eine Perspektiven-Retrospektive für WebXR-Entwickler](/de/docs/Web/API/WebXR_Device_API/Perspective)
- [Beleuchtung einer WebXR-Umgebung](/de/docs/Web/API/WebXR_Device_API/Lighting)
- [Verwendung von begrenzten Referenzräumen](/de/docs/Web/API/WebXR_Device_API/Bounded_reference_spaces)

### Interaktiv gestalten

- [Bewegung, Orientierung und Bewegungsbeispiele: Ein WebXR-Beispiel](/de/docs/Web/API/WebXR_Device_API/Movement_and_motion)
- [Eingaben und Eingabequellen](/de/docs/Web/API/WebXR_Device_API/Inputs)
- [Zielen und Objekterkennung](/de/docs/Web/API/WebXR_Device_API/Targeting)

### Leistung und Sicherheit

- [WebXR Leistung Leitfaden](/de/docs/Web/API/WebXR_Device_API/Performance)
- [Berechtigungen und Sicherheit für WebXR](/de/docs/Web/API/WebXR_Device_API/Permissions_and_security)

</div>

## Spezifikationen

<table>
  <thead>
    <tr>
      <th>Spezifikation</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="https://immersive-web.github.io/webxr/"><strong>WebXR Geräte-API</strong></a>
      (<a href="https://github.com/immersive-web/webxr">Quelle</a>,
       <a href="https://github.com/immersive-web/webxr/issues">Probleme</a>,
       <a href="https://github.com/immersive-web/webxr/blob/master/explainer.md">Erklärung</a>)</td>
    </tr>
    <tr>
      <td><a href="https://immersive-web.github.io/anchors/"><strong>WebXR Anker Modul</strong></a>
      (<a href="https://github.com/immersive-web/anchors">Quelle</a>,
       <a href="https://github.com/immersive-web/anchors/issues">Probleme</a>,
       <a href="https://github.com/immersive-web/anchors/blob/master/explainer.md">Erklärung</a>)</td>
    </tr>
    <tr>
      <td><a href="https://immersive-web.github.io/webxr-ar-module/"><strong>WebXR Augmented Reality Modul</strong></a>
      (<a href="https://github.com/immersive-web/webxr-ar-module">Quelle</a>,
       <a href="https://github.com/immersive-web/webxr-ar-module/issues">Probleme</a>,
       <a href="https://github.com/immersive-web/webxr-ar-module/blob/master/ar-module-explainer.md">Erklärung</a>)</td>
    </tr>
    <tr>
      <td><a href="https://immersive-web.github.io/depth-sensing/"><strong>WebXR Tiefenerfassungsmodul</strong></a>
      (<a href="https://github.com/immersive-web/depth-sensing">Quelle</a>,
       <a href="https://github.com/immersive-web/depth-sensing/issues">Probleme</a>,
       <a href="https://github.com/immersive-web/depth-sensing/blob/main/explainer.md">Erklärung</a>)</td>
    </tr>
    <tr>
      <td><a href="https://immersive-web.github.io/dom-overlays/"><strong>WebXR DOM Overlays Modul</strong></a>
      (<a href="https://github.com/immersive-web/dom-overlays">Quelle</a>,
       <a href="https://github.com/immersive-web/dom-overlays/issues">Probleme</a>,
       <a href="https://github.com/immersive-web/dom-overlays/blob/master/explainer.md">Erklärung</a>)</td>
    </tr>
    <tr>
      <td><a href="https://immersive-web.github.io/webxr-gamepads-module/"><strong>WebXR Gamepads Modul</strong></a>
      (<a href="https://github.com/immersive-web/webxr-gamepads-module">Quelle</a>,
       <a href="https://github.com/immersive-web/webxr-gamepads-module/issues">Probleme</a>,
       <a href="https://github.com/immersive-web/webxr-gamepads-module/blob/master/gamepads-module-explainer.md">Erklärung</a>)</td>
    </tr>
    <tr>
      <td><a href="https://immersive-web.github.io/webxr-hand-input/"><strong>WebXR Hand Input Modul</strong></a>
      (<a href="https://github.com/immersive-web/webxr-hand-input">Quelle</a>,
       <a href="https://github.com/immersive-web/webxr-hand-input/issues">Probleme</a>,
       <a href="https://github.com/immersive-web/webxr-hand-input/blob/master/explainer.md">Erklärung</a>)</td>
    </tr>
    <tr>
      <td><a href="https://immersive-web.github.io/hit-test/"><strong>WebXR Hit Test Modul</strong></a>
      (<a href="https://github.com/immersive-web/hit-test">Quelle</a>,
       <a href="https://github.com/immersive-web/hit-test/issues">Probleme</a>,
       <a href="https://github.com/immersive-web/hit-test/blob/master/hit-testing-explainer.md">Erklärung</a>)</td>
    </tr>
    <tr>
      <td><a href="https://immersive-web.github.io/layers/"><strong>WebXR Layers API</strong></a>
      (<a href="https://github.com/immersive-web/layers">Quelle</a>,
       <a href="https://github.com/immersive-web/layers/issues">Probleme</a>,
       <a href="https://github.com/immersive-web/layers/blob/master/explainer.md">Erklärung</a>)</td>
    </tr>
    <tr>
      <td><a href="https://immersive-web.github.io/lighting-estimation/"><strong>WebXR Lichtschätzungs-API</strong></a>
      (<a href="https://github.com/immersive-web/lighting-estimation">Quelle</a>,
       <a href="https://github.com/immersive-web/lighting-estimation/issues">Probleme</a>,
       <a href="https://github.com/immersive-web/lighting-estimation/blob/main/lighting-estimation-explainer.md">Erklärung</a>)</td>
    </tr>
  </tbody>
</table>

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Grafiken zeichnen](/de/docs/Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics)
- [WebGL API](/de/docs/Web/API/WebGL_API): Beschleunigte 2D- und 3D-Grafiken im Web
- [Canvas API](/de/docs/Web/API/Canvas_API): 2D-Zeichnung für das Web
- [Canvas-Tutorial](/de/docs/Web/API/Canvas_API/Tutorial)
