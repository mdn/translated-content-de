---
title: MediaTrackConstraints
slug: Web/API/MediaTrackConstraints
l10n:
  sourceCommit: c9e9f9f4faf2e8a5985e5834d9424557341f33c9
---

{{APIRef("Media Capture and Streams")}}

Das **`MediaTrackConstraints`** Wörterbuch wird verwendet, um eine Reihe von Fähigkeiten zu beschreiben und den Wert oder die Werte, die jede davon annehmen kann. Ein Constraints-Wörterbuch wird in [`applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) übergeben, damit ein Skript eine Reihe von genauen (erforderlichen) Werten oder Bereichen und/oder bevorzugten Werten oder Bereichen für den Track festlegen kann. Der zuletzt angeforderte Satz benutzerdefinierter Einschränkungen kann durch Aufrufen von [`getConstraints()`](/de/docs/Web/API/MediaStreamTrack/getConstraints) abgerufen werden.

## Einschränkungen

Die folgenden Typen werden verwendet, um eine Einschränkung für eine Eigenschaft anzugeben. Sie ermöglichen es Ihnen, einen oder mehrere `exact` Werte anzugeben, von denen einer der Parameterwert sein muss, oder eine Reihe von `ideal` Werten, die nach Möglichkeit verwendet werden sollten. Sie können auch einen einzelnen Wert (oder ein Array von Werten) angeben, den der Benutzeragent nach Möglichkeit erfüllen wird, sobald alle strengeren Einschränkungen angewendet wurden.

Um mehr darüber zu erfahren, wie Einschränkungen funktionieren, siehe [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints).

> **Note:** `min` und `exact` Werte sind in Einschränkungen, die in [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) Aufrufen verwendet werden, nicht erlaubt — sie erzeugen einen `TypeError` — aber sie sind in Einschränkungen erlaubt, die in [`MediaStreamTrack.applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) Aufrufen verwendet werden.

### ConstrainBoolean

Der `ConstrainBoolean` Einschränkungs-Typ wird verwendet, um eine Einschränkung für eine Eigenschaft zu spezifizieren, deren Wert ein Boolean-Wert ist. Sein Wert kann entweder auf einen Boolean (`true` oder `false`) gesetzt werden oder auf ein Objekt, das die folgenden Eigenschaften enthält:

- `exact`
  - : Ein Boolean, der der Wert der Eigenschaft sein muss. Wenn die Eigenschaft nicht auf diesen Wert gesetzt werden kann, schlägt die Übereinstimmung fehl.
- `ideal`
  - : Ein Boolean, der einen idealen Wert für die Eigenschaft spezifiziert. Wenn möglich, wird dieser Wert verwendet, aber wenn es nicht möglich ist, verwendet der Benutzeragent die nächstmögliche Übereinstimmung.

### ConstrainDouble

Der `ConstrainDouble` Einschränkungs-Typ wird verwendet, um eine Einschränkung für eine Eigenschaft zu spezifizieren, deren Wert eine doppelt-precise Fließkommazahl ist. Sein Wert kann entweder auf eine Zahl gesetzt werden oder auf ein Objekt, das die folgenden Eigenschaften enthält:

- `max`
  - : Eine Dezimalzahl, die den größten zulässigen Wert der beschriebenen Eigenschaft angibt. Wenn der Wert nicht gleich oder kleiner als dieser Wert bleiben kann, schlägt die Übereinstimmung fehl.
- `min`
  - : Eine Dezimalzahl, die den kleinsten zulässigen Wert der beschriebenen Eigenschaft angibt. Wenn der Wert nicht gleich oder größer als dieser Wert bleiben kann, schlägt die Übereinstimmung fehl.
- `exact`
  - : Eine Dezimalzahl, die einen bestimmten, erforderlichen Wert anzeigt, den die Eigenschaft haben muss, um als akzeptabel zu gelten.
- `ideal`
  - : Eine Dezimalzahl, die einen idealen Wert für die Eigenschaft spezifiziert. Wenn möglich, wird dieser Wert verwendet, aber wenn es nicht möglich ist, verwendet der Benutzeragent die nächstmögliche Übereinstimmung.

### ConstrainDOMString

Der `ConstrainDOMString` Einschränkungs-Typ wird verwendet, um eine Einschränkung für eine Eigenschaft festzulegen, deren Wert eine Zeichenkette ist. Sein Wert kann entweder auf eine Zeichenkette, ein Array von Zeichenketten, oder ein Objekt gesetzt werden, das die folgenden Eigenschaften enthält:

- `exact`
  - : Eine Zeichenkette oder ein Array von Zeichenketten, von denen eine der Wert der Eigenschaft sein muss. Wenn die Eigenschaft nicht auf einen der aufgelisteten Werte gesetzt werden kann, schlägt die Übereinstimmung fehl.
- `ideal`
  - : Eine Zeichenkette oder ein Array von Zeichenketten, die ideale Werte für die Eigenschaft angeben. Wenn möglich, wird einer der aufgelisteten Werte verwendet, aber wenn es nicht möglich ist, verwendet der Benutzeragent die nächstmögliche Übereinstimmung.

### ConstrainULong

Der `ConstrainULong` Einschränkungs-Typ wird verwendet, um eine Einschränkung für eine Eigenschaft festzulegen, deren Wert eine ganze Zahl ist. Sein Wert kann entweder auf eine Zahl gesetzt werden oder auf ein Objekt, das die folgenden Eigenschaften enthält:

- `max`
  - : Eine ganze Zahl, die den größten zulässigen Wert der beschriebenen Eigenschaft angibt. Wenn der Wert nicht gleich oder kleiner als dieser Wert bleiben kann, schlägt die Übereinstimmung fehl.
- `min`
  - : Eine ganze Zahl, die den kleinsten zulässigen Wert der beschriebenen Eigenschaft angibt. Wenn der Wert nicht gleich oder größer als dieser Wert bleiben kann, schlägt die Übereinstimmung fehl.
- `exact`
  - : Eine ganze Zahl, die einen bestimmten, erforderlichen Wert anzeigt, den die Eigenschaft haben muss, um als akzeptabel zu gelten.
- `ideal`
  - : Eine ganze Zahl, die einen idealen Wert für die Eigenschaft angibt. Wenn möglich, wird dieser Wert verwendet, aber wenn es nicht möglich ist, verwendet der Benutzeragent die nächstmögliche Übereinstimmung.

## Instanzeigenschaften

Eine Kombination, aber nicht unbedingt alle, der folgenden Eigenschaften werden im Objekt vorhanden sein. Dies kann daran liegen, dass ein bestimmter Browser die Eigenschaft nicht unterstützt oder weil sie nicht zutrifft. Zum Beispiel, weil {{Glossary("RTP", "RTP")}} einige dieser Werte während der Verhandlung einer WebRTC-Verbindung nicht bereitstellt, wird ein Track, der mit einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) verbunden ist, bestimmte Werte nicht enthalten, wie [`facingMode`](/de/docs/Web/API/MediaTrackConstraints/facingMode) oder [`groupId`](/de/docs/Web/API/MediaTrackConstraints/groupId).

### Instanzeigenschaften aller Medienspuren

- [`deviceId`](/de/docs/Web/API/MediaTrackConstraints/deviceId)
  - : Ein [`ConstrainDOMString`](#constraindomstring) Objekt, das eine Geräte-ID oder ein Array von Geräte-IDs angibt, die akzeptabel und/oder erforderlich sind.
- [`groupId`](/de/docs/Web/API/MediaTrackConstraints/groupId)
  - : Ein [`ConstrainDOMString`](#constraindomstring) Objekt, das eine Gruppen-ID oder ein Array von Gruppen-IDs angibt, die akzeptabel und/oder erforderlich sind.

### Instanzeigenschaften von Audiospuren

- [`autoGainControl`](/de/docs/Web/API/MediaTrackConstraints/autoGainControl)
  - : Ein [`ConstrainBoolean`](#constrainboolean) Objekt, das angibt, ob die automatische Gain-Kontrolle bevorzugt und/oder erforderlich ist.
- [`channelCount`](/de/docs/Web/API/MediaTrackConstraints/channelCount)
  - : Ein [`ConstrainULong`](#constrainulong), der die Kanalanzahl oder den Bereich der Kanalanzahlen angibt, die akzeptabel und/oder erforderlich sind.
- [`echoCancellation`](/de/docs/Web/API/MediaTrackConstraints/echoCancellation)
  - : Ein [`ConstrainBoolean`](#constrainboolean) Objekt, das angibt, ob die Echounterdrückung bevorzugt und/oder erforderlich ist.
- [`latency`](/de/docs/Web/API/MediaTrackConstraints/latency)
  - : Ein [`ConstrainDouble`](#constraindouble), der die Latenz oder den Bereich der Latenzen angibt, die akzeptabel und/oder erforderlich sind.
- [`noiseSuppression`](/de/docs/Web/API/MediaTrackConstraints/noiseSuppression)
  - : Ein [`ConstrainBoolean`](#constrainboolean), der festlegt, ob die Geräuschunterdrückung bevorzugt und/oder erforderlich ist.
- [`sampleRate`](/de/docs/Web/API/MediaTrackConstraints/sampleRate)
  - : Ein [`ConstrainULong`](#constrainulong), der die Abtastrate oder den Bereich der Abtastraten angibt, die akzeptabel und/oder erforderlich sind.
- [`sampleSize`](/de/docs/Web/API/MediaTrackConstraints/sampleSize)
  - : Ein [`ConstrainULong`](#constrainulong), der die Abtastgröße oder den Bereich der Abtastgrößen angibt, die akzeptabel und/oder erforderlich sind.
- [`volume`](/de/docs/Web/API/MediaTrackConstraints/volume) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Ein [`ConstrainDouble`](#constraindouble), der das Volumen oder den Bereich der Volumina angibt, die akzeptabel und/oder erforderlich sind.

### Instanzeigenschaften von Bildspuren

- whiteBalanceMode
  - : Ein {{jsxref("String")}}, der eines von `"none"`, `"manual"`, `"single-shot"`, oder `"continuous"` spezifiziert.
- exposureMode
  - : Ein {{jsxref("String")}}, der eines von `"none"`, `"manual"`, `"single-shot"`, oder `"continuous"` spezifiziert.
- focusMode
  - : Ein {{jsxref("String")}}, der eines von `"none"`, `"manual"`, `"single-shot"`, oder `"continuous"` spezifiziert.
- pointsOfInterest
  - : Die Pixelkoordinaten auf dem Sensor eines oder mehrerer interessanter Punkte. Dies ist entweder ein Objekt in der Form { x:_value_, y:_value_ } oder ein Array solcher Objekte, wobei _value_ ein doppelt-precise Integer ist.
- exposureCompensation
  - : Ein [`ConstrainDouble`](#constraindouble) (ein doppelt-precise Integer), der die Anpassung der Blendenstufe um bis zu ±3 angibt.
- colorTemperature
  - : Ein [`ConstrainDouble`](#constraindouble) (ein doppelt-precise Integer), der eine gewünschte Farbtemperatur in Grad Kelvin angibt.
- iso
  - : Ein [`ConstrainDouble`](#constraindouble) (ein doppelt-precise Integer), der eine gewünschte ISO-Einstellung angibt.
- brightness
  - : Ein [`ConstrainDouble`](#constraindouble) (ein doppelt-precise Integer), der eine gewünschte Helligkeitseinstellung angibt.
- contrast
  - : Ein [`ConstrainDouble`](#constraindouble) (ein doppelt-precise Integer), der den Grad des Unterschieds zwischen hell und dunkel angibt.
- saturation
  - : Ein [`ConstrainDouble`](#constraindouble) (ein doppelt-precise Integer), der den Grad der Farbintensität angibt.
- sharpness
  - : Ein [`ConstrainDouble`](#constraindouble) (ein doppelt-precise Integer), der die Intensität von Kanten angibt.
- focusDistance
  - : Ein [`ConstrainDouble`](#constraindouble) (ein doppelt-precise Integer), der den Abstand zu einem fokussierten Objekt angibt.
- zoom
  - : Ein [`ConstrainDouble`](#constraindouble) (ein doppelt-precise Integer), der die gewünschte Brennweite angibt.
- torch
  - : Ein boolescher Wert, der definiert, ob das Fülllicht kontinuierlich verbunden ist, was bedeutet, dass es eingeschaltet bleibt, solange die Spur aktiv ist.

### Instanzeigenschaften von Videospuren

- [`aspectRatio`](/de/docs/Web/API/MediaTrackConstraints/aspectRatio)
  - : Ein [`ConstrainDouble`](#constraindouble), der das Video {{Glossary("aspect_ratio", "Seitenverhältnis")}} oder den Bereich von Seitenverhältnissen angibt, die akzeptabel und/oder erforderlich sind.
- [`facingMode`](/de/docs/Web/API/MediaTrackConstraints/facingMode)
  - : Ein [`ConstrainDOMString`](#constraindomstring) Objekt, das eine Richtung oder ein Array von Richtungen angibt, die akzeptabel und/oder erforderlich sind.
- [`frameRate`](/de/docs/Web/API/MediaTrackConstraints/frameRate)
  - : Ein [`ConstrainDouble`](#constraindouble), das die Bildrate oder den Bereich von Bildraten angibt, die akzeptabel und/oder erforderlich sind.
- [`height`](/de/docs/Web/API/MediaTrackConstraints/height)
  - : Ein [`ConstrainULong`](#constrainulong), der die Videohöhe oder den Bereich von Höhen angibt, die akzeptabel und/oder erforderlich sind.
- [`width`](/de/docs/Web/API/MediaTrackConstraints/width)
  - : Ein [`ConstrainULong`](#constrainulong), der die Videobreite oder den Bereich von Breiten angibt, die akzeptabel und/oder erforderlich sind.
- resizeMode
  - : Ein [`ConstrainDOMString`](#constraindomstring) Objekt, das einen Modus oder ein Array von Modi angibt, die der UA verwenden kann, um die Auflösung eines Video-Tracks abzuleiten. Erlaubte Werte sind `none` und `crop-and-scale`. `none` bedeutet, dass der Benutzeragent die Auflösung verwendet, die von der Kamera, ihrem Treiber oder dem Betriebssystem geliefert wird. `crop-and-scale` bedeutet, dass der Benutzeragent Zuschneiden und Verkleinern am Kameraausgang verwenden kann, um andere Einschränkungen zu erfüllen, die die Auflösung betreffen.

### Instanzeigenschaften von freigegebenen Bildschirmspuren

Diese Einschränkungen gelten für die video Eigenschaft des Objekts, das in [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) übergeben wird, um einen Stream für die Bildschirmfreigabe zu erhalten.

- [`displaySurface`](/de/docs/Web/API/MediaTrackConstraints/displaySurface)

  - : Ein [`ConstrainDOMString`](#constraindomstring), der die Arten von Bildschirmoberflächen angibt, die vom Benutzer ausgewählt werden dürfen. Dies kann eine der folgenden Zeichenketten sein oder eine Liste von ihnen, um mehrere Quelloberflächen zu ermöglichen:

    - `browser`
      - : Der Stream enthält die Inhalte eines einzelnen Browser-Tabs, der vom Benutzer ausgewählt wurde.
    - `monitor`
      - : Die Videospur des Streams enthält die vollständigen Inhalte von einem oder mehreren Bildschirmen des Benutzers.
    - `window`
      - : Der Stream enthält ein einzelnes Fenster, das vom Benutzer zur Freigabe ausgewählt wurde.

- [`logicalSurface`](/de/docs/Web/API/MediaTrackConstraints/logicalSurface)

  - : Ein [`ConstrainBoolean`](#constrainboolean) Wert, der einen einzelnen booleschen Wert oder eine Menge davon enthalten kann, um anzugeben, ob es erlaubt ist, dass der Benutzer Quelloberflächen auswählt, die nicht direkt den Anzeigebereichen entsprechen. Diese können Hintergrundpuffer für Fenster umfassen, um die Erfassung von Fensterinhalten zu ermöglichen, die von anderen davor befindlichen Fenstern verdeckt werden, oder Puffer, die größere Dokumente enthalten, die zum vollständigen Anzeigen in ihren Fenstern durchgescrollt werden müssen.

- [`suppressLocalAudioPlayback`](/de/docs/Web/API/MediaTrackConstraints/suppressLocalAudioPlayback) {{Experimental_Inline}}
  - : Ein [`ConstrainBoolean`](#constrainboolean) Wert, der die angeforderten oder zwingend erforderlichen Einschränkungen beschreibt, die auf den Wert der [`suppressLocalAudioPlayback`](/de/docs/Web/API/MediaTrackSettings/suppressLocalAudioPlayback) einschränkbaren Eigenschaft angewendet werden. Diese Eigenschaft steuert, ob der Ton, der in einem Tab abgespielt wird, weiterhin über die lokalen Lautsprecher eines Benutzers wiedergegeben wird, wenn der Tab erfasst wird.

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
