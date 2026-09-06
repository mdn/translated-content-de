---
title: "`position-try-order` CSS property"
short-title: position-try-order
slug: Web/CSS/Reference/Properties/position-try-order
l10n:
  sourceCommit: 7c56e442e76d472eff1c6a06eb5432bb11a47f3e
---

Die **`position-try-order`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es Ihnen, die Priorität der {{cssxref("position-try-fallbacks")}} Option festzulegen, die auf ein Anker-positioniertes Element angewendet wird, wenn es das erste Mal gerendert wird, basierend darauf, welche Option den meisten Platz um das Element in der angegebenen Richtung schafft.

> [!NOTE]
> Es gibt auch eine Kurzschrift-Eigenschaft — {{cssxref("position-try")}}, die verwendet werden kann, um `position-try-order` und {{cssxref("position-try-fallbacks")}} Werte in einer einzigen Deklaration anzugeben.

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

Die `position-try-order` Eigenschaft kann entweder als Schlüsselwortwert `normal` oder als `<try-size>` angegeben werden.

- `normal`
  - : Der Standardwert. Keine Position-Try-Fallback-Optionen werden versucht, wenn das Element zum ersten Mal gerendert wird.
- `<try-size>`
  - : Definiert, welche Kriterien verwendet werden, um zu bestimmen, welches Try-Fallback auf das Anker-positionierte Element angewendet werden soll, wenn es zunächst gerendert wird. Verfügbare Werte sind:
    - `most-height`
      - : Wendet die Position-Try-Fallback-Option an, die dem Element den meisten vertikalen Raum gibt.
    - `most-width`
      - : Wendet die Position-Try-Fallback-Option an, die dem Element den meisten horizontalen Raum gibt.
    - `most-block-size`
      - : Wendet die Position-Try-Fallback-Option an, die dem Element den meisten Platz in der Blockrichtung gibt.
    - `most-inline-size`
      - : Wendet die Position-Try-Fallback-Option an, die dem Element den meisten Platz in der Inlinerichtung gibt.

## Beschreibung

Die `position-try-order` Eigenschaft hat einen leicht anderen Fokus als die restlichen Position-Try-Funktionen, da sie beeinflusst, welche Position-Try-Fallback-Option angewendet wird, wenn das positionierte Element erstmals angezeigt wird, anstatt wenn es gescrollt wird. Zum Beispiel könnten Sie das Element zunächst in einem Bereich anzeigen wollen, der mehr verfügbare Höhe oder Breite als die Standard-Initialposition hat.

Der Browser testet die verfügbaren `position-try-fallbacks`, um herauszufinden, welche dem Anker-positionierten Element den meisten Platz in der angegebenen Richtung geben. Diese Option wird dann angewendet und überschreibt das anfängliche Styling des Elements, wenn die Seite erstmals gerendert wird.

Wenn keine Position-Try-Fallback-Option verfügbar ist, die mehr Breite/Höhe als die der initialen Zuordnung des Elements bietet, wird keine Position-Try-Option angewendet, genauso wie wenn `position-try-order` auf `normal` gesetzt wäre.

Für detaillierte Informationen über Ankerfunktionen und die Verwendung von Position-Try-Optionen, sehen Sie sich das [CSS Anker-Positionierungs](/de/docs/Web/CSS/Guides/Anchor_positioning) Modul und den [Fallback-Optionen und bedingte Ausblendung bei Überlauf](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding) Leitfaden an.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Nutzung

Dieses Beispiel zeigt die Wirkung von `position-try-order`.

#### HTML

Das HTML enthält zwei {{htmlelement("div")}} Elemente, die zu einem Anker und einem Anker-positionierten Element werden.

```html
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>This is an information box.</p>
</div>
```

#### CSS

Im CSS fangen wir damit an, einen `position-try-order` Wert von `normal` auf das Anker-positionierte Element zu setzen, damit es einfacher zu finden ist, wenn Sie es später ändern müssen:

```css
.infobox {
  position-try-order: normal;
}
```

Dem Anker wird ein {{cssxref("anchor-name")}} und ein großer {{cssxref("margin")}} gegeben, um ihn nahe dem Zentrum des Ansichtsfensters zu positionieren:

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

Wir fügen eine benutzerdefinierte Positionsoption namens `--custom-bottom` hinzu, die das Anker-positionierte Element unterhalb des Ankers positioniert und ihm einen angemessenen Rand gibt:

```css
@position-try --custom-bottom {
  top: anchor(bottom);
  bottom: unset;
  margin-top: 10px;
}
```

Wir positionieren das Anker-positionierte Element zunächst über seinem Anker und geben ihm dann unsere benutzerdefinierte Positionsoption mittels der `position-try-fallbacks` Eigenschaft.

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

{{ EmbedLiveSample("Grundlegende `position-try-order` Nutzung", "100%", "310") }}

Zunächst wird das Anker-positionierte Element über seinem Anker positioniert, was die Standardposition ist, die wir ihm gegeben haben.

Öffnen Sie nun das Beispiel im MDN Playground, indem Sie den **Abspielen**-Button drücken, führen Sie das Beispiel aus, und ändern Sie dann das `position-try-order` zu `most-height` oder `most-block-size`. Wenn das Beispiel neu gerendert wird, wird das Anker-positionierte Element unterhalb seines Ankers positioniert: `--custom-bottom` Fallback wird angewendet, da es dem positionierten Element mehr umgebende Höhe als die Standardposition gibt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("position-try")}}
- {{cssxref("position-try-fallbacks")}}
- Die {{cssxref("@position-try")}} At-Regel
- [CSS Anker-Positionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) Modul
- [Verwendung der CSS Anker-Positionierung](/de/docs/Web/CSS/Guides/Anchor_positioning/Using) Leitfaden
- [Fallback-Optionen und bedingte Ausblendung bei Überlauf](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding) Leitfaden
