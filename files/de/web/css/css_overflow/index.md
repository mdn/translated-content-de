---
title: CSS overflow
slug: Web/CSS/CSS_overflow
l10n:
  sourceCommit: d13c1276b80bbfc940a1091b62f333fe9edc78a2
---

{{CSSRef}}

Die Eigenschaften des **CSS overflow** Moduls ermöglichen es Ihnen, scrollbaren Überfluss in visuellen Medien zu handhaben.

Ein Überfluss tritt auf, wenn der Inhalt in einem Elementkasten über eine oder mehrere Kanten des Kastens hinausgeht. **Scrollbarer Überfluss** ist der Inhalt, der außerhalb des Elementkastens erscheint und für den Sie möglicherweise einen Scrollmechanismus hinzufügen möchten. CSS overflow Eigenschaften lassen Sie kontrollieren, was passiert, wenn Inhalt einen Elementkasten überläuft.

Mal-Effekte, die den Inhalt überlaufen, aber nicht am CSS-Boxmodell teilnehmen, beeinflussen das Layout nicht. Diese Art des Überflusses ist auch bekannt als {{Glossary("ink_overflow", "Ink Overflow")}}. Beispiele für Ink Overflow sind Box-Schattierungen, Rahmenbilder, Textdekorationen, überhängende Glyphen und Umrisse. Ink Overflow erweitert nicht den scrollbaren Überflussbereich.

## Overflow in Aktion

Versuchen Sie das folgende Beispiel, um die Auswirkungen verschiedener `overflow` Eigenschaftswerte auf den Überfluss und die Scrollleisten im benachbarten festgelegten Kasten zu sehen.

Das Beispiel enthält Optionen, um die Werte für die Eigenschaften `overflow-clip-margin` und `width` zu ändern sowie den Inhalt programmatisch zu scrollen, falls die overflow Eigenschaft einen {{Glossary("scroll_container", "Scroll-Container")}} erstellt. Wählen Sie `overflow: clip` und sehen Sie sich die Wirkung verschiedener `overflow-clip-margin` Werte an. Wählen Sie `overflow: hidden` oder `overflow: scroll`, um die verschiedenen `ScrollLeft` und `ScrollTop` Schieberegler-Einstellungen auszuprobieren.

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

Ein Link ist im Inhaltkasten oben enthalten, um die Auswirkungen des Tastaturfokus auf Überfluss- und Scrollverhalten zu demonstrieren. Versuchen Sie, mit der Tabulatortaste zum Link zu navigieren oder den Inhalt programmatisch zu scrollen: Der Inhalt wird nur dann scrollen, wenn der aufgezählte `<overflow>` Wert einen Scroll-Container erstellt.

## Referenz

### Eigenschaften

- {{CSSxRef("line-clamp")}}
- {{CSSxRef("overflow")}} Kurzschrift
- {{CSSxRef("overflow-block")}}
- {{CSSxRef("overflow-clip-margin")}}
- {{CSSxRef("overflow-inline")}}
- {{CSSxRef("overflow-x")}}
- {{CSSxRef("overflow-y")}}
- {{CSSxRef("scroll-behavior")}}
- {{CSSxRef("scrollbar-gutter")}}
- {{CSSxRef("text-overflow")}}

> [!NOTE]
> Das CSS Overflow Modul Level 4 führt die Eigenschaften `block-ellipsis`, `continue`, `max-lines`, `overflow-clip-margin-block`, `overflow-clip-margin-block-end`, `overflow-clip-margin-block-start`, `overflow-clip-margin-bottom`, `overflow-clip-margin-inline`, `overflow-clip-margin-inline-end`, `overflow-clip-margin-inline-start`, `overflow-clip-margin-left`, `overflow-clip-margin-right` und `overflow-clip-margin-top` ein. Diese wurden noch nicht implementiert.

### Datentypen

- [`<overflow>`](/de/docs/Web/CSS/overflow_value) aufgezählte Werte

## Leitfäden

- [Lernen: Überlaufender Inhalt](/de/docs/Learn_web_development/Core/Styling_basics/Overflow)
  - : Lernen Sie, was Überfluss ist und wie Sie ihn verwalten können.
- [Erstellen einer benannten Scroll-Fortschritts-Zeitleistenanimation](/de/docs/Web/CSS/scroll-timeline-name#creating_a_named_scroll_progress_timeline_animation)
  - : Die CSS-Scroll-Zeitleiste {{cssxref('scroll-timeline-name')}} und {{cssxref('scroll-timeline-axis')}} Eigenschaften, sowie die {{cssxref('scroll-timeline')}} Kurzschrift, erstellen Animationen, die an den Scroll-Offset eines Scroll-Containers gebunden sind.

## Verwandte Konzepte

- {{CSSxRef("scrollbar-width")}} CSS Eigenschaft
- {{CSSxRef("scrollbar-color")}} CSS Eigenschaft
- {{CSSxRef("scrollbar-gutter")}} CSS Eigenschaft
- {{CSSxRef("scroll-behavior")}} CSS Eigenschaft
- {{cssxref("scroll-margin")}} CSS Kurzschrift-Eigenschaft
- {{cssxref("scroll-padding")}} CSS Kurzschrift-Eigenschaft
- {{cssxref("scroll-snap-align")}} CSS Eigenschaft
- {{cssxref("scroll-snap-stop")}} CSS Eigenschaft
- {{cssxref("scroll-snap-type")}} CSS Eigenschaft
- {{cssxref("text-overflow")}} CSS Eigenschaft
- {{CSSxRef("::-webkit-scrollbar")}} Pseudo-Element
- [`scrollbar`](/de/docs/Web/Accessibility/ARIA/Roles/scrollbar_role) ARIA Rolle
- Element [`scroll()`](/de/docs/Web/API/Element/scroll) Methode
- Element [`scrollBy()`](/de/docs/Web/API/Element/scrollBy) Methode
- Element [`scrollIntoView()`](/de/docs/Web/API/Element/scrollIntoView) Methode
- Element [`scrollTo()`](/de/docs/Web/API/Element/scrollTo) Methode
- Element [`scrollTop`](/de/docs/Web/API/Element/scrollTop) Eigenschaft
- Element [`scrollLeft`](/de/docs/Web/API/Element/scrollLeft) Eigenschaft
- Element [`scrollWidth`](/de/docs/Web/API/Element/scrollWidth) Eigenschaft
- Element [`scrollHeight`](/de/docs/Web/API/Element/scrollHeight) Eigenschaft
- Dokument [`scroll`](/de/docs/Web/API/Document/scroll_event) Ereignis
- {{Glossary("Scroll_container", "Scroll-Container")}} Glossareintrag
- {{Glossary("Ink_overflow", "Ink Overflow")}} Glossareintrag

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS Scrollleisten-Styling](/de/docs/Web/CSS/CSS_scrollbars_styling) Modul
- [CSS Scroll Snap](/de/docs/Web/CSS/CSS_scroll_snap) Modul
- [CSSOM View](/de/docs/Web/CSS/CSSOM_view) Modul
- Anleitung zum [Debuggen von scrollbarem Überfluss](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/debug_scrollable_overflow/index.html)
