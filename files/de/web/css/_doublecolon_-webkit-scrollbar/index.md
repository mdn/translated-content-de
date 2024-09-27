---
title: "::-webkit-scrollbar"
slug: Web/CSS/::-webkit-scrollbar
l10n:
  sourceCommit: ae0fdf44f8195a1406b170670832ac510ce03764
---

{{CSSRef}}{{Non-standard_Header}}

Das CSS-Pseudoelement `::-webkit-scrollbar` beeinflusst den Stil eines Scrollbars eines Elements, wenn es über scrollbaren Überlauf verfügt.

Die standardisierten Eigenschaften {{cssxref("scrollbar-color")}} und {{cssxref("scrollbar-width")}} können als Alternativen für Browser verwendet werden, die dieses Pseudoelement und die zugehörigen `::-webkit-scrollbar-*` Pseudoelemente nicht unterstützen (siehe [Browser-Kompatibilität](#browser-kompatibilität)).

> [!NOTE]
> Wenn {{cssxref("scrollbar-color")}} und {{cssxref("scrollbar-width")}} unterstützt werden und auf einen anderen Wert als `auto` gesetzt sind, werden sie die `::-webkit-scrollbar-*` Stile überschreiben.
> Siehe [Hinzufügen eines Fallbacks für Scrollbar-Stile](#hinzufügen_eines_fallbacks_für_scrollbar-stile) für weitere Details.

## CSS Scrollbar-Selektoren

Sie können die folgenden Pseudoelemente verwenden, um verschiedene Teile des Scrollbars für WebKit-Browser anzupassen:

- `::-webkit-scrollbar` — der gesamte Scrollbar.
- `::-webkit-scrollbar-button` — die Tasten auf dem Scrollbar (Pfeile, die nach oben und unten zeigen und jeweils eine Zeile scrollen).
- `::-webkit-scrollbar:horizontal{}` — der horizontale Scrollbar.
- `::-webkit-scrollbar-thumb` — der ziehbare Scrollgriff.
- `::-webkit-scrollbar-track` — die Schiene (Fortschrittsbalken) des Scrollbars, wo sich eine graue Leiste auf einer weißen Leiste befindet.
- `::-webkit-scrollbar-track-piece` — der Teil der Schiene (Fortschrittsbalken), der nicht vom Griff abgedeckt ist.
- `::-webkit-scrollbar:vertical{}` — der vertikale Scrollbar.
- `::-webkit-scrollbar-corner` — die untere Ecke des Scrollbars, wo sich sowohl horizontale als auch vertikale Scrollbars treffen. Dies ist oft die untere rechte Ecke des Browserfensters.
- `::-webkit-resizer` — der ziehbare Größenänderungsgriff, der in der unteren Ecke einiger Elemente erscheint.

## Barrierefreiheit

Autoren sollten vermeiden, Scrollbars zu stylen, da das Ändern des Erscheinungsbildes von Scrollbars vom Standardzustand [die externe Konsistenz bricht](https://inclusivedesignprinciples.info/#be-consistent), was die Benutzerfreundlichkeit negativ beeinflusst. Falls Scrollbars gestylt werden, stellen Sie sicher, dass genügend Farbkontrast vorhanden ist und die Berührungsziele mindestens 44px breit und hoch sind. Siehe [Techniken für WCAG 2.0: G183: Verwendung eines Kontrastverhältnisses von 3:1](https://www.w3.org/TR/WCAG20-TECHS/G183.html) und [Verständnis von WCAG 2.1 : Zielgröße](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html).

## Beispiele

### Styling von Scrollbars mit `-webkit-scrollbar`

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
  background-color: #aaa; /* or add it to the track */
}

/* Add a thumb */
.mostly-customized-scrollbar::-webkit-scrollbar-thumb {
  background: #000;
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

### Hinzufügen eines Fallbacks für Scrollbar-Stile

Sie können eine {{cssxref("@supports")}} At-Regel verwenden, um zu erkennen, ob ein Browser die standardisierten Eigenschaften {{cssxref("scrollbar-color")}} und {{cssxref("scrollbar-width")}} unterstützt, und andernfalls ein Fallback mit `::-webkit-scrollbar-*` Pseudoelementen verwenden. Das folgende Beispiel zeigt, wie Farben auf Scrollbars mit {{cssxref("scrollbar-color")}} angewendet werden, falls unterstützt, und `::-webkit-scrollbar-*` Pseudoelemente andernfalls.

#### HTML

```html
<div class="scrollbox">
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
.scrollbox {
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
  .scrollbox {
    scrollbar-color: aquamarine cornflowerblue;
  }
}

/* Otherwise, use `::-webkit-scrollbar-*` pseudo-elements */
@supports selector(::-webkit-scrollbar) {
  .scrollbox::-webkit-scrollbar {
    background: aquamarine;
  }
  .scrollbox::-webkit-scrollbar-thumb {
    background: cornflowerblue;
  }
}
```

#### Ergebnis

Im Beispiel unten können Sie den umrandeten Kasten vertikal scrollen, um den Effekt des Stylings des Scrollbars zu sehen.

{{EmbedLiveSample("adding_a_fallback_to_standard_scrollbar_style_properties")}}

## Spezifikationen

Nicht Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("scrollbar-width")}}
- {{CSSxRef("scrollbar-color")}}
- [Verwenden Sie keine benutzerdefinierten Scrollbars](https://ericwbailey.website/published/dont-use-custom-css-scrollbars/) (2023)
- [Scrollbar-Styling](https://developer.chrome.com/docs/css-ui/scrollbar-styling) auf developer.chrome.com (2024)
- [Styling von Scrollbars](https://webkit.org/blog/363/styling-scrollbars/) auf WebKit.org (2009)
