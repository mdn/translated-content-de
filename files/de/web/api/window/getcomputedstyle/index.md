---
title: "Window: getComputedStyle() Methode"
short-title: getComputedStyle()
slug: Web/API/Window/getComputedStyle
l10n:
  sourceCommit: 0f059575d32845cd649c7c4434485b34740c1db5
---

{{APIRef("CSSOM")}}

Die **`Window.getComputedStyle()`** Methode gibt ein Live-Readonly-Objekt [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties) zurück, das die [aufgelösten Werte](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#resolved_value) aller CSS-Eigenschaften eines Elements enthält, nachdem aktive Stylesheets angewendet und alle Berechnungen dieser Werte aufgelöst wurden.

## Syntax

```js-nolint
getComputedStyle(element)
getComputedStyle(element, pseudoElt)
```

### Parameter

- `element`
  - : Das [`Element`](/de/docs/Web/API/Element), für das der berechnete Stil ermittelt werden soll.
- `pseudoElt` {{optional_inline}}
  - : Ein String, der das Pseudoelement spezifiziert, das abgeglichen werden soll.
    Ausgelassen (oder `null`) für reale Elemente.

### Rückgabewert

Ein _Live_ [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties) Objekt, das sich automatisch aktualisiert, wenn sich die Stile des Elements ändern.

> [!NOTE]
> Frühere Versionen der Spezifikation gaben ein [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) zurück (von dem [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties) abgeleitet ist).
> Siehe die Tabelle zur [Browser-Kompatibilität](#browser-kompatibilität) für Informationen zur Unterstützung durch Browser.

> [!WARNING]
> Die zurückgegebenen Werte sind manchmal absichtlich ungenau.
> Um das Sicherheitsproblem "CSS-Historienleck" zu vermeiden, können Browser bezüglich der berechneten Stile für einen besuchten Link lügen und Werte zurückgeben, als hätte der Benutzer die verlinkte URL nie besucht.
> Siehe [Plugging the CSS history leak](https://blog.mozilla.org/security/2010/03/31/plugging-the-css-history-leak/) und [Privacy-related changes coming to CSS `:visited`](https://hacks.mozilla.org/2010/03/privacy-related-changes-coming-to-css-vistited/) für Beispiele, wie dies implementiert wird.

### Ausnahmen

- {{JSxRef("TypeError")}}
  - : Wenn das übergebene Objekt kein [`Element`](/de/docs/Web/API/Element) ist oder `pseudoElt` kein gültiger Pseudoelement-Selektor ist oder {{CSSxRef("::part", "::part()")}} oder {{CSSxRef("::slotted", "::slotted()")}} ist.

    > [!NOTE]
    > Ein gültiger Pseudoelement-Selektor bezieht sich auf syntaktische Gültigkeit, z. B. wird `::unsupported` als gültig angesehen, obwohl das Pseudoelement selbst nicht unterstützt wird.

## Beschreibung

Die Methode gibt ein Live-Readonly-Objekt [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties) zurück, das die [aufgelösten Werte](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#resolved_value) aller CSS-Eigenschaften eines Elements enthält, nachdem aktive Stylesheets angewendet und alle Berechnungen dieser Werte aufgelöst wurden.

Das zurückgegebene Objekt kann verwendet werden, um die Stile des Elements zu inspizieren — einschließlich derjenigen, die inline, mit einem `<style>` Element oder über ein externes Stylesheet festgelegt sind.
Da das Objekt schreibgeschützt ist, können Sie es nicht zur Einstellung von Stilen eines Elements verwenden.
Da es jedoch "live" ist, wird das zurückgegebene Objekt aktualisiert, wenn Sie die Styles des Elements mit einer anderen API (wie [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style)) ändern, und zeigt die entsprechenden aufgelösten Werte an.

Der Unterschied, dass das Objekt [aufgelöste Werte](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#resolved_value) enthält, ist wichtig.
Für die meisten Eigenschaften, insbesondere solche, die nicht von der Layout-Position abhängen, wie `display`, `font-size` oder `line-height`, ist der aufgelöste Wert der berechnete Wert.
Für Eigenschaften, die von der Layout-Position abhängen, kann sich der verwendete Wert geringfügig vom berechneten Wert unterscheiden, und dies ist der aufgelöste Wert, der zurückgegeben wird.
Für einen animierenden Eigenschaftswert ist es der berechnete Wert zum aktuellen Zeitpunkt der Animation.

Das zurückgegebene Objekt hat Bindestrich-benannte und entsprechende {{Glossary("camel_case", "Camel-Case")}} benannte Eigenschaften für **alle** vom Browser unterstützten [CSS-Eigenschaften](/de/docs/Web/CSS/Reference/Properties), einschließlich sowohl [Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) als auch Langform-Eigenschaften.

Kurzschrift-CSS-Eigenschaften des Elements werden in ihre entsprechenden Langform-Eigenschaften expandiert.
Zum Beispiel würde ein Element mit dem Style `"border-top: 1px solid black"` im zurückgegebenen Objekt durch Eigenschaften mit den Namen {{cssxref("border-top")}} und `borderTop` sowie die entsprechenden Langform-Eigenschaften {{cssxref("border-top-color")}} und `borderTopColor`, {{cssxref("border-top-style")}} und `borderTopStyle`, sowie {{cssxref("border-top-width")}} und `borderTopWidth` dargestellt.

Beachten Sie, dass das zurückgegebene Objekt vom gleichen Typ wie das Objekt ist, das von der [`style`](/de/docs/Web/API/HTMLElement/style) Eigenschaft des Elements zurückgegeben wird.
Das `element.style` Objekt kann jedoch auch verwendet werden, um **Stile** auf diesem Element zu setzen und gibt nur die Inline-Stile oder die über JavaScript gesetzten zurück.

### Farbwerte

Aus Gründen der Kompatibilität werden serialisierte Farbwerte, die unter Verwendung des traditionellen sRGB-Farbraums angegeben werden, als {{cssxref("color_value/rgb", "rgb()")}} Farben ausgedrückt, wenn der Alpha-Kanal-Wert genau `1` ist, und `rgba()` Farben ansonsten.
Die veraltete Syntax mit Kommas wird verwendet, mit Kommas als Trenner (zum Beispiel `rgb(255, 0, 0)`).

Für andere {{Glossary("color_space", "Farbräume")}} werden die Werte unter Verwendung der entsprechenden funktionalen Ausdrücke serialisiert: {{cssxref("color_value/lab", "lab()")}}, {{cssxref("color_value/lch", "lch()")}} {{cssxref("color_value/oklab", "oklab()")}}, {{cssxref("color_value/oklch", "oklch()")}}, {{cssxref("color_value/color", "color()")}}.

## Beispiele

### Aufgelöste Stile abrufen

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

### Verwendung mit Pseudoelementen

`getComputedStyle()` kann Stilinformationen von [Pseudoelementen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) abrufen, wie `::after`, `::before`, `::marker` oder `::line-marker`.

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
