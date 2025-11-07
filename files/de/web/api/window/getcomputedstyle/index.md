---
title: "Window: getComputedStyle() Methode"
short-title: getComputedStyle()
slug: Web/API/Window/getComputedStyle
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

{{APIRef("CSSOM")}}

Die **`Window.getComputedStyle()`** Methode gibt ein dynamisches, schreibgeschütztes [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties) Objekt zurück, das die [aufgelösten Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#resolved_value) aller CSS-Eigenschaften eines Elements enthält, nachdem aktive Stylesheets angewendet und alle Berechnungen dieser Werte durchgeführt wurden.

## Syntax

```js-nolint
getComputedStyle(element)
getComputedStyle(element, pseudoElt)
```

### Parameter

- `element`
  - : Das [`Element`](/de/docs/Web/API/Element), für das der berechnete Stil abgerufen werden soll.
- `pseudoElt` {{optional_inline}}
  - : Ein String, der das zuzuordnende Pseudo-Element angibt.
    Weggelassen (oder `null`) für reale Elemente.

### Rückgabewert

Ein _dynamisches_ [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties) Objekt, das sich automatisch aktualisiert, wenn die Stile des Elements geändert werden.

> [!NOTE]
> Frühere Versionen der Spezifikation gaben ein [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) zurück (von dem [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties) abgeleitet ist).
> Siehe die [Browser-Kompatibilität](#browser-kompatibilität) für Informationen zur Browserunterstützung.

> [!WARNING]
> Zurückgegebene Werte sind manchmal absichtlich ungenau.
> Um das Sicherheitsproblem "CSS History Leak" zu vermeiden, können Browser fälschlicherweise über die berechneten Stile für einen besuchten Link berichten, indem sie Werte zurückgeben, als ob der Benutzer die verlinkte URL nie besucht hätte.
> Siehe [Plugging the CSS history leak](https://blog.mozilla.org/security/2010/03/31/plugging-the-css-history-leak/) und [Privacy-related changes coming to CSS `:visited`](https://hacks.mozilla.org/2010/03/privacy-related-changes-coming-to-css-vistited/) für Beispiele, wie dies implementiert wird.

### Ausnahmen

- {{JSxRef("TypeError")}}
  - : Wenn das übergebene Objekt kein [`Element`](/de/docs/Web/API/Element) ist oder `pseudoElt` kein gültiger Pseudo-Element Selektor ist oder {{CSSxRef("::part", "::part()")}} oder {{CSSxRef("::slotted", "::slotted()")}} ist.

    > [!NOTE]
    > Ein gültiger Pseudo-Element Selektor bezieht sich auf die syntaktische Gültigkeit, z.B. wird `::unsupported` als gültig angesehen, auch wenn das Pseudo-Element selbst nicht unterstützt wird.

## Beschreibung

Die Methode liefert ein dynamisches, schreibgeschütztes [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties) Objekt, das die [aufgelösten Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#resolved_value) aller CSS-Eigenschaften eines Elements enthält, nachdem aktive Stylesheets angewendet und alle Berechnungen dieser Werte durchgeführt wurden.

Das zurückgegebene Objekt kann verwendet werden, um die Stile des Elements zu inspizieren — einschließlich derer, die inline, mit einem `<style>` Element oder über ein externes Stylesheet gesetzt wurden.
Da das Objekt schreibgeschützt ist, kann es nicht verwendet werden, um die Stile eines Elements zu setzen.
Da es jedoch "dynamisch" ist, wird das zurückgegebene Objekt beim Aktualisieren der Elementstile über eine andere API (wie [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style)) mit dem entsprechenden aufgelösten Wert aktualisiert.

Die Unterscheidung, dass das Objekt [aufgelöste Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#resolved_value) enthält, ist wichtig.
Für die meisten Eigenschaften, insbesondere solche, die von der Gestaltung abhängen, wie `display`, `font-size` oder `line-height`, ist der aufgelöste Wert der berechnete Wert.
Für Eigenschaften, die von der Gestaltung abhängig sind, kann der verwendete Wert geringfügig vom berechneten Wert abweichen, und dies ist es, was als aufgelöster Wert zurückgegeben wird.
Für einen animierten Eigenschaftenwert ist es der berechnete Wert zum aktuellen Punkt der Animation.

Das zurückgegebene Objekt enthält Eigenschaften mit Bindestrichnamen und entsprechenden {{Glossary("camel_case", "camel-case")}} Namen für **alle** vom Browser unterstützten [CSS-Eigenschaften](/de/docs/Web/CSS/Reference/Properties), einschließlich sowohl [Kurzform-](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) als auch Langform-Eigenschaften.

Kurzform CSS-Eigenschaften des Elements werden in ihre entsprechenden Langform-Eigenschaften aufgeschlüsselt.
Zum Beispiel würde ein Element mit dem Stil `"border-top: 1px solid black"` im zurückgegebenen Objekt durch Eigenschaften mit den Namen {{cssxref("border-top")}} und `borderTop`, und den entsprechenden Langform-Eigenschaften {{cssxref("border-top-color")}} und `borderTopColor`, {{cssxref("border-top-style")}} und `borderTopStyle`, sowie {{cssxref("border-top-width")}} und `borderTopWidth` dargestellt werden.

Beachten Sie, dass das zurückgegebene Objekt vom gleichen Typ ist wie das Objekt, das aus der `style`-Eigenschaft des Elements zurückgegeben wird.
Jedoch kann das `element.style`-Objekt auch verwendet werden, um **Stile** auf diesem Element zu setzen, und es gibt lediglich die Inline-Stile oder jene, die über JavaScript gesetzt wurden, zurück.

### Farbwerte

Aus Kompatibilitätsgründen werden serialisierte Farbwerte, die mit dem traditionellen sRGB-Farbraum angegeben werden, als [`rgb()`](/de/docs/Web/CSS/Reference/Values/color_value/rgb) Farben ausgedrückt, wenn der Alpha-Kanalwert genau `1` ist, und `rgba()` Farben andernfalls.
Die veraltete Syntax mit Kommata wird verwendet, mit Kommata als Trennzeichen (zum Beispiel `rgb(255, 0, 0)`).

Für andere {{Glossary("color_space", "Farbräume")}} werden die Werte unter Verwendung der entsprechenden Funktional-Ausdrücke serialisiert: [`lab()`](/de/docs/Web/CSS/Reference/Values/color_value/lab), [`lch()`](/de/docs/Web/CSS/Reference/Values/color_value/lch), [`oklab()`](/de/docs/Web/CSS/Reference/Values/color_value/oklab), [`oklch()`](/de/docs/Web/CSS/Reference/Values/color_value/oklch), [`color()`](/de/docs/Web/CSS/Reference/Values/color_value/color).

## Beispiele

### Abrufen von aufgelösten Stilen

In diesem Beispiel stylen wir ein {{HTMLElement("p")}} Element, rufen dann diese Stile mit `getComputedStyle()` ab und geben sie in den Textinhalt des `<p>` aus.

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

`getComputedStyle()` kann Stilinformationen von [Pseudo-Elementen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) wie `::after`, `::before`, `::marker` oder `::line-marker` abrufen.

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
