---
title: "::-webkit-scrollbar"
slug: Web/CSS/::-webkit-scrollbar
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{CSSRef}}{{Non-standard_Header}}

Das `::-webkit-scrollbar` CSS-Pseudo-Element beeinflusst das Styling der Scrollleiste eines Elements, wenn es über scrollbaren Überlauf verfügt.

Die Standard-Eigenschaften {{cssxref("scrollbar-color")}} und {{cssxref("scrollbar-width")}} können als Alternativen für Browser genutzt werden, die dieses Pseudo-Element und die verwandten `::-webkit-scrollbar-*` Pseudo-Elemente nicht unterstützen (siehe [Browser-Kompatibilität](#browser-kompatibilität)).

> [!NOTE]
> Wenn {{cssxref("scrollbar-color")}} und {{cssxref("scrollbar-width")}} unterstützt werden und irgendeinen anderen Wert als `auto` haben, setzen sie das Styling von `::-webkit-scrollbar-*` außer Kraft.
> Weitere Details finden Sie unter [Einen Fallback für Scrollleisten-Stile hinzufügen](#einen_fallback_für_scrollleisten-stile_hinzufügen).

## CSS-Scrollbar-Selektoren

Sie können die folgenden Pseudo-Elemente verwenden, um verschiedene Teile der Scrollleiste für WebKit-Browser anzupassen:

- `::-webkit-scrollbar` — die gesamte Scrollleiste.
- `::-webkit-scrollbar-button` — die Schaltflächen auf der Scrollleiste (Pfeile nach oben und unten, die jeweils um eine Zeile scrollen).
- `::-webkit-scrollbar:horizontal` — die horizontale Scrollleiste.
- `::-webkit-scrollbar-thumb` — der ziehbare Scrollgriff.
- `::-webkit-scrollbar-track` — die Spur (Fortschrittsleiste) der Scrollleiste, wo sich ein grauer Balken über einem weißen Balken befindet.
- `::-webkit-scrollbar-track-piece` — der Teil der Spur (Fortschrittsleiste), der nicht vom Griff verdeckt wird.
- `::-webkit-scrollbar:vertical` — die vertikale Scrollleiste.
- `::-webkit-scrollbar-corner` — die untere Ecke der Scrollleiste, wo sich sowohl horizontale als auch vertikale Scrollleisten treffen. Dies ist oft die untere rechte Ecke des Browserfensters.
- `::-webkit-resizer` — der ziehbare Größenänderungsgriff, der in der unteren Ecke einiger Elemente erscheint.

## Barrierefreiheit

Autoren sollten vermeiden, Scrollleisten zu stylen, da eine Änderung des Aussehens der Scrollleisten vom Standard [die externe Konsistenz bricht](https://inclusivedesignprinciples.info/#be-consistent), was sich negativ auf die Benutzerfreundlichkeit auswirkt. Falls Scrollleisten gestaltet werden, stellen Sie sicher, dass ausreichend Farbkontrast vorhanden ist und die Berührungsziele mindestens 44px breit und hoch sind. Siehe [Techniken für WCAG 2.0: G183: Verwendung eines Kontrastverhältnisses von 3:1](https://www.w3.org/TR/WCAG20-TECHS/G183.html) und [Verständnis von WCAG 2.1: Zielgröße](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html).

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

### Einen Fallback für Scrollleisten-Stile hinzufügen

Sie können eine {{cssxref("@supports")}} Regel verwenden, um zu erkennen, ob ein Browser die Standard-Eigenschaften {{cssxref("scrollbar-color")}} und {{cssxref("scrollbar-width")}} unterstützt, und andernfalls einen Fallback mit `::-webkit-scrollbar-*` Pseudo-Elementen verwenden.
Das folgende Beispiel zeigt, wie Farben auf Scrollleisten angewendet werden, falls {{cssxref("scrollbar-color")}} unterstützt wird, und wie `::-webkit-scrollbar-*` Pseudo-Elemente genutzt werden, falls nicht.

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

Im folgenden Beispiel können Sie die gerahmte Box vertikal scrollen, um die Wirkung des Scrollleisten-Stylings zu sehen.

{{EmbedLiveSample("adding_a_fallback_to_standard_scrollbar_style_properties")}}

## Spezifikationen

Nicht Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("scrollbar-width")}}
- {{CSSxRef("scrollbar-color")}}
- [Benutzen Sie keine benutzerdefinierten Scrollleisten](https://ericwbailey.website/published/dont-use-custom-css-scrollbars/) (2023)
- [Scrollleisten-Styling](https://developer.chrome.com/docs/css-ui/scrollbar-styling) auf developer.chrome.com (2024)
- [Scrollleisten stylen](https://webkit.org/blog/363/styling-scrollbars/) auf WebKit.org (2009)
