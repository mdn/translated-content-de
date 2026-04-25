---
title: "`anchor-scope` CSS property"
short-title: anchor-scope
slug: Web/CSS/Reference/Properties/anchor-scope
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`anchor-scope`** [CSS](/de/docs/Web/CSS)-Eigenschaft kann verwendet werden, um den Bereich einzuschränken, in dem ein positioniertes Element mit Ankerelementen zu einem bestimmten Unterbaum verknüpft werden kann.

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

- `none`
  - : Auf einem Element erfolgt keine Einschränkung des Ankerbereichs. Dies ist der Standardwert.
- `all`
  - : Setzt den Bereich so, dass _beliebige_ `anchor-name`-Werte, die im Unterbaum festgelegt sind, nur von positionierten Elementen im gleichen Unterbaum gebunden werden können.
- {{cssxref("dashed-ident", "&lt;dashed-ident&gt;#")}}
  - : Einer oder mehrere durch Kommas getrennte {{cssxref("dashed-ident")}}s, die Ankernamen darstellen. Setzt den Bereich so, dass die angegebenen `anchor-name`-Werte, wenn sie im Unterbaum festgelegt sind, nur von positionierten Elementen im gleichen Unterbaum gebunden werden können.

## Beschreibung

Wenn mehrere [Ankerelemente](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#associating_anchor_and_positioned_elements) auf einer Seite denselben {{cssxref("anchor-name")}}-Wert erhalten und ein positioniertes Element mit diesem Ankernamen verknüpft wird (indem der Name als Wert der {{cssxref("position-anchor")}}-Eigenschaft angegeben wird), wird das positionierte Element mit dem _letzten_ Ankerelement in der Quellreihenfolge mit diesem Ankernamen verknüpft.

Dies kann in bestimmten Situationen ein Problem darstellen. Zum Beispiel, wenn ein Dokument mehrere wiederholte Komponenten enthält, von denen jede ein positioniertes Element hat, das an einen Anker gebunden ist, werden alle positionierten Elemente an den letzten Anker auf der Seite gebunden, es sei denn, jede Komponente verwendet einen anderen Ankernamen. Dies ist wahrscheinlich nicht das gewünschte Verhalten.

Die `anchor-scope`-Eigenschaft kann dieses Problem beheben, indem sie die Sichtbarkeit oder den „Bereich“ eines `anchor-name`-Wertes auf einen bestimmten Unterbaum beschränkt. Das Ergebnis ist, dass jedes positionierte Element nur an ein Element innerhalb desselben Unterbaums des Elements verankert werden kann, auf dem der Bereich festgelegt ist.

- `anchor-scope: all` setzt den Bereich so, dass _beliebige_ `anchor-name`-Werte, die im Unterbaum festgelegt sind, nur von positionierten Elementen im gleichen Unterbaum gebunden werden können. Angenommen, wir fügen mehrere Anker in ein Dokument ein, die alle mit `anchor-name: --my-anchor` festgelegt sind, und platzieren sie in separaten Containern. Dann setzen wir `anchor-scope: all` auf jeden Container. Wenn wir dann ein positioniertes Element innerhalb eines der Container einfügen und ihm `--my-anchor` als Wert der `position-anchor`-Eigenschaft geben, wird es relativ zu dem Anker innerhalb desselben Containers positioniert.

  Darüber hinaus, wenn wir ein weiteres positioniertes Element außerhalb der Container erstellen und ihm den gleichen Ankernamen oder einen anderen Ankernamen geben, wird es nicht relativ zu einem der Anker verankert, unabhängig davon, ob die Anker diese Ankernamen in ihren `anchor-name`-Werten enthalten. `anchor-scope: all` begrenzt den Ankerbereich für Container, auf denen es gesetzt ist, für _beliebige_ Anker, unabhängig von `anchor-name`, nur auf positionierte Elemente innerhalb der gleichen Container.

- `anchor-scope: <dashed-ident>#` setzt den Bereich so, dass die angegebenen `anchor-name`-Werte, wenn sie im Unterbaum festgelegt sind, nur von positionierten Elementen im gleichen Unterbaum gebunden werden können. Wenn wir zum gleichen Beispiel zurückkehren, das im vorherigen Punkt beschrieben wurde, aber den `anchor-scope`-Wert, der auf den Containern gesetzt ist, in `--my-anchor` ändern:
  - Positionierte Elemente mit `position-anchor: --my-anchor`, die auf ihnen festgelegt sind, werden auf den durch die `anchor-scope`-Einstellung auferlegten Bereich beschränkt. Sie werden nur relativ zu den Ankern positioniert, wenn sie innerhalb der Container platziert sind.
  - Positionierte Elemente mit anderen `position-anchor`-Namen — zum Beispiel `--another-anchor` — _können_ relativ zu einem der Anker positioniert werden, unabhängig davon, ob sie innerhalb oder außerhalb der Container platziert werden, vorausgesetzt, Sie fügen den Ankernamen `--another-anchor` zur `anchor-name`-Eigenschaft des Ankers hinzu. Die `anchor-scope`-Eigenschaft begrenzt den Bereich nur für den Ankernamen `--my-anchor`, sodass sie keine Auswirkungen auf andere Ankernamen hat.

    Wenn mehreren Ankern der Ankername `--another-anchor` gegeben wird, werden die positionierten Elemente mit diesem `position-anchor`-Wert relativ zum letzten Anker in der Quellreihenfolge mit diesem Namen positioniert.

- `anchor-scope: none` ist der Standardwert, der angibt, dass kein Ankerbereich gesetzt ist. Wenn mehrere Anker in einem Dokument mit demselben `anchor-name` vorhanden sind und ein positioniertes Element diesen Namen als Wert seiner `position-anchor`-Eigenschaft erhält, wird es relativ zum letzten Ankerelement in der Quellreihenfolge positioniert, unabhängig davon, wo es in der DOM-Hierarchie platziert ist.

Wenn Sie beispielsweise drei `anchor-name`-Werte innerhalb eines Unterbaums festgelegt haben (sagen wir, `--anchor1`, `--anchor2` und `--anchor3`), wäre das Setzen von `anchor-scope: --anchor1, --anchor2, --anchor3` auf dem obersten Element des Unterbaums gleichbedeutend mit `anchor-scope: all`.

Ankerbereiche wirken sich nur auf [explizite Ankerassoziationen](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#explicit_css_anchor_association) aus, d.h. solche, die zwischen einem Ankerelement mit festgelegtem `anchor-name` und einem positionierten Element, das den Ankernamen des Ankerelements in seinem `position-anchor`-Wert referenziert, hergestellt werden. Ankerbereiche wirken sich nicht auf [implizite Ankerassoziationen](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#implicit_anchor_association) aus.

Weitere Informationen zu Ankerfunktionen und deren Verwendung finden Sie im [CSS-Anker-Positionierungsmodul](/de/docs/Web/CSS/Guides/Anchor_positioning) und im [Leitfaden zur Verwendung der CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning/Using).

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt, wie der Ankerbereich auf einem grundlegenden Niveau funktioniert. Es zeigt, wie ein Ankerelement innerhalb eines begrenzten Containers so eingeschränkt werden kann, dass nur positionierte Elemente innerhalb desselben begrenzten Containers daran gebunden sind.

#### HTML

Wir spezifizieren ein {{htmlelement("section")}}-Element, auf dem wir einen Ankerbereich festlegen werden. Dieses enthält zwei {{htmlelement("div")}}-Elemente, eines, das in einen Anker umgewandelt wird, und eines, das ein ankerpositioniertes Element sein soll.

Wir fügen auch ein drittes `<div>` außerhalb des `<section>` ein, das ebenfalls in ein ankerpositioniertes Element umgewandelt wird.

```html live-sample___basic-usage
<section class="scoped">
  <div class="anchor">⚓︎</div>
  <div class="positioned">Positioned 1</div>
</section>

<div class="positioned">Positioned 2</div>
```

#### CSS

Zuerst setzen wir `anchor-scope: --my-anchor` auf das `<section>`. Dies begrenzt seinen Bereich so, dass Ankerelementnachkommen des `<section>` mit einem Namen von `--my-anchor` nur von ebenfalls Nachkommen des `<section>` gebunden werden können.

Um dies zu testen, deklarieren wir das `anchor`-`<div>` als ein Ankerelement, indem wir ihm einen {{cssxref("anchor-name")}} von `--my-anchor` geben. Wir positionieren dann die `.positioned`-Elemente absolut, hängen sie an den Anker, indem wir ihren {{cssxref("position-anchor")}}-Werten `--my-anchor` zuweisen, und positionieren sie rechts vom Anker, indem wir ihren {{cssxref("position-area")}}-Werten `right` zuweisen:

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

Das Beispiel wird wie folgt dargestellt:

{{ EmbedLiveSample("basic_usage", "100%", "225") }}

Beachten Sie, wie das erste positionierte Element rechts vom Anker positioniert ist. Es liegt im Bereich der Positionierung relativ zum `--my-anchor`-Anker, da es sich innerhalb des `<section>`-Elements befindet, in dem das `anchor-scope: --my-anchor` festgelegt ist.

Das zweite positionierte Element wird jedoch nicht relativ zum Anker positioniert. Es ist kein Nachkomme des `<section>`-Elements und somit außerhalb des Ankerbereichs.

### Vergleich verschiedener `anchor-scope`-Werte

Dieses Beispiel zeigt die Auswirkungen der verschiedenen `anchor-scope`-Werte, indem es Ihnen ermöglicht, verschiedene `anchor-scope`-Werte auf mehrere Container anzuwenden, die alle Anker mit demselben `anchor-name`-Wert enthalten.

#### HTML

Wir spezifizieren drei {{htmlelement("section")}}-Elemente, auf denen wir einen Ankerbereich festlegen werden. Jedes `<section>` enthält zwei {{htmlelement("div")}}-Elemente, eines, das in einen Anker umgewandelt wird, und eines, das ein ankerpositioniertes Element sein soll.

Wir fügen auch ein zusätzliches `<div>` außerhalb der `<section>`-Elemente ein, das ebenfalls in ein ankerpositioniertes Element umgewandelt wird. Dieses wird andere Ankerpositionierungseinstellungen als die anderen haben.

Schließlich fügen wir ein {{htmlelement("form")}} mit drei verschiedenen [`<input type="radio">`](/de/docs/Web/HTML/Reference/Elements/input/radio)-Elementen ein, um verschiedene `anchor-scope`-Werte auf den `<section>`-Elementen festzulegen.

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

Wir beginnen damit, unsere Ankerelemente als Anker zu spezifizieren, indem wir ihnen zwei {{cssxref("anchor-name")}}-Werte geben: `--my-anchor` und `--another-anchor`.

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

Als nächstes positionieren wir unsere `.positioned`-Elemente relativ zu einem Ankerelement. Wir positionieren sie absolut, geben ihnen einen {{cssxref("position-anchor")}}-Wert von `--my-anchor`, um sie mit einem Anker zu verknüpfen, und positionieren sie relativ zum Anker mit einem {{cssxref("position-area")}}-Wert von `right`.

Das `.positioned2`-Element wird ähnlich positioniert, mit dem Unterschied, dass es den anderen verfügbaren Ankernamen als `position-anchor`-Wert – `--another-anchor` – erhält und es stattdessen am `bottom` des Ankers positioniert wird. Wir geben ihm auch einen {{cssxref("bottom")}}-Wert von `5px`, sodass es, wenn die Ankerpositionierung nicht funktioniert, am unteren Rand des `<body>` positioniert wird. Dieses Element ist in keinem begrenzten Element enthalten, daher wird es nur Anker positioniert, wenn bestimmte `anchor-scope`-Werte auf die begrenzten Elemente gesetzt werden, wie später erläutert.

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

Wir handhaben das Setzen von `anchor-scope` auf den `<section>`-Elementen, wenn verschiedene Radio-Buttons gedrückt werden, mithilfe von JavaScript, das zur Übersichtlichkeit ausgeblendet wurde.

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

Das Beispiel wird wie folgt dargestellt:

{{ EmbedLiveSample("comparing-values", "100%", "225") }}

Überprüfen Sie den anfänglichen Positionierungseffekt, der auf die positionierten Elemente mit `anchor-scope: all`, die auf den `<section>`-Elementen gesetzt sind, angewendet wurde, und probieren Sie dann die anderen verfügbaren `anchor-scope`-Werte aus, um deren Effekt zu sehen. Sie sollten Folgendes beobachten:

- `all`: Der Bereich für die Positionierung von Elementen relativ zu Ankerelementen, die Nachkommen der `<section>`-Elemente sind, ist auf positionierte Elemente beschränkt, die selbst Nachkommen der `<section>`-Elemente sind, unabhängig vom `anchor-name`-Wert, der zur Verknüpfung verwendet wird. Infolgedessen sind die positionierten Elemente innerhalb der `<section>`-Elemente ("Positioned 1–3") wie erwartet ankerpositioniert, aber das positionierte Element außerhalb der `<section>`-Elemente ("Positioned 4") ist nicht ankerpositioniert. Es liegt außerhalb des Bereichs.
- `--my-anchor`: Der Bereich für die Positionierung von Elementen relativ zu Ankerelementen, die Nachkommen der `<section>`-Elemente sind, ist auf positionierte Elemente beschränkt, die selbst Nachkommen der `<section>`-Elemente sind, nur wenn der `--my-anchor`-`anchor-name` zur Verknüpfung verwendet wird. Infolgedessen sind die positionierten Elemente innerhalb der `<section>`-Elemente ("Positioned 1–3") wie erwartet ankerpositioniert, und das positionierte Element außerhalb der `<section>`-Elemente ("Positioned 4") ist ebenfalls wie erwartet ankerpositioniert. Im ersten Fall befinden sich die positionierten Elemente innerhalb des festgelegten Bereichs, und im zweiten Fall wird das positionierte Element nicht durch den festgelegten Bereich beeinflusst, da es einen Ankernamen außerhalb des Bereichs verwendet (`--another-anchor`). Das "Positioned 4"-Element wird relativ zum letzten Ankerelement in der Quelle positioniert, das den passenden Ankernamen hat.
- `none`: Da auf den `<section>`-Elementen kein Ankerbereich festgelegt ist, werden alle positionierten Elemente relativ zum letzten Ankerelement in der Quellreihenfolge positioniert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("anchor-name")}}
- {{cssxref("position-anchor")}}
- [CSS-Anker-Positionierungsmodul](/de/docs/Web/CSS/Guides/Anchor_positioning)
- [Leitfaden zur Verwendung der CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning/Using)
