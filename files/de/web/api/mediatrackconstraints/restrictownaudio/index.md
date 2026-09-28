---
title: "MediaTrackConstraints: Eigenschaft restrictOwnAudio"
short-title: restrictOwnAudio
slug: Web/API/MediaTrackConstraints/restrictOwnAudio
l10n:
  sourceCommit: a5b8c78d6a38dda4194bec70cb82e5bf646178e7
---

{{APIRef("Media Capture and Streams")}}{{SeeCompatTable}}

Die Eigenschaft **`restrictOwnAudio`** des [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Dictionarys ist ein [`ConstrainBoolean`](/de/docs/Web/API/MediaTrackConstraints#constrainboolean), das die angeforderten oder zwingend erforderlichen Einschränkungen für den Wert der einschränkbaren Eigenschaft [`restrictOwnAudio`](/de/docs/Web/API/MediaTrackSettings/restrictOwnAudio) angibt.

Diese Eigenschaft steuert, ob Systemaudio, das vom aufzeichnenden Tab stammt, bei einer Bildschirmaufnahme herausgefiltert wird. Dadurch lassen sich in manchen Fällen sauberere Bildschirmaufzeichnungen erstellen. Wenn beispielsweise die aufzeichnende Webseite selbst eingebettete Audio- oder Videoinhalte wiedergibt, würde deren Ton in die Aufnahme einfließen. Da dies ein unerwünschtes Echo verursachen oder die gewünschten Audioquellen aus anderen Tabs oder Anwendungen stören könnte, ist es sinnvoll, diesen Ton aus der Aufnahme zu entfernen.

Bei Bedarf können Sie prüfen, ob diese Einschränkung unterstützt wird, indem Sie den Wert von [`restrictOwnAudio`](/de/docs/Web/API/MediaDevices/getSupportedConstraints#restrictownaudio) abfragen, den [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgibt. Dies ist jedoch selten erforderlich, da Browser Einschränkungen, die sie nicht erkennen, normalerweise ignorieren.

## Wert

Ein [`ConstrainBoolean`](/de/docs/Web/API/MediaTrackConstraints#constrainboolean)-Wert.

Wenn der Wert `true` ist, versucht der User Agent, sämtliches Audio zu entfernen, das aus dem Tab stammt, der [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) aufgerufen hat, um die Bildschirmaufnahme zu starten. Falls sich das Audio nicht durch Verarbeitung entfernen lässt, kann der User Agent sämtliches Audio aus dem aufzeichnenden Tab ausschließen.

> [!NOTE]
> Wenn die aufgenommene Anzeigefläche kein Systemaudio enthält, hat diese Einstellung keine Wirkung.

Wenn der Wert als `exact` angegeben wird, legt der boolesche Wert dieses Feldes eine zwingend zu erfüllende Anforderung an die Funktion `restrictOwnAudio` fest. Kann der User Agent diese Anforderung nicht erfüllen, führt die Anfrage zu einem Fehler.

Wenn der Wert `false` ist, versucht der User Agent nicht, Systemaudio aus dem aufzeichnenden Tab einzuschränken.

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
- [Funktionen, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)
- [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints)
- [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)
