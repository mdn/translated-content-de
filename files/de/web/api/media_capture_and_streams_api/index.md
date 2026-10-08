---
title: Media Capture and Streams API (Media Stream)
slug: Web/API/Media_Capture_and_Streams_API
l10n:
  sourceCommit: b1bb1b27224e37b2045c6a16b5f9cfa817d0df89
---

{{DefaultAPISidebar("Media Capture and Streams")}}

Die **Media Capture and Streams API**, oft auch **Media Streams API** oder **MediaStream API** genannt, ist eine mit [WebRTC](/de/docs/Web/API/WebRTC_API) zusammenhängende API, die das Streaming von Audio- und Videodaten unterstützt.

Sie stellt Interfaces und Methoden für die Arbeit mit Streams und den darin enthaltenen Tracks bereit. Dazu gehören Constraints für Datenformate, Erfolgs- und Fehler-Callbacks bei der asynchronen Verarbeitung der Daten sowie Events, die währenddessen ausgelöst werden.

## Konzepte und Verwendung

Die API basiert auf der Arbeit mit einem [`MediaStream`](/de/docs/Web/API/MediaStream)-Objekt, das einen Strom von Audio- oder Videodaten repräsentiert. Ein Beispiel finden Sie unter [Den Medienstream abrufen](/de/docs/Web/API/Media_Capture_and_Streams_API/Taking_still_photos#demo).

Ein `MediaStream` besteht aus null oder mehr [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Objekten, die verschiedene Audio- oder Video-**Tracks** repräsentieren. Jeder `MediaStreamTrack` kann einen oder mehrere **Kanäle** haben. Ein Kanal ist die kleinste Einheit eines Medienstreams, etwa das Audiosignal eines bestimmten Lautsprechers – beispielsweise _links_ oder _rechts_ bei einem Stereo-Audiotrack.

`MediaStream`-Objekte haben einen **Eingang** und einen **Ausgang**. Ein durch [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) erzeugtes `MediaStream`-Objekt wird als _lokal_ bezeichnet. Als Eingangsquelle dient ihm eine Kamera oder ein Mikrofon der nutzenden Person. Ein nicht lokaler `MediaStream` kann ein Medienelement wie {{HTMLElement("video")}} oder {{HTMLElement("audio")}} repräsentieren, einen über das Netzwerk übertragenen und über die WebRTC-API [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) empfangenen Stream oder einen Stream, der mithilfe von [`MediaStreamAudioDestinationNode`](/de/docs/Web/API/MediaStreamAudioDestinationNode) aus der [Web Audio API](/de/docs/Web/API/Web_Audio_API) erstellt wurde.

Der Ausgang des `MediaStream`-Objekts ist mit einem **Empfänger** verbunden. Das kann ein Medienelement wie {{HTMLElement("audio")}} oder {{HTMLElement("video")}}, die WebRTC-API [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) oder ein [`MediaStreamAudioSourceNode`](/de/docs/Web/API/MediaStreamAudioSourceNode) aus der [Web Audio API](/de/docs/Web/API/Web_Audio_API) sein.

## Interfaces

In diesen Referenzartikeln finden Sie die grundlegenden Informationen zu den einzelnen Interfaces der Media Capture and Streams API.

- [`CanvasCaptureMediaStreamTrack`](/de/docs/Web/API/CanvasCaptureMediaStreamTrack)
- [`InputDeviceInfo`](/de/docs/Web/API/InputDeviceInfo)
- [`MediaDeviceInfo`](/de/docs/Web/API/MediaDeviceInfo)
- [`MediaDevices`](/de/docs/Web/API/MediaDevices)
- [`MediaStream`](/de/docs/Web/API/MediaStream)
- [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)
- [`MediaStreamTrackEvent`](/de/docs/Web/API/MediaStreamTrackEvent)
- [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)
- [`OverconstrainedError`](/de/docs/Web/API/OverconstrainedError)

## Events

- [`addtrack`](/de/docs/Web/API/MediaStream/addtrack_event)
- [`ended`](/de/docs/Web/API/MediaStreamTrack/ended_event)
- [`mute`](/de/docs/Web/API/MediaStreamTrack/mute_event)
- [`removetrack`](/de/docs/Web/API/MediaStream/removetrack_event)
- [`unmute`](/de/docs/Web/API/MediaStreamTrack/unmute_event)

## Leitfäden und Tutorials

Der Artikel [Fähigkeiten, Constraints und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints) erläutert die Konzepte **Constraints** und **Fähigkeiten** sowie Medieneinstellungen. Er enthält außerdem ein [Tool zum Testen von Constraints](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser). Damit können Sie ausprobieren, wie sich verschiedene Constraint-Sätze auf die Audio- und Videotracks der A/V-Eingabegeräte Ihres Computers, etwa Webcam und Mikrofon, auswirken.

Der Artikel [Standbilder mit getUserMedia() aufnehmen](/de/docs/Web/API/Media_Capture_and_Streams_API/Taking_still_photos) zeigt, wie Sie mit [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) auf die Kamera eines Computers oder Mobiltelefons zugreifen, das `getUserMedia()` unterstützt, und damit ein Foto aufnehmen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC](/de/docs/Web/API/WebRTC_API) – die Einführungsseite zur API
- [Standbilder mit WebRTC aufnehmen](/de/docs/Web/API/Media_Capture_and_Streams_API/Taking_still_photos): eine Demonstration und ein Tutorial zur Verwendung von `getUserMedia()`.
