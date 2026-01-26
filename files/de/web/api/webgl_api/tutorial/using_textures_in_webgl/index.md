---
title: Verwendung von Texturen in WebGL
slug: Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL
l10n:
  sourceCommit: be462ccb608b9c2d9ef69b143961da8da77aa60d
---

{{DefaultAPISidebar("WebGL")}} {{PreviousNext("Web/API/WebGL_API/Tutorial/Creating_3D_objects_using_WebGL", "Web/API/WebGL_API/Tutorial/Lighting_in_WebGL")}}

Nachdem unser Beispielprogramm nun über einen rotierenden 3D-Würfel verfügt, lassen Sie uns eine Textur darauf abbilden, anstatt seine Flächen mit Vollfarben zu füllen.

## Laden von Texturen

Zunächst muss der Code zum Laden der Texturen hinzugefügt werden. In unserem Fall werden wir eine einzige Textur verwenden, die auf alle sechs Seiten unseres rotierenden Würfels abgebildet wird, aber dieselbe Technik kann für beliebig viele Texturen verwendet werden.

> [!NOTE]
> Es ist wichtig zu beachten, dass das Laden von Texturen den [Cross-Domain-Regeln](/de/docs/Web/HTTP/Guides/CORS) folgt; das heißt, Sie können nur Texturen von Websites laden, für die Ihr Inhalt CORS-Genehmigung hat. Siehe [Cross-Domain-Texturen unten](#cross-domain-texturen) für Details.

> [!NOTE]
> Fügen Sie diese beiden Funktionen zu Ihrem Skript "webgl-demo.js" hinzu:

```js
//
// Initialize a texture and load an image.
// When the image finished loading copy it into the texture.
//
function loadTexture(gl, url) {
  const texture = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, texture);

  // Because images have to be downloaded over the internet
  // they might take a moment until they are ready.
  // Until then put a single pixel in the texture so we can
  // use it immediately. When the image has finished downloading
  // we'll update the texture with the contents of the image.
  const level = 0;
  const internalFormat = gl.RGBA;
  const width = 1;
  const height = 1;
  const border = 0;
  const srcFormat = gl.RGBA;
  const srcType = gl.UNSIGNED_BYTE;
  const pixel = new Uint8Array([0, 0, 255, 255]); // opaque blue
  gl.texImage2D(
    gl.TEXTURE_2D,
    level,
    internalFormat,
    width,
    height,
    border,
    srcFormat,
    srcType,
    pixel,
  );

  const image = new Image();
  image.onload = () => {
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texImage2D(
      gl.TEXTURE_2D,
      level,
      internalFormat,
      srcFormat,
      srcType,
      image,
    );

    // WebGL1 has different requirements for power of 2 images
    // vs. non power of 2 images so check if the image is a
    // power of 2 in both dimensions.
    if (isPowerOf2(image.width) && isPowerOf2(image.height)) {
      // Yes, it's a power of 2. Generate mips.
      gl.generateMipmap(gl.TEXTURE_2D);
    } else {
      // No, it's not a power of 2. Turn off mips and set
      // wrapping to clamp to edge
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    }
  };
  image.src = url;

  return texture;
}

function isPowerOf2(value) {
  return (value & (value - 1)) === 0;
}
```

Die `loadTexture()`-Routine beginnt mit der Erstellung eines WebGL-Texturobjekts `texture` durch Aufrufen der WebGL-Funktion [`createTexture()`](/de/docs/Web/API/WebGLRenderingContext/createTexture). Dann wird ein einzelnes blaues Pixel unter Verwendung von [`texImage2D()`](/de/docs/Web/API/WebGLRenderingContext/texImage2D) hochgeladen. Dadurch ist die Textur sofort als einheitliche blaue Farbe verwendbar, auch wenn das Herunterladen unseres Bildes möglicherweise einige Momente dauert.

Um die Textur aus der Bilddatei zu laden, erstellt sie dann ein `Image`-Objekt und weist `src` die URL des Bildes zu, das wir als unsere Textur verwenden möchten. Die Funktion, die wir `image.onload` zuweisen, wird aufgerufen, sobald das Bild heruntergeladen wurde. An diesem Punkt rufen wir erneut [`texImage2D()`](/de/docs/Web/API/WebGLRenderingContext/texImage2D) auf, diesmal unter Verwendung des Bildes als Quelle für die Textur. Danach richten wir das Filtern und Wrapping für die Textur basierend darauf ein, ob das heruntergeladene Bild eine Zweierpotenz in beiden Dimensionen darstellt oder nicht.

WebGL1 kann nur Nicht-Zweierpotenzen-Texturen verwenden, wenn das Filtern auf `NEAREST` oder `LINEAR` gesetzt ist, und es kann kein Mipmap dafür generiert werden. Ihr Wrapping-Modus muss ebenfalls auf `CLAMP_TO_EDGE` gesetzt werden. Wenn die Textur hingegen eine Zweierpotenz in beiden Dimensionen ist, kann WebGL eine höhere Qualitätsfilterung durchführen, Mipmap verwenden und den Wrapping-Modus auf `REPEAT` oder `MIRRORED_REPEAT` setzen.

Ein Beispiel für eine wiederholte Textur ist das Kacheln eines Bildes mit einigen Ziegeln, um eine Ziegelmauer abzudecken.

Mipmapping und UV-Wiederholung können mit [`texParameteri()`](/de/docs/Web/API/WebGLRenderingContext/texParameter) deaktiviert werden. Dies erlaubt Nicht-Zweierpotenzen-Texturen auf Kosten von Mipmapping, UV-Wrapping, UV-Kachelung und Ihrer Kontrolle darüber, wie das Gerät Ihre Textur handhaben wird.

```js
// gl.NEAREST is also allowed, instead of gl.LINEAR, as neither mipmap.
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
// Prevents s-coordinate wrapping (repeating).
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
// Prevents t-coordinate wrapping (repeating).
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
```

Mit diesen Parametern akzeptieren kompatible WebGL-Geräte jede Auflösung für diese Textur (bis zu ihren maximalen Abmessungen) automatisch. Ohne die oben beschriebene Konfiguration erfordert WebGL, dass alle Proben von Nicht-Zweierpotenzen-Texturen fehlschlagen, indem sie transparentes Schwarz zurückgeben: `rgb(0 0 0 / 0%)`.

Um das Bild zu laden, fügen Sie einen Aufruf zu unserer `loadTexture()`-Funktion innerhalb unserer `main()`-Funktion hinzu. Dies kann nach dem Aufruf von `initBuffers(gl)` erfolgen.

Es ist jedoch auch zu beachten: Browser kopieren Pixel aus dem geladenen Bild in der Reihenfolge von oben nach unten - aus der oberen linken Ecke; WebGL hingegen möchte die Pixel in der Reihenfolge von unten nach oben - beginnend von der unteren linken Ecke. (Für weitere Details siehe [Warum ist meine WebGL-Textur kopfüber?](https://jameshfisher.com/2020/10/22/why-is-my-webgl-texture-upside-down/).)

Um zu verhindern, dass die resultierende Bildtextur bei der Wiedergabe falsch ausgerichtet ist, müssen wir auch [`pixelStorei()`](/de/docs/Web/API/WebGLRenderingContext/pixelStorei) mit dem Parameter `gl.UNPACK_FLIP_Y_WEBGL` auf `true` setzen, um die Pixel in die von WebGL erwartete Reihenfolge von unten nach oben umzuwandeln.

> [!NOTE]
> Fügen Sie den folgenden Code zu Ihrer `main()`-Funktion hinzu, direkt nach dem Aufruf von `initBuffers()`:

```js
// Load texture
const texture = loadTexture(gl, "cubetexture.png");
// Flip image pixels into the bottom-to-top order that WebGL expects.
gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
```

> [!NOTE]
> Laden Sie abschließend die Datei [cubetexture.png](https://raw.githubusercontent.com/mdn/dom-examples/main/webgl-examples/tutorial/sample6/cubetexture.png) in demselben lokalen Verzeichnis wie Ihre JavaScript-Dateien herunter.

## Abbildung der Textur auf die Flächen

An diesem Punkt ist die Textur geladen und einsatzbereit. Bevor wir sie jedoch verwenden können, müssen wir das Mapping der Texturkoordinaten auf die Vertizes der Flächen unseres Würfels festlegen. Dies ersetzt den gesamten zuvor vorhandenen Code zur Konfiguration der Farben für jede der Würfelflächen in `initBuffers()`.

> [!NOTE]
> Fügen Sie diese Funktion zu Ihrem Modul "init-buffer.js" hinzu:

```js
function initTextureBuffer(gl) {
  const textureCoordBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, textureCoordBuffer);

  const textureCoordinates = [
    // Front
    0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0,
    // Back
    0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0,
    // Top
    0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0,
    // Bottom
    0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0,
    // Right
    0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0,
    // Left
    0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0,
  ];

  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array(textureCoordinates),
    gl.STATIC_DRAW,
  );

  return textureCoordBuffer;
}
```

Zunächst erstellt dieser Code einen WebGL-Puffer, in dem wir die Texturkoordinaten für jede Fläche speichern, dann binden wir diesen Puffer als das Array, in das wir schreiben werden.

Das `textureCoordinates`-Array definiert die Texturkoordinaten, die jedem Vertex jeder Fläche entsprechen. Beachten Sie, dass die Texturkoordinaten von 0,0 bis 1,0 reichen; die Dimensionen der Texturen sind für den Zweck der Texturabbildung auf einen Bereich von 0,0 bis 1,0 normalisiert, unabhängig von ihrer tatsächlichen Größe.

Sobald wir das Textur-Mapping-Array eingerichtet haben, übergeben wir das Array an den Puffer, damit WebGL diese Daten zur Nutzung bereit hat.

Dann geben wir den neuen Puffer zurück.

Anschließend müssen wir `initBuffers()` aktualisieren, um den Texturkoordinatenpuffer anstelle des Farb-Puffers zu erstellen und zurückzugeben.

> [!NOTE]
> Ersetzen Sie im Modul "init-buffers.js" in der Funktion `initBuffers()` den Aufruf von `initColorBuffer()` durch die folgende Zeile:

```js
const textureCoordBuffer = initTextureBuffer(gl);
```

> [!NOTE]
> Ersetzen Sie im Modul "init-buffers.js" in der Funktion `initBuffers()` die `return`-Anweisung durch die folgende:

```js
return {
  position: positionBuffer,
  textureCoord: textureCoordBuffer,
  indices: indexBuffer,
};
```

## Aktualisierung der Shader

Das Shader-Programm muss ebenfalls aktualisiert werden, um die Texturen anstelle von Vollfarben zu verwenden.

### Der Vertex-Shader

Wir müssen den Vertex-Shader ersetzen, damit er anstelle der Farbdatenerfassung die Texturkoordinatendaten erfasst.

> [!NOTE]
> Aktualisieren Sie die `vsSource`-Deklaration in Ihrer `main()`-Funktion wie folgt:

```js
const vsSource = `
    attribute vec4 aVertexPosition;
    attribute vec2 aTextureCoord;

    uniform mat4 uModelViewMatrix;
    uniform mat4 uProjectionMatrix;

    varying highp vec2 vTextureCoord;

    void main(void) {
      gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
      vTextureCoord = aTextureCoord;
    }
  `;
```

Der wichtigste Unterschied hier ist, dass wir anstelle der Erfassung der Vertex-Farbe die Texturkoordinaten erfassen und an den Fragment-Shader übergeben; dies zeigt den Ort innerhalb der Textur an, der dem Vertex entspricht.

### Der Fragment-Shader

Auch der Fragment-Shader muss aktualisiert werden.

> [!NOTE]
> Aktualisieren Sie die `fsSource`-Deklaration in Ihrer `main()`-Funktion wie folgt:

```js
const fsSource = `
    varying highp vec2 vTextureCoord;

    uniform sampler2D uSampler;

    void main(void) {
      gl_FragColor = texture2D(uSampler, vTextureCoord);
    }
  `;
```

Anstatt einen Farbwert der Farbe des Fragments zuzuweisen, wird die Farbe des Fragments berechnet, indem der {{Glossary("texel", "Texel")}} (das heißt, das Pixel innerhalb der Textur) basierend auf dem Wert von `vTextureCoord`, welches wie die Farben zwischen den Vertizes interpoliert wird, ermittelt wird.

### Attribut- und Uniform-Positionen

Da wir ein Attribut geändert und ein Uniform hinzugefügt haben, müssen wir deren Positionen ermitteln.

> [!NOTE]
> Aktualisieren Sie die `programInfo`-Deklaration in Ihrer `main()`-Funktion wie folgt:

```js
const programInfo = {
  program: shaderProgram,
  attribLocations: {
    vertexPosition: gl.getAttribLocation(shaderProgram, "aVertexPosition"),
    textureCoord: gl.getAttribLocation(shaderProgram, "aTextureCoord"),
  },
  uniformLocations: {
    projectionMatrix: gl.getUniformLocation(shaderProgram, "uProjectionMatrix"),
    modelViewMatrix: gl.getUniformLocation(shaderProgram, "uModelViewMatrix"),
    uSampler: gl.getUniformLocation(shaderProgram, "uSampler"),
  },
};
```

## Zeichnen des texturierten Würfels

Die Änderungen an der Funktion `drawScene()` sind einfach.

> [!NOTE]
> Fügen Sie in der Funktion `drawScene()` Ihres Moduls "draw-scene.js" die folgende Funktion hinzu:

```js
// tell webgl how to pull out the texture coordinates from buffer
function setTextureAttribute(gl, buffers, programInfo) {
  const num = 2; // every coordinate composed of 2 values
  const type = gl.FLOAT; // the data in the buffer is 32-bit float
  const normalize = false; // don't normalize
  const stride = 0; // how many bytes to get from one set to the next
  const offset = 0; // how many bytes inside the buffer to start from
  gl.bindBuffer(gl.ARRAY_BUFFER, buffers.textureCoord);
  gl.vertexAttribPointer(
    programInfo.attribLocations.textureCoord,
    num,
    type,
    normalize,
    stride,
    offset,
  );
  gl.enableVertexAttribArray(programInfo.attribLocations.textureCoord);
}
```

> [!NOTE]
> Ersetzen Sie in der Funktion `drawScene()` Ihres Moduls "draw-scene.js" den Aufruf von `setColorAttribute()` durch die folgende Zeile:

```js
setTextureAttribute(gl, buffers, programInfo);
```

Dann fügen Sie Code hinzu, um die zu den Flächen zuzuordnende Textur anzugeben.

> [!NOTE]
> Fügen Sie in Ihrer `drawScene()`-Funktion direkt nach den beiden Aufrufen zu `gl.uniformMatrix4fv()` den folgenden Code hinzu:

```js
// Tell WebGL we want to affect texture unit 0
gl.activeTexture(gl.TEXTURE0);

// Bind the texture to texture unit 0
gl.bindTexture(gl.TEXTURE_2D, texture);

// Tell the shader we bound the texture to texture unit 0
gl.uniform1i(programInfo.uniformLocations.uSampler, 0);
```

WebGL bietet mindestens 8 Textureinheiten; die erste davon ist `gl.TEXTURE0`. Wir teilen WebGL mit, dass wir Einheit 0 beeinflussen möchten. Dann rufen wir [`bindTexture()`](/de/docs/Web/API/WebGLRenderingContext/bindTexture) auf, das die Textur an den `TEXTURE_2D`-Bindungspunkt der Texteinheit 0 bindet. Wir teilen dann dem Shader mit, dass er für das `uSampler` die Texteinheit 0 verwenden soll.

Schließlich fügen Sie der `drawScene()`-Funktion `texture` als Parameter hinzu, sowohl dort, wo sie definiert ist, als auch wo sie aufgerufen wird.

Aktualisieren Sie die Deklaration Ihrer `drawScene()`-Funktion, um den neuen Parameter hinzuzufügen:

```js
function drawScene(gl, programInfo, buffers, texture, cubeRotation) {
  // …
}
```

Aktualisieren Sie die Stelle in Ihrer `main()`-Funktion, wo Sie `drawScene()` aufrufen:

```js
drawScene(gl, programInfo, buffers, texture, cubeRotation);
```

An diesem Punkt sollte der rotierende Würfel bereit sein.

{{EmbedGHLiveSample('dom-examples/webgl-examples/tutorial/sample6/index.html', 670, 510)}}

[Sehen Sie sich den vollständigen Code an](https://github.com/mdn/dom-examples/tree/main/webgl-examples/tutorial/sample6) | [Öffnen Sie dieses Demo auf einer neuen Seite](https://mdn.github.io/dom-examples/webgl-examples/tutorial/sample6/)

## Cross-Domain-Texturen

Das Laden von WebGL-Texturen unterliegt den Cross-Domain-Zugriffskontrollen. Damit Ihr Inhalt eine Textur von einer anderen Domain laden kann, muss CORS-Genehmigung eingeholt werden. Siehe [HTTP-Zugriffskontrolle](/de/docs/Web/HTTP/Guides/CORS) für Details zu CORS.

Moderne Browser behandeln die Herkunft von Dateien, die mit dem Protokoll `file:///` geladen werden, normalerweise als _nicht durchschaubare Ursprünge_ (opaque origins). Selbst wenn eine Datei andere Dateien aus demselben Ordner einbezieht, wird nicht davon ausgegangen, dass sie aus demselben Ursprung stammen, was möglicherweise CORS-Fehler auslöst (siehe [Same-origin policy#File origins](/de/docs/Web/Security/Defenses/Same-origin_policy#file_origins)). Das bedeutet, dass Sie keine Texturen verwenden können, die aus `file:///`-URLs in WebGL geladen werden, und einen Webserver benötigen, um Ihren Code zu testen und bereitzustellen. Für lokale Tests lesen Sie unseren Leitfaden [Wie richten Sie einen lokalen Testserver ein?](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server) für Hilfe.

Lesen Sie diesen [Artikel auf hacks.mozilla.org](https://hacks.mozilla.org/2011/11/using-cors-to-load-webgl-textures-from-cross-domain-images/) für eine Erklärung, wie man CORS-genehmigte Bilder als WebGL-Texturen verwendet.

Verdorbene (nur-schreibbare) 2D-Canvases können nicht als WebGL-Texturen verwendet werden. Ein 2D-{{ HTMLElement("canvas") }} wird beispielsweise verdorben, wenn ein Cross-Domain-Bild darauf gezeichnet wird.

{{PreviousNext("Web/API/WebGL_API/Tutorial/Creating_3D_objects_using_WebGL", "Web/API/WebGL_API/Tutorial/Lighting_in_WebGL")}}
