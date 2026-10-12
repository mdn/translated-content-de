---
title: "MediaStreamTrack: Methode getSettings()"
short-title: getSettings()
slug: Web/API/MediaStreamTrack/getSettings
l10n:
  sourceCommit: 1a2a5b56a689b441ebf3be91b90f15746c5a5a01
---

{{APIRef("Media Capture and Streams")}}

Die Methode **`getSettings()`** der Schnittstelle [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) gibt ein Objekt zurück, das die aktuellen Werte aller einschränkbaren Eigenschaften des aktuellen `MediaStreamTrack` enthält.

Unter [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints) erfahren Sie, wie Sie mit einschränkbaren Eigenschaften arbeiten.

## Syntax

```js-nolint
getSettings()
```

### Parameter

Keine.

### Rückgabewert

Ein Objekt, das die aktuelle Konfiguration der einschränkbaren Eigenschaften des Tracks beschreibt.

> [!NOTE]
> Das zurückgegebene Objekt enthält die aktuellen Werte aller einschränkbaren Eigenschaften – auch dann, wenn es sich um Plattform-Standardwerte handelt, die nicht ausdrücklich durch den Code der Website festgelegt wurden. Um stattdessen die zuletzt vom Code der Website festgelegten Einschränkungen für die Eigenschaften des Tracks abzurufen, verwenden Sie [`getConstraints()`](/de/docs/Web/API/MediaStreamTrack/getConstraints).

Diese Werte entsprechen so weit wie möglich den Einschränkungen, die zuvor mit einem [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Objekt beschrieben und mit [`applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) festgelegt wurden. Für Eigenschaften, deren Einschränkungen nicht geändert wurden oder deren angepasste Einschränkungen nicht erfüllt werden konnten, gelten die Standardeinschränkungen. So können Sie ermitteln, welcher Wert für jede Eigenschaft gewählt wurde, um die beim Aufruf von [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) oder [`MediaStreamTrack.applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) angegebenen Einschränkungen zu erfüllen.

Einige der aufgeführten Eigenschaften sind möglicherweise nicht im Objekt enthalten, weil sie entweder vom Browser nicht unterstützt werden oder im jeweiligen Kontext nicht verfügbar sind.

Da {{Glossary("RTP", "RTP")}} beispielsweise bei der Aushandlung einer WebRTC-Verbindung einige dieser Werte nicht bereitstellt, enthält ein mit einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) verknüpfter Track die folgenden Eigenschaften nicht:

- `deviceId`
- `groupId`
- `echoCancellation`
- `latency`
- `facingMode`

#### Eigenschaften aller Medientracks

- `deviceId`
  - : Eine Zeichenfolge, die die Quelle des entsprechenden [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) für die mit der Browsersitzung verknüpfte Origin eindeutig identifiziert. Diese ID bleibt über mehrere Browsersitzungen derselben Origin hinweg gültig und ist für alle anderen Origins garantiert unterschiedlich. Sie können sie daher beispielsweise verwenden, um für mehrere Sitzungen dieselbe Quelle anzufordern.

    Alle Tracks mit derselben Quelle haben für eine bestimmte Origin dieselbe ID. Daher gibt [`MediaStreamTrack.getCapabilities()`](/de/docs/Web/API/MediaStreamTrack/getCapabilities) für `deviceId` immer genau einen Wert zurück. Die Geräte-ID eignet sich somit nicht, um Einschränkungen beim Aufruf von [`MediaStreamTrack.applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) zu ändern. Sie kann jedoch bei einem Aufruf von [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) verwendet werden, um Medienquellen zunächst auszuwählen.

    > [!NOTE]
    > Eine Ausnahme von der Regel, dass Geräte-IDs über Browsersitzungen hinweg gleich bleiben, ist der private Modus: Dort wird eine andere ID verwendet, die sich mit jeder Browsersitzung ändert.

    Der tatsächliche Wert der Zeichenfolge wird durch die Quelle des Tracks bestimmt. Es ist nicht garantiert, welches Format er hat, auch wenn die Spezifikation eine [GUID](https://en.wikipedia.org/wiki/Universally_unique_identifier) empfiehlt.

- `groupId`
  - : Eine Zeichenfolge, die die Gerätegruppe eindeutig identifiziert, zu der die Quelle des [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) gehört. Zwei durch ihre `deviceId` identifizierte Geräte gelten als Teil derselben Gruppe, wenn sie zum selben physischen Gerät gehören. Beispielsweise hätten die Audioeingabe- und Audioausgabegeräte für den Lautsprecher und das Mikrofon eines Smartphones dieselbe Gruppen-ID, da sie zum selben physischen Gerät gehören. Das Mikrofon eines Headsets hätte dagegen eine andere ID.

    Diese ID ist nur innerhalb einer Browsersitzung eindeutig und kann nicht über mehrere Browsersitzungen hinweg verwendet werden. Bei einem Aufruf von [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) kann sie jedoch verwendet werden, um sicherzustellen, dass verschiedene Tracks dasselbe Gerät verwenden oder nicht verwenden – etwa dasselbe Headset für Ein- und Ausgabe. Beim Aufruf von `applyConstraints()` ist `groupId` nicht nützlich, da sich der Wert nicht ändern lässt.

    Der tatsächliche Wert der Zeichenfolge wird durch die Quelle des Tracks bestimmt. Es ist nicht garantiert, welches Format er hat, auch wenn die Spezifikation eine GUID empfiehlt.

#### Eigenschaften von Audiotracks

- `autoGainControl`
  - : Ein boolescher Wert, der angibt, ob die automatische Verstärkungsregelung (AGC) aktiviert ist. Sie ermöglicht es einer Audioquelle, Änderungen der Lautstärke des Quellmediums automatisch auszugleichen, um einen gleichmäßigen Gesamtpegel zu erhalten. Diese Funktion wird üblicherweise bei Mikrofonen eingesetzt, kann aber auch von anderen Eingabequellen bereitgestellt werden.
- `channelCount`
  - : Eine Ganzzahl, die die Anzahl der Audiokanäle im Track angibt und damit, wie viele Audiosamples jeder Audioframe enthält. Der Wert ist 1 für Mono, 2 für Stereo und so weiter.
- `echoCancellation`
  - : Ein boolescher Wert, der angibt, ob die Echounterdrückung aktiviert ist. Die Echounterdrückung versucht, Echoeffekte bei einer bidirektionalen Audioverbindung zu vermeiden, indem sie Übersprechen zwischen den Ein- und Ausgabegeräten der Benutzerin oder des Benutzers reduziert oder beseitigt. Beispielsweise kann sie einen Filter anwenden, der verhindert, dass der von den Lautsprechern erzeugte Ton in den vom Mikrofon erzeugten Eingabetrack gelangt.
- `latency`
  - : Eine Gleitkommazahl, die die Audiolatenz in Sekunden angibt. Die Latenz ist die Zeitspanne zwischen dem Beginn der Audioverarbeitung und dem Zeitpunkt, zu dem die Daten für den nächsten Verarbeitungsschritt verfügbar sind. Dieser Wert ist ein Zielwert; die tatsächliche Latenz kann aus verschiedenen Gründen abweichen, unter anderem durch den Aufwand für CPU, Übertragung und Speicherung.
- `noiseSuppression`
  - : Ein boolescher Wert, der angibt, ob die Rauschunterdrückung aktiviert ist. Sie filtert das Audio automatisch, um Hintergrundgeräusche, Gerätebrummen und Ähnliches zu entfernen, bevor der Ton an Ihren Code übergeben wird. Diese Funktion wird üblicherweise bei Mikrofonen eingesetzt, kann aber auch von anderen Eingabequellen bereitgestellt werden.
- `restrictOwnAudio`
  - : Ein boolescher Wert, der angibt, ob der Browser bei einer Bildschirmaufnahme versucht, Systemaudio herauszufiltern, das vom aufnehmenden Tab stammt. Wenn die aufnehmende Webseite beispielsweise selbst eingebettetes Audio oder Video abspielt, wäre dessen Ton in der Aufnahme enthalten. Da dies zu einem unerwünschten Echo führen oder die beabsichtigten Audioquellen anderer Tabs oder Anwendungen stören könnte, ist es sinnvoll, diesen Ton aus der Aufnahme zu entfernen. Falls die Entfernung durch Verarbeitung fehlschlägt, kann der User Agent sämtliches Audio aus dem aufnehmenden Tab ausschließen.

    > [!NOTE]
    > Wenn die aufgenommene Anzeigefläche kein Systemaudio enthält, hat diese Einstellung keine Auswirkungen.
- `sampleRate`
  - : Eine Ganzzahl, die die Abtastrate der Audiodaten in Samples pro Sekunde angibt. Häufige Werte sind 44.100 (Standard-CD-Audio), 48.000 (digitales Standardaudio), 96.000 (häufig für Audio-Mastering und Postproduktion verwendet) und 192.000 (für hochauflösendes Audio bei professionellen Aufnahmen und beim Mastering). Um die benötigte Bandbreite zu verringern, werden jedoch häufig niedrigere Werte verwendet: 8.000 Samples pro Sekunde reichen für verständliche, wenn auch nicht perfekte menschliche Sprache aus. Sowohl 11.025 als auch 22.050 werden häufig für Ton und Musik mit geringerer Qualität und niedrigem Bandbreitenbedarf verwendet.
- `sampleSize`
  - : Eine Ganzzahl, die die lineare Größe jedes Audiosamples in Bit angibt. Am häufigsten werden 16 Bit pro Sample verwendet, beispielsweise für CD-Audio. Weitere übliche Sample-Größen sind 8 Bit (für geringeren Bandbreitenbedarf) und 24 Bit (für hochauflösendes professionelles Audio).

    Jeder Audiokanal des Tracks benötigt `sampleSize` Bit. Das bedeutet, dass ein Sample tatsächlich (`sampleSize` / 8) \* `channelCount` Byte Daten verwendet. 16-Bit-Stereo-Audio benötigt beispielsweise (16/8)\*2, also 4 Byte pro Sample.
- `suppressLocalAudioPlayback`
  - : Ein boolescher Wert, der angibt, ob Audio, das in einem Tab abgespielt wird, während der Aufnahme des Tabs nicht mehr über die lokalen Lautsprecher der Benutzerin oder des Benutzers ausgegeben wird. Wenn Sie beispielsweise einen Videoanruf an ein externes AV-System in einem Konferenzraum übertragen, soll der Ton über das AV-System und nicht über die lokalen Lautsprecher ausgegeben werden. So ist er lauter und klarer und bleibt außerdem mit dem Konferenzvideo synchron.
- `volume` {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Eine Gleitkommazahl, die den Lautstärkepegel des Tracks angibt. Der Wert liegt zwischen 0.0 (stumm) und 1.0 (maximal vom Gerät unterstützte Lautstärke).

#### Eigenschaften von Videotracks

- `aspectRatio`
  - : Eine Gleitkommazahl, die die Breite des Bildes in Pixeln geteilt durch seine Höhe in Pixeln angibt, mit einer Genauigkeit von mindestens 10 Nachkommastellen. Häufige Werte sind 1.3333333333 (für das klassische 4:3-Standard-{{Glossary("aspect_ratio", "Seitenverhältnis")}} bei Fernsehgeräten, das auch bei Tablets wie Apples iPad verwendet wird), 1.7777777778 (für das 16:9-Seitenverhältnis von HD-Breitbildformaten) und 1.6 (für das bei Breitbildcomputern und -tablets verbreitete 16:10-Seitenverhältnis).
- `facingMode`
  - : Eine Zeichenfolge, die angibt, in welche Richtung die Kamera zeigt. Der Wert ist einer der folgenden:
    - `"user"`
      - : Die Videoquelle ist auf die Benutzerin oder den Benutzer gerichtet (oft als „Selfie-Kamera“ bezeichnet). Dazu gehört beispielsweise die Frontkamera eines Smartphones.
    - `"environment"`
      - : Die Videoquelle ist von der Benutzerin oder dem Benutzer weggerichtet und erfasst die Umgebung. Bei einem Smartphone ist dies die Rückkamera. Sie ist in der Regel die qualitativ hochwertigste Kamera des Geräts und wird für allgemeine Fotoaufnahmen verwendet.
    - `"left"`
      - : Die Videoquelle ist auf die Benutzerin oder den Benutzer gerichtet, befindet sich aber links davon, beispielsweise eine Kamera, die über die linke Schulter hinweg auf die Person gerichtet ist.
    - `"right"`
      - : Die Videoquelle ist auf die Benutzerin oder den Benutzer gerichtet, befindet sich aber rechts davon, beispielsweise eine Kamera, die über die rechte Schulter hinweg auf die Person gerichtet ist.

    Diese Werte können unterschiedliche Kameras bezeichnen oder Richtungen, in die eine verstellbare Kamera ausgerichtet werden kann.

- `frameRate`
  - : Eine Gleitkommazahl, die angibt, wie viele Videoframes pro Sekunde der Track enthält. Falls sich der Wert aus irgendeinem Grund nicht bestimmen lässt, entspricht er der vertikalen Synchronisationsrate des Geräts, auf dem der User Agent ausgeführt wird.
- `height`
  - : Eine Ganzzahl, die die Höhe der Videodaten des Tracks in Pixeln angibt.
- `width`
  - : Eine Ganzzahl, die die Breite der Videodaten des Tracks in Pixeln angibt.
- `resizeMode`
  - : Eine Zeichenfolge, die angibt, in welchem Modus der User Agent die Auflösung des Tracks ermittelt. Der Wert ist einer der folgenden:
    - `"none"`
      - : Der Track hat die Auflösung, die von der Kamera, ihrem Treiber oder dem Betriebssystem bereitgestellt wird.
    - `"crop-and-scale"`
      - : Die Auflösung des Tracks kann dadurch entstanden sein, dass der User Agent ein Bild mit höherer Kameraauflösung zugeschnitten oder herunterskaliert hat.

#### Eigenschaften freigegebener Bildschirmtracks

Tracks, die ein vom Bildschirm einer Benutzerin oder eines Benutzers freigegebenes Video enthalten, werden im Allgemeinen wie Videotracks behandelt. Das gilt unabhängig davon, ob die Bildschirmdaten vom gesamten Bildschirm oder nur von einem Teil davon stammen, etwa einem Fenster oder Tab. Zusätzlich unterstützen sie die folgenden Einstellungen:

- `cursor`
  - : Eine Zeichenfolge, die angibt, ob und unter welchen Bedingungen der Mauszeiger im erzeugten Stream enthalten ist. Mögliche Werte sind:
    - `always`
      - : Der Mauszeiger ist im Videoinhalt des [`MediaStream`](/de/docs/Web/API/MediaStream) immer sichtbar, sofern er den Bereich des Inhalts nicht verlassen hat.
    - `motion`
      - : Der Mauszeiger ist im Video enthalten, solange er sich bewegt, und noch für kurze Zeit, nachdem er zum Stillstand gekommen ist.
    - `never`
      - : Der Mauszeiger ist im freigegebenen Video nie enthalten.

- `displaySurface`
  - : Eine Zeichenfolge, die den Typ der im Track enthaltenen Quelle angibt. Der Wert ist einer der folgenden:
    - `browser`
      - : Der Videotrack des Streams zeigt den gesamten Inhalt eines einzelnen Browser-Tabs, den die Benutzerin oder der Benutzer beim Aufruf von [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) ausgewählt hat.
    - `monitor`
      - : Der Videotrack des Streams zeigt den vollständigen Inhalt eines oder mehrerer Bildschirme der Benutzerin oder des Benutzers. Leere Bereiche, die durch unterschiedliche Bildschirmabmessungen entstehen, werden mit einem vom User Agent gewählten Hintergrund gefüllt.
    - `window`
      - : Der Videotrack des Streams zeigt den Inhalt eines einzelnen von der Benutzerin oder dem Benutzer ausgewählten Fensters. Das Fenster kann zu einer beliebigen Anwendung gehören, nicht nur zum User Agent.

    Nicht alle User Agents unterstützen sämtliche dieser Typen von Anzeigeflächen.

- `logicalSurface`
  - : Ein boolescher Wert, der angibt, ob es sich bei der aufgenommenen Anzeigefläche um eine logische Fläche handelt. Logische Flächen müssen nicht vollständig auf dem Bildschirm sichtbar sein und können sich sogar außerhalb des sichtbaren Bildschirms befinden. Beispiele sind Hintergrundpuffer von Fenstern, bei denen ohne Scrollen des zugehörigen Fensters nur ein Teil des Puffers sichtbar ist, sowie Offscreen-Rendering-Kontexte. Eine sichtbare Anzeigefläche (also eine Fläche, für die `logicalSurface` den Wert `false` zurückgibt) ist der Teil einer logischen Anzeigefläche, der momentan auf dem Bildschirm sichtbar ist.

    Ein häufiges Szenario für eine logische Anzeigefläche ist eine ausgewählte Fläche, die den gesamten Inhaltsbereich eines Fensters umfasst, das zu groß ist, um vollständig auf dem Bildschirm angezeigt zu werden. Da das Fenster gescrollt werden muss, um den übrigen Inhalt anzuzeigen, handelt es sich um eine logische Fläche.

    Ein User Agent _kann_ beispielsweise zulassen, dass die Benutzerin oder der Benutzer zwischen der Freigabe des gesamten Dokuments (eine `browser`-Fläche mit `logicalSurface` gleich `true`) und der Freigabe nur des derzeit sichtbaren Dokumentausschnitts (bei dem `logicalSurface` der `browser`-Fläche `false` ist) wählt.

- `screenPixelRatio`
  - : Eine Zahl, die das Verhältnis zwischen der physischen und der logischen Auflösung angibt. Sie kann weder als Einschränkung noch als Fähigkeit verwendet werden. Der Wert wird berechnet, indem die Größe eines {{Glossary("CSS_pixel", "CSS-Pixels")}} bei einem Seitenzoom von `1.0` und einem Skalierungsfaktor von `1.0` auf dem aufnehmenden Bildschirm durch die vertikale Größe eines Pixels der aufgenommenen [Anzeigefläche](/de/docs/Web/API/MediaTrackConstraints/displaySurface) geteilt wird.

    Häufig wird ein Bildschirm über das Betriebssystem skaliert, beispielsweise wenn bei einem hochauflösenden Bildschirm Grafiken in derselben physischen Größe wie auf einem Bildschirm mit Standardauflösung angezeigt werden sollen. Die Auflösung vor der Skalierung heißt **logische Auflösung**, die Auflösung nach der Skalierung **physische Auflösung**.

    Beispiele:

    - Wird die aufgenommene Anzeigefläche auf einem Bildschirm mit Standardauflösung dargestellt, auf dem die Abmessungen physischer Pixel ungefähr denen von CSS-Pixeln entsprechen, gibt `screenPixelRatio` den Wert `1` zurück.
    - Wird die aufgenommene Anzeigefläche dagegen auf einem hochauflösenden Bildschirm dargestellt, auf dem die Abmessungen physischer Pixel ungefähr halb so groß sind wie die von CSS-Pixeln (sodass jedes CSS-Pixel 4 physische Pixel verwendet), gibt `screenPixelRatio` den Wert `2` zurück.

    Wenn der aufgenommene Bildschirm der sendenden Seite vergrößert dargestellt wird, ist die physische Auflösung höher als die logische Auflösung. Eine Videokonferenzanwendung kann daher Bandbreite und CPU-Ressourcen sparen, indem sie:

    1. die vom Betriebssystem auf die aufgenommene Anzeigefläche angewendete Skalierung rückgängig macht;
    2. das Video der Bildschirmaufnahme in der logischen Auflösung sendet;
    3. nach dem Empfang auf dem entfernten Client erneut skaliert, um es wieder in seiner physischen Auflösung darzustellen.

    Diese Eigenschaft ermöglicht es Anwendungen, die die [Screen Capture API](/de/docs/Web/API/Screen_Capture_API) verwenden, Ressourcen zu sparen, indem sie das Video einer Bildschirmaufnahme in seiner logischen beziehungsweise geräteunabhängigen Auflösung senden.

## Beispiele

### Grundlegende Verwendung von `screenPixelRatio`

In diesem Beispiel definiert die Anwendung eine Konstante `RESOLUTION_LIMIT`. Sie bezeichnet den Skalierungsfaktor, ab dem die sendende Anwendung das Video in der logischen statt in der physischen Auflösung senden soll.

Wenn `screenPixelRatio` diesen Grenzwert überschreitet, berechnet die Anwendung mithilfe des Werts von `screenPixelRatio` die logische Auflösung aus der physischen Auflösung und beschränkt anschließend den aufgenommenen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) auf die logische Auflösung.

```js
const RESOLUTION_LIMIT = 1.5;

async function startCapture() {
  const stream = await navigator.mediaDevices.getDisplayMedia({
    video: true,
  });
  const track = stream.getVideoTracks()[0];
  const settings = track.getSettings();
  const capabilities = track.getCapabilities();

  if (settings.screenPixelRatio > RESOLUTION_LIMIT) {
    const physicalWidth = capabilities.width.max;
    const physicalHeight = capabilities.height.max;
    const logicalWidth = physicalWidth / settings.screenPixelRatio;
    const logicalHeight = physicalHeight / settings.screenPixelRatio;
    await track.applyConstraints({
      width: logicalWidth,
      height: logicalHeight,
    });
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Screen Capture API](/de/docs/Web/API/Screen_Capture_API)
- [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- [Verwendung der Screen Capture API](/de/docs/Web/API/Screen_Capture_API/Using_Screen_Capture)
- [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia)
- [`MediaStreamTrack.getConstraints()`](/de/docs/Web/API/MediaStreamTrack/getConstraints)
- [`MediaStreamTrack.applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints)
- [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia)
