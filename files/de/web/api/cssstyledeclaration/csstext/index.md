---
title: "CSSStyleDeclaration: cssText-Eigenschaft"
short-title: cssText
slug: Web/API/CSSStyleDeclaration/cssText
l10n:
  sourceCommit: 06bb5f22d50ff3579a12aebf7e8c9f02cfa2468b
---

{{APIRef("CSSOM")}}

Die **`cssText`**-Eigenschaft des [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Interfaces gibt den Text der **inline**-Stilerklärung eines Elements zurück oder setzt diesen.

Um eine **Stylesheet**-Regel dynamisch zu setzen, siehe [Verwendung dynamischer Stil-Informationen](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information).

Nicht zu verwechseln mit der Stylesheet-Stilregel [`CSSRule.cssText`](/de/docs/Web/API/CSSRule/cssText).

## Wert

Ein String, der den Text der Inline-Stilerklärung des Elements enthält.

## Beispiel

```html
<span id="s1" style="color: red;">Some text</span>
```

```js
const elem = document.getElementById("s1");
console.log(elem.style.cssText); // "color: red;"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
