---
title: Animieren von Texturen in WebGL
slug: Web/API/WebGL_API/Tutorial/Animating_textures_in_WebGL
l10n:
  sourceCommit: f71683f74da0078d9371c4d0c1ff9d3898fc7b59
---

{{DefaultAPISidebar("WebGL")}} {{Previous("Web/API/WebGL_API/Tutorial/Lighting_in_WebGL")}}

In dieser Demonstration bauen wir auf dem vorherigen Beispiel auf, indem wir unsere statischen Texturen durch die Frames einer abspielenden mp4-Videodatei ersetzen. Das ist tatsächlich recht einfach und spannend zu beobachten. Also, legen wir los. Sie können ähnlichen Code verwenden, um jede Art von Daten (wie beispielsweise ein {{ HTMLElement("canvas") }}) als Quelle für Ihre Texturen zu verwenden.

## Zugriff auf das Video erhalten

Der erste Schritt besteht darin, das {{ HTMLElement("video") }}-Element zu erstellen, das wir verwenden, um die Videoframes abzurufen.

> [!NOTE]
> Fügen Sie diese Deklaration zu Beginn Ihres "webgl-demo.js"-Skripts hinzu:

```js
// will set to true when video can be copied to texture
let copyVideo = false;
```

> [!NOTE]
> Fügen Sie diese Funktion zu Ihrem "webgl-demo.js"-Skript hinzu:

```js
function setupVideo(url) {
  const video = document.createElement("video");

  let playing = false;
  let timeupdate = false;

  video.playsInline = true;
  video.muted = true;
  video.loop = true;

  // Waiting for these 2 events ensures
  // there is data in the video

  video.addEventListener("playing", () => {
    playing = true;
    checkReady();
  });

  video.addEventListener("timeupdate", () => {
    timeupdate = true;
    checkReady();
  });

  video.src = url;
  video.play();

  function checkReady() {
    if (playing && timeupdate) {
      copyVideo = true;
    }
  }

  return video;
}
```

Zuerst erstellen wir ein Videoelement. Wir setzen es auf Autoplay, stellen den Ton stumm und lassen das Video in einer Schleife abspielen. Dann richten wir zwei Ereignisse ein, um sicherzustellen, dass das Video läuft und die Zeit aktualisiert wurde. Beide Prüfungen sind erforderlich, da ein Fehler auftritt, wenn Sie ein Video in WebGL hochladen, das noch keine verfügbaren Daten hat. Das Überprüfen beider Ereignisse garantiert, dass Daten verfügbar sind und es sicher ist, das Video in eine WebGL-Textur hochzuladen. Im obigen Code bestätigen wir, ob wir beide Ereignisse erhalten haben; wenn ja, setzen wir eine globale Variable `copyVideo` auf true, um anzuzeigen, dass es sicher ist, das Video in eine Textur zu kopieren.

Schließlich setzen wir das `src`-Attribut, um zu starten, und rufen `play` auf, um das Video zu laden und abzuspielen.

Das Video muss von einer sicheren Quelle geladen werden, um als Texturdatenquelle für WebGL verwendet werden zu können. Das bedeutet, dass Sie den Code nicht nur über einen sicheren Webserver bereitstellen müssen, sondern auch einen sicheren Server für Tests benötigen. Siehe [Wie richtet man einen lokalen Testserver ein?](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server) für Hilfe.

## Die Videoframes als Textur verwenden

Die nächste Änderung besteht darin, die Textur zu initialisieren, was viel einfacher wird, da wir keine Bilddatei mehr laden müssen. Stattdessen erstellen wir ein leeres Texturobjekt, setzen einen einzigen Pixel hinein und legen dessen Filterung für die spätere Verwendung fest.

> [!NOTE]
> Ersetzen Sie die `loadTexture()`-Funktion in "webgl-demo.js" durch den folgenden Code:

```js
function initTexture(gl) {
  const texture = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, texture);

  // Because video has to be download over the internet
  // they might take a moment until it's ready so
  // put a single pixel in the texture so we can
  // use it immediately.
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

  // Turn off mips and set wrapping to clamp to edge so it
  // will work regardless of the dimensions of the video.
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);

  return texture;
}
```

> [!NOTE]
> Fügen Sie die folgende Funktion zu "webgl-demo.js" hinzu:

```js
function updateTexture(gl, texture, video) {
  const level = 0;
  const internalFormat = gl.RGBA;
  const srcFormat = gl.RGBA;
  const srcType = gl.UNSIGNED_BYTE;
  gl.bindTexture(gl.TEXTURE_2D, texture);
  gl.texImage2D(
    gl.TEXTURE_2D,
    level,
    internalFormat,
    srcFormat,
    srcType,
    video,
  );
}
```

Diesen Code haben Sie schon einmal gesehen. Er ist fast identisch mit der onload-Funktion eines Bildes im vorherigen Beispiel — außer dass wir bei `texImage2D()` anstelle eines `Image`-Objekts das {{ HTMLElement("video") }}-Element übergeben. WebGL weiß, wie es den aktuellen Frame herauszieht und als Textur verwendet.

Als nächstes müssen wir diese neuen Funktionen aus unserer `main()`-Funktion heraus aufrufen.

> [!NOTE]
> Ersetzen Sie in Ihrer `main()`-Funktion den Aufruf von `loadTexture()` durch diesen Code:

```js
const texture = initTexture(gl);
const video = setupVideo("Firefox.mp4");
```

> [!NOTE]
> Sie müssen auch die [Firefox.mp4](https://github.com/mdn/dom-examples/blob/main/webgl-examples/tutorial/sample8/Firefox.mp4) Datei in dasselbe lokale Verzeichnis wie Ihre JavaScript-Dateien herunterladen.

> [!NOTE]
> Ersetzen Sie in Ihrer `main()`-Funktion die `render()`-Funktion durch diese:

```js
// Draw the scene repeatedly
function render(now) {
  now *= 0.001; // convert to seconds
  deltaTime = now - then;
  then = now;

  if (copyVideo) {
    updateTexture(gl, texture, video);
  }

  drawScene(gl, programInfo, buffers, texture, cubeRotation);
  cubeRotation += deltaTime;

  requestAnimationFrame(render);
}
```

Wenn `copyVideo` true ist, rufen wir `updateTexture()` auf, direkt bevor wir die `drawScene()`-Funktion aufrufen.

Das ist alles!

{{EmbedGHLiveSample('dom-examples/webgl-examples/tutorial/sample8/index.html', 670, 510) }}

[Vollständigen Code ansehen](https://github.com/mdn/dom-examples/tree/main/webgl-examples/tutorial/sample8) | [Dieses Demo auf einer neuen Seite öffnen](https://mdn.github.io/dom-examples/webgl-examples/tutorial/sample8/)

## Siehe auch

- [HTML video und audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)

{{Previous("Web/API/WebGL_API/Tutorial/Lighting_in_WebGL")}}
