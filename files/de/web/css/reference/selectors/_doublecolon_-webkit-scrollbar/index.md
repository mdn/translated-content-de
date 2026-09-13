---
title: "`::-webkit-scrollbar` CSS pseudo-element"
short-title: ::-webkit-scrollbar
slug: Web/CSS/Reference/Selectors/::-webkit-scrollbar
l10n:
  sourceCommit: b2a7378d76136b568fe9414f46abda899b2bf700
---

{{Non-standard_Header}}

Das `::-webkit-scrollbar` CSS-Pseudoelement beeinflusst den Stil eines Scrollbalkens eines Elements, wenn es überlaufende Inhalte hat, die scrollbar sind.

Die standardmäßigen Eigenschaften {{cssxref("scrollbar-color")}} und {{cssxref("scrollbar-width")}} können als Alternativen für Browser verwendet werden, die dieses Pseudoelement und die dazugehörigen `::-webkit-scrollbar-*` Pseudoelemente nicht unterstützen (siehe [Browser-Kompatibilität](#browser-kompatibilität)).

> [!NOTE]
> Wenn die berechneten {{cssxref("scrollbar-color")}} und {{cssxref("scrollbar-width")}} Werte eines Elements etwas anderes als `auto` sind, werden sie das `::-webkit-scrollbar-*` Styling überschreiben.
> Da `scrollbar-color` vererbt wird, wird ein Element beeinflusst, wenn ein Vorfahre es setzt, selbst wenn das Element selbst es nicht tut.
> Wenn Sie `scrollbar-color: auto` auf das Element setzen, wird sein `::-webkit-scrollbar-*` Styling wiederhergestellt, falls es zuvor durch eine `scrollbar-color` Einstellung bei einem Vorfahren entfernt wurde.
> Weitere Details finden Sie unter [Hinzufügen eines Fallbacks für Scrollbalkenstile](#hinzufügen_eines_fallbacks_für_scrollbalkenstile).

## CSS Scrollbalken-Selektoren

Sie können die folgenden Pseudoelemente verwenden, um verschiedene Teile des Scrollbalkens für WebKit-Browser anzupassen:

- `::-webkit-scrollbar` — der gesamte Scrollbalken.
- `::-webkit-scrollbar-button` — die Tasten auf dem Scrollbalken (nach oben und unten zeigende Pfeile, die zeilenweise scrollen).
- `::-webkit-scrollbar:horizontal` — der horizontale Scrollbalken.
- `::-webkit-scrollbar-thumb` — der verschiebbare Scrollgriff.
- `::-webkit-scrollbar-track` — die Spur (Fortschrittsbalken) des Scrollbalkens, wo sich eine graue Leiste auf einer weißen Leiste befindet.
- `::-webkit-scrollbar-track-piece` — der Teil der Spur (Fortschrittsbalken), der nicht vom Griff abgedeckt ist.
- `::-webkit-scrollbar:vertical` — der vertikale Scrollbalken.
- `::-webkit-scrollbar-corner` — die untere Ecke des Scrollbalkens, wo sich horizontale und vertikale Scrollbalken treffen. Dies ist oft die untere rechte Ecke des Browserfensters.
- `::-webkit-resizer` — der verschiebbare Größenänderungsgriff, der in der unteren Ecke einiger Elemente erscheint.

## Barrierefreiheit

Autoren sollten das Styling von Scrollbalken vermeiden, da das Ändern des Erscheinungsbilds von Scrollbalken weg vom Standard die [äußere Konsistenz bricht](https://inclusivedesignprinciples.info/#be-consistent), was die Nutzbarkeit negativ beeinflusst. Wenn Scrollbalken gestylt werden, stellen Sie sicher, dass genügend Farbkontrast vorhanden ist und die Berührungsziele mindestens 44 Pixel breit und hoch sind. Siehe [Techniken für WCAG 2.0: G183: Verwendung eines Kontrastverhältnisses von 3:1](https://www.w3.org/TR/WCAG20-TECHS/G183.html) und [Verstehen von WCAG 2.1: Zielgröße](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html).

## Beispiele

### Scrollbalken mit `-webkit-scrollbar` stylen

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

### Hinzufügen eines Fallbacks für Scrollbalkenstile

Sie können eine {{cssxref("@supports")}} At-Regel verwenden, um zu erkennen, ob ein Browser die standardmäßigen {{cssxref("scrollbar-color")}} und {{cssxref("scrollbar-width")}} Eigenschaften unterstützt und andernfalls ein Fallback mit `::-webkit-scrollbar-*` Pseudoelementen verwenden.
Das folgende Beispiel zeigt, wie Sie Farben auf Scrollbalken anwenden, wenn {{cssxref("scrollbar-color")}} unterstützt wird, und `::-webkit-scrollbar-*` Pseudoelemente, wenn nicht.

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

Im folgenden Beispiel können Sie die umrandete Box vertikal scrollen, um die Wirkung des Stilings des Scrollbalkens zu sehen.

{{EmbedLiveSample("adding_a_fallback_to_standard_scrollbar_style_properties")}}

## Spezifikationen

Kein Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("scrollbar-width")}}
- {{CSSxRef("scrollbar-color")}}
- [Verwenden Sie keine benutzerdefinierten Scrollbalken](https://ericwbailey.website/published/dont-use-custom-css-scrollbars/) (2023)
- [Scrollbalken-Styling](https://developer.chrome.com/docs/css-ui/scrollbar-styling) auf developer.chrome.com (2024)
- [Scrollbars stylen](https://webkit.org/blog/363/styling-scrollbars/) auf WebKit.org (2009)
