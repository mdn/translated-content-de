---
title: "Window: getComputedStyle()-Methode"
short-title: getComputedStyle()
slug: Web/API/Window/getComputedStyle
l10n:
  sourceCommit: 03e992bd263d9bd3d0c8db197dd1c4829e8dd206
---

{{APIRef("CSSOM")}}

Die **`Window.getComputedStyle()`**-Methode gibt ein Objekt zurück, das die Werte aller CSS-Eigenschaften eines Elements enthält, nachdem aktive Stylesheets angewendet und alle grundlegende Berechnungen dieser Werte aufgelöst wurden.

Individuelle CSS-Eigenschaftswerte werden über APIs des zurückgegebenen [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Objekts oder durch Indizierung mit CSS-Eigenschaftsnamen abgerufen. Die von `getComputedStyle` zurückgegebenen Werte sind [aufgelöste Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#resolved_value).

## Syntax

```js-nolint
getComputedStyle(element)
getComputedStyle(element, pseudoElt)
```

### Parameter

- `element`
  - : Das [`Element`](/de/docs/Web/API/Element), für das der berechnete Stil abgerufen werden soll.
- `pseudoElt` {{optional_inline}}
  - : Ein String, der das Pseudo-Element angibt, das übereinstimmen soll. Weggelassen (oder `null`) für reale Elemente.

### Rückgabewert

Ein _live_ [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Objekt, das sich automatisch aktualisiert, wenn sich die Stile des Elements ändern.

Beachten Sie, dass:

- Das zurückgegebene [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Objekt aktive Werte für CSS-Eigenschaftsnamen in Langform sowie Kurzform enthält. Beispielsweise enthält das zurückgegebene Objekt Einträge für {{cssxref("border-bottom-width")}} zusätzlich zu den {{cssxref("border-width")}} und {{cssxref("border")}} [Kurzformeigenschaftsnamen](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties).
- Zurückgegebene Werte sind manchmal absichtlich ungenau. Um das Sicherheitsproblem "CSS-Verlaufleak" zu vermeiden, können Browser über die berechneten Stile eines besuchten Links lügen und Werte zurückgeben, als hätte der Benutzer die verlinkte URL nie besucht. Siehe [Plugging the CSS history leak](https://blog.mozilla.org/security/2010/03/31/plugging-the-css-history-leak/) und [Privacy-related changes coming to CSS `:visited`](https://hacks.mozilla.org/2010/03/privacy-related-changes-coming-to-css-vistited/) für Beispiele, wie dies umgesetzt wird.
- Während [CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions) gibt `getComputedStyle` in Firefox den ursprünglichen Eigenschaftswert, in WebKit jedoch den endgültigen Eigenschaftswert zurück.
- In Firefox geben Eigenschaften mit dem Wert `auto` den benutzten Wert zurück, nicht den Wert `auto`. Wenn Sie also `top:auto` und `bottom:0` auf ein Element mit `height:30px` und einem enthaltenen Block von `height:100px` anwenden, gibt der berechnete Stil von Firefox für `top` `70px` zurück, da 100 − 30 = 70 ist.
- Aus Kompatibilitätsgründen werden serialisierte Farbwerte als [`rgb()`](/de/docs/Web/CSS/color_value/rgb)-Farben ausgedrückt, wenn der Alphakanalwert genau `1` ist, und als `rgba()`-Farben andernfalls. In beiden Fällen wird die alte Syntax verwendet, mit Kommata als Trennzeichen (zum Beispiel `rgb(255, 0, 0)`).

Das zurückgegebene Objekt ist vom selben Typ [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) wie das Objekt, das von der [`style`](/de/docs/Web/API/HTMLElement/style)-Eigenschaft des Elements zurückgegeben wird. Die beiden Objekte haben jedoch unterschiedliche Zwecke:

- Das Objekt von `getComputedStyle` ist schreibgeschützt und sollte verwendet werden, um den Stil des Elements zu inspizieren — einschließlich derjenigen, die durch ein `<style>`-Element oder ein externes Stylesheet festgelegt wurden.
- Das `element.style`-Objekt sollte verwendet werden, um Stile für das Element festzulegen oder um Stile zu untersuchen, die direkt durch JavaScript-Manipulation oder das globale `style`-Attribut hinzugefügt wurden.

### Ausnahmen

- {{JSxRef("TypeError")}}
  - : Wenn das übergebene Objekt kein [`Element`](/de/docs/Web/API/Element) ist oder `pseudoElt` kein gültiger Pseudo-Element-Selektor ist oder {{CSSxRef("::part", "::part()")}} oder {{CSSxRef("::slotted", "::slotted()")}} ist.

    > [!NOTE]
    > Ein gültiger Pseudo-Element-Selektor bezieht sich auf die syntaktische
    > Gültigkeit, z. B. wird `::unsupported` als gültig betrachtet, auch wenn das
    > Pseudo-Element selbst nicht unterstützt wird.

## Beispiele

### Abrufen von berechneten Stilen

In diesem Beispiel stylen wir ein {{HTMLElement("p")}}-Element, rufen dann diese Stile mit `getComputedStyle()` ab und geben sie in den Textinhalt des `<p>` aus.

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

`getComputedStyle` kann Stilinformationen von [Pseudo-Elementen](/de/docs/Web/CSS/Pseudo-elements) abrufen, wie `::after`, `::before`, `::marker` oder `::line-marker`.

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
