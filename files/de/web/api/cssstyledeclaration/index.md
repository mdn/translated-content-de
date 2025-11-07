---
title: CSSStyleDeclaration
slug: Web/API/CSSStyleDeclaration
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

{{APIRef("CSSOM")}}

Das **`CSSStyleDeclaration`** Interface ist die Basisklasse für Objekte, die CSS-Deklarationsblöcke mit verschiedenen unterstützten Sätzen von CSS-Stilinformationen repräsentieren:

- [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties) — CSS-Stile, die im Stylesheet deklariert sind ([`CSSStyleRule.style`](/de/docs/Web/API/CSSStyleRule/style)), Inline-Stile für ein Element wie [`HTMLElement`](/de/docs/Web/API/HTMLElement/style), [`SVGElement`](/de/docs/Web/API/SVGElement/style) und [`MathMLElement`](/de/docs/Web/API/MathMLElement/style) oder der berechnete Stil für ein Element, der von [`Window.getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle) zurückgegeben wird.
- [`CSSPageDescriptors`](/de/docs/Web/API/CSSPageDescriptors) — Stile für CSS [At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rules).

Das Interface stellt Stilinformationen und verschiedene stilbezogene Methoden und Eigenschaften zur Verfügung.
Zum Beispiel bietet es [`getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue) an, um den Wert einer dash-benannten CSS-Eigenschaft, wie `border-top`, zu erhalten, die nicht direkt über die Punktnotation zugänglich ist, da sie Bindestriche im Namen enthält.

> [!NOTE]
> Frühere Versionen der Spezifikation verwendeten `CSSStyleDeclaration`, um alle CSS-Deklarationsblöcke darzustellen, und einige Browser und Browserversionen tun dies möglicherweise noch (prüfen Sie die Browser-Kompatibilitätstabellen für die oben genannten APIs).
> Im Allgemeinen wird derselbe Website-Code sowohl in alten als auch in neuen Versionen funktionieren, aber einige in einer `CSSStyleDeclaration` zurückgegebene Eigenschaften könnten in einem bestimmten Kontext nicht relevant sein.

## Attribute

- [`CSSStyleDeclaration.cssText`](/de/docs/Web/API/CSSStyleDeclaration/cssText)
  - : Textdarstellung des Deklarationsblocks, wenn und nur wenn er über [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style) zugänglich ist.
    Das Setzen dieses Attributs ändert den Inline-Stil.
    Wenn Sie eine Textdarstellung eines berechneten Deklarationsblocks möchten, können Sie diese mit `JSON.stringify()` erhalten.
- [`CSSStyleDeclaration.length`](/de/docs/Web/API/CSSStyleDeclaration/length) {{ReadOnlyInline}}
  - : Die Anzahl der Eigenschaften.
    Siehe die Methode [`item()`](/de/docs/Web/API/CSSStyleDeclaration/item) unten.
- [`CSSStyleDeclaration.parentRule`](/de/docs/Web/API/CSSStyleDeclaration/parentRule) {{ReadOnlyInline}}
  - : Die enthaltene [`CSSRule`](/de/docs/Web/API/CSSRule).

### CSS-Eigenschaften

- [`CSSStyleDeclaration.cssFloat`](/de/docs/Web/API/CSSStyleDeclaration/cssFloat) {{deprecated_inline}}
  - : Spezieller Alias für die {{CSSxRef("float")}} CSS-Eigenschaft.
- `CSSStyleDeclaration` benannte Eigenschaften
  - : Mit Bindestrichen und Camel-Cased Attribute für alle unterstützten CSS-Eigenschaften.

## Instanzmethoden

- [`CSSStyleDeclaration.getPropertyPriority()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyPriority)
  - : Gibt die optionale Priorität, "important" zurück.
- [`CSSStyleDeclaration.getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue)
  - : Gibt den Eigenschaftswert für einen gegebenen Eigenschaftsnamen zurück.
- [`CSSStyleDeclaration.item()`](/de/docs/Web/API/CSSStyleDeclaration/item)
  - : Gibt einen CSS-Eigenschaftsnamen anhand seines Indexes zurück oder einen leeren String, wenn der Index außerhalb der Grenzen liegt.
- [`CSSStyleDeclaration.removeProperty()`](/de/docs/Web/API/CSSStyleDeclaration/removeProperty)
  - : Entfernt eine Eigenschaft aus dem CSS-Deklarationsblock.
- [`CSSStyleDeclaration.setProperty()`](/de/docs/Web/API/CSSStyleDeclaration/setProperty)
  - : Modifiziert eine bestehende CSS-Eigenschaft oder erstellt eine neue CSS-Eigenschaft im Deklarationsblock.
- [`CSSStyleDeclaration.getPropertyCSSValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyCSSValue) {{deprecated_inline}}
  - : **Nur über getComputedStyle in Firefox unterstützt.** Gibt den Eigenschaftswert als [`CSSPrimitiveValue`](/de/docs/Web/API/CSSPrimitiveValue) oder `null` für [Kurzschreibweise-Eigenschaften](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) zurück.

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
