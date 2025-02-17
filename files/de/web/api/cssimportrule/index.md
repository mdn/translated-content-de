---
title: CSSImportRule
slug: Web/API/CSSImportRule
l10n:
  sourceCommit: a850ca867a8b380a53320bab6870fb7335f22d52
---

{{APIRef("CSSOM")}}

Die **`CSSImportRule`**-Schnittstelle repräsentiert eine {{cssxref("@import")}}-[at-rule](/de/docs/Web/CSS/CSS_syntax/At-rule).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von ihrem Vorfahren [`CSSRule`](/de/docs/Web/API/CSSRule)._

- [`CSSImportRule.href`](/de/docs/Web/API/CSSImportRule/href) {{ReadOnlyInline}}
  - : Gibt die URL zurück, die von der {{cssxref("@import")}}-Regel angegeben wird.
- [`CSSImportRule.layerName`](/de/docs/Web/API/CSSImportRule/layerName) {{ReadOnlyInline}}
  - : Gibt den Namen der [Kaskadenschicht](/de/docs/Web/CSS/@layer) zurück, die in der {{cssxref("@import")}}-Regel deklariert ist, einen leeren String, wenn die Schicht anonym ist, oder `null`, wenn die Regel keine deklariert.
- [`CSSImportRule.media`](/de/docs/Web/API/CSSImportRule/media)
  - : Gibt den Wert des `media`-Attributs des zugehörigen Stylesheets zurück.
- [`CSSImportRule.styleSheet`](/de/docs/Web/API/CSSImportRule/styleSheet) {{ReadOnlyInline}}
  - : Gibt das zugehörige Stylesheet zurück.
- [`CSSImportRule.supportsText`](/de/docs/Web/API/CSSImportRule/supportsText) {{ReadOnlyInline}}
  - : Gibt die Support-Bedingung zurück, die von der {{cssxref("@import")}}-Regel angegeben wird.

## Instanz-Methoden

_Erbt Methoden von ihrem Vorfahren [`CSSRule`](/de/docs/Web/API/CSSRule)._

## Beispiele

Das Dokument enthält ein einziges Stylesheet, welches eine einzige {{cssxref("@import")}}-Regel enthält. Daher ist das erste Element in der Liste der CSS-Regeln eine `CSSImportRule`.

```css
@import url("style.css") screen;
```

```js
const myRules = document.styleSheets[0].cssRules;
console.log(myRules[0]); // A CSSImportRule instance object
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
