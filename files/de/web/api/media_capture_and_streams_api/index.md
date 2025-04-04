---
title: Media Capture and Streams API (Media Stream)
slug: Web/API/Media_Capture_and_Streams_API
l10n:
  sourceCommit: 832bcb292fdf15ce9ba842f9a5025b5593454a65
---

{{DefaultAPISidebar("Media Capture and Streams")}}

Die **Media Capture and Streams** API, oft als **Media Streams API** oder **MediaStream API** bezeichnet, ist eine API im Zusammenhang mit [WebRTC](/de/docs/Web/API/WebRTC_API), die Unterstützung für das Streamen von Audio- und Videodaten bietet.

Sie bietet die Schnittstellen und Methoden zum Arbeiten mit den Streams und deren einzelnen Tracks, Einschränkungen in Bezug auf Datenformate, Erfolgs- und Fehler-Callbacks bei der asynchronen Nutzung der Daten und die Ereignisse, die während des Prozesses ausgelöst werden.

## Konzepte und Verwendung

Die API basiert auf der Manipulation eines [`MediaStream`](/de/docs/Web/API/MediaStream)-Objekts, das einen Fluss von Audio- oder videobezogenen Daten darstellt. Sehen Sie ein Beispiel unter [Den Medienstream erhalten](/de/docs/Web/API/Media_Capture_and_Streams_API/Taking_still_photos#the_startup_function).

Ein `MediaStream` besteht aus null oder mehr [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Objekten, die verschiedene Audio- oder Video-**Tracks** repräsentieren. Jeder `MediaStreamTrack` kann einen oder mehrere **Kanäle** haben. Der Kanal stellt die kleinste Einheit eines Medienstreams dar, wie z.B. ein Audiosignal, das einem bestimmten Lautsprecher zugeordnet ist, etwa _links_ oder _rechts_ in einem Stereo-Audiotrack.

`MediaStream`-Objekte haben einen einzigen **Eingang** und einen einzigen **Ausgang**. Ein durch [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) erzeugtes `MediaStream`-Objekt wird _lokal_ genannt und hat als Eingangsquelle eine der Kameras oder Mikrofone des Benutzers. Ein nicht-lokales `MediaStream` kann ein Medienelement wie {{HTMLElement("video")}} oder {{HTMLElement("audio")}} darstellen, einen über das Netzwerk kommenden Stream, der über die WebRTC-API [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) erhalten wurde, oder einen Stream, der unter Verwendung der [Web Audio API](/de/docs/Web/API/Web_Audio_API) [`MediaStreamAudioDestinationNode`](/de/docs/Web/API/MediaStreamAudioDestinationNode) erstellt wurde.

Der Ausgang des `MediaStream`-Objekts ist mit einem **Verbraucher** verbunden. Dies kann ein Medienelement wie {{HTMLElement("audio")}} oder {{HTMLElement("video")}} sein, die WebRTC-API [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) oder ein [Web Audio API](/de/docs/Web/API/Web_Audio_API) [`MediaStreamAudioSourceNode`](/de/docs/Web/API/MediaStreamAudioSourceNode).

## Schnittstellen

In diesen Referenzartikeln finden Sie die grundlegenden Informationen, die Sie über jede der Schnittstellen der Media Capture and Streams API wissen müssen.

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

Der Artikel [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints) behandelt die Konzepte von **Einschränkungen** und **Fähigkeiten** sowie Medieneinstellungen und enthält einen [Einschränkungs-Übungsbereich](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser), mit dem Sie die Ergebnisse verschiedener Einschränkungssätze testen können, die auf die Audio- und Videotracks der A/V-Eingabegeräte des Computers (wie seine Webcam und sein Mikrofon) angewendet werden.

Der Artikel [Stillfotos mit getUserMedia() aufnehmen](/de/docs/Web/API/Media_Capture_and_Streams_API/Taking_still_photos) zeigt, wie [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) verwendet wird, um auf die Kamera eines Computers oder Mobiltelefons zuzugreifen, das `getUserMedia()` unterstützt, und damit ein Foto aufzunehmen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC](/de/docs/Web/API/WebRTC_API) - die Einführungsseite zur API
- [Stillfotos mit WebRTC aufnehmen](/de/docs/Web/API/Media_Capture_and_Streams_API/Taking_still_photos): Eine Demonstration und Anleitung zur Verwendung von `getUserMedia()`.
