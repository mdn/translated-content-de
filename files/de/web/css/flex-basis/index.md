---
title: flex-basis
slug: Web/CSS/flex-basis
l10n:
  sourceCommit: c63daf697d8f22ba17d4633f018ad7dfa65e4770
---

{{CSSRef}}

Die **`flex-basis`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die anfängliche Hauptgröße eines {{glossary("flex item")}} fest. Sie legt die Größe des Inhaltsbereichs fest, es sei denn, sie wird mit {{Cssxref("box-sizing")}} anders eingestellt.

> [!NOTE]
> Es wird empfohlen, die {{cssxref("flex")}} Kurzschreibweise anstelle separater Deklarationen von `flex-grow`, `flex-shrink` und `flex-basis` zu verwenden. Wir haben sie hier getrennt, da es in diesem Dokument um eine der Kurzschreibkomponenten geht: die `flex-basis` Eigenschaft.

{{EmbedInteractiveExample("pages/css/flex-basis.html")}}

In diesem Beispiel sind die Eigenschaften {{cssxref("flex-grow")}} und {{cssxref("flex-shrink")}} auf allen drei Elementen auf `1` eingestellt, was bedeutet, dass das Flex-Element von der anfänglichen `flex-basis` wachsen und schrumpfen kann.

Die Demo ändert den auf das erste Flex-Element gesetzten Wert von `flex-basis`, sodass es wächst oder schrumpft, um den verfügbaren Platz zu füllen. Die anderen Flex-Elemente ändern ebenfalls ihre Größe; sie sind mindestens `min-content`-groß. Zum Beispiel, wenn die `flex-basis` des ersten Elements auf `200px` gesetzt ist, beginnt es bei `200px`, schrumpft dann jedoch, um den verfügbaren Platz zu füllen.

Wenn `flex-basis` auf einen anderen Wert als `auto` gesetzt ist und eine `width` (oder `height` im Fall von `flex-direction: column`) für dasselbe Flex-Element festgelegt ist, hat der Wert von `flex-basis` Vorrang.

## Syntax

```css
/* Spezifizieren von <'width'> */
flex-basis: 10em;
flex-basis: 3px;
flex-basis: 50%;
flex-basis: auto;

/* Intrinsische Größenbestimmungsschlüsselwörter */
flex-basis: max-content;
flex-basis: min-content;
flex-basis: fit-content;

/* Automatische Größenänderung basierend auf dem Inhalt des Flex-Elements */
flex-basis: content;

/* Globale Werte */
flex-basis: inherit;
flex-basis: initial;
flex-basis: revert;
flex-basis: revert-layer;
flex-basis: unset;
```

Die `flex-basis` Eigenschaft wird entweder als das Schlüsselwort `content` oder ein `<'width'>` angegeben.

### Werte

- `<'width'>`

  - : Jede der folgenden Einheiten:
    - {{cssxref("&lt;length&gt;")}} setzt einen absoluten Wert.
    - {{cssxref("&lt;percentage&gt;")}} setzt einen Prozentsatz der Breite oder Höhe des Inhaltsbereichs des umschließenden Blocks fest. Prozentsatzwerte von `flex-basis` werden relativ zum Flex-Container aufgelöst. Wenn die Größe des Flex-Containers unbestimmt ist, wird der verwendete Wert für `flex-basis` `content`.
    - `auto` verwendet den Wert der {{cssxref("width")}} im horizontalen Schreibmodus und den Wert der {{cssxref("height")}} im vertikalen Schreibmodus; wenn der entsprechende Wert ebenfalls `auto` ist, wird stattdessen der Wert `content` verwendet.
    - {{cssxref("max-content")}} setzt die intrinsisch bevorzugte Breite.
    - {{cssxref("min-content")}} setzt die intrinsisch minimale Breite.
    - {{cssxref("fit-content")}} setzt die maximale mögliche Größe des Inhaltsbereichs eines umschließenden Blocks, begrenzt durch die Werte `min-content` und `max-content` und basierend auf dem Inhalt des aktuellen Elements berechnet.

- `content`

  - : Zeigt eine automatische Größenbestimmung basierend auf dem Inhalt des Flex-Elements an.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einstellen der anfänglichen Größen von Flex-Elementen

#### HTML

```html
<ul class="container">
  <li class="flex flex1">1: flex-basis test</li>
  <li class="flex flex2">2: flex-basis test</li>
  <li class="flex flex3">3: flex-basis test</li>
  <li class="flex flex4">4: flex-basis test</li>
  <li class="flex flex5">5: flex-basis test</li>
</ul>

<ul class="container">
  <li class="flex flex6">6: flex-basis test</li>
</ul>
```

#### CSS

```css
.container {
  font-family: arial, sans-serif;
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
}

.flex {
  background: #6ab6d8;
  padding: 10px;
  margin-bottom: 50px;
  border: 3px solid #2e86bb;
  color: white;
  font-size: 14px;
  text-align: center;
  position: relative;
}

.flex::after {
  position: absolute;
  z-index: 1;
  left: 0;
  top: 100%;
  margin-top: 10px;
  width: 100%;
  color: #333;
  font-size: 12px;
}

.flex1 {
  flex-basis: auto;
}

.flex1::after {
  content: "auto";
}

.flex2 {
  flex-basis: max-content;
}

.flex2::after {
  content: "max-content";
}

.flex3 {
  flex-basis: min-content;
}

.flex3::after {
  content: "min-content";
}

.flex4 {
  flex-basis: fit-content;
}

.flex4::after {
  content: "fit-content";
}

.flex5 {
  flex-basis: content;
}

.flex5::after {
  content: "content";
}
```

#### Ergebnisse

{{EmbedLiveSample('Setting_flex_item_initial_sizes', '', '360')}}

### Flex-Basis `0` vs `0%`

Dieses Beispiel zeigt den Unterschied zwischen einer `flex-basis` von `0` im Vergleich zu einer `flex-basis` von `0%`, wenn `flex-direction` auf `column` gesetzt ist und die Flex-Container und Flex-Items keine festgelegte Höhe haben; während `0` eine absolute Länge ist, werden Prozentwerte der Flex-Basis gegenüber [`content`](#content) Werten aufgelöst.

#### HTML

Wir fügen zwei Flex-Container mit derselben Struktur ein. Diese werden ähnlich gestylt, außer für ihre `flex-basis` Werte. Die Container haben jeweils zwei Kinder: eine Kopfzeile `<div>` und eine `<section>`. Das `<section>` Element hat ein Inhalts-`<div>`-Kind, welches nicht als Flex-Element gesetzt, aber mit einer Höhe versehen wird.

```html
<div class="container basis-0">
  <div>heading</div>
  <section>
    flex-basis: 0;
    <div class="content"></div>
  </section>
</div>
<div class="container basis-0-percent">
  <div>heading</div>
  <section>
    flex-basis: 0%;
    <div class="content"></div>
  </section>
</div>
```

#### CSS

Wir stylen die Container als Inline-Flex-Container, die nebeneinander erscheinen, um den Vergleich zu erleichtern. Wir setzen die `flex-direction` auf Spalte. Die Flex-Items des ersten Containers haben den `flex-basis` Wert `0` und die Flex-Items des zweiten Containers haben den `flex-basis` Wert `0%`. Weder die Flex-Container noch ihre Flex-Items haben eine explizit festgelegte Höhe, aber die Höhen der `section` Elemente können `200px` nicht überschreiten und deren Kinder haben die Höhe `300px`.

```css
.container {
  width: 40vw;
  padding: 1rem;
  border: 1px dashed blue;

  display: inline-flex;
  flex-direction: column;
}

section {
  border: 1px solid red;

  overflow: auto;
  min-height: 200px;
}

.content {
  background: wheat;
  height: 300px;
}

.container.basis-0 > * {
  flex-basis: 0;
}
.container.basis-0-percent > * {
  flex-basis: 0%;
}
```

#### Ergebnisse

{{EmbedLiveSample('flex_basis_0_vs_0', '100%', '400')}}

Im ersten Container mit `flex-basis: 0` hat das `<section>` Element eine anfängliche Hauptgröße von Null und wächst auf das `200px` Höhenlimit. Im zweiten Container mit `flex-basis: 0%` hat das `<section>` Element eine anfängliche Hauptgröße von `300px`, da die Prozentwerte der Flex-Basis auf den [`content`](#content)-Wert aufgelöst werden, da der Flex-Container keine festgelegte Höhe hat.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("flex")}} Kurzschreibweise
- {{cssxref("inline-size")}}
- [Grundkonzepte des Flexbox-Layouts](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Verhältnissteuerung von Flex-Elementen entlang der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis)
- [CSS Flexible Box Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
