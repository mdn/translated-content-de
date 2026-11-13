---
title: "BaseAudioContext: Eigenschaft renderQuantumSize"
short-title: renderQuantumSize
slug: Web/API/BaseAudioContext/renderQuantumSize
l10n:
  sourceCommit: 25abd448c8a088e9f333360dea0adbe8143e6b86
---

{{ APIRef("Web Audio API") }}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`renderQuantumSize`** der Schnittstelle [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext) gibt eine Ganzzahl zurück, die die **Render-Quantum-Größe** des Audiographen angibt. Das ist die Anzahl der Audio-Sample-Frames, die in jedem Verarbeitungsdurchlauf verarbeitet werden.

## Wert

Eine nichtnegative Ganzzahl.

## Beschreibung

Wenn ein Browser Audio wiedergibt, sind zwei Verarbeitungsschleifen beteiligt:

- Das **Audiosystem** (der Audio-Stack des Betriebssystems und die Audiohardware) gibt Audio aus einem Puffer wieder. Jedes Mal, wenn es weitere Audiodaten benötigt, fordert es eine feste Anzahl von Frames vom Browser an. Diese Anzahl wird als **Systempuffergröße** bezeichnet. Der Browser muss diese Frames bereitstellen, bevor die aktuell wiedergegebenen Audiodaten aufgebraucht sind. Systempuffergrößen unterscheiden sich je nach Plattform und Gerät.
- Um jede Anforderung zu erfüllen, rendert die Web Audio API den [Audiographen](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#audio_graphs) in Blöcken mit einer festen Anzahl von [Sample-Frames](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#audio_buffers_frames_samples_and_channels). Diese Anzahl wird als **Render-Quantum-Größe** bezeichnet. Die API rendert weitere Blöcke, bis genügend Frames für die Anforderung vorliegen. Standardmäßig beträgt die Render-Quantum-Größe 128 Frames.

Audio kann erst nach dem Rendern an das Audiosystem gesendet werden, und der Audiograph rendert jeweils ein vollständiges Render-Quantum. Daher begrenzen sowohl die Systempuffergröße als auch die Render-Quantum-Größe, wie niedrig die Latenz sein kann. Der größere der beiden Werte bestimmt die Grenze:

- Ist die Render-Quantum-Größe größer als die Systempuffergröße, bestimmt die Render-Quantum-Größe die Latenz. Der Browser kann keinen Teil eines Quantums senden, bevor das gesamte Quantum gerendert wurde. Er muss daher mehr Frames rendern, als für die jeweilige Anforderung benötigt werden, und die übrigen Frames für spätere Anforderungen vorhalten.
- Ist die Render-Quantum-Größe kleiner oder gleich der Systempuffergröße, bestimmt die Systempuffergröße die Latenz. Die Anforderungen des Audiosystems legen fest, wann Audio benötigt wird; das Rendern in kleineren Blöcken sorgt nicht dafür, dass es früher eintrifft. Es verursacht lediglich zusätzlichen Aufwand, da jedes Render-Quantum feste Verarbeitungskosten mit sich bringt.

Eine Render-Quantum-Größe von 128 Frames bietet ein ausgewogenes Verhältnis zwischen Verarbeitungsaufwand und Latenz und entspricht auf einigen Plattformen der Systempuffergröße. Auf anderen Plattformen stimmen die beiden Größen nicht überein. Ist die Systempuffergröße kein ganzzahliges Vielfaches der Render-Quantum-Größe, werden für die Anforderungen unterschiedlich viele Render-Quanten benötigt. Dadurch schwankt die CPU-Last von einer Anforderung zur nächsten, was Verarbeitungskapazität ungenutzt lässt.

Angenommen, ein Android-Smartphone hat eine Systempuffergröße von 192 Frames. Bei der standardmäßigen Render-Quantum-Größe von 128 benötigt die erste Anforderung zwei Render-Quanten (256 Frames): 192 Frames werden gesendet, und 64 bleiben übrig. Die nächste Anforderung verwendet diese 64 Frames und ein weiteres Render-Quantum (64 + 128 = 192), sodass nichts übrig bleibt. Dieses Muster wiederholt sich: Bei ungeradzahligen Anforderungen werden zwei Quanten gerendert, bei geradzahligen eines. Das ergibt durchschnittlich 1,5 Quanten pro Anforderung.

Bei einer Abtastrate von 48 kHz muss jede Anforderung innerhalb von 4 ms erfüllt werden (192 / 48000). Dauert das Rendern länger, treten Störungen bei der Ausgabe auf. Unter der Annahme, dass die Renderzeit proportional zur Anzahl der Frames ist, müssen bei ungeradzahligen Anforderungen 256 Frames in dieser Zeit verarbeitet werden, bei geradzahligen dagegen nur 192. Je mehr Arbeit der Audiograph pro Frame verrichtet, desto länger dauert das Rendern jedes Frames. Die Anforderungen mit 256 Frames begrenzen daher, wie viel Arbeit dem Graphen zugemutet werden kann. Die Anforderungen mit 192 Frames sind früher abgeschlossen und bleiben für den Rest ihrer 4 ms untätig; diese Kapazität bleibt ungenutzt.

Würde die Render-Quantum-Größe auf 192 gesetzt, würde für jede Anforderung genau ein Render-Quantum gerendert. Die Spitzenlast entspräche dann dem Durchschnitt. Der Graph könnte auf derselben Hardware etwa ein Drittel mehr Verarbeitungskapazität beanspruchen (256 / 192). Die Latenz würde nicht steigen, da das Audiosystem Audio bereits in Blöcken von 192 Frames anfordert.

Mit der Option `renderSizeHint` des Konstruktors [`AudioContext()`](/de/docs/Web/API/AudioContext/AudioContext) oder [`OfflineAudioContext()`](/de/docs/Web/API/OfflineAudioContext/OfflineAudioContext) können Sie eine geeignete Render-Quantum-Größe für die aktuelle Kombination aus Hardware und Software anfordern.

Folgende Werte sind möglich:

- `default` verwendet den Standardwert `128`.
- `hardware` fordert den Browser auf, eine geeignete Größe für die Kombination aus zugrunde liegender Hardware, Treiber, Browser usw. auszuwählen.
- Ein bestimmter ganzzahliger Wert zwischen `1` und dem Sechsfachen der [`sampleRate`](/de/docs/Web/API/BaseAudioContext/sampleRate) des Kontexts. Da `renderSizeHint` lediglich ein Hinweis ist, muss der angeforderte Wert nicht exakt übernommen werden.

Die Render-Quantum-Größe des erzeugten Kontexts kann über die Eigenschaft `renderQuantumSize` abgerufen werden.

Wenn bei `AudioContext()` der Wert `hardware` angegeben wird, gibt `renderQuantumSize` der erzeugten `AudioContext`-Instanz zum Schutz vor Fingerprinting `0` zurück, bis ihr [`state`](/de/docs/Web/API/BaseAudioContext/state) den Wert `running` hat. Dies gilt nicht für `OfflineAudioContext()`, da das Audio dort direkt in einen [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) ausgegeben wird und daher Hardware-Timing und -Latenz keine Rolle spielen. Die Angabe von `hardware` bei einem `OfflineAudioContext()` entspricht `default`.

> [!NOTE]
> Einige Anwendungen stellen keine hohen Anforderungen an eine niedrige Latenz und können außerdem ein [`AudioWorklet`](/de/docs/Web/API/AudioWorklet) verwenden, um größere Blöcke zu verarbeiten und den Verarbeitungsaufwand zu verringern. In solchen Fällen können größere Render-Quantum-Größen wie 1024 oder 2048 geeignet sein.

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
