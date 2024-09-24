---
title: "WebGLRenderingContext: Methode enableVertexAttribArray()"
short-title: enableVertexAttribArray()
slug: Web/API/WebGLRenderingContext/enableVertexAttribArray
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{APIRef("WebGL")}}

Die Methode **`enableVertexAttribArray()`** des {{domxref("WebGLRenderingContext")}}, die Teil der [WebGL API](/de/docs/Web/API/WebGL_API) ist, aktiviert das generische Vertex-Attribut-Array an dem angegebenen Index in der Liste der Attribut-Arrays.

> [!NOTE]
> Sie können das Attribut-Array deaktivieren, indem Sie {{domxref("WebGLRenderingContext.disableVertexAttribArray", "disableVertexAttribArray()")}} aufrufen.

In WebGL werden Werte, die auf ein spezifisches Vertex angewendet werden, in [Attributen](/de/docs/Web/API/WebGL_API/Data#attributes) gespeichert. Diese sind nur für den JavaScript-Code und den Vertex-Shader verfügbar. Attribute werden durch eine Indexnummer in der vom GPU verwalteten Liste von Attributen referenziert. Einige Vertex-Attribut-Indizes können je nach Plattform und/oder GPU vordefinierte Zwecke haben. Andere werden von der WebGL-Schicht vergeben, wenn Sie die Attribute erstellen.

Da Attribute nicht verwendet werden können, es sei denn, sie sind aktiviert, und standardmäßig deaktiviert sind, müssen Sie `enableVertexAttribArray()` aufrufen, um einzelne Attribute zu aktivieren, damit sie verwendet werden können. Sobald dies geschehen ist, können andere Methoden verwendet werden, um auf das Attribut zuzugreifen, darunter {{domxref("WebGLRenderingContext.vertexAttribPointer", "vertexAttribPointer()")}}, {{domxref("WebGLRenderingContext.vertexAttrib", "vertexAttrib*()")}} und {{domxref("WebGLRenderingContext.getVertexAttrib", "getVertexAttrib()")}}.

## Syntax

```js-nolint
enableVertexAttribArray(index)
```

### Parameter

- `index`
  - : Ein {{domxref("WebGL_API/Types", "GLuint")}}, der die Indexnummer angibt, die das zu aktivierende Vertex-Attribut eindeutig identifiziert. Wenn Sie den Namen des Attributs, aber nicht den Index kennen, können Sie den Index erhalten, indem Sie {{domxref("WebGLRenderingContext.getAttribLocation", "getAttribLocation()")}} aufrufen.

### Rückgabewert

Kein ({{jsxref("undefined")}}).

### Fehler

Um nach dem Aufruf von `enableVertexAttribArray()` nach Fehlern zu suchen, rufen Sie {{domxref("WebGLRenderingContext.getError", "getError()")}} auf.

- `WebGLRenderingContext.INVALID_VALUE`
  - : Der angegebene `index` ist ungültig; das heißt, er ist größer oder gleich der maximalen Anzahl von Einträgen, die in der Vertex-Attribut-Liste des Kontexts erlaubt sind, wie durch den Wert von `WebGLRenderingContext.MAX_VERTEX_ATTRIBS` angegeben.

## Beispiele

Dieser Code — ein Ausschnitt aus dem vollständigen Beispiel [Ein einfaches 2D-WebGL-Animation-Beispiel](/de/docs/Web/API/WebGL_API/Basic_2D_animation_example) — zeigt die Verwendung von `enableVertexArray()`, um das Attribut zu aktivieren, das von der WebGL-Schicht verwendet wird, um einzelne Vertices aus dem Vertex-Puffer in die Vertex-Shader-Funktion zu übergeben.

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
> Dieser Codeausschnitt stammt aus [der Funktion `animateScene()`](/de/docs/Web/API/WebGL_API/Basic_2D_animation_example#drawing_and_animating_the_scene) im "Ein einfaches 2D-WebGL-Animation-Beispiel." Sehen Sie sich diesen Artikel für das vollständige Beispiel und die resultierende Animation in Aktion an.

Dieser Code legt den Puffer der Vertices fest, die verwendet werden, um die Dreiecke der Form zu zeichnen, indem {{domxref("WebGLRenderingContext.bindBuffer", "bindBuffer()")}} aufgerufen wird. Dann wird der Index des Vertex-Positionsattributs aus dem Shader-Programm abgerufen, indem {{domxref("WebGLRenderingContext.getAttribLocation", "getAttribLocation()")}} aufgerufen wird.

Mit dem jetzt verfügbaren Index des Vertex-Positionsattributs in `aVertexPosition` rufen wir `enableVertexAttribArray()` auf, um das Positionsattribut zu aktivieren, damit es vom Shader-Programm verwendet werden kann (insbesondere vom Vertex-Shader).

Dann wird der Vertex-Puffer dem `aVertexPosition`-Attribut zugewiesen, indem {{domxref("WebGLRenderingContext.vertexAttribPointer", "vertexAttribPointer()")}} aufgerufen wird. Dieser Schritt ist nicht offensichtlich, da diese Bindung fast ein Nebeneffekt ist. Aber als Ergebnis erhält der Zugriff auf `aVertexPosition` nun Daten aus dem Vertex-Puffer.

Mit der bestehenden Zuordnung zwischen dem Vertex-Puffer für unsere Form und dem `aVertexPosition`-Attribut, das benutzt wird, um Vertices einzeln in den Vertex-Shader zu übergeben, sind wir bereit, die Form zu zeichnen, indem wir {{domxref("WebGLRenderingContext.drawArrays", "drawArrays()")}} aufrufen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Daten in WebGL](/de/docs/Web/API/WebGL_API/Data)
- [Hinzufügen von 2D-Inhalten zu einem WebGL-Kontext](/de/docs/Web/API/WebGL_API/Tutorial/Adding_2D_content_to_a_WebGL_context)
- [Ein einfaches 2D-WebGL-Animationsbeispiel](/de/docs/Web/API/WebGL_API/Basic_2D_animation_example)
- {{domxref("WebGLRenderingContext.disableVertexAttribArray", "disableVertexAttribArray()")}}
