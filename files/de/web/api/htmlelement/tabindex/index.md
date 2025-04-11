---
title: "HTMLElement: tabIndex-Eigenschaft"
short-title: tabIndex
slug: Web/API/HTMLElement/tabIndex
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die **`tabIndex`**-Eigenschaft der [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle repräsentiert die Tabulatorreihenfolge des aktuellen Elements.

Die Tabulatorreihenfolge ist wie folgt:

1. Elemente mit einem positiven `tabIndex`. Elemente mit identischen `tabIndex`-Werten sollten in der Reihenfolge, in der sie erscheinen, navigiert werden. Die Navigation erfolgt vom niedrigsten `tabIndex` zum höchsten `tabIndex`.
2. Elemente, die das `tabIndex`-Attribut nicht unterstützen oder es unterstützen und `tabIndex` auf `0` setzen, in der Reihenfolge, in der sie erscheinen.

Elemente, die deaktiviert sind, nehmen nicht an der Tabulatorreihenfolge teil.

Werte müssen nicht aufeinanderfolgend sein, und sie müssen nicht mit einem bestimmten Wert beginnen. Sie können sogar negativ sein, obwohl jeder Browser sehr große Werte kürzt.

## Wert

Ein Ganzzahlwert.

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

- [Barrierefreiheit von tastaturnavigierbaren JavaScript-Widgets](/de/docs/Web/Accessibility/Guides/Keyboard-navigable_JavaScript_widgets)
- Das HTML [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) globale Attribut.
