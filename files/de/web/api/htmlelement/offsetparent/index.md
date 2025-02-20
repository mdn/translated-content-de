---
title: "HTMLElement: offsetParent-Eigenschaft"
short-title: offsetParent
slug: Web/API/HTMLElement/offsetParent
l10n:
  sourceCommit: b8f45350a203be9e6e83c6fcb83c93576d8d5d9c
---

{{ APIRef("HTML DOM") }}

Die **`HTMLElement.offsetParent`** schreibgeschützte Eigenschaft gibt eine Referenz auf das Element zurück, das das nächstgelegene (im Begrenzungshierarchie am nächsten gelegene) positionierte Vorfahrenelement ist.

Ein positioniertes Vorfahrenelement kann sein:

- ein [Enthaltender Block (Containing block)](/de/docs/Web/CSS/CSS_display/Containing_block#identifying_the_containing_block) für absolut positionierte Elemente,
- ein Element mit einem anderen effektiven [Zoom](/de/docs/Web/CSS/zoom)-Wert (das heißt, das Produkt aller Zoom-Skalierungen seiner Eltern) als dieses Element,
- `td`, `th`, `table`, falls das Element selbst statisch positioniert ist.

Falls kein positioniertes Vorfahrenelement vorhanden ist, wird der `body` zurückgegeben.

> **Note:** `offsetParent` gibt `null` in den folgenden
> Situationen zurück:
>
> - Das Element oder ein beliebiger Vorfahre hat die `display`-Eigenschaft auf
>   `none` gesetzt.
> - Das Element hat die `position`-Eigenschaft auf `fixed`
>   gesetzt (Firefox gibt `<body>` zurück).
> - Das Element ist `<body>` oder `<html>`.

`offsetParent` ist nützlich, weil [`offsetTop`](/de/docs/Web/API/HTMLElement/offsetTop) und [`offsetLeft`](/de/docs/Web/API/HTMLElement/offsetLeft) relativ zu dessen Padding-Kante sind.

## Wert

Ein Objektverweis auf das Element, innerhalb dessen das aktuelle Element versetzt ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
