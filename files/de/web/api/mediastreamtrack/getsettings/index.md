---
title: "MediaStreamTrack: getSettings()-Methode"
short-title: getSettings()
slug: Web/API/MediaStreamTrack/getSettings
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("Media Capture and Streams")}}

Die **`getSettings()`**-Methode der [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Schnittstelle gibt ein [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings)-Objekt zurück, das die aktuellen Werte jeder der einschränkbaren Eigenschaften für das aktuelle `MediaStreamTrack` enthält.

Sehen Sie sich [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints) an, um Details dazu zu erfahren, wie man mit einschränkbaren Eigenschaften arbeitet.

## Syntax

```js-nolint
getSettings()
```

### Parameter

Keine.

### Rückgabewert

Ein [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings)-Objekt, das die aktuelle Konfiguration der einschränkbaren Eigenschaften des Tracks beschreibt.

> [!NOTE]
> Das zurückgegebene Objekt identifiziert die aktuellen Werte jeder einschränkbaren Eigenschaft, einschließlich solcher, die Plattform-Standards sind und nicht ausdrücklich durch den Code der Website festgelegt wurden. Um stattdessen die zuletzt festgelegten Einschränkungen für die Eigenschaften des Tracks, wie vom Code der Website angegeben, abzurufen, verwenden Sie [`getConstraints()`](/de/docs/Web/API/MediaStreamTrack/getConstraints).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
