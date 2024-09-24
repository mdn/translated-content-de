---
title: "MediaStream: Methode addTrack()"
short-title: addTrack()
slug: Web/API/MediaStream/addTrack
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("Media Capture and Streams")}}

Die **`addTrack()`**-Methode der {{domxref("MediaStream")}}-Schnittstelle fügt dem Stream einen neuen Track hinzu. Der Track wird als Parameter vom Typ {{domxref("MediaStreamTrack")}} angegeben.

> [!NOTE]
> Wenn der angegebene Track bereits im Track-Set des Streams vorhanden ist, hat diese Methode keine Wirkung.

## Syntax

```js-nolint
addTrack(track)
```

### Parameter

- `track`
  - : Ein {{domxref("MediaStreamTrack")}}, der dem Stream hinzugefügt werden soll.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("MediaStream")}}, die Schnittstelle, zu der es gehört.
