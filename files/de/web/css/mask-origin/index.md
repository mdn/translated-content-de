---
title: mask-origin
slug: Web/CSS/mask-origin
l10n:
  sourceCommit: 19895ee6410d39f293a06c19a641925206eece73
---

{{CSSRef}}

Die **`mask-origin`** [CSS](/de/docs/Web/CSS) Eigenschaft legt den Ursprung einer Maske fest. Diese Eigenschaft bestimmt den Maskenpositionierungsbereich: den Bereich, in dem ein Maskenbild positioniert wird. HTML-Elemente können Masken innerhalb ihrer Inhaltsrandumrahmung, Polsterumrahmung oder Inhaltseinfassung haben, während SVG-Elemente (die keine zugehörigen CSS-Layout-Boxen haben) Masken innerhalb ihrer Füllung, Kontur oder Sichtfensterumrahmung haben können.
Für Elemente, die als mehrere Boxen gerendert werden, wie ein {{htmlelement("span")}} eines Textes, der mehr als eine Zeile umfasst, gibt die Eigenschaft `mask-origin` an, auf welche Boxen die {{cssxref("box-decoration-break")}} Eigenschaft angewendet wird, um den Maskenpositionierungsbereich zu bestimmen.

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
  - : Die Position ist relativ zur [Inhaltseinfassung](/de/docs/Web/CSS/CSS_shapes/From_box_values#content-box).
- `padding-box`
  - : Die Position ist relativ zur [Polstereinfassung](/de/docs/Web/CSS/CSS_shapes/From_box_values#padding-box).
- `border-box`
  - : Die Position ist relativ zur [Randumrahmung](/de/docs/Web/CSS/CSS_shapes/From_box_values#border-box).
- `fill-box`
  - : Die Position ist relativ zur Objektbegrenzungsbox.
- `stroke-box`
  - : Die Position ist relativ zur Konturbegrenzungsbox.
- `view-box`
  - : Verwendet das nächste SVG-Sichtfenster als Referenzbox. Wenn ein {{svgattr("viewBox")}} Attribut für das Element, das das SVG-Sichtfenster erstellt, angegeben ist, wird die Referenzbox am Ursprung des durch das `viewBox` Attribut festgelegten Koordinatensystems positioniert und die Dimension der Referenzbox wird auf die Breiten- und Höhenwerte des `viewBox` Attributs festgelegt.

Es gibt drei nicht standardisierte Werte, die Abkürzungen für standardmäßige `<coord-box>` Werte sind: `content` ist ein Alias für `content-box`, `padding` ist ein Alias für `padding-box`, und `border` ist ein Alias für `border-box`.

## Beschreibung

Die `mask-origin` Eigenschaft ist der {{cssxref("background-origin")}} Eigenschaft sehr ähnlich, aber sie hat einen anderen Satz von Werten und einen anderen Anfangswert. Der Anfangswert hängt davon ab, ob es eine zugehörige CSS-Layout-Box gibt; wenn ja, ist der Standardwert `border-box`. Im Vergleich dazu ist der Standardwert für `background-origin` `padding-box`.

Für SVG-Elemente ohne zugehörige CSS-Layout-Box werden die Werte `content-box`, `padding-box` und `border-box` (der Standardwert) zu `fill-box` berechnet, was bedeutet, dass die Position relativ zur Objektbegrenzungsbox ist. Für HTML-Elemente, wenn ein SVG-bezogener Wert von `fill-box`, `stroke-box` oder `view-box` festgelegt wird, wird der Wert zu `border-box` berechnet.

Ein Element kann mehrere Maskenschichten haben. Die Anzahl der Schichten wird durch die Anzahl der durch Kommas getrennten Werte in dem {{cssxref("mask-image")}} Eigenschaftswert bestimmt (selbst wenn einer oder mehrere dieser Werte `none` sind). Jeder `mask-origin` Wert in der durch Kommas getrennten Liste von Werten wird in der gleichen Reihenfolge mit einem durch Kommas getrennten `mask-image` Wert abgeglichen.

Wenn die Anzahl der Werte in den beiden Eigenschaften unterschiedlich ist, werden bei Fällen, in denen `mask-origin` mehr Werte hat als `mask-image`, die überschüssigen Werte von `mask-origin` nicht verwendet. Wenn `mask-origin` weniger Werte hat als `mask-image`, werden die `mask-origin` Werte wiederholt.

Für Elemente, die als Einzelbox gerendert werden, gibt diese Eigenschaft den Maskenpositionierungsbereich — oder die Ursprungsposition — des Bildes an, das durch die `mask-image` Eigenschaft referenziert wird.

Für Elemente, die als mehrere Boxen gerendert werden, wie Inline-Boxen, die mehr als eine Zeile umfassen, gibt die `mask-origin` Eigenschaft an, auf welche Boxen die {{cssxref("box-decoration-break")}} Eigenschaft angewendet wird, um den Maskenpositionierungsbereich zu bestimmen.

Die `mask-origin` kann dazu führen, dass das Maskenschichtenbild abgeschnitten wird. Zum Beispiel, wenn die {{cssxref("mask-clip")}} Eigenschaft auf `padding-box` gesetzt ist, `mask-origin` auf `border-box`, {{cssxref("mask-position")}} auf die `top left` Kante gesetzt ist und das Element einen Rahmen hat, dann wird das Maskenschichtenbild an der oberen linken Kante abgeschnitten.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Vergleich von Inhalt, Polsterung und Umrahmung

Dieses Beispiel zeigt die grundlegende Verwendung und vergleicht die drei Werte der `mask-origin` Eigenschaft.

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

Wir wenden {{cssxref("border")}}, {{cssxref("padding")}}, und {{cssxref("margin")}} auf jedes `<div>` an. Diese schaffen die Bezugspunkte für den Maskenbildursprung. Die `border` Abkürzung enthält eine {{cssxref("border-color")}}. Wir fügen auch eine {{cssxref("background-color")}} hinzu. Diese bieten einen grünen Hintergrund und eine blaue Umrahmung zur Maske. Schließlich erhalten alle unsere `<div>` Elemente ein {{cssxref("mask-image")}}.

```css
div {
  width: 100px;
  height: 100px;
  margin: 10px;
  border: 10px solid blue;
  background-color: #8cffa0;
  padding: 10px;
  mask-image: url(https://mdn.github.io/shared-assets/images/examples/mask-star.svg);
}
section {
  border: 1px solid black;
}
```

Wir geben jedem `<div>` einen anderen `mask-origin` Wert.

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

Wir erzeugen auch etwas Text in jedem `<section>`, um den Maskenursprung für jeden `<div>` Container anzuzeigen.

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

- Die äußere Kante der Umrandung.
- Die innere Umrandungskante, die die äußere Kante der Polsterumrahmung ist.
- Die innere Polsterkante, die die äußere Kante der Inhaltseinfassung ist.

Die vierte Box hat kein `mask-image` angegeben: Es ist ein Referenzbild, das Ihnen ermöglicht, den Umfang der Inhalts- und Polsterbereiche leicht zu visualisieren.

### Mehrere Werte

Dieses Beispiel zeigt, wie unterschiedliche `mask-origin` Werte für verschiedene `mask-image`s auf ein einziges Element angewendet werden.

#### HTML

Wir fügen ein einzelnes `<div>` ein.

```html
<div></div>
```

#### CSS

Wir verwenden drei Maskenbilder anstelle von einem, jedes mit einer anderen {{cssxref("mask-position")}}. Wir setzen auch, dass die Maskenbilder sich nicht wiederholen sollen.

```css
div {
  width: 120px;
  height: 120px;
  margin: 10px;
  border: 10px solid blue;
  background-color: #8cffa0;
  padding: 10px;
  mask-image:
    url(https://mdn.github.io/shared-assets/images/examples/mask-star.svg),
    url(https://mdn.github.io/shared-assets/images/examples/mask-star.svg),
    url(https://mdn.github.io/shared-assets/images/examples/mask-star.svg);
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

Wir haben drei `mask-image` Werte, aber nur zwei `mask-origin` Werte. Das bedeutet, dass die `mask-origin` Werte wiederholt werden, als ob wir `mask-origin: content-box, padding-box, content-box;` gesetzt hätten. Der `border-box` Stern, die einzige Maske, die den Rahmen überlappt, ist der sternförmige oben rechts.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("mask-image")}}
- {{cssxref("mask-position")}}
- {{cssxref("mask-repeat")}}
- {{cssxref("mask-size")}}
- {{cssxref("mask")}} Abkürzung
- [CSS masking](/de/docs/Web/CSS/CSS_masking) Modul
