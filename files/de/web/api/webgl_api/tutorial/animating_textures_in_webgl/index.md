---
title: Animation von Texturen in WebGL
slug: Web/API/WebGL_API/Tutorial/Animating_textures_in_WebGL
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{DefaultAPISidebar("WebGL")}} {{Previous("Web/API/WebGL_API/Tutorial/Lighting_in_WebGL")}}

In dieser Demonstration bauen wir auf dem vorherigen Beispiel auf, indem wir unsere statischen Texturen durch die Frames einer MP4-Videodatei ersetzen, die abgespielt wird. Das ist tatsächlich ziemlich einfach zu machen und macht Spaß zuzusehen, also legen wir los. Sie können ähnlichen Code verwenden, um jede Art von Daten (wie ein {{ HTMLElement("canvas") }}) als Quelle für Ihre Texturen zu verwenden.

## Zugriff auf das Video erhalten

Der erste Schritt besteht darin, das {{ HTMLElement("video") }}-Element zu erstellen, das wir verwenden, um die Videoframes abzurufen.

> [!NOTE]
> Fügen Sie diese Deklaration zu Beginn Ihres "webgl-demo.js"-Skripts hinzu:

```js
// will set to true when video can be copied to texture
let copyVideo = false;
```

> [!NOTE]
> Fügen Sie diese Funktion Ihrem "webgl-demo.js"-Skript hinzu:

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

  video.addEventListener(
    "playing",
    () => {
      playing = true;
      checkReady();
    },
    true,
  );

  video.addEventListener(
    "timeupdate",
    () => {
      timeupdate = true;
      checkReady();
    },
    true,
  );

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

Zuerst erstellen wir ein Videoelement. Wir setzen es auf Autoplay, schalten den Ton stumm und lassen das Video in einer Schleife abspielen. Dann richten wir zwei Ereignisse ein, um sicherzustellen, dass das Video abgespielt wird und die Zeit aktualisiert wurde. Wir benötigen beide Prüfungen, da es zu einem Fehler kommt, wenn Sie ein Video zu WebGL hochladen, das noch keine Daten zur Verfügung hat. Die Überprüfung auf beide Ereignisse garantiert, dass Daten vorhanden sind und es sicher ist, das Video in eine WebGL-Textur hochzuladen. Im obigen Code bestätigen wir, ob wir beide Ereignisse erhalten haben; wenn ja, setzen wir eine globale Variable `copyVideo` auf "true", um anzuzeigen, dass es sicher ist, mit dem Kopieren des Videos in eine Textur zu beginnen.

Und schließlich setzen wir das `src`-Attribut, um mit dem Laden und Abspielen des Videos zu beginnen, und rufen `play` auf.

Das Video muss von einer sicheren Quelle geladen werden, um als Texturdaten für WebGL verwendet zu werden. Das bedeutet, dass Sie nicht nur Code wie die Verwendung eines sicheren Webservers bereitstellen müssen, sondern auch einen sicheren Server zum Testen benötigen. Siehe [Wie richtet man einen lokalen Testserver ein?](/de/docs/Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server) für Hilfe.

## Nutzung der Videoframes als Textur

Die nächste Änderung besteht darin, die Textur zu initialisieren, was viel einfacher wird, da wir keine Bilddatei mehr laden müssen. Stattdessen erstellen wir ein leeres Texturobjekt, platzieren ein einzelnes Pixel darin und setzen dessen Filterung für die spätere Verwendung.

> [!NOTE]
> Ersetzen Sie die `loadTexture()`-Funktion in "webgl-demo.js" mit folgendem Code:

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

Sie haben diesen Code schon einmal gesehen. Er ist fast identisch mit der Bild-Onload-Funktion im vorherigen Beispiel – außer dass wir `texImage2D()` aufrufen und anstelle eines `Image`-Objekts das {{ HTMLElement("video") }}-Element übergeben. WebGL weiß, wie man das aktuelle Frame auswählt und als Textur verwendet.

Als nächstes müssen wir diese neuen Funktionen von unserer `main()`-Funktion aus aufrufen.

> [!NOTE]
> Ersetzen Sie in Ihrer `main()`-Funktion den Aufruf von `loadTexture()` durch diesen Code:

```js
const texture = initTexture(gl);
const video = setupVideo("Firefox.mp4");
```

> [!NOTE]
> Sie müssen auch die Datei [Firefox.mp4](https://github.com/mdn/dom-examples/blob/main/webgl-examples/tutorial/sample8/Firefox.mp4) in dasselbe lokale Verzeichnis wie Ihre JavaScript-Dateien herunterladen.

> [!NOTE]
> Ersetzen Sie in Ihrer `main()`-Funktion die `render()`-Funktion mit dieser:

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

Wenn `copyVideo` wahr ist, rufen wir `updateTexture()` direkt vor `drawScene()` auf.

Das ist alles, was es dazu gibt!

{{EmbedGHLiveSample('dom-examples/webgl-examples/tutorial/sample8/index.html', 670, 510) }}

[Vollständigen Code anzeigen](https://github.com/mdn/dom-examples/tree/main/webgl-examples/tutorial/sample8) | [Dieses Demo auf einer neuen Seite öffnen](https://mdn.github.io/dom-examples/webgl-examples/tutorial/sample8/)

## Siehe auch

- [Verwendung von Audio und Video in Firefox](/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)

{{Previous("Web/API/WebGL_API/Tutorial/Lighting_in_WebGL")}}
