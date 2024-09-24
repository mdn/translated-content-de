---
title: "MediaStreamTrack: getSettings()-Methode"
short-title: getSettings()
slug: Web/API/MediaStreamTrack/getSettings
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("Media Capture and Streams")}}

Die **`getSettings()`**-Methode der {{domxref("MediaStreamTrack")}}-Schnittstelle gibt ein {{domxref("MediaTrackSettings")}}-Objekt zurück, das die aktuellen Werte jeder der einschränkbaren Eigenschaften für das aktuelle `MediaStreamTrack` enthält.

Siehe [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints) für Details darüber, wie man mit einschränkbaren Eigenschaften arbeitet.

## Syntax

```js-nolint
getSettings()
```

### Parameter

Keine.

### Rückgabewert

Ein {{domxref("MediaTrackSettings")}}-Objekt, das die aktuelle Konfiguration der einschränkbaren Eigenschaften des Tracks beschreibt.

> [!NOTE]
> Das zurückgegebene Objekt identifiziert die aktuellen Werte jeder einschränkbaren Eigenschaft, einschließlich jener, die Plattform-Standards sind, anstatt ausdrücklich durch den Code der Website gesetzt worden zu sein. Um stattdessen die zuletzt festgelegten Einschränkungen für die Eigenschaften des Tracks abzurufen, wie sie durch den Code der Website festgelegt wurden, verwenden Sie {{domxref("MediaStreamTrack.getConstraints", "getConstraints()")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
