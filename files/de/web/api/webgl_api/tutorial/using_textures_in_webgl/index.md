---
title: Verwendung von Texturen in WebGL
slug: Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{DefaultAPISidebar("WebGL")}} {{PreviousNext("Web/API/WebGL_API/Tutorial/Creating_3D_objects_using_WebGL", "Web/API/WebGL_API/Tutorial/Lighting_in_WebGL")}}

Jetzt, da unser Beispielprogramm einen rotierenden 3D-Würfel hat, lassen Sie uns eine Textur darauf abbilden, anstatt die Flächen in Vollfarben zu belassen.

## Laden von Texturen

Das Erste, was zu tun ist, ist, Code hinzuzufügen, um die Texturen zu laden. In unserem Fall verwenden wir eine einzelne Textur, die auf alle sechs Seiten unseres rotierenden Würfels abgebildet wird, aber dieselbe Technik kann für eine beliebige Anzahl von Texturen verwendet werden.

> [!NOTE]
> Es ist wichtig zu beachten, dass das Laden von Texturen den [Cross-Domain-Regeln](/de/docs/Web/HTTP/Guides/CORS) folgt; das bedeutet, dass Sie nur Texturen von Websites laden können, für die Ihr Inhalt CORS-Genehmigung hat. Einzelheiten finden Sie unter [Cross-domain Texturen unten](#cross-domain_texturen).

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

Die `loadTexture()`-Routine beginnt damit, ein WebGL-Texturobjekt `texture` zu erstellen, indem die WebGL-Funktion [`createTexture()`](/de/docs/Web/API/WebGLRenderingContext/createTexture) aufgerufen wird. Dann lädt sie einen einzigen blauen Pixel mit [`texImage2D()`](/de/docs/Web/API/WebGLRenderingContext/texImage2D) hoch. Dadurch wird die Textur sofort als feste blaue Farbe nutzbar, auch wenn es einige Momente dauern kann, bis unser Bild heruntergeladen ist.

Um die Textur aus der Bilddatei zu laden, wird dann ein `Image`-Objekt erstellt und die `src`-Eigenschaft auf die URL für das Bild gesetzt, das wir als unsere Textur verwenden möchten. Die Funktion, die wir `image.onload` zuweisen, wird aufgerufen, sobald das Bild fertig heruntergeladen ist. Zu diesem Zeitpunkt rufen wir [`texImage2D()`](/de/docs/Web/API/WebGLRenderingContext/texImage2D) erneut auf, diesmal unter Verwendung des Bildes als Quelle für die Textur. Danach richten wir das Filtern und Wrapping für die Textur basierend darauf ein, ob das Bild, das wir herunterladen, eine Potenz von 2 in beiden Dimensionen ist oder nicht.

WebGL1 kann nur nicht-potenzen von 2 Texturen mit Filtern, die auf `NEAREST` oder `LINEAR` gesetzt sind, verwenden, und es kann kein Mipmap für sie erzeugen. Ihr Wrapping-Modus muss ebenfalls auf `CLAMP_TO_EDGE` gesetzt werden. Andererseits, wenn die Textur in beiden Dimensionen eine Potenz von 2 ist, kann WebGL hochwertigere Filterung durchführen, es kann Mipmap verwenden, und es kann den Wrapping-Modus auf `REPEAT` oder `MIRRORED_REPEAT` setzen.

Ein Beispiel für eine wiederholte Textur ist das Kacheln eines Bildes mit ein paar Ziegeln, um eine Ziegelwand zu bedecken.

Mipmapping und UV-Wiederholung können mit [`texParameteri()`](/de/docs/Web/API/WebGLRenderingContext/texParameter) deaktiviert werden. Dies ermöglicht nicht-potenzen von zwei (NPOT) Texturen auf Kosten von Mipmapping, UV-Wrapping, UV-Tiling und Ihrer Kontrolle darüber, wie das Gerät Ihre Textur handhabt.

```js
// gl.NEAREST is also allowed, instead of gl.LINEAR, as neither mipmap.
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
// Prevents s-coordinate wrapping (repeating).
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
// Prevents t-coordinate wrapping (repeating).
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
```

Mit diesen Parametern akzeptieren kompatible WebGL-Geräte jede Auflösung für diese Textur (bis zu ihren maximalen Abmessungen) automatisch. Ohne die obige Konfiguration erfordert WebGL, dass alle Abtastungen von NPOT-Texturen fehlschlagen, indem sie transparentes Schwarz zurückgeben: `rgb(0 0 0 / 0%)`.

Um das Bild zu laden, fügen Sie einen Aufruf unserer `loadTexture()`-Funktion in unsere `main()`-Funktion hinzu. Dies kann nach dem Aufruf von `initBuffers(gl)` hinzugefügt werden.

Aber beachten Sie auch: Browser kopieren Pixel aus dem geladenen Bild in von oben nach unten geordneter Reihenfolge — aus der oberen linken Ecke; aber WebGL möchte die Pixel in von unten nach oben geordneter Reihenfolge — beginnend von der unteren linken Ecke. (Für weitere Details siehe [Warum ist meine WebGL-Textur verkehrt herum?](https://jameshfisher.com/2020/10/22/why-is-my-webgl-texture-upside-down/).)

Um zu verhindern, dass die resultierende Bildtextur beim Rendern die falsche Ausrichtung hat, müssen wir auch [`pixelStorei()`](/de/docs/Web/API/WebGLRenderingContext/pixelStorei) mit dem Parameter `gl.UNPACK_FLIP_Y_WEBGL` auf `true` setzen — damit die Pixel in die von unten nach oben geordnete Reihenfolge umgedreht werden, die WebGL erwartet.

> [!NOTE]
> Fügen Sie den folgenden Code Ihrer `main()`-Funktion hinzu, direkt nach dem Aufruf von `initBuffers()`:

```js
// Load texture
const texture = loadTexture(gl, "cubetexture.png");
// Flip image pixels into the bottom-to-top order that WebGL expects.
gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
```

> [!NOTE]
> Laden Sie schließlich die Datei [cubetexture.png](https://raw.githubusercontent.com/mdn/dom-examples/main/webgl-examples/tutorial/sample6/cubetexture.png) in dasselbe lokale Verzeichnis wie Ihre JavaScript-Dateien herunter.

## Abbildung der Textur auf die Flächen

An diesem Punkt ist die Textur geladen und einsatzbereit. Bevor wir sie jedoch verwenden können, müssen wir die Zuordnung der Texturkoordinaten zu den Eckpunkten der Flächen unseres Würfels herstellen. Dies ersetzt den gesamten zuvor bestehenden Code zur Konfiguration der Farben für jede der Würfelflächen in `initBuffers()`.

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

Zuerst erstellt dieser Code einen WebGL-Puffer, in den wir die Texturkoordinaten für jede Fläche speichern, dann binden wir diesen Puffer als das Array, in das wir schreiben werden.

Das `textureCoordinates`-Array definiert die Texturkoordinaten, die jedem Eckpunkt jeder Fläche entsprechen. Beachten Sie, dass die Texturkoordinaten von 0.0 bis 1.0 reichen; die Dimensionen von Texturen sind normalisiert auf einen Bereich von 0.0 bis 1.0, unabhängig von ihrer tatsächlichen Größe, für den Zweck des Textur-Mappings.

Sobald wir das Textur-Mapping-Array eingerichtet haben, übergeben wir das Array in den Puffer, so dass WebGL diese Daten für seine Verwendung bereit hat.

Dann geben wir den neuen Puffer zurück.

Als nächstes müssen wir `initBuffers()` aktualisieren, um den Texturkoordinatenpuffer anstelle des Farbenpuffers zu erstellen und zurückzugeben.

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

Das Shader-Programm muss ebenfalls aktualisiert werden, um die Texturen anstelle von festen Farben zu verwenden.

### Der Vertex-Shader

Wir müssen den Vertex-Shader ersetzen, damit er anstelle des Farbabrufs die Texturkoordinatendaten abruft.

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

Die wesentliche Änderung hier ist, dass anstelle des Farbabrufs die Texturkoordinaten abgerufen und an den Fragment-Shader übergeben werden; dies zeigt die Position innerhalb der Textur an, die dem Eckpunkt entspricht.

### Der Fragment-Shader

Der Fragment-Shader muss ebenfalls aktualisiert werden.

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

Anstelle der Zuweisung eines Farbwerts zur Farbe des Fragments wird die Farbe des Fragments durch das Abrufen des {{Glossary("texel", "Texels")}} (das heißt, des Pixels innerhalb der Textur) berechnet, basierend auf dem Wert von `vTextureCoord`, der wie die Farben zwischen den Eckpunkten interpoliert wird.

### Attribut- und Uniform-Standorte

Da wir ein Attribut geändert und ein Uniform hinzugefügt haben, müssen wir ihre Standorte ermitteln.

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
> Fügen Sie in Ihrer `drawScene()`-Funktion, direkt nach den beiden Aufrufen von `gl.uniformMatrix4fv()`, den folgenden Code hinzu:

```js
// Tell WebGL we want to affect texture unit 0
gl.activeTexture(gl.TEXTURE0);

// Bind the texture to texture unit 0
gl.bindTexture(gl.TEXTURE_2D, texture);

// Tell the shader we bound the texture to texture unit 0
gl.uniform1i(programInfo.uniformLocations.uSampler, 0);
```

WebGL bietet mindestens 8 Textureinheiten; die erste davon ist `gl.TEXTURE0`. Wir sagen WebGL, dass wir die Einheit 0 beeinflussen wollen. Wir rufen dann [`bindTexture()`](/de/docs/Web/API/WebGLRenderingContext/bindTexture) auf, das die Textur an den `TEXTURE_2D`-Bindungspunkt von Textureinheit 0 bindet. Wir sagen dann dem Shader, dass er für das `uSampler` Textur-Einheit 0 verwendet.

Zuletzt fügen Sie `texture` als Parameter zur `drawScene()`-Funktion hinzu, sowohl dort, wo sie definiert als auch dort, wo sie aufgerufen wird.

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

[Betrachten Sie den vollständigen Code](https://github.com/mdn/dom-examples/tree/main/webgl-examples/tutorial/sample6) | [Öffnen Sie dieses Demo in einem neuen Fenster](https://mdn.github.io/dom-examples/webgl-examples/tutorial/sample6/)

## Cross-Domain Texturen

Das Laden von WebGL-Texturen unterliegt den Cross-Domain-Zugriffskontrollen. Damit Ihr Inhalt eine Textur von einer anderen Domain laden kann, muss eine CORS-Genehmigung eingeholt werden. Einzelheiten zu CORS finden Sie unter [HTTP-Zugriffskontrolle](/de/docs/Web/HTTP/Guides/CORS).

Da WebGL nun erfordert, dass Texturen aus sicheren Kontexten geladen werden, können Sie keine aus `file:///`-URLs geladenen Texturen in WebGL verwenden. Das bedeutet, dass Sie einen sicheren Web-Server benötigen, um Ihren Code zu testen und bereitzustellen. Für lokale Tests sehen Sie sich unseren Leitfaden [Wie richtet man einen lokalen Testserver ein?](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server) an.

Siehe diesen [Artikel auf hacks.mozilla.org](https://hacks.mozilla.org/2011/11/using-cors-to-load-webgl-textures-from-cross-domain-images/) für eine Erklärung, wie man CORS-genehmigte Bilder als WebGL-Texturen verwendet.

Getaintete (schreibgeschützte) 2D-Canvas-Elemente können nicht als WebGL-Texturen verwendet werden. Ein 2D {{ HTMLElement("canvas") }} wird zum Beispiel dann getaintet, wenn ein Bild aus einer anderen Domain darauf gezeichnet wird.

{{PreviousNext("Web/API/WebGL_API/Tutorial/Creating_3D_objects_using_WebGL", "Web/API/WebGL_API/Tutorial/Lighting_in_WebGL")}}
