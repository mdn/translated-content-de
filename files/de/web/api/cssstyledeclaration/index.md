---
title: CSSStyleDeclaration
slug: Web/API/CSSStyleDeclaration
l10n:
  sourceCommit: 7526c9b4f29818bdca7505de41a4883f4ada2707
---

{{APIRef("CSSOM")}}

Das **`CSSStyleDeclaration`** Interface repräsentiert ein Objekt, das ein CSS-Deklarationsblock ist und Stilinformationen sowie verschiedene stilbezogene Methoden und Eigenschaften bereitstellt.

Ein `CSSStyleDeclaration` Objekt kann über drei verschiedene APIs verfügbar gemacht werden:

- Über [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style), welches sich mit den Inline-Stilen eines einzelnen Elements beschäftigt (z. B. `<div style="…">`).
- Über die [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet) API. Zum Beispiel gibt `document.styleSheets[0].cssRules[0].style` ein `CSSStyleDeclaration` Objekt für die erste CSS-Regel im ersten Stylesheet des Dokuments zurück.
- Über [`Window.getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle), welches das `CSSStyleDeclaration` Objekt als eine **schreibgeschützte** Schnittstelle bereitstellt.

## Attribute

- [`CSSStyleDeclaration.cssText`](/de/docs/Web/API/CSSStyleDeclaration/cssText)
  - : Textuelle Darstellung des Deklarationsblocks, sofern und nur sofern es über [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style) verfügbar gemacht wird. Das Setzen dieses Attributs ändert den Inline-Stil. Wenn Sie eine Textdarstellung eines berechneten Deklarationsblocks wünschen, können Sie diese mit `JSON.stringify()` erhalten.
- [`CSSStyleDeclaration.length`](/de/docs/Web/API/CSSStyleDeclaration/length) {{ReadOnlyInline}}
  - : Die Anzahl der Eigenschaften. Siehe die [`item()`](/de/docs/Web/API/CSSStyleDeclaration/item) Methode unten.
- [`CSSStyleDeclaration.parentRule`](/de/docs/Web/API/CSSStyleDeclaration/parentRule) {{ReadOnlyInline}}
  - : Die umgebende [`CSSRule`](/de/docs/Web/API/CSSRule).

### CSS-Eigenschaften

- [`CSSStyleDeclaration.cssFloat`](/de/docs/Web/API/CSSStyleDeclaration/cssFloat)
  - : Spezieller Alias für die {{CSSxRef("float")}} CSS-Eigenschaft.
- `CSSStyleDeclaration` benannte Eigenschaften
  - : Durch Bindestriche getrennte und camel-cased Attribute für alle unterstützten CSS-Eigenschaften.

## Instanzmethoden

- [`CSSStyleDeclaration.getPropertyPriority()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyPriority)
  - : Gibt die optionale Priorität "important" zurück.
- [`CSSStyleDeclaration.getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue)
  - : Gibt den Eigenschaftswert für einen gegebenen Eigenschaftsnamen zurück.
- [`CSSStyleDeclaration.item()`](/de/docs/Web/API/CSSStyleDeclaration/item)
  - : Gibt einen CSS-Eigenschaftsnamen anhand seines Indexes zurück, oder den leeren String, wenn der Index außerhalb des Bereichs liegt.
- [`CSSStyleDeclaration.removeProperty()`](/de/docs/Web/API/CSSStyleDeclaration/removeProperty)
  - : Entfernt eine Eigenschaft aus dem CSS-Deklarationsblock.
- [`CSSStyleDeclaration.setProperty()`](/de/docs/Web/API/CSSStyleDeclaration/setProperty)
  - : Ändert eine bestehende CSS-Eigenschaft oder erstellt eine neue CSS-Eigenschaft im Deklarationsblock.
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
