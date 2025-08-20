---
title: CSS overflow
slug: Web/CSS/CSS_overflow
l10n:
  sourceCommit: 886f2641ae90a70858c5e7d0d20959c70ee44d9d
---

Die Eigenschaften des **CSS overflow**-Moduls ermöglichen es Ihnen, scrollbares Überlaufen in visuellen Medien zu handhaben.

Ein Überlauf tritt auf, wenn der Inhalt eines Elementrahmens eine oder mehrere Kanten des Rahmens überschreitet. **Scrollbarer Überlauf** ist der Inhalt, der außerhalb des Elementrahmens erscheint, für den Sie möglicherweise einen Scroll-Mechanismus hinzufügen möchten. CSS-Überlaufeigenschaften lassen Sie kontrollieren, was passiert, wenn Inhalte einen Elementrahmen überlaufen, einschließlich der Erstellung von Karussells ohne JavaScript.

Malereffekte, die den Inhalt überlaufen, aber nicht am CSS-Boxmodell teilnehmen, beeinflussen das Layout nicht. Diese Art von Überlauf ist auch als {{Glossary("ink_overflow", "tinten Überlauf")}} bekannt. Beispiele für Tintenüberläufe sind Boxschatten, Rahmenbilder, Textdekorationen, überhängende Glyphen und Umrisse. Tintenüberläufe erweitern nicht den scrollbaren Überlaufbereich.

## Überlauf in Aktion

Probieren Sie das folgende Beispiel aus, um die Effekte der verschiedenen `overflow`-Eigenschaftswerte auf den Inhaltsüberlauf und die Scrollleisten in dem angrenzenden festen Rahmen zu sehen.

Das Beispiel enthält Optionen zum Ändern der Werte für die Eigenschaften `overflow-clip-margin` und `width`, sowie um den Inhalt programmatisch zu scrollen, wenn die Überlaufeigenschaft einen {{Glossary("scroll_container", "scroll container")}} erstellt. Wählen Sie `overflow: clip` und sehen Sie den Effekt verschiedener `overflow-clip-margin`-Werte. Wählen Sie `overflow: hidden` oder `overflow: scroll`, um die verschiedenen Einstellungen der `ScrollLeft`- und `ScrollTop`-Schieberegler zu überprüfen.

```html hidden live-sample___overflow
<article>
  <fieldset>
    <legend>Select options:</legend>
    <label
      ><code>overflow</code>:
      <select id="overflowValue">
        <option>hidden</option>
        <option>clip</option>
        <option>scroll</option>
        <option>auto</option>
        <option selected>visible</option>
        <option>overlay</option>
      </select>
    </label>
    <label>
      <code>overflow-clip-margin</code>:
      <input type="number" id="ocm" value="1" min="0" max="10" size="2" />
      <code>em</code>
    </label>
    <label
      ><input type="checkbox" id="wide" /> <code>width</code>:
      <code>20em</code> or <code>40em</code></label
    >
    <fieldset>
      <legend>Scroll programmatically:</legend>
      <label
        >ScrollLeft:
        <input type="range" min="0" max="100" value="0" id="scrollL"
      /></label>
      <label
        >ScrollTop:
        <input type="range" min="0" max="100" value="0" id="scrollT"
      /></label>
    </fieldset>
  </fieldset>
  <pre class="visible">&nbsp;
    Oh, Rubber Duckie, you're the one
    You make bath time lots of fun
    Rubber Duckie, I'm awfully fond of you

    Rubber Duckie, joy of joys
    When I squeeze you, you make noise
    Rubber Duckie, you're my very best friend, it's true

    Oh, every day when I make my way to the tubby
    I find a little fella who's cute and yellow and chubby
    Rub-a-dub-dubby

    <a href="#">Rubber Duckie</a>, you're so fine
    And I'm lucky that you're mine
    Rubber Duckie, I'm awfully fond of you
      </pre>
</article>
```

```css hidden live-sample___overflow
article {
  display: flex;
  gap: 1em;
}

label {
  display: block;
  white-space: nowrap;
}

pre {
  border: 2px dashed crimson;
  height: 150px;
  width: 20em;
  margin-bottom: 3em;
  overflow-clip-margin: 1em;
  text-align: center;
}

.wide {
  width: 40em;
}

::before {
  font-weight: bold;
  color: white;
  background: crimson;
  display: inline-block;
  min-width: 50%;
  padding: 3px 5px;
  box-sizing: border-box;
}

.hidden {
  overflow: hidden;
}
.hidden::before {
  content: "hidden: ";
}

.clip {
  overflow: clip;
}
.clip::before {
  content: "clip: ";
}

.scroll {
  overflow: scroll;
}
.scroll::before {
  content: "scroll: ";
}

.auto {
  overflow: auto;
}
.auto::before {
  content: "auto: ";
}

.overlay {
  overflow: clip;
  overflow: overlay;
}
.overlay::before {
  content: "overlay (or clip if not supported): ";
}

.visible {
  overflow: visible;
}
.visible::before {
  content: "visible: ";
}

article:not(:has(pre.clip)) > fieldset > label:nth-of-type(2),
article:not(:has(pre.hidden, pre.scroll, pre.auto, pre.overlay))
  fieldset
  fieldset {
  opacity: 20%;
  pointer-events: none;
}
```

```js hidden live-sample___overflow
const pre = document.querySelector("pre");
const val = document.getElementById("overflowValue");
const check = document.getElementById("wide");
const ocm = document.getElementById("ocm");
const scrollL = document.getElementById("scrollL");
const scrollT = document.getElementById("scrollT");

val.addEventListener("change", () => {
  if (pre.classList.contains("wide")) {
    pre.className = `wide ${val.value}`;
  } else {
    pre.className = `${val.value}`;
  }
  scrollExample();
  clipMargin();
});

wide.addEventListener("change", () => {
  pre.classList.toggle("wide");
  scrollExample();
});

ocm.addEventListener("change", () => {
  clipMargin();
});

scrollL.addEventListener("change", () => {
  scrollExample();
});
scrollT.addEventListener("change", () => {
  scrollExample();
});

function scrollExample() {
  pre.scrollTo({
    top: scrollT.value,
    left: scrollL.value * 2,
    behavior: "smooth",
  });
}

function clipMargin() {
  pre.style.overflowClipMargin = `${ocm.value}em`;
}
```

{{EmbedLiveSample("overflow", "", "400px")}}

Ein Link ist im Inhaltsfeld oben enthalten, um die Effekte des Tastaturfokus auf Überlauf und Scroll-Verhalten zu demonstrieren. Versuchen Sie, mit der Tabulator-Taste zum Link zu gelangen oder den Inhalt programmatisch zu scrollen: Der Inhalt wird nur gescrollt, wenn der aufgezählte `<overflow>`-Wert einen Scroll-Container erstellt.

## Referenz

### Eigenschaften

- {{CSSxRef("line-clamp")}}
- {{CSSxRef("overflow")}} Kurzschreibweise
- {{CSSxRef("overflow-block")}}
- {{CSSxRef("overflow-clip-margin")}}
- {{CSSxRef("overflow-inline")}}
- {{CSSxRef("overflow-x")}}
- {{CSSxRef("overflow-y")}}
- {{CSSxRef("scroll-behavior")}}
- {{cssxref("scroll-marker-group")}}
- {{CSSxRef("scrollbar-gutter")}}
- {{CSSxRef("text-overflow")}}

Das CSS overflow Level-4-Modul führt zudem die Eigenschaften `block-ellipsis`, `continue`, `max-lines`, `overflow-clip-margin-block`, `overflow-clip-margin-block-end`, `overflow-clip-margin-block-start`, `overflow-clip-margin-bottom`, `overflow-clip-margin-inline`, `overflow-clip-margin-inline-end`, `overflow-clip-margin-inline-start`, `overflow-clip-margin-left`, `overflow-clip-margin-right`, und `overflow-clip-margin-top` ein. Derzeit unterstützt kein Browser diese Features.

### Selektoren und Pseudo-Elemente

- {{cssxref("::scroll-button()")}}
- {{cssxref("::scroll-marker")}}
- {{cssxref("::scroll-marker-group")}}
- {{cssxref(":target-current")}}

### Datentypen

- [`<overflow>`](/de/docs/Web/CSS/overflow_value) aufgezählte Werte

## Leitfäden

- [Lernen: Überlaufender Inhalt](/de/docs/Learn_web_development/Core/Styling_basics/Overflow)
  - : Lernen Sie, was Überlauf ist und wie Sie ihn verwalten können.
- [Erstellen von CSS-Karussells](/de/docs/Web/CSS/CSS_overflow/CSS_carousels)
  - : Erstellen Sie reine CSS-Karussell-UI-Features mit Scroll-Schaltflächen, Scroll-Markern und generierten Spalten.
- [Erstellen einer benannten Scroll-Fortschritts-Timeline-Animation](/de/docs/Web/CSS/scroll-timeline-name#creating_a_named_scroll_progress_timeline_animation)
  - : Die CSS-Scroll-Timeline {{cssxref('scroll-timeline-name')}} und {{cssxref('scroll-timeline-axis')}} Eigenschaften, zusammen mit der {{cssxref('scroll-timeline')}} Kurzschreibweise, erzeugen Animationen, die an den Scroll-Offset eines Scroll-Containers gebunden sind.

## Verwandte Konzepte

- {{cssxref("::column")}}
- {{CSSxRef("scrollbar-width")}} CSS-Eigenschaft
- {{CSSxRef("scrollbar-color")}} CSS-Eigenschaft
- {{CSSxRef("scrollbar-gutter")}} CSS-Eigenschaft
- {{CSSxRef("scroll-behavior")}} CSS-Eigenschaft
- {{cssxref("scroll-margin")}} CSS-Kurzschreibweise
- {{cssxref("scroll-padding")}} CSS-Kurzschreibweise
- {{cssxref("scroll-snap-align")}} CSS-Eigenschaft
- {{cssxref("scroll-snap-stop")}} CSS-Eigenschaft
- {{cssxref("scroll-snap-type")}} CSS-Eigenschaft
- {{cssxref("text-overflow")}} CSS-Eigenschaft
- {{CSSxRef("::-webkit-scrollbar")}} Pseudo-Element
- [`scrollbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role) ARIA-Rolle
- Element [`scroll()`](/de/docs/Web/API/Element/scroll) Methode
- Element [`scrollBy()`](/de/docs/Web/API/Element/scrollBy) Methode
- Element [`scrollIntoView()`](/de/docs/Web/API/Element/scrollIntoView) Methode
- Element [`scrollTo()`](/de/docs/Web/API/Element/scrollTo) Methode
- Element [`scrollTop`](/de/docs/Web/API/Element/scrollTop) Eigenschaft
- Element [`scrollLeft`](/de/docs/Web/API/Element/scrollLeft) Eigenschaft
- Element [`scrollWidth`](/de/docs/Web/API/Element/scrollWidth) Eigenschaft
- Element [`scrollHeight`](/de/docs/Web/API/Element/scrollHeight) Eigenschaft
- Dokument [`scroll`](/de/docs/Web/API/Document/scroll_event) Ereignis
- {{Glossary("Scroll_container", "Scroll-Container")}} Glossar
- {{Glossary("Ink_overflow", "Tintenüberlauf")}} Glossar

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Scrollleisten-Styling](/de/docs/Web/CSS/CSS_scrollbars_styling) Modul
- [CSS scroll snap](/de/docs/Web/CSS/CSS_scroll_snap) Modul
- [CSSOM view](/de/docs/Web/CSS/CSSOM_view) Modul
- Anleitung zum [Debuggen von scrollbarem Überlauf](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/debug_scrollable_overflow/index.html)
