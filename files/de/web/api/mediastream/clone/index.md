---
title: "MediaStream: clone()-Methode"
short-title: clone()
slug: Web/API/MediaStream/clone
l10n:
  sourceCommit: 84f8672adab0fdb783d02676c42a2b7ae16b3606
---

{{APIRef("Media Capture and Streams")}}

Die **`clone()`**-Methode des {{domxref("MediaStream")}}-Interfaces erstellt eine Kopie des `MediaStream`. Dieses neue `MediaStream`-Objekt hat eine neue, eindeutige {{domxref("MediaStream.id", "id")}} und enthält Klone von jedem {{domxref("MediaStreamTrack")}}, das vom `MediaStream`, auf dem `clone()` aufgerufen wurde, enthalten ist.

## Syntax

```js-nolint
clone()
```

### Parameter

Keine.

### Rückgabewert

Eine neue {{domxref("MediaStream")}}-Instanz, die eine neue eindeutige ID hat und Klone von jedem {{domxref("MediaStreamTrack")}} enthält, das vom `MediaStream`, auf dem `clone()` aufgerufen wurde, enthalten ist.

## Spezifikationen

{{Specifications}}

## Kompatibilität mit Browsern

{{Compat}}
