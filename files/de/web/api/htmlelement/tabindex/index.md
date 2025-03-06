---
title: "HTMLElement: tabIndex-Eigenschaft"
short-title: tabIndex
slug: Web/API/HTMLElement/tabIndex
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{APIRef("HTML DOM")}}

Die **`tabIndex`**-Eigenschaft der [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle repräsentiert die Tab-Reihenfolge des aktuellen Elements.

Die Tab-Reihenfolge ist wie folgt:

1. Elemente mit einem positiven `tabIndex`. Elemente mit identischen `tabIndex`-Werten sollten in der Reihenfolge, in der sie erscheinen, navigiert werden. Die Navigation erfolgt vom niedrigsten `tabIndex` zum höchsten `tabIndex`.
2. Elemente, die das `tabIndex`-Attribut nicht unterstützen oder es unterstützen und `tabIndex` auf `0` setzen, in der Reihenfolge, in der sie erscheinen.

Elemente, die deaktiviert sind, nehmen nicht an der Tab-Reihenfolge teil.

Werte müssen nicht sequentiell sein, noch müssen sie mit einem bestimmten Wert beginnen. Sie können sogar negativ sein, obwohl jeder Browser sehr große Werte kürzt.

## Wert

Eine Ganzzahl.

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

- [Barrierefreiheit von über die Tastatur navigierbaren JavaScript-Widgets](/de/docs/Web/Accessibility/Guides/Keyboard-navigable_JavaScript_widgets)
- Das HTML [`tabindex`](/de/docs/Web/HTML/Global_attributes/tabindex) globale Attribut.
