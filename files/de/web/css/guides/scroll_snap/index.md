---
title: CSS scroll snap
short-title: Scroll snap
slug: Web/CSS/Guides/Scroll_snap
l10n:
  sourceCommit: a14f56b06eabf3b182ae4bc0e02634a8ccc01f20
---

Das **CSS scroll snap** Modul bietet Eigenschaften, mit denen Sie das Verhalten von Bildläufen und Scrollen durch das Definieren von Anhaltepositionen steuern können. Inhalte können in Position gebracht werden, während der Benutzer überfließende Inhalte innerhalb eines {{Glossary("scroll_container", "Scroll Containers")}} scrollt, was Paging und Scroll-Positionierung ermöglicht.

Dieses Modul umfasst die Eigenschaften für den Scroll-Container scroll-padding, um die optimale Ansichtsregion während der Scroll-in-Sicht-Operationen anzupassen. Es enthält auch scroll-margin und scroll-alignment, die auf die Kinder des Scroll-Containers gesetzt werden, um den visuellen Bereich der Kinder anzupassen, wenn dieses Kind in die Sicht gescrollt wird, sowie eine Eigenschaft, die das Anhalten des Scrollens bei einzelnen Kindern erzwingt.

## Scroll snap in Aktion

Um das Scroll-Snapping im untenstehenden Kasten zu sehen, scrollen Sie nach oben-und-unten und links-und-rechts durch das Raster von 45 nummerierten Kästchen im scrollbaren Ansichtsbereich.
Klicken Sie auf "Play" im untenstehenden Beispiel, um es zu sehen oder den Quellcode im MDN Playground zu bearbeiten:

```js hidden live-sample___scroll_snap
const positions = ["start", "center", "end"];
const inlineDirection = document.getElementById("inline");
const blockDirection = document.getElementById("block");
const stop = document.getElementById("stop");
const snap = document.getElementById("snap");
const all = document.querySelector("article");
const rules = document.getElementById("css-output").sheet.cssRules;

setSST();
setSSA();

inlineDirection.addEventListener("change", () => {
  setSSA();
});
blockDirection.addEventListener("change", () => {
  setSSA();
});
stop.addEventListener("change", () => {
  setSST();
});
snap.addEventListener("change", () => {
  all.classList.toggle("snapDisabled");
});

function setSSA() {
  rules[0].style.scrollSnapAlign = `${positions[blockDirection.value]} ${
    positions[inlineDirection.value]
  }`;
}

function setSST() {
  if (stop.checked) {
    rules[0].style.scrollSnapStop = "always";
  } else {
    rules[0].style.scrollSnapStop = "normal";
  }
}
```

```html hidden live-sample___scroll_snap
<article>
  <ul>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>
  <div>
    <fieldset>
      <legend>Change the options</legend>
      <p>
        <label
          ><input
            type="range"
            min="0"
            max="2"
            value="1"
            list="places"
            id="block" />
          block position</label
        >
      </p>
      <p>
        <label>
          <input
            type="range"
            min="0"
            max="2"
            value="1"
            list="places"
            id="inline" />
          inline position
        </label>
      </p>
      <p>
        <label>
          <input type="checkbox" id="stop" />
          Prevent scrolling past boxes
        </label>
      </p>
    </fieldset>

    <p>
      <label><input type="checkbox" id="snap" /> disable snapping</label>
    </p>

    <datalist id="places">
      <option value="0">start</option>
      <option value="1">center</option>
      <option value="2">end</option>
    </datalist>
  </div>
</article>
```

```css hidden live-sample___scroll_snap
li {
  /*
  starts with:
      scroll-snap-align: center center;
      scroll-snap-stop: normal (defaults);

  CSS gets changed with JavaScript when you change the controls.
  the following can be set:
      scroll-snap-stop: always | normal;
      scroll-snap-align: start | center | end {2}
        */
}
ul {
  overflow: auto;
  scroll-snap-type: both mandatory;
  overscroll-behavior-x: contain;
}
article.snapDisabled fieldset {
  opacity: 20%;
  pointer-events: none;
}
article.snapDisabled ul {
  scroll-snap-type: initial;
  overscroll-behavior-x: initial;
}

@layer page-setup {
  article {
    display: flex;
    gap: 2vw;
  }
  div {
    flex: 1;
  }
  ul {
    display: grid;
    gap: 6.25vw;
    padding: 12.5vw;
    box-sizing: border-box;
    border: 1px solid;
    grid-template-columns: repeat(5, 1fr);
    background: conic-gradient(
      at bottom left,
      red 0deg,
      yellow 15deg,
      green 30deg,
      blue 45deg,
      purple 60deg,
      magenta 75deg
    );
    background-attachment: local;
    margin: auto;
    width: 20vw;
    height: 20vw;
  }
  li {
    scroll-snap-align: center;
    height: 12.5vw;
    width: 12.5vw;
    outline: 3px inset;
    list-style-type: none;
    background: white;
    font-family: monospace;
    font-size: 3rem;
    line-height: 12vw;
    text-align: center;
    counter-increment: items 1;
  }
  li::after {
    content: counter(items);
  }
  input {
    vertical-align: bottom;
  }
  p {
    font-family: monospace;
  }
}
```

{{EmbedLiveSample("scroll_snap", "", "250px")}}

Mit dem Scroll Snap wird eines der nummerierten Kästchen, zu denen Sie scrollen, fest an einem Platz arretiert. Das anfängliche CSS bringt das nummerierte Kästchen in die Mitte des Ansichtsbereichs. Verwenden Sie die Schieberegler, um die Block- und Inline-Anhaltepositionen zu ändern.

Durch die Verwendung von Anhalteeigenschaften können Sie das Scrollen an einem Element, wie einem nummerierten Kästchen, erlauben oder blockieren. Wählen Sie das Kontrollkästchen "Verhindern des Scrollens über Kästchen" aus, um alle Scroll-Aktionen auf das Scrollen zu einem angrenzenden Kästchen zu beschränken.

Um das Scroll-Snapping mit normalem Scrollen zu vergleichen, aktivieren Sie das Kontrollkästchen "Snapping deaktivieren" und versuchen Sie es erneut.

## Referenz

### Eigenschaften auf Containern

- {{cssxref("scroll-snap-type")}}
- {{cssxref("scroll-padding")}}
  - {{cssxref("scroll-padding-top")}}
  - {{cssxref("scroll-padding-right")}}
  - {{cssxref("scroll-padding-bottom")}}
  - {{cssxref("scroll-padding-left")}}
  - {{cssxref("scroll-padding-inline")}}
  - {{cssxref("scroll-padding-inline-start")}}
  - {{cssxref("scroll-padding-inline-end")}}
  - {{cssxref("scroll-padding-block")}}
  - {{cssxref("scroll-padding-block-start")}}
  - {{cssxref("scroll-padding-block-end")}}

### Eigenschaften auf Kindern

- {{cssxref("scroll-initial-target")}}
- {{cssxref("scroll-margin")}}
  - {{cssxref("scroll-margin-top")}}
  - {{cssxref("scroll-margin-right")}}
  - {{cssxref("scroll-margin-bottom")}}
  - {{cssxref("scroll-margin-left")}}
  - {{cssxref("scroll-margin-inline")}}
  - {{cssxref("scroll-margin-inline-start")}}
  - {{cssxref("scroll-margin-inline-end")}}
  - {{cssxref("scroll-margin-block")}}
  - {{cssxref("scroll-margin-block-start")}}
  - {{cssxref("scroll-margin-block-end")}}
- {{cssxref("scroll-snap-align")}}
- {{cssxref("scroll-snap-stop")}}

### Ereignisse

- [`scrollsnapchange`](/de/docs/Web/API/Element/scrollsnapchange_event) {{experimental_inline}}
- [`scrollsnapchanging`](/de/docs/Web/API/Element/scrollsnapchanging_event) {{experimental_inline}}

### Schnittstellen

- [`SnapEvent`](/de/docs/Web/API/SnapEvent) {{experimental_inline}}
  - [`SnapEvent.snapTargetBlock`](/de/docs/Web/API/SnapEvent/snapTargetBlock) {{experimental_inline}}
  - [`SnapEvent.snapTargetInline`](/de/docs/Web/API/SnapEvent/snapTargetInline) {{experimental_inline}}

## Leitfäden

- [Grundlegende Konzepte des CSS scroll snap](/de/docs/Web/CSS/Guides/Scroll_snap/Basic_concepts)
  - : Ein Überblick und Beispiele für CSS scroll snap Features.
- [Verwendung von Scroll Snap-Ereignissen](/de/docs/Web/CSS/Guides/Scroll_snap/Using_scroll_snap_events)
  - : Ein Leitfaden zur Nutzung der [`scrollsnapchanging`](/de/docs/Web/API/Element/scrollsnapchanging_event) und [`scrollsnapchange`](/de/docs/Web/API/Element/scrollsnapchange_event) Scroll Snap-Ereignisse, die ausgelöst werden, wenn der Browser bestimmt, dass ein neues Snap-Ziel aussteht oder ausgewählt wurde.

## Verwandte Konzepte

- {{cssxref(":target")}} Pseudo-Klasse
- {{cssxref("overflow")}} CSS-Eigenschaft
- Element [`scroll()`](/de/docs/Web/API/Element/scroll) Methode
- Element [`scrollBy()`](/de/docs/Web/API/Element/scrollBy) Methode
- Element [`scrollIntoView()`](/de/docs/Web/API/Element/scrollIntoView) Methode
- Element [`scrollTo()`](/de/docs/Web/API/Element/scrollTo) Methode
- Element [`scroll`](/de/docs/Web/API/Element/scroll_event) Ereignis
- Element [`scrollend`](/de/docs/Web/API/Element/scrollend_event) Ereignis
- [`scrollbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role) ARIA-Rolle
- {{Glossary("Scroll_container", "Scroll Container")}} Glossarbegriff

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS Überlauf](/de/docs/Web/CSS/Guides/Overflow) Modul
- [CSS Scrollbalken-Styling](/de/docs/Web/CSS/Guides/Scrollbars_styling) Modul
- [CSS scroll anchoring](/de/docs/Web/CSS/Guides/Scroll_anchoring) Modul
- [Tastatur-gesteuerte Scrollbereiche](https://adrianroselli.com/2022/06/keyboard-only-scrolling-areas.html) auf adrianroselli.com (2022)
- [Scroll Snap-Beispiele](https://codepen.io/collection/KpqBGW) auf CodePen (2022)
- [Praktisches CSS Scroll Snapping](https://css-tricks.com/practical-css-scroll-snapping/) auf CSS-Tricks (2020)
- [CSS scroll snap](https://12daysofweb.dev/2022/css-scroll-snap/) auf 12 Days of Web (2019)
- [Gut kontrolliertes Scrollen mit CSS scroll snap](https://web.dev/articles/css-scroll-snap) auf web.dev (2018)
