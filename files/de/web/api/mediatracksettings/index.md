---
title: MediaTrackSettings
slug: Web/API/MediaTrackSettings
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Media Capture and Streams")}}

Das **`MediaTrackSettings`** Wörterbuch wird verwendet, um die aktuell konfigurierten Werte für jedes der Einstellungen eines [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) zurückzugeben. Diese Werte halten sich so genau wie möglich an alle zuvor beschriebenen Einschränkungen, die mit einem [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints) Objekt festgelegt und mit [`applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) angewendet wurden. Sie entsprechen zudem den Standardeinschränkungen für alle Eigenschaften, deren Einschränkungen nicht geändert wurden oder deren angepasste Einschränkungen nicht erfüllt werden konnten.

Um mehr darüber zu erfahren, wie Einschränkungen und Einstellungen funktionieren, siehe [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints).

## Instanzeigenschaften

Einige oder alle der folgenden Eigenschaften werden in das Objekt aufgenommen, entweder weil sie vom Browser nicht unterstützt werden oder weil sie aufgrund des Kontexts nicht verfügbar sind. Beispielsweise liefert {{Glossary("RTP", "RTP")}} während der Aushandlung einer WebRTC-Verbindung einige dieser Werte nicht, sodass ein Track, der mit einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) verknüpft ist, bestimmte Werte nicht enthalten wird, wie z.B. [`facingMode`](/de/docs/Web/API/MediaTrackSettings/facingMode) oder [`groupId`](/de/docs/Web/API/MediaTrackSettings/groupId).

### Instanzeigenschaften aller Media-Tracks

- [`deviceId`](/de/docs/Web/API/MediaTrackSettings/deviceId)
  - : Ein String, der den aktuellen Wert der [`deviceId`](/de/docs/Web/API/MediaTrackConstraints/deviceId) Eigenschaft angibt. Die Geräte-ID ist ein ursprungs-eindeutiger String, der die Quelle des Tracks identifiziert; dies ist üblicherweise ein [GUID](https://en.wikipedia.org/wiki/Universally_unique_identifier). Dieser Wert ist spezifisch für die Quelle der Track-Daten und kann nicht zum Setzen von Einschränkungen verwendet werden; er kann jedoch für die anfängliche Auswahl von Medien bei einem Aufruf von [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) verwendet werden.
- [`groupId`](/de/docs/Web/API/MediaTrackSettings/groupId)
  - : Ein String, der den aktuellen Wert der [`groupId`](/de/docs/Web/API/MediaTrackConstraints/groupId) Eigenschaft angibt. Die Gruppen-ID ist ein während einer Browsersitzung eindeutiger String, der die Quellgruppe des Tracks identifiziert. Zwei Geräte (identifiziert durch die [`deviceId`](/de/docs/Web/API/MediaTrackSettings/deviceId)) werden als Teil derselben Gruppe angesehen, wenn sie vom selben physischen Gerät stammen. Zum Beispiel würden die Audioeingangs- und Ausgangsgeräte für den Lautsprecher und das Mikrofon, die in ein Telefon integriert sind, dieselbe Gruppen-ID teilen, da sie Teil desselben physischen Geräts sind. Das Mikrofon eines Headsets hätte jedoch eine andere ID. Dieser Wert ist spezifisch für die Quelle der Track-Daten und kann nicht zum Setzen von Einschränkungen verwendet werden; er kann jedoch für die anfängliche Auswahl von Medien bei einem Aufruf von [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) verwendet werden.

### Instanzeigenschaften von Audiotracks

- [`autoGainControl`](/de/docs/Web/API/MediaTrackSettings/autoGainControl)
  - : Ein Boolean, der den aktuellen Wert der [`autoGainControl`](/de/docs/Web/API/MediaTrackConstraints/autoGainControl) Eigenschaft angibt, der `true` ist, wenn die automatische Verstärkungsregelung aktiviert ist, und `false`, wenn nicht.
- [`channelCount`](/de/docs/Web/API/MediaTrackSettings/channelCount)
  - : Ein Long Integer-Wert, der den aktuellen Wert der [`channelCount`](/de/docs/Web/API/MediaTrackConstraints/channelCount) Eigenschaft angibt, der angibt, wie viele Audiokanäle auf dem Track vorhanden sind (somit angibt, wie viele Audio-Samples in jedem Audio-Frame existieren). Dies ist 1 für Mono, 2 für Stereo und so weiter.
- [`echoCancellation`](/de/docs/Web/API/MediaTrackSettings/echoCancellation)
  - : Ein Boolean, der den aktuellen Wert der [`echoCancellation`](/de/docs/Web/API/MediaTrackConstraints/echoCancellation) Eigenschaft angibt, der `true` ist, wenn die Echounterdrückung aktiviert ist, andernfalls `false`.
- [`latency`](/de/docs/Web/API/MediaTrackSettings/latency)
  - : Ein Fließkommawert mit doppelter Genauigkeit, der den aktuellen Wert der [`latency`](/de/docs/Web/API/MediaTrackConstraints/latency) Eigenschaft angibt, der die Audio-Latenz in Sekunden angibt. Die Latenz ist die Zeit, die zwischen dem Beginn der Verarbeitung des Audios und der Verfügbarkeit der Daten für den nächsten Schritt im Audiobearbeitungsprozess vergeht. Dieser Wert ist ein Zielwert; die tatsächliche Latenz kann aus verschiedenen Gründen leicht variieren.
- [`noiseSuppression`](/de/docs/Web/API/MediaTrackSettings/noiseSuppression)
  - : Ein Boolean, der den aktuellen Wert der [`noiseSuppression`](/de/docs/Web/API/MediaTrackConstraints/noiseSuppression) Eigenschaft angibt, der `true` ist, wenn die Geräuschunterdrückung aktiviert ist, und `false`, wenn nicht.
- [`sampleRate`](/de/docs/Web/API/MediaTrackSettings/sampleRate)
  - : Ein Long Integer-Wert, der den aktuellen Wert der [`sampleRate`](/de/docs/Web/API/MediaTrackConstraints/sampleRate) Eigenschaft angibt, der die Abtastrate in Samples pro Sekunde für die Audiodaten spezifiziert. Standard-Audio in CD-Qualität beispielsweise hat eine Abtastrate von 41.000 Samples pro Sekunde.
- [`sampleSize`](/de/docs/Web/API/MediaTrackSettings/sampleSize)
  - : Ein Long Integer-Wert, der den aktuellen Wert der [`sampleSize`](/de/docs/Web/API/MediaTrackConstraints/sampleSize) Eigenschaft angibt, der die lineare Größe in Bits jedes Audiosamples angibt. Audio in CD-Qualität beispielsweise ist 16-Bit, so dass dieser Wert in diesem Fall 16 wäre.
- [`suppressLocalAudioPlayback`](/de/docs/Web/API/MediaTrackSettings/suppressLocalAudioPlayback)
  - : Steuert, ob das Audio, das in einem Tab wiedergegeben wird, weiterhin aus den lokalen Lautsprechern eines Benutzers abgespielt wird, wenn der Tab erfasst wird.
- [`volume`](/de/docs/Web/API/MediaTrackSettings/volume) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Ein Fließkommawert mit doppelter Genauigkeit, der den aktuellen Wert der [`volume`](/de/docs/Web/API/MediaTrackConstraints/volume) Eigenschaft angibt, der den Lautstärkepegel des Tracks spezifiziert. Dieser Wert liegt zwischen 0.0 (stumm) und 1.0 (maximale unterstützte Lautstärke).

### Instanzeigenschaften von Videotracks

- [`aspectRatio`](/de/docs/Web/API/MediaTrackSettings/aspectRatio)
  - : Ein Fließkommawert mit doppelter Genauigkeit, der den aktuellen Wert der [`aspectRatio`](/de/docs/Web/API/MediaTrackConstraints/aspectRatio) Eigenschaft angibt, die bis zu 10 Dezimalstellen genau spezifiziert ist. Dies ist die Breite des Bildes in Pixeln geteilt durch seine Höhe in Pixeln. Häufige Werte sind 1.3333333333 (für das klassische TV 4:3-"Standard"-{{Glossary("aspect_ratio", "Seitenverhältnis")}}, auch auf Tablets wie dem Apple iPad verwendet), 1.7777777778 (für das 16:9 HD-Widescreen-Seitenverhältnis) und 1.6 (für das 16:10-Seitenverhältnis, das häufig bei Widescreen-Computern und -Tablets verwendet wird).
- [`facingMode`](/de/docs/Web/API/MediaTrackSettings/facingMode)

  - : Ein String, der den aktuellen Wert der [`facingMode`](/de/docs/Web/API/MediaTrackConstraints/facingMode) Eigenschaft angibt, die die Richtung angibt, in die die Kamera zeigt. Der Wert ist einer der folgenden:
    - `"user"`
      - : Eine Kamera, die dem Benutzer zugewandt ist (häufig als "Selfie-Kamera" bekannt), wird für Selbstporträts und Videoanrufe verwendet.
    - `"environment"`
      - : Eine Kamera, die vom Benutzer weg zeigt (während der Benutzer auf den Bildschirm schaut). Dies ist typischerweise die qualitativ hochwertigste Kamera auf dem Gerät, die für allgemeine Fotografie verwendet wird.
    - `"left"`
      - : Eine Kamera, die zur Umgebung links des Benutzers zeigt.
    - `"right"`
      - : Eine Kamera, die zur Umgebung rechts des Benutzers zeigt.

- [`frameRate`](/de/docs/Web/API/MediaTrackSettings/frameRate)
  - : Ein Fließkommawert mit doppelter Genauigkeit, der den aktuellen Wert der [`frameRate`](/de/docs/Web/API/MediaTrackConstraints/frameRate) Eigenschaft angibt, die bestimmt, wie viele Videoframes pro Sekunde der Track enthält. Wenn der Wert aus irgendeinem Grund nicht bestimmt werden kann, wird der Wert der vertikalen Bildwiederholfrequenz des Geräts entsprechen, auf dem der Benutzeragent ausgeführt wird.
- [`height`](/de/docs/Web/API/MediaTrackSettings/height)
  - : Ein Long Integer-Wert, der den aktuellen Wert der [`height`](/de/docs/Web/API/MediaTrackConstraints/height) Eigenschaft angibt, der die Höhe der Videodaten des Tracks in Pixeln spezifiziert.
- [`width`](/de/docs/Web/API/MediaTrackSettings/width)
  - : Ein Long Integer-Wert, der den aktuellen Wert der [`width`](/de/docs/Web/API/MediaTrackSettings/width) Eigenschaft angibt, der die Breite der Videodaten des Tracks in Pixeln spezifiziert.
- [`resizeMode`](/de/docs/Web/API/MediaTrackSettings/resizeMode)
  - : Ein String, der den aktuellen Wert der [`resizeMode`](/de/docs/Web/API/MediaTrackConstraints/resizeMode) Eigenschaft angibt, der den Modus spezifiziert, den der Benutzeragent verwendet, um die Auflösung des Tracks abzuleiten. Der Wert ist einer der folgenden:
    - `"none"`
      - : Der Track hat die Auflösung, die von der Kamera, ihrem Treiber oder dem Betriebssystem angeboten wird.
    - `"crop-and-scale"`
      - : Die Auflösung des Tracks könnte das Ergebnis davon sein, dass der Benutzeragent aus einer höheren Kameraauflösung Zuschnitt oder Verkleinerung verwendet hat.

### Instanzeigenschaften von Bildschirmfreigabe-Tracks

Tracks, die Video enthalten, das von einem Benutzerbildschirm (unabhängig davon, ob die Bildschirmdaten vom gesamten Bildschirm oder einem Teil eines Bildschirms wie einem Fenster oder Tab stammen) freigegeben wird, werden im Allgemeinen wie Videotracks behandelt, mit der Ausnahme, dass sie auch die folgenden zusätzlichen Einstellungen unterstützen:

- [`cursor`](/de/docs/Web/API/MediaTrackSettings/cursor)

  - : Ein String, der angibt, ob der Mauszeiger in dem generierten Stream enthalten ist und unter welchen Bedingungen. Mögliche Werte sind:
    - `always`
      - : Die Maus ist immer im Videoinhalt des {{domxref("MediaStream")}} sichtbar, es sei denn, die Maus wurde aus dem Inhaltsbereich hinaus bewegt.
    - `motion`
      - : Der Mauszeiger ist im Video immer enthalten, wenn er sich bewegt, und für kurze Zeit, nachdem er aufgehört hat, sich zu bewegen.
    - `never`
      - : Der Mauszeiger ist niemals im freigegebenen Video enthalten.

- [`displaySurface`](/de/docs/Web/API/MediaTrackSettings/displaySurface)

  - : Ein String, der den Typ der Quelle angibt, den der Track enthält; einer der folgenden:
    - `browser`
      - : Der Stream enthält den Inhalt eines einzelnen, vom Benutzer ausgewählten Browser-Tabs.
    - `monitor`
      - : Der Video-Track des Streams enthält den gesamten Inhalt eines oder mehrerer Bildschirme des Benutzers.
    - `window`
      - : Der Stream enthält ein einzelnes Fenster, das vom Benutzer zur Freigabe ausgewählt wurde.

- [`logicalSurface`](/de/docs/Web/API/MediaTrackSettings/logicalSurface)
  - : Ein Boolean-Wert, der, wenn `true`, anzeigt, dass das Video im Video-Track des Streams einen Hintergrunddarstellungskontext enthält, anstatt eines für den Benutzer sichtbaren. Dies ist `false`, wenn das erfasste Video von einer Vordergrundquelle (für den Benutzer sichtbar) stammt.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia)
- [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia)
- [`MediaStreamTrack.getConstraints()`](/de/docs/Web/API/MediaStreamTrack/getConstraints)
- [`MediaStreamTrack.applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints)
- [`MediaStreamTrack.getSettings()`](/de/docs/Web/API/MediaStreamTrack/getSettings)
