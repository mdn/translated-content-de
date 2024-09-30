---
title: ANGLE_instanced_arrays
slug: Web/API/ANGLE_instanced_arrays
l10n:
  sourceCommit: dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{APIRef("WebGL")}}

Die **`ANGLE_instanced_arrays`** Erweiterung ist Teil der [WebGL API](/de/docs/Web/API/WebGL_API) und ermöglicht es, dasselbe Objekt oder Gruppen ähnlicher Objekte mehrfach zu zeichnen, wenn sie die gleichen Vertexdaten, Primittivanzahl und Typ teilen.

WebGL-Erweiterungen sind verfügbar über die Methode [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension). Weitere Informationen finden Sie unter [Verwendung von Erweiterungen](/de/docs/Web/API/WebGL_API/Using_Extensions) im [WebGL-Leitfaden](/de/docs/Web/API/WebGL_API/Tutorial).

> [!NOTE]
> Diese Erweiterung ist nur für {{domxref("WebGLRenderingContext", "WebGL1", "", 1)}} Kontexte verfügbar. In {{domxref("WebGL2RenderingContext", "WebGL2", "", 1)}} ist die Funktionalität dieser Erweiterung im WebGL2-Kontext standardmäßig verfügbar, und die Konstanten und Methoden sind ohne das `ANGLE_`-Präfix verfügbar.
>
> Trotz des Namens "ANGLE" funktioniert diese Erweiterung auf jedem Gerät, wenn die Hardware sie unterstützt, und nicht nur auf Windows, wenn die ANGLE-Bibliothek verwendet wird. "ANGLE" zeigt lediglich an, dass diese Erweiterung von den Autoren der ANGLE-Bibliothek geschrieben wurde.

## Konstanten

Diese Erweiterung stellt eine neue Konstante bereit, die in der Methode [`gl.getVertexAttrib()`](/de/docs/Web/API/WebGLRenderingContext/getVertexAttrib) verwendet werden kann:

- `ext.VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE`
  - : Liefert einen [`GLint`](/de/docs/Web/API/WebGL_API/Types), der den Frequenzteiler beschreibt, der für das instanzierte Rendering verwendet wird, wenn er in [`gl.getVertexAttrib()`](/de/docs/Web/API/WebGLRenderingContext/getVertexAttrib) als `pname`-Parameter verwendet wird.

## Instanzmethoden

Diese Erweiterung stellt drei neue Methoden bereit.

- [`ext.drawArraysInstancedANGLE()`](/de/docs/Web/API/ANGLE_instanced_arrays/drawArraysInstancedANGLE)
  - : Verhält sich identisch zu [`gl.drawArrays()`](/de/docs/Web/API/WebGLRenderingContext/drawArrays), außer dass mehrere Instanzen des Elementbereichs ausgeführt werden und die Instanz sich bei jeder Iteration weiterbewegt.
- [`ext.drawElementsInstancedANGLE()`](/de/docs/Web/API/ANGLE_instanced_arrays/drawElementsInstancedANGLE)
  - : Verhält sich identisch zu [`gl.drawElements()`](/de/docs/Web/API/WebGLRenderingContext/drawElements), außer dass mehrere Instanzen des Elementsatzes ausgeführt werden und die Instanz sich zwischen jeder Gruppe weiterbewegt.
- [`ext.vertexAttribDivisorANGLE()`](/de/docs/Web/API/ANGLE_instanced_arrays/vertexAttribDivisorANGLE)
  - : Modifiziert die Rate, mit der generische Vertex-Attribute fortschreiten, wenn mehrere Instanzen von Primitiven mit [`ext.drawArraysInstancedANGLE()`](/de/docs/Web/API/ANGLE_instanced_arrays/drawArraysInstancedANGLE) und [`ext.drawElementsInstancedANGLE()`](/de/docs/Web/API/ANGLE_instanced_arrays/drawElementsInstancedANGLE) gerendert werden.

## Beispiele

Das folgende Beispiel zeigt, wie man eine bestimmte Geometrie mit einem einzigen Zeichnungsaufruf mehrfach zeichnet.

> [!WARNING]
> Das folgende ist Bildungsinhalt, kein Produktions-Code. Es sollte allgemein vermieden werden, Daten / Puffer innerhalb der Rendering-Schleife oder direkt vor der Verwendung zu erstellen.

```js
// enable the extension
const ext = gl.getExtension("ANGLE_instanced_arrays");

// binding the geometry buffer as usual
gl.bindBuffer(gl.ARRAY_BUFFER, geometryVertexBuffer);
gl.enableVertexAttribArray(vertexPositionAttributeLocation);
gl.vertexAttribPointer(
  vertexPositionAttributeLocation,
  3,
  gl.FLOAT,
  false,
  0,
  0,
);

// build position buffer
const instancePositions = [];
for (const instance of instances) {
  instancePositions.push(
    instance.position.x,
    instance.position.y,
    instance.position.z,
  );
}
const instancePositionBuffer = createWebGLBufferFromData(instancePositions);

// binding the instance position buffer as you would with any attribute
gl.bindBuffer(gl.ARRAY_BUFFER, instancePositionBuffer);
gl.enableVertexAttribArray(instancePositionAttributeLocation);
gl.vertexAttribPointer(
  instancePositionAttributeLocation,
  3,
  gl.FLOAT,
  false,
  0,
  0,
);

// mark the attribute as instanced and advance it every single(1) instance rather than every vertex
ext.vertexAttribDivisorANGLE(instancePositionAttributeLocation, 1);

// draw geometry for each instance
ext.drawArraysInstancedANGLE(
  gl.TRIANGLES,
  0,
  numGeometryVertices,
  instances.length,
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension)
- [`WebGL2RenderingContext.drawArraysInstanced()`](/de/docs/Web/API/WebGL2RenderingContext/drawArraysInstanced)
- [`WebGL2RenderingContext.drawElementsInstanced()`](/de/docs/Web/API/WebGL2RenderingContext/drawElementsInstanced)
- [`WebGL2RenderingContext.vertexAttribDivisor()`](/de/docs/Web/API/WebGL2RenderingContext/vertexAttribDivisor)
