---
title: MediaTrackConstraints
slug: Web/API/MediaTrackConstraints
l10n:
  sourceCommit: b1bb1b27224e37b2045c6a16b5f9cfa817d0df89
---

{{APIRef("Media Capture and Streams")}}

Das Dictionary **`MediaTrackConstraints`** beschreibt eine Reihe von Medienfunktionen und die Werte, die diese jeweils annehmen können.

Ein Dictionary mit Constraints wird an die Methode [`applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) der Schnittstelle [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) übergeben. Damit kann ein Skript für den Track exakte (erforderliche) Werte oder Wertebereiche und/oder bevorzugte Werte oder Wertebereiche festlegen.

Die zuletzt angeforderten benutzerdefinierten Constraints können durch Aufruf von [`getConstraints()`](/de/docs/Web/API/MediaStreamTrack/getConstraints) abgerufen werden.

Objekte dieses Typs können auch an folgende Methoden übergeben werden:

- [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia), um Constraints für einen Medienstream festzulegen, der von Hardware wie einer Kamera oder einem Mikrofon angefordert wird.

- [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia), um Constraints für einen Medienstream festzulegen, der durch Aufnahme eines Bildschirms oder Fensters angefordert wird.

## Constraints

Die folgenden Typen werden verwendet, um einen Constraint für eine Eigenschaft festzulegen. Sie ermöglichen es, einen oder mehrere `exact`-Werte anzugeben, von denen einer dem Wert der Eigenschaft entsprechen muss, oder eine Reihe von `ideal`-Werten, die nach Möglichkeit verwendet werden sollen. Sie können auch einen einzelnen Wert (oder ein Array von Werten) angeben, dem der User Agent nach Anwendung aller strengeren Constraints so gut wie möglich entsprechen wird.

Weitere Informationen zur Funktionsweise von Constraints finden Sie unter [Funktionen, Constraints und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints).

> [!NOTE]
> `min`- und `exact`-Werte sind in Constraints für Aufrufe von [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) nicht zulässig – sie verursachen einen `TypeError`. In Constraints für Aufrufe von [`MediaStreamTrack.applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) sind sie dagegen zulässig.

### ConstrainBoolean

Der Constraint-Typ `ConstrainBoolean` wird verwendet, um einen Constraint für eine Eigenschaft mit einem booleschen Wert festzulegen. Sein Wert kann entweder ein boolescher Wert (`true` oder `false`) oder ein Objekt mit den folgenden Eigenschaften sein:

- `exact`
  - : Ein boolescher Wert, den die Eigenschaft annehmen muss. Wenn die Eigenschaft nicht auf diesen Wert gesetzt werden kann, schlägt der Abgleich fehl.
- `ideal`
  - : Ein boolescher Wert, der einen idealen Wert für die Eigenschaft angibt. Falls möglich, wird dieser Wert verwendet. Andernfalls verwendet der User Agent den nächstmöglichen Wert.

### ConstrainBooleanOrDOMString

Der Constraint-Typ `ConstrainBooleanOrDOMString` wird verwendet, um einen Constraint für eine Eigenschaft festzulegen, deren Wert ein boolescher Wert oder ein String ist. Er kann die Werte annehmen, die in den Abschnitten [`ConstrainBoolean`](#constrainboolean) und [`ConstrainDOMString`](#constraindomstring) beschrieben sind.

### ConstrainDouble

Der Constraint-Typ `ConstrainDouble` wird verwendet, um einen Constraint für eine Eigenschaft festzulegen, deren Wert eine Gleitkommazahl mit doppelter Genauigkeit ist. Sein Wert kann entweder eine Zahl oder ein Objekt mit den folgenden Eigenschaften sein:

- `max`
  - : Eine Dezimalzahl, die den größten zulässigen Wert der betreffenden Eigenschaft angibt. Wenn der Wert nicht kleiner oder gleich diesem Wert sein kann, schlägt der Abgleich fehl.
- `min`
  - : Eine Dezimalzahl, die den kleinsten zulässigen Wert der betreffenden Eigenschaft angibt. Wenn der Wert nicht größer oder gleich diesem Wert sein kann, schlägt der Abgleich fehl.
- `exact`
  - : Eine Dezimalzahl, die einen bestimmten erforderlichen Wert angibt, den die Eigenschaft haben muss, um akzeptiert zu werden.
- `ideal`
  - : Eine Dezimalzahl, die einen idealen Wert für die Eigenschaft angibt. Falls möglich, wird dieser Wert verwendet. Andernfalls verwendet der User Agent den nächstmöglichen Wert.

### ConstrainDOMString

Der Constraint-Typ `ConstrainDOMString` wird verwendet, um einen Constraint für eine Eigenschaft festzulegen, deren Wert ein String ist. Sein Wert kann entweder ein String, ein Array von Strings oder ein Objekt mit den folgenden Eigenschaften sein:

- `exact`
  - : Ein String oder ein Array von Strings, von denen einer dem Wert der Eigenschaft entsprechen muss. Wenn die Eigenschaft auf keinen der aufgeführten Werte gesetzt werden kann, schlägt der Abgleich fehl.
- `ideal`
  - : Ein String oder ein Array von Strings, die ideale Werte für die Eigenschaft angeben. Falls möglich, wird einer der aufgeführten Werte verwendet. Andernfalls verwendet der User Agent den nächstmöglichen Wert.

### ConstrainULong

Der Constraint-Typ `ConstrainULong` wird verwendet, um einen Constraint für eine Eigenschaft festzulegen, deren Wert eine Ganzzahl ist. Sein Wert kann entweder eine Zahl oder ein Objekt mit den folgenden Eigenschaften sein:

- `max`
  - : Eine Ganzzahl, die den größten zulässigen Wert der betreffenden Eigenschaft angibt. Wenn der Wert nicht kleiner oder gleich diesem Wert sein kann, schlägt der Abgleich fehl.
- `min`
  - : Eine Ganzzahl, die den kleinsten zulässigen Wert der betreffenden Eigenschaft angibt. Wenn der Wert nicht größer oder gleich diesem Wert sein kann, schlägt der Abgleich fehl.
- `exact`
  - : Eine Ganzzahl, die einen bestimmten erforderlichen Wert angibt, den die Eigenschaft haben muss, um akzeptiert zu werden.
- `ideal`
  - : Eine Ganzzahl, die einen idealen Wert für die Eigenschaft angibt. Falls möglich, wird dieser Wert verwendet. Andernfalls verwendet der User Agent den nächstmöglichen Wert.

## Instanzeigenschaften

Einige, aber nicht unbedingt alle der folgenden Eigenschaften sind auf dem Objekt vorhanden. Das kann daran liegen, dass ein bestimmter Browser die Eigenschaft nicht unterstützt oder dass sie nicht anwendbar ist. Da {{Glossary("RTP", "RTP")}} beispielsweise bei der Aushandlung einer WebRTC-Verbindung einige dieser Werte nicht bereitstellt, enthält ein Track, der mit einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) verknüpft ist, bestimmte Werte wie [`facingMode`](/de/docs/Web/API/MediaTrackConstraints/facingMode) oder [`groupId`](/de/docs/Web/API/MediaTrackConstraints/groupId) nicht.

### Instanzeigenschaften aller Medientracks

- [`deviceId`](/de/docs/Web/API/MediaTrackConstraints/deviceId)
  - : Ein [`ConstrainDOMString`](#constraindomstring)-Objekt, das eine Geräte-ID oder ein Array von Geräte-IDs angibt, die zulässig und/oder erforderlich sind.
- [`groupId`](/de/docs/Web/API/MediaTrackConstraints/groupId)
  - : Ein [`ConstrainDOMString`](#constraindomstring)-Objekt, das eine Gruppen-ID oder ein Array von Gruppen-IDs angibt, die zulässig und/oder erforderlich sind.

### Instanzeigenschaften von Audiotracks

- [`autoGainControl`](/de/docs/Web/API/MediaTrackConstraints/autoGainControl)
  - : Ein [`ConstrainBoolean`](#constrainboolean)-Objekt, das angibt, ob eine automatische Verstärkungsregelung bevorzugt und/oder erforderlich ist.
- [`channelCount`](/de/docs/Web/API/MediaTrackConstraints/channelCount)
  - : Ein [`ConstrainULong`](#constrainulong), das die zulässige und/oder erforderliche Anzahl von Kanälen oder einen entsprechenden Bereich angibt.
- [`echoCancellation`](/de/docs/Web/API/MediaTrackConstraints/echoCancellation)
  - : Ein [`ConstrainBooleanOrDOMString`](#constrainbooleanordomstring)-Objekt, das angibt, ob eine Echounterdrückung bevorzugt und/oder erforderlich ist und, falls unterstützt, welcher Typ verwendet werden soll.
- [`latency`](/de/docs/Web/API/MediaTrackConstraints/latency)
  - : Ein [`ConstrainDouble`](#constraindouble), das die zulässige und/oder erforderliche Latenz oder einen entsprechenden Bereich angibt.
- [`noiseSuppression`](/de/docs/Web/API/MediaTrackConstraints/noiseSuppression)
  - : Ein [`ConstrainBoolean`](#constrainboolean), das angibt, ob eine Rauschunterdrückung bevorzugt und/oder erforderlich ist.
- [`sampleRate`](/de/docs/Web/API/MediaTrackConstraints/sampleRate)
  - : Ein [`ConstrainULong`](#constrainulong), das die zulässige und/oder erforderliche Abtastrate oder einen entsprechenden Bereich angibt.
- [`sampleSize`](/de/docs/Web/API/MediaTrackConstraints/sampleSize)
  - : Ein [`ConstrainULong`](#constrainulong), das die zulässige und/oder erforderliche Größe der Abtastwerte oder einen entsprechenden Bereich angibt.
- [`volume`](/de/docs/Web/API/MediaTrackConstraints/volume) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Ein [`ConstrainDouble`](#constraindouble), das die zulässige und/oder erforderliche Lautstärke oder einen entsprechenden Bereich angibt.

### Instanzeigenschaften von Bildtracks

- `whiteBalanceMode`
  - : Ein {{jsxref("String")}}, der `"none"`, `"manual"`, `"single-shot"` oder `"continuous"` angibt.
- `exposureMode`
  - : Ein {{jsxref("String")}}, der `"none"`, `"manual"`, `"single-shot"` oder `"continuous"` angibt.
- `focusMode`
  - : Ein {{jsxref("String")}}, der `"none"`, `"manual"`, `"single-shot"` oder `"continuous"` angibt.
- `pointsOfInterest`
  - : Die Pixelkoordinaten eines oder mehrerer relevanter Punkte auf dem Sensor. Der Wert ist entweder ein Objekt der Form { x:_value_, y:_value_ } oder ein Array solcher Objekte, wobei _value_ eine Ganzzahl mit doppelter Genauigkeit ist.
- `exposureCompensation`
  - : Ein [`ConstrainDouble`](#constraindouble) (eine Ganzzahl mit doppelter Genauigkeit), das eine Anpassung der Blendenstufe um bis zu ±3 angibt.
- `colorTemperature`
  - : Ein [`ConstrainDouble`](#constraindouble) (eine Ganzzahl mit doppelter Genauigkeit), das eine gewünschte Farbtemperatur in Kelvin angibt.
- `iso`
  - : Ein [`ConstrainDouble`](#constraindouble) (eine Ganzzahl mit doppelter Genauigkeit), das eine gewünschte ISO-Einstellung angibt.
- `brightness`
  - : Ein [`ConstrainDouble`](#constraindouble) (eine Ganzzahl mit doppelter Genauigkeit), das eine gewünschte Helligkeitseinstellung angibt.
- `contrast`
  - : Ein [`ConstrainDouble`](#constraindouble) (eine Ganzzahl mit doppelter Genauigkeit), das den Grad des Unterschieds zwischen hell und dunkel angibt.
- `saturation`
  - : Ein [`ConstrainDouble`](#constraindouble) (eine Ganzzahl mit doppelter Genauigkeit), das den Grad der Farbintensität angibt.
- `sharpness`
  - : Ein [`ConstrainDouble`](#constraindouble) (eine Ganzzahl mit doppelter Genauigkeit), das die Intensität von Kanten angibt.
- `focusDistance`
  - : Ein [`ConstrainDouble`](#constraindouble) (eine Ganzzahl mit doppelter Genauigkeit), das den Abstand zu einem fokussierten Objekt angibt.
- `zoom`
  - : Ein [`ConstrainDouble`](#constraindouble) (eine Ganzzahl mit doppelter Genauigkeit), das die gewünschte Brennweite angibt.
- `torch`
  - : Ein boolescher Wert, der angibt, ob das Aufhelllicht dauerhaft eingeschaltet ist, also solange der Track aktiv ist.

### Instanzeigenschaften von Videotracks

- [`aspectRatio`](/de/docs/Web/API/MediaTrackConstraints/aspectRatio)
  - : Ein [`ConstrainDouble`](#constraindouble), das das zulässige und/oder erforderliche {{Glossary("aspect_ratio", "Seitenverhältnis")}} des Videos oder einen entsprechenden Bereich angibt.
- [`facingMode`](/de/docs/Web/API/MediaTrackConstraints/facingMode)
  - : Ein [`ConstrainDOMString`](#constraindomstring)-Objekt, das eine Kameraausrichtung oder ein Array von Kameraausrichtungen angibt, die zulässig und/oder erforderlich sind.
- [`frameRate`](/de/docs/Web/API/MediaTrackConstraints/frameRate)
  - : Ein [`ConstrainDouble`](#constraindouble), das die zulässige und/oder erforderliche Bildrate oder einen entsprechenden Bereich angibt.
- [`height`](/de/docs/Web/API/MediaTrackConstraints/height)
  - : Ein [`ConstrainULong`](#constrainulong), das die zulässige und/oder erforderliche Videohöhe oder einen entsprechenden Bereich angibt.
- [`width`](/de/docs/Web/API/MediaTrackConstraints/width)
  - : Ein [`ConstrainULong`](#constrainulong), das die zulässige und/oder erforderliche Videobreite oder einen entsprechenden Bereich angibt.
- `resizeMode`
  - : Ein [`ConstrainDOMString`](#constraindomstring)-Objekt, das einen Modus oder ein Array von Modi angibt, mit denen der User Agent die Auflösung und Bildrate eines Videotracks ableiten kann. Zulässige Werte sind:
    - `crop-and-scale`
      - : Der User Agent kann die Rohausgabe der Hardware oder des Betriebssystems zuschneiden und ihre Auflösung oder Bildrate herunterskalieren, um andere Constraints zu erfüllen. Dieser Constraint ermöglicht es Entwicklern, ein herunterskaliertes Video zu erhalten, selbst wenn das durch ihre Constraints angegebene Format von der Hardware nicht nativ unterstützt wird.
    - `none`
      - : Der User Agent verwendet die Auflösung, die von der zugrunde liegenden Hardware, etwa einer Kamera oder ihrem Treiber, oder vom Betriebssystem bereitgestellt wird.

    Wenn `resizeMode` nicht angegeben ist, wählt der Browser eine Auflösung anhand einer [Fitness-Distanz](https://w3c.github.io/mediacapture-main/#dfn-fitness-distance), die die angegebenen Constraints und _beide_ zulässigen Werte berücksichtigt.

### Instanzeigenschaften von Tracks für die Bildschirmfreigabe

Diese Constraints gelten für die Eigenschaft `video` des Objekts, das an [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) übergeben wird, um einen Stream für die Bildschirmfreigabe zu erhalten.

- [`displaySurface`](/de/docs/Web/API/MediaTrackConstraints/displaySurface)
  - : Ein [`ConstrainDOMString`](#constraindomstring), das angibt, welche Arten von Anzeigeflächen der Benutzer auswählen kann. Der Wert kann einer der folgenden Strings oder eine Liste davon sein, um mehrere Arten von Quellflächen zuzulassen:
    - `browser`
      - : Der Stream enthält den Inhalt eines einzelnen, vom Benutzer ausgewählten Browser-Tabs.
    - `monitor`
      - : Der Videotrack des Streams enthält den gesamten Inhalt eines oder mehrerer Bildschirme des Benutzers.
    - `window`
      - : Der Stream enthält ein einzelnes Fenster, das der Benutzer zur Freigabe ausgewählt hat.

- [`logicalSurface`](/de/docs/Web/API/MediaTrackConstraints/logicalSurface)
  - : Ein [`ConstrainBoolean`](#constrainboolean)-Wert, der einen einzelnen booleschen Wert oder mehrere solche Werte enthalten kann und angibt, ob der Benutzer Quellflächen auswählen darf, die nicht unmittelbar Anzeigebereichen entsprechen. Dazu können Hintergrundpuffer von Fenstern gehören, mit denen sich Fensterinhalte aufnehmen lassen, die von anderen Fenstern verdeckt werden. Ebenso können es Puffer mit größeren Dokumenten sein, durch die gescrollt werden muss, um ihren gesamten Inhalt im Fenster zu sehen.

- [`suppressLocalAudioPlayback`](/de/docs/Web/API/MediaTrackConstraints/suppressLocalAudioPlayback) {{Experimental_Inline}}
  - : Ein [`ConstrainBoolean`](#constrainboolean)-Wert, der die gewünschten oder zwingenden Constraints für den Wert der konfigurierbaren Eigenschaft [`suppressLocalAudioPlayback`](/de/docs/Web/API/MediaStreamTrack/getSettings#suppresslocalaudioplayback) beschreibt. Diese Eigenschaft steuert, ob Audio, das in einem Tab abgespielt wird, während der Aufnahme des Tabs weiterhin über die lokalen Lautsprecher des Benutzers ausgegeben wird.

- [`restrictOwnAudio`](/de/docs/Web/API/MediaTrackConstraints/restrictOwnAudio) {{Experimental_Inline}}
  - : Ein [`ConstrainBoolean`](#constrainboolean)-Wert, der die gewünschten oder zwingenden Constraints für den Wert der konfigurierbaren Eigenschaft [`restrictOwnAudio`](/de/docs/Web/API/MediaStreamTrack/getSettings#restrictownaudio) angibt. Diese Eigenschaft steuert, ob Systemaudio, das vom aufnehmenden Tab stammt, aus der Bildschirmaufnahme herausgefiltert wird.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Funktionen, Constraints und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- [Screen Capture API](/de/docs/Web/API/Screen_Capture_API)
- [Verwendung der Screen Capture API](/de/docs/Web/API/Screen_Capture_API/Using_Screen_Capture)
- [`MediaStreamTrack.getConstraints()`](/de/docs/Web/API/MediaStreamTrack/getConstraints)
- [`MediaStreamTrack.applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints)
- [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia)
- [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia)
- [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints)
- [`MediaStreamTrack.getSettings()`](/de/docs/Web/API/MediaStreamTrack/getSettings)
