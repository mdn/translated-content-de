---
title: "AudioContext: createMediaStreamDestination()-Methode"
short-title: createMediaStreamDestination()
slug: Web/API/AudioContext/createMediaStreamDestination
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{ APIRef("Web Audio API") }}

Die `createMediaStreamDestination()`-Methode der [`AudioContext`](/de/docs/Web/API/AudioContext)-Schnittstelle wird verwendet, um ein neues [`MediaStreamAudioDestinationNode`](/de/docs/Web/API/MediaStreamAudioDestinationNode)-Objekt zu erstellen, das mit einem [WebRTC](/de/docs/Web/API/WebRTC_API)-[`MediaStream`](/de/docs/Web/API/MediaStream) verknüpft ist, der einen Audiostrom darstellt. Dieser kann in einer lokalen Datei gespeichert oder an einen anderen Computer gesendet werden.

Der [`MediaStream`](/de/docs/Web/API/MediaStream) wird erstellt, wenn der Knoten erstellt wird und ist über das `stream`-Attribut des [`MediaStreamAudioDestinationNode`](/de/docs/Web/API/MediaStreamAudioDestinationNode) zugänglich. Dieser Stream kann ähnlich wie ein `MediaStream` verwendet werden, der über [`navigator.getUserMedia`](/de/docs/Web/API/Navigator/getUserMedia) erlangt wurde — er kann zum Beispiel an einen entfernten Teilnehmer mittels der `addStream()`-Methode von `RTCPeerConnection` gesendet werden.

Für weitere Details über Medienstrom-Zielknoten schauen Sie sich die [`MediaStreamAudioDestinationNode`](/de/docs/Web/API/MediaStreamAudioDestinationNode)-Referenzseite an.

## Syntax

```js-nolint
createMediaStreamDestination()
```

### Parameter

Keine.

### Rückgabewert

Ein [`MediaStreamAudioDestinationNode`](/de/docs/Web/API/MediaStreamAudioDestinationNode).

## Beispiele

Im folgenden einfachen Beispiel erstellen wir einen [`MediaStreamAudioDestinationNode`](/de/docs/Web/API/MediaStreamAudioDestinationNode), einen [`OscillatorNode`](/de/docs/Web/API/OscillatorNode) und einen [`MediaRecorder`](/de/docs/Web/API/MediaRecorder) (das Beispiel funktioniert daher derzeit nur in Firefox und Chrome). Der `MediaRecorder` wird eingerichtet, um Informationen vom `MediaStreamDestinationNode` aufzuzeichnen.

Wenn der Button geklickt wird, startet der Oszillator und der `MediaRecorder` wird gestartet. Wenn der Button gestoppt wird, stoppen sowohl der Oszillator als auch der `MediaRecorder`. Das Stoppen des `MediaRecorder` löst das `dataavailable`-Ereignis aus, und die Ereignisdaten werden in das `chunks`-Array geschoben. Danach wird das `stop`-Ereignis ausgelöst, ein neues `blob` vom Typ opus wird erstellt – das die Daten im `chunks`-Array enthält, und ein neues Fenster (Tab) wird geöffnet, das auf eine vom Blob erstellte URL zeigt.

Von hier aus können Sie die opus-Datei abspielen und speichern.

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8" />
    <title>createMediaStreamDestination() demo</title>
  </head>
  <body>
    <h1>createMediaStreamDestination() demo</h1>

    <p>Encoding a pure sine wave to an Opus file</p>
    <button>Make sine wave</button>
    <audio controls></audio>
    <script>
      const b = document.querySelector("button");
      let clicked = false;
      const chunks = [];
      const ac = new AudioContext();
      const osc = ac.createOscillator();
      const dest = ac.createMediaStreamDestination();
      const mediaRecorder = new MediaRecorder(dest.stream);
      osc.connect(dest);

      b.addEventListener("click", (e) => {
        if (!clicked) {
          mediaRecorder.start();
          osc.start(0);
          e.target.textContent = "Stop recording";
          clicked = true;
        } else {
          mediaRecorder.stop();
          osc.stop(0);
          e.target.disabled = true;
        }
      });

      mediaRecorder.ondataavailable = (evt) => {
        // Push each chunk (blobs) in an array
        chunks.push(evt.data);
      };

      mediaRecorder.onstop = (evt) => {
        // Make blob out of our blobs, and open it.
        const blob = new Blob(chunks, { type: "audio/ogg; codecs=opus" });
        document.querySelector("audio").src = URL.createObjectURL(blob);
      };
    </script>
  </body>
</html>
```

> [!NOTE]
> Sie können [dieses Beispiel live ansehen](https://mdn.github.io/webaudio-examples/create-media-stream-destination/index.html) oder [den Quellcode studieren](https://github.com/mdn/webaudio-examples/blob/main/create-media-stream-destination/index.html) auf GitHub.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
