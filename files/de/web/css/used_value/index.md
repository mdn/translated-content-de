---
title: Used value
slug: Web/CSS/used_value
l10n:
  sourceCommit: 24c2196fd3f32dd271a8b5e9a34d38a2060484d5
---

{{CSSRef}}

Der **used value** eines [CSS](/de/docs/Web/CSS)-Eigenschaftswerts ist der Wert, nachdem alle Berechnungen am [computed value](/de/docs/Web/CSS/computed_value) durchgeführt wurden.

Nachdem der [User-Agent](/de/docs/Glossary/user_agent) seine Berechnungen abgeschlossen hat, hat jede CSS-Eigenschaft einen used value. Die used values von Dimensionen (z. B. {{cssxref("width")}}, {{cssxref("line-height")}}) sind in Pixeln. Die used values von Kurzschreibweise-Eigenschaften (z. B. {{cssxref("background")}}) sind konsistent mit denen ihrer Komponenteneigenschaften (z. B. {{cssxref("background-color")}} oder {{cssxref("background-size")}}) sowie {{cssxref("position")}} und {{cssxref("float")}}.

> [!NOTE]
> Die [`getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle) DOM-API gibt den [resolved value](/de/docs/Web/CSS/resolved_value) zurück, der je nach Eigenschaft entweder der [computed value](/de/docs/Web/CSS/computed_value) oder der used value sein kann.

## Beispiel

Dieses Beispiel berechnet und zeigt den verwendeten `width`-Wert von drei Elementen an (aktualisiert bei Größenänderung):

### HTML

```html
<div id="no-width">
  <p>No explicit width.</p>
  <p class="show-used-width">..</p>

  <div id="width-50">
    <p>Explicit width: 50%.</p>
    <p class="show-used-width">..</p>

    <div id="width-inherit">
      <p>Explicit width: inherit.</p>
      <p class="show-used-width">..</p>
    </div>
  </div>
</div>
```

### CSS

```css
#no-width {
  width: auto;
}

#width-50 {
  width: 50%;
}

#width-inherit {
  width: inherit;
}

/* Make results easier to see */
div {
  border: 1px solid red;
  padding: 8px;
}
```

### JavaScript

```js
function updateUsedWidth(id) {
  const div = document.getElementById(id);
  const par = div.querySelector(".show-used-width");
  const wid = window.getComputedStyle(div)["width"];
  par.textContent = `Used width: ${wid}.`;
}

function updateAllUsedWidths() {
  updateUsedWidth("no-width");
  updateUsedWidth("width-50");
  updateUsedWidth("width-inherit");
}

updateAllUsedWidths();
window.addEventListener("resize", updateAllUsedWidths);
```

### Ergebnis

{{ EmbedLiveSample('Example', '80%', 372) }}

## Unterschied zum Computed Value

CSS 2.0 definierte nur den _computed value_ als den letzten Schritt bei der Berechnung einer Eigenschaft. Anschließend führte CSS 2.1 die eindeutige Definition des used value ein. Ein Element konnte dann explizit eine Breite/Höhe eines übergeordneten Elements erben, dessen computed value ein Prozentsatz ist. Für CSS-Eigenschaften, die nicht vom Layout abhängen (z. B. `display`, `font-size` oder `line-height`), sind die computed values und used values identisch. Folgende sind die CSS 2.1-Eigenschaften, die vom Layout abhängen und daher unterschiedliche Werte für computed value und used value aufweisen (entnommen aus [CSS 2.1 Changes: Specified, computed, and actual values](https://www.w3.org/TR/CSS2/changes.html#q21.36)):

- `background-position`
- `bottom`, `left`, `right`, `top`
- `height`, `width`
- `margin-bottom`, `margin-left`, `margin-right`, `margin-top`
- `min-height`, `min-width`
- `padding-bottom`, `padding-left`, `padding-right`, `padding-top`
- `text-indent`

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`window.getComputedStyle`](/de/docs/Web/API/Window/getComputedStyle)
- Wichtige Konzepte in CSS:
  - [CSS-Syntax](/de/docs/Web/CSS/Syntax)
  - [Kommentare](/de/docs/Web/CSS/Comments)
  - [Spezifität](/de/docs/Web/CSS/Specificity)
  - [Vererbung](/de/docs/Web/CSS/Inheritance)
  - [Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
  - [Layout-Modi](/de/docs/Web/CSS/Layout_mode)
  - [Visuelle Formatierungsmodelle](/de/docs/Web/CSS/Visual_formatting_model)
  - [Randkollaps](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
  - Werte
    - [Initialwerte](/de/docs/Web/CSS/initial_value)
    - [Computed values](/de/docs/Web/CSS/computed_value)
    - [Resolved values](/de/docs/Web/CSS/resolved_value)
    - [Tatsächliche Werte](/de/docs/Web/CSS/actual_value)
  - [Wertedefinitionssyntax](/de/docs/Web/CSS/Value_definition_syntax)
  - [Kurzschreibweise-Eigenschaften](/de/docs/Web/CSS/Shorthand_properties)
  - [Ersetzte Elemente](/de/docs/Web/CSS/Replaced_element)
