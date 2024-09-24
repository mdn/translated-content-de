---
title: ImageTrackList
slug: Web/API/ImageTrackList
l10n:
  sourceCommit: 3789de65bd11453c4cb24625723f81a7e8fcdd56
---

{{APIRef("WebCodecs API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`ImageTrackList`**-Schnittstelle der {{domxref('WebCodecs API','','','true')}} repräsentiert eine Liste von Bildspuren.

## Instanz-Eigenschaften

- {{domxref("ImageTrackList.ready")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein {{jsxref("promise")}} zurück, das aufgelöst wird, sobald die `ImageTrackList` mit {{domxref("ImageTrack","tracks")}} gefüllt wurde.
- {{domxref("ImageTrackList.length")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt eine ganze Zahl zurück, die die Länge der `ImageTrackList` angibt.
- {{domxref("ImageTrackList.selectedIndex")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt eine ganze Zahl zurück, die den Index des `selectedTrack` angibt.
- {{domxref("ImageTrackList.selectedTrack")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die ausgewählte {{domxref("ImageTrack")}} zurück.

## Spezifikationen

{{Specifications}}

## Kompatibilität mit Browsern

{{Compat}}
