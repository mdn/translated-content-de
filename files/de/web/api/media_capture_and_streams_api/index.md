---
title: Media Capture and Streams API (Media Stream)
slug: Web/API/Media_Capture_and_Streams_API
l10n:
  sourceCommit: 26f4c6be023396099f6a6af8ee13fdf3280d2c1f
---

{{DefaultAPISidebar("Media Capture and Streams")}}

Die **Media Capture and Streams** API, oft als **Media Streams API** oder **MediaStream API** bezeichnet, ist eine API, die sich auf [WebRTC](/de/docs/Web/API/WebRTC_API) bezieht und Unterstützung für das Streaming von Audio- und Videodaten bietet.

Sie bietet die Schnittstellen und Methoden zur Arbeit mit den Streams und ihren zugehörigen Tracks, die mit Datenformaten verbundenen Einschränkungen, die Erfolgs- und Fehlercallbacks bei asynchroner Nutzung der Daten sowie die während des Prozesses ausgelösten Ereignisse.

## Konzepte und Verwendung

Die API basiert auf der Manipulation eines [`MediaStream`](/de/docs/Web/API/MediaStream)-Objekts, das einen Fluss von audio- oder videobezogenen Daten darstellt. Sehen Sie ein Beispiel in [Holen Sie sich den Medien-Stream](/de/docs/Web/API/Media_Capture_and_Streams_API/Taking_still_photos#the_startup_function).

Ein `MediaStream` besteht aus null oder mehr [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Objekten, die verschiedene Audio- oder Video-**Tracks** darstellen. Jeder `MediaStreamTrack` kann ein oder mehrere **Kanäle** haben. Der Kanal stellt die kleinste Einheit eines Medienstreams dar, wie ein Audiosignal, das einem bestimmten Lautsprecher zugeordnet ist, wie _links_ oder _rechts_ in einem Stereo-Audiotrack.

`MediaStream`-Objekte haben einen einzigen **Eingang** und einen einzigen **Ausgang**. Ein `MediaStream`, das durch [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) erzeugt wird, wird als _lokal_ bezeichnet und hat als Quelleneingang eine der Kameras oder Mikrofone des Nutzers. Ein nicht-lokales `MediaStream` kann ein Medien-Element wie {{HTMLElement("video")}} oder {{HTMLElement("audio")}} darstellen, ein Stream, der über das Netzwerk kommt und über die WebRTC [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) API erhalten wird, oder ein Stream, der mit der [Web Audio API](/de/docs/Web/API/Web_Audio_API) [`MediaStreamAudioDestinationNode`](/de/docs/Web/API/MediaStreamAudioDestinationNode) erstellt wurde.

Der Ausgang des `MediaStream`-Objekts ist mit einem **Konsumenten** verknüpft. Dies kann ein Medienelement wie {{HTMLElement("audio")}} oder {{HTMLElement("video")}}, die WebRTC [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) API oder ein [Web Audio API](/de/docs/Web/API/Web_Audio_API) [`MediaStreamAudioSourceNode`](/de/docs/Web/API/MediaStreamAudioSourceNode) sein.

## Schnittstellen

In diesen Referenzartikeln finden Sie die grundlegenden Informationen, die Sie über jede der Schnittstellen wissen müssen, aus denen die Media Capture and Streams API besteht.

- [`CanvasCaptureMediaStreamTrack`](/de/docs/Web/API/CanvasCaptureMediaStreamTrack)
- [`InputDeviceInfo`](/de/docs/Web/API/InputDeviceInfo)
- [`MediaDeviceInfo`](/de/docs/Web/API/MediaDeviceInfo)
- [`MediaDevices`](/de/docs/Web/API/MediaDevices)
- [`MediaStream`](/de/docs/Web/API/MediaStream)
- [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)
- [`MediaStreamTrackEvent`](/de/docs/Web/API/MediaStreamTrackEvent)
- [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)
- [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings)
- [`MediaTrackSupportedConstraints`](/de/docs/Web/API/MediaTrackSupportedConstraints)
- [`OverconstrainedError`](/de/docs/Web/API/OverconstrainedError)

## Ereignisse

- [`addtrack`](/de/docs/Web/API/MediaStream/addtrack_event)
- [`ended`](/de/docs/Web/API/MediaStreamTrack/ended_event)
- [`mute`](/de/docs/Web/API/MediaStreamTrack/mute_event)
- [`removetrack`](/de/docs/Web/API/MediaStream/removetrack_event)
- [`unmute`](/de/docs/Web/API/MediaStreamTrack/unmute_event)

## Leitfäden und Tutorials

Der Artikel [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints) diskutiert die Konzepte von **Einschränkungen** und **Fähigkeiten** sowie Medien-Einstellungen und enthält einen [Constraint-Übungsmodus](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser), mit dem Sie mit den Ergebnissen verschiedener Einschränkungssätze experimentieren können, die auf die Audio- und Videotracks der A/V-Eingabegeräte des Computers (wie Webcam und Mikrofon) angewendet werden.

Der Artikel [Fotos mit getUserMedia() aufnehmen](/de/docs/Web/API/Media_Capture_and_Streams_API/Taking_still_photos) zeigt, wie Sie mit [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) auf die Kamera eines Computers oder Mobiltelefons mit `getUserMedia()`-Unterstützung zugreifen und ein Foto aufnehmen können.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC](/de/docs/Web/API/WebRTC_API) - die Einführungsseite zur API
- [Standbilder mit WebRTC aufnehmen](/de/docs/Web/API/Media_Capture_and_Streams_API/Taking_still_photos): eine Demonstration und Anleitung zur Verwendung von `getUserMedia()`.
