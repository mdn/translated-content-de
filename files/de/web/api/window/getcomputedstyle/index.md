---
title: "Window: getComputedStyle() Methode"
short-title: getComputedStyle()
slug: Web/API/Window/getComputedStyle
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("CSSOM")}}

Die **`Window.getComputedStyle()`** Methode liefert ein dynamisches, schreibgeschütztes [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties)-Objekt, das die [aufgelösten Werte](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#resolved_value) aller CSS-Eigenschaften eines Elements enthält, nachdem aktive Stylesheets angewendet wurden und alle Berechnungen aufgelöst sind, die diese Werte enthalten können.

## Syntax

```js-nolint
getComputedStyle(element)
getComputedStyle(element, pseudoElt)
```

### Parameter

- `element`
  - : Das [`Element`](/de/docs/Web/API/Element), für das der berechnete Stil ermittelt werden soll.
- `pseudoElt` {{optional_inline}}
  - : Ein String, der das Pseudo-Element angibt, das abgeglichen werden soll.
    Ausgelassen (oder `null`) für echte Elemente.

### Rückgabewert

Ein _dynamisches_ [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties)-Objekt, das automatisch aktualisiert wird, wenn die Stile des Elements geändert werden.

> [!NOTE]
> Frühere Versionen der Spezifikation gaben eine [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) zurück (von der [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties) abgeleitet ist).
> Siehe die Tabelle zur [Browser-Kompatibilität](#browser-kompatibilität) für Informationen zur Unterstützung durch Browser.

> [!WARNING]
> Zurückgegebene Werte sind manchmal absichtlich ungenau.
> Um das Sicherheitsproblem des "CSS History Leak" zu vermeiden, können Browser über die berechneten Stile für einen besuchten Link lügen und Werte zurückgeben, als ob der Benutzer die verlinkte URL nie besucht hätte.
> Siehe [Plugging the CSS history leak](https://blog.mozilla.org/security/2010/03/31/plugging-the-css-history-leak/) und [Privacy-related changes coming to CSS `:visited`](https://hacks.mozilla.org/2010/03/privacy-related-changes-coming-to-css-vistited/) für Beispiele, wie dies implementiert wird.

### Ausnahmen

- {{JSxRef("TypeError")}}

  - : Wenn das übergebene Objekt kein [`Element`](/de/docs/Web/API/Element) ist oder `pseudoElt` kein gültiger Pseudo-Element-Selektor ist oder {{CSSxRef("::part", "::part()")}} oder {{CSSxRef("::slotted", "::slotted()")}}.

    > [!NOTE]
    > Ein gültiger Pseudo-Element-Selektor bezieht sich auf die syntaktische Gültigkeit, z.B. wird `::unsupported` als gültig angesehen, obwohl das Pseudo-Element selbst nicht unterstützt wird.

## Beschreibung

Die Methode liefert ein dynamisches, schreibgeschütztes [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties)-Objekt, das die [aufgelösten Werte](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#resolved_value) aller CSS-Eigenschaften eines Elements enthält, nachdem aktive Stylesheets angewendet wurden und alle Berechnungen aufgelöst sind, die diese Werte enthalten können.

Das zurückgegebene Objekt kann verwendet werden, um die Stile des Elements zu inspizieren – einschließlich jener, die inline, mit einem `<style>`-Element oder über ein externes Stylesheet festgelegt wurden.
Da das Objekt schreibgeschützt ist, können Sie es nicht verwenden, um die Stile eines Elements festzulegen.
Da es jedoch "dynamisch" ist, wird das zurückgegebene Objekt bei einer Aktualisierung der Elementstile über eine andere API (wie [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style)) mit dem entsprechenden aufgelösten Wert aktualisiert.

Die Unterscheidung, dass das Objekt [aufgelöste Werte](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#resolved_value) enthält, ist wichtig.
Für die meisten Eigenschaften, insbesondere diejenigen, die vom Layout abhängen wie `display`, `font-size` oder `line-height`, ist der aufgelöste Wert der berechnete Wert.
Für Eigenschaften, die vom Layout abhängen, kann der verwendete Wert geringfügig vom berechneten Wert abweichen, und dies ist der aufgelöste Wert, der zurückgegeben wird.
Für einen animierenden Eigenschaftswert ist es der berechnete Wert zum aktuellen Punkt in der Animation.

Das zurückgegebene Objekt hat dash-benannte und entsprechende {{Glossary("camel_case", "camel-case")}} benannte Eigenschaften für **alle** vom Browser unterstützten [CSS-Eigenschaften](/de/docs/Web/CSS/Reference/Properties), einschließlich sowohl [Shorthand](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) als auch Langform-Eigenschaften.

Shorthand-CSS-Eigenschaften des Elements werden in ihre entsprechenden Langform-Eigenschaften expandiert.
Zum Beispiel würde ein Element mit dem Stil `"border-top: 1px solid black"` im zurückgegebenen Objekt durch Eigenschaften mit den Namen {{cssxref("border-top")}} und `borderTop` sowie die entsprechenden Langform-Eigenschaften {{cssxref("border-top-color")}} und `borderTopColor`, {{cssxref("border-top-style")}} und `borderTopStyle`, und {{cssxref("border-top-width")}} und `borderTopWidth` repräsentiert werden.

Beachten Sie, dass das zurückgegebene Objekt vom gleichen Typ wie das Objekt ist, das von der [`style`](/de/docs/Web/API/HTMLElement/style)-Eigenschaft des Elements zurückgegeben wird.
Das `element.style`-Objekt kann jedoch auch zum **Setzen** von Stilen auf diesem Element verwendet werden und gibt nur die inline gesetzten Stile oder jene über JavaScript zurück.

### Farbwerte

Aus Kompatibilitätsgründen werden serialisierte Farbwerte, die mit dem traditionellen sRGB-Farbraum angegeben sind, als [`rgb()`](/de/docs/Web/CSS/Reference/Values/color_value/rgb)-Farben ausgedrückt, wenn der Alphakanal-Wert genau `1` ist, und als `rgba()`-Farben andernfalls.
Die veraltete Syntax mit Kommata wird verwendet, mit Kommata als Trennzeichen (zum Beispiel `rgb(255, 0, 0)`).

Für andere {{Glossary("color_space", "Farbräume")}} werden die Werte mit den entsprechenden funktionalen Ausdrücken serialisiert: [`lab()`](/de/docs/Web/CSS/Reference/Values/color_value/lab), [`lch()`](/de/docs/Web/CSS/Reference/Values/color_value/lch), [`oklab()`](/de/docs/Web/CSS/Reference/Values/color_value/oklab), [`oklch()`](/de/docs/Web/CSS/Reference/Values/color_value/oklch), [`color()`](/de/docs/Web/CSS/Reference/Values/color_value/color).

## Beispiele

### Abrufen aufgelöster Stile

In diesem Beispiel stylen wir ein {{HTMLElement("p")}}-Element, rufen diese Stile mit `getComputedStyle()` ab und fügen sie in den Textinhalt des `<p>` ein.

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

`getComputedStyle()` kann Stilinfos von [Pseudo-Elementen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) abrufen, wie `::after`, `::before`, `::marker` oder `::line-marker`.

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
- [Aufgelöster Wert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#resolved_value)
