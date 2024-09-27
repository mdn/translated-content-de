---
title: "HTMLElement: tabIndex-Eigenschaft"
short-title: tabIndex
slug: Web/API/HTMLElement/tabIndex
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef("HTML DOM")}}

Die **`tabIndex`**-Eigenschaft der [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle repräsentiert die Tabulatorreihenfolge des aktuellen Elements.

Die Tabulatorreihenfolge lautet wie folgt:

1. Elemente mit einem positiven `tabIndex`. Elemente mit identischen `tabIndex`-Werten sollten in der Reihenfolge, in der sie erscheinen, navigiert werden. Die Navigation erfolgt vom niedrigsten `tabIndex` zum höchsten `tabIndex`.
2. Elemente, die das `tabIndex`-Attribut nicht unterstützen oder es unterstützen und `tabIndex` auf `0` setzen, in der Reihenfolge, in der sie erscheinen.

Elemente, die deaktiviert sind, nehmen nicht an der Tabulatorreihenfolge teil.

Die Werte müssen nicht sequentiell sein, noch müssen sie mit einem bestimmten Wert beginnen. Sie dürfen sogar negativ sein, obwohl jeder Browser sehr große Werte kürzt.

## Wert

Ein Integer.

## Beispiele

```js
const b1 = document.getElementById("button1");

b1.tabIndex = 1;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Barrierefreiheit von tastaturnavigierbaren JavaScript-Widgets](/de/docs/Web/Accessibility/Keyboard-navigable_JavaScript_widgets)
- Das HTML
  [`tabindex`](/de/docs/Web/HTML/Global_attributes/tabindex)
  globale Attribut.
