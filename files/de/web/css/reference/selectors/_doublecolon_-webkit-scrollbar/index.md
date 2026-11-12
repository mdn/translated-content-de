---
title: "`::-webkit-scrollbar` CSS pseudo-element"
short-title: ::-webkit-scrollbar
slug: Web/CSS/Reference/Selectors/::-webkit-scrollbar
l10n:
  sourceCommit: 7484d45816002fbf082a59c5d95c38a1eb2b2e4b
---

{{Non-standard_Header}}

Das CSS-Pseudoelement `::-webkit-scrollbar` beeinflusst die Darstellung der Scrollbar eines Elements, wenn dessen Inhalt scrollbar ist.

Die Standardeigenschaften {{cssxref("scrollbar-color")}} und {{cssxref("scrollbar-width")}} können als Alternativen für Browser verwendet werden, die dieses Pseudoelement und die zugehörigen `::-webkit-scrollbar-*`-Pseudoelemente nicht unterstützen (siehe [Browser-Kompatibilität](#browser-kompatibilität)).

> [!NOTE]
> Wenn die berechneten Werte von {{cssxref("scrollbar-color")}} und {{cssxref("scrollbar-width")}} für ein Element nicht `auto` sind, überschreiben sie die Gestaltung durch `::-webkit-scrollbar-*`.
> Da `scrollbar-color` vererbt wird, wirkt sich ein auf einem Vorfahren festgelegter Wert auch auf das Element aus, selbst wenn für das Element selbst kein Wert festgelegt wurde.
> Wenn Sie für das Element `scrollbar-color: auto` festlegen, wird seine Gestaltung durch `::-webkit-scrollbar-*` wiederhergestellt, sofern sie zuvor durch eine `scrollbar-color`-Angabe auf einem Vorfahren aufgehoben wurde.
> Weitere Informationen finden Sie unter [Fallback für Scrollbar-Stile hinzufügen](#fallback_für_scrollbar-stile_hinzufügen).

## CSS-Selektoren für Scrollbars

Mit den folgenden Pseudoelementen können Sie verschiedene Teile der Scrollbar in WebKit-Browsern anpassen:

- `::-webkit-scrollbar` — die gesamte Scrollbar.
- `::-webkit-scrollbar-button` — die Schaltflächen der Scrollbar (Pfeile nach oben und unten, mit denen jeweils um eine Zeile gescrollt wird).
- `::-webkit-scrollbar:horizontal` — die horizontale Scrollbar.
- `::-webkit-scrollbar-thumb` — der verschiebbare Scrollbalken.
- `::-webkit-scrollbar-track` — die Spur (Fortschrittsleiste) der Scrollbar, bei der ein grauer Balken auf einem weißen Balken liegt.
- `::-webkit-scrollbar-track-piece` — der Teil der Spur (Fortschrittsleiste), der nicht vom Scrollbalken bedeckt ist.
- `::-webkit-scrollbar:vertical` — die vertikale Scrollbar.
- `::-webkit-scrollbar-corner` — die untere Ecke der Scrollbar, an der horizontale und vertikale Scrollbar zusammentreffen. Dies ist häufig die untere rechte Ecke des Browserfensters.
- `::-webkit-resizer` — der verschiebbare Griff zur Größenänderung, der in der unteren Ecke einiger Elemente erscheint.

## Barrierefreiheit

Autoren sollten darauf verzichten, Scrollbars zu gestalten: Wenn ihr Erscheinungsbild vom Standard abweicht, wird die [Konsistenz mit anderen Anwendungen beeinträchtigt](https://inclusivedesignprinciples.info/#be-consistent), was sich negativ auf die Benutzerfreundlichkeit auswirkt. Wenn Sie Scrollbars dennoch gestalten, achten Sie auf ausreichenden Farbkontrast und darauf, dass Touch-Ziele mindestens 44px breit und hoch sind. Siehe [Techniken für WCAG 2.0: G183: Ein Kontrastverhältnis von 3:1 verwenden](https://www.w3.org/TR/WCAG20-TECHS/G183.html) und [WCAG 2.1 verstehen: Zielgröße](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html).

## Beispiele

### Scrollbars mit `-webkit-scrollbar` gestalten

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

#### Ergebnis

{{EmbedLiveSample("styling_scrollbars_using_-webkit-scrollbar", 600, 300)}}

### Fallback für Scrollbar-Stile hinzufügen

Mit einer {{cssxref("@supports")}}-At-Regel können Sie prüfen, ob ein Browser die Standardeigenschaften {{cssxref("scrollbar-color")}} und {{cssxref("scrollbar-width")}} unterstützt. Andernfalls können Sie einen Fallback mit `::-webkit-scrollbar-*`-Pseudoelementen verwenden.
Das folgende Beispiel zeigt, wie Sie Scrollbars mit {{cssxref("scrollbar-color")}} einfärben, falls die Eigenschaft unterstützt wird, und andernfalls mit `::-webkit-scrollbar-*`-Pseudoelementen.

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

Im folgenden Beispiel können Sie innerhalb des umrandeten Felds vertikal scrollen, um die Gestaltung der Scrollbar zu sehen.

{{EmbedLiveSample("adding_a_fallback_for_scrollbar_styles")}}

## Spezifikationen

Nicht Bestandteil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("scrollbar-width")}}
- {{CSSxRef("scrollbar-color")}}
- [Verwenden Sie keine benutzerdefinierten Scrollbars](https://ericwbailey.website/published/dont-use-custom-css-scrollbars/) (2023)
- [Scrollbars gestalten](https://developer.chrome.com/docs/css-ui/scrollbar-styling) auf developer.chrome.com (2024)
- [Scrollbars gestalten](https://webkit.org/blog/363/styling-scrollbars/) auf WebKit.org (2009)
