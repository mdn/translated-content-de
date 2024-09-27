---
title: "HTMLElement: offsetParent-Eigenschaft"
short-title: offsetParent
slug: Web/API/HTMLElement/offsetParent
l10n:
  sourceCommit: 5cc24ca96ab687857a9a1784714b0bd0bb926a83
---

{{ APIRef("HTML DOM") }}

Die schreibgeschützte Eigenschaft **`HTMLElement.offsetParent`** gibt eine Referenz auf das Element zurück, welches das nächste (im Darstellungsbaum nächstgelegene) positionierte Vorfahrenelement ist.

Ein positionierter Vorfahre kann sein:

- ein [Containing Block](/de/docs/Web/CSS/Containing_block#identifying_the_containing_block) für absolut positionierte Elemente
- ein Element mit einem anderen effektiven [Zoom](/de/docs/Web/CSS/zoom)-Wert (das heißt, das Produkt aller Zoomskalen seiner Eltern) als dieses Element
- `td`, `th`, `table` für den Fall, dass das Element selbst statisch positioniert ist.

Wenn es kein positioniertes Vorfahrenelement gibt, wird `body` zurückgegeben.

> **Note:** `offsetParent` gibt `null` in den folgenden
> Situationen zurück:
>
> - Das Element oder ein beliebiger Vorfahre hat die Eigenschaft `display` auf
>   `none` gesetzt.
> - Das Element hat die Eigenschaft `position` auf `fixed` gesetzt
>   (Firefox gibt `<body>` zurück).
> - Das Element ist `<body>` oder `<html>`.

`offsetParent` ist nützlich, da
[`offsetTop`](/de/docs/Web/API/HTMLElement/offsetTop) und
[`offsetLeft`](/de/docs/Web/API/HTMLElement/offsetLeft) relativ zu dessen Innenkante sind.

## Wert

Eine Objekt-Referenz auf das Element, in dem das aktuelle Element versetzt ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
