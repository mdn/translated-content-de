---
title: Verwendeter Wert
slug: Web/CSS/CSS_cascade/used_value
l10n:
  sourceCommit: 95edea913e7f0726243aff3f47b85cfd6f02d995
---

{{CSSRef}}

Der **verwendete Wert** einer [CSS](/de/docs/Web/CSS)-Eigenschaft ist ihr Wert, nachdem alle Berechnungen auf den [berechneten Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value) durchgeführt wurden.

Nachdem der {{Glossary("user_agent", "User-Agent")}} seine Berechnungen abgeschlossen hat, hat jede CSS-Eigenschaft einen verwendeten Wert. Die verwendeten Werte von Dimensionen (z.B. {{cssxref("width")}}, {{cssxref("line-height")}}) sind in Pixeln. Die verwendeten Werte von Kurzschrift-Eigenschaften (z.B. {{cssxref("background")}}) sind konsistent mit denen ihrer Komponenten-Eigenschaften (z.B. {{cssxref("background-color")}} oder {{cssxref("background-size")}}) sowie mit {{cssxref("position")}} und {{cssxref("float")}}.

> [!NOTE]
> Die [`getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle) DOM-API gibt den [aufgelösten Wert](/de/docs/Web/CSS/resolved_value) zurück, der je nach Eigenschaft entweder der [berechnete Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value) oder der verwendete Wert sein kann.

## Beispiel

Dieses Beispiel berechnet und zeigt den verwendeten `width`-Wert von drei Elementen an (wird bei Größenänderung aktualisiert):

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

## Unterschied zum berechneten Wert

CSS 2.0 definierte nur den _berechneten Wert_ als den letzten Schritt der Berechnung einer Eigenschaft. Dann führte CSS 2.1 die separate Definition des verwendeten Werts ein. Ein Element konnte explizit eine Breite/Höhe eines Elternteils erben, dessen berechneter Wert ein Prozentsatz ist. Für CSS-Eigenschaften, die nicht von der Layout-Abhängigkeit beeinträchtigt werden (z.B. `display`, `font-size` oder `line-height`), sind die berechneten Werte und verwendeten Werte gleich. Die folgenden sind CSS 2.1-Eigenschaften, die von der Layout-Abhängigkeit betroffen sind, sodass sie unterschiedliche berechnete und verwendete Werte haben: (entnommen aus [CSS 2.1 Changes: Specified, computed, and actual values](https://www.w3.org/TR/CSS2/changes.html#q21.36)):

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
- CSS-Schlüsselkonzepte:
  - [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax)
  - [Kommentare](/de/docs/Web/CSS/CSS_syntax/Comments)
  - [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
  - [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)
  - [Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
  - {{Glossary("Layout_mode", "Layout-Modi")}}
  - [Visuelles Formatierungsmodell](/de/docs/Web/CSS/CSS_display/Visual_formatting_model)
  - [Randkollision](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
  - Werte
    - [Ursprungswerte](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value)
    - [Berechnete Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value)
    - [Aufgelöste Werte](/de/docs/Web/CSS/resolved_value)
    - [Tatsächliche Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#actual_value)
  - [Wertdefinitionssyntax](/de/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax)
  - [Kurzschreibweise](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties)
  - {{Glossary("Replaced_elements", "Ersetzte Elemente")}}
