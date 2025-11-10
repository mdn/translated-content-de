---
title: "HTMLElement: offsetParent-Eigenschaft"
short-title: offsetParent
slug: Web/API/HTMLElement/offsetParent
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{ APIRef("HTML DOM") }}

Die **`HTMLElement.offsetParent`** Schreibgeschützte Eigenschaft gibt eine Referenz auf das Element zurück, das der nächste (am nächsten in der Verschachtelungshierarchie befindliche) positionierte Vorfahren ist.

Ein positionierter Vorfahre kann sein:

- ein [enthältender Block](/de/docs/Web/CSS/Guides/Display/Containing_block#identifying_the_containing_block) für absolut positionierte Elemente
- ein Element mit einem anderen effektiven [Zoom](/de/docs/Web/CSS/Reference/Properties/zoom)-Wert (d.h. das Produkt aller Zoom-Skalen seiner Eltern) als dieses Element
- `td`, `th`, `table`, falls das Element selbst statisch positioniert ist.

Wenn es keinen positionierten Vorfahren gibt, wird der `body` zurückgegeben.

> [!NOTE] > `offsetParent` gibt `null` in den folgenden
> Situationen zurück:
>
> - Das Element oder ein beliebiger Vorfahre hat die `display`-Eigenschaft auf
>   `none` gesetzt.
> - Das Element hat die `position`-Eigenschaft auf `fixed`
>   gesetzt (Firefox gibt `<body>` zurück).
> - Das Element ist `<body>` oder `<html>`.

`offsetParent` ist nützlich, weil
[`offsetTop`](/de/docs/Web/API/HTMLElement/offsetTop) und
[`offsetLeft`](/de/docs/Web/API/HTMLElement/offsetLeft) relativ zu dessen Polsterrand sind.

## Wert

Eine Objektreferenz auf das Element, in dem das aktuelle Element versetzt ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
