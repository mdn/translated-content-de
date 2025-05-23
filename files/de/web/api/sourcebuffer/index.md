---
title: SourceBuffer
slug: Web/API/SourceBuffer
l10n:
  sourceCommit: 364a4d02b10854ab7cef4ff4b0ec3616d4e1c8ab
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`SourceBuffer`**-Schnittstelle repräsentiert ein Stück Medien, das an ein [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) übergeben und über ein [`MediaSource`](/de/docs/Web/API/MediaSource)-Objekt abgespielt werden soll. Dies kann aus einem oder mehreren Mediensegmenten bestehen.

{{InheritanceDiagram}}

## Instanzeigenschaften

- [`SourceBuffer.appendWindowEnd`](/de/docs/Web/API/SourceBuffer/appendWindowEnd)
  - : Steuert den Zeitstempel für das Ende des Anhängefensters.
- [`SourceBuffer.appendWindowStart`](/de/docs/Web/API/SourceBuffer/appendWindowStart)
  - : Steuert den Zeitstempel für den Anfang des [Anhängefensters](https://w3c.github.io/media-source/#append-window). Dies ist ein Zeitstempelbereich, der verwendet werden kann, um zu filtern, welche Mediendaten dem `SourceBuffer` hinzugefügt werden. Codierte Medienframes mit Zeitstempeln innerhalb dieses Bereichs werden hinzugefügt, während solche außerhalb des Bereichs ausgefiltert werden.
- [`SourceBuffer.audioTracks`](/de/docs/Web/API/SourceBuffer/audioTracks) {{ReadOnlyInline}}
  - : Eine Liste der aktuell im `SourceBuffer` enthaltenen Audiospuren.
- [`SourceBuffer.buffered`](/de/docs/Web/API/SourceBuffer/buffered) {{ReadOnlyInline}}
  - : Gibt die Zeitbereiche zurück, die derzeit im `SourceBuffer` gespeichert sind.
- [`SourceBuffer.mode`](/de/docs/Web/API/SourceBuffer/mode)
  - : Steuert, wie die Reihenfolge der Mediensegmente im `SourceBuffer` gehandhabt wird, ob sie in beliebiger Reihenfolge hinzugefügt werden können oder in einer strikten Reihenfolge gehalten werden müssen.
- [`SourceBuffer.textTracks`](/de/docs/Web/API/SourceBuffer/textTracks) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Eine Liste der aktuell im `SourceBuffer` enthaltenen Textspuren.
- [`SourceBuffer.timestampOffset`](/de/docs/Web/API/SourceBuffer/timestampOffset)
  - : Steuert den Offset, der auf Zeitstempel innerhalb von Mediensegmenten angewendet wird, die anschließend dem `SourceBuffer` hinzugefügt werden.
- [`SourceBuffer.updating`](/de/docs/Web/API/SourceBuffer/updating) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, ob der `SourceBuffer` derzeit aktualisiert wird — d.h. ob eine [`SourceBuffer.appendBuffer()`](/de/docs/Web/API/SourceBuffer/appendBuffer)- oder [`SourceBuffer.remove()`](/de/docs/Web/API/SourceBuffer/remove)-Operation derzeit im Gange ist.
- [`SourceBuffer.videoTracks`](/de/docs/Web/API/SourceBuffer/videoTracks) {{ReadOnlyInline}}
  - : Eine Liste der aktuell im `SourceBuffer` enthaltenen Videospuren.

## Instanzmethoden

_Erbt Methoden von seiner Elternschnittstelle, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`SourceBuffer.abort()`](/de/docs/Web/API/SourceBuffer/abort)
  - : Bricht das aktuelle Segment ab und setzt den Segmentparser zurück.
- [`SourceBuffer.appendBuffer()`](/de/docs/Web/API/SourceBuffer/appendBuffer)
  - : Hängt Mediendatensegmente von einem {{jsxref("ArrayBuffer")}}, einem {{jsxref("TypedArray")}} oder einem {{jsxref("DataView")}}-Objekt an den `SourceBuffer` an.
- [`SourceBuffer.appendBufferAsync()`](/de/docs/Web/API/SourceBuffer/appendBufferAsync) {{Non-standard_Inline}} {{Experimental_Inline}}
  - : Startet den Prozess des asynchronen Anhängens des angegebenen Puffers an den `SourceBuffer`. Gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird, sobald der Puffer angehängt wurde.
- [`SourceBuffer.changeType()`](/de/docs/Web/API/SourceBuffer/changeType)
  - : Ändert den {{Glossary("MIME_type", "MIME-Typ")}}, den zukünftige Aufrufe von [`appendBuffer()`](/de/docs/Web/API/SourceBuffer/appendBuffer) erwarten, dass die neuen Daten entsprechen.
- [`SourceBuffer.remove()`](/de/docs/Web/API/SourceBuffer/remove)
  - : Entfernt Mediensegmente innerhalb eines bestimmten Zeitbereichs aus dem `SourceBuffer`.
- [`SourceBuffer.removeAsync()`](/de/docs/Web/API/SourceBuffer/removeAsync) {{Non-standard_Inline}} {{Experimental_Inline}}
  - : Startet den Prozess des asynchronen Entfernens von Mediensegmenten im angegebenen Bereich aus dem `SourceBuffer`. Gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird, sobald alle passenden Segmente entfernt wurden.

## Ereignisse

- [`abort`](/de/docs/Web/API/SourceBuffer/abort_event)
  - : Wird ausgelöst, wenn [`SourceBuffer.appendBuffer()`](/de/docs/Web/API/SourceBuffer/appendBuffer) durch einen Aufruf von [`SourceBuffer.abort()`](/de/docs/Web/API/SourceBuffer/abort) beendet wird. [`SourceBuffer.updating`](/de/docs/Web/API/SourceBuffer/updating) ändert sich von `true` auf `false`.
- [`error`](/de/docs/Web/API/SourceBuffer/error_event)
  - : Wird ausgelöst, wenn ein Fehler während [`SourceBuffer.appendBuffer()`](/de/docs/Web/API/SourceBuffer/appendBuffer) auftritt. [`SourceBuffer.updating`](/de/docs/Web/API/SourceBuffer/updating) ändert sich von `true` auf `false`.
- [`update`](/de/docs/Web/API/SourceBuffer/update_event)
  - : Wird ausgelöst, wenn [`SourceBuffer.appendBuffer()`](/de/docs/Web/API/SourceBuffer/appendBuffer) oder [`SourceBuffer.remove()`](/de/docs/Web/API/SourceBuffer/remove) abgeschlossen ist. [`SourceBuffer.updating`](/de/docs/Web/API/SourceBuffer/updating) ändert sich von `true` auf `false`. Dieses Ereignis wird vor `updateend` ausgelöst.
- [`updateend`](/de/docs/Web/API/SourceBuffer/updateend_event)
  - : Wird nach dem Ende von [`SourceBuffer.appendBuffer()`](/de/docs/Web/API/SourceBuffer/appendBuffer) oder [`SourceBuffer.remove()`](/de/docs/Web/API/SourceBuffer/remove) ausgelöst. Dieses Ereignis wird nach `update` ausgelöst.
- [`updatestart`](/de/docs/Web/API/SourceBuffer/updatestart_event)
  - : Wird ausgelöst, wenn sich der Wert von [`SourceBuffer.updating`](/de/docs/Web/API/SourceBuffer/updating) von `false` auf `true` ändert.

## Beispiele

### Ein Video stückweise laden

Das folgende Beispiel lädt ein Video stückweise so schnell wie möglich und spielt es ab, sobald es möglich ist.

Sie können den vollständigen Code unter <https://github.com/mdn/dom-examples/tree/main/sourcebuffer> einsehen und die Demo live unter <https://mdn.github.io/dom-examples/sourcebuffer/> ausprobieren.

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
  const sourceBuffer = this.addSourceBuffer(mimeCodec);
  const response = await fetch(assetURL);
  const buffer = await response.arrayBuffer();
  sourceBuffer.addEventListener("updateend", () => {
    this.endOfStream();
    video.play();
    console.log(this.readyState); // ended
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
