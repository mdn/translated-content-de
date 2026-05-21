---
title: ImageTrackList
slug: Web/API/ImageTrackList
l10n:
  sourceCommit: 0abb70602b0b3b11a2909c417a03e10eabd607a8
---

{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Das **`ImageTrackList`**-Interface der [WebCodecs API](/de/docs/Web/API/WebCodecs_API) repräsentiert eine Liste von Bildspuren.

## Instanz-Eigenschaften

- [`ImageTrackList.ready`](/de/docs/Web/API/ImageTrackList/ready) {{ReadOnlyInline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, sobald die `ImageTrackList` mit [`tracks`](/de/docs/Web/API/ImageTrack) gefüllt wurde.
- [`ImageTrackList.length`](/de/docs/Web/API/ImageTrackList/length) {{ReadOnlyInline}}
  - : Gibt einen ganzzahligen Wert zurück, der die Länge der `ImageTrackList` angibt.
- [`ImageTrackList.selectedIndex`](/de/docs/Web/API/ImageTrackList/selectedIndex) {{ReadOnlyInline}}
  - : Gibt einen ganzzahligen Wert zurück, der den Index des `selectedTrack` angibt.
- [`ImageTrackList.selectedTrack`](/de/docs/Web/API/ImageTrackList/selectedTrack) {{ReadOnlyInline}}
  - : Gibt die ausgewählte [`ImageTrack`](/de/docs/Web/API/ImageTrack) zurück.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
