---
title: "CSSStyleRule: style-Eigenschaft"
short-title: style
slug: Web/API/CSSStyleRule/style
l10n:
  sourceCommit: c053b4b3bb0f34736e9f4402d4254830670af723
---

{{ APIRef("CSSOM") }}

Die schreibgeschützte **`style`**-Eigenschaft der [`CSSStyleRule`](/de/docs/Web/API/CSSStyleRule)-Schnittstelle enthält ein [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties)-Objekt, das die Eigenschaftenliste im Körper dieser Stilregel darstellt.

Jede vom Browser unterstützte [CSS-Eigenschaft](/de/docs/Web/CSS/Reference/Properties) ist im Objekt vorhanden. Die Eigenschaften, die nicht inline in der entsprechenden CSS-Deklaration definiert sind, werden auf den leeren String (`""`) gesetzt.

## Wert

Ein [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties)-Objekt.

> [!NOTE]
> Frühere Versionen der Spezifikation gaben ein [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) zurück, das jetzt die Basisklasse von [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties) ist.
> Siehe die Tabelle zur [Browser-Kompatibilität](#browser-kompatibilität) für Informationen zur Browser-Unterstützung.

Obwohl die `style`-Eigenschaft selbst in dem Sinne schreibgeschützt ist, dass Sie das `CSSStyleProperties`-Objekt nicht ersetzen können, können Sie der `style`-Eigenschaft direkt Werte zuweisen, was dem Zuweisen zur [`cssText`](/de/docs/Web/API/CSSStyleDeclaration/cssText)-Eigenschaft entspricht. Sie können das `CSSStyleProperties`-Objekt auch mit den Methoden [`setProperty()`](/de/docs/Web/API/CSSStyleDeclaration/setProperty) und [`removeProperty()`](/de/docs/Web/API/CSSStyleDeclaration/removeProperty) modifizieren.

## Beispiele

### Abrufen der Stile für eine Stilregel

Das untenstehende CSS definiert die Stilregel für den `h1`-Selektor, der im Code durch eine Instanz von [`CSSStyleRule`](/de/docs/Web/API/CSSStyleRule) dargestellt wird. Der Deklarationsblock ist der Teil der Stilregel, der innerhalb der geschweiften Klammern erscheint und tatsächlich die Stildefinitionen bereitstellt (für den Selektor, der Teil, der vor den Klammern kommt), der im Code durch die `style`-Eigenschaft dargestellt wird.

```css
h1 {
  color: pink;
}
```

Angenommen, die obige Stilregel ist die erste Regel im Dokument, wird sie die erste von `document.styleSheets[0].cssRules` zurückgegebene [`CSSRule`](/de/docs/Web/API/CSSRule) sein. `myRules[0].style` gibt ein [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties)-Objekt zurück, das die für `h1` definierten Deklarationen darstellt.

```js
const myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].style); // a CSSStyleProperties representing the declarations on the h1.
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
