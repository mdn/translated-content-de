---
title: "HTMLElement: offsetParent-Eigenschaft"
short-title: offsetParent
slug: Web/API/HTMLElement/offsetParent
l10n:
  sourceCommit: 5cc24ca96ab687857a9a1784714b0bd0bb926a83
---

{{ APIRef("HTML DOM") }}

Die schreibgeschützte **`HTMLElement.offsetParent`**-Eigenschaft gibt einen Verweis auf das Element zurück, das der nächste (nächste im enthaltenen Hierarchie) positionierte Vorfahre ist.

Ein positionierter Vorfahre könnte sein:

- ein [Containing Block](/de/docs/Web/CSS/Containing_block#identifying_the_containing_block) für absolut positionierte Elemente
- ein Element mit einem anderen effektiven [Zoom](/de/docs/Web/CSS/zoom)-Wert (das heißt, das Produkt aller Zoom-Faktoren seiner Eltern) als dieses Element
- `td`, `th`, `table`, falls das Element selbst statisch positioniert ist.

Wenn es kein positioniertes Vorfahrelement gibt, wird der `body` zurückgegeben.

> **Note:** `offsetParent` gibt `null` in den folgenden Situationen zurück:
>
> - Das Element oder ein Vorfahre hat die `display`-Eigenschaft auf
>   `none` gesetzt.
> - Das Element hat die `position`-Eigenschaft auf `fixed` gesetzt
>   (Firefox gibt `<body>` zurück).
> - Das Element ist `<body>` oder `<html>`.

`offsetParent` ist nützlich, weil {{domxref("HTMLElement.offsetTop","offsetTop")}} und {{domxref("HTMLElement.offsetLeft","offsetLeft")}} relativ zu dessen Padding-Kante sind.

## Wert

Ein Objektverweis auf das Element, in dem das aktuelle Element versetzt ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
