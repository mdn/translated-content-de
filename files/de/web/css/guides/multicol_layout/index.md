---
title: CSS Multi-Column Layout
short-title: Multi-Column Layout
slug: Web/CSS/Guides/Multicol_layout
l10n:
  sourceCommit: 0ab262675372b83fc870accf3dc46d6a367c451c
---

Das Modul **CSS Multi-Column Layout** ermöglicht es Ihnen, Inhalte auf mehrere Spalten zu verteilen. Indem Sie die Eigenschaften in diesem Modul verwenden, können Sie die gewünschte Anzahl und Breite der Spalten, die Größe des Zwischenraums sowie das visuelle Erscheinungsbild der optionalen Spaltentrennungslinien (bekannt als Spaltenregeln) definieren. Sie können auch festlegen, wie Inhalte von Spalte zu Spalte fließen und wie der Inhalt zwischen Spalten getrennt werden soll.

## Multi-Column Layout in Aktion

In diesem Beispiel wird die Rede von Kanadas hundertjähriger Feier 1967, _A Lament for Confederation_ von Chief Dan George, über mehrere Spalten hinweg angezeigt, ähnlich wie Artikel in gedruckten Zeitungen. Wenn Sie JavaScript aktiviert haben, ermöglichen Ihnen die Steuerelemente, die bevorzugte Spaltenanzahl und -breite zu ändern, die Breite des Zwischenraums, ob der Titel und ein Beispiel-Blockzitat in einer einzelnen Spalte enthalten oder über alle Spalten verteilt sein sollen und ob das Brechen innerhalb der Absätze vermieden werden soll.

```html hidden live-sample___multicol
<article>
  <div class="title">
    <h1>A Lament for Confederation</h1>
    <p>&mdash;Chief Dan George, 1967</p>
  </div>
  <p>
    How long have I known you, Oh Canada? A hundred years? Yes, a hundred years.
    And many, many tides more. And today, when you celebrate your hundred years,
    Oh Canada, I am sad for all the Indian people throughout the land.
  </p>
  <p>
    For I have known you when your forests were mine; when they gave me my meat
    and my clothing. I have known you in your fruits and rivers where your fish
    flashed and danced in the sun, where the waters said 'come and eat of my
    abundance.' I have known you in the freedom of your winds. And my spirit,
    like your winds, once roamed this good lands.
  </p>
  <blockquote>
    <p>
      But in long the hundred years since the white man came, I have seen that
      freedom disappear just like the salmon going mysteriously out to sea.
    </p>
  </blockquote>
  <p>
    The white man's strange customs I could not understand, pressed down upon me
    until I could no longer breathe.
  </p>
  <p>
    When I fought to protect my home and my land, I was called a savage. When I
    neither understood nor welcomed this new way of life, I was called lazy.
    When I tried to rule my people, I was stripped of my authority.
  </p>
  <p>
    My nation was ignored in your history textbooks – we were less important in
    the history of Canada than the buffalo that ranged the plains. I was
    ridiculed in your plays and motion pictures, and when I drank your
    fire-water, I got drunk – very, very drunk. And I forgot.
  </p>
  <p>
    Oh Canada, how can I celebrate with you this centenary, this hundred years?
    Shall I thank you for the reserves that are left me of my beautiful forests?
    Shall I thank you for the canned fish of my rivers? Shall I thank you for
    the loss of my pride and authority, even among my own people? For the lack
    of my will to fight back? No! I must forget what is past and gone.
  </p>
  <p>
    Oh God in heaven! Give me the courage of the olden chiefs. Let me wrestle
    with my surroundings. Let me once again, as in the days of old, dominate my
    environment. Let me humbly accept this new culture and through it rise up
    and go on.
  </p>
  <p>
    Oh god, like the thunderbird of old, I shall rise again out of the sea. I
    shall grab the instruments of the white man's success – his education, his
    skills, and with these new tools I shall build my race into the proudest
    segment of your society. And, before I follow the great chiefs who have gone
    before us, I shall see these things come to pass.
  </p>
  <p>
    I shall see our young braves and our chiefs sitting in the house of law and
    government, ruling and being ruled by the knowledge and freedoms of our
    great land. So shall we shatter the barriers of our isolation. So shall the
    next hundred years be the greatest in the proud history of our tribes and
    nations.
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
      <input type="range" min="0" max="5" value="5" id="colCount" />
      <label for="colCount">Max # of columns:</label>
    </p>
    <p>
      <input type="range" min="2" max="40" value="10" step="2" id="colWidth" />
      <label for="colWidth">Min width of columns:</label>
    </p>
    <p>
      <input type="range" min="0" max="10" value="1" step="0.5" id="gapSize" />
      <label for="gapSize">Gap size:</label>
    </p>
    <p>
      <input type="checkbox" checked id="colSpan" />
      <label for="colSpan">Byline spans all columns</label>
    </p>
    <p>
      <input type="checkbox" id="blockSpan" />
      <label for="blockSpan">Blockquote spans all columns</label>
    </p>
    <p>
      <input type="checkbox" id="colFill" />
      <label for="colFill">Balance columns</label>
    </p>
    <p>
      <input type="checkbox" id="break" />
      <label for="break">Don't break paragraphs</label>
    </p>
  </div>
</fieldset>
```

```js hidden live-sample___multicol
const page = document.querySelector("article");
const title = document.querySelector(".title");
const options = document.querySelector("#options");
const legend = document.querySelector("#options > legend");
const legendBtn = document.querySelector("#options > legend > button");
const blockquote = document.getElementsByTagName("blockquote")[0];

const colCount = document.getElementById("colCount");
const colWidth = document.getElementById("colWidth");
const gapSize = document.getElementById("gapSize");
const colSpan = document.getElementById("colSpan");
const blockSpan = document.getElementById("blockSpan");
const colFill = document.getElementById("colFill");
const breakP = document.getElementById("break");

// make options visible if js is enabled
options.style.display = "revert";

legendBtn.addEventListener("click", () => {
  showAndHideMenu();
});

colCount.addEventListener("change", () => {
  page.style.columnCount = colCount.value;
});

colWidth.addEventListener("change", () => {
  page.style.columnWidth = `${colWidth.value}em`;
});

gapSize.addEventListener("change", () => {
  page.style.gap = `${gapSize.value}em`;
});

colSpan.addEventListener("change", () => {
  setColSpan(colSpan, title);
});

blockSpan.addEventListener("change", () => {
  setColSpan(blockSpan, blockquote);
});

colFill.addEventListener("change", () => {
  if (colFill.checked) {
    page.style.columnFill = "balance";
  } else {
    page.style.columnFill = "auto";
  }
});

breakP.addEventListener("change", () => {
  if (breakP.checked) {
    page.classList.add("breakInside");
  } else {
    page.classList.remove("breakInside");
  }
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
  column-width: 8em;
  widows: 3;
  orphans: 3;
  gap: 1em;
  column-rule: 2px dashed #666666;
  height: 50em;
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
  border: 2px dashed red;
  margin: 0 0 0.25em 0;
}
blockquote p {
  margin-bottom: 0;
}
blockquote p::before,
blockquote p::after {
  content: '"';
  font-size: 1.2em;
  vertical-align: baseline;
  color: red;
}
```

{{EmbedLiveSample("multicol", "", "800px")}}

> [!NOTE]
> Das Multi-Column Layout steht in enger Beziehung zu [seitenorientierten Medien](/de/docs/Web/CSS/Guides/Paged_media). Jede Spaltenbox ist ein Fragment, ähnlich wie jede gedruckte Seite ein Fragment eines Dokuments ist. Mit den im [CSS-Fragmentierungsmodul](/de/docs/Web/CSS/Guides/Fragmentation) definierten Eigenschaften können Sie steuern, wie Inhalte zwischen Spalten und Seiten aufgeteilt werden.

## Referenz

### Eigenschaften

- {{cssxref("column-fill")}}
- {{cssxref("column-gap")}}
- {{cssxref("column-span")}}
- {{cssxref("column-rule")}} Kurzform
  - {{cssxref("column-rule-color")}}
  - {{cssxref("column-rule-style")}}
  - {{cssxref("column-rule-width")}}
- {{cssxref("columns")}} Kurzform
  - {{cssxref("column-count")}}
  - {{cssxref("column-width")}}

> [!NOTE]
> Bitte bedenken Sie, dass die Festlegung der Containerhöhe und der Zeilenlänge Herausforderungen für Menschen mit Seh- oder kognitiven Behinderungen darstellen kann. [WCAG-Erfolgskriterium 1.4.8](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background) besagt, dass der Inhalt auch bei einer Verdopplung der Textgröße nicht gescrollt werden muss.

## Selektoren und Pseudo-Elemente

- {{cssxref("::column")}}

## Leitfäden

- [Grundkonzepte von Multi-Column Layouts](/de/docs/Web/CSS/Guides/Multicol_layout/Basic_concepts)
  - : Überblick über die Spezifikation des Multi-Column Layouts.
- [Verwendung von Multi-Column Layouts](/de/docs/Web/CSS/Guides/Multicol_layout/Using)
  - : Anleitung zur Verwendung von Multi-Column Eigenschaften für das Layout von Text.
- [Styling von Spalten](/de/docs/Web/CSS/Guides/Multicol_layout/Styling_columns)
  - : Leitfaden zum Styling von Spalten und zur Verwaltung des Abstands zwischen Spalten.
- [Spanning und Balancing](/de/docs/Web/CSS/Guides/Multicol_layout/Spanning_balancing_columns)
  - : Wie Sie Elemente über alle Spalten erstrecken lassen und die Füllung der Spalten steuern können.
- [Umgang mit Überlauf in Multi-Column Layouts](/de/docs/Web/CSS/Guides/Multicol_layout/Handling_overflow)
  - : Was passiert, wenn ein Element die Spalte, in der es sich befindet, überläuft und was passiert, wenn es zu viele Spalteninhalte gibt, um in einen Container zu passen.
- [Umgang mit Inhaltsumbrüchen in Multi-Column Layouts](/de/docs/Web/CSS/Guides/Multicol_layout/Handling_content_breaks)
  - : Einführung in die Fragmentierungsspezifikation und wie man steuert, wo Spalteninhalte unterbrochen werden.
- [Erstellung von CSS-Karussells](/de/docs/Web/CSS/Guides/Overflow/Carousels)
  - : Erstellen Sie reine CSS-Karussell-Benutzeroberflächen mit Scroll-Schaltflächen, Scrollmarkierungen und generierten Spalten.

## Verwandte Konzepte

[CSS-Fragmentierung](/de/docs/Web/CSS/Guides/Fragmentation) Modul

- {{cssxref("break-after")}}
- {{cssxref("break-before")}}
- {{cssxref("break-inside")}}
- {{cssxref("orphans")}}
- {{cssxref("widows")}}

[CSS-Box-Ausrichtung](/de/docs/Web/CSS/Guides/Box_alignment) Modul

- {{cssxref("gap")}}

[CSS-Box-Größenbestimmung](/de/docs/Web/CSS/Guides/Box_sizing) Modul

- {{cssxref("height")}}
- {{cssxref("max-height")}}
- {{cssxref("block-size")}}
- {{cssxref("width")}}
- {{cssxref("max-width")}}

[CSS-Überlauf](/de/docs/Web/CSS/Guides/Overflow) Modul

- {{cssxref("overflow")}}
- {{cssxref("::scroll-marker")}}
- {{cssxref("::scroll-marker-group")}}
- {{Glossary("Scroll_container", "Scroll-Container")}} Glossarbegriff

[CSS-Anzeige](/de/docs/Web/CSS/Guides/Display) Modul

- [Blockformatierungskontext](/de/docs/Web/CSS/Guides/Display/Block_formatting_context) Leitfaden

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Lernen: Multi-Column Layout](/de/docs/Learn_web_development/Core/CSS_layout/Multiple-column_Layout)
- [CSS-Fragmentierung](/de/docs/Web/CSS/Guides/Fragmentation) Modul
- [CSS Flexibles Box-Layout](/de/docs/Web/CSS/Guides/Flexible_box_layout) Modul
- [CSS Raster-Layout](/de/docs/Web/CSS/Guides/Grid_layout) Modul
- [CSS Seitenmedien](/de/docs/Web/CSS/Guides/Paged_media) Modul
