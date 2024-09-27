---
title: "CSSStyleRule: style-Eigenschaft"
short-title: style
slug: Web/API/CSSStyleRule/style
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{ APIRef("CSSOM") }}

Die schreibgeschützte **`style`**-Eigenschaft ist die [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Schnittstelle für den [Deklarationsblock](https://www.w3.org/TR/1998/REC-CSS2-19980512/syndata.html#block) der [`CSSStyleRule`](/de/docs/Web/API/CSSStyleRule).

## Wert

Ein [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Objekt mit den folgenden Eigenschaften:

- computed flag
  - : Nicht gesetzt.
- declarations
  - : Die deklarierten Deklarationen in der Regel, in der Reihenfolge, in der sie angegeben wurden, wobei Kurzform-Eigenschaften in Langformen aufgelöst werden.
- parent CSS rule
  - : Das Kontextobjekt, das ein Alias für [this](https://heycam.github.io/webidl/#this) ist.
- owner node
  - : Null.

## Beispiele

Das CSS enthält eine Stilregel. Dies wird die erste [`CSSRule`](/de/docs/Web/API/CSSRule) sein, die von `document.styleSheets[0].cssRules` zurückgegeben wird. `myRules[0].style` gibt daher ein [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Objekt zurück, das die für `h1` definierten Deklarationen darstellt.

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
> Der Deklarationsblock ist der Teil der Stilregel, der innerhalb der geschweiften Klammern erscheint und der tatsächlich die Stildefinitionen liefert (für den Selektor, den Teil, der vor den geschweiften Klammern erscheint).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
