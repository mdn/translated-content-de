---
title: "`position-try-order` CSS property"
short-title: position-try-order
slug: Web/CSS/Reference/Properties/position-try-order
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

Mit der [CSS](/de/docs/Web/CSS)-Eigenschaft **`position-try-order`** können Sie beim ersten Rendern eines an einem Anker positionierten Elements priorisieren, welche {{cssxref("position-try-fallbacks")}}-Option angewendet wird. Maßgeblich ist dabei, welche Option dem Element in der angegebenen Richtung den meisten Platz bietet.

## Syntax

```css
/* Keyword values */
position-try-order: normal;
position-try-order: most-height;
position-try-order: most-width;
position-try-order: most-block-size;
position-try-order: most-inline-size;

/* Global values */
position-try-order: inherit;
position-try-order: initial;
position-try-order: revert;
position-try-order: revert-layer;
position-try-order: unset;
```

### Werte

Die Eigenschaft `position-try-order` kann entweder auf das Schlüsselwort `normal` oder auf einen `<try-size>`-Wert gesetzt werden.

- `normal`
  - : Der Standardwert. Beim ersten Rendern des Elements werden keine Positionierungs-Fallback-Optionen geprüft.
- `<try-size>`
  - : Legt fest, nach welchem Kriterium beim ersten Rendern des an einem Anker positionierten Elements ein Positionierungs-Fallback ausgewählt wird. Verfügbare Werte sind:
    - `most-height`
      - : Wendet die Positionierungs-Fallback-Option an, die dem Element vertikal den meisten Platz bietet.
    - `most-width`
      - : Wendet die Positionierungs-Fallback-Option an, die dem Element horizontal den meisten Platz bietet.
    - `most-block-size`
      - : Wendet die Positionierungs-Fallback-Option an, die dem Element in Blockrichtung den meisten Platz bietet.
    - `most-inline-size`
      - : Wendet die Positionierungs-Fallback-Option an, die dem Element in Inline-Richtung den meisten Platz bietet.

## Beschreibung

Die Eigenschaft `position-try-order` unterscheidet sich in ihrer Zielsetzung etwas von den übrigen Positionierungs-Fallback-Funktionen: Sie beeinflusst, welche Fallback-Option beim ersten Anzeigen des positionierten Elements angewendet wird, und nicht, welche beim Scrollen angewendet wird. Beispielsweise möchten Sie das Element möglicherweise anfangs an einer Stelle anzeigen, an der mehr Höhe oder Breite verfügbar ist als an der standardmäßigen Ausgangsposition.

Der Browser prüft die verfügbaren `position-try-fallbacks`, um die Option zu finden, die dem an einem Anker positionierten Element in der angegebenen Richtung den meisten Platz bietet. Beim ersten Rendern der Seite wendet er diese Option an und überschreibt damit die ursprüngliche Positionierung des Elements.

Wenn keine Positionierungs-Fallback-Option mehr Breite oder Höhe bietet als die ursprüngliche Positionierung des Elements, wird keine solche Option angewendet – ebenso, als wäre `position-try-order` auf `normal` gesetzt.

Ausführliche Informationen zu Ankerfunktionen und zur Verwendung von Positionierungs-Fallback-Optionen finden Sie im Modul [CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) und im Leitfaden [Fallback-Optionen und bedingtes Ausblenden bei Überlauf](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding).

Die Eigenschaft `position-try-order` kann zusammen mit der Eigenschaft {{cssxref("position-try-fallbacks")}} auch über die Kurzschreibweise {{cssxref("position-try")}} festgelegt werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt die Wirkung von `position-try-order`.

#### HTML

Das HTML enthält zwei {{htmlelement("div")}}-Elemente, die als Anker und als an diesem Anker positioniertes Element dienen.

```html
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>This is an information box.</p>
</div>
```

#### CSS

Im CSS setzen wir `position-try-order` für das an einem Anker positionierte Element zunächst auf `normal`, damit Sie die Stelle leichter finden, wenn Sie den Wert später ändern sollen:

```css
.infobox {
  position-try-order: normal;
}
```

Der Anker erhält einen {{cssxref("anchor-name")}} und einen großen {{cssxref("margin")}}, um ihn ungefähr in der Mitte des Viewports zu platzieren:

```css hidden
.anchor {
  font-size: 1.8rem;
  color: white;
  text-shadow: 1px 1px 1px black;
  background-color: hsl(240 100% 75%);
  width: fit-content;
  border-radius: 10px;
  border: 1px solid black;
  padding: 3px;
}
```

```css
.anchor {
  anchor-name: --my-anchor;
  margin: 90px auto;
}
```

```css hidden
.infobox {
  color: darkblue;
  background-color: azure;
  border: 1px solid #dddddd;
  padding: 10px;
  border-radius: 10px;
  font-size: 1rem;
  text-align: center;
}
```

Wir definieren eine benutzerdefinierte Positionierungsoption namens `--custom-bottom`, die das an einem Anker positionierte Element unterhalb des Ankers platziert und ihm einen passenden Außenabstand gibt:

```css
@position-try --custom-bottom {
  top: anchor(bottom);
  bottom: unset;
  margin-top: 10px;
}
```

Zunächst positionieren wir das Element oberhalb seines Ankers. Anschließend weisen wir ihm mit der Eigenschaft `position-try-fallbacks` unsere benutzerdefinierte Positionierungsoption zu.

```css
.infobox {
  position: fixed;
  position-anchor: --my-anchor;

  bottom: anchor(top);
  margin-bottom: 10px;
  justify-self: anchor-center;

  position-try-fallbacks: --custom-bottom;
}
```

#### Ergebnis

{{ EmbedLiveSample("basic_usage", "100%", "310") }}

Anfangs befindet sich das an einem Anker positionierte Element oberhalb seines Ankers. Das ist die von uns festgelegte Standardposition.

Öffnen Sie nun das Beispiel im MDN Playground, indem Sie auf die Schaltfläche **Play** klicken, und führen Sie es aus. Ändern Sie anschließend `position-try-order` in `most-height` oder `most-block-size`. Nach dem erneuten Rendern befindet sich das an einem Anker positionierte Element unterhalb seines Ankers: Der Fallback `--custom-bottom` wird angewendet, weil er dem positionierten Element mehr verfügbaren Platz in der Höhe bietet als die Standardposition.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("position-try")}}
- {{cssxref("position-try-fallbacks")}}
- Die At-Regel {{cssxref("@position-try")}}
- Modul [CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning)
- Leitfaden [CSS-Ankerpositionierung verwenden](/de/docs/Web/CSS/Guides/Anchor_positioning/Using)
- Leitfaden [Fallback-Optionen und bedingtes Ausblenden bei Überlauf](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding)
