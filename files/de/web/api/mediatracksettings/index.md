---
title: MediaTrackSettings
slug: Web/API/MediaTrackSettings
l10n:
  sourceCommit: 2f3821009265f78e5ad9c3149b5fa954c030972f
---

{{APIRef("Media Capture and Streams")}}

Das **`MediaTrackSettings`** Wörterbuch wird verwendet, um die aktuellen konfigurierten Werte für jede Einstellung eines [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) zurückzugeben. Diese Werte werden so genau wie möglich den zuvor mit einem [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints) Objekt beschriebenen Einschränkungen entsprechen und mit [`applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) festgelegt wurden. Sie werden den Standardeinschränkungen für alle Eigenschaften entsprechen, deren Einschränkungen nicht geändert wurden oder deren angepasste Einschränkungen nicht erfüllt werden konnten.

Um mehr darüber zu erfahren, wie Einschränkungen und Einstellungen funktionieren, siehe [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints).

## Instanz-Eigenschaften

Einige oder alle der folgenden Punkte werden im Objekt enthalten sein, entweder weil sie vom Browser nicht unterstützt werden oder weil sie aufgrund des Kontexts nicht verfügbar sind. Zum Beispiel, weil {{Glossary("RTP", "RTP")}} einige dieser Werte während der Verhandlung einer WebRTC-Verbindung nicht bereitstellt, wird ein mit einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) assoziierter Track bestimmte Werte wie [`facingMode`](/de/docs/Web/API/MediaTrackSettings/facingMode) oder [`groupId`](/de/docs/Web/API/MediaTrackSettings/groupId) nicht enthalten.

### Instanz-Eigenschaften aller Medientracks

- [`deviceId`](/de/docs/Web/API/MediaTrackSettings/deviceId)
  - : Ein String, der den aktuellen Wert der [`deviceId`](/de/docs/Web/API/MediaTrackConstraints/deviceId) Eigenschaft angibt. Die Geräte-ID ist ein herkunftseindeutiger String, der die Quelle des Tracks identifiziert; dies ist normalerweise eine [GUID](https://en.wikipedia.org/wiki/Universally_unique_identifier). Dieser Wert ist spezifisch für die Quelle der Track-Daten und kann nicht zur Festlegung von Einschränkungen verwendet werden; er kann jedoch bei der anfänglichen Auswahl von Medien bei einem Aufruf von [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) verwendet werden.
- [`groupId`](/de/docs/Web/API/MediaTrackSettings/groupId)
  - : Ein String, der den aktuellen Wert der [`groupId`](/de/docs/Web/API/MediaTrackConstraints/groupId) Eigenschaft angibt. Die Gruppen-ID ist ein sitzungseindeutiger String, der die Quellgruppe des Tracks identifiziert. Zwei Geräte (wie durch die [`deviceId`](/de/docs/Web/API/MediaTrackSettings/deviceId) identifiziert) gelten als Teil derselben Gruppe, wenn sie vom selben physischen Gerät stammen. Beispielsweise würden die Audioein- und -ausgabegeräte für den Lautsprecher und das Mikrofon, die in ein Telefon eingebaut sind, dieselbe Gruppen-ID teilen, da sie Teil desselben physischen Geräts sind. Das Mikrofon eines Headsets hätte jedoch eine andere ID. Dieser Wert ist spezifisch für die Quelle der Track-Daten und kann nicht zur Festlegung von Einschränkungen verwendet werden; er kann jedoch bei der anfänglichen Auswahl von Medien bei einem Aufruf von [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) verwendet werden.

### Instanz-Eigenschaften von Audiotracks

- [`autoGainControl`](/de/docs/Web/API/MediaTrackSettings/autoGainControl)
  - : Ein Boolean, der den aktuellen Wert der [`autoGainControl`](/de/docs/Web/API/MediaTrackConstraints/autoGainControl) Eigenschaft angibt, die `true` ist, wenn die automatische Verstärkungsregelung aktiviert ist, andernfalls `false`.
- [`channelCount`](/de/docs/Web/API/MediaTrackSettings/channelCount)
  - : Ein Long-Integer-Wert, der den aktuellen Wert der [`channelCount`](/de/docs/Web/API/MediaTrackConstraints/channelCount) Eigenschaft angibt und die Anzahl der Audiokanäle auf dem Track spezifiziert (daher wird angegeben, wie viele Audio-Samples in jedem Audio-Frame existieren). Dies ist 1 für Mono, 2 für Stereo usw.
- [`echoCancellation`](/de/docs/Web/API/MediaTrackSettings/echoCancellation)
  - : Ein Boolean, der den aktuellen Wert der [`echoCancellation`](/de/docs/Web/API/MediaTrackConstraints/echoCancellation) Eigenschaft angibt, der `true` ist, wenn die Echounterdrückung aktiviert ist, andernfalls `false`.
- [`latency`](/de/docs/Web/API/MediaTrackSettings/latency)
  - : Ein Gleitkommawert mit doppelter Genauigkeit, der den aktuellen Wert der [`latency`](/de/docs/Web/API/MediaTrackConstraints/latency) Eigenschaft angibt, welche die Audiolatenz in Sekunden spezifiziert. Latenz ist die Zeit, die zwischen dem Beginn der Verarbeitung des Audios und der Datenverfügbarkeit bis zum nächsten Schritt im Audiowiedergabeprozess vergeht. Dieser Wert ist ein Zielwert; die tatsächliche Latenz kann aus verschiedenen Gründen variieren.
- [`noiseSuppression`](/de/docs/Web/API/MediaTrackSettings/noiseSuppression)
  - : Ein Boolean, der den aktuellen Wert der [`noiseSuppression`](/de/docs/Web/API/MediaTrackConstraints/noiseSuppression) Eigenschaft angibt, die `true` ist, wenn die Geräuschunterdrückung aktiviert ist, andernfalls `false`.
- [`sampleRate`](/de/docs/Web/API/MediaTrackSettings/sampleRate)
  - : Ein Long-Integer-Wert, der den aktuellen Wert der [`sampleRate`](/de/docs/Web/API/MediaTrackConstraints/sampleRate) Eigenschaft angibt und die Abtastrate in Samples pro Sekunde der Audiodaten spezifiziert. Standard-CD-Qualität-Audio hat beispielsweise eine Abtastrate von 41.000 Samples pro Sekunde.
- [`sampleSize`](/de/docs/Web/API/MediaTrackSettings/sampleSize)
  - : Ein Long-Integer-Wert, der den aktuellen Wert der [`sampleSize`](/de/docs/Web/API/MediaTrackConstraints/sampleSize) Eigenschaft angibt und die lineare Größe, in Bits, jedes Audiosamples spezifiziert. CD-Qualität-Audio ist zum Beispiel 16-Bit, also wäre dieser Wert in diesem Fall 16.
- [`suppressLocalAudioPlayback`](/de/docs/Web/API/MediaTrackSettings/suppressLocalAudioPlayback)
  - : Steuert, ob das Audio, das in einem Tab abgespielt wird, weiterhin aus den lokalen Lautsprechern des Benutzers gespielt wird, wenn der Tab aufgenommen wird.
- [`volume`](/de/docs/Web/API/MediaTrackSettings/volume) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Ein Gleitkommawert mit doppelter Genauigkeit, der den aktuellen Wert der [`volume`](/de/docs/Web/API/MediaTrackConstraints/volume) Eigenschaft angibt und den Lautstärkepegel des Tracks spezifiziert. Dieser Wert liegt zwischen 0.0 (stumm) und 1.0 (maximale unterstützte Lautstärke).

### Instanz-Eigenschaften von Videotracks

- [`aspectRatio`](/de/docs/Web/API/MediaTrackSettings/aspectRatio)
  - : Ein Gleitkommawert mit doppelter Genauigkeit, der den aktuellen Wert der [`aspectRatio`](/de/docs/Web/API/MediaTrackConstraints/aspectRatio) Eigenschaft angibt und auf 10 Dezimalstellen genau angegeben ist. Dies ist die Breite des Bildes in Pixeln geteilt durch die Höhe in Pixeln. Häufige Werte sind 1.3333333333 (für das klassische 4:3-Fernseh-"Standard"-{{Glossary("aspect_ratio", "Seitenverhältnis")}}, das auch auf Tablets wie dem iPad von Apple verwendet wird), 1.7777777778 (für das 16:9-Breitbild hochauflösend) und 1.6 (für das 16:10-Seitenverhältnis, das bei Breitbildcomputern und -tablets üblich ist).
- [`facingMode`](/de/docs/Web/API/MediaTrackSettings/facingMode)
  - : Ein String, der den aktuellen Wert der [`facingMode`](/de/docs/Web/API/MediaTrackConstraints/facingMode) Eigenschaft angibt und die Richtung des Kamerablicks spezifiziert. Der Wert wird einer der folgenden sein:
    - `"user"`
      - : Eine Kamera, die auf den Benutzer zeigt (allgemein bekannt als "Selfie-Kamera"), die für Selbstporträts und Videoanrufe verwendet wird.
    - `"environment"`
      - : Eine Kamera, die vom Benutzer weg zeigt (wenn der Benutzer auf den Bildschirm schaut). Dies ist typischerweise die qualitativ hochwertigste Kamera auf dem Gerät, die für allgemeine Fotografie verwendet wird.
    - `"left"`
      - : Eine Kamera, die in die Umgebung zur Linken des Benutzers zeigt.
    - `"right"`
      - : Eine Kamera, die in die Umgebung zur Rechten des Benutzers zeigt.

- [`frameRate`](/de/docs/Web/API/MediaTrackSettings/frameRate)
  - : Ein Gleitkommawert mit doppelter Genauigkeit, der den aktuellen Wert der [`frameRate`](/de/docs/Web/API/MediaTrackConstraints/frameRate) Eigenschaft angibt, welche die Anzahl der Video-Frames pro Sekunde beschreibt, die der Track enthält. Wenn der Wert aus irgendeinem Grund nicht bestimmt werden kann, wird der Wert mit der vertikalen Synchronisierungsrate des Geräts übereinstimmen, auf dem der Benutzeragent läuft.
- [`height`](/de/docs/Web/API/MediaTrackSettings/height)
  - : Ein Long-Integer-Wert, der den aktuellen Wert der [`height`](/de/docs/Web/API/MediaTrackConstraints/height) Eigenschaft angibt und die Höhe der Video-Daten des Tracks in Pixeln spezifiziert.
- [`width`](/de/docs/Web/API/MediaTrackSettings/width)
  - : Ein Long-Integer-Wert, der den aktuellen Wert der [`width`](/de/docs/Web/API/MediaTrackSettings/width) Eigenschaft angibt und die Breite der Video-Daten des Tracks in Pixeln spezifiziert.
- [`resizeMode`](/de/docs/Web/API/MediaTrackSettings/resizeMode)
  - : Ein String, der den aktuellen Wert der [`resizeMode`](/de/docs/Web/API/MediaTrackConstraints/resizeMode) Eigenschaft angibt und den Modus beschreibt, der vom Benutzeragenten verwendet wird, um die Auflösung des Tracks abzuleiten. Der Wert wird einer der folgenden sein:
    - `"none"`
      - : Der Track hat die Auflösung, die von der Kamera, ihrem Treiber oder dem Betriebssystem angeboten wird.
    - `"crop-and-scale"`
      - : Die Auflösung des Tracks könnte das Ergebnis davon sein, dass der Benutzeragent Zuschneiden oder Herunterskalieren von einer höheren Kameraauflösung verwendet.

### Instanz-Eigenschaften von freigegebenen Bildschirm-Tracks

Tracks, die Video enthalten, das von einem Benutzerbildschirm geteilt wird (unabhängig davon, ob die Bildschirmdaten vom gesamten Bildschirm oder einem Teil eines Bildschirms wie einem Fenster oder Tab stammen), werden im Allgemeinen wie Videotracks behandelt, mit der Ausnahme, dass sie auch die folgenden zusätzlichen Einstellungen unterstützen:

- [`cursor`](/de/docs/Web/API/MediaTrackSettings/cursor)
  - : Ein String, der angibt, ob der Mauszeiger im erzeugten Stream enthalten ist und unter welchen Bedingungen. Mögliche Werte sind:
    - `always`
      - : Die Maus ist im Video-Inhalt des {{domxref("MediaStream") immer sichtbar, es sei denn, die Maus hat den Bereich des Inhalts verlassen.
    - `motion`
      - : Der Mauszeiger wird immer im Video aufgenommen, wenn er sich bewegt, und für eine kurze Zeit, nachdem er sich nicht mehr bewegt.
    - `never`
      - : Der Mauszeiger wird niemals im geteilten Video angezeigt.

- [`displaySurface`](/de/docs/Web/API/MediaTrackSettings/displaySurface)
  - : Ein String, der den Typ der Quelle spezifiziert, den der Track enthält; einer von:
    - `browser`
      - : Der Stream enthält die Inhalte eines einzelnen Browser-Tabs, der vom Benutzer ausgewählt wurde.
    - `monitor`
      - : Der Video-Track des Streams enthält den gesamten Inhalt eines oder mehrerer Bildschirme des Benutzers.
    - `window`
      - : Der Stream enthält ein einzelnes Fenster, das vom Benutzer zur Freigabe ausgewählt wurde.

- [`logicalSurface`](/de/docs/Web/API/MediaTrackSettings/logicalSurface)
  - : Ein Boolean-Wert, der, wenn `true`, anzeigt, dass das im Videotrack des Streams enthaltene Video einen Hintergrund-Rendering-Kontext enthält, anstatt eines für den Benutzer sichtbaren. Dies ist `false`, wenn das aufgenommene Video von einer im Vordergrund befindlichen (für den Benutzer sichtbaren) Quelle stammt.

- [`screenPixelRatio`](/de/docs/Web/API/MediaTrackSettings/screenPixelRatio)
  - : Eine Zahl, die das Verhältnis der physischen Größe eines Pixels auf der aufgenommenen Bildschirmoberfläche (angezeigt in ihrer physikalischen Auflösung) zur logischen Größe eines CSS-Pixels auf dem aufnehmenden Bildschirm (angezeigt in ihrer logischen Auflösung) darstellt. Es kann nicht als Einschränkung oder Fähigkeit verwendet werden.

## Spezifikationen

{{Specifications)}}

## Siehe auch

- [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia)
- [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia)
- [`MediaStreamTrack.getConstraints()`](/de/docs/Web/API/MediaStreamTrack/getConstraints)
- [`MediaStreamTrack.applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints)
- [`MediaStreamTrack.getSettings()`](/de/docs/Web/API/MediaStreamTrack/getSettings)
