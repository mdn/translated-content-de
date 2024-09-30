---
title: "CSSStyleDeclaration: cssText-Eigenschaft"
short-title: cssText
slug: Web/API/CSSStyleDeclaration/cssText
l10n:
  sourceCommit: 53b1989260054e651bcf001bacee9b843b8ca9c8
---

{{APIRef("CSSOM")}}

Die **`cssText`**-Eigenschaft des [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Interfaces gibt den Text der **inline**-Stildeklaration des Elements zurück oder setzt diesen.

Um eine **Stylesheet**-Regel dynamisch festzulegen, siehe [Verwendung dynamischer Stilinformationen](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information).

Nicht zu verwechseln mit der Stylesheet-Stilregel [`CSSRule.cssText`](/de/docs/Web/API/CSSRule/cssText).

## Wert

Ein String, der den Text der Inline-Stildeklaration des Elements enthält.

## Beispiel

```html
<span id="s1" style="color: red;"> Some text </span>

<script>
  const elem = document.getElementById("s1");
  alert(elem.style.cssText); // "color: red;"
</script>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
