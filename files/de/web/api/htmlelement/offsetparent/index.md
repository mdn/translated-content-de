---
title: "HTMLElement: offsetParent Eigenschaft"
short-title: offsetParent
slug: Web/API/HTMLElement/offsetParent
l10n:
  sourceCommit: 5cc24ca96ab687857a9a1784714b0bd0bb926a83
---

{{ APIRef("HTML DOM") }}

Die schreibgeschützte Eigenschaft **`HTMLElement.offsetParent`** gibt eine Referenz auf das Element zurück, das das nächste (im Hierarchie-Containment am nächsten gelegene) positionierte Vorfahrenelement ist.

Ein positionierter Vorfahre könnte sein:

- ein [Containing Block](/de/docs/Web/CSS/Containing_block#identifying_the_containing_block) für absolut positionierte Elemente
- ein Element mit einem unterschiedlichen effektiven [Zoom](/de/docs/Web/CSS/zoom)-Wert (das heißt, das Produkt aller Zoom-Skalen seiner Eltern) von diesem Element
- `td`, `th`, `table`, falls das Element selbst statisch positioniert ist.

Wenn es kein positioniertes Vorfahrenelement gibt, wird der `body` zurückgegeben.

> **Note:** `offsetParent` gibt `null` in den folgenden Situationen zurück:
>
> - Das Element oder ein beliebiger Vorfahre hat die Eigenschaft `display` auf `none` gesetzt.
> - Das Element hat die Eigenschaft `position` auf `fixed` gesetzt (Firefox gibt `<body>` zurück).
> - Das Element ist `<body>` oder `<html>`.

`offsetParent` ist nützlich, weil
[`offsetTop`](/de/docs/Web/API/HTMLElement/offsetTop) und
[`offsetLeft`](/de/docs/Web/API/HTMLElement/offsetLeft) relativ zum inneren Rand des Elementes sind.

## Wert

Eine Objekt-Referenz auf das Element, in dem das aktuelle Element versetzt ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
