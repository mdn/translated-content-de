---
title: Verwendeter Wert
slug: Web/CSS/used_value
l10n:
  sourceCommit: 24c2196fd3f32dd271a8b5e9a34d38a2060484d5
---

{{CSSRef}}

Der **verwendete Wert** einer [CSS](/de/docs/Web/CSS)-Eigenschaft ist ihr Wert, nachdem alle Berechnungen auf dem [berechneten Wert](/de/docs/Web/CSS/computed_value) durchgeführt wurden.

Nachdem der {{glossary("user agent")}} seine Berechnungen abgeschlossen hat, hat jede CSS-Eigenschaft einen verwendeten Wert. Die verwendeten Werte von Dimensionen (z. B. {{cssxref("width")}}, {{cssxref("line-height")}}) sind in Pixeln. Die verwendeten Werte von Kurzschreibweisen (z. B. {{cssxref("background")}}) sind konsistent mit denen ihrer Komponenten-Eigenschaften (z. B. {{cssxref("background-color")}} oder {{cssxref("background-size")}}) und mit {{cssxref("position")}} und {{cssxref("float")}}.

> [!NOTE]
> Die {{domxref("Window.getComputedStyle", "getComputedStyle()")}} DOM-API gibt den [aufgelösten Wert](/de/docs/Web/CSS/resolved_value) zurück, der je nach Eigenschaft entweder der [berechnete Wert](/de/docs/Web/CSS/computed_value) oder der verwendete Wert sein kann.

## Beispiel

Dieses Beispiel berechnet und zeigt den verwendeten `width`-Wert von drei Elementen (Aktualisierungen bei Größenänderung) an:

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

CSS 2.0 definierte nur den _berechneten Wert_ als den letzten Schritt in der Berechnung einer Eigenschaft. Dann führte CSS 2.1 die genaue Definition des verwendeten Werts ein. Ein Element konnte dann explizit eine Breite/Höhe eines Elternteils erben, dessen berechneter Wert ein Prozentsatz ist. Für CSS-Eigenschaften, die nicht von Layout abhängen (z. B. `display`, `font-size` oder `line-height`), sind die berechneten Werte und die verwendeten Werte identisch. Die folgenden sind die CSS 2.1 Eigenschaften, die vom Layout abhängen und daher einen unterschiedlichen berechneten Wert und verwendeten Wert haben: (übernommen aus [CSS 2.1 Änderungen: Spezifizierte, berechnete und tatsächliche Werte](https://www.w3.org/TR/CSS2/changes.html#q21.36)):

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

- {{domxref("window.getComputedStyle")}}
- Wichtige CSS-Konzepte:
  - [CSS-Syntax](/de/docs/Web/CSS/Syntax)
  - [Kommentare](/de/docs/Web/CSS/Comments)
  - [Spezifität](/de/docs/Web/CSS/Specificity)
  - [Vererbung](/de/docs/Web/CSS/Inheritance)
  - [Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
  - [Layout-Modi](/de/docs/Web/CSS/Layout_mode)
  - [Visuelle Formatierungsmodelle](/de/docs/Web/CSS/Visual_formatting_model)
  - [Margin Collapse](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
  - Werte
    - [Anfangswerte](/de/docs/Web/CSS/initial_value)
    - [Berechnete Werte](/de/docs/Web/CSS/computed_value)
    - [Aufgelöste Werte](/de/docs/Web/CSS/resolved_value)
    - [Tatsächliche Werte](/de/docs/Web/CSS/actual_value)
  - [Wertdefinition syntax](/de/docs/Web/CSS/Value_definition_syntax)
  - [Kurzschreibweise-Eigenschaften](/de/docs/Web/CSS/Shorthand_properties)
  - [Ersetzte Elemente](/de/docs/Web/CSS/Replaced_element)
