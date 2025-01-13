---
title: Verwendung von Texturen in WebGL
slug: Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL
l10n:
  sourceCommit: b2cab243cead88b01cb46c3444b62a45807a0d58
---

{{DefaultAPISidebar("WebGL")}} {{PreviousNext("Web/API/WebGL_API/Tutorial/Creating_3D_objects_using_WebGL", "Web/API/WebGL_API/Tutorial/Lighting_in_WebGL")}}

Nachdem unser Beispielprogramm nun einen rotierenden 3D-Würfel hat, wollen wir statt einfarbigen Flächen eine Textur darauf abbilden.

## Laden von Texturen

Das Erste, was zu tun ist, ist Code hinzuzufügen, um die Texturen zu laden. In unserem Fall verwenden wir eine einzelne Textur, die auf alle sechs Seiten unseres rotierenden Würfels abgebildet wird. Dieselbe Technik kann jedoch für jede Anzahl an Texturen verwendet werden.

> [!NOTE]
> Es ist wichtig zu beachten, dass das Laden von Texturen den [Cross-Domain-Regeln](/de/docs/Web/HTTP/CORS) folgt; das heißt, Sie können nur Texturen von Seiten laden, für die Ihr Inhalt CORS-Genehmigungen hat. Details hierzu finden Sie unter [Cross-Domain-Texturen unten](#cross-domain-texturen).

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

Die `loadTexture()`-Routine beginnt damit, ein WebGL-Texturobjekt `texture` zu erstellen, indem sie die WebGL-Funktion [`createTexture()`](/de/docs/Web/API/WebGLRenderingContext/createTexture) aufruft. Anschließend lädt sie einen einzelnen blauen Pixel mithilfe von [`texImage2D()`](/de/docs/Web/API/WebGLRenderingContext/texImage2D) hoch. Dadurch wird die Textur sofort als einfarbig blau verwendbar, auch wenn es einige Momente dauern kann, bis unser Bild heruntergeladen ist.

Um die Textur aus der Bilddatei zu laden, wird dann ein `Image`-Objekt erstellt und der `src`-Attribut dem URL unseres Bildes zugewiesen, das wir als Textur verwenden möchten. Die Funktion, die wir `image.onload` zuweisen, wird aufgerufen, sobald das Bild fertig heruntergeladen ist. An diesem Punkt rufen wir erneut [`texImage2D()`](/de/docs/Web/API/WebGLRenderingContext/texImage2D) auf, diesmal unter Verwendung des Bildes als Quelle für die Textur. Danach richten wir Filterung und Wrapping für die Textur basierend darauf ein, ob das heruntergeladene Bild eine Zweierpotenz in beiden Dimensionen ist oder nicht.

WebGL1 kann nur Nicht-Zweierpotenz-Texturen mit Filterung auf `NEAREST` oder `LINEAR` verwenden und kann dafür kein Mipmap generieren. Der Wrapping-Modus muss außerdem auf `CLAMP_TO_EDGE` gesetzt werden. Wenn die Textur hingegen eine Zweierpotenz in beiden Dimensionen ist, kann WebGL eine höhere Qualität der Filterung durchführen, es kann Mipmap verwenden und den Wrapping-Modus auf `REPEAT` oder `MIRRORED_REPEAT` setzen.

Ein Beispiel für eine wiederholte Textur ist das Kacheln eines Bildes von ein paar Ziegeln, um eine Ziegelwand zu bedecken.

Mipmapping und UV-Wiederholung können mit [`texParameteri()`](/de/docs/Web/API/WebGLRenderingContext/texParameter) deaktiviert werden. Dies ermöglicht Nicht-Zweierpotenz-Texturen (NPOT) auf Kosten von Mipmapping, UV-Wrapping, UV-Kachelung und Ihrer Kontrolle darüber, wie das Gerät Ihre Textur behandelt.

```js
// gl.NEAREST is also allowed, instead of gl.LINEAR, as neither mipmap.
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
// Prevents s-coordinate wrapping (repeating).
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
// Prevents t-coordinate wrapping (repeating).
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
```

Erneut werden mit diesen Parametern kompatible WebGL-Geräte jede Auflösung für diese Textur akzeptieren (bis zu ihren maximalen Abmessungen). Ohne die obige Konfiguration erwartet WebGL, dass alle Samples von NPOT-Texturen fehlschlagen, indem sie transparentes Schwarz zurückgeben: `rgb(0 0 0 / 0%)`.

Um das Bild zu laden, fügen Sie einen Aufruf unserer `loadTexture()`-Funktion in Ihre `main()`-Funktion hinzu. Dies kann nach dem Aufruf von `initBuffers(gl)` hinzugefügt werden.

Aber es sei auch darauf hingewiesen: Browser kopieren Pixel vom geladenen Bild in einer von oben nach unten geordneten Reihenfolge – von der oberen linken Ecke aus; jedoch erwartet WebGL die Pixel in einer von unten nach oben geordneten Reihenfolge – beginnend von der unteren linken Ecke. (Für weitere Details siehe [Warum ist meine WebGL-Textur kopfüber?](https://jameshfisher.com/2020/10/22/why-is-my-webgl-texture-upside-down/).)

Um also zu verhindern, dass die resultierende Bildtextur beim Rendern eine falsche Ausrichtung hat, müssen wir auch [`pixelStorei()`](/de/docs/Web/API/WebGLRenderingContext/pixelStorei) mit dem Parameter `gl.UNPACK_FLIP_Y_WEBGL` auf `true` setzen, um die Pixel in die von unten nach oben geordnete Reihenfolge zu bringen, die WebGL erwartet.

> [!NOTE]
> Fügen Sie den folgenden Code zu Ihrer `main()`-Funktion hinzu, direkt nach dem Aufruf von `initBuffers()`:

```js
// Load texture
const texture = loadTexture(gl, "cubetexture.png");
// Flip image pixels into the bottom-to-top order that WebGL expects.
gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
```

> [!NOTE]
> Laden Sie schließlich die Datei [cubetexture.png](https://raw.githubusercontent.com/mdn/dom-examples/main/webgl-examples/tutorial/sample6/cubetexture.png) in dasselbe lokale Verzeichnis wie Ihre JavaScript-Dateien herunter.

## Abbildung der Textur auf die Flächen

An diesem Punkt ist die Textur geladen und bereit zur Verwendung. Bevor wir sie jedoch verwenden können, müssen wir die Zuordnung der Texturkoordinaten zu den Eckpunkten der Flächen unseres Würfels festlegen. Dies ersetzt den gesamten zuvor vorhandenen Code zur Konfiguration von Farben für jede Fläche des Würfels in `initBuffers()`.

> [!NOTE]
> Fügen Sie diese Funktion zu Ihrem "init-buffer.js"-Modul hinzu:

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

Zunächst erstellt dieser Code einen WebGL-Puffer, in den wir die Texturkoordinaten für jede Fläche speichern, und bindet dann diesen Puffer als Array, in das wir schreiben werden.

Das `textureCoordinates`-Array definiert die Texturkoordinaten, die jedem Eckpunkt jeder Fläche entsprechen. Beachten Sie, dass die Texturkoordinaten von 0,0 bis 1,0 reichen; die Abmessungen von Texturen werden für den Zweck der Texturabbildung auf einen Bereich von 0,0 bis 1,0 normalisiert, unabhängig von ihrer tatsächlichen Größe.

Sobald wir das Texturabbildungs-Array eingerichtet haben, geben wir das Array in den Puffer, sodass WebGL diese Daten für seine Verwendung bereithält.

Dann geben wir den neuen Puffer zurück.

Als nächstes müssen wir `initBuffers()` aktualisieren, um den Texturkoordinaten-Puffer anstelle des Farb-Puffers zu erstellen und zurückzugeben.

> [!NOTE]
> Ersetzen Sie im `initBuffers()`-Modul Ihres "init-buffers.js"-Moduls den Aufruf von `initColorBuffer()` durch die folgende Zeile:

```js
const textureCoordBuffer = initTextureBuffer(gl);
```

> [!NOTE]
> Ersetzen Sie die `return`-Anweisung im `initBuffers()`-Modul Ihres "init-buffers.js"-Moduls durch die folgende:

```js
return {
  position: positionBuffer,
  textureCoord: textureCoordBuffer,
  indices: indexBuffer,
};
```

## Aktualisierung der Shader

Das Shader-Programm muss ebenfalls aktualisiert werden, um die Texturen anstelle der einfarbigen Farben zu verwenden.

### Der Vertex-Shader

Wir müssen den Vertex-Shader ersetzen, damit er anstelle von Farbwerten die Daten der Texturkoordinaten abruft.

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

Der Schlüsseländerung hier ist, dass wir anstelle der Eckpunktfarben die Texturkoordinaten abrufen und an den Fragment-Shader übergeben; dies gibt den Ort innerhalb der Textur an, der dem Eckpunkt entspricht.

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

Anstatt dem Fragment eine Farbwert zuzuweisen, wird die Farbe des Fragments berechnet, indem der {{Glossary("texel", "texel")}} (das heißt, das Pixel innerhalb der Textur) basierend auf dem Wert von `vTextureCoord` abgerufen wird, der wie die Farben zwischen den Eckpunkten interpoliert wird.

### Attribut- und Uniform-Positionen

Da wir ein Attribut geändert und ein Uniform hinzugefügt haben, müssen wir deren Positionen abfragen.

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
> Fügen Sie die folgende Funktion in Ihrer "draw-scene.js"-Modul der `drawScene()`-Funktion hinzu:

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
> Ersetzen Sie den Aufruf von `setColorAttribute()` in der `drawScene()`-Funktion Ihres "draw-scene.js"-Moduls durch die folgende Zeile:

```js
setTextureAttribute(gl, buffers, programInfo);
```

Fügen Sie dann Code hinzu, um die Textur anzugeben, die auf die Flächen abgebildet werden soll.

> [!NOTE]
> Fügen Sie in Ihrer `drawScene()`-Funktion, direkt nach den beiden Aufrufen von `gl.uniformMatrix4fv()`, den folgenden Code hinzu:

```js
// Tell WebGL we want to affect texture unit 0
gl.activeTexture(gl.TEXTURE0);

// Bind the texture to texture unit 0
gl.bindTexture(gl.TEXTURE_2D, texture);

// Tell the shader we bound the texture to texture unit 0
gl.uniform1i(programInfo.uniformLocations.uSampler, 0);
```

WebGL stellt mindestens 8 Textureinheiten zur Verfügung; die erste dieser Einheiten ist `gl.TEXTURE0`. Wir teilen WebGL mit, dass wir die Einheit 0 beeinflussen möchten. Dann rufen wir [`bindTexture()`](/de/docs/Web/API/WebGLRenderingContext/bindTexture) auf, das die Textur an den `TEXTURE_2D`-Bindungspunkt der Textureinheit 0 bindet. Dann sagen wir dem Shader, dass für den `uSampler` die Textureinheit 0 verwendet werden soll.

Zuletzt fügen Sie `texture` als Parameter der `drawScene()`-Funktion hinzu, sowohl dort, wo sie definiert ist, als auch dort, wo sie aufgerufen wird.

> [!NOTE]
> Aktualisieren Sie die Deklaration Ihrer `drawScene()`-Funktion, um den neuen Parameter hinzuzufügen:

```js-nolint
function drawScene(gl, programInfo, buffers, texture, cubeRotation) {
```

> [!NOTE]
> Aktualisieren Sie den Ort in Ihrer `main()`-Funktion, wo Sie `drawScene()` aufrufen:

```js
drawScene(gl, programInfo, buffers, texture, cubeRotation);
```

An diesem Punkt sollte der rotierende Würfel einsatzbereit sein.

{{EmbedGHLiveSample('dom-examples/webgl-examples/tutorial/sample6/index.html', 670, 510) }}

[Vollständigen Code ansehen](https://github.com/mdn/dom-examples/tree/main/webgl-examples/tutorial/sample6) | [Öffnen Sie diese Demo auf einer neuen Seite](https://mdn.github.io/dom-examples/webgl-examples/tutorial/sample6/)

## Cross-Domain-Texturen

Das Laden von WebGL-Texturen unterliegt den Zugangskontrollen zwischen verschiedenen Domains. Damit Ihr Inhalt eine Textur von einer anderen Domain laden kann, muss eine CORS-Genehmigung eingeholt werden. Siehe [HTTP-Zugriffskontrolle](/de/docs/Web/HTTP/CORS) für Details zu CORS.

Da WebGL nun erfordert, dass Texturen aus sicheren Kontexten geladen werden, können Sie keine Texturen verwenden, die aus `file:///`-URLs in WebGL geladen wurden. Das bedeutet, dass Sie einen sicheren Webserver benötigen, um Ihren Code zu testen und bereitzustellen. Für lokale Tests lesen Sie unseren Leitfaden [Wie richte ich einen lokalen Testserver ein?](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server) für Hilfe.

Sehen Sie sich diesen [hacks.mozilla.org-Artikel](https://hacks.mozilla.org/2011/11/using-cors-to-load-webgl-textures-from-cross-domain-images/) an, um zu verstehen, wie Sie CORS-genehmigte Bilder als WebGL-Texturen verwenden können.

Gefährdete (schreibgeschützte) 2D-Leinwände können nicht als WebGL-Texturen verwendet werden. Eine 2D-{{ HTMLElement("canvas") }} wird z.B. gefährdet, wenn ein Bild aus einer anderen Domain darauf gezeichnet wird.

{{PreviousNext("Web/API/WebGL_API/Tutorial/Creating_3D_objects_using_WebGL", "Web/API/WebGL_API/Tutorial/Lighting_in_WebGL")}}
