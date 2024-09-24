---
title: ANGLE_instanced_arrays
slug: Web/API/ANGLE_instanced_arrays
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{APIRef("WebGL")}}

Die **`ANGLE_instanced_arrays`** Erweiterung ist Teil der [WebGL API](/de/docs/Web/API/WebGL_API) und ermöglicht das mehrfache Zeichnen desselben Objekts oder Gruppen ähnlicher Objekte, wenn sie dieselben Vertexdaten, Primivienanzahl und Typ teilen.

WebGL-Erweiterungen sind über die Methode {{domxref("WebGLRenderingContext.getExtension()")}} verfügbar. Für weitere Informationen, siehe auch [Using Extensions](/de/docs/Web/API/WebGL_API/Using_Extensions) im [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial).

> [!NOTE]
> Diese Erweiterung ist nur in {{domxref("WebGLRenderingContext", "WebGL1", "", 1)}} Kontexten verfügbar. In {{domxref("WebGL2RenderingContext", "WebGL2", "", 1)}} ist die Funktionalität dieser Erweiterung im WebGL2-Kontext standardmäßig verfügbar und die Konstanten und Methoden sind ohne das Suffix "`ANGLE`" verfügbar.
>
> Trotz des Namens "ANGLE" funktioniert diese Erweiterung auf jedem Gerät, wenn die Hardware sie unterstützt und nicht nur unter Windows bei Verwendung der ANGLE-Bibliothek. "ANGLE" zeigt lediglich an, dass diese Erweiterung von den Autoren der ANGLE-Bibliothek geschrieben wurde.

## Konstanten

Diese Erweiterung legt eine neue Konstante offen, die in der {{domxref("WebGLRenderingContext.getVertexAttrib()", "gl.getVertexAttrib()")}} Methode verwendet werden kann:

- `ext.VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE`
  - : Gibt einen {{domxref("WebGL_API/Types", "GLint")}} zurück, der den Frequenzteiler beschreibt, der für instanziertes Rendern verwendet wird, wenn er in {{domxref("WebGLRenderingContext.getVertexAttrib()", "gl.getVertexAttrib()")}} als `pname`-Parameter verwendet wird.

## Instanzmethoden

Diese Erweiterung legt drei neue Methoden offen.

- {{domxref("ANGLE_instanced_arrays.drawArraysInstancedANGLE()", "ext.drawArraysInstancedANGLE()")}}
  - : Verhält sich identisch zu {{domxref("WebGLRenderingContext.drawArrays()", "gl.drawArrays()")}}, außer dass mehrere Instanzen des Elementbereichs ausgeführt werden und die Instanz sich bei jeder Iteration weiterentwickelt.
- {{domxref("ANGLE_instanced_arrays.drawElementsInstancedANGLE()", "ext.drawElementsInstancedANGLE()")}}
  - : Verhält sich identisch zu {{domxref("WebGLRenderingContext.drawElements()", "gl.drawElements()")}}, außer dass mehrere Instanzen der Elementgruppe ausgeführt werden und die Instanz sich zwischen jedem Satz weiterentwickelt.
- {{domxref("ANGLE_instanced_arrays.vertexAttribDivisorANGLE()", "ext.vertexAttribDivisorANGLE()")}}
  - : Modifiziert die Rate, mit der generische Vertex-Attribute voranschreiten, wenn mehrere Instanzen von Primitiven mit {{domxref("ANGLE_instanced_arrays.drawArraysInstancedANGLE()", "ext.drawArraysInstancedANGLE()")}} und {{domxref("ANGLE_instanced_arrays.drawElementsInstancedANGLE()", "ext.drawElementsInstancedANGLE()")}} gerendert werden.

## Beispiele

Das folgende Beispiel zeigt, wie man eine gegebene Geometrie mit einem einzigen Zeichnungsaufruf mehrfach zeichnet.

> [!WARNING]
> Das Folgende ist ein Lernbeispiel, kein produktionsreifer Code. Es sollte im Allgemeinen vermieden werden, Daten / Puffer innerhalb der Rendering-Schleife oder unmittelbar vor der Verwendung zu erstellen.

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

- {{domxref("WebGLRenderingContext.getExtension()")}}
- {{domxref("WebGL2RenderingContext.drawArraysInstanced()")}}
- {{domxref("WebGL2RenderingContext.drawElementsInstanced()")}}
- {{domxref("WebGL2RenderingContext.vertexAttribDivisor()")}}
