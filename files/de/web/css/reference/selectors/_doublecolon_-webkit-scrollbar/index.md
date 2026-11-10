---
title: "`::-webkit-scrollbar` CSS pseudo-element"
short-title: ::-webkit-scrollbar
slug: Web/CSS/Reference/Selectors/::-webkit-scrollbar
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

{{Non-standard_Header}}

Das CSS-Pseudoelement `::-webkit-scrollbar` beeinflusst die Darstellung der Scrollbar eines Elements, wenn dessen Inhalt scrollbar ist.

Die standardisierten Eigenschaften {{cssxref("scrollbar-color")}} und {{cssxref("scrollbar-width")}} können als Alternativen für Browser verwendet werden, die dieses Pseudoelement und die zugehörigen `::-webkit-scrollbar-*`-Pseudoelemente nicht unterstützen (siehe [Browser-Kompatibilität](#browser-kompatibilität)).

> [!NOTE]
> Wenn die berechneten Werte von {{cssxref("scrollbar-color")}} und {{cssxref("scrollbar-width")}} eines Elements nicht `auto` sind, überschreiben sie die Gestaltung durch `::-webkit-scrollbar-*`.
> Da `scrollbar-color` vererbt wird, ist ein Element auch dann betroffen, wenn die Eigenschaft für ein Vorfahrenelement gesetzt wurde, nicht aber für das Element selbst.
> Wenn Sie `scrollbar-color: auto` für das Element festlegen, wird dessen Gestaltung durch `::-webkit-scrollbar-*` wiederhergestellt, sofern sie zuvor durch eine `scrollbar-color`-Festlegung für ein Vorfahrenelement außer Kraft gesetzt wurde.
> Weitere Einzelheiten finden Sie unter [Fallback für Scrollbar-Stile hinzufügen](#fallback_für_scrollbar-stile_hinzufügen).

## CSS-Selektoren für Scrollbars

Mit den folgenden Pseudoelementen können Sie verschiedene Teile der Scrollbar in WebKit-Browsern anpassen:

- `::-webkit-scrollbar` — die gesamte Scrollbar.
- `::-webkit-scrollbar-button` — die Schaltflächen auf der Scrollbar (Pfeile nach oben und unten, die jeweils um eine Zeile scrollen).
- `::-webkit-scrollbar:horizontal` — die horizontale Scrollbar.
- `::-webkit-scrollbar-thumb` — der verschiebbare Scrollgriff.
- `::-webkit-scrollbar-track` — die Spur (Fortschrittsleiste) der Scrollbar, bei der ein grauer Balken über einem weißen Balken liegt.
- `::-webkit-scrollbar-track-piece` — der Teil der Spur (Fortschrittsleiste), der nicht vom Scrollgriff bedeckt ist.
- `::-webkit-scrollbar:vertical` — die vertikale Scrollbar.
- `::-webkit-scrollbar-corner` — die untere Ecke der Scrollbar, an der die horizontale und die vertikale Scrollbar zusammentreffen. Dies ist häufig die untere rechte Ecke des Browserfensters.
- `::-webkit-resizer` — der verschiebbare Griff zum Ändern der Größe, der in der unteren Ecke einiger Elemente erscheint.

## Barrierefreiheit

Sie sollten Scrollbars möglichst nicht individuell gestalten: Wenn ihre Darstellung vom Standard abweicht, [geht die äußere Konsistenz verloren](https://inclusivedesignprinciples.info/#be-consistent), was die Benutzerfreundlichkeit beeinträchtigt. Wenn Sie Scrollbars dennoch gestalten, achten Sie auf ausreichenden Farbkontrast und darauf, dass Touch-Ziele mindestens 44 px breit und hoch sind. Siehe [Techniken für WCAG 2.0: G183: Ein Kontrastverhältnis von 3:1 verwenden](https://www.w3.org/TR/WCAG20-TECHS/G183.html) und [WCAG 2.1 verstehen: Zielgröße](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html).

## Beispiele

### Scrollbars mit `-webkit-scrollbar` gestalten

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

### Fallback für Scrollbar-Stile hinzufügen

Mit der {{cssxref("@supports")}}-At-Regel können Sie prüfen, ob ein Browser die standardisierten Eigenschaften {{cssxref("scrollbar-color")}} und {{cssxref("scrollbar-width")}} unterstützt. Andernfalls können Sie auf die `::-webkit-scrollbar-*`-Pseudoelemente zurückgreifen.
Das folgende Beispiel zeigt, wie Sie Scrollbars mit {{cssxref("scrollbar-color")}} einfärben, wenn die Eigenschaft unterstützt wird, und andernfalls mit den `::-webkit-scrollbar-*`-Pseudoelementen.

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

Im folgenden Beispiel können Sie innerhalb des umrandeten Felds vertikal scrollen, um die Wirkung der Scrollbar-Gestaltung zu sehen.

{{EmbedLiveSample("adding_a_fallback_for_scrollbar_styles")}}

## Spezifikationen

Nicht Bestandteil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("scrollbar-width")}}
- {{CSSxRef("scrollbar-color")}}
- [Keine benutzerdefinierten Scrollbars verwenden](https://ericwbailey.website/published/dont-use-custom-css-scrollbars/) (2023)
- [Scrollbar-Gestaltung](https://developer.chrome.com/docs/css-ui/scrollbar-styling) auf developer.chrome.com (2024)
- [Scrollbars gestalten](https://webkit.org/blog/363/styling-scrollbars/) auf WebKit.org (2009)
