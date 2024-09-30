---
title: "HTMLElement: tabIndex-Eigenschaft"
short-title: tabIndex
slug: Web/API/HTMLElement/tabIndex
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef("HTML DOM")}}

Die **`tabIndex`**-Eigenschaft des
[`HTMLElement`](/de/docs/Web/API/HTMLElement)-Interfaces repräsentiert die Tab-Reihenfolge des aktuellen Elements.

Die Tab-Reihenfolge verläuft wie folgt:

1. Elemente mit einem positiven `tabIndex`. Elemente mit identischen
   `tabIndex`-Werten sollten in der Reihenfolge navigiert werden, in der sie erscheinen. Die Navigation
   erfolgt vom niedrigsten `tabIndex` zum höchsten `tabIndex`.
2. Elemente, die das `tabIndex`-Attribut nicht unterstützen oder es unterstützen und
   `tabIndex` auf `0` setzen, in der Reihenfolge ihres Erscheinens.

Deaktivierte Elemente nehmen nicht an der Tab-Reihenfolge teil.

Die Werte müssen nicht sequentiell sein, noch müssen sie mit einem bestimmten Wert beginnen. Sie
können sogar negativ sein, obwohl jeder Browser sehr große Werte trimmt.

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

- [Zugänglichkeit von tastaturnavigierbaren JavaScript-Widgets](/de/docs/Web/Accessibility/Keyboard-navigable_JavaScript_widgets)
- Das HTML
  [`tabindex`](/de/docs/Web/HTML/Global_attributes/tabindex)
  globale Attribut.
