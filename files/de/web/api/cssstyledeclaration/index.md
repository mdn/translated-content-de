---
title: CSSStyleDeclaration
slug: Web/API/CSSStyleDeclaration
l10n:
  sourceCommit: aa036e35601a5152c7589054550ac6b69fc98aee
---

{{APIRef("CSSOM")}}

Die Schnittstelle **`CSSStyleDeclaration`** repräsentiert ein Objekt, das einen CSS-Deklarationsblock darstellt, und bietet Stilinformationen sowie verschiedene stilbezogene Methoden und Eigenschaften an.

Ein `CSSStyleDeclaration`-Objekt kann über drei verschiedene APIs bereitgestellt werden:

- Über [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style), das mit den Inline-Stilen eines einzelnen Elements arbeitet (z.B. `<div style="…">`).
- Über die [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet) API. Zum Beispiel gibt `document.styleSheets[0].cssRules[0].style` ein `CSSStyleDeclaration`-Objekt der ersten CSS-Regel im ersten Stylesheet des Dokuments zurück.
- Über [`Window.getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle), welches das `CSSStyleDeclaration`-Objekt als eine **schreibgeschützte** Schnittstelle bereitstellt.

## Attribute

- [`CSSStyleDeclaration.cssText`](/de/docs/Web/API/CSSStyleDeclaration/cssText)
  - : Textuelle Darstellung des Deklarationsblocks, und nur wenn es über [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style) bereitgestellt wird. Das Setzen dieses Attributs ändert den Inline-Stil. Wenn Sie eine Textdarstellung eines berechneten Deklarationsblocks wünschen, können Sie dies mit `JSON.stringify()` erhalten.
- [`CSSStyleDeclaration.length`](/de/docs/Web/API/CSSStyleDeclaration/length) {{ReadOnlyInline}}
  - : Die Anzahl der Eigenschaften. Siehe die Methode [`item()`](/de/docs/Web/API/CSSStyleDeclaration/item) unten.
- [`CSSStyleDeclaration.parentRule`](/de/docs/Web/API/CSSStyleDeclaration/parentRule) {{ReadOnlyInline}}
  - : Die enthaltene [`CSSRule`](/de/docs/Web/API/CSSRule).

### CSS-Eigenschaften

- [`CSSStyleDeclaration.cssFloat`](/de/docs/Web/API/CSSStyleDeclaration/cssFloat) {{deprecated_inline}}
  - : Spezieller Alias für die CSS-Eigenschaft {{CSSxRef("float")}}.
- `CSSStyleDeclaration` benannte Eigenschaften
  - : Mit Bindestrich und camel-cased Attribute für alle unterstützten CSS-Eigenschaften.

## Instanzmethoden

- [`CSSStyleDeclaration.getPropertyPriority()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyPriority)
  - : Gibt die optionale Priorität "important" zurück.
- [`CSSStyleDeclaration.getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue)
  - : Gibt den Eigenschaftswert für einen gegebenen Eigenschaftsnamen zurück.
- [`CSSStyleDeclaration.item()`](/de/docs/Web/API/CSSStyleDeclaration/item)
  - : Gibt einen CSS-Eigenschaftsnamen anhand seines Indexes zurück oder einen leeren String, wenn der Index außerhalb der Grenzen liegt.
- [`CSSStyleDeclaration.removeProperty()`](/de/docs/Web/API/CSSStyleDeclaration/removeProperty)
  - : Entfernt eine Eigenschaft aus dem CSS-Deklarationsblock.
- [`CSSStyleDeclaration.setProperty()`](/de/docs/Web/API/CSSStyleDeclaration/setProperty)
  - : Ändert eine bestehende CSS-Eigenschaft oder erstellt eine neue CSS-Eigenschaft im Deklarationsblock.
- [`CSSStyleDeclaration.getPropertyCSSValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyCSSValue) {{deprecated_inline}}
  - : **Nur unterstützt über getComputedStyle in Firefox.** Gibt den Eigenschaftswert als [`CSSPrimitiveValue`](/de/docs/Web/API/CSSPrimitiveValue) oder `null` für [Kurzschreibweise-Eigenschaften](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) zurück.

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
