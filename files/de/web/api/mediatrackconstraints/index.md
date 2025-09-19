---
title: MediaTrackConstraints
slug: Web/API/MediaTrackConstraints
l10n:
  sourceCommit: b20a4643a0777bcb6bdc431b76ebf13eb2f31301
---

{{APIRef("Media Capture and Streams")}}

Das **`MediaTrackConstraints`**-Wörterbuch wird verwendet, um eine Reihe von Medienfähigkeiten und die Werte oder Wertbereiche zu beschreiben, die jede annehmen kann.

Ein Constraints-Wörterbuch wird in die Methode [`applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) der [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Schnittstelle übergeben, um einem Skript zu ermöglichen, eine Reihe von genauen (erforderlichen) Werten oder Bereichen und/oder bevorzugten Werten oder Bereichen für die Spur festzulegen.

Die zuletzt angeforderte benutzerdefinierte Constraints-Sammlung kann abgerufen werden, indem [`getConstraints()`](/de/docs/Web/API/MediaStreamTrack/getConstraints) aufgerufen wird.

Objekte dieses Typs können auch übergeben werden an:

- Die Methode [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia), um Constraints für einen von der Hardware wie einer Kamera oder einem Mikrofon angeforderten Datenstrom festzulegen.

- Die Methode [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia), um Constraints für einen von der Bildschirm- oder Fensteraufnahme angeforderten Datenstrom festzulegen.

## Constraints

Die folgenden Typen werden verwendet, um ein Constraint für eine Eigenschaft anzugeben.
Sie ermöglichen es Ihnen, ein oder mehrere `exact`-Werte anzugeben, von denen einer der Parameterwert sein muss, oder eine Reihe von `ideal`-Werten, die, wenn möglich, verwendet werden sollten.
Sie können auch einen einzelnen Wert (oder ein Array von Werten) angeben, den der Benutzeragent so gut wie möglich passend machen wird, nachdem alle strengeren Constraints angewendet wurden.

Um mehr darüber zu erfahren, wie Constraints funktionieren, siehe [Fähigkeiten, Constraints und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints).

> [!NOTE]
> `min`- und `exact`-Werte sind in Constraints, die in [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia)-Aufrufen verwendet werden, nicht erlaubt — sie erzeugen einen `TypeError` —, aber sie sind in Constraints, die in [`MediaStreamTrack.applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints)-Aufrufen verwendet werden, zulässig.

### ConstrainBoolean

Der `ConstrainBoolean`-Constraint-Typ wird verwendet, um ein Constraint für eine Eigenschaft anzugeben, deren Wert ein Boolescher Wert ist.
Sein Wert kann entweder auf einen Booleschen Wert (`true` oder `false`) gesetzt werden oder ein Objekt enthalten, das die folgenden Eigenschaften umfasst:

- `exact`
  - : Ein Boolescher Wert, der den Wert der Eigenschaft sein muss.
    Wenn die Eigenschaft nicht auf diesen Wert gesetzt werden kann, schlägt die Übereinstimmung fehl.
- `ideal`
  - : Ein Boolescher Wert, der einen Idealwert für die Eigenschaft angibt.
    Wenn möglich, wird dieser Wert verwendet, aber wenn es nicht möglich ist, wird der Benutzeragent den bestmöglichen passenden Wert verwenden.

### ConstrainDouble

Der `ConstrainDouble`-Constraint-Typ wird verwendet, um ein Constraint für eine Eigenschaft anzugeben, deren Wert eine Gleitkommazahl mit doppelter Genauigkeit ist.
Sein Wert kann entweder auf eine Zahl gesetzt werden oder ein Objekt enthalten, das die folgenden Eigenschaften enthält:

- `max`
  - : Eine Dezimalzahl, die den größten zulässigen Wert der beschriebenen Eigenschaft angibt.
    Wenn der Wert nicht gleich oder kleiner als dieser Wert bleiben kann, schlägt die Übereinstimmung fehl.
- `min`
  - : Eine Dezimalzahl, die den kleinsten zulässigen Wert der beschriebenen Eigenschaft angibt.
    Wenn der Wert nicht gleich oder größer als dieser Wert bleiben kann, schlägt die Übereinstimmung fehl.
- `exact`
  - : Eine Dezimalzahl, die einen bestimmten, erforderlichen Wert angibt, den die Eigenschaft haben muss, um als akzeptabel zu gelten.
- `ideal`
  - : Eine Dezimalzahl, die einen Idealwert für die Eigenschaft angibt.
    Wenn möglich, wird dieser Wert verwendet, aber wenn es nicht möglich ist, wird der Benutzeragent den bestmöglichen passenden Wert verwenden.

### ConstrainDOMString

Der `ConstrainDOMString`-Constraint-Typ wird verwendet, um ein Constraint für eine Eigenschaft anzugeben, deren Wert ein String ist.
Sein Wert kann entweder auf einen String, ein Array von Strings oder ein Objekt gesetzt werden, das die folgenden Eigenschaften enthält:

- `exact`
  - : Ein String oder ein Array von Strings, von denen einer der Wert der Eigenschaft sein muss.
    Wenn die Eigenschaft nicht auf einen der aufgeführten Werte gesetzt werden kann, schlägt die Übereinstimmung fehl.
- `ideal`
  - : Ein String oder ein Array von Strings, die Idealwerte für die Eigenschaft angeben.
    Wenn möglich, wird einer der aufgelisteten Werte verwendet, aber wenn es nicht möglich ist, wird der Benutzeragent den bestmöglichen passenden Wert verwenden.

### ConstrainULong

Der `ConstrainULong`-Constraint-Typ wird verwendet, um ein Constraint für eine Eigenschaft anzugeben, deren Wert ein Ganzzahlwert ist.
Sein Wert kann entweder auf eine Zahl gesetzt werden oder ein Objekt enthalten, das die folgenden Eigenschaften umfasst:

- `max`
  - : Ein ganzzahliger Wert, der den größten zulässigen Wert der beschriebenen Eigenschaft angibt.
    Wenn der Wert nicht gleich oder kleiner als dieser Wert bleiben kann, schlägt die Übereinstimmung fehl.
- `min`
  - : Ein ganzzahliger Wert, der den kleinsten zulässigen Wert der beschriebenen Eigenschaft angibt.
    Wenn der Wert nicht gleich oder größer als dieser Wert bleiben kann, schlägt die Übereinstimmung fehl.
- `exact`
  - : Ein ganzzahliger Wert, der einen bestimmten, erforderlichen Wert angibt, den die Eigenschaft haben muss, um als akzeptabel zu gelten.
- `ideal`
  - : Ein ganzzahliger Wert, der einen Idealwert für die Eigenschaft angibt.
    Wenn möglich, wird dieser Wert verwendet, aber wenn es nicht möglich ist, wird der Benutzeragent den bestmöglichen passenden Wert verwenden.

## Instanzeigenschaften

Eine Kombination aus einigen, aber nicht unbedingt allen, der folgenden Eigenschaften wird auf dem Objekt existieren.
Dies kann der Fall sein, weil ein bestimmter Browser die Eigenschaft nicht unterstützt oder weil sie nicht zutrifft.
Zum Beispiel, weil {{Glossary("RTP", "RTP")}} einige dieser Werte während der Aushandlung einer WebRTC-Verbindung nicht bereitstellt, wird eine mit einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) verknüpfte Spur einige Werte wie [`facingMode`](/de/docs/Web/API/MediaTrackConstraints/facingMode) oder [`groupId`](/de/docs/Web/API/MediaTrackConstraints/groupId) nicht enthalten.

### Instanzeigenschaften aller Medienspuren

- [`deviceId`](/de/docs/Web/API/MediaTrackConstraints/deviceId)
  - : Ein [`ConstrainDOMString`](#constraindomstring)-Objekt, das eine Geräte-ID oder ein Array von Geräte-IDs angibt, die akzeptabel und/oder erforderlich sind.
- [`groupId`](/de/docs/Web/API/MediaTrackConstraints/groupId)
  - : Ein [`ConstrainDOMString`](#constraindomstring)-Objekt, das eine Gruppen-ID oder ein Array von Gruppen-IDs angibt, die akzeptabel und/oder erforderlich sind.

### Instanzeigenschaften von Audiospuren

- [`autoGainControl`](/de/docs/Web/API/MediaTrackConstraints/autoGainControl)
  - : Ein [`ConstrainBoolean`](#constrainboolean)-Objekt, das angibt, ob automatische Verstärkungsregelung bevorzugt und/oder erforderlich ist.
- [`channelCount`](/de/docs/Web/API/MediaTrackConstraints/channelCount)
  - : Ein [`ConstrainULong`](#constrainulong), das die Kanalzahl oder den Bereich von Kanalzahlen angibt, die akzeptabel und/oder erforderlich sind.
- [`echoCancellation`](/de/docs/Web/API/MediaTrackConstraints/echoCancellation)
  - : Ein [`ConstrainBoolean`](#constrainboolean)-Objekt, das angibt, ob Echounterdrückung bevorzugt und/oder erforderlich ist.
- [`latency`](/de/docs/Web/API/MediaTrackConstraints/latency)
  - : Ein [`ConstrainDouble`](#constraindouble), das die Latenz oder den Bereich von Latenzen angibt, die akzeptabel und/oder erforderlich sind.
- [`noiseSuppression`](/de/docs/Web/API/MediaTrackConstraints/noiseSuppression)
  - : Ein [`ConstrainBoolean`](#constrainboolean), das angibt, ob Rauschunterdrückung bevorzugt und/oder erforderlich ist.
- [`sampleRate`](/de/docs/Web/API/MediaTrackConstraints/sampleRate)
  - : Ein [`ConstrainULong`](#constrainulong), das die Abtastrate oder den Bereich von Abtastraten angibt, die akzeptabel und/oder erforderlich sind.
- [`sampleSize`](/de/docs/Web/API/MediaTrackConstraints/sampleSize)
  - : Ein [`ConstrainULong`](#constrainulong), das die Abtastgröße oder den Bereich von Abtastgrößen angibt, die akzeptabel und/oder erforderlich sind.
- [`volume`](/de/docs/Web/API/MediaTrackConstraints/volume) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Ein [`ConstrainDouble`](#constraindouble), das die Lautstärke oder den Bereich von Lautstärken angibt, die akzeptabel und/oder erforderlich sind.

### Instanzeigenschaften von Bildspuren

- `whiteBalanceMode`
  - : Ein {{jsxref("String")}}, der einen der folgenden Werte angibt: `"none"`, `"manual"`, `"single-shot"` oder `"continuous"`.
- `exposureMode`
  - : Ein {{jsxref("String")}}, der einen der folgenden Werte angibt: `"none"`, `"manual"`, `"single-shot"` oder `"continuous"`.
- `focusMode`
  - : Ein {{jsxref("String")}}, der einen der folgenden Werte angibt: `"none"`, `"manual"`, `"single-shot"` oder `"continuous"`.
- `pointsOfInterest`
  - : Die Pixelkoordinaten auf dem Sensor von einem oder mehreren Interessenspunkten.
    Dies ist entweder ein Objekt in der Form { x:_value_, y:_value_ } oder ein Array solcher Objekte, wobei _value_ ein Gleitkommawert mit doppelter Genauigkeit ist.
- `exposureCompensation`
  - : Ein [`ConstrainDouble`](#constraindouble) (ein Gleitkommawert mit doppelter Genauigkeit), der eine Blendenkorrektur um bis zu ±3 angibt.
- `colorTemperature`
  - : Ein [`ConstrainDouble`](#constraindouble) (ein Gleitkommawert mit doppelter Genauigkeit), der eine gewünschte Farbtemperatur in Grad Kelvin angibt.
- `iso`
  - : Ein [`ConstrainDouble`](#constraindouble) (ein Gleitkommawert mit doppelter Genauigkeit), der eine gewünschte ISO-Einstellung angibt.
- `brightness`
  - : Ein [`ConstrainDouble`](#constraindouble) (ein Gleitkommawert mit doppelter Genauigkeit), der eine gewünschte Helligkeitseinstellung angibt.
- `contrast`
  - : Ein [`ConstrainDouble`](#constraindouble) (ein Gleitkommawert mit doppelter Genauigkeit), der den Grad des Unterschieds zwischen hell und dunkel angibt.
- `saturation`
  - : Ein [`ConstrainDouble`](#constraindouble) (ein Gleitkommawert mit doppelter Genauigkeit), der den Grad der Farbintensität angibt.
- `sharpness`
  - : Ein [`ConstrainDouble`](#constraindouble) (ein Gleitkommawert mit doppelter Genauigkeit), der die Intensität der Kanten angibt.
- `focusDistance`
  - : Ein [`ConstrainDouble`](#constraindouble) (ein Gleitkommawert mit doppelter Genauigkeit), der die Entfernung zu einem fokussierten Objekt angibt.
- `zoom`
  - : Ein [`ConstrainDouble`](#constraindouble) (ein Gleitkommawert mit doppelter Genauigkeit), der die gewünschte Brennweite angibt.
- `torch`
  - : Ein Boolescher Wert, der angibt, ob das Fülllicht kontinuierlich verbunden ist, was bedeutet, dass es eingeschaltet bleibt, solange die Spur aktiv ist.

### Instanzeigenschaften von Videospuren

- [`aspectRatio`](/de/docs/Web/API/MediaTrackConstraints/aspectRatio)
  - : Ein [`ConstrainDouble`](#constraindouble), der das Video-{{Glossary("aspect_ratio", "Seitenverhältnis")}} oder eine Reihe von Seitenverhältnissen angibt, die akzeptabel und/oder erforderlich sind.
- [`facingMode`](/de/docs/Web/API/MediaTrackConstraints/facingMode)
  - : Ein [`ConstrainDOMString`](#constraindomstring)-Objekt, das eine Ansicht oder eine Reihe von Ansichten angibt, die akzeptabel und/oder erforderlich sind.
- [`frameRate`](/de/docs/Web/API/MediaTrackConstraints/frameRate)
  - : Ein [`ConstrainDouble`](#constraindouble), der die Bildrate oder den Bereich von Bildraten angibt, die akzeptabel und/oder erforderlich sind.
- [`height`](/de/docs/Web/API/MediaTrackConstraints/height)
  - : Ein [`ConstrainULong`](#constrainulong), der die Videohöhe oder den Bereich von Höhen angibt, die akzeptabel und/oder erforderlich sind.
- [`width`](/de/docs/Web/API/MediaTrackConstraints/width)
  - : Ein [`ConstrainULong`](#constrainulong), der die Videobreite oder den Bereich von Breiten angibt, die akzeptabel und/oder erforderlich sind.
- `resizeMode`
  - : Ein [`ConstrainDOMString`](#constraindomstring)-Objekt, das einen Modus oder eine Reihe von Modi angibt, die der Benutzeragent verwenden kann, um die Auflösung und Bildrate einer Videospur abzuleiten.
    Erlaubte Werte sind:
    - `crop-and-scale`
      - : Der Benutzeragent kann Zuschneiden und Herunterskalieren von Auflösung oder Bildrate auf dem Rohoutput der Hardware/OS verwenden, um andere Constraints zu erfüllen.
        Dieses Constraint ermöglicht es Entwicklern, ein herunterskaliertes Video zu erhalten, selbst wenn das durch ihre Constraints angegebene spezielle Format nicht nativ von der Hardware unterstützt wird.
    - `none`
      - : Der Benutzeragent verwendet die von der zugrundeliegenden Hardware bereitgestellte Auflösung, wie zum Beispiel eine Kamera oder deren Treiber, oder das Betriebssystem.

    Wenn `resizeMode` nicht angegeben ist, wird der Browser eine Auflösung basierend auf einer [fitness distance](https://w3c.github.io/mediacapture-main/#dfn-fitness-distance) auswählen, die die angegebenen Constraints und _beide_ der erlaubten Werte berücksichtigt.

### Instanzeigenschaften von geteilten Bildschirmspuren

Diese Constraints gelten für die `video`-Eigenschaft des Objekts, das in [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) übergeben wird, um einen Stream für die Bildschirmfreigabe zu erhalten.

- [`displaySurface`](/de/docs/Web/API/MediaTrackConstraints/displaySurface)
  - : Ein [`ConstrainDOMString`](#constraindomstring), das die Arten von Anzeigeflächen angibt, die der Benutzer auswählen kann.
    Dies kann eine der folgenden Zeichenfolgen sein oder eine Liste davon, um mehrere Quellflächen zuzulassen:
    - `browser`
      - : Der Stream enthält die Inhalte eines einzelnen Browsers-Tabs, der vom Benutzer ausgewählt wurde.
    - `monitor`
      - : Der Videostream des Streams enthält den gesamten Inhalt eines oder mehrerer Bildschirme des Benutzers.
    - `window`
      - : Der Stream enthält ein einzelnes Fenster, das der Benutzer zur Freigabe ausgewählt hat.

- [`logicalSurface`](/de/docs/Web/API/MediaTrackConstraints/logicalSurface)
  - : Ein [`ConstrainBoolean`](#constrainboolean)-Wert, der einen einzelnen Booleschen Wert oder eine Menge davon enthalten kann, der angibt, ob es dem Benutzer erlaubt ist, Quellflächen auszuwählen, die nicht direkt den Anzeigebereichen entsprechen.
    Diese können Rückpuffer für Fenster enthalten, um die Aufnahme von Fensterinhalten zu ermöglichen, die von anderen Fenstern davor verdeckt sind, oder Puffer, die größere Dokumente enthalten, die durchscrollen müssen, um die gesamten Inhalte in ihren Fenstern anzuzeigen.

- [`suppressLocalAudioPlayback`](/de/docs/Web/API/MediaTrackConstraints/suppressLocalAudioPlayback) {{Experimental_Inline}}
  - : Ein [`ConstrainBoolean`](#constrainboolean)-Wert, der die gewünschten oder obligatorischen Constraints beschreibt, die auf den Wert der [`suppressLocalAudioPlayback`](/de/docs/Web/API/MediaTrackSettings/suppressLocalAudioPlayback) einschränkbaren Eigenschaft angewendet werden.
    Diese Eigenschaft steuert, ob das Audio, das in einem Tab gespielt wird, weiterhin aus den lokalen Lautsprechern eines Benutzers abgespielt wird, wenn der Tab erfasst wird.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Media Capture und Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Fähigkeiten, Constraints und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- [Screen Capture API](/de/docs/Web/API/Screen_Capture_API)
- [Verwendung der Screen Capture API](/de/docs/Web/API/Screen_Capture_API/Using_Screen_Capture)
- [`MediaStreamTrack.getConstraints()`](/de/docs/Web/API/MediaStreamTrack/getConstraints)
- [`MediaStreamTrack.applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints)
- [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia)
- [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia)
- [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints)
- [`MediaTrackSupportedConstraints`](/de/docs/Web/API/MediaTrackSupportedConstraints)
- [`MediaStreamTrack.getSettings()`](/de/docs/Web/API/MediaStreamTrack/getSettings)
