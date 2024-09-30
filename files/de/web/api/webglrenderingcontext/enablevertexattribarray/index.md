---
title: "WebGLRenderingContext: Methode enableVertexAttribArray()"
short-title: enableVertexAttribArray()
slug: Web/API/WebGLRenderingContext/enableVertexAttribArray
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext)-Methode **`enableVertexAttribArray()`**, die Teil der [WebGL-API](/de/docs/Web/API/WebGL_API) ist, aktiviert das generische Vertex-Attribut-Array an dem angegebenen Index in der Liste der Attribut-Arrays.

> [!NOTE]
> Sie können das Attribut-Array deaktivieren, indem Sie [`disableVertexAttribArray()`](/de/docs/Web/API/WebGLRenderingContext/disableVertexAttribArray) aufrufen.

In WebGL werden Werte, die einem bestimmten Vertex zugeordnet sind, in [Attributen](/de/docs/Web/API/WebGL_API/Data#attributes) gespeichert. Diese sind nur im JavaScript-Code und im Vertex-Shader verfügbar. Attribute werden durch eine Indexnummer in der vom GPU verwalteten Liste der Attribute referenziert. Einige Vertex-Attribut-Indizes können je nach Plattform und/oder GPU vordefinierte Zwecke haben. Andere werden von der WebGL-Schicht zugewiesen, wenn Sie die Attribute erstellen.

Da Attribute jedoch nicht verwendet werden können, solange sie nicht aktiviert sind und standardmäßig deaktiviert sind, müssen Sie `enableVertexAttribArray()` aufrufen, um einzelne Attribute zu aktivieren, damit sie verwendet werden können. Sobald dies geschehen ist, können andere Methoden verwendet werden, um auf das Attribut zuzugreifen, einschließlich [`vertexAttribPointer()`](/de/docs/Web/API/WebGLRenderingContext/vertexAttribPointer), [`vertexAttrib*()`](/de/docs/Web/API/WebGLRenderingContext/vertexAttrib) und [`getVertexAttrib()`](/de/docs/Web/API/WebGLRenderingContext/getVertexAttrib).

## Syntax

```js-nolint
enableVertexAttribArray(index)
```

### Parameter

- `index`
  - : Ein [`GLuint`](/de/docs/Web/API/WebGL_API/Types), der die Indexnummer angibt, die das zu aktivierende Vertex-Attribut eindeutig identifiziert. Wenn Sie den Namen des Attributs kennen, aber nicht dessen Index, können Sie den Index durch Aufrufen von [`getAttribLocation()`](/de/docs/Web/API/WebGLRenderingContext/getAttribLocation) erhalten.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Fehler

Um nach dem Aufruf von `enableVertexAttribArray()` auf Fehler zu prüfen, rufen Sie [`getError()`](/de/docs/Web/API/WebGLRenderingContext/getError) auf.

- `WebGLRenderingContext.INVALID_VALUE`
  - : Der angegebene `index` ist ungültig; das heißt, er ist größer oder gleich der maximal zulässigen Anzahl von Einträgen in der Vertex-Attributliste des Kontexts, wie durch den Wert von `WebGLRenderingContext.MAX_VERTEX_ATTRIBS` angegeben.

## Beispiele

Dieser Codeausschnitt, entnommen aus dem vollständigen Beispiel [Ein einfaches 2D-WebGL-Animationsbeispiel](/de/docs/Web/API/WebGL_API/Basic_2D_animation_example), zeigt die Verwendung von `enableVertexAttribArray()`, um das Attribut zu aktivieren, das durch die WebGL-Schicht verwendet wird, um einzelne Vertices aus dem Vertex-Puffer in die Vertex-Shader-Funktion zu übergeben.

```js
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);

aVertexPosition = gl.getAttribLocation(shaderProgram, "aVertexPosition");

gl.enableVertexAttribArray(aVertexPosition);
gl.vertexAttribPointer(
  aVertexPosition,
  vertexNumComponents,
  gl.FLOAT,
  false,
  0,
  0,
);

gl.drawArrays(gl.TRIANGLES, 0, vertexCount);
```

> [!NOTE]
> Dieser Codeausschnitt stammt aus [der Funktion `animateScene()`](/de/docs/Web/API/WebGL_API/Basic_2D_animation_example#drawing_and_animating_the_scene) im "Ein einfaches 2D-WebGL-Animationsbeispiel." Sehen Sie sich diesen Artikel an, um das vollständige Beispiel zu sehen und die resultierende Animation in Aktion zu sehen.

Dieser Code legt den Puffer von Vertices fest, der verwendet wird, um die Dreiecke der Form zu zeichnen, indem [`bindBuffer()`](/de/docs/Web/API/WebGLRenderingContext/bindBuffer) aufgerufen wird. Dann wird der Index des Vertex-Positions-Attributs aus dem Shader-Programm durch Aufrufen von [`getAttribLocation()`](/de/docs/Web/API/WebGLRenderingContext/getAttribLocation) erhalten.

Mit dem jetzt in `aVertexPosition` verfügbaren Index des Vertex-Positions-Attributs rufen wir `enableVertexAttribArray()` auf, um das Positionsattribut zu aktivieren, damit es vom Shader-Programm (insbesondere vom Vertex-Shader) verwendet werden kann.

Dann wird der Vertex-Puffer an das `aVertexPosition`-Attribut gebunden, indem [`vertexAttribPointer()`](/de/docs/Web/API/WebGLRenderingContext/vertexAttribPointer) aufgerufen wird. Dieser Schritt ist nicht offensichtlich, da diese Bindung fast ein Nebeneffekt ist. Aber als Ergebnis bezieht `aVertexPosition` jetzt Daten aus dem Vertex-Puffer.

Mit der Assoziation zwischen dem Vertex-Puffer für unsere Form und dem `aVertexPosition`-Attribut, das verwendet wird, um Vertices eins nach dem anderen in den Vertex-Shader zu liefern, sind wir bereit, die Form durch Aufrufen von [`drawArrays()`](/de/docs/Web/API/WebGLRenderingContext/drawArrays) zu zeichnen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Daten in WebGL](/de/docs/Web/API/WebGL_API/Data)
- [Hinzufügen von 2D-Inhalten zu einem WebGL-Kontext](/de/docs/Web/API/WebGL_API/Tutorial/Adding_2D_content_to_a_WebGL_context)
- [Ein einfaches 2D-WebGL-Animationsbeispiel](/de/docs/Web/API/WebGL_API/Basic_2D_animation_example)
- [`disableVertexAttribArray()`](/de/docs/Web/API/WebGLRenderingContext/disableVertexAttribArray)
