---
title: Verwendung von Texturen in WebGL
slug: Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL
l10n:
  sourceCommit: dffb6780c392dd386ca964573f0adb4313f2cc3c
---

{{DefaultAPISidebar("WebGL")}} {{PreviousNext("Web/API/WebGL_API/Tutorial/Creating_3D_objects_using_WebGL", "Web/API/WebGL_API/Tutorial/Lighting_in_WebGL")}}

Jetzt, da unser Musterprogramm einen rotierenden 3D-Würfel hat, lassen Sie uns eine Textur darauf abbilden, anstatt dass seine Flächen einfarbig sind.

## Laden von Texturen

Das Erste, was Sie tun müssen, ist, Code hinzuzufügen, um die Texturen zu laden. In unserem Fall werden wir eine einzelne Textur verwenden, die auf alle sechs Seiten unseres rotierenden Würfels abgebildet wird, aber dieselbe Technik kann für jede Anzahl von Texturen verwendet werden.

> [!NOTE]
> Es ist wichtig zu beachten, dass das Laden von Texturen den [Cross-Domain-Regeln](/de/docs/Web/HTTP/CORS) folgt; das heißt, Sie können Texturen nur von Websites laden, für die Ihre Inhalte CORS-Genehmigung haben. Siehe [Plattformübergreifende Texturen unten](#plattformübergreifende_texturen) für Details.

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

Die Routine `loadTexture()` beginnt damit, ein WebGL-Texturobjekt `texture` zu erstellen, indem die WebGL-Funktion [`createTexture()`](/de/docs/Web/API/WebGLRenderingContext/createTexture) aufgerufen wird. Sie lädt dann ein einzelnes blaues Pixel mit [`texImage2D()`](/de/docs/Web/API/WebGLRenderingContext/texImage2D) hoch. Dadurch wird die Textur sofort als einfarbig blaue Farbe verwendbar, auch wenn es ein paar Momente dauert, bis unser Bild heruntergeladen ist.

Um die Textur aus der Bilddatei zu laden, wird dann ein `Image`-Objekt erstellt und der `src` auf die URL für unser Bild gesetzt, das wir als unsere Textur verwenden möchten. Die Funktion, die wir `image.onload` zuweisen, wird aufgerufen, sobald das Bild vollständig heruntergeladen ist. Zu diesem Zeitpunkt rufen wir erneut [`texImage2D()`](/de/docs/Web/API/WebGLRenderingContext/texImage2D) auf, diesmal unter Verwendung des Bildes als Quelle für die Textur. Danach richten wir das Filtern und die Umhüllung für die Textur je nach Bilddimensionen ein.

WebGL1 kann nur Nicht-Potenz-von-2-Texturen mit den Filtern `NEAREST` oder `LINEAR` verwenden und kann dafür kein Mipmap generieren. Ihr Umhüllungsmodus muss auf `CLAMP_TO_EDGE` gesetzt werden. Andererseits, wenn die Textur eine Potenz von 2 in beiden Dimensionen ist, kann WebGL hochwertigere Filterung durchführen, Mipmap verwenden und den Umhüllungsmodus auf `REPEAT` oder `MIRRORED_REPEAT` setzen.

Ein Beispiel für eine wiederholte Textur ist das Kacheln eines Bildes von einigen Ziegeln, um eine Ziegelwand zu bedecken.

Mipmapping und UV-Wiederholung können mit [`texParameteri()`](/de/docs/Web/API/WebGLRenderingContext/texParameter) deaktiviert werden. Dies ermöglicht die Verwendung von Nicht-Potenz-von-2 (NPOT) Texturen auf Kosten des Mipmapping, der UV-Umhüllung, der UV-Kachelung und Ihrer Kontrolle darüber, wie das Gerät Ihre Textur behandelt.

```js
// gl.NEAREST is also allowed, instead of gl.LINEAR, as neither mipmap.
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
// Prevents s-coordinate wrapping (repeating).
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
// Prevents t-coordinate wrapping (repeating).
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
```

Erneut, mit diesen Parametern, akzeptieren kompatible WebGL-Geräte automatisch jede Auflösung für diese Textur (bis zu ihren maximalen Abmessungen). Ohne die oben genannte Konfiguration verlangt WebGL, dass alle Beispiele für NPOT-Texturen fehlschlagen, indem transparentes Schwarz zurückgegeben wird: `rgb(0 0 0 / 0%)`.

Um das Bild zu laden, fügen Sie einen Aufruf unserer `loadTexture()`-Funktion in Ihre `main()`-Funktion ein. Dies kann nach dem Aufruf von `initBuffers(gl)` hinzugefügt werden.

Beachten Sie auch: Browser kopieren Pixel aus dem geladenen Bild in der Reihenfolge von oben nach unten — von der oberen linken Ecke; aber WebGL erwartet die Pixel in der Reihenfolge von unten nach oben — beginnend von der unteren linken Ecke. (Für weitere Details siehe [Warum ist meine WebGL-Textur auf dem Kopf?](https://jameshfisher.com/2020/10/22/why-is-my-webgl-texture-upside-down/).)

Um zu verhindern, dass die resultierende Bildtextur beim Rendern die falsche Ausrichtung hat, müssen wir auch [`pixelStorei()`](/de/docs/Web/API/WebGLRenderingContext/pixelStorei) mit dem Parameter `gl.UNPACK_FLIP_Y_WEBGL` auf `true` setzen, um die Pixel in die von WebGL erwartete Reihenfolge von unten nach oben zu drehen.

> [!NOTE]
> Fügen Sie den folgenden Code zu Ihrer `main()`-Funktion direkt nach dem Aufruf von `initBuffers()` hinzu:

```js
// Load texture
const texture = loadTexture(gl, "cubetexture.png");
// Flip image pixels into the bottom-to-top order that WebGL expects.
gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
```

> [!NOTE]
> Laden Sie abschließend die Datei [cubetexture.png](https://raw.githubusercontent.com/mdn/dom-examples/main/webgl-examples/tutorial/sample6/cubetexture.png) in dasselbe lokale Verzeichnis wie Ihre JavaScript-Dateien herunter.

## Abbilden der Textur auf die Flächen

An diesem Punkt ist die Textur geladen und einsatzbereit. Bevor wir sie jedoch verwenden können, müssen wir die Zuordnung der Texturkoordinaten zu den Eckpunkten der Flächen unseres Würfels festlegen. Dies ersetzt den gesamten zuvor vorhandenen Code zur Konfiguration der Farben für jede der Flächen des Würfels in `initBuffers()`.

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

Das Array `textureCoordinates` definiert die Texturkoordinaten, die jedem Eckpunkt jeder Fläche entsprechen. Beachten Sie, dass die Texturkoordinaten von 0.0 bis 1.0 reichen; die Abmessungen von Texturen werden für die Zwecke der Texturabbildung auf einen Bereich von 0.0 bis 1.0 normiert, unabhängig von ihrer tatsächlichen Größe.

Sobald wir das Texturzurodnungarray eingerichtet haben, übergeben wir das Array in den Puffer, sodass WebGL diese Daten bereit zur Verwendung hat.

Dann geben wir den neuen Puffer zurück.

Als nächstes müssen wir `initBuffers()` aktualisieren, um den Texturkoordinatenpuffer anstelle des Farb-Puffers zu erstellen und zurückzugeben.

> [!NOTE]
> Ersetzen Sie in der `initBuffers()`-Funktion Ihres Moduls "init-buffers.js" den Aufruf von `initColorBuffer()` mit der folgenden Zeile:

```js
const textureCoordBuffer = initTextureBuffer(gl);
```

> [!NOTE]
> Ersetzen Sie in der `initBuffers()`-Funktion Ihres Moduls "init-buffers.js" die `return`-Anweisung mit dem Folgenden:

```js
return {
  position: positionBuffer,
  textureCoord: textureCoordBuffer,
  indices: indexBuffer,
};
```

## Aktualisierung der Shader

Das Shader-Programm muss ebenfalls aktualisiert werden, um die Texturen anstelle von einfarbigen Farben zu verwenden.

### Der Vertex-Shader

Wir müssen den Vertex-Shader ersetzen, sodass dieser statt Farbdaten abzurufen, die Texturkoordinatendaten abruft.

> [!NOTE]
> Aktualisieren Sie die `vsSource`-Deklaration in Ihrer `main()`-Funktion so:

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

Die wesentliche Änderung hier ist, dass wir statt die Vertexfarben abzurufen, die Texturkoordinaten abrufen und an den Vertex-Shader übergeben; dies wird die Position innerhalb der Textur anzeigen, die dem Vertex entspricht.

### Der Fragment-Shader

Der Fragment-Shader muss ebenfalls aktualisiert werden.

> [!NOTE]
> Aktualisieren Sie die `fsSource`-Deklaration in Ihrer `main()`-Funktion so:

```js
const fsSource = `
    varying highp vec2 vTextureCoord;

    uniform sampler2D uSampler;

    void main(void) {
      gl_FragColor = texture2D(uSampler, vTextureCoord);
    }
  `;
```

Anstatt einen Farbwert der Fragmentfarbe zuzuweisen, wird die Fragmentfarbe durch Abrufen des {{Glossary("texel", "Texels")}} (das heißt, des Pixels innerhalb der Textur) basierend auf dem Wert von `vTextureCoord` berechnet, das wie die Farben zwischen den Vertices interpoliert wird.

### Attribut- und Uniform-Orte

Da wir ein Attribut geändert und ein Uniform hinzugefügt haben, müssen wir deren Orte ermitteln.

> [!NOTE]
> Aktualisieren Sie die `programInfo`-Deklaration in Ihrer `main()`-Funktion so:

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

Die Änderungen der `drawScene()`-Funktion sind einfach.

> [!NOTE]
> Fügen Sie in der `drawScene()`-Funktion Ihres Moduls "draw-scene.js" die folgende Funktion hinzu:

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
> Ersetzen Sie in der `drawScene()`-Funktion Ihres Moduls "draw-scene.js" den Aufruf von `setColorAttribute()` mit der folgenden Zeile:

```js
setTextureAttribute(gl, buffers, programInfo);
```

Fügen Sie dann den Code hinzu, um die Textur anzugeben, die auf die Flächen abzubilden ist.

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

WebGL stellt mindestens 8 Textureinheiten bereit; die erste davon ist `gl.TEXTURE0`. Wir teilen WebGL mit, dass wir Einheit 0 beeinflussen wollen. Dann rufen wir [`bindTexture()`](/de/docs/Web/API/WebGLRenderingContext/bindTexture) auf, welche die Textur am `TEXTURE_2D` Bindungspunkt der Textureinheit 0 bindet. Schließlich sagen wir dem Shader, dass `uSampler` die Textureinheit 0 verwenden soll.

Zuletzt fügen Sie `texture` als Parameter zur `drawScene()`-Funktion hinzu, sowohl dort, wo sie definiert ist, als auch wo sie aufgerufen wird.

> [!NOTE]
> Aktualisieren Sie die Deklaration Ihrer `drawScene()`-Funktion, um den neuen Parameter hinzuzufügen:

```js-nolint
function drawScene(gl, programInfo, buffers, texture, cubeRotation) {
```

> [!NOTE]
> Aktualisieren Sie die Stelle in Ihrer `main()`-Funktion, wo Sie `drawScene()` aufrufen:

```js
drawScene(gl, programInfo, buffers, texture, cubeRotation);
```

An diesem Punkt sollte der rotierende Würfel einsatzbereit sein.

{{EmbedGHLiveSample('dom-examples/webgl-examples/tutorial/sample6/index.html', 670, 510) }}

[Vollständigen Code anzeigen](https://github.com/mdn/dom-examples/tree/main/webgl-examples/tutorial/sample6) | [Öffnen Sie dieses Demo in einem neuen Tab](https://mdn.github.io/dom-examples/webgl-examples/tutorial/sample6/)

## Plattformübergreifende Texturen

Das Laden von WebGL-Texturen unterliegt plattformübergreifenden Zugriffskontrollen. Damit Ihre Inhalte eine Textur von einer anderen Domain laden können, muss eine CORS-Genehmigung eingeholt werden. Siehe [HTTP-Zugriffskontrolle](/de/docs/Web/HTTP/CORS) für Details zu CORS.

Da WebGL jetzt verlangt, dass Texturen aus sicheren Kontexten geladen werden, können Sie keine Texturen von `file:///` URLs in WebGL verwenden. Das bedeutet, dass Sie einen sicheren Webserver benötigen, um Ihren Code zu testen und bereitzustellen. Für lokale Tests siehe unseren Leitfaden [Wie richtet man einen lokalen Testserver ein?](/de/docs/Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server) für Hilfe.

Siehe diesen [Artikel auf hacks.mozilla.org](https://hacks.mozilla.org/2011/11/using-cors-to-load-webgl-textures-from-cross-domain-images/) für eine Erklärung, wie man CORS-geprüfte Bilder als WebGL-Texturen verwendet.

Verfälschte (write-only) 2D-Canvas-Elemente können nicht als WebGL-Texturen verwendet werden. Ein 2D-{{ HTMLElement("canvas") }} wird beispielsweise verfälscht, wenn ein plattformübergreifendes Bild darauf gezeichnet wird.

{{PreviousNext("Web/API/WebGL_API/Tutorial/Creating_3D_objects_using_WebGL", "Web/API/WebGL_API/Tutorial/Lighting_in_WebGL")}}
