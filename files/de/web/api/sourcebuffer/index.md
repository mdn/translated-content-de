---
title: SourceBuffer
slug: Web/API/SourceBuffer
l10n:
  sourceCommit: b5c0f9e662492bb94fa14f62ed2d0599cbb5c5ba
---

{{APIRef("Media Source Extensions")}}

Die **`SourceBuffer`**-Schnittstelle repräsentiert ein Medienstück, das einem {{domxref("HTMLMediaElement")}} übergeben und über ein {{domxref("MediaSource")}}-Objekt abgespielt werden soll. Dies kann aus einem oder mehreren Mediensegmenten bestehen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- {{domxref("SourceBuffer.appendWindowEnd")}}
  - : Steuert den Zeitstempel für das Ende des Anfügefensters.
- {{domxref("SourceBuffer.appendWindowStart")}}
  - : Steuert den Zeitstempel für den Beginn des [Anfügefensters](https://w3c.github.io/media-source/#append-window). Dies ist ein Zeitstempelbereich, der verwendet werden kann, um zu filtern, welche Mediendaten an den `SourceBuffer` angefügt werden. Kodierte Medienrahmen mit Zeitstempeln innerhalb dieses Bereichs werden angefügt, während diejenigen außerhalb des Bereichs herausgefiltert werden.
- {{domxref("SourceBuffer.audioTracks")}} {{ReadOnlyInline}}
  - : Eine Liste der aktuell im `SourceBuffer` enthaltenen Audiotracks.
- {{domxref("SourceBuffer.buffered")}} {{ReadOnlyInline}}
  - : Gibt die Zeitbereiche zurück, die derzeit im `SourceBuffer` gepuffert sind.
- {{domxref("SourceBuffer.mode")}}
  - : Steuert, wie die Reihenfolge der Mediensegmente im `SourceBuffer` gehandhabt wird, ob sie in beliebiger Reihenfolge hinzugefügt werden können oder in einer strikten Sequenz gehalten werden müssen.
- {{domxref("SourceBuffer.textTracks")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Eine Liste der aktuell im `SourceBuffer` enthaltenen Texttracks.
- {{domxref("SourceBuffer.timestampOffset")}}
  - : Steuert den Versatz, der auf Zeitstempel innerhalb von Mediendaten angewendet wird, die anschließend an den `SourceBuffer` angefügt werden.
- {{domxref("SourceBuffer.updating")}} {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, ob der `SourceBuffer` derzeit aktualisiert wird – d. h., ob eine {{domxref("SourceBuffer.appendBuffer()")}} oder {{domxref("SourceBuffer.remove()")}}-Operation gerade im Gange ist.
- {{domxref("SourceBuffer.videoTracks")}} {{ReadOnlyInline}}
  - : Eine Liste der aktuell im `SourceBuffer` enthaltenen Videotracks.

## Instanz-Methoden

_Erbt Methoden von der Elternschnittstelle {{domxref("EventTarget")}}._

- {{domxref("SourceBuffer.abort()")}}
  - : Bricht das aktuelle Segment ab und setzt den Segment-Parser zurück.
- {{domxref("SourceBuffer.appendBuffer()")}}
  - : Fügt dem `SourceBuffer` Mediendaten aus einem {{jsxref("ArrayBuffer")}}, einer {{jsxref("TypedArray")}} oder einem {{jsxref("DataView")}}-Objekt hinzu.
- {{domxref("SourceBuffer.appendBufferAsync()")}} {{Non-standard_Inline}} {{Experimental_Inline}}
  - : Startet den Prozess des asynchronen Anfügens des angegebenen Puffers an den `SourceBuffer`. Gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird, sobald der Puffer angefügt wurde.
- {{domxref("SourceBuffer.changeType()")}}
  - : Ändert den {{Glossary("MIME-Typ")}}, den zukünftige Aufrufe von {{domxref("SourceBuffer.appendBuffer", "appendBuffer()")}} erwarten, um den neuen Daten zu entsprechen.
- {{domxref("SourceBuffer.remove()")}}
  - : Entfernt Mediensequenzen innerhalb eines bestimmten Zeitbereichs aus dem `SourceBuffer`.
- {{domxref("SourceBuffer.removeAsync()")}} {{Non-standard_Inline}} {{Experimental_Inline}}
  - : Startet den Prozess des asynchronen Entfernens von Mediensequenzen im angegebenen Bereich aus dem `SourceBuffer`. Gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird, sobald alle passenden Segmente entfernt wurden.

## Ereignisse

- {{domxref("SourceBuffer.abort_event", "abort")}}
  - : Wird immer ausgelöst, wenn {{domxref("SourceBuffer.appendBuffer()")}} durch einen Aufruf von {{domxref("SourceBuffer.abort()")}} beendet wird. {{domxref("SourceBuffer.updating")}} wechselt von `true` zu `false`.
- {{domxref("SourceBuffer.error_event", "error")}}
  - : Wird immer ausgelöst, wenn ein Fehler während {{domxref("SourceBuffer.appendBuffer()")}} auftritt. {{domxref("SourceBuffer.updating")}} wechselt von `true` zu `false`.
- {{domxref("SourceBuffer.update_event", "update")}}
  - : Wird immer ausgelöst, wenn {{domxref("SourceBuffer.appendBuffer()")}} oder {{domxref("SourceBuffer.remove()")}} abgeschlossen ist. {{domxref("SourceBuffer.updating")}} wechselt von `true` zu `false`. Dieses Ereignis wird vor `updateend` ausgelöst.
- {{domxref("SourceBuffer.updateend_event", "updateend")}}
  - : Wird ausgelöst, nachdem {{domxref("SourceBuffer.appendBuffer()")}} oder {{domxref("SourceBuffer.remove()")}} endet. Dieses Ereignis wird nach `update` ausgelöst.
- {{domxref("SourceBuffer.updatestart_event", "updatestart")}}
  - : Wird immer ausgelöst, wenn der Wert von {{domxref("SourceBuffer.updating")}} von `false` zu `true` wechselt.

## Beispiele

### Laden eines Videos in Teilstücken

Das folgende Beispiel lädt ein Video so schnell wie möglich in Teilstücken und spielt es ab, sobald es möglich ist.

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

- {{domxref("MediaSource")}}
- {{domxref("SourceBufferList")}}
