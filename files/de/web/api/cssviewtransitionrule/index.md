---
title: CSSViewTransitionRule
slug: Web/API/CSSViewTransitionRule
l10n:
  sourceCommit: baf0cb6bfe8bf2418122300d3f93e3aa94f72dca
---

{{APIRef("CSSOM")}}

Die **`CSSViewTransitionRule`** Schnittstelle repräsentiert eine CSS {{cssxref("@view-transition")}} [At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von ihrem Vorfahren, [`CSSRule`](/de/docs/Web/API/CSSRule)._

- [`navigation`](/de/docs/Web/API/CSSViewTransitionRule/navigation) {{readonlyinline}}
  - : Gibt den `navigation`-Deskriptorwert der `@view-transition` At-Regel zurück.
- [`types`](/de/docs/Web/API/CSSViewTransitionRule/types) {{readonlyinline}}
  - : Gibt ein Array zurück, das die `types`-Deskriptorwerte der `@view-transition` At-Regel enthält.

## Instanz-Methoden

_Erbt Methoden von ihrem Vorfahren, [`CSSRule`](/de/docs/Web/API/CSSRule)._

## Beispiele

### Grundlegende Nutzung

Ein Stylesheet beinhaltet eine {{cssxref("@view-transition")}} [At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules), mit den Deskriptoren `navigation` und `types` gesetzt:

```css
@view-transition {
  navigation: auto;
  types: slide, rotate;
}
```

Im Skript holen wir eine Referenz zur `@view-transition` At-Regel mittels `document.styleSheets[0].cssRules`, dann loggen wir das entsprechende `CSSViewTransitionRule` Objekt und seine `navigation`- und `types`-Eigenschaften in die Konsole. Die `types`-Eigenschaft gibt ein Array zurück, das die für den `types`-Deskriptor gesetzten Werte enthält.

```js
let myRule = document.styleSheets[0].cssRules;
console.log(myRule[0]); // a CSSViewTransitionRule representing the @view-transition at-rule
console.log(myRule[0].navigation); // "auto"
console.log(myRule[0].types); // ["slide", "rotate"]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("@view-transition")}}
- [View Transition API](/de/docs/Web/API/View_Transition_API)
