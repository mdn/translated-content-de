---
title: "HTMLElement: offsetParent-Eigenschaft"
short-title: offsetParent
slug: Web/API/HTMLElement/offsetParent
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{ APIRef("HTML DOM") }}

Die schreibgeschützte **`HTMLElement.offsetParent`**-Eigenschaft gibt eine Referenz auf das Element zurück, das das nächste (am nächsten in der Hierarchie) positionierte Vorfahrenelement ist.

Ein positioniertes Vorfahrenelement könnte sein:

- ein [enthaltender Block](/de/docs/Web/CSS/CSS_display/Containing_block#identifying_the_containing_block) für absolut positionierte Elemente,
- ein Element mit einem anderen effektiven [Zoom](/de/docs/Web/CSS/zoom)-Wert (d.h. das Produkt aller Zoom-Skalen seiner Eltern) als dieses Element,
- `td`, `th`, `table`, wenn das Element selbst statisch positioniert ist.

Wenn es kein positioniertes Vorfahrenelement gibt, wird der `body` zurückgegeben.

> [!NOTE] > `offsetParent` gibt `null` in den folgenden Situationen zurück:
>
> - Das Element oder ein Vorfahre hat die `display`-Eigenschaft auf `none` gesetzt.
> - Das Element hat die `position`-Eigenschaft auf `fixed` gesetzt (Firefox gibt `<body>` zurück).
> - Das Element ist `<body>` oder `<html>`.

`offsetParent` ist nützlich, weil [`offsetTop`](/de/docs/Web/API/HTMLElement/offsetTop) und [`offsetLeft`](/de/docs/Web/API/HTMLElement/offsetLeft) relativ zur Randauffüllungskante davon sind.

## Wert

Ein Objektverweis auf das Element, in dem das aktuelle Element versetzt ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
