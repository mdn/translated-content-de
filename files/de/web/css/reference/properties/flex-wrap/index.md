---
title: "`flex-wrap` CSS property"
short-title: flex-wrap
slug: Web/CSS/Reference/Properties/flex-wrap
l10n:
  sourceCommit: ae836b44d9faa0e9f581631ed1dcccd2a502b618
---

Die **`flex-wrap`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, ob Flex-Elemente in einer Linie erzwungen werden oder in mehrere Linien umgebrochen werden können. Wenn das Umbruch erlaubt ist, legt es die Richtung fest, in der die Linien gestapelt werden.

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

Die Kurzschreibweise der {{cssxref("flex-flow")}} Eigenschaft kann verwendet werden, um sowohl die {{CSSXRef("flex-direction")}} als auch `flex-wrap` Eigenschaften festzulegen, die die Haupt- und Nebenachse des Flex-Containers definieren.

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

Diese Eigenschaft wird als ein einzelner Wert aus der folgenden Liste oder als zwei durch Leerzeichen getrennte Werte bei der Verwendung von `balance` angegeben:

- `nowrap`
  - : Die Flex-Elemente werden in einer einzigen Zeile angeordnet, was dazu führen kann, dass der Flex-Container überläuft. Dies ist der Anfangswert.
- `wrap`
  - : Die Flex-Elemente können in mehrere Zeilen umbrochen werden.
- `wrap-reverse`
  - : Verhält sich wie `wrap`, jedoch werden die Linien in umgekehrter Reihenfolge angeordnet.
- `balance`
  - : Gibt an, dass über mehrere Zeilen verteilte Flex-Elemente so verteilt werden, dass die Zeilenlängen so ähnlich wie möglich sind. Wenn `balance` als einziges Schlüsselwort angegeben wird, ist das andere Schlüsselwort standardmäßig `wrap`.

## Beschreibung

Die `flex-wrap` Eigenschaft wird verwendet, um festzulegen, ob die Flex-Elemente des Flex-Containers auf mehrere Flex-Linien umbrechen dürfen oder nicht und, falls Umbruch eingestellt ist, ob die Kinder gleichmäßig auf Flex-Linien verteilt werden sollen.

Der Anfangswert `nowrap` gibt an, dass alle Elemente in einer einzigen Flex-Linie angeordnet werden sollten, was bedeutet, dass sie den Container überlaufen können. Die Schlüsselwörter `wrap` und `wrap-reverse` verhindern Überläufe, indem sie angeben, dass Flex-Elemente über mehrere Zeilen fließen oder umbrochen werden können.

Mit `wrap` ist der Kreuz-Start dem {{Glossary("Flow_relative_values", "inline-start oder block-start")}} äquivalent, abhängig vom {{cssxref("flex-direction")}} Wert und dem aktuellen [Schreibmodus](/de/docs/Web/CSS/Guides/Writing_modes). Mit `wrap-reverse` ist der Kreuz-Start dem inline-end oder block-end äquivalent.

### Ausbalancierung der Flex-Element-Verteilung

Standardmäßig wird bei Angabe von `wrap` oder `wrap-reverse` jede Flex-Zeile mit Flex-Elementen gefüllt, bevor Elemente in die nächste Zeile umgebrochen werden. Dies kann zu einer ungleichmäßigen Verteilung der Elemente führen, wobei die letzte Flex-Zeile aus weniger Elementen besteht. Wenn die {{cssxref("flex-grow")}} Werte dieser Elemente ungleich Null sind, wird der zusätzliche verfügbare Raum auf diese weniger Elemente verteilt, wodurch sie viel größer als die Elemente auf gefüllten Flex-Linien werden.

Das Schlüsselwort `balance` kann verwendet werden, um die Elemente in ausgewogener Weise über die Zeilen zu verteilen. Optional kann die {{cssxref("flex-line-count")}} Eigenschaft verwendet werden, um die Mindestanzahl von Zeilen festzulegen, über die die auszugleichenden Elemente verteilt werden sollen.

Wenn `balance` das einzige angegebene Schlüsselwort ist, ist das andere Schlüsselwort standardmäßig `wrap`.

Ein ausgewogen umgebrochener Flex-Container kann einen {{cssxref("flex-line-count")}} Wert haben, um die Mindestanzahl von Zeilen anzugeben, über die die Flex-Elemente verteilt werden sollten. Die `flex-line-count` Eigenschaft hat keine Auswirkung, wenn `balance` nicht innerhalb von `flex-wrap` angegeben ist.

Wenn `balance` zusammen mit `nowrap` angegeben wird, ist die Eigenschaft ungültig.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einstellen von Flex-Container-Umbruchwerten

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

### Demonstration des `balance` Schlüsselworts

Dieses Beispiel zeigt die Auswirkungen des `balance` Schlüsselworts innerhalb der `flex-wrap` Eigenschaft und verschiedener `flex-line-count` Werte.

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

Wir fügen einen Container {{htmlelement("div")}} mit einer `class` von `box` hinzu, der zehn Kind-`<div>`s hat.

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

Wir fügen auch Steuerungen hinzu, um Funktionen des Flex-Containers ändern zu können, einschließlich:

- Umschalten von `flex-wrap` zwischen den Werten `wrap` und `wrap-reverse`.
- Umschalten des `balance` Schlüsselworts ein und aus.
- Ändern des `flex-line-count` Werts.

Wir haben das HTML und JavaScript zur Kürze versteckt.

#### CSS

Wir wenden `display: flex` auf die `.box` an, um es in einen Flex-Container zu verwandeln, und setzen dann einige `flex-wrap` und `flex-line-count` Werte, um die Flex-Kinder gleichmäßig über mindestens drei Flex-Linien zu verteilen. Sie können die Werte im Live-Demo ändern. Wir setzen auch einen {{cssxref("flex")}} Wert von `1 1 150px` auf die Flex-Kinder, sodass sie eine Basisbreite von `150px` haben, wobei verbleibender Raum gleichmäßig zwischen Elementen auf derselben Flex-Linie verteilt wird.

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

Wir haben den Rest des CSS zur Kürze versteckt.

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

Ändern Sie die Einstellungen der Formsteuerelemente, um zu sehen, wie sie die Ausgabe beeinflussen. Beachten Sie, wie:

- Um zwischen `wrap` und `wrap-reverse` zu wechseln, ändert die Richtung, in der die Flex-Linien entlang der Kreuzachse angeordnet sind.
- Das Einstellen von `balance` bewirkt, dass die Flex-Elemente gleichmäßig über die verfügbaren Flex-Linien verteilt werden.
- Das Ändern des `flex-line-count` Werts ändert die Mindestanzahl der Linien, über die die Elemente verteilt werden. Die `flex-line-count` Eigenschaft, und daher der Schieberegler, hat keine Wirkung, es sei denn, `balance` ist aktiviert.
- Da die Flex-Elemente standardmäßig über vier Flex-Linien verteilt sind, hat das Ändern des `flex-line-count` auf einen Wert unter `5` keine Wirkung. Werte von `5` bis `10` fügen eine zusätzliche Flex-Linie hinzu.
- Da es 10 Flex-Elemente gibt, haben `flex-line-count` Werte von `10` oder mehr denselben Effekt — ein Element wird auf jede der 10 Flex-Linien platziert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSXRef("flex-direction")}}
- {{CSSXRef("flex-flow")}} Kurzschreibweise
- [Grundkonzepte von Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [Beherrschen des Umbruchs von Flex-Elementen](/de/docs/Web/CSS/Guides/Flexible_box_layout/Wrapping_items)
- [CSS Flexibles Box Layout](/de/docs/Web/CSS/Guides/Flexible_box_layout) Modul
