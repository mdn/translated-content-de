---
title: "CSSPositionTryRule: style-Eigenschaft"
short-title: Stil
slug: Web/API/CSSPositionTryRule/style
l10n:
  sourceCommit: 839c5e88a078deead1bcf1b2837d05499cb859b1
---

{{ APIRef("CSSOM") }}{{SeeCompatTable}}

Die **`style`** schreibgeschützte Eigenschaft der {{domxref("CSSPositionTryRule")}}-Schnittstelle gibt ein {{domxref("CSSPositionTryDescriptors")}}-Objekt zurück, das die in der `@position-try`-Regel festgelegten Deklarationen darstellt.

## Wert

Ein {{domxref("CSSPositionTryDescriptors")}}-Objekt.

## Beispiele

Das CSS enthält eine `@position-try`-Regel mit dem Namen `--custom-right` und drei Deskriptoren.

```css
@position-try --custom-bottom {
  top: anchor(bottom);
  min-width: 100px;
  margin: 10px 0 0 0;
}
```

```js
const myRules = document.styleSheets[0].cssRules;
const tryOption = myRules[0]; // eine CSSPositionTryRule
console.log(tryOption.style.top); // "anchor(bottom)"
console.log(tryOption.style["min-width"]); // "100px"
console.log(tryOption.style.positionArea); // ""; kein position-area angegeben
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{DOMxRef("CSSPositionTryDescriptors")}}
- {{cssxref("@position-try")}}
- {{cssxref("position-try-fallbacks")}}
- [Modul zur CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning)
- [Verwendung der CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using)
- [Überlauf behandeln: Versuch-Optionen und bedingtes Verbergen](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding)
