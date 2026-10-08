---
title: "MediaTrackConstraints: restrictOwnAudio-Eigenschaft"
short-title: restrictOwnAudio
slug: Web/API/MediaTrackConstraints/restrictOwnAudio
l10n:
  sourceCommit: b1bb1b27224e37b2045c6a16b5f9cfa817d0df89
---

{{APIRef("Media Capture and Streams")}}{{SeeCompatTable}}

Die Eigenschaft **`restrictOwnAudio`** des [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Dictionarys ist ein [`ConstrainBoolean`](/de/docs/Web/API/MediaTrackConstraints#constrainboolean), der die gewünschten oder zwingenden Einschränkungen für den Wert der einschränkbaren Eigenschaft [`restrictOwnAudio`](/de/docs/Web/API/MediaStreamTrack/getSettings#restrictownaudio) angibt.

Diese Eigenschaft steuert, ob Systemaudio, das vom aufzeichnenden Tab stammt, aus der Bildschirmaufnahme herausgefiltert wird. Dadurch können in manchen Fällen sauberere Bildschirmaufnahmen entstehen. Wenn beispielsweise die aufzeichnende Webseite selbst eingebettete Audio- oder Videoinhalte wiedergibt, würde deren Ton in die Aufnahme aufgenommen. Da dies zu einem unerwünschten Echo führen oder die beabsichtigten Audioquellen aus anderen Tabs oder Anwendungen beeinträchtigen könnte, ist es sinnvoll, diesen Ton aus der Aufnahme zu entfernen.

Bei Bedarf können Sie prüfen, ob diese Einschränkung unterstützt wird, indem Sie den Wert von [`restrictOwnAudio`](/de/docs/Web/API/MediaDevices/getSupportedConstraints#restrictownaudio) prüfen, den [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgibt. Das ist jedoch selten erforderlich, da Browser Einschränkungen, die sie nicht erkennen, normalerweise ignorieren.

## Wert

Ein [`ConstrainBoolean`](/de/docs/Web/API/MediaTrackConstraints#constrainboolean)-Wert.

Wenn der Wert `true` ist, versucht der User-Agent, sämtlichen Ton zu entfernen, der von dem Tab stammt, der [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) aufgerufen hat, um die Bildschirmaufnahme zu starten. Schlägt die Entfernung des Tons durch Verarbeitung fehl, kann der User-Agent sämtlichen Ton aus dem aufzeichnenden Tab ausschließen.

> [!NOTE]
> Wenn die aufgenommene Bildschirmoberfläche kein Systemaudio enthält, hat diese Einstellung keine Wirkung.

Wenn der Wert als `exact` angegeben wird, legt der boolesche Wert dieses Felds eine zwingende Anforderung an die `restrictOwnAudio`-Funktion fest. Kann der User-Agent diese Anforderung nicht erfüllen, führt die Anfrage zu einem Fehler.

Wenn der Wert `false` ist, versucht der User-Agent nicht, Systemaudio aus dem aufzeichnenden Tab einzuschränken.

## Beispiele

```js
let isCapturingTabSystemAudioRestricted = displayStream
  .getAudioTracks()[0]
  .getSettings().restrictOwnAudio;
```

Das Beispiel [Constraint exerciser](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser) zeigt, wie Sie Einschränkungen für Medientracks verwenden.

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
