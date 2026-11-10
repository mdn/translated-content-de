---
title: "`row-rule-visibility-items` CSS property"
short-title: row-rule-visibility-items
slug: Web/CSS/Reference/Properties/row-rule-visibility-items
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

{{SeeCompatTable}}

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`row-rule-visibility-items`** legt fest, ob ein Zeilenliniensegment in Zwischenräumen neben leeren Bereichen gezeichnet wird.

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
    <cite>-- Dr. Seuss</cite>
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
/* Keyword values */
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

Für diese Eigenschaft wird einer der folgenden Schlüsselwortwerte angegeben:

- `all`
  - : Die Zeilenlinie wird in allen Zwischenraumsegmenten gezeichnet, unabhängig davon, ob die angrenzenden Bereiche ein Element enthalten.

- `around`
  - : Die Zeilenlinie wird in einem Zwischenraumsegment gezeichnet, wenn mindestens einer der beiden angrenzenden Bereiche von einem Element belegt ist.

- `between`
  - : Die Zeilenlinie wird in einem Zwischenraumsegment gezeichnet, wenn beide angrenzenden Bereiche von Elementen belegt sind.

- `normal`
  - : Verhält sich wie `all`. Dies ist der Standardwert.

## Beschreibung

Die Eigenschaft `row-rule-visibility-items` legt fest, ob in [mehrspaltigen](/de/docs/Web/CSS/Guides/Multicol_layout) und [Grid-](/de/docs/Web/CSS/Guides/Grid_layout)Containern mit mehr als einer Zeile Zeilenliniensegmente in den Zwischenräumen zwischen zwei angrenzenden Bereichen gezeichnet werden, wenn einer oder beide Bereiche leer sind.

Mit der Kurzschreibweise {{cssxref("rule-visibility-items")}} können die Eigenschaften `row-rule-visibility-items` und {{cssxref("column-rule-visibility-items")}} beide auf dieselben Werte gesetzt werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Beispiel

In diesem Beispiel legen wir fest, dass zwischen zwei Grid-Bereichen eine Zeilenlinie gezeichnet wird, wenn mindestens einer der angrenzenden Grid-Bereiche Grid-Elemente enthält.

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

Wir definieren die geordnete Liste ({{htmlelement("ol")}}) als Grid-Container und erstellen vier Zeilen und vier Spalten, indem wir sowohl {{cssxref("grid-template-rows")}} als auch {{cssxref("grid-template-columns")}} auf `repeat(4, 1fr)` setzen. Mit {{cssxref("grid-row")}} und {{cssxref("grid-column")}} verschieben wir das letzte Element in den Grid-Bereich unten rechts. Mit einem {{cssxref("gap")}} von `20px` schaffen wir zwischen den Zeilen genug Platz für unsere gestrichelte Linie mit einer Stärke von `5px`.

Schließlich setzen wir `row-rule-visibility-items` auf `around`, sodass ein Zeilenliniensegment nur dann in einem Zwischenraum zwischen Zeilen gezeichnet wird, wenn einer oder beide angrenzenden Grid-Bereiche ein Grid-Element enthalten.

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

{{EmbedLiveSample("basic_example", "", "230")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Kurzschreibweise {{cssxref("rule-visibility-items")}}
- {{cssxref("column-rule-visibility-items")}}
- Kurzschreibweise {{cssxref("row-rule")}}
- Kurzschreibweise {{cssxref("rule")}}
- Modul [CSS-Zwischenräume](/de/docs/Web/CSS/Guides/Gaps)
