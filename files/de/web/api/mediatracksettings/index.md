---
title: MediaTrackSettings
slug: Web/API/MediaTrackSettings
l10n:
  sourceCommit: c9e9f9f4faf2e8a5985e5834d9424557341f33c9
---

{{APIRef("Media Capture and Streams")}}

Das **`MediaTrackSettings`**-Wörterbuch wird verwendet, um die aktuellen Werte für die Einstellungen eines [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) zurückzugeben. Diese Werte entsprechen so genau wie möglich den vorher beschriebenen Einschränkungen, die mittels eines [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Objekts festgelegt und mit [`applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) angewendet wurden, und halten sich an die Standardvorgaben für alle Eigenschaften, deren Einschränkungen nicht geändert wurden oder deren angepasste Einschränkungen nicht erfüllt werden konnten.

Um mehr darüber zu erfahren, wie Einschränkungen und Einstellungen funktionieren, lesen Sie [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints).

## Instanz-Eigenschaften

Einige oder alle der folgenden Eigenschaften werden im Objekt enthalten sein, entweder weil sie vom Browser nicht unterstützt werden oder weil sie aufgrund des Kontexts nicht verfügbar sind. Beispielsweise, da {{Glossary("RTP", "RTP")}} einige dieser Werte während der Aushandlung einer WebRTC-Verbindung nicht bereitstellt, wird ein Track, der mit einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) assoziiert ist, bestimmte Werte, wie [`facingMode`](/de/docs/Web/API/MediaTrackSettings/facingMode) oder [`groupId`](/de/docs/Web/API/MediaTrackSettings/groupId), nicht enthalten.

### Instanz-Eigenschaften aller Medien-Tracks

- [`deviceId`](/de/docs/Web/API/MediaTrackSettings/deviceId)
  - : Ein String, der den aktuellen Wert der [`deviceId`](/de/docs/Web/API/MediaTrackConstraints/deviceId)-Eigenschaft angibt. Die Geräte-ID ist ein ursprungs-eindeutiger String, der die Quelle des Tracks identifiziert; dies ist normalerweise eine [GUID](https://en.wikipedia.org/wiki/Universally_unique_identifier). Dieser Wert ist spezifisch für die Quelle der Track-Daten und kann nicht für die Festlegung von Einschränkungen verwendet werden; er kann jedoch für die anfängliche Auswahl von Medien beim Aufruf von [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) verwendet werden.
- [`groupId`](/de/docs/Web/API/MediaTrackSettings/groupId)
  - : Ein String, der den aktuellen Wert der [`groupId`](/de/docs/Web/API/MediaTrackConstraints/groupId)-Eigenschaft angibt. Die Gruppen-ID ist ein Browsersitzung-eindeutiger String, der die Quellgruppe des Tracks identifiziert. Zwei Geräte (wie durch die [`deviceId`](/de/docs/Web/API/MediaTrackSettings/deviceId) identifiziert) werden als Teil derselben Gruppe angesehen, wenn sie von demselben physischen Gerät stammen. Zum Beispiel würden die Audioeingabe- und -ausgabegeräte für den Lautsprecher und das Mikrofon eines Telefons dieselbe Gruppen-ID teilen, da sie Teil desselben physischen Geräts sind. Das Mikrofon eines Headsets hätte jedoch eine andere ID. Dieser Wert ist spezifisch für die Quelle der Track-Daten und kann nicht für die Festlegung von Einschränkungen verwendet werden; er kann jedoch für die anfängliche Auswahl von Medien beim Aufruf von [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) verwendet werden.

### Instanz-Eigenschaften von Audio-Tracks

- [`autoGainControl`](/de/docs/Web/API/MediaTrackSettings/autoGainControl)
  - : Ein Boolescher Wert, der den aktuellen Wert der [`autoGainControl`](/de/docs/Web/API/MediaTrackConstraints/autoGainControl)-Eigenschaft angibt, was `true` ist, wenn die automatische Verstärkungsregelung aktiviert ist, und `false` andernfalls.
- [`channelCount`](/de/docs/Web/API/MediaTrackSettings/channelCount)
  - : Ein langer Ganzzahlenwert, der den aktuellen Wert der [`channelCount`](/de/docs/Web/API/MediaTrackConstraints/channelCount)-Eigenschaft angibt, die die Anzahl der Audiokanäle auf dem Track spezifiziert (und daher angibt, wie viele Audiobeispiele in jedem Audioframe vorhanden sind). Dies ist 1 für Mono, 2 für Stereo und so weiter.
- [`echoCancellation`](/de/docs/Web/API/MediaTrackSettings/echoCancellation)
  - : Ein Boolescher Wert, der den aktuellen Wert der [`echoCancellation`](/de/docs/Web/API/MediaTrackConstraints/echoCancellation)-Eigenschaft angibt, der `true` ist, wenn Echounterdrückung aktiviert ist, andernfalls `false`.
- [`latency`](/de/docs/Web/API/MediaTrackSettings/latency)
  - : Ein doppelter Fließkommawert, der den aktuellen Wert der [`latency`](/de/docs/Web/API/MediaTrackConstraints/latency)-Eigenschaft angibt, die die Audiolatenz in Sekunden spezifiziert. Latenz ist die Zeitspanne, die zwischen dem Start der Verarbeitung des Audios und den Daten, die beim nächsten Schritt im Audiobearbeitungsprozess verfügbar sind, vergeht. Dieser Wert ist ein Zielwert; die tatsächliche Latenz kann aus verschiedenen Gründen bis zu einem gewissen Grad variieren.
- [`noiseSuppression`](/de/docs/Web/API/MediaTrackSettings/noiseSuppression)
  - : Ein Boolescher Wert, der den aktuellen Wert der [`noiseSuppression`](/de/docs/Web/API/MediaTrackConstraints/noiseSuppression)-Eigenschaft angibt, was `true` ist, wenn Geräuschunterdrückung aktiviert ist, und `false` andernfalls.
- [`sampleRate`](/de/docs/Web/API/MediaTrackSettings/sampleRate)
  - : Ein langer Ganzzahlenwert, der den aktuellen Wert der [`sampleRate`](/de/docs/Web/API/MediaTrackConstraints/sampleRate)-Eigenschaft angibt, die die Abtastrate in Abtastungen pro Sekunde der Audiodaten spezifiziert. Standardmäßig hat CD-Qualität Audio zum Beispiel eine Abtastrate von 41.000 Abtastungen pro Sekunde.
- [`sampleSize`](/de/docs/Web/API/MediaTrackSettings/sampleSize)
  - : Ein langer Ganzzahlenwert, der den aktuellen Wert der [`sampleSize`](/de/docs/Web/API/MediaTrackConstraints/sampleSize)-Eigenschaft angibt, die die lineare Größe in Bits jedes Audiosamples spezifiziert. CD-Qualitätsaudio ist zum Beispiel 16-Bit, daher wäre dieser Wert in diesem Fall 16.
- [`volume`](/de/docs/Web/API/MediaTrackSettings/volume) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Ein doppelter Fließkommawert, der den aktuellen Wert der [`volume`](/de/docs/Web/API/MediaTrackConstraints/volume)-Eigenschaft angibt, die die Lautstärke des Tracks spezifiziert. Dieser Wert liegt zwischen 0.0 (stumm) und 1.0 (maximale unterstützte Lautstärke).

### Instanz-Eigenschaften von Video-Tracks

- [`aspectRatio`](/de/docs/Web/API/MediaTrackSettings/aspectRatio)
  - : Ein doppelter Fließkommawert, der den aktuellen Wert der [`aspectRatio`](/de/docs/Web/API/MediaTrackConstraints/aspectRatio)-Eigenschaft angibt, der bis zu 10 Dezimalstellen genau angegeben wird. Dies ist die Breite des Bildes in Pixeln geteilt durch seine Höhe in Pixeln. Übliche Werte sind 1.3333333333 (für das klassische 4:3-Fernsehformat, auch auf Tablets wie Apples iPad verwendet), 1.7777777778 (für das 16:9-HD-Breitbildformat) und 1.6 (für das 16:10-Seitenverhältnis, das bei Breitbildcomputern und -tablets üblich ist).
- [`facingMode`](/de/docs/Web/API/MediaTrackSettings/facingMode)

  - : Ein String, der den aktuellen Wert der [`facingMode`](/de/docs/Web/API/MediaTrackConstraints/facingMode)-Eigenschaft angibt und die Richtung spezifiziert, in die die Kamera zeigt. Der Wert wird einer der folgenden sein:

    - `"user"`
      - : Eine Kamera, die auf den Benutzer zeigt (umgangssprachlich bekannt als "Selfie-Kamera"), die für Selbstporträts und Videoanrufe verwendet wird.
    - `"environment"`
      - : Eine Kamera, die vom Benutzer weg zeigt (wenn der Benutzer auf den Bildschirm schaut). Dies ist typischerweise die hochwertigste Kamera auf dem Gerät, die für allgemeine Fotografie verwendet wird.
    - `"left"`
      - : Eine Kamera, die zur Umgebung auf der linken Seite des Benutzers zeigt.
    - `"right"`
      - : Eine Kamera, die zur Umgebung auf der rechten Seite des Benutzers zeigt.

- [`frameRate`](/de/docs/Web/API/MediaTrackSettings/frameRate)
  - : Ein doppelter Fließkommawert, der den aktuellen Wert der [`frameRate`](/de/docs/Web/API/MediaTrackConstraints/frameRate)-Eigenschaft angibt, die angibt, wie viele Video-Frames pro Sekunde der Track enthält. Wenn der Wert aus irgendeinem Grund nicht bestimmt werden kann, wird der Wert mit der vertikalen Synchronisationsrate des Geräts übereinstimmen, auf dem der Benutzeragent ausgeführt wird.
- [`height`](/de/docs/Web/API/MediaTrackSettings/height)
  - : Ein langer Ganzzahlenwert, der den aktuellen Wert der [`height`](/de/docs/Web/API/MediaTrackConstraints/height)-Eigenschaft angibt, die die Höhe der Videodaten des Tracks in Pixeln spezifiziert.
- [`width`](/de/docs/Web/API/MediaTrackSettings/width)
  - : Ein langer Ganzzahlenwert, der den aktuellen Wert der [`width`](/de/docs/Web/API/MediaTrackSettings/width)-Eigenschaft angibt, die die Breite der Videodaten des Tracks in Pixeln spezifiziert.
- [`resizeMode`](/de/docs/Web/API/MediaTrackSettings/resizeMode)

  - : Ein String, der den aktuellen Wert der [`resizeMode`](/de/docs/Web/API/MediaTrackConstraints/resizeMode)-Eigenschaft angibt und den Modus spezifiziert, den der Benutzeragent verwendet, um die Auflösung des Tracks abzuleiten. Der Wert wird einer der folgenden sein:

    - `"none"`
      - : Der Track hat die von der Kamera, ihrem Treiber oder dem Betriebssystem angebotene Auflösung.
    - `"crop-and-scale"`
      - : Die Auflösung des Tracks könnte das Ergebnis davon sein, dass der Benutzeragent von einer höheren Kameraauflösung auf eine niedrigere herunterskaliert oder zuschneidet.

### Instanz-Eigenschaften von freigegebenen Bildschirm-Tracks

Tracks, die Videodaten enthalten, die von einem Benutzerbildschirm geteilt werden (unabhängig davon, ob die Bildschirmdaten vom gesamten Bildschirm oder von einem Teil eines Bildschirms, wie einem Fenster oder einem Tab, stammen), werden im Allgemeinen wie Video-Tracks behandelt, mit der Ausnahme, dass sie auch die folgenden zusätzlichen Einstellungen unterstützen:

- [`cursor`](/de/docs/Web/API/MediaTrackSettings/cursor)

  - : Ein String, der angibt, ob der Mauszeiger im generierten Stream enthalten ist und unter welchen Bedingungen. Mögliche Werte sind:

    - `always`
      - : Die Maus ist immer im Videoinhalt des {domxref("MediaStream")}} sichtbar, es sei denn, die Maus hat sich außerhalb des Inhaltsbereichs bewegt.
    - `motion`
      - : Der Mauszeiger ist immer im Video enthalten, wenn er sich bewegt, und für eine kurze Zeit, nachdem er aufgehört hat, sich zu bewegen.
    - `never`
      - : Der Mauszeiger ist niemals im geteilten Video enthalten.

- [`displaySurface`](/de/docs/Web/API/MediaTrackSettings/displaySurface)

  - : Ein String, der den Typ der Quelle angibt, die der Track enthält; einer von:

    - `application`
      - : Der Stream enthält alle Fenster der vom Benutzer gewählten Anwendung, die in einen Videotrack gerendert werden.
    - `browser`
      - : Der Stream enthält die Inhalte eines einzelnen, vom Benutzer ausgewählten Browser-Tabs.
    - `monitor`
      - : Der Videotrack des Streams enthält den gesamten Inhalt eines oder mehrerer Benutzerbildschirme.
    - `window`
      - : Der Stream enthält ein einzelnes, vom Benutzer für die Freigabe ausgewähltes Fenster.

- [`logicalSurface`](/de/docs/Web/API/MediaTrackSettings/logicalSurface)
  - : Ein Boolescher Wert, der, wenn `true`, anzeigt, dass das im Videotrack des Streams enthaltene Video einen Hintergrund-Rendering-Kontext enthält, anstatt einen benutzer-sichtbaren. Dies ist `false`, wenn das erfasste Video von einer Vordergrund- (benutzer-sichtbaren) Quelle stammt.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia)
- [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia)
- [`MediaStreamTrack.getConstraints()`](/de/docs/Web/API/MediaStreamTrack/getConstraints)
- [`MediaStreamTrack.applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints)
- [`MediaStreamTrack.getSettings()`](/de/docs/Web/API/MediaStreamTrack/getSettings)
