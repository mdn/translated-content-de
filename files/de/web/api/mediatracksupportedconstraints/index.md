---
title: MediaTrackSupportedConstraints
slug: Web/API/MediaTrackSupportedConstraints
l10n:
  sourceCommit: 848771d9efdc57ad84d643081cf91e89355c751b
---

{{APIRef("Media Capture and Streams")}}

Das **`MediaTrackSupportedConstraints`** Wörterbuch liefert die Liste der einschränkbaren Eigenschaften, die vom {{Glossary("user_agent", "User-Agent")}} oder Browser in seiner Implementierung des [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Objekts erkannt werden. Ein Objekt, das `MediaTrackSupportedConstraints` entspricht, wird von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgegeben.

Aufgrund der Art und Weise, wie Schnittstellendefinitionen in WebIDL funktionieren, tritt kein Fehler auf, wenn eine Einschränkung angefordert wird, jedoch nicht unterstützt wird. Stattdessen werden die angegebenen Einschränkungen angewendet, wobei alle nicht erkannten Einschränkungen aus der Anfrage entfernt werden. Dies kann zu verwirrenden und schwer zu debuggen Fehlern führen. Stellen Sie daher sicher, dass Sie `getSupportedConstraints()` verwenden, um diese Informationen abzurufen, bevor Sie versuchen, Einschränkungen festzulegen, wenn Sie den Unterschied zwischen dem stillschweigenden Ignorieren einer Einschränkung und dem Akzeptieren einer Einschränkung kennen müssen.

Ein tatsächlicher Einschränkungssatz wird unter Verwendung eines Objekts beschrieben, das auf dem [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Wörterbuch basiert.

Um mehr darüber zu erfahren, wie Einschränkungen funktionieren, sehen Sie sich [Capabilities, constraints, and settings](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints) an.

## Instanz-Eigenschaften

Eine Kombination - aber nicht unbedingt alle - der folgenden Eigenschaften wird auf dem Objekt existieren.

- [`autoGainControl`](/de/docs/Web/API/MediaTrackSupportedConstraints/autoGainControl)
  - : Ein Boolean, dessen Wert `true` ist, wenn die [`autoGainControl`](/de/docs/Web/API/MediaTrackConstraints/autoGainControl)-Einschränkung in der aktuellen Umgebung unterstützt wird.
- [`width`](/de/docs/Web/API/MediaTrackSupportedConstraints/width)
  - : Ein Boolean, dessen Wert `true` ist, wenn die [`width`](/de/docs/Web/API/MediaTrackConstraints/width)-Einschränkung in der aktuellen Umgebung unterstützt wird.
- [`height`](/de/docs/Web/API/MediaTrackSupportedConstraints/height)
  - : Ein Boolean, dessen Wert `true` ist, wenn die [`height`](/de/docs/Web/API/MediaTrackConstraints/height)-Einschränkung in der aktuellen Umgebung unterstützt wird.
- [`aspectRatio`](/de/docs/Web/API/MediaTrackSupportedConstraints/aspectRatio)
  - : Ein Boolean, dessen Wert `true` ist, wenn die [`aspectRatio`](/de/docs/Web/API/MediaTrackConstraints/aspectRatio)-Einschränkung in der aktuellen Umgebung unterstützt wird.
- [`frameRate`](/de/docs/Web/API/MediaTrackSupportedConstraints/frameRate)
  - : Ein Boolean, dessen Wert `true` ist, wenn die [`frameRate`](/de/docs/Web/API/MediaTrackConstraints/frameRate)-Einschränkung in der aktuellen Umgebung unterstützt wird.
- [`facingMode`](/de/docs/Web/API/MediaTrackSupportedConstraints/facingMode)
  - : Ein Boolean, dessen Wert `true` ist, wenn die [`facingMode`](/de/docs/Web/API/MediaTrackConstraints/facingMode)-Einschränkung in der aktuellen Umgebung unterstützt wird.
- [`resizeMode`](/de/docs/Web/API/MediaTrackSupportedConstraints/resizeMode)
  - : Ein Boolean, dessen Wert `true` ist, wenn die [`resizeMode`](/de/docs/Web/API/MediaTrackConstraints/resizeMode)-Einschränkung in der aktuellen Umgebung unterstützt wird.
- [`volume`](/de/docs/Web/API/MediaTrackSupportedConstraints/volume) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Ein Boolean, dessen Wert `true` ist, wenn die [`volume`](/de/docs/Web/API/MediaTrackConstraints/volume)-Einschränkung in der aktuellen Umgebung unterstützt wird.
- [`sampleRate`](/de/docs/Web/API/MediaTrackSupportedConstraints/sampleRate)
  - : Ein Boolean, dessen Wert `true` ist, wenn die [`sampleRate`](/de/docs/Web/API/MediaTrackConstraints/sampleRate)-Einschränkung in der aktuellen Umgebung unterstützt wird.
- [`sampleSize`](/de/docs/Web/API/MediaTrackSupportedConstraints/sampleSize)
  - : Ein Boolean, dessen Wert `true` ist, wenn die [`sampleSize`](/de/docs/Web/API/MediaTrackConstraints/sampleSize)-Einschränkung in der aktuellen Umgebung unterstützt wird.
- [`echoCancellation`](/de/docs/Web/API/MediaTrackSupportedConstraints/echoCancellation)
  - : Ein Boolean, dessen Wert `true` ist, wenn die [`echoCancellation`](/de/docs/Web/API/MediaTrackConstraints/echoCancellation)-Einschränkung in der aktuellen Umgebung unterstützt wird.
- [`latency`](/de/docs/Web/API/MediaTrackSupportedConstraints/latency)
  - : Ein Boolean, dessen Wert `true` ist, wenn die [`latency`](/de/docs/Web/API/MediaTrackConstraints/latency)-Einschränkung in der aktuellen Umgebung unterstützt wird.
- [`noiseSuppression`](/de/docs/Web/API/MediaTrackSupportedConstraints/noiseSuppression)
  - : Ein Boolean, dessen Wert `true` ist, wenn die [`noiseSuppression`](/de/docs/Web/API/MediaTrackConstraints/noiseSuppression)-Einschränkung in der aktuellen Umgebung unterstützt wird.
- [`channelCount`](/de/docs/Web/API/MediaTrackSupportedConstraints/channelCount)
  - : Ein Boolean, dessen Wert `true` ist, wenn die [`channelCount`](/de/docs/Web/API/MediaTrackConstraints/channelCount)-Einschränkung in der aktuellen Umgebung unterstützt wird.
- [`deviceId`](/de/docs/Web/API/MediaTrackSupportedConstraints/deviceId)
  - : Ein Boolean, dessen Wert `true` ist, wenn die [`deviceId`](/de/docs/Web/API/MediaTrackConstraints/deviceId)-Einschränkung in der aktuellen Umgebung unterstützt wird.
- [`groupId`](/de/docs/Web/API/MediaTrackSupportedConstraints/groupId)
  - : Ein Boolean, dessen Wert `true` ist, wenn die [`groupId`](/de/docs/Web/API/MediaTrackConstraints/groupId)-Einschränkung in der aktuellen Umgebung unterstützt wird.

### Instanz-Eigenschaften spezifisch für freigebene Bildschirmspuren

Für Spuren, die Videoquellen von Inhalten des Benutzerbildschirms enthalten, können zusätzlich zu denen, die für Videospuren verfügbar sind, die folgenden zusätzlichen Eigenschaften enthalten sein.

- [`displaySurface`](/de/docs/Web/API/MediaTrackSupportedConstraints/displaySurface)
  - : Ein Boolean, der `true` ist, wenn die [`displaySurface`](/de/docs/Web/API/MediaTrackConstraints/displaySurface)-Einschränkung in der aktuellen Umgebung unterstützt wird.
- [`logicalSurface`](/de/docs/Web/API/MediaTrackSupportedConstraints/logicalSurface)
  - : Ein Boolean, der `true` ist, wenn die [`logicalSurface`](/de/docs/Web/API/MediaTrackConstraints/logicalSurface)-Einschränkung in der aktuellen Umgebung unterstützt wird.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Capabilities, constraints, and settings](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- [Screen Capture API](/de/docs/Web/API/Screen_Capture_API)
- [Verwendung der Screen Capture API](/de/docs/Web/API/Screen_Capture_API/Using_Screen_Capture)
- [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)
- [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia)
- [`MediaStreamTrack.getConstraints()`](/de/docs/Web/API/MediaStreamTrack/getConstraints)
- [`MediaStreamTrack.applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints)
- [`MediaStreamTrack.getSettings()`](/de/docs/Web/API/MediaStreamTrack/getSettings)
