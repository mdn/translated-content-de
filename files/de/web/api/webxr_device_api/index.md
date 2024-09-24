---
title: WebXR-Geräte-API
slug: Web/API/WebXR_Device_API
l10n:
  sourceCommit: b065c09b79d18abf0f04778c9307e1c312b8c6f9
---

{{DefaultAPISidebar("WebXR Device API")}}{{SecureContext_Header}}{{SeeCompatTable}}

**WebXR** ist eine Gruppe von Standards, die zusammen verwendet werden, um die Darstellung von 3D-Szenen auf Hardware zu unterstützen, die für die Präsentation virtueller Welten (virtuelle Realität oder **VR**) entwickelt wurde, oder um grafische Bilder in die reale Welt einzufügen (**erweiterte Realität** oder **AR**). Die **WebXR-Geräte-API** implementiert den Kern der WebXR-Funktionspalette, verwaltet die Auswahl der Ausgabegeräte, rendert die 3D-Szene auf das gewählte Gerät in der entsprechenden Bildfrequenz und verwaltet die mit Eingabegeräten erzeugten Bewegungsvektoren.

WebXR-kompatible Geräte umfassen vollständig immersive 3D-Headsets mit Bewegungs- und Orientierungserfassung, Brillen, die Grafiken über die reale Szene, die durch die Brillengläser wandert, einfügen, und Handys, die die Realität durch Aufnehmen der Welt mit einer Kamera und Ergänzung dieser Szene mit computergenerierten Bildern erweitern.

Um diese Aufgaben zu erfüllen, bietet die WebXR-Geräte-API die folgenden Hauptfunktionen:

- Finden kompatibler VR- oder AR-Ausgabegeräte
- Rendern einer 3D-Szene auf das Gerät in einer angemessenen Bildfrequenz
- (Optional) Spiegeln der Ausgabe auf ein 2D-Display
- Erstellen von Vektoren, die die Bewegungen von Eingabesteuerungen darstellen

Auf der grundlegendsten Ebene wird eine Szene in 3D präsentiert, indem die Perspektive berechnet wird, die auf die Szene angewendet werden soll, um sie aus dem Blickwinkel jedes Auges des Nutzers zu rendern, indem die Position jedes Auges berechnet und die Szene von dieser Position aus gerendert wird, in die Richtung blickend, in die der Nutzer derzeit schaut. Jedes dieser beiden Bilder wird in einen einzelnen Framebuffer gerendert, wobei das Bild des linken Auges auf der linken Seite und der Standpunkt des rechten Auges in die rechte Hälfte des Puffers gerendert wird. Sobald die Perspektiven beider Augen auf die Szene gerendert wurden, wird der resultierende Framebuffer an das WebXR-Gerät geliefert, um es durch deren Headset oder ein anderes geeignetes Anzeigegerät dem Nutzer zu präsentieren.

Während die ältere [WebVR-API](/de/docs/Web/API/WebVR_API) ausschließlich zur Unterstützung von Virtual Reality (VR) entwickelt wurde, bietet WebXR Unterstützung sowohl für VR als auch für erweiterte Realität (AR) im Web. Die Unterstützung für AR-Funktionen wird durch das WebXR Augmented Reality Module hinzugefügt.

Ein typisches XR-Gerät kann entweder 3 oder 6 Freiheitsgrade haben und könnte oder könnte nicht einen externen Positionssensor haben.

Das Equipment kann auch einen Beschleunigungsmesser, ein Barometer oder andere Sensoren beinhalten, die genutzt werden, um zu erkennen, wann der Nutzer sich durch den Raum bewegt, den Kopf dreht oder Ähnliches.

## WebXR-Referenzdokumentation

<div class="index">

### Initialisierung

- {{domxref("navigator.xr")}}
- {{domxref("XRSystem")}}
- {{domxref("XRPermissionStatus")}}
- `Permissions-Policy`: [`xr-spatial-tracking`](/de/docs/Web/HTTP/Headers/Permissions-Policy/xr-spatial-tracking)

### Sitzung

- {{DOMxRef("XRSession")}}
- {{domxref("XRSessionEvent")}}
- {{DOMxRef("XRRenderState")}}

### Frame-Schleife

- {{DOMxRef("XRFrame")}}

### Räume

- {{DOMxRef("XRSpace")}}
- {{DOMxRef("XRReferenceSpace")}}
- {{DOMxRef("XRBoundedReferenceSpace")}}
- {{domxref("XRReferenceSpaceEvent")}}
- {{domxref("XRJointSpace")}}

### Ansichten

- {{DOMxRef("XRView")}}
- {{DOMxRef("XRViewport")}}

### Geometrische Primitive

- {{DOMxRef("XRRigidTransform")}}

### Pose

- {{DOMxRef("XRPose")}}
- {{DOMxRef("XRJointPose")}}
- {{DOMxRef("XRViewerPose")}}

### Eingabe

- {{DOMxRef("XRHand")}}
- {{DOMxRef("XRInputSource")}}
- {{DOMxRef("XRInputSourceArray")}}
- {{domxref("XRInputSourceEvent")}}
- {{domxref("XRInputSourcesChangeEvent")}}

### Ebenen

- {{DOMxRef("XRLayer")}}
- {{DOMxRef("XRLayerEvent")}}
- {{DOMxRef("XRCompositionLayer")}}
- {{DOMxRef("XRCubeLayer")}}
- {{DOMxRef("XRCylinderLayer")}}
- {{DOMxRef("XREquirectLayer")}}
- {{DOMxRef("XRProjectionLayer")}}
- {{DOMxRef("XRQuadLayer")}}
- {{DOMxRef("XRMediaBinding")}}

### WebGL-Bindung

- {{DOMxRef("XRWebGLBinding")}}
- {{domxref("WebGLRenderingContext.makeXRCompatible()")}}
- {{DOMxRef("XRWebGLLayer")}}
- {{DOMxRef("XRSubImage")}}
- {{DOMxRef("XRWebGLSubImage")}}

### Anker

- {{domxref("XRAnchor")}}
- {{domxref("XRAnchorSet")}}

### Tiefensensorik

- {{domxref("XRDepthInformation")}}
- {{domxref("XRCPUDepthInformation")}}
- {{domxref("XRWebGLDepthInformation")}}

### Treffer-Erkennung

- {{domxref("XRHitTestSource")}}
- {{domxref("XRTransientInputHitTestSource")}}
- {{domxref("XRHitTestResult")}}
- {{domxref("XRTransientInputHitTestResult")}}
- {{domxref("XRRay")}}

### Lichtschätzung

- {{domxref("XRLightEstimate")}}
- {{domxref("XRLightProbe")}}

</div>

## Anleitungen und Tutorials

Die folgenden Anleitungen und Tutorials sind eine großartige Ressource, um zu lernen, wie man WebXR und die zugrunde liegenden 3D- und VR/AR-Grafikkonzepte versteht.

<div class="index">

### Grundlagen und Basiswissen

- [Grundlagen von WebXR](/de/docs/Web/API/WebXR_Device_API/Fundamentals)
- [Matrix Mathematik für das Web](/de/docs/Web/API/WebGL_API/Matrix_math_for_the_web)
- [Lebenszyklus von WebXR-Anwendungen](/de/docs/Web/API/WebXR_Device_API/Lifecycle)

### Erstellen eines Mixed-Reality-Erlebnisses

- [Starten und Beenden einer WebXR-Sitzung](/de/docs/Web/API/WebXR_Device_API/Startup_and_shutdown)
- [Geometrie und Referenzräume in WebXR](/de/docs/Web/API/WebXR_Device_API/Geometry)
- [Räumliche Verfolgung in WebXR](/de/docs/Web/API/WebXR_Device_API/Spatial_tracking)
- [Rendern und der WebXR-Frame-Animations-Callback](/de/docs/Web/API/WebXR_Device_API/Rendering)
- [Blickpunkte und Viewer: Simulieren von Kameras in WebXR](/de/docs/Web/API/WebXR_Device_API/Cameras)
- [Eine Perspektiven-Retrospektive für WebXR-Entwickler](/de/docs/Web/API/WebXR_Device_API/Perspective)
- [Beleuchtung einer WebXR-Umgebung](/de/docs/Web/API/WebXR_Device_API/Lighting)
- [Verwendung von begrenzten Referenzräumen](/de/docs/Web/API/WebXR_Device_API/Bounded_reference_spaces)

### Es interaktiv machen

- [Bewegung, Orientierung und Bewegung: Ein WebXR-Beispiel](/de/docs/Web/API/WebXR_Device_API/Movement_and_motion)
- [Eingaben und Eingabequellen](/de/docs/Web/API/WebXR_Device_API/Inputs)
- [Zielen und Trefferdetektion](/de/docs/Web/API/WebXR_Device_API/Targeting)

### Leistung und Sicherheit

- [WebXR-Leistungsleitfaden](/de/docs/Web/API/WebXR_Device_API/Performance)
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
      (<a href="https://github.com/immersive-web/webxr">Quelle</a>,
       <a href="https://github.com/immersive-web/webxr/issues">Probleme</a>,
       <a href="https://github.com/immersive-web/webxr/blob/master/explainer.md">Erklärer</a>)</td>
    </tr>
    <tr>
      <td><a href="https://immersive-web.github.io/anchors/"><strong>WebXR-Anker-Modul</strong></a>
      (<a href="https://github.com/immersive-web/anchors">Quelle</a>,
       <a href="https://github.com/immersive-web/anchors/issues">Probleme</a>,
       <a href="https://github.com/immersive-web/anchors/blob/master/explainer.md">Erklärer</a>)</td>
    </tr>
    <tr>
      <td><a href="https://immersive-web.github.io/webxr-ar-module/"><strong>WebXR-Erweiterte Realität Modul</strong></a>
      (<a href="https://github.com/immersive-web/webxr-ar-module">Quelle</a>,
       <a href="https://github.com/immersive-web/webxr-ar-module/issues">Probleme</a>,
       <a href="https://github.com/immersive-web/webxr-ar-module/blob/master/ar-module-explainer.md">Erklärer</a>)</td>
    </tr>
    <tr>
      <td><a href="https://immersive-web.github.io/depth-sensing/"><strong>WebXR-Tiefenerkennung Modul</strong></a>
      (<a href="https://github.com/immersive-web/depth-sensing">Quelle</a>,
       <a href="https://github.com/immersive-web/depth-sensing/issues">Probleme</a>,
       <a href="https://github.com/immersive-web/depth-sensing/blob/main/explainer.md">Erklärer</a>)</td>
    </tr>
    <tr>
      <td><a href="https://immersive-web.github.io/dom-overlays/"><strong>WebXR-DOM-Overlays Modul</strong></a>
      (<a href="https://github.com/immersive-web/dom-overlays">Quelle</a>,
       <a href="https://github.com/immersive-web/dom-overlays/issues">Probleme</a>,
       <a href="https://github.com/immersive-web/dom-overlays/blob/master/explainer.md">Erklärer</a>)</td>
    </tr>
    <tr>
      <td><a href="https://immersive-web.github.io/webxr-gamepads-module/"><strong>WebXR-Gamepads Modul</strong></a>
      (<a href="https://github.com/immersive-web/webxr-gamepads-module">Quelle</a>,
       <a href="https://github.com/immersive-web/webxr-gamepads-module/issues">Probleme</a>,
       <a href="https://github.com/immersive-web/webxr-gamepads-module/blob/master/gamepads-module-explainer.md">Erklärer</a>)</td>
    </tr>
    <tr>
      <td><a href="https://immersive-web.github.io/webxr-hand-input/"><strong>WebXR-Handeingabe Modul</strong></a>
      (<a href="https://github.com/immersive-web/webxr-hand-input">Quelle</a>,
       <a href="https://github.com/immersive-web/webxr-hand-input/issues">Probleme</a>,
       <a href="https://github.com/immersive-web/webxr-hand-input/blob/master/explainer.md">Erklärer</a>)</td>
    </tr>
    <tr>
      <td><a href="https://immersive-web.github.io/hit-test/"><strong>WebXR-Treffertest Modul</strong></a>
      (<a href="https://github.com/immersive-web/hit-test">Quelle</a>,
       <a href="https://github.com/immersive-web/hit-test/issues">Probleme</a>,
       <a href="https://github.com/immersive-web/hit-test/blob/master/hit-testing-explainer.md">Erklärer</a>)</td>
    </tr>
    <tr>
      <td><a href="https://immersive-web.github.io/layers/"><strong>WebXR-Schichten-API</strong></a>
      (<a href="https://github.com/immersive-web/layers">Quelle</a>,
       <a href="https://github.com/immersive-web/layers/issues">Probleme</a>,
       <a href="https://github.com/immersive-web/layers/blob/master/explainer.md">Erklärer</a>)</td>
    </tr>
    <tr>
      <td><a href="https://immersive-web.github.io/lighting-estimation/"><strong>WebXR-Lichtschätzungs-API</strong></a>
      (<a href="https://github.com/immersive-web/lighting-estimation">Quelle</a>,
       <a href="https://github.com/immersive-web/lighting-estimation/issues">Probleme</a>,
       <a href="https://github.com/immersive-web/lighting-estimation/blob/main/lighting-estimation-explainer.md">Erklärer</a>)</td>
    </tr>
  </tbody>
</table>

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Grafiken im Web](/de/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML#other_graphics_on_the_web)
- [Grafiken zeichnen](/de/docs/Learn/JavaScript/Client-side_web_APIs/Drawing_graphics)
- [WebGL-API](/de/docs/Web/API/WebGL_API): Beschleunigte 2D- und 3D-Grafiken im Web
- [Canvas API](/de/docs/Web/API/Canvas_API): 2D-Zeichnen für das Web
- [Canvas-Tutorial](/de/docs/Web/API/Canvas_API/Tutorial)
