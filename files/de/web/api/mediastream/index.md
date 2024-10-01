---
title: MediaStream
slug: Web/API/MediaStream
l10n:
  sourceCommit: 75d6fc9821feb4288e5bc7580c9d8176264d76ae
---

{{APIRef("Media Capture and Streams")}}

Das **`MediaStream`**-Interface der [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API) repräsentiert einen Stream von Medieninhalten. Ein Stream besteht aus mehreren **Tracks**, wie Video- oder Audiotracks. Jeder Track wird als eine Instanz von [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) spezifiziert.

Ein `MediaStream`-Objekt kann entweder durch Verwendung des Konstruktors oder durch Aufrufen von Funktionen wie [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia), [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia), oder [`HTMLCanvasElement.captureStream()`](/de/docs/Web/API/HTMLCanvasElement/captureStream) und [`HTMLMediaElement.captureStream()`](/de/docs/Web/API/HTMLMediaElement/captureStream) erhalten werden.

{{InheritanceDiagram}}

## Konstruktor

- [`MediaStream()`](/de/docs/Web/API/MediaStream/MediaStream)
  - : Erstellt und gibt ein neues `MediaStream`-Objekt zurück. Sie können einen leeren Stream erstellen, einen Stream, der auf einem bestehenden Stream basiert, oder einen Stream, der eine bestimmte Liste von Tracks enthält (spezifiziert als ein Array von [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Objekten).

## Instanz-Eigenschaften

_Dieses Interface erbt Eigenschaften von seinem Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`MediaStream.active`](/de/docs/Web/API/MediaStream/active) {{ReadOnlyInline}}
  - : Ein Boolean-Wert, der `true` zurückgibt, wenn der `MediaStream` aktiv ist, oder `false` andernfalls.
- [`MediaStream.id`](/de/docs/Web/API/MediaStream/id) {{ReadOnlyInline}}
  - : Ein String, der eine 36 Zeichen lange universell eindeutige Kennung ({{Glossary("UUID", "UUID")}}) für das Objekt enthält.

## Instanz-Methoden

_Dieses Interface erbt Methoden von seinem Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`MediaStream.addTrack()`](/de/docs/Web/API/MediaStream/addTrack)
  - : Speichert eine Kopie des als Argument gegebenen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack). Wenn der Track bereits dem `MediaStream`-Objekt hinzugefügt wurde, passiert nichts.
- [`MediaStream.clone()`](/de/docs/Web/API/MediaStream/clone)
  - : Gibt einen Klon des `MediaStream`-Objekts zurück. Der Klon hat jedoch einen eindeutigen Wert für [`id`](/de/docs/Web/API/MediaStream/id).
- [`MediaStream.getAudioTracks()`](/de/docs/Web/API/MediaStream/getAudioTracks)
  - : Gibt eine Liste der [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Objekte zurück, die im `MediaStream`-Objekt gespeichert sind und deren `kind`-Attribut auf `audio` gesetzt ist. Die Reihenfolge ist nicht definiert und kann nicht nur von einem Browser zum anderen variieren, sondern auch von einem Aufruf zum anderen.
- [`MediaStream.getTrackById()`](/de/docs/Web/API/MediaStream/getTrackById)
  - : Gibt den Track zurück, dessen ID mit dem im Parameter gegebenen `trackid` übereinstimmt. Wenn kein Parameter angegeben ist oder wenn kein Track mit dieser ID existiert, wird `null` zurückgegeben. Wenn mehrere Tracks dieselbe ID haben, wird der erste zurückgegeben.
- [`MediaStream.getTracks()`](/de/docs/Web/API/MediaStream/getTracks)
  - : Gibt eine Liste aller [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Objekte zurück, die im `MediaStream`-Objekt gespeichert sind, unabhängig vom Wert des `kind`-Attributs. Die Reihenfolge ist nicht definiert und kann nicht nur von einem Browser zum anderen variieren, sondern auch von einem Aufruf zum anderen.
- [`MediaStream.getVideoTracks()`](/de/docs/Web/API/MediaStream/getVideoTracks)
  - : Gibt eine Liste der [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Objekte zurück, die im `MediaStream`-Objekt gespeichert sind und deren `kind`-Attribut auf `"video"` gesetzt ist. Die Reihenfolge ist nicht definiert und kann nicht nur von einem Browser zum anderen variieren, sondern auch von einem Aufruf zum anderen.
- [`MediaStream.removeTrack()`](/de/docs/Web/API/MediaStream/removeTrack)
  - : Entfernt den als Argument gegebenen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack). Wenn der Track nicht Teil des `MediaStream`-Objekts ist, passiert nichts.

## Ereignisse

- [`addtrack`](/de/docs/Web/API/MediaStream/addtrack_event)
  - : Wird ausgelöst, wenn ein neues [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Objekt hinzugefügt wird.
- [`removetrack`](/de/docs/Web/API/MediaStream/removetrack_event)
  - : Wird ausgelöst, wenn ein [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Objekt entfernt wurde.
- [`active`](/de/docs/Web/API/MediaStream/active_event) {{Non-standard_Inline}}
  - : Wird ausgelöst, wenn der MediaStream aktiviert wird.
- [`inactive`](/de/docs/Web/API/MediaStream/inactive_event) {{Non-standard_Inline}}
  - : Wird ausgelöst, wenn der MediaStream deaktiviert wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwenden der MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API)
- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
- [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)
