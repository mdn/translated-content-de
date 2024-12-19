---
title: Texturen in WebGL animieren
slug: Web/API/WebGL_API/Tutorial/Animating_textures_in_WebGL
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{DefaultAPISidebar("WebGL")}} {{Previous("Web/API/WebGL_API/Tutorial/Lighting_in_WebGL")}}

In dieser Demonstration bauen wir auf dem vorherigen Beispiel auf, indem wir unsere statischen Texturen durch die Frames einer abspielenden mp4-Videodatei ersetzen. Dies ist tatsächlich ziemlich einfach zu bewerkstelligen und macht Spaß anzusehen, also lassen Sie uns loslegen. Sie können ähnlichen Code verwenden, um jede Art von Daten (wie zum Beispiel ein {{ HTMLElement("canvas") }}) als Quelle für Ihre Texturen zu nutzen.

## Zugriff auf das Video erhalten

Der erste Schritt besteht darin, das {{ HTMLElement("video") }}-Element zu erstellen, das wir zur Gewinnung der Videoframes verwenden werden.

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

Zuerst erstellen wir ein Videoelement. Wir setzen es auf Autoplay, schalten den Ton stumm und lassen das Video in einer Schleife ablaufen. Dann richten wir zwei Ereignisse ein, um sicherzustellen, dass das Video abgespielt wird und die Zeit aktualisiert wurde. Beide Überprüfungen sind notwendig, da es einen Fehler verursacht, wenn ein Video zu WebGL hochgeladen wird, das noch keine Daten enthält. Die Überprüfung beider Ereignisse stellt sicher, dass Daten verfügbar sind und es sicher ist, das Video zu einer WebGL-Textur hochzuladen. Im obigen Code bestätigen wir, ob wir beide Ereignisse empfangen haben; falls ja, setzen wir eine globale Variable, `copyVideo`, auf "true", um anzuzeigen, dass es sicher ist, das Video in eine Textur zu kopieren.

Und schließlich setzen wir das `src`-Attribut zum Starten und rufen `play` auf, um das Video zu laden und abzuspielen.

Das Video muss aus einer sicheren Quelle geladen werden, um Texturdaten für WebGL bereitzustellen. Das bedeutet, dass Sie nicht nur Code über einen sicheren Webserver bereitstellen müssen, sondern auch einen sicheren Server zum Testen benötigen. Siehe [Wie richten Sie einen lokalen Testserver ein?](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server) für Hilfe.

## Die Videoframes als Textur verwenden

Die nächste Änderung besteht darin, die Textur zu initialisieren, was viel einfacher wird, da wir keine Bilddatei mehr laden müssen. Stattdessen erstellen wir ein leeres Texturobjekt, setzen einen einzelnen Pixel hinein und konfigurieren das Filtern für die spätere Verwendung.

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

Sie haben diesen Code schon einmal gesehen. Er ist fast identisch mit der Image-Onload-Funktion im vorherigen Beispiel — außer dass wir bei `texImage2D()` anstelle eines `Image`-Objekts das {{ HTMLElement("video") }}-Element übergeben. WebGL weiß, wie es das aktuelle Frame herauszieht und als Textur verwendet.

Als nächstes müssen wir diese neuen Funktionen von unserer `main()`-Funktion aus aufrufen.

> [!NOTE]
> Ersetzen Sie in Ihrer `main()`-Funktion den Aufruf von `loadTexture()` durch diesen Code:

```js
const texture = initTexture(gl);
const video = setupVideo("Firefox.mp4");
```

> [!NOTE]
> Sie müssen auch die [Firefox.mp4](https://github.com/mdn/dom-examples/blob/main/webgl-examples/tutorial/sample8/Firefox.mp4)-Datei in das gleiche lokale Verzeichnis wie Ihre JavaScript-Dateien herunterladen.

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

Wenn `copyVideo` wahr ist, rufen wir `updateTexture()` auf, direkt bevor wir die `drawScene()`-Funktion aufrufen.

Das ist alles, was dazu gehört!

{{EmbedGHLiveSample('dom-examples/webgl-examples/tutorial/sample8/index.html', 670, 510) }}

[Den vollständigen Code anzeigen](https://github.com/mdn/dom-examples/tree/main/webgl-examples/tutorial/sample8) | [Dieses Demo auf einer neuen Seite öffnen](https://mdn.github.io/dom-examples/webgl-examples/tutorial/sample8/)

## Siehe auch

- [HTML-Video und -Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)

{{Previous("Web/API/WebGL_API/Tutorial/Lighting_in_WebGL")}}
