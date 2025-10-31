---
title: "Window: getComputedStyle() Methode"
short-title: getComputedStyle()
slug: Web/API/Window/getComputedStyle
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{APIRef("CSSOM")}}

Die **`Window.getComputedStyle()`** Methode gibt ein Live-Read-Only [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties) Objekt zurück, das die [aufgelösten Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#resolved_value) aller CSS-Eigenschaften eines Elements enthält, nachdem aktive Stylesheets angewendet und alle Berechnungen dieser Werte aufgelöst wurden.

## Syntax

```js-nolint
getComputedStyle(element)
getComputedStyle(element, pseudoElt)
```

### Parameter

- `element`
  - : Das [`Element`](/de/docs/Web/API/Element), für das der berechnete Stil abgerufen werden soll.
- `pseudoElt` {{optional_inline}}
  - : Ein String, der das Pseudo-Element angibt, das übereinstimmen soll.
    Für reale Elemente weglassen (oder `null`).

### Rückgabewert

Ein _Live_ [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties) Objekt, das sich automatisch aktualisiert, wenn die Stile des Elements geändert werden.

> [!NOTE]
> Frühere Versionen der Spezifikation gaben ein [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) zurück (von dem [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties) abgeleitet ist).
> Sehen Sie die [Browser-Kompatibilität](#browser-kompatibilität) Tabelle für Informationen zur Browser-Unterstützung.

> [!WARNING]
> Zurückgegebene Werte sind manchmal absichtlich ungenau.
> Um das Sicherheitsproblem der „CSS History Leak“ zu vermeiden, können Browser über die berechneten Stile für einen besuchten Link lügen, indem sie Werte zurückgeben, als ob der Benutzer die verlinkte URL nie besucht hätte.
> Siehe [Plugging the CSS history leak](https://blog.mozilla.org/security/2010/03/31/plugging-the-css-history-leak/) und [Privacy-related changes coming to CSS `:visited`](https://hacks.mozilla.org/2010/03/privacy-related-changes-coming-to-css-vistited/) für Beispiele, wie dies umgesetzt wird.

### Ausnahmen

- {{JSxRef("TypeError")}}
  - : Wenn das übergebene Objekt kein [`Element`](/de/docs/Web/API/Element) ist oder `pseudoElt` kein gültiger Pseudo-Element-Selektor ist oder {{CSSxRef("::part", "::part()")}} oder {{CSSxRef("::slotted", "::slotted()")}} ist.

    > [!NOTE]
    > Ein gültiger Pseudo-Element-Selektor bezieht sich auf die syntaktische Gültigkeit, z.B. wird `::unsupported` als gültig angesehen, auch wenn das Pseudo-Element selbst nicht unterstützt wird.

## Beschreibung

Die Methode gibt ein Live-Read-Only [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties) Objekt zurück, das die [aufgelösten Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#resolved_value) aller CSS-Eigenschaften eines Elements enthält, nachdem aktive Stylesheets angewendet und alle Berechnungen dieser Werte aufgelöst wurden.

Das zurückgegebene Objekt kann verwendet werden, um die Stile des Elements zu überprüfen — einschließlich derjenigen, die inline, mit einem `<style>`-Element oder über ein externes Stylesheet gesetzt wurden.
Da das Objekt schreibgeschützt ist, können Sie es nicht verwenden, um die Stile eines Elements zu setzen.
Da es jedoch "live" ist, wird das zurückgegebene Objekt bei Aktualisierung der Elementstile über eine andere API (wie [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style)) mit dem entsprechenden aufgelösten Wert aktualisiert.

Die Unterscheidung, dass das Objekt [aufgelöste Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#resolved_value) enthält, ist wichtig.
Für die meisten Eigenschaften, insbesondere diejenigen, die von Layouts abhängen, wie `display`, `font-size` oder `line-height`, ist der aufgelöste Wert der berechnete Wert.
Für Eigenschaften, die vom Layout abhängen, kann sich der verwendete Wert geringfügig vom berechneten Wert unterscheiden, und dies ist der aufgelöste Wert.
Für einen animierten Eigenschaftswert ist es der berechnete Wert zum aktuellen Zeitpunkt der Animation.

Das zurückgegebene Objekt verfügt über Properties mit Bindestrich-Namen und entsprechenden {{Glossary("camel_case", "Camel-Case")}} Eigenschaftsnamen für **alle** [CSS-Eigenschaften](/de/docs/Web/CSS/Reference/Properties), die vom Browser unterstützt werden, einschließlich sowohl [Shorthand](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) als auch Langform-Eigenschaften.

Shorthand CSS-Eigenschaften des Elements werden in ihre entsprechenden Langform-Eigenschaften erweitert.
Zum Beispiel würde ein Element mit dem Stil `"border-top: 1px solid black"` im zurückgegebenen Objekt durch Eigenschaften mit den Namen {{cssxref("border-top")}} und `borderTop` sowie die entsprechenden Langform-Eigenschaften {{cssxref("border-top-color")}} und `borderTopColor`, {{cssxref("border-top-style")}} und `borderTopStyle`, und {{cssxref("border-top-width")}} und `borderTopWidth` repräsentiert.

Beachten Sie, dass das zurückgegebene Objekt vom gleichen Typ ist wie das Objekt, das von der [`style`](/de/docs/Web/API/HTMLElement/style) Eigenschaft des Elements zurückgegeben wird.
Allerdings kann das `element.style` Objekt auch verwendet werden, um Stile auf diesem Element zu **setzen**, und gibt nur die Inline-Stile oder diejenigen, die über JavaScript gesetzt wurden, zurück.

### Farbwerte

Aus Kompatibilitätsgründen werden serialisierte Farbwerte, die im traditionellen sRGB-Farbraum angegeben sind, als [`rgb()`](/de/docs/Web/CSS/color_value/rgb) Farben ausgedrückt, wenn der Alpha-Kanal-Wert genau `1` ist, und als `rgba()` Farben andernfalls.
Die Legacy-Syntax mit Kommas wird verwendet, mit Kommas als Trennzeichen (zum Beispiel `rgb(255, 0, 0)`).

Für andere {{Glossary("color_space", "Farbräume")}} werden die Werte mit Hilfe der entsprechenden funktionalen Ausdrücke serialisiert: [`lab()`](/de/docs/Web/CSS/color_value/lab), [`lch()`](/de/docs/Web/CSS/color_value/lch) [`oklab()`](/de/docs/Web/CSS/color_value/oklab), [`oklch()`](/de/docs/Web/CSS/color_value/oklch), [`color()`](/de/docs/Web/CSS/color_value/color).

## Beispiele

### Abrufen aufgelöster Stile

In diesem Beispiel stylen wir ein {{HTMLElement("p")}} Element, rufen dann diese Stile mit `getComputedStyle()` ab und drucken sie in den Textinhalt des `<p>`.

#### HTML

```html
<p>Hello</p>
```

#### CSS

```css
p {
  width: 400px;
  margin: 0 auto;
  padding: 20px;
  font: 2rem/2 sans-serif;
  text-align: center;
  background: purple;
  color: white;
}
```

#### JavaScript

```js
const para = document.querySelector("p");
const compStyles = window.getComputedStyle(para);
para.textContent =
  `My computed font-size is ${compStyles.getPropertyValue("font-size")},\n` +
  `and my computed line-height is ${compStyles.getPropertyValue(
    "line-height",
  )}.`;
```

#### Ergebnis

{{EmbedLiveSample('retrieving_resolved_styles', '100%', '240px')}}

### Verwendung mit Pseudo-Elementen

`getComputedStyle()` kann Stilinformationen von [Pseudo-Elementen](/de/docs/Web/CSS/Pseudo-elements) wie `::after`, `::before`, `::marker` oder `::line-marker` abrufen.

```html
<h3>Generated content</h3>
```

```css
h3::after {
  content: " rocks!";
}
```

```js
const h3 = document.querySelector("h3");
const result = getComputedStyle(h3, "::after").content;

console.log("the generated content is: ", result); // returns ' rocks!'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`window.getDefaultComputedStyle()`](/de/docs/Web/API/Window/getDefaultComputedStyle)
- [`getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue)
- [`Element.computedStyleMap()`](/de/docs/Web/API/Element/computedStyleMap)
- [Aufgelöster Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#resolved_value)
