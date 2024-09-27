---
title: MediaTrackSettings
slug: Web/API/MediaTrackSettings
l10n:
  sourceCommit: c9e9f9f4faf2e8a5985e5834d9424557341f33c9
---

{{APIRef("Media Capture and Streams")}}

Das **`MediaTrackSettings`** Wörterbuch wird verwendet, um die aktuellen Werte zurückzugeben, die für die Einstellungen eines jeden [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) konfiguriert sind. Diese Werte werden so nah wie möglich an den zuvor beschriebenen Einschränkungen in einem [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Objekt und mit [`applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) festgelegt gehalten. Standardmäßige Einschränkungen gelten für alle Eigenschaften, deren Einschränkungen nicht geändert wurden oder deren benutzerdefinierte Einschränkungen nicht erfüllt werden konnten.

Um mehr darüber zu erfahren, wie Einschränkungen und Einstellungen funktionieren, sehen Sie sich [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints) an.

## Instanz-Eigenschaften

Einige oder alle der folgenden Eigenschaften werden in dem Objekt enthalten sein, entweder weil es vom Browser nicht unterstützt wird oder weil es aufgrund des Kontexts nicht verfügbar ist. Zum Beispiel, weil [RTP](/de/docs/Glossary/RTP) einige dieser Werte während der Verhandlung einer WebRTC-Verbindung nicht bereitstellt, wird ein Track, der mit einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) assoziiert ist, bestimmte Werte, wie [`facingMode`](/de/docs/Web/API/MediaTrackSettings/facingMode) oder [`groupId`](/de/docs/Web/API/MediaTrackSettings/groupId), nicht enthalten.

### Instanz-Eigenschaften aller Medienspuren

- [`deviceId`](/de/docs/Web/API/MediaTrackSettings/deviceId)
  - : Ein Zeichenfolgenwert, der den aktuellen Wert der [`deviceId`](/de/docs/Web/API/MediaTrackConstraints/deviceId)-Eigenschaft angibt. Die Geräte-ID ist eine ursprungs-eindeutige Zeichenfolge, die die Quelle der Spur identifiziert; dies ist üblicherweise eine [GUID](https://en.wikipedia.org/wiki/Universally_unique_identifier). Dieser Wert ist spezifisch für die Quelle der Spurdaten und kann nicht zum Festlegen von Einschränkungen verwendet werden; jedoch kann er für die anfängliche Auswahl von Medien bei der Aufruf von [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) verwendet werden.
- [`groupId`](/de/docs/Web/API/MediaTrackSettings/groupId)
  - : Eine Zeichenfolge, die den aktuellen Wert der [`groupId`](/de/docs/Web/API/MediaTrackConstraints/groupId)-Eigenschaft angibt. Die Gruppen-ID ist eine für die Browsing-Session eindeutige Zeichenfolge, die die Quellgruppe der Spur identifiziert. Zwei Geräte (identifiziert durch die [`deviceId`](/de/docs/Web/API/MediaTrackSettings/deviceId)) werden als Teil derselben Gruppe betrachtet, wenn sie vom selben physischen Gerät stammen. Beispielsweise teilen sich die Audioeingangs- und -ausgangsgeräte für den Lautsprecher und das Mikrofon, die in ein Telefon integriert sind, dieselbe Gruppen-ID, da sie Teil desselben physischen Geräts sind. Das Mikrofon eines Headsets hätte jedoch eine andere ID. Dieser Wert ist spezifisch für die Quelle der Spurdaten und kann nicht zum Festlegen von Einschränkungen verwendet werden; jedoch kann er für die anfängliche Auswahl von Medien bei der Aufruf von [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) verwendet werden.

### Instanz-Eigenschaften von Audiospuren

- [`autoGainControl`](/de/docs/Web/API/MediaTrackSettings/autoGainControl)
  - : Ein Boolean-Wert, der den aktuellen Wert der [`autoGainControl`](/de/docs/Web/API/MediaTrackConstraints/autoGainControl)-Eigenschaft angibt, der `true` ist, wenn die automatische Verstärkungsregelung aktiviert ist, und `false`, wenn nicht.
- [`channelCount`](/de/docs/Web/API/MediaTrackSettings/channelCount)
  - : Ein langer Ganzzahlenwert, der den aktuellen Wert der [`channelCount`](/de/docs/Web/API/MediaTrackConstraints/channelCount)-Eigenschaft angibt, die die Anzahl der auf der Spur vorhandenen Audiokanäle spezifiziert (daher anzeigt, wie viele Audio-Samples in jedem Audio-Frame existieren). Dies ist 1 für Mono, 2 für Stereo und so weiter.
- [`echoCancellation`](/de/docs/Web/API/MediaTrackSettings/echoCancellation)
  - : Ein Boolean-Wert, der den aktuellen Wert der [`echoCancellation`](/de/docs/Web/API/MediaTrackConstraints/echoCancellation)-Eigenschaft angibt, und `true` ist, wenn die Echo-Unterdrückung aktiviert ist, ansonsten `false`.
- [`latency`](/de/docs/Web/API/MediaTrackSettings/latency)
  - : Ein doppelt genauer Gleitkommawert, der den aktuellen Wert der [`latency`](/de/docs/Web/API/MediaTrackConstraints/latency)-Eigenschaft angibt, welche die Audio-Latenz in Sekunden spezifiziert. Die Latenz ist die Zeitspanne, die zwischen dem Start der Audioverarbeitung und dem Zeitpunkt, zu dem die Daten für den nächsten Schritt im Audioutilizationsprozess verfügbar sind, vergeht. Dieser Wert ist ein Zielwert; die tatsächliche Latenz kann aus verschiedenen Gründen in gewissem Umfang variieren.
- [`noiseSuppression`](/de/docs/Web/API/MediaTrackSettings/noiseSuppression)
  - : Ein Boolean-Wert, der den aktuellen Wert der [`noiseSuppression`](/de/docs/Web/API/MediaTrackConstraints/noiseSuppression)-Eigenschaft angibt, der `true` ist, wenn die Geräuschunterdrückung aktiviert ist, und `false`, wenn nicht.
- [`sampleRate`](/de/docs/Web/API/MediaTrackSettings/sampleRate)
  - : Ein langer Ganzzahlenwert, der den aktuellen Wert der [`sampleRate`](/de/docs/Web/API/MediaTrackConstraints/sampleRate)-Eigenschaft angibt, die Abtastrate in Abtastungen pro Sekunde der Audiodaten spezifizierend. Standardmäßig CD-Qualität Audio hat beispielsweise eine Abtastrate von 41.000 Abtastungen pro Sekunde.
- [`sampleSize`](/de/docs/Web/API/MediaTrackSettings/sampleSize)
  - : Ein langer Ganzzahlenwert, der den aktuellen Wert der [`sampleSize`](/de/docs/Web/API/MediaTrackConstraints/sampleSize)-Eigenschaft angibt, die die lineare Größe in Bits jedes Audiosamples spezifiziert. CD-Qualität Audio ist beispielsweise 16-Bit, sodass dieser Wert in diesem Fall 16 wäre.
- [`volume`](/de/docs/Web/API/MediaTrackSettings/volume) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Ein doppelt genauer Gleitkommawert, der den aktuellen Wert der [`volume`](/de/docs/Web/API/MediaTrackConstraints/volume)-Eigenschaft angibt, die die Lautstärke der Spur spezifiziert. Dieser Wert liegt zwischen 0.0 (still) und 1.0 (maximal unterstützte Lautstärke).

### Instanz-Eigenschaften von Videospuren

- [`aspectRatio`](/de/docs/Web/API/MediaTrackSettings/aspectRatio)
  - : Ein doppelt genauer Gleitkommawert, der den aktuellen Wert der [`aspectRatio`](/de/docs/Web/API/MediaTrackConstraints/aspectRatio)-Eigenschaft angibt, auf 10 Dezimalstellen genau spezifiziert. Dies ist die Breite des Bildes in Pixeln geteilt durch seine Höhe in Pixeln. Häufige Werte sind 1.3333333333 (für das klassische Fernseh-4:3-Standard[-Seitenverhältnis](/de/docs/Glossary/aspect_ratio), auch verwendet für Tablets wie das iPad von Apple), 1.7777777778 (für das 16:9-HD-Breitbild-Seitenverhältnis) und 1.6 (für das 16:10-Seitenverhältnis, das häufig bei Breitbildcomputern und -tablets vorkommt).
- [`facingMode`](/de/docs/Web/API/MediaTrackSettings/facingMode)

  - : Eine Zeichenfolge, die den aktuellen Wert der [`facingMode`](/de/docs/Web/API/MediaTrackConstraints/facingMode)-Eigenschaft angibt und die Richtung spezifiziert, in die die Kamera gerichtet ist. Der Wert wird einer der folgenden sein:

    - `"user"`
      - : Eine Kamera, die auf den Benutzer gerichtet ist (landläufig bekannt als "Selfie-Kamera"), verwendet für Selbstportraits und Videoanrufe.
    - `"environment"`
      - : Eine Kamera, die weg vom Benutzer gerichtet ist (wenn der Benutzer auf den Bildschirm schaut). Dies ist typischerweise die hochwertigste Kamera auf dem Gerät, die für allgemeine Fotografie verwendet wird.
    - `"left"`
      - : Eine Kamera, die in die Richtung der Umgebung zur linken Seite des Benutzers gerichtet ist.
    - `"right"`
      - : Eine Kamera, die in die Richtung der Umgebung zur rechten Seite des Benutzers gerichtet ist.

- [`frameRate`](/de/docs/Web/API/MediaTrackSettings/frameRate)
  - : Ein doppelt genauer Gleitkommawert, der den aktuellen Wert der [`frameRate`](/de/docs/Web/API/MediaTrackConstraints/frameRate)-Eigenschaft angibt und die Anzahl der Videobilder pro Sekunde spezifiziert, die die Spur enthält. Wenn der Wert aus irgendeinem Grund nicht bestimmt werden kann, entspricht der Wert der vertikalen Synchronisationsrate des Geräts, auf dem der Benutzeragent ausgeführt wird.
- [`height`](/de/docs/Web/API/MediaTrackSettings/height)
  - : Ein langer Ganzzahlenwert, der den aktuellen Wert der [`height`](/de/docs/Web/API/MediaTrackConstraints/height)-Eigenschaft angibt, die die Höhe der Videodaten der Spur in Pixeln spezifiziert.
- [`width`](/de/docs/Web/API/MediaTrackSettings/width)
  - : Ein langer Ganzzahlenwert, der den aktuellen Wert der [`width`](/de/docs/Web/API/MediaTrackSettings/width)-Eigenschaft angibt, die die Breite der Videodaten der Spur in Pixeln spezifiziert.
- [`resizeMode`](/de/docs/Web/API/MediaTrackSettings/resizeMode)

  - : Eine Zeichenfolge, die den aktuellen Wert der [`resizeMode`](/de/docs/Web/API/MediaTrackConstraints/resizeMode)-Eigenschaft angibt und den Modus spezifiziert, der von dem Benutzeragenten verwendet wird, um die Auflösung der Spur abzuleiten. Der Wert wird einer der folgenden sein:

    - `"none"`
      - : Die Spur hat die von der Kamera, ihrem Treiber oder vom Betriebssystem bereitgestellte Auflösung.
    - `"crop-and-scale"`
      - : Die Auflösung der Spur könnte das Ergebnis der Nutzung von Zuschneiden oder Herunterskalierung von einer höheren Kameraauflösung durch den Benutzeragenten sein.

### Instanz-Eigenschaften von geteilten Bildschirmspuren

Spuren, die Video enthalten, das von einem Bildschirm des Benutzers geteilt wird (unabhängig davon, ob die Bildschirmdaten vom gesamten Bildschirm oder einem Teil eines Bildschirms, wie einem Fenster oder Tab, stammen), werden im Allgemeinen wie Videospuren behandelt, mit der Ausnahme, dass sie auch die folgenden zusätzlichen Einstellungen unterstützen:

- [`cursor`](/de/docs/Web/API/MediaTrackSettings/cursor)

  - : Eine Zeichenfolge, die angibt, ob der Mauszeiger im generierten Stream enthalten ist und unter welchen Bedingungen. Mögliche Werte sind:

    - `always`
      - : Die Maus ist immer im Videoinhalt des {domxref("MediaStream"), es sei denn, die Maus hat sich außerhalb des Inhaltsbereiches bewegt.
    - `motion`
      - : Der Mauszeiger ist immer im Video enthalten, wenn er sich bewegt, und für eine kurze Zeit nachdem er sich nicht mehr bewegt.
    - `never`
      - : Der Mauszeiger ist nie im geteilten Video enthalten.

- [`displaySurface`](/de/docs/Web/API/MediaTrackSettings/displaySurface)

  - : Eine Zeichenfolge, die den Typ der Quelle, die die Spur enthält, spezifiziert; eine der folgenden:

    - `application`
      - : Der Stream enthält alle Fenster der vom Benutzer gewählten Anwendung, die in die eine Videospur gerendert werden.
    - `browser`
      - : Der Stream enthält die Inhalte eines einzelnen Browser-Tabs, der vom Benutzer ausgewählt wurde.
    - `monitor`
      - : Die Video-Spur des Streams enthält den gesamten Inhalt eines oder mehrerer Bildschirme des Benutzers.
    - `window`
      - : Der Stream enthält ein einzelnes vom Benutzer zum Teilen ausgewähltes Fenster.

- [`logicalSurface`](/de/docs/Web/API/MediaTrackSettings/logicalSurface)
  - : Ein Boolean-Wert, der, falls `true`, anzeigt, dass das Video im Video-Track des Streams einen Hintergrundrendierungskontext enthält, statt eines für den Benutzer sichtbaren. Dies ist `false`, wenn das erfasste Video aus einer Vordergrund- (für den Benutzer sichtbaren) Quelle stammt.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia)
- [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia)
- [`MediaStreamTrack.getConstraints()`](/de/docs/Web/API/MediaStreamTrack/getConstraints)
- [`MediaStreamTrack.applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints)
- [`MediaStreamTrack.getSettings()`](/de/docs/Web/API/MediaStreamTrack/getSettings)
