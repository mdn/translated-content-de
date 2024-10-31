---
title: ImageTrackList
slug: Web/API/ImageTrackList
l10n:
  sourceCommit: a7482281c4570bb7f932dce381f510d87ddf9924
---

{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Das **`ImageTrackList`** Interface der [WebCodecs API](/de/docs/Web/API/WebCodecs_API) repräsentiert eine Liste von Bildspuren.

## Instanzeigenschaften

- [`ImageTrackList.ready`](/de/docs/Web/API/ImageTrackList/ready) {{ReadOnlyInline}}
  - : Gibt ein {{jsxref("promise")}} zurück, das aufgelöst wird, sobald die `ImageTrackList` mit [`tracks`](/de/docs/Web/API/ImageTrack) befüllt wurde.
- [`ImageTrackList.length`](/de/docs/Web/API/ImageTrackList/length) {{ReadOnlyInline}}
  - : Gibt eine Ganzzahl zurück, die die Länge der `ImageTrackList` angibt.
- [`ImageTrackList.selectedIndex`](/de/docs/Web/API/ImageTrackList/selectedIndex) {{ReadOnlyInline}}
  - : Gibt eine Ganzzahl zurück, die den Index der `selectedTrack` angibt.
- [`ImageTrackList.selectedTrack`](/de/docs/Web/API/ImageTrackList/selectedTrack) {{ReadOnlyInline}}
  - : Gibt die ausgewählte [`ImageTrack`](/de/docs/Web/API/ImageTrack) zurück.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
