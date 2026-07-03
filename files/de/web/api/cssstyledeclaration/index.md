---
title: CSSStyleDeclaration
slug: Web/API/CSSStyleDeclaration
l10n:
  sourceCommit: 8d9cda4e9080e9c324a521f40c7e0704ef94ce07
---

{{APIRef("CSSOM")}}

Das **`CSSStyleDeclaration`** Interface ist die Basisklasse für Objekte, die CSS-Deklarationsblöcke mit unterschiedlichen unterstützten Sets von CSS-Stilinformationen repräsentieren:

- [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties) — CSS-Stile, die im Stylesheet deklariert sind ([`CSSStyleRule.style`](/de/docs/Web/API/CSSStyleRule/style)), Inline-Stile für ein Element wie [`HTMLElement`](/de/docs/Web/API/HTMLElement/style), [`SVGElement`](/de/docs/Web/API/SVGElement/style) und [`MathMLElement`](/de/docs/Web/API/MathMLElement/style), oder der berechnete Stil eines Elements, zurückgegeben durch [`Window.getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle).
- [`CSSPageDescriptors`](/de/docs/Web/API/CSSPageDescriptors) — Stile für CSS [at-rules](/de/docs/Web/CSS/Guides/Syntax/At-rules).

Das Interface bietet Stilinformationen sowie verschiedene stilbezogene Methoden und Eigenschaften. Zum Beispiel bietet es [`getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue) für das Abrufen des Wertes einer mit Bindestrich benannten CSS-Eigenschaft, wie `border-top`, die wegen der Bindestriche im Namen nicht direkt über die Punkt-Notation zugänglich ist.

> [!NOTE]
> Frühere Versionen der Spezifikation nutzten `CSSStyleDeclaration`, um alle CSS-Deklarationsblöcke darzustellen, und einige Browser und Browserversionen tun dies möglicherweise noch (überprüfen Sie die Browser-Kompatibilitätstabellen für die oben genannten APIs).
> Im Allgemeinen wird derselbe Website-Code sowohl in alten als auch in neuen Versionen funktionieren, jedoch könnten einige in einer `CSSStyleDeclaration` zurückgegebene Eigenschaften in einem bestimmten Kontext nicht relevant sein.

## Attribute

- [`CSSStyleDeclaration.cssText`](/de/docs/Web/API/CSSStyleDeclaration/cssText)
  - : Textuelle Darstellung des Deklarationsblocks, wenn und nur wenn er über [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style) exponiert wird.
    Das Setzen dieses Attributs ändert den Inline-Stil.
    Wenn Sie eine Textdarstellung eines berechneten Deklarationsblocks möchten, können Sie diese mit `JSON.stringify()` erhalten.
- [`CSSStyleDeclaration.length`](/de/docs/Web/API/CSSStyleDeclaration/length) {{ReadOnlyInline}}
  - : Die Anzahl der Eigenschaften.
    Siehe die Methode [`item()`](/de/docs/Web/API/CSSStyleDeclaration/item) unten.
- [`CSSStyleDeclaration.parentRule`](/de/docs/Web/API/CSSStyleDeclaration/parentRule) {{ReadOnlyInline}}
  - : Die beinhaltende [`CSSRule`](/de/docs/Web/API/CSSRule).

### CSS-Eigenschaften

- [`CSSStyleDeclaration.cssFloat`](/de/docs/Web/API/CSSStyleDeclaration/cssFloat) {{deprecated_inline}}
  - : Spezieller Alias für die {{CSSxRef("float")}} CSS-Eigenschaft.
- `CSSStyleDeclaration` benannte Eigenschaften
  - : Mit Bindestrich und in Camel-Case geschriebene Attribute für alle unterstützten CSS-Eigenschaften.

## Instanzmethoden

- [`CSSStyleDeclaration.getPropertyPriority()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyPriority)
  - : Gibt die optionale Priorität zurück, "important".
- [`CSSStyleDeclaration.getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue)
  - : Gibt den Eigenschaftswert für einen Eigenschaftsnamen zurück.
- [`CSSStyleDeclaration.item()`](/de/docs/Web/API/CSSStyleDeclaration/item)
  - : Gibt einen CSS-Eigenschaftsnamen nach seinem Index zurück oder einen leeren String, wenn der Index außerhalb des Bereichs liegt.
- [`CSSStyleDeclaration.removeProperty()`](/de/docs/Web/API/CSSStyleDeclaration/removeProperty)
  - : Entfernt eine Eigenschaft aus dem CSS-Deklarationsblock.
- [`CSSStyleDeclaration.setProperty()`](/de/docs/Web/API/CSSStyleDeclaration/setProperty)
  - : Ändert eine vorhandene CSS-Eigenschaft oder erstellt eine neue CSS-Eigenschaft im Deklarationsblock.
- [`CSSStyleDeclaration.getPropertyCSSValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyCSSValue) {{deprecated_inline}} {{non-standard_inline}}
  - : **Nur in Firefox über getComputedStyle unterstützt.** Gibt den Eigenschaftswert als [`CSSPrimitiveValue`](/de/docs/Web/API/CSSPrimitiveValue) oder `null` für [Kurzschreibweise-Eigenschaften](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) zurück.

## Beispiel

```js
const styleObj = document.styleSheets[0].cssRules[0].style;
console.log(styleObj.cssText);

for (let i = styleObj.length; i--;) {
  const nameString = styleObj[i];
  styleObj.removeProperty(nameString);
}

console.log(styleObj.cssText);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
