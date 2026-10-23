---
title: "`text-decoration-inset` CSS property"
short-title: text-decoration-inset
slug: Web/CSS/Reference/Properties/text-decoration-inset
l10n:
  sourceCommit: 85577061e99da7082b48263fa19f9b1ef4187eda
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`text-decoration-inset`** ermöglicht es, den Anfangs- und Endpunkt der Textdekoration eines Elements anzupassen. So kann die Textdekoration verkürzt, verlängert oder gegenüber dem gerenderten Text verschoben werden.

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

Diese Eigenschaft wird mit einem oder zwei der folgenden Werte oder mit dem Schlüsselwort `auto` angegeben:

- {{cssxref("length-percentage")}}
  - : Gibt an, um welchen Betrag die Position der Textdekoration angepasst wird. Positive Werte rücken die Textdekoration ein (verkürzen sie), während negative Werte sie nach außen verschieben (verlängern sie). Wird ein Wert angegeben, gilt er sowohl für den Anfangs- als auch für den Endpunkt der Textdekoration. Werden zwei Werte angegeben, gilt der erste für den Anfangspunkt und der zweite für den Endpunkt. Prozentwerte beziehen sich auf die gesamte Inline-Größe der {{Glossary("decorating_box", "dekorierenden Box")}}, wenn {{cssxref("box-decoration-break")}} auf {{cssxref("box-decoration-break", "slice", "#slice")}} gesetzt ist. Ist die Eigenschaft auf {{cssxref("box-decoration-break", "clone", "#clone")}} gesetzt, beziehen sie sich auf die Inline-Größe jedes einzelnen {{Glossary("box_fragment", "Boxfragments")}}.
- `auto`
  - : Der Browser wählt einen Betrag, um den Anfangs- und Endpunkt eingerückt werden. So entsteht zwischen den Textdekorationen zweier nebeneinanderstehender dekorierter Textboxen eine Lücke, statt dass sie wie eine einzige Textdekoration aussehen.

## Beschreibung

Standardmäßig ist die Textdekoration eines Elements, die durch die Kurzschreibweise {{cssxref("text-decoration")}} und die zugehörigen einzelnen Eigenschaften festgelegt wird, genauso lang wie der gerenderte Text.

Mit der Eigenschaft `text-decoration-inset` können Sie den Anfangs- und/oder Endpunkt der Textdekoration eines Textcontainers anpassen. Das ist nützlich, wenn die Textdekoration gegenüber dem Text eingerückt, über ihn hinaus verlängert oder verschoben sein soll. Unter [Grundlegende Anwendungsfälle](#grundlegende_anwendungsfälle) finden Sie für jeden dieser Fälle ein Beispiel.

Ein einzelner `<length-percentage>`-Wert legt fest, um wie viel die Textdekoration an ihrem Anfangs- und Endpunkt eingerückt (bei einem positiven Wert) oder über den Text hinaus verlängert (bei einem negativen Wert) wird. Um die beiden Punkte getrennt festzulegen, können Sie zwei `<length-percentage>`-Werte verwenden: Der erste gilt für den Anfangspunkt der Textdekoration, der zweite für den Endpunkt.

> [!NOTE]
> Worauf sich ein Prozentwert bezieht, hängt vom Wert von {{cssxref("box-decoration-break")}} ab: Bei `slice` (dem Anfangswert) bezieht er sich auf die Inline-Größe der dekorierenden Box, bei `clone` auf die Inline-Größe jedes einzelnen Boxfragments.

Die Eigenschaft `text-decoration-inset` akzeptiert auch das Schlüsselwort `auto`. Dadurch rückt der Browser den Anfangs- und Endpunkt der Textdekoration so ein, dass die Textdekorationen zweier nebeneinanderstehender dekorierter Textboxen nicht wie eine einzige aussehen. Der Wert `auto` ist besonders wichtig bei der Darstellung chinesischen Texts: Dort werden Unterstreichungen zur [Kennzeichnung von Eigennamen](https://www.w3.org/International/clreq/#id88) verwendet, und benachbarte Eigennamen sollten getrennte Unterstreichungen erhalten. Ein Beispiel finden Sie unter [Wirkung des Werts `auto`](#effect_of_the_auto_value).

Der Wert `auto` hat nicht dieselbe Wirkung wie der Anfangswert `0`. Wenn `text-decoration-inset` auf `0` gesetzt ist, entsteht kein Abstand zwischen den Textdekorationen.

Die Eigenschaft `text-decoration-inset` wird nicht vererbt und ist kein Bestandteil der Kurzschreibweise {{cssxref("text-decoration")}}.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Anwendungsfälle

Dieses Beispiel zeigt, wie Textdekorationen verlängert, eingerückt und verschoben werden können.

#### HTML

Wir definieren eine ungeordnete Liste mit drei Listeneinträgen, die jeweils eine eigene `id` haben.

```html live-sample___use-case-examples
<ul>
  <li id="one">Outset decoration</li>
  <li id="two">Inset decoration</li>
  <li id="three">Shifted decoration</li>
</ul>
```

#### CSS

Jeder Listeneintrag erhält unterschiedliche Werte für {{cssxref("text-decoration")}} und `text-decoration-inset`:

- Der erste hat eine dicke, limettengrüne Unterstreichung, die auf beiden Seiten um jeweils `10px` verlängert wird.
- Der zweite hat eine weiße Durchstreichung mittlerer Dicke, die auf beiden Seiten um jeweils `0.5em` eingerückt wird.
- Der dritte hat eine dünne, wellenförmige blaue Unterstreichung, die um `1em` nach rechts verschoben wird.

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

Das Ergebnis sieht so aus:

{{embedlivesample("use-case-examples", "100%", "230")}}

### Wirkung des Werts `auto`

Dieses Beispiel zeigt die Wirkung des Werts `text-decoration-inset: auto`.

#### HTML

Wir definieren zwei Gruppen nebeneinanderstehender {{htmlelement("u")}}-Elemente:

```html live-sample___auto-example
<p lang="zh" id="one"><u>石井</u><u>艾俐俐</u></p>

<p lang="zh" id="two"><u>石井</u><u>艾俐俐</u></p>
```

#### CSS

Bei jedem `<u>`-Element werden die Farbe der Unterstreichung auf `red` und ihre Dicke auf `3px` gesetzt. Für die erste Gruppe von `<u>`-Elementen wird `text-decoration-inset` auf `auto` gesetzt. Bei der zweiten Gruppe wird zum Vergleich der Anfangswert `0` ausdrücklich festgelegt:

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

Das Ergebnis sieht so aus:

{{embedlivesample("auto-example", "100%", "200")}}

Beachten Sie, wie der Wert `auto` die Textdekoration auf beiden Seiten leicht einrückt. Dadurch entsteht eine Lücke zwischen den Unterstreichungen der beiden Elemente (zwischen den Elementen selbst wird kein Abstand eingefügt). Beim Wert `0` entsteht keine Lücke.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("text-decoration")}}
- Das Modul [CSS-Textdekoration](/de/docs/Web/CSS/Guides/Text_decoration)
