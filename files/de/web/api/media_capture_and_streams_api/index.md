---
title: Media Capture and Streams API (Media Stream)
slug: Web/API/Media_Capture_and_Streams_API
l10n:
  sourceCommit: 26f4c6be023396099f6a6af8ee13fdf3280d2c1f
---

{{DefaultAPISidebar("Media Capture and Streams")}}

Die **Media Capture und Streams API**, oft als **Media Streams API** oder **MediaStream API** bezeichnet, ist eine API, die mit [WebRTC](/de/docs/Web/API/WebRTC_API) in Verbindung steht und Unterstützung für das Streaming von Audio- und Videodaten bietet.

Sie bietet die Schnittstellen und Methoden für die Arbeit mit Streams und ihren einzelnen Tracks, den mit Datenformaten verbundenen Einschränkungen, den Erfolgs- und Fehler-Callbacks bei der asynchronen Nutzung von Daten sowie den Ereignissen, die während des Prozesses ausgelöst werden.

## Konzepte und Nutzung

Die API basiert auf der Manipulation eines [`MediaStream`](/de/docs/Web/API/MediaStream)-Objekts, das einen Fluss von Audio- oder videobezogenen Daten darstellt. Siehe ein Beispiel in [Holen Sie sich den Mediastream](/de/docs/Web/API/Media_Capture_and_Streams_API/Taking_still_photos#the_startup_function).

Ein `MediaStream` besteht aus null oder mehr [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Objekten, die verschiedene Audio- oder Video-**Tracks** darstellen. Jeder `MediaStreamTrack` kann einen oder mehrere **Kanäle** haben. Der Kanal repräsentiert die kleinste Einheit eines Mediastreams, z. B. ein Audiosignal, das einem bestimmten Lautsprecher zugeordnet ist, wie _links_ oder _rechts_ in einem Stereo-Audiotrack.

`MediaStream`-Objekte haben einen einzigen **Eingang** und einen einzigen **Ausgang**. Ein von [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) erzeugtes `MediaStream`-Objekt wird als _lokal_ bezeichnet und hat als Quelleingang eine der Kameras oder Mikrofone des Benutzers. Ein nicht lokales `MediaStream` kann ein Mediaelement wie {{HTMLElement("video")}} oder {{HTMLElement("audio")}} darstellen, einen Stream, der über das Netzwerk stammt und über die WebRTC-API [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) bezogen wird, oder einen Stream, der mit der [Web Audio API](/de/docs/Web/API/Web_Audio_API) [`MediaStreamAudioDestinationNode`](/de/docs/Web/API/MediaStreamAudioDestinationNode) erstellt wurde.

Der Ausgang des `MediaStream`-Objekts ist mit einem **Verbraucher** verbunden. Dies kann ein Mediaelement wie {{HTMLElement("audio")}} oder {{HTMLElement("video")}}, die WebRTC-API [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) oder ein [Web Audio API](/de/docs/Web/API/Web_Audio_API) [`MediaStreamAudioSourceNode`](/de/docs/Web/API/MediaStreamAudioSourceNode) sein.

## Schnittstellen

In diesen Referenzartikeln finden Sie die grundlegenden Informationen, die Sie über jede der Schnittstellen wissen müssen, die die Media Capture und Streams API bilden.

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

Der Artikel [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints) diskutiert die Konzepte von **Einschränkungen** und **Fähigkeiten** sowie Medieneinstellungen und enthält einen [Constraint-Tester](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser), mit dem Sie die Ergebnisse unterschiedlicher Einschränkungssätze, die auf die Audio- und Videotracks von den A/V-Eingabegeräten des Computers (wie Webcam und Mikrofon) angewendet werden, ausprobieren können.

Der Artikel [Statische Fotos mit getUserMedia aufnehmen](/de/docs/Web/API/Media_Capture_and_Streams_API/Taking_still_photos) zeigt, wie Sie mit [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) auf die Kamera eines Computers oder Mobiltelefons zugreifen und mit `getUserMedia()` ein Foto aufnehmen können.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC](/de/docs/Web/API/WebRTC_API) - die Einführungsseite zur API
- [Statische Fotos mit WebRTC aufnehmen](/de/docs/Web/API/Media_Capture_and_Streams_API/Taking_still_photos): eine Demonstration und Anleitung zur Verwendung von `getUserMedia()`.
