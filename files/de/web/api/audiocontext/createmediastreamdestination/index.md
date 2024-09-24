---
title: "AudioContext: Methode createMediaStreamDestination()"
short-title: createMediaStreamDestination()
slug: Web/API/AudioContext/createMediaStreamDestination
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{ APIRef("Web Audio API") }}

Die `createMediaStreamDestination()`-Methode der {{ domxref("AudioContext") }}-Schnittstelle wird verwendet, um ein neues {{domxref("MediaStreamAudioDestinationNode")}}-Objekt zu erstellen, das mit einem [WebRTC](/de/docs/Web/API/WebRTC_API) {{domxref("MediaStream")}} verbunden ist, das einen Audiostream darstellt, der in einer lokalen Datei gespeichert oder an einen anderen Computer gesendet werden kann.

Der {{domxref("MediaStream")}} wird beim Erstellen des Knotens erstellt und ist über das `stream`-Attribut von {{domxref("MediaStreamAudioDestinationNode")}} zugänglich. Dieser Stream kann ähnlich wie ein `MediaStream` verwendet werden, der über {{domxref("navigator.getUserMedia") }} erhalten wurde — er kann beispielsweise mit der `addStream()`-Methode von `RTCPeerConnection` an einen entfernten Teilnehmer gesendet werden.

Weitere Details zu Medienstrom-Zielknoten finden Sie auf der Referenzseite des {{domxref("MediaStreamAudioDestinationNode")}}.

## Syntax

```js-nolint
createMediaStreamDestination()
```

### Parameter

Keine.

### Rückgabewert

Ein {{domxref("MediaStreamAudioDestinationNode")}}.

## Beispiele

Im folgenden einfachen Beispiel erstellen wir ein {{domxref("MediaStreamAudioDestinationNode")}}, ein {{ domxref("OscillatorNode") }} und ein {{ domxref("MediaRecorder") }} (das Beispiel funktioniert daher derzeit nur in Firefox und Chrome). Der `MediaRecorder` wird eingerichtet, um Informationen vom `MediaStreamDestinationNode` aufzuzeichnen.

Wenn die Schaltfläche geklickt wird, startet der Oszillator und der `MediaRecorder` wird gestartet. Wenn die Schaltfläche gestoppt wird, stoppen sowohl der Oszillator als auch der `MediaRecorder`. Das Stoppen des `MediaRecorder` löst das `dataavailable`-Ereignis aus, und die Ereignisdaten werden in das `chunks`-Array eingefügt. Danach wird das `stop`-Ereignis ausgelöst, ein neues `blob` vom Typ Opus erstellt — das die Daten im `chunks`-Array enthält — und ein neues Fenster (Tab) wird dann geöffnet, das auf eine URL zeigt, die aus dem Blob erstellt wurde.

Von hier aus können Sie die Opus-Datei abspielen und speichern.

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8" />
    <title>createMediaStreamDestination() demo</title>
  </head>
  <body>
    <h1>createMediaStreamDestination() demo</h1>

    <p>Encodiere eine reine Sinuswelle in eine Opus-Datei</p>
    <button>Erstelle Sinuswelle</button>
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
          e.target.textContent = "Aufnahme stoppen";
          clicked = true;
        } else {
          mediaRecorder.stop();
          osc.stop(0);
          e.target.disabled = true;
        }
      });

      mediaRecorder.ondataavailable = (evt) => {
        // Jeder Chunk (Blobs) in ein Array aufnehmen
        chunks.push(evt.data);
      };

      mediaRecorder.onstop = (evt) => {
        // Blob aus unseren Blobs erstellen und öffnen.
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
