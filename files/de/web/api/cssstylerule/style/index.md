---
title: "CSSStyleRule: style-Eigenschaft"
short-title: style
slug: Web/API/CSSStyleRule/style
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{ APIRef("CSSOM") }}

Die schreibgeschützte **`style`**-Eigenschaft ist ein [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties)-Objekt, das die Inline-Stile einer Stilregel ([`CSSStyleRule`](/de/docs/Web/API/CSSStyleRule)) darstellt.

Beachten Sie, dass Eigenschaften auf dem Objekt für alle vom Browser unterstützten [CSS-Eigenschaften](/de/docs/Web/CSS/Reference/Properties) vorhanden sind. Die Eigenschaften, die nicht inline in der entsprechenden CSS-Deklaration definiert sind, werden auf die leere Zeichenkette (`""`) gesetzt.

## Wert

Ein [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties).

> [!NOTE]
> Frühere Versionen der Spezifikation gaben eine [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) zurück, die jetzt die Basisklasse von [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties) ist.
> Siehe die [Browser-Kompatibilität](#browser-kompatibilität)-Tabelle für Informationen zur Browserunterstützung.

## Beispiele

### Abrufen der Stile für eine Stilregel

Das folgende CSS definiert die Stilregel für den `h1`-Selektor, der im Code durch eine [`CSSStyleRule`](/de/docs/Web/API/CSSStyleRule)-Instanz dargestellt wird.
Der Deklarationsblock ist der Teil der Stilregel, der innerhalb der geschweiften Klammern erscheint und tatsächlich die Stildefinitionen bereitstellt (für den Selektor, der Teil, der vor den Klammern kommt), der im Code durch die `style`-Eigenschaft dargestellt wird.

```css
h1 {
  color: pink;
}
```

Angenommen, die obige Stilregel ist die erste Regel im Dokument, wird sie die erste [`CSSRule`](/de/docs/Web/API/CSSRule) sein, die von `document.styleSheets[0].cssRules` zurückgegeben wird.
`myRules[0].style` gibt ein [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties)-Objekt zurück, das die für `h1` definierten Deklarationen darstellt.

```js
const myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].style); // a CSSStyleProperties representing the declarations on the h1.
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
