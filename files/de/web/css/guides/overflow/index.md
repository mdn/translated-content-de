---
title: CSS overflow
short-title: Overflow
slug: Web/CSS/Guides/Overflow
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die Eigenschaften des **CSS overflow**-Moduls ermöglichen es Ihnen, scrollbareren Überlauf in visuellen Medien zu verwalten.

Ein Überlauf tritt auf, wenn der Inhalt eines Elementkastens über eine oder mehrere Kanten des Kastens hinausgeht. **Scrollbarer Überlauf** ist der Inhalt, der außerhalb des Elementkastens erscheint, für den Sie möglicherweise einen Scroll-Mechanismus hinzufügen möchten. Mit den CSS-Overflow-Eigenschaften können Sie steuern, was passiert, wenn der Inhalt einen Elementkasten überläuft, einschließlich der Erstellung von Karussells ohne JavaScript.

Malereffekte, die den Inhalt überlaufen, aber nicht am CSS-Box-Modell teilnehmen, wirken sich nicht auf das Layout aus. Diese Art von Überlauf wird auch als {{Glossary("ink_overflow", "Tintenüberlauf")}} bezeichnet. Beispiele für Tintenüberläufe sind Box-Schattierungen, Rahmenbilder, Textdekorationen, überhängende Glyphen und Umrisse. Tintenüberläufe erweitern die scrollbarere Überlaufregion nicht.

## Überlauf in Aktion

Probieren Sie das folgende Beispiel aus, um die Auswirkungen der verschiedenen `overflow`-Eigenschaftswerte auf den Überlauf des Inhalts und die Scrollbars im benachbarten, fest dimensionierten Kasten zu sehen.

Das Beispiel enthält Optionen zum Ändern der Werte für die Eigenschaften `overflow-clip-margin` und `width` sowie zum programmatischen Scrollen des Inhalts, wenn die Overflow-Eigenschaft einen {{Glossary("scroll_container", "Scroll-Container")}} erstellt. Wählen Sie `overflow: clip` und sehen Sie die Auswirkungen verschiedener `overflow-clip-margin`-Werte. Wählen Sie `overflow: hidden` oder `overflow: scroll`, um die verschiedenen Einstellungen der `ScrollLeft`- und `ScrollTop`-Schieberegler zu überprüfen.

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
      <input type="number" id="ocm" value="1" min="0" max="10" />
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

Ein Link ist im Inhaltskasten oben enthalten, um die Auswirkungen des Tastaturfokus auf Überlauf und Scrollverhalten zu demonstrieren. Versuchen Sie, zur Verknüpfung zu navigieren oder den Inhalt programmgesteuert zu scrollen: Der Inhalt wird nur scrollen, wenn der enumerierte `<overflow>`-Wert einen Scroll-Container erstellt.

## Referenz

### Eigenschaften

- {{CSSxRef("line-clamp")}}
- {{CSSxRef("overflow")}} Shorthand
- {{CSSxRef("overflow-block")}}
- {{CSSxRef("overflow-clip-margin")}}
- {{CSSxRef("overflow-inline")}}
- {{CSSxRef("overflow-x")}}
- {{CSSxRef("overflow-y")}}
- {{CSSxRef("scroll-behavior")}}
- {{cssxref("scroll-marker-group")}}
- {{cssxref("scroll-target-group")}}
- {{CSSxRef("scrollbar-gutter")}}
- {{CSSxRef("text-overflow")}}

Das CSS overflow Stufe 4 Modul führt auch die Eigenschaften `block-ellipsis`, `continue`, `max-lines`, `overflow-clip-margin-block`, `overflow-clip-margin-block-end`, `overflow-clip-margin-block-start`, `overflow-clip-margin-bottom`, `overflow-clip-margin-inline`, `overflow-clip-margin-inline-end`, `overflow-clip-margin-inline-start`, `overflow-clip-margin-left`, `overflow-clip-margin-right` und `overflow-clip-margin-top` ein. Derzeit unterstützen keine Browser diese Funktionen.

### Selektoren und Pseudoelemente

- {{cssxref("::scroll-button()")}}
- {{cssxref("::scroll-marker")}}
- {{cssxref("::scroll-marker-group")}}
- {{cssxref(":target-current")}}

### Datentypen

- [`<overflow>`](/de/docs/Web/CSS/Reference/Values/overflow_value) enumerierte Werte

### Glossarbegriffe und Definitionen

- {{Glossary("Scroll_container", "Scroll-Container")}}
- {{Glossary("Scroll_container#scrollport", "Scrollport")}}

## Leitfäden

- [Lernen: Überlaufender Inhalt](/de/docs/Learn_web_development/Core/Styling_basics/Overflow)
  - : Lernen Sie, was Überlauf ist und wie Sie ihn verwalten können.
- [Erstellen von CSS-Karussells](/de/docs/Web/CSS/Guides/Overflow/Carousels)
  - : Erstellen Sie rein-CSS-Karussell-UI-Features mit Scroll-Tasten, Scroll-Markierungen und erzeugten Spalten.
- [Erstellen einer benannten Scroll-Progress-Zeitachsen-Animation](/de/docs/Web/CSS/Reference/Properties/scroll-timeline-name#creating_a_named_scroll_progress_timeline_animation)
  - : Die CSS-Scroll-Zeitachse {{cssxref('scroll-timeline-name')}} und {{cssxref('scroll-timeline-axis')}} Eigenschaften zusammen mit der {{cssxref('scroll-timeline')}} Shorthand erstellen Animationen, die mit dem Scroll-Offset eines Scroll-Containers verbunden sind.

## Verwandte Konzepte

- {{cssxref("::column")}}
- {{CSSxRef("scrollbar-width")}} CSS-Eigenschaft
- {{CSSxRef("scrollbar-color")}} CSS-Eigenschaft
- {{CSSxRef("scrollbar-gutter")}} CSS-Eigenschaft
- {{CSSxRef("scroll-behavior")}} CSS-Eigenschaft
- {{cssxref("scroll-margin")}} CSS Shorthand-Eigenschaft
- {{cssxref("scroll-padding")}} CSS Shorthand-Eigenschaft
- {{cssxref("scroll-snap-align")}} CSS-Eigenschaft
- {{cssxref("scroll-snap-stop")}} CSS-Eigenschaft
- {{cssxref("scroll-snap-type")}} CSS-Eigenschaft
- {{cssxref("text-overflow")}} CSS-Eigenschaft
- {{CSSxRef("::-webkit-scrollbar")}} Pseudoelement
- [`scrollbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role) ARIA-Rolle
- Element-Methode [`scroll()`](/de/docs/Web/API/Element/scroll)
- Element-Methode [`scrollBy()`](/de/docs/Web/API/Element/scrollBy)
- Element-Methode [`scrollIntoView()`](/de/docs/Web/API/Element/scrollIntoView)
- Element-Methode [`scrollTo()`](/de/docs/Web/API/Element/scrollTo)
- Element-Eigenschaft [`scrollTop`](/de/docs/Web/API/Element/scrollTop)
- Element-Eigenschaft [`scrollLeft`](/de/docs/Web/API/Element/scrollLeft)
- Element-Eigenschaft [`scrollWidth`](/de/docs/Web/API/Element/scrollWidth)
- Element-Eigenschaft [`scrollHeight`](/de/docs/Web/API/Element/scrollHeight)
- Dokument-Ereignis [`scroll`](/de/docs/Web/API/Document/scroll_event)
- Glossarbegriff {{Glossary("Scroll_container", "Scroll-Container")}}
- Glossarbegriff {{Glossary("Ink_overflow", "Tintenüberlauf")}}

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS Scrollbars-Styling](/de/docs/Web/CSS/Guides/Scrollbars_styling) Modul
- [CSS Scroll Snap](/de/docs/Web/CSS/Guides/Scroll_snap) Modul
- [CSSOM View](/de/docs/Web/CSS/Guides/CSSOM_view) Modul
- Anleitung zum [Debuggen von scrollbareren Überlauf](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/debug_scrollable_overflow/index.html)
