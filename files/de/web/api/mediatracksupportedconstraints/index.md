---
title: MediaTrackSupportedConstraints
slug: Web/API/MediaTrackSupportedConstraints
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("Media Capture and Streams")}}

Das **`MediaTrackSupportedConstraints`** Dictionary definiert die Liste der beschränkbaren Eigenschaften, die vom {{Glossary("user agent")}} oder Browser in seiner Implementierung des {{domxref("MediaStreamTrack")}} Objekts erkannt werden. Ein Objekt, das `MediaTrackSupportedConstraints` entspricht, wird durch {{domxref("MediaDevices.getSupportedConstraints()")}} zurückgegeben.

Aufgrund der Art und Weise, wie Schnittstellendefinitionen in WebIDL funktionieren, tritt kein Fehler auf, wenn eine Einschränkung angefordert wird, aber nicht unterstützt wird. Stattdessen werden die angegebenen Einschränkungen angewendet und alle nicht erkannten Einschränkungen von der Anfrage gestrichen. Dies kann zu verwirrenden und schwer zu diagnostizierenden Fehlern führen, daher sollten Sie `getSupportedConstraints()` verwenden, um diese Informationen abzurufen, bevor Sie Einschränkungen festlegen, wenn Sie den Unterschied zwischen dem stillschweigenden Ignorieren einer Einschränkung und dem Akzeptieren einer Einschränkung wissen müssen.

Ein tatsächliches Einschränkungsset wird unter Verwendung eines Objekts beschrieben, das auf dem {{domxref("MediaTrackConstraints")}} Dictionary basiert.

Um mehr darüber zu erfahren, wie Einschränkungen funktionieren, siehe [Capabilities, constraints, and settings](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints).

## Instanz-Eigenschaften

Es wird eine Kombination, aber nicht unbedingt alle, der folgenden Eigenschaften im Objekt existieren.

- {{domxref("MediaTrackSupportedConstraints.autoGainControl", "autoGainControl")}}
  - : Ein Boolean, dessen Wert `true` ist, wenn die [`autoGainControl`](/de/docs/Web/API/MediaTrackConstraints#autogaincontrol) Einschränkung in der aktuellen Umgebung unterstützt wird.
- {{domxref("MediaTrackSupportedConstraints.width", "width")}}
  - : Ein Boolean, dessen Wert `true` ist, wenn die [`width`](/de/docs/Web/API/MediaTrackConstraints#width) Einschränkung in der aktuellen Umgebung unterstützt wird.
- {{domxref("MediaTrackSupportedConstraints.height", "height")}}
  - : Ein Boolean, dessen Wert `true` ist, wenn die [`height`](/de/docs/Web/API/MediaTrackConstraints#height) Einschränkung in der aktuellen Umgebung unterstützt wird.
- {{domxref("MediaTrackSupportedConstraints.aspectRatio", "aspectRatio")}}
  - : Ein Boolean, dessen Wert `true` ist, wenn die [`aspectRatio`](/de/docs/Web/API/MediaTrackConstraints#aspectratio) Einschränkung in der aktuellen Umgebung unterstützt wird.
- {{domxref("MediaTrackSupportedConstraints.frameRate", "frameRate")}}
  - : Ein Boolean, dessen Wert `true` ist, wenn die [`frameRate`](/de/docs/Web/API/MediaTrackConstraints#framerate) Einschränkung in der aktuellen Umgebung unterstützt wird.
- {{domxref("MediaTrackSupportedConstraints.facingMode", "facingMode")}}
  - : Ein Boolean, dessen Wert `true` ist, wenn die [`facingMode`](/de/docs/Web/API/MediaTrackConstraints#facingmode) Einschränkung in der aktuellen Umgebung unterstützt wird.
- {{domxref("MediaTrackSupportedConstraints.resizeMode", "resizeMode")}}
  - : Ein Boolean, dessen Wert `true` ist, wenn die [`resizeMode`](/de/docs/Web/API/MediaTrackConstraints#resizemode) Einschränkung in der aktuellen Umgebung unterstützt wird.
- {{domxref("MediaTrackSupportedConstraints.volume", "volume")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Ein Boolean, dessen Wert `true` ist, wenn die [`volume`](/de/docs/Web/API/MediaTrackConstraints#volume) Einschränkung in der aktuellen Umgebung unterstützt wird.
- {{domxref("MediaTrackSupportedConstraints.sampleRate", "sampleRate")}}
  - : Ein Boolean, dessen Wert `true` ist, wenn die [`sampleRate`](/de/docs/Web/API/MediaTrackConstraints#samplerate) Einschränkung in der aktuellen Umgebung unterstützt wird.
- {{domxref("MediaTrackSupportedConstraints.sampleSize", "sampleSize")}}
  - : Ein Boolean, dessen Wert `true` ist, wenn die [`sampleSize`](/de/docs/Web/API/MediaTrackConstraints#samplesize) Einschränkung in der aktuellen Umgebung unterstützt wird.
- {{domxref("MediaTrackSupportedConstraints.echoCancellation", "echoCancellation")}}
  - : Ein Boolean, dessen Wert `true` ist, wenn die [`echoCancellation`](/de/docs/Web/API/MediaTrackConstraints#echocancellation) Einschränkung in der aktuellen Umgebung unterstützt wird.
- {{domxref("MediaTrackSupportedConstraints.latency", "latency")}}
  - : Ein Boolean, dessen Wert `true` ist, wenn die [`latency`](/de/docs/Web/API/MediaTrackConstraints#latency) Einschränkung in der aktuellen Umgebung unterstützt wird.
- {{domxref("MediaTrackSupportedConstraints.noiseSuppression", "noiseSuppression")}}
  - : Ein Boolean, dessen Wert `true` ist, wenn die [`noiseSuppression`](/de/docs/Web/API/MediaTrackConstraints#noisesuppression) Einschränkung in der aktuellen Umgebung unterstützt wird.
- {{domxref("MediaTrackSupportedConstraints.channelCount", "channelCount")}}
  - : Ein Boolean, dessen Wert `true` ist, wenn die [`channelCount`](/de/docs/Web/API/MediaTrackConstraints#channelcount) Einschränkung in der aktuellen Umgebung unterstützt wird.
- {{domxref("MediaTrackSupportedConstraints.deviceId", "deviceId")}}
  - : Ein Boolean, dessen Wert `true` ist, wenn die [`deviceId`](/de/docs/Web/API/MediaTrackConstraints#deviceid) Einschränkung in der aktuellen Umgebung unterstützt wird.
- {{domxref("MediaTrackSupportedConstraints.groupId", "groupId")}}
  - : Ein Boolean, dessen Wert `true` ist, wenn die [`groupId`](/de/docs/Web/API/MediaTrackConstraints#groupid) Einschränkung in der aktuellen Umgebung unterstützt wird.

### Instanz-Eigenschaften spezifisch für freigegebene Bildschirmspuren

Für Spuren, die Videoquellen aus den Bildschirm-Inhalten des Benutzers enthalten, können zusätzlich zu den für Videospuren verfügbaren Eigenschaften die folgenden zusätzlichen Eigenschaften enthalten sein.

- {{domxref("MediaTrackSupportedConstraints.displaySurface", "displaySurface")}}
  - : Ein Boolean, der `true` ist, wenn die {{domxref("MediaTrackConstraints.displaySurface", "displaySurface")}} Einschränkung in der aktuellen Umgebung unterstützt wird.
- {{domxref("MediaTrackSupportedConstraints.logicalSurface", "logicalSurface")}}
  - : Ein Boolean, der `true` ist, wenn die {{domxref("MediaTrackConstraints.logicalSurface", "logicalSurface")}} Einschränkung in der aktuellen Umgebung unterstützt wird.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Capabilities, constraints, and settings](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- [Screen Capture API](/de/docs/Web/API/Screen_Capture_API)
- [Using the Screen Capture API](/de/docs/Web/API/Screen_Capture_API/Using_Screen_Capture)
- {{domxref("MediaTrackConstraints")}}
- {{domxref("MediaDevices.getUserMedia()")}}
- {{domxref("MediaStreamTrack.getConstraints()")}}
- {{domxref("MediaStreamTrack.applyConstraints()")}}
- {{domxref("MediaStreamTrack.getSettings()")}}
