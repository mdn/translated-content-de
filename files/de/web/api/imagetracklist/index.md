---
title: ImageTrackList
slug: Web/API/ImageTrackList
l10n:
  sourceCommit: 3789de65bd11453c4cb24625723f81a7e8fcdd56
---

{{APIRef("WebCodecs API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_dedicated")}}

Das **`ImageTrackList`**-Interface der [WebCodecs API](/de/docs/Web/API/WebCodecs_API) repräsentiert eine Liste von Bildspuren.

## Instanz-Eigenschaften

- [`ImageTrackList.ready`](/de/docs/Web/API/ImageTrackList/ready) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein {{jsxref("promise")}} zurück, das aufgelöst wird, sobald die `ImageTrackList` mit [`tracks`](/de/docs/Web/API/ImageTrack) gefüllt ist.
- [`ImageTrackList.length`](/de/docs/Web/API/ImageTrackList/length) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt eine Ganzzahl zurück, die die Länge der `ImageTrackList` angibt.
- [`ImageTrackList.selectedIndex`](/de/docs/Web/API/ImageTrackList/selectedIndex) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt eine Ganzzahl zurück, die den Index der `selectedTrack` angibt.
- [`ImageTrackList.selectedTrack`](/de/docs/Web/API/ImageTrackList/selectedTrack) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die ausgewählte [`ImageTrack`](/de/docs/Web/API/ImageTrack) zurück.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
