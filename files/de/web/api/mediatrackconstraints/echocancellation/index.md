---
title: "MediaTrackConstraints: echoCancellation-Eigenschaft"
short-title: echoCancellation
slug: Web/API/MediaTrackConstraints/echoCancellation
l10n:
  sourceCommit: a5b8c78d6a38dda4194bec70cb82e5bf646178e7
---

{{APIRef("Media Capture and Streams")}}

Die Eigenschaft **`echoCancellation`** des [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Dictionaries ist ein [`ConstrainBooleanOrDOMString`](/de/docs/Web/API/MediaTrackConstraints#constrainbooleanordomstring), der die gewünschten oder zwingenden Einschränkungen für den Wert der einschränkbaren Eigenschaft [`echoCancellation`](/de/docs/Web/API/MediaTrackSettings/echoCancellation) beschreibt.

Bei Bedarf können Sie feststellen, ob diese Einschränkung unterstützt wird, indem Sie den Wert von [`echoCancellation`](/de/docs/Web/API/MediaDevices/getSupportedConstraints#echocancellation) prüfen, den ein Aufruf von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgibt. In der Regel ist dies jedoch nicht nötig, da Browser ihnen unbekannte Einschränkungen ignorieren.

## Wert

Ein boolescher Wert, ein String oder ein [`ConstrainBooleanOrDOMString`](/de/docs/Web/API/MediaTrackConstraints#constrainbooleanordomstring)-Objekt.

Wenn der Browser bestimmte Arten der Echounterdrückung unterstützt, kann der Wert auf eine der folgenden Optionen gesetzt werden:

- `"all"` {{experimental_inline}}
  - : Sämtliche vom System des Benutzers erzeugten Audiosignale, die vom Mikrofon des Benutzers erfasst werden, werden entfernt. Dies ist beispielsweise nützlich, wenn Sie vermeiden möchten, dass datenschutzsensible Audiosignale wie die Ausgabe eines Screenreaders oder Systembenachrichtigungen erfasst werden.
- `"remote-only"` {{experimental_inline}}
  - : Nur die vom System des Benutzers erzeugten Audiosignale aus entfernten Quellen, die vom Mikrofon des Benutzers erfasst werden, werden entfernt. Diese Quellen werden durch [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)s repräsentiert, die aus einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) stammen. Dies ist nützlich, wenn Sie Echos bei der Kommunikation mit entfernten Teilnehmern unterdrücken, aber lokale Audiosignale weiterhin übertragen möchten – etwa bei einer Musikstunde, in der die Lehrkraft hören möchte, wie ihre Schüler zu einer Audiospur mitspielen, und sich trotzdem klar mit ihnen verständigen können soll.
- `true`
  - : Der Browser entscheidet, welche Audiosignale aus den vom Mikrofon aufgenommenen Signalen entfernt werden. Er muss versuchen, mindestens so viele Audiosignale wie bei `remote-only` zu unterdrücken, und sollte versuchen, so viele wie bei `all` zu unterdrücken.
- `false`
  - : Es werden keine Audiosignale entfernt; es findet keine Echounterdrückung statt.

Wenn der Browser keine bestimmten Arten der Echounterdrückung unterstützt, kann der Wert `true` oder `false` sein.

Wird einer der oben genannten Werte festgelegt, versucht der User Agent, Medien wie angegeben mit aktivierter oder deaktivierter Echounterdrückung abzurufen, sofern dies möglich ist. Schlägt dies fehl, führt das jedoch nicht zu einem Fehler.

Wird der Wert als Objekt mit einem `exact`-Feld angegeben, legt der Wert dieses Felds eine zwingende Einstellung für die Echounterdrückung fest. Kann diese Anforderung nicht erfüllt werden, führt die Anfrage zu einem Fehler.

## Beispiele

Siehe das Beispiel [Constraint exerciser](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)
- [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints)
- [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)
