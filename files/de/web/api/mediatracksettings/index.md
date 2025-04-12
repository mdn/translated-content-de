---
title: MediaTrackSettings
slug: Web/API/MediaTrackSettings
l10n:
  sourceCommit: b2c8dcdae36907a87d1d1b9393ca4a35ebc765d6
---

{{APIRef("Media Capture and Streams")}}

Das **`MediaTrackSettings`**-Wörterbuch wird verwendet, um die aktuell konfigurierten Werte für jede der Einstellungen eines [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) zurückzugeben. Diese Werte entsprechen so genau wie möglich den zuvor beschriebenen Einschränkungen, die mit einem [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Objekt festgelegt und mit [`applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) angewendet wurden, und entsprechen den Standardeinschränkungen für alle Eigenschaften, deren Einschränkungen nicht geändert wurden oder deren angepasste Einschränkungen nicht erfüllt werden konnten.

Um mehr darüber zu erfahren, wie Einschränkungen und Einstellungen funktionieren, lesen Sie [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints).

## Instanz-Eigenschaften

Einige oder alle der folgenden Eigenschaften können im Objekt enthalten sein, entweder weil sie von dem Browser nicht unterstützt werden oder weil sie aufgrund des Kontexts nicht verfügbar sind. Zum Beispiel, da {{Glossary("RTP", "RTP")}} einige dieser Werte während der Aushandlung einer WebRTC-Verbindung nicht bereitstellt, wird ein Track, der mit einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) assoziiert ist, bestimmte Werte wie [`facingMode`](/de/docs/Web/API/MediaTrackSettings/facingMode) oder [`groupId`](/de/docs/Web/API/MediaTrackSettings/groupId) nicht enthalten.

### Instanz-Eigenschaften aller Medientracks

- [`deviceId`](/de/docs/Web/API/MediaTrackSettings/deviceId)
  - : Ein String, der den aktuellen Wert der [`deviceId`](/de/docs/Web/API/MediaTrackConstraints/deviceId)-Eigenschaft angibt. Die Geräte-ID ist ein ursprungsunabhängiger String, der die Quelle des Tracks identifiziert; dies ist normalerweise eine [GUID](https://en.wikipedia.org/wiki/Universally_unique_identifier). Dieser Wert ist spezifisch für die Quelle der Track-Daten und kann nicht für die Festlegung von Einschränkungen verwendet werden; er kann jedoch verwendet werden, um Medien beim Aufrufen von [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) initial auszuwählen.
- [`groupId`](/de/docs/Web/API/MediaTrackSettings/groupId)
  - : Ein String, der den aktuellen Wert der [`groupId`](/de/docs/Web/API/MediaTrackConstraints/groupId)-Eigenschaft angibt. Die Gruppen-ID ist ein für die Browsing-Sitzung eindeutiger String, der die Quellgruppe des Tracks identifiziert. Zwei Geräte (identifiziert durch die [`deviceId`](/de/docs/Web/API/MediaTrackSettings/deviceId)) werden als Teil derselben Gruppe betrachtet, wenn sie vom gleichen physischen Gerät stammen. Beispielsweise würden die Audioeingabe- und -ausgabegeräte für den Lautsprecher und das Mikrofon, die in ein Telefon eingebaut sind, dieselbe Gruppen-ID teilen, da sie Teil desselben physischen Geräts sind. Das Mikrofon an einem Headset hätte jedoch eine andere ID. Dieser Wert ist spezifisch für die Quelle der Track-Daten und kann nicht für die Festlegung von Einschränkungen verwendet werden; er kann jedoch verwendet werden, um Medien beim Aufrufen von [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) initial auszuwählen.

### Instanz-Eigenschaften von Audiotracks

- [`autoGainControl`](/de/docs/Web/API/MediaTrackSettings/autoGainControl)
  - : Ein Boolean-Wert, der den aktuellen Wert der [`autoGainControl`](/de/docs/Web/API/MediaTrackConstraints/autoGainControl)-Eigenschaft angibt, der `true` ist, wenn die automatische Verstärkungsregelung aktiviert ist, und `false`, wenn nicht.
- [`channelCount`](/de/docs/Web/API/MediaTrackSettings/channelCount)
  - : Ein Long-Integer-Wert, der den aktuellen Wert der [`channelCount`](/de/docs/Web/API/MediaTrackConstraints/channelCount)-Eigenschaft angibt, die die Anzahl an Audiokanälen im Track angibt (und somit wie viele Audioproben in jedem Audio-Frame existieren). Dies ist 1 für Mono, 2 für Stereo und so weiter.
- [`echoCancellation`](/de/docs/Web/API/MediaTrackSettings/echoCancellation)
  - : Ein Boolean-Wert, der den aktuellen Wert der [`echoCancellation`](/de/docs/Web/API/MediaTrackConstraints/echoCancellation)-Eigenschaft angibt, der `true` ist, wenn die Echounterdrückung aktiviert ist, sonst `false`.
- [`latency`](/de/docs/Web/API/MediaTrackSettings/latency)
  - : Ein Double-Precision-Fließkommawert, der den aktuellen Wert der [`latency`](/de/docs/Web/API/MediaTrackConstraints/latency)-Eigenschaft angibt, die die Audiolatenz in Sekunden spezifiziert. Latenz ist die Zeitspanne, die zwischen dem Beginn der Verarbeitung des Audios und dem Zeitpunkt, an dem die Daten für den nächsten Schritt im Audio-Nutzungsprozess verfügbar sind, vergeht. Dieser Wert ist ein Zielwert; die tatsächliche Latenz kann aus verschiedenen Gründen in gewissem Umfang variieren.
- [`noiseSuppression`](/de/docs/Web/API/MediaTrackSettings/noiseSuppression)
  - : Ein Boolean-Wert, der den aktuellen Wert der [`noiseSuppression`](/de/docs/Web/API/MediaTrackConstraints/noiseSuppression)-Eigenschaft angibt, der `true` ist, wenn die Rauschunterdrückung aktiviert ist, und `false`, wenn nicht.
- [`sampleRate`](/de/docs/Web/API/MediaTrackSettings/sampleRate)
  - : Ein Long-Integer-Wert, der den aktuellen Wert der [`sampleRate`](/de/docs/Web/API/MediaTrackConstraints/sampleRate)-Eigenschaft angibt, die die Samplerate in Samples pro Sekunde der Audiodaten spezifiziert. Standardmäßige CD-Qualität zum Beispiel hat eine Samplerate von 41.000 Samples pro Sekunde.
- [`sampleSize`](/de/docs/Web/API/MediaTrackSettings/sampleSize)
  - : Ein Long-Integer-Wert, der den aktuellen Wert der [`sampleSize`](/de/docs/Web/API/MediaTrackConstraints/sampleSize)-Eigenschaft angibt, die die lineare Größe in Bits jedes Audiosamples spezifiziert. CD-Qualität zum Beispiel ist 16-Bit, sodass dieser Wert in diesem Fall 16 beträgt.
- [`suppressLocalAudioPlayback`](/de/docs/Web/API/MediaTrackSettings/suppressLocalAudioPlayback)
  - : Steuert, ob das Audio, das in einem Tab abgespielt wird, weiterhin über die lokalen Lautsprecher eines Benutzers wiedergegeben wird, wenn der Tab aufgezeichnet wird.
- [`volume`](/de/docs/Web/API/MediaTrackSettings/volume) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Ein Double-Precision-Fließkommawert, der den aktuellen Wert der [`volume`](/de/docs/Web/API/MediaTrackConstraints/volume)-Eigenschaft angibt, die die Lautstärke des Tracks spezifiziert. Dieser Wert liegt zwischen 0.0 (stumm) und 1.0 (maximale unterstützte Lautstärke).

### Instanz-Eigenschaften von Videotracks

- [`aspectRatio`](/de/docs/Web/API/MediaTrackSettings/aspectRatio)
  - : Ein Double-Precision-Fließkommawert, der den aktuellen Wert der [`aspectRatio`](/de/docs/Web/API/MediaTrackConstraints/aspectRatio)-Eigenschaft angibt, exakt auf 10 Dezimalstellen genau. Dies ist die Breite des Bildes in Pixeln, geteilt durch seine Höhe in Pixeln. Übliche Werte sind 1.3333333333 (für das klassische 4:3 "Standard"-{{Glossary("aspect_ratio", "Bildformat")}} für Fernseher, auch auf Tablets wie Apples iPad verwendet), 1.7777777778 (für das 16:9-HD-Widescreen-Bildformat) und 1.6 (für das 16:10-Bildformat, das bei Breitbild-Computern und -Tablets häufig ist).
- [`facingMode`](/de/docs/Web/API/MediaTrackSettings/facingMode)

  - : Ein String, der den aktuellen Wert der [`facingMode`](/de/docs/Web/API/MediaTrackConstraints/facingMode)-Eigenschaft angibt, die die Richtung angibt, in die die Kamera zeigt. Der Wert wird einer der folgenden sein:

    - `"user"`
      - : Eine Kamera, die auf den Benutzer zeigt (allgemeinhin bekannt als "Selfie-Cam"), verwendet für Selbstporträts und Videoanrufe.
    - `"environment"`
      - : Eine Kamera, die von dem Benutzer weg zeigt (wenn der Benutzer auf den Bildschirm schaut). Dies ist typischerweise die qualitativ hochwertigste Kamera auf dem Gerät, die für allgemeine Fotografie verwendet wird.
    - `"left"`
      - : Eine Kamera, die zur Umgebung zur linken des Benutzers zeigt.
    - `"right"`
      - : Eine Kamera, die zur Umgebung zur rechten des Benutzers zeigt.

- [`frameRate`](/de/docs/Web/API/MediaTrackSettings/frameRate)
  - : Ein Double-Precision-Fließkommawert, der den aktuellen Wert der [`frameRate`](/de/docs/Web/API/MediaTrackConstraints/frameRate)-Eigenschaft angibt, die angibt, wie viele Videoframes pro Sekunde der Track enthält. Wenn der Wert aus irgendeinem Grund nicht bestimmt werden kann, wird der Wert der vertikalen Synchronisationsrate des Geräts entsprechen, auf dem der Benutzer-Agent läuft.
- [`height`](/de/docs/Web/API/MediaTrackSettings/height)
  - : Ein Long-Integer-Wert, der den aktuellen Wert der [`height`](/de/docs/Web/API/MediaTrackConstraints/height)-Eigenschaft angibt, die die Höhe der Videodaten des Tracks in Pixeln spezifiziert.
- [`width`](/de/docs/Web/API/MediaTrackSettings/width)
  - : Ein Long-Integer-Wert, der den aktuellen Wert der [`width`](/de/docs/Web/API/MediaTrackSettings/width)-Eigenschaft angibt, die die Breite der Videodaten des Tracks in Pixeln spezifiziert.
- [`resizeMode`](/de/docs/Web/API/MediaTrackSettings/resizeMode)

  - : Ein String, der den aktuellen Wert der [`resizeMode`](/de/docs/Web/API/MediaTrackConstraints/resizeMode)-Eigenschaft angibt, die den Modus spezifiziert, den der Benutzer-Agent verwendet, um die Auflösung des Tracks abzuleiten. Der Wert wird einer der folgenden sein:

    - `"none"`
      - : Der Track hat die Auflösung, die von der Kamera, ihrem Treiber oder dem Betriebssystem angeboten wird.
    - `"crop-and-scale"`
      - : Die Auflösung des Tracks kann das Ergebnis davon sein, dass der Benutzer-Agent das Bild von einer höheren Kameraauflösung stutzt oder verkleinert.

### Instanz-Eigenschaften von geteilten Bildschirmtracks

Tracks, die Video von einem Bildschirm eines Benutzers teilen (unabhängig davon, ob die Bildschirminformationen vom gesamten Bildschirm oder einem Teil eines Bildschirms wie einem Fenster oder Tab stammen), werden im Allgemeinen wie Videotracks behandelt, mit der Ausnahme, dass sie auch die folgenden zusätzlichen Einstellungen unterstützen:

- [`cursor`](/de/docs/Web/API/MediaTrackSettings/cursor)

  - : Ein String, der angibt, ob der Mauszeiger im erzeugten Stream enthalten ist und unter welchen Bedingungen. Mögliche Werte sind:

    - `always`
      - : Die Maus ist im Videoinhalt des {{domxref("MediaStream") immer sichtbar, es sei denn, die Maus hat sich außerhalb des Inhaltsbereichs bewegt.
    - `motion`
      - : Der Mauszeiger wird im Video immer dann angezeigt, wenn er sich bewegt, und für kurze Zeit nachdem er aufgehört hat, sich zu bewegen.
    - `never`
      - : Der Mauszeiger wird niemals im geteilten Video enthalten sein.

- [`displaySurface`](/de/docs/Web/API/MediaTrackSettings/displaySurface)

  - : Ein String, der den Typ der Quelle, den der Track enthält, spezifiziert; einer von:

    - `browser`
      - : Der Stream enthält den Inhalt eines einzelnen vom Benutzer ausgewählten Browser-Tabs.
    - `monitor`
      - : Der Videotrack des Streams enthält den gesamten Inhalt eines oder mehrerer Bildschirme des Benutzers.
    - `window`
      - : Der Stream enthält ein einzelnes Fenster, das vom Benutzer zum Teilen ausgewählt wurde.

- [`logicalSurface`](/de/docs/Web/API/MediaTrackSettings/logicalSurface)
  - : Ein Boolean-Wert, der, wenn `true`, angibt, dass das in dem Videotrack des Streams enthaltene Video einen Hintergrundwiederzugeben-Kontext enthält, anstatt einem benutzer-sichtbaren. Dies ist `false`, wenn das aufgenommene Video von einer Vordergrund- (benutzer-sichtbaren) Quelle stammt.

## Spezifikationen

{{Specifications)}}

## Siehe auch

- [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia)
- [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia)
- [`MediaStreamTrack.getConstraints()`](/de/docs/Web/API/MediaStreamTrack/getConstraints)
- [`MediaStreamTrack.applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints)
- [`MediaStreamTrack.getSettings()`](/de/docs/Web/API/MediaStreamTrack/getSettings)
