---
title: "`flex-line-count` CSS property"
short-title: flex-line-count
slug: Web/CSS/Reference/Properties/flex-line-count
l10n:
  sourceCommit: e5cd1cab36e2fdcf5dfe28e10b0a7cb235354e62
---

{{SeeCompatTable}}

Die **`flex-line-count`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Mindestanzahl von Flex-Zeilen fest, über die Flex-Elemente im Falle eines Flex-Containers mit der {{cssxref("flex-wrap")}} oder {{cssxref("flex-flow")}} Eigenschaft, die das Schlüsselwort `balance` enthält, verteilt werden sollen.

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

Diese Eigenschaft wird als folgender Wert angegeben:

- {{cssxref("integer")}}
  - : Eine positive Ganzzahl, die die Mindestanzahl von Flex-Zeilen festlegt, über die ausgewogene, umgebrochene Flex-Elemente verteilt werden. Der Standardwert ist `1`.

## Beschreibung

Die Eigenschaft `flex-line-count` legt die Mindestanzahl von Flex-Zeilen fest, über die Flex-Elemente in umgebrochenen, ausgewogenen Flex-Containern verteilt werden sollen – mit anderen Worten, Flex-Containern, die eine {{cssxref("flex-wrap")}} oder {{cssxref("flex-flow")}} Eigenschaft mit dem Schlüsselwort `balance` enthalten, zusätzlich zu den Schlüsselwörtern `wrap` oder `wrap-reverse`.

Ein wichtiger Anwendungsfall für `flex-line-count` ist das Erstellen eines ausgewogenen Satzes von zwei (oder mehr) Spalten, unabhängig von der Anzahl der Elemente in einer Liste. In solchen Fällen funktioniert das Festlegen einer expliziten {{cssxref("height")}} oder {{cssxref("max-height")}} nicht, da Sie nicht wissen, wie viel Inhalt vorhanden sein wird, und möglicherweise weniger oder mehr Spalten als gewünscht haben. Siehe [Erstellung von ausgewogenen Spalten](#erstellung_ausgewogener_spalten) für ein Beispiel zur Implementierung.

Wenn `balance` nicht gesetzt ist oder Flex-Elemente nicht so eingestellt sind, dass sie auf mehrere Flex-Zeilen umgebrochen werden, hat die Eigenschaft `flex-line-count` keine Wirkung.

Wenn der Wert von `flex-line-count` gleich der Anzahl der Flex-Elemente oder größer ist, wird es ein Flex-Element pro Flex-Zeile geben.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Effekt verschiedener `flex-line-count` Werte

Dieses Beispiel zeigt die Auswirkungen verschiedener Werte von `flex-line-count` auf vier Kästchen.

#### HTML

Wir fügen vier Container-{{htmlelement("div")}}s ein, jedes mit einer `class` von `box` und zehn untergeordneten `<div>`s; jeder Container-`<div>` hat einen unterschiedlichen `id`-Wert.

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

```css hidden live-sample___flex-line-count
* {
  box-sizing: border-box;
}

.box {
  width: 100%;
  border: 2px dotted gray;
  margin-bottom: 20px;
  gap: 10px;
}

.box > * {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: lightgray;
}
```

Wir wenden `display: flex` auf alle Boxen an, um sie zu Flex-Containern zu machen, und geben ihnen dann einen `flex-wrap` Wert von `wrap balance`, damit alle ihre Flex-Kinder auf mehrere, ausgewogene Zeilen umgebrochen werden.

```css live-sample___flex-line-count
.box {
  display: flex;
  flex-wrap: wrap balance;
}
```

Wir setzen auch einen {{cssxref("flex")}} Wert von `1 1 150px` auf die Flex-Kinder, damit sie eine Basisbreite von `150px` haben und jeden überschüssigen Raum gleichmäßig über die Elemente in jeder Flex-Zeile verteilen.

```css live-sample___flex-line-count
.box > * {
  flex: 1 1 150px;
}
```

Für den `#box-no-balance` Flex-Container entfernen wir das Balancieren, wobei wir die Zeilenanzahl aufheben, indem wir den ursprünglichen `flex-wrap: wrap balance` Wert mit `wrap` überschreiben. Wir wenden unterschiedliche `flex-line-count` Werte auf jeden Flex-Container an und inkrementieren sie, sodass ihre Kinder über eine zunehmend größere Anzahl von Flex-Zeilen verteilt werden.

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

Wir haben den Rest des CSS der Übersichtlichkeit halber verborgen.

#### Ergebnisse

{{ EmbedLiveSample("flex-line-count", "100%", "700") }}

Beachten Sie Folgendes:

- Da der erste Flex-Container das Schlüsselwort `balance` nicht in seinem `flex-wrap` Wert gesetzt hat, erhalten seine Kinder keine ausgeglichene Verteilung und sein `flex-line-count` Wert wird ignoriert.
- Die `flex-line-count: 3` Deklaration des zweiten Flex-Containers beeinflusst das Layout der Flex-Kinder nicht; da die Flex-Elemente standardmäßig über vier Flex-Zeilen verteilt werden, hat jeder Wert von `4` oder weniger keine Auswirkung.

### Erstellung ausgewogener Spalten

Dieses Beispiel veranschaulicht, wie `flex-line-count` verwendet werden kann, um einen ausgewogenen Satz von zwei Spalten zu erstellen.

#### HTML

Wir fügen ein {{htmlelement("ol")}} Element ein, das zehn {{htmlelement("li")}} Elemente enthält.

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

Wir setzen die {{cssxref("display")}} des Listelements auf `flex`. Wir setzen einen {{cssxref("flex-direction")}} Wert von `column` und einen {{cssxref("flex-wrap")}} Wert von `balance` mit der {{cssxref("flex-flow")}} Kurzschreibweise, damit die Flex-Zeilen in Spalten angeordnet sind und beim Umbruch ausbalanciert werden. Der {{cssxref("gap")}} Wert `10px 40px` gibt einen Abstand von `10px` zwischen Flex-Elementen innerhalb jeder Spalte und `40px` zwischen Flex-Zeilen an.

Schließlich setzen wir einen `flex-line-count` Wert von `2`, was bedeutet, dass, obwohl keine feste Höhe für die Liste festgelegt ist, ihr Inhalt immer über zwei ausgewogene Spalten umgebrochen wird, unabhängig davon, wie viel Inhalt enthalten ist.

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

Wir haben den Rest des CSS der Übersichtlichkeit halber verborgen.

#### Ergebnisse

{{ EmbedLiveSample("balanced-columns", "100%", "350") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSXRef("flex-wrap")}}
- {{CSSXRef("flex-flow")}} Kurzform
- [Grundkonzepte des Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [Beherrschen des Umbruchs von Flex-Elementen > Ausgewogener Umbruch](/de/docs/Web/CSS/Guides/Flexible_box_layout/Wrapping_items#balanced_wrapping)
- [CSS Flexibles Box Layout](/de/docs/Web/CSS/Guides/Flexible_box_layout) Modul
