---
title: "MediaStreamTrack: Methode clone()"
short-title: clone()
slug: Web/API/MediaStreamTrack/clone
l10n:
  sourceCommit: 84f8672adab0fdb783d02676c42a2b7ae16b3606
---

{{APIRef("Media Capture and Streams")}}

Die **`clone()`**-Methode des {{domxref("MediaStreamTrack")}}-Interfaces erstellt ein Duplikat des `MediaStreamTrack`. Dieses neue `MediaStreamTrack`-Objekt ist identisch, abgesehen von seiner einzigartigen {{domxref("MediaStreamTrack.id", "id")}}.

## Syntax

```js-nolint
clone()
```

### Parameter

Keine.

### Rückgabewert

Eine neue {{domxref("MediaStreamTrack")}}-Instanz, die identisch mit derjenigen ist, von der `clone()` aufgerufen wurde, mit Ausnahme ihrer neuen eindeutigen {{domxref("MediaStreamTrack.id", "id")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
