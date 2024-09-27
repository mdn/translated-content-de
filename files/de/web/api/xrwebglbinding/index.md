---
title: XRWebGLBinding
slug: Web/API/XRWebGLBinding
l10n:
  sourceCommit: f8553485fe1d9ab48b9f4816385b43bcbb388c0e
---

{{APIRef("WebXR Device API")}} {{secureContext_header}}{{SeeCompatTable}}

Die **`XRWebGLBinding`**-Schnittstelle wird verwendet, um Ebenen zu erstellen, die ein GPU-Backend haben.

## Konstruktor

- [`XRWebGLBinding()`](/de/docs/Web/API/XRWebGLBinding/XRWebGLBinding) {{Experimental_Inline}}
  - : Erstellt ein neues `XRWebGLBinding`-Objekt für die angegebene XR-Sitzung und den WebGL-Rendering-Kontext.

## Instanzeigenschaften

- [`XRWebGLBinding.nativeProjectionScaleFactor`](/de/docs/Web/API/XRWebGLBinding/nativeProjectionScaleFactor) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Der `scaleFactor`, der bei der Konstruktion der Projektionsebene übergeben wurde. Die native Puffergröße wird mit diesem Wert skaliert.

## Instanzmethoden

- [`XRWebGLBinding.createCubeLayer()`](/de/docs/Web/API/XRWebGLBinding/createCubeLayer) {{Experimental_Inline}}
  - : Gibt ein [`XRCubeLayer`](/de/docs/Web/API/XRCubeLayer)-Objekt zurück, welches eine Ebene ist, die direkt von einem [Cubemap](https://en.wikipedia.org/wiki/Cube_mapping) rendert und es auf die Innenflächen eines Würfels projiziert.
- [`XRWebGLBinding.createCylinderLayer()`](/de/docs/Web/API/XRWebGLBinding/createCylinderLayer) {{Experimental_Inline}}
  - : Gibt ein [`XRCylinderLayer`](/de/docs/Web/API/XRCylinderLayer)-Objekt zurück, welches eine Ebene ist, die einen gebogenen rechteckigen Raum in der virtuellen Umgebung einnimmt.
- [`XRWebGLBinding.createEquirectLayer()`](/de/docs/Web/API/XRWebGLBinding/createEquirectLayer) {{Experimental_Inline}}
  - : Gibt ein [`XREquirectLayer`](/de/docs/Web/API/XREquirectLayer)-Objekt zurück, welches eine Ebene ist, die [equirectangulare](https://en.wikipedia.org/wiki/Equirectangular_projection) codierte Daten auf die Innenseite einer Kugel abbildet.
- [`XRWebGLBinding.createProjectionLayer()`](/de/docs/Web/API/XRWebGLBinding/createProjectionLayer) {{Experimental_Inline}}
  - : Gibt ein [`XRProjectionLayer`](/de/docs/Web/API/XRProjectionLayer)-Objekt zurück, welches eine Ebene ist, die die gesamte Sicht des Beobachters ausfüllt und nahe der nativen Bildfrequenz des Geräts aktualisiert wird.
- [`XRWebGLBinding.createQuadLayer()`](/de/docs/Web/API/XRWebGLBinding/createQuadLayer) {{Experimental_Inline}}
  - : Gibt ein [`XRQuadLayer`](/de/docs/Web/API/XRQuadLayer)-Objekt zurück, welches ein zweidimensionales Objekt ist, das in 3D-Raum positioniert und orientiert ist.
- [`XRWebGLBinding.getDepthInformation()`](/de/docs/Web/API/XRWebGLBinding/getDepthInformation) {{Experimental_Inline}}
  - : Gibt ein [`XRWebGLDepthInformation`](/de/docs/Web/API/XRWebGLDepthInformation)-Objekt zurück, das WebGL-Tiefeninformationen enthält.
- [`XRWebGLBinding.getReflectionCubeMap()`](/de/docs/Web/API/XRWebGLBinding/getReflectionCubeMap) {{Experimental_Inline}}
  - : Gibt ein [`WebGLTexture`](/de/docs/Web/API/WebGLTexture)-Objekt zurück, das eine Reflexions-Cubemap-Textur enthält.
- [`XRWebGLBinding.getSubImage()`](/de/docs/Web/API/XRWebGLBinding/getSubImage) {{Experimental_Inline}}
  - : Gibt ein [`XRWebGLSubImage`](/de/docs/Web/API/XRWebGLSubImage)-Objekt zurück, das die WebGL-Textur repräsentiert, die gerendert werden soll.
- [`XRWebGLBinding.getViewSubImage()`](/de/docs/Web/API/XRWebGLBinding/getViewSubImage) {{Experimental_Inline}}
  - : Gibt ein [`XRWebGLSubImage`](/de/docs/Web/API/XRWebGLSubImage)-Objekt zurück, das die WebGL-Textur repräsentiert, die für ein [`XRView`](/de/docs/Web/API/XRView) gerendert werden soll.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer)
- [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext) und [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext)
