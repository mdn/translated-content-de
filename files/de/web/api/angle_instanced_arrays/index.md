---
title: ANGLE_instanced_arrays
slug: Web/API/ANGLE_instanced_arrays
l10n:
  sourceCommit: 56f3d7018159127dbe92842413fb45d0aa7e8193
---

{{APIRef("WebGL")}}

Die **`ANGLE_instanced_arrays`** Erweiterung ist Teil der [WebGL API](/de/docs/Web/API/WebGL_API) und ermöglicht es, dasselbe Objekt oder Gruppen ähnlicher Objekte mehrfach zu zeichnen, wenn sie die gleichen Vertex-Daten, Primitiveanzahl und Type teilen.

WebGL-Erweiterungen sind über die Methode [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension) verfügbar. Für weitere Informationen siehe auch [Verwendung von Erweiterungen](/de/docs/Web/API/WebGL_API/Using_Extensions) im [WebGL-Leitfaden](/de/docs/Web/API/WebGL_API/Tutorial).

> [!NOTE]
> Diese Erweiterung ist nur in [WebGL1](/de/docs/Web/API/WebGLRenderingContext) Kontexten verfügbar. In [WebGL2](/de/docs/Web/API/WebGL2RenderingContext) ist die Funktionalität dieser Erweiterung auf dem WebGL2-Kontext standardmäßig verfügbar und die Konstanten und Methoden sind ohne das `ANGLE_` Präfix verfügbar.
>
> Trotz des Namens "ANGLE" funktioniert diese Erweiterung auf jedem Gerät, wenn die Hardware sie unterstützt, und nicht nur auf Windows bei Verwendung der ANGLE-Bibliothek. "ANGLE" zeigt nur an, dass diese Erweiterung von den Autoren der ANGLE-Bibliothek geschrieben wurde.

## Konstanten

Diese Erweiterung bietet eine neue Konstante, die in der Methode [`gl.getVertexAttrib()`](/de/docs/Web/API/WebGLRenderingContext/getVertexAttrib) verwendet werden kann:

- `ext.VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE`
  - : Gibt einen [`GLint`](/de/docs/Web/API/WebGL_API/Types) zurück, der den Frequenzteiler beschreibt, der für instanzierte Rendering verwendet wird, wenn er in der Methode [`gl.getVertexAttrib()`](/de/docs/Web/API/WebGLRenderingContext/getVertexAttrib) als `pname` Parameter verwendet wird.

## Instanzmethoden

Diese Erweiterung bietet drei neue Methoden.

- [`ext.drawArraysInstancedANGLE()`](/de/docs/Web/API/ANGLE_instanced_arrays/drawArraysInstancedANGLE)
  - : Verhält sich identisch wie [`gl.drawArrays()`](/de/docs/Web/API/WebGLRenderingContext/drawArrays), außer dass mehrere Instanzen des Bereichs von Elementen ausgeführt werden und die Instanz bei jeder Iteration voranschreitet.
- [`ext.drawElementsInstancedANGLE()`](/de/docs/Web/API/ANGLE_instanced_arrays/drawElementsInstancedANGLE)
  - : Verhält sich identisch wie [`gl.drawElements()`](/de/docs/Web/API/WebGLRenderingContext/drawElements), außer dass mehrere Instanzen des Satzes von Elementen ausgeführt werden und die Instanz zwischen jedem Satz voranschreitet.
- [`ext.vertexAttribDivisorANGLE()`](/de/docs/Web/API/ANGLE_instanced_arrays/vertexAttribDivisorANGLE)
  - : Modifiziert die Rate, mit der generische Vertex-Attribute voranschreiten, wenn mehrere Instanzen von Primitiven mit [`ext.drawArraysInstancedANGLE()`](/de/docs/Web/API/ANGLE_instanced_arrays/drawArraysInstancedANGLE) und [`ext.drawElementsInstancedANGLE()`](/de/docs/Web/API/ANGLE_instanced_arrays/drawElementsInstancedANGLE) gerendert werden.

## Beispiele

Das folgende Beispiel zeigt, wie eine gegebene Geometrie mehrfach mit einem einzigen Zeichenaufruf gezeichnet wird.

> [!WARNING]
> Das Folgende ist bildend, nicht auf Produktionsniveau Code. Es sollte allgemein vermieden werden, Daten / Buffer innerhalb der Rendering-Schleife oder unmittelbar vor der Nutzung zu konstruieren.

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
