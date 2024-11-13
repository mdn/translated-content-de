---
title: CSS overflow
slug: Web/CSS/CSS_overflow
l10n:
  sourceCommit: 02cc9311b281b73322c5d13185119d2e8adf336a
---

{{CSSRef}}

Die **CSS overflow** Modul-Eigenschaften ermöglichen Ihnen, das scrollbar Überlaufen in visuellen Medien zu handhaben.

Überlauf tritt auf, wenn der Inhalt in einem Elementkasten über eine oder mehrere Kanten des Kastens hinausgeht. **Scrollbar Überlauf** ist der Inhalt, der außerhalb des Elementkastens erscheint und für den Sie möglicherweise einen Scrollmechanismus hinzufügen möchten. CSS overflow-Eigenschaften ermöglichen es Ihnen, zu kontrollieren, was passiert, wenn Inhalte einen Elementkasten überlaufen.

Malereffekte, die den Inhalt überlaufen, aber nicht am CSS-Boxmodell teilnehmen, beeinflussen nicht das Layout. Diese Art von Überlauf wird auch als {{Glossary("ink_overflow", "Tintenüberlauf")}} bezeichnet. Beispiele für Tintenüberläufe sind Box-Schatten, Rahmenbilder, Textdekorationen, überhängende Glyphen und Umrisse. Tintenüberläufe erweitern nicht den scrollbar Überlaufbereich.

## Overflow in Aktion

Probieren Sie das folgende Beispiel, um die Auswirkungen der verschiedenen `overflow`-Eigenschaftswerte auf den Inhaltsüberlauf und die Scrollbalken im angrenzenden festen Größe-Kasten zu sehen.

Das Beispiel enthält Optionen, um die Werte für die `overflow-clip-margin`- und `width`-Eigenschaften zu ändern sowie um den Inhalt programmatisch zu scrollen, wenn die overflow-Eigenschaft einen {{Glossary("scroll_container", "scroll container")}} erstellt. Wählen Sie `overflow: clip` und sehen Sie die Wirkung verschiedener `overflow-clip-margin`-Werte. Wählen Sie `overflow: hidden` oder `overflow: scroll` um die verschiedenen `ScrollLeft`- und `ScrollTop`-Schieberegler-Einstellungen zu überprüfen.

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

<script>
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
</script>
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
  overflow: hidden hidden;
}
.hidden::before {
  content: "hidden: ";
}

.clip {
  overflow: clip clip;
}
.clip::before {
  content: "clip: ";
}

.scroll {
  overflow: scroll scroll;
}
.scroll::before {
  content: "scroll: ";
}

.auto {
  overflow: auto auto;
}
.auto::before {
  content: "auto: ";
}

.overlay {
  overflow: clip clip;
  overflow: overlay overlay;
}
.overlay::before {
  content: "overlay (or clip if not supported): ";
}

.visible {
  overflow: visible visible;
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

{{EmbedLiveSample("overflow", "", "400px")}}

Ein Link ist im Inhaltskasten oben enthalten, um die Auswirkungen von Tastaturfokus auf Überlauf und Scrollverhalten zu demonstrieren. Versuchen Sie, zum Link zu wechseln oder den Inhalt programmatisch zu scrollen: der Inhalt wird nur dann scrollen, wenn der aufgezählte `<overflow>`-Wert einen Scrollcontainer erstellt.

## Referenz

### CSS Eigenschaften

- {{CSSxRef("overflow")}} Kurzschrift
- {{CSSxRef("overflow-block")}}
- {{CSSxRef("overflow-clip-margin")}}
- {{CSSxRef("overflow-inline")}}
- {{CSSxRef("overflow-x")}}
- {{CSSxRef("overflow-y")}}
- {{CSSxRef("scroll-behavior")}}
- {{CSSxRef("scrollbar-gutter")}}
- {{CSSxRef("text-overflow")}}
- {{CSSxRef("-webkit-line-clamp")}}

> [!NOTE]
> Das CSS overflow Modul Level 4 führt die Eigenschaften `block-ellipsis`, `continue`, `line-clamp` und `max-lines` ein. Diese wurden noch nicht implementiert.

### Datentypen

- [`<overflow>`](/de/docs/Web/CSS/overflow_value) aufgezählte Werte

## Leitfäden

- [Überlaufender Inhalt](/de/docs/Learn/CSS/Building_blocks/Overflowing_content)
  - : CSS-Baustein: lernen Sie, was Überlauf ist und wie Sie ihn verwalten.
- [Erstellen einer benannten Scroll-Fortschritts-Zeitachsen-Animation](/de/docs/Web/CSS/scroll-timeline-name#creating_a_named_scroll_progress_timeline_animation)
  - : Die CSS-Scroll-Zeitachse {{cssxref('scroll-timeline-name')}} und {{cssxref('scroll-timeline-axis')}} Eigenschaften sowie die {{cssxref('scroll-timeline')}} Kurzschrift erstellen Animationen, die an den Scroll-Offset eines Scrollcontainers gebunden sind.

## Verwandte Konzepte

- {{CSSxRef("scrollbar-width")}} CSS-Eigenschaft
- {{CSSxRef("scrollbar-color")}} CSS-Eigenschaft
- {{CSSxRef("scrollbar-gutter")}} CSS-Eigenschaft
- {{CSSxRef("scroll-behavior")}} CSS-Eigenschaft
- {{cssxref("scroll-margin")}} CSS-Kurzschrift-Eigenschaft
- {{cssxref("scroll-padding")}} CSS-Kurzschrift-Eigenschaft
- {{cssxref("scroll-snap-align")}} CSS-Eigenschaft
- {{cssxref("scroll-snap-stop")}} CSS-Eigenschaft
- {{cssxref("scroll-snap-type")}} CSS-Eigenschaft
- {{cssxref("text-overflow")}} CSS-Eigenschaft
- {{CSSxRef("::-webkit-scrollbar")}} Pseudo-Element
- [`scrollbar`](/de/docs/Web/Accessibility/ARIA/Roles/scrollbar_role) ARIA-Rolle
- Element-Methode [`scroll()`](/de/docs/Web/API/Element/scroll)
- Element-Methode [`scrollBy()`](/de/docs/Web/API/Element/scrollBy)
- Element-Methode [`scrollIntoView()`](/de/docs/Web/API/Element/scrollIntoView)
- Element-Methode [`scrollTo()`](/de/docs/Web/API/Element/scrollTo)
- Element-Eigenschaft [`scrollTop`](/de/docs/Web/API/Element/scrollTop)
- Element-Eigenschaft [`scrollLeft`](/de/docs/Web/API/Element/scrollLeft)
- Element-Eigenschaft [`scrollWidth`](/de/docs/Web/API/Element/scrollWidth)
- Element-Eigenschaft [`scrollHeight`](/de/docs/Web/API/Element/scrollHeight)
- Dokument-Ereignis [`scroll`](/de/docs/Web/API/Document/scroll_event)
- {{Glossary("Scroll_container", "Scroll container")}} Glossarbegriff
- {{Glossary("Ink_overflow", "Ink overflow")}} Glossarbegriff

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Scrollbalken-Styling](/de/docs/Web/CSS/CSS_scrollbars_styling) Modul
- [CSS-Scroll Snap](/de/docs/Web/CSS/CSS_scroll_snap) Modul
- [CSSOM View](/de/docs/Web/CSS/CSSOM_view) Modul
- Anleitung zum [Debuggen von scrollbarem Überlauf](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/debug_scrollable_overflow/index.html)
