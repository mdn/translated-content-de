---
title: CSSStyleDeclaration
slug: Web/API/CSSStyleDeclaration
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("CSSOM")}}

Das **`CSSStyleDeclaration`** Interface ist die Basisklasse für Objekte, die CSS-Deklarationsblöcke mit unterschiedlichen unterstützten Sätzen von CSS-Stilinformationen repräsentieren:

- [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties) — CSS-Stile, die im Stylesheet ([`CSSStyleRule.style`](/de/docs/Web/API/CSSStyleRule/style)) deklariert sind, Inline-Stile für ein Element wie [`HTMLElement`](/de/docs/Web/API/HTMLElement/style), [`SVGElement`](/de/docs/Web/API/SVGElement/style), und [`MathMLElement`](/de/docs/Web/API/MathMLElement/style), oder der berechnete Stil für ein Element, der durch [`Window.getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle) zurückgegeben wird.
- [`CSSPageDescriptors`](/de/docs/Web/API/CSSPageDescriptors) — Stile für CSS-[at-rules](/de/docs/Web/CSS/Guides/Syntax/At-rules).

Das Interface stellt Stilinformationen sowie verschiedene stilbezogene Methoden und Eigenschaften bereit.
Zum Beispiel bietet es [`getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue), um den Wert einer durch einen Bindestrich benannten CSS-Eigenschaft wie `border-top` zu erhalten, die nicht direkt mit der Punktnotation zugänglich ist, weil sie Bindestriche in ihrem Namen enthält.

> [!NOTE]
> Frühere Versionen der Spezifikation verwendeten `CSSStyleDeclaration`, um alle CSS-Deklarationsblöcke darzustellen, und einige Browser und Browserversionen tun dies möglicherweise immer noch (überprüfen Sie die Browser-Kompatibilitätstabellen für die oben genannten APIs).
> Im Allgemeinen wird derselbe Website-Code sowohl in alten als auch in neuen Versionen funktional sein, aber einige Eigenschaften, die in einem `CSSStyleDeclaration` zurückgegeben werden, sind möglicherweise in einem bestimmten Kontext nicht relevant.

## Attribute

- [`CSSStyleDeclaration.cssText`](/de/docs/Web/API/CSSStyleDeclaration/cssText)
  - : Textuelle Darstellung des Deklarationsblocks, wenn und nur dann, wenn er über [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style) ausgesetzt wird.
    Das Setzen dieses Attributs ändert den Inline-Stil.
    Wenn Sie eine Textdarstellung eines berechneten Deklarationsblocks wünschen, können Sie sie mit `JSON.stringify()` erhalten.
- [`CSSStyleDeclaration.length`](/de/docs/Web/API/CSSStyleDeclaration/length) {{ReadOnlyInline}}
  - : Die Anzahl der Eigenschaften.
    Siehe die Methode [`item()`](/de/docs/Web/API/CSSStyleDeclaration/item) unten.
- [`CSSStyleDeclaration.parentRule`](/de/docs/Web/API/CSSStyleDeclaration/parentRule) {{ReadOnlyInline}}
  - : Die enthaltende [`CSSRule`](/de/docs/Web/API/CSSRule).

### CSS-Eigenschaften

- [`CSSStyleDeclaration.cssFloat`](/de/docs/Web/API/CSSStyleDeclaration/cssFloat) {{deprecated_inline}}
  - : Spezieller Alias für die {{CSSxRef("float")}} CSS-Eigenschaft.
- `CSSStyleDeclaration` benannte Eigenschaften
  - : Mit Bindestrichen und camel-cased Attribute für alle unterstützten CSS-Eigenschaften.

## Instanzmethoden

- [`CSSStyleDeclaration.getPropertyPriority()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyPriority)
  - : Gibt die optionale Priorität "important" zurück.
- [`CSSStyleDeclaration.getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue)
  - : Gibt den Eigenschaftswert für einen Eigenschaftsnamen zurück.
- [`CSSStyleDeclaration.item()`](/de/docs/Web/API/CSSStyleDeclaration/item)
  - : Gibt einen CSS-Eigenschaftsnamen durch seinen Index zurück oder einen leeren String, wenn der Index außerhalb des Bereichs liegt.
- [`CSSStyleDeclaration.removeProperty()`](/de/docs/Web/API/CSSStyleDeclaration/removeProperty)
  - : Entfernt eine Eigenschaft aus dem CSS-Deklarationsblock.
- [`CSSStyleDeclaration.setProperty()`](/de/docs/Web/API/CSSStyleDeclaration/setProperty)
  - : Ändert eine bestehende CSS-Eigenschaft oder erstellt eine neue CSS-Eigenschaft im Deklarationsblock.
- [`CSSStyleDeclaration.getPropertyCSSValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyCSSValue) {{deprecated_inline}}
  - : **Nur unterstützt über getComputedStyle in Firefox.** Gibt den Eigenschaftswert als [`CSSPrimitiveValue`](/de/docs/Web/API/CSSPrimitiveValue) oder `null` für [Shorthand-Eigenschaften](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) zurück.

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
