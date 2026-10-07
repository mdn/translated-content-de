---
title: "`flex-line-count` CSS property"
short-title: flex-line-count
slug: Web/CSS/Reference/Properties/flex-line-count
l10n:
  sourceCommit: d78544a841b0e266a6efc169c044573f5e0b4e7d
---

{{SeeCompatTable}}

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`flex-line-count`** legt die Mindestanzahl an Flex-Zeilen fest, auf die Flex-Elemente gleichmäßig verteilt werden, wenn die Eigenschaft {{cssxref("flex-wrap")}} oder {{cssxref("flex-flow")}} eines Flex-Containers das Schlüsselwort `balance` enthält.

{{InteractiveExample("CSS Demo: flex-line-count")}}

```css interactive-example-choice
flex-line-count: 1;
```

```css interactive-example-choice
flex-line-count: 3;
```

```css interactive-example-choice
flex-line-count: 4;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    <div>Item One</div>
    <div>Item Two</div>
    <div>Item Three</div>
    <div>Item Four</div>
    <div>Item Five</div>
    <div>Item Six</div>
  </div>
</section>
```

```css interactive-example
#example-element {
  border: 1px solid #c5c5c5;
  width: 80%;
  display: flex;
  flex-wrap: wrap balance;
}

#example-element > div {
  background-color: rgb(0 0 255 / 0.2);
  border: 3px solid blue;
  width: 60px;
  margin: 10px;
}
```

## Syntax

```css
/* Integer values */
flex-line-count: 1;
flex-line-count: 3;
flex-line-count: 12;

/* Global values */
flex-line-count: inherit;
flex-line-count: initial;
flex-line-count: revert;
flex-line-count: revert-layer;
flex-line-count: unset;
```

### Werte

Für diese Eigenschaft wird der folgende Wert angegeben:

- {{cssxref("integer")}}
  - : Eine positive Ganzzahl, die die Mindestanzahl an Flex-Zeilen festlegt, auf die umgebrochene Flex-Elemente gleichmäßig verteilt werden. Der Standardwert ist `1`.

## Beschreibung

Die Eigenschaft `flex-line-count` legt die Mindestanzahl an Flex-Zeilen fest, auf die Flex-Elemente in umgebrochenen, gleichmäßig verteilten Flex-Containern verteilt werden. Das sind Flex-Container, deren Eigenschaft {{cssxref("flex-wrap")}} oder {{cssxref("flex-flow")}} neben dem Schlüsselwort `wrap` oder `wrap-reverse` auch das Schlüsselwort `balance` enthält.

Ein wichtiger Anwendungsfall für `flex-line-count` ist das Erstellen von zwei (oder mehr) gleichmäßig gefüllten Spalten, unabhängig von der Anzahl der Elemente in einer Liste. Eine feste {{cssxref("height")}} oder {{cssxref("max-height")}} eignet sich dafür nicht: Da die Menge des Inhalts unbekannt ist, können am Ende mehr oder weniger Spalten als gewünscht entstehen. Ein Implementierungsbeispiel finden Sie unter [Gleichmäßig gefüllte Spalten erstellen](#gleichmäßig_gefüllte_spalten_erstellen).

Wenn `balance` nicht festgelegt ist oder die Flex-Elemente nicht auf mehrere Flex-Zeilen umgebrochen werden, hat die Eigenschaft `flex-line-count` keine Wirkung.

Wenn der Wert von `flex-line-count` mindestens der Anzahl der Flex-Elemente entspricht, steht in jeder Flex-Zeile ein Flex-Element.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Auswirkungen verschiedener `flex-line-count`-Werte

Dieses Beispiel zeigt, wie sich verschiedene Werte von `flex-line-count` auf vier Boxen auswirken.

#### HTML

Wir verwenden vier {{htmlelement("div")}}-Container, jeweils mit einer `class` von `box` und zehn untergeordneten `<div>`-Elementen. Jeder Container hat einen anderen `id`-Wert.

```html
<div class="box" id="box-no-balance">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
  <div>Six</div>
  <div>Seven</div>
  <div>Eight</div>
  <div>Nine</div>
  <div>Ten</div>
</div>

<div class="box" id="box1">...</div>
<div class="box" id="box2">...</div>
<div class="box" id="box3">...</div>
```

```html hidden live-sample___flex-line-count
<p>No <code>balance</code></p>

<div class="box" id="box-no-balance">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
  <div>Six</div>
  <div>Seven</div>
  <div>Eight</div>
  <div>Nine</div>
  <div>Ten</div>
</div>

<p><code>flex-line-count: 3</code></p>

<div class="box" id="box1">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
  <div>Six</div>
  <div>Seven</div>
  <div>Eight</div>
  <div>Nine</div>
  <div>Ten</div>
</div>

<p><code>flex-line-count: 4</code></p>

<div class="box" id="box2">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
  <div>Six</div>
  <div>Seven</div>
  <div>Eight</div>
  <div>Nine</div>
  <div>Ten</div>
</div>

<p><code>flex-line-count: 5</code></p>

<div class="box" id="box3">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
  <div>Six</div>
  <div>Seven</div>
  <div>Eight</div>
  <div>Nine</div>
  <div>Ten</div>
</div>
```

#### CSS

Wir wenden `display: flex` auf alle Boxen an, um sie zu Flex-Containern zu machen. Anschließend geben wir ihnen den `flex-wrap`-Wert `wrap balance`, damit ihre untergeordneten Flex-Elemente auf mehrere, gleichmäßig gefüllte Zeilen umgebrochen werden.

```css live-sample___flex-line-count
.box {
  display: flex;
  flex-wrap: wrap balance;
}
```

Für die untergeordneten Flex-Elemente legen wir außerdem einen {{cssxref("flex")}}-Wert von `1 1 150px` fest. Dadurch haben sie eine Basisbreite von `150px`, und überschüssiger Platz wird gleichmäßig auf die Elemente der jeweiligen Flex-Zeile verteilt.

```css live-sample___flex-line-count
.box > * {
  flex: 1 1 150px;
}
```

Beim Flex-Container `#box-no-balance` heben wir die gleichmäßige Verteilung und damit auch die Wirkung der festgelegten Zeilenanzahl auf, indem wir den ursprünglichen Wert `flex-wrap: wrap balance` mit `wrap` überschreiben. Den übrigen Flex-Containern weisen wir schrittweise höhere `flex-line-count`-Werte zu, sodass ihre untergeordneten Elemente auf eine zunehmend größere Anzahl von Flex-Zeilen verteilt werden.

```css live-sample___flex-line-count
#box-no-balance {
  flex-line-count: 6;
  flex-wrap: wrap;
}

#box1 {
  flex-line-count: 3;
}

#box2 {
  flex-line-count: 4;
}

#box3 {
  flex-line-count: 5;
}
```

Der übrige CSS-Code ist der Kürze halber ausgeblendet.

#### Ergebnisse

{{ EmbedLiveSample("flex-line-count", "100%", "700") }}

Beachten Sie Folgendes:

- Da der `flex-wrap`-Wert des ersten Flex-Containers das Schlüsselwort `balance` nicht enthält, werden seine untergeordneten Elemente nicht gleichmäßig verteilt und sein `flex-line-count`-Wert wird ignoriert.
- Die Deklaration `flex-line-count: 3` des zweiten Flex-Containers wirkt sich nicht auf das Layout seiner untergeordneten Flex-Elemente aus. Da die Flex-Elemente standardmäßig auf vier Flex-Zeilen verteilt werden, hat ein Wert von `4` oder weniger keine Wirkung.

### Gleichmäßig gefüllte Spalten erstellen

Dieses Beispiel zeigt, wie Sie mit `flex-line-count` zwei gleichmäßig gefüllte Spalten erstellen können.

#### HTML

Wir verwenden ein {{htmlelement("ol")}}-Element mit zehn {{htmlelement("li")}}-Elementen.

```html
<ol>
  <li>
    <a href="#">The Silent Cartographer</a>, published by Meridian House,
    released March 12, 2014.
  </li>
  <li>
    <a href="#">Echoes of the Fallow Field</a>, published by Northbridge Press,
    released July 4, 2009.
  </li>

  ...
</ol>
```

```html hidden live-sample___balanced-columns
<ol>
  <li>
    <a href="#">The Silent Cartographer</a>, published by Meridian House,
    released March 12, 2014.
  </li>
  <li>
    <a href="#">Echoes of the Fallow Field</a>, published by Northbridge Press,
    released July 4, 2009.
  </li>
  <li>
    <a href="#">A Ledger of Small Regrets</a>, published by Ashwood & Kline,
    released November 21, 2017.
  </li>
  <li>
    <a href="#">The Clockmaker's Daughter's Shadow</a>, published by Hollow Pine
    Publishing, released February 8, 2011.
  </li>
  <li>
    <a href="#">Salt and Signal</a>, published by Redcliffe Editions, released
    September 30, 2019.
  </li>
  <li>
    <a href="#">Under a Borrowed Sky</a>, published by Fenwick & Marsh, released
    May 16, 2006.
  </li>
  <li>
    <a href="#">The Last Cartel of Winter</a>, published by Graywolf Bindery,
    released January 2, 2021.
  </li>
  <li>
    <a href="#">Notes from an Unfinished Atlas</a>, published by Coastline
    Books, released June 27, 2013.
  </li>
  <li>
    <a href="#">The Weight of Empty Rooms</a>, published by Draymoor House,
    released October 15, 2008.
  </li>
  <li>
    <a href="#">A Brief History of Almost Everyone</a>, published by Ferngate
    Press, released April 9, 2022.
  </li>
</ol>
```

#### CSS

Wir setzen {{cssxref("display")}} für die Liste auf `flex`. Mithilfe der Kurzschreibweise {{cssxref("flex-flow")}} legen wir für {{cssxref("flex-direction")}} den Wert `column` und für {{cssxref("flex-wrap")}} den Wert `balance` fest, sodass die Flex-Zeilen als Spalten angeordnet und beim Umbrechen gleichmäßig gefüllt werden. Der {{cssxref("gap")}}-Wert `10px 40px` legt einen Abstand von `10px` zwischen den Flex-Elementen innerhalb jeder Spalte und von `40px` zwischen den Flex-Zeilen fest.

Abschließend setzen wir `flex-line-count` auf `2`. So wird der Inhalt immer auf zwei gleichmäßig gefüllte Spalten umgebrochen, obwohl für die Liste keine feste Höhe festgelegt ist – unabhängig davon, wie viel Inhalt sie enthält.

```css live-sample___balanced-columns
ol {
  display: flex;
  gap: 10px 40px;
  flex-flow: column balance;
  flex-line-count: 2;
}
```

```css hidden live-sample___flex-line-count live-sample___balanced-columns
* {
  box-sizing: border-box;
}

body {
  padding: 10px 30px;
}

@supports not (flex-line-count: 3) {
  body::before {
    content: "Your browser does not support the flex-line-count property.";
    background-color: wheat;
    text-align: center;
    padding: 1rem 0;

    z-index: 1;
    position: fixed;
    inset: 40% 0 auto;
  }
}
```

Der übrige CSS-Code ist der Kürze halber ausgeblendet.

#### Ergebnisse

{{ EmbedLiveSample("balanced-columns", "100%", "350") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSXRef("flex-wrap")}}
- {{CSSXRef("flex-flow")}}-Kurzschreibweise
- [Grundkonzepte von Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [Umbrechen von Flex-Elementen beherrschen > Gleichmäßiger Umbruch](/de/docs/Web/CSS/Guides/Flexible_box_layout/Wrapping_items#balanced_wrapping)
- Modul [CSS Flexible Box Layout](/de/docs/Web/CSS/Guides/Flexible_box_layout)
