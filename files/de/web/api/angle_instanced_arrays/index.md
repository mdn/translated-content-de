---
title: ANGLE_instanced_arrays
slug: Web/API/ANGLE_instanced_arrays
l10n:
  sourceCommit: dd898d5f2411a1743936097781268b5d649acdf9
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die Erweiterung **`ANGLE_instanced_arrays`** ist Teil der [WebGL-API](/de/docs/Web/API/WebGL_API) und ermöglicht es Ihnen, dasselbe Objekt oder Gruppen ähnlicher Objekte mehrfach zu zeichnen, sofern sie dieselben Vertex-Daten sowie dieselbe Anzahl und denselben Typ von Primitiven verwenden.

WebGL-Erweiterungen sind über die Methode [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension) verfügbar.
Weitere Informationen finden Sie unter [WebGL-Erweiterungen verwenden](/de/docs/Web/API/WebGL_API/Using_Extensions).

> [!NOTE]
> Diese Erweiterung ist nur für [WebGL1](/de/docs/Web/API/WebGLRenderingContext)-Kontexte verfügbar. In [WebGL2](/de/docs/Web/API/WebGL2RenderingContext) steht ihre Funktionalität im WebGL2-Kontext standardmäßig zur Verfügung; die Konstanten und Methoden sind ohne das Präfix `ANGLE_` verfügbar.
>
> Trotz des Namens „ANGLE“ funktioniert diese Erweiterung auf jedem Gerät, dessen Hardware sie unterstützt – nicht nur unter Windows bei Verwendung der ANGLE-Bibliothek. „ANGLE“ weist lediglich darauf hin, dass die Erweiterung von den Autoren der ANGLE-Bibliothek geschrieben wurde.

## Konstanten

Diese Erweiterung stellt eine neue Konstante bereit, die in der Methode [`gl.getVertexAttrib()`](/de/docs/Web/API/WebGLRenderingContext/getVertexAttrib) verwendet werden kann:

- `ext.VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE`
  - : Gibt einen [`GLint`](/de/docs/Web/API/WebGL_API/Types) zurück, der den für das Instanz-Rendering verwendeten Divisor angibt, wenn die Konstante in [`gl.getVertexAttrib()`](/de/docs/Web/API/WebGLRenderingContext/getVertexAttrib) als Parameter `pname` verwendet wird.

## Instanzmethoden

Diese Erweiterung stellt drei neue Methoden bereit.

- [`ext.drawArraysInstancedANGLE()`](/de/docs/Web/API/ANGLE_instanced_arrays/drawArraysInstancedANGLE)
  - : Verhält sich wie [`gl.drawArrays()`](/de/docs/Web/API/WebGLRenderingContext/drawArrays), führt jedoch mehrere Instanzen des Elementbereichs aus und wechselt bei jeder Iteration zur nächsten Instanz.
- [`ext.drawElementsInstancedANGLE()`](/de/docs/Web/API/ANGLE_instanced_arrays/drawElementsInstancedANGLE)
  - : Verhält sich wie [`gl.drawElements()`](/de/docs/Web/API/WebGLRenderingContext/drawElements), führt jedoch mehrere Instanzen der Elementmenge aus und wechselt zwischen den einzelnen Mengen zur nächsten Instanz.
- [`ext.vertexAttribDivisorANGLE()`](/de/docs/Web/API/ANGLE_instanced_arrays/vertexAttribDivisorANGLE)
  - : Ändert die Häufigkeit, mit der generische Vertex-Attribute fortgeschaltet werden, wenn mehrere Instanzen von Primitiven mit [`ext.drawArraysInstancedANGLE()`](/de/docs/Web/API/ANGLE_instanced_arrays/drawArraysInstancedANGLE) und [`ext.drawElementsInstancedANGLE()`](/de/docs/Web/API/ANGLE_instanced_arrays/drawElementsInstancedANGLE) gerendert werden.

## Beispiele

Das folgende Beispiel zeigt, wie Sie eine bestimmte Geometrie mit einem einzigen Zeichenaufruf mehrfach zeichnen.

> [!WARNING]
> Der folgende Code dient der Veranschaulichung und ist nicht für den Produktiveinsatz gedacht. Im Allgemeinen sollten Daten oder Buffer nicht innerhalb der Rendering-Schleife oder unmittelbar vor ihrer Verwendung erstellt werden.

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
