---
title: "WebGLRenderingContext: Methode enableVertexAttribArray()"
short-title: enableVertexAttribArray()
slug: Web/API/WebGLRenderingContext/enableVertexAttribArray
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{APIRef("WebGL")}}

Die Methode **`enableVertexAttribArray()`** des [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext), Teil der [WebGL API](/de/docs/Web/API/WebGL_API), aktiviert das generische Vertex-Attributarray am angegebenen Index in der Liste der Attributarrays.

> [!NOTE]
> Sie können das Attributarray deaktivieren, indem Sie [`disableVertexAttribArray()`](/de/docs/Web/API/WebGLRenderingContext/disableVertexAttribArray) aufrufen.

In WebGL werden Werte, die auf ein bestimmtes Vertex angewendet werden, in [Attributen](/de/docs/Web/API/WebGL_API/Data#attributes) gespeichert. Diese sind nur für den JavaScript-Code und den Vertex-Shader verfügbar. Attribute werden durch eine Indexnummer in der vom GPU verwalteten Attributliste referenziert. Einige Vertex-Attributindizes können je nach Plattform und/oder GPU vordefinierte Zwecke haben. Andere werden von der WebGL-Schicht vergeben, wenn Sie die Attribute erstellen.

Attributes können jedoch nicht verwendet werden, es sei denn, sie sind aktiviert, und sind standardmäßig deaktiviert. Daher müssen Sie `enableVertexAttribArray()` aufrufen, um einzelne Attribute zu aktivieren, damit sie verwendet werden können. Sobald dies geschehen ist, können andere Methoden verwendet werden, um auf das Attribut zuzugreifen, einschließlich [`vertexAttribPointer()`](/de/docs/Web/API/WebGLRenderingContext/vertexAttribPointer), [`vertexAttrib*()`](/de/docs/Web/API/WebGLRenderingContext/vertexAttrib) und [`getVertexAttrib()`](/de/docs/Web/API/WebGLRenderingContext/getVertexAttrib).

## Syntax

```js-nolint
enableVertexAttribArray(index)
```

### Parameter

- `index`
  - : Ein [`GLuint`](/de/docs/Web/API/WebGL_API/Types), der die Indexnummer angibt, die das Vertex-Attribut eindeutig identifiziert, das aktiviert werden soll. Wenn Sie den Namen des Attributs, aber nicht dessen Index kennen, können Sie den Index durch Aufruf von [`getAttribLocation()`](/de/docs/Web/API/WebGLRenderingContext/getAttribLocation) erhalten.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Fehler

Um nach dem Aufruf von `enableVertexAttribArray()` nach Fehlern zu suchen, rufen Sie [`getError()`](/de/docs/Web/API/WebGLRenderingContext/getError) auf.

- `WebGLRenderingContext.INVALID_VALUE`
  - : Der angegebene `index` ist ungültig; das bedeutet, er ist größer oder gleich der maximal zulässigen Anzahl von Einträgen in der Vertex-Attributliste des Kontexts, wie durch den Wert von `WebGLRenderingContext.MAX_VERTEX_ATTRIBS` angegeben.

## Beispiele

Dieser Code — ein Ausschnitt aus dem vollständigen Beispiel [Ein einfaches 2D-WebGL-Animationsbeispiel](/de/docs/Web/API/WebGL_API/Basic_2D_animation_example) — zeigt die Verwendung von `enableVertexAttribArray()`, um das Attribut zu aktivieren, das von der WebGL-Schicht verwendet wird, um einzelne Vertexe aus dem Vertex-Buffer in die Vertex-Shader-Funktion zu übergeben.

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
> Dieses Codebeispiel stammt aus [der Funktion `animateScene()`](/de/docs/Web/API/WebGL_API/Basic_2D_animation_example#drawing_and_animating_the_scene) im "Ein einfaches 2D-WebGL-Animationsbeispiel." Sehen Sie sich diesen Artikel für das vollständige Beispiel an und um die resultierende Animation in Aktion zu sehen.

Dieser Code setzt den Buffer von Vertexen, der zum Zeichnen der Dreiecke der Form verwendet wird, durch Aufruf von [`bindBuffer()`](/de/docs/Web/API/WebGLRenderingContext/bindBuffer). Dann wird der Index des Vertex-Positionsattributs aus dem Shader-Programm durch Aufruf von [`getAttribLocation()`](/de/docs/Web/API/WebGLRenderingContext/getAttribLocation) erhalten.

Mit dem jetzt verfügbaren Index des Vertex-Positionsattributs in `aVertexPosition` rufen wir `enableVertexAttribArray()` auf, um das Positionsattribut zu aktivieren, damit es vom Shader-Programm (insbesondere vom Vertex-Shader) verwendet werden kann.

Dann wird der Vertex-Buffer an das `aVertexPosition`-Attribut durch Aufruf von [`vertexAttribPointer()`](/de/docs/Web/API/WebGLRenderingContext/vertexAttribPointer) gebunden. Dieser Schritt ist nicht offensichtlich, da diese Bindung fast als Nebeneffekt erfolgt. Aber infolge dessen wird beim Zugriff auf `aVertexPosition` nun auf Daten aus dem Vertex-Buffer zugegriffen.

Mit der bestehenden Verbindung zwischen dem Vertex-Buffer für unsere Form und dem `aVertexPosition`-Attribut, das verwendet wird, um Vertexe einzeln in den Vertex-Shader zu liefern, sind wir bereit, die Form durch Aufruf von [`drawArrays()`](/de/docs/Web/API/WebGLRenderingContext/drawArrays) zu zeichnen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Daten in WebGL](/de/docs/Web/API/WebGL_API/Data)
- [Hinzufügen von 2D-Inhalten zu einem WebGL-Kontext](/de/docs/Web/API/WebGL_API/Tutorial/Adding_2D_content_to_a_WebGL_context)
- [Ein einfaches 2D-WebGL-Animationsbeispiel](/de/docs/Web/API/WebGL_API/Basic_2D_animation_example)
- [`disableVertexAttribArray()`](/de/docs/Web/API/WebGLRenderingContext/disableVertexAttribArray)
