---
title: MediaTrackSettings
slug: Web/API/MediaTrackSettings
l10n:
  sourceCommit: c9e9f9f4faf2e8a5985e5834d9424557341f33c9
---

{{APIRef("Media Capture and Streams")}}

Das **`MediaTrackSettings`** Dictionary wird verwendet, um die aktuell konfigurierten Werte für jede der Einstellungen eines {{domxref("MediaStreamTrack")}} zurückzugeben. Diese Werte werden so eng wie möglich an zuvor beschriebenen Einschränkungen orientiert sein, die mit einem {{domxref("MediaTrackConstraints")}} Objekt festgelegt und mit {{domxref("MediaStreamTrack.applyConstraints", "applyConstraints()")}} angewendet wurden. Sie orientieren sich an den Standardeinschränkungen für alle Eigenschaften, deren Einschränkungen nicht geändert wurden oder deren benutzerdefinierte Einschränkungen nicht erfüllt werden konnten.

Um mehr über Funktionsweise von Einschränkungen und Einstellungen zu erfahren, siehe [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints).

## Instanz-Eigenschaften

Einige oder alle der folgenden Eigenschaften werden im Objekt enthalten sein, entweder weil sie von dem Browser nicht unterstützt werden oder aufgrund des Kontexts nicht verfügbar sind. Zum Beispiel, weil {{Glossary("RTP")}} einige dieser Werte während der Verhandlung einer WebRTC-Verbindung nicht bereitstellt, wird ein mit einer {{domxref("RTCPeerConnection")}} verbundener Track bestimmte Werte nicht enthalten, wie z. B. {{domxref("MediaTrackSettings.facingMode", "facingMode")}} oder {{domxref("MediaTrackSettings.groupId", "groupId")}}.

### Instanz-Eigenschaften aller Medientracks

- {{domxref("MediaTrackSettings.deviceId", "deviceId")}}
  - : Ein String, der den aktuellen Wert der {{domxref("MediaTrackConstraints.deviceId", "deviceId")}} Eigenschaft angibt. Die Geräte-ID ist ein ursprungs-spezifischer String, der die Quelle des Tracks identifiziert; dies ist normalerweise eine [GUID](https://en.wikipedia.org/wiki/Universally_unique_identifier). Dieser Wert ist spezifisch für die Quelle der Track-Daten und kann nicht zum Festlegen von Einschränkungen verwendet werden; er kann jedoch für die anfängliche Auswahl von Medien beim Aufruf von {{domxref("MediaDevices.getUserMedia()")}} verwendet werden.
- {{domxref("MediaTrackSettings.groupId", "groupId")}}
  - : Ein String, der den aktuellen Wert der {{domxref("MediaTrackConstraints.groupId", "groupId")}} Eigenschaft angibt. Die Gruppen-ID ist ein browsing-sitzungs-unikater String, der die Quellgruppe des Tracks identifiziert. Zwei Geräte (wie durch die {{domxref("MediaTrackSettings.deviceId", "deviceId")}} identifiziert) werden als Teil derselben Gruppe betrachtet, wenn sie von demselben physischen Gerät stammen. Zum Beispiel würden die Audioeingangs- und -ausgangsgeräte für Lautsprecher und Mikrofon in einem Telefon dieselbe Gruppen-ID haben, da sie Teil desselben physischen Geräts sind. Das Mikrofon an einem Headset hätte jedoch eine andere ID. Dieser Wert ist spezifisch für die Quelle der Track-Daten und kann nicht zum Festlegen von Einschränkungen verwendet werden; er kann jedoch für die anfängliche Auswahl von Medien beim Aufruf von {{domxref("MediaDevices.getUserMedia()")}} verwendet werden.

### Instanz-Eigenschaften von Audiotracks

- {{domxref("MediaTrackSettings.autoGainControl", "autoGainControl")}}
  - : Ein Boolean, der den aktuellen Wert der {{domxref("MediaTrackConstraints.autoGainControl", "autoGainControl")}} Eigenschaft angibt, der `true` ist, wenn automatische Verstärkungsregelung aktiviert ist, und `false`, wenn nicht.
- {{domxref("MediaTrackSettings.channelCount", "channelCount")}}
  - : Ein langer ganzzahliger Wert, der den aktuellen Wert der {{domxref("MediaTrackConstraints.channelCount", "channelCount")}} Eigenschaft angibt und die Anzahl der Audiokanäle angibt, die auf dem Track vorhanden sind (indem angezeigt wird, wie viele Audio-Samples in jedem Audio-Frame existieren). Dies ist 1 für Mono, 2 für Stereo und so weiter.
- {{domxref("MediaTrackSettings.echoCancellation", "echoCancellation")}}
  - : Ein Boolean, der den aktuellen Wert der {{domxref("MediaTrackConstraints.echoCancellation", "echoCancellation")}} Eigenschaft angibt, wobei `true` angegeben wird, wenn Echounterdrückung aktiviert ist, andernfalls `false`.
- {{domxref("MediaTrackSettings.latency", "latency")}}
  - : Ein doppelpräziser Gleitkommawert, der den aktuellen Wert der {{domxref("MediaTrackConstraints.latency", "latency")}} Eigenschaft angibt und die Audio-Latenz in Sekunden spezifiziert. Latenz ist die Zeitspanne, die zwischen dem Beginn der Audioverarbeitung und der Bereitstellung der Daten für den nächsten Schritt im Audioverarbeitungsprozess vergeht. Dieser Wert ist ein Zielwert; die tatsächliche Latenz kann aus verschiedenen Gründen in gewissem Umfang variieren.
- {{domxref("MediaTrackSettings.noiseSuppression", "noiseSuppression")}}
  - : Ein Boolean, der den aktuellen Wert der {{domxref("MediaTrackConstraints.noiseSuppression", "noiseSuppression")}} Eigenschaft angibt, der `true` ist, wenn Geräuschunterdrückung aktiviert ist, und `false`, wenn nicht.
- {{domxref("MediaTrackSettings.sampleRate", "sampleRate")}}
  - : Ein langer ganzzahliger Wert, der den aktuellen Wert der {{domxref("MediaTrackConstraints.sampleRate", "sampleRate")}} Eigenschaft angibt und die Samplerate in Abtastungen pro Sekunde der Audiodaten angibt. Standardmäßige CD-Qualitäts-Audio hat zum Beispiel eine Abtastrate von 41.000 Abtastungen pro Sekunde.
- {{domxref("MediaTrackSettings.sampleSize", "sampleSize")}}
  - : Ein langer ganzzahliger Wert, der den aktuellen Wert der {{domxref("MediaTrackConstraints.sampleSize", "sampleSize")}} Eigenschaft angibt, der die lineare Größe in Bits jeder Audiosample spezifiziert. CD-Qualitäts-Audio ist zum Beispiel 16-Bit, daher wäre dieser Wert in diesem Fall 16.
- {{domxref("MediaTrackSettings.volume", "volume")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Ein doppelpräziser Gleitkommawert, der den aktuellen Wert der {{domxref("MediaTrackConstraints.volume", "volume")}} Eigenschaft angibt und den Lautstärkepegel des Tracks spezifiziert. Dieser Wert liegt zwischen 0.0 (stumm) und 1.0 (maximal unterstützte Lautstärke).

### Instanz-Eigenschaften von Videotracks

- {{domxref("MediaTrackSettings.aspectRatio", "aspectRatio")}}
  - : Ein doppelpräziser Gleitkommawert, der den aktuellen Wert der {{domxref("MediaTrackConstraints.aspectRatio", "aspectRatio")}} Eigenschaft angibt, die genau auf 10 Dezimalstellen angegeben ist. Dies ist die Breite des Bildes in Pixeln, geteilt durch seine Höhe in Pixeln. Häufige Werte sind 1.3333333333 (für das klassische Fernsehformat 4:3 "Standard-" {{glossary("aspect ratio")}}, das auch auf Tablets wie Apples iPad verwendet wird), 1.7777777778 (für das 16:9-High-Definition-Breitbildformat) und 1.6 (für das auf Breitbild-Computern und Tablets häufige 16:10-Format).
- {{domxref("MediaTrackSettings.facingMode", "facingMode")}}

  - : Ein String, der den aktuellen Wert der {{domxref("MediaTrackConstraints.facingMode", "facingMode")}} Eigenschaft angibt und die Richtung spezifiziert, in die die Kamera zeigt. Der Wert wird einer der folgenden sein:

    - `"user"`
      - : Eine Kamera, die auf den Benutzer zeigt (allgemein als "Selfie-Kamera" bekannt), verwendet für Selbstporträts und Videotelefonie.
    - `"environment"`
      - : Eine Kamera, die vom Benutzer weg zeigt (wenn der Benutzer auf den Bildschirm schaut). Dies ist typischerweise die qualitativ hochwertigste Kamera auf dem Gerät, die für allgemeine Fotografie verwendet wird.
    - `"left"`
      - : Eine Kamera, die zur Umgebung auf der linken Seite des Benutzers zeigt.
    - `"right"`
      - : Eine Kamera, die zur Umgebung auf der rechten Seite des Benutzers zeigt.

- {{domxref("MediaTrackSettings.frameRate", "frameRate")}}
  - : Ein doppelpräziser Gleitkommawert, der den aktuellen Wert der {{domxref("MediaTrackConstraints.frameRate", "frameRate")}} Eigenschaft angibt und angibt, wie viele Videoframes pro Sekunde der Track enthält. Wenn der Wert aus irgendeinem Grund nicht bestimmt werden kann, wird der Wert der vertikalen Synchronisierungsrate des Geräts entsprechen, auf dem der Benutzeragent läuft.
- {{domxref("MediaTrackSettings.height", "height")}}
  - : Ein langer ganzzahliger Wert, der den aktuellen Wert der {{domxref("MediaTrackConstraints.height", "height")}} Eigenschaft angibt und die Höhe der Videodaten des Tracks in Pixeln spezifiziert.
- {{domxref("MediaTrackSettings.width", "width")}}
  - : Ein langer ganzzahliger Wert, der den aktuellen Wert der {{domxref("MediaTrackSettings.width", "width")}} Eigenschaft angibt und die Breite der Videodaten des Tracks in Pixeln spezifiziert.
- {{domxref("MediaTrackSettings.resizeMode", "resizeMode")}}

  - : Ein String, der den aktuellen Wert der {{domxref("MediaTrackConstraints.resizeMode", "resizeMode")}} Eigenschaft angibt und den Modus spezifiziert, der vom Benutzeragenten verwendet wird, um die Auflösung des Tracks zu bestimmen. Der Wert wird einer der folgenden sein:

    - `"none"`
      - : Der Track hat die von der Kamera, ihrem Treiber oder dem Betriebssystem angebotene Auflösung.
    - `"crop-and-scale"`
      - : Die Auflösung des Tracks könnte das Ergebnis des Benutzens von Zuschneiden oder Herunterskalieren von einer höheren Kameraauflösung durch den Benutzeragenten sein.

### Instanz-Eigenschaften von freigegebenen Bildschirmtracks

Tracks, die Video von einem Benutzerbildschirm freigeben (unabhängig davon, ob die Bildschirminformationen vom gesamten Bildschirm oder einem Teilbildschirm wie einem Fenster oder Tab stammen), werden im Allgemeinen wie Videotracks behandelt, mit der Ausnahme, dass sie auch die folgenden zusätzlichen Einstellungen unterstützen:

- {{domxref("MediaTrackSettings.cursor", "cursor")}}

  - : Ein String, der angibt, ob der Mauszeiger im generierten Stream enthalten ist und unter welchen Bedingungen. Mögliche Werte sind:

    - `always`
      - : Die Maus ist immer im Video-Inhalt der {domxref("MediaStream") enthalten, es sei denn, die Maus hat sich aus dem Bereich des Inhalts bewegt.
    - `motion`
      - : Der Mauszeiger wird immer in das Video aufgenommen, wenn er sich bewegt, und für kurze Zeit, nachdem er aufgehört hat, sich zu bewegen.
    - `never`
      - : Der Mauszeiger wird nie im freigegebenen Video angezeigt.

- {{domxref("MediaTrackSettings.displaySurface", "displaySurface")}}

  - : Ein String, der den Typ der Quelle spezifiziert, die der Track enthält; einer der folgenden:

    - `application`
      - : Der Stream enthält alle Fenster der vom Benutzer gewählten Anwendung, die in einen Videotrack gerendert werden.
    - `browser`
      - : Der Stream enthält den Inhalt eines einzelnen Browser-Tabs, der vom Benutzer ausgewählt wird.
    - `monitor`
      - : Der Videotrack des Streams enthält den gesamten Inhalt eines oder mehrerer Bildschirme des Benutzers.
    - `window`
      - : Der Stream enthält ein einzelnes Fenster, das vom Benutzer zur Freigabe ausgewählt wurde.

- {{domxref("MediaTrackSettings.logicalSurface", "logicalSurface")}}
  - : Ein Boolean-Wert, der, wenn `true`, anzeigt, dass das Video im Videotrack des Streams einen Hintergrund-Rendering-Kontext enthält, anstatt eines benutzer-sichtbaren. Dies ist `false`, wenn das erfasste Video aus einer Vordergrund- (benutzer-sichtbaren) Quelle stammt.

## Spezifikationen

{{Specifications}}

## Siehe auch

- {{domxref("MediaDevices.getUserMedia()")}}
- {{domxref("MediaDevices.getDisplayMedia()")}}
- {{domxref("MediaStreamTrack.getConstraints()")}}
- {{domxref("MediaStreamTrack.applyConstraints()")}}
- {{domxref("MediaStreamTrack.getSettings()")}}
