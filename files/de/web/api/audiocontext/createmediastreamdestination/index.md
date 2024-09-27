---
title: "AudioContext: Methode createMediaStreamDestination()"
short-title: createMediaStreamDestination()
slug: Web/API/AudioContext/createMediaStreamDestination
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{ APIRef("Web Audio API") }}

Die `createMediaStreamDestination()`-Methode der [`AudioContext`](/de/docs/Web/API/AudioContext)-Schnittstelle wird verwendet, um ein neues [`MediaStreamAudioDestinationNode`](/de/docs/Web/API/MediaStreamAudioDestinationNode)-Objekt zu erstellen, das mit einem [WebRTC](/de/docs/Web/API/WebRTC_API) [`MediaStream`](/de/docs/Web/API/MediaStream) verknüpft ist. Dieses repräsentiert einen Audiostream, der in einer lokalen Datei gespeichert oder an einen anderen Computer gesendet werden kann.

Der [`MediaStream`](/de/docs/Web/API/MediaStream) wird beim Erstellen des Knotens erstellt und ist über das `stream`-Attribut des [`MediaStreamAudioDestinationNode`](/de/docs/Web/API/MediaStreamAudioDestinationNode) zugänglich. Dieser Stream kann in ähnlicher Weise verwendet werden wie ein `MediaStream`, der über [`navigator.getUserMedia`](/de/docs/Web/API/Navigator/getUserMedia) erhalten wurde — er kann zum Beispiel an einen entfernten Teilnehmer über die `addStream()`-Methode von `RTCPeerConnection` gesendet werden.

Weitere Details über Media-Stream-Zielknoten finden Sie auf der Referenzseite des [`MediaStreamAudioDestinationNode`](/de/docs/Web/API/MediaStreamAudioDestinationNode).

## Syntax

```js-nolint
createMediaStreamDestination()
```

### Parameter

Keine.

### Rückgabewert

Ein [`MediaStreamAudioDestinationNode`](/de/docs/Web/API/MediaStreamAudioDestinationNode).

## Beispiele

Im folgenden einfachen Beispiel erstellen wir ein [`MediaStreamAudioDestinationNode`](/de/docs/Web/API/MediaStreamAudioDestinationNode), ein [`OscillatorNode`](/de/docs/Web/API/OscillatorNode) und einen [`MediaRecorder`](/de/docs/Web/API/MediaRecorder) (das Beispiel funktioniert daher derzeit nur in Firefox und Chrome.) Der `MediaRecorder` wird eingerichtet, um Informationen vom `MediaStreamDestinationNode` aufzuzeichnen.

Wenn die Schaltfläche geklickt wird, startet der Oszillator und der `MediaRecorder` wird gestartet. Wenn die Schaltfläche gestoppt wird, stoppen sowohl der Oszillator als auch der `MediaRecorder`. Das Stoppen des `MediaRecorder` verursacht das Auslösen des `dataavailable`-Events, und die Eventdaten werden in das `chunks`-Array geschoben. Danach wird das `stop`-Event ausgelöst, ein neuer `blob` wird vom Typ opus erstellt, der die Daten im `chunks`-Array enthält, und ein neues Fenster (Tab) wird geöffnet, das auf eine URL zeigt, die aus dem Blob erstellt wurde.

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
> Sie können [dieses Beispiel live ansehen](https://mdn.github.io/webaudio-examples/create-media-stream-destination/index.html) oder [den Quellcode auf GitHub studieren](https://github.com/mdn/webaudio-examples/blob/main/create-media-stream-destination/index.html).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
