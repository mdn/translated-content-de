---
title: CSSViewTransitionRule
slug: Web/API/CSSViewTransitionRule
l10n:
  sourceCommit: b7e9f482c51817d3a885e26092f8219fd0d9d278
---

{{APIRef("CSSOM")}}

Das Interface **`CSSViewTransitionRule`** repräsentiert eine CSS-{{cssxref("@view-transition")}}-[At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules).

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von [`CSSRule`](/de/docs/Web/API/CSSRule)._

- [`navigation`](/de/docs/Web/API/CSSViewTransitionRule/navigation) {{readonlyinline}}
  - : Gibt den Wert des `navigation`-Deskriptors der `@view-transition`-At-Regel zurück.
- [`types`](/de/docs/Web/API/CSSViewTransitionRule/types) {{readonlyinline}}
  - : Gibt ein Array mit den Werten des `types`-Deskriptors der `@view-transition`-At-Regel zurück.

## Instanzmethoden

_Erbt Methoden von [`CSSRule`](/de/docs/Web/API/CSSRule)._

## Beispiele

### Grundlegende Verwendung

Ein Stylesheet enthält eine {{cssxref("@view-transition")}}-[At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules), für die die Deskriptoren `navigation` und `types` festgelegt sind:

```css
@view-transition {
  navigation: auto;
  types: slide rotate;
}
```

Im Skript greifen wir über `document.styleSheets[0].cssRules` auf die `@view-transition`-At-Regel zu und geben das zugehörige `CSSViewTransitionRule`-Objekt sowie seine Eigenschaften `navigation` und `types` in der Konsole aus. Die Eigenschaft `types` gibt ein Array mit den für den `types`-Deskriptor festgelegten Werten zurück.

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
