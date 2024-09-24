---
title: Media-Capture- und Streams-API (Media Stream)
slug: Web/API/Media_Capture_and_Streams_API
l10n:
  sourceCommit: 26f4c6be023396099f6a6af8ee13fdf3280d2c1f
---

{{DefaultAPISidebar("Media Capture and Streams")}}

Die **Media-Capture- und Streams-API**, oft als **Media-Streams-API** oder **MediaStream API** bezeichnet, ist eine API im Zusammenhang mit [WebRTC](/de/docs/Web/API/WebRTC_API), die Unterstützung für das Streamen von Audio- und Videodaten bietet.

Sie bietet die Schnittstellen und Methoden zum Arbeiten mit den Streams und ihren Bestandteil-Tracks, den Beschränkungen in Bezug auf Datenformate, den Erfolgs- und Fehler-Rückrufen bei asynchronem Datenzugriff und den während des Prozesses ausgelösten Ereignissen.

## Konzepte und Verwendung

Die API basiert auf der Manipulation eines {{domxref("MediaStream")}} Objekts, das einen Fluss von Audio- oder videobezogenen Daten darstellt. Ein Beispiel finden Sie unter [Erhalte den Medienstream](/de/docs/Web/API/Media_Capture_and_Streams_API/Taking_still_photos#the_startup_function).

Ein `MediaStream` besteht aus null oder mehr {{domxref("MediaStreamTrack")}} Objekten, die verschiedene Audio- oder Video-**Tracks** darstellen. Jeder `MediaStreamTrack` kann einen oder mehrere **Channels** haben. Der Channel stellt die kleinste Einheit eines Medienstreams dar, wie ein Audiosignal, das mit einem bestimmten Lautsprecher verbunden ist, beispielsweise _links_ oder _rechts_ in einem Stereo-Audiotrack.

`MediaStream` Objekte haben einen einzigen **Input** und einen einzigen **Output**. Ein durch {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} generiertes `MediaStream` Objekt wird als _lokal_ bezeichnet und hat als Quelleneingang eine der Kameras oder Mikrofone des Benutzers. Ein nicht lokales `MediaStream` kann ein Medienelement darstellen, wie {{HTMLElement("video")}} oder {{HTMLElement("audio")}}, einen Stream, der über das Netzwerk originärt und über die WebRTC {{domxref("RTCPeerConnection")}} API empfangen wurde, oder einen Stream, der mit der [Web Audio API](/de/docs/Web/API/Web_Audio_API) {{domxref("MediaStreamAudioDestinationNode")}} erstellt wurde.

Der Ausgang des `MediaStream` Objekts ist mit einem **Verbraucher** verbunden. Dies kann ein Medienelement sein, wie {{HTMLElement("audio")}} oder {{HTMLElement("video")}}, die WebRTC {{domxref("RTCPeerConnection")}} API oder eine [Web Audio API](/de/docs/Web/API/Web_Audio_API) {{domxref("MediaStreamAudioSourceNode")}}.

## Schnittstellen

In diesen Referenzartikeln finden Sie die grundlegenden Informationen, die Sie über jede der Schnittstellen der Media-Capture- und Streams-API wissen müssen.

- {{domxref("CanvasCaptureMediaStreamTrack")}}
- {{domxref("InputDeviceInfo")}}
- {{domxref("MediaDeviceInfo")}}
- {{domxref("MediaDevices")}}
- {{domxref("MediaStream")}}
- {{domxref("MediaStreamTrack")}}
- {{domxref("MediaStreamTrackEvent")}}
- {{domxref("MediaTrackConstraints")}}
- {{domxref("MediaTrackSettings")}}
- {{domxref("MediaTrackSupportedConstraints")}}
- {{domxref("OverconstrainedError")}}

## Ereignisse

- {{domxref("MediaStream/addtrack_event", "addtrack")}}
- {{domxref("MediaStreamTrack/ended_event", "ended")}}
- {{domxref("MediaStreamTrack/mute_event", "mute")}}
- {{domxref("MediaStream/removetrack_event", "removetrack")}}
- {{domxref("MediaStreamTrack/unmute_event", "unmute")}}

## Anleitungen und Tutorials

Der Artikel [Fähigkeiten, Beschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints) behandelt die Konzepte der **Einschränkungen** und **Fähigkeiten** sowie die Medien-Einstellungen und enthält einen [Constraint-Übungsmodus](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser), mit dem Sie die Ergebnisse von verschiedenen Einschränkungssets, die auf die Audio- und Videotracks der A/V-Eingabegeräte des Computers (wie Webcam und Mikrofon) angewendet werden, experimentieren können.

Der Artikel [Aufnahme von Standbildern mit getUserMedia()](/de/docs/Web/API/Media_Capture_and_Streams_API/Taking_still_photos) zeigt, wie man [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) verwendet, um auf die Kamera eines Computers oder Mobiltelefons mit Unterstützung für `getUserMedia()` zuzugreifen und damit ein Foto aufzunehmen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC](/de/docs/Web/API/WebRTC_API) - die Einführungsseite zur API
- [Aufnahme von Standbildern mit WebRTC](/de/docs/Web/API/Media_Capture_and_Streams_API/Taking_still_photos): eine Demonstration und Anleitung zur Nutzung von `getUserMedia()`.
