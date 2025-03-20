---
title: CSS scroll snap
slug: Web/CSS/CSS_scroll_snap
l10n:
  sourceCommit: a7335ef81c49b0f7604ee64240711456d0f29e6b
---

{{CSSRef}}

Das **CSS Scroll Snap**-Modul bietet Eigenschaften, mit denen Sie das Scroll- und Pan-Verhalten durch Definition von Snap-Positionen steuern können. Inhalte können in Position gebracht werden, wenn der Benutzer überlaufende Inhalte innerhalb eines {{Glossary("scroll_container", "Scrolling-Containers")}} scrollt, was Paging und Scrollpositionierung ermöglicht.

Dieses Modul umfasst die Scroll-Container-Eigenschaften `scroll-padding`, um die optimale Betrachtungsregion während der Scroll-into-View-Operationen einzustellen. Es enthält auch `scroll-margin` und `scroll-alignment`, die auf die Kinder des Scroll-Containers gesetzt werden, um den visuellen Bereich dieser Kinder anzupassen, wenn sie ins Blickfeld gescrollt werden, sowie eine Eigenschaft, um das Scrollen auf einzelne Kinder zu stoppen.

## Scroll Snap in Aktion

Um das Scroll-Snapping im folgenden Feld zu sehen, scrollen Sie nach oben und unten sowie nach links und rechts durch das Gitter von 45 nummerierten Kästchen in der scrollbaren Ansicht. Klicken Sie auf "Play" im folgenden Beispiel, um es zu betrachten oder den Quellcode im MDN Playground zu bearbeiten:

```js hidden live-sample___scroll_snap
const positions = ["start", "center", "end"];
const inlineDirection = document.getElementById("inline");
const blockDirection = document.getElementById("block");
const stop = document.getElementById("stop");
const snap = document.getElementById("snap");
const all = document.querySelector("article");
const rules = document.styleSheets[0].cssRules;

inlineDirection.addEventListener("change", () => {
  setSSA();
});
blockDirection.addEventListener("change", () => {
  setSSA();
});
stop.addEventListener("change", () => {
  setSST();
});
window.addEventListener("load", () => {
  setSST();
  setSSA();
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

@layer pageSetup {
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

Mit Scroll Snap wird eines der nummerierten Kästchen, zu denen Sie scrollen, an Ort und Stelle geschnappt. Das anfängliche CSS bewirkt, dass das nummerierte Kästchen in die Mitte des Ansichtsfensters geschnappt wird. Verwenden Sie die Slider, um die Block- und Inline-Snap-Positionen zu ändern.

Mithilfe von Snap-Eigenschaften können Sie das Scrollen an einem Element, in diesem Fall einem nummerierten Kästchen, erlauben oder blockieren. Wählen Sie das Kontrollkästchen "Scrolling über Kästchen verhindern", um alle Scrollaktionen darauf zu beschränken, zu einem benachbarten Kästchen zu scrollen.

Um Scroll Snapping mit normalem Scrollen zu vergleichen, deaktivieren Sie das Kontrollkästchen "Snapping deaktivieren" und versuchen Sie erneut zu scrollen.

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

- {{cssxref("scroll-snap-align")}}
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
- {{cssxref("scroll-snap-stop")}}

### Ereignisse

- [`scrollsnapchange`](/de/docs/Web/API/Element/scrollsnapchange_event) {{experimental_inline}}
- [`scrollsnapchanging`](/de/docs/Web/API/Element/scrollsnapchanging_event) {{experimental_inline}}

### Schnittstellen

- [`SnapEvent`](/de/docs/Web/API/SnapEvent) {{experimental_inline}}
  - [`SnapEvent.snapTargetBlock`](/de/docs/Web/API/SnapEvent/snapTargetBlock) {{experimental_inline}}
  - [`SnapEvent.snapTargetInline`](/de/docs/Web/API/SnapEvent/snapTargetInline) {{experimental_inline}}

## Leitfäden

- [Grundkonzepte des CSS Scroll Snap](/de/docs/Web/CSS/CSS_scroll_snap/Basic_concepts)
  - : Ein Überblick und Beispiele zu den Funktionen von CSS Scroll Snap.
- [Verwendung von Scroll Snap-Ereignissen](/de/docs/Web/CSS/CSS_scroll_snap/Using_scroll_snap_events)
  - : Ein Leitfaden zur Verwendung der `scrollsnapchanging`- und `scrollsnapchange`-Scroll Snap-Ereignisse, die ausgelöst werden, wenn der Browser bestimmt, dass ein neues Snap-Ziel ansteht oder ausgewählt wurde.

## Verwandte Konzepte

- {{cssxref(":target")}} Pseudo-Klasse
- {{cssxref("overflow")}} CSS-Eigenschaft
- Element-Methode [`scroll()`](/de/docs/Web/API/Element/scroll)
- Element-Methode [`scrollBy()`](/de/docs/Web/API/Element/scrollBy)
- Element-Methode [`scrollIntoView()`](/de/docs/Web/API/Element/scrollIntoView)
- Element-Methode [`scrollTo()`](/de/docs/Web/API/Element/scrollTo)
- Element-Ereignis [`scroll`](/de/docs/Web/API/Element/scroll_event)
- Element-Ereignis [`scrollend`](/de/docs/Web/API/Element/scrollend_event)
- [`scrollbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role) ARIA-Rolle
- {{Glossary("Scroll_container", "Scroll-Container")}}-Glossary-Begriff

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS Overflow](/de/docs/Web/CSS/CSS_overflow)-Modul
- [CSS Scrollbars Styling](/de/docs/Web/CSS/CSS_scrollbars_styling)-Modul
- [CSS Scroll Anchoring](/de/docs/Web/CSS/CSS_scroll_anchoring)-Modul
- [Nur-Tastatur-Scrollbereiche](https://adrianroselli.com/2022/06/keyboard-only-scrolling-areas.html) auf adrianroselli.com (2022)
- [Beispiele für Scroll Snap](https://codepen.io/collection/KpqBGW) auf CodePen (2022)
- [Gut kontrolliertes Scrollen mit CSS Scroll Snap](https://web.dev/articles/css-scroll-snap) auf web.dev (2021)
- [Praktisches CSS Scroll Snapping](https://css-tricks.com/practical-css-scroll-snapping/) auf CSS-Tricks (2020)
- [CSS Scroll Snap](https://12daysofweb.dev/2022/css-scroll-snap/) auf 12 Days of Web (2019)
