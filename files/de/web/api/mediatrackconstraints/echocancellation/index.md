---
title: "MediaTrackConstraints: echoCancellation-Eigenschaft"
short-title: echoCancellation
slug: Web/API/MediaTrackConstraints/echoCancellation
l10n:
  sourceCommit: 7615562a3689a3e23a2b6b623597f4391740a53e
---

{{APIRef("Media Capture and Streams")}}

Das [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Wörterbuch enthält die **`echoCancellation`**-Eigenschaft, die ein [`ConstrainBooleanOrDOMString`](/de/docs/Web/API/MediaTrackConstraints#constrainbooleanordomstring) beschreibt. Diese Eigenschaft legt die angeforderten oder zwingenden Einschränkungen für den Wert der [`echoCancellation`](/de/docs/Web/API/MediaTrackSettings/echoCancellation) einschränkbaren Eigenschaft fest.

Falls nötig, können Sie feststellen, ob diese Einschränkung unterstützt wird, indem Sie den Wert von [`MediaTrackSupportedConstraints.echoCancellation`](/de/docs/Web/API/MediaTrackSupportedConstraints/echoCancellation) überprüfen, der durch einen Aufruf von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgegeben wird. In der Regel ist dies jedoch nicht erforderlich, da Browser unbekannte Einschränkungen ignorieren.

## Wert

Ein Boolean, ein String oder ein [`ConstrainBooleanOrDOMString`](/de/docs/Web/API/MediaTrackConstraints#constrainbooleanordomstring)-Objekt.

Wenn der Browser bestimmte Arten der Echounterdrückung unterstützt, kann der Wert auf eine der folgenden Möglichkeiten gesetzt werden:

- `"all"`
  - : Alle vom Benutzer generierten System-Audiodaten, die durch das Mikrofon des Benutzers erfasst werden, werden entfernt. Dies ist beispielsweise nützlich in Situationen, in denen Sie vermeiden möchten, datenschutzsensible Audiodaten wie Screenreader-Ausgaben und Systembenachrichtigungen zu erfassen.
- `"remote-only"`
  - : Nur Audiodaten, die von entfernten Quellen durch das Mikrofon des Benutzers erfasst werden (wie sie von [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)s dargestellt werden, die von einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) stammen), werden entfernt. Dies ist nützlich, wenn Sie Echo aus der Kommunikation mit entfernten Partnern entfernen möchten, jedoch lokale Audiodaten weiterhin teilen möchten. Zum Beispiel in einem Musikunterricht, in dem der Lehrer seine Schüler zu einem Audiotrack mitspielen hören möchte, aber dennoch klar mit ihnen kommunizieren möchte.
- `true`
  - : Der Browser entscheidet, welches Audio von den durch das Mikrofon aufgezeichneten Signalen entfernt wird. Er muss versuchen, mindestens so viel wie `remote-only` zu unterdrücken und sollte versuchen, so viel wie `all` zu unterdrücken.
- `false`
  - : Kein Audio wird entfernt; es erfolgt keine Echounterdrückung.

Falls der Browser keine speziellen Arten der Echounterdrückung unterstützt, kann der Wert `true` oder `false` sein.

Wenn der Wert auf einen der obigen Werte gesetzt ist, wird der Benutzeragent versuchen, Medien mit aktivierter oder deaktivierter Echounterdrückung wie angegeben zu erhalten, wenn möglich. Ein Fehlschlag tritt nicht ein, wenn dies nicht erreicht werden kann.

Wenn der Wert als Objekt mit einem `exact`-Feld angegeben wird, gibt der Wert dieses Felds eine erforderliche Einstellung für die Echounterdrückungsfunktion an; wenn dies nicht erfüllt werden kann, führt die Anfrage zu einem Fehler.

## Beispiele

Siehe das [Beispiel des Constraints-Übungstools](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser).

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
