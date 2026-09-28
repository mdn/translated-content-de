---
title: Media Capture and Streams API (Media Stream)
slug: Web/API/Media_Capture_and_Streams_API
l10n:
  sourceCommit: a5b8c78d6a38dda4194bec70cb82e5bf646178e7
---

{{DefaultAPISidebar("Media Capture and Streams")}}

Die **Media Capture and Streams API**, oft auch **Media Streams API** oder **MediaStream API** genannt, ist eine mit [WebRTC](/de/docs/Web/API/WebRTC_API) verbundene API, die das Streaming von Audio- und Videodaten unterstützt.

Sie stellt Schnittstellen und Methoden für die Arbeit mit Streams und den darin enthaltenen Tracks bereit. Dazu gehören Constraints für Datenformate, Erfolgs- und Fehler-Callbacks bei der asynchronen Verwendung der Daten sowie Events, die während des Vorgangs ausgelöst werden.

## Konzepte und Verwendung

Die API basiert auf der Verwendung eines [`MediaStream`](/de/docs/Web/API/MediaStream)-Objekts, das einen Strom von Audio- oder Videodaten darstellt. Ein Beispiel finden Sie unter [Den Media-Stream abrufen](/de/docs/Web/API/Media_Capture_and_Streams_API/Taking_still_photos#demo).

Ein `MediaStream` besteht aus keinem, einem oder mehreren [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Objekten, die verschiedene Audio- oder Video-**Tracks** darstellen. Jeder `MediaStreamTrack` kann einen oder mehrere **Kanäle** haben. Ein Kanal ist die kleinste Einheit eines Media-Streams, etwa ein Audiosignal, das einem bestimmten Lautsprecher zugeordnet ist – beispielsweise _links_ oder _rechts_ bei einem Stereo-Audiotrack.

`MediaStream`-Objekte haben jeweils einen **Eingang** und einen **Ausgang**. Ein von [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) erzeugtes `MediaStream`-Objekt wird als _lokal_ bezeichnet und nutzt als Eingangsquelle eine Kamera oder ein Mikrofon der nutzenden Person. Ein nicht lokaler `MediaStream` kann ein Medienelement wie {{HTMLElement("video")}} oder {{HTMLElement("audio")}} darstellen, einen über das Netzwerk übertragenen und über die WebRTC-API [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) empfangenen Stream oder einen Stream, der mit [`MediaStreamAudioDestinationNode`](/de/docs/Web/API/MediaStreamAudioDestinationNode) aus der [Web Audio API](/de/docs/Web/API/Web_Audio_API) erstellt wurde.

Der Ausgang des `MediaStream`-Objekts ist mit einem **Verbraucher** verbunden. Das kann ein Medienelement wie {{HTMLElement("audio")}} oder {{HTMLElement("video")}}, die WebRTC-API [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) oder ein [`MediaStreamAudioSourceNode`](/de/docs/Web/API/MediaStreamAudioSourceNode) der [Web Audio API](/de/docs/Web/API/Web_Audio_API) sein.

## Schnittstellen

In diesen Referenzartikeln finden Sie die grundlegenden Informationen zu den Schnittstellen der Media Capture and Streams API.

- [`CanvasCaptureMediaStreamTrack`](/de/docs/Web/API/CanvasCaptureMediaStreamTrack)
- [`InputDeviceInfo`](/de/docs/Web/API/InputDeviceInfo)
- [`MediaDeviceInfo`](/de/docs/Web/API/MediaDeviceInfo)
- [`MediaDevices`](/de/docs/Web/API/MediaDevices)
- [`MediaStream`](/de/docs/Web/API/MediaStream)
- [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)
- [`MediaStreamTrackEvent`](/de/docs/Web/API/MediaStreamTrackEvent)
- [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)
- [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings)
- [`OverconstrainedError`](/de/docs/Web/API/OverconstrainedError)

## Events

- [`addtrack`](/de/docs/Web/API/MediaStream/addtrack_event)
- [`ended`](/de/docs/Web/API/MediaStreamTrack/ended_event)
- [`mute`](/de/docs/Web/API/MediaStreamTrack/mute_event)
- [`removetrack`](/de/docs/Web/API/MediaStream/removetrack_event)
- [`unmute`](/de/docs/Web/API/MediaStreamTrack/unmute_event)

## Leitfäden und Tutorials

Der Artikel [Fähigkeiten, Constraints und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints) erläutert die Konzepte **Constraints** und **Fähigkeiten** sowie Medieneinstellungen. Er enthält außerdem ein [Beispiel zum Ausprobieren von Constraints](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser), mit dem Sie untersuchen können, wie sich unterschiedliche Constraint-Sätze auf die Audio- und Videotracks der A/V-Eingabegeräte Ihres Computers, etwa Webcam und Mikrofon, auswirken.

Der Artikel [Standbilder mit getUserMedia() aufnehmen](/de/docs/Web/API/Media_Capture_and_Streams_API/Taking_still_photos) zeigt, wie Sie mit [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) auf die Kamera eines Computers oder Mobiltelefons zugreifen, das `getUserMedia()` unterstützt, und damit ein Foto aufnehmen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC](/de/docs/Web/API/WebRTC_API) – die Einführungsseite zur API
- [Standbilder mit WebRTC aufnehmen](/de/docs/Web/API/Media_Capture_and_Streams_API/Taking_still_photos): eine Demonstration und ein Tutorial zur Verwendung von `getUserMedia()`.
