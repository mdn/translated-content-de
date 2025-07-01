---
title: flex-grow
slug: Web/CSS/flex-grow
l10n:
  sourceCommit: fbee1ad6d6add1319ce3e8e977033385a915c635
---

{{CSSRef}}

Die **`flex-grow`** [CSS](/de/docs/Web/CSS)-Eigenschaft setzt den Flex-Wachstumsfaktor fest, der angibt, wie viel des [**positiven freien Raums**](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis) des Flex-Containers, falls vorhanden, der [Hauptgröße](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox#the_flex_model) des Flex-Items zugewiesen werden soll.

Wenn die Hauptgröße des Flex-Containers größer ist als die kombinierten Hauptgrößen seiner Flex-Items, kann dieser positive freie Raum unter den Flex-Items verteilt werden, wobei das Wachstum jedes Items durch ihren Wachstumsfaktor-Wert als Verhältnis zur Gesamtsumme aller Flex-Wachstumsfaktoren der Items bestimmt wird.

> [!NOTE]
> Es wird empfohlen, die {{cssxref("flex")}} Kurzschreibweise mit einem Schlüsselwortwert wie `auto` oder `initial` zu verwenden, anstatt `flex-basis` allein festzulegen. Die [Schlüsselwortwerte](/de/docs/Web/CSS/flex#values) erweitern sich zu zuverlässigen Kombinationen von `flex-grow`, {{cssxref("flex-shrink")}}, und {{cssxref("flex-basis")}}, welche helfen, die häufig gewünschten Flex-Verhaltensweisen zu erzielen.

{{InteractiveExample("CSS Demo: flex-grow")}}

```css interactive-example-choice
flex-grow: 1;
```

```css interactive-example-choice
flex-grow: 2;
```

```css interactive-example-choice
flex-grow: 3;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">I grow</div>
  <div>Item Two</div>
  <div>Item Three</div>
</section>
```

```css interactive-example
.default-example {
  border: 1px solid #c5c5c5;
  width: auto;
  max-height: 300px;
  display: flex;
}

.default-example > div {
  background-color: rgb(0 0 255 / 0.2);
  border: 3px solid blue;
  margin: 10px;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0;
}
```

## Syntax

```css
/* <number> values */
flex-grow: 3;
flex-grow: 0.6;

/* Global values */
flex-grow: inherit;
flex-grow: initial;
flex-grow: revert;
flex-grow: revert-layer;
flex-grow: unset;
```

Die `flex-grow` Eigenschaft wird als einzelne `<number>` angegeben.

### Werte

- `<number>`
  - : Siehe {{cssxref("&lt;number&gt;")}}. Negative Werte sind ungültig. Standardwert ist 0, was verhindert, dass das Flex-Item wächst.

## Beschreibung

Diese Eigenschaft gibt an, wie viel des verbleibenden Raums im Flex-Container dem Element zugewiesen werden soll (den Flex-Wachstumsfaktor).

Die [Hauptgröße](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox#the_flex_model) ist entweder die Breite oder Höhe des Elements, abhängig vom {{cssxref("flex-direction")}} Wert.

Der verbleibende Raum, oder positive freie Raum, ist die Größe des Flex-Containers minus der Gesamtgröße aller Flex-Items zusammen. Wenn alle benachbarten Items den gleichen Flex-Wachstumsfaktor haben, erhalten alle Items den gleichen Anteil des verbleibenden Raums. Üblich ist es, `flex-grow: 1` einzustellen, aber das Setzen des Flex-Wachstumsfaktors für alle Flex-Items auf `88`, `100`, `1.2` oder irgendeinen anderen Wert größer als `0` führt zum gleichen Ergebnis: Der Wert ist ein Verhältnis.

Wenn sich die `flex-grow` Werte unterscheiden, wird der positive freie Raum entsprechend dem durch die unterschiedlichen Flex-Wachstumsfaktoren definierten Verhältnis verteilt. Die `flex-grow` Faktor-Werte aller benachbarten Flex-Items werden zusammengezählt. Der positive freie Raum des Flex-Containers, falls vorhanden, wird dann durch diese Gesamtsumme geteilt. Die Hauptgröße jedes Flex-Items mit einem `flex-grow` Wert größer als `0` wird um diesen Quotienten multipliziert mit ihrem eigenen Wachstumsfaktor wachsen.

Zum Beispiel, wenn vier `100px` große Flex-Items in einem `700px` Container sind und die Flex-Items `flex-grow` Faktoren von `0`, `1`, `2`, und `3` haben, ist die gesamte Hauptgröße der vier Items `400px`, was bedeutet, es gibt `300px` an positivem freien Raum zu verteilen. Die Summe der vier Wachstumsfaktoren (`0 + 1 + 2 + 3 = 6`) macht sechs aus. Daher ist jeder Wachstumsfaktor gleich `50px` (`(300px / 6 )`). Jedes Flex-Item erhält 50px freien Raum multipliziert mit seinem `flex-grow` Faktor — also `0`, `50px`, `100px`, und `150px` entsprechend. Die gesamten Flex-Item-Größen werden dadurch `100px`, `150px`, `200px`, und `250px`, entsprechend.

`flex-grow` wird allgemein zusammen mit den anderen {{cssxref("flex")}} Kurzschreibweise-Eigenschaften, {{cssxref("flex-shrink")}} und {{cssxref("flex-basis")}}, verwendet. Die Verwendung der `flex` Kurzschreibweise wird empfohlen, um sicherzustellen, dass alle Werte gesetzt sind.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Wachstumsfaktor für Flex-Items einstellen

In diesem Beispiel ist die Summe der sechs flex-grow Faktoren gleich acht, was bedeutet, dass jeder Wachstumsfaktor-Wert `12,5%` des verbleibenden Raums ist.

#### HTML

```html
<h1>This is a <code>flex-grow</code> example</h1>
<p>
  A, B, C, and F have <code>flex-grow: 1</code> set. D and E have
  <code>flex-grow: 2</code> set.
</p>
<div id="content">
  <div class="small" style="background-color:red;">A</div>
  <div class="small" style="background-color:lightblue;">B</div>
  <div class="small" style="background-color:yellow;">C</div>
  <div class="double" style="background-color:brown;">D</div>
  <div class="double" style="background-color:lightgreen;">E</div>
  <div class="small" style="background-color:brown;">F</div>
</div>
```

#### CSS

```css
#content {
  display: flex;
}

div > div {
  border: 3px solid rgb(0 0 0 / 20%);
}

.small {
  flex-grow: 1;
}

.double {
  flex-grow: 2;
  border: 3px solid rgb(0 0 0 / 20%);
}
```

#### Ergebnis

{{EmbedLiveSample('Setting flex item grow factor')}}

Wenn die sechs Flex-Items entlang der Hauptachse des Containers verteilt sind und die Summe des Hauptinhalts dieser Flex-Items kleiner ist als die Größe der Hauptachse des Containers, wird der zusätzliche Raum unter den Größenflex-Items verteilt, wobei `A`, `B`, `C`, und `F`, jeweils `12,5%` des verbleibenden Raums erhalten und `D` und `E` jeweils `25%` des zusätzlichen Raums.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("flex")}} Kurzschreibweise
- [Grundkonzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Verhältnisse der Flex-Items entlang der Hauptachse steuern](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis)
- [CSS flexibles Box-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
- [`flex-grow` ist seltsam. Oder ist es das?](https://css-tricks.com/flex-grow-is-weird/) über CSS-Tricks (2017)
