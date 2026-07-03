---
title: CSS-Abstände
short-title: Gaps
slug: Web/CSS/Guides/Gaps
l10n:
  sourceCommit: 34838ae7d32e78bfe01dbf2c266257ef0f8305c4
---

Das **CSS-Abstände**-Modul ermöglicht es Ihnen, Abstände oder "Lücken" zwischen Elementen in [Mehrspalten-](/de/docs/Web/CSS/Guides/Multicol_layout), [Flexbox-](/de/docs/Web/CSS/Guides/Flexible_box_layout) und [Grid-](/de/docs/Web/CSS/Guides/Grid_layout) Layouts zu spezifizieren. Das [CSS-Mehrspalten-Layout-](/de/docs/Web/CSS/Guides/Multicol_layout) Modul definierte ursprünglich Abstände und Regeln für die Steuerung des Abstands zwischen Spalten in Mehrspalten-Containern. Dieses Modul erweitert diese sichtbaren Trennzeichen, genannt _Gap-Dekorationen_, und erweitert sie auf Grids.

Während `margin` und `padding` visuellen Abstand um einzelne Boxen spezifizieren, ermöglichen die Eigenschaften in diesem Modul die Spezifizierung des Abstands zwischen angrenzenden Boxen innerhalb eines bestimmten Layoutkontexts für Layouts, die {{Glossary("gutters", "Rinnen")}} und Lücken haben, wenn der Abstand zwischen Geschwisterboxen unterschiedlich ist im Vergleich zu zwischen der ersten Box, der letzten Box und dem Rand des Containers. Sie können Regeln in jeder Lücke oder in einem Teil der Lücken anzeigen, voll animierbare Regelbreiten, Farben und Einrückungen definieren.

## Lücken in Aktion

In diesem Beispiel wird das Gedicht von der USA-Inauguration 2021, _The Hill We Climb_ von Amanda Gorman, über mehrere Spalten angezeigt, ähnlich der Art und Weise, wie Artikel in gedruckten Zeitungen angezeigt werden. Wenn Sie JavaScript aktiviert haben, ermöglichen Steuerungen das Ändern der Eigenschaften `column-gap`, `column-rule-color`, `column-rule-style` und `column-rule-width`, sowie die bevorzugte Anzahl der Spalten und ob der Titel und ein Zitat alle Spalten überspannen sollen.

```html hidden live-sample___multicol
<article>
  <div class="title">
    <h1>The Hill We Climb</h1>
    <p>&mdash;Amanda Gorman, 2021</p>
  </div>
  <p>
    When day comes, we ask ourselves where can we find light in this never
    ending shade? The loss we carry, a sea we must wade. We braved the belly of
    the beast.
  </p>

  <p>
    We've learned that quiet isn't always peace and the norms and notions of
    what just is, isn't always justice. And yet the dawn is hours before we knew
    it, somehow we do it, somehow we've weathered and witnessed a nation that
    isn't broken but simply unfinished.
  </p>

  <p>
    We, the successors of a country and a time, where a skinny black girl
    descended from slaves and raised by a single mother can dream of becoming
    president, only to find herself reciting for one.
  </p>

  <p>
    And yes, we are far from polished, far from pristine, but that doesn't mean
    we are striving to form a union that is perfect. We are striving to forge
    our union with purpose, to compose a country committed to all cultures,
    colors, characters, and conditions of man. And so we lift our gazes not to
    what stands between us but what stands before us. We close the divide
    because we know to put our future first. We must first put our differences
    aside.
  </p>

  <p>
    We lay down our arms so we can reach out our arms to one another We seek
    harm to none and harmony for all. Let the globe, if nothing else, say this
    is true, that even as we grieved, we grew. That even as we hurt, we hoped.
  </p>

  <p>
    That even as we tired, we tried. That we'll forever be tied together,
    victorious, not because we will never again know defeat, but because we will
    never again sow division.
  </p>

  <p>
    Scripture tells us to envision that everyone shall sit under their own vine
    and fig tree, and no one shall make them afraid.
  </p>

  <p>
    If we’re to live up to our own time, then victory won't lighten the blade
    but in all the bridges we've made, that is the promise to glade, the hill we
    climb if only we dare, it's because being American is more than a pride we
    inherit. It's the past we stepped into and how we repair it.
  </p>

  <blockquote>
    <p>
      We've seen a force that would shatter our nation rather than share it,
      would destroy our country if it meant delaying democracy.
    </p>
  </blockquote>

  <p>
    And this effort very nearly succeeded. But while democracy can be
    periodically delayed, it can never be permanently defeated. In this truth,
    in this faith, we trust. For while we have our eyes on the future, history
    has its eyes on us.
  </p>

  <p>
    This is the era of just redemption. We feared -- at its deception. We did
    not feel prepared to be the heirs of such a terrifying hour, but within it
    we found the power to author a new chapter, to offer hope and laughter to
    ourselves.
  </p>

  <p>
    So, while once we asked, "how could we possibly prevail over catastrophe?",
    now we assert, "how could catastrophe possibly prevail over us?" We will not
    march back to what was, but move to what shall be, a country that is bruised
    but whole, benevolent but bold, fierce and free. We will not be turned
    around or interrupted by intimidation.
  </p>

  <p>
    Because we know our inaction and inertia will be the inheritance of the next
    generation. Our blunders become their burdens. But one thing is certain. If
    we merge mercy with might and might with right, then love becomes our legacy
    and change, our children's birth right.
  </p>

  <p>
    So let us leave behind a country better than one we were left with, every
    breath from my bronze pounded chest, we will raise this wounded world into a
    wondrous one. We will rise through the gold-limbed hills in the west, we
    will rise from the windswept northeast where our forefathers first realized
    revolution. We will rise from the lake-rimmed cities of the Midwestern
    states.
  </p>

  <p>
    We will rise from the sun-baked South. We will rebuild, reconcile, and
    recover, in every known nook of our nation, in every corner called our
    country, our people diverse and beautiful, will emerge battered and
    beautiful.
  </p>

  <p>When day comes, we step out of the shade, aflame and unafraid.</p>

  <p>
    The new dawn blooms as we free it for there is always light if only we're
    brave enough to see it, if only we're brave enough to be it.
  </p>
</article>
<fieldset id="options" class="open">
  <legend>
    <button aria-expanded="true" aria-controls="controls">
      Column options
    </button>
  </legend>
  <div id="controls">
    <p>
      <label for="colCount">Number of columns:</label>
      <input type="number" min="0" max="5" value="5" id="colCount" />
    </p>
    <p>
      <input type="checkbox" checked id="colSpan" />
      <label for="colSpan">Byline spans all columns</label>
    </p>
    <p>
      <input type="checkbox" id="blockSpan" />
      <label for="blockSpan">Blockquote spans all columns</label>
    </p>
    <p class="code">
      <input type="range" min="0" max="10" value="1" step="0.5" id="gapSize" />
      <label for="gapSize">column-gap: </label><output id="gap">1em;</output>
    </p>
    <p class="code">
      <input
        type="range"
        min="0"
        max="10"
        value="0.25"
        step="0.25"
        id="columnRuleWidth" />
      <label for="columnRuleWidth">column-rule-width: </label
      ><output id="ruleWidth">0.25em;</output>
    </p>
    <p class="code">
      <label for="colColor">column-rule-color:</label>
      <input type="color" id="colColor" />
    </p>
    <p class="code">
      <label for="columnRuleStyle">column-rule-style:</label>
      <select id="columnRuleStyle">
        <option>none</option>
        <option>hidden</option>
        <option>dotted</option>
        <option selected>dashed</option>
        <option>solid</option>
        <option>double</option>
        <option>groove</option>
        <option>ridge</option>
        <option>inset</option>
        <option>outset</option>
        <option></option>
      </select>
    </p>
  </div>
</fieldset>
```

```js hidden live-sample___multicol
const page = document.querySelector("article");
const title = document.querySelector(".title");
const option = document.querySelector("#options");
const legend = document.querySelector("#options > legend");
const legendBtn = document.querySelector("#options > legend > button");
const blockquote = document.getElementsByTagName("blockquote")[0];

const colCount = document.getElementById("colCount");
const colSpan = document.getElementById("colSpan");
const blockSpan = document.getElementById("blockSpan");

const gapSize = document.getElementById("gapSize");
const gap = document.getElementById("gap");
const columnRuleWidth = document.getElementById("columnRuleWidth");
const ruleWidth = document.getElementById("ruleWidth");
const columnRuleStyle = document.getElementById("columnRuleStyle");
const ruleStyle = document.getElementById("ruleStyle");
const columnRuleColor = document.getElementById("colColor");

// Make options visible if JavaScript is enabled
option.style.display = "revert";

legendBtn.addEventListener("click", () => {
  showAndHideMenu();
});

colCount.addEventListener("change", () => {
  page.style.columnCount = colCount.value;
});

gapSize.addEventListener("change", () => {
  page.style.gap = `${gapSize.value}em`;
  gap.innerText = `${gapSize.value}em;`;
});

columnRuleWidth.addEventListener("change", () => {
  page.style.columnRuleWidth = `${columnRuleWidth.value}em`;
  ruleWidth.innerText = `${columnRuleWidth.value}em;`;
});

columnRuleStyle.addEventListener("change", () => {
  page.style.columnRuleStyle = columnRuleStyle.value;
});

colSpan.addEventListener("change", () => {
  setColSpan(colSpan, title);
});

blockSpan.addEventListener("change", () => {
  setColSpan(blockSpan, blockquote);
});

columnRuleColor.addEventListener("change", () => {
  page.style.columnRuleColor = colColor.value;
});

function showAndHideMenu() {
  if (legendBtn.getAttribute("aria-expanded") === "true") {
    // close it
    legendBtn.setAttribute("aria-expanded", "false");
    legend.classList.add("closed");
    legend.classList.remove("open");
  } else {
    // open it
    legendBtn.setAttribute("aria-expanded", "true");
    legend.classList.remove("closed");
    legend.classList.add("open");
  }
}

function setColSpan(control, element) {
  if (control.checked) {
    element.style.columnSpan = "all";
  } else {
    element.style.columnSpan = "none";
  }
}
```

```css hidden live-sample___multicol
article {
  column-count: 5;
  gap: 1em;
  column-rule: 0.25em dashed currentcolor;
}
.title {
  column-span: all;
  display: flex;
  align-items: baseline;
  gap: 1em;
  flex-wrap: wrap;
}
p {
  margin: 0 0 1em 0;
  line-height: 1.4;
}
.code {
  font-style: monospace;
}
.breakInside * {
  break-inside: avoid;
}
#options {
  position: fixed;
  top: 1rem;
  right: 1rem;
  background: white;
  display: none;
}
fieldset p {
  margin-bottom: 0.25em;
}
legend {
  position: relative;
  top: 0;
  transition: 200ms;
}
legend.closed {
  top: 0.75em;
}
legend.closed + #controls {
  display: none;
}
legend {
  background-color: #dedede;
  padding: 0.5em;
}
legend > button {
  all: unset;
  cursor: pointer;
}
legend.closed {
  margin: -1em;
  display: inline-block;
}
blockquote {
  font-weight: bold;
  font-style: italic;
  margin: 0 0 0.25em 0;
}
blockquote p::before,
blockquote p::after {
  content: '"';
  vertical-align: baseline;
  color: red;
}
```

{{EmbedLiveSample("multicol", "", "800px")}}

Wenn die Spaltenregel größer ist als der Spaltenabstand, erscheint die dekorative Linie hinter dem Text; sie verändert nicht die Größe der Lücke.

## Referenz

### Eigenschaften

- `column-gap`
- `column-rule`
- `column-rule-break`
- `column-rule-color`
- `column-rule-inset`
- `column-rule-inset-cap`
- `column-rule-inset-cap-end`
- `column-rule-inset-cap-start`
- `column-rule-inset-end`
- `column-rule-inset-junction`
- `column-rule-inset-junction-end`
- `column-rule-inset-junction-start`
- `column-rule-inset-start`
- `column-rule-style`
- `column-rule-visibility-items`
- `column-rule-width`
- `gap`
- `row-gap`
- `row-rule`
- `row-rule-break`
- `row-rule-color`
- `row-rule-inset`
- `row-rule-inset-cap`
- `row-rule-inset-cap-end`
- `row-rule-inset-cap-start`
- `row-rule-inset-end`
- `row-rule-inset-junction`
- `row-rule-inset-junction-end`
- `row-rule-inset-junction-start`
- `row-rule-inset-start`
- `row-rule-style`
- `row-rule-visibility-items`
- `row-rule-width`
- `rule`
- `rule-break`
- `rule-color`
- `rule-inset`
- `rule-inset-cap`
- `rule-inset-end`
- `rule-inset-junction`
- `rule-inset-start`
- `rule-overlap`
- `rule-style`
- `rule-visibility-items`
- `rule-width`

### Begriffe und Glossar Definitionen

- {{Glossary("Grid", "Grid")}}
- {{Glossary("Grid_cell", "Gridzelle")}}
- {{Glossary("Grid_column", "Gridspalte")}}
- {{Glossary("Grid_lines", "Gridlinien")}}
- {{Glossary("Grid_row", "Gridreihe")}}
- {{Glossary("Gutters", "Rinnen")}}

## Leitfäden

- [Spalten stylen](/de/docs/Web/CSS/Guides/Multicol_layout/Styling_columns)
  - : Leitfaden zum Stylen von Spalten und Verwalten des Abstands zwischen Spalten.
- [Inhaltsunterbrechungen im Mehrspaltenlayout handhaben](/de/docs/Web/CSS/Guides/Multicol_layout/Handling_content_breaks)
  - : Einführung in die Fragmentierungsspezifikation und wie man steuert, wo Spalteninhalt unterbrochen wird.
- [Leitfäden zur Box-Ausrichtung](/de/docs/Web/CSS/Guides/Box_alignment#guides)
  - : Wie [Box-Ausrichtung](/de/docs/Web/CSS/Guides/Box_alignment/Overview) im Kontext von [Flexbox](/de/docs/Web/CSS/Guides/Box_alignment/In_flexbox), [Grid-Layout](/de/docs/Web/CSS/Guides/Box_alignment/In_grid_layout), [Mehrspalten-Layout](/de/docs/Web/CSS/Guides/Box_alignment/In_multi-column_layout), und für [Block-, absolut positionierte und Tabellen-Layouts](/de/docs/Web/CSS/Guides/Box_alignment/In_block_abspos_tables) funktioniert.

## Verwandte Konzepte

[CSS-Flexbox-Layout](/de/docs/Web/CSS/Guides/Flexible_box_layout) Modul

- `flex`
- `flex-basis`
- `flex-direction`
- `flex-flow`
- `flex-grow`
- `flex-shrink`
- `flex-wrap`

[CSS-Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout) Modul

- `grid`
- `grid-column`
- `grid-row`
- `repeat()`

[CSS-Mehrspalten-Layout](/de/docs/Web/CSS/Guides/Multicol_layout) Modul

- `column-fill`
- `column-span`
- `columns` Kurzschrift
  - `column-count`
  - `column-height`
  - `column-width`
- `column-wrap`
- `::column`

[CSS-Box-Ausrichtung](/de/docs/Web/CSS/Guides/Box_alignment)

- `align-content`
- `justify-content`

[CSS-Boxmodell](/de/docs/Web/CSS/Guides/Box_sizing) Modul

- `height`
- `max-height`
- `block-size`
- `width`
- `max-width`

[CSS-Anzeige](/de/docs/Web/CSS/Guides/Display) Modul

- `display`
- [Leitfaden zum Blockformatierungskontext](/de/docs/Web/CSS/Guides/Display/Block_formatting_context)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Grundkonzepte von Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [Ausrichtung von Elementen in einem Flex-Container](/de/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items)
- [Box-Ausrichtung im Grid-Layout](/de/docs/Web/CSS/Guides/Box_alignment/In_grid_layout)
