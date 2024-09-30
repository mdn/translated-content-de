---
title: "MediaStreamTrack: getSettings()-Methode"
short-title: getSettings()
slug: Web/API/MediaStreamTrack/getSettings
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("Media Capture and Streams")}}

Die **`getSettings()`**-Methode des
[`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Interfaces gibt ein [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings)-Objekt zurück, das die aktuellen Werte jeder der beschränkbaren Eigenschaften für den aktuellen `MediaStreamTrack` enthält.

Weitere Informationen zum Arbeiten mit beschränkbaren Eigenschaften finden Sie unter [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints).

## Syntax

```js-nolint
getSettings()
```

### Parameter

Keine.

### Rückgabewert

Ein [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings)-Objekt, das die aktuelle Konfiguration der beschränkbaren Eigenschaften des Tracks beschreibt.

> [!NOTE]
> Das zurückgegebene Objekt identifiziert die aktuellen Werte jeder beschränkbaren Eigenschaft, einschließlich derjenigen, die plattformspezifische Standardwerte sind und nicht ausdrücklich durch den Code der Website festgelegt wurden. Um stattdessen die zuletzt festgelegten Einschränkungen für die Eigenschaften des Tracks abzurufen, wie sie vom Code der Website angegeben wurden, verwenden Sie
> [`getConstraints()`](/de/docs/Web/API/MediaStreamTrack/getConstraints).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
