---
title: MediaTrackConstraints
slug: Web/API/MediaTrackConstraints
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{APIRef("Media Capture and Streams")}}

Das **`MediaTrackConstraints`** Wörterbuch wird verwendet, um eine Reihe von Fähigkeiten und die Werte oder Wertebereiche zu beschreiben, die jede Fähigkeit annehmen kann. Ein Beschränkungswörterbuch wird in [`applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) übergeben, um einem Script zu ermöglichen, eine Reihe von exakten (erforderlichen) Werten oder Bereichen und/oder bevorzugten Werten oder Bereichen für die Spur zu etablieren. Das zuletzt angeforderte Set benutzerdefinierter Beschränkungen kann durch Aufrufen von [`getConstraints()`](/de/docs/Web/API/MediaStreamTrack/getConstraints) abgerufen werden.

## Beschränkungen

Die folgenden Typen werden verwendet, um eine Beschränkung für eine Eigenschaft zu spezifizieren. Sie ermöglichen es Ihnen, einen oder mehrere `exact` Werte anzugeben, von denen einer der Parameterwert sein muss, oder eine Gruppe von `ideal` Werten, die nach Möglichkeit verwendet werden sollten. Sie können auch einen einzelnen Wert (oder ein Array von Werten) angeben, den der Benutzeragent nach Anwendung aller strengeren Beschränkungen bestmöglich erfüllen wird.

Um mehr über die Funktionsweise von Beschränkungen zu erfahren, siehe [Fähigkeiten, Beschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints).

> [!NOTE] > `min` und `exact` Werte sind nicht in Beschränkungen erlaubt, die in Aufrufen von [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) verwendet werden — sie führen zu einem `TypeError` — sie sind jedoch in Beschränkungen, die in Aufrufen von [`MediaStreamTrack.applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) verwendet werden, erlaubt.

### ConstrainBoolean

Der `ConstrainBoolean` Beschränkungstyp wird verwendet, um eine Beschränkung für eine Eigenschaft anzugeben, deren Wert ein Boolescher Wert ist. Sein Wert kann entweder auf einen Booleschen Wert (`true` oder `false`) oder ein Objekt gesetzt werden, das die folgenden Eigenschaften enthält:

- `exact`
  - : Ein Boolescher Wert, der der Wert der Eigenschaft sein muss. Wenn die Eigenschaft nicht auf diesen Wert gesetzt werden kann, schlägt das Matching fehl.
- `ideal`
  - : Ein Boolescher Wert, der einen idealen Wert für die Eigenschaft angibt. Wenn möglich, wird dieser Wert verwendet, aber falls nicht, wird der Benutzeragent den bestmöglichen passenden Wert verwenden.

### ConstrainDouble

Der `ConstrainDouble` Beschränkungstyp wird verwendet, um eine Beschränkung für eine Eigenschaft anzugeben, deren Wert eine Gleitkommazahl mit doppelter Genauigkeit ist. Sein Wert kann entweder auf eine Zahl oder ein Objekt gesetzt werden, das die folgenden Eigenschaften enthält:

- `max`
  - : Eine Dezimalzahl, die den größten zulässigen Wert der beschriebenen Eigenschaft angibt. Wenn der Wert nicht gleich oder kleiner als dieser Wert bleiben kann, schlägt das Matching fehl.
- `min`
  - : Eine Dezimalzahl, die den kleinsten zulässigen Wert der beschriebenen Eigenschaft angibt. Wenn der Wert nicht gleich oder größer als dieser Wert bleiben kann, schlägt das Matching fehl.
- `exact`
  - : Eine Dezimalzahl, die einen spezifischen, erforderlichen Wert angibt, den die Eigenschaft haben muss, um als akzeptabel zu gelten.
- `ideal`
  - : Eine Dezimalzahl, die einen idealen Wert für die Eigenschaft angibt. Falls möglich, wird dieser Wert verwendet, andernfalls wird der bestmögliche passende Wert vom Benutzeragent verwendet.

### ConstrainDOMString

Der `ConstrainDOMString` Beschränkungstyp wird verwendet, um eine Beschränkung für eine Eigenschaft anzugeben, deren Wert eine Zeichenkette ist. Sein Wert kann entweder auf eine Zeichenkette, ein Array von Zeichenketten oder ein Objekt gesetzt werden, das die folgenden Eigenschaften enthält:

- `exact`
  - : Eine Zeichenkette oder ein Array von Zeichenketten, von denen eine der Wert der Eigenschaft sein muss. Wenn die Eigenschaft nicht auf einen der aufgeführten Werte gesetzt werden kann, schlägt das Matching fehl.
- `ideal`
  - : Eine Zeichenkette oder ein Array von Zeichenketten, die ideale Werte für die Eigenschaft angeben. Falls möglich, wird einer der aufgeführten Werte verwendet, andernfalls wird der bestmögliche passende Wert von Benutzeragent verwendet.

### ConstrainULong

Der `ConstrainULong` Beschränkungstyp wird verwendet, um eine Beschränkung für eine Eigenschaft anzugeben, deren Wert ein Ganzzahlwert ist. Sein Wert kann entweder auf eine Zahl oder ein Objekt gesetzt werden, das die folgenden Eigenschaften enthält:

- `max`
  - : Eine Ganzzahl, die den größten zulässigen Wert der beschriebenen Eigenschaft angibt. Wenn der Wert nicht gleich oder kleiner als dieser Wert bleiben kann, schlägt das Matching fehl.
- `min`
  - : Eine Ganzzahl, die den kleinsten zulässigen Wert der beschriebenen Eigenschaft angibt. Wenn der Wert nicht gleich oder größer als dieser Wert bleiben kann, schlägt das Matching fehl.
- `exact`
  - : Eine Ganzzahl, die einen spezifischen, erforderlichen Wert angibt, den die Eigenschaft haben muss, um als akzeptabel zu gelten.
- `ideal`
  - : Eine Ganzzahl, die einen idealen Wert für die Eigenschaft angibt. Falls möglich, wird dieser Wert verwendet, andernfalls wird der bestmögliche passende Wert vom Benutzeragent verwendet.

## Instanz-Eigenschaften

Eine Kombination, aber nicht notwendigerweise alle, der folgenden Eigenschaften wird auf dem Objekt existieren. Dies kann der Fall sein, da ein bestimmter Browser die Eigenschaft nicht unterstützt oder weil sie nicht zutrifft. Zum Beispiel, da {{Glossary("RTP", "RTP")}} einige dieser Werte während der Aushandlung einer WebRTC-Verbindung nicht bereitstellt, wird ein Track, der mit einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) assoziiert ist, bestimmte Werte wie [`facingMode`](/de/docs/Web/API/MediaTrackConstraints/facingMode) oder [`groupId`](/de/docs/Web/API/MediaTrackConstraints/groupId) nicht enthalten.

### Instanz-Eigenschaften aller Medienspuren

- [`deviceId`](/de/docs/Web/API/MediaTrackConstraints/deviceId)
  - : Ein [`ConstrainDOMString`](#constraindomstring) Objekt, das eine Geräte-ID oder ein Array von Geräte-IDs angibt, die akzeptabel und/oder erforderlich sind.
- [`groupId`](/de/docs/Web/API/MediaTrackConstraints/groupId)
  - : Ein [`ConstrainDOMString`](#constraindomstring) Objekt, das eine Gruppen-ID oder ein Array von Gruppen-IDs angibt, die akzeptabel und/oder erforderlich sind.

### Instanz-Eigenschaften von Audiospuren

- [`autoGainControl`](/de/docs/Web/API/MediaTrackConstraints/autoGainControl)
  - : Ein [`ConstrainBoolean`](#constrainboolean) Objekt, das angibt, ob automatische Verstärkungsregelung bevorzugt und/oder erforderlich ist.
- [`channelCount`](/de/docs/Web/API/MediaTrackConstraints/channelCount)
  - : Ein [`ConstrainULong`](#constrainulong), das die Kanalanzahl oder den Bereich von Kanalanzahlen angibt, die akzeptabel und/oder erforderlich sind.
- [`echoCancellation`](/de/docs/Web/API/MediaTrackConstraints/echoCancellation)
  - : Ein [`ConstrainBoolean`](#constrainboolean) Objekt, das angibt, ob die Echounterdrückung bevorzugt und/oder erforderlich ist.
- [`latency`](/de/docs/Web/API/MediaTrackConstraints/latency)
  - : Ein [`ConstrainDouble`](#constraindouble), das die Latenz oder den Bereich von Latenzen angibt, die akzeptabel und/oder erforderlich sind.
- [`noiseSuppression`](/de/docs/Web/API/MediaTrackConstraints/noiseSuppression)
  - : Ein [`ConstrainBoolean`](#constrainboolean), der angibt, ob Geräuschunterdrückung bevorzugt und/oder erforderlich ist.
- [`sampleRate`](/de/docs/Web/API/MediaTrackConstraints/sampleRate)
  - : Ein [`ConstrainULong`](#constrainulong), das die Abtastrate oder den Bereich von Abtastraten angibt, die akzeptabel und/oder erforderlich sind.
- [`sampleSize`](/de/docs/Web/API/MediaTrackConstraints/sampleSize)
  - : Ein [`ConstrainULong`](#constrainulong), das die Abtastgröße oder den Bereich von Abtastgrößen angibt, die akzeptabel und/oder erforderlich sind.
- [`volume`](/de/docs/Web/API/MediaTrackConstraints/volume) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Ein [`ConstrainDouble`](#constraindouble), das die Lautstärke oder den Bereich von Lautstärken angibt, die akzeptabel und/oder erforderlich sind.

### Instanz-Eigenschaften von Bildspuren

- whiteBalanceMode
  - : Eine {{jsxref("String")}}, die eine der Optionen `"none"`, `"manual"`, `"single-shot"` oder `"continuous"` spezifiziert.
- exposureMode
  - : Eine {{jsxref("String")}}, die eine der Optionen `"none"`, `"manual"`, `"single-shot"` oder `"continuous"` spezifiziert.
- focusMode
  - : Eine {{jsxref("String")}}, die eine der Optionen `"none"`, `"manual"`, `"single-shot"` oder `"continuous"` spezifiziert.
- pointsOfInterest
  - : Die Pixelkoordinaten auf dem Sensor eines oder mehrerer Interessenspunkte. Dies ist entweder ein Objekt in der Form { x:_value_, y:_value_ } oder ein Array solcher Objekte, wobei _value_ ein Gleitkomma-Doppelwert ist.
- exposureCompensation
  - : Ein [`ConstrainDouble`](#constraindouble) (ein Gleitkomma-Doppelwert), der die Blendenkompensation um bis zu ±3 angibt.
- colorTemperature
  - : Ein [`ConstrainDouble`](#constraindouble) (ein Gleitkomma-Doppelwert), der eine gewünschte Farbtemperatur in Grad Kelvin angibt.
- iso
  - : Ein [`ConstrainDouble`](#constraindouble) (ein Gleitkomma-Doppelwert), der eine gewünschte ISO-Einstellung angibt.
- brightness
  - : Ein [`ConstrainDouble`](#constraindouble) (ein Gleitkomma-Doppelwert), der eine gewünschte Helligkeitseinstellung angibt.
- contrast
  - : Ein [`ConstrainDouble`](#constraindouble) (ein Gleitkomma-Doppelwert), der den Grad des Unterschieds zwischen Hell und Dunkel angibt.
- saturation
  - : Ein [`ConstrainDouble`](#constraindouble) (ein Gleitkomma-Doppelwert), der den Grad der Farbintensität angibt.
- sharpness
  - : Ein [`ConstrainDouble`](#constraindouble) (ein Gleitkomma-Doppelwert), der die Intensität der Kanten angibt.
- focusDistance
  - : Ein [`ConstrainDouble`](#constraindouble) (ein Gleitkomma-Doppelwert), der die Entfernung zu einem fokussierten Objekt angibt.
- zoom
  - : Ein [`ConstrainDouble`](#constraindouble) (ein Gleitkomma-Doppelwert), der die gewünschte Brennweite angibt.
- torch
  - : Ein boolescher Wert, der definiert, ob das Fülllicht kontinuierlich verbunden ist, was bedeutet, dass es eingeschaltet bleibt, solange die Spur aktiv ist.

### Instanz-Eigenschaften von Videospuren

- [`aspectRatio`](/de/docs/Web/API/MediaTrackConstraints/aspectRatio)
  - : Ein [`ConstrainDouble`](#constraindouble), der das Video-{{Glossary("aspect_ratio", "Seitenverhältnis")}} oder den Bereich der Seitenverhältnisse angibt, die akzeptabel und/oder erforderlich sind.
- [`facingMode`](/de/docs/Web/API/MediaTrackConstraints/facingMode)
  - : Ein [`ConstrainDOMString`](#constraindomstring) Objekt, das eine Ansicht oder ein Array von Ansichten angibt, die akzeptabel und/oder erforderlich sind.
- [`frameRate`](/de/docs/Web/API/MediaTrackConstraints/frameRate)
  - : Ein [`ConstrainDouble`](#constraindouble), der die Bildrate oder den Bereich von Bildraten angibt, die akzeptabel und/oder erforderlich sind.
- [`height`](/de/docs/Web/API/MediaTrackConstraints/height)
  - : Ein [`ConstrainULong`](#constrainulong), der die Videohöhe oder den Bereich von Höhen angibt, die akzeptabel und/oder erforderlich sind.
- [`width`](/de/docs/Web/API/MediaTrackConstraints/width)
  - : Ein [`ConstrainULong`](#constrainulong), der die Videobreite oder den Bereich von Breiten angibt, die akzeptabel und/oder erforderlich sind.
- resizeMode
  - : Ein [`ConstrainDOMString`](#constraindomstring) Objekt, das einen Modus oder ein Array von Modi angibt, die die Benutzeragent verwenden kann, um die Auflösung einer Videospur abzuleiten. Erlaubte Werte sind `none` und `crop-and-scale`. `none` bedeutet, dass der Benutzeragent die vom Kamera, ihrem Treiber oder dem Betriebssystem bereitgestellte Auflösung verwendet. `crop-and-scale` bedeutet, dass der Benutzeragent Beschneidung und Herunterskalierung auf der Kameraausgabe verwenden kann, um andere die Auflösung beeinflussende Beschränkungen zu erfüllen.

### Instanz-Eigenschaften von geteilten Bildschirmspuren

Diese Beschränkungen gelten für die `video`-Eigenschaft des Objekts, das in [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) übergeben wird, um einen Stream für die Bildschirmfreigabe zu erhalten.

- [`displaySurface`](/de/docs/Web/API/MediaTrackConstraints/displaySurface)

  - : Ein [`ConstrainDOMString`](#constraindomstring), der angibt, welche Arten von Anzeigeoberflächen vom Benutzer ausgewählt werden können. Dies kann eine der folgenden Zeichenketten oder eine Liste von ihnen sein, um mehrere Quelloberflächen zuzulassen:
    - `browser`
      - : Der Stream enthält die Inhalte eines einzelnen vom Benutzer ausgewählten Browser-Tabs.
    - `monitor`
      - : Die Videospur des Streams enthält die gesamten Inhalte eines oder mehrerer Bildschirme des Benutzers.
    - `window`
      - : Der Stream enthält ein einzelnes Fenster, das vom Benutzer zur Freigabe ausgewählt wurde.

- [`logicalSurface`](/de/docs/Web/API/MediaTrackConstraints/logicalSurface)

  - : Ein [`ConstrainBoolean`](#constrainboolean) Wert, der entweder einen einzelnen Booleschen Wert oder eine Gruppe von ihnen enthalten kann und angibt, ob Quellenoberflächen erlaubt sind, die nicht direkt Anzeigebereichen entsprechen. Dazu können Puffer für Fenster gehören, die den Inhalt von Fenstern erfassen, die von anderen Fenstern verdeckt werden, oder Puffer, die größere Dokumente enthalten, die gescrollt werden müssen, um ihren gesamten Inhalt in ihren Fenstern anzuzeigen.

- [`suppressLocalAudioPlayback`](/de/docs/Web/API/MediaTrackConstraints/suppressLocalAudioPlayback) {{Experimental_Inline}}
  - : Ein [`ConstrainBoolean`](#constrainboolean) Wert, der die angeforderten oder obligatorischen Beschränkungen für den Wert der [`suppressLocalAudioPlayback`](/de/docs/Web/API/MediaTrackSettings/suppressLocalAudioPlayback) einschränkbaren Eigenschaft beschreibt. Diese Eigenschaft steuert, ob der Ton, der in einem Tab abgespielt wird, weiterhin über die lokalen Lautsprecher eines Benutzers abgespielt wird, wenn der Tab erfasst wird.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Fähigkeiten, Beschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- [Screen Capture API](/de/docs/Web/API/Screen_Capture_API)
- [Verwendung der Screen Capture API](/de/docs/Web/API/Screen_Capture_API/Using_Screen_Capture)
- [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia)
- [`MediaStreamTrack.getConstraints()`](/de/docs/Web/API/MediaStreamTrack/getConstraints)
- [`MediaStreamTrack.applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints)
- [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints)
- [`MediaTrackSupportedConstraints`](/de/docs/Web/API/MediaTrackSupportedConstraints)
- [`MediaStreamTrack.getSettings()`](/de/docs/Web/API/MediaStreamTrack/getSettings)
