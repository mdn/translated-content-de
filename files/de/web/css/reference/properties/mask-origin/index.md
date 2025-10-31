---
title: mask-origin
slug: Web/CSS/Reference/Properties/mask-origin
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`mask-origin`** [CSS](/de/docs/Web/CSS) Eigenschaft legt den Ursprung einer Maske fest. Diese Eigenschaft bestimmt den Maskenpositionierungsbereich: das Gebiet, innerhalb dessen ein Maskenbild positioniert ist. HTML-Elemente können Masken innerhalb ihres Inhaltsrandrahmens, Auffüllrahmens oder Inhaltsrahmens haben, während SVG-Elemente (die nicht die zugehörigen CSS-Layout-Boxen haben) Masken innerhalb ihrer Füllung, ihres Umrisses oder View-Box enthalten können.
Für Elemente, die als mehrere Boxen gerendert werden, wie ein {{htmlelement("span")}} von Text, das sich über mehr als eine Zeile erstreckt, gibt die `mask-origin` Eigenschaft an, auf welche Boxen die {{cssxref("box-decoration-break")}} Eigenschaft wirkt, um den Maskenpositionierungsbereich zu bestimmen.

## Syntax

```css
/* Keyword values */
mask-origin: content-box;
mask-origin: padding-box;
mask-origin: border-box;
mask-origin: fill-box;
mask-origin: stroke-box;
mask-origin: view-box;

/* Multiple values */
mask-origin: padding-box, content-box;
mask-origin: view-box, fill-box, border-box;

/* Global values */
mask-origin: inherit;
mask-origin: initial;
mask-origin: revert;
mask-origin: revert-layer;
mask-origin: unset;
```

### Werte

Die `mask-origin` Eigenschaft ist eine durch Kommas getrennte Liste von `<coord-box>` Schlüsselwortwerten, einschließlich:

- `content-box`
  - : Die Position ist relativ zur [content box](/de/docs/Web/CSS/CSS_shapes/From_box_values#content-box).
- `padding-box`
  - : Die Position ist relativ zur [padding box](/de/docs/Web/CSS/CSS_shapes/From_box_values#padding-box).
- `border-box`
  - : Die Position ist relativ zur [border box](/de/docs/Web/CSS/CSS_shapes/From_box_values#border-box).
- `fill-box`
  - : Die Position ist relativ zur Objektbegrenzungsbox.
- `stroke-box`
  - : Die Position ist relativ zur Strichbegrenzungsbox.
- `view-box`
  - : Verwendet das nächste SVG-Viewport als Referenzbox. Wenn ein {{svgattr("viewBox")}} Attribut für das Element, das den SVG-Viewport erzeugt, angegeben ist, wird die Referenzbox am Ursprung des durch das `viewBox` Attribut etablierten Koordinatensystems positioniert und die Dimension der Referenzbox wird auf die Breite und Höhe der `viewBox` Attributwerte gesetzt.

Es gibt drei nicht-standardisierte Werte, die Abkürzungen für Standard-`<coord-box>` Werte sind: `content` ist ein Alias für `content-box`, `padding` ist ein Alias für `padding-box` und `border` ist ein Alias für `border-box`.

## Beschreibung

Die `mask-origin` Eigenschaft ist der {{cssxref("background-origin")}} Eigenschaft sehr ähnlich, hat jedoch eine andere Menge von Werten und einen anderen Anfangswert. Der Anfangswert hängt davon ab, ob es eine zugehörige CSS-Layout-Box gibt; wenn ja, ist der Standardwert `border-box`. Im Vergleich dazu ist der Standard für `background-origin` `padding-box`.

Für SVG-Elemente ohne zugehörige CSS-Layout-Box werden die Werte `content-box`, `padding-box` und `border-box` (der Standardwert) zu `fill-box` berechnet, was bedeutet, dass die Position relativ zur Objektbegrenzungsbox ist. Für HTML-Elemente, wenn ein SVG-bezogener Wert von `fill-box`, `stroke-box` oder `view-box` gesetzt ist, wird der Wert zu `border-box` berechnet.

Ein Element kann mehrere Maskenschichten haben. Die Anzahl der Schichten wird durch die Anzahl der durch Kommas getrennten Werte im {{cssxref("mask-image")}} Eigenschaftswert bestimmt (auch wenn einer oder mehrere dieser Werte `none` sind). Jeder `mask-origin` Wert in der durch Kommas getrennten Liste von Werten wird in der gleichen Reihenfolge mit einem durch Kommas getrennten `mask-image` Wert abgeglichen.

Wenn die Anzahl der Werte in den beiden Eigenschaften unterschiedlich ist, werden alle überzähligen Werte von `mask-origin` in Fällen, in denen `mask-origin` mehr Werte als `mask-image` hat, nicht verwendet. Wenn `mask-origin` weniger Werte als `mask-image` hat, werden die `mask-origin` Werte wiederholt.

Für als einzelne Box gerenderte Elemente gibt diese Eigenschaft den Maskenpositionierungsbereich — oder den Ausgangspunkt — des Bildes an, auf das von der `mask-image` Eigenschaft verwiesen wird.

Für als mehrere Boxen gerenderte Elemente, wie Inline-Boxen, die sich über mehr als eine Zeile erstrecken, gibt die `mask-origin` Eigenschaft an, auf welche Boxen die {{cssxref("box-decoration-break")}} Eigenschaft wirkt, um den Maskenpositionierungsbereich zu bestimmen.

Die `mask-origin` kann dazu führen, dass das Maskenschichtenbild abgeschnitten wird. Wenn beispielsweise die {{cssxref("mask-clip")}} Eigenschaft auf `padding-box` gesetzt ist, `mask-origin` auf `border-box`, die {{cssxref("mask-position")}} auf den `top left` Rand gesetzt ist und das Element einen Rand hat, dann wird das Maskenschichtenbild am oberen linken Rand abgeschnitten.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Vergleich von Inhalt, Auffüllung und Rand

Dieses Beispiel demonstriert die grundlegende Nutzung bei einem Vergleich der drei Werte der `mask-origin` Eigenschaft.

#### HTML

Wir fügen vier {{htmlelement("section")}} Elemente ein, die jeweils ein {{htmlelement("div")}} Element enthalten.

```html
<section class="content">
  <div></div>
</section>
<section class="padding">
  <div></div>
</section>
<section class="border">
  <div></div>
</section>
<section class="comparison">
  <div></div>
</section>
```

#### CSS

Wir wenden {{cssxref("border")}}, {{cssxref("padding")}} und {{cssxref("margin")}} auf jedes `<div>` an. Diese schaffen die Referenzpunkte für den Maskenbildursprung. Die `border` Kurzschrift beinhaltet eine {{cssxref("border-color")}}. Wir fügen auch eine {{cssxref("background-color")}} hinzu. Diese sorgen für einen grünen Hintergrund und einen blauen Rand zur Maske. Schließlich erhalten alle unsere `<div>` Elemente eine {{cssxref("mask-image")}}.

```css
div {
  width: 100px;
  height: 100px;
  margin: 10px;
  border: 10px solid blue;
  background-color: #8cffa0;
  padding: 10px;
  mask-image: url("https://mdn.github.io/shared-assets/images/examples/mask-star.svg");
}
section {
  border: 1px solid black;
}
```

Jedem `<div>` geben wir einen anderen `mask-origin` Wert.

```css
.content div {
  mask-origin: content-box;
}

.padding div {
  mask-origin: padding-box;
}

.border div {
  mask-origin: border-box;
}

.comparison div {
  mask-image: none;
}
```

Wir generieren auch etwas Text innerhalb jedes `<section>`, um den Maskenursprung für jeden `<div>` Container anzuzeigen.

```css
section::before {
  content: attr(class);
  display: block;
  text-align: center;
}
```

```css hidden
body {
  display: flex;
  flex-flow: row wrap;
  gap: 10px;
}
```

#### Ergebnis

{{EmbedLiveSample("Comparing content padding and border", "", "200")}}

Beachten Sie den Unterschied zwischen den drei Werten. In den ersten drei Boxen stammt die Maske jeweils von:

- Dem Außenrand des Randes.
- Der Innenrand-Kante, die der Außenrand der Auffüllbox ist.
- Der Innenauffüll-Kante, die der Außenrand der Inhaltsbox ist.

Die vierte Box hat kein `mask-image` angegeben: es ist ein Referenzbild, das eingefügt wurde, um Ihnen zu ermöglichen, das Ausmaß der Inhalts- und Auffüllbereiche leicht zu visualisieren.

### Mehrere Werte

Dieses Beispiel demonstriert die Verwendung unterschiedlicher `mask-origin` Werte für verschiedene `mask-image`s, die auf ein einzelnes Element angewendet werden.

#### HTML

Wir fügen ein einziges `<div>` ein.

```html
<div></div>
```

#### CSS

Wir wenden drei Maskenbilder anstelle von einem an, von denen jedes eine andere {{cssxref("mask-position")}} hat. Wir stellen auch ein, dass die Maskenbilder sich nicht wiederholen.

```css
div {
  width: 120px;
  height: 120px;
  margin: 10px;
  border: 10px solid blue;
  background-color: #8cffa0;
  padding: 10px;
  mask-image:
    url("https://mdn.github.io/shared-assets/images/examples/mask-star.svg"),
    url("https://mdn.github.io/shared-assets/images/examples/mask-star.svg"),
    url("https://mdn.github.io/shared-assets/images/examples/mask-star.svg");
  mask-position:
    top left,
    top right,
    bottom center;
  mask-repeat: no-repeat;
  mask-origin: content-box, border-box;
}
```

#### Ergebnisse

{{EmbedLiveSample("Multiple values", "", "200")}}

Wir haben drei `mask-image` Werte, aber nur zwei `mask-origin` Werte. Das bedeutet, dass die `mask-origin` Werte wiederholt werden, als hätten wir `mask-origin: content-box, padding-box, content-box;` gesetzt. Der `border-box` Stern, die einzige Maske, die sich mit dem Rand überschneidet, ist der obere rechte Stern.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("background-origin")}}
- {{cssxref("mask-image")}}
- {{cssxref("mask-position")}}
- {{cssxref("mask-repeat")}}
- {{cssxref("mask-size")}}
- {{cssxref("mask")}} shorthand
- [Einführung in das CSS-Masking](/de/docs/Web/CSS/CSS_masking/Masking)
- [CSS `mask` Eigenschaften](/de/docs/Web/CSS/CSS_masking/Mask_properties)
- [Deklarieren mehrerer Masken](/de/docs/Web/CSS/CSS_masking/Multiple_masks)
- [CSS-Masking](/de/docs/Web/CSS/CSS_masking) Modul
