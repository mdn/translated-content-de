---
title: "AudioContext: AudioContext() Konstruktor"
short-title: AudioContext()
slug: Web/API/AudioContext/AudioContext
l10n:
  sourceCommit: a4675b9077ae32f989c7ecac94f454db2653c4fc
---

{{APIRef("Web Audio API")}}

Der **`AudioContext()`** Konstruktor erstellt ein neues [`AudioContext`](/de/docs/Web/API/AudioContext) Objekt, das einen Audioverarbeitungsgraphen darstellt. Dieser wird aus Audio-Modulen gebildet, die miteinander verbunden sind, wobei jedes durch ein [`AudioNode`](/de/docs/Web/API/AudioNode) repräsentiert ist.

## Syntax

```js-nolint
new AudioContext()
new AudioContext(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt zur Konfiguration des Kontexts. Die verfügbaren Eigenschaften sind:
    - `latencyHint` {{optional_inline}}
      - : Der Typ der Wiedergabe, für die der Kontext verwendet wird, als vordefinierter String (`"balanced"`, `"interactive"` oder `"playback"`) oder als Gleitkommawert mit doppelter Genauigkeit, der die bevorzugte maximale Latenz des Kontexts in Sekunden angibt. Der Benutzeragent kann diese Anforderung möglicherweise nicht erfüllen; prüfen Sie den Wert von [`AudioContext.baseLatency`](/de/docs/Web/API/AudioContext/baseLatency), um die tatsächliche Latenz nach Erstellung des Kontexts zu bestimmen.
        - `"balanced"`: Der Browser balanciert Audioausgabe-Latenz und Energieverbrauch, wenn er einen Latenzwert auswählt.
        - `"interactive"` (Standardwert): Das Audio ist an interaktiven Elementen beteiligt, z.B. bei Reaktionen auf Nutzeraktionen oder wenn es mit visuellen Hinweisen wie einem Video oder einer Spielaktion übereinstimmen muss. Der Browser wählt die niedrigste mögliche Latenz, die keine Audioaussetzer verursacht. Dies erfordert wahrscheinlich einen erhöhten Energieverbrauch.
        - `"playback"`: Der Browser wählt eine Latenz, die die Wiedergabezeit maximiert, indem der Energieverbrauch auf Kosten der Latenz minimiert wird. Nützlich für nicht-interaktive Wiedergabe, wie z.B. Musik.
    - `sampleRate` {{optional_inline}}
      - : Gibt die Abtastrate an, die für den neuen Kontext verwendet werden soll. Der Wert muss ein Gleitkommawert sein, der die Abtastrate in Abtastungen pro Sekunde angibt, um den neuen Kontext zu konfigurieren; zusätzlich muss der Wert von [`AudioBuffer.sampleRate`](/de/docs/Web/API/AudioBuffer/sampleRate) unterstützt werden. Der Wert wird typischerweise zwischen 8.000 Hz und 96.000 Hz liegen; der Standardwert variiert je nach Ausgabegerät, aber die Abtastrate 44.100 Hz ist die häufigste. Wenn die Eigenschaft `sampleRate` nicht in den Optionen enthalten ist oder die Optionen beim Erstellen des Audiokontexts nicht angegeben werden, wird standardmäßig die bevorzugte Abtastrate des Ausgabegeräts des neuen Kontexts verwendet.
    - `sinkId` {{optional_inline}} {{Experimental_Inline}}
      - : Gibt die Sink-ID des Audioausgabegeräts an, das für den `AudioContext` verwendet werden soll. Dies kann einen der folgenden Wertetypen annehmen:
        - Ein String, der die Sink-ID darstellt, z.B. abgerufen über die `deviceId` Eigenschaft der [`MediaDeviceInfo`](/de/docs/Web/API/MediaDeviceInfo) Objekte, die von [`MediaDevices.enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices) zurückgegeben werden.
        - Ein Objekt, das verschiedene Optionen für eine Sink-ID darstellt. Derzeit nimmt dies eine einzige Eigenschaft, `type`, mit einem Wert von `none` an. Wenn dieser Parameter gesetzt ist, wird das Audio verarbeitet, ohne dass es über ein Audioausgabegerät abgespielt wird.

### Rückgabewert

Eine neue Instanz von [`AudioContext`](/de/docs/Web/API/AudioContext).

### Ausnahmen

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die angegebene `sampleRate` vom Kontext nicht unterstützt wird.

## Nutzungshinweise

Die Spezifikation geht nicht detailliert auf Themen wie die Anzahl der Audiokontexte ein, die ein Benutzeragent unterstützen sollte, oder auf Mindest- oder Höchstanforderungen an die Latenz (falls vorhanden), sodass sich diese Details von Browser zu Browser unterscheiden können. Achten Sie darauf, die Werte zu überprüfen, wenn sie für Sie wichtig sind.

Insbesondere gibt die Spezifikation keine maximale oder minimale Anzahl an Audiokontexten an, die gleichzeitig geöffnet sein müssen, dies wird den Browser-Implementierungen überlassen.

### Google Chrome

#### Beschränkung der Audiokontexte pro Tab in Chrome

Vor Version 66 unterstützte Google Chrome nur bis zu sechs Audiokontexte _pro Tab_ gleichzeitig.

#### Nicht-standardisierte Ausnahmen in Chrome

Wenn der Wert der `latencyHint` Eigenschaft nicht gültig ist, wirft Chrome eine {{jsxref("TypeError")}} Ausnahme mit der Nachricht "The provided value '...' is not a valid enum value of type AudioContextLatencyCategory".

## Beispiel

Dieses Beispiel erstellt einen neuen [`AudioContext`](/de/docs/Web/API/AudioContext) für interaktives Audio (optimiert für Latenz) mit einer Abtastrate von 44,1 kHz und einer spezifischen Audioausgabe.

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

- [`OfflineAudioContext()`](/de/docs/Web/API/OfflineAudioContext/OfflineAudioContext) Konstruktor
