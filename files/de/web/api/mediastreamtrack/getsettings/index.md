---
title: "MediaStreamTrack: Methode getSettings()"
short-title: getSettings()
slug: Web/API/MediaStreamTrack/getSettings
l10n:
  sourceCommit: b1bb1b27224e37b2045c6a16b5f9cfa817d0df89
---

{{APIRef("Media Capture and Streams")}}

Die Methode **`getSettings()`** der Schnittstelle [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) gibt ein Objekt zurück, das die aktuellen Werte aller einschränkbaren Eigenschaften des aktuellen `MediaStreamTrack` enthält.

Weitere Informationen zum Umgang mit einschränkbaren Eigenschaften finden Sie unter [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints).

## Syntax

```js-nolint
getSettings()
```

### Parameter

Keine.

### Rückgabewert

Ein Objekt, das die aktuelle Konfiguration der einschränkbaren Eigenschaften des Tracks beschreibt.

> [!NOTE]
> Das zurückgegebene Objekt enthält die aktuellen Werte aller einschränkbaren Eigenschaften. Dazu gehören auch Werte, die aus Plattformstandards stammen, statt ausdrücklich durch den Code der Website festgelegt worden zu sein. Um stattdessen die zuletzt durch den Code der Website festgelegten Einschränkungen für die Eigenschaften des Tracks abzurufen, verwenden Sie [`getConstraints()`](/de/docs/Web/API/MediaStreamTrack/getConstraints).

Diese Werte entsprechen so weit wie möglich den Einschränkungen, die zuvor mit einem [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Objekt beschrieben und mit [`applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) festgelegt wurden. Für Eigenschaften, deren Einschränkungen nicht geändert wurden oder deren benutzerdefinierte Einschränkungen nicht erfüllt werden konnten, gelten die Standardeinschränkungen. So können Sie ermitteln, welcher Wert ausgewählt wurde, um die von Ihnen angegebenen Einschränkungen für jede Eigenschaft einzuhalten, die beim Aufruf von [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) oder [`MediaStreamTrack.applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) angegeben wurde.

Einige der aufgeführten Eigenschaften sind möglicherweise nicht im Objekt enthalten, weil sie vom Browser nicht unterstützt werden oder im jeweiligen Kontext nicht verfügbar sind.

Da {{Glossary("RTP", "RTP")}} beispielsweise einige dieser Werte bei der Aushandlung einer WebRTC-Verbindung nicht bereitstellt, enthält ein mit einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) verknüpfter Track die folgenden Eigenschaften nicht:

- `deviceId`
- `groupId`
- `echoCancellation`
- `latency`
- `facingMode`

#### Eigenschaften aller Medientracks

- `deviceId`
  - : Ein String, der die Quelle des entsprechenden [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) für die Origin der Browsersitzung eindeutig identifiziert. Diese ID bleibt über mehrere Browsersitzungen derselben Origin hinweg gültig und unterscheidet sich garantiert von den IDs aller anderen Origins. Sie können sie daher beispielsweise verwenden, um für mehrere Sitzungen dieselbe Quelle anzufordern.

    Alle Tracks aus derselben Quelle haben für eine bestimmte Origin dieselbe ID. Deshalb gibt [`MediaStreamTrack.getCapabilities()`](/de/docs/Web/API/MediaStreamTrack/getCapabilities) für `deviceId` immer genau einen Wert zurück. Die Geräte-ID eignet sich daher nicht zum Ändern von Einschränkungen mit [`MediaStreamTrack.applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints). Sie kann jedoch verwendet werden, um beim Aufruf von [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) zunächst eine Medienquelle auszuwählen.

    > [!NOTE]
    > Eine Ausnahme von der Regel, dass Geräte-IDs über Browsersitzungen hinweg gleich bleiben, ist der private Surfmodus: Er verwendet eine andere ID und ändert sie bei jeder Browsersitzung.

    Der tatsächliche Wert des Strings wird durch die Quelle des Tracks bestimmt. Seine Form ist nicht garantiert, auch wenn die Spezifikation eine [GUID](https://en.wikipedia.org/wiki/Universally_unique_identifier) empfiehlt.

- `groupId`
  - : Ein String, der die Gerätegruppe eindeutig identifiziert, zu der die Quelle des [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) gehört. Zwei durch ihre `deviceId` identifizierte Geräte gelten als Teil derselben Gruppe, wenn sie zum selben physischen Gerät gehören. Beispielsweise hätten die Audioeingabe- und Audioausgabegeräte des in ein Telefon eingebauten Mikrofons und Lautsprechers dieselbe Gruppen-ID, da sie Teil desselben physischen Geräts sind. Das Mikrofon eines Headsets hätte dagegen eine andere ID.

    Diese ID ist innerhalb einer Browsersitzung eindeutig und kann nicht über mehrere Browsersitzungen hinweg verwendet werden. Beim Aufruf von [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) kann sie jedoch verwendet werden, um sicherzustellen, dass verschiedene Tracks dasselbe Gerät verwenden oder nicht verwenden – beispielsweise dass für Ein- und Ausgabe dasselbe Headset verwendet wird. Beim Aufruf von `applyConstraints()` ist die `groupId` nicht nützlich, da sich ihr Wert nicht ändern lässt.

    Der tatsächliche Wert des Strings wird durch die Quelle des Tracks bestimmt. Seine Form ist nicht garantiert, auch wenn die Spezifikation eine GUID empfiehlt.

#### Eigenschaften von Audiotracks

- `autoGainControl`
  - : Ein boolescher Wert, der angibt, ob die automatische Verstärkungsregelung (AGC) aktiviert ist. Sie ermöglicht es einer Audioquelle, Änderungen ihrer Lautstärke automatisch auszugleichen, um einen gleichmäßigen Gesamtpegel beizubehalten. Diese Funktion wird typischerweise bei Mikrofonen eingesetzt, kann aber auch von anderen Eingabequellen bereitgestellt werden.
- `channelCount`
  - : Eine Ganzzahl, die die Anzahl der Audiokanäle im Track angibt und damit auch, wie viele Audiosamples in jedem Audioframe enthalten sind. Der Wert ist 1 für Mono, 2 für Stereo und so weiter.
- `echoCancellation`
  - : Ein boolescher Wert, der angibt, ob die Echounterdrückung aktiviert ist. Die Echounterdrückung soll Echoeffekte bei einer bidirektionalen Audioverbindung verhindern, indem sie Übersprechen zwischen den Ein- und Ausgabegeräten der verwendenden Person reduziert oder beseitigt. Beispielsweise kann ein Filter den von den Lautsprechern erzeugten Schall unterdrücken, damit er nicht im vom Mikrofon erzeugten Eingabetrack enthalten ist.
- `latency`
  - : Eine Gleitkommazahl, die die Audiolatenz in Sekunden angibt. Die Latenz ist die Zeitspanne zwischen dem Beginn der Audioverarbeitung und dem Zeitpunkt, zu dem die Daten für den nächsten Schritt der Audionutzung verfügbar sind. Dieser Wert ist ein Zielwert. Die tatsächliche Latenz kann aus verschiedenen Gründen abweichen, unter anderem wegen des Aufwands für CPU-Verarbeitung, Übertragung und Speicherung.
- `noiseSuppression`
  - : Ein boolescher Wert, der angibt, ob die Rauschunterdrückung aktiviert ist. Sie filtert das Audiosignal automatisch, um Hintergrundgeräusche, Gerätebrummen und Ähnliches zu entfernen, bevor der Ton an Ihren Code übergeben wird. Diese Funktion wird typischerweise bei Mikrofonen eingesetzt, kann aber auch von anderen Eingabequellen bereitgestellt werden.
- `restrictOwnAudio`
  - : Ein boolescher Wert, der angibt, ob der Browser bei einer Bildschirmaufnahme versucht, Systemaudio aus dem aufnehmenden Tab herauszufiltern. Wenn beispielsweise die aufnehmende Webseite selbst eingebettetes Audio oder Video abspielt, wäre dessen Ton in der Aufnahme enthalten. Da dies ein unerwünschtes Echo verursachen oder die vorgesehenen Audioquellen aus anderen Tabs oder Anwendungen stören könnte, ist es sinnvoll, ihn aus der Aufnahme zu entfernen. Schlägt die Entfernung durch Verarbeitung fehl, kann der User Agent sämtliches Audio aus dem aufnehmenden Tab ausschließen.

    > [!NOTE]
    > Wenn die aufgenommene Anzeigefläche kein Systemaudio enthält, hat diese Einstellung keine Wirkung.
- `sampleRate`
  - : Eine Ganzzahl, die die Abtastrate der Audiodaten in Samples pro Sekunde angibt. Übliche Werte sind 44.100 (Standard-CD-Audio), 48.000 (digitales Standardaudio), 96.000 (häufig bei Audio-Mastering und Postproduktion) und 192.000 (für hochauflösendes Audio bei professionellen Aufnahmen und beim Mastering). Um die benötigte Bandbreite zu verringern, werden jedoch häufig niedrigere Werte verwendet: 8.000 Samples pro Sekunde reichen für verständliche, wenn auch nicht perfekte menschliche Sprache aus. Sowohl 11.025 als auch 22.050 werden häufig für Ton und Musik mit geringer Bandbreite und reduzierter Qualität verwendet.
- `sampleSize`
  - : Eine Ganzzahl, die die lineare Größe jedes Audiosamples in Bit angibt. Die am häufigsten verwendete Sample-Größe beträgt 16 Bit pro Sample, wie etwa bei CD-Audio. Weitere übliche Größen sind 8 Bit (für geringeren Bandbreitenbedarf) und 24 Bit (für hochauflösendes professionelles Audio).

    Jeder Audiokanal des Tracks benötigt `sampleSize` Bit. Ein einzelnes Sample belegt damit tatsächlich (`sampleSize` / 8) \* `channelCount` Byte an Daten. Beispielsweise benötigt 16-Bit-Stereo-Audio (16/8)\*2, also 4 Byte pro Sample.
- `suppressLocalAudioPlayback`
  - : Ein boolescher Wert, der angibt, ob bei der Aufnahme eines Tabs dessen Audio nicht mehr über die lokalen Lautsprecher der verwendenden Person wiedergegeben wird. Wenn Sie beispielsweise einen Videoanruf an ein externes AV-System in einem Konferenzraum übertragen, soll der Ton über das AV-System und nicht über die lokalen Lautsprecher ausgegeben werden. So ist der Ton lauter und klarer und außerdem mit dem Konferenzvideo synchronisiert.
- `volume` {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Eine Gleitkommazahl, die die Lautstärke des Tracks angibt. Der Wert liegt zwischen 0.0 (stumm) und 1.0 (maximal vom Gerät unterstützte Lautstärke).

#### Eigenschaften von Videotracks

- `aspectRatio`
  - : Eine Gleitkommazahl, die die Breite des Bildes in Pixeln geteilt durch seine Höhe in Pixeln angibt, mit einer Genauigkeit von mindestens 10 Dezimalstellen. Übliche Werte sind 1.3333333333 (für das klassische 4:3-Standard-{{Glossary("aspect_ratio", "Seitenverhältnis")}} beim Fernsehen, das auch bei Tablets wie dem iPad von Apple verwendet wird), 1.7777777778 (für das 16:9-Breitbildseitenverhältnis bei hochauflösenden Bildern) und 1.6 (für das bei Breitbild-Computern und -Tablets verbreitete 16:10-Seitenverhältnis).
- `facingMode`
  - : Ein String, der angibt, in welche Richtung die Kamera ausgerichtet ist. Der Wert ist einer der folgenden:
    - `"user"`
      - : Die Videoquelle ist auf die verwendende Person gerichtet (oft als „Selfie-Kamera“ bezeichnet). Dazu gehört beispielsweise die Frontkamera eines Smartphones.
    - `"environment"`
      - : Die Videoquelle ist von der verwendenden Person weg auf deren Umgebung gerichtet. Bei einem Smartphone ist dies die Rückkamera. Sie ist üblicherweise die hochwertigste Kamera des Geräts und wird für allgemeine Fotografie verwendet.
    - `"left"`
      - : Die Videoquelle ist auf die verwendende Person gerichtet, befindet sich aber links von ihr, beispielsweise eine Kamera, die über ihre linke Schulter hinweg auf sie gerichtet ist.
    - `"right"`
      - : Die Videoquelle ist auf die verwendende Person gerichtet, befindet sich aber rechts von ihr, beispielsweise eine Kamera, die über ihre rechte Schulter hinweg auf sie gerichtet ist.

    Diese Werte können für separate Kameras stehen oder für Richtungen, in die eine verstellbare Kamera ausgerichtet werden kann.

- `frameRate`
  - : Eine Gleitkommazahl, die angibt, wie viele Videoframes pro Sekunde der Track enthält. Kann der Wert aus irgendeinem Grund nicht ermittelt werden, entspricht er der vertikalen Synchronisationsrate des Geräts, auf dem der User Agent läuft.
- `height`
  - : Eine Ganzzahl, die die Höhe der Videodaten des Tracks in Pixeln angibt.
- `width`
  - : Eine Ganzzahl, die die Breite der Videodaten des Tracks in Pixeln angibt.
- `resizeMode`
  - : Ein String, der angibt, mit welchem Modus der User Agent die Auflösung des Tracks bestimmt. Der Wert ist einer der folgenden:
    - `"none"`
      - : Der Track hat die von der Kamera, ihrem Treiber oder dem Betriebssystem bereitgestellte Auflösung.
    - `"crop-and-scale"`
      - : Die Auflösung des Tracks kann daraus resultieren, dass der User Agent eine höhere Kameraauflösung zuschneidet oder herunterskaliert.

#### Eigenschaften von Tracks mit geteiltem Bildschirminhalt

Tracks, die vom Bildschirm einer verwendenden Person geteiltes Video enthalten, werden im Allgemeinen wie Videotracks behandelt. Dies gilt unabhängig davon, ob die Daten vom gesamten Bildschirm oder nur von einem Teil davon stammen, etwa einem Fenster oder Tab. Zusätzlich unterstützen sie die folgenden Einstellungen:

- `cursor`
  - : Ein String, der angibt, ob und unter welchen Bedingungen der Mauszeiger im erzeugten Stream enthalten ist. Mögliche Werte sind:
    - `always`
      - : Der Mauszeiger ist im Videoinhalt des [`MediaStream`](/de/docs/Web/API/MediaStream) immer sichtbar, es sei denn, er wurde aus dem Bereich des Inhalts herausbewegt.
    - `motion`
      - : Der Mauszeiger ist im Video enthalten, während er sich bewegt und für kurze Zeit, nachdem er angehalten hat.
    - `never`
      - : Der Mauszeiger ist nie im geteilten Video enthalten.

- `displaySurface`
  - : Ein String, der den Typ der im Track enthaltenen Quelle angibt. Der Wert ist einer der folgenden:
    - `browser`
      - : Der Videotrack des Streams zeigt den gesamten Inhalt eines einzelnen Browser-Tabs, den die verwendende Person beim Aufruf von [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) ausgewählt hat.
    - `monitor`
      - : Der Videotrack des Streams zeigt den vollständigen Inhalt eines oder mehrerer Bildschirme der verwendenden Person. Leere Bereiche, die bei Bildschirmen unterschiedlicher Größe entstehen, werden mit einem vom User Agent gewählten Hintergrund gefüllt.
    - `window`
      - : Der Videotrack des Streams zeigt den Inhalt eines einzelnen, von der verwendenden Person ausgewählten Fensters. Das Fenster kann zu einer beliebigen Anwendung gehören, nicht nur zum User Agent.

    Nicht alle User Agents unterstützen alle diese Arten von Anzeigeflächen.

- `logicalSurface`
  - : Ein boolescher Wert, der angibt, ob der aufgenommene Anzeigebereich eine logische Anzeigefläche ist. Logische Anzeigeflächen müssen nicht vollständig auf dem Bildschirm sichtbar sein und können sich sogar außerhalb des sichtbaren Bildschirms befinden. Beispiele sind die Hintergrundpuffer von Fenstern (bei denen ohne Scrollen im enthaltenden Fenster nur ein Teil des Puffers sichtbar ist) und Offscreen-Rendering-Kontexte. Eine sichtbare Anzeigefläche, also eine Fläche, für die `logicalSurface` den Wert `false` zurückgibt, ist der Teil einer logischen Anzeigefläche, der derzeit auf dem Bildschirm sichtbar ist.

    Der häufigste Fall einer logischen Anzeigefläche ist eine ausgewählte Fläche, die den gesamten Inhaltsbereich eines Fensters umfasst, das zu groß ist, um vollständig auf einmal auf dem Bildschirm angezeigt zu werden. Da im Fenster gescrollt werden muss, um den restlichen Inhalt zu sehen, handelt es sich um eine logische Anzeigefläche.

    Ein User Agent _kann_ es der verwendenden Person beispielsweise ermöglichen, zwischen dem Teilen des gesamten Dokuments (einer `browser`-Anzeigefläche mit dem `logicalSurface`-Wert `true`) und dem Teilen nur des aktuell sichtbaren Dokumentteils (bei dem der `logicalSurface`-Wert der `browser`-Anzeigefläche `false` ist) zu wählen.

- `screenPixelRatio`
  - : Eine Zahl, die das Verhältnis zwischen der physischen und der logischen Auflösung angibt. Sie kann nicht als Einschränkung oder Fähigkeit verwendet werden. Der Wert wird berechnet, indem die Größe eines {{Glossary("CSS_pixel", "CSS-Pixels")}} bei einem Seitenzoom von `1.0` und einem Skalierungsfaktor von `1.0` auf dem aufnehmenden Bildschirm durch die vertikale Größe eines Pixels der aufgenommenen [Anzeigefläche](/de/docs/Web/API/MediaTrackConstraints/displaySurface) geteilt wird.

    Häufig wird ein Bildschirm über das Betriebssystem (OS) skaliert. Das ist beispielsweise bei einem hochauflösenden Bildschirm der Fall, wenn Grafiken in derselben physischen Größe wie auf einem Bildschirm mit Standardauflösung dargestellt werden sollen. Die Auflösung vor Anwendung der Skalierung heißt **logische Auflösung**, die Auflösung danach **physische Auflösung**.

    Beispiele:

    - Wenn die aufgenommene Anzeigefläche auf einem Bildschirm mit Standardauflösung dargestellt wird, auf dem die Abmessungen physischer Pixel ungefähr denen von CSS-Pixeln entsprechen, gibt `screenPixelRatio` den Wert `1` zurück.
    - Wird die aufgenommene Anzeigefläche dagegen auf einem hochauflösenden Bildschirm mit hoher Pixeldichte dargestellt, auf dem die Abmessungen physischer Pixel etwa halb so groß sind wie die von CSS-Pixeln (sodass jedes CSS-Pixel 4 physische Pixel belegt), gibt `screenPixelRatio` den Wert `2` zurück.

    Wenn der aufgenommene Bildschirm der sendenden Seite vergrößert dargestellt wird, ist die physische Auflösung höher als die logische. Eine Videokonferenzanwendung kann daher Bandbreite und CPU-Ressourcen sparen, indem sie:

    1. Die vom Betriebssystem auf die aufgenommene Anzeigefläche angewendete Skalierung rückgängig macht.
    2. Das Video der Bildschirmaufnahme in logischer Auflösung sendet.
    3. Nach dem Empfang auf dem entfernten Client die Skalierung erneut anwendet, um das Video wieder auf seine physische Auflösung zu vergrößern.

    Diese Eigenschaft ermöglicht es Anwendungen, die die [Screen Capture API](/de/docs/Web/API/Screen_Capture_API) verwenden, Ressourcen zu sparen, indem sie das Video einer Bildschirmaufnahme in seiner logischen beziehungsweise geräteunabhängigen Auflösung senden.

## Beispiele

### Grundlegende Verwendung von `screenPixelRatio`

In diesem Beispiel definiert die Anwendung eine Konstante `RESOLUTION_LIMIT`. Sie gibt den Skalierungsfaktor an, ab dem die sendende Anwendung das Video in logischer statt in physischer Auflösung senden soll.

Wenn `screenPixelRatio` diesen Grenzwert überschreitet, verwendet die Anwendung den Wert von `screenPixelRatio`, um aus der physischen Auflösung die logische Auflösung zu berechnen. Anschließend schränkt sie den aufgenommenen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) auf die logische Auflösung ein.

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
- [`MediaStreamTrack.getSettings()`](/de/docs/Web/API/MediaStreamTrack/getSettings)
- [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia)
