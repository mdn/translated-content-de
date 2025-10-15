---
title: "MediaTrackConstraints: restrictOwnAudio-Eigenschaft"
short-title: restrictOwnAudio
slug: Web/API/MediaTrackConstraints/restrictOwnAudio
l10n:
  sourceCommit: a439453bab9f5508b5268a4062a42fc760a2f20b
---

{{APIRef("Media Capture and Streams")}}{{SeeCompatTable}}

Das [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Wörterbuch enthält die **`restrictOwnAudio`**-Eigenschaft, einen [`ConstrainBoolean`](/de/docs/Web/API/MediaTrackConstraints#constrainboolean), der die angeforderten oder obligatorischen Einschränkungen festlegt, die auf den Wert der [`restrictOwnAudio`](/de/docs/Web/API/MediaTrackSettings/restrictOwnAudio)-einschränkbaren Eigenschaft angewendet werden.

Diese Eigenschaft steuert, ob das aus dem aufzeichnenden Tab stammende Systemaudio aus der Bildschirmaufnahme herausgefiltert wird, was in einigen Fällen zu saubereren Bildschirmaufzeichnungen führt. Wenn zum Beispiel die aufzeichnende Webseite selbst eingebettete Audios oder Videos wiedergibt, würde dieses Audio in die Aufnahme einbezogen. Da dies zu einem unerwünschten Echo führen oder die beabsichtigten Audioquellen aus anderen Tabs oder Anwendungen stören könnte, ist es wünschenswert, es aus der Aufnahme zu entfernen.

Bei Bedarf können Sie feststellen, ob diese Einschränkung unterstützt wird, indem Sie den Wert von [`MediaTrackSupportedConstraints.restrictOwnAudio`](/de/docs/Web/API/MediaTrackSupportedConstraints/restrictOwnAudio) überprüfen, wie er von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgegeben wird. Dies ist jedoch selten erforderlich, da Browser normalerweise alle Einschränkungen ignorieren, die sie nicht erkennen.

## Wert

Ein [`ConstrainBoolean`](/de/docs/Web/API/MediaTrackConstraints#constrainboolean)-Wert.

Ist der Wert `true`, wird der Benutzeragent versuchen, alle aus dem Tab stammenden Audios zu entfernen, der [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) aufgerufen hat, um die Bildschirmaufnahme zu starten. Wenn das Entfernen von Audio durch Verarbeitung fehlschlägt, kann der Benutzeragent alle Audios aus dem aufzeichnenden Tab ausschließen.

> [!NOTE]
> Wenn die erfasste Anzeigefläche kein Systemaudio enthält, hat diese Einstellung keine Wirkung.

Wird der Wert als `exact` angegeben, gibt der boolesche Wert dieses Feldes ein genaues Erfordernis für die `restrictOwnAudio`-Funktion an; wenn der Benutzeragent dieses Erfordernis nicht erfüllen kann, wird die Anfrage zu einem Fehler führen.

Ist der Wert `false`, wird der Benutzeragent nicht versuchen, das aus dem aufzeichnenden Tab stammende Systemaudio einzuschränken.

## Beispiele

```js
let isCapturingTabSystemAudioRestricted = displayStream
  .getAudioTracks()[0]
  .getSettings().restrictOwnAudio;
```

Das [Beispiel für den Einschränkungsübenden](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser) zeigt, wie man Medientrack-Einschränkungen verwendet.

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
