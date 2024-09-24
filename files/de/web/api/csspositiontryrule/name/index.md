---
title: "CSSPositionTryRule: name-Eigenschaft"
short-title: name
slug: Web/API/CSSPositionTryRule/name
l10n:
  sourceCommit: 696d03175b94752ce0fffa5b11c80f883f44b337
---

{{APIRef("CSSOM") }}{{SeeCompatTable}}

Die **`name`**-Eigenschaft (nur lesbar) des {{domxref("CSSPositionTryRule")}}-Interfaces repräsentiert den Namen der Fallback-Option für die Positionsbestimmung, die durch die `@position-try`-Regel mittels {{cssxref("dashed-ident")}} festgelegt ist.

## Wert

Ein String.

## Beispiele

Das CSS beinhaltet eine `@position-try`-Regel mit einem Namen `--custom-bottom` und drei Deskriptoren.

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

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{DOMxRef("CSSPositionTryDescriptors")}}
- {{cssxref("@position-try")}}
- {{cssxref("position-try-fallbacks")}}
- [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
- [Verwendung der CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using)
- [Umgang mit Überlauf: Versuch-Optionen und bedingtes Verbergen](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding)
