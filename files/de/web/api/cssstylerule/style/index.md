---
title: "CSSStyleRule: style-Eigenschaft"
short-title: style
slug: Web/API/CSSStyleRule/style
l10n:
  sourceCommit: 231152e9a749aaeba8de45f4cc712845a470dda9
---

{{ APIRef("CSSOM") }}

Die schreibgeschützte **`style`**-Eigenschaft ist ein [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties)-Objekt, das die Inline-Stile einer Stilregel ([`CSSStyleRule`](/de/docs/Web/API/CSSStyleRule)) repräsentiert.

Beachten Sie, dass Eigenschaften, die auf dem Objekt für alle vom Browser unterstützten [CSS-Eigenschaften](/de/docs/Web/CSS/Properties) vorhanden sind.
Die Eigenschaften, die nicht inline in der entsprechenden CSS-Deklaration definiert sind, werden auf den leeren String (`""`) gesetzt.

## Wert

Ein [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties).

> [!NOTE]
> Frühere Versionen der Spezifikation gaben eine [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) zurück, welche jetzt die Basisklasse von [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties) ist.
> Siehe die Tabelle zur [Browser-Kompatibilität](#browser-kompatibilität) für Informationen zur Browserunterstützung.

## Beispiele

### Abrufen der Stile für eine Stilregel

Das untenstehende CSS definiert die Stilregel für den `h1`-Selektor, der im Code durch eine [`CSSStyleRule`](/de/docs/Web/API/CSSStyleRule)-Instanz repräsentiert wird.
Der Deklarationsblock ist der Teil der Stilregel, der innerhalb der geschweiften Klammern erscheint und tatsächlich die Stildefinitionen bereitstellt (für den Selektor, der Teil, der vor den geschweiften Klammern kommt), der im Code von der `style`-Eigenschaft repräsentiert wird.

```css
h1 {
  color: pink;
}
```

Angenommen, die obige Stilregel ist die erste Regel im Dokument, dann wird sie die erste von `document.styleSheets[0].cssRules` zurückgegebene [`CSSRule`](/de/docs/Web/API/CSSRule) sein.
`myRules[0].style` gibt ein [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties)-Objekt zurück, das die für `h1` definierten Deklarationen repräsentiert.

```js
const myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].style); // a CSSStyleProperties representing the declarations on the h1.
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
