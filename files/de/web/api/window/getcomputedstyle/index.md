---
title: "Window: getComputedStyle() Methode"
short-title: getComputedStyle()
slug: Web/API/Window/getComputedStyle
l10n:
  sourceCommit: 0c13af55e869cbc54830fd1a601fd05f60717375
---

{{APIRef("CSSOM")}}

Die **`Window.getComputedStyle()`** Methode gibt ein Live-Read-Only-Objekt vom Typ [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties) zurück, das die [aufgelösten Werte](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#resolved_value) aller CSS-Eigenschaften eines Elements enthält, nachdem aktive Stylesheets angewendet und alle Berechnungen dieser Werte aufgelöst wurden.

## Syntax

```js-nolint
getComputedStyle(element)
getComputedStyle(element, pseudoElt)
```

### Parameter

- `element`
  - : Der [`Element`](/de/docs/Web/API/Element) für den die berechneten Stile abgerufen werden sollen.
- `pseudoElt` {{optional_inline}}
  - : Ein String, der das Pseudo-Element angibt, das übereinstimmt.
    Weggelassen (oder `null`) für reale Elemente.

### Rückgabewert

Ein _Live_ [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties)-Objekt, das sich automatisch aktualisiert, wenn sich die Stile des Elements ändern.

> [!NOTE]
> Frühere Versionen der Spezifikation gaben ein [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) zurück (von dem [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties) abgeleitet ist).
> Siehe die [Browser-Kompatibilität](#browser-kompatibilität)-Tabelle für Informationen zur Browserunterstützung.

> [!WARNING]
> Zurückgegebene Werte sind manchmal absichtlich ungenau.
> Um das Sicherheitsproblem "CSS History Leak" zu vermeiden, können Browser über die berechneten Stile für einen besuchten Link lügen und Werte zurückgeben, als hätte der Benutzer die verlinkte URL nie besucht.
> Siehe [Plugging the CSS history leak](https://blog.mozilla.org/security/2010/03/31/plugging-the-css-history-leak/) und [Privacy-related changes coming to CSS `:visited`](https://hacks.mozilla.org/2010/03/privacy-related-changes-coming-to-css-vistited/) für Beispiele, wie dies implementiert wird.

### Ausnahmen

- {{JSxRef("TypeError")}}
  - : Tritt auf, wenn das übergebene Objekt kein [`Element`](/de/docs/Web/API/Element) ist oder `pseudoElt` kein gültiger Pseudo-Element-Selektor ist oder wenn es sich um {{CSSxRef("::part", "::part()")}} oder {{CSSxRef("::slotted", "::slotted()")}} handelt.

    > [!NOTE]
    > Ein gültiger Pseudo-Element-Selektor bezieht sich auf die syntaktische Gültigkeit, z. B. wird `::unsupported` als gültig angesehen, auch wenn das Pseudo-Element selbst nicht unterstützt wird.

## Beschreibung

Die Methode gibt ein Live-Read-Only-Objekt vom Typ [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties) zurück, das die [aufgelösten Werte](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#resolved_value) aller CSS-Eigenschaften eines Elements enthält, nachdem aktive Stylesheets angewendet und alle Berechnungen dieser Werte aufgelöst wurden.

Das zurückgegebene Objekt kann verwendet werden, um die Stile des Elements zu inspizieren — einschließlich derjenigen, die inline, mit einem `<style>`-Element oder über ein externes Stylesheet gesetzt sind. Da das Objekt schreibgeschützt ist, können Sie es nicht verwenden, um die Stile eines Elements zu setzen. Da es jedoch "live" ist, wird das zurückgegebene Objekt mit dem entsprechenden aufgelösten Wert aktualisiert, wenn Sie die Elementstile mit einer anderen API (wie [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style)) aktualisieren.

Die Unterscheidung, dass das Objekt [aufgelöste Werte](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#resolved_value) enthält, ist wichtig. Für die meisten Eigenschaften, insbesondere diejenigen, die vom Layout abhängen, wie `display`, `font-size` oder `line-height`, ist der aufgelöste Wert der berechnete Wert. Für Eigenschaften, die vom Layout abhängen, kann der verwendete Wert geringfügig vom berechneten Wert abweichen, und dies ist der zurückgegebene aufgelöste Wert. Für einen animierten Eigenschaftswert wird es der berechnete Wert an der aktuellen Stelle in der Animation sein.

Das zurückgegebene Objekt hat Bindestrich-benannte und entsprechende {{Glossary("camel_case", "Camelcase")}} benannte Eigenschaften für **alle** [CSS-Eigenschaften](/de/docs/Web/CSS/Reference/Properties), die vom Browser unterstützt werden, einschließlich sowohl [Kurzform](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) als auch Langform-Eigenschaften.

CSS-Kurzformeigenschaften des Elements werden in ihre entsprechenden Langform-Eigenschaften erweitert. Zum Beispiel wird ein Element mit dem Stil `"border-top: 1px solid black"` durch Eigenschaften mit den Namen {{cssxref("border-top")}} und `borderTop` im zurückgegebenen Objekt dargestellt, sowie die entsprechenden Langform-Eigenschaften {{cssxref("border-top-color")}} und `borderTopColor`, {{cssxref("border-top-style")}} und `borderTopStyle`, und {{cssxref("border-top-width")}} und `borderTopWidth`.

Beachten Sie, dass das zurückgegebene Objekt vom selben Typ ist wie das Objekt, das von der [`style`](/de/docs/Web/API/HTMLElement/style) Eigenschaft des Elements zurückgegeben wird. Jedoch kann das `element.style` Objekt auch verwendet werden, um **Stile** auf diesem Element zu setzen und gibt nur die Inline-Stile oder die via JavaScript gesetzten zurück.

### Farbwerte

Aus Kompatibilitätsgründen werden serialisierte Farbwerte, die im traditionellen sRGB-Farbraum angegeben wurden, als {{cssxref("color_value/rgb", "rgb()")}} Farben ausgedrückt, wenn der Alpha-Kanal-Wert genau `1` ist, und als `rgba()` Farben andernfalls. Die veraltete Syntax mit Kommata wird verwendet, mit Kommata als Trennzeichen (zum Beispiel `rgb(255, 0, 0)`).

Für andere {{Glossary("color_space", "Farbräume")}} werden die Werte unter Verwendung der entsprechenden Funktionalen Ausdrücke serialisiert: {{cssxref("color_value/lab", "lab()")}}, {{cssxref("color_value/lch", "lch()")}} {{cssxref("color_value/oklab", "oklab()")}}, {{cssxref("color_value/oklch", "oklch()")}}, {{cssxref("color_value/color", "color()")}}.

## Beispiele

### Abrufen aufgelöster Stile

In diesem Beispiel stylen wir ein {{HTMLElement("p")}}-Element, rufen diese Stile dann mit `getComputedStyle()` ab und geben sie in den Textinhalt des `<p>` aus.

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

`getComputedStyle()` kann Stilinformationen von [Pseudo-Elementen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) abrufen, wie `::after`, `::before`, `::marker` oder `::line-marker`.

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
