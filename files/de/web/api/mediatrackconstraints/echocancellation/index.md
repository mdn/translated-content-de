---
title: "MediaTrackConstraints: echoCancellation Eigenschaft"
short-title: echoCancellation
slug: Web/API/MediaTrackConstraints/echoCancellation
l10n:
  sourceCommit: 144fc1770b3eaa69bb5be691f505565b6dd9a68e
---

{{APIRef("Media Capture and Streams")}}

Das [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Wörterbuch enthält die **`echoCancellation`**-Eigenschaft als [`ConstrainBooleanOrDOMString`](/de/docs/Web/API/MediaTrackConstraints#constrainbooleanordomstring), die die angeforderten oder obligatorischen Einschränkungen beschreibt, die auf den Wert der [`echoCancellation`](/de/docs/Web/API/MediaTrackSettings/echoCancellation) einschränkbaren Eigenschaft angewendet werden.

Falls benötigt, können Sie feststellen, ob diese Einschränkung unterstützt wird, indem Sie den Wert von [`MediaTrackSupportedConstraints.echoCancellation`](/de/docs/Web/API/MediaTrackSupportedConstraints/echoCancellation) überprüfen, der durch einen Aufruf von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgegeben wird. In der Regel ist dies jedoch nicht notwendig, da Browser alle ihnen unbekannten Einschränkungen ignorieren.

## Wert

Ein Boolean, ein String oder ein [`ConstrainBooleanOrDOMString`](/de/docs/Web/API/MediaTrackConstraints#constrainbooleanordomstring)-Objekt.

Wenn der Browser bestimmte Typen der Echounterdrückung unterstützt, kann der Wert wie folgt gesetzt werden:

- `"all"`
  - : Alle vom Benutzer generierten Audiosignale, die mit dem Mikrofon des Benutzers aufgenommen werden, werden entfernt. Dies ist nützlich in Situationen, in denen Sie vermeiden möchten, privatheitsbezogene Audios wie Screenreader-Ausgaben und Systembenachrichtigungen aufzunehmen.
- `"remote-only"`
  - : Nur vom Benutzer generierte Audiosignale, die mit dem Mikrofon des Benutzers aus entfernten Quellen aufgenommen werden (wie durch [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)s, die von einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) stammen, repräsentiert), werden entfernt. Dies ist nützlich, wenn Sie Echo von der Kommunikation mit entfernten Partnern entfernen möchten, aber dennoch lokales Audio teilen möchten, wie z.B. in einer Musikstunde, in der der Lehrer möchte, dass seine Schüler zu einer Audiospur mitspielen, aber dennoch klar mit ihnen kommunizieren kann.
- `true`
  - : Der Browser entscheidet, welches Audio aus den durch das Mikrofon aufgenommenen Signalen entfernt wird. Er muss versuchen, mindestens so viel wie `remote-only` zu unterdrücken und sollte versuchen, so viel wie `all` zu unterdrücken.
- `false`
  - : Kein Audio wird entfernt; es findet keine Echounterdrückung statt.

Wenn der Browser keine spezifischen Typen der Echounterdrückung unterstützt, kann der Wert `true` oder `false` sein.

Wird der Wert als eines der oben genannten Werte gesetzt, versucht der User-Agent, Medien mit aktivierter oder deaktivierter Echounterdrückung gemäß der Spezifikation zu erhalten, scheitert jedoch nicht, wenn dies nicht möglich ist.

Wenn der Wert als Objekt mit einem `exact`-Feld angegeben wird, gibt der Wert dieses Feldes eine erforderliche Einstellung für die Echounterdrückungsfunktion an; wenn diese nicht erfüllt werden kann, führt die Anfrage zu einem Fehler.

## Beispiele

Siehe das Beispiel des [Constraint Exerciser](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [API für Medienaufnahme und -streams](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)
- [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints)
- [`MediaTrackSupportedConstraints`](/de/docs/Web/API/MediaTrackSupportedConstraints)
- [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)
