---
title: Media Capture and Streams API (Media Stream)
slug: Web/API/Media_Capture_and_Streams_API
l10n:
  sourceCommit: fd56a549d24a8002df09735ee8319ce1a721c233
---

{{DefaultAPISidebar("Media Capture and Streams")}}

Die **Media-Capture- und -Streams-API**, oft als **Media Streams API** oder **MediaStream API** bezeichnet, ist eine API im Zusammenhang mit [WebRTC](/de/docs/Web/API/WebRTC_API), die Unterstützung für das Streaming von Audio- und Videodaten bietet.

Sie bietet die Schnittstellen und Methoden zum Arbeiten mit Streams und deren einzelnen Tracks, die Einschränkungen im Zusammenhang mit Datenformaten, die Erfolgs- und Fehlerrückrufe bei der asynchronen Nutzung der Daten sowie die Ereignisse, die während des Prozesses ausgelöst werden.

## Konzepte und Nutzung

Die API basiert auf der Manipulation eines [`MediaStream`](/de/docs/Web/API/MediaStream)-Objekts, das einen Fluss von Audio- oder videobezogenen Daten darstellt. Siehe ein Beispiel in [Erhalte den Medien-Stream](/de/docs/Web/API/Media_Capture_and_Streams_API/Taking_still_photos#demo).

Ein `MediaStream` besteht aus null oder mehr [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Objekten, die verschiedene Audio- oder Videotracks **repräsentieren**. Jeder `MediaStreamTrack` kann über einen oder mehrere **Channels** verfügen. Der Channel stellt die kleinste Einheit eines Medien-Streams dar, wie z.B. ein Audiosignal, das mit einem bestimmten Lautsprecher verbunden ist, wie _links_ oder _rechts_ in einem Stereo-Audiotrack.

`MediaStream`-Objekte haben einen einzelnen **Eingang** und einen einzelnen **Ausgang**. Ein von [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) generiertes `MediaStream`-Objekt wird als _lokal_ bezeichnet und hat als Quelleneingang eine der Kameras oder Mikrofone des Benutzers. Ein nicht lokales `MediaStream` kann ein Medien-Element darstellen, wie z.B. {{HTMLElement("video")}} oder {{HTMLElement("audio")}}, einen über das Netzwerk stammenden Stream, der über die WebRTC-API [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) erhalten wird, oder einen Stream, der mit der [Web Audio API](/de/docs/Web/API/Web_Audio_API) [`MediaStreamAudioDestinationNode`](/de/docs/Web/API/MediaStreamAudioDestinationNode) erstellt wurde.

Der Ausgang des `MediaStream`-Objekts ist mit einem **Konsumenten** verbunden. Es kann sich um ein Medien-Element handeln, wie {{HTMLElement("audio")}} oder {{HTMLElement("video")}}, die WebRTC-API [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) oder eine [Web Audio API](/de/docs/Web/API/Web_Audio_API) [`MediaStreamAudioSourceNode`](/de/docs/Web/API/MediaStreamAudioSourceNode).

## Schnittstellen

In diesen Referenzartikeln finden Sie die grundlegenden Informationen, die Sie über jede der Schnittstellen der Media-Capture- und -Streams-API wissen müssen.

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

Der Artikel [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints) diskutiert die Konzepte von **Einschränkungen** und **Fähigkeiten** sowie Medieneinstellungen und beinhaltet einen [Constraint Exerciser](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser), mit dem Sie die Ergebnisse verschiedener Einschränkungssets ausprobieren können, die auf die Audio- und Videotracks der A/V-Eingabegeräte des Computers angewendet werden (wie die Webcam und das Mikrofon).

Der Artikel [Fotos mit getUserMedia() aufnehmen](/de/docs/Web/API/Media_Capture_and_Streams_API/Taking_still_photos) zeigt, wie Sie [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) verwenden, um auf die Kamera eines Computers oder Mobiltelefons mit `getUserMedia()`-Unterstützung zuzugreifen und ein Foto damit aufzunehmen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC](/de/docs/Web/API/WebRTC_API) - die Einführungsseite der API
- [Fotos mit WebRTC aufnehmen](/de/docs/Web/API/Media_Capture_and_Streams_API/Taking_still_photos): eine Demonstration und Anleitung zur Verwendung von `getUserMedia()`.
