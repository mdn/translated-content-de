---
title: SourceBuffer
slug: Web/API/SourceBuffer
l10n:
  sourceCommit: 1573959d78591b4079500af13019f901faaaca02
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`SourceBuffer`**-Schnittstelle repräsentiert ein Medienstück, das einem [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) über ein [`MediaSource`](/de/docs/Web/API/MediaSource)-Objekt übergeben und abgespielt werden kann. Dieses kann aus einem oder mehreren Mediensegmenten bestehen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`SourceBuffer.appendWindowEnd`](/de/docs/Web/API/SourceBuffer/appendWindowEnd)
  - : Steuert den Zeitstempel für das Ende des Anhängefensters.
- [`SourceBuffer.appendWindowStart`](/de/docs/Web/API/SourceBuffer/appendWindowStart)
  - : Steuert den Zeitstempel für den Beginn des [Anhängefensters](https://w3c.github.io/media-source/#append-window). Dies ist ein Zeitstempelbereich, der verwendet werden kann, um zu filtern, welche Mediendaten an den `SourceBuffer` angehängt werden. Codierte Medienframes mit Zeitstempeln innerhalb dieses Bereichs werden angehängt, während diejenigen außerhalb des Bereichs herausgefiltert werden.
- [`SourceBuffer.audioTracks`](/de/docs/Web/API/SourceBuffer/audioTracks) {{ReadOnlyInline}}
  - : Eine Liste der Audiotracks, die derzeit im `SourceBuffer` enthalten sind.
- [`SourceBuffer.buffered`](/de/docs/Web/API/SourceBuffer/buffered) {{ReadOnlyInline}}
  - : Gibt die Zeitbereiche zurück, die derzeit im `SourceBuffer` gepuffert sind.
- [`SourceBuffer.mode`](/de/docs/Web/API/SourceBuffer/mode)
  - : Steuert, wie die Reihenfolge von Mediensegmenten im `SourceBuffer` gehandhabt wird, ob sie in beliebiger Reihenfolge angehängt werden können oder ob sie in einer strikten Reihenfolge gehalten werden müssen.
- [`SourceBuffer.textTracks`](/de/docs/Web/API/SourceBuffer/textTracks) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Eine Liste der Textspuren, die derzeit im `SourceBuffer` enthalten sind.
- [`SourceBuffer.timestampOffset`](/de/docs/Web/API/SourceBuffer/timestampOffset)
  - : Steuert den Offset, der auf Zeitstempel innerhalb von Mediensegmenten angewendet wird, die anschließend dem `SourceBuffer` angehängt werden.
- [`SourceBuffer.updating`](/de/docs/Web/API/SourceBuffer/updating) {{ReadOnlyInline}}
  - : Ein Boolean, der angibt, ob der `SourceBuffer` derzeit aktualisiert wird, d.h. ob ein [`SourceBuffer.appendBuffer()`](/de/docs/Web/API/SourceBuffer/appendBuffer) oder [`SourceBuffer.remove()`](/de/docs/Web/API/SourceBuffer/remove)-Vorgang derzeit läuft.
- [`SourceBuffer.videoTracks`](/de/docs/Web/API/SourceBuffer/videoTracks) {{ReadOnlyInline}}
  - : Eine Liste der Videospuren, die derzeit im `SourceBuffer` enthalten sind.

## Instanz-Methoden

_Erbt Methoden von seiner Elternschnittstelle, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`SourceBuffer.abort()`](/de/docs/Web/API/SourceBuffer/abort)
  - : Bricht das aktuelle Segment ab und setzt den Segmentparser zurück.
- [`SourceBuffer.appendBuffer()`](/de/docs/Web/API/SourceBuffer/appendBuffer)
  - : Fügt Mediensegmentdaten aus einem {{jsxref("ArrayBuffer")}}, einem {{jsxref("TypedArray")}} oder einem {{jsxref("DataView")}}-Objekt dem `SourceBuffer` hinzu.
- [`SourceBuffer.appendBufferAsync()`](/de/docs/Web/API/SourceBuffer/appendBufferAsync) {{Non-standard_Inline}} {{Experimental_Inline}}
  - : Startet den Vorgang des asynchronen Anfügens des spezifizierten Puffers an den `SourceBuffer`. Gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird, sobald der Puffer angehängt wurde.
- [`SourceBuffer.changeType()`](/de/docs/Web/API/SourceBuffer/changeType)
  - : Ändert den [MIME-Typ](/de/docs/Glossary/MIME_type), den zukünftige Aufrufe von [`appendBuffer()`](/de/docs/Web/API/SourceBuffer/appendBuffer) erwarten werden, dass die neuen Daten diesem entsprechen.
- [`SourceBuffer.remove()`](/de/docs/Web/API/SourceBuffer/remove)
  - : Entfernt Mediensegmente innerhalb eines bestimmten Zeitbereichs aus dem `SourceBuffer`.
- [`SourceBuffer.removeAsync()`](/de/docs/Web/API/SourceBuffer/removeAsync) {{Non-standard_Inline}} {{Experimental_Inline}}
  - : Startet den Vorgang des asynchronen Entfernens von Mediensegmenten im angegebenen Bereich aus dem `SourceBuffer`. Gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird, sobald alle passenden Segmente entfernt wurden.

## Ereignisse

- [`abort`](/de/docs/Web/API/SourceBuffer/abort_event)
  - : Wird jedes Mal ausgelöst, wenn [`SourceBuffer.appendBuffer()`](/de/docs/Web/API/SourceBuffer/appendBuffer) durch einen Aufruf von [`SourceBuffer.abort()`](/de/docs/Web/API/SourceBuffer/abort) beendet wird. [`SourceBuffer.updating`](/de/docs/Web/API/SourceBuffer/updating) wechselt von `true` zu `false`.
- [`error`](/de/docs/Web/API/SourceBuffer/error_event)
  - : Wird jedes Mal ausgelöst, wenn ein Fehler während [`SourceBuffer.appendBuffer()`](/de/docs/Web/API/SourceBuffer/appendBuffer) auftritt. [`SourceBuffer.updating`](/de/docs/Web/API/SourceBuffer/updating) wechselt von `true` zu `false`.
- [`update`](/de/docs/Web/API/SourceBuffer/update_event)
  - : Wird jedes Mal ausgelöst, wenn [`SourceBuffer.appendBuffer()`](/de/docs/Web/API/SourceBuffer/appendBuffer) oder [`SourceBuffer.remove()`](/de/docs/Web/API/SourceBuffer/remove) abgeschlossen ist. [`SourceBuffer.updating`](/de/docs/Web/API/SourceBuffer/updating) wechselt von `true` zu `false`. Dieses Ereignis wird vor `updateend` ausgelöst.
- [`updateend`](/de/docs/Web/API/SourceBuffer/updateend_event)
  - : Wird ausgelöst, nachdem [`SourceBuffer.appendBuffer()`](/de/docs/Web/API/SourceBuffer/appendBuffer) oder [`SourceBuffer.remove()`](/de/docs/Web/API/SourceBuffer/remove) endet. Dieses Ereignis wird nach `update` ausgelöst.
- [`updatestart`](/de/docs/Web/API/SourceBuffer/updatestart_event)
  - : Wird jedes Mal ausgelöst, wenn der Wert von [`SourceBuffer.updating`](/de/docs/Web/API/SourceBuffer/updating) von `false` zu `true` wechselt.

## Beispiele

### Laden eines Videos stückweise

Das folgenden Beispiel lädt ein Video so schnell wie möglich stückweise und spielt es ab, sobald es möglich ist.

Den vollständigen Code finden Sie unter <https://github.com/mdn/dom-examples/tree/main/sourcebuffer> und Sie können die Demo live unter <https://mdn.github.io/dom-examples/sourcebuffer/> ausprobieren.

```js
const video = document.querySelector("video");

const assetURL = "frag_bunny.mp4";
// Need to be specific for Blink regarding codecs
const mimeCodec = 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"';

function loadVideo() {
  if (MediaSource.isTypeSupported(mimeCodec)) {
    const mediaSource = new MediaSource();
    console.log(mediaSource.readyState); // closed
    video.src = URL.createObjectURL(mediaSource);
    mediaSource.addEventListener("sourceopen", sourceOpen);
  } else {
    console.error("Unsupported MIME type or codec: ", mimeCodec);
  }
}

async function sourceOpen() {
  console.log(this.readyState); // open
  const mediaSource = this;
  const sourceBuffer = mediaSource.addSourceBuffer(mimeCodec);
  const response = await fetch(assetURL);
  const buffer = await response.arrayBuffer();
  sourceBuffer.addEventListener("updateend", () => {
    mediaSource.endOfStream();
    video.play();
    console.log(mediaSource.readyState); // ended
  });
  sourceBuffer.appendBuffer(buffer);
}

const load = document.querySelector("#load");
load.addEventListener("click", loadVideo);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`MediaSource`](/de/docs/Web/API/MediaSource)
- [`SourceBufferList`](/de/docs/Web/API/SourceBufferList)
