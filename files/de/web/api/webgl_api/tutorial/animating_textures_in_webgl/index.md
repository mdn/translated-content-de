---
title: Texturen in WebGL animieren
slug: Web/API/WebGL_API/Tutorial/Animating_textures_in_WebGL
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{DefaultAPISidebar("WebGL")}} {{Previous("Web/API/WebGL_API/Tutorial/Lighting_in_WebGL")}}

In dieser Demonstration erweitern wir das vorherige Beispiel, indem wir unsere statischen Texturen durch die Frames einer mp4-Videodatei ersetzen, die abgespielt wird. Das ist tatsächlich ziemlich einfach zu machen und interessant zu beobachten, also lassen Sie uns anfangen. Sie können ähnlichen Code verwenden, um jede Art von Daten (wie ein {{ HTMLElement("canvas") }}) als Quelle für Ihre Texturen zu verwenden.

## Zugriff auf das Video erhalten

Der erste Schritt ist, das {{ HTMLElement("video") }}-Element zu erstellen, das wir verwenden werden, um die Video-Frames abzurufen.

> [!NOTE]
> Fügen Sie diese Deklaration zu Beginn Ihres "webgl-demo.js"-Skripts hinzu:

```js
// wird auf true gesetzt, wenn das Video in die Textur kopiert werden kann
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

  // Das Warten auf diese 2 Ereignisse stellt sicher,
  // dass Daten im Video vorhanden sind

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

Zuerst erstellen wir ein Video-Element. Wir stellen es auf Autoplay, schalten den Ton stumm und lassen das Video in einer Schleife wiederholen. Dann richten wir zwei Ereignisse ein, um sicherzustellen, dass das Video abgespielt wird und die Zeit aktualisiert wurde. Wir benötigen beide Überprüfungen, da es zu einem Fehler führt, wenn Sie ein Video in WebGL hochladen, das noch keine Daten verfügbar hat. Die Überprüfung auf beide Ereignisse garantiert, dass Daten verfügbar sind, und es ist sicher, mit dem Hochladen des Videos zu einer WebGL-Textur zu beginnen. Im obigen Code bestätigen wir, ob wir beide dieser Ereignisse erhalten haben; falls ja, setzen wir eine globale Variable, `copyVideo`, auf true, um anzuzeigen, dass es sicher ist, das Video in eine Textur zu kopieren.

Und schließlich setzen wir das `src`-Attribut, um das Laden und Abspielen des Videos zu starten, und rufen `play` auf.

Das Video muss von einer sicheren Quelle geladen werden, um Texturdaten an WebGL zur Verfügung zu stellen. Das bedeutet, dass Sie nicht nur Code auf einem sicheren Webserver bereitstellen müssen, sondern auch einen sicheren Server zum Testen benötigen. Siehe [Wie richtet man einen lokalen Testserver ein?](/de/docs/Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server) für Hilfe.

## Die Video-Frames als Textur verwenden

Die nächste Änderung besteht darin, die Textur zu initialisieren, was viel einfacher wird, da wir keine Bilddatei mehr laden müssen. Stattdessen erstellen wir ein leeres Texturobjekt, setzen ein einzelnes Pixel ein und richten die Filterung für die spätere Verwendung ein.

> [!NOTE]
> Ersetzen Sie die `loadTexture()`-Funktion in "webgl-demo.js" durch den folgenden Code:

```js
function initTexture(gl) {
  const texture = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, texture);

  // Da das Video über das Internet heruntergeladen werden muss,
  // kann es einen Moment dauern, bis es bereit ist, also
  // fügen wir ein einzelnes Pixel in die Textur ein, sodass wir
  // es sofort verwenden können.
  const level = 0;
  const internalFormat = gl.RGBA;
  const width = 1;
  const height = 1;
  const border = 0;
  const srcFormat = gl.RGBA;
  const srcType = gl.UNSIGNED_BYTE;
  const pixel = new Uint8Array([0, 0, 255, 255]); // opakes Blau
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

  // Schalten Sie Mips aus und setzen Sie das Wrapping auf Clamp-to-Edge,
  // damit es unabhängig von den Abmessungen des Videos funktioniert.
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

Sie haben diesen Code schon gesehen. Er ist fast identisch mit der image onload-Funktion im vorherigen Beispiel — jedoch rufen wir `texImage2D()` auf und übergeben statt eines `Image`-Objekts das {{ HTMLElement("video") }}-Element. WebGL weiß, wie es den aktuellen Frame herauszieht und als Textur verwendet.

Als Nächstes müssen wir diese neuen Funktionen aus unserer `main()`-Funktion aufrufen.

> [!NOTE]
> Ersetzen Sie den Aufruf von `loadTexture()` in Ihrer `main()`-Funktion durch diesen Code:

```js
const texture = initTexture(gl);
const video = setupVideo("Firefox.mp4");
```

> [!NOTE]
> Sie müssen auch die Datei [Firefox.mp4](https://github.com/mdn/dom-examples/blob/main/webgl-examples/tutorial/sample8/Firefox.mp4) in dasselbe lokale Verzeichnis wie Ihre JavaScript-Dateien herunterladen.

> [!NOTE]
> Ersetzen Sie die `render()`-Funktion in Ihrer `main()`-Funktion durch diese:

```js
// Zeichnen Sie die Szene wiederholt
function render(now) {
  now *= 0.001; // Umrechnen in Sekunden
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

Wenn `copyVideo` true ist, rufen wir `updateTexture()` auf, bevor wir die `drawScene()`-Funktion aufrufen.

Das ist alles!

{{EmbedGHLiveSample('dom-examples/webgl-examples/tutorial/sample8/index.html', 670, 510) }}

[Vollständigen Code anzeigen](https://github.com/mdn/dom-examples/tree/main/webgl-examples/tutorial/sample8) | [Dieses Demo auf einer neuen Seite öffnen](https://mdn.github.io/dom-examples/webgl-examples/tutorial/sample8/)

## Siehe auch

- [Audio und Video in Firefox verwenden](/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)

{{Previous("Web/API/WebGL_API/Tutorial/Lighting_in_WebGL")}}
