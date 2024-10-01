---
title: Verwendung von Texturen in WebGL
slug: Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{DefaultAPISidebar("WebGL")}} {{PreviousNext("Web/API/WebGL_API/Tutorial/Creating_3D_objects_using_WebGL", "Web/API/WebGL_API/Tutorial/Lighting_in_WebGL")}}

Jetzt, da unser Beispielprogramm einen rotierenden 3D-Würfel hat, lassen Sie uns eine Textur darauf abbilden, anstatt dass seine Flächen einfarbig sind.

## Laden von Texturen

Das Erste, was zu tun ist, ist Code hinzuzufügen, um die Texturen zu laden. In unserem Fall werden wir eine einzelne Textur verwenden, die auf alle sechs Seiten unseres rotierenden Würfels abgebildet wird, aber die gleiche Technik kann für eine beliebige Anzahl von Texturen verwendet werden.

> [!NOTE]
> Es ist wichtig zu beachten, dass das Laden von Texturen den [Cross-Domain-Regeln](/de/docs/Web/HTTP/CORS) folgt; das bedeutet, dass Sie nur Texturen von Websites laden können, für die Ihr Inhalt eine CORS-Zulassung hat. Siehe [Cross-Domain-Texturen unten](#cross-domain-texturen) für Details.

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

Die `loadTexture()`-Routine beginnt mit der Erstellung eines WebGL-Texturobjekts `texture` durch Aufruf der WebGL-Funktion [`createTexture()`](/de/docs/Web/API/WebGLRenderingContext/createTexture). Dann wird ein einzelnes blaues Pixel mit [`texImage2D()`](/de/docs/Web/API/WebGLRenderingContext/texImage2D) hochgeladen. Dadurch ist die Textur sofort als solide blaue Farbe verwendbar, obwohl es einige Momente dauern kann, bis unser Bild heruntergeladen ist.

Um die Textur aus der Bilddatei zu laden, wird dann ein `Image`-Objekt erstellt und der `src` auf die URL für unser Bild gesetzt, das wir als Textur verwenden möchten. Die Funktion, die wir `image.onload` zuweisen, wird aufgerufen, sobald das Bild fertig heruntergeladen ist. Zu diesem Zeitpunkt rufen wir erneut [`texImage2D()`](/de/docs/Web/API/WebGLRenderingContext/texImage2D) auf, diesmal unter Verwendung des Bildes als Quelle für die Textur. Danach richten wir das Filtern und Wrapping für die Textur ein, basierend darauf, ob das heruntergeladene Bild in beiden Dimensionen eine Zweierpotenz ist oder nicht.

WebGL1 kann nur Nicht-Zweierpotenz-Texturen mit auf `NEAREST` oder `LINEAR` eingestelltem Filter verwenden und kann kein Mipmap dafür erzeugen. Der Wrapping-Modus muss auch auf `CLAMP_TO_EDGE` gesetzt sein. Andererseits kann WebGL bei Texturen, die in beiden Dimensionen eine Zweierpotenz sind, hochwertigeres Filtern durchführen, Mipmap verwenden und den Wrapping-Modus auf `REPEAT` oder `MIRRORED_REPEAT` setzen.

Ein Beispiel für eine wiederholte Textur ist das Kacheln eines Bildes mit ein paar Ziegeln, um eine Ziegelwand zu bedecken.

Mipmap und UV-Wiederholungen können mit [`texParameteri()`](/de/docs/Web/API/WebGLRenderingContext/texParameter) deaktiviert werden. Dies erlaubt die Verwendung von Nicht-Zweierpotenz-Texturen auf Kosten von Mipmap, UV-Wrapping, UV-Kachelung und Ihrer Kontrolle darüber, wie das Gerät Ihre Textur handhabt.

```js
// gl.NEAREST is also allowed, instead of gl.LINEAR, as neither mipmap.
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
// Prevents s-coordinate wrapping (repeating).
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
// Prevents t-coordinate wrapping (repeating).
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
```

Wiederum werden mit diesen Parametern kompatible WebGL-Geräte automatisch jede Auflösung für diese Textur akzeptieren (bis zu ihren maximalen Abmessungen). Ohne die oben genannte Konfiguration erfordert WebGL, dass alle Proben von Nicht-Zweierpotenz-Texturen fehlschlagen, indem sie transparentes Schwarz zurückgeben: `rgb(0 0 0 / 0%)`.

Um das Bild zu laden, fügen Sie einen Aufruf unserer `loadTexture()`-Funktion in unserer `main()`-Funktion hinzu. Dies kann nach dem `initBuffers(gl)`-Aufruf hinzugefügt werden.

Aber beachten Sie auch: Browser kopieren Pixel aus dem geladenen Bild in der Reihenfolge von oben nach unten — von der oberen linken Ecke; aber WebGL möchte die Pixel in der Reihenfolge von unten nach oben — beginnend von der unteren linken Ecke. (Für mehr Details, siehe [Warum ist meine WebGL-Textur auf dem Kopf?](https://jameshfisher.com/2020/10/22/why-is-my-webgl-texture-upside-down/).)

Um also zu verhindern, dass die resultierende Bildtextur bei der Darstellung die falsche Ausrichtung hat, müssen wir auch [`pixelStorei()`](/de/docs/Web/API/WebGLRenderingContext/pixelStorei) mit dem `gl.UNPACK_FLIP_Y_WEBGL`-Parameter auf `true` setzen — um die Pixel in die von WebGL erwartete Reihenfolge von unten nach oben zu vertauschen.

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

## Textur auf die Flächen abbilden

An diesem Punkt ist die Textur geladen und einsatzbereit. Aber bevor wir sie verwenden können, müssen wir die Abbildung der Texturkoordinaten auf die Vertizes der Flächen unseres Würfels festlegen. Dies ersetzt den gesamten zuvor vorhandenen Code zur Konfiguration der Farben für jede der Flächen des Würfels in `initBuffers()`.

> [!NOTE]
> Fügen Sie diese Funktion Ihrem "init-buffer.js"-Modul hinzu:

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

Zuerst erstellt dieser Code einen WebGL-Puffer, in den wir die Texturkoordinaten für jede Fläche speichern, und dann binden wir diesen Puffer als das Array, in das wir schreiben werden.

Das `textureCoordinates`-Array definiert die Texturkoordinaten, die jedem Vertex jeder Fläche entsprechen. Beachten Sie, dass die Texturkoordinaten von 0,0 bis 1,0 reichen; die Abmessungen der Texturen sind für den Zweck der Texturabbildung auf einen Bereich von 0,0 bis 1,0 normalisiert, unabhängig von ihrer tatsächlichen Größe.

Sobald wir das Texturabbildungsarray eingerichtet haben, übergeben wir das Array an den Puffer, sodass WebGL diese Daten für seine Verwendung bereit hat.

Dann geben wir den neuen Puffer zurück.

Als Nächstes müssen wir `initBuffers()` aktualisieren, um den Texturkoordinatenpuffer anstelle des Farbpuffers zu erstellen und zurückzugeben.

> [!NOTE]
> Ersetzen Sie in der Funktion `initBuffers()` Ihres "init-buffers.js"-Moduls den Aufruf von `initColorBuffer()` durch die folgende Zeile:

```js
const textureCoordBuffer = initTextureBuffer(gl);
```

> [!NOTE]
> Ersetzen Sie in der Funktion `initBuffers()` Ihres "init-buffers.js"-Moduls die `return`-Anweisung durch die folgende:

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

Wir müssen den Vertex-Shader ersetzen, damit er anstelle der Farbdaten die Texturkoordinaten-Daten abruft.

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

Die wesentliche Änderung hier ist, dass wir anstelle des Farbabruf des Vertex die Texturkoordinaten abrufen und an den Vertex-Shader übergeben; dies zeigt den Ort innerhalb der Textur an, der dem Vertex entspricht.

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

Anstelle eines Farbwerts dem Farbwert des Fragments zuzuweisen, wird die Farbe des Fragments berechnet, indem das {{Glossary("texel", "Texel")}} (das heißt, das Pixel innerhalb der Textur) basierend auf dem Wert von `vTextureCoord`, der wie die Farben zwischen den Vertizes interpoliert wird, abgerufen wird.

### Attribut- und Uniform-Positionen

Da wir ein Attribut geändert und ein Uniform hinzugefügt haben, müssen wir ihre Positionen abfragen.

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
> Fügen Sie in der `drawScene()`-Funktion Ihres "draw-scene.js"-Moduls die folgende Funktion hinzu:

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
> Ersetzen Sie in der `drawScene()`-Funktion Ihres "draw-scene.js"-Moduls den Aufruf von `setColorAttribute()` durch die folgende Zeile:

```js
setTextureAttribute(gl, buffers, programInfo);
```

Fügen Sie dann Code hinzu, um die Textur anzugeben, die auf die Flächen abgebildet werden soll.

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

WebGL stellt mindestens 8 Textureinheiten zur Verfügung; die erste davon ist `gl.TEXTURE0`. Wir sagen WebGL, dass wir Einheit 0 beeinflussen wollen. Dann rufen wir [`bindTexture()`](/de/docs/Web/API/WebGLRenderingContext/bindTexture) auf, das die Textur an den `TEXTURE_2D`-Bindepunkt der Textureinheit 0 bindet. Wir teilen dem Shader dann mit, dass für den `uSampler` Textureneinheit 0 verwendet werden soll.

Zuletzt fügen Sie `texture` als Parameter zur `drawScene()`-Funktion hinzu, sowohl dort, wo sie definiert ist, als auch dort, wo sie aufgerufen wird.

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

An diesem Punkt sollte der rotierende Würfel funktionsfähig sein.

{{EmbedGHLiveSample('dom-examples/webgl-examples/tutorial/sample6/index.html', 670, 510) }}

[Sehen Sie sich den kompletten Code an](https://github.com/mdn/dom-examples/tree/main/webgl-examples/tutorial/sample6) | [Öffnen Sie dieses Demo in einem neuen Tab](https://mdn.github.io/dom-examples/webgl-examples/tutorial/sample6/)

## Cross-Domain-Texturen

Das Laden von WebGL-Texturen unterliegt den Cross-Domain-Zugriffskontrollen. Damit Ihr Inhalt eine Textur von einer anderen Domain laden kann, muss eine CORS-Zulassung eingeholt werden. Siehe [HTTP-Zugriffskontrolle](/de/docs/Web/HTTP/CORS) für Details zu CORS.

Da WebGL jetzt erfordert, dass Texturen aus sicheren Kontexten geladen werden, können Sie keine Texturen verwenden, die aus `file:///`-URLs in WebGL geladen wurden. Das bedeutet, dass Sie einen sicheren Webserver benötigen, um Ihren Code zu testen und bereitzustellen. Für lokale Tests siehe unseren Leitfaden [Wie richten Sie einen lokalen Testserver ein?](/de/docs/Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server) um Hilfe zu erhalten.

Lesen Sie diesen [Artikel auf hacks.mozilla.org](https://hacks.mozilla.org/2011/11/using-cors-to-load-webgl-textures-from-cross-domain-images/) für eine Erläuterung, wie Sie CORS-zugelassene Bilder als WebGL-Texturen verwenden können.

Beschädigte (schreibgeschützte) 2D-Leinwände können nicht als WebGL-Texturen verwendet werden. Eine 2D-{{ HTMLElement("canvas") }} wird z. B. beschädigt, wenn ein Cross-Domain-Bild darauf gezeichnet wird.

{{PreviousNext("Web/API/WebGL_API/Tutorial/Creating_3D_objects_using_WebGL", "Web/API/WebGL_API/Tutorial/Lighting_in_WebGL")}}
