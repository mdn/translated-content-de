---
title: "CSSPositionTryRule: Eigenschaft name"
short-title: name
slug: Web/API/CSSPositionTryRule/name
l10n:
  sourceCommit: 696d03175b94752ce0fffa5b11c80f883f44b337
---

{{APIRef("CSSOM") }}{{SeeCompatTable}}

Die **`name`** schreibgeschützte Eigenschaft der [`CSSPositionTryRule`](/de/docs/Web/API/CSSPositionTryRule)-Schnittstelle repräsentiert den Namen der Position-try-Fallback-Option, die durch die `@position-try`-At-Regel im {{cssxref("dashed-ident")}} angegeben wird.

## Wert

Ein String.

## Beispiele

Das CSS enthält eine `@position-try`-At-Regel mit einem Namen `--custom-bottom` und drei Deskriptoren.

```css
@position-try --custom-bottom {
  top: anchor(bottom);
  min-width: 100px;
  margin: 10px 0 0 0;
}
```

```js
const myRules = document.styleSheets[0].cssRules;
const tryOption = myRules[0]; // a CSSPositionTryRule
console.log(tryOption.name); // "--custom-bottom"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CSSPositionTryDescriptors`](/de/docs/Web/API/CSSPositionTryDescriptors)
- {{cssxref("@position-try")}}
- {{cssxref("position-try-fallbacks")}}
- [CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
- [Verwendung der CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using)
- [Umgang mit overflow: try Optionen und bedingtem Verbergen](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding)
