---
title: MediaTrackConstraints
slug: Web/API/MediaTrackConstraints
l10n:
  sourceCommit: c9e9f9f4faf2e8a5985e5834d9424557341f33c9
---

{{APIRef("Media Capture and Streams")}}

Das **`MediaTrackConstraints`** Wörterbuch wird verwendet, um eine Reihe von Fähigkeiten und die Werte zu beschreiben, die jede davon annehmen kann. Ein Einschränkungswörterbuch wird an [`applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) übergeben, um einem Skript zu ermöglichen, eine Reihe von genauen (erforderlichen) Werten oder Bereichen und/oder bevorzugten Werten oder Wertebereichen für die Spur festzulegen. Das zuletzt angeforderte Set benutzerdefinierter Einschränkungen kann durch Aufruf von [`getConstraints()`](/de/docs/Web/API/MediaStreamTrack/getConstraints) abgerufen werden.

## Einschränkungen

Die folgenden Typen werden verwendet, um eine Einschränkung für eine Eigenschaft anzugeben. Sie ermöglichen es, einen oder mehrere `exact` Werte festzulegen, von denen einer der Parameterwert sein muss, oder eine Reihe von `ideal` Werten, die nach Möglichkeit verwendet werden sollten. Sie können auch einen einzelnen Wert (oder ein Array von Werten) angeben, den der Benutzeragent so gut wie möglich anpassen wird, nachdem alle strengeren Einschränkungen angewendet wurden.

Um mehr darüber zu erfahren, wie Einschränkungen funktionieren, siehe [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints).

> **Hinweis:** `min` und `exact` Werte sind in Einschränkungen, die in [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) Aufrufen verwendet werden, nicht zulässig - sie führen zu einem `TypeError` - aber sie sind in Einschränkungen erlaubt, die in [`MediaStreamTrack.applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) Aufrufen verwendet werden.

### ConstrainBoolean

Der `ConstrainBoolean` Einschränkungstyp wird verwendet, um eine Einschränkung für eine Eigenschaft festzulegen, deren Wert ein boolescher Wert ist. Sein Wert kann entweder auf einen booleschen Wert (`true` oder `false`) oder ein Objekt gesetzt werden, das die folgenden Eigenschaften enthält:

- `exact`
  - : Ein Boolescher Wert, der der Wert der Eigenschaft sein muss. Wenn die Eigenschaft nicht auf diesen Wert gesetzt werden kann, schlägt das Anpassen fehl.
- `ideal`
  - : Ein Boolescher Wert, der einen idealen Wert für die Eigenschaft angibt. Wenn möglich, wird dieser Wert verwendet, aber wenn es nicht möglich ist, wird der Benutzeragent den nächstliegenden möglichen Wert verwenden.

### ConstrainDouble

Der `ConstrainDouble` Einschränkungstyp wird verwendet, um eine Einschränkung für eine Eigenschaft festzulegen, deren Wert eine Gleitkommazahl mit doppelter Genauigkeit ist. Sein Wert kann entweder auf eine Zahl oder ein Objekt gesetzt werden, das die folgenden Eigenschaften enthält:

- `max`
  - : Eine Dezimalzahl, die den größten zulässigen Wert der Eigenschaft angibt, die sie beschreibt. Wenn der Wert nicht gleich oder kleiner als dieser Wert bleiben kann, schlägt das Anpassen fehl.
- `min`
  - : Eine Dezimalzahl, die den kleinsten zulässigen Wert der Eigenschaft angibt, die sie beschreibt. Wenn der Wert nicht gleich oder größer als dieser Wert bleiben kann, schlägt das Anpassen fehl.
- `exact`
  - : Eine Dezimalzahl, die einen bestimmten, erforderlichen Wert angibt, den die Eigenschaft haben muss, um als akzeptabel zu gelten.
- `ideal`
  - : Eine Dezimalzahl, die einen idealen Wert für die Eigenschaft angibt. Wenn möglich, wird dieser Wert verwendet, aber wenn es nicht möglich ist, wird der Benutzeragent den nächstliegenden möglichen Wert verwenden.

### ConstrainDOMString

Der `ConstrainDOMString` Einschränkungstyp wird verwendet, um eine Einschränkung für eine Eigenschaft festzulegen, deren Wert eine Zeichenkette ist. Sein Wert kann entweder eine Zeichenkette, ein Array von Zeichenketten oder ein Objekt sein, das die folgenden Eigenschaften enthält:

- `exact`
  - : Eine Zeichenkette oder ein Array von Zeichenketten, von denen eine der Wert der Eigenschaft sein muss. Wenn die Eigenschaft nicht auf einen der aufgelisteten Werte gesetzt werden kann, schlägt das Anpassen fehl.
- `ideal`
  - : Eine Zeichenkette oder ein Array von Zeichenketten, die ideale Werte für die Eigenschaft angeben. Wenn möglich, wird einer der aufgelisteten Werte verwendet, aber wenn es nicht möglich ist, wird der Benutzeragent den nächstliegenden möglichen Wert verwenden.

### ConstrainULong

Der `ConstrainULong` Einschränkungstyp wird verwendet, um eine Einschränkung für eine Eigenschaft festzulegen, deren Wert eine Ganzzahl ist. Sein Wert kann entweder auf eine Zahl oder ein Objekt gesetzt werden, das die folgenden Eigenschaften enthält:

- `max`
  - : Eine Ganzzahl, die den größten zulässigen Wert der Eigenschaft angibt, die sie beschreibt. Wenn der Wert nicht gleich oder kleiner als dieser Wert bleiben kann, schlägt das Anpassen fehl.
- `min`
  - : Eine Ganzzahl, die den kleinsten zulässigen Wert der Eigenschaft angibt, die sie beschreibt. Wenn der Wert nicht gleich oder größer als dieser Wert bleiben kann, schlägt das Anpassen fehl.
- `exact`
  - : Eine Ganzzahl, die einen bestimmten, erforderlichen Wert angibt, den die Eigenschaft haben muss, um als akzeptabel zu gelten.
- `ideal`
  - : Eine Ganzzahl, die einen idealen Wert für die Eigenschaft angibt. Wenn möglich, wird dieser Wert verwendet, aber wenn es nicht möglich ist, wird der Benutzeragent den nächstliegenden möglichen Wert verwenden.

## Instanzeigenschaften

Eine Kombination—aber nicht notwendigerweise alle—der folgenden Eigenschaften wird auf dem Objekt existieren. Dies kann daran liegen, dass ein bestimmter Browser die Eigenschaft nicht unterstützt oder weil sie nicht zutrifft. Zum Beispiel, weil [RTP](/de/docs/Glossary/RTP) einige dieser Werte bei der Aushandlung einer WebRTC-Verbindung nicht bereitstellt, wird eine Spur, die mit einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) verknüpft ist, bestimmte Werte wie [`facingMode`](/de/docs/Web/API/MediaTrackConstraints/facingMode) oder [`groupId`](/de/docs/Web/API/MediaTrackConstraints/groupId) nicht enthalten.

### Instanzeigenschaften aller Medientracks

- [`deviceId`](/de/docs/Web/API/MediaTrackConstraints/deviceId)
  - : Ein [`ConstrainDOMString`](#constraindomstring) Objekt, das eine Geräte-ID oder ein Array von Geräte-IDs angibt, die akzeptabel und/oder erforderlich sind.
- [`groupId`](/de/docs/Web/API/MediaTrackConstraints/groupId)
  - : Ein [`ConstrainDOMString`](#constraindomstring) Objekt, das eine Gruppen-ID oder ein Array von Gruppen-IDs angibt, die akzeptabel und/oder erforderlich sind.

### Instanzeigenschaften von Audiotracks

- [`autoGainControl`](/de/docs/Web/API/MediaTrackConstraints/autoGainControl)
  - : Ein [`ConstrainBoolean`](#constrainboolean) Objekt, das angibt, ob automatische Verstärkungsregelung bevorzugt und/oder erforderlich ist.
- [`channelCount`](/de/docs/Web/API/MediaTrackConstraints/channelCount)
  - : Ein [`ConstrainULong`](#constrainulong), das die Kanalanzahl oder einen Bereich von Kanalanzahlen angibt, die akzeptabel und/oder erforderlich sind.
- [`echoCancellation`](/de/docs/Web/API/MediaTrackConstraints/echoCancellation)
  - : Ein [`ConstrainBoolean`](#constrainboolean) Objekt, das angibt, ob Echo-Unterdrückung bevorzugt und/oder erforderlich ist.
- [`latency`](/de/docs/Web/API/MediaTrackConstraints/latency)
  - : Ein [`ConstrainDouble`](#constraindouble), das die Latenz oder einen Bereich von Latenzen angibt, die akzeptabel und/oder erforderlich sind.
- [`noiseSuppression`](/de/docs/Web/API/MediaTrackConstraints/noiseSuppression)
  - : Ein [`ConstrainBoolean`](#constrainboolean), das angibt, ob Rauschunterdrückung bevorzugt und/oder erforderlich ist.
- [`sampleRate`](/de/docs/Web/API/MediaTrackConstraints/sampleRate)
  - : Ein [`ConstrainULong`](#constrainulong), das die Abtastrate oder einen Bereich von Abtastraten angibt, die akzeptabel und/oder erforderlich sind.
- [`sampleSize`](/de/docs/Web/API/MediaTrackConstraints/sampleSize)
  - : Ein [`ConstrainULong`](#constrainulong), das die Abtastgröße oder einen Bereich von Abtastgrößen angibt, die akzeptabel und/oder erforderlich sind.
- [`volume`](/de/docs/Web/API/MediaTrackConstraints/volume) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Ein [`ConstrainDouble`](#constraindouble), das die Lautstärke oder einen Bereich von Lautstärken angibt, die akzeptabel und/oder erforderlich sind.

### Instanzeigenschaften von Bildtracks

- whiteBalanceMode
  - : Ein {{jsxref("String")}}, das einen der Werte `"none"`, `"manual"`, `"single-shot"`, oder `"continuous"` angibt.
- exposureMode
  - : Ein {{jsxref("String")}}, das einen der Werte `"none"`, `"manual"`, `"single-shot"`, oder `"continuous"` angibt.
- focusMode
  - : Ein {{jsxref("String")}}, das einen der Werte `"none"`, `"manual"`, `"single-shot"`, oder `"continuous"` angibt.
- pointsOfInterest
  - : Die Pixelkoordinaten auf dem Sensor von einem oder mehreren Interessenspunkten. Dies ist entweder ein Objekt in der Form { x:_Wert_, y:_Wert_ } oder ein Array solcher Objekte, wobei _Wert_ ein Gleitkommawert mit doppelter Genauigkeit ist.
- exposureCompensation
  - : Ein [`ConstrainDouble`](#constraindouble) (ein Gleitkommawert mit doppelter Genauigkeit), der die Blendenanpassung um bis zu ±3 angibt.
- colorTemperature
  - : Ein [`ConstrainDouble`](#constraindouble) (ein Gleitkommawert mit doppelter Genauigkeit), der eine gewünschte Farbtemperatur in Grad Kelvin angibt.
- iso
  - : Ein [`ConstrainDouble`](#constraindouble) (ein Gleitkommawert mit doppelter Genauigkeit), der eine gewünschte ISO-Einstellung angibt.
- brightness
  - : Ein [`ConstrainDouble`](#constraindouble) (ein Gleitkommawert mit doppelter Genauigkeit), der eine gewünschte Helligkeitseinstellung angibt.
- contrast
  - : Ein [`ConstrainDouble`](#constraindouble) (ein Gleitkommawert mit doppelter Genauigkeit), der den Grad des Unterschieds zwischen hell und dunkel angibt.
- saturation
  - : Ein [`ConstrainDouble`](#constraindouble) (ein Gleitkommawert mit doppelter Genauigkeit), der den Grad der Farbintensität angibt.
- sharpness
  - : Ein [`ConstrainDouble`](#constraindouble) (ein Gleitkommawert mit doppelter Genauigkeit), der die Intensität der Kanten angibt.
- focusDistance
  - : Ein [`ConstrainDouble`](#constraindouble) (ein Gleitkommawert mit doppelter Genauigkeit), der die Entfernung zu einem fokussierten Objekt angibt.
- zoom
  - : Ein [`ConstrainDouble`](#constraindouble) (ein Gleitkommawert mit doppelter Genauigkeit), der die gewünschte Brennweite angibt.
- torch
  - : Ein boolescher Wert, der angibt, ob das Fülllicht kontinuierlich verbunden ist, was bedeutet, dass es so lange eingeschaltet bleibt, wie die Spur aktiv ist.

### Instanzeigenschaften von Videotracks

- [`aspectRatio`](/de/docs/Web/API/MediaTrackConstraints/aspectRatio)
  - : Ein [`ConstrainDouble`](#constraindouble), das das Video-[Seitenverhältnis](/de/docs/Glossary/aspect_ratio) oder einen Bereich von Seitenverhältnissen angibt, die akzeptabel und/oder erforderlich sind.
- [`facingMode`](/de/docs/Web/API/MediaTrackConstraints/facingMode)
  - : Ein [`ConstrainDOMString`](#constraindomstring) Objekt, das eine Richtung oder ein Array von Richtungen angibt, die akzeptabel und/oder erforderlich sind.
- [`frameRate`](/de/docs/Web/API/MediaTrackConstraints/frameRate)
  - : Ein [`ConstrainDouble`](#constraindouble), das die Bildfrequenz oder einen Bereich von Bildfrequenzen angibt, die akzeptabel und/oder erforderlich sind.
- [`height`](/de/docs/Web/API/MediaTrackConstraints/height)
  - : Ein [`ConstrainULong`](#constrainulong), das die Videohöhe oder einen Bereich von Höhen angibt, die akzeptabel und/oder erforderlich sind.
- [`width`](/de/docs/Web/API/MediaTrackConstraints/width)
  - : Ein [`ConstrainULong`](#constrainulong), das die Videobreite oder einen Bereich von Breiten angibt, die akzeptabel und/oder erforderlich sind.
- resizeMode
  - : Ein [`ConstrainDOMString`](#constraindomstring) Objekt, das einen Modus oder ein Array von Modi angibt, die der Benutzeragent verwenden kann, um die Auflösung eines Videotracks abzuleiten. Erlaubte Werte sind `none` und `crop-and-scale`. `none` bedeutet, dass der Benutzeragent die von der Kamera, deren Treiber oder dem Betriebssystem bereitgestellte Auflösung verwendet. `crop-and-scale` bedeutet, dass der Benutzeragent Zuschneiden und Herunterskalieren auf die Kameraausgabe anwenden kann, um andere Einschränkungen, die die Auflösung betreffen, zu erfüllen.

### Instanzeigenschaften von Bildschirm-Teilungstracks

Diese Einschränkungen gelten für die `video` Eigenschaft des Objekts, das an [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) übergeben wird, um einen Stream zur Bildschirmfreigabe zu erhalten.

- [`displaySurface`](/de/docs/Web/API/MediaTrackConstraints/displaySurface)

  - : Ein [`ConstrainDOMString`](#constraindomstring), das die Typen der Anzeigeflächen angibt, die vom Benutzer ausgewählt werden können. Dies kann eine einzelne der folgenden Zeichenketten sein oder eine Liste dieser Zeichenketten, um mehrere Quellflächen zu erlauben:

    - `browser`
      - : Der Stream enthält die Inhalte eines einzelnen vom Benutzer ausgewählten Browser-Tabs.
    - `monitor`
      - : Der Videotrack des Streams enthält die gesamten Inhalte eines oder mehrerer Bildschirme des Benutzers.
    - `window`
      - : Der Stream enthält ein einzelnes vom Benutzer zur Freigabe ausgewähltes Fenster.

- [`logicalSurface`](/de/docs/Web/API/MediaTrackConstraints/logicalSurface)

  - : Ein [`ConstrainBoolean`](#constrainboolean) Wert, der einen einzigen booleschen Wert oder eine Gruppe von ihnen enthalten kann, der angibt, ob es zulässig ist, dass der Benutzer Quellflächen wählt, die nicht direkt mit Anzeigebereichen korrespondieren. Diese können Puffer für Fenster sein, die es ermöglichen, den Inhalt von Fenstern zu erfassen, die von anderen Fenstern überlagert werden, oder Puffer, die größere Dokumente enthalten, die durchgescrollt werden müssen, um die gesamten Inhalte in ihren Fenstern zu sehen.

- [`suppressLocalAudioPlayback`](/de/docs/Web/API/MediaTrackConstraints/suppressLocalAudioPlayback) {{Experimental_Inline}}
  - : Ein [`ConstrainBoolean`](#constrainboolean) Wert, der die angeforderten oder obligatorischen Einschränkungen beschreibt, die auf den Wert der einschränkbaren Eigenschaft [`suppressLocalAudioPlayback`](/de/docs/Web/API/MediaTrackSettings/suppressLocalAudioPlayback) angewendet werden. Diese Eigenschaft steuert, ob das Audio, das in einem Tab abgespielt wird, weiterhin über die lokalen Lautsprecher eines Benutzers wiedergegeben wird, wenn der Tab erfasst wird.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Media Capture und Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- [Screen Capture API](/de/docs/Web/API/Screen_Capture_API)
- [Verwendung der Screen Capture API](/de/docs/Web/API/Screen_Capture_API/Using_Screen_Capture)
- [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia)
- [`MediaStreamTrack.getConstraints()`](/de/docs/Web/API/MediaStreamTrack/getConstraints)
- [`MediaStreamTrack.applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints)
- [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints)
- [`MediaTrackSupportedConstraints`](/de/docs/Web/API/MediaTrackSupportedConstraints)
- [`MediaStreamTrack.getSettings()`](/de/docs/Web/API/MediaStreamTrack/getSettings)
