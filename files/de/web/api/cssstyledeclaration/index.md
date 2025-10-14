---
title: CSSStyleDeclaration
slug: Web/API/CSSStyleDeclaration
l10n:
  sourceCommit: d3bbe8558e181a2b6e04abdedc429fb2a0e4f015
---

{{APIRef("CSSOM")}}

Die **`CSSStyleDeclaration`**-Schnittstelle ist die Basisklasse für Objekte, die CSS-Deklarationsblöcke mit verschiedenen unterstützten Sets von CSS-Stilinformationen darstellen:

- [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties) — CSS-Stile, die im Stylesheet ([`CSSStyleRule.style`](/de/docs/Web/API/CSSStyleRule/style)) deklariert sind, Inline-Stile für ein Element wie [`HTMLElement`](/de/docs/Web/API/HTMLElement/style), [`SVGElement`](/de/docs/Web/API/SVGElement/style) und [`MathMLElement`](/de/docs/Web/API/MathMLElement/style), oder der berechnete Stil für ein Element, das durch [`Window.getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle) zurückgegeben wird.
- [`CSSPageDescriptors`](/de/docs/Web/API/CSSPageDescriptors) — Stile für CSS-[at-rules](/de/docs/Web/CSS/CSS_syntax/At-rule).

Die Schnittstelle stellt Stilinformationen sowie verschiedene stilbezogene Methoden und Eigenschaften bereit. Beispielsweise bietet sie [`getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue) zum Abrufen des Wertes einer Dash-named CSS-Eigenschaft, wie `border-top`, die aufgrund der Bindestriche im Namen nicht direkt über die Punktnotation zugänglich ist.

> [!NOTE]
> Frühere Versionen der Spezifikation verwendeten `CSSStyleDeclaration`, um alle CSS-Deklarationsblöcke darzustellen, und einige Browser und Browserversionen können dies immer noch tun (überprüfen Sie die Browser-Kompatibilitätstabellen für die oben genannten APIs).
> Im Allgemeinen wird derselbe Website-Code sowohl in alten als auch in neuen Versionen funktional sein, aber einige in einer `CSSStyleDeclaration` zurückgegebene Eigenschaften sind möglicherweise nicht in einem bestimmten Kontext relevant.

## Attribute

- [`CSSStyleDeclaration.cssText`](/de/docs/Web/API/CSSStyleDeclaration/cssText)
  - : Textdarstellung des Deklarationsblocks, wenn und nur wenn er über [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style) exponiert ist.
    Das Setzen dieses Attributs ändert den Inline-Stil.
    Wenn Sie eine Textdarstellung eines berechneten Deklarationsblocks wünschen, können Sie diese mit `JSON.stringify()` erhalten.
- [`CSSStyleDeclaration.length`](/de/docs/Web/API/CSSStyleDeclaration/length) {{ReadOnlyInline}}
  - : Die Anzahl der Eigenschaften.
    Siehe die [`item()`](/de/docs/Web/API/CSSStyleDeclaration/item)-Methode unten.
- [`CSSStyleDeclaration.parentRule`](/de/docs/Web/API/CSSStyleDeclaration/parentRule) {{ReadOnlyInline}}
  - : Die enthaltende [`CSSRule`](/de/docs/Web/API/CSSRule).

### CSS Eigenschaften

- [`CSSStyleDeclaration.cssFloat`](/de/docs/Web/API/CSSStyleDeclaration/cssFloat) {{deprecated_inline}}
  - : Spezieller Alias für die {{CSSxRef("float")}} CSS-Eigenschaft.
- `CSSStyleDeclaration`-benannte Eigenschaften
  - : Mit Bindestrich versehene und in CamelCase umgewandelte Attribute für alle unterstützten CSS-Eigenschaften.

## Instanzmethoden

- [`CSSStyleDeclaration.getPropertyPriority()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyPriority)
  - : Gibt die optionale Priorität, "wichtig", zurück.
- [`CSSStyleDeclaration.getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue)
  - : Gibt den Eigenschaftswert zu einem Eigenschaftsnamen zurück.
- [`CSSStyleDeclaration.item()`](/de/docs/Web/API/CSSStyleDeclaration/item)
  - : Gibt einen CSS-Eigenschaftsnamen nach seinem Index zurück oder den leeren String, wenn der Index außerhalb des Bereichs liegt.
- [`CSSStyleDeclaration.removeProperty()`](/de/docs/Web/API/CSSStyleDeclaration/removeProperty)
  - : Entfernt eine Eigenschaft aus dem CSS-Deklarationsblock.
- [`CSSStyleDeclaration.setProperty()`](/de/docs/Web/API/CSSStyleDeclaration/setProperty)
  - : Ändert eine bestehende CSS-Eigenschaft oder erstellt eine neue CSS-Eigenschaft im Deklarationsblock.
- [`CSSStyleDeclaration.getPropertyCSSValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyCSSValue) {{deprecated_inline}}
  - : **Nur unterstützt über getComputedStyle in Firefox.** Gibt den Eigenschaftswert als [`CSSPrimitiveValue`](/de/docs/Web/API/CSSPrimitiveValue) oder `null` für [Shorthand-Eigenschaften](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) zurück.

## Beispiel

```js
const styleObj = document.styleSheets[0].cssRules[0].style;
console.log(styleObj.cssText);

for (let i = styleObj.length; i--; ) {
  const nameString = styleObj[i];
  styleObj.removeProperty(nameString);
}

console.log(styleObj.cssText);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
