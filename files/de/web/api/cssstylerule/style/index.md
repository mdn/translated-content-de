---
title: "CSSStyleRule: style-Eigenschaft"
short-title: style
slug: Web/API/CSSStyleRule/style
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{ APIRef("CSSOM") }}

Die schreibgeschützte **`style`**-Eigenschaft ist das {{ domxref("CSSStyleDeclaration") }}-Interface für den [Deklarationsblock](https://www.w3.org/TR/1998/REC-CSS2-19980512/syndata.html#block) der {{ DOMXref("CSSStyleRule") }}.

## Wert

Ein {{domxref("CSSStyleDeclaration")}}-Objekt mit den folgenden Eigenschaften:

- Berechnetes Flag
  - : Nicht gesetzt.
- Deklarationen
  - : Die deklarierten Deklarationen in der Regel, in der Reihenfolge, in der sie angegeben wurden, Kurzschreibweise-Eigenschaften erweitert zu Langschreibweisen.
- Übergeordnete CSS-Regel
  - : Das Kontextobjekt, das ein Alias für [this](https://heycam.github.io/webidl/#this) ist.
- Besitzender Knoten
  - : Null.

## Beispiele

Das CSS enthält eine Stilregel. Dies wird die erste {{domxref("CSSRule")}} sein, die von `document.styleSheets[0].cssRules` zurückgegeben wird.
`myRules[0].style` gibt daher ein {{domxref("CSSStyleDeclaration")}}-Objekt zurück, das die Deklarationen für `h1` repräsentiert.

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
> Der Deklarationsblock ist der Teil der Stilregel, der in den geschweiften Klammern erscheint und tatsächlich die Stildefinitionen bereitstellt (für den Selektor, den Teil, der vor den Klammern kommt).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
