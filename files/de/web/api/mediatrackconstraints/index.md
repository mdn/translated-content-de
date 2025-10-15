---
title: MediaTrackConstraints
slug: Web/API/MediaTrackConstraints
l10n:
  sourceCommit: a439453bab9f5508b5268a4062a42fc760a2f20b
---

{{APIRef("Media Capture and Streams")}}

Das **`MediaTrackConstraints`** Wörterbuch wird verwendet, um eine Reihe von Medienfähigkeiten und die Werte oder Wertebereiche zu beschreiben, die jeder annehmen kann.

Ein Einschränkungs-Wörterbuch wird in die Methode [`applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) des [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) Interfaces übergeben, um einem Skript die Festlegung eines Satzes von exakten (erforderlichen) Werten oder Bereichen und/oder bevorzugte Werte oder Wertebereiche für den Track zu ermöglichen.

Der zuletzt angeforderte Satz von benutzerdefinierten Einschränkungen kann durch Aufrufen von [`getConstraints()`](/de/docs/Web/API/MediaStreamTrack/getConstraints) abgerufen werden.

Objekte dieses Typs können auch übergeben werden an:

- Die Methode [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia), um Einschränkungen für einen von Hardware wie einer Kamera oder einem Mikrofon angeforderten Medienstream festzulegen.

- Die Methode [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia), um Einschränkungen für einen von der Bildschirm- oder Fensteraufnahme angeforderten Medienstream festzulegen.

## Einschränkungen

Die folgenden Typen werden verwendet, um eine Einschränkung für eine Eigenschaft anzugeben. Sie ermöglichen es Ihnen, einen oder mehrere `exakte` Werte anzugeben, von denen einer der Parameterwert sein muss, oder ein Set von `idealen` Werten, die, wenn möglich, verwendet werden sollten. Sie können auch einen einzelnen Wert (oder ein Array von Werten) angeben, den der Benutzeragent so gut wie möglich zu erfüllen versucht, sobald alle strengeren Einschränkungen angewendet wurden.

Um mehr über die Funktionsweise von Einschränkungen zu erfahren, siehe [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints).

> [!NOTE]
> `min` und `exakte` Werte sind in Einschränkungen, die in Anrufen von [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) verwendet werden, nicht erlaubt — sie erzeugen einen `TypeError` — aber sie sind in Einschränkungen, die in Anrufen von [`MediaStreamTrack.applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) verwendet werden, erlaubt.

### ConstrainBoolean

Der `ConstrainBoolean` Einschränkungs-Typ wird verwendet, um eine Einschränkung für eine Eigenschaft anzugeben, deren Wert ein Boolescher Wert ist. Sein Wert kann entweder auf einen Booleschen Wert (`true` oder `false`) gesetzt werden oder auf ein Objekt, das die folgenden Eigenschaften enthält:

- `exact`
  - : Ein Boolescher Wert, der der Wert der Eigenschaft sein muss. Wenn die Eigenschaft nicht auf diesen Wert gesetzt werden kann, schlägt das Matching fehl.
- `ideal`
  - : Ein Boolescher Wert, der einen idealen Wert für die Eigenschaft angibt. Wenn möglich, wird dieser Wert verwendet, aber wenn es nicht möglich ist, wird der Benutzeragent den am besten passenden Wert verwenden.

### ConstrainBooleanOrDOMString

Der `ConstrainBooleanOrDOMString` Einschränkungs-Typ wird verwendet, um eine Einschränkung für eine Eigenschaft anzugeben, deren Wert ein Boolescher Wert oder ein Zeichenfolgenwert ist. Er kann Werte annehmen, wie sie in den Abschnitten [`ConstrainBoolean`](#constrainboolean) und [`ConstrainDOMString`](#constraindomstring) angegeben sind.

### ConstrainDouble

Der `ConstrainDouble` Einschränkungs-Typ wird verwendet, um eine Einschränkung für eine Eigenschaft anzugeben, deren Wert eine Gleitkommazahl mit doppelter Genauigkeit ist. Sein Wert kann entweder auf eine Zahl gesetzt werden oder auf ein Objekt, das die folgenden Eigenschaften enthält:

- `max`
  - : Eine Dezimalzahl, die den größten zulässigen Wert der Eigenschaft angibt, die sie beschreibt. Wenn der Wert nicht gleich oder kleiner als dieser Wert bleiben kann, schlägt das Matching fehl.
- `min`
  - : Eine Dezimalzahl, die den kleinsten zulässigen Wert der Eigenschaft angibt, die sie beschreibt. Wenn der Wert nicht gleich oder größer als dieser Wert bleiben kann, schlägt das Matching fehl.
- `exact`
  - : Eine Dezimalzahl, die einen spezifischen, erforderlichen Wert angibt, den die Eigenschaft haben muss, um als akzeptabel zu gelten.
- `ideal`
  - : Eine Dezimalzahl, die einen idealen Wert für die Eigenschaft angibt. Wenn möglich, wird dieser Wert verwendet, aber wenn es nicht möglich ist, wird der Benutzeragent den am besten passenden Wert verwenden.

### ConstrainDOMString

Der `ConstrainDOMString` Einschränkungs-Typ wird verwendet, um eine Einschränkung für eine Eigenschaft anzugeben, deren Wert eine Zeichenfolge ist. Sein Wert kann entweder auf eine Zeichenfolge, ein Array von Zeichenfolgen oder auf ein Objekt gesetzt werden, das die folgenden Eigenschaften enthält:

- `exact`
  - : Eine Zeichenfolge oder ein Array von Zeichenfolgen, von denen eine der Wert der Eigenschaft sein muss. Wenn die Eigenschaft nicht auf einen der aufgelisteten Werte gesetzt werden kann, schlägt das Matching fehl.
- `ideal`
  - : Eine Zeichenfolge oder ein Array von Zeichenfolgen, die ideale Werte für die Eigenschaft angeben. Wenn möglich, wird einer der aufgelisteten Werte verwendet, aber wenn es nicht möglich ist, wird der Benutzeragent den am besten passenden Wert verwenden.

### ConstrainULong

Der `ConstrainULong` Einschränkungs-Typ wird verwendet, um eine Einschränkung für eine Eigenschaft anzugeben, deren Wert eine ganze Zahl ist. Sein Wert kann entweder auf eine Zahl gesetzt werden oder auf ein Objekt, das die folgenden Eigenschaften enthält:

- `max`
  - : Eine Ganzzahl, die den größten zulässigen Wert der Eigenschaft angibt, die sie beschreibt. Wenn der Wert nicht gleich oder kleiner als dieser Wert bleiben kann, schlägt das Matching fehl.
- `min`
  - : Eine Ganzzahl, die den kleinsten zulässigen Wert der Eigenschaft angibt, die sie beschreibt. Wenn der Wert nicht gleich oder größer als dieser Wert bleiben kann, schlägt das Matching fehl.
- `exact`
  - : Eine Ganzzahl, die einen spezifischen, erforderlichen Wert angibt, den die Eigenschaft haben muss, um als akzeptabel zu gelten.
- `ideal`
  - : Eine Ganzzahl, die einen idealen Wert für die Eigenschaft angibt. Wenn möglich, wird dieser Wert verwendet, aber wenn es nicht möglich ist, wird der Benutzeragent den am besten passenden Wert verwenden.

## Instanzeigenschaften

Eine Kombination, aber nicht unbedingt alle der folgenden Eigenschaften werden auf dem Objekt existieren. Das kann daran liegen, dass ein bestimmter Browser die Eigenschaft nicht unterstützt oder weil sie nicht anwendbar ist. Zum Beispiel, weil {{Glossary("RTP", "RTP")}} einige dieser Werte während der Aushandlung einer WebRTC-Verbindung nicht bereitstellt, wird ein mit einem [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) verbundener Track bestimmte Werte nicht enthalten, wie z.B. [`facingMode`](/de/docs/Web/API/MediaTrackConstraints/facingMode) oder [`groupId`](/de/docs/Web/API/MediaTrackConstraints/groupId).

### Instanzeigenschaften aller Medien-Tracks

- [`deviceId`](/de/docs/Web/API/MediaTrackConstraints/deviceId)
  - : Ein [`ConstrainDOMString`](#constraindomstring) Objekt, das eine Geräte-ID oder ein Array von Geräte-IDs angibt, die akzeptabel und/oder erforderlich sind.
- [`groupId`](/de/docs/Web/API/MediaTrackConstraints/groupId)
  - : Ein [`ConstrainDOMString`](#constraindomstring) Objekt, das eine Gruppen-ID oder ein Array von Gruppen-IDs angibt, die akzeptabel und/oder erforderlich sind.

### Instanzeigenschaften von Audio-Tracks

- [`autoGainControl`](/de/docs/Web/API/MediaTrackConstraints/autoGainControl)
  - : Ein [`ConstrainBoolean`](#constrainboolean) Objekt, das angibt, ob automatische Verstärkungsregelung bevorzugt und/oder erforderlich ist.
- [`channelCount`](/de/docs/Web/API/MediaTrackConstraints/channelCount)
  - : Ein [`ConstrainULong`](#constrainulong), der die Kanalanzahl oder den Bereich von Kanalanzahlen angibt, die akzeptabel und/oder erforderlich sind.
- [`echoCancellation`](/de/docs/Web/API/MediaTrackConstraints/echoCancellation)
  - : Ein [`ConstrainBooleanOrDOMString`](#constrainbooleanordomstring) Objekt, das angibt, ob Echodämpfung bevorzugt und/oder erforderlich ist und, falls unterstützt, welche Art.
- [`latency`](/de/docs/Web/API/MediaTrackConstraints/latency)
  - : Ein [`ConstrainDouble`](#constraindouble), der die Latenz oder den Bereich von Latenzen angibt, die akzeptabel und/oder erforderlich sind.
- [`noiseSuppression`](/de/docs/Web/API/MediaTrackConstraints/noiseSuppression)
  - : Ein [`ConstrainBoolean`](#constrainboolean), der angibt, ob Geräuschunterdrückung bevorzugt und/oder erforderlich ist.
- [`sampleRate`](/de/docs/Web/API/MediaTrackConstraints/sampleRate)
  - : Ein [`ConstrainULong`](#constrainulong), der die Abtastrate oder den Bereich von Abtastraten angibt, die akzeptabel und/oder erforderlich sind.
- [`sampleSize`](/de/docs/Web/API/MediaTrackConstraints/sampleSize)
  - : Ein [`ConstrainULong`](#constrainulong), der die Abtastgröße oder den Bereich von Abtastgrößen angibt, die akzeptabel und/oder erforderlich sind.
- [`volume`](/de/docs/Web/API/MediaTrackConstraints/volume) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Ein [`ConstrainDouble`](#constraindouble), der die Lautstärke oder den Bereich von Lautstärken angibt, die akzeptabel und/oder erforderlich sind.

### Instanzeigenschaften von Bild-Tracks

- `whiteBalanceMode`
  - : Ein {{jsxref("String")}}, welcher einer von `"none"`, `"manual"`, `"single-shot"` oder `"continuous"` ist.
- `exposureMode`
  - : Ein {{jsxref("String")}}, welcher einer von `"none"`, `"manual"`, `"single-shot"` oder `"continuous"` ist.
- `focusMode`
  - : Ein {{jsxref("String")}}, welcher einer von `"none"`, `"manual"`, `"single-shot"` oder `"continuous"` ist.
- `pointsOfInterest`
  - : Die Pixelkoordinaten auf dem Sensor von einem oder mehreren Interessenspunkten. Dies ist entweder ein Objekt in der Form { x:_value_, y:_value_ } oder ein Array solcher Objekte, wobei _value_ ein Gleitkommadoppelpunkt ist.
- `exposureCompensation`
  - : Ein [`ConstrainDouble`](#constraindouble) (ein Gleitkommadoppelpunkt), welcher die Anpassung der Blende um bis zu ±3 angibt.
- `colorTemperature`
  - : Ein [`ConstrainDouble`](#constraindouble) (ein Gleitkommadoppelpunkt), welcher eine gewünschte Farbtemperatur in Kelvin-Graden angibt.
- `iso`
  - : Ein [`ConstrainDouble`](#constraindouble) (ein Gleitkommadoppelpunkt), welcher eine gewünschte ISO-Einstellung angibt.
- `brightness`
  - : Ein [`ConstrainDouble`](#constraindouble) (ein Gleitkommadoppelpunkt), welcher eine gewünschte Helligkeitseinstellung angibt.
- `contrast`
  - : Ein [`ConstrainDouble`](#constraindouble) (ein Gleitkommadoppelpunkt), welcher den Grad der Differenz zwischen hell und dunkel angibt.
- `saturation`
  - : Ein [`ConstrainDouble`](#constraindouble) (ein Gleitkommadoppelpunkt), welcher den Grad der Farbintensität angibt.
- `sharpness`
  - : Ein [`ConstrainDouble`](#constraindouble) (ein Gleitkommadoppelpunkt), welcher die Intensität der Kanten angibt.
- `focusDistance`
  - : Ein [`ConstrainDouble`](#constraindouble) (ein Gleitkommadoppelpunkt), welcher die Entfernung zu einem fokussierten Objekt angibt.
- `zoom`
  - : Ein [`ConstrainDouble`](#constraindouble) (ein Gleitkommadoppelpunkt), welcher die gewünschte Brennweite angibt.
- `torch`
  - : Ein boolescher Wert, der definiert, ob das Fülllicht kontinuierlich verbunden ist, was bedeutet, dass es eingeschaltet bleibt, solange der Track aktiv ist.

### Instanzeigenschaften von Video-Tracks

- [`aspectRatio`](/de/docs/Web/API/MediaTrackConstraints/aspectRatio)
  - : Ein [`ConstrainDouble`](#constraindouble), welcher das Video-{{Glossary("aspect_ratio", "Seitenverhältnis")}} oder den Bereich von Seitenverhältnissen angibt, die akzeptabel und/oder erforderlich sind.
- [`facingMode`](/de/docs/Web/API/MediaTrackConstraints/facingMode)
  - : Ein [`ConstrainDOMString`](#constraindomstring) Objekt, welches eine Ausrichtung oder ein Array von Ausrichtungen angibt, die akzeptabel und/oder erforderlich sind.
- [`frameRate`](/de/docs/Web/API/MediaTrackConstraints/frameRate)
  - : Ein [`ConstrainDouble`](#constraindouble), welcher die Bildrate oder den Bereich von Bildraten angibt, die akzeptabel und/oder erforderlich sind.
- [`height`](/de/docs/Web/API/MediaTrackConstraints/height)
  - : Ein [`ConstrainULong`](#constrainulong), welcher die Video-Höhe oder den Bereich von Höhen angibt, die akzeptabel und/oder erforderlich sind.
- [`width`](/de/docs/Web/API/MediaTrackConstraints/width)
  - : Ein [`ConstrainULong`](#constrainulong), welcher die Video-Breite oder den Bereich von Breiten angibt, die akzeptabel und/oder erforderlich sind.
- `resizeMode`
  - : Ein [`ConstrainDOMString`](#constraindomstring) Objekt, welches einen Modus oder ein Array von Modi angibt, die der Benutzeragent verwenden kann, um die Auflösung und Bildrate eines Video-Tracks abzuleiten. Erlaubte Werte sind:
    - `crop-and-scale`
      - : Der Benutzeragent kann das Zuschneiden und Herunterskalieren von Auflösung oder Bildrate auf dem Rohoutput von der Hardware/OS verwenden, um andere Einschränkungen zu erfüllen. Diese Einschränkung ermöglicht es Entwicklern, ein herunterskaliertes Video zu erhalten, selbst wenn das bestimmte Format, das von ihren Einschränkungen angegeben wird, nicht nativ von der Hardware unterstützt wird.
    - `none`
      - : Der Benutzeragent verwendet die von der zugrundeliegenden Hardware bereitgestellte Auflösung, wie z.B. eine Kamera oder ihr Treiber, oder das OS.

    Wenn `resizeMode` nicht spezifiziert ist, wählt der Browser eine Auflösung basierend auf einem [Fitness-Distanz](https://w3c.github.io/mediacapture-main/#dfn-fitness-distance), das die angegebenen Einschränkungen und _beide_ der zugelassenen Werte berücksichtigt.

### Instanzeigenschaften von freigegebenen Bildschirm-Tracks

Diese Einschränkungen gelten für die `video` Eigenschaft des Objekts, das in [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) übergeben wird, um einen Stream für die Bildschirmfreigabe zu erhalten.

- [`displaySurface`](/de/docs/Web/API/MediaTrackConstraints/displaySurface)
  - : Ein [`ConstrainDOMString`](#constraindomstring), welcher die Typen der Anzeigefläche angibt, die vom Benutzer ausgewählt werden dürfen. Dies kann eine einzelne der folgenden Zeichenfolgen sein oder eine Liste von ihnen, um mehrere Quellflächen zu erlauben:
    - `browser`
      - : Der Stream enthält die Inhalte eines einzelnen vom Benutzer ausgewählten Browser-Tabs.
    - `monitor`
      - : Der Videotrack des Streams enthält die gesamten Inhalte eines oder mehrerer Bildschirme des Benutzers.
    - `window`
      - : Der Stream enthält ein einzelnes Fenster, das vom Benutzer zur Freigabe ausgewählt wurde.

- [`logicalSurface`](/de/docs/Web/API/MediaTrackConstraints/logicalSurface)
  - : Ein [`ConstrainBoolean`](#constrainboolean) Wert, der einen einzelnen Booleschen Wert oder ein Set von ihnen enthalten kann, der angibt, ob die Auswahl von Quelloberflächen erlaubt ist, die nicht direkt mit Anzeigeflächen korrespondieren. Dazu können Backing-Puffer für Fenster gehören, die die Aufnahme von Fensterinhalten ermöglichen, die durch andere Fenster davor verdeckt sind, oder Puffer, die größere Dokumente enthalten, die durch Scrollen angezeigt werden müssen, um den gesamten Inhalt in ihren Fenstern zu sehen.

- [`suppressLocalAudioPlayback`](/de/docs/Web/API/MediaTrackConstraints/suppressLocalAudioPlayback) {{Experimental_Inline}}
  - : Ein [`ConstrainBoolean`](#constrainboolean) Wert, der die angeforderten oder zwingenden Einschränkungen beschreibt, die dem Wert der [`suppressLocalAudioPlayback`](/de/docs/Web/API/MediaTrackSettings/suppressLocalAudioPlayback) einschränkbaren Eigenschaft auferlegt werden. Diese Eigenschaft steuert, ob das in einem Tab abgespielte Audio bei der Aufnahme weiterhin über die lokalen Lautsprecher eines Benutzers abgespielt wird.

- [`restrictOwnAudio`](/de/docs/Web/API/MediaTrackConstraints/restrictOwnAudio) {{Experimental_Inline}}
  - : Ein [`ConstrainBoolean`](#constrainboolean) Wert, der die angeforderten oder zwingenden Einschränkungen angibt, die dem Wert der [`restrictOwnAudio`](/de/docs/Web/API/MediaTrackSettings/restrictOwnAudio) einschränkbaren Eigenschaft auferlegt werden. Diese Eigenschaft steuert, ob das Systemsound-Audio, das vom aufnehmenden Tab stammt, aus der Bildschirmaufnahme herausgefiltert wird.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- [Screen Capture API](/de/docs/Web/API/Screen_Capture_API)
- [Verwendung der Screen Capture API](/de/docs/Web/API/Screen_Capture_API/Using_Screen_Capture)
- [`MediaStreamTrack.getConstraints()`](/de/docs/Web/API/MediaStreamTrack/getConstraints)
- [`MediaStreamTrack.applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints)
- [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia)
- [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia)
- [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints)
- [`MediaTrackSupportedConstraints`](/de/docs/Web/API/MediaTrackSupportedConstraints)
- [`MediaStreamTrack.getSettings()`](/de/docs/Web/API/MediaStreamTrack/getSettings)
