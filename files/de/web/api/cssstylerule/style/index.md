---
title: "CSSStyleRule: style-Eigenschaft"
short-title: style
slug: Web/API/CSSStyleRule/style
l10n:
  sourceCommit: e488eba036b2fee56444fd579c3759ef45ff2ca8
---

{{ APIRef("CSSOM") }}

Die schreibgeschützte **`style`**-Eigenschaft ist die [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Schnittstelle für den Deklarationsblock der [`CSSStyleRule`](/de/docs/Web/API/CSSStyleRule).

## Wert

Ein [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Objekt mit den folgenden Eigenschaften:

- computed flag
  - : Nicht gesetzt.
- declarations
  - : Die in der Regel deklarierten Deklarationen, in der Reihenfolge, in der sie spezifiziert wurden, mit zusammengefassten Eigenschaften aufgeschlüsselt in Einzelheiten.
- parent CSS rule
  - : Das Kontextobjekt, das ein Alias für [`this`](https://heycam.github.io/webidl/#this) ist.
- owner node
  - : Null.

## Beispiele

Das CSS enthält eine einzige Stilregel. Dies wird die erste [`CSSRule`](/de/docs/Web/API/CSSRule) sein, die von `document.styleSheets[0].cssRules` zurückgegeben wird. `myRules[0].style` gibt daher ein [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Objekt zurück, das die für `h1` definierten Deklarationen darstellt.

```css
h1 {
  color: pink;
}
```

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].style); // a CSSStyleDeclaration representing the declarations on the h1.
```

> [!NOTE]
> Der Deklarationsblock ist der Teil der Stilregel, der in den geschweiften Klammern erscheint und tatsächlich die Stildefinitionen bereitstellt (für den Selektor, den Teil, der vor den Klammern steht).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
