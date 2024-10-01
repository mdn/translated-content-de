---
title: MediaTrackSupportedConstraints
slug: Web/API/MediaTrackSupportedConstraints
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("Media Capture and Streams")}}

Das **`MediaTrackSupportedConstraints`** Dictionary erstellt die Liste der einschränkbaren Eigenschaften, die vom [Benutzeragenten](/de/docs/Glossary/user_agent) oder Browser in seiner Implementierung des [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) Objekts erkannt werden. Ein Objekt, das dem `MediaTrackSupportedConstraints` entspricht, wird von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgegeben.

Aufgrund der Funktionsweise von Schnittstellendefinitionen in WebIDL tritt kein Fehler auf, wenn eine Einschränkung angefordert, aber nicht unterstützt wird. Stattdessen werden die angegebenen Einschränkungen angewendet, wobei nicht erkannte Einschränkungen aus der Anforderung entfernt werden. Dies kann zu verwirrenden und schwer zu debuggen Fehlern führen. Daher sollten Sie `getSupportedConstraints()` verwenden, um diese Informationen abzurufen, bevor Sie versuchen, Einschränkungen festzulegen, wenn Sie den Unterschied zwischen dem stillschweigenden Ignorieren einer Einschränkung und der Annahme einer Einschränkung kennen müssen.

Ein tatsächliches Einschränkungsset wird unter Verwendung eines auf dem [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints) Dictionary basierenden Objekts beschrieben.

Um mehr darüber zu erfahren, wie Einschränkungen funktionieren, sehen Sie sich [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints) an.

## Instanz-Eigenschaften

Eine Kombination – aber nicht unbedingt alle – der folgenden Eigenschaften wird auf dem Objekt existieren.

- [`autoGainControl`](/de/docs/Web/API/MediaTrackSupportedConstraints/autoGainControl)
  - : Ein boolescher Wert, der `true` ist, wenn die [`autoGainControl`](/de/docs/Web/API/MediaTrackConstraints#autogaincontrol) Einschränkung in der aktuellen Umgebung unterstützt wird.
- [`width`](/de/docs/Web/API/MediaTrackSupportedConstraints/width)
  - : Ein boolescher Wert, der `true` ist, wenn die [`width`](/de/docs/Web/API/MediaTrackConstraints#width) Einschränkung in der aktuellen Umgebung unterstützt wird.
- [`height`](/de/docs/Web/API/MediaTrackSupportedConstraints/height)
  - : Ein boolescher Wert, der `true` ist, wenn die [`height`](/de/docs/Web/API/MediaTrackConstraints#height) Einschränkung in der aktuellen Umgebung unterstützt wird.
- [`aspectRatio`](/de/docs/Web/API/MediaTrackSupportedConstraints/aspectRatio)
  - : Ein boolescher Wert, der `true` ist, wenn die [`aspectRatio`](/de/docs/Web/API/MediaTrackConstraints#aspectratio) Einschränkung in der aktuellen Umgebung unterstützt wird.
- [`frameRate`](/de/docs/Web/API/MediaTrackSupportedConstraints/frameRate)
  - : Ein boolescher Wert, der `true` ist, wenn die [`frameRate`](/de/docs/Web/API/MediaTrackConstraints#framerate) Einschränkung in der aktuellen Umgebung unterstützt wird.
- [`facingMode`](/de/docs/Web/API/MediaTrackSupportedConstraints/facingMode)
  - : Ein boolescher Wert, der `true` ist, wenn die [`facingMode`](/de/docs/Web/API/MediaTrackConstraints#facingmode) Einschränkung in der aktuellen Umgebung unterstützt wird.
- [`resizeMode`](/de/docs/Web/API/MediaTrackSupportedConstraints/resizeMode)
  - : Ein boolescher Wert, der `true` ist, wenn die [`resizeMode`](/de/docs/Web/API/MediaTrackConstraints#resizemode) Einschränkung in der aktuellen Umgebung unterstützt wird.
- [`volume`](/de/docs/Web/API/MediaTrackSupportedConstraints/volume) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Ein boolescher Wert, der `true` ist, wenn die [`volume`](/de/docs/Web/API/MediaTrackConstraints#volume) Einschränkung in der aktuellen Umgebung unterstützt wird.
- [`sampleRate`](/de/docs/Web/API/MediaTrackSupportedConstraints/sampleRate)
  - : Ein boolescher Wert, der `true` ist, wenn die [`sampleRate`](/de/docs/Web/API/MediaTrackConstraints#samplerate) Einschränkung in der aktuellen Umgebung unterstützt wird.
- [`sampleSize`](/de/docs/Web/API/MediaTrackSupportedConstraints/sampleSize)
  - : Ein boolescher Wert, der `true` ist, wenn die [`sampleSize`](/de/docs/Web/API/MediaTrackConstraints#samplesize) Einschränkung in der aktuellen Umgebung unterstützt wird.
- [`echoCancellation`](/de/docs/Web/API/MediaTrackSupportedConstraints/echoCancellation)
  - : Ein boolescher Wert, der `true` ist, wenn die [`echoCancellation`](/de/docs/Web/API/MediaTrackConstraints#echocancellation) Einschränkung in der aktuellen Umgebung unterstützt wird.
- [`latency`](/de/docs/Web/API/MediaTrackSupportedConstraints/latency)
  - : Ein boolescher Wert, der `true` ist, wenn die [`latency`](/de/docs/Web/API/MediaTrackConstraints#latency) Einschränkung in der aktuellen Umgebung unterstützt wird.
- [`noiseSuppression`](/de/docs/Web/API/MediaTrackSupportedConstraints/noiseSuppression)
  - : Ein boolescher Wert, der `true` ist, wenn die [`noiseSuppression`](/de/docs/Web/API/MediaTrackConstraints#noisesuppression) Einschränkung in der aktuellen Umgebung unterstützt wird.
- [`channelCount`](/de/docs/Web/API/MediaTrackSupportedConstraints/channelCount)
  - : Ein boolescher Wert, der `true` ist, wenn die [`channelCount`](/de/docs/Web/API/MediaTrackConstraints#channelcount) Einschränkung in der aktuellen Umgebung unterstützt wird.
- [`deviceId`](/de/docs/Web/API/MediaTrackSupportedConstraints/deviceId)
  - : Ein boolescher Wert, der `true` ist, wenn die [`deviceId`](/de/docs/Web/API/MediaTrackConstraints#deviceid) Einschränkung in der aktuellen Umgebung unterstützt wird.
- [`groupId`](/de/docs/Web/API/MediaTrackSupportedConstraints/groupId)
  - : Ein boolescher Wert, der `true` ist, wenn die [`groupId`](/de/docs/Web/API/MediaTrackConstraints#groupid) Einschränkung in der aktuellen Umgebung unterstützt wird.

### Instanz-Eigenschaften spezifisch für geteilte Bildschirmspuren

Für Spuren, die Videoquellen aus den Bildschirm-Inhalten des Benutzers enthalten, können zusätzlich zu den für Videospuren verfügbaren Eigenschaften folgende zusätzliche Eigenschaften enthalten sein.

- [`displaySurface`](/de/docs/Web/API/MediaTrackSupportedConstraints/displaySurface)
  - : Ein boolescher Wert, der `true` ist, wenn die [`displaySurface`](/de/docs/Web/API/MediaTrackConstraints/displaySurface) Einschränkung in der aktuellen Umgebung unterstützt wird.
- [`logicalSurface`](/de/docs/Web/API/MediaTrackSupportedConstraints/logicalSurface)
  - : Ein boolescher Wert, der `true` ist, wenn die [`logicalSurface`](/de/docs/Web/API/MediaTrackConstraints/logicalSurface) Einschränkung in der aktuellen Umgebung unterstützt wird.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- [Screen Capture API](/de/docs/Web/API/Screen_Capture_API)
- [Verwendung der Screen Capture API](/de/docs/Web/API/Screen_Capture_API/Using_Screen_Capture)
- [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)
- [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia)
- [`MediaStreamTrack.getConstraints()`](/de/docs/Web/API/MediaStreamTrack/getConstraints)
- [`MediaStreamTrack.applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints)
- [`MediaStreamTrack.getSettings()`](/de/docs/Web/API/MediaStreamTrack/getSettings)
