---
title: "`text-decoration-inset` CSS property"
short-title: text-decoration-inset
slug: Web/CSS/Reference/Properties/text-decoration-inset
l10n:
  sourceCommit: a8b7faffbd3fdeae5c0be97793d963d8a31cd1cf
---

{{SeeCompatTable}}

Die **`text-decoration-inset`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es, die Anfangs- und Endpunkte der Textdekoration eines Elements anzupassen, sodass sie verkürzt, verlängert oder ihre Position relativ zum gerenderten Text verschoben werden können.

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

/* Two <length> values */
text-decoration-inset: 20px 1em;
text-decoration-inset: -0.5rem -1.5rem;
text-decoration-inset: -2ex 1vw;

/* Global values */
text-decoration-inset: inherit;
text-decoration-inset: initial;
text-decoration-inset: revert;
text-decoration-inset: revert-layer;
text-decoration-inset: unset;
```

### Werte

Ein oder zwei {{cssxref("&lt;length>")}} Werte, oder das Schlüsselwort `auto`.

- {{cssxref("&lt;length>")}}
  - : Gibt die Menge an, um die die Position der Textdekoration angepasst wird. Positive Werte rücken die Textdekoration ein (verkürzen sie), während negative Werte die Textdekoration ausrücken (verlängern sie). Wenn ein Wert angegeben ist, gilt er sowohl für den Anfangs- als auch den Endpunkt der Textdekoration. Wenn zwei Werte angegeben werden, gilt der erste für den Anfangspunkt der Textdekoration und der zweite für den Endpunkt.
- `auto`
  - : Der Browser wählt eine Einrückung für Anfang und Ende, um sicherzustellen, dass, wenn zwei dekorierte Textboxen nebeneinander erscheinen, ein Abstand zwischen ihren Textdekorationen entsteht, sodass sie nicht wie eine einzelne Textdekoration erscheinen.

## Beschreibung

Standardmäßig ist die Textdekoration eines Elements, wie durch die {{cssxref("text-decoration")}} Kurzform und die entsprechenden Langform-Eigenschaften festgelegt, gleich groß wie der gerenderte Text.

Die `text-decoration-inset` Eigenschaft ermöglicht es Ihnen, die Anfangs- und/oder Endpunkte der Textdekoration eines Textcontainers anzupassen. Dies ist nützlich, um Effekte zu erstellen, bei denen die Textdekoration in den Text selbst eingerückt oder ausgerückt oder in ihrer Position verschoben werden soll. Siehe [Grundlegende Anwendungsfälle](#grundlegende_anwendungsfälle) für ein Beispiel für jede Möglichkeit.

Ein einzelner `<length>` Wert setzt die Einrückung (wenn positiv) oder Ausrückung (wenn negativ) an den Anfangs- und Endpositionen der Textdekoration. Um die Anfangs- und Endpositionen separat zu setzen, können Sie zwei `<length>` Werte verwenden — der erste gilt für die Anfangsposition der Textdekoration und der zweite für das Ende.

Die `text-decoration-inset` Eigenschaft kann auch das `auto` Schlüsselwort annehmen. Dies führt dazu, dass der Browser die Anfangs- und Endpunkte der Textdekoration einrückt, um sicherzustellen, dass, wenn zwei dekorierte Textboxen nebeneinander erscheinen, sie nicht wie eine einzelne Textdekoration erscheinen. Der `auto` Wert ist besonders wichtig beim Rendern von chinesischem Text, bei dem Unterstreichungen verwendet werden, um [Eigennamen zu kennzeichnen](https://www.w3.org/International/clreq/#id88), und benachbarte Eigennamen sollten separate Unterstreichungen haben. Siehe [Effekt des `auto` Wertes](#effect_of_the_auto_value) für ein Beispiel.

Der `auto` Wert hat nicht den gleichen Effekt wie der Anfangswert `0`. Die Einstellung von `text-decoration-inset` auf `0` führt dazu, dass es keinen Abstand zwischen den Dekorationen gibt.

Die `text-decoration-inset` Eigenschaft wird nicht vererbt und ist keine Bestandteileigenschaft der {{cssxref("text-decoration")}} Kurzform.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Anwendungsfälle

In diesem Beispiel zeigen wir die Ausrück-, Einrück- und "verschobenen" Anwendungsfälle.

#### HTML

Wir definieren eine ungeordnete Liste mit drei Listeneinträgen, von denen jeder eine separate `id` hat.

```html live-sample___use-case-examples
<ul>
  <li id="one">Outset decoration</li>
  <li id="two">Inset decoration</li>
  <li id="three">Shifted decoration</li>
</ul>
```

#### CSS

Wir geben jedem Listeneintrag eine andere {{cssxref("text-decoration")}} und `text-decoration-inset`:

- Der erste hat eine dicke limonengrüne Unterstreichung, die auf beiden Seiten gleichmäßig um `10px` ausgerückt ist.
- Der zweite hat einen mittleren weißen Durchstrich, der auf beiden Seiten gleichmäßig um `0.5em` eingerückt ist.
- Der dritte hat eine dünne wellige blaue Unterstreichung, die um `1em` nach rechts verschoben ist.

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

Das wird so gerendert:

{{embedlivesample("use-case-examples", "100%", "230")}}

### Effekt des `auto` Wertes

Dieses Beispiel demonstriert die Wirkung des Wertes `text-decoration-inset: auto`.

#### HTML

Wir definieren zwei Gruppen nebeneinander stehender {{htmlelement("u")}} Elemente:

```html live-sample___auto-example
<p lang="zh" id="one"><u>石井</u><u>艾俐俐</u></p>

<p lang="zh" id="two"><u>石井</u><u>艾俐俐</u></p>
```

#### CSS

Jedes `<u>` Element hat eine `red` Farbe und `3px` Dicke auf seiner Unterstreichung. Die erste Gruppe von `<u>` Elementen hat einen `text-decoration-inset` Wert von `auto` gesetzt, während die zweite Gruppe den anfänglichen `text-decoration-inset` Wert von `0` explizit eingestellt hat, zu Vergleichszwecken:

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

Das wird so gerendert:

{{embedlivesample("auto-example", "100%", "200")}}

Beachten Sie, wie der `auto` Wert die Textdekoration subtil auf beiden Seiten einrückt und so einen Abstand zwischen den Unterstreichungen der beiden Elemente schafft (zwischen den beiden Elementen selbst wird kein Abstand hinzugefügt). Der Wert `0` führt zu keinem Abstand.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("text-decoration")}}
- Das [CSS Textdekoration](/de/docs/Web/CSS/Guides/Text_decoration) Modul
