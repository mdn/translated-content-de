---
title: XRWebGLBinding
slug: Web/API/XRWebGLBinding
l10n:
  sourceCommit: f8553485fe1d9ab48b9f4816385b43bcbb388c0e
---

{{APIRef("WebXR Device API")}} {{secureContext_header}}{{SeeCompatTable}}

Die **`XRWebGLBinding`**-Schnittstelle wird verwendet, um Ebenen zu erstellen, die ein GPU-Backend haben.

## Konstruktor

- {{domxref("XRWebGLBinding.XRWebGLBinding", "XRWebGLBinding()")}} {{Experimental_Inline}}
  - : Erstellt ein neues `XRWebGLBinding`-Objekt für die angegebene XR-Sitzung und den WebGL-Rendering-Kontext.

## Instanzeigenschaften

- {{domxref("XRWebGLBinding.nativeProjectionScaleFactor")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Der `scaleFactor`, der während der Konstruktion der Projektionsschicht übergeben wurde. Die native Puffergöße wird mit dieser Zahl skaliert.

## Instanzmethoden

- {{domxref("XRWebGLBinding.createCubeLayer()")}} {{Experimental_Inline}}
  - : Gibt ein {{domxref("XRCubeLayer")}}-Objekt zurück, welches eine Ebene ist, die direkt aus einer [Cubemap](https://en.wikipedia.org/wiki/Cube_mapping) rendert und sie auf die inneren Flächen eines Würfels projiziert.
- {{domxref("XRWebGLBinding.createCylinderLayer()")}} {{Experimental_Inline}}
  - : Gibt ein {{domxref("XRCylinderLayer")}}-Objekt zurück, welches eine Ebene ist, die einen gewölbten rechteckigen Raum in der virtuellen Umgebung einnimmt.
- {{domxref("XRWebGLBinding.createEquirectLayer()")}} {{Experimental_Inline}}
  - : Gibt ein {{domxref("XREquirectLayer")}}-Objekt zurück, welches eine Ebene ist, die [equirectangular](https://en.wikipedia.org/wiki/Equirectangular_projection) kodierte Daten auf die Innenseite einer Kugel abbildet.
- {{domxref("XRWebGLBinding.createProjectionLayer()")}} {{Experimental_Inline}}
  - : Gibt ein {{domxref("XRProjectionLayer")}}-Objekt zurück, welches eine Ebene ist, die das gesamte Sichtfeld des Beobachters ausfüllt und nahe der nativen Bildrate des Geräts aktualisiert wird.
- {{domxref("XRWebGLBinding.createQuadLayer()")}} {{Experimental_Inline}}
  - : Gibt ein {{domxref("XRQuadLayer")}}-Objekt zurück, welches ein zweidimensionales Objekt ist, das in drei-dimensionalem Raum positioniert und orientiert ist.
- {{domxref("XRWebGLBinding.getDepthInformation()")}} {{Experimental_Inline}}
  - : Gibt ein {{domxref("XRWebGLDepthInformation")}}-Objekt zurück, das WebGL-Tiefeninformationen enthält.
- {{domxref("XRWebGLBinding.getReflectionCubeMap()")}} {{Experimental_Inline}}
  - : Gibt ein {{domxref("WebGLTexture")}}-Objekt zurück, das eine Reflexions-Cubemap-Textur enthält.
- {{domxref("XRWebGLBinding.getSubImage()")}} {{Experimental_Inline}}
  - : Gibt ein {{domxref("XRWebGLSubImage")}}-Objekt zurück, das die zu rendernde WebGL-Textur repräsentiert.
- {{domxref("XRWebGLBinding.getViewSubImage()")}} {{Experimental_Inline}}
  - : Gibt ein {{domxref("XRWebGLSubImage")}}-Objekt zurück, das die zu rendernde WebGL-Textur für ein {{domxref("XRView")}} repräsentiert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("XRWebGLLayer")}}
- {{domxref('WebGLRenderingContext')}} und {{domxref("WebGL2RenderingContext")}}
