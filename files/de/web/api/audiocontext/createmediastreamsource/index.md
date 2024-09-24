---
title: "AudioContext: Methode createMediaStreamSource()"
short-title: createMediaStreamSource()
slug: Web/API/AudioContext/createMediaStreamSource
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{ APIRef("Web Audio API") }}

Die Methode `createMediaStreamSource()` der {{ domxref("AudioContext") }}-Schnittstelle wird verwendet, um ein neues {{ domxref("MediaStreamAudioSourceNode") }}-Objekt zu erstellen, basierend auf einem Mediastream (zum Beispiel von einer {{ domxref("MediaDevices.getUserMedia") }}-Instanz), dessen Audio dann abgespielt und manipuliert werden kann.

Für weitere Details zu MediaStream-Audioquellknoten werfen Sie einen Blick auf die Referenzseite von {{domxref("MediaStreamAudioSourceNode")}}.

## Syntax

```js-nolint
createMediaStreamSource(stream)
```

### Parameter

- `stream`
  - : Ein {{domxref("MediaStream")}}, der als Audioquelle dient und in ein Audiobearbeitungs-Grafik implementiert wird, um benutzt und manipuliert zu werden.

### Rückgabewert

Ein neues {{domxref("MediaStreamAudioSourceNode")}}-Objekt, das den Audioknoten darstellt, dessen Medien aus dem angegebenen Quellstream stammen.

## Beispiele

In diesem Beispiel holen wir einen Medienstream (Audio + Video) von {{domxref("navigator.getUserMedia")}}, leiten die Medien in ein {{htmlelement("video")}}-Element, um sie abzuspielen und das Audio stummzuschalten, und leiten dann auch das Audio in ein {{domxref("MediaStreamAudioSourceNode")}}. Anschließend leiten wir dieses Quellaudio in einen Tiefpass-{{ domxref("BiquadFilterNode") }} (der effektiv als Bassverstärker dient) und dann in einen {{domxref("AudioDestinationNode") }}.

Der Bereichsregler unterhalb des {{ htmlelement("video") }}-Elements steuert die Verstärkung des Tiefpassfilters – erhöhen Sie den Wert des Reglers, um den Bassanteil des Audios zu verstärken!

> [!NOTE]
> Sie können dieses [Beispiel live sehen](https://mdn.github.io/webaudio-examples/stream-source-buffer/) oder [den Quellcode ansehen](https://github.com/mdn/webaudio-examples/tree/main/stream-source-buffer).

```js
const pre = document.querySelector("pre");
const video = document.querySelector("video");
const myScript = document.querySelector("script");
const range = document.querySelector("input");

// getUserMedia-Block - Stream abrufen
// in ein MediaStreamAudioSourceNode einfügen
// und die visuellen Inhalte in ein Videoelement ausgeben

if (navigator.mediaDevices) {
  console.log("getUserMedia unterstützt.");
  navigator.mediaDevices
    .getUserMedia({ audio: true, video: true })
    .then((stream) => {
      video.srcObject = stream;
      video.onloadedmetadata = (e) => {
        video.play();
        video.muted = true;
      };

      // Ein MediaStreamAudioSourceNode erstellen
      // Das HTMLMediaElement einfügen
      const audioCtx = new AudioContext();
      const source = audioCtx.createMediaStreamSource(stream);

      // Einen Biquad-Filter erstellen
      const biquadFilter = audioCtx.createBiquadFilter();
      biquadFilter.type = "lowshelf";
      biquadFilter.frequency.value = 1000;
      biquadFilter.gain.value = range.value;

      // Den AudioBufferSourceNode mit dem GainNode verbinden
      // und den GainNode mit dem Ziel, damit die Musik gespielt werden kann
      // und die Lautstärke mit dem Mauszeiger eingestellt werden kann
      source.connect(biquadFilter);
      biquadFilter.connect(audioCtx.destination);

      // Neue Mauszeigerkoordinaten erhalten, wenn die Maus bewegt wird
      // und dann neuen Gain-Wert einstellen

      range.oninput = () => {
        biquadFilter.gain.value = range.value;
      };
    })
    .catch((err) => {
      console.log(`Der folgende gUM-Fehler ist aufgetreten: ${err}`);
    });
} else {
  console.log("getUserMedia wird von Ihrem Browser nicht unterstützt!");
}

// Skript in Pre-Element ausgeben

pre.textContent = myScript.textContent;
```

> [!NOTE]
> Als Folge des Aufrufs von
> `createMediaStreamSource()` wird die Audiowiedergabe aus dem Mediastream
> in das Verarbeitungsdiagramm des {{domxref("AudioContext")}} umgeleitet. Das Abspielen/Pausieren des Streams kann jedoch weiterhin über die Medienelement-API und die Player-Steuerelemente erfolgen.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
