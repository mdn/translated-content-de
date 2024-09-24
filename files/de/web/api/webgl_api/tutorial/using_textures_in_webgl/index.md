---
title: Verwenden von Texturen in WebGL
slug: Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{DefaultAPISidebar("WebGL")}} {{PreviousNext("Web/API/WebGL_API/Tutorial/Creating_3D_objects_using_WebGL", "Web/API/WebGL_API/Tutorial/Lighting_in_WebGL")}}

Nun, da unser Beispielprogramm einen rotierenden 3D-Würfel hat, lassen Sie uns eine Textur darauf abbilden, anstatt seine Flächen in Vollfarben darzustellen.

## Laden von Texturen

Das Erste, was zu tun ist, ist das Hinzufügen von Code zum Laden der Texturen. In unserem Fall werden wir eine einzige Textur verwenden, die auf alle sechs Seiten unseres rotierenden Würfels abgebildet wird, aber dieselbe Technik kann für jede Anzahl von Texturen verwendet werden.

> [!NOTE]
> Es ist wichtig zu beachten, dass das Laden von Texturen den [CORS-Richtlinien](/de/docs/Web/HTTP/CORS) folgt; das heißt, Sie können nur Texturen von Websites laden, für die Ihr Inhalt CORS-Zulassung hat. Details finden Sie unter [Cross-domain Textures unten](#cross-domain-texturen).

> [!NOTE]
> Fügen Sie diese beiden Funktionen zu Ihrem "webgl-demo.js"-Skript hinzu:

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

Die `loadTexture()`-Routine beginnt mit der Erstellung eines WebGL-Texturobjekts `texture` durch Aufruf der WebGL-{{domxref("WebGLRenderingContext.createTexture()", "createTexture()")}}-Funktion. Danach wird ein einzelner blauer Pixel mit {{domxref("WebGLRenderingContext.texImage2D()", "texImage2D()")}} hochgeladen. Dies macht die Textur sofort als einheitlich blaue Farbe verwendbar, obwohl es einige Momente dauern kann, bis unser Bild heruntergeladen ist.

Um die Textur aus der Bilddatei zu laden, wird dann ein `Image`-Objekt erstellt und die `src` auf die URL des Bildes gesetzt, das wir als Textur verwenden möchten. Die Funktion, die wir `image.onload` zuweisen, wird aufgerufen, sobald das Bild heruntergeladen ist. An diesem Punkt rufen wir erneut {{domxref("WebGLRenderingContext.texImage2D()", "texImage2D()")}} auf, diesmal mit dem Bild als Quelle für die Textur. Danach richten wir das Filtern und Wrapping für die Textur ein, basierend darauf, ob das heruntergeladene Bild in beiden Dimensionen eine Zweierpotenz war oder nicht.

WebGL1 kann nicht Zweierpotenz-Texturen nur mit Filtern `NEAREST` oder `LINEAR` verwenden und es kann kein Mipmap für sie erzeugen. Ihr Wrapping-Modus muss ebenfalls auf `CLAMP_TO_EDGE` eingestellt sein. Andererseits, wenn die Textur in beiden Dimensionen eine Zweierpotenz ist, kann WebGL hochwertigere Filterungen verwenden, es kann Mipmap verwenden und es kann den Wrapping-Modus auf `REPEAT` oder `MIRRORED_REPEAT` setzen.

Ein Beispiel für eine wiederholte Textur ist das Kacheln eines Bildes von einigen Ziegeln, um eine Ziegelwand zu bedecken.

Mipmapping und UV-Wiederholungen können mit {{domxref("WebGLRenderingContext.texParameter()", "texParameteri()")}} deaktiviert werden. Dadurch werden nicht Zweierpotenz-Texturen unterstützt, allerdings auf Kosten von Mipmapping, UV-Wrapping, UV-Kachelung und Ihrer Kontrolle darüber, wie das Gerät Ihre Textur behandelt.

```js
// gl.NEAREST is also allowed, instead of gl.LINEAR, as neither mipmap.
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
// Prevents s-coordinate wrapping (repeating).
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
// Prevents t-coordinate wrapping (repeating).
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
```

Mit diesen Parametern werden kompatible WebGL-Geräte automatisch jede Auflösung für diese Textur akzeptieren (bis zu ihren maximalen Dimensionen). Ohne die oben genannten Einstellungen fordert WebGL, dass alle Muster von nicht Zweierpotenz-Texturen fehlschlagen und durch transparentes Schwarz zurückgegeben werden: `rgb(0 0 0 / 0%)`.

Um das Bild zu laden, fügen Sie einen Aufruf unserer `loadTexture()`-Funktion in Ihrer `main()`-Funktion hinzu. Dies kann nach dem Aufruf von `initBuffers(gl)` hinzugefügt werden.

Beachten Sie auch: Browser kopieren Pixel aus dem geladenen Bild in Top-to-Bottom-Reihenfolge — aus der oberen linken Ecke; aber WebGL möchte, dass die Pixel in Bottom-to-Top-Reihenfolge — von der unteren linken Ecke — vorliegen. (Für mehr Details siehe [Warum ist meine WebGL-Textur auf dem Kopf?](https://jameshfisher.com/2020/10/22/why-is-my-webgl-texture-upside-down/).)

Um also zu verhindern, dass die resultierende Bildtextur beim Rendern die falsche Orientierung hat, müssen wir auch [`pixelStorei()`](/de/docs/Web/API/WebGLRenderingContext/pixelStorei) mit dem Parameter `gl.UNPACK_FLIP_Y_WEBGL` auf `true` setzen — um die Pixel in die von WebGL erwartete Bottom-to-Top-Reihenfolge umzukehren.

> [!NOTE]
> Fügen Sie den folgenden Code in Ihre `main()`-Funktion direkt nach dem Aufruf von `initBuffers()` ein:

```js
// Load texture
const texture = loadTexture(gl, "cubetexture.png");
// Flip image pixels into the bottom-to-top order that WebGL expects.
gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
```

> [!NOTE]
> Laden Sie schließlich die Datei [cubetexture.png](https://raw.githubusercontent.com/mdn/dom-examples/main/webgl-examples/tutorial/sample6/cubetexture.png) in dasselbe lokale Verzeichnis wie Ihre JavaScript-Dateien herunter.

## Abbilden der Textur auf die Flächen

An diesem Punkt ist die Textur geladen und einsatzbereit. Aber bevor wir sie verwenden können, müssen wir die Zuordnung der Texturkoordinaten zu den Scheitelpunkten der Flächen unseres Würfels festlegen. Dies ersetzt den gesamten bisher vorhandenen Code zur Konfiguration der Farben für jede der Würfelflächen in `initBuffers()`.

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

Zuerst erstellt dieser Code einen WebGL-Puffer, in den wir die Texturkoordinaten für jede Fläche speichern werden, dann binden wir diesen Puffer als das Array, in das wir schreiben werden.

Das `textureCoordinates`-Array definiert die Texturkoordinaten, die mit jedem Eckpunkt jeder Fläche korrespondieren. Beachten Sie, dass die Texturkoordinaten von 0,0 bis 1,0 reichen; die Dimensionen von Texturen werden für den Zweck der Texturabbildung auf einen Bereich von 0,0 bis 1,0 normalisiert, unabhängig von ihrer tatsächlichen Größe.

Sobald wir das Texturabbildungsarray eingerichtet haben, geben wir das Array in den Puffer ein, sodass WebGL diese Daten zur Verwendung bereit hat.

Dann geben wir den neuen Puffer zurück.

Als nächstes müssen wir `initBuffers()` aktualisieren, um den Texturkoordinatenpuffer anstelle des Farbpuffers zu erstellen und zurückzugeben.

> [!NOTE]
> Ersetzen Sie den Aufruf von `initColorBuffer()` in der Funktion `initBuffers()` Ihres Moduls "init-buffers.js" mit der folgenden Zeile:

```js
const textureCoordBuffer = initTextureBuffer(gl);
```

> [!NOTE]
> Ersetzen Sie die `return`-Anweisung in der Funktion `initBuffers()` Ihres Moduls "init-buffers.js" mit dem folgenden:

```js
return {
  position: positionBuffer,
  textureCoord: textureCoordBuffer,
  indices: indexBuffer,
};
```

## Aktualisieren der Shader

Das Shader-Programm muss ebenfalls aktualisiert werden, um die Texturen anstelle von Vollfarben zu verwenden.

### Der Vertex-Shader

Wir müssen den Vertex-Shader ersetzen, damit er anstatt der Farbdaten die Texturkoordinatendaten abrufen kann.

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

Die wichtigste Änderung hier ist, dass anstatt die Eckpunktfarbe abzurufen, die Texturkoordinaten abgerufen und zum Vertex-Shader weitergegeben werden; dies wird den Ort innerhalb der Textur angeben, der dem Eckpunkt entspricht.

### Der Fragment-Shader

Der Fragment-Shader muss ebenfalls aktualisiert werden.

> [!NOTE]
> Aktualisieren Sie die `fsSource`-Deklaration in Ihrer `main()`-Funktion wie folgt:

```js
const fsSource = `
    varying highp vec2 vTextureCoord;

    uniform sampler2D uSampler;
    out vec4 fragColor;

    void main(void) {
      fragColor = texture(uSampler, vTextureCoord);
    }
  `;
```

Anstatt einen Farbwert der Fragmentfarbe zuzuweisen, wird die Fragmentfarbe durch Abrufen des {{Glossary("texel")}} (also des Pixels innerhalb der Textur) basierend auf dem Wert von `vTextureCoord` berechnet, der wie die Farben zwischen den Eckpunkten interpoliert wird.

### Attribut- und Uniform-Lokationen

Da wir ein Attribut geändert und ein Uniform hinzugefügt haben, müssen wir deren Standorte abfragen.

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

Die Änderungen an der `drawScene()`-Funktion sind einfach.

> [!NOTE]
> Fügen Sie die folgende Funktion zu Ihrer "draw-scene.js"-Modul in der `drawScene()`-Funktion hinzu:

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
> Ersetzen Sie den Aufruf von `setColorAttribute()` in der `drawScene()`-Funktion Ihres "draw-scene.js"-Moduls mit der folgenden Zeile:

```js
setTextureAttribute(gl, buffers, programInfo);
```

Fügen Sie dann Code hinzu, um die Textur an die Flächen abzubilden.

> [!NOTE]
> Fügen Sie in Ihrer `drawScene()`-Funktion direkt nach den beiden Aufrufen von `gl.uniformMatrix4fv()` den folgenden Code hinzu:

```js
// Tell WebGL we want to affect texture unit 0
gl.activeTexture(gl.TEXTURE0);

// Bind the texture to texture unit 0
gl.bindTexture(gl.TEXTURE_2D, texture);

// Tell the shader we bound the texture to texture unit 0
gl.uniform1i(programInfo.uniformLocations.uSampler, 0);
```

WebGL bietet mindestens 8 Textureinheiten; die erste davon ist `gl.TEXTURE0`. Wir teilen WebGL mit, dass wir die Einheit 0 beeinflussen wollen. Dann rufen wir {{domxref("WebGLRenderingContext.bindTexture()", "bindTexture()")}} auf, welches die Textur an den `TEXTURE_2D`-Bindepunkt der Textureinheit 0 bindet. Dann teilen wir dem Shader mit, dass für den `uSampler` die Textureinheit 0 verwendet werden soll.

Zuletzt fügen Sie `texture` als Parameter zur `drawScene()`-Funktion hinzu, sowohl dort, wo sie definiert ist, als auch dort, wo sie aufgerufen wird.

> [!NOTE]
> Aktualisieren Sie die Deklaration Ihrer `drawScene()`-Funktion, um den neuen Parameter hinzuzufügen:

```js-nolint
function drawScene(gl, programInfo, buffers, texture, cubeRotation) {
```

> [!NOTE]
> Aktualisieren Sie den Ort in Ihrer `main()`-Funktion, an dem Sie `drawScene()` aufrufen:

```js
drawScene(gl, programInfo, buffers, texture, cubeRotation);
```

An diesem Punkt sollte der rotierende Würfel einsatzbereit sein.

{{EmbedGHLiveSample('dom-examples/webgl-examples/tutorial/sample6/index.html', 670, 510) }}

[Sehen Sie sich den vollständigen Code an](https://github.com/mdn/dom-examples/tree/main/webgl-examples/tutorial/sample6) | [Öffnen Sie dieses Demo auf einer neuen Seite](https://mdn.github.io/dom-examples/webgl-examples/tutorial/sample6/)

## Cross-Domain-Texturen

Das Laden von WebGL-Texturen unterliegt den Zugriffssteuerungen für Cross-Domain. Damit Ihr Inhalt eine Textur von einer anderen Domain laden kann, muss eine CORS-Zulassung eingeholt werden. Details dazu finden Sie unter [HTTP-Zugriffskontrolle](/de/docs/Web/HTTP/CORS).

Da WebGL jetzt erfordert, dass Texturen aus sicheren Kontexten geladen werden, können Sie in WebGL keine Texturen verwenden, die von `file:///`-URLs geladen werden. Das bedeutet, dass Sie einen sicheren Webserver benötigen, um Ihren Code zu testen und bereitzustellen. Für lokale Tests siehe auch unseren Leitfaden [Wie richten Sie einen lokalen Testserver ein?](/de/docs/Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server) für Unterstützung.

Siehe diesen [Artikel auf hacks.mozilla.org](https://hacks.mozilla.org/2011/11/using-cors-to-load-webgl-textures-from-cross-domain-images/), um zu erfahren, wie man CORS-zugelassene Bilder als WebGL-Texturen verwendet.

Beschädigte (write-only) 2D-Canvases können nicht als WebGL-Texturen verwendet werden. Ein 2D-{{ HTMLElement("canvas") }} wird z.B. beschädigt, wenn ein Cross-Domain-Bild darauf gezeichnet wird.

{{PreviousNext("Web/API/WebGL_API/Tutorial/Creating_3D_objects_using_WebGL", "Web/API/WebGL_API/Tutorial/Lighting_in_WebGL")}}
