---
title: "`position-try-order` CSS property"
short-title: position-try-order
slug: Web/CSS/Reference/Properties/position-try-order
l10n:
  sourceCommit: 880c2c4b113c6fe127ca3ae3603a56ef7a2eb9a6
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`position-try-order`** ermöglicht es Ihnen, die auf ein ankerpositioniertes Element angewendete {{cssxref("position-try-fallbacks")}}-Option bei dessen erster Darstellung zu priorisieren, basierend darauf, welche Option in der angegebenen Richtung den meisten Platz um das Element herum schafft.

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

Die Eigenschaft `position-try-order` kann entweder als Schlüsselwortwert `normal` oder als `<try-size>` angegeben werden.

- `normal`
  - : Der Standardwert. Es werden keine Position-try-Fallback-Optionen ausprobiert, wenn das Element erstmals dargestellt wird.
- `<try-size>`
  - : Definiert, welche Kriterien verwendet werden, um zu bestimmen, welcher Try-Fallback auf das ankerpositionierte Element angewendet werden soll, wenn es erstmals dargestellt wird. Verfügbare Werte sind:
    - `most-height`
      - : Wendet die Position-try-Fallback-Option an, die dem Element den meisten vertikalen Platz gibt.
    - `most-width`
      - : Wendet die Position-try-Fallback-Option an, die dem Element den meisten horizontalen Platz gibt.
    - `most-block-size`
      - : Wendet die Position-try-Fallback-Option an, die dem Element den meisten Platz in Blockrichtung gibt.
    - `most-inline-size`
      - : Wendet die Position-try-Fallback-Option an, die dem Element den meisten Platz in Inline-Richtung gibt.

## Beschreibung

Die Eigenschaft `position-try-order` hat einen etwas anderen Schwerpunkt als die übrigen Position-try-Funktionen, da sie beeinflusst, welche Position-try-Fallback-Option angewendet wird, wenn das positionierte Element erstmals angezeigt wird, und nicht während es gescrollt wird. Beispielsweise möchten Sie das Element anfangs möglicherweise in einem Bereich anzeigen, der mehr verfügbare Höhe oder Breite als die standardmäßige Ausgangsposition bietet.

Der Browser testet die verfügbaren `position-try-fallbacks`, um herauszufinden, welche dem ankerpositionierten Element in der angegebenen Richtung den meisten Platz bietet. Anschließend wird diese Option angewendet und überschreibt beim ersten Rendern der Seite das anfängliche Styling des Elements.

Wenn keine Position-try-Fallback-Option verfügbar ist, die mehr Breite/Höhe als die dem Element zugewiesene anfängliche Positionierung bietet, wird keine Position-try-Option angewendet, genauso wie wenn `position-try-order` auf `normal` gesetzt wäre.

Detaillierte Informationen zu Ankerfunktionen und zur Verwendung von Position-try-Optionen finden Sie im Modul [CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) und im Leitfaden [Fallback-Optionen und bedingtes Ausblenden bei Überlauf](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding).

Die Eigenschaft `position-try-order` kann zusammen mit der Eigenschaft {{cssxref("position-try-fallbacks")}} auch mithilfe der Kurzform {{cssxref("position-try")}} festgelegt werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt die Wirkung von `position-try-order`.

#### HTML

Das HTML enthält zwei {{htmlelement("div")}}-Elemente, die zu einem Anker und einem ankerpositionierten Element werden.

```html
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>This is an information box.</p>
</div>
```

#### CSS

Im CSS beginnen wir damit, auf dem ankerpositionierten Element einen `position-try-order`-Wert von `normal` festzulegen, damit er leichter zu finden ist, wenn wir Sie später bitten, ihn zu bearbeiten:

```css
.infobox {
  position-try-order: normal;
}
```

Dem Anker werden ein {{cssxref("anchor-name")}} und ein großer {{cssxref("margin")}} gegeben, um ihn nahe der Mitte des Viewports zu positionieren:

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

Wir fügen eine benutzerdefinierte Positionsoption namens `--custom-bottom` hinzu, die das ankerpositionierte Element unterhalb des Ankers positioniert und ihm einen passenden Rand gibt:

```css
@position-try --custom-bottom {
  top: anchor(bottom);
  bottom: unset;
  margin-top: 10px;
}
```

Wir positionieren das ankerpositionierte Element zunächst oberhalb seines Ankers und geben ihm dann mithilfe der Eigenschaft `position-try-fallbacks` unsere benutzerdefinierte Positionsoption.

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

{{ EmbedLiveSample("Basic `position-try-order` usage", "100%", "310") }}

Zunächst wird das ankerpositionierte Element oberhalb seines Ankers positioniert, was die ihm zugewiesene Standardposition ist.

Öffnen Sie das Beispiel nun durch Drücken der Schaltfläche **Play** im MDN Playground, führen Sie das Beispiel aus und ändern Sie dann `position-try-order` zu `most-height` oder `most-block-size`. Wenn das Beispiel erneut gerendert wird, wird das ankerpositionierte Element unterhalb seines Ankers positioniert: Der Fallback `--custom-bottom` wird angewendet, weil er dem positionierten Element mehr umgebende Höhe als die Standardposition bietet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("position-try")}}
- {{cssxref("position-try-fallbacks")}}
- Die At-Regel {{cssxref("@position-try")}}
- Modul [CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning)
- Leitfaden [Verwendung der CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning/Using)
- Leitfaden [Fallback-Optionen und bedingtes Ausblenden bei Überlauf](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding)
