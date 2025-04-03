---
title: SourceBuffer
slug: Web/API/SourceBuffer
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

Das **`SourceBuffer`**-Interface repräsentiert ein Medienstück, das in ein [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) über ein [`MediaSource`](/de/docs/Web/API/MediaSource)-Objekt eingefügt und abgespielt werden soll. Es kann aus einem oder mehreren Mediensegmenten bestehen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`SourceBuffer.appendWindowEnd`](/de/docs/Web/API/SourceBuffer/appendWindowEnd)
  - : Kontrolliert den Zeitstempel für das Ende des Append-Fensters.
- [`SourceBuffer.appendWindowStart`](/de/docs/Web/API/SourceBuffer/appendWindowStart)
  - : Kontrolliert den Zeitstempel für den Beginn des [Append-Fensters](https://w3c.github.io/media-source/#append-window). Dies ist ein Zeitstempelbereich, der verwendet werden kann, um zu filtern, welche Mediendaten dem `SourceBuffer` hinzugefügt werden. Kodierte Medienframes mit Zeitstempeln innerhalb dieses Bereichs werden hinzugefügt, während solche außerhalb des Bereichs herausgefiltert werden.
- [`SourceBuffer.audioTracks`](/de/docs/Web/API/SourceBuffer/audioTracks) {{ReadOnlyInline}}
  - : Eine Liste der Audiospuren, die derzeit im `SourceBuffer` enthalten sind.
- [`SourceBuffer.buffered`](/de/docs/Web/API/SourceBuffer/buffered) {{ReadOnlyInline}}
  - : Gibt die Zeitbereiche zurück, die derzeit im `SourceBuffer` gepuffert sind.
- [`SourceBuffer.mode`](/de/docs/Web/API/SourceBuffer/mode)
  - : Kontrolliert, wie die Reihenfolge der Mediensegmente im `SourceBuffer` gehandhabt wird, ob sie in beliebiger Reihenfolge hinzugefügt werden können oder in einer strikten Reihenfolge behalten werden müssen.
- [`SourceBuffer.textTracks`](/de/docs/Web/API/SourceBuffer/textTracks) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Eine Liste der Textspuren, die derzeit im `SourceBuffer` enthalten sind.
- [`SourceBuffer.timestampOffset`](/de/docs/Web/API/SourceBuffer/timestampOffset)
  - : Kontrolliert den Versatz, der auf Zeitstempel innerhalb von Mediensegmenten angewendet wird, die anschließend dem `SourceBuffer` hinzugefügt werden.
- [`SourceBuffer.updating`](/de/docs/Web/API/SourceBuffer/updating) {{ReadOnlyInline}}
  - : Ein Boolescher Wert, der anzeigt, ob der `SourceBuffer` derzeit aktualisiert wird, d.h. ob eine [`SourceBuffer.appendBuffer()`](/de/docs/Web/API/SourceBuffer/appendBuffer)- oder [`SourceBuffer.remove()`](/de/docs/Web/API/SourceBuffer/remove)-Operation derzeit im Gange ist.
- [`SourceBuffer.videoTracks`](/de/docs/Web/API/SourceBuffer/videoTracks) {{ReadOnlyInline}}
  - : Eine Liste der Videospuren, die derzeit im `SourceBuffer` enthalten sind.

## Instanz-Methoden

_ERBT Methoden von seinem Eltern-Interface, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`SourceBuffer.abort()`](/de/docs/Web/API/SourceBuffer/abort)
  - : Bricht das aktuelle Segment ab und setzt den Segment-Parser zurück.
- [`SourceBuffer.appendBuffer()`](/de/docs/Web/API/SourceBuffer/appendBuffer)
  - : Fügt Mediendaten aus einem {{jsxref("ArrayBuffer")}}, einem {{jsxref("TypedArray")}} oder einem {{jsxref("DataView")}}-Objekt dem `SourceBuffer` hinzu.
- [`SourceBuffer.appendBufferAsync()`](/de/docs/Web/API/SourceBuffer/appendBufferAsync) {{Non-standard_Inline}} {{Experimental_Inline}}
  - : Startet den Prozess des asynchronen Hinzufügens des angegebenen Puffers zum `SourceBuffer`. Gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird, sobald der Puffer hinzugefügt wurde.
- [`SourceBuffer.changeType()`](/de/docs/Web/API/SourceBuffer/changeType)
  - : Ändert den {{Glossary("MIME_type", "MIME-Typ")}}, den zukünftige Aufrufe von [`appendBuffer()`](/de/docs/Web/API/SourceBuffer/appendBuffer) erwarten, in Übereinstimmung mit den neuen Daten.
- [`SourceBuffer.remove()`](/de/docs/Web/API/SourceBuffer/remove)
  - : Entfernt Mediensegmente innerhalb eines bestimmten Zeitbereichs aus dem `SourceBuffer`.
- [`SourceBuffer.removeAsync()`](/de/docs/Web/API/SourceBuffer/removeAsync) {{Non-standard_Inline}} {{Experimental_Inline}}
  - : Startet den Prozess des asynchronen Entfernens von Mediensegmenten im angegebenen Bereich aus dem `SourceBuffer`. Gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird, sobald alle passenden Segmente entfernt wurden.

## Ereignisse

- [`abort`](/de/docs/Web/API/SourceBuffer/abort_event)
  - : Wird ausgelöst, wann immer [`SourceBuffer.appendBuffer()`](/de/docs/Web/API/SourceBuffer/appendBuffer) durch einen Aufruf von [`SourceBuffer.abort()`](/de/docs/Web/API/SourceBuffer/abort) beendet wird. [`SourceBuffer.updating`](/de/docs/Web/API/SourceBuffer/updating) ändert sich von `true` zu `false`.
- [`error`](/de/docs/Web/API/SourceBuffer/error_event)
  - : Wird ausgelöst, wann immer ein Fehler während [`SourceBuffer.appendBuffer()`](/de/docs/Web/API/SourceBuffer/appendBuffer) auftritt. [`SourceBuffer.updating`](/de/docs/Web/API/SourceBuffer/updating) ändert sich von `true` zu `false`.
- [`update`](/de/docs/Web/API/SourceBuffer/update_event)
  - : Wird ausgelöst, wann immer [`SourceBuffer.appendBuffer()`](/de/docs/Web/API/SourceBuffer/appendBuffer) oder [`SourceBuffer.remove()`](/de/docs/Web/API/SourceBuffer/remove) abgeschlossen ist. [`SourceBuffer.updating`](/de/docs/Web/API/SourceBuffer/updating) ändert sich von `true` zu `false`. Dieses Ereignis wird vor `updateend` ausgelöst.
- [`updateend`](/de/docs/Web/API/SourceBuffer/updateend_event)
  - : Wird nach dem Ende von [`SourceBuffer.appendBuffer()`](/de/docs/Web/API/SourceBuffer/appendBuffer) oder [`SourceBuffer.remove()`](/de/docs/Web/API/SourceBuffer/remove) ausgelöst. Dieses Ereignis wird nach `update` ausgelöst.
- [`updatestart`](/de/docs/Web/API/SourceBuffer/updatestart_event)
  - : Wird ausgelöst, wann immer sich der Wert von [`SourceBuffer.updating`](/de/docs/Web/API/SourceBuffer/updating) von `false` zu `true` ändert.

## Beispiele

### Laden eines Videos Stück für Stück

Das folgende Beispiel lädt ein Video Stück für Stück so schnell wie möglich und spielt es ab, sobald es kann.

Den vollständigen Code finden Sie unter <https://github.com/mdn/dom-examples/tree/main/sourcebuffer> und das Live-Demo können Sie unter <https://mdn.github.io/dom-examples/sourcebuffer/> ausprobieren.

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
