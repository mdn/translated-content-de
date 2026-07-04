---
title: "`row-rule-visibility-items` CSS property"
short-title: row-rule-visibility-items
slug: Web/CSS/Reference/Properties/row-rule-visibility-items
l10n:
  sourceCommit: 513146a616213fee548fdcf72dc1359030eb3395
---

{{SeeCompatTable}}

Die **`row-rule-visibility-items`** [CSS](/de/docs/Web/CSS)-Eigenschaft definiert, ob ein Zeilenregel-Segment in Lücken bemalt wird, die an leere Bereiche angrenzen.

{{InteractiveExample("CSS Demo: row-rule-visibility-items")}}

```css interactive-example-choice
row-rule-visibility-items: all;
```

```css interactive-example-choice
row-rule-visibility-items: around;
```

```css interactive-example-choice
row-rule-visibility-items: between;
```

```css interactive-example-choice
row-rule-visibility-items: normal;
```

```html interactive-example
<section id="default-example">
  <section id="example-element">
    <p>One fish</p>
    <p>Two fish</p>
    <p>Red fish</p>
    <p>Blue fish</p>
    <cite>-- Dr. Seuss<cite>
  </section>
</section>
```

```css interactive-example
#example-element {
  display: grid;
  row-rule: solid 5px red;
  gap: 10px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
}
cite {
  grid-column: 3;
  grid-row: 3;
}
```

## Syntax

```css
/* Keywords */
row-rule-visibility-items: all;
row-rule-visibility-items: around;
row-rule-visibility-items: between;
row-rule-visibility-items: normal;

/* Global values */
row-rule-visibility-items: inherit;
row-rule-visibility-items: initial;
row-rule-visibility-items: revert;
row-rule-visibility-items: revert-layer;
row-rule-visibility-items: unset;
```

### Werte

- `all`
  - : Die Zeilenregel sollte in allen Lückensegmenten gemalt werden, unabhängig davon, ob angrenzende Bereiche ein Element enthalten.

- `around`
  - : Die Zeilenregel sollte in einem Lückensegment gemalt werden, wenn mindestens einer der beiden angrenzenden Bereiche von einem Element belegt ist.

- `between`
  - : Die Zeilenregel sollte in einem Lückensegment gemalt werden, wenn beide angrenzenden Bereiche von Elementen belegt sind.

- `normal`
  - : Verhält sich wie `all`. Dies ist der Standardwert.

## Beschreibung

Die `row-rule-visibility-items`-Eigenschaft definiert, ob in [multi-column](/de/docs/Web/CSS/Guides/Multicol_layout)- und [grid](/de/docs/Web/CSS/Guides/Grid_layout)-Containern mit mehr als einer Zeile, Zeilenregel-Segmente in den Lücken zwischen zwei angrenzenden Bereichen bemalt werden, falls einer oder beide der Bereiche leer sind.

Die Eigenschaften `row-rule-visibility-items` und {{cssxref("row-rule-visibility-items")}} können beide mit den gleichen Werten mithilfe der {{cssxref("rule-visibility-items")}}-Kurzschrift gesetzt werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Beispiel

In diesem Beispiel definieren wir, dass die Zeilenregeln zwischen zwei Rasterbereichen gezeichnet werden, wenn mindestens ein angrenzender Rasterbereich Rasterelemente enthält.

#### HTML

Wir fügen eine Liste von dynamischen Sportduos ein:

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

Wir definieren die geordnete Liste ({{htmlelement("ol")}}) als Raster-Container, indem wir 4 Zeilen und 4 Spalten erstellen und sowohl die {{cssxref("grid-template-rows")}} als auch {{cssxref("grid-template-columns")}}-Eigenschaften auf `repeat(4, 1fr)` setzen. Außerdem verschieben wir das letzte Element in den unteren rechten Rasterbereich mithilfe von {{cssxref("grid-row")}} und {{cssxref("grid-column")}}. Wir fügen einen {{cssxref("gap")}} von `20px` hinzu, um ausreichend Platz zwischen den Zeilen zu schaffen und unsere `5px` gestrichelte Regel unterzubringen.

Schließlich setzen wir `row-rule-visibility-items` auf `around`, sodass ein Zeilenregel-Segment nur in einer Zeilenlücke bemalt wird, wenn einer oder beide angrenzenden Rasterbereiche ein Rasterelement enthalten.

```css
ol {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 10px;

  row-rule: dashed 5px blue;
  row-rule-visibility-items: around;
}
li:last-child {
  grid-column: 4;
  grid-row: 4;
}
```

```css hidden
li {
  margin-left: 1em;
}
@layer no-support {
  @supports not (row-rule-visibility-items: around) {
    body::before {
      content: "Your browser doesn't support the row-rule-visibility-items property";
      background-color: wheat;
      display: block;
      text-align: center;
      padding: 1rem 0;
    }
  }
}
```

#### Ergebnis

{{EmbedLiveSample("Basic", "", "230")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("rule-visibility-items")}} Kurzschrift
- {{cssxref("column-rule-visibility-items")}}
- {{cssxref("row-rule")}} Kurzschrift
- {{cssxref("rule")}} Kurzschrift
- [CSS gaps](/de/docs/Web/CSS/Guides/Gaps) Modul
