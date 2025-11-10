---
title: "MediaTrackConstraints: echoCancellation-Eigenschaft"
short-title: echoCancellation
slug: Web/API/MediaTrackConstraints/echoCancellation
l10n:
  sourceCommit: bb55d1b729e6d8fd2eea3f1f9b402f6788a6d1d9
---

{{APIRef("Media Capture and Streams")}}

Das [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Wörterbuch enthält die **`echoCancellation`**-Eigenschaft, ein [`ConstrainBooleanOrDOMString`](/de/docs/Web/API/MediaTrackConstraints#constrainbooleanordomstring), das die angeforderten oder obligatorischen Einschränkungen beschreibt, die auf den Wert der [`echoCancellation`](/de/docs/Web/API/MediaTrackSettings/echoCancellation)-beschränkbaren Eigenschaft gesetzt werden.

Falls erforderlich, können Sie feststellen, ob diese Einschränkung unterstützt wird, indem Sie den Wert von [`MediaTrackSupportedConstraints.echoCancellation`](/de/docs/Web/API/MediaTrackSupportedConstraints/echoCancellation) überprüfen, der von einem Aufruf von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgegeben wird. Normalerweise ist dies jedoch nicht erforderlich, da Browser unbekannte Einschränkungen ignorieren.

## Wert

Ein Boolean, ein String oder ein [`ConstrainBooleanOrDOMString`](/de/docs/Web/API/MediaTrackConstraints#constrainbooleanordomstring)-Objekt.

Wenn der Browser spezifische Echo-Kompensationstypen unterstützt, kann der Wert auf einen der folgenden Werte gesetzt werden:

- `"all"` {{experimental_inline}}
  - : Alle vom System des Nutzers generierten Audioinhalte, die vom Mikrofon des Nutzers erfasst werden, werden entfernt. Dies ist nützlich in Situationen, in denen Sie vermeiden möchten, datenschutzsensible Audioinhalte wie Bildschirmleser-Ausgaben und Systembenachrichtigungen zu erfassen.
- `"remote-only"` {{experimental_inline}}
  - : Nur vom System des Nutzers generierte Audioinhalte, die vom Mikrofon des Nutzers aus entfernten Quellen (wie durch [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)s aus einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)) erfasst werden, werden entfernt. Dies ist nützlich, wenn Sie Echo aus der Kommunikation mit entfernten Teilnehmern entfernen, aber dennoch lokale Audioinhalte teilen möchten, z. B. im Fall eines Musikunterrichts, bei dem der Lehrer die Schüler zu einem Audio-Track mitspielen lassen möchte, aber dennoch klar mit ihnen kommunizieren will.
- `true`
  - : Der Browser entscheidet, welche Audioinhalte von den Signalen, die vom Mikrofon aufgezeichnet werden, entfernt werden. Er muss versuchen, mindestens so viel wie `remote-only` zu entfernen und sollte versuchen, so viel wie `all` zu entfernen.
- `false`
  - : Es wird kein Audio entfernt; es findet keine Echo-Kompensation statt.

Wenn der Browser keine spezifischen Echo-Kompensationstypen unterstützt, kann der Wert `true` oder `false` sein.

Wenn einer der oben genannten Werte gesetzt ist, versucht der Benutzeragent, Medien mit aktivierter oder deaktivierter Echo-Kompensation soweit möglich gemäß den Spezifikationen zu beziehen, schlägt jedoch nicht fehl, wenn dies nicht möglich ist.

Wenn der Wert als Objekt mit einem `exact`-Feld angegeben ist, gibt der Wert dieses Feldes eine obligatorische Einstellung für die Echo-Kompensation an; kann diese nicht erfüllt werden, führt dies zu einem Fehler.

## Beispiele

Siehe das Beispiel [Constraint Exerciser](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)
- [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints)
- [`MediaTrackSupportedConstraints`](/de/docs/Web/API/MediaTrackSupportedConstraints)
- [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)
