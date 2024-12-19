---
title: Verwendung von Texturen in WebGL
slug: Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{DefaultAPISidebar("WebGL")}} {{PreviousNext("Web/API/WebGL_API/Tutorial/Creating_3D_objects_using_WebGL", "Web/API/WebGL_API/Tutorial/Lighting_in_WebGL")}}

Da unser Beispielprogramm nun einen rotierenden 3D-Würfel hat, lassen Sie uns eine Textur darauf abbilden, anstatt die Flächen einfarbig zu gestalten.

## Laden von Texturen

Das Erste, was zu tun ist, ist Code hinzuzufügen, um die Texturen zu laden. In unserem Fall verwenden wir eine einzige Textur, die auf alle sechs Seiten unseres rotierenden Würfels abgebildet wird, aber die gleiche Technik kann für jede Anzahl von Texturen verwendet werden.

> [!NOTE]
> Es ist wichtig zu beachten, dass das Laden von Texturen den [Cross-Domain-Regeln](/de/docs/Web/HTTP/CORS) folgt; das heißt, Sie können nur Texturen von Sites laden, für die Ihr Inhalt eine CORS-Zulassung hat. Siehe [Cross-Domain-Texturen unten](#cross-domain-texturen) für Details.

> [!NOTE]
> Fügen Sie diese beiden Funktionen Ihrem Skript „webgl-demo.js“ hinzu:

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

Die `loadTexture()`-Routine beginnt mit der Erstellung eines WebGL-Texturobjekts `texture` durch Aufruf der WebGL-Funktion [`createTexture()`](/de/docs/Web/API/WebGLRenderingContext/createTexture). Dann lädt es einen einzigen blauen Pixel mit [`texImage2D()`](/de/docs/Web/API/WebGLRenderingContext/texImage2D) hoch. Dies macht die Textur sofort als Volltonfarbe verwendbar, auch wenn es einige Momente dauern kann, bis unser Bild heruntergeladen ist.

Um die Textur aus der Bilddatei zu laden, erstellt es dann ein `Image`-Objekt und weist die `src` der URL für unser Bild zu, das wir als Textur verwenden möchten. Die Funktion, die wir `image.onload` zuweisen, wird aufgerufen, sobald das Bild fertig heruntergeladen wurde. Zu diesem Zeitpunkt rufen wir erneut [`texImage2D()`](/de/docs/Web/API/WebGLRenderingContext/texImage2D) auf, diesmal unter Verwendung des Bildes als Quelle für die Textur. Danach richten wir das Filtern und Verkleiden der Textur basierend darauf ein, ob das Bild, das wir herunterladen, eine Potenz von 2 in beiden Dimensionen war oder nicht.

WebGL1 kann nur Nicht-Potenz-von-2-Texturen mit einem Filter auf `NEAREST` oder `LINEAR` verwenden und kann kein Mipmap dafür generieren. Ihr Wrap-Modus muss ebenfalls auf `CLAMP_TO_EDGE` gesetzt werden. Andererseits, wenn die Textur eine Potenz von 2 in beiden Dimensionen ist, kann WebGL ein qualitativ höherwertiges Filtern durchführen, es kann Mipmap verwenden und es kann den Wrap-Modus auf `REPEAT` oder `MIRRORED_REPEAT` setzen.

Ein Beispiel für eine wiederholte Textur ist das Kacheln eines Bildes von ein paar Ziegelsteinen, um eine Ziegelmauer zu bedecken.

Mipmapping und UV-Wiederholung können mit [`texParameteri()`](/de/docs/Web/API/WebGLRenderingContext/texParameter) deaktiviert werden. Dadurch werden Texturen, die keine Potenz von zwei (NPOT) haben, auf Kosten von Mipmapping, UV-Wrapping, UV-Tiling und Ihrer Kontrolle darüber ermöglicht, wie das Gerät Ihre Textur handhabt.

```js
// gl.NEAREST is also allowed, instead of gl.LINEAR, as neither mipmap.
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
// Prevents s-coordinate wrapping (repeating).
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
// Prevents t-coordinate wrapping (repeating).
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
```

Wiederum werden mit diesen Parametern kompatible WebGL-Geräte automatisch jede Auflösung für diese Textur akzeptieren (bis zu ihren maximalen Abmessungen). Ohne die oben genannte Konfiguration verlangt WebGL, dass alle Proben von NPOT-Texturen fehlschlagen, indem sie transparentes Schwarz zurückgeben: `rgb(0 0 0 / 0%)`.

Um das Bild zu laden, fügen Sie in unserer `main()`-Funktion einen Aufruf unserer `loadTexture()`-Funktion hinzu. Dies kann nach dem Aufruf von `initBuffers(gl)` hinzugefügt werden.

Beachten Sie auch: Browser kopieren Pixel aus dem geladenen Bild in Top-zu-Bottom-Reihenfolge – von der oberen linken Ecke; aber WebGL möchte die Pixel in Bottom-zu-Top-Reihenfolge – beginnend von der unteren linken Ecke. (Für mehr Details siehe [Warum ist meine WebGL-Textur auf dem Kopf?](https://jameshfisher.com/2020/10/22/why-is-my-webgl-texture-upside-down/).)

Um zu verhindern, dass die resultierende Bildtextur beim Rendern die falsche Orientierung hat, müssen wir auch [`pixelStorei()`](/de/docs/Web/API/WebGLRenderingContext/pixelStorei) mit dem Parameter `gl.UNPACK_FLIP_Y_WEBGL` auf `true` gesetzt aufrufen – um zu bewirken, dass die Pixel in die von WebGL erwartete Bottom-zu-Top-Reihenfolge umgekehrt werden.

> [!NOTE]
> Fügen Sie den folgenden Code Ihrer `main()`-Funktion hinzu, direkt nach dem Aufruf von `initBuffers()`:

```js
// Load texture
const texture = loadTexture(gl, "cubetexture.png");
// Flip image pixels into the bottom-to-top order that WebGL expects.
gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
```

> [!NOTE]
> Laden Sie abschließend die Datei [cubetexture.png](https://raw.githubusercontent.com/mdn/dom-examples/main/webgl-examples/tutorial/sample6/cubetexture.png) in dasselbe lokale Verzeichnis wie Ihre JavaScript-Dateien herunter.

## Textur auf die Flächen abbilden

An diesem Punkt ist die Textur geladen und einsatzbereit. Aber bevor wir sie verwenden können, müssen wir die Zuordnung der Texturkoordinaten zu den Scheitelpunkten der Flächen unseres Würfels festlegen. Dies ersetzt den gesamten zuvor vorhandenen Code zur Konfiguration der Farben für jede der Flächen des Würfels in `initBuffers()`.

> [!NOTE]
> Fügen Sie diese Funktion Ihrem Modul „init-buffer.js“ hinzu:

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

Zuerst erstellt dieser Code einen WebGL-Puffer, in den wir die Texturkoordinaten für jede Fläche speichern, dann binden wir diesen Puffer als das Array, in das wir schreiben werden.

Das `textureCoordinates`-Array definiert die Texturkoordinaten, die jedem Scheitelpunkt jeder Fläche entsprechen. Beachten Sie, dass sich die Texturkoordinaten im Bereich von 0,0 bis 1,0 bewegen; Die Dimensionen der Texturen werden unabhängig von ihrer tatsächlichen Größe für den Zweck der Texturabbildung auf einen Bereich von 0,0 bis 1,0 normalisiert.

Sobald wir das Texturabbildungsarray eingerichtet haben, übergeben wir das Array in den Puffer, damit WebGL diese Daten zur Verfügung hat.

Dann geben wir den neuen Puffer zurück.

Als nächstes müssen wir `initBuffers()` aktualisieren, um den Texturkoordinatenpuffer anstelle des Farbpuffers zu erstellen und zurückzugeben.

> [!NOTE]
> Ersetzen Sie in der `initBuffers()`-Funktion Ihres Moduls „init-buffers.js“ den Aufruf von `initColorBuffer()` durch folgende Zeile:

```js
const textureCoordBuffer = initTextureBuffer(gl);
```

> [!NOTE]
> Ersetzen Sie in der `initBuffers()`-Funktion Ihres Moduls „init-buffers.js“ die `return`-Anweisung durch folgende:

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

Wir müssen den Vertex-Shader ersetzen, sodass er statt der Farbdaten die Texturkoordinaten-Daten abruft.

> [!NOTE]
> Aktualisieren Sie die `vsSource`-Deklaration in Ihrer `main()`-Funktion folgendermaßen:

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

Die entscheidende Änderung hier ist, dass wir anstelle der Scheitelpunktfarbe die Texturkoordinaten abrufen und an den Vertex-Shader übergeben; dies zeigt den Ort in der Textur an, der dem Scheitelpunkt entspricht.

### Der Fragment-Shader

Auch der Fragment-Shader muss aktualisiert werden.

> [!NOTE]
> Aktualisieren Sie die `fsSource`-Deklaration in Ihrer `main()`-Funktion folgendermaßen:

```js
const fsSource = `
    varying highp vec2 vTextureCoord;

    uniform sampler2D uSampler;

    void main(void) {
      gl_FragColor = texture2D(uSampler, vTextureCoord);
    }
  `;
```

Statt einen Farbwert der Fragmentfarbe zuzuweisen, wird die Fragmentfarbe berechnet, indem die {{Glossary("texel", "Texel")}} (das heißt, das Pixel innerhalb der Textur) basierend auf dem Wert von `vTextureCoord` abgerufen wird, dieser wird wie die Farben zwischen den Scheitelpunkten interpoliert.

### Attribut- und Uniform-Orte

Da wir ein Attribut geändert und ein Uniform hinzugefügt haben, müssen wir deren Orte nachschlagen.

> [!NOTE]
> Aktualisieren Sie die `programInfo`-Deklaration in Ihrer `main()`-Funktion folgendermaßen:

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
> Fügen Sie der `drawScene()`-Funktion Ihres Moduls „draw-scene.js“ die folgende Funktion hinzu:

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
> Ersetzen Sie in der `drawScene()`-Funktion Ihres Moduls „draw-scene.js“ den Aufruf von `setColorAttribute()` durch folgende Zeile:

```js
setTextureAttribute(gl, buffers, programInfo);
```

Fügen Sie dann Code hinzu, um anzugeben, welche Textur auf die Flächen abgebildet wird.

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

WebGL bietet mindestens 8 Textureinheiten; die erste von ihnen ist `gl.TEXTURE0`. Wir sagen WebGL, dass wir Einheit 0 beeinflussen wollen. Dann rufen wir [`bindTexture()`](/de/docs/Web/API/WebGLRenderingContext/bindTexture) auf, das die Textur an den `TEXTURE_2D`-Bindungspunkt von Textureinheit 0 bindet. Dann sagen wir dem Shader, dass er für den `uSampler` Textureinheit 0 verwenden soll.

Letztlich fügen Sie `texture` als Parameter zur `drawScene()`-Funktion hinzu, sowohl wo sie definiert als auch wo sie aufgerufen wird.

> [!NOTE]
> Aktualisieren Sie die Deklaration Ihrer `drawScene()`-Funktion, um den neuen Parameter hinzuzufügen:

```js-nolint
function drawScene(gl, programInfo, buffers, texture, cubeRotation) {
```

> [!NOTE]
> Aktualisieren Sie die Stelle in Ihrer `main()`-Funktion, an der Sie `drawScene()` aufrufen:

```js
drawScene(gl, programInfo, buffers, texture, cubeRotation);
```

An diesem Punkt sollte der rotierende Würfel einsatzbereit sein.

{{EmbedGHLiveSample('dom-examples/webgl-examples/tutorial/sample6/index.html', 670, 510) }}

[Sehen Sie sich den vollständigen Code an](https://github.com/mdn/dom-examples/tree/main/webgl-examples/tutorial/sample6) | [Öffnen Sie dieses Demo auf einer neuen Seite](https://mdn.github.io/dom-examples/webgl-examples/tutorial/sample6/)

## Cross-Domain-Texturen

Das Laden von WebGL-Texturen unterliegt den Zugriffssteuerungen für Cross-Domain-Zugriffe. Damit Ihr Inhalt eine Textur von einer anderen Domain laden kann, muss eine CORS-Zulassung eingeholt werden. Siehe [HTTP-Zugriffskontrolle](/de/docs/Web/HTTP/CORS) für Details zu CORS.

Da WebGL jetzt verlangt, dass Texturen aus sicheren Kontexten geladen werden, können Sie keine Texturen von `file:///`-URLs in WebGL verwenden. Das bedeutet, dass Sie einen sicheren Webserver benötigen, um Ihren Code zu testen und bereitzustellen. Für lokale Tests siehe unseren Leitfaden [Wie richtet man einen lokalen Testserver ein?](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server) für Hilfe.

Lesen Sie diesen [hacks.mozilla.org Artikel](https://hacks.mozilla.org/2011/11/using-cors-to-load-webgl-textures-from-cross-domain-images/), um eine Erklärung dafür zu erhalten, wie man CORS-genehmigte Bilder als WebGL-Texturen verwendet.

Beschädigte (nur lesbare) 2D-Canvases können nicht als WebGL-Texturen verwendet werden. Ein 2D-{{ HTMLElement("canvas") }} wird beispielsweise beschädigt, wenn ein Cross-Domain-Bild darauf gezeichnet wird.

{{PreviousNext("Web/API/WebGL_API/Tutorial/Creating_3D_objects_using_WebGL", "Web/API/WebGL_API/Tutorial/Lighting_in_WebGL")}}
