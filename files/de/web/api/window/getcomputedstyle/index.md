---
title: "Window: getComputedStyle() Methode"
short-title: getComputedStyle()
slug: Web/API/Window/getComputedStyle
l10n:
  sourceCommit: d3bbe8558e181a2b6e04abdedc429fb2a0e4f015
---

{{APIRef("CSSOM")}}

Die **`Window.getComputedStyle()`**-Methode gibt ein aktives schreibgeschütztes [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties)-Objekt zurück, das die [aufgelösten Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#resolved_value) aller CSS-Eigenschaften eines Elements enthält, nachdem alle aktiven Stylesheets angewendet und alle Berechnungen dieser Werte aufgelöst wurden.

## Syntax

```js-nolint
getComputedStyle(element)
getComputedStyle(element, pseudoElt)
```

### Parameter

- `element`
  - : Das [`Element`](/de/docs/Web/API/Element), für das der berechnete Stil abgerufen werden soll.
- `pseudoElt` {{optional_inline}}
  - : Ein String, der das zu matchende Pseudo-Element angibt. Weggelassen (oder `null`) für reale Elemente.

### Rückgabewert

Ein _aktives_ [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties)-Objekt, das sich automatisch aktualisiert, wenn sich die Stile des Elements ändern.

> [!NOTE]
> Frühere Versionen der Spezifikation gaben ein [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Objekt zurück (von dem [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties) abgeleitet ist).
> Siehe die [Browser-Kompatibilität](#browser-kompatibilität) Tabelle für Informationen zur Browserunterstützung.

> [!WARNING]
> Zurückgegebene Werte sind manchmal absichtlich ungenau. Um das Sicherheitsproblem "CSS History Leak" zu vermeiden, können Browser über die berechneten Stile eines besuchten Links lügen und Werte zurückgeben, als ob der Benutzer die verknüpfte URL nie besucht hätte. Siehe [Plugging the CSS history leak](https://blog.mozilla.org/security/2010/03/31/plugging-the-css-history-leak/) und [Privacy-related changes coming to CSS `:visited`](https://hacks.mozilla.org/2010/03/privacy-related-changes-coming-to-css-vistited/) für Beispiele, wie dies umgesetzt wird.

### Ausnahmen

- {{JSxRef("TypeError")}}
  - : Wenn das übergebene Objekt kein [`Element`](/de/docs/Web/API/Element) ist oder `pseudoElt` kein gültiger Pseudo-Element-Selektor ist oder {{CSSxRef("::part", "::part()")}} oder {{CSSxRef("::slotted", "::slotted()")}} ist.

    > [!NOTE]
    > Ein gültiger Pseudo-Element-Selektor bezieht sich auf die syntaktische Gültigkeit, z.B. wird `::unsupported` als gültig angesehen, auch wenn das Pseudo-Element selbst nicht unterstützt wird.

## Beschreibung

Die Methode gibt ein aktives schreibgeschütztes [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties)-Objekt zurück, das die [aufgelösten Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#resolved_value) aller CSS-Eigenschaften eines Elements enthält, nachdem alle aktiven Stylesheets angewendet und alle Berechnungen dieser Werte aufgelöst wurden.

Das zurückgegebene Objekt kann verwendet werden, um die Stile des Elements zu inspizieren — inklusive derjenigen, die inline, mit einem `<style>`-Element oder über ein externes Stylesheet gesetzt wurden. Da das Objekt schreibgeschützt ist, können Sie es nicht verwenden, um die Stile eines Elements zu setzen. Da es jedoch "aktiv" ist, wird es mit dem entsprechenden aufgelösten Wert aktualisiert, wenn Sie die Elementstile mit einer anderen API (z.B. [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style)) aktualisieren.

Die Unterscheidung, dass das Objekt [aufgelöste Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#resolved_value) enthält, ist wichtig. Für die meisten Eigenschaften, insbesondere solche, die von Layout abhängen wie `display`, `font-size` oder `line-height`, ist der aufgelöste Wert der berechnete Wert. Für Eigenschaften, die von Layout abhängen, kann der verwendete Wert geringfügig vom berechneten Wert abweichen, und dies ist der aufgelöste Wert, der zurückgegeben wird. Für einen animierten Eigenschaftswert ist es der berechnete Wert im aktuellen Punkt der Animation.

Das zurückgegebene Objekt verfügt über Eigenschaften mit Bindestrich-Namen und entsprechenden {{Glossary("camel_case", "Camel-Case")}}-Eigenschaften für **alle** vom Browser unterstützten [CSS-Eigenschaften](/de/docs/Web/CSS/Properties), einschließlich sowohl [abgekürzter](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) als auch Langform-Eigenschaften.

Abgekürzte CSS-Eigenschaften des Elements werden in ihre entsprechenden Langform-Eigenschaften erweitert. Zum Beispiel wird ein Element mit dem Stil `"border-top: 1px solid black"` im zurückgegebenen Objekt durch Eigenschaften mit den Namen {{cssxref("border-top")}} und `borderTop` sowie den entsprechenden Langform-Eigenschaften {{cssxref("border-top-color")}} und `borderTopColor`, {{cssxref("border-top-style")}} und `borderTopStyle`, und {{cssxref("border-top-width")}} und `borderTopWidth` vertreten.

Beachten Sie, dass das zurückgegebene Objekt derselbe Typ ist wie das Objekt, das von der [`style`](/de/docs/Web/API/HTMLElement/style)-Eigenschaft des Elements zurückgegeben wird. Allerdings kann das `element.style`-Objekt auch verwendet werden, um **Stile zu setzen** auf diesem Element, und gibt nur die inline festgelegten Stile oder die über JavaScript gesetzten Stile zurück.

### Farbwerte

Aus Kompatibilitätsgründen werden serialisierte Farbwerte, die den traditionellen sRGB-Farbraum verwenden, als [`rgb()`](/de/docs/Web/CSS/color_value/rgb)-Farben ausgedrückt, wenn der Alphakanal-Wert genau `1` ist, und als `rgba()`-Farben sonst. Die veraltete Syntax mit Kommata wird verwendet, mit Kommata als Trennzeichen (zum Beispiel `rgb(255, 0, 0)`).

Für andere {{Glossary("color_space", "Farbräume")}} werden die Werte unter Verwendung der entsprechenden funktionalen Ausdrücke serialisiert: [`lab()`](/de/docs/Web/CSS/color_value/lab), [`lch()`](/de/docs/Web/CSS/color_value/lch), [`oklab()`](/de/docs/Web/CSS/color_value/oklab), [`oklch()`](/de/docs/Web/CSS/color_value/oklch), [`color()`](/de/docs/Web/CSS/color_value/color).

## Beispiele

### Abrufen von aufgelösten Stilen

In diesem Beispiel stylen wir ein {{HTMLElement("p")}}-Element, rufen dann diese Stile mit `getComputedStyle()` ab und drucken sie in den Textinhalt des `<p>`.

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

`getComputedStyle()` kann Stil-Informationen von [Pseudo-Elementen](/de/docs/Web/CSS/Pseudo-elements) abrufen, wie z. B. `::after`, `::before`, `::marker` oder `::line-marker`.

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
