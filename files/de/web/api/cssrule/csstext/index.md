---
title: "CSSRule: cssText-Eigenschaft"
short-title: cssText
slug: Web/API/CSSRule/cssText
l10n:
  sourceCommit: 636b90011532e3fd2cf9333aaf1754fdc8de7938
---

{{APIRef("CSSOM") }}

Die **`cssText`**-Eigenschaft der [`CSSRule`](/de/docs/Web/API/CSSRule)-Schnittstelle gibt den tatsächlichen Text einer Stilregel eines [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet) zurück.

> [!NOTE]
> Verwechseln Sie diese Eigenschaft nicht mit der Elementstil-Eigenschaft
> [`CSSStyleDeclaration.cssText`](/de/docs/Web/API/CSSStyleDeclaration/cssText).

Beachten Sie, dass diese Eigenschaft früher veränderbar war, jetzt jedoch schreibgeschützt ist. Ein Versuch, sie zu setzen, _bewirkt absolut nichts_ und löst nicht einmal eine Warnung oder einen Fehler aus. Darüber hinaus hat sie keine setzbaren Untereigenschaften. Um sie zu ändern, verwenden Sie daher die [`cssRules[index]`](/de/docs/Web/API/CSSRuleList)-Eigenschaften des Stylesheets
[`.selectorText`](/de/docs/Web/API/CSSStyleRule/selectorText) und
[`.style`](/de/docs/Web/API/CSSStyleRule/style) (oder deren Untereigenschaften). Siehe auch [Verwendung dynamischer Stilinformationsänderungen](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information) für Details.

## Wert

Ein String, der den tatsächlichen Text der [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Regel enthält.

## Beispiele

```css
body {
  background-color: darkblue;
}
```

```js
let stylesheet = document.styleSheets[0];
console.log(stylesheet.cssRules[0].cssText); // body { background-color: darkblue; }
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
