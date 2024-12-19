---
title: MediaTrackSettings
slug: Web/API/MediaTrackSettings
l10n:
  sourceCommit: 570e162fda8d1775feecb73198d9e12917b3e72c
---

{{APIRef("Media Capture and Streams")}}

Das **`MediaTrackSettings`** Wörterbuch wird verwendet, um die aktuellen, für jedes der Einstellungen eines [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) konfigurierten Werte zurückzugeben. Diese Werte werden so nah wie möglich an den zuvor beschriebenen Einschränkungen unter Verwendung eines [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints) Objekts und gesetzt mit [`applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) gehalten und werden den Standard-Einschränkungen für jede Eigenschaft entsprechen, deren Einschränkungen nicht geändert wurden oder deren angepasste Einschränkungen nicht erfüllt werden konnten.

Um mehr darüber zu erfahren, wie Einschränkungen und Einstellungen funktionieren, sehen Sie [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints).

## Instanz-Eigenschaften

Einige oder alle der folgenden werden im Objekt enthalten sein, entweder weil sie vom Browser nicht unterstützt werden oder weil sie aufgrund des Kontexts nicht verfügbar sind. Zum Beispiel, da {{Glossary("RTP", "RTP")}} einige dieser Werte während der Aushandlung einer WebRTC-Verbindung nicht bereitstellt, wird ein Track, der mit einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) verknüpft ist, bestimmte Werte wie [`facingMode`](/de/docs/Web/API/MediaTrackSettings/facingMode) oder [`groupId`](/de/docs/Web/API/MediaTrackSettings/groupId) nicht enthalten.

### Instanz-Eigenschaften aller Medien-Tracks

- [`deviceId`](/de/docs/Web/API/MediaTrackSettings/deviceId)
  - : Ein String, der den aktuellen Wert der [`deviceId`](/de/docs/Web/API/MediaTrackConstraints/deviceId) Eigenschaft angibt. Die Geräte-ID ist ein eindeutiger Ursprungs-String, der die Quelle des Tracks identifiziert; dies ist normalerweise eine [GUID](https://en.wikipedia.org/wiki/Universally_unique_identifier). Dieser Wert ist spezifisch für die Quelle der Daten des Tracks und kann nicht zur Einstellung von Einschränkungen verwendet werden; er kann jedoch für die anfängliche Auswahl von Medien bei der Aufruf von [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) verwendet werden.
- [`groupId`](/de/docs/Web/API/MediaTrackSettings/groupId)
  - : Ein String, der den aktuellen Wert der [`groupId`](/de/docs/Web/API/MediaTrackConstraints/groupId) Eigenschaft angibt. Die Gruppen-ID ist ein sitzungsspezifischer String, der die Quellgruppe des Tracks identifiziert. Zwei Geräte (wie durch die [`deviceId`](/de/docs/Web/API/MediaTrackSettings/deviceId) identifiziert) werden als Teil derselben Gruppe betrachtet, wenn sie von demselben physischen Gerät stammen. Zum Beispiel würden die Audioeingabegeräte und -ausgabegeräte für Lautsprecher und das eingebaute Mikrofon eines Telefons dieselbe Gruppen-ID teilen, da sie Teil desselben physischen Geräts sind. Das Mikrofon eines Headsets hingegen hätte eine andere ID. Dieser Wert ist spezifisch für die Quelle der Daten des Tracks und kann nicht zur Einstellung von Einschränkungen verwendet werden; er kann jedoch für die anfängliche Auswahl von Medien bei der Aufruf von [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) verwendet werden.

### Instanz-Eigenschaften von Audio-Tracks

- [`autoGainControl`](/de/docs/Web/API/MediaTrackSettings/autoGainControl)
  - : Ein Boolean, der angibt, ob die automatische Verstärkungsregelung aktiviert ist (`true`) oder nicht (`false`).
- [`channelCount`](/de/docs/Web/API/MediaTrackSettings/channelCount)
  - : Eine ganze Zahl, die die Anzahl der Audiokanäle im Track angibt (daher wie viele Audiosamples in jedem Audioframe existieren). Dies ist 1 für Mono, 2 für Stereo, usw.
- [`echoCancellation`](/de/docs/Web/API/MediaTrackSettings/echoCancellation)
  - : Ein Boolean, der angibt, ob Echounterdrückung aktiviert ist (`true`) oder nicht (`false`).
- [`latency`](/de/docs/Web/API/MediaTrackSettings/latency)
  - : Ein doppelt-präziser Gleitkommawert, der die aktuelle Latenz des Audio-Tracks in Sekunden angibt. Latenz ist die Zeitspanne, die zwischen dem Beginn der Verarbeitung des Audios und der Verfügbarkeit der Daten für den nächsten Verarbeitungsstopp vergeht. Dieser Wert ist ein Zielwert; die tatsächliche Latenz kann aus verschiedenen Gründen variieren.
- [`noiseSuppression`](/de/docs/Web/API/MediaTrackSettings/noiseSuppression)
  - : Ein Boolean, der angibt, ob die Rauschunterdrückung aktiviert ist (`true`) oder nicht (`false`).
- [`sampleRate`](/de/docs/Web/API/MediaTrackSettings/sampleRate)
  - : Eine ganze Zahl, die die Samplerate in Samples pro Sekunde der Audiodaten angibt. Standard-CD-Qualität hat zum Beispiel eine Samplerate von 41.000 Samples pro Sekunde.
- [`sampleSize`](/de/docs/Web/API/MediaTrackSettings/sampleSize)
  - : Eine ganze Zahl, die die lineare Größe in Bits jedes Audiosamples angibt. CD-Qualität ist zum Beispiel 16-Bit, daher wäre dieser Wert 16.
- [`volume`](/de/docs/Web/API/MediaTrackSettings/volume) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Ein doppelt-präziser Gleitkommawert, der den Lautstärkepegel des Tracks angibt. Dieser Wert liegt zwischen 0.0 (stumm) und 1.0 (maximal unterstützte Lautstärke).

### Instanz-Eigenschaften von Video-Tracks

- [`aspectRatio`](/de/docs/Web/API/MediaTrackSettings/aspectRatio)
  - : Ein doppelt-präziser Gleitkommawert, der das Seitenverhältnis des Videos angibt, präzise auf 10 Dezimalstellen. Dies ist die Breite des Bildes in Pixeln geteilt durch die Höhe in Pixeln. Übliche Werte schließen 1.3333333333 (klassisches 4:3 TV-Standard-Seitenverhältnis), 1.7777777778 (16:9 HD-Breitbildseitenverhältnis) und 1.6 (16:10 Seitenverhältnis) ein.
- [`facingMode`](/de/docs/Web/API/MediaTrackSettings/facingMode)

  - : Ein String, der die Richtung angibt, in die die Kamera zeigt. Der Wert wird einer der folgenden sein:

    - `"user"`
      - : Eine Kamera, die auf den Benutzer zeigt (oft als "Selfie-Kamera" bezeichnet), verwendet für Selbstporträts und Videoanrufe.
    - `"environment"`
      - : Eine Kamera, die vom Benutzer weg zeigt (wenn der Benutzer auf den Bildschirm schaut). Dies ist typischerweise die Kamera mit der höchsten Qualität auf dem Gerät, verwendet für allgemeine Fotografie.
    - `"left"`
      - : Eine Kamera, die auf die Umgebung zur linken Seite des Benutzers zeigt.
    - `"right"`
      - : Eine Kamera, die auf die Umgebung zur rechten Seite des Benutzers zeigt.

- [`frameRate`](/de/docs/Web/API/MediaTrackSettings/frameRate)
  - : Ein doppelt-präziser Gleitkommawert, der angibt, wie viele Videobilder pro Sekunde der Track umfasst. Wenn der Wert aus irgendeinem Grund nicht bestimmt werden kann, wird der Wert mit der Vertikalsynchronisationsrate des Geräts übereinstimmen, auf dem der Benutzeragent ausgeführt wird.
- [`height`](/de/docs/Web/API/MediaTrackSettings/height)
  - : Eine ganze Zahl, die die Höhe der Videodaten des Tracks in Pixeln angibt.
- [`width`](/de/docs/Web/API/MediaTrackSettings/width)
  - : Eine ganze Zahl, die die Breite der Videodaten des Tracks in Pixeln angibt.
- [`resizeMode`](/de/docs/Web/API/MediaTrackSettings/resizeMode)

  - : Ein String, der den Modus angibt, den der Benutzeragent verwendet, um die Auflösung des Tracks abzuleiten. Der Wert wird einer der folgenden sein:

    - `"none"`
      - : Der Track hat die Auflösung, die von der Kamera, ihrem Treiber oder dem Betriebssystem angeboten wird.
    - `"crop-and-scale"`
      - : Die Auflösung des Tracks könnte das Ergebnis des Benutzeragenten sein, der cropping oder downscaling von einer höheren Kameraauflösung verwendet.

### Instanz-Eigenschaften von geteilten Bildschirm-Tracks

Tracks, die Video von einem Benutzerbildschirm teilen (unabhängig davon, ob die Daten vom gesamten Bildschirm oder einem Teil des Bildschirms wie einem Fenster oder Tab stammen), werden im Allgemeinen wie Video-Tracks behandelt, mit der Ausnahme, dass sie auch die folgenden zusätzlichen Einstellungen unterstützen:

- [`cursor`](/de/docs/Web/API/MediaTrackSettings/cursor)

  - : Ein String, der angibt, ob der Mauszeiger im generierten Stream enthalten ist und unter welchen Bedingungen. Mögliche Werte sind:

    - `always`
      - : Die Maus ist immer im Videoinhalt der [`MediaStream`](/de/docs/Web/API/MediaStream) sichtbar, es sei denn, die Maus hat sich aus dem Bereich des Inhalts hinaus bewegt.
    - `motion`
      - : Der Mauszeiger ist im Video immer enthalten, wenn er sich bewegt, und für kurze Zeit, nachdem er aufgehört hat zu bewegen.
    - `never`
      - : Der Mauszeiger ist nie im geteilten Video enthalten.

- [`displaySurface`](/de/docs/Web/API/MediaTrackSettings/displaySurface)

  - : Ein String, der den Typ der Quellinhalte des Tracks angibt; einer der folgenden:

    - `browser`
      - : Der Stream enthält die Inhalte eines einzelnen Browser-Tabs, der vom Benutzer ausgewählt wurde.
    - `monitor`
      - : Das Video-Track des Streams enthält die gesamten Inhalte eines oder mehrerer Benutzerbildschirme.
    - `window`
      - : Der Stream enthält ein einzelnes Fenster, das der Benutzer zum Teilen ausgewählt hat.

- [`logicalSurface`](/de/docs/Web/API/MediaTrackSettings/logicalSurface)
  - : Ein Boolean-Wert, der, wenn `true`, anzeigt, dass das Video im Video-Track des Streams einen Hintergrundrendering-Kontext enthält, anstatt eines benutzer-sichtbaren. Dies ist `false`, wenn das aufgenommene Video von einer Vordergrund- (benutzer-sichtbaren) Quelle kommt.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia)
- [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia)
- [`MediaStreamTrack.getConstraints()`](/de/docs/Web/API/MediaStreamTrack/getConstraints)
- [`MediaStreamTrack.applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints)
- [`MediaStreamTrack.getSettings()`](/de/docs/Web/API/MediaStreamTrack/getSettings)
