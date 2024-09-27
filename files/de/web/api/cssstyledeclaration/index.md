---
title: CSSStyleDeclaration
slug: Web/API/CSSStyleDeclaration
l10n:
  sourceCommit: 474a7c0e7bbb5f89b6dcc15cff75f06338457da2
---

{{APIRef("CSSOM")}}

Das **`CSSStyleDeclaration`**-Interface repräsentiert ein Objekt, das einen CSS-Deklarationsblock darstellt und Stilinformationen sowie verschiedene stilbezogene Methoden und Eigenschaften bereitstellt.

Ein `CSSStyleDeclaration`-Objekt kann über drei verschiedene APIs bereitgestellt werden:

- Über [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style), das sich mit den Inline-Stilen eines einzelnen Elements befasst (z.B. `<div style="…">`).
- Über die [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-API. Zum Beispiel liefert `document.styleSheets[0].cssRules[0].style` ein `CSSStyleDeclaration`-Objekt für die erste CSS-Regel im ersten Stylesheet des Dokuments.
- Über [`Window.getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle), die das `CSSStyleDeclaration`-Objekt als **schreibgeschütztes** Interface bereitstellt.

## Attribute

- [`CSSStyleDeclaration.cssText`](/de/docs/Web/API/CSSStyleDeclaration/cssText)
  - : Textuelle Darstellung des Deklarationsblocks, wenn und nur wenn sie über [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style) bereitgestellt wird. Durch das Setzen dieses Attributs ändert sich der Inline-Stil. Wenn Sie eine textuelle Darstellung eines berechneten Deklarationsblocks wünschen, können Sie diese mit `JSON.stringify()` erhalten.
- [`CSSStyleDeclaration.length`](/de/docs/Web/API/CSSStyleDeclaration/length) {{ReadOnlyInline}}
  - : Die Anzahl der Eigenschaften. Siehe die Methode [`item()`](/de/docs/Web/API/CSSStyleDeclaration/item) unten.
- [`CSSStyleDeclaration.parentRule`](/de/docs/Web/API/CSSStyleDeclaration/parentRule) {{ReadOnlyInline}}
  - : Die enthaltende [`CSSRule`](/de/docs/Web/API/CSSRule).

### CSS-Eigenschaften

- [`CSSStyleDeclaration.cssFloat`](/de/docs/Web/API/CSSStyleDeclaration/cssFloat)
  - : Spezieller Alias für die {{CSSxRef("float")}}-CSS-Eigenschaft.
- `CSSStyleDeclaration` benannte Eigenschaften
  - : Mit Bindestrich versehene und in Camel-Case geschriebene Attribute für alle unterstützten CSS-Eigenschaften.

## Instanzmethoden

- [`CSSStyleDeclaration.getPropertyPriority()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyPriority)
  - : Gibt die optionale Priorität "important" zurück.
- [`CSSStyleDeclaration.getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue)
  - : Gibt den Eigenschaftswert für einen gegebenen Eigenschaftsnamen zurück.
- [`CSSStyleDeclaration.item()`](/de/docs/Web/API/CSSStyleDeclaration/item)
  - : Gibt einen CSS-Eigenschaftsnamen durch seinen Index zurück oder den leeren String, wenn der Index außerhalb der Grenze liegt.
- [`CSSStyleDeclaration.removeProperty()`](/de/docs/Web/API/CSSStyleDeclaration/removeProperty)
  - : Entfernt eine Eigenschaft aus dem CSS-Deklarationsblock.
- [`CSSStyleDeclaration.setProperty()`](/de/docs/Web/API/CSSStyleDeclaration/setProperty)
  - : Ändert eine bestehende CSS-Eigenschaft oder erstellt eine neue CSS-Eigenschaft im Deklarationsblock.
- [`CSSStyleDeclaration.getPropertyCSSValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyCSSValue) {{deprecated_inline}}
  - : **Nur in Firefox über getComputedStyle unterstützt.** Gibt den Eigenschaftswert als [`CSSPrimitiveValue`](/de/docs/Web/API/CSSPrimitiveValue) oder `null` für [Shorthand-Eigenschaften](/de/docs/Web/CSS/Shorthand_properties) zurück.

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
