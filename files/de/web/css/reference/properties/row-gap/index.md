---
title: "`row-gap` CSS property"
short-title: row-gap
slug: Web/CSS/Reference/Properties/row-gap
l10n:
  sourceCommit: 04dfe418f2942ae739d41592c22fafa3679fc03c
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`row-gap`** legt die Größe des Abstands ({{Glossary("gutters", "Gutter")}}) zwischen den Zeilen eines Elements in mehrspaltigen Layouts, Flexbox-Layouts und Grid-Layouts fest.

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

Diese Eigenschaft wird durch einen einzelnen Wert aus der folgenden Liste angegeben:

- `normal`
  - : Wird in mehrspaltigen Layouts zu `1em` aufgelöst, andernfalls zu `0`. Dies ist der Standardwert.
- {{cssxref("&lt;line-width&gt;")}}
  - : Legt die Größe des Abstands mit den Schlüsselwörtern `thin`, `medium` oder `thick` oder mit einem positiven {{cssxref("length")}}-Wert fest.
- {{CSSxRef("length-percentage")}}
  - : Legt einen nicht negativen {{CSSxRef("&lt;length&gt;")}}- oder {{CSSxRef("&lt;percentage&gt;")}}-Wert fest. Prozentwerte beziehen sich auf die Blockgröße der Content-Box oder auf `0`.

## Beschreibung

Die Eigenschaft `row-gap` legt die Größe des Abstands zwischen den Zeilen eines Elements fest. Dieser Abstand kann als dekoratives Element eine sichtbare Trennlinie enthalten. Befindet sich zwischen den Zeilen eine Linie, erscheint sie in der Mitte des Abstands, beeinflusst dessen Größe aber nicht. Solche dekorativen Linien können dem ansonsten „leeren Raum“ mit der Eigenschaft {{cssxref("row-rule")}} oder der Kurzschreibweise {{cssxref("rule")}} hinzugefügt werden.

Die unter [CSS-Abstände](/de/docs/Web/CSS/Guides/Gaps) definierte Eigenschaft kann in mehrspaltigen Layouts, Flexbox-Layouts und Grid-Layouts verwendet werden. `row-gap` und die Eigenschaft {{cssxref("column-gap")}} können in dieser Reihenfolge auch mit der Kurzschreibweise {{cssxref("gap")}} festgelegt werden. Die Eigenschaft `row-gap` hat die Eigenschaft `grid-row-gap` ersetzt, die auf [CSS-Grid-Layouts](/de/docs/Web/CSS/Guides/Grid_layout) beschränkt war. `grid-row-gap` ist nun ein Alias für `row-gap`.

Die Eigenschaft legt einen Abstand fester Länge zwischen Elementen in einem Container fest und trennt dabei Boxen entlang der Blockachse des Containers. Negative Werte sind ungültig. Der Standardwert `normal` wird bei mehrspaltigen Containern zu `1em` und überall sonst zu `0` aufgelöst. Weitere Informationen zu Abständen je nach Layouttyp finden Sie unter [CSS-Abstände definieren](/de/docs/Web/CSS/Guides/Gaps/Defining_gaps).

Prozentwerte werden relativ zur Größe der [Content-Box](/de/docs/Web/CSS/Guides/Box_model/Introduction#content_area) des Containerelements entlang seiner Blockachse aufgelöst, wenn diese Größe feststeht; andernfalls werden sie zu `0` aufgelöst. Eine Ausnahme gilt für Grid-Layouts: Dort werden zyklische Prozentgrößen bei der Ermittlung der Beiträge zur {{Glossary("intrinsic_size", "intrinsischen Größe")}} zu null aufgelöst, beim Layout der Inhalte jedoch relativ zur Content-Box des Elements. Weitere Informationen finden Sie unter [Abstandswerte als Prozentwerte angeben](/de/docs/Web/CSS/Guides/Gaps/Defining_gaps#specifying_gap_values_as_percentages).

In Grid-Layouts wirkt der Abstand so, als hätten die Grid-Linien zwischen den Zeilen eine Dicke entsprechend dem Eigenschaftswert: Der Grid-Track zwischen zwei Zeilen ist der Raum zwischen den Gutter-Bereichen, die diese Zeilen begrenzen. Bei der Größenberechnung der Tracks wird jeder Gutter-Bereich als zusätzlicher, leerer Track fester Größe behandelt. Jedes Grid-Element, das sich über mehr als eine Zeile erstreckt, überspannt auch diesen Track. Obwohl der Abstand bei der Größenberechnung als leer gilt, kann er eine {{cssxref("row-rule")}} enthalten.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Flexbox-Layout

Dieses Beispiel zeigt, wie mit der Eigenschaft `row-gap` horizontaler Abstand zwischen benachbarten Zeilen von Flex-Elementen erzeugt wird. Es zeigt außerdem, dass die Größe der Zeilenlinie die Größe von `row-gap` nicht beeinflusst.

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

Wir setzen {{cssxref("display")}} auf `flex` und {{cssxref("flex-flow")}} auf `row wrap`. Dadurch entsteht ein Flex-Container mit Zeilen von Flex-Elementen, die bei Bedarf in neue Zeilen umbrechen. Außerdem begrenzen wir {{cssxref("width")}} auf `300px`. Mit {{cssxref("row-rule")}} fügen wir eine 30px breite, gestrichelte magentafarbene Linie in der Mitte des Abstands hinzu.

Für den Flex-Container setzen wir `row-gap` auf `20px`, um zwischen benachbarten Flex-Zeilen einen Abstand von `20px` zu erzeugen.

Wir geben den Flex-Elementen außerdem eine Hintergrundfarbe und machen die meisten davon halbtransparent. So wird sichtbar, dass die Linie unter den Flex-Elementen zu sehen ist, wenn sie breiter als der Abstand ist.

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

Um einen vertikalen Abstand zwischen Flex-Elementen festzulegen, geben Sie für die Eigenschaft {{cssxref("column-gap")}} einen Wert ungleich null an. Optional können Sie `row-gap` und `column-gap` gemeinsam mit der Kurzschreibweise `gap` festlegen.

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

`row-gap` wird auf `5%` gesetzt. Die Höhe des Containers beträgt `240px`. Der Wert `5%` erzeugt einen `12px` hohen Zeilenabstand. Damit bleiben `216px` für drei Zeilen mit Grid-Elementen, sodass jede Zeile `72px` hoch ist.

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
- [CSS-Abstände definieren](/de/docs/Web/CSS/Guides/Gaps/Defining_gaps)
- [Grundkonzepte des Grid-Layouts: Gutter](/de/docs/Web/CSS/Guides/Grid_layout/Basic_concepts#gutters)
- Modul [CSS-Abstände](/de/docs/Web/CSS/Guides/Gaps)
