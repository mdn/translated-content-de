---
title: "`text-decoration-inset` CSS property"
short-title: text-decoration-inset
slug: Web/CSS/Reference/Properties/text-decoration-inset
l10n:
  sourceCommit: 3a04f324f1fb55e3c073c32d0ead28b5803a6284
---

{{SeeCompatTable}}

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`text-decoration-inset`** ermöglicht das Anpassen der Start- und Endpunkte der Textdekoration eines Elements, sodass sie verkürzt, verlängert oder ihre Position relativ zum gerenderten Text verschoben werden kann.

{{InteractiveExample("CSS Demo: text-decoration-inset")}}

```css interactive-example-choice
text-decoration-inset: 20px;
```

```css interactive-example-choice
text-decoration-inset: -0.5em;
```

```css interactive-example-choice
text-decoration-inset: 20px 1em;
```

```css interactive-example-choice
text-decoration-inset: -0.5rem -1.5rem;
```

```css interactive-example-choice
text-decoration-inset: -2ex 10vw;
```

```html interactive-example
<section id="default-example">
  <p id="example-element">Karmadrome</p>
</section>
```

```css interactive-example
#example-element {
  font: 2.5em sans-serif;
  text-decoration: underline 0.3em limegreen;
}
```

## Syntax

```css
/* auto keyword */
text-decoration-inset: auto;

/* One <length> value */
text-decoration-inset: 20px;
text-decoration-inset: -2rem;
text-decoration-inset: 5%;

/* Two <length> values */
text-decoration-inset: 20px 1em;
text-decoration-inset: -0.5rem -1.5rem;
text-decoration-inset: -2ex 1vw;
text-decoration-inset: -5% -5%;

/* Global values */
text-decoration-inset: inherit;
text-decoration-inset: initial;
text-decoration-inset: revert;
text-decoration-inset: revert-layer;
text-decoration-inset: unset;
```

### Werte

Diese Eigenschaft wird als einer oder zwei der folgenden Werte oder als Schlüsselwort `auto` angegeben:

- {{cssxref("length-percentage")}}
  - : Gibt den Betrag an, um den die Position der Textdekoration angepasst wird. Positive Werte rücken die Textdekoration ein (machen sie kürzer), während negative Werte die Textdekoration ausrücken (machen sie länger). Wenn ein Wert angegeben wird, gilt er sowohl für den Start- als auch für den Endpunkt der Textdekoration. Wenn zwei Werte angegeben werden, gilt der erste für den Startpunkt der Textdekoration und der zweite für den Endpunkt der Textdekoration. Prozentwerte beziehen sich entweder auf die gesamte Inline-Größe der {{Glossary("decorating_box", "dekorierenden Box")}}, wenn {{cssxref("box-decoration-break")}} auf {{cssxref("box-decoration-break", "slice", "#slice")}} gesetzt ist, oder auf die Inline-Größe jedes einzelnen {{Glossary("box_fragment", "Box-Fragments")}}, wenn es auf {{cssxref("box-decoration-break", "clone", "#clone")}} gesetzt ist.
- `auto`
  - : Der Browser wählt einen Einrückungsbetrag für Start und Ende, um sicherzustellen, dass bei zwei nebeneinander erscheinenden dekorierten Textboxen zwischen ihren Textdekorationen der Eindruck einer Lücke entsteht, sodass sie nicht wie eine einzelne Textdekoration wirken.

## Beschreibung

Standardmäßig hat die Textdekoration eines Elements, wie sie durch die Kurzform {{cssxref("text-decoration")}} und die zugehörigen Longhand-Eigenschaften festgelegt wird, dieselbe Größe wie der gerenderte Text.

Mit der Eigenschaft `text-decoration-inset` können Sie die Start- und/oder Endpunkte der Textdekoration eines Textcontainers anpassen. Dies ist nützlich, um Effekte zu erzeugen, bei denen die Textdekoration gegenüber dem Text selbst eingerückt oder ausgerückt oder in ihrer Position verschoben sein soll. Ein Beispiel für jeden Fall finden Sie unter [Grundlegende Anwendungsfälle](#grundlegende_anwendungsfälle).

Ein einzelner `<length-percentage>`-Wert legt die Einrückung (bei positiven Werten) oder Ausrückung (bei negativen Werten) an der Start- und Endposition der Textdekoration fest. Um die Start- und Endposition separat festzulegen, können Sie zwei `<length-percentage>`-Werte verwenden — der erste gilt für die Startposition der Textdekoration und der zweite für die Endposition.

> [!NOTE]
> Ein Prozentwert hängt vom Wert von {{cssxref("box-decoration-break")}} ab: Wenn dieser auf `slice` (den Anfangswert) gesetzt ist, bezieht er sich auf die Inline-Größe der dekorierenden Box; wenn er auf `clone` gesetzt ist, bezieht er sich auf jedes einzelne Box-Fragment.

Die Eigenschaft `text-decoration-inset` kann auch das Schlüsselwort `auto` annehmen. Dadurch rückt der Browser die Start- und Endpunkte der Textdekoration ein, um sicherzustellen, dass zwei nebeneinander erscheinende dekorierte Textboxen nicht wie eine einzelne Textdekoration wirken. Der Wert `auto` ist besonders beim Rendern chinesischen Textes wichtig, bei dem Unterstreichungen verwendet werden, um [Eigennamen zu kennzeichnen](https://www.w3.org/International/clreq/#id88), und bei dem benachbarte Eigennamen separate Unterstreichungen haben sollten. Ein Beispiel finden Sie unter [Wirkung des Werts `auto`](#effect_of_the_auto_value).

Der Wert `auto` hat nicht dieselbe Wirkung wie der Anfangswert `0`. Wenn `text-decoration-inset` auf `0` gesetzt wird, entsteht kein Abstand zwischen Dekorationen.

Die Eigenschaft `text-decoration-inset` wird nicht vererbt und ist keine Bestandteil-Eigenschaft der Kurzform {{cssxref("text-decoration")}}.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Anwendungsfälle

In diesem Beispiel demonstrieren wir die Anwendungsfälle Ausrückung, Einrückung und „Verschiebung“.

#### HTML

Wir definieren eine ungeordnete Liste mit drei Listenelementen, die jeweils eine eigene `id` haben.

```html live-sample___use-case-examples
<ul>
  <li id="one">Outset decoration</li>
  <li id="two">Inset decoration</li>
  <li id="three">Shifted decoration</li>
</ul>
```

#### CSS

Wir geben jedem Listenelement eine andere {{cssxref("text-decoration")}} und ein anderes `text-decoration-inset`:

- Das erste hat eine dicke lindgrüne Unterstreichung, die auf beiden Seiten gleichmäßig um `10px` ausgerückt ist.
- Das zweite hat eine mittelstarke weiße Durchstreichung, die auf beiden Seiten gleichmäßig um `0.5em` eingerückt ist.
- Das dritte hat eine dünne wellige blaue Unterstreichung, die um `1em` nach rechts verschoben ist.

```css hidden live-sample___use-case-examples
li {
  font-family: sans-serif;
  font-size: 2em;
  margin-bottom: 20px;
}

@supports not (text-decoration-inset: auto) {
  body::before {
    content: "Your browser doesn't support the text-decoration-inset property.";
    background-color: wheat;
    display: block;
    text-align: center;
    padding: 1rem 0;
  }
}
```

```css live-sample___use-case-examples
#one {
  text-decoration: underline 0.3em limegreen;
  text-decoration-inset: -10px;
}

#two {
  text-decoration: line-through 5px white;
  text-decoration-inset: 0.5em;
}

#three {
  text-decoration: underline wavy 2px blue;
  text-decoration-inset: 1em -1em;
}
```

#### Ergebnis

Dies wird wie folgt gerendert:

{{embedlivesample("use-case-examples", "100%", "230")}}

### Wirkung des Werts `auto`

Dieses Beispiel demonstriert die Wirkung des Werts `text-decoration-inset: auto`.

#### HTML

Wir definieren zwei Gruppen nebeneinanderstehender {{htmlelement("u")}}-Elemente:

```html live-sample___auto-example
<p lang="zh" id="one"><u>石井</u><u>艾俐俐</u></p>

<p lang="zh" id="two"><u>石井</u><u>艾俐俐</u></p>
```

#### CSS

Jedes `<u>`-Element hat für seine Unterstreichung eine Farbe von `red` und eine Stärke von `3px` festgelegt. Für die erste Gruppe von `<u>`-Elementen ist `text-decoration-inset` auf `auto` gesetzt, während für die zweite Gruppe zu Vergleichszwecken der Anfangswert `0` von `text-decoration-inset` explizit festgelegt ist:

```css hidden live-sample___auto-example
u {
  font-family: sans-serif;
  font-size: 2em;
}

@supports not (text-decoration-inset: auto) {
  body::before {
    content: "Your browser doesn't support the text-decoration-inset property.";
    background-color: wheat;
    display: block;
    text-align: center;
    padding: 1rem 0;
  }
}
```

```css live-sample___auto-example
u {
  text-decoration-color: red;
  text-decoration-thickness: 3px;
}

#one u {
  text-decoration-inset: auto;
}

#two u {
  text-decoration-inset: 0;
}
```

#### Ergebnis

Dies wird wie folgt gerendert:

{{embedlivesample("auto-example", "100%", "200")}}

Beachten Sie, wie der Wert `auto` die Textdekoration auf beiden Seiten leicht einrückt und dadurch eine Lücke zwischen den Unterstreichungen der beiden Elemente erzeugt (zwischen den beiden Elementen selbst wird kein Abstand hinzugefügt). Der Wert `0` führt zu keiner Lücke.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("text-decoration")}}
- Das Modul [CSS text decoration](/de/docs/Web/CSS/Guides/Text_decoration)
