---
title: "`row-gap` CSS property"
short-title: row-gap
slug: Web/CSS/Reference/Properties/row-gap
l10n:
  sourceCommit: e57c161bccdd08db7e46922255e1dc3ea74058d4
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`row-gap`** legt die Größe des Abstands ({{Glossary("gutters", "gutter")}}) zwischen den Zeilen eines Elements in mehrspaltigen Layouts, Flexbox-Layouts und Grid-Layouts fest.

{{InteractiveExample("CSS Demo: row-gap")}}

```css interactive-example-choice
row-gap: 0;
```

```css interactive-example-choice
row-gap: 1ch;
```

```css interactive-example-choice
row-gap: 1em;
```

```css interactive-example-choice
row-gap: 20px;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="example-container">
    <div class="transition-all" id="example-element">
      <div>One</div>
      <div>Two</div>
      <div>Three</div>
      <div>Four</div>
      <div>Five</div>
    </div>
  </div>
</section>
```

```css interactive-example
#example-element {
  border: 1px solid #c5c5c5;
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 200px;
}

#example-element > div {
  background-color: rgb(0 0 255 / 0.2);
  border: 3px solid blue;
}
```

## Syntax

```css
/* Keyword value */
row-gap: normal;

/* <length-percentage> value */
row-gap: 20px;
row-gap: 1em;
row-gap: 3vmin;
row-gap: 0.5cm;
row-gap: 10%;
row-gap: calc(10% - 6px);

/* <line-width> values */
row-gap: thin;
row-gap: medium;
row-gap: thick;

/* Global values */
row-gap: inherit;
row-gap: initial;
row-gap: revert;
row-gap: revert-layer;
row-gap: unset;
```

### Werte

Diese Eigenschaft wird mit einem einzelnen Wert aus der folgenden Liste angegeben:

- `normal`
  - : Wird in mehrspaltigen Layouts zu `1em` aufgelöst, andernfalls zu `0`. Dies ist der Standardwert.
- {{cssxref("&lt;line-width&gt;")}}
  - : Legt die Größe des Abstands mit den Schlüsselwörtern `thin`, `medium` oder `thick` oder mit einem positiven {{cssxref("length")}}-Wert fest.
- {{CSSxRef("length-percentage")}}
  - : Legt einen nicht negativen {{CSSxRef("&lt;length&gt;")}}- oder {{CSSxRef("&lt;percentage&gt;")}}-Wert fest. Prozentwerte beziehen sich auf die Blockgröße der Inhaltsbox oder auf `0`.

## Beschreibung

Die Eigenschaft `row-gap` legt die Größe des Abstands zwischen den Zeilen eines Elements fest.
Dieser Abstand kann eine sichtbare Trennlinie als Dekoration enthalten. Wenn sich zwischen den Zeilen eine Trennlinie befindet, erscheint sie in der Mitte des Abstands, beeinflusst aber dessen Größe nicht. Solche dekorativen Linien können dem ansonsten „leeren Raum“ mit der Eigenschaft {{cssxref("row-rule")}} oder der Kurzschreibweise {{cssxref("rule")}} hinzugefügt werden.

Die in [CSS-Abständen](/de/docs/Web/CSS/Guides/Gaps) definierte Eigenschaft kann in mehrspaltigen Layouts, Flexbox-Layouts und Grid-Layouts verwendet werden. `row-gap` kann zusammen mit der Eigenschaft {{cssxref("column-gap")}} auch über die Kurzschreibweise {{cssxref("gap")}} festgelegt werden, und zwar in dieser Reihenfolge. Die Eigenschaft `row-gap` hat `grid-row-gap` ersetzt, die auf [CSS-Grid-Layouts](/de/docs/Web/CSS/Guides/Grid_layout) beschränkt war. `grid-row-gap` ist nun ein Alias für `row-gap`.

Die Eigenschaft legt einen Abstand mit fester Länge zwischen Elementen in einem Container fest und trennt dabei Boxen entlang der Blockachse des Containers. Negative Werte sind ungültig. Der Standardwert `normal` wird bei mehrspaltigen Containern zu `1em` aufgelöst, ansonsten zu `0`. Weitere Informationen zu Abständen je nach Layouttyp finden Sie unter [CSS-Abstände definieren](/de/docs/Web/CSS/Guides/Gaps/Defining_gaps).

Prozentwerte werden anhand der Größe der [Inhaltsbox](/de/docs/Web/CSS/Guides/Box_model/Introduction#content_area) des Containerelements entlang seiner Blockachse aufgelöst, wenn diese Größe eindeutig bestimmt ist, andernfalls anhand von `0`. Eine Ausnahme bilden Grid-Layouts: Dort werden zyklische Prozentwerte bei der Bestimmung der Beiträge zur {{Glossary("intrinsic_size", "intrinsischen Größe")}} anhand von null aufgelöst, beim Layout des Inhalts jedoch anhand der Inhaltsbox des Elements. Weitere Informationen finden Sie unter [Abstandswerte als Prozentwerte angeben](/de/docs/Web/CSS/Guides/Gaps/Defining_gaps#specifying_gap_values_as_percentages).

In Grid-Layouts wirkt sich der Abstand so aus, als erhielten die Grid-Linien zwischen den Grid-Zeilen die durch den Eigenschaftswert festgelegte Breite: Der Grid-Track zwischen zwei Zeilen ist der Raum zwischen den Abständen, die diese Zeilen begrenzen. Bei der Größenbestimmung der Tracks wird jeder Abstand als zusätzlicher, leerer Track mit der angegebenen festen Größe behandelt, über den sich alle Grid-Elemente erstrecken, die mehr als eine Zeile überspannen. Obwohl der Abstand bei der Größenbestimmung als leer gilt, kann er eine {{cssxref("row-rule")}} enthalten.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Flexbox-Layout

Dieses Beispiel zeigt, wie die Eigenschaft `row-gap` einen horizontalen Abstand zwischen benachbarten Zeilen von Flex-Elementen erzeugt. Es zeigt außerdem, dass die Größe von `row-gap` nicht von der Größe der Trennlinie zwischen den Zeilen beeinflusst wird.

#### HTML

Wir fügen sechs Elemente in ein Containerelement ein:

```html
<div id="flexbox">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
```

#### CSS

Wir setzen {{cssxref("display")}} auf `flex` und {{cssxref("flex-flow")}} auf `row wrap`, um einen Flex-Container zu erstellen, dessen Flex-Elemente bei Bedarf in neue Zeilen umbrechen. Außerdem begrenzen wir {{cssxref("width")}} auf `300px`. Wir fügen auch eine {{cssxref("row-rule")}} hinzu, die in der Mitte des Abstands eine 30px breite, gestrichelte, magentafarbene Linie zeichnet.

Auf dem Flex-Container setzen wir `row-gap` auf `20px`, um zwischen benachbarten Flex-Zeilen einen Abstand von `20px` zu erzeugen.

Außerdem geben wir den Flex-Elementen eine Hintergrundfarbe. Die meisten sind teilweise transparent, um zu zeigen, dass die Trennlinie unter den Flex-Elementen sichtbar ist, wenn sie breiter als der Abstand ist.

```css
#flexbox {
  display: flex;
  flex-flow: row wrap;
  width: 300px;
  row-rule: 30px dashed magenta;

  row-gap: 20px;
}

#flexbox > div {
  border: 1px solid green;
  background-color: #00ff0033;
  flex: 1 1 100px;
  height: 50px;
}
#flexbox > div:nth-of-type(3n-1) {
  background-color: lime;
}
```

#### Ergebnis

{{EmbedLiveSample('Flex_layout', "auto", "400")}}

Um einen vertikalen Abstand zwischen Flex-Elementen festzulegen, geben Sie für die Eigenschaft {{cssxref("column-gap")}} einen Wert ungleich null an. Optional können Sie `row-gap` und `column-gap` gemeinsam über die Kurzschreibweise `gap` festlegen.

### Grid-Layout

Dieses Beispiel zeigt die Verwendung der Eigenschaft `row-gap` mit einem `<percentage>`-Wert in einem Grid-Layout.

#### HTML

Wir fügen fünf Elemente in ein Containerelement ein:

```html
<div id="grid">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
```

#### CSS

Wir setzen die Eigenschaft {{cssxref("display")}} auf `grid`, {{cssxref("height")}} auf `240px`, {{cssxref("width")}} auf `350px` und {{cssxref("grid-template-rows")}} auf `repeat(3, 1fr)`. So entsteht ein 350px breiter Grid-Container mit drei Spalten und so vielen Zeilen wie nötig. Jede Zeile ist `100px` hoch, wie durch die Eigenschaft {{cssxref("grid-template-rows")}} festgelegt.

`row-gap` ist auf `5%` gesetzt. Die Höhe des Containers beträgt `240px`. Der Wert `5%` erzeugt einen Zeilenabstand von `12px` und lässt `216px` für drei Zeilen mit Grid-Elementen übrig. Damit ist jede Zeile `72px` hoch.

```css
#grid {
  display: grid;
  height: 240px;
  width: 350px;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: 150px 1fr;

  row-gap: 5%;
}
```

```css hidden
body {
  padding: 1em;
}

#grid > div {
  outline: 1px solid green;
  background-color: lime;
}
@layer no-support {
  @supports not (row-gap: 5%) {
    body::before {
      content: "Your browser doesn't support percent values";
      background-color: wheat;
      display: block;
      text-align: center;
      padding: 1rem 0;
    }
  }
}
```

#### Ergebnis

{{EmbedLiveSample('Grid_layout', 'auto', 280)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("column-gap")}}
- {{CSSxRef("row-rule")}}
- {{CSSxRef("rule")}}
- {{CSSxRef("gap")}}
- [Überblick über CSS-Abstände und Eigenschaften zur Dekoration von Abständen](/de/docs/Web/CSS/Guides/Gaps/Overview)
- [CSS-Abstände definieren](/de/docs/Web/CSS/Guides/Gaps/Defining_gaps)
- [CSS-Trennlinien definieren](/de/docs/Web/CSS/Guides/Gaps/Defining_rules)
- [Grundkonzepte des Grid-Layouts: Abstände](/de/docs/Web/CSS/Guides/Grid_layout/Basic_concepts#gutters)
- Modul [CSS-Abstände](/de/docs/Web/CSS/Guides/Gaps)
