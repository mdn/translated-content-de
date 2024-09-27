---
title: "AudioContext: AudioContext()-Konstruktor"
short-title: AudioContext()
slug: Web/API/AudioContext/AudioContext
l10n:
  sourceCommit: a4675b9077ae32f989c7ecac94f454db2653c4fc
---

{{APIRef("Web Audio API")}}

Der **`AudioContext()`**-Konstruktor erstellt ein neues [`AudioContext`](/de/docs/Web/API/AudioContext)-Objekt, das ein Audioverarbeitungsdiagramm darstellt, bestehend aus miteinander verbundenen Audiomodulen, die jeweils durch einen [`AudioNode`](/de/docs/Web/API/AudioNode) repräsentiert werden.

## Syntax

```js-nolint
new AudioContext()
new AudioContext(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt zur Konfiguration des Kontextes. Die verfügbaren Eigenschaften sind:
    - `latencyHint` {{optional_inline}}
      - : Der Typ der Wiedergabe, für die der Kontext verwendet wird, als vordefinierter String (`"balanced"`, `"interactive"` oder `"playback"`) oder ein Gleitkommawert mit doppelter Genauigkeit, der die bevorzugte maximale Latenz des Kontextes in Sekunden angibt. Der User Agent kann diese Anforderung möglicherweise erfüllen oder nicht; prüfen Sie den Wert von [`AudioContext.baseLatency`](/de/docs/Web/API/AudioContext/baseLatency), um die tatsächliche Latenz nach der Erstellung des Kontexts zu bestimmen.
        - `"balanced"`: Der Browser balanciert die Audioausgabe-Latenz und den Energieverbrauch, wenn er einen Latenzwert auswählt.
        - `"interactive"` (Standardwert): Das Audio ist in interaktive Elemente involviert, wie z. B. das Reagieren auf Benutzeraktionen oder das Zusammenfallen mit visuellen Hinweisen wie einem Video oder einer Spielaktion. Der Browser wählt die niedrigstmögliche Latenz, die keine Störungen im Audio verursacht. Dies erfordert wahrscheinlich einen erhöhten Energieverbrauch.
        - `"playback"`: Der Browser wählt eine Latenz, die die Wiedergabezeit maximiert, indem der Energieverbrauch auf Kosten der Latenz minimiert wird. Nützlich für nicht-interaktive Wiedergabe, wie Musikabspiel.
    - `sampleRate` {{optional_inline}}
      - : Gibt die Samplerate an, die für den neuen Kontext verwendet werden soll. Der Wert muss ein Gleitkommawert sein, der die Samplerate in Samples pro Sekunde angibt, mit der der neue Kontext konfiguriert werden soll; zusätzlich muss der Wert einer sein, der von [`AudioBuffer.sampleRate`](/de/docs/Web/API/AudioBuffer/sampleRate) unterstützt wird. Der Wert liegt typischerweise zwischen 8.000 Hz und 96.000 Hz; der Standard variiert je nach Ausgabegerät, aber die Samplerate von 44.100 Hz ist am häufigsten. Wenn die Eigenschaft `sampleRate` nicht in den Optionen enthalten ist oder die Optionen beim Erstellen des Audiokontextes nicht angegeben werden, wird standardmäßig die bevorzugte Samplerate des Ausgabegeräts des neuen Kontexts verwendet.
    - `sinkId` {{optional_inline}} {{Experimental_Inline}}
      - : Gibt die Sink-ID des Audiowiedergabegeräts an, das für den `AudioContext` verwendet werden soll. Dies kann einen der folgenden Werttypen annehmen:
        - Ein String, der die Sink-ID darstellt, die beispielsweise über die `deviceId`-Eigenschaft der von [`MediaDevices.enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices) zurückgegebenen [`MediaDeviceInfo`](/de/docs/Web/API/MediaDeviceInfo)-Objekte abgerufen wird.
        - Ein Objekt, das verschiedene Optionen für eine Sink-ID darstellt. Derzeit nimmt dies eine einzige Eigenschaft, `type`, mit einem Wert von `none` an. Das Festlegen dieses Parameters bewirkt, dass das Audio verarbeitet wird, ohne über ein Audiowiedergabegerät abgespielt zu werden.

### Rückgabewert

Eine neue [`AudioContext`](/de/docs/Web/API/AudioContext)-Instanz.

### Ausnahmen

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die angegebene `sampleRate` vom Kontext nicht unterstützt wird.

## Nutzungshinweise

Die Spezifikation geht nicht sehr detailliert auf Dinge wie die Anzahl der Audiokontexte ein, die ein User Agent unterstützen sollte, oder auf Mindest- oder Höchstanforderungen an die Latenz (falls vorhanden). Daher können diese Details von Browser zu Browser variieren. Stellen Sie sicher, dass Sie die Werte überprüfen, wenn sie für Sie wichtig sind.

Insbesondere gibt die Spezifikation keine maximale oder minimale Anzahl von Audiokontexten an, die gleichzeitig geöffnet sein müssen, sodass dies den Browserimplementierungen überlassen bleibt.

### Google Chrome

#### Begrenzung des Auditkontexts pro Tab in Chrome

Vor Version 66 unterstützte Google Chrome nur bis zu sechs Audiokontexte _pro Tab_ gleichzeitig.

#### Nicht standardmäßige Ausnahmen in Chrome

Wenn der Wert der `latencyHint`-Eigenschaft ungültig ist, wirft Chrome eine {{jsxref("TypeError")}}-Ausnahme mit der Nachricht "The provided value '...' is not a valid enum value of type AudioContextLatencyCategory".

## Beispiel

Dieses Beispiel erstellt einen neuen [`AudioContext`](/de/docs/Web/API/AudioContext) für interaktives Audio (optimiert für Latenz) mit einer Samplerate von 44,1 kHz und einer spezifischen Audioausgabe.

```js
const audioCtx = new AudioContext({
  latencyHint: "interactive",
  sampleRate: 44100,
  sinkId: "bb04fea9a8318c96de0bd...", // truncated for brevity
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`OfflineAudioContext()`](/de/docs/Web/API/OfflineAudioContext/OfflineAudioContext)-Konstruktor
