---
title: SourceBuffer
slug: Web/API/SourceBuffer
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

Das **`SourceBuffer`**-Interface repräsentiert ein Medienstück, das über ein [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) und ein [`MediaSource`](/de/docs/Web/API/MediaSource)-Objekt weitergegeben und abgespielt werden soll. Dieses kann aus einem oder mehreren Mediensegmenten bestehen.

{{InheritanceDiagram}}

## Instanzeigenschaften

- [`SourceBuffer.appendWindowEnd`](/de/docs/Web/API/SourceBuffer/appendWindowEnd)
  - : Steuert den Zeitstempel für das Ende des Append-Fensters.
- [`SourceBuffer.appendWindowStart`](/de/docs/Web/API/SourceBuffer/appendWindowStart)
  - : Steuert den Zeitstempel für den Beginn des [Append-Fensters](https://w3c.github.io/media-source/#append-window). Dies ist ein Zeitstempelbereich, der verwendet werden kann, um zu filtern, welche Mediendaten in den `SourceBuffer` eingefügt werden. Codierte Medienframes mit Zeitstempeln innerhalb dieses Bereichs werden hinzugefügt, während diejenigen außerhalb des Bereichs herausgefiltert werden.
- [`SourceBuffer.audioTracks`](/de/docs/Web/API/SourceBuffer/audioTracks) {{ReadOnlyInline}}
  - : Eine Liste der aktuell im `SourceBuffer` enthaltenen Audiotracks.
- [`SourceBuffer.buffered`](/de/docs/Web/API/SourceBuffer/buffered) {{ReadOnlyInline}}
  - : Gibt die aktuell im `SourceBuffer` gepufferten Zeitbereiche zurück.
- [`SourceBuffer.mode`](/de/docs/Web/API/SourceBuffer/mode)
  - : Steuert, wie die Reihenfolge der Mediensegmente im `SourceBuffer` gehandhabt wird, in Bezug darauf, ob sie in beliebiger Reihenfolge hinzugefügt werden können oder in strikter Abfolge bleiben müssen.
- [`SourceBuffer.textTracks`](/de/docs/Web/API/SourceBuffer/textTracks) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Eine Liste der aktuell im `SourceBuffer` enthaltenen Texttracks.
- [`SourceBuffer.timestampOffset`](/de/docs/Web/API/SourceBuffer/timestampOffset)
  - : Steuert die Verschiebung, die auf Zeitstempel innerhalb von Mediensegmenten angewendet wird, die anschließend dem `SourceBuffer` hinzugefügt werden.
- [`SourceBuffer.updating`](/de/docs/Web/API/SourceBuffer/updating) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, ob der `SourceBuffer` derzeit aktualisiert wird — d.h. ob eine [`appendBuffer()`](/de/docs/Web/API/SourceBuffer/appendBuffer)- oder [`remove()`](/de/docs/Web/API/SourceBuffer/remove)-Operation derzeit im Gange ist.
- [`SourceBuffer.videoTracks`](/de/docs/Web/API/SourceBuffer/videoTracks) {{ReadOnlyInline}}
  - : Eine Liste der aktuell im `SourceBuffer` enthaltenen Videotracks.

## Instanzmethoden

_Erbt Methoden von seiner Elternschnittstelle, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`SourceBuffer.abort()`](/de/docs/Web/API/SourceBuffer/abort)
  - : Bricht das aktuelle Segment ab und setzt den Segment-Parser zurück.
- [`SourceBuffer.appendBuffer()`](/de/docs/Web/API/SourceBuffer/appendBuffer)
  - : Fügt Media-Segmentdaten von einem {{jsxref("ArrayBuffer")}}, einem {{jsxref("TypedArray")}} oder einem {{jsxref("DataView")}}-Objekt in den `SourceBuffer` ein.
- [`SourceBuffer.appendBufferAsync()`](/de/docs/Web/API/SourceBuffer/appendBufferAsync) {{Non-standard_Inline}} {{Experimental_Inline}}
  - : Startet den Prozess des asynchronen Hinzufügens des angegebenen Buffers zum `SourceBuffer`. Gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird, sobald der Buffer hinzugefügt wurde.
- [`SourceBuffer.changeType()`](/de/docs/Web/API/SourceBuffer/changeType)
  - : Ändert den {{Glossary("MIME_type", "MIME-Typ")}}, den zukünftige Aufrufe von [`appendBuffer()`](/de/docs/Web/API/SourceBuffer/appendBuffer) erwarten, dass die neuen Daten entsprechen.
- [`SourceBuffer.remove()`](/de/docs/Web/API/SourceBuffer/remove)
  - : Entfernt Mediensegmente innerhalb eines bestimmten Zeitbereichs aus dem `SourceBuffer`.
- [`SourceBuffer.removeAsync()`](/de/docs/Web/API/SourceBuffer/removeAsync) {{Non-standard_Inline}} {{Experimental_Inline}}
  - : Startet den Prozess des asynchronen Entfernens von Mediensegmenten im angegebenen Bereich aus dem `SourceBuffer`. Gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird, sobald alle passenden Segmente entfernt wurden.

## Ereignisse

- [`abort`](/de/docs/Web/API/SourceBuffer/abort_event)
  - : Wird ausgelöst, wenn das Buffer-Hinzufügen abgebrochen wird, weil die [`SourceBuffer.abort()`](/de/docs/Web/API/SourceBuffer/abort)- oder [`MediaSource.removeSourceBuffer()`](/de/docs/Web/API/MediaSource/removeSourceBuffer)-Methode aufgerufen wird, während der [`SourceBuffer.appendBuffer()`](/de/docs/Web/API/SourceBuffer/appendBuffer)-Algorithmus noch läuft. [`SourceBuffer.updating`](/de/docs/Web/API/SourceBuffer/updating) wechselt von `true` zu `false`.
- [`error`](/de/docs/Web/API/SourceBuffer/error_event)
  - : Wird ausgelöst, wenn ein Fehler während der Verarbeitung einer [`appendBuffer()`](/de/docs/Web/API/SourceBuffer/appendBuffer)-Operation auftritt. [`SourceBuffer.updating`](/de/docs/Web/API/SourceBuffer/updating) wechselt von `true` zu `false`.
- [`update`](/de/docs/Web/API/SourceBuffer/update_event)
  - : Wird immer dann ausgelöst, wenn [`SourceBuffer.appendBuffer()`](/de/docs/Web/API/SourceBuffer/appendBuffer) oder [`SourceBuffer.remove()`](/de/docs/Web/API/SourceBuffer/remove) abgeschlossen ist. [`SourceBuffer.updating`](/de/docs/Web/API/SourceBuffer/updating) wechselt von `true` zu `false`.
- [`updateend`](/de/docs/Web/API/SourceBuffer/updateend_event)
  - : Wird nach dem (nicht unbedingt erfolgreichen) Abschluss einer [`appendBuffer()`](/de/docs/Web/API/SourceBuffer/appendBuffer) oder [`remove()`](/de/docs/Web/API/SourceBuffer/remove)-Operation ausgelöst. Dieses Ereignis wird nach den Ereignissen `update`, `error` oder `abort` ausgelöst.
- [`updatestart`](/de/docs/Web/API/SourceBuffer/updatestart_event)
  - : Wird ausgelöst, wenn eine [`appendBuffer()`](/de/docs/Web/API/SourceBuffer/appendBuffer) oder [`remove()`](/de/docs/Web/API/SourceBuffer/remove)-Operation beginnt. [`updating`](/de/docs/Web/API/SourceBuffer/updating) wechselt von `false` zu `true`.

## Beispiele

### Laden eines Videos in Teilen

Das folgende Beispiel lädt ein Video so schnell wie möglich in Teilen und spielt es ab, sobald es möglich ist.

Sie können den vollständigen Code unter <https://github.com/mdn/dom-examples/tree/main/sourcebuffer> sehen und die Demo live unter <https://mdn.github.io/dom-examples/sourcebuffer/> ausprobieren.

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
