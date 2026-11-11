---
title: "BaseAudioContext: Eigenschaft renderQuantumSize"
short-title: renderQuantumSize
slug: Web/API/BaseAudioContext/renderQuantumSize
l10n:
  sourceCommit: 64d2a33125b048766fa69bba398e750e29ffa875
---

{{ APIRef("Web Audio API") }}

Die schreibgeschützte Eigenschaft **`renderQuantumSize`** der Schnittstelle [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext) gibt eine Ganzzahl zurück, die die **Render-Quantum-Größe** des Audiographen angibt. Das ist die Anzahl der Audio-Sample-Frames, die in jedem Verarbeitungsdurchlauf verarbeitet werden.

## Wert

Eine nicht negative Ganzzahl.

## Beschreibung

Wenn ein Browser Audio wiedergibt, sind zwei Verarbeitungsschleifen beteiligt:

- Das **Audiosystem** (der Audiostack des Betriebssystems und die Audiohardware) spielt Audio aus einem Puffer ab. Sobald es weitere Audiodaten benötigt, fordert es vom Browser eine feste Anzahl von Frames an, die **Systempuffergröße** genannt wird. Der Browser muss diese Frames bereitstellen, bevor die aktuell abgespielten Audiodaten aufgebraucht sind. Die Systempuffergröße variiert je nach Plattform und Gerät.
- Um jede Anforderung zu erfüllen, rendert die Web Audio API den [Audiographen](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#audio_graphs) in Blöcken mit einer festen Anzahl von [Sample-Frames](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#audio_buffers_frames_samples_and_channels). Diese Anzahl heißt **Render-Quantum-Größe**. Die API rendert weitere Blöcke, bis genügend Frames für die Anforderung vorliegen. Standardmäßig beträgt die Render-Quantum-Größe 128 Frames.

Audiodaten können erst nach dem Rendern an das Audiosystem gesendet werden, und der Audiograph rendert immer ein vollständiges Render-Quantum auf einmal. Daher begrenzen sowohl die Systempuffergröße als auch die Render-Quantum-Größe, wie niedrig die Latenz sein kann. Der jeweils größere Wert bestimmt die Grenze:

- Ist die Render-Quantum-Größe größer als die Systempuffergröße, bestimmt die Render-Quantum-Größe die Latenz. Der Browser kann keinen Teil eines Render-Quantums senden, bevor das gesamte Quantum gerendert ist. Er muss daher mehr Frames rendern, als für die jeweilige Anforderung benötigt werden, und die übrigen Frames für spätere Anforderungen vorhalten.
- Ist die Render-Quantum-Größe kleiner als die Systempuffergröße oder gleich groß, bestimmt die Systempuffergröße die Latenz. Die Anforderungen des Audiosystems legen fest, wann Audiodaten benötigt werden. Das Rendern in kleineren Blöcken stellt sie nicht früher bereit. Es erhöht lediglich den Verarbeitungsaufwand, da jedes Render-Quantum feste Verarbeitungskosten verursacht.

Eine Render-Quantum-Größe von 128 Frames bietet ein ausgewogenes Verhältnis zwischen Verarbeitungsaufwand und Latenz und entspricht auf einigen Plattformen der Systempuffergröße. Auf anderen Plattformen stimmen die beiden Größen nicht überein. Ist die Systempuffergröße kein ganzzahliges Vielfaches der Render-Quantum-Größe, benötigen die Anforderungen unterschiedlich viele Render-Quanten. Dadurch schwankt die CPU-Auslastung von einer Anforderung zur nächsten, und Verarbeitungskapazität bleibt ungenutzt.

Angenommen, ein Android-Smartphone hat beispielsweise eine Systempuffergröße von 192 Frames. Bei der standardmäßigen Render-Quantum-Größe von 128 benötigt die erste Anforderung zwei Render-Quanten (256 Frames): 192 Frames werden gesendet, und 64 bleiben übrig. Die nächste Anforderung verwendet diese 64 Frames sowie ein weiteres Render-Quantum (64 + 128 = 192); danach bleibt nichts übrig. Dieses Muster wiederholt sich: Für Anforderungen mit ungerader Nummer werden zwei Quanten gerendert, für solche mit gerader Nummer eines. Im Durchschnitt sind das 1,5 Quanten pro Anforderung.

Bei einer Abtastrate von 48 kHz muss jede Anforderung innerhalb von 4 ms erfüllt werden (192 / 48000). Dauert das Rendern länger, treten Störungen bei der Ausgabe auf. Unter der Annahme, dass die Renderzeit mit der Anzahl der Frames skaliert, müssen für Anforderungen mit ungerader Nummer in dieser Zeit 256 Frames verarbeitet werden, für solche mit gerader Nummer dagegen nur 192. Je mehr Arbeit der Audiograph pro Frame verrichtet, desto länger dauert das Rendern jedes Frames. Die Anforderungen mit 256 Frames begrenzen daher, wie aufwendig der Graph sein kann. Die Anforderungen mit 192 Frames sind früher abgeschlossen; die verbleibende Zeit der 4 ms bleibt ungenutzt.

Würde die Render-Quantum-Größe auf 192 gesetzt, würde für jede Anforderung genau ein Render-Quantum gerendert. Die Spitzenlast entspräche damit der durchschnittlichen Last. Der Graph könnte auf derselben Hardware etwa ein Drittel aufwendiger sein (256 / 192). Die Latenz würde nicht steigen, da das Audiosystem Audiodaten ohnehin in Blöcken von 192 Frames anfordert.

Mit der Option `renderSizeHint` des Konstruktors [`AudioContext()`](/de/docs/Web/API/AudioContext/AudioContext) oder [`OfflineAudioContext()`](/de/docs/Web/API/OfflineAudioContext/OfflineAudioContext) können Sie eine geeignete Render-Quantum-Größe für die aktuelle Kombination aus Hardware und Software anfordern.

Sie können die Option auf Folgendes setzen:

- `default`: Verwendet den Standardwert `128`.
- `hardware`: Fordert den Browser auf, eine geeignete Größe für die Kombination aus zugrunde liegender Hardware, Treiber, Browser usw. zu wählen.
- Einen bestimmten ganzzahligen Wert zwischen `1` und dem Sechsfachen der [`sampleRate`](/de/docs/Web/API/BaseAudioContext/sampleRate) des Kontexts. Da `renderSizeHint` nur ein Hinweis ist, wird der angeforderte Wert möglicherweise nicht genau übernommen.

Die Render-Quantum-Größe des erstellten Kontexts können Sie über die Eigenschaft `renderQuantumSize` abrufen.

Wenn bei `AudioContext()` der Wert `hardware` angegeben wird, gibt `renderQuantumSize` der erstellten `AudioContext`-Instanz zum Schutz vor Fingerprinting `0` zurück, bis ihr [`state`](/de/docs/Web/API/BaseAudioContext/state) den Wert `running` hat. Bei `OfflineAudioContext()` ist das nicht der Fall: Dort werden die Audiodaten direkt in einen [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) ausgegeben, sodass Hardware-Timing und Latenz keine Rolle spielen. Die Angabe von `hardware` bei `OfflineAudioContext()` ist gleichbedeutend mit `default`.

> [!NOTE]
> Manche Anwendungen haben keine hohen Anforderungen an eine niedrige Latenz und können außerdem ein [`AudioWorklet`](/de/docs/Web/API/AudioWorklet) verwenden, um größere Blöcke zu verarbeiten und den Verarbeitungsaufwand zu verringern. In solchen Fällen können größere Render-Quantum-Größen wie 1024 oder 2048 geeignet sein.

## Beispiele

### Grundlegende Verwendung von `renderQuantumSize`

```js
const btn = document.querySelector("button");

function init() {
  const audioCtx = new AudioContext({ renderSizeHint: "hardware" });

  // ...

  console.log(audioCtx.renderQuantumSize);
  // returns an appropriate number for the current combination of
  // hardware, driver, browser, etc.
}

btn.addEventListener("click", init);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`AudioContext()`](/de/docs/Web/API/AudioContext/AudioContext)
- [`OfflineAudioContext()`](/de/docs/Web/API/OfflineAudioContext/OfflineAudioContext)
- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
