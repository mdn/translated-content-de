---
title: anchor-scope
slug: Web/CSS/Reference/Properties/anchor-scope
l10n:
  sourceCommit: 8300697ca75ca1e77175912110d4fe9ef48cb0bb
---

Die **`anchor-scope`** [CSS](/de/docs/Web/CSS) Eigenschaft kann verwendet werden, um den Bereich zu begrenzen, in dem ein positioniertes Element mit Ankerelementen auf einen bestimmten Unterbaum assoziiert werden kann.

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
  - : Kein Begrenzung der Anker-Bereich auf ein Element. Dies ist der Standardwert.
- `all`
  - : Legt den Bereich so fest, dass _alle_ `anchor-name`-Werte, die im Unterbaum gesetzt sind, nur von positionierten Elementen im gleichen Unterbaum gebunden werden können.
- {{cssxref("dashed-ident")}}#
  - : Einer oder mehrere komma-getrennte {{cssxref("dashed-ident")}}s, die Ankernamen darstellen. Legt den Bereich so fest, dass die angegebenen `anchor-name`-Werte, wenn sie im Unterbaum gesetzt sind, nur von positionierten Elementen im gleichen Unterbaum gebunden werden können.

## Beschreibung

Wenn mehrere [Ankerelemente](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#associating_anchor_and_positioned_elements) auf einer Seite denselben {{cssxref("anchor-name")}} Wert haben und ein positioniertes Element mit diesem Ankernamen (indem der Name als sein {{cssxref("position-anchor")}} Eigenschaftswert angegeben wird) assoziiert ist, wird das positionierte Element mit dem _letzten_ Ankerelement in der Quellreihenfolge mit diesem Ankernamen assoziiert.

Dies kann in bestimmten Situationen problematisch sein. Zum Beispiel, wenn ein Dokument mehrere wiederholte Komponenten enthält, jede mit einem positionierten Element, das an einen Anker gebunden ist, werden alle positionierten Elemente an den letzten Anker auf der Seite gebunden, es sei denn, jede Komponente verwendet einen anderen Ankernamen. Dies ist wahrscheinlich nicht das gewünschte Verhalten.

Die `anchor-scope` Eigenschaft kann dieses Problem beheben, indem die Sichtbarkeit oder der "Bereich" eines `anchor-name` Wertes auf einen spezifischen Unterbaum begrenzt wird. Das Ergebnis ist, dass jedes positionierte Element nur an ein Element innerhalb desselben Unterbaums des Elements, bei dem der Bereich eingestellt ist, verankert werden kann.

- `anchor-scope: all` legt den Bereich so fest, dass _alle_ `anchor-name` Werte, die im Unterbaum gesetzt sind, nur von positionierten Elementen im gleichen Unterbaum gebunden werden können. Nehmen wir an, wir platzieren mehrere Anker in einem Dokument, alle mit `anchor-name: --my-anchor` auf ihnen gesetzt und platzieren sie in separaten Containern. Dann setzen wir `anchor-scope: all` auf jedem Container. Wenn wir dann ein positioniertes Element in einem der Container inkludieren und ihm `--my-anchor` als den Wert seiner `position-anchor` Eigenschaft geben, wird es relativ zum Anker innerhalb desselben Containers positioniert.

  Wenn wir zudem ein weiteres positioniertes Element außerhalb der Container erstellen und ihm denselben Ankernamen oder einen anderen Ankernamen geben, wird es nicht relativ zu einem der Anker verankert, unabhängig davon, ob die Anker diese Ankernamen in ihren `anchor-name` Werten enthalten. `anchor-scope: all` begrenzt den Ankerbereich für Container, auf denen es eingestellt ist, für _alle_ Anker, unabhängig von `anchor-name`, nur auf positionierte Elemente innerhalb derselben Container.

- `anchor-scope: <dashed-ident>#` legt den Bereich so fest, dass die angegebenen `anchor-name` Werte, wenn sie im Unterbaum gesetzt sind, nur von positionierten Elementen im gleichen Unterbaum gebunden werden können. Wenn wir zu dem im vorherigen Punkt beschriebenen Beispiel zurückkehren, aber den `anchor-scope` Wert auf den Containern auf `--my-anchor` ändern:
  - Positionierte Elemente mit `position-anchor: --my-anchor` darauf können nur innerhalb des vom `anchor-scope` Wert auferlegten Bereichs positioniert werden. Sie werden nur relativ zu den Ankern positioniert, wenn sie innerhalb der Container platziert sind.
  - Positionierte Elemente mit unterschiedlichen `position-anchor` Namen — zum Beispiel `--another-anchor` — _können_ relativ zu einem der Anker positioniert werden, egal ob sie innerhalb oder außerhalb der Container platziert sind, vorausgesetzt, Sie fügen den `--another-anchor` Ankernamen zur `anchor-name` Eigenschaft des Ankers hinzu. Die `anchor-scope` Eigenschaft begrenzt nur den Bereich für den `--my-anchor` Ankernamen, also hat sie keinen Effekt auf andere Ankernamen.

    Wenn mehreren Ankern der `--another-anchor` Ankernamen gegeben wird, werden die positionierten Elemente mit diesem `position-anchor` Wert relativ zum letzten Anker in der Quellreihenfolge mit diesem Namen positioniert.

- `anchor-scope: none` ist der Standardwert, der angibt, dass kein Ankerbereich gesetzt ist. Wenn mehrere Anker mit demselben `anchor-name` in einem Dokument existieren und ein positioniertes Element diesen Namen als den Wert seiner `position-anchor` Eigenschaft erhält, wird es relativ zum letzten Ankerelement in der Quellreihenfolge positioniert, unabhängig davon, wo es in der DOM-Hierarchie platziert ist.

Wenn Sie beispielsweise drei `anchor-name` Werte innerhalb eines Unterbaums gesetzt haben (etwa `--anchor1`, `--anchor2` und `--anchor3`), würde das Setzen von `anchor-scope: --anchor1, --anchor2, --anchor3` auf dem obersten Element des Unterbaums dem Setzen von `anchor-scope: all` entsprechen.

Ankerbereiche betreffen nur [explizite Ankerassoziationen](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#explicit_css_anchor_association), das heißt, solche, die zwischen einem Ankerelement mit einem `anchor-name` darauf und einem positionierten Element, das den Ankernamen des Ankerelements in seinem `position-anchor` Wert referenziert, gemacht werden. Ankerbereiche betreffen keine [impliziten Ankerassoziationen](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#implicit_anchor_association).

Für weitere Informationen zu den Ankerfunktionen und deren Nutzung, siehe das [CSS Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) Modul und den [Verwendung von CSS Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning/Using) Leitfaden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel demonstriert, wie der Ankerbereich auf einer grundlegenden Ebene funktioniert. Es zeigt, wie ein Ankerelement innerhalb eines Bereichscontainers zu einem Bereich eingeschränkt werden kann, in dem nur positionierte Elemente innerhalb desselben Bereichscontainers daran gebunden werden können.

#### HTML

Wir geben ein {{htmlelement("section")}} Element an, auf das wir einen Ankerbereich einstellen werden. Dies enthält zwei {{htmlelement("div")}} Elemente, eines, das zu einem Anker gemacht wird, und eines, das ein anker-positioniertes Element sein wird.

Wir fügen auch ein drittes `<div>` außerhalb der `<section>` ein, welches wir auch zu einem anker-positioniertem Element machen werden.

```html live-sample___basic-usage
<section class="scoped">
  <div class="anchor">⚓︎</div>
  <div class="positioned">Positioned 1</div>
</section>

<div class="positioned">Positioned 2</div>
```

#### CSS

Zuerst setzen wir `anchor-scope: --my-anchor` auf die `<section>`. Dies begrenzt den Bereich so, dass Ankerelement-Nachfahren der `<section>` mit einem Namen von `--my-anchor` nur an positionierte Elemente gebunden werden können, die ebenfalls Nachfahren der `<section>` sind.

Um dies zu testen, erklären wir das `anchor` `<div>` als ein Ankerelement, indem wir ihm einen {{cssxref("anchor-name")}} von `--my-anchor` geben. Wir positionieren dann die `.positioned` Elemente absolut, binden sie an den Anker, indem wir ihren {{cssxref("position-anchor")}} Wert auf `--my-anchor` setzen, und positionieren sie rechts vom Anker, indem wir ihren {{cssxref("position-area")}} Wert auf `right` setzen:

```css hidden live-sample___basic-usage
.scoped {
  padding: 20px;
  background: #eee;
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

Das Beispiel rendert wie folgt:

{{ EmbedLiveSample("basic_usage", "100%", "225") }}

Beachten Sie, wie das erste positionierte Element rechts vom Anker positioniert ist. Es liegt im Bereich für die Positionierung relativ zum `--my-anchor` Anker, da es innerhalb des `<section>` Elements liegt, wo `anchor-scope: --my-anchor` gesetzt ist.

Das zweite positionierte Element hingegen ist nicht relativ zum Anker positioniert. Es ist kein Nachfahre des `<section>` Elements, daher liegt es außerhalb des Ankerbereichs.

### Vergleich verschiedener `anchor-scope` Werte

Dieses Beispiel zeigt die Auswirkungen der verschiedenen `anchor-scope` Werte, indem es Ihnen ermöglicht, unterschiedliche `anchor-scope` Werte auf mehrere Container anzuwenden, die alle Anker mit demselben `anchor-name` Wert enthalten.

#### HTML

Wir spezifizieren drei {{htmlelement("section")}} Elemente, auf die wir einen Ankerbereich einstellen werden. Jedes `<section>` enthält zwei {{htmlelement("div")}} Elemente, eines, das zu einem Anker gemacht wird, und eines, das ein anker-positioniertes Element sein wird.

Wir fügen auch ein zusätzliches `<div>` außerhalb der `<section>` Elemente ein, welches wir auch zu einem anker-positionierten Element machen werden. Dieses wird unterschiedliche Ankerpositionierungseinstellungen als die anderen haben.

Schließlich fügen wir ein {{htmlelement("form")}} hinzu, das drei verschiedene [`<input type="radio">`](/de/docs/Web/HTML/Reference/Elements/input/radio) Elemente enthält, um unterschiedliche `anchor-scope` Werte auf die `<section>` Elemente anzuwenden.

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
    <input type="radio" id="--my-anchor" name="scope" value="--my-anchor" />
    <label for="--my-anchor"><code>--my-anchor</code></label>
    <input type="radio" id="none" name="scope" value="none" />
    <label for="none"><code>none</code></label>
  </fieldset>
</form>
```

#### CSS

Wir beginnen, indem wir unsere Ankerelemente als Anker spezifizieren, indem wir ihnen zwei {{cssxref("anchor-name")}} Werte geben: `--my-anchor` und `--another-anchor`.

```css hidden live-sample___comparing-values
body {
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-top: 5px;
}

.scoped {
  padding: 20px;
  background: #eee;
  border: 2px solid #ddd;
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
  box-shadow: 3px 3px 3px rgba(0 0 0 / 0.2);
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

Als nächstes positionieren wir unsere `.positioned` Elemente relativ zu einem Ankerelement. Wir positionieren sie absolut, geben ihnen einen {{cssxref("position-anchor")}} Wert von `--my-anchor`, um sie mit einem Anker zu assoziieren, und positionieren sie relativ zum Anker mit einem {{cssxref("position-area")}} Wert von `right`.

Das `.positioned2` Element wird auf ähnliche Weise positioniert, außer dass ihm der andere verfügbare Ankername als sein `position-anchor` Wert — `--another-anchor` — gegeben wird und es stattdessen am `bottom` des Ankers positioniert wird. Wir geben ihm auch einen {{cssxref("bottom")}} Wert von `5px`, sodass, wenn die Ankerpositionierung nicht funktioniert, es am unteren Ende des `<body>` positioniert wird. Dieses Element befindet sich in keinem Bereichs-Container, daher wird es nur anker-positioniert, wenn bestimmte `anchor-scope` Werte auf die Bereichs-Elemente gesetzt werden, wie später erklärt.

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

Wir handhaben das Setzen von `anchor-scope` auf die `<section>` Elemente, wenn verschiedene Radio-Buttons gedrückt werden, mit JavaScript, das aus Gründen der Kürze ausgeblendet wurde.

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

Das Beispiel rendert wie folgt:

{{ EmbedLiveSample("comparing-values", "100%", "225") }}

Beachten Sie den anfänglichen Positionierungseffekt, der auf die positionierten Elemente mit `anchor-scope: all` auf den `<section>` Elementen angewandt wird, und versuchen Sie dann, die anderen verfügbaren `anchor-scope` Werte auszuwählen, um zu sehen, welche Wirkung sie haben. Sie sollten Folgendes beobachten:

- `all`: Der Bereich für die Positionierung von Elementen relativ zu Ankerelementen, die Nachfahren der `<section>` Elemente sind, ist auf positionierte Elemente beschränkt, die selbst Nachfahren der `<section>` Elemente sind, unabhängig von dem `anchor-name` Wert, der zur Assoziation verwendet wird. Infolgedessen sind die positionierten Elemente innerhalb der `<section>` Elemente ("Positioned 1–3") wie erwartet anker-positioniert, aber das positionierte Element außerhalb der `<section>` Elemente ("Positioned 4") ist nicht anker-positioniert. Es befindet sich außerhalb des Bereichs.
- `--my-anchor`: Der Bereich für die Positionierung von Elementen relativ zu Ankerelementen, die Nachfahren der `<section>` Elemente sind, ist nur für positionierte Elemente beschränkt, die selbst Nachfahren der `<section>` Elemente sind, wenn der `--my-anchor` `anchor-name` zur Assoziation verwendet wird. Infolgedessen sind die positionierten Elemente innerhalb der `<section>` Elemente ("Positioned 1–3") wie erwartet anker-positioniert, und das positionierte Element außerhalb der `<section>` Elemente ("Positioned 4") ist ebenfalls wie erwartet anker-positioniert. Im ersten Fall befinden sich die positionierten Elemente innerhalb des gesetzten Bereichs, und im letzteren Fall wird das positionierte Element nicht von dem gesetzten Bereich beeinflusst, da es einen Ankernamen außerhalb des Bereichs verwendet (`--another-anchor`). Das "Positioned 4" Element ist relativ zum letzten Ankerelement in der Quelle mit dem passenden Ankernamen positioniert.
- `none`: Da kein Ankerbereich auf den `<section>` Elementen gesetzt ist, werden alle positionierten Elemente relativ zum letzten Ankerelement in der Quellreihenfolge positioniert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("anchor-name")}}
- {{cssxref("position-anchor")}}
- [CSS Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) Modul
- [Verwendung von CSS Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning/Using) Leitfaden
