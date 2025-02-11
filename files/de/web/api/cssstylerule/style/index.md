---
title: "CSSStyleRule: style-Eigenschaft"
short-title: style
slug: Web/API/CSSStyleRule/style
l10n:
  sourceCommit: 5c0d26f70b80e5511496f49cb5dc0405de98c562
---

{{ APIRef("CSSOM") }}

Die schreibgeschützte **`style`**-Eigenschaft ist die Schnittstelle [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) für den Deklarationsblock der [`CSSStyleRule`](/de/docs/Web/API/CSSStyleRule).

## Wert

Ein [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Objekt mit den folgenden Eigenschaften:

- computed flag
  - : Nicht gesetzt.
- declarations
  - : Die deklarierten Deklarationen in der Regel, in der Reihenfolge, in der sie angegeben wurden, wobei Kurzform-Eigenschaften in Langformen aufgelöst werden.
- parent CSS rule
  - : Das Kontextobjekt, welches ein Alias für [this](https://heycam.github.io/webidl/#this) ist.
- owner node
  - : Null.

## Beispiele

Das CSS enthält eine Style-Regel. Dies wird die erste [`CSSRule`](/de/docs/Web/API/CSSRule) sein, die von `document.styleSheets[0].cssRules` zurückgegeben wird.
`myRules[0].style` gibt daher ein [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Objekt zurück, das die für `h1` definierten Deklarationen darstellt.

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
> Der Deklarationsblock ist der Teil der Stilregel, der in den geschweiften Klammern steht und tatsächlich die Stildefinitionen bereitstellt (für den Selektor, der Teil, der vor den geschweiften Klammern steht).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
