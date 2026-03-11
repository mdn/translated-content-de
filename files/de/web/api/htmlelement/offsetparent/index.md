---
title: "HTMLElement: offsetParent-Eigenschaft"
short-title: offsetParent
slug: Web/API/HTMLElement/offsetParent
l10n:
  sourceCommit: 678f7ed93e03b90cae88e9a3c7e4b81b0f969664
---

{{ APIRef("HTML DOM") }}

Die **`HTMLElement.offsetParent`** schreibgeschützte Eigenschaft gibt eine Referenz auf das Element zurück, das das nächstgelegene (im Containment-Hierarchie am nächsten liegende) positionierte Vorfahrenelement ist.

Ein positioniertes Vorfahrenelement kann sein:

- ein [Umgebungsblock](/de/docs/Web/CSS/Guides/Display/Containing_block#identifying_the_containing_block) für absolut positionierte Elemente
- ein Element mit einem anderen effektiven [zoom](/de/docs/Web/CSS/Reference/Properties/zoom)-Wert (das heißt, das Produkt aller Zoom-Skalierung seiner Eltern) als dieses Element
- `td`, `th`, `table`, falls das Element selbst statisch positioniert ist.

Gibt es kein positioniertes Vorfahrenelement, wird der `body` zurückgegeben.

> [!NOTE]
> `offsetParent` gibt `null` in den folgenden Situationen zurück:
>
> - Das Element oder ein Vorfahre hat die `display`-Eigenschaft auf `none` gesetzt.
> - Das Element hat die `position`-Eigenschaft auf `fixed` gesetzt, und sein Umgebungsblock ist der Viewport.
>   Wenn der Umgebungsblock nicht der Viewport ist, gibt `offsetParent` den nächstgelegenen Vorfahren zurück, der
>   einen Umgebungsblock bildet, zum Beispiel einen Vorfahren mit den gesetzten Stilen `transform`, `perspective` oder `filter`.
> - Das Element ist `<body>` oder `<html>`.

`offsetParent` ist nützlich, weil
[`offsetTop`](/de/docs/Web/API/HTMLElement/offsetTop) und
[`offsetLeft`](/de/docs/Web/API/HTMLElement/offsetLeft) relativ zu dessen Polsterrand sind.

## Wert

Ein Objektverweis auf das Element, in dem das aktuelle Element versetzt ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
