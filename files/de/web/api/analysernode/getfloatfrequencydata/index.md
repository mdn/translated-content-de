---
title: "AnalyserNode: getFloatFrequencyData()-Methode"
short-title: getFloatFrequencyData()
slug: Web/API/AnalyserNode/getFloatFrequencyData
l10n:
  sourceCommit: d26705ee1fb754fb4c5f6e4a03b7b008eb3b8687
---

{{ APIRef("Web Audio API") }}

Die **`getFloatFrequencyData()`**-Methode der {{domxref("AnalyserNode")}}-Schnittstelle kopiert die aktuelle Frequenzdaten in ein übergebenes {{jsxref("Float32Array")}}-Array. Jeder Array-Wert ist ein _Sample_, die Amplitude des Signals zu einem bestimmten Zeitpunkt.

Jedes Element im Array steht für den Dezibel-Wert einer bestimmten Frequenz. Die Frequenzen sind linear von 0 bis zur Hälfte der Abtastrate verteilt. Beispielsweise repräsentiert bei einer Abtastrate von `48000` Hz das letzte Element des Arrays den Dezibel-Wert für `24000` Hz.

Falls Sie eine höhere Leistung benötigen und Genauigkeit weniger wichtig ist, können Sie stattdessen {{domxref("AnalyserNode.getByteFrequencyData()")}} verwenden, das mit einem {{jsxref("Uint8Array")}} arbeitet.

## Syntax

```js-nolint
getFloatFrequencyData(array)
```

### Parameter

- `array`
  - : Das {{jsxref("Float32Array")}}, in das die Frequenzbereichsdaten kopiert werden. Für jede stille Probe lautet der Wert `-Infinity`.
    Wenn das Array weniger Elemente als {{domxref("AnalyserNode.frequencyBinCount")}} hat, werden überschüssige Elemente verworfen. Wenn es mehr Elemente als nötig hat, werden überschüssige Elemente ignoriert.

### Rückgabewert

Kein ({{jsxref("undefined")}}).

## Beispiele

```js
const audioCtx = new AudioContext();
const analyser = audioCtx.createAnalyser();
// Float32Array sollte die gleiche Länge wie frequencyBinCount haben
const myDataArray = new Float32Array(analyser.frequencyBinCount);
// Füllen Sie das Float32Array mit Daten aus getFloatFrequencyData()
analyser.getFloatFrequencyData(myDataArray);
```

### Zeichnen eines Spektrums

Das folgende Beispiel zeigt die grundlegende Verwendung eines {{domxref("AudioContext")}}, um einen {{domxref("MediaElementAudioSourceNode")}} mit einem `AnalyserNode` zu verbinden. Während die Audio abgespielt wird, sammeln wir kontinuierlich die Frequenzdaten mit {{domxref("window.requestAnimationFrame()","requestAnimationFrame()")}} und zeichnen ein "Winamp-Balkendiagramm" auf ein {{htmlelement("canvas")}}-Element.

Für vollständigere angewandte Beispiele/Informationen, sehen Sie sich unser [Voice-change-O-matic](https://github.com/mdn/webaudio-examples/tree/main/voice-change-o-matic) Demo an (siehe [app.js Zeilen 108–193](https://github.com/mdn/webaudio-examples/blob/main/voice-change-o-matic/scripts/app.js#L108-L193) für relevanten Code).

```html
<!doctype html>
<body>
  <script>
    const audioCtx = new AudioContext();

    //Audioquelle erzeugen
    //Hier verwenden wir eine Audiodatei, aber dies könnte auch z.B. ein Mikrofoneingang sein
    const audioEle = new Audio();
    audioEle.src = "my-audio.mp3"; //Dateiname hier einsetzen
    audioEle.autoplay = true;
    audioEle.preload = "auto";
    const audioSourceNode = audioCtx.createMediaElementSource(audioEle);

    //Analyser-Node erzeugen
    const analyserNode = audioCtx.createAnalyser();
    analyserNode.fftSize = 256;
    const bufferLength = analyserNode.frequencyBinCount;
    const dataArray = new Float32Array(bufferLength);

    //Audio-Netzwerk aufbauen
    audioSourceNode.connect(analyserNode);
    analyserNode.connect(audioCtx.destination);

    //2D-Canvas erzeugen
    const canvas = document.createElement("canvas");
    canvas.style.position = "absolute";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    document.body.appendChild(canvas);
    const canvasCtx = canvas.getContext("2d");
    canvasCtx.clearRect(0, 0, canvas.width, canvas.height);

    function draw() {
      //Nächste Neuzeichnung planen
      requestAnimationFrame(draw);

      //Spektrumdaten abrufen
      analyserNode.getFloatFrequencyData(dataArray);

      //Schwarzen Hintergrund zeichnen
      canvasCtx.fillStyle = "rgb(0 0 0)";
      canvasCtx.fillRect(0, 0, canvas.width, canvas.height);

      //Spektrum zeichnen
      const barWidth = (canvas.width / bufferLength) * 2.5;
      let posX = 0;
      for (let i = 0; i < bufferLength; i++) {
        const barHeight = (dataArray[i] + 140) * 2;
        canvasCtx.fillStyle = `rgb(${Math.floor(barHeight + 100)} 50 50)`;
        canvasCtx.fillRect(
          posX,
          canvas.height - barHeight / 2,
          barWidth,
          barHeight / 2,
        );
        posX += barWidth + 1;
      }
    }

    draw();
  </script>
</body>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
