---
title: Animation von Texturen in WebGL
slug: Web/API/WebGL_API/Tutorial/Animating_textures_in_WebGL
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{DefaultAPISidebar("WebGL")}} {{Previous("Web/API/WebGL_API/Tutorial/Lighting_in_WebGL")}}

In dieser Demonstration bauen wir auf dem vorherigen Beispiel auf, indem wir unsere statischen Texturen durch die Frames einer MP4-Videodatei ersetzen, die abgespielt wird. Dies ist tatsächlich ziemlich einfach zu tun und faszinierend anzusehen, daher lassen Sie uns beginnen. Sie können ähnlichen Code verwenden, um jegliche Art von Daten (wie ein {{ HTMLElement("canvas") }}) als Quelle für Ihre Texturen zu verwenden.

## Zugriff auf das Video erhalten

Der erste Schritt ist die Erstellung des {{ HTMLElement("video") }}-Elements, das wir verwenden, um die Videoframes abzurufen.

> [!NOTE]
> Fügen Sie diese Deklaration am Anfang Ihres "webgl-demo.js"-Skripts hinzu:

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

Zuerst erstellen wir ein Videoelement. Wir setzen es auf automatische Wiedergabe, schalten den Ton stumm und lassen das Video in einer Schleife laufen. Dann richten wir zwei Ereignisse ein, um sicherzustellen, dass das Video abgespielt wird und die Zeit aktualisiert wurde. Wir benötigen beide Überprüfungen, da es einen Fehler produziert, wenn Sie ein Video zu WebGL hochladen, das noch keine Daten verfügbar hat. Die Überprüfung beider Ereignisse garantiert, dass Daten verfügbar sind und es sicher ist, das Video zu einer WebGL-Textur hochzuladen. Im obigen Code bestätigen wir, ob wir beide Ereignisse erhalten haben; wenn ja, setzen wir eine globale Variable `copyVideo` auf true, um anzuzeigen, dass es sicher ist, das Video zu einer Textur zu kopieren.

Und schließlich setzen wir das `src`-Attribut, um zu starten, und rufen `play` auf, um das Video zu laden und abzuspielen.

Das Video muss aus einer sicheren Quelle geladen werden, um es verwenden zu können, um Texturdaten an WebGL zu liefern. Das bedeutet, dass Sie nicht nur Code wie die Verwendung eines sicheren Webservers bereitstellen müssen, sondern auch einen sicheren Server benötigen, um damit zu testen. Siehe [Wie richtet man einen lokalen Testserver ein?](/de/docs/Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server) für Hilfe.

## Verwendung der Videoframes als Textur

Die nächste Änderung besteht darin, die Textur zu initialisieren, was viel einfacher wird, da wir keine Bilddatei mehr laden müssen. Stattdessen erstellen wir ein leeres Texturobjekt, setzen ein einzelnes Pixel hinein und legen die Filterung für die spätere Verwendung fest.

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

Sie haben diesen Code schon einmal gesehen. Es ist fast identisch mit der Bild-Onload-Funktion im vorherigen Beispiel – außer dass wir bei der Aufruf von `texImage2D()` anstelle eines `Image`-Objekts das {{ HTMLElement("video") }}-Element übergeben. WebGL weiß, wie es den aktuellen Frame herausziehen und als Textur verwenden kann.

Als nächstes müssen wir diese neuen Funktionen aus unserer `main()`-Funktion aufrufen.

> [!NOTE]
> Ersetzen Sie in Ihrer `main()`-Funktion den Aufruf von `loadTexture()` mit diesem Code:

```js
const texture = initTexture(gl);
const video = setupVideo("Firefox.mp4");
```

> [!NOTE]
> Sie müssen auch die Datei [Firefox.mp4](https://github.com/mdn/dom-examples/blob/main/webgl-examples/tutorial/sample8/Firefox.mp4) in dasselbe lokale Verzeichnis wie Ihre JavaScript-Dateien herunterladen.

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

Wenn `copyVideo` wahr ist, rufen wir `updateTexture()` direkt auf, bevor wir die `drawScene()`-Funktion aufrufen.

Das ist alles dazu!

{{EmbedGHLiveSample('dom-examples/webgl-examples/tutorial/sample8/index.html', 670, 510) }}

[Vollständigen Code ansehen](https://github.com/mdn/dom-examples/tree/main/webgl-examples/tutorial/sample8) | [Dieses Demo in einem neuen Fenster öffnen](https://mdn.github.io/dom-examples/webgl-examples/tutorial/sample8/)

## Siehe auch

- [Verwendung von Audio und Video in Firefox](/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)

{{Previous("Web/API/WebGL_API/Tutorial/Lighting_in_WebGL")}}
