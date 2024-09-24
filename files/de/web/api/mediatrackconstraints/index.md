---
title: MediaTrackConstraints
slug: Web/API/MediaTrackConstraints
l10n:
  sourceCommit: c9e9f9f4faf2e8a5985e5834d9424557341f33c9
---

{{APIRef("Media Capture and Streams")}}

Das **`MediaTrackConstraints`**-Wörterbuch wird verwendet, um eine Reihe von Fähigkeiten zu beschreiben und den Wert oder die Werte, die jede annehmen kann. Ein Einschränkungswörterbuch wird an {{domxref("MediaStreamTrack.applyConstraints", "applyConstraints()")}} übergeben, um einem Skript das Festlegen einer Reihe exakter (erforderlicher) Werte oder Bereiche und/oder bevorzugter Werte oder Bereiche von Werten für die Spur zu ermöglichen. Das zuletzt angeforderte Satz benutzerdefinierter Einschränkungen kann durch Aufrufen von {{domxref("MediaStreamTrack.getConstraints", "getConstraints()")}} abgerufen werden.

## Einschränkungen

Die folgenden Typen werden verwendet, um eine Einschränkung für eine Eigenschaft anzugeben. Sie können einen oder mehrere `exact`-Werte angeben, von denen einer der Wert des Parameters sein muss, oder eine Reihe von `ideal`-Werten, die nach Möglichkeit verwendet werden sollten. Sie können auch einen einzelnen Wert (oder ein Array von Werten) angeben, den der Benutzeragent nach Anwendung aller strengeren Einschränkungen nach besten Kräften erfüllen wird.

Um mehr darüber zu erfahren, wie Einschränkungen funktionieren, siehe [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints).

> **Hinweis:** `min`- und `exact`-Werte sind in Einschränkungen, die in Aufrufen von {{domxref("MediaDevices.getDisplayMedia()")}} verwendet werden, nicht erlaubt - sie erzeugen einen `TypeError` -, aber sie sind in Einschränkungen erlaubt, die in Aufrufen von {{domxref("MediaStreamTrack.applyConstraints()")}} verwendet werden.

### ConstrainBoolean

Der `ConstrainBoolean`-Einschränkungstyp wird verwendet, um eine Einschränkung für eine Eigenschaft anzugeben, deren Wert ein Boolescher Wert ist. Sein Wert kann entweder auf einen Booleschen Wert (`true` oder `false`) oder ein Objekt mit den folgenden Eigenschaften gesetzt werden:

- `exact`
  - : Ein boolescher Wert, der den Wert der Eigenschaft haben muss. Wenn die Eigenschaft nicht auf diesen Wert gesetzt werden kann, schlägt die Übereinstimmung fehl.
- `ideal`
  - : Ein boolescher Wert, der einen idealen Wert für die Eigenschaft angibt. Wenn möglich, wird dieser Wert verwendet, aber wenn es nicht möglich ist, wird der Benutzeragent die am nächsten kommende Übereinstimmung verwenden.

### ConstrainDouble

Der `ConstrainDouble`-Einschränkungstyp wird verwendet, um eine Einschränkung für eine Eigenschaft anzugeben, deren Wert eine doppelt-präzise Gleitkommazahl ist. Sein Wert kann entweder auf eine Zahl oder ein Objekt mit den folgenden Eigenschaften gesetzt werden:

- `max`
  - : Eine Dezimalzahl, die den größten zulässigen Wert der beschriebenen Eigenschaft angibt. Wenn der Wert nicht gleich oder kleiner als dieser Wert bleiben kann, schlägt die Übereinstimmung fehl.
- `min`
  - : Eine Dezimalzahl, die den kleinsten zulässigen Wert der beschriebenen Eigenschaft angibt. Wenn der Wert nicht gleich oder größer als dieser Wert bleiben kann, schlägt die Übereinstimmung fehl.
- `exact`
  - : Eine Dezimalzahl, die einen spezifischen, erforderlichen Wert angibt, den die Eigenschaft haben muss, um als akzeptabel zu gelten.
- `ideal`
  - : Eine Dezimalzahl, die einen idealen Wert für die Eigenschaft angibt. Wenn möglich, wird dieser Wert verwendet, aber wenn es nicht möglich ist, wird der Benutzeragent die am nächsten kommende Übereinstimmung verwenden.

### ConstrainDOMString

Der `ConstrainDOMString`-Einschränkungstyp wird verwendet, um eine Einschränkung für eine Eigenschaft anzugeben, deren Wert ein String ist. Sein Wert kann entweder auf einen String, ein Array von Strings oder ein Objekt mit den folgenden Eigenschaften gesetzt werden:

- `exact`
  - : Ein String oder ein Array von Strings, von denen einer der Wert der Eigenschaft sein muss. Wenn die Eigenschaft nicht auf einen der aufgeführten Werte gesetzt werden kann, schlägt die Übereinstimmung fehl.
- `ideal`
  - : Ein String oder ein Array von Strings, der ideale Werte für die Eigenschaft angibt. Wenn möglich, wird einer der aufgelisteten Werte verwendet, aber wenn es nicht möglich ist, wird der Benutzeragent die am nächsten kommende Übereinstimmung verwenden.

### ConstrainULong

Der `ConstrainULong`-Einschränkungstyp wird verwendet, um eine Einschränkung für eine Eigenschaft anzugeben, deren Wert eine Ganzzahl ist. Sein Wert kann entweder auf eine Zahl oder ein Objekt mit den folgenden Eigenschaften gesetzt werden:

- `max`
  - : Eine Ganzzahl, die den größten zulässigen Wert der beschriebenen Eigenschaft angibt. Wenn der Wert nicht gleich oder kleiner als dieser Wert bleiben kann, schlägt die Übereinstimmung fehl.
- `min`
  - : Eine Ganzzahl, die den kleinsten zulässigen Wert der beschriebenen Eigenschaft angibt. Wenn der Wert nicht gleich oder größer als dieser Wert bleiben kann, schlägt die Übereinstimmung fehl.
- `exact`
  - : Eine Ganzzahl, die einen spezifischen, erforderlichen Wert angibt, den die Eigenschaft haben muss, um als akzeptabel zu gelten.
- `ideal`
  - : Eine Ganzzahl, die einen idealen Wert für die Eigenschaft angibt. Wenn möglich, wird dieser Wert verwendet, aber wenn es nicht möglich ist, wird der Benutzeragent die am nächsten kommende Übereinstimmung verwenden.

## Instanzeigenschaften

Eine Kombination, aber nicht notwendigerweise alle, der folgenden Eigenschaften wird auf dem Objekt vorhanden sein. Dies kann darauf zurückzuführen sein, dass ein gegebenes Browser die Eigenschaft nicht unterstützt oder dass sie nicht zutrifft. Zum Beispiel, weil {{Glossary("RTP")}} einige dieser Werte nicht während der Aushandlung einer WebRTC-Verbindung bereitstellt, wird eine Spur, die mit einer {{domxref("RTCPeerConnection")}} verknüpft ist, bestimmte Werte wie {{domxref("MediaTrackConstraints.facingMode", "facingMode")}} oder {{domxref("MediaTrackConstraints.groupId", "groupId")}} nicht enthalten.

### Instanzeigenschaften aller Medienspuren

- {{domxref("MediaTrackConstraints.deviceId", "deviceId")}}
  - : Ein [`ConstrainDOMString`](#constraindomstring)-Objekt, das eine Geräte-ID oder ein Array von Geräte-IDs angibt, die akzeptabel und/oder erforderlich sind.
- {{domxref("MediaTrackConstraints.groupId", "groupId")}}
  - : Ein [`ConstrainDOMString`](#constraindomstring)-Objekt, das eine Gruppen-ID oder ein Array von Gruppen-IDs angibt, die akzeptabel und/oder erforderlich sind.

### Instanzeigenschaften von Audiospuren

- {{domxref("MediaTrackConstraints.autoGainControl", "autoGainControl")}}
  - : Ein [`ConstrainBoolean`](#constrainboolean)-Objekt, das angibt, ob automatische Verstärkungsregelung bevorzugt und/oder erforderlich ist.
- {{domxref("MediaTrackConstraints.channelCount", "channelCount")}}
  - : Ein [`ConstrainULong`](#constrainulong), das die Kanalanzahl oder Bereiche von Kanalanzahlen angibt, die akzeptabel und/oder erforderlich sind.
- {{domxref("MediaTrackConstraints.echoCancellation", "echoCancellation")}}
  - : Ein [`ConstrainBoolean`](#constrainboolean)-Objekt, das angibt, ob Echounterdrückung bevorzugt und/oder erforderlich ist.
- {{domxref("MediaTrackConstraints.latency", "latency")}}
  - : Ein [`ConstrainDouble`](#constraindouble), das die Latenz oder Bereiche von Latenzen angibt, die akzeptabel und/oder erforderlich sind.
- {{domxref("MediaTrackConstraints.noiseSuppression", "noiseSuppression")}}
  - : Ein [`ConstrainBoolean`](#constrainboolean), das angibt, ob Rauschunterdrückung bevorzugt und/oder erforderlich ist.
- {{domxref("MediaTrackConstraints.sampleRate", "sampleRate")}}
  - : Ein [`ConstrainULong`](#constrainulong), das die Abtastrate oder Bereiche von Abtastraten angibt, die akzeptabel und/oder erforderlich sind.
- {{domxref("MediaTrackConstraints.sampleSize", "sampleSize")}}
  - : Ein [`ConstrainULong`](#constrainulong), das die Abtastgröße oder Bereiche von Abtastgrößen angibt, die akzeptabel und/oder erforderlich sind.
- {{domxref("MediaTrackConstraints.volume", "volume")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Ein [`ConstrainDouble`](#constraindouble), das die Lautstärke oder Bereiche von Lautstärken angibt, die akzeptabel und/oder erforderlich sind.

### Instanzeigenschaften von Bildspuren

- whiteBalanceMode
  - : Ein {{jsxref("String")}}, der einen der Werte `"none"`, `"manual"`, `"single-shot"` oder `"continuous"` angibt.
- exposureMode
  - : Ein {{jsxref("String")}}, der einen der Werte `"none"`, `"manual"`, `"single-shot"` oder `"continuous"` angibt.
- focusMode
  - : Ein {{jsxref("String")}}, der einen der Werte `"none"`, `"manual"`, `"single-shot"` oder `"continuous"` angibt.
- pointsOfInterest
  - : Die Pixelkoordinaten des Sensors eines oder mehrerer interessanter Punkte. Dies ist entweder ein Objekt in der Form { x:_Wert_, y:_Wert_ } oder ein Array solcher Objekte, wobei _Wert_ ein Präzisions-Double-Integer ist.
- exposureCompensation
  - : Ein [`ConstrainDouble`](#constraindouble) (ein Präzisions-Double-Integer), der die Blendenkorrektur um bis zu ±3 angibt.
- colorTemperature
  - : Ein [`ConstrainDouble`](#constraindouble) (ein Präzisions-Double-Integer), der eine gewünschte Farbtemperatur in Kelvin angibt.
- iso
  - : Ein [`ConstrainDouble`](#constraindouble) (ein Präzisions-Double-Integer), der eine gewünschte ISO-Einstellung angibt.
- brightness
  - : Ein [`ConstrainDouble`](#constraindouble) (ein Präzisions-Double-Integer), der eine gewünschte Helligkeitseinstellung angibt.
- contrast
  - : Ein [`ConstrainDouble`](#constraindouble) (ein Präzisions-Double-Integer), der den Grad des Unterschieds zwischen hell und dunkel angibt.
- saturation
  - : Ein [`ConstrainDouble`](#constraindouble) (ein Präzisions-Double-Integer), der den Grad der Farbintensität angibt.
- sharpness
  - : Ein [`ConstrainDouble`](#constraindouble) (ein Präzisions-Double-Integer), der die Intensität der Kanten angibt.
- focusDistance
  - : Ein [`ConstrainDouble`](#constraindouble) (ein Präzisions-Double-Integer), der die Distanz zu einem fokussierten Objekt angibt.
- zoom
  - : Ein [`ConstrainDouble`](#constraindouble) (ein Präzisions-Double-Integer), der die gewünschte Brennweite angibt.
- torch
  - : Ein boolescher Wert, der definiert, ob das Fülllicht kontinuierlich angeschlossen ist, was bedeutet, dass es so lange eingeschaltet bleibt, wie die Spur aktiv ist.

### Instanzeigenschaften von Videospuren

- {{domxref("MediaTrackConstraints.aspectRatio", "aspectRatio")}}
  - : Ein [`ConstrainDouble`](#constraindouble), das das Video-{{glossary("Seitenverhältnis")}} oder Bereiche von Seitenverhältnissen angibt, die akzeptabel und/oder erforderlich sind.
- {{domxref("MediaTrackConstraints.facingMode", "facingMode")}}
  - : Ein [`ConstrainDOMString`](#constraindomstring)-Objekt, das eine Richtung oder ein Array von Richtungen angibt, die akzeptabel und/oder erforderlich sind.
- {{domxref("MediaTrackConstraints.frameRate", "frameRate")}}
  - : Ein [`ConstrainDouble`](#constraindouble), das die Bildrate oder Bereiche von Bildraten angibt, die akzeptabel und/oder erforderlich sind.
- {{domxref("MediaTrackConstraints.height", "height")}}
  - : Ein [`ConstrainULong`](#constrainulong), das die Videohöhe oder Bereiche von Höhen angibt, die akzeptabel und/oder erforderlich sind.
- {{domxref("MediaTrackConstraints.width", "width")}}
  - : Ein [`ConstrainULong`](#constrainulong), das die Videobreite oder Bereiche von Breiten angibt, die akzeptabel und/oder erforderlich sind.
- resizeMode
  - : Ein [`ConstrainDOMString`](#constraindomstring)-Objekt, das einen Modus oder ein Array von Modi angibt, die der Benutzeragent verwenden kann, um die Auflösung einer Videospur abzuleiten. Erlaubte Werte sind `none` und `crop-and-scale`. `none` bedeutet, dass der Benutzeragent die von der Kamera, deren Treiber oder das Betriebssystem bereitgestellte Auflösung verwendet. `crop-and-scale` bedeutet, dass der Benutzeragent das Zuschneiden und Herunterskalieren der Kameraausgabe verwenden kann, um andere Einschränkungen zu erfüllen, die die Auflösung betreffen.

### Instanzeigenschaften von geteilten Bildschirmen

Diese Einschränkungen gelten für die `video`-Eigenschaft des in {{domxref("MediaDevices.getDisplayMedia", "getDisplayMedia()")}} übergebenen Objekts, um einen Stream zum Teilen des Bildschirms zu erhalten.

- {{domxref("MediaTrackConstraints.displaySurface", "displaySurface")}}

  - : Ein [`ConstrainDOMString`](#constraindomstring), das die Arten von Anzeigeflächen angibt, die vom Benutzer ausgewählt werden dürfen. Dies kann eine der folgenden Zeichenfolgen oder eine Liste von ihnen sein, um mehrere Quellflächen zuzulassen:

    - `browser`
      - : Der Stream enthält die Inhalte eines einzelnen vom Benutzer ausgewählten Browser-Tabs.
    - `monitor`
      - : Der Video-Track des Streams enthält den gesamten Inhalt eines oder mehrerer Bildschirme des Benutzers.
    - `window`
      - : Der Stream enthält ein einzelnes vom Benutzer ausgewähltes Fenster zum Teilen.

- {{domxref("MediaTrackConstraints.logicalSurface", "logicalSurface")}}

  - : Ein [`ConstrainBoolean`](#constrainboolean)-Wert, der einen einzelnen booleschen Wert oder eine Menge davon enthalten kann und angibt, ob der Benutzer Quellflächen auswählen darf, die nicht direkt Anzeigebereichen entsprechen. Dazu können Backup-Puffer für Fenster gehören, um die Erfassung von Fensterinhalten zu ermöglichen, die von anderen Fenstern davor verdeckt sind, oder Puffer, die größere Dokumente enthalten, die durchgescrollt werden müssen, um den gesamten Inhalt in ihren Fenstern zu sehen.

- {{domxref("MediaTrackConstraints.suppressLocalAudioPlayback", "suppressLocalAudioPlayback")}} {{Experimental_Inline}}
  - : Ein [`ConstrainBoolean`](#constrainboolean)-Wert, der die angeforderten oder zwingenden Einschränkungen angibt, die auf den Wert der {{domxref("MediaTrackSettings.suppressLocalAudioPlayback","suppressLocalAudioPlayback")}}-einschränkbaren Eigenschaft gelegt werden. Diese Eigenschaft steuert, ob das Audio, das in einem Tab abgespielt wird, weiter aus den lokalen Lautsprechern eines Benutzers abgespielt wird, wenn der Tab erfasst wird.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- [Screen Capture API](/de/docs/Web/API/Screen_Capture_API)
- [Verwendung der Screen Capture API](/de/docs/Web/API/Screen_Capture_API/Using_Screen_Capture)
- {{domxref("MediaDevices.getUserMedia()")}}
- {{domxref("MediaStreamTrack.getConstraints()")}}
- {{domxref("MediaStreamTrack.applyConstraints()")}}
- {{domxref("MediaDevices.getSupportedConstraints()")}}
- {{domxref("MediaTrackSupportedConstraints")}}
- {{domxref("MediaStreamTrack.getSettings()")}}
