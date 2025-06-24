---
title: "Window: getComputedStyle() Methode"
short-title: getComputedStyle()
slug: Web/API/Window/getComputedStyle
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("CSSOM")}}

Die **`Window.getComputedStyle()`**-Methode gibt ein Objekt zurück, das die Werte aller CSS-Eigenschaften eines Elements enthält, nachdem aktive Stylesheets angewendet und grundlegende Berechnungen dieser Werte aufgelöst wurden.

Einzelne CSS-Eigenschaftswerte werden über die APIs des zurückgegebenen [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Objekts oder durch das Indizieren mit CSS-Eigenschaftsnamen abgerufen. Die von `getComputedStyle` zurückgegebenen Werte sind [aufgelöste Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#resolved_value).

## Syntax

```js-nolint
getComputedStyle(element)
getComputedStyle(element, pseudoElt)
```

### Parameter

- `element`
  - : Das [`Element`](/de/docs/Web/API/Element), für das der berechnete Stil ermittelt werden soll.
- `pseudoElt` {{optional_inline}}
  - : Ein String, der das Pseudo-Element angibt, das abgeglichen werden soll. Weggelassen (oder `null`) für reale Elemente.

### Rückgabewert

Ein _live_ [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Objekt, das sich automatisch aktualisiert, wenn die Stile des Elements geändert werden.

Beachten Sie, dass:

- Das zurückgegebene [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Objekt aktive Werte für CSS-Eigenschafts-_Langnamen_ sowie Kurznamen enthält. Zum Beispiel enthält das zurückgegebene Objekt Einträge für {{cssxref("border-bottom-width")}} zusätzlich zu den {{cssxref("border-width")}} und {{cssxref("border")}} [Eigenschaften-Kurzbezeichnungen](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties).
- Zurückgegebene Werte sind manchmal absichtlich ungenau. Um das Sicherheitsproblem des "CSS History Leak" zu vermeiden, können Browser lügen über die berechneten Stile für einen besuchten Link und Werte zurückgeben, als ob der Benutzer die verlinkte URL nie besucht hätte. Siehe [Plugging the CSS history leak](https://blog.mozilla.org/security/2010/03/31/plugging-the-css-history-leak/) und [Privacy-related changes coming to CSS `:visited`](https://hacks.mozilla.org/2010/03/privacy-related-changes-coming-to-css-vistited/) für Beispiele, wie dies implementiert ist.
- Während [CSS-Transitionen](/de/docs/Web/CSS/CSS_transitions) gibt `getComputedStyle` in Firefox den ursprünglichen Eigenschaftswert zurück, aber den endgültigen Eigenschaftswert in WebKit.
- In Firefox geben Eigenschaften mit dem Wert `auto` den verwendeten Wert zurück, nicht den Wert `auto`. Wenn Sie also `top:auto` und `bottom:0` auf ein Element mit `height:30px` und einem enthaltenden Block mit `height:100px` anwenden, gibt der berechnete Stil von Firefox für `top` `70px` zurück, da 100 − 30 = 70.
- Aus Kompatibilitätsgründen werden serielle Farbwerte als [`rgb()`](/de/docs/Web/CSS/color_value/rgb) Farben ausgedrückt, wenn der Alphakanalwert genau `1` ist, und als `rgba()` Farben sonst. In beiden Fällen wird die alte Syntax verwendet, mit Kommas als Trenner (zum Beispiel `rgb(255, 0, 0)`).

Das zurückgegebene Objekt ist der gleiche [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Typ wie das Objekt, das von der [`style`](/de/docs/Web/API/HTMLElement/style)-Eigenschaft des Elements zurückgegeben wird. Die beiden Objekte haben jedoch unterschiedliche Zwecke:

- Das Objekt von `getComputedStyle` ist schreibgeschützt und sollte verwendet werden, um den Stil des Elements zu überprüfen — einschließlich derjenigen, die durch ein `<style>`-Element oder ein externes Stylesheet festgelegt wurden.
- Das `element.style`-Objekt sollte verwendet werden, um Stile auf diesem Element **festzulegen** oder um Stile zu überprüfen, die direkt durch JavaScript-Manipulation oder das globale `style`-Attribut hinzugefügt wurden.

### Ausnahmen

- {{JSxRef("TypeError")}}

  - : Wenn das übergebene Objekt kein [`Element`](/de/docs/Web/API/Element) ist oder `pseudoElt` kein gültiger Pseudo-Element-Selektor ist oder {{CSSxRef("::part", "::part()")}} oder {{CSSxRef("::slotted", "::slotted()")}} ist.

    > [!NOTE]
    > Ein gültiger Pseudo-Element-Selektor bezieht sich auf synaktische Gültigkeit, z. B. wird `::unsupported` als gültig angesehen, auch wenn das Pseudo-Element selbst nicht unterstützt wird.

## Beispiele

### Abrufen von berechneten Stilen

In diesem Beispiel stylen wir ein {{HTMLElement("p")}}-Element, rufen dann diese Stile mit `getComputedStyle()` ab und drucken sie in den Textinhalt des `<p>`-Elements.

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

{{EmbedLiveSample('retrieving_computed_styles', '100%', '240px')}}

### Verwendung mit Pseudo-Elementen

`getComputedStyle` kann Stilinformationen von [Pseudo-Elementen](/de/docs/Web/CSS/Pseudo-elements) abrufen, wie zum Beispiel `::after`, `::before`, `::marker` oder `::line-marker`.

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
const result = getComputedStyle(h3, ":after").content;

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
