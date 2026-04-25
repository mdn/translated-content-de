---
title: "`::-webkit-scrollbar` CSS pseudo-element"
short-title: ::-webkit-scrollbar
slug: Web/CSS/Reference/Selectors/::-webkit-scrollbar
l10n:
  sourceCommit: 6cf697a8965ecdc4967258cc0282fe789b60318e
---

{{Non-standard_Header}}

Das `::-webkit-scrollbar` CSS-Pseudoelement beeinflusst den Stil der Scrollleiste eines Elements, wenn dieses einen scrollbareren Überlauf hat.

Die standardmäßigen Eigenschaften {{cssxref("scrollbar-color")}} und {{cssxref("scrollbar-width")}} können als Alternativen für Browser verwendet werden, die dieses Pseudoelement und die verwandten `::-webkit-scrollbar-*` Pseudoelemente nicht unterstützen (siehe [Browser-Kompatibilität](#browser-kompatibilität)).

> [!NOTE]
> Wenn {{cssxref("scrollbar-color")}} und {{cssxref("scrollbar-width")}} unterstützt werden und einen anderen Wert als `auto` haben, überschreiben sie das Styling von `::-webkit-scrollbar-*`.
> Siehe [Hinzufügen eines Fallbacks für Scrollleisten-Stile](#hinzufügen_eines_fallbacks_für_scrollleisten-stile) für weitere Details.

## CSS-Scrollleisten-Selektoren

Sie können die folgenden Pseudoelemente verwenden, um verschiedene Teile der Scrollleiste für WebKit-Browser anzupassen:

- `::-webkit-scrollbar` — die gesamte Scrollleiste.
- `::-webkit-scrollbar-button` — die Schaltflächen auf der Scrollleiste (Pfeile, die nach oben und unten zeigen und jeweils eine Zeile scrollen).
- `::-webkit-scrollbar:horizontal` — die horizontale Scrollleiste.
- `::-webkit-scrollbar-thumb` — der ziehbare Scrollgriff.
- `::-webkit-scrollbar-track` — die Spur (Fortschrittsbalken) der Scrollleiste, wo es eine graue Leiste auf einer weißen Leiste gibt.
- `::-webkit-scrollbar-track-piece` — der Teil der Spur (Fortschrittsbalken), der nicht vom Griff bedeckt ist.
- `::-webkit-scrollbar:vertical` — die vertikale Scrollleiste.
- `::-webkit-scrollbar-corner` — die untere Ecke der Scrollleiste, wo sich horizontale und vertikale Scrollleisten treffen. Dies ist oft die untere rechte Ecke des Browserfensters.
- `::-webkit-resizer` — der ziehbare Größenänderungsgriff, der in der unteren Ecke einiger Elemente erscheint.

## Barrierefreiheit

Autoren sollten das Styling von Scrollleisten vermeiden, da das Ändern des Erscheinungsbilds von Scrollleisten weg vom Standard die [externe Konsistenz bricht](https://inclusivedesignprinciples.info/#be-consistent), was sich negativ auf die Benutzerfreundlichkeit auswirkt. Wenn Scrollleisten gestylt werden, stellen Sie sicher, dass ausreichender Farbkontrast vorhanden ist und die Berührungsziele mindestens 44px breit und hoch sind. Siehe [Techniken für WCAG 2.0: G183: Verwendung eines Kontrastverhältnisses von 3:1](https://www.w3.org/TR/WCAG20-TECHS/G183.html) und [Verstehen von WCAG 2.1 : Zielgröße](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html).

## Beispiele

### Scrollleisten mit `-webkit-scrollbar` stylen

#### CSS

```css
.visible-scrollbar,
.invisible-scrollbar,
.mostly-customized-scrollbar {
  display: block;
  width: 10em;
  overflow: auto;
  height: 2em;
  padding: 1em;
  margin: 1em auto;
  outline: 2px dashed cornflowerblue;
}

.invisible-scrollbar::-webkit-scrollbar {
  display: none;
}

/* Demonstrate a "mostly customized" scrollbar
 * (won't be visible otherwise if width/height is specified) */
.mostly-customized-scrollbar::-webkit-scrollbar {
  width: 5px;
  height: 8px;
  background-color: #aaaaaa; /* or add it to the track */
}

/* Add a thumb */
.mostly-customized-scrollbar::-webkit-scrollbar-thumb {
  background: black;
}
```

#### HTML

```html
<div class="visible-scrollbar">
  <h3>Visible scrollbar</h3>
  <p>
    Etiam sagittis sem sed lacus laoreet, eu fermentum eros auctor. Proin at
    nulla elementum, consectetur ex eget, commodo ante. Sed eros mi, bibendum ut
    dignissim et, maximus eget nibh. Phasellus blandit quam turpis, at mollis
    velit pretium ut. Nunc consequat efficitur ultrices. Nullam hendrerit
    posuere est. Nulla libero sapien, egestas ac felis porta, cursus ultricies
    quam. Vestibulum tincidunt accumsan sapien, a fringilla dui semper in.
    Vivamus consectetur ipsum a ornare blandit. Aenean tempus at lorem sit amet
    faucibus. Curabitur nibh justo, faucibus sed velit cursus, mattis cursus
    dolor. Pellentesque id pretium est. Quisque convallis nisi a diam malesuada
    mollis. Aliquam at enim ligula.
  </p>
</div>

<div class="invisible-scrollbar">
  <h3>Invisible scrollbar</h3>
  <p>
    Thisisaveeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeerylongword
  </p>
</div>

<div class="mostly-customized-scrollbar">
  <h3>Custom scrollbar</h3>
  <p>
    Thisisaveeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeerylongword<br />
    And pretty tall<br />
    thing with weird scrollbars.<br />
    Who thought scrollbars could be made weird?
  </p>
</div>
```

#### Ergebnis

{{EmbedLiveSample("styling_scrollbars_using_-webkit-scrollbar", 600, 300)}}

### Hinzufügen eines Fallbacks für Scrollleisten-Stile

Sie können eine {{cssxref("@supports")}} at-rule verwenden, um zu erkennen, ob ein Browser die standardmäßigen Eigenschaften {{cssxref("scrollbar-color")}} und {{cssxref("scrollbar-width")}} unterstützt, und andernfalls ein Fallback mit `::-webkit-scrollbar-*` Pseudoelementen verwenden.
Das folgende Beispiel zeigt, wie Sie Farben auf Scrollleisten anwenden, indem Sie {{cssxref("scrollbar-color")}} verwenden, wenn dies unterstützt wird, und `::-webkit-scrollbar-*` Pseudoelemente, wenn nicht.

#### HTML

```html
<div class="scroll-box">
  <h1>Yoshi</h1>
  <p>
    Yoshi is a fictional dinosaur who appears in video games published by
    Nintendo. Yoshi debuted in Super Mario World (1990) on the SNES as Mario and
    Luigi's sidekick.
  </p>
  <p>
    Throughout the mainline Super Mario series, Yoshi typically serves as
    Mario's trusted steed.
  </p>
  <p>
    With a gluttonous appetite, Yoshi can gobble enemies with his long tongue,
    and lay eggs that doubly function as projectiles.
  </p>
</div>
```

#### CSS

```css hidden
.scroll-box {
  overflow: auto;
  width: 20rem;
  height: 5rem;
  border: 2px solid cornflowerblue;
  margin: 2rem auto;
  font-family: monospace;
}
```

```css
/* For browsers that support `scrollbar-*` properties */
@supports (scrollbar-color: auto) {
  .scroll-box {
    scrollbar-color: aquamarine cornflowerblue;
  }
}

/* Otherwise, use `::-webkit-scrollbar-*` pseudo-elements */
@supports selector(::-webkit-scrollbar) {
  .scroll-box::-webkit-scrollbar {
    background: aquamarine;
  }
  .scroll-box::-webkit-scrollbar-thumb {
    background: cornflowerblue;
  }
}
```

#### Ergebnis

Im folgenden Beispiel können Sie das umrandete Kästchen vertikal scrollen, um den Effekt des Styling der Scrollleiste zu sehen.

{{EmbedLiveSample("adding_a_fallback_to_standard_scrollbar_style_properties")}}

## Spezifikationen

Nicht Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("scrollbar-width")}}
- {{CSSxRef("scrollbar-color")}}
- [Verwenden Sie keine benutzerdefinierten Scrollleisten](https://ericwbailey.website/published/dont-use-custom-css-scrollbars/) (2023)
- [Scrollbar-Styling](https://developer.chrome.com/docs/css-ui/scrollbar-styling) auf developer.chrome.com (2024)
- [Scrollleisten stylen](https://webkit.org/blog/363/styling-scrollbars/) auf WebKit.org (2009)
