---
title: "HTMLElement: offsetParent-Eigenschaft"
short-title: offsetParent
slug: Web/API/HTMLElement/offsetParent
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{ APIRef("HTML DOM") }}

Die schreibgeschützte **`HTMLElement.offsetParent`**-Eigenschaft gibt eine Referenz auf das Element zurück, das der nächste (am nächsten in der Enthaltungshierarchie) positionierte Vorfahren ist.

Ein positionierter Vorfahre kann sein:

- ein [Containing Block](/de/docs/Web/CSS/CSS_display/Containing_block#identifying_the_containing_block) für absolut positionierte Elemente
- ein Element mit einem anderen effektiven [zoom](/de/docs/Web/CSS/Reference/Properties/zoom)-Wert (das heißt, das Produkt aller Zoom-Skalen seiner Eltern) als dieses Element
- `td`, `th`, `table` im Fall, dass das Element selbst statisch positioniert ist.

Wenn es keinen positionierten Vorfahren gibt, wird der `body` zurückgegeben.

> [!NOTE]
> `offsetParent` gibt `null` in den folgenden
> Situationen zurück:
>
> - Das Element oder ein Vorfahre hat die `display`-Eigenschaft auf
>   `none` gesetzt.
> - Das Element hat die `position`-Eigenschaft auf `fixed` gesetzt
>   (Firefox gibt `<body>` zurück).
> - Das Element ist `<body>` oder `<html>`.

`offsetParent` ist nützlich, da
[`offsetTop`](/de/docs/Web/API/HTMLElement/offsetTop) und
[`offsetLeft`](/de/docs/Web/API/HTMLElement/offsetLeft) relativ zu dessen innerem Rand sind.

## Wert

Eine Objekt-Referenz auf das Element, in dem das aktuelle Element abgesetzt ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
