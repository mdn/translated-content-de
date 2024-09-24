---
title: MediaStream
slug: Web/API/MediaStream
l10n:
  sourceCommit: 75d6fc9821feb4288e5bc7580c9d8176264d76ae
---

{{APIRef("Media Capture and Streams")}}

Das **`MediaStream`**-Interface der {{domxref("Media Capture and Streams API", "", "", "nocode")}} repräsentiert einen Strom von Medieninhalten. Ein Strom besteht aus mehreren **Tracks**, wie Video- oder Audiotracks. Jeder Track ist als Instanz von {{domxref("MediaStreamTrack")}} spezifiziert.

Ein `MediaStream`-Objekt kann entweder durch die Verwendung des Konstruktors oder durch Aufrufen von Funktionen wie {{domxref("MediaDevices.getUserMedia()")}}, {{domxref("MediaDevices.getDisplayMedia()")}}, {{domxref("HTMLCanvasElement.captureStream()")}} und {{domxref("HTMLMediaElement.captureStream()")}} erhalten werden.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("MediaStream.MediaStream", "MediaStream()")}}
  - : Erstellt und gibt ein neues `MediaStream`-Objekt zurück. Sie können einen leeren Strom erstellen, einen Strom, der auf einem bestehenden Strom basiert, oder einen Strom, der eine angegebene Liste von Tracks enthält (angegeben als Array von {{domxref("MediaStreamTrack")}}-Objekten).

## Instanz-Eigenschaften

_Dieses Interface erbt Eigenschaften von seinem Elternteil {{domxref("EventTarget")}}._

- {{domxref("MediaStream.active")}} {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` zurückgibt, wenn das `MediaStream` aktiv ist, oder `false` andernfalls.
- {{domxref("MediaStream.id")}} {{ReadOnlyInline}}
  - : Eine Zeichenkette, die eine 36-stellige universell eindeutige Kennung ({{Glossary("UUID")}}) für das Objekt enthält.

## Instanz-Methoden

_Dieses Interface erbt Methoden von seinem Elternteil {{domxref("EventTarget")}}._

- {{domxref("MediaStream.addTrack()")}}
  - : Speichert eine Kopie des als Argument übergebenen {{domxref("MediaStreamTrack")}}. Wenn der Track bereits zu dem `MediaStream`-Objekt hinzugefügt wurde, passiert nichts.
- {{domxref("MediaStream.clone()")}}
  - : Gibt ein Duplikat des `MediaStream`-Objekts zurück. Das Duplikat wird jedoch einen einzigartigen Wert für {{domxref("MediaStream.id", "id")}} haben.
- {{domxref("MediaStream.getAudioTracks()")}}
  - : Gibt eine Liste der im `MediaStream`-Objekt gespeicherten {{domxref("MediaStreamTrack")}}-Objekte zurück, die ihr `kind`-Attribut auf `audio` gesetzt haben. Die Reihenfolge ist nicht definiert und kann nicht nur von einem Browser zum anderen, sondern auch von einem Aufruf zum anderen variieren.
- {{domxref("MediaStream.getTrackById()")}}
  - : Gibt den Track zurück, dessen ID dem in den Parametern angegebenen `trackid` entspricht. Wenn kein Parameter angegeben wird oder kein Track mit dieser ID existiert, wird `null` zurückgegeben. Wenn mehrere Tracks die gleiche ID haben, wird der erste zurückgegeben.
- {{domxref("MediaStream.getTracks()")}}
  - : Gibt eine Liste aller im `MediaStream`-Objekt gespeicherten {{domxref("MediaStreamTrack")}}-Objekte zurück, unabhängig vom Wert des `kind`-Attributs. Die Reihenfolge ist nicht definiert und kann nicht nur von einem Browser zum anderen, sondern auch von einem Aufruf zum anderen variieren.
- {{domxref("MediaStream.getVideoTracks()")}}
  - : Gibt eine Liste der im `MediaStream`-Objekt gespeicherten {{domxref("MediaStreamTrack")}}-Objekte zurück, die ihr `kind`-Attribut auf `"video"` gesetzt haben. Die Reihenfolge ist nicht definiert und kann nicht nur von einem Browser zum anderen, sondern auch von einem Aufruf zum anderen variieren.
- {{domxref("MediaStream.removeTrack()")}}
  - : Entfernt den als Argument übergebenen {{domxref("MediaStreamTrack")}}. Wenn der Track nicht Teil des `MediaStream`-Objekts ist, passiert nichts.

## Ereignisse

- {{domxref("MediaStream/addtrack_event", "addtrack")}}
  - : Wird ausgelöst, wenn ein neues {{domxref("MediaStreamTrack")}}-Objekt hinzugefügt wird.
- {{domxref("MediaStream/removetrack_event", "removetrack")}}
  - : Wird ausgelöst, wenn ein {{domxref("MediaStreamTrack")}}-Objekt entfernt wurde.
- {{domxref("MediaStream/active_event", "active")}} {{Non-standard_Inline}}
  - : Wird ausgelöst, wenn das MediaStream aktiviert wird.
- {{domxref("MediaStream/inactive_event", "inactive")}} {{Non-standard_Inline}}
  - : Wird ausgelöst, wenn das MediaStream deaktiviert wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API)
- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
- {{domxref("MediaStreamTrack")}}
