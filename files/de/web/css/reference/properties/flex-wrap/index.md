---
title: "`flex-wrap` CSS property"
short-title: flex-wrap
slug: Web/CSS/Reference/Properties/flex-wrap
l10n:
  sourceCommit: 3fb9ea0187429234b47cb0385a9515a69757fe63
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`flex-wrap`** legt fest, ob Flex-Elemente in einer Zeile erzwungen werden oder in mehrere Zeilen umbrochen werden können. Wenn Umbruch erlaubt ist, legt sie die Richtung fest, in der die Zeilen gestapelt werden.

Die Kurzschreibweise der Eigenschaft {{cssxref("flex-flow")}} kann verwendet werden, um sowohl die Eigenschaften {{CSSXRef("flex-direction")}} als auch `flex-wrap` festzulegen, die jeweils die Haupt- und Querachsen des Flex-Containers definieren.

{{InteractiveExample("CSS Demo: flex-wrap")}}

```css interactive-example-choice
flex-wrap: nowrap;
```

```css interactive-example-choice
flex-wrap: wrap;
```

```css interactive-example-choice
flex-wrap: wrap-reverse;
```

```css interactive-example-choice
flex-wrap: wrap balance;
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
    <div>Item Seven</div>
  </div>
</section>
```

```css interactive-example
#example-element {
  border: 1px solid #c5c5c5;
  width: 80%;
  display: flex;
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
/* Keyword values */
flex-wrap: nowrap;
flex-wrap: wrap;
flex-wrap: wrap-reverse;
flex-wrap: balance;
flex-wrap: wrap balance;
flex-wrap: balance wrap-reverse;

/* Global values */
flex-wrap: inherit;
flex-wrap: initial;
flex-wrap: revert;
flex-wrap: revert-layer;
flex-wrap: unset;
```

### Werte

Diese Eigenschaft wird als einzelner Wert aus der folgenden Liste oder als zwei durch Leerzeichen getrennte Werte bei Verwendung von `balance` angegeben:

- `nowrap`
  - : Die Flex-Elemente werden in einer einzelnen Zeile angeordnet, wodurch der Flex-Container überlaufen kann. Dies ist der Anfangswert.
- `wrap`
  - : Die Flex-Elemente können in mehrere Zeilen umbrochen werden.
- `wrap-reverse`
  - : Verhält sich wie `wrap`, jedoch werden die Zeilen in umgekehrter Reihenfolge angeordnet.
- `balance`
  - : Gibt an, dass über mehrere Zeilen umbrochene Flex-Elemente so verteilt werden, dass die Zeilenlängen möglichst ähnlich sind. Wenn `balance` als einziges Schlüsselwort angegeben wird, ist das andere Schlüsselwort standardmäßig `wrap`.

## Beschreibung

Die Eigenschaft `flex-wrap` wird verwendet, um festzulegen, ob die untergeordneten Flex-Elemente des Flex-Containers in mehrere Flex-Zeilen umbrochen werden dürfen oder nicht und, wenn Umbruch festgelegt ist, ob die untergeordneten Elemente gleichmäßig über Flex-Zeilen verteilt werden sollen.

Der Anfangswert `nowrap` gibt an, dass alle Elemente in einer einzelnen Flex-Zeile angeordnet werden sollen, was bedeutet, dass sie den Container überlaufen können. Die Schlüsselwörter `wrap` und `wrap-reverse` verhindern Überlauf, indem sie festlegen, dass Flex-Elemente über mehrere Zeilen fließen oder umbrochen werden können.

Bei `wrap` entspricht cross-start je nach Wert von {{cssxref("flex-direction")}} und aktuellem [Schreibmodus](/de/docs/Web/CSS/Guides/Writing_modes) entweder inline-start oder {{Glossary("Flow_relative_values", "block-start")}}. Bei `wrap-reverse` entspricht cross-start inline-end oder block-end.

### Ausbalancieren der Verteilung von Flex-Elementen

Standardmäßig wird, wenn `wrap` oder `wrap-reverse` angegeben ist, jede Flex-Zeile mit Flex-Elementen gefüllt, bevor Elemente in die nächste Zeile umbrochen werden. Dies kann zu einer ungleichmäßigen Verteilung der Elemente führen, wobei die letzte Flex-Zeile aus weniger Elementen besteht. Wenn die {{cssxref("flex-grow")}}-Werte dieser Elemente nicht null sind, wird der zusätzlich verfügbare Platz auf diese weniger zahlreichen Elemente verteilt, wodurch sie deutlich größer werden als die Elemente in gefüllten Flex-Zeilen.

Das Schlüsselwort `balance` kann verwendet werden, um die Elemente gleichmäßiger über die Zeilen zu verteilen. Optional kann die Eigenschaft {{cssxref("flex-line-count")}} verwendet werden, um die Mindestanzahl an Zeilen festzulegen, über die die ausbalancierten Elemente verteilt werden sollen.

Wenn `balance` als einziges Schlüsselwort angegeben wird, ist das andere Schlüsselwort standardmäßig `wrap`.

Auf einen Flex-Container mit ausbalanciertem Umbruch kann ein Wert für {{cssxref("flex-line-count")}} angewendet werden, um die Mindestanzahl an Zeilen anzugeben, über die die Flex-Elemente verteilt werden sollen. Die Eigenschaft `flex-line-count` hat keine Wirkung, wenn `balance` nicht innerhalb von `flex-wrap` angegeben ist.

Wenn `balance` zusammen mit `nowrap` angegeben wird, ist die Eigenschaft ungültig.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Werte für den Umbruch des Flex-Containers festlegen

#### HTML

```html live-sample___flex-wrap-values
<h4>This is an example for flex-wrap:wrap</h4>
<div class="content">
  <div class="red">1</div>
  <div class="green">2</div>
  <div class="blue">3</div>
</div>
<h4>This is an example for flex-wrap:nowrap</h4>
<div class="content1">
  <div class="red">1</div>
  <div class="green">2</div>
  <div class="blue">3</div>
</div>
<h4>This is an example for flex-wrap:wrap-reverse</h4>
<div class="content2">
  <div class="red">1</div>
  <div class="green">2</div>
  <div class="blue">3</div>
</div>
```

#### CSS

```css live-sample___flex-wrap-values
/* Common Styles */
.content,
.content1,
.content2 {
  color: white;
  font: 100 24px/100px sans-serif;
  height: 150px;
  width: 897px;
  text-align: center;
}

.content div,
.content1 div,
.content2 div {
  height: 50%;
  width: 300px;
}
.red {
  background: orangered;
}
.green {
  background: yellowgreen;
}
.blue {
  background: steelblue;
}

/* Flexbox Styles */
.content {
  display: flex;
  flex-wrap: wrap;
}
.content1 {
  display: flex;
  flex-wrap: nowrap;
}
.content2 {
  display: flex;
  flex-wrap: wrap-reverse;
}
```

#### Ergebnisse

{{ EmbedLiveSample("flex-wrap-values", "100%", "700") }}

### Demonstration des Schlüsselworts `balance`

Dieses Beispiel demonstriert die Auswirkungen des Schlüsselworts `balance` innerhalb der Eigenschaft `flex-wrap` sowie verschiedener `flex-line-count`-Werte.

#### HTML

```html hidden live-sample___the-balance-keyword
<form>
  <div>
    <input type="checkbox" id="reverse" name="reverse" />
    <label for="reverse">Set <code>wrap-reverse</code>?</label>
  </div>
  <div>
    <input type="checkbox" id="balance" name="balance" checked />
    <label for="balance">Set <code>balance</code>?</label>
  </div>
  <div>
    <label for="line-count"><code>flex-line-count</code></label>
    <input
      type="range"
      id="line-count"
      name="line-count"
      min="1"
      max="12"
      value="3" />
    <output>3</output>
  </div>
</form>

<hr />

<p>Currently set: <code>flex-wrap: wrap; flex-line-count: 3;</code></p>

<hr />
```

Wir fügen einen {{htmlelement("div")}}-Container mit einer `class` von `box` ein, der zehn untergeordnete `<div>`-Elemente enthält.

```html live-sample___the-balance-keyword
<div class="box">
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

Wir fügen außerdem Steuerelemente hinzu, mit denen Funktionen des Flex-Containers geändert werden können, einschließlich:

- Umschalten von `flex-wrap` zwischen den Werten `wrap` und `wrap-reverse`.
- Ein- und Ausschalten des Schlüsselworts `balance`.
- Ändern des Werts `flex-line-count`.

Der HTML- und JavaScript-Code wurde der Kürze halber ausgeblendet.

#### CSS

Wir wenden `display: flex` auf `.box` an, um sie in einen Flex-Container umzuwandeln, und setzen dann einige Werte für `flex-wrap` und `flex-line-count`, damit die Flex-Kindelemente gleichmäßig über mindestens drei Flex-Zeilen umbrochen werden. Sie können die Werte in der Live-Demo ändern. Außerdem setzen wir für die Flex-Kindelemente einen {{cssxref("flex")}}-Wert von `1 1 150px`, damit sie eine Basisbreite von `150px` haben, wobei verbleibender Platz gleichmäßig zwischen Elementen in derselben Flex-Zeile verteilt wird.

```css live-sample___the-balance-keyword
.box {
  display: flex;
  flex-wrap: wrap balance;
  flex-line-count: 3;
}

.box > * {
  flex: 1 1 150px;
}
```

```css hidden live-sample___the-balance-keyword
.box {
  width: 100%;
  border: 2px dotted rgb(96 139 168);
  gap: 10px;
}

.box > * {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
}

* {
  box-sizing: border-box;
}

body {
  padding: 10px 30px;
}

@supports not (flex-wrap: balance) {
  body::before {
    content: "Your browser does not support flex-wrap: balance.";
    background-color: wheat;
    text-align: center;
    padding: 1rem 0;

    z-index: 1;
    position: fixed;
    inset: 40% 0 auto;
  }
}
```

Der restliche CSS-Code wurde der Kürze halber ausgeblendet.

```js hidden live-sample___the-balance-keyword
const boxElem = document.querySelector(".box");
const outputElem = document.querySelector("output");
const pCodeElem = document.querySelector("p code");
const reverseInput = document.getElementById("reverse");
const balanceInput = document.getElementById("balance");
const lineCountInput = document.getElementById("line-count");

let wrapValue = "wrap";
let lineCountValue = "3";

function updateCurrentlySet() {
  pCodeElem.textContent = `flex-wrap: ${wrapValue}; flex-line-count: ${lineCountValue};`;
}

function setFlexWrap() {
  wrapValue = "";
  if (reverseInput.checked) {
    wrapValue += "wrap-reverse";
  } else {
    wrapValue += "wrap";
  }

  if (balanceInput.checked) {
    wrapValue += " balance";
  }

  boxElem.style.flexWrap = wrapValue;
  updateCurrentlySet();
}

function setFlexLineCount() {
  lineCountValue = lineCountInput.value;
  boxElem.style.flexLineCount = lineCountValue;
  outputElem.textContent = lineCountValue;
  updateCurrentlySet();
}

reverseInput.addEventListener("change", setFlexWrap);
balanceInput.addEventListener("change", setFlexWrap);
lineCountInput.addEventListener("input", setFlexLineCount);
```

#### Ergebnisse

{{ EmbedLiveSample("the-balance-keyword", "100%", "400") }}

Ändern Sie die Einstellungen der Formular-Steuerelemente, um zu sehen, wie sie die Ausgabe beeinflussen. Beachten Sie Folgendes:

- Das Umschalten zwischen `wrap` und `wrap-reverse` ändert die Richtung, in der die Flex-Zeilen entlang der Querachse angeordnet werden.
- Das Setzen von `balance` bewirkt, dass die Flex-Elemente gleichmäßig über die verfügbaren Flex-Zeilen verteilt werden.
- Das Ändern des Werts `flex-line-count` ändert die Mindestanzahl an Zeilen, über die die Elemente verteilt werden. Die Eigenschaft `flex-line-count` und damit auch der Schieberegler haben keine Wirkung, sofern `balance` nicht aktiviert ist.
- Da die Flex-Elemente standardmäßig über vier Flex-Zeilen verteilt werden, hat das Ändern von `flex-line-count` auf einen Wert kleiner als `5` keine Wirkung. Werte von `5` bis `10` fügen eine zusätzliche Flex-Zeile hinzu.
- Da es 10 Flex-Elemente gibt, haben alle `flex-line-count`-Werte von `10` oder höher dieselbe Wirkung — ein Element wird in jeder von 10 Flex-Zeilen platziert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSXRef("flex-direction")}}
- Kurzschreibweise {{CSSXRef("flex-flow")}}
- [Grundlegende Konzepte von Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [Beherrschung des Umbruchs von Flex-Elementen](/de/docs/Web/CSS/Guides/Flexible_box_layout/Wrapping_items)
- Modul [CSS Flexible Box Layout](/de/docs/Web/CSS/Guides/Flexible_box_layout)
