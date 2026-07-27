---
title: "`anchor-scope` CSS property"
short-title: anchor-scope
slug: Web/CSS/Reference/Properties/anchor-scope
l10n:
  sourceCommit: 071fd0613b1b5728d2d83845ea11512cb615067a
---

Die **`anchor-scope`**-[CSS](/de/docs/Web/CSS)-Eigenschaft kann verwendet werden, um den Bereich zu begrenzen, in dem ein positioniertes Element mit Ankerelementen innerhalb eines bestimmten Teilbaums verknüpft werden kann.

## Syntax

```css
/* Single values */
anchor-scope: none;
anchor-scope: all;
anchor-scope: --anchor-name;

/* Multiple <dashed-ident> values */
anchor-scope: --anchor-name, --another-name;

/* Global values */
anchor-scope: inherit;
anchor-scope: initial;
anchor-scope: revert;
anchor-scope: revert-layer;
anchor-scope: unset;
```

### Werte

Diese Eigenschaft wird als das Schlüsselwort `none` oder `all` oder als eine durch Kommas getrennte Liste von `<dashed-ident>`-Werten spezifiziert:

- `none`
  - : Es erfolgt keine Begrenzung des Ankerbereichs auf einem Element. Dies ist der Standardwert.
- `all`
  - : Legt den Bereich so fest, dass _alle_ in dem Teilbaum gesetzten `anchor-name`-Werte nur von positionierten Elementen im selben Teilbaum gebunden werden können.
- {{cssxref("dashed-ident", "&lt;dashed-ident&gt;#")}}
  - : Ein oder mehrere durch Kommas getrennte {{cssxref("dashed-ident")}}s, die Ankernamen repräsentieren. Legt den Bereich so fest, dass die angegebenen `anchor-name`-Werte, wenn sie im Teilbaum gesetzt sind, nur von positionierten Elementen im gleichen Teilbaum gebunden werden können.

## Beschreibung

Wenn mehreren [Ankerelementen](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#associating_anchor_and_positioned_elements) auf einer Seite derselbe {{cssxref("anchor-name")}}-Wert zugewiesen wird und ein positioniertes Element mit diesem Ankernamen verknüpft ist (indem dieser Name als Wert seiner {{cssxref("position-anchor")}}-Eigenschaft angegeben wird), wird das positionierte Element mit dem _letzten_ Ankerelement in der Quellreihenfolge mit diesem Ankernamen verknüpft.

Dies kann in bestimmten Situationen ein Problem darstellen. Beispielsweise, wenn ein Dokument mehrere sich wiederholende Komponenten enthält, von denen jede ein positioniertes Element hat, das an einen Anker gebunden ist, werden alle positionierten Elemente an den letzten Anker auf der Seite verankert, es sei denn, jede Komponente verwendet einen anderen Ankernamen. Dies ist wahrscheinlich nicht das gewünschte Verhalten.

Die Eigenschaft `anchor-scope` kann dieses Problem beheben, indem sie die Sichtbarkeit oder den "Bereich" eines `anchor-name`-Wertes auf einen bestimmten Teilbaum begrenzt. Das Ergebnis ist, dass jedes positionierte Element nur an ein Element innerhalb desselben Teilbaums verankert werden kann, in dem das Element sitzt, das den Bereich festgelegt hat.

- `anchor-scope: all` setzt den Bereich so, dass _alle_ in dem Teilbaum gesetzten `anchor-name`-Werte nur von positionierten Elementen im selben Teilbaum gebunden werden können. Nehmen wir an, wir fügen mehrere Anker in ein Dokument ein, die alle den `anchor-name: --my-anchor` auf sich gesetzt haben, und platzieren sie in separaten Containern. Wir setzen dann `anchor-scope: all` auf jeden Container. Wenn wir dann ein positioniertes Element innerhalb eines der Container einschließen und ihm `--my-anchor` als Wert seiner `position-anchor`-Eigenschaft geben, wird es relativ zu dem Anker innerhalb desselben Containers positioniert.

  Darüber hinaus, wenn wir ein weiteres positioniertes Element außerhalb der Container erstellen und ihm denselben oder einen anderen Ankernamen geben, wird es nicht relativ zu einem der Anker positioniert, unabhängig davon, ob die Anker diese An kernamen in ihren `anchor-name`-Werten enthalten. `anchor-scope: all` begrenzt den Ankerbereich für Container, auf denen es gesetzt ist, für _alle_ Anker, unabhängig von `anchor-name`, auf nur positionierte Elemente innerhalb derselben Container.

- `anchor-scope: <dashed-ident>#` setzt den Bereich so, dass die angegebenen `anchor-name`-Werte, wenn sie im Teilbaum gesetzt sind, nur von positionierten Elementen im gleichen Teilbaum gebunden werden können. Wenn wir auf dasselbe Beispiel aus dem vorherigen Punkt zurückkehren, aber den `anchor-scope`-Wert auf den Containern in `--my-anchor` ändern:
  - Positionierte Elemente mit `position-anchor: --my-anchor` auf ihnen werden auf den durch die `anchor-scope`-Einstellung auferlegten Bereich beschränkt. Sie werden nur relativ zu den Ankern positioniert, wenn sie innerhalb der Container platziert werden.
  - Wenn jedoch positionierte Elemente mit unterschiedlichen `position-anchor`-Namen — beispielsweise `--another-anchor` — positioniert werden sollen, können sie relativ zu einem der Anker positioniert werden, egal ob innerhalb oder außerhalb der Container, vorausgesetzt, Sie fügen dem Anker `--another-anchor` in der `anchor-name`-Eigenschaft hinzu. Die Eigenschaft `anchor-scope` begrenzt den Bereich nur für den `--my-anchor`-Ankernamen, sie hat keinen Einfluss auf andere An kernamen.

    Wenn mehreren Ankern der `--another-anchor`-Ankernamen zugewiesen wird, werden die positionierten Elemente mit diesem `position-anchor`-Wert relativ zum letzten Ankerelement in der Quellreihenfolge mit diesem Namen positioniert.

- `anchor-scope: none` ist der Standardwert, der angibt, dass kein Ankerbereich gesetzt ist. Wenn mehrere Anker in einem Dokument mit demselben `anchor-name` existieren und ein positioniertes Element diesen Namen als Wert seiner `position-anchor`-Eigenschaft angegeben bekommt, wird es relativ zum letzten Ankerelement in der Quellreihenfolge positioniert, unabhängig davon, wo es im DOM-Hierarchie platziert ist.

Wenn Sie beispielsweise drei `anchor-name`-Werte in einem Teilbaum gesetzt haben (etwa `--anchor1`, `--anchor2` und `--anchor3`), dann entspricht das Setzen von `anchor-scope: --anchor1, --anchor2, --anchor3` auf das oberste Element des Teilbaums dem Setzen von `anchor-scope: all`.

Ankerbereiche beeinflussen nur [explizite Ankerzuweisungen](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#explicit_css_anchor_association), das heißt, solche, die zwischen einem Ankerelement mit einem `anchor-name` darauf und einem positionierten Element bestehen, das den Ankernamen des Ankerelements in seinem `position-anchor`-Wert referenziert. Ankerbereiche beeinflussen keine [impliziten Ankerzuweisungen](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#implicit_anchor_association).

Weitere Informationen zu Ankerfunktionen und deren Verwendung finden Sie im Modul [CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) und im [Anleitung zur CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning/Using).

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel demonstriert, wie Ankerbereiche auf grundlegender Ebene funktionieren. Es zeigt, wie ein Ankerelement innerhalb eines eingeschränkten Containers so begrenzt werden kann, dass nur positionierte Elemente innerhalb desselben eingeschränkten Containers daran gebunden werden können.

#### HTML

Wir spezifizieren ein {{htmlelement("section")}}-Element, auf dem wir einen Ankerbereich festlegen werden. Dieses enthält zwei {{htmlelement("div")}}-Elemente, eines, das in einen Anker verwandelt wird, und eines, das ein ankerpositioniertes Element sein wird.

Wir fügen auch ein drittes `<div>` außerhalb des `<section>` hinzu, das wir ebenfalls in ein ankerpositioniertes Element verwandeln.

```html live-sample___basic-usage
<section class="scoped">
  <div class="anchor">⚓︎</div>
  <div class="positioned">Positioned 1</div>
</section>

<div class="positioned">Positioned 2</div>
```

#### CSS

Erstens setzen wir `anchor-scope: --my-anchor` auf dem `<section>`. Dies begrenzt dessen Bereich so, dass die Ankerelementsnachkommen des `<section>` mit dem Namen `--my-anchor` nur von positionierten Elementen gebunden werden können, die ebenfalls Nachkommen des `<section>` sind.

Um dies zu testen, deklarieren wir das `anchor`-`<div>` als Ankerelement, indem wir ihm ein {{cssxref("anchor-name")}} von `--my-anchor` geben. Dann positionieren wir die `.positioned`-Elemente absolut, verankern sie am Anker, indem wir ihren {{cssxref("position-anchor")}}-Wert auf `--my-anchor` setzen, und positionieren sie rechts vom Anker, indem wir ihren {{cssxref("position-area")}}-Wert auf `right` setzen:

```css hidden live-sample___basic-usage
.scoped {
  padding: 20px;
  background: #eeeeee;
}

.anchor {
  font-size: 1.8rem;
  color: white;
  text-shadow: 1px 1px 1px black;
  background-color: blue;
  width: fit-content;
  padding: 3px;
}

.positioned {
  background: orange;
  width: fit-content;
  padding: 3px;
}
```

```css live-sample___basic-usage
.scoped {
  anchor-scope: --my-anchor;
}

.anchor {
  anchor-name: --my-anchor;
}

.positioned {
  position: absolute;
  position-anchor: --my-anchor;
  position-area: right;
}
```

#### Ergebnis

Das Beispiel wird wie folgt gerendert:

{{ EmbedLiveSample("basic_usage", "100%", "225") }}

Beachten Sie, wie das erste positionierte Element rechts vom Anker positioniert wird. Es liegt im Bereich für die Positionierung relativ zum `--my-anchor`-Anker, da es innerhalb des `<section>`-Elements ist, wo der `anchor-scope: --my-anchor` gesetzt ist.

Das zweite positionierte Element hingegen wird nicht relativ zum Anker positioniert. Es ist kein Nachkomme des `<section>`-Elements, daher liegt es außerhalb des Ankerbereiches.

### Vergleich der verschiedenen `anchor-scope`-Werte

Dieses Beispiel zeigt die Auswirkungen der verschiedenen `anchor-scope`-Werte, indem es Ihnen erlaubt, diese auf mehrere Container, die alle Anker mit demselben `anchor-name`-Wert enthalten, anzuwenden.

#### HTML

Wir spezifizieren drei {{htmlelement("section")}}-Elemente, auf denen wir einen Ankerbereich festlegen werden. Jedes `<section>` enthält zwei {{htmlelement("div")}}-Elemente, eines, das in einen Anker verwandelt wird, und eines, das ein ankerpositioniertes Element sein wird.

Wir fügen auch ein zusätzliches `<div>` außerhalb der `<section>`-Elemente hinzu, das wir ebenfalls in ein ankerpositioniertes Element verwandeln werden. Dies wird andere Ankerpositionseinstellungen als die anderen haben.

Schließlich fügen wir ein {{htmlelement("form")}} hinzu, das drei verschiedene [`<input type="radio">`](/de/docs/Web/HTML/Reference/Elements/input/radio)-Elemente enthält, um verschiedene `anchor-scope`-Werte auf die `<section>`-Elemente anzuwenden.

```html live-sample___comparing-values
<section class="scoped">
  <div class="anchor">⚓︎</div>
  <div class="positioned">Positioned 1</div>
</section>

<section class="scoped">
  <div class="anchor">⚓︎</div>
  <div class="positioned">Positioned 2</div>
</section>

<section class="scoped">
  <div class="anchor">⚓︎</div>
  <div class="positioned">Positioned 3</div>
</section>

<div class="positioned2">Positioned 4</div>

<form>
  <fieldset>
    <legend>Select an <code>anchor-scope</code> value</legend>

    <input type="radio" id="all" name="scope" value="all" checked />
    <label for="all"><code>all</code></label>
    <input type="radio" id="my-anchor" name="scope" value="--my-anchor" />
    <label for="my-anchor"><code>--my-anchor</code></label>
    <input type="radio" id="none" name="scope" value="none" />
    <label for="none"><code>none</code></label>
  </fieldset>
</form>
```

#### CSS

Wir beginnen damit, unsere Ankerelemente als Anker zu kennzeichnen, indem wir ihnen zwei {{cssxref("anchor-name")}}-Werte geben: `--my-anchor` und `--another-anchor`.

```css hidden live-sample___comparing-values
body {
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-top: 5px;
}

.scoped {
  padding: 20px;
  background: #eeeeee;
  border: 2px solid #dddddd;
  border-radius: 10px;
  width: 100px;
  height: 100px;
}

.anchor {
  font-size: 1.8rem;
  color: white;
  text-shadow: 1px 1px 1px black;
  background-color: blue;
  width: fit-content;
  padding: 3px;
}

.positioned,
.positioned2 {
  border: 1px solid black;
  border-radius: 3px;
  width: fit-content;
  padding: 3px 6px;
  box-shadow: 3px 3px 3px rgb(0 0 0 / 0.2);
}

form {
  position: absolute;
  bottom: 5px;
  right: 5px;
}
```

```css live-sample___comparing-values
.anchor {
  anchor-name: --my-anchor, --another-anchor;
}
```

Dann positionieren wir unsere `.positioned`-Elemente relativ zu einem Ankerelement. Wir positionieren sie absolut, geben ihnen einen {{cssxref("position-anchor")}}-Wert von `--my-anchor`, um sie einem Anker zuzuordnen, und positionieren sie relativ zum Anker mit einem {{cssxref("position-area")}}-Wert von `right`.

Das `.positioned2`-Element wird ähnlich positioniert, mit dem Unterschied, dass es den anderen verfügbaren Ankernamen als seinen `position-anchor`-Wert erhält — `--another-anchor` — und es wird `bottom` des Ankers positioniert. Wir geben ihm auch einen {{cssxref("bottom")}}-Wert von `5px`, sodass, wenn die Ankerpositionierung nicht funktioniert, es unten im `<body>` positioniert wird. Dieses Element ist nicht in einem eingeschränkten Element enthalten, daher wird es nur ankerpositioniert, wenn bestimmte `anchor-scope`-Werte auf die eingeschränkten Elemente angewendet werden, wie später erläutert.

```css live-sample___comparing-values
.positioned {
  position: absolute;
  position-anchor: --my-anchor;
  position-area: right;
}

.positioned2 {
  position: absolute;
  bottom: 5px;
  position-anchor: --another-anchor;
  position-area: bottom;
}
```

Wir stellen das Setzen von `anchor-scope` auf die `<section>`-Elemente sicher, wenn verschiedene Radiobuttons gedrückt werden, indem wir JavaScript verwenden, das aus Gründen der Kürze ausgeblendet wurde.

```js hidden live-sample___comparing-values
const sections = document.querySelectorAll("section");
const form = document.querySelector("form");

function updateScope(val) {
  sections.forEach((section) => (section.style.anchorScope = val));
}

form.addEventListener("input", (e) => {
  updateScope(e.target.value);
});

updateScope("all");
```

#### Ergebnis

Das Beispiel wird wie folgt gerendert:

{{ EmbedLiveSample("comparing-values", "100%", "225") }}

Sehen Sie sich den anfänglichen Positionierungseffekt an, der auf die positionierten Elemente mit `anchor-scope: all` angewendet wird, die auf den `<section>`-Elementen gesetzt sind, und versuchen Sie dann, die anderen verfügbaren `anchor-scope`-Werte auszuwählen, um zu sehen, welche Wirkung diese haben. Sie sollten folgendes beobachten:

- `all`: Der Bereich für die Positionierung von Elementen relativ zu Ankerelementen, die Nachkommen der `<section>`-Elemente sind, ist beschränkt auf positionierte Elemente, die selbst Nachkommen der `<section>`-Elemente sind, unabhängig vom verwendeten `anchor-name`-Wert, um sie zu verknüpfen. Infolgedessen werden die positionierten Elemente innerhalb der `<section>`-Elemente ("Positioned 1–3") wie erwartet Anker-verankert, aber das positionierte Element außerhalb der `<section>`-Elemente ("Positioned 4") wird nicht Anker-verankert. Es befindet sich außerhalb des Bereichs.
- `--my-anchor`: Der Bereich für die Positionierung von Elementen relativ zu Ankerelementen, die Nachkommen der `<section>`-Elemente sind, ist beschränkt auf positionierte Elemente, die selbst Nachkommen der `<section>`-Elemente sind, nur wenn der `--my-anchor`-Ankernamen verwendet wird, um sie zu verknüpfen. Infolgedessen werden die positionierten Elemente innerhalb der `<section>`-Elemente ("Positioned 1–3") wie erwartet Anker-verankert, und das positionierte Element außerhalb der `<section>`-Elemente ("Positioned 4") wird ebenfalls wie erwartet Anker-verankert. Im ersten Fall befinden sich die positionierten Elemente im festgelegten Bereich, und im zweiten Fall wird das positionierte Element nicht vom festgelegten Bereich beeinflusst, da es einen außerhalb des Bereichs liegenden Ankernamen (`--another-anchor`) verwendet. Das "Positioned 4" Element wird relativ zum letzten Ankerelement in der Quelle positioniert, das den übereinstimmenden Ankernamen hat.
- `none`: Da auf den `<section>`-Elementen kein Ankerbereich gesetzt ist, werden alle positionierten Elemente relativ zum letzten Ankerelement in der Quellreihenfolge positioniert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("anchor-name")}}
- {{cssxref("position-anchor")}}
- [CSS-Ankerpositionierungsmodul](/de/docs/Web/CSS/Guides/Anchor_positioning)
- [Anleitung zur CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning/Using)
