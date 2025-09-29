---
title: MediaTrackConstraints
slug: Web/API/MediaTrackConstraints
l10n:
  sourceCommit: 898c99a032482fd8ba9759a76f2713d2d057437f
---

{{APIRef("Media Capture and Streams")}}

Das **`MediaTrackConstraints`** Wörterbuch wird verwendet, um eine Reihe von Medienfähigkeiten und die Werte oder Wertebereiche, die sie annehmen können, zu beschreiben.

Ein Constraints-Wörterbuch wird in die Methode [`applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) des [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Interfaces übergeben, um einem Skript zu ermöglichen, eine Reihe von exakten (erforderlichen) Werten oder Bereichen und/oder bevorzugten Werten oder Bereichen für den Track festzulegen.

Das zuletzt angeforderte Set von benutzerdefinierten Einschränkungen kann durch Aufrufen von [`getConstraints()`](/de/docs/Web/API/MediaStreamTrack/getConstraints) abgerufen werden.

Objekte dieses Typs können auch übergeben werden an:

- Die Methode [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia), um Einschränkungen für einen von Hardware wie einer Kamera oder einem Mikrofon angeforderten Medienstream anzugeben.

- Die Methode [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia), um Einschränkungen für einen von einem Bildschirm oder Fensteraufnahme angeforderten Medienstream anzugeben.

## Einschränkungen

Die folgenden Typen werden verwendet, um eine Einschränkung für eine Eigenschaft anzugeben. Sie erlauben Ihnen, einen oder mehrere `exact` Werte anzugeben, von denen einer der Wert des Parameters sein muss, oder eine Reihe von `ideal` Werten, die, wenn möglich, verwendet werden sollten. Sie können auch einen einzelnen Wert (oder ein Array von Werten) angeben, den der Benutzer-Agent nach der Anwendung aller strengeren Einschränkungen bestmöglich zu erfüllen versucht.

Um mehr darüber zu erfahren, wie Einschränkungen funktionieren, siehe [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints).

> [!NOTE]
> `min` und `exact` Werte sind in Einschränkungen, die in [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia)-Aufrufen verwendet werden, nicht erlaubt — sie führen zu einem `TypeError` — aber sie sind in Einschränkungen erlaubt, die in [`MediaStreamTrack.applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints)-Aufrufen verwendet werden.

### ConstrainBoolean

Der `ConstrainBoolean` Einschränkungstyp wird verwendet, um eine Einschränkung für eine Eigenschaft anzugeben, deren Wert ein Boolescher Wert ist. Ihr Wert kann entweder auf einen Booleschen Wert (`true` oder `false`) oder auf ein Objekt gesetzt werden, das die folgenden Eigenschaften enthält:

- `exact`
  - : Ein Boolean, der der Wert der Eigenschaft sein muss. Wenn die Eigenschaft nicht auf diesen Wert gesetzt werden kann, schlägt das Matching fehl.
- `ideal`
  - : Ein Boolean, der einen idealen Wert für die Eigenschaft angibt. Wenn möglich, wird dieser Wert verwendet; wenn nicht, verwendet der Benutzer-Agent den nächstmöglichen passenden Wert.

### ConstrainDouble

Der `ConstrainDouble` Einschränkungstyp wird verwendet, um eine Einschränkung für eine Eigenschaft anzugeben, deren Wert eine Gleitkommazahl mit doppelter Genauigkeit ist. Ihr Wert kann entweder auf eine Zahl oder auf ein Objekt gesetzt werden, das die folgenden Eigenschaften enthält:

- `max`
  - : Eine Dezimalzahl, die den größten zulässigen Wert der beschriebenen Eigenschaft angibt. Wenn der Wert nicht gleich oder kleiner als dieser Wert bleiben kann, schlägt das Matching fehl.
- `min`
  - : Eine Dezimalzahl, die den kleinsten zulässigen Wert der beschriebenen Eigenschaft angibt. Wenn der Wert nicht gleich oder größer als dieser Wert bleiben kann, schlägt das Matching fehl.
- `exact`
  - : Eine Dezimalzahl, die einen bestimmten, erforderlichen Wert angibt, den die Eigenschaft haben muss, um akzeptabel zu sein.
- `ideal`
  - : Eine Dezimalzahl, die einen idealen Wert für die Eigenschaft angibt. Wenn möglich, wird dieser Wert verwendet; wenn nicht, verwendet der Benutzer-Agent den nächstmöglichen passenden Wert.

### ConstrainDOMString

Der `ConstrainDOMString` Einschränkungstyp wird verwendet, um eine Einschränkung für eine Eigenschaft anzugeben, deren Wert ein String ist. Ihr Wert kann entweder auf einen String, ein Array von Strings oder auf ein Objekt gesetzt werden, das die folgenden Eigenschaften enthält:

- `exact`
  - : Ein String oder ein Array von Strings, von denen einer der Wert der Eigenschaft sein muss. Wenn die Eigenschaft nicht auf einen der aufgelisteten Werte gesetzt werden kann, schlägt das Matching fehl.
- `ideal`
  - : Ein String oder ein Array von Strings, die ideale Werte für die Eigenschaft angeben. Wenn möglich, wird einer der aufgelisteten Werte verwendet; wenn nicht, verwendet der Benutzer-Agent den nächstmöglichen passenden Wert.

### ConstrainULong

Der `ConstrainULong` Einschränkungstyp wird verwendet, um eine Einschränkung für eine Eigenschaft anzugeben, deren Wert eine Ganzzahl ist. Ihr Wert kann entweder auf eine Zahl oder auf ein Objekt gesetzt werden, das die folgenden Eigenschaften enthält:

- `max`
  - : Eine Ganzzahl, die den größten zulässigen Wert der beschriebenen Eigenschaft angibt. Wenn der Wert nicht gleich oder kleiner als dieser Wert bleiben kann, schlägt das Matching fehl.
- `min`
  - : Eine Ganzzahl, die den kleinsten zulässigen Wert der beschriebenen Eigenschaft angibt. Wenn der Wert nicht gleich oder größer als dieser Wert bleiben kann, schlägt das Matching fehl.
- `exact`
  - : Eine Ganzzahl, die einen bestimmten, erforderlichen Wert angibt, den die Eigenschaft haben muss, um akzeptabel zu sein.
- `ideal`
  - : Eine Ganzzahl, die einen idealen Wert für die Eigenschaft angibt. Wenn möglich, wird dieser Wert verwendet; wenn nicht, verwendet der Benutzer-Agent den nächstmöglichen passenden Wert.

## Instanzeigenschaften

Eine Kombination, aber nicht unbedingt alle, der folgenden Eigenschaften wird auf dem Objekt existieren. Dies kann daran liegen, dass ein bestimmter Browser die Eigenschaft nicht unterstützt oder weil sie nicht zutrifft. Zum Beispiel, weil {{Glossary("RTP", "RTP")}} einige dieser Werte während der Aushandlung einer WebRTC-Verbindung nicht bereitstellt, wird ein Track, der mit einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) verknüpft ist, bestimmte Werte wie [`facingMode`](/de/docs/Web/API/MediaTrackConstraints/facingMode) oder [`groupId`](/de/docs/Web/API/MediaTrackConstraints/groupId) nicht enthalten.

### Instanzeigenschaften aller Medientracks

- [`deviceId`](/de/docs/Web/API/MediaTrackConstraints/deviceId)
  - : Ein [`ConstrainDOMString`](#constraindomstring) Objekt, das eine Geräte-ID oder ein Array von Geräte-IDs angibt, die akzeptabel und/oder erforderlich sind.
- [`groupId`](/de/docs/Web/API/MediaTrackConstraints/groupId)
  - : Ein [`ConstrainDOMString`](#constraindomstring) Objekt, das eine Gruppen-ID oder ein Array von Gruppen-IDs angibt, die akzeptabel und/oder erforderlich sind.

### Instanzeigenschaften von Audiotracks

- [`autoGainControl`](/de/docs/Web/API/MediaTrackConstraints/autoGainControl)
  - : Ein [`ConstrainBoolean`](#constrainboolean) Objekt, das angibt, ob automatische Verstärkungsregelung bevorzugt und/oder erforderlich ist.
- [`channelCount`](/de/docs/Web/API/MediaTrackConstraints/channelCount)
  - : Ein [`ConstrainULong`](#constrainulong), das die Kanalanzahl oder den Kanalanzahlbereich angibt, der akzeptabel und/oder erforderlich ist.
- [`echoCancellation`](/de/docs/Web/API/MediaTrackConstraints/echoCancellation)
  - : Ein [`ConstrainBoolean`](#constrainboolean) Objekt, das angibt, ob Echounterdrückung bevorzugt und/oder erforderlich ist.
- [`latency`](/de/docs/Web/API/MediaTrackConstraints/latency)
  - : Ein [`ConstrainDouble`](#constraindouble), das die Latenz oder den Latenzbereich angibt, der akzeptabel und/oder erforderlich ist.
- [`noiseSuppression`](/de/docs/Web/API/MediaTrackConstraints/noiseSuppression)
  - : Ein [`ConstrainBoolean`](#constrainboolean), das angibt, ob Rauschunterdrückung bevorzugt und/oder erforderlich ist.
- [`sampleRate`](/de/docs/Web/API/MediaTrackConstraints/sampleRate)
  - : Ein [`ConstrainULong`](#constrainulong), das die Abtastrate oder den Abtastratenbereich angibt, der akzeptabel und/oder erforderlich ist.
- [`sampleSize`](/de/docs/Web/API/MediaTrackConstraints/sampleSize)
  - : Ein [`ConstrainULong`](#constrainulong), das die Abtastgröße oder den Abtastgrößenbereich angibt, der akzeptabel und/oder erforderlich ist.
- [`volume`](/de/docs/Web/API/MediaTrackConstraints/volume) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Ein [`ConstrainDouble`](#constraindouble), der die Lautstärke oder den Lautstärkebereich angibt, der akzeptabel und/oder erforderlich ist.

### Instanzeigenschaften von Bildtracks

- `whiteBalanceMode`
  - : Ein {{jsxref("String")}}, der einen der folgenden Werte angibt: `"none"`, `"manual"`, `"single-shot"` oder `"continuous"`.
- `exposureMode`
  - : Ein {{jsxref("String")}}, der einen der folgenden Werte angibt: `"none"`, `"manual"`, `"single-shot"` oder `"continuous"`.
- `focusMode`
  - : Ein {{jsxref("String")}}, der einen der folgenden Werte angibt: `"none"`, `"manual"`, `"single-shot"` oder `"continuous"`.
- `pointsOfInterest`
  - : Die Pixelkoordinaten auf dem Sensor eines oder mehrerer interessanter Punkte. Dies ist entweder ein Objekt in der Form { x:_value_, y:_value_ } oder ein Array solcher Objekte, wobei _value_ ein Double-Precision-Integer ist.
- `exposureCompensation`
  - : Ein [`ConstrainDouble`](#constraindouble) (ein Double-Precision-Integer), das die Blendenkorrektur um bis zu ±3 angibt.
- `colorTemperature`
  - : Ein [`ConstrainDouble`](#constraindouble) (ein Double-Precision-Integer), das eine gewünschte Farbtemperatur in Kelvin angibt.
- `iso`
  - : Ein [`ConstrainDouble`](#constraindouble) (ein Double-Precision-Integer), das eine gewünschte ISO-Einstellung angibt.
- `brightness`
  - : Ein [`ConstrainDouble`](#constraindouble) (ein Double-Precision-Integer), das eine gewünschte Helligkeitseinstellung angibt.
- `contrast`
  - : Ein [`ConstrainDouble`](#constraindouble) (ein Double-Precision-Integer), das den Grad des Unterschieds zwischen Hell und Dunkel angibt.
- `saturation`
  - : Ein [`ConstrainDouble`](#constraindouble) (ein Double-Precision-Integer), das den Grad der Farbsättigung angibt.
- `sharpness`
  - : Ein [`ConstrainDouble`](#constraindouble) (ein Double-Precision-Integer), das die Intensität der Kanten angibt.
- `focusDistance`
  - : Ein [`ConstrainDouble`](#constraindouble) (ein Double-Precision-Integer), der die Entfernung zu einem fokussierten Objekt angibt.
- `zoom`
  - : Ein [`ConstrainDouble`](#constraindouble) (ein Double-Precision-Integer), das die gewünschte Brennweite angibt.
- `torch`
  - : Ein boolescher Wert, der definiert, ob das Zusatzlicht kontinuierlich angeschaltet ist, was bedeutet, dass es eingeschaltet bleibt, solange der Track aktiv ist.

### Instanzeigenschaften von Videotracks

- [`aspectRatio`](/de/docs/Web/API/MediaTrackConstraints/aspectRatio)
  - : Ein [`ConstrainDouble`](#constraindouble), der das Video-{{Glossary("aspect_ratio", "")}}Seitenverhältnis oder den Bereich von akzeptablen und/oder erforderlichen Seitenverhältnissen angibt.
- [`facingMode`](/de/docs/Web/API/MediaTrackConstraints/facingMode)
  - : Ein [`ConstrainDOMString`](#constraindomstring) Objekt, das eine oder mehrere akzeptable und/oder erforderliche Ausrichtungen angibt.
- [`frameRate`](/de/docs/Web/API/MediaTrackConstraints/frameRate)
  - : Ein [`ConstrainDouble`](#constraindouble), der die Bildfrequenz oder den Bereich von Bildfrequenzen angibt, die akzeptabel und/oder erforderlich sind.
- [`height`](/de/docs/Web/API/MediaTrackConstraints/height)
  - : Ein [`ConstrainULong`](#constrainulong), der die Videohöhe oder den Bereich von Höhen angibt, die akzeptabel und/oder erforderlich sind.
- [`width`](/de/docs/Web/API/MediaTrackConstraints/width)
  - : Ein [`ConstrainULong`](#constrainulong), der die Videobreite oder den Bereich von Breiten angibt, die akzeptabel und/oder erforderlich sind.
- `resizeMode`
  - : Ein [`ConstrainDOMString`](#constraindomstring) Objekt, das einen oder mehrere Modi angibt, die der Benutzer-Agent verwenden kann, um die Auflösung und Bildrate eines Videotracks abzuleiten. Zulässige Werte sind:
    - `crop-and-scale`
      - : Der Benutzer-Agent kann das Zuschneiden und Herunterskalieren der Auflösung oder Bildrate aus dem Roh-Output der Hardware/des Betriebssystems verwenden, um andere Einschränkungen zu erfüllen. Diese Einschränkung erlaubt Entwicklern, ein herunterskaliertes Video zu erhalten, selbst wenn das durch ihre Einschränkungen angegebene Format nicht nativ von der Hardware unterstützt wird.
    - `none`
      - : Der Benutzer-Agent verwendet die von der zugrundeliegenden Hardware, wie einer Kamera oder ihrem Treiber, oder dem Betriebssystem bereitgestellte Auflösung.

    Wenn `resizeMode` nicht angegeben ist, wählt der Browser eine Auflösung basierend auf einer [Fitness-Distanz](https://w3c.github.io/mediacapture-main/#dfn-fitness-distance), die die angegebenen Einschränkungen und _beide_ der zulässigen Werte berücksichtigt.

### Instanzeigenschaften von Bildschirmfreigabe-Tracks

Diese Einschränkungen gelten für die `video` Eigenschaft des Objekts, das an [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) übergeben wird, um einen Stream für die Bildschirmfreigabe zu erhalten.

- [`displaySurface`](/de/docs/Web/API/MediaTrackConstraints/displaySurface)
  - : Ein [`ConstrainDOMString`](#constraindomstring), der die Arten von Anzeigeoberflächen angibt, die vom Benutzer ausgewählt werden können. Dies kann ein einzelner der folgenden Strings sein oder eine Liste von ihnen, um mehrere Quelloberflächen zu erlauben:
    - `browser`
      - : Der Stream enthält die Inhalte eines einzelnen Browser-Tabs, der vom Benutzer ausgewählt wurde.
    - `monitor`
      - : Der Video-Track des Streams enthält den gesamten Inhalt eines oder mehrerer Bildschirme des Benutzers.
    - `window`
      - : Der Stream enthält ein einzelnes Fenster, das vom Benutzer zum Teilen ausgewählt wurde.

- [`logicalSurface`](/de/docs/Web/API/MediaTrackConstraints/logicalSurface)
  - : Ein [`ConstrainBoolean`](#constrainboolean) Wert, der entweder einen einzelnen booleschen Wert oder eine Menge davon enthalten kann und angibt, ob dem Benutzer erlaubt werden soll, Quelloberflächen auszuwählen, die nicht direkt einer Anzeigezone entsprechen. Diese können Backing-Puffer für Fenster einschließen, um den Inhalt von überlappenden Fenstern zu erfassen, oder Puffer, die größere Dokumente enthalten, die durch Scrollen in ihren Fenstern vollständig sichtbar gemacht werden müssen.

- [`suppressLocalAudioPlayback`](/de/docs/Web/API/MediaTrackConstraints/suppressLocalAudioPlayback) {{Experimental_Inline}}
  - : Ein [`ConstrainBoolean`](#constrainboolean) Wert, der die angeforderten oder obligatorischen Einschränkungen für den [`suppressLocalAudioPlayback`](/de/docs/Web/API/MediaTrackSettings/suppressLocalAudioPlayback) einschränkbaren Eigenschaftswert beschreibt. Diese Eigenschaft steuert, ob der Ton, der in einem Tab abgespielt wird, auch weiterhin auf den lokalen Lautsprechern des Benutzers ausgegeben wird, wenn der Tab erfasst wird.

## Spezifikationen

{{Spezifikationen}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- [Bildschirmaufnahme-API](/de/docs/Web/API/Screen_Capture_API)
- [Verwendung der Bildschirmaufnahme-API](/de/docs/Web/API/Screen_Capture_API/Using_Screen_Capture)
- [`MediaStreamTrack.getConstraints()`](/de/docs/Web/API/MediaStreamTrack/getConstraints)
- [`MediaStreamTrack.applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints)
- [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia)
- [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia)
- [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints)
- [`MediaTrackSupportedConstraints`](/de/docs/Web/API/MediaTrackSupportedConstraints)
- [`MediaStreamTrack.getSettings()`](/de/docs/Web/API/MediaStreamTrack/getSettings)
