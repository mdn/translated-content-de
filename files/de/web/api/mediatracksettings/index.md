---
title: MediaTrackSettings
slug: Web/API/MediaTrackSettings
l10n:
  sourceCommit: a439453bab9f5508b5268a4062a42fc760a2f20b
---

{{APIRef("Media Capture and Streams")}}

Das **`MediaTrackSettings`** Wörterbuch wird verwendet, um die aktuell konfigurierten Werte für jede Einstellung eines [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) zurückzugeben. Diese Werte werden so nah wie möglich an die zuvor mit einem [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints) Objekt beschriebenen Einschränkungen und mittels [`applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) gesetzten Werte angepasst und halten sich an die Standardbeschränkungen für alle Eigenschaften, deren Einschränkungen nicht geändert wurden oder deren benutzerdefinierte Einschränkungen nicht erfüllt werden konnten.

Um mehr zu erfahren, wie Einschränkungen und Einstellungen funktionieren, siehe [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints).

## Instanz-Eigenschaften

Einige oder alle der folgenden werden im Objekt enthalten sein, entweder weil es vom Browser nicht unterstützt wird oder weil es aufgrund des Kontexts nicht verfügbar ist. Zum Beispiel, da {{Glossary("RTP", "RTP")}} einige dieser Werte während der Aushandlung einer WebRTC-Verbindung nicht bereitstellt, wird ein Track in Verbindung mit einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) bestimmte Werte wie [`facingMode`](/de/docs/Web/API/MediaTrackSettings/facingMode) oder [`groupId`](/de/docs/Web/API/MediaTrackSettings/groupId) nicht enthalten.

### Instanz-Eigenschaften aller Medientracks

- [`deviceId`](/de/docs/Web/API/MediaTrackSettings/deviceId)
  - : Ein String, der den aktuellen Wert der [`deviceId`](/de/docs/Web/API/MediaTrackConstraints/deviceId) Eigenschaft angibt. Die Geräte-ID ist ein ursprungs-eindeutiger String, der die Quelle des Tracks identifiziert; dies ist normalerweise eine [GUID](https://en.wikipedia.org/wiki/Universally_unique_identifier). Dieser Wert ist spezifisch für die Quelle der Track-Daten und kann nicht für die Festlegung von Einschränkungen verwendet werden; er kann jedoch für die anfängliche Auswahl von Medien verwendet werden, wenn [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) aufgerufen wird.
- [`groupId`](/de/docs/Web/API/MediaTrackSettings/groupId)
  - : Ein String, der den aktuellen Wert der [`groupId`](/de/docs/Web/API/MediaTrackConstraints/groupId) Eigenschaft angibt. Die Gruppen-ID ist ein browser-sitzungs-eindeutiger String, der die Quellgruppe des Tracks identifiziert. Zwei Geräte (identifiziert durch die [`deviceId`](/de/docs/Web/API/MediaTrackSettings/deviceId)) gehören zur gleichen Gruppe, wenn sie vom gleichen physischen Gerät stammen. Zum Beispiel würden die Audio-Ein- und Ausgabegeräte für den Lautsprecher und das Mikrofon, die in ein Telefon integriert sind, dieselbe Gruppen-ID teilen, da sie Teil desselben physischen Geräts sind. Das Mikrofon an einem Headset hätte jedoch eine andere ID. Dieser Wert ist spezifisch für die Quelle der Track-Daten und kann nicht für die Festlegung von Einschränkungen verwendet werden; er kann jedoch für die anfängliche Auswahl von Medien verwendet werden, wenn [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) aufgerufen wird.

### Instanz-Eigenschaften von Audiospuren

- [`autoGainControl`](/de/docs/Web/API/MediaTrackSettings/autoGainControl)
  - : Ein Boolean, der den aktuellen Wert der [`autoGainControl`](/de/docs/Web/API/MediaTrackConstraints/autoGainControl) Eigenschaft angibt, welcher `true` ist, wenn automatische Verstärkungsregelung aktiviert ist, und `false` andernfalls.
- [`channelCount`](/de/docs/Web/API/MediaTrackSettings/channelCount)
  - : Ein ganzzahliger Wert, der den aktuellen Wert der [`channelCount`](/de/docs/Web/API/MediaTrackConstraints/channelCount) Eigenschaft angibt und die Anzahl der Audiokanäle angibt, die auf dem Track vorhanden sind (und damit angibt, wie viele Audioproben in jedem Audioframe vorhanden sind). Dies ist 1 für Mono, 2 für Stereo und so weiter.
- [`echoCancellation`](/de/docs/Web/API/MediaTrackSettings/echoCancellation)
  - : Ein Boolean, der den aktuellen Wert der [`echoCancellation`](/de/docs/Web/API/MediaTrackConstraints/echoCancellation) Eigenschaft angibt, welcher bei `true` Echo-Unterdrückung bedeutet und andernfalls `false` ist.
- [`latency`](/de/docs/Web/API/MediaTrackSettings/latency)
  - : Ein Gleitkommawert mit doppelter Genauigkeit, der den aktuellen Wert der [`latency`](/de/docs/Web/API/MediaTrackConstraints/latency) Eigenschaft angibt und die Audio-Latenzzeit in Sekunden angibt. Latenz ist die Zeitspanne, die zwischen dem Beginn der Verarbeitung des Audios und dem Zeitpunkt vergeht, zu dem die Daten für den nächsten Stopp im Audioverarbeitungsprozess verfügbar sind. Dieser Wert ist ein Zielwert; die tatsächliche Latenz kann aus verschiedenen Gründen variieren.
- [`noiseSuppression`](/de/docs/Web/API/MediaTrackSettings/noiseSuppression)
  - : Ein Boolean, der den aktuellen Wert der [`noiseSuppression`](/de/docs/Web/API/MediaTrackConstraints/noiseSuppression) Eigenschaft angibt: `true` wenn die Rauschunterdrückung aktiviert ist, und `false` andernfalls.
- [`restrictOwnAudio`](/de/docs/Web/API/MediaTrackSettings/restrictOwnAudio)
  - : Ein Boolean, der den aktuellen Wert der [`restrictOwnAudio`](/de/docs/Web/API/MediaTrackConstraints/restrictOwnAudio) Eigenschaft angibt: `true`, wenn der Browser versuchen wird, Systemaudio, das vom aufnehmenden Tab stammt, während der Bildschirmaufnahme herauszufiltern, und `false` andernfalls.
- [`sampleRate`](/de/docs/Web/API/MediaTrackSettings/sampleRate)
  - : Ein ganzzahliger Wert, der den aktuellen Wert der [`sampleRate`](/de/docs/Web/API/MediaTrackConstraints/sampleRate) Eigenschaft angibt und die Abtastrate in Proben pro Sekunde der Audiodaten spezifiziert. Standard-CD-Audioqualität zum Beispiel hat eine Abtastrate von 41.000 Proben pro Sekunde.
- [`sampleSize`](/de/docs/Web/API/MediaTrackSettings/sampleSize)
  - : Ein ganzzahliger Wert, der den aktuellen Wert der [`sampleSize`](/de/docs/Web/API/MediaTrackConstraints/sampleSize) Eigenschaft angibt und die lineare Größe, in Bits, jeder Audioprobe spezifiziert. CD-Audioqualität zum Beispiel ist 16-Bit, daher wäre dieser Wert in diesem Fall 16.
- [`suppressLocalAudioPlayback`](/de/docs/Web/API/MediaTrackSettings/suppressLocalAudioPlayback)
  - : Bestimmt, ob das Audio, das in einem Tab abgespielt wird, weiterhin aus den lokalen Lautsprechern eines Benutzers wiedergegeben wird, wenn der Tab erfasst wird.
- [`volume`](/de/docs/Web/API/MediaTrackSettings/volume) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Ein Gleitkommawert mit doppelter Genauigkeit, der den aktuellen Wert der [`volume`](/de/docs/Web/API/MediaTrackConstraints/volume) Eigenschaft angibt und den Lautstärkepegel des Tracks spezifiziert. Dieser Wert liegt zwischen 0,0 (stumm) und 1,0 (maximale unterstützte Lautstärke).

### Instanz-Eigenschaften von Videospuren

- [`aspectRatio`](/de/docs/Web/API/MediaTrackSettings/aspectRatio)
  - : Ein Gleitkommawert mit doppelter Genauigkeit, der den aktuellen Wert der [`aspectRatio`](/de/docs/Web/API/MediaTrackConstraints/aspectRatio) Eigenschaft angibt, präzise auf 10 Dezimalstellen. Dies ist die Breite des Bildes in Pixeln dividiert durch seine Höhe in Pixeln. Übliche Werte sind 1.3333333333 (für das klassische Fernseh-4:3-"Standard-" {{Glossary("aspect_ratio", "Seitenverhältnis")}}, das auch auf Tablets wie dem iPad von Apple verwendet wird), 1.7777777778 (für das 16:9-High-Definition-Widescreen-Seitenverhältnis) und 1.6 (für das 16:10-Seitenverhältnis, das bei Widescreen-Computern und Tablets häufig ist).
- [`facingMode`](/de/docs/Web/API/MediaTrackSettings/facingMode)
  - : Ein String, der den aktuellen Wert der [`facingMode`](/de/docs/Web/API/MediaTrackConstraints/facingMode) Eigenschaft angibt, der die Richtung angibt, in die die Kamera zeigt. Der Wert wird einer der folgenden sein:
    - `"user"`
      - : Eine Kamera, die auf den Benutzer gerichtet ist (allgemein als "Selfie-Kamera" bekannt), wird für Selbstporträts und Videoanrufe verwendet.
    - `"environment"`
      - : Eine Kamera, die vom Benutzer weg zeigt (wenn der Benutzer auf den Bildschirm schaut). Dies ist typischerweise die höchste Qualitätskamera auf dem Gerät, die für allgemeine Fotografie verwendet wird.
    - `"left"`
      - : Eine Kamera, die zur Umgebung nach links zeigt.
    - `"right"`
      - : Eine Kamera, die zur Umgebung nach rechts zeigt.

- [`frameRate`](/de/docs/Web/API/MediaTrackSettings/frameRate)
  - : Ein Gleitkommawert mit doppelter Genauigkeit, der den aktuellen Wert der [`frameRate`](/de/docs/Web/API/MediaTrackConstraints/frameRate) Eigenschaft angibt, die angibt, wie viele Videobilder pro Sekunde der Track enthält. Wenn der Wert aus irgendeinem Grund nicht bestimmt werden kann, wird der Wert mit der vertikalen Synchronisationsrate des Geräts übereinstimmen, auf dem der Benutzeragent läuft.
- [`height`](/de/docs/Web/API/MediaTrackSettings/height)
  - : Ein ganzzahliger Wert, der den aktuellen Wert der [`height`](/de/docs/Web/API/MediaTrackConstraints/height) Eigenschaft angibt und die Höhe der Videodaten des Tracks in Pixeln spezifiziert.
- [`width`](/de/docs/Web/API/MediaTrackSettings/width)
  - : Ein ganzzahliger Wert, der den aktuellen Wert der [`width`](/de/docs/Web/API/MediaTrackSettings/width) Eigenschaft angibt und die Breite der Videodaten des Tracks in Pixeln spezifiziert.
- [`resizeMode`](/de/docs/Web/API/MediaTrackSettings/resizeMode)
  - : Ein String, der den aktuellen Wert der [`resizeMode`](/de/docs/Web/API/MediaTrackConstraints/resizeMode) Eigenschaft angibt, der den Modus angibt, den der Benutzeragent verwendet, um die Auflösung des Tracks abzuleiten. Der Wert wird einer der folgenden sein:
    - `"none"`
      - : Der Track hat die vom Kamera, ihrem Treiber oder dem Betriebssystem angebotene Auflösung.
    - `"crop-and-scale"`
      - : Die Auflösung des Tracks könnte das Ergebnis davon sein, dass der Benutzeragent Zuschneiden oder Herunterskalieren von einer höheren Kameraauflösung verwendet.

### Instanz-Eigenschaften von geteilten Bildschirmspuren

Tracks, die Video von einem Benutzerbildschirm teilen (unabhängig davon, ob die Bildschirmdaten vom gesamten Bildschirm oder einem Teil eines Bildschirms, wie einem Fenster oder Tab, stammen), werden im Allgemeinen wie Videospuren behandelt, außer dass sie auch die folgenden zusätzlichen Einstellungen unterstützen:

- [`cursor`](/de/docs/Web/API/MediaTrackSettings/cursor)
  - : Ein String, der angibt, ob der Mauszeiger im generierten Stream einbezogen wird und unter welchen Bedingungen. Mögliche Werte sind:
    - `always`
      - : Die Maus ist immer im Videoinhalt des {{domxref("MediaStream") sichtbar, sofern sich die Maus nicht außerhalb des Inhaltsbereichs bewegt.
    - `motion`
      - : Der Mauszeiger ist im Video enthalten, wenn er sich bewegt, und für eine kurze Zeit, nachdem er aufgehört hat, sich zu bewegen.
    - `never`
      - : Der Mauszeiger wird niemals im geteilten Video angezeigt.

- [`displaySurface`](/de/docs/Web/API/MediaTrackSettings/displaySurface)
  - : Ein String, der den Typ der Quelle spezifiziert, die der Track enthält; eine der folgenden:
    - `browser`
      - : Der Stream enthält den Inhalt eines einzelnen Browser-Tabs, den der Benutzer ausgewählt hat.
    - `monitor`
      - : Die Video-Spur des Streams enthält den gesamten Inhalt eines oder mehrerer Bildschirme des Benutzers.
    - `window`
      - : Der Stream enthält ein einzelnes Fenster, das der Benutzer zur Freigabe ausgewählt hat.

- [`logicalSurface`](/de/docs/Web/API/MediaTrackSettings/logicalSurface)
  - : Ein Boolean-Wert, der, wenn `true`, anzeigt, dass das Video im Video-Track des Streams einen Hintergrund-Rendertcontext enthält, anstatt einen benutzer-sichtbaren. Dies ist `false`, wenn das aufgenommene Video von einer Vordergrundquelle (benutzersichtbar) stammt.

- [`screenPixelRatio`](/de/docs/Web/API/MediaTrackSettings/screenPixelRatio)
  - : Eine Zahl, die das Verhältnis der physischen Größe eines Pixels auf der aufgenommenen Darstellungsoberfläche (angezeigt in seiner physischen Auflösung) zur logischen Größe eines CSS-Pixels auf dem aufnehmenden Bildschirm (angezeigt in seiner logischen Auflösung) darstellt. Es kann nicht als Einschränkung oder Fähigkeit verwendet werden.

## Spezifikationen

{{Specifications)}}

## Siehe auch

- [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia)
- [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia)
- [`MediaStreamTrack.getConstraints()`](/de/docs/Web/API/MediaStreamTrack/getConstraints)
- [`MediaStreamTrack.applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints)
- [`MediaStreamTrack.getSettings()`](/de/docs/Web/API/MediaStreamTrack/getSettings)
