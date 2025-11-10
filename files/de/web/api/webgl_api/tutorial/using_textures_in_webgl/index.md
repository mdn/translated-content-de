---
title: Verwendung von Texturen in WebGL
slug: Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL
l10n:
  sourceCommit: 3c13d9a0c239ed31ae861486393952bc03e0b5bd
---

{{DefaultAPISidebar("WebGL")}} {{PreviousNext("Web/API/WebGL_API/Tutorial/Creating_3D_objects_using_WebGL", "Web/API/WebGL_API/Tutorial/Lighting_in_WebGL")}}

Da unser Beispielprogramm jetzt einen rotierenden 3D-Würfel hat, lassen Sie uns eine Textur darauf abbilden, anstatt seine Flächen in festen Farben darzustellen.

## Laden von Texturen

Zuerst müssen wir Code hinzufügen, um die Texturen zu laden. In unserem Fall verwenden wir eine einzige Textur, die auf alle sechs Seiten unseres rotierenden Würfels abgebildet wird, aber dieselbe Technik kann für eine beliebige Anzahl von Texturen verwendet werden.

> [!NOTE]
> Es ist wichtig zu beachten, dass das Laden von Texturen den [Cross-Domain-Regeln](/de/docs/Web/HTTP/Guides/CORS) folgt; das bedeutet, dass Sie Texturen nur von Websites laden können, für die Ihr Inhalt eine CORS-Zulassung hat. Siehe [Cross-domain Texturen unten](#cross-domain-texturen) für Details.

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

Die `loadTexture()`-Routine beginnt mit der Erstellung eines WebGL-Texturobjekts `texture` durch Aufruf der WebGL-Funktion [`createTexture()`](/de/docs/Web/API/WebGLRenderingContext/createTexture). Anschließend wird ein einzelnes blaues Pixel mit [`texImage2D()`](/de/docs/Web/API/WebGLRenderingContext/texImage2D) hochgeladen. Dadurch kann die Textur sofort als feste blaue Farbe verwendet werden, obwohl es einige Momente dauern kann, bis unser Bild heruntergeladen ist.

Um die Textur aus der Bilddatei zu laden, wird ein `Image`-Objekt erstellt und der `src` wird auf die URL unseres Bildes gesetzt, das wir als Textur verwenden möchten. Die Funktion, die wir `image.onload` zuweisen, wird aufgerufen, sobald das Bild heruntergeladen wurde. Zu diesem Zeitpunkt rufen wir erneut [`texImage2D()`](/de/docs/Web/API/WebGLRenderingContext/texImage2D) auf, diesmal unter Verwendung des Bildes als Quelle für die Textur. Danach richten wir die Filterung und das Wrapping für die Textur ein, basierend darauf, ob das heruntergeladene Bild in beiden Dimensionen eine Zweierpotenz war oder nicht.

WebGL1 kann Texturen, die keine Zweierpotenz sind, nur mit auf `NEAREST` oder `LINEAR` gesetzter Filterung verwenden und kann für sie kein Mipmap generieren. Ihr Wrapping-Modus muss ebenfalls auf `CLAMP_TO_EDGE` gesetzt werden. Andererseits, wenn die Textur in beiden Dimensionen eine Zweierpotenz ist, kann WebGL eine hochwertigere Filterung durchführen, es kann Mipmap verwenden, und es kann den Wrapping-Modus auf `REPEAT` oder `MIRRORED_REPEAT` setzen.

Ein Beispiel für eine wiederholte Textur ist das Fliesen eines Bildes von ein paar Steinen, um eine Ziegelwand zu bedecken.

Mipmapping und UV-Wiederholung können mit [`texParameteri()`](/de/docs/Web/API/WebGLRenderingContext/texParameter) deaktiviert werden. Dies wird Texturen, die keine Zweierpotenz haben (NPOT), zulassen, jedoch auf Kosten von Mipmapping, UV-Wrapping, UV-Tiling und Ihrer Kontrolle darüber, wie das Gerät Ihre Textur behandelt.

```js
// gl.NEAREST is also allowed, instead of gl.LINEAR, as neither mipmap.
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
// Prevents s-coordinate wrapping (repeating).
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
// Prevents t-coordinate wrapping (repeating).
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
```

Erneut werden mit diesen Parametern kompatible WebGL-Geräte automatisch jede Auflösung für diese Textur akzeptieren (bis zu ihren maximalen Abmessungen). Ohne obige Konfiguration erfordert WebGL, dass alle Abtastungen von NPOT-Texturen fehlschlagen, indem sie transparentes Schwarz zurückgeben: `rgb(0 0 0 / 0%)`.

Um das Bild zu laden, fügen Sie einen Aufruf zu unserer `loadTexture()`-Funktion innerhalb unserer `main()`-Funktion hinzu. Dies kann nach dem Aufruf von `initBuffers(gl)` hinzugefügt werden.

Aber beachten Sie auch: Browser kopieren Pixel aus dem geladenen Bild in von oben nach unten Reihenfolge — von der oberen linken Ecke; aber WebGL möchte die Pixel in von unten nach oben Reihenfolge — beginnend von der unteren linken Ecke. (Für mehr Details siehe [Warum ist meine WebGL-Textur verkehrt herum?](https://jameshfisher.com/2020/10/22/why-is-my-webgl-texture-upside-down/).)

Um zu verhindern, dass die resultierende Bildtextur beim Rendern die falsche Ausrichtung hat, müssen wir auch [`pixelStorei()`](/de/docs/Web/API/WebGLRenderingContext/pixelStorei) mit dem Parameter `gl.UNPACK_FLIP_Y_WEBGL` setzen, um die Pixel in die von WebGL erwartete von unten nach oben Reihenfolge zu flippen.

> [!NOTE]
> Fügen Sie den folgenden Code zu Ihrer `main()`-Funktion hinzu, direkt nach dem Aufruf von `initBuffers()`:

```js
// Load texture
const texture = loadTexture(gl, "cubetexture.png");
// Flip image pixels into the bottom-to-top order that WebGL expects.
gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
```

> [!NOTE]
> Schließlich laden Sie die Datei [cubetexture.png](https://raw.githubusercontent.com/mdn/dom-examples/main/webgl-examples/tutorial/sample6/cubetexture.png) in das gleiche lokale Verzeichnis wie Ihre JavaScript-Dateien herunter.

## Abbilden der Textur auf die Flächen

Zu diesem Zeitpunkt ist die Textur geladen und einsatzbereit. Aber bevor wir sie verwenden können, müssen wir das Mapping der Texturkoordinaten auf die Scheitelpunkte der Flächen unseres Würfels etablieren. Dies ersetzt den bisher vorhandenen Code zur Konfiguration von Farben für jede der Flächen des Würfels in `initBuffers()`.

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

Zuerst erzeugt dieser Code einen WebGL-Puffer, in dem wir die Texturkoordinaten für jede Fläche speichern werden, dann binden wir diesen Puffer als das Array, in das wir schreiben werden.

Das Array `textureCoordinates` definiert die Texturkoordinaten entsprechend jedem Scheitelpunkt jeder Fläche. Beachten Sie, dass die Texturkoordinaten im Bereich von 0,0 bis 1,0 liegen; die Dimensionen von Texturen sind normalisiert auf einen Bereich von 0,0 bis 1,0 unabhängig von ihrer tatsächlichen Größe, für das Ziel des Textur-Mappings.

Sobald wir das Textur-Mapping-Array eingerichtet haben, übergeben wir das Array in den Puffer, sodass WebGL diese Daten zur Verfügung hat.

Dann geben wir den neuen Puffer zurück.

Als Nächstes müssen wir `initBuffers()` aktualisieren, um den Texturkoordinaten-Puffer anstelle des Farben-Puffers zu erstellen und zurückzugeben.

> [!NOTE]
> Ersetzen Sie in der Funktion `initBuffers()` Ihres Moduls "init-buffers.js" den Aufruf von `initColorBuffer()` durch die folgende Zeile:

```js
const textureCoordBuffer = initTextureBuffer(gl);
```

> [!NOTE]
> Ersetzen Sie in der Funktion `initBuffers()` Ihres Moduls "init-buffers.js" die `return`-Anweisung durch die folgende:

```js
return {
  position: positionBuffer,
  textureCoord: textureCoordBuffer,
  indices: indexBuffer,
};
```

## Aktualisierung der Shader

Das Shader-Programm muss ebenfalls aktualisiert werden, um die Texturen anstelle von festen Farben zu verwenden.

### Der Vertex-Shader

Wir müssen den Vertex-Shader ersetzen, damit er anstelle von Farbwerten die Texturkoordinatendaten abruft.

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

Die wesentliche Änderung hier ist, dass wir statt der Vertex-Farbe die Texturkoordinaten abrufen und an den Fragment-Shader übergeben; dies wird die Position innerhalb der Textur angeben, die dem Vertex entspricht.

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

Anstelle eines Farbwertes, der der Farbe des Fragments zugewiesen wird, wird die Farbe des Fragments durch das Abrufen des {{Glossary("texel", "Texels")}} (das ist, das Pixel innerhalb der Textur) basierend auf dem Wert von `vTextureCoord` berechnet, das analog zu den Farben zwischen den Vertexen interpoliert wird.

### Attribute und Uniform Locations

Da wir ein Attribut geändert und ein Uniform hinzugefügt haben, müssen wir ihre Positionen suchen.

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
> Fügen Sie in der Funktion `drawScene()` Ihres Moduls "draw-scene.js" folgende Funktion hinzu:

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

Fügen Sie dann Code hinzu, um die Textur anzugeben, die auf die Flächen abzubilden ist.

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

WebGL stellt mindestens 8 Textureinheiten bereit; die erste davon ist `gl.TEXTURE0`. Wir sagen WebGL, dass wir Einheit 0 beeinflussen möchten. Dann rufen wir [`bindTexture()`](/de/docs/Web/API/WebGLRenderingContext/bindTexture) auf, das die Textur an den `TEXTURE_2D`-Bindepunkt der Textureinheit 0 bindet. Anschließend teilen wir dem Shader mit, dass für den `uSampler` die Textureinheit 0 verwendet wird.

Schließlich fügen Sie `texture` als Parameter zur Funktion `drawScene()` hinzu, sowohl dort, wo sie definiert ist, als auch dort, wo sie aufgerufen wird.

Aktualisieren Sie die Deklaration Ihrer `drawScene()`-Funktion, um den neuen Parameter hinzuzufügen:

```js
function drawScene(gl, programInfo, buffers, texture, cubeRotation) {
  // …
}
```

Aktualisieren Sie den Ort in Ihrer `main()`-Funktion, an dem Sie `drawScene()` aufrufen:

```js
drawScene(gl, programInfo, buffers, texture, cubeRotation);
```

An diesem Punkt sollte der rotierende Würfel betriebsbereit sein.

{{EmbedGHLiveSample('dom-examples/webgl-examples/tutorial/sample6/index.html', 670, 510) }}

[Vollständigen Code anzeigen](https://github.com/mdn/dom-examples/tree/main/webgl-examples/tutorial/sample6) | [Dieses Demo auf einer neuen Seite öffnen](https://mdn.github.io/dom-examples/webgl-examples/tutorial/sample6/)

## Cross-Domain-Texturen

Das Laden von WebGL-Texturen unterliegt Zugriffskontrollen zwischen Domänen. Damit Ihr Inhalt eine Textur von einer anderen Domäne lädt, muss eine CORS-Zulassung erlangt werden. Siehe [HTTP-Zugriffskontrolle](/de/docs/Web/HTTP/Guides/CORS) für Details zu CORS.

Da WebGL jetzt erfordert, dass Texturen aus sicheren Kontexten geladen werden, können Sie keine Texturen verwenden, die aus `file:///` URLs in WebGL geladen werden. Das bedeutet, dass Sie einen sicheren Webserver benötigen, um Ihren Code zu testen und bereitzustellen. Für lokale Tests lesen Sie unseren Leitfaden [Wie richten Sie einen lokalen Testserver ein?](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server) für Hilfe.

Lesen Sie diesen [hacks.mozilla.org Artikel](https://hacks.mozilla.org/2011/11/using-cors-to-load-webgl-textures-from-cross-domain-images/) für eine Erklärung, wie Sie CORS-zugelassene Bilder als WebGL-Texturen verwenden.

Vergiftete (schreibgeschützte) 2D-Canvas-Elemente können nicht als WebGL-Texturen verwendet werden. Ein 2D {{ HTMLElement("canvas") }} wird beispielsweise vergiftet, wenn ein Bild von einer anderen Domäne darauf gezeichnet wird.

{{PreviousNext("Web/API/WebGL_API/Tutorial/Creating_3D_objects_using_WebGL", "Web/API/WebGL_API/Tutorial/Lighting_in_WebGL")}}
