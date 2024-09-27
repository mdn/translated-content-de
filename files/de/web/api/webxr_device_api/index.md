---
title: WebXR Device API
slug: Web/API/WebXR_Device_API
l10n:
  sourceCommit: b065c09b79d18abf0f04778c9307e1c312b8c6f9
---

{{DefaultAPISidebar("WebXR Device API")}}{{SecureContext_Header}}{{SeeCompatTable}}

**WebXR** ist eine Gruppe von Standards, die zusammen verwendet werden, um die Darstellung von 3D-Szenen auf Hardware zu unterstützen, die zum Präsentieren virtueller Welten (**Virtual Reality**, oder **VR**) oder zum Hinzufügen von grafischen Bildern zur realen Welt (**Augmented Reality**, oder **AR**) konzipiert ist. Die **WebXR-Geräte-API** implementiert den Kern des WebXR-Funktionssatzes, verwaltet die Auswahl der Ausgabegeräte, rendert die 3D-Szene auf das ausgewählte Gerät mit der entsprechenden Bildrate und verwaltet Bewegungsvektoren, die mit Eingabesteuerungen erstellt wurden.

WebXR-kompatible Geräte umfassen vollimmersive 3D-Headsets mit Bewegungs- und Orientierungserfassung, Brillen, die Grafiken über die reale Szene projizieren, die durch die Rahmen hindurchgesehen werden kann, und Handymobile, die die Realität erweitern, indem sie die Welt mit einer Kamera erfassen und die Szene mit computergenerierten Bildern ergänzen.

Um diese Aufgaben zu erfüllen, bietet die WebXR-Geräte-API folgende Schlüsselkapazitäten:

- Kompatible VR- oder AR-Ausgabegeräte finden
- Eine 3D-Szene zum Gerät mit einer entsprechenden Bildrate rendern
- (Optional) die Ausgabe auf ein 2D-Display spiegeln
- Vektoren erstellen, die die Bewegungen der Eingabesteuerungen darstellen

Auf der grundlegendsten Ebene wird eine Szene in 3D präsentiert, indem die Perspektive berechnet wird, die auf die Szene angewendet werden soll, um sie aus dem Blickwinkel jedes Auges des Nutzers zu rendern, indem die Position jedes Auges berechnet und die Szene aus dieser Position heraus gerendert wird, in Richtung dessen, wohin der Nutzer gerade blickt. Jedes dieser beiden Bilder wird in ein einziges Framebuffer gerendert, wobei das Bild für das linke Auge links und das Bild für das rechte Auge rechts im Buffer gerendert wird. Sobald die Perspektiven beider Augen auf die Szene gerendert wurden, wird der resultierende Framebuffer dem WebXR-Gerät zur Präsentation an den Nutzer durch ihr Headset oder ein anderes geeignetes Anzeigegerät übergeben.

Während die ältere [WebVR API](/de/docs/Web/API/WebVR_API) ausschließlich zur Unterstützung von Virtual Reality (VR) konzipiert wurde, bietet WebXR Unterstützung für sowohl VR als auch Augmented Reality (AR) im Web. Die Unterstützung für AR-Funktionalität wird durch das WebXR Augmented Reality Module hinzugefügt.

Ein typisches XR-Gerät kann entweder 3 oder 6 Freiheitsgrade haben und möglicherweise einen externen Positionssensor besitzen.

Das Gerät kann auch einen Beschleunigungsmesser, ein Barometer oder andere Sensoren umfassen, die verwendet werden, um zu erkennen, wann der Benutzer sich durch den Raum bewegt, seinen Kopf dreht oder Ähnliches.

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

### Tiefenerkennung

- [`XRDepthInformation`](/de/docs/Web/API/XRDepthInformation)
- [`XRCPUDepthInformation`](/de/docs/Web/API/XRCPUDepthInformation)
- [`XRWebGLDepthInformation`](/de/docs/Web/API/XRWebGLDepthInformation)

### Treffertests

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

Die folgenden Leitfäden und Tutorials sind eine großartige Ressource, um zu lernen, wie WebXR und die zugrunde liegenden 3D- und VR/AR-Grafikkonzepte zu verstehen sind.

<div class="index">

### Grundlagen und Basis

- [Grundlagen von WebXR](/de/docs/Web/API/WebXR_Device_API/Fundamentals)
- [Matrix-Mathematik für das Web](/de/docs/Web/API/WebGL_API/Matrix_math_for_the_web)
- [Lebenszyklus von WebXR-Anwendungen](/de/docs/Web/API/WebXR_Device_API/Lifecycle)

### Eine Mixed-Reality-Erfahrung erstellen

- [Eine WebXR-Sitzung starten und beenden](/de/docs/Web/API/WebXR_Device_API/Startup_and_shutdown)
- [Geometrie und Bezugsräume in WebXR](/de/docs/Web/API/WebXR_Device_API/Geometry)
- [Raumverfolgung in WebXR](/de/docs/Web/API/WebXR_Device_API/Spatial_tracking)
- [Rendering und der WebXR-Frame-Animations-Callback](/de/docs/Web/API/WebXR_Device_API/Rendering)
- [Ansichten und Betrachter: Kameras in WebXR simulieren](/de/docs/Web/API/WebXR_Device_API/Cameras)
- [Eine perspektivische Retrospektive für WebXR-Entwickler](/de/docs/Web/API/WebXR_Device_API/Perspective)
- [Beleuchtung eines WebXR-Settings](/de/docs/Web/API/WebXR_Device_API/Lighting)
- [Verwendung begrenzter Bezugsräume](/de/docs/Web/API/WebXR_Device_API/Bounded_reference_spaces)

### Es interaktiv machen

- [Bewegungen, Orientierung und Bewegung: Ein WebXR-Beispiel](/de/docs/Web/API/WebXR_Device_API/Movement_and_motion)
- [Eingaben und Eingabequellen](/de/docs/Web/API/WebXR_Device_API/Inputs)
- [Zielerfassung und Trefferdetektion](/de/docs/Web/API/WebXR_Device_API/Targeting)

### Leistung und Sicherheit

- [WebXR-Leitfaden für die Leistung](/de/docs/Web/API/WebXR_Device_API/Performance)
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
      <td><a href="https://immersive-web.github.io/webxr/"><strong>WebXR-Geräte-API</strong></a>
      (<a href="https://github.com/immersive-web/webxr">Source</a>,
       <a href="https://github.com/immersive-web/webxr/issues">Issues</a>,
       <a href="https://github.com/immersive-web/webxr/blob/master/explainer.md">Explainer</a>)</td>
    </tr>
    <tr>
      <td><a href="https://immersive-web.github.io/anchors/"><strong>WebXR-Anker-Modul</strong></a>
      (<a href="https://github.com/immersive-web/anchors">Source</a>,
       <a href="https://github.com/immersive-web/anchors/issues">Issues</a>,
       <a href="https://github.com/immersive-web/anchors/blob/master/explainer.md">Explainer</a>)</td>
    </tr>
    <tr>
      <td><a href="https://immersive-web.github.io/webxr-ar-module/"><strong>WebXR-Modul für Augmented Reality</strong></a>
      (<a href="https://github.com/immersive-web/webxr-ar-module">Source</a>,
       <a href="https://github.com/immersive-web/webxr-ar-module/issues">Issues</a>,
       <a href="https://github.com/immersive-web/webxr-ar-module/blob/master/ar-module-explainer.md">Explainer</a>)</td>
    </tr>
    <tr>
      <td><a href="https://immersive-web.github.io/depth-sensing/"><strong>WebXR-Tiefenerkennungsmodul</strong></a>
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
      <td><a href="https://immersive-web.github.io/webxr-hand-input/"><strong>WebXR-Handeingabemodul</strong></a>
      (<a href="https://github.com/immersive-web/webxr-hand-input">Source</a>,
       <a href="https://github.com/immersive-web/webxr-hand-input/issues">Issues</a>,
       <a href="https://github.com/immersive-web/webxr-hand-input/blob/master/explainer.md">Explainer</a>)</td>
    </tr>
    <tr>
      <td><a href="https://immersive-web.github.io/hit-test/"><strong>WebXR Treffer-Test-Modul</strong></a>
      (<a href="https://github.com/immersive-web/hit-test">Source</a>,
       <a href="https://github.com/immersive-web/hit-test/issues">Issues</a>,
       <a href="https://github.com/immersive-web/hit-test/blob/master/hit-testing-explainer.md">Explainer</a>)</td>
    </tr>
    <tr>
      <td><a href="https://immersive-web.github.io/layers/"><strong>WebXR-Ebenen-API</strong></a>
      (<a href="https://github.com/immersive-web/layers">Source</a>,
       <a href="https://github.com/immersive-web/layers/issues">Issues</a>,
       <a href="https://github.com/immersive-web/layers/blob/master/explainer.md">Explainer</a>)</td>
    </tr>
    <tr>
      <td><a href="https://immersive-web.github.io/lighting-estimation/"><strong>WebXR Lichtschätzungs-API</strong></a>
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
- [WebGL-API](/de/docs/Web/API/WebGL_API): Beschleunigte 2D- und 3D-Grafiken im Web
- [Canvas-API](/de/docs/Web/API/Canvas_API): 2D-Zeichnen für das Web
- [Canvas-Tutorial](/de/docs/Web/API/Canvas_API/Tutorial)
