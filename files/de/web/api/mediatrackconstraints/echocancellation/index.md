---
title: "MediaTrackConstraints: echoCancellation-Eigenschaft"
short-title: echoCancellation
slug: Web/API/MediaTrackConstraints/echoCancellation
l10n:
  sourceCommit: b1bb1b27224e37b2045c6a16b5f9cfa817d0df89
---

{{APIRef("Media Capture and Streams")}}

Die Eigenschaft **`echoCancellation`** des Dictionaries [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints) ist ein [`ConstrainBooleanOrDOMString`](/de/docs/Web/API/MediaTrackConstraints#constrainbooleanordomstring), der die gewünschten oder zwingenden Einschränkungen für den Wert der einschränkbaren Eigenschaft [`echoCancellation`](/de/docs/Web/API/MediaStreamTrack/getSettings#echocancellation) beschreibt.

Bei Bedarf können Sie prüfen, ob diese Einschränkung unterstützt wird, indem Sie den Wert von [`echoCancellation`](/de/docs/Web/API/MediaDevices/getSupportedConstraints#echocancellation) prüfen, den ein Aufruf von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgibt. In der Regel ist das jedoch nicht nötig, da Browser ihnen unbekannte Einschränkungen ignorieren.

## Wert

Ein boolescher Wert, ein String oder ein [`ConstrainBooleanOrDOMString`](/de/docs/Web/API/MediaTrackConstraints#constrainbooleanordomstring)-Objekt.

Wenn der Browser bestimmte Arten der Echounterdrückung unterstützt, kann der Wert auf einen der folgenden Werte gesetzt werden:

- `"all"` {{experimental_inline}}
  - : Sämtliche vom System erzeugten Audiosignale, die vom Mikrofon des Benutzers erfasst werden, werden entfernt. Das ist beispielsweise nützlich, wenn Sie vermeiden möchten, dass vertrauliche Audiosignale wie die Ausgabe eines Screenreaders oder Systembenachrichtigungen erfasst werden.
- `"remote-only"` {{experimental_inline}}
  - : Nur vom System erzeugte Audiosignale aus entfernten Quellen, die vom Mikrofon des Benutzers erfasst werden, werden entfernt. Diese Quellen werden durch [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)s repräsentiert, die von einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) stammen. Das ist nützlich, wenn Sie Echos bei der Kommunikation mit entfernten Gesprächspartnern entfernen, lokale Audiosignale aber weiterhin übertragen möchten – etwa bei einer Musikstunde, in der die Lehrkraft hören möchte, wie ihre Schüler zu einer Audiospur mitspielen, und sich zugleich klar mit ihnen verständigen möchte.
- `true`
  - : Der Browser entscheidet, welche Audiosignale aus den vom Mikrofon aufgenommenen Signalen entfernt werden. Er muss versuchen, mindestens so viele Audiosignale zu unterdrücken wie bei `remote-only`, und sollte versuchen, so viele wie bei `all` zu unterdrücken.
- `false`
  - : Es werden keine Audiosignale entfernt; es findet keine Echounterdrückung statt.

Wenn der Browser keine bestimmten Arten der Echounterdrückung unterstützt, kann der Wert `true` oder `false` sein.

Wird einer der oben genannten Werte festgelegt, versucht der User Agent, Medien mit entsprechend aktivierter oder deaktivierter Echounterdrückung abzurufen, sofern dies möglich ist. Ist dies nicht möglich, schlägt die Anfrage jedoch nicht fehl.

Wird der Wert als Objekt mit einem `exact`-Feld angegeben, legt der Wert dieses Felds eine zwingend erforderliche Einstellung für die Echounterdrückung fest. Kann diese Anforderung nicht erfüllt werden, führt die Anfrage zu einem Fehler.

## Beispiele

Siehe das Beispiel [Constraint-Tester](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser).

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
