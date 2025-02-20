---
title: Verwendeter Wert
slug: Web/CSS/CSS_cascade/used_value
l10n:
  sourceCommit: a850ca867a8b380a53320bab6870fb7335f22d52
---

{{CSSRef}}

Der **verwendete Wert** einer [CSS](/de/docs/Web/CSS)-Eigenschaft ist ihr Wert, nachdem alle Berechnungen auf den [berechneten Wert](/de/docs/Web/CSS/CSS_cascade/computed_value) angewendet wurden.

Nachdem der {{Glossary("user_agent", "User-Agent")}} seine Berechnungen abgeschlossen hat, besitzt jede CSS-Eigenschaft einen verwendeten Wert. Die verwendeten Werte für Dimensionen (z. B. {{cssxref("width")}}, {{cssxref("line-height")}}) werden in Pixeln angegeben. Die verwendeten Werte für Kurzschreibweisen (z. B. {{cssxref("background")}}) stimmen mit denen ihrer Komponenteneigenschaften (z. B. {{cssxref("background-color")}} oder {{cssxref("background-size")}}) sowie mit {{cssxref("position")}} und {{cssxref("float")}} überein.

> [!NOTE]
> Die [`getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle) DOM-API gibt den [aufgelösten Wert](/de/docs/Web/CSS/resolved_value) zurück, der je nach Eigenschaft entweder der [berechnete Wert](/de/docs/Web/CSS/CSS_cascade/computed_value) oder der verwendete Wert sein kann.

## Beispiel

Dieses Beispiel berechnet und zeigt den verwendeten `width`-Wert von drei Elementen (aktualisiert sich bei Größenänderung):

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

CSS 2.0 definierte nur den _berechneten Wert_ als letzten Schritt in der Berechnung einer Eigenschaft. Mit CSS 2.1 wurde die eigenständige Definition des verwendeten Wertes eingeführt. Ein Element konnte dann explizit eine Breite/Höhe von einem Elternteil erben, dessen berechneter Wert ein Prozentsatz ist. Bei CSS-Eigenschaften, die nicht vom Layout abhängen (z. B. `display`, `font-size` oder `line-height`), sind die berechneten Werte und die verwendeten Werte identisch. Die folgenden CSS-2.1-Eigenschaften hängen allerdings vom Layout ab und haben daher unterschiedliche berechnete Werte und verwendete Werte (entnommen aus [CSS 2.1 Changes: Specified, computed, and actual values](https://www.w3.org/TR/CSS2/changes.html#q21.36)):

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
- Wichtige Konzepte zu CSS:
  - [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax)
  - [Kommentare](/de/docs/Web/CSS/CSS_syntax/Comments)
  - [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
  - [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)
  - [Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
  - [Layout-Modi](/de/docs/Web/CSS/Layout_mode)
  - [Visuelle Formatierungsmodelle](/de/docs/Web/CSS/Visual_formatting_model)
  - [Zusammenfallende Ränder](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
  - Werte
    - [Anfangswerte](/de/docs/Web/CSS/CSS_cascade/initial_value)
    - [Berechnete Werte](/de/docs/Web/CSS/CSS_cascade/computed_value)
    - [Aufgelöste Werte](/de/docs/Web/CSS/resolved_value)
    - [Tatsächliche Werte](/de/docs/Web/CSS/CSS_cascade/actual_value)
  - [Wert-Definitionssyntax](/de/docs/Web/CSS/Value_definition_syntax)
  - [Kurzschreibweisen](/de/docs/Web/CSS/Shorthand_properties)
  - [Ersetzte Elemente](/de/docs/Web/CSS/Replaced_element)
