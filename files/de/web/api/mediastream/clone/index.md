---
title: "MediaStream: clone()-Methode"
short-title: clone()
slug: Web/API/MediaStream/clone
l10n:
  sourceCommit: 84f8672adab0fdb783d02676c42a2b7ae16b3606
---

{{APIRef("Media Capture and Streams")}}

Die **`clone()`**-Methode des [`MediaStream`](/de/docs/Web/API/MediaStream)-Interfaces erstellt eine Kopie des `MediaStream`. Dieses neue `MediaStream`-Objekt hat eine neue, eindeutige [`id`](/de/docs/Web/API/MediaStream/id) und enthält Klone jedes [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack), das im `MediaStream`, auf dem `clone()` aufgerufen wurde, enthalten ist.

## Syntax

```js-nolint
clone()
```

### Parameter

Keine.

### Rückgabewert

Eine neue [`MediaStream`](/de/docs/Web/API/MediaStream)-Instanz, die eine neue, eindeutige ID hat und Klone jedes [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) enthält, das im `MediaStream`, auf dem `clone()` aufgerufen wurde, enthalten ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
