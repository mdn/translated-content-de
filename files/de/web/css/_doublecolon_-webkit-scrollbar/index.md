---
title: "::-webkit-scrollbar"
slug: Web/CSS/::-webkit-scrollbar
l10n:
  sourceCommit: ae0fdf44f8195a1406b170670832ac510ce03764
---

{{CSSRef}}{{Non-standard_Header}}

Das `::-webkit-scrollbar` CSS-Pseudoelement beeinflusst den Stil der Scrollleiste eines Elements, wenn es über einen scrollbaren Überlauf verfügt.

Die standardmäßigen Eigenschaften {{cssxref("scrollbar-color")}} und {{cssxref("scrollbar-width")}} können als Alternativen für Browser verwendet werden, die dieses Pseudoelement und die zugehörigen `::-webkit-scrollbar-*` Pseudoelemente nicht unterstützen (siehe [Browser-Kompatibilität](#browser-kompatibilität)).

> [!NOTE]
> Wenn {{cssxref("scrollbar-color")}} und {{cssxref("scrollbar-width")}} unterstützt werden und einen anderen Wert als `auto` gesetzt haben, überschreiben sie das Styling von `::-webkit-scrollbar-*`.
> Weitere Details finden Sie unter [Hinzufügen eines Fallback für Scrollstil](#hinzufügen_eines_fallbacks_für_scrollleistestile).

## CSS Scrollbar Selektoren

Sie können die folgenden Pseudoelemente verwenden, um verschiedene Teile der Scrollleiste für WebKit-Browser anzupassen:

- `::-webkit-scrollbar` — die gesamte Scrollleiste.
- `::-webkit-scrollbar-button` — die Schaltflächen auf der Scrollleiste (Pfeile, die Zeile für Zeile nach oben und unten blättern).
- `::-webkit-scrollbar:horizontal{}` — die horizontale Scrollleiste.
- `::-webkit-scrollbar-thumb` — der verschiebbare Rollgriff.
- `::-webkit-scrollbar-track` — die Spur (Fortschrittsbalken) der Scrollleiste, wo sich eine graue Leiste auf einer weißen Leiste befindet.
- `::-webkit-scrollbar-track-piece` — der Teil der Spur (Fortschrittsbalken), der nicht vom Griff bedeckt ist.
- `::-webkit-scrollbar:vertical{}` — die vertikale Scrollleiste.
- `::-webkit-scrollbar-corner` — die untere Ecke der Scrollleiste, wo sich horizontale und vertikale Scrollleisten treffen. Dies ist oft die untere rechte Ecke des Browserfensters.
- `::-webkit-resizer` — der verschiebbare Größenanpassungsgriff, der in der unteren Ecke einiger Elemente erscheint.

## Barrierefreiheit

Autoren sollten vermeiden, Scrollleisten zu stylen, da das Ändern des Erscheinungsbilds von Scrollleisten vom Standard abweicht und die externe Konsistenz [bricht](https://inclusivedesignprinciples.info/#be-consistent), was die Benutzerfreundlichkeit negativ beeinflusst. Falls Scrollleisten gestylt werden, stellen Sie sicher, dass ausreichend Farbkontrast vorhanden ist und die Berührungsziele mindestens 44px breit und hoch sind. Siehe [Techniken für WCAG 2.0: G183: Verwenden eines Kontrastverhältnisses von 3:1](https://www.w3.org/TR/WCAG20-TECHS/G183.html) und [Verständnis von WCAG 2.1 : Zielgröße](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html).

## Beispiele

### Stylisierung von Scrollleisten mit `-webkit-scrollbar`

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

/* Demonstriert eine "größtenteils angepasste" Scrollleiste
 * (wäre sonst nicht sichtbar, wenn Breite/Höhe angegeben ist) */
.mostly-customized-scrollbar::-webkit-scrollbar {
  width: 5px;
  height: 8px;
  background-color: #aaa; /* oder zum Track hinzufügen */
}

/* Fügen Sie einen Daumen hinzu */
.mostly-customized-scrollbar::-webkit-scrollbar-thumb {
  background: #000;
}
```

#### HTML

```html
<div class="visible-scrollbar">
  <h3>Sichtbare Scrollleiste</h3>
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
  <h3>Unsichtbare Scrollleiste</h3>
  <p>
    Thisisaveeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeerylongword
  </p>
</div>

<div class="mostly-customized-scrollbar">
  <h3>Benutzerdefinierte Scrollleiste</h3>
  <p>
    Thisisaveeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeerylongword<br />
    Und ziemlich groß<br />
    Ding mit seltsamen Scrollleisten.<br />
    Wer hätte gedacht, dass Scrollleisten seltsam gemacht werden könnten?
  </p>
</div>
```

#### Ergebnis

{{EmbedLiveSample("styling_scrollbars_using_-webkit-scrollbar", 600, 300)}}

### Hinzufügen eines Fallbacks für Scrollleistestile

Sie können eine {{cssxref("@supports")}} At-Regel verwenden, um zu erkennen, ob ein Browser die standardmäßigen Eigenschaften {{cssxref("scrollbar-color")}} und {{cssxref("scrollbar-width")}} unterstützt und ansonsten ein Fallback mit `::-webkit-scrollbar-*` Pseudoelementen verwenden.
Das folgende Beispiel zeigt, wie Farben auf Scrollleisten angewendet werden, wobei {{cssxref("scrollbar-color")}} verwendet wird, wenn es unterstützt wird, und `::-webkit-scrollbar-*` Pseudoelemente, wenn nicht.

#### HTML

```html
<div class="scrollbox">
  <h1>Yoshi</h1>
  <p>
    Yoshi ist ein fiktiver Dinosaurier, der in Videospielen von Nintendo
    erscheint. Yoshi debütierte in Super Mario World (1990) auf dem SNES als
    Sidekick von Mario und Luigi.
  </p>
  <p>
    In der Hauptreihe der Super Mario-Serie dient Yoshi typischerweise als
    Marios treuer Begleiter.
  </p>
  <p>
    Mit einem gefräßigen Appetit kann Yoshi Feinde mit seiner langen Zunge
    verschlingen und Eier legen, die doppelt als Geschosse fungieren.
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
/* Für Browser, die `scrollbar-*` Eigenschaften unterstützen */
@supports (scrollbar-color: auto) {
  .scrollbox {
    scrollbar-color: aquamarine cornflowerblue;
  }
}

/* Andernfalls verwenden Sie `::-webkit-scrollbar-*` Pseudoelemente */
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

Im folgenden Beispiel können Sie die gerahmte Box vertikal scrollen, um den Effekt der Scrollleisten-Stylisierung zu sehen.

{{EmbedLiveSample("adding_a_fallback_to_standard_scrollbar_style_properties")}}

## Spezifikationen

Kein Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("scrollbar-width")}}
- {{CSSxRef("scrollbar-color")}}
- [Verwenden Sie keine benutzerdefinierten Scrollleisten](https://ericwbailey.website/published/dont-use-custom-css-scrollbars/) (2023)
- [Scrollleisten-Stilierung](https://developer.chrome.com/docs/css-ui/scrollbar-styling) auf developer.chrome.com (2024)
- [Stilierung von Scrollleisten](https://webkit.org/blog/363/styling-scrollbars/) auf WebKit.org (2009)
