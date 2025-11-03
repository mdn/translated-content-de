---
title: "Window: getComputedStyle() Methode"
short-title: getComputedStyle()
slug: Web/API/Window/getComputedStyle
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

{{APIRef("CSSOM")}}

Die **`Window.getComputedStyle()`** Methode gibt ein lebendes, schreibgeschütztes [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties) Objekt zurück, das die [aufgelösten Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#resolved_value) aller CSS-Eigenschaften eines Elements enthält, nachdem aktive Stylesheets angewendet und alle Berechnungen dieser Werte aufgelöst wurden.

## Syntax

```js-nolint
getComputedStyle(element)
getComputedStyle(element, pseudoElt)
```

### Parameter

- `element`
  - : Das [`Element`](/de/docs/Web/API/Element), für das der berechnete Stil abgerufen werden soll.
- `pseudoElt` {{optional_inline}}
  - : Ein String, der das Pseudoelement spezifiziert, das übereinstimmen soll.
    Ausgelassen (oder `null`) für echte Elemente.

### Rückgabewert

Ein _lebendes_ [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties) Objekt, das sich automatisch aktualisiert, wenn sich die Stile des Elements ändern.

> [!NOTE]
> Frühere Versionen der Spezifikation gaben ein [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) zurück (von dem [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties) abgeleitet ist).
> In der Tabelle zur [Browser-Kompatibilität](#browser-kompatibilität) finden Sie Informationen zur Browserunterstützung.

> [!WARNING]
> Zurückgegebene Werte sind manchmal absichtlich ungenau.
> Um das Sicherheitsproblem der "CSS History Leak" zu vermeiden, können Browser falsche Angaben zu den berechneten Stilen eines besuchten Links machen und Werte zurückgeben, als ob der Benutzer die verlinkte URL nie besucht hätte.
> Siehe [Plugging the CSS history leak](https://blog.mozilla.org/security/2010/03/31/plugging-the-css-history-leak/) und [Privacy-related changes coming to CSS `:visited`](https://hacks.mozilla.org/2010/03/privacy-related-changes-coming-to-css-vistited/) für Beispiele, wie dies implementiert ist.

### Ausnahmen

- {{JSxRef("TypeError")}}
  - : Wenn das übergebene Objekt kein [`Element`](/de/docs/Web/API/Element) ist oder `pseudoElt` kein gültiger Pseudoelement-Selektor ist oder {{CSSxRef("::part", "::part()")}} oder {{CSSxRef("::slotted", "::slotted()")}} ist.

    > [!NOTE]
    > Gültiger Pseudoelement-Selektor bezieht sich auf die syntaktische Gültigkeit, z.B. wird `::unsupported` als gültig angesehen, auch wenn das Pseudoelement selbst nicht unterstützt wird.

## Beschreibung

Die Methode gibt ein lebendes, schreibgeschütztes [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties) Objekt zurück, das die [aufgelösten Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#resolved_value) aller CSS-Eigenschaften eines Elements enthält, nachdem aktive Stylesheets angewendet und alle Berechnungen dieser Werte aufgelöst wurden.

Das zurückgegebene Objekt kann verwendet werden, um die Stile des Elements zu inspizieren — einschließlich derer, die inline, mit einem `<style>`-Element oder über ein externes Stylesheet gesetzt sind.
Da das Objekt schreibgeschützt ist, können Sie es nicht verwenden, um die Stile eines Elements zu setzen.
Da es jedoch "lebendig" ist, wird das zurückgegebene Objekt mit dem entsprechenden aufgelösten Wert aktualisiert, wenn Sie die Stile des Elements mit einer anderen API (wie [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style)) aktualisieren.

Der Unterschied, dass das Objekt [aufgelöste Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#resolved_value) enthält, ist wichtig.
Für die meisten Eigenschaften, insbesondere solche, die von Layouts abhängen wie `display`, `font-size` oder `line-height`, ist der aufgelöste Wert der berechnete Wert.
Für Eigenschaften, die vom Layout abhängen, kann der verwendete Wert leicht vom berechneten Wert abweichen, und dies ist der aufgelöste Wert, der zurückgegeben wird.
Für einen animierten Eigenschaftswert wird es der berechnete Wert zum aktuellen Zeitpunkt der Animation sein.

Das zurückgegebene Objekt verfügt über Strich-benannte und entsprechende {{Glossary("camel_case", "camel-case")}} benannte Eigenschaften für **alle** vom Browser unterstützten [CSS-Eigenschaften](/de/docs/Web/CSS/Reference/Properties), einschließlich sowohl [Shorthand](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) als auch Langform-Eigenschaften.

Shorthand-CSS-Eigenschaften des Elements werden auf ihre entsprechenden Langform-Eigenschaften erweitert.
Zum Beispiel, ein Element mit dem Stil `"border-top: 1px solid black"` würde im zurückgegebenen Objekt durch Eigenschaften mit den Namen {{cssxref("border-top")}} und `borderTop` sowie die entsprechenden Langform-Eigenschaften {{cssxref("border-top-color")}} und `borderTopColor`, {{cssxref("border-top-style")}} und `borderTopStyle` sowie {{cssxref("border-top-width")}} und `borderTopWidth` repräsentiert werden.

Beachten Sie, dass das zurückgegebene Objekt vom gleichen Typ ist wie das Objekt, das von der [`style`](/de/docs/Web/API/HTMLElement/style) Eigenschaft des Elements zurückgegeben wird.
Das `element.style` Objekt kann jedoch auch verwendet werden, um Stile auf diesem Element **zu setzen**, und gibt nur die Inline-Stile oder die über JavaScript gesetzten zurück.

### Farbwerte

Aus Kompatibilitätsgründen werden serialisierte Farbwerte, die unter Verwendung des traditionellen sRGB-Farbraums spezifiziert sind, als [`rgb()`](/de/docs/Web/CSS/color_value/rgb) Farben ausgedrückt, wenn der Alphakanalwert genau `1` ist, und ansonsten als `rgba()` Farben.
Die veraltete Syntax mit Kommata wird verwendet, wobei Kommata als Trennzeichen dienen (zum Beispiel `rgb(255, 0, 0)`).

Für andere {{Glossary("color_space", "Farbräume")}} werden die Werte unter Verwendung der entsprechenden Funktionsausdrücke serialisiert: [`lab()`](/de/docs/Web/CSS/color_value/lab), [`lch()`](/de/docs/Web/CSS/color_value/lch) [`oklab()`](/de/docs/Web/CSS/color_value/oklab), [`oklch()`](/de/docs/Web/CSS/color_value/oklch), [`color()`](/de/docs/Web/CSS/color_value/color).

## Beispiele

### Abrufen von aufgelösten Stilen

In diesem Beispiel stylen wir ein {{HTMLElement("p")}} Element, rufen dann diese Stile mit `getComputedStyle()` ab und geben sie im Textinhalt des `<p>` aus.

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

`getComputedStyle()` kann Stilinformationen von [Pseudoelementen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) abrufen, wie z.B. `::after`, `::before`, `::marker` oder `::line-marker`.

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
