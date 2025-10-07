---
title: MediaTrackConstraints
slug: Web/API/MediaTrackConstraints
l10n:
  sourceCommit: 4b73e0c0f68f1fe5462d3475cf46a98b31b25ef4
---

{{APIRef("Media Capture and Streams")}}

Das **`MediaTrackConstraints`**-Wörterbuch wird verwendet, um eine Reihe von Medienfähigkeiten zu beschreiben und die Werte, die jeder annehmen kann.

Ein Einschränkungs-Wörterbuch wird an die [`applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints)-Methode des [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Interfaces übergeben, um einem Skript zu ermöglichen, einen Satz exakter (erforderlicher) Werte oder Bereiche und/oder bevorzugter Werte oder Wertebereiche für die Spur festzulegen.

Der zuletzt angeforderte Satz benutzerdefinierter Einschränkungen kann durch Aufrufen von [`getConstraints()`](/de/docs/Web/API/MediaStreamTrack/getConstraints) abgerufen werden.

Objekte dieser Art können auch übergeben werden an:

- Die [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia)-Methode, um Einschränkungen für einen von Hardware wie einer Kamera oder einem Mikrofon angeforderten Medienstrom anzugeben.

- Die [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia)-Methode, um Einschränkungen für einen von einer Bildschirm- oder Fensterauswahl angeforderten Medienstrom anzugeben.

## Einschränkungen

Die folgenden Typen werden verwendet, um eine Einschränkung für eine Eigenschaft anzugeben.
Sie erlauben Ihnen, einen oder mehrere `exact` Werte anzugeben, aus denen einer der Parameterwert sein muss, oder eine Reihe von `ideal` Werten, die nach Möglichkeit verwendet werden sollten.
Sie können auch einen einzelnen Wert (oder ein Array von Werten) angeben, den der Benutzeragent nach Möglichkeit nach der Anwendung aller strengeren Einschränkungen erfüllen wird.

Um mehr darüber zu erfahren, wie Einschränkungen funktionieren, siehe [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints).

> [!NOTE]
> `min` und `exact` Werte sind in Einschränkungen, die in [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia)-Aufrufen verwendet werden, nicht erlaubt — sie erzeugen einen `TypeError` — aber sie sind in Einschränkungen, die in [`MediaStreamTrack.applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints)-Aufrufen verwendet werden, erlaubt.

### ConstrainBoolean

Der `ConstrainBoolean`-Einschränkungs-Typ wird verwendet, um eine Einschränkung für eine Eigenschaft anzugeben, deren Wert ein Boolescher Wert ist.
Sein Wert kann entweder auf einen Booleschen Wert (`true` oder `false`) oder ein Objekt mit den folgenden Eigenschaften gesetzt werden:

- `exact`
  - : Ein boolescher Wert, der der Wert der Eigenschaft sein muss.
    Wenn die Eigenschaft nicht auf diesen Wert gesetzt werden kann, schlägt das Matching fehl.
- `ideal`
  - : Ein boolescher Wert, der einen idealen Wert für die Eigenschaft angibt.
    Wenn möglich, wird dieser Wert verwendet, aber wenn es nicht möglich ist, verwendet der Benutzeragent den nächstmöglichen Wert.

### ConstrainBooleanOrDOMString

Der `ConstrainBooleanOrDOMString`-Einschränkungs-Typ wird verwendet, um eine Einschränkung für eine Eigenschaft anzugeben, deren Wert ein Boolescher oder Zeichenfolgenwert ist. Er kann Werte annehmen, wie sie in den Abschnitten [`ConstrainBoolean`](#constrainboolean) und [`ConstrainDOMString`](#constraindomstring) angegeben sind.

### ConstrainDouble

Der `ConstrainDouble`-Einschränkungs-Typ wird verwendet, um eine Einschränkung für eine Eigenschaft anzugeben, deren Wert eine doppeltpräzise Gleitkommazahl ist.
Sein Wert kann entweder auf eine Zahl oder ein Objekt mit den folgenden Eigenschaften gesetzt werden:

- `max`
  - : Eine Dezimalzahl, die den größten zulässigen Wert der beschriebenen Eigenschaft angibt.
    Wenn der Wert nicht gleich oder kleiner als dieser Wert bleiben kann, schlägt das Matching fehl.
- `min`
  - : Eine Dezimalzahl, die den kleinsten zulässigen Wert der beschriebenen Eigenschaft angibt.
    Wenn der Wert nicht gleich oder größer als dieser Wert bleiben kann, schlägt das Matching fehl.
- `exact`
  - : Eine Dezimalzahl, die einen spezifischen, erforderlichen Wert angibt, den die Eigenschaft haben muss, um als akzeptabel zu gelten.
- `ideal`
  - : Eine Dezimalzahl, die einen idealen Wert für die Eigenschaft angibt.
    Wenn möglich, wird dieser Wert verwendet, aber wenn es nicht möglich ist, verwendet der Benutzeragent den nächstmöglichen Wert.

### ConstrainDOMString

Der `ConstrainDOMString`-Einschränkungs-Typ wird verwendet, um eine Einschränkung für eine Eigenschaft anzugeben, deren Wert eine Zeichenfolge ist.
Sein Wert kann entweder auf eine Zeichenfolge, ein Array von Zeichenfolgen oder ein Objekt mit den folgenden Eigenschaften gesetzt werden:

- `exact`
  - : Eine Zeichenfolge oder ein Array von Zeichenfolgen, von denen eine der Wert der Eigenschaft sein muss.
    Wenn die Eigenschaft nicht auf einen der aufgeführten Werte gesetzt werden kann, schlägt das Matching fehl.
- `ideal`
  - : Eine Zeichenfolge oder ein Array von Zeichenfolgen, die ideale Werte für die Eigenschaft angeben.
    Wenn möglich, wird einer der aufgeführten Werte verwendet, aber wenn es nicht möglich ist, verwendet der Benutzeragent den nächstmöglichen Wert.

### ConstrainULong

Der `ConstrainULong`-Einschränkungs-Typ wird verwendet, um eine Einschränkung für eine Eigenschaft anzugeben, deren Wert eine ganze Zahl ist.
Sein Wert kann entweder auf eine Zahl oder ein Objekt mit den folgenden Eigenschaften gesetzt werden:

- `max`
  - : Eine ganze Zahl, die den größten zulässigen Wert der beschriebenen Eigenschaft angibt.
    Wenn der Wert nicht gleich oder kleiner als dieser Wert bleiben kann, schlägt das Matching fehl.
- `min`
  - : Eine ganze Zahl, die den kleinsten zulässigen Wert der beschriebenen Eigenschaft angibt.
    Wenn der Wert nicht gleich oder größer als dieser Wert bleiben kann, schlägt das Matching fehl.
- `exact`
  - : Eine ganze Zahl, die einen spezifischen, erforderlichen Wert angibt, den die Eigenschaft haben muss, um als akzeptabel zu gelten.
- `ideal`
  - : Eine ganze Zahl, die einen idealen Wert für die Eigenschaft angibt.
    Wenn möglich, wird dieser Wert verwendet, aber wenn es nicht möglich ist, verwendet der Benutzeragent den nächstmöglichen Wert.

## Instanzeigenschaften

Einige Kombinationen—aber nicht unbedingt alle—der folgenden Eigenschaften werden auf dem Objekt existieren.
Dies kann daran liegen, dass ein bestimmter Browser die Eigenschaft nicht unterstützt oder weil sie nicht zutrifft.
Zum Beispiel, weil {{Glossary("RTP", "RTP")}} einige dieser Werte während der Aushandlung einer WebRTC-Verbindung nicht bereitstellt, wird eine Spur, die mit einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) verbunden ist, bestimmte Werte wie [`facingMode`](/de/docs/Web/API/MediaTrackConstraints/facingMode) oder [`groupId`](/de/docs/Web/API/MediaTrackConstraints/groupId) nicht enthalten.

### Instanzeigenschaften aller Medienspuren

- [`deviceId`](/de/docs/Web/API/MediaTrackConstraints/deviceId)
  - : Ein [`ConstrainDOMString`](#constraindomstring)-Objekt, das eine Geräte-ID oder ein Array von Geräte-IDs angibt, die akzeptabel und/oder erforderlich sind.
- [`groupId`](/de/docs/Web/API/MediaTrackConstraints/groupId)
  - : Ein [`ConstrainDOMString`](#constraindomstring)-Objekt, das eine Gruppen-ID oder ein Array von Gruppen-IDs angibt, die akzeptabel und/oder erforderlich sind.

### Instanzeigenschaften von Audiospuren

- [`autoGainControl`](/de/docs/Web/API/MediaTrackConstraints/autoGainControl)
  - : Ein [`ConstrainBoolean`](#constrainboolean)-Objekt, das angibt, ob automatische Pegelregelung bevorzugt und/oder erforderlich ist.
- [`channelCount`](/de/docs/Web/API/MediaTrackConstraints/channelCount)
  - : Ein [`ConstrainULong`](#constrainulong), das die Kanalanzahl oder den Bereich von Kanalanzahlen angibt, die akzeptabel und/oder erforderlich sind.
- [`echoCancellation`](/de/docs/Web/API/MediaTrackConstraints/echoCancellation)
  - : Ein [`ConstrainBooleanOrDOMString`](#constrainbooleanordomstring)-Objekt, das angibt, ob Echounterdrückung bevorzugt und/oder erforderlich ist und welcher Typ, falls unterstützt.
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
  - : Ein {{jsxref("String")}}, das einen der Werte `"none"`, `"manual"`, `"single-shot"` oder `"continuous"` angibt.
- `exposureMode`
  - : Ein {{jsxref("String")}}, das einen der Werte `"none"`, `"manual"`, `"single-shot"` oder `"continuous"` angibt.
- `focusMode`
  - : Ein {{jsxref("String")}}, das einen der Werte `"none"`, `"manual"`, `"single-shot"` oder `"continuous"` angibt.
- `pointsOfInterest`
  - : Die Pixelkoordinaten auf dem Sensor von einem oder mehreren Interessenpunkten.
    Dies ist entweder ein Objekt in der Form { x:_wert_, y:_wert_ } oder ein Array solcher Objekte, wobei _wert_ ein doppeltpräziser Ganzzahlwert ist.
- `exposureCompensation`
  - : Ein [`ConstrainDouble`](#constraindouble) (ein doppeltpräziser Ganzzahlwert), der eine Blendenkorrektur um bis zu ±3 angibt.
- `colorTemperature`
  - : Ein [`ConstrainDouble`](#constraindouble) (ein doppeltpräziser Ganzzahlwert), der eine gewünschte Farbtemperatur in Grad Kelvin angibt.
- `iso`
  - : Ein [`ConstrainDouble`](#constraindouble) (ein doppeltpräziser Ganzzahlwert), der eine gewünschte ISO-Einstellung angibt.
- `brightness`
  - : Ein [`ConstrainDouble`](#constraindouble) (ein doppeltpräziser Ganzzahlwert), der eine gewünschte Helligkeitseinstellung angibt.
- `contrast`
  - : Ein [`ConstrainDouble`](#constraindouble) (ein doppeltpräziser Ganzzahlwert), der den Grad des Unterschieds zwischen Hell und Dunkel angibt.
- `saturation`
  - : Ein [`ConstrainDouble`](#constraindouble) (ein doppeltpräziser Ganzzahlwert), der den Grad der Farbintensität angibt.
- `sharpness`
  - : Ein [`ConstrainDouble`](#constraindouble) (ein doppeltpräziser Ganzzahlwert), der die Intensität der Kanten angibt.
- `focusDistance`
  - : Ein [`ConstrainDouble`](#constraindouble) (ein doppeltpräziser Ganzzahlwert), der den Abstand zu einem fokussierten Objekt angibt.
- `zoom`
  - : Ein [`ConstrainDouble`](#constraindouble) (ein doppeltpräziser Ganzzahlwert), der die gewünschte Brennweite angibt.
- `torch`
  - : Ein boolescher Wert, der angibt, ob das Fülllicht kontinuierlich eingeschaltet ist, d.h. es bleibt eingeschaltet, solange die Spur aktiv ist.

### Instanzeigenschaften von Videospuren

- [`aspectRatio`](/de/docs/Web/API/MediaTrackConstraints/aspectRatio)
  - : Ein [`ConstrainDouble`](#constraindouble), der das Video-{{Glossary("aspect_ratio", "Seitenverhältnis")}} oder den Bereich von Seitenverhältnissen angibt, die akzeptabel und/oder erforderlich sind.
- [`facingMode`](/de/docs/Web/API/MediaTrackConstraints/facingMode)
  - : Ein [`ConstrainDOMString`](#constraindomstring)-Objekt, das einen Face-Wert oder ein Array von Face-Werten angibt, die akzeptabel und/oder erforderlich sind.
- [`frameRate`](/de/docs/Web/API/MediaTrackConstraints/frameRate)
  - : Ein [`ConstrainDouble`](#constraindouble), der die Bildwiederholrate oder den Bereich von Bildwiederholraten angibt, die akzeptabel und/oder erforderlich sind.
- [`height`](/de/docs/Web/API/MediaTrackConstraints/height)
  - : Ein [`ConstrainULong`](#constrainulong), der die Videohöhe oder den Bereich von Höhen angibt, die akzeptabel und/oder erforderlich sind.
- [`width`](/de/docs/Web/API/MediaTrackConstraints/width)
  - : Ein [`ConstrainULong`](#constrainulong), der die Videobreite oder den Bereich von Breiten angibt, die akzeptabel und/oder erforderlich sind.
- `resizeMode`
  - : Ein [`ConstrainDOMString`](#constraindomstring)-Objekt, das einen Modus oder ein Array von Modi angibt, die die UA verwenden kann, um die Auflösung und die Bildwiederholrate einer Videospur abzuleiten.
    Erlaubte Werte sind:
    - `crop-and-scale`
      - : Der Benutzeragent kann das Zuschneiden und das Herunterskalieren von Auflösung oder Bildwiederholrate auf dem Rohmaterial der Hardware/OS verwenden, um andere Einschränkungen zu erfüllen.
        Diese Einschränkung ermöglicht Entwicklern, ein herunterskaliertes Video zu erhalten, auch wenn das durch ihre Einschränkungen angegebene Format nicht nativ von der Hardware unterstützt wird.
    - `none`
      - : Der Benutzeragent verwendet die Auflösung, die von der zugrunde liegenden Hardware, wie einer Kamera oder ihrem Treiber, oder dem Betriebssystem bereitgestellt wird.

    Wenn `resizeMode` nicht angegeben ist, wählt der Browser eine Auflösung basierend auf einer [Fitness-Distanz](https://w3c.github.io/mediacapture-main/#dfn-fitness-distance), die die festgelegten Einschränkungen und _beide_ der erlaubten Werte berücksichtigt.

### Instanzeigenschaften von geteilten Bildschirmspuren

Diese Einschränkungen gelten für die `video`-Eigenschaft des Objekts, das in [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) übergeben wird, um einen Stream für das Teilen des Bildschirms zu erhalten.

- [`displaySurface`](/de/docs/Web/API/MediaTrackConstraints/displaySurface)
  - : Ein [`ConstrainDOMString`](#constraindomstring), der die Arten von Anzeigeflächen angibt, die der Benutzer auswählen kann.
    Dies kann eine einzelne der folgenden Zeichenfolgen sein oder eine Liste von ihnen, um mehrere Quellflächen zuzulassen:
    - `browser`
      - : Der Stream enthält den Inhalt eines einzelnen, vom Benutzer ausgewählten Browsertabs.
    - `monitor`
      - : Das Video des Streams enthält den gesamten Inhalt von einem oder mehreren Bildschirmen des Benutzers.
    - `window`
      - : Der Stream enthält ein einziges, vom Benutzer zur Freigabe ausgewähltes Fenster.

- [`logicalSurface`](/de/docs/Web/API/MediaTrackConstraints/logicalSurface)
  - : Ein [`ConstrainBoolean`](#constrainboolean)-Wert, der einen einzelnen booleschen Wert oder einen Satz von ihnen enthalten kann und angibt, ob der Benutzer die Auswahl von Quellflächen erlaubt werden soll, die nicht direkt Anzeigebereichen entsprechen.
    Dazu können Puffer für Fenster gehören, um die Erfassung von Fensterinhalten zu ermöglichen, die von anderen Fenstern überlagert werden, oder Puffer, die größere Dokumente enthalten, die durchgescrollt werden müssen, um die gesamten Inhalte in ihren Fenstern anzuzeigen.

- [`suppressLocalAudioPlayback`](/de/docs/Web/API/MediaTrackConstraints/suppressLocalAudioPlayback) {{Experimental_Inline}}
  - : Ein [`ConstrainBoolean`](#constrainboolean)-Wert, der die angeforderten oder obligatorischen Einschränkungen beschreibt, die auf den Wert der eigenschaft [`suppressLocalAudioPlayback`](/de/docs/Web/API/MediaTrackSettings/suppressLocalAudioPlayback) gelegt werden.
    Diese Eigenschaft steuert, ob das Audio, das in einem Tab wiedergegeben wird, weiterhin über die lokalen Lautsprecher des Benutzers wiedergegeben wird, wenn der Tab erfasst wird.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Medienaufnahme und Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- [Bildschirmaufnahme API](/de/docs/Web/API/Screen_Capture_API)
- [Verwendung der Bildschirmaufnahme-API](/de/docs/Web/API/Screen_Capture_API/Using_Screen_Capture)
- [`MediaStreamTrack.getConstraints()`](/de/docs/Web/API/MediaStreamTrack/getConstraints)
- [`MediaStreamTrack.applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints)
- [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia)
- [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia)
- [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints)
- [`MediaTrackSupportedConstraints`](/de/docs/Web/API/MediaTrackSupportedConstraints)
- [`MediaStreamTrack.getSettings()`](/de/docs/Web/API/MediaStreamTrack/getSettings)
