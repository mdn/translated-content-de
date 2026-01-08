---
title: anchor-scope
slug: Web/CSS/Reference/Properties/anchor-scope
l10n:
  sourceCommit: f8ef875113a7d3e9952f41de68be1e3a3a1e6988
---

Die **`anchor-scope`**-[CSS](/de/docs/Web/CSS)-Eigenschaft kann verwendet werden, um den Bereich zu begrenzen, in dem ein positioniertes Element mit Ankerelementen in einem bestimmten Teilbaum verknüpft werden kann.

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
  - : Es findet keine Begrenzung des Ankerbereichs auf ein Element statt. Dies ist der Standardwert.
- `all`
  - : Legt den Bereich fest, sodass _alle_ `anchor-name`-Werte, die im Teilbaum festgelegt sind, nur von positionierten Elementen im gleichen Teilbaum gebunden werden können.
- {{cssxref("dashed-ident", "&lt;dashed-ident&gt;#")}}
  - : Ein oder mehrere durch Kommas getrennte {{cssxref("dashed-ident")}}, die Ankernamen darstellen. Legt den Bereich so fest, dass die angegebenen `anchor-name`-Werte, wenn sie im Teilbaum festgelegt sind, nur von positionierten Elementen im selben Teilbaum gebunden werden können.

## Beschreibung

Wenn mehrere [Ankerelemente](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#associating_anchor_and_positioned_elements) auf einer Seite denselben {{cssxref("anchor-name")}}-Wert erhalten und ein positioniertes Element mit diesem Ankernamen verknüpft ist (indem der Name als sein {{cssxref("position-anchor")}}-Eigenschaftswert angegeben wird), wird das positionierte Element mit dem _letzten_ Ankerelement in der Quellreihenfolge mit diesem Ankernamen verknüpft.

Dies kann in bestimmten Situationen problematisch sein. Zum Beispiel, wenn ein Dokument mehrere wiederholte Komponenten enthält, jede mit einem positionierten Element, das an einem Anker befestigt ist, werden alle positionierten Elemente an den letzten Anker auf der Seite verankert, es sei denn, jede Komponente verwendet einen anderen Ankernamen. Dies ist wahrscheinlich nicht das gewünschte Verhalten.

Die `anchor-scope`-Eigenschaft kann dieses Problem beheben, indem sie die Sichtbarkeit oder den "Bereich" eines `anchor-name`-Wertes auf einen bestimmten Teilbaum beschränkt. Das Ergebnis ist, dass jedes positionierte Element nur an ein Element innerhalb desselben Teilbaums verankert werden kann, in dem das Element sitzt, das den Bereich gesetzt hat.

- `anchor-scope: all` legt den Bereich so fest, dass _alle_ `anchor-name`-Werte, die im Teilbaum festgelegt sind, nur von positionierten Elementen im selben Teilbaum gebunden werden können. Nehmen wir an, wir fügen mehrere Anker in ein Dokument ein, alle mit `anchor-name: --my-anchor` versehen, und platzieren sie in separaten Containern. Dann setzen wir `anchor-scope: all` auf jeden Container. Wenn wir dann ein positioniertes Element in einen dieser Container einfügen und es mit `--my-anchor` als den Wert seiner `position-anchor`-Eigenschaft versehen, wird es relativ zum Anker innerhalb desselben Containers positioniert.

  Darüber hinaus, wenn wir ein weiteres positioniertes Element außerhalb der Container erstellen und ihm denselben Ankernamen oder einen anderen Ankernamen geben, wird es nicht relativ zu einem der Anker positioniert, unabhängig davon, ob die Anker diese Ankernamen in ihren `anchor-name`-Werten enthalten. `anchor-scope: all` beschränkt den Ankerbereich für Container, auf denen es gesetzt ist, auf _alle_ Anker, unabhängig von `anchor-name`, nur auf positionierte Elemente innerhalb derselben Container.

- `anchor-scope: <dashed-ident>#` legt den Bereich so fest, dass die angegebenen `anchor-name`-Werte, wenn sie im Teilbaum festgelegt sind, nur von positionierten Elementen im selben Teilbaum gebunden werden können. Wenn wir zum selben Beispiel wie im vorherigen Punkt beschrieben zurückkehren, aber den Wert von `anchor-scope` auf den Containern zu `--my-anchor` ändern:
  - Positionierte Elemente mit `position-anchor: --my-anchor` sind auf den Bereich beschränkt, der durch die `anchor-scope`-Einstellung auferlegt wird. Sie werden nur relativ zu den Ankern positioniert, wenn sie innerhalb der Container platziert sind.
  - Positionierte Elemente mit verschiedenen `position-anchor`-Namen – zum Beispiel `--another-anchor` – _können_ relativ zu einem der Anker positioniert werden, unabhängig davon, ob sie innerhalb oder außerhalb der Container platziert sind, vorausgesetzt, Sie fügen den `--another-anchor` Ankernamen zur `anchor-name`-Eigenschaft des Ankers hinzu. Die `anchor-scope`-Eigenschaft begrenzt nur den Bereich für den `--my-anchor`-Ankernamen, sodass sie keine Wirkung auf andere Ankernamen hat.

    Wenn mehreren Ankern der Ankername `--another-anchor` zugewiesen wird, werden die positionierten Elemente mit diesem `position-anchor`-Wert relativ zum letzten Anker in der Quellreihenfolge mit diesem Namen positioniert.

- `anchor-scope: none` ist der Standardwert und gibt an, dass kein Ankerbereich gesetzt ist. Wenn mehrere Anker in einem Dokument mit demselben `anchor-name` existieren und einem positionierten Element dieser Name als der Wert seiner `position-anchor`-Eigenschaft gegeben wird, wird es relativ zum letzten Ankerelement in der Quellreihenfolge positioniert, unabhängig davon, wo es sich in der DOM-Hierarchie befindet.

Wenn Sie beispielsweise drei `anchor-name`-Werte innerhalb eines Teilbaums festlegen (etwa `--anchor1`, `--anchor2` und `--anchor3`), entspricht das Setzen von `anchor-scope: --anchor1, --anchor2, --anchor3` auf dem obersten Element des Teilbaums dem Setzen von `anchor-scope: all`.

Ankerbereiche betreffen nur [explizite Ankerassoziationen](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#explicit_css_anchor_association), das sind diejenigen, die zwischen einem Ankerelement mit einem gesetzten `anchor-name` und einem positionierten Element gemacht werden, das den Ankernamen des Ankerelements in seinem `position-anchor`-Wert referenziert. Ankerbereiche betreffen nicht [implizite Ankerassoziationen](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#implicit_anchor_association).

Für weitere Informationen zu Ankerfunktionen und -verwendung siehe das [CSS-Ankerpositionierungs](/de/docs/Web/CSS/Guides/Anchor_positioning)-Modul und den [Leitfaden zur Verwendung der CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning/Using).

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt, wie Ankerbereich auf einem grundlegenden Niveau funktioniert. Es zeigt, wie ein Ankerelement innerhalb eines Bereichscontainers auf das Verknüpfen mit nur positionierten Elementen innerhalb desselben Bereichscontainers beschränkt werden kann.

#### HTML

Wir spezifizieren ein {{htmlelement("section")}}-Element, auf dem wir einen Ankerbereich setzen werden. Dieses enthält zwei {{htmlelement("div")}}-Elemente, eines, das in einen Anker umgewandelt werden soll, und eines, das ein ankerpositioniertes Element sein soll.

Wir fügen auch ein drittes `<div>` außerhalb der `<section>` hinzu, das wir ebenfalls in ein ankerpositioniertes Element umwandeln werden.

```html live-sample___basic-usage
<section class="scoped">
  <div class="anchor">⚓︎</div>
  <div class="positioned">Positioned 1</div>
</section>

<div class="positioned">Positioned 2</div>
```

#### CSS

Wir setzen zunächst `anchor-scope: --my-anchor` auf die `<section>`. Dies begrenzt ihren Bereich so, dass Ankerelementnachkommen der `<section>` mit dem Namen `--my-anchor` nur von positionierten Elementen gebunden werden können, die ebenfalls Nachkommen der `<section>` sind.

Um dies zu testen, deklarieren wir das `anchor`-`<div>` als Ankerelement, indem wir ihm einen {{cssxref("anchor-name")}} von `--my-anchor` zuweisen. Wir positionieren dann die `.positioned`-Elemente absolut, verbinden sie mit dem Anker, indem wir ihre {{cssxref("position-anchor")}}-Werte auf `--my-anchor` setzen, und positionieren sie rechts vom Anker, indem wir ihre {{cssxref("position-area")}}-Werte auf `right` setzen:

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

Das Beispiel rendert wie folgt:

{{ EmbedLiveSample("basic_usage", "100%", "225") }}

Beachten Sie, wie das erste positionierte Element rechts vom Anker positioniert ist. Es liegt im Bereich für die Positionierung relativ zum `--my-anchor` Anker, da es sich innerhalb des `<section>`-Elements befindet, auf dem das `anchor-scope: --my-anchor` gesetzt ist.

Andererseits wird das zweite positionierte Element nicht relativ zum Anker positioniert. Es ist kein Nachfolger des `<section>`-Elements, also liegt es außerhalb des Ankerbereichs.

### Vergleich verschiedener `anchor-scope`-Werte

Dieses Beispiel zeigt die Effekte der verschiedenen `anchor-scope`-Werte, indem es Ihnen ermöglicht, verschiedene `anchor-scope`-Werte auf mehrere Container anzuwenden, die alle Anker mit demselben `anchor-name`-Wert enthalten.

#### HTML

Wir spezifizieren drei {{htmlelement("section")}}-Elemente, auf denen wir einen Ankerbereich setzen werden. Jedes `<section>` enthält zwei {{htmlelement("div")}}-Elemente, eines, das in einen Anker umgewandelt werden soll, und eines, das ein ankerpositioniertes Element sein soll.

Wir fügen auch ein zusätzliches `<div>` außerhalb der `<section>`-Elemente hinzu, das wir ebenfalls in ein ankerpositioniertes Element umwandeln werden. Dies wird andere Ankerpositionierungseinstellungen als die anderen haben.

Schließlich fügen wir ein {{htmlelement("form")}} mit drei verschiedenen [`<input type="radio">`](/de/docs/Web/HTML/Reference/Elements/input/radio)-Elementen hinzu, um verschiedene `anchor-scope`-Werte auf die `<section>`-Elemente zu setzen.

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

Anschließend positionieren wir unsere `.positioned`-Elemente relativ zu einem Ankerelement. Wir positionieren sie absolut, geben ihnen einen {{cssxref("position-anchor")}}-Wert von `--my-anchor`, um sie mit einem Anker zu assoziieren, und positionieren sie relativ zum Anker mit einem {{cssxref("position-area")}}-Wert von `right`.

Das `.positioned2`-Element wird auf ähnliche Weise positioniert, außer dass ihm der andere verfügbare Ankername als `position-anchor`-Wert – `--another-anchor` – zugewiesen wird und es stattdessen `unten` vom Anker positioniert wird. Wir geben ihm auch einen {{cssxref("bottom")}}-Wert von `5px`, sodass es, wenn die Ankerpositionierung nicht funktioniert, am unteren Rand des `<body>` positioniert wird. Dieses Element befindet sich in keinem Bereichselement, daher wird es nur dann Anker positioniert, wenn bestimmte `anchor-scope`-Werte auf die Bereichselemente gesetzt sind, wie später erklärt wird.

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

Wir steuern das Setzen von `anchor-scope` auf den `<section>`-Elementen, wenn verschiedene Radio-Buttons gedrückt werden, mit JavaScript, das aus Gründen der Kürze ausgeblendet wurde.

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

Überprüfen Sie den anfänglichen Positionierungseffekt, der auf die positionierten Elemente mit `anchor-scope: all` auf den `<section>`-Elementen angewendet wird, und versuchen Sie dann, die anderen verfügbaren `anchor-scope`-Werte auszuwählen, um zu sehen, was ihre Wirkung ist. Sie sollten folgendes beobachten:

- `all`: Der Bereich für die Positionierung von Elementen relativ zu Ankerelementen, die Nachkommen der `<section>`-Elemente sind, ist auf positionierte Elemente beschränkt, die selbst Nachkommen der `<section>`-Elemente sind, unabhängig vom `anchor-name`-Wert, der zur Assoziation verwendet wird. Daher werden die positionierten Elemente innerhalb der `<section>`-Elemente ("Positioned 1–3") wie erwartet ankerpositioniert, aber das positionierte Element außerhalb der `<section>`-Elemente ("Positioned 4") wird nicht ankerpositioniert. Es liegt außerhalb des Bereiches.
- `--my-anchor`: Der Bereich für die Positionierung von Elementen relativ zu Ankerelementen, die Nachkommen der `<section>`-Elemente sind, ist auf positionierte Elemente beschränkt, die selbst Nachkommen der `<section>`-Elemente sind, nur wenn der `--my-anchor`-`anchor-name` zur Assoziation verwendet wird. Daher werden die positionierten Elemente innerhalb der `<section>`-Elemente ("Positioned 1–3") wie erwartet ankerpositioniert, und das positionierte Element außerhalb der `<section>`-Elemente ("Positioned 4") wird ebenfalls wie erwartet ankerpositioniert. Im ersteren Fall befinden sich die positionierten Elemente innerhalb des festgelegten Bereichs, und im letzteren Fall wird das positionierte Element nicht vom festgelegten Bereich betroffen, da es einen Ankernamen außerhalb des Bereichs verwendet (`--another-anchor`). Das "Positioned 4"-Element wird relativ zum letzten Ankerelement in der Quelle positioniert, das den passenden Ankernamen hat.
- `none`: Da kein Ankerbereich auf den `<section>`-Elementen gesetzt ist, werden alle positionierten Elemente relativ zum letzten Ankerelement in der Quellreihenfolge positioniert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("anchor-name")}}
- {{cssxref("position-anchor")}}
- [CSS-Ankerpositionierungs](/de/docs/Web/CSS/Guides/Anchor_positioning) Modul
- [Verwendung von CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning/Using) Leitfaden
