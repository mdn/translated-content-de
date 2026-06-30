---
title: CSSStyleDeclaration
slug: Web/API/CSSStyleDeclaration
l10n:
  sourceCommit: 44a5fa2aace490e0114349d9d683675b2f5cacce
---

{{APIRef("CSSOM")}}

Das **`CSSStyleDeclaration`**-Interface ist die Basisklasse für Objekte, die CSS-Deklarationsblöcke mit verschiedenen unterstützten Sets von CSS-Style-Informationen darstellen:

- [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties) — CSS-Styles, die in einem Stylesheet deklariert sind ([`CSSStyleRule.style`](/de/docs/Web/API/CSSStyleRule/style)), Inline-Styles für ein Element wie [`HTMLElement`](/de/docs/Web/API/HTMLElement/style), [`SVGElement`](/de/docs/Web/API/SVGElement/style) und [`MathMLElement`](/de/docs/Web/API/MathMLElement/style) oder den berechneten Stil für ein Element, der von [`Window.getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle) zurückgegeben wird.
- [`CSSPageDescriptors`](/de/docs/Web/API/CSSPageDescriptors) — Styles für CSS-[at-rules](/de/docs/Web/CSS/Guides/Syntax/At-rules).

Das Interface stellt Stil-Informationen sowie verschiedene methoden- und eigenschaftsbezogene Methoden bereit. Zum Beispiel bietet es [`getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue) an, um den Wert einer CSS-Eigenschaft mit Bindestrich im Namen, wie z.B. `border-top`, abzurufen, die nicht direkt per Punktnotation angesprochen werden kann, da sie Bindestriche im Namen enthält.

> [!NOTE]
> Frühere Versionen der Spezifikation verwendeten `CSSStyleDeclaration`, um alle CSS-Deklarationsblöcke darzustellen, und einige Browser und Browserversionen könnten dies immer noch tun (prüfen Sie die Browser-Kompatibilitätstabellen für die oben genannten APIs). In der Regel wird derselbe Website-Code sowohl in alten als auch in neuen Versionen funktionsfähig sein, aber einige Eigenschaften, die in einem `CSSStyleDeclaration` zurückgegeben werden, könnten in einem bestimmten Kontext nicht relevant sein.

## Attribute

- [`CSSStyleDeclaration.cssText`](/de/docs/Web/API/CSSStyleDeclaration/cssText)
  - : Textuelle Darstellung des Deklarationsblocks, wenn und nur wenn er über [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style) zugänglich ist. Das Setzen dieses Attributs verändert den Inline-Stil. Wenn Sie eine Textdarstellung eines berechneten Deklarationsblocks wünschen, können Sie diese mit `JSON.stringify()` erhalten.
- [`CSSStyleDeclaration.length`](/de/docs/Web/API/CSSStyleDeclaration/length) {{ReadOnlyInline}}
  - : Die Anzahl der Eigenschaften. Siehe die [`item()`](/de/docs/Web/API/CSSStyleDeclaration/item)-Methode unten.
- [`CSSStyleDeclaration.parentRule`](/de/docs/Web/API/CSSStyleDeclaration/parentRule) {{ReadOnlyInline}}
  - : Die enthaltende [`CSSRule`](/de/docs/Web/API/CSSRule).

### CSS-Eigenschaften

- [`CSSStyleDeclaration.cssFloat`](/de/docs/Web/API/CSSStyleDeclaration/cssFloat) {{deprecated_inline}}
  - : Spezieller Alias für die {{CSSxRef("float")}} CSS-Eigenschaft.
- `CSSStyleDeclaration` benannte Eigenschaften
  - : In Bindestrich- und Camel-Case-Schreibweise für alle unterstützten CSS-Eigenschaften.

## Instanzmethoden

- [`CSSStyleDeclaration.getPropertyPriority()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyPriority)
  - : Gibt die optionale Priorität "important" zurück.
- [`CSSStyleDeclaration.getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue)
  - : Gibt den Eigenschaftswert für einen Eigenschaftsnamen zurück.
- [`CSSStyleDeclaration.item()`](/de/docs/Web/API/CSSStyleDeclaration/item)
  - : Gibt einen CSS-Eigenschaftsnamen anhand seines Indexes zurück oder einen leeren String, wenn der Index außerhalb der Grenzen liegt.
- [`CSSStyleDeclaration.removeProperty()`](/de/docs/Web/API/CSSStyleDeclaration/removeProperty)
  - : Entfernt eine Eigenschaft aus dem CSS-Deklarationsblock.
- [`CSSStyleDeclaration.setProperty()`](/de/docs/Web/API/CSSStyleDeclaration/setProperty)
  - : Ändert eine bestehende CSS-Eigenschaft oder erstellt eine neue CSS-Eigenschaft im Deklarationsblock.
- [`CSSStyleDeclaration.getPropertyCSSValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyCSSValue) {{deprecated_inline}} {{non-standard_inline}}
  - : **Nur über getComputedStyle in Firefox unterstützt.** Gibt den Eigenschaftswert als [`CSSPrimitiveValue`](/de/docs/Web/API/CSSPrimitiveValue) oder `null` für [Kurzschrift-Eigenschaften](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) zurück.

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
