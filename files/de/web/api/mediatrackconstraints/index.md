---
title: MediaTrackConstraints
slug: Web/API/MediaTrackConstraints
l10n:
  sourceCommit: a5b8c78d6a38dda4194bec70cb82e5bf646178e7
---

{{APIRef("Media Capture and Streams")}}

Das **`MediaTrackConstraints`**-Dictionary beschreibt eine Reihe von Medieneigenschaften und die Werte, die diese jeweils annehmen können.

Ein Dictionary mit Constraints wird an die Methode [`applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) der Schnittstelle [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) übergeben. So kann ein Skript für den Track exakte (erforderliche) Werte oder Wertebereiche und/oder bevorzugte Werte oder Wertebereiche festlegen.

Die zuletzt angeforderten benutzerdefinierten Constraints können durch Aufruf von [`getConstraints()`](/de/docs/Web/API/MediaStreamTrack/getConstraints) abgerufen werden.

Objekte dieses Typs können auch an folgende Methoden übergeben werden:

- [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia), um Constraints für einen Medienstrom festzulegen, der von Hardware wie einer Kamera oder einem Mikrofon angefordert wird.

- [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia), um Constraints für einen Medienstrom festzulegen, der durch die Erfassung eines Bildschirms oder Fensters angefordert wird.

## Constraints

Die folgenden Typen werden verwendet, um einen Constraint für eine Eigenschaft festzulegen.
Sie können einen oder mehrere `exact`-Werte angeben, von denen einer der Wert der Eigenschaft sein muss, oder eine Reihe von `ideal`-Werten, die nach Möglichkeit verwendet werden sollen.
Sie können auch einen einzelnen Wert (oder ein Array von Werten) angeben. Der User Agent versucht dann, diesen so gut wie möglich zu erfüllen, nachdem alle strengeren Constraints berücksichtigt wurden.

Weitere Informationen zur Funktionsweise von Constraints finden Sie unter [Fähigkeiten, Constraints und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints).

> [!NOTE]
> `min`- und `exact`-Werte sind in Constraints für Aufrufe von [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) nicht zulässig – sie führen zu einem `TypeError`. In Constraints für Aufrufe von [`MediaStreamTrack.applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) sind sie dagegen zulässig.

### ConstrainBoolean

Der Constraint-Typ `ConstrainBoolean` wird verwendet, um einen Constraint für eine Eigenschaft festzulegen, deren Wert ein boolescher Wert ist.
Sein Wert kann entweder ein boolescher Wert (`true` oder `false`) oder ein Objekt mit den folgenden Eigenschaften sein:

- `exact`
  - : Ein boolescher Wert, den die Eigenschaft annehmen muss.
    Wenn die Eigenschaft nicht auf diesen Wert gesetzt werden kann, schlägt der Abgleich fehl.
- `ideal`
  - : Ein boolescher Wert, der einen idealen Wert für die Eigenschaft angibt.
    Wenn möglich, wird dieser Wert verwendet. Andernfalls verwendet der User Agent die bestmögliche Übereinstimmung.

### ConstrainBooleanOrDOMString

Der Constraint-Typ `ConstrainBooleanOrDOMString` wird verwendet, um einen Constraint für eine Eigenschaft festzulegen, deren Wert ein boolescher Wert oder ein String ist. Er kann Werte annehmen, wie sie in den Abschnitten [`ConstrainBoolean`](#constrainboolean) und [`ConstrainDOMString`](#constraindomstring) beschrieben sind.

### ConstrainDouble

Der Constraint-Typ `ConstrainDouble` wird verwendet, um einen Constraint für eine Eigenschaft festzulegen, deren Wert eine Gleitkommazahl mit doppelter Genauigkeit ist.
Sein Wert kann entweder eine Zahl oder ein Objekt mit den folgenden Eigenschaften sein:

- `max`
  - : Eine Dezimalzahl, die den größten zulässigen Wert der beschriebenen Eigenschaft angibt.
    Wenn der Wert nicht kleiner oder gleich diesem Wert bleiben kann, schlägt der Abgleich fehl.
- `min`
  - : Eine Dezimalzahl, die den kleinsten zulässigen Wert der beschriebenen Eigenschaft angibt.
    Wenn der Wert nicht größer oder gleich diesem Wert bleiben kann, schlägt der Abgleich fehl.
- `exact`
  - : Eine Dezimalzahl, die einen bestimmten erforderlichen Wert angibt, den die Eigenschaft haben muss, um als zulässig zu gelten.
- `ideal`
  - : Eine Dezimalzahl, die einen idealen Wert für die Eigenschaft angibt.
    Wenn möglich, wird dieser Wert verwendet. Andernfalls verwendet der User Agent die bestmögliche Übereinstimmung.

### ConstrainDOMString

Der Constraint-Typ `ConstrainDOMString` wird verwendet, um einen Constraint für eine Eigenschaft festzulegen, deren Wert ein String ist.
Sein Wert kann entweder ein String, ein Array von Strings oder ein Objekt mit den folgenden Eigenschaften sein:

- `exact`
  - : Ein String oder ein Array von Strings, von denen einer der Wert der Eigenschaft sein muss.
    Wenn die Eigenschaft nicht auf einen der aufgeführten Werte gesetzt werden kann, schlägt der Abgleich fehl.
- `ideal`
  - : Ein String oder ein Array von Strings, die ideale Werte für die Eigenschaft angeben.
    Wenn möglich, wird einer der aufgeführten Werte verwendet. Andernfalls verwendet der User Agent die bestmögliche Übereinstimmung.

### ConstrainULong

Der Constraint-Typ `ConstrainULong` wird verwendet, um einen Constraint für eine Eigenschaft festzulegen, deren Wert eine Ganzzahl ist.
Sein Wert kann entweder eine Zahl oder ein Objekt mit den folgenden Eigenschaften sein:

- `max`
  - : Eine Ganzzahl, die den größten zulässigen Wert der beschriebenen Eigenschaft angibt.
    Wenn der Wert nicht kleiner oder gleich diesem Wert bleiben kann, schlägt der Abgleich fehl.
- `min`
  - : Eine Ganzzahl, die den kleinsten zulässigen Wert der beschriebenen Eigenschaft angibt.
    Wenn der Wert nicht größer oder gleich diesem Wert bleiben kann, schlägt der Abgleich fehl.
- `exact`
  - : Eine Ganzzahl, die einen bestimmten erforderlichen Wert angibt, den die Eigenschaft haben muss, um als zulässig zu gelten.
- `ideal`
  - : Eine Ganzzahl, die einen idealen Wert für die Eigenschaft angibt.
    Wenn möglich, wird dieser Wert verwendet. Andernfalls verwendet der User Agent die bestmögliche Übereinstimmung.

## Instanzeigenschaften

Das Objekt enthält eine Kombination der folgenden Eigenschaften, aber nicht unbedingt alle.
Das kann daran liegen, dass ein bestimmter Browser eine Eigenschaft nicht unterstützt oder dass sie nicht anwendbar ist.
Da {{Glossary("RTP", "RTP")}} bei der Aushandlung einer WebRTC-Verbindung beispielsweise einige dieser Werte nicht bereitstellt, enthält ein Track, der einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) zugeordnet ist, bestimmte Werte wie [`facingMode`](/de/docs/Web/API/MediaTrackConstraints/facingMode) oder [`groupId`](/de/docs/Web/API/MediaTrackConstraints/groupId) nicht.

### Instanzeigenschaften aller Medientracks

- [`deviceId`](/de/docs/Web/API/MediaTrackConstraints/deviceId)
  - : Ein [`ConstrainDOMString`](#constraindomstring)-Objekt, das eine Geräte-ID oder ein Array von Geräte-IDs angibt, die zulässig und/oder erforderlich sind.
- [`groupId`](/de/docs/Web/API/MediaTrackConstraints/groupId)
  - : Ein [`ConstrainDOMString`](#constraindomstring)-Objekt, das eine Gruppen-ID oder ein Array von Gruppen-IDs angibt, die zulässig und/oder erforderlich sind.

### Instanzeigenschaften von Audiotracks

- [`autoGainControl`](/de/docs/Web/API/MediaTrackConstraints/autoGainControl)
  - : Ein [`ConstrainBoolean`](#constrainboolean)-Objekt, das angibt, ob eine automatische Verstärkungsregelung bevorzugt und/oder erforderlich ist.
- [`channelCount`](/de/docs/Web/API/MediaTrackConstraints/channelCount)
  - : Ein [`ConstrainULong`](#constrainulong), das die zulässige und/oder erforderliche Kanalanzahl oder den entsprechenden Bereich angibt.
- [`echoCancellation`](/de/docs/Web/API/MediaTrackConstraints/echoCancellation)
  - : Ein [`ConstrainBooleanOrDOMString`](#constrainbooleanordomstring)-Objekt, das angibt, ob eine Echounterdrückung bevorzugt und/oder erforderlich ist und, sofern unterstützt, welcher Typ verwendet werden soll.
- [`latency`](/de/docs/Web/API/MediaTrackConstraints/latency)
  - : Ein [`ConstrainDouble`](#constraindouble), das die zulässige und/oder erforderliche Latenz oder den entsprechenden Bereich angibt.
- [`noiseSuppression`](/de/docs/Web/API/MediaTrackConstraints/noiseSuppression)
  - : Ein [`ConstrainBoolean`](#constrainboolean), das angibt, ob eine Rauschunterdrückung bevorzugt und/oder erforderlich ist.
- [`sampleRate`](/de/docs/Web/API/MediaTrackConstraints/sampleRate)
  - : Ein [`ConstrainULong`](#constrainulong), das die zulässige und/oder erforderliche Abtastrate oder den entsprechenden Bereich angibt.
- [`sampleSize`](/de/docs/Web/API/MediaTrackConstraints/sampleSize)
  - : Ein [`ConstrainULong`](#constrainulong), das die zulässige und/oder erforderliche Abtastgröße oder den entsprechenden Bereich angibt.
- [`volume`](/de/docs/Web/API/MediaTrackConstraints/volume) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Ein [`ConstrainDouble`](#constraindouble), das die zulässige und/oder erforderliche Lautstärke oder den entsprechenden Bereich angibt.

### Instanzeigenschaften von Bildtracks

- `whiteBalanceMode`
  - : Ein {{jsxref("String")}}, der `"none"`, `"manual"`, `"single-shot"` oder `"continuous"` angibt.
- `exposureMode`
  - : Ein {{jsxref("String")}}, der `"none"`, `"manual"`, `"single-shot"` oder `"continuous"` angibt.
- `focusMode`
  - : Ein {{jsxref("String")}}, der `"none"`, `"manual"`, `"single-shot"` oder `"continuous"` angibt.
- `pointsOfInterest`
  - : Die Pixelkoordinaten eines oder mehrerer relevanter Punkte auf dem Sensor.
    Der Wert ist entweder ein Objekt der Form { x:_value_, y:_value_ } oder ein Array solcher Objekte, wobei _value_ eine Ganzzahl mit doppelter Genauigkeit ist.
- `exposureCompensation`
  - : Ein [`ConstrainDouble`](#constraindouble) (eine Ganzzahl mit doppelter Genauigkeit), das eine Anpassung des Blendenwerts um bis zu ±3 angibt.
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
  - : Ein [`ConstrainDouble`](#constraindouble) (eine Ganzzahl mit doppelter Genauigkeit), das die Intensität der Kanten angibt.
- `focusDistance`
  - : Ein [`ConstrainDouble`](#constraindouble) (eine Ganzzahl mit doppelter Genauigkeit), das die Entfernung zu einem fokussierten Objekt angibt.
- `zoom`
  - : Ein [`ConstrainDouble`](#constraindouble) (eine Ganzzahl mit doppelter Genauigkeit), das die gewünschte Brennweite angibt.
- `torch`
  - : Ein boolescher Wert, der angibt, ob das Aufhelllicht dauerhaft eingeschaltet ist, also so lange leuchtet, wie der Track aktiv ist.

### Instanzeigenschaften von Videotracks

- [`aspectRatio`](/de/docs/Web/API/MediaTrackConstraints/aspectRatio)
  - : Ein [`ConstrainDouble`](#constraindouble), das das zulässige und/oder erforderliche {{Glossary("aspect_ratio", "Seitenverhältnis")}} des Videos oder den entsprechenden Bereich angibt.
- [`facingMode`](/de/docs/Web/API/MediaTrackConstraints/facingMode)
  - : Ein [`ConstrainDOMString`](#constraindomstring)-Objekt, das eine Ausrichtung oder ein Array von Ausrichtungen angibt, die zulässig und/oder erforderlich sind.
- [`frameRate`](/de/docs/Web/API/MediaTrackConstraints/frameRate)
  - : Ein [`ConstrainDouble`](#constraindouble), das die zulässige und/oder erforderliche Bildrate oder den entsprechenden Bereich angibt.
- [`height`](/de/docs/Web/API/MediaTrackConstraints/height)
  - : Ein [`ConstrainULong`](#constrainulong), das die zulässige und/oder erforderliche Videohöhe oder den entsprechenden Bereich angibt.
- [`width`](/de/docs/Web/API/MediaTrackConstraints/width)
  - : Ein [`ConstrainULong`](#constrainulong), das die zulässige und/oder erforderliche Videobreite oder den entsprechenden Bereich angibt.
- `resizeMode`
  - : Ein [`ConstrainDOMString`](#constraindomstring)-Objekt, das einen Modus oder ein Array von Modi angibt, mit denen der User Agent die Auflösung und Bildrate eines Videotracks ableiten kann.
    Zulässige Werte sind:
    - `crop-and-scale`
      - : Der User Agent kann die Rohausgabe der Hardware oder des Betriebssystems zuschneiden und ihre Auflösung oder Bildrate verringern, um andere Constraints zu erfüllen.
        Dieser Constraint ermöglicht es Entwicklern, ein herunterskaliertes Video zu erhalten, selbst wenn das durch ihre Constraints angegebene Format von der Hardware nicht nativ unterstützt wird.
    - `none`
      - : Der User Agent verwendet die Auflösung, die von der zugrunde liegenden Hardware, etwa einer Kamera oder deren Treiber, oder vom Betriebssystem bereitgestellt wird.

    Wenn `resizeMode` nicht angegeben ist, wählt der Browser eine Auflösung anhand einer [Fitness-Distanz](https://w3c.github.io/mediacapture-main/#dfn-fitness-distance), die die angegebenen Constraints und _beide_ zulässigen Werte berücksichtigt.

### Instanzeigenschaften von Tracks für die Bildschirmfreigabe

Diese Constraints gelten für die Eigenschaft `video` des Objekts, das an [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) übergeben wird, um einen Medienstrom für die Bildschirmfreigabe zu erhalten.

- [`displaySurface`](/de/docs/Web/API/MediaTrackConstraints/displaySurface)
  - : Ein [`ConstrainDOMString`](#constraindomstring), das die Typen von Anzeigeflächen angibt, die der Benutzer auswählen kann.
    Der Wert kann einer der folgenden Strings oder eine Liste davon sein, um mehrere Quellflächen zuzulassen:
    - `browser`
      - : Der Medienstrom enthält den Inhalt eines einzelnen, vom Benutzer ausgewählten Browser-Tabs.
    - `monitor`
      - : Der Videotrack des Medienstroms enthält den vollständigen Inhalt eines oder mehrerer Bildschirme des Benutzers.
    - `window`
      - : Der Medienstrom enthält ein einzelnes Fenster, das der Benutzer zur Freigabe ausgewählt hat.

- [`logicalSurface`](/de/docs/Web/API/MediaTrackConstraints/logicalSurface)
  - : Ein [`ConstrainBoolean`](#constrainboolean)-Wert, der einen einzelnen booleschen Wert oder mehrere davon enthalten kann und angibt, ob der Benutzer Quellflächen auswählen darf, die nicht direkt sichtbaren Anzeigebereichen entsprechen.
    Dazu können Hintergrundpuffer von Fenstern gehören, mit denen sich Fensterinhalte erfassen lassen, die von davorliegenden Fenstern verdeckt werden, oder Puffer mit größeren Dokumenten, durch die gescrollt werden muss, um ihren gesamten Inhalt im jeweiligen Fenster zu sehen.

- [`suppressLocalAudioPlayback`](/de/docs/Web/API/MediaTrackConstraints/suppressLocalAudioPlayback) {{Experimental_Inline}}
  - : Ein [`ConstrainBoolean`](#constrainboolean)-Wert, der die gewünschten oder zwingenden Constraints für den Wert der konfigurierbaren Eigenschaft [`suppressLocalAudioPlayback`](/de/docs/Web/API/MediaTrackSettings/suppressLocalAudioPlayback) beschreibt.
    Diese Eigenschaft steuert, ob Audio, das in einem Tab abgespielt wird, während der Erfassung des Tabs weiterhin über die lokalen Lautsprecher des Benutzers wiedergegeben wird.

- [`restrictOwnAudio`](/de/docs/Web/API/MediaTrackConstraints/restrictOwnAudio) {{Experimental_Inline}}
  - : Ein [`ConstrainBoolean`](#constrainboolean)-Wert, der die gewünschten oder zwingenden Constraints für den Wert der konfigurierbaren Eigenschaft [`restrictOwnAudio`](/de/docs/Web/API/MediaTrackSettings/restrictOwnAudio) angibt.
    Diese Eigenschaft steuert, ob das vom erfassten Tab stammende Systemaudio aus der Bildschirmaufnahme herausgefiltert wird.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Fähigkeiten, Constraints und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- [Screen Capture API](/de/docs/Web/API/Screen_Capture_API)
- [Verwendung der Screen Capture API](/de/docs/Web/API/Screen_Capture_API/Using_Screen_Capture)
- [`MediaStreamTrack.getConstraints()`](/de/docs/Web/API/MediaStreamTrack/getConstraints)
- [`MediaStreamTrack.applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints)
- [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia)
- [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia)
- [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints)
- [`MediaStreamTrack.getSettings()`](/de/docs/Web/API/MediaStreamTrack/getSettings)
