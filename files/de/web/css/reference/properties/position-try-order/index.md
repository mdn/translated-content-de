---
title: "`position-try-order` CSS property"
short-title: position-try-order
slug: Web/CSS/Reference/Properties/position-try-order
l10n:
  sourceCommit: d1cf7346516383565b51a125c064ae3d5d893526
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`position-try-order`** ermöglicht es Ihnen, die auf ein anchor-positioniertes Element angewendete {{cssxref("position-try-fallbacks")}}-Option bei dessen erster Darstellung zu priorisieren, basierend darauf, welche Option in der angegebenen Richtung den meisten Platz um das Element schafft.

## Syntax

```css
/* Keywords */
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

Die Eigenschaft `position-try-order` kann entweder als Schlüsselwortwert `normal` oder als `<try-size>` angegeben werden.

- `normal`
  - : Der Standardwert. Bei der ersten Darstellung des Elements werden keine position-try-Fallback-Optionen ausprobiert.
- `<try-size>`
  - : Definiert, anhand welcher Kriterien bestimmt wird, welcher try-Fallback auf das anchor-positionierte Element angewendet wird, wenn es anfänglich dargestellt wird. Verfügbare Werte sind:
    - `most-height`
      - : Wendet die position-try-Fallback-Option an, die dem Element den meisten vertikalen Platz gibt.
    - `most-width`
      - : Wendet die position-try-Fallback-Option an, die dem Element den meisten horizontalen Platz gibt.
    - `most-block-size`
      - : Wendet die position-try-Fallback-Option an, die dem Element den meisten Platz in Blockrichtung gibt.
    - `most-inline-size`
      - : Wendet die position-try-Fallback-Option an, die dem Element den meisten Platz in Inlinerichtung gibt.

## Beschreibung

Die Eigenschaft `position-try-order` hat einen etwas anderen Schwerpunkt als die übrigen position-try-Funktionen: Sie beeinflusst, welche position-try-Fallback-Option angewendet wird, wenn das positionierte Element erstmals angezeigt wird, und nicht, wenn es gescrollt wird. Beispielsweise möchten Sie das Element anfänglich möglicherweise in einem Bereich anzeigen, der mehr verfügbare Höhe oder Breite als die standardmäßige Anfangsposition bietet.

Der Browser prüft die verfügbaren `position-try-fallbacks`, um herauszufinden, welche dem anchor-positionierten Element den meisten Platz in der angegebenen Richtung bietet. Anschließend wendet er diese Option an und überschreibt dabei das anfängliche Styling des Elements, wenn die Seite erstmals gerendert wird.

Wenn keine position-try-Fallback-Option verfügbar ist, die mehr Breite/Höhe als die dem Element zugewiesene Anfangspositionierung bietet, wird keine position-try-Option angewendet, genauso als wäre `position-try-order` auf `normal` gesetzt.

Detaillierte Informationen zu Anchor-Funktionen und zur Verwendung von position-try-Optionen finden Sie im Modul [CSS-Anchor-Positionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) und im Leitfaden [Fallback-Optionen und bedingtes Ausblenden bei Überlauf](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding).

Die Eigenschaft `position-try-order` kann zusammen mit der Eigenschaft {{cssxref("position-try-fallbacks")}} auch mithilfe der Kurzform {{cssxref("position-try")}} festgelegt werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt die Wirkung von `position-try-order`.

#### HTML

Das HTML enthält zwei {{htmlelement("div")}}-Elemente, die zu einem Anchor und einem anchor-positionierten Element werden.

```html
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>This is an information box.</p>
</div>
```

#### CSS

Im CSS beginnen wir damit, für das anchor-positionierte Element einen `position-try-order`-Wert von `normal` festzulegen, damit es leichter zu finden ist, wenn wir Sie später bitten, ihn zu bearbeiten:

```css
.infobox {
  position-try-order: normal;
}
```

Dem Anchor werden ein {{cssxref("anchor-name")}} und ein großer {{cssxref("margin")}} gegeben, um ihn nahe der Mitte des Viewports zu positionieren:

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

Wir fügen eine benutzerdefinierte Positionsoption namens `--custom-bottom` ein, die das anchor-positionierte Element unterhalb des Anchors positioniert und ihm einen passenden Rand gibt:

```css
@position-try --custom-bottom {
  top: anchor(bottom);
  bottom: unset;
  margin-top: 10px;
}
```

Wir positionieren das anchor-positionierte Element anfänglich oberhalb seines Anchors und geben ihm anschließend mithilfe der Eigenschaft `position-try-fallbacks` unsere benutzerdefinierte Positionsoption.

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

{{ EmbedLiveSample("Grundlegende Verwendung von `position-try-order`", "100%", "310") }}

Anfänglich wird das anchor-positionierte Element oberhalb seines Anchors positioniert. Dies ist die Standardposition, die wir ihm gegeben haben.

Öffnen Sie das Beispiel nun durch Drücken der Schaltfläche **Play** im MDN Playground, führen Sie das Beispiel aus und ändern Sie anschließend `position-try-order` in `most-height` oder `most-block-size`. Wenn das Beispiel erneut gerendert wird, wird das anchor-positionierte Element unterhalb seines Anchors positioniert: Der Fallback `--custom-bottom` wird angewendet, weil er dem positionierten Element mehr umgebende Höhe als die Standardposition bietet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("position-try")}}
- {{cssxref("position-try-fallbacks")}}
- Die At-Regel {{cssxref("@position-try")}}
- Modul [CSS-Anchor-Positionierung](/de/docs/Web/CSS/Guides/Anchor_positioning)
- Leitfaden [Verwendung der CSS-Anchor-Positionierung](/de/docs/Web/CSS/Guides/Anchor_positioning/Using)
- Leitfaden [Fallback-Optionen und bedingtes Ausblenden bei Überlauf](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding)
