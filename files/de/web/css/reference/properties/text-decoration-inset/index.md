---
title: "`text-decoration-inset` CSS property"
short-title: text-decoration-inset
slug: Web/CSS/Reference/Properties/text-decoration-inset
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

{{SeeCompatTable}}

Die **`text-decoration-inset`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht die Anpassung der Start- und Endpunkte der Textdekoration eines Elements, sodass sie verkürzt, verlängert oder ihre Position relativ zum gerenderten Text verschoben werden kann.

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

Ein oder zwei {{cssxref("&lt;length>")}} Werte oder das Schlüsselwort `auto`.

- {{cssxref("&lt;length>")}}
  - : Gibt die Menge an, um die die Position der Textdekoration angepasst werden soll. Positive Werte rücken die Textdekoration ein (machen sie kürzer), während negative Werte die Textdekoration ausdehnen (machen sie länger). Wenn ein Wert angegeben wird, gilt er sowohl für den Start- als auch für den Endpunkt der Textdekoration. Wenn zwei Werte angegeben werden, gilt der erste für den Startpunkt und der zweite für den Endpunkt der Textdekoration.
- `auto`
  - : Der Browser wählt eine Start- und Endeinrückung, um sicherzustellen, dass, wenn zwei dekorierte Textboxen nebeneinander erscheinen, ein Spalt zwischen ihren Textdekorationen entsteht, sodass sie nicht wie eine durchgehende Textdekoration wirken.

## Beschreibung

Standardmäßig ist die Textdekoration eines Elements, wie durch die {{cssxref("text-decoration")}} Kurzform und die zugehörigen Langform-Eigenschaften festgelegt, genauso groß wie der gerenderte Text.

Die `text-decoration-inset` Eigenschaft erlaubt es Ihnen, die Start- und/oder Endpunkte der Textdekoration eines Textcontainers anzupassen. Dies ist nützlich, um Effekte zu erzeugen, bei denen die Textdekoration von dem Text selbst eingerückt oder herausgesetzt oder in der Position verschoben ist. Siehe [Grundlegende Anwendungsfälle](#grundlegende_anwendungsfälle) für ein Beispiel von jedem.

Ein einzelner `<length>` Wert wird die Einrückung (wenn positiv) oder die Ausstülpung (wenn negativ) an den Start- und Endpositionen der Textdekoration einstellen. Um die Start- und Endpositionen separat festzulegen, können Sie zwei `<length>` Werte verwenden — der erste gilt für die Startposition der Textdekoration und der zweite für die Endposition.

Die `text-decoration-inset` Eigenschaft kann auch das Schlüsselwort `auto` annehmen. Dadurch wird der Browser veranlasst, die Start- und Endpunkte der Textdekoration so einzurücken, dass, wenn zwei dekorierte Textboxen nebeneinander erscheinen, es nicht so aussieht, als hätten sie eine durchgehende Textdekoration. Der `auto` Wert ist besonders wichtig beim Rendern von chinesischem Text, wo Unterstreichungen zur [Zeichensetzung von Eigennamen](https://www.w3.org/International/clreq/#id88) verwendet werden, und benachbarte Eigennamen sollten separate Unterstreichungen haben. Siehe [Effekt des `auto` Wertes](#effect_of_the_auto_value) für ein Beispiel.

Der `auto` Wert hat nicht den gleichen Effekt wie der Initialwert `0`. Das Festlegen von `text-decoration-inset` auf `0` bewirkt, dass es keinen Platz zwischen den Dekorationen gibt.

Die `text-decoration-inset` Eigenschaft wird nicht vererbt und ist keine Bestandteil der {{cssxref("text-decoration")}} Kurzform.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Anwendungsfälle

In diesem Beispiel zeigen wir die Anwendungsfälle "ausgestülpt", "eingerückt", und "verschoben".

#### HTML

Wir definieren eine ungeordnete Liste mit drei Listenelementen, jedes mit einer separaten `id`.

```html live-sample___use-case-examples
<ul>
  <li id="one">Outset decoration</li>
  <li id="two">Inset decoration</li>
  <li id="three">Shifted decoration</li>
</ul>
```

#### CSS

Wir geben jedem Listenelement eine andere {{cssxref("text-decoration")}} und `text-decoration-inset`:

- Das erste hat eine dicke limettengrüne Unterstreichung, die auf beiden Seiten um `10px` ausgestülpt ist.
- Das zweite hat eine mittelstarke weiße Durchstreichung, die auf beiden Seiten um `0.5em` eingerückt ist.
- Das dritte hat eine dünne, wellige blaue Unterstreichung, die um `1em` nach rechts verschoben ist.

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
    padding: 10px 0;
    width: 100%;
    text-align: center;
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

Dies rendert sich wie folgt:

{{embedlivesample("use-case-examples", "100%", "230")}}

### Effekt des `auto` Wertes

Dieses Beispiel zeigt den Effekt des Wertes `text-decoration-inset: auto`.

#### HTML

Wir definieren zwei Gruppen von nebeneinander liegenden {{htmlelement("u")}} Elementen:

```html live-sample___auto-example
<p lang="zh" id="one"><u>石井</u><u>艾俐俐</u></p>

<p lang="zh" id="two"><u>石井</u><u>艾俐俐</u></p>
```

#### CSS

Jedes `<u>` Element hat eine `red` Farbe und `3px` Dicke auf seiner Unterstreichung. Die erste Gruppe von `<u>` Elementen hat einen `text-decoration-inset` Wert von `auto`, während die zweite Gruppe den initialen `text-decoration-inset` Wert von `0` hat, um Vergleichszwecke:

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
    padding: 10px 0;
    width: 100%;
    text-align: center;
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

Dies rendert sich wie folgt:

{{embedlivesample("auto-example", "100%", "200")}}

Beachten Sie, wie der `auto` Wert die Textdekoration auf beiden Seiten subtil einrückt und einen Spalt zwischen den Unterstreichungen der beiden Elemente erzeugt (es wird kein Platz zwischen den beiden Elementen selbst hinzugefügt). Der `0` Wert führt zu keinem Spalt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("text-decoration")}}
- Das [CSS Textdekoration](/de/docs/Web/CSS/Guides/Text_decoration) Modul
