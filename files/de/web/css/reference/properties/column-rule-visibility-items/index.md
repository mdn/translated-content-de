---
title: "`column-rule-visibility-items` CSS property"
short-title: column-rule-visibility-items
slug: Web/CSS/Reference/Properties/column-rule-visibility-items
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

{{SeeCompatTable}}

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`column-rule-visibility-items`** legt fest, ob ein Segment einer Spaltentrennlinie in Lücken neben leeren Bereichen gezeichnet wird.

{{InteractiveExample("CSS Demo: column-rule-visibility-items")}}

```css interactive-example-choice
column-rule-visibility-items: all;
```

```css interactive-example-choice
column-rule-visibility-items: around;
```

```css interactive-example-choice
column-rule-visibility-items: between;
```

```css interactive-example-choice
column-rule-visibility-items: normal;
```

```html interactive-example
<section id="default-example">
  <section id="example-element">
    <p>One fish</p>
    <p>Two fish</p>
    <p>Red fish</p>
    <p>Blue fish</p>
    <cite>-- Dr. Seuss</cite>
  </section>
</section>
```

```css interactive-example
#example-element {
  display: grid;
  column-rule: solid 5px red;
  gap: 10px;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
}
cite {
  grid-row: 3;
  grid-column: 3;
}
```

## Syntax

```css
/* Keyword values */
column-rule-visibility-items: all;
column-rule-visibility-items: around;
column-rule-visibility-items: between;
column-rule-visibility-items: normal;

/* Global values */
column-rule-visibility-items: inherit;
column-rule-visibility-items: initial;
column-rule-visibility-items: revert;
column-rule-visibility-items: revert-layer;
column-rule-visibility-items: unset;
```

### Werte

Für diese Eigenschaft wird einer der folgenden Schlüsselwortwerte angegeben:

- `all`
  - : Die Spaltentrennlinie wird in allen Lückensegmenten gezeichnet, unabhängig davon, ob sich in den angrenzenden Bereichen ein Element befindet.

- `around`
  - : Die Spaltentrennlinie wird in einem Lückensegment gezeichnet, wenn mindestens einer der beiden angrenzenden Bereiche ein Element enthält.

- `between`
  - : Die Spaltentrennlinie wird in einem Lückensegment gezeichnet, wenn beide angrenzenden Bereiche Elemente enthalten.

- `normal`
  - : Verhält sich bei Grid-Containern wie `all` und bei mehrspaltigen Layouts wie `between`. Dies ist der Standardwert.

## Beschreibung

Die Eigenschaft `column-rule-visibility-items` legt fest, ob ein Segment einer Spaltentrennlinie in Spaltenlücken neben leeren Bereichen in [mehrzeiligen mehrspaltigen Layouts](/de/docs/Web/CSS/Guides/Multicol_layout) und [Grid-Containern](/de/docs/Web/CSS/Guides/Grid_layout) mit mehr als einer Spalte gezeichnet wird.

Die Eigenschaften `column-rule-visibility-items` und {{cssxref("row-rule-visibility-items")}} können beide über die Kurzschreibweise {{cssxref("rule-visibility-items")}} festgelegt werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Beispiel

In diesem Beispiel legen wir fest, dass zwischen zwei Grid-Bereichen eine Spaltentrennlinie gezeichnet wird, wenn mindestens einer der angrenzenden Grid-Bereiche ein Grid-Element enthält.

#### HTML

Wir fügen eine Liste dynamischer Sportduos ein:

```html
<ol>
  <li>Simone Biles + Jonathan Owens</li>
  <li>Serena Williams + Venus Williams</li>
  <li>Aaron Judge + Giancarlo Stanton</li>
  <li>LeBron James + Dwyane Wade</li>
  <li>Xavi Hernandez + Andres Iniesta</li>
  <li>Kerri Walsh + Misty May Treanor</li>
</ol>
```

#### CSS

Wir definieren die geordnete Liste ({{htmlelement("ol")}}) als Grid-Container und erzeugen vier Spalten und vier Zeilen, indem wir sowohl die Eigenschaft {{cssxref("grid-template-columns")}} als auch {{cssxref("grid-template-rows")}} auf `repeat(4, 1fr)` setzen. Mit den Eigenschaften {{cssxref("grid-column")}} und {{cssxref("grid-row")}} verschieben wir das letzte Element in den Grid-Bereich rechts unten. Ein {{cssxref("gap")}} von `20px` schafft zwischen den Spalten ausreichend Platz für die gestrichelte Trennlinie mit einer Breite von `5px`.

Schließlich setzen wir `column-rule-visibility-items` auf `between`, sodass eine Spaltentrennlinie nur dann in einer Spaltenlücke gezeichnet wird, wenn beide angrenzenden Grid-Bereiche ein Grid-Element enthalten.

```css
ol {
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;

  column-rule: dashed 5px blue;
  column-rule-visibility-items: between;
}
li:last-child {
  grid-row: 4;
  grid-column: 4;
}
```

```css hidden
li {
  margin-left: 1em;
}
@layer no-support {
  @supports not (column-rule-visibility-items: around) {
    body::before {
      content: "Your browser doesn't support the column-rule-visibility-items property";
      background-color: wheat;
      display: block;
      text-align: center;
      padding: 1rem 0;
    }
  }
}
```

#### Ergebnis

{{EmbedLiveSample("basic_example", "", "230")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Kurzschreibweise {{cssxref("rule-visibility-items")}}
- {{cssxref("row-rule-visibility-items")}}
- Kurzschreibweise {{cssxref("column-rule")}}
- Kurzschreibweise {{cssxref("rule")}}
- Modul [CSS-Lücken](/de/docs/Web/CSS/Guides/Gaps)
