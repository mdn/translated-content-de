---
title: "MediaMetadata: Eigenschaft chapterInfo"
short-title: chapterInfo
slug: Web/API/MediaMetadata/chapterInfo
l10n:
  sourceCommit: b60bc79c7ad36c56dddf6760d2fd4dbb642d2023
---

{{APIRef("Media Session API")}}{{SeeCompatTable}}

Die **`chapterInfo`**-Eigenschaft, die nur lesbar ist, der {{domxref("MediaMetadata")}}-Schnittstelle gibt ein Array von Kapitelinformationsmetadaten zurück, die mit abgespielten Medien verbunden sind und durch {{domxref("ChapterInformation")}}-Objektinstanzen dargestellt werden.

Die `chapterInfo` für eine gegebene Medienressource wird festgelegt, wenn sie erstmals erstellt wird, über die `chapterInfo`-Eigenschaft des Initialisierungsobjekts des {{domxref("MediaMetadata.MediaMetadata", "MediaMetadata()")}}-Konstruktors.

## Wert

Ein Array von {{domxref("ChapterInformation")}}-Objektinstanzen.

## Beispiele

Siehe die Referenzseite {{domxref("ChapterInformation")}} für ein Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("ChapterInformation")}}
