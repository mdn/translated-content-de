---
title: "`flex-line-count` CSS property"
short-title: flex-line-count
slug: Web/CSS/Reference/Properties/flex-line-count
l10n:
  sourceCommit: ae836b44d9faa0e9f581631ed1dcccd2a502b618
---

Die **`flex-line-count`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Mindestanzahl von Flexlinien fest, über die Flexelemente verteilt werden, wenn die `flex-wrap`- oder `flex-flow`-Eigenschaft eines Flexcontainers das `balance`-Schlüsselwort enthält.

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

Diese Eigenschaft wird durch den folgenden Wert spezifiziert:

- {{cssxref("integer")}}
  - : Eine positive Ganzzahl, die die Mindestanzahl der Flexlinien festlegt, über die ausgewogene, umgebrochene Flexelemente verteilt werden. Der Standardwert ist `1`.

## Beschreibung

Die `flex-line-count`-Eigenschaft legt die Mindestanzahl der Flexlinien fest, über die Flexelemente in umgebrochenen, ausgewogenen Flexcontainern verteilt werden. Das bedeutet, Flexcontainer, die eine `flex-wrap`- oder `flex-flow`-Eigenschaft mit dem Schlüsselwort `balance` zusätzlich zu `wrap` oder `wrap-reverse` enthalten.

Ein wichtiger Anwendungsfall für `flex-line-count` ist das Erstellen eines ausgewogenen Satzes von zwei (oder mehr) Spalten, unabhängig von der Anzahl der Elemente in einer Liste. In solchen Fällen funktioniert das Setzen einer expliziten `height` oder `max-height` nicht, da Sie nicht wissen, wie viel Inhalt Sie haben werden und möglicherweise weniger oder mehr Spalten als gewünscht erhalten. Siehe [Erstellen ausgewogener Spalten](#erstellen_ausgewogener_spalten) für eine Beispielimplementierung.

Wenn `balance` nicht gesetzt ist oder wenn Flexelemente nicht so eingestellt sind, dass sie auf mehrere Flexlinien umgebrochen werden, hat die `flex-line-count`-Eigenschaft keine Wirkung.

Wenn der `flex-line-count`-Wert gleich oder größer als die Anzahl der Flexelemente ist, wird es ein Flexelement pro Flexlinie geben.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Effekt unterschiedlicher `flex-line-count`-Werte

Dieses Beispiel demonstriert die Auswirkungen unterschiedlicher `flex-line-count`-Werte auf vier Boxen.

#### HTML

Wir fügen vier Container-{{htmlelement("div")}}s ein, jedes mit einer `class` von `box` und zehn Kind-`<div>`s; jedes Container-`<div>` hat einen unterschiedlichen `id`-Wert.

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

Wir wenden `display: flex` auf alle Boxen an, um sie zu Flexcontainern zu machen, und geben ihnen einen `flex-wrap`-Wert von `wrap balance`, damit alle ihre Flexkinder auf mehrere, ausgewogene Linien umbrochen werden.

```css live-sample___flex-line-count
.box {
  display: flex;
  flex-wrap: wrap balance;
}
```

Wir setzen auch einen `flex`-Wert von `1 1 150px` auf die Flexkinder, damit sie eine Basisbreite von `150px` haben und überschüssiger Platz gleichmäßig über die Elemente in jeder Flexlinie verteilt wird.

```css live-sample___flex-line-count
.box > * {
  flex: 1 1 150px;
}
```

Beim `#box-no-balance` Flexcontainer entfernen wir das Ausbalancieren, indem wir den ursprünglichen `flex-wrap: wrap balance`-Wert mit `wrap` überschreiben und damit die Zeilenzählung ungültig machen. Wir wenden unterschiedliche `flex-line-count`-Werte auf jeden Flexcontainer an, indem wir sie inkrementieren, sodass ihre Kinder über eine zunehmend größere Anzahl von Flexlinien verteilt werden.

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

Wir haben den Rest des CSS aus Gründen der Kürze ausgeblendet.

#### Ergebnisse

{{ EmbedLiveSample("flex-line-count", "100%", "700") }}

Beachten Sie folgende Punkte:

- Da der erste Flexcontainer das `balance`-Schlüsselwort in seinem `flex-wrap`-Wert nicht gesetzt hat, erhalten seine Kinder keine ausgeglichene Verteilung und sein `flex-line-count`-Wert wird ignoriert.
- Die `flex-line-count: 3`-Deklaration des zweiten Flexcontainers hat keinen Einfluss auf das Layout der Flexkinder; da die Flexelemente standardmäßig über vier Flexlinien verteilt sind, hat jeder Wert von `4` oder weniger keinen Effekt.

### Erstellen ausgewogener Spalten

Dieses Beispiel demonstriert, wie `flex-line-count` verwendet werden kann, um einen ausgewogenen Satz von zwei Spalten zu erstellen.

#### HTML

Wir fügen ein {{htmlelement("ol")}}-Element ein, das zehn {{htmlelement("li")}}-Elemente enthält.

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

Wir setzen das {{cssxref("display")}} der Liste auf `flex`. Wir setzen einen `flex-direction`-Wert von `column`und einen `flex-wrap`-Wert von `balance` unter Verwendung der `flex-flow`-Kurzschrift, sodass die Flexlinien in Spalten angeordnet sind und beim Umbruch ausgeglichen werden. Der `gap`-Wert `10px 40px` gibt einen Abstand von `10px` zwischen den Flexelementen innerhalb jeder Spalte und `40px` zwischen den Flexlinien an.

Schließlich setzen wir einen `flex-line-count`-Wert von `2`, was bedeutet, dass, obwohl keine feste Höhe auf die Liste gesetzt wird, deren Inhalt immer über zwei ausgeglichene Spalten verteilt wird, unabhängig davon, wie viel Inhalt enthalten ist.

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

Wir haben den Rest des CSS aus Gründen der Kürze ausgeblendet.

#### Ergebnisse

{{ EmbedLiveSample("balanced-columns", "100%", "350") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSXRef("flex-wrap")}}
- {{CSSXRef("flex-flow")}} Kurzschrift
- [Grundlegende Konzepte von Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [Beherrschen des Umbruchs von Flexelementen > Ausgeglichener Umbruch](/de/docs/Web/CSS/Guides/Flexible_box_layout/Wrapping_items#balanced_wrapping)
- [CSS Flexible Box Layout](/de/docs/Web/CSS/Guides/Flexible_box_layout) Modul
