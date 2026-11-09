---
title: EXT_polygon_offset_clamp-Erweiterung
short-title: EXT_polygon_offset_clamp
slug: Web/API/EXT_polygon_offset_clamp
l10n:
  sourceCommit: 4707a91d383770b89cbb38bd5c6c373a25b25790
---

{{APIRef("WebGL")}}

Die Erweiterung **`EXT_polygon_offset_clamp`** ist Teil der [WebGL-API](/de/docs/Web/API/WebGL_API) und ermöglicht es, den mit [`polygonOffset()`](/de/docs/Web/API/WebGLRenderingContext/polygonOffset) festgelegten Tiefenversatz zu begrenzen.

Der Tiefenversatz eines Polygons wächst mit seiner Neigung. Daher können Polygone, die nahezu parallel zur Blickrichtung verlaufen, einen sehr großen Versatz erhalten. Beim Shadow Mapping kann dies schattenwerfende Polygone hinter die Flächen verschieben, auf die sie Schatten werfen sollen. Dadurch entstehen Löcher in den Schatten. Ein Höchstwert für den Versatz verhindert dies.

WebGL-Erweiterungen sind über die Methode [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension) verfügbar. Weitere Informationen finden Sie unter [Erweiterungen verwenden](/de/docs/Web/API/WebGL_API/Using_Extensions) im [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial).

> [!NOTE]
> Diese Erweiterung ist sowohl für [WebGL1-](/de/docs/Web/API/WebGLRenderingContext) als auch für [WebGL2-Kontexte](/de/docs/Web/API/WebGL2RenderingContext) verfügbar. Die Unterstützung hängt vom Grafiktreiber des Systems ab.

## Konstanten

- `ext.POLYGON_OFFSET_CLAMP_EXT`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das an [`getParameter()`](/de/docs/Web/API/WebGLRenderingContext/getParameter) übergeben wird, um den aktuellen Höchstwert für den Versatz als [`GLfloat`](/de/docs/Web/API/WebGL_API/Types) abzurufen. Der Standardwert ist `0`.

## Instanzmethoden

- [`ext.polygonOffsetClampEXT()`](/de/docs/Web/API/EXT_polygon_offset_clamp/polygonOffsetClampEXT)
  - : Legt den Skalierungsfaktor und die Einheiten zur Berechnung von Tiefenversätzen sowie einen Höchstwert für den resultierenden Versatz fest.

## Beispiele

### Tiefenversatz begrenzen

Der Tiefenversatz wird nur angewendet, wenn `gl.POLYGON_OFFSET_FILL` aktiviert ist. Dieses Beispiel legt denselben Faktor und dieselben Einheiten wie `polygonOffset(2, 3)` fest und begrenzt den Versatz zusätzlich auf `0.001`:

```js
const ext = gl.getExtension("EXT_polygon_offset_clamp");

gl.enable(gl.POLYGON_OFFSET_FILL);
ext.polygonOffsetClampEXT(2, 3, 0.001);

gl.getParameter(ext.POLYGON_OFFSET_CLAMP_EXT); // 0.0010000000474974513
```

Der Wert wird als 32-Bit-Gleitkommazahl gespeichert. Beim Auslesen wird daher der 32-Bit-Wert zurückgegeben, der `0.001` am nächsten liegt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension)
- [`WebGLRenderingContext.polygonOffset()`](/de/docs/Web/API/WebGLRenderingContext/polygonOffset)
