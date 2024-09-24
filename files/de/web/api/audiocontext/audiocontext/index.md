---
title: "AudioContext: AudioContext() Konstruktor"
short-title: AudioContext()
slug: Web/API/AudioContext/AudioContext
l10n:
  sourceCommit: a4675b9077ae32f989c7ecac94f454db2653c4fc
---

{{APIRef("Web Audio API")}}

Der **`AudioContext()`** Konstruktor
erstellt ein neues {{domxref("AudioContext")}} Objekt, das ein Audioverarbeitungsdiagramm darstellt, welches aus miteinander verbundenen Audiomodulen besteht, wobei jedes durch einen {{domxref("AudioNode")}} repräsentiert wird.

## Syntax

```js-nolint
new AudioContext()
new AudioContext(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt, das zur Konfiguration des Kontexts verwendet wird. Die verfügbaren Eigenschaften sind:
    - `latencyHint` {{optional_inline}}
      - : Der Typ der Wiedergabe, für den der Kontext verwendet wird, als vordefinierter String (`"balanced"`, `"interactive"` oder `"playback"`) oder als Gleitkommawert mit doppelter Genauigkeit, der die bevorzugte maximale Latenz des Kontexts in Sekunden angibt. Der User Agent kann sich entscheiden, diese Anforderung zu erfüllen oder nicht; überprüfen Sie den Wert von {{domxref("AudioContext.baseLatency")}}, um die tatsächliche Latenz nach Erstellung des Kontexts zu bestimmen.
        - `"balanced"`: Der Browser balanciert die Audioausgangslatenz und den Energieverbrauch, wenn er einen Latenzwert auswählt.
        - `"interactive"` (Standardwert): Das Audio ist in interaktive Elemente involviert, wie zum Beispiel das Reagieren auf Benutzeraktionen oder das Abgleichen mit visuellen Hinweisen wie einem Video- oder Spielereignis. Der Browser wählt die niedrigste mögliche Latenz, die keine Audio-Aussetzer verursacht. Dies erfordert wahrscheinlich einen erhöhten Energieverbrauch.
        - `"playback"`: Der Browser wählt eine Latenz, die die Wiedergabezeit maximiert, indem der Energieverbrauch auf Kosten der Latenz minimiert wird. Nützlich für nicht-interaktive Wiedergaben, wie das Abspielen von Musik.
    - `sampleRate` {{optional_inline}}
      - : Gibt die Abtastrate an, die für den neuen Kontext verwendet werden soll. Der Wert muss ein Gleitkommawert sein, der die Abtastrate in Samples pro Sekunde angibt, für die der neue Kontext konfiguriert werden soll; zusätzlich muss der Wert von {{domxref("AudioBuffer.sampleRate")}} unterstützt werden. Der Wert liegt typischerweise zwischen 8.000 Hz und 96.000 Hz; der Standardwert variiert je nach Ausgabegerät, aber die Abtastrate von 44.100 Hz ist die gebräuchlichste. Wenn die `sampleRate`-Eigenschaft nicht in den Optionen enthalten ist oder die Optionen beim Erstellen des Audiokontexts nicht angegeben sind, wird standardmäßig die bevorzugte Abtastrate des Ausgabegeräts des neuen Kontexts verwendet.
    - `sinkId` {{optional_inline}} {{Experimental_Inline}}
      - : Gibt die Sink-ID des Audiowiedergabegeräts an, das für das `AudioContext` verwendet werden soll. Dies kann eine der folgenden Wertetypen annehmen:
        - Einen String, der die Sink-ID darstellt, z.B. abgerufen über die `deviceId`-Eigenschaft der {{domxref("MediaDeviceInfo")}} Objekte, die von {{domxref("MediaDevices.enumerateDevices()")}} zurückgegeben werden.
        - Ein Objekt, das verschiedene Optionen für eine Sink-ID darstellt. Derzeit nimmt dies eine einzige Eigenschaft, `type`, mit einem Wert von `none`. Durch Setzen dieses Parameters wird das Audio ohne Wiedergabe über ein Audioausgabegerät verarbeitet.

### Rückgabewert

Eine neue {{domxref("AudioContext")}} Instanz.

### Ausnahmen

- `NotSupportedError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die angegebene `sampleRate` vom Kontext nicht unterstützt wird.

## Verwendungshinweise

Die Spezifikation geht nicht detailliert darauf ein, wie viele Audiokontexte ein User Agent unterstützen sollte oder welche minimalen oder maximalen Latenzanforderungen (falls vorhanden) bestehen, sodass sich diese Details von Browser zu Browser unterscheiden können. Stellen Sie sicher, die Werte zu überprüfen, wenn sie für Sie wichtig sind.

Insbesondere gibt die Spezifikation keine maximale oder minimale Anzahl von Audiokontexten an, die gleichzeitig geöffnet sein müssen, sodass es den Browserimplementierungen überlassen bleibt, dies festzulegen.

### Google Chrome

#### Einschränkung der Audiokontexte pro Tab in Chrome

Vor Version 66 unterstützte Google Chrome nur bis zu sechs Audiokontexte _pro Tab_ gleichzeitig.

#### Nicht-standardisierte Ausnahmen in Chrome

Wenn der Wert der `latencyHint`-Eigenschaft ungültig ist, wirft Chrome eine {{jsxref("TypeError")}} Ausnahme mit der Nachricht "The provided value '...' is not a valid enum value of type AudioContextLatencyCategory".

## Beispiel

Dieses Beispiel erstellt einen neuen {{domxref("AudioContext")}} für interaktives Audio (Optimierung für Latenz) mit einer Abtastrate von 44,1 kHz und einer spezifischen Audioausgabe.

```js
const audioCtx = new AudioContext({
  latencyHint: "interactive",
  sampleRate: 44100,
  sinkId: "bb04fea9a8318c96de0bd...", // gekürzt aus Platzgründen
});
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- {{domxref("OfflineAudioContext.OfflineAudioContext()", "OfflineAudioContext()")}} Konstruktor
