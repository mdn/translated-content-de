---
title: "MediaTrackConstraints: echoCancellation-Eigenschaft"
short-title: echoCancellation
slug: Web/API/MediaTrackConstraints/echoCancellation
l10n:
  sourceCommit: 4b73e0c0f68f1fe5462d3475cf46a98b31b25ef4
---

{{APIRef("Media Capture and Streams")}}

Das [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Wörterbuchs **`echoCancellation`**-Eigenschaft ist eine [`ConstrainBooleanOrDOMString`](/de/docs/Web/API/MediaTrackConstraints#constrainbooleanofdomstring), die die gewünschten oder obligatorischen Einschränkungen beschreibt, die auf den Wert der [`echoCancellation`](/de/docs/Web/API/MediaTrackSettings/echoCancellation)-einschränkbaren Eigenschaft gelegt werden.

Falls nötig, können Sie ermitteln, ob diese Einschränkung unterstützt wird, indem Sie den Wert von [`MediaTrackSupportedConstraints.echoCancellation`](/de/docs/Web/API/MediaTrackSupportedConstraints/echoCancellation) überprüfen, wie er von einem Aufruf von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgegeben wird. Dies ist jedoch normalerweise nicht erforderlich, da Browser alle Einschränkungen ignorieren, die ihnen unbekannt sind.

## Wert

Ein boolean, ein String oder ein [`ConstrainBooleanOrDOMString`](/de/docs/Web/API/MediaTrackConstraints#constrainbooleanofdomstring)-Objekt.

Wenn der Browser bestimmte Echounterdrückungstypen unterstützt, kann der Wert als einer der folgenden gesetzt werden:

- `"all"`
  - : Alle vom Benutzersystem generierten Audiosignale, die vom Mikrofon des Benutzers erfasst werden, werden entfernt. Dies ist nützlich beispielsweise in Situationen, in denen Sie verhindern möchten, dass sensible Audiosignale wie Screenreader-Ausgaben und Systembenachrichtigungen erfasst werden.
- `"remote-only"`
  - : Nur vom Benutzersystem generierte Audiosignale, die vom Mikrofon des Benutzers von entfernten Quellen erfasst werden (wie durch [`MediaStreamtrack`](/de/docs/Web/API/MediaStreamTrack)s von einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) dargestellt), werden entfernt. Dies ist nützlich, wenn Sie Echos aus der Kommunikation mit entfernten Partnern entfernen möchten, aber dennoch lokales Audio teilen möchten, zum Beispiel in einer Musikstunde, in der der Lehrer seine Schüler zu einer Audiowiedergabe begleiten lassen möchte, aber dennoch klar mit ihnen kommunizieren möchte.
- `true`
  - : Der Browser entscheidet, welches Audio aus den vom Mikrofon aufgezeichneten Signalen entfernt wird. Er muss versuchen, mindestens so viel wie `remote-only` zu unterdrücken und sollte versuchen, so viel wie `all` zu unterdrücken.
- `false`
  - : Kein Audio wird entfernt; keine Echounterdrückung findet statt.

Wenn der Browser keine bestimmten Echounterdrückungstypen unterstützt, kann der Wert `true` oder `false` sein.

Wenn der Wert als einer der oben genannten Werte gesetzt wird, wird der User-Agent versuchen, Medien mit aktivierter oder deaktivierter Echounterdrückung gemäß der Spezifikation zu erhalten, falls möglich, wird jedoch nicht fehlschlagen, wenn dies nicht durchgeführt werden kann.

Wenn der Wert als ein Objekt mit einem `exact`-Feld angegeben wird, gibt der Wert dieses Feldes eine erforderliche Einstellung für die Echounterdrückungsfunktion an; kann dies nicht erfüllt werden, führt die Anfrage zu einem Fehler.

## Beispiele

Siehe das [Einschränkungsübung](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser)-Beispiel.

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
