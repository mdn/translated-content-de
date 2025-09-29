---
title: SourceBuffer
slug: Web/API/SourceBuffer
l10n:
  sourceCommit: 42ea605d69523989e468990fcd9e17abe934ec98
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

Das **`SourceBuffer`** Interface repräsentiert einen Medienabschnitt, der in ein [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) über ein [`MediaSource`](/de/docs/Web/API/MediaSource) Objekt eingefügt und abgespielt werden soll. Dies kann aus einem oder mehreren Mediensegmenten bestehen.

{{InheritanceDiagram}}

## Instanzeigenschaften

- [`SourceBuffer.appendWindowEnd`](/de/docs/Web/API/SourceBuffer/appendWindowEnd)
  - : Steuert den Zeitstempel für das Ende des Append-Fensters.
- [`SourceBuffer.appendWindowStart`](/de/docs/Web/API/SourceBuffer/appendWindowStart)
  - : Steuert den Zeitstempel für den Anfang des [Append-Fensters](https://w3c.github.io/media-source/#append-window). Dies ist ein Zeitstempelbereich, der verwendet werden kann, um zu filtern, welche Mediendaten dem `SourceBuffer` hinzugefügt werden. Kodierte Medienframes mit Zeitstempeln innerhalb dieses Bereichs werden hinzugefügt, während diejenigen außerhalb des Bereichs herausgefiltert werden.
- [`SourceBuffer.audioTracks`](/de/docs/Web/API/SourceBuffer/audioTracks) {{ReadOnlyInline}}
  - : Eine Liste der momentan im `SourceBuffer` enthaltenen Audiotracks.
- [`SourceBuffer.buffered`](/de/docs/Web/API/SourceBuffer/buffered) {{ReadOnlyInline}}
  - : Gibt die Zeitbereiche zurück, die aktuell im `SourceBuffer` gepuffert werden.
- [`SourceBuffer.mode`](/de/docs/Web/API/SourceBuffer/mode)
  - : Steuert, wie die Reihenfolge der Mediensegmente im `SourceBuffer` gehandhabt wird, ob sie in beliebiger Reihenfolge hinzugefügt werden können oder in einer strikten Sequenz gehalten werden müssen.
- [`SourceBuffer.textTracks`](/de/docs/Web/API/SourceBuffer/textTracks) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Eine Liste der momentan im `SourceBuffer` enthaltenen Texttracks.
- [`SourceBuffer.timestampOffset`](/de/docs/Web/API/SourceBuffer/timestampOffset)
  - : Steuert den Offset, der auf Zeitstempel innerhalb von Mediensegmenten angewendet wird, die nachfolgend dem `SourceBuffer` hinzugefügt werden.
- [`SourceBuffer.updating`](/de/docs/Web/API/SourceBuffer/updating) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der anzeigt, ob der `SourceBuffer` aktuell aktualisiert wird – d.h. ob eine [`SourceBuffer.appendBuffer()`](/de/docs/Web/API/SourceBuffer/appendBuffer) oder [`SourceBuffer.remove()`](/de/docs/Web/API/SourceBuffer/remove) Operation derzeit im Gange ist.
- [`SourceBuffer.videoTracks`](/de/docs/Web/API/SourceBuffer/videoTracks) {{ReadOnlyInline}}
  - : Eine Liste der momentan im `SourceBuffer` enthaltenen Videotracks.

## Instanzmethoden

_Erbt Methoden von seinem übergeordneten Interface, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`SourceBuffer.abort()`](/de/docs/Web/API/SourceBuffer/abort)
  - : Bricht das aktuelle Segment ab und setzt den Segment-Parser zurück.
- [`SourceBuffer.appendBuffer()`](/de/docs/Web/API/SourceBuffer/appendBuffer)
  - : Fügt Mediasegmentdaten aus einem {{jsxref("ArrayBuffer")}}, einem {{jsxref("TypedArray")}} oder einem {{jsxref("DataView")}}-Objekt zum `SourceBuffer` hinzu.
- [`SourceBuffer.appendBufferAsync()`](/de/docs/Web/API/SourceBuffer/appendBufferAsync) {{Non-standard_Inline}} {{Experimental_Inline}}
  - : Startet den Prozess des asynchronen Hinzufügens des angegebenen Puffers zum `SourceBuffer`. Gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird, sobald der Puffer hinzugefügt wurde.
- [`SourceBuffer.changeType()`](/de/docs/Web/API/SourceBuffer/changeType)
  - : Ändert den {{Glossary("MIME_type", "MIME-Typ")}}, den zukünftige Aufrufe von [`appendBuffer()`](/de/docs/Web/API/SourceBuffer/appendBuffer) erwarten, dass die neuen Daten diesem entsprechen.
- [`SourceBuffer.remove()`](/de/docs/Web/API/SourceBuffer/remove)
  - : Entfernt Mediensegmente innerhalb eines bestimmten Zeitbereichs aus dem `SourceBuffer`.
- [`SourceBuffer.removeAsync()`](/de/docs/Web/API/SourceBuffer/removeAsync) {{Non-standard_Inline}} {{Experimental_Inline}}
  - : Startet den Prozess des asynchronen Entfernens von Mediensegmenten im angegebenen Bereich aus dem `SourceBuffer`. Gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird, sobald alle passenden Segmente entfernt wurden.

## Ereignisse

- [`abort`](/de/docs/Web/API/SourceBuffer/abort_event)
  - : Wird ausgelöst, wenn das Hinzufügen zum Puffer abgebrochen wird, weil die Methoden [`SourceBuffer.abort()`](/de/docs/Web/API/SourceBuffer/abort) oder [`MediaSource.removeSourceBuffer()`](/de/docs/Web/API/MediaSource/removeSourceBuffer) aufgerufen werden, während der Algorithmus [`SourceBuffer.appendBuffer()`](/de/docs/Web/API/SourceBuffer/appendBuffer) noch läuft. [`SourceBuffer.updating`](/de/docs/Web/API/SourceBuffer/updating) ändert sich von `true` zu `false`.
- [`error`](/de/docs/Web/API/SourceBuffer/error_event)
  - : Wird ausgelöst, wenn ein Fehler beim Verarbeiten einer [`appendBuffer()`](/de/docs/Web/API/SourceBuffer/appendBuffer) Operation auftritt. [`SourceBuffer.updating`](/de/docs/Web/API/SourceBuffer/updating) ändert sich von `true` zu `false`.
- [`update`](/de/docs/Web/API/SourceBuffer/update_event)
  - : Wird ausgelöst, wann immer [`SourceBuffer.appendBuffer()`](/de/docs/Web/API/SourceBuffer/appendBuffer) oder [`SourceBuffer.remove()`](/de/docs/Web/API/SourceBuffer/remove) abgeschlossen wird. [`SourceBuffer.updating`](/de/docs/Web/API/SourceBuffer/updating) ändert sich von `true` zu `false`.
- [`updateend`](/de/docs/Web/API/SourceBuffer/updateend_event)
  - : Wird nach dem (nicht unbedingt erfolgreichen) Abschluss einer [`appendBuffer()`](/de/docs/Web/API/SourceBuffer/appendBuffer) oder [`remove()`](/de/docs/Web/API/SourceBuffer/remove) Operation ausgelöst. Dieses Ereignis wird nach den Ereignissen `update`, `error` oder `abort` ausgelöst.
- [`updatestart`](/de/docs/Web/API/SourceBuffer/updatestart_event)
  - : Wird ausgelöst, wenn eine [`appendBuffer()`](/de/docs/Web/API/SourceBuffer/appendBuffer) oder [`remove()`](/de/docs/Web/API/SourceBuffer/remove) Operation beginnt. [`updating`](/de/docs/Web/API/SourceBuffer/updating) ändert sich von `false` zu `true`.

## Beispiele

### Laden eines Videos in Stücken

Das folgende Beispiel lädt ein Video so schnell wie möglich in Stücken und spielt es ab, sobald es kann.

Der komplette Code ist verfügbar unter <https://github.com/mdn/dom-examples/tree/main/sourcebuffer> und Sie können die Demo live ausprobieren unter <https://mdn.github.io/dom-examples/sourcebuffer/>.

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
