---
title: "AudioContext: Konstruktor AudioContext()"
short-title: AudioContext()
slug: Web/API/AudioContext/AudioContext
l10n:
  sourceCommit: 64d2a33125b048766fa69bba398e750e29ffa875
---

{{APIRef("Web Audio API")}}

Der Konstruktor **`AudioContext()`** erstellt ein neues [`AudioContext`](/de/docs/Web/API/AudioContext)-Objekt. Es repräsentiert einen Graphen zur Audioverarbeitung, der aus miteinander verbundenen Audiomodulen besteht, die jeweils durch einen [`AudioNode`](/de/docs/Web/API/AudioNode) repräsentiert werden.

## Syntax

```js-nolint
new AudioContext()
new AudioContext(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt zur Konfiguration des Kontexts. Die verfügbaren Eigenschaften sind:
    - `latencyHint` {{optional_inline}}
      - : Gibt einen Hinweis darauf, welche Latenz der Browser für die Art der Wiedergabe wählen soll, für die der Kontext verwendet wird. Der User Agent kann dieser Vorgabe entsprechen, muss es aber nicht. Prüfen Sie nach dem Erstellen des Kontexts den Wert von [`AudioContext.baseLatency`](/de/docs/Web/API/AudioContext/baseLatency), um die tatsächliche Latenz zu ermitteln. Mögliche Werte sind:
        - `balanced`
          - : Der Browser wägt bei der Wahl des Latenzwerts zwischen der Latenz der Audioausgabe und dem Stromverbrauch ab.
        - `interactive`
          - : Das Audio ist Teil interaktiver Elemente, etwa wenn es auf Benutzeraktionen reagieren oder mit visuellen Signalen wie einem Video oder einer Spielaktion zusammenfallen muss. Der Browser wählt die niedrigstmögliche Latenz, bei der keine Audioaussetzer auftreten. Dies erfordert wahrscheinlich einen höheren Stromverbrauch.
        - `playback`
          - : Der Browser wählt eine Latenz, die durch einen geringeren Stromverbrauch eine möglichst lange Wiedergabedauer ermöglicht, auch wenn dadurch die Latenz steigt. Dies eignet sich für nicht interaktive Wiedergabe, etwa von Musik.
        - Eine Gleitkommazahl
          - : Ein Gleitkommawert mit doppelter Genauigkeit, der die bevorzugte maximale Latenz des Kontexts in Sekunden angibt.

        Wenn `latencyHint` weggelassen wird, ist der Standardwert `interactive`.

    - `renderSizeHint` {{optional_inline}} {{experimental_inline}}
      - : Fordert für Ihren Audiokontext eine Render-Quantum-Größe an, angegeben als Anzahl von Audio-[Sample-Frames](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#audio_graphs:~:text=sample%20frame) (weitere Informationen finden Sie unter [`renderQuantumSize`](/de/docs/Web/API/BaseAudioContext/renderQuantumSize)). Mögliche Werte sind:
        - `default`
          - : Verwendet den Standardwert `128`.
        - `hardware`
          - : Fordert den Browser auf, eine geeignete Größe für die zugrunde liegende Hardware zu wählen. Wenn `hardware` angegeben ist, gibt `renderQuantumSize` für die erzeugte `AudioContext`-Instanz zunächst `0` zurück, bis ihr [`state`](/de/docs/Web/API/BaseAudioContext/state) den Wert `running` hat. Dies dient dem Schutz vor Fingerprinting.
        - Eine Ganzzahl
          - : Eine bestimmte Anzahl von Frames zwischen `1` und dem Sechsfachen des `sampleRate`-Werts des Kontexts (abgerundet, falls das Ergebnis keine Ganzzahl ist), einschließlich der Grenzwerte. Der angeforderte Wert wird möglicherweise nicht exakt übernommen. Sie können den `renderQuantumSize`-Wert des Kontexts abfragen, um den tatsächlich gewählten Wert zu prüfen.

        Wenn `renderSizeHint` weggelassen wird, ist der Standardwert `128`.
    - `sampleRate` {{optional_inline}}
      - : Eine Gleitkommazahl, die die für den neuen Kontext zu verwendende Abtastrate angibt. Sie kann zwischen 3000 und 768000 Hz einschließlich liegen. Der gebräuchlichste Wert ist 44100 Hz, die Abtastrate von CD-Audio. Wenn die Eigenschaft `sampleRate` nicht in den Optionen enthalten ist oder beim Erstellen des Audiokontexts keine Optionen angegeben werden, wird standardmäßig die bevorzugte Abtastrate des Ausgabegeräts des neuen Kontexts verwendet.
    - `sinkId` {{optional_inline}} {{Experimental_Inline}}
      - : Gibt die Sink-ID des Audioausgabegeräts an, das für den `AudioContext` verwendet werden soll. Folgende Werttypen sind möglich:
        - Ein String, der die Sink-ID repräsentiert und beispielsweise über die Eigenschaft `deviceId` der von [`MediaDevices.enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices) zurückgegebenen [`MediaDeviceInfo`](/de/docs/Web/API/MediaDeviceInfo)-Objekte abgerufen wird.
        - Ein Objekt, das Optionen für eine Sink-ID repräsentiert. Derzeit unterstützt es eine einzige Eigenschaft, `type`, mit dem Wert `none`. Wird dieser Parameter so festgelegt, wird das Audio verarbeitet, ohne über ein Audioausgabegerät wiedergegeben zu werden.

### Rückgabewert

Eine neue [`AudioContext`](/de/docs/Web/API/AudioContext)-Instanz.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Dokument nicht vollständig aktiv ist.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Die angegebene [`sampleRate`](#samplerate) vom Kontext nicht unterstützt wird.
    - Der angegebene [`renderSizeHint`](#rendersizehint) eine Ganzzahl außerhalb des Bereichs von `1` bis zum Sechsfachen des `sampleRate`-Werts des Kontexts ist.

## Hinweise zur Verwendung

Die Spezifikation enthält nur wenige Details dazu, wie viele Audiokontexte ein User Agent unterstützen sollte oder welche Mindest- oder Höchstwerte für die Latenz gelten (falls es solche gibt). Diese Einzelheiten können sich daher von Browser zu Browser unterscheiden. Prüfen Sie die Werte, wenn sie für Ihre Anwendung wichtig sind.

Insbesondere legt die Spezifikation weder eine Höchst- noch eine Mindestanzahl gleichzeitig geöffneter Audiokontexte fest. Diese Entscheidung bleibt den Browserimplementierungen überlassen.

### Google Chrome

#### Beschränkung der Audiokontexte pro Tab in Chrome

Vor Version 66 unterstützte Google Chrome höchstens sechs Audiokontexte gleichzeitig _pro Tab_.

#### Nicht standardisierte Ausnahmen in Chrome

Wenn der Wert der Eigenschaft `latencyHint` ungültig ist, löst Chrome eine {{jsxref("TypeError")}}-Ausnahme mit der Meldung „The provided value '...' is not a valid enum value of type AudioContextLatencyCategory“ aus.

## Beispiel

Dieses Beispiel erstellt einen neuen [`AudioContext`](/de/docs/Web/API/AudioContext) für interaktives Audio (mit Optimierung auf geringe Latenz), einer Abtastrate von 44,1 kHz und einem bestimmten Audioausgabegerät.

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

- Konstruktor [`OfflineAudioContext()`](/de/docs/Web/API/OfflineAudioContext/OfflineAudioContext)
