---
title: text-decoration-inset
slug: Web/CSS/Reference/Properties/text-decoration-inset
l10n:
  sourceCommit: 12b296d2b3937c45b2363f34ed8afadcf00ed166
---

{{SeeCompatTable}}

Die **`text-decoration-inset`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es, die Start- und Endpunkte der Textdekoration eines Elements anzupassen, sodass sie verkürzt, verlängert oder ihre Position relativ zum gerenderten Text verschoben werden kann.

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
  - : Gibt die Menge an, um die die Textdekoration versetzt wird. Positive Werte rücken die Textdekoration ein (machen sie kürzer), während negative Werte die Textdekoration ausrücken (machen sie länger). Wenn ein Wert angegeben wird, gilt er sowohl für den Start- als auch für den Endpunkt der Textdekoration. Wenn zwei Werte angegeben werden, gilt der erste für den Startpunkt und der zweite für den Endpunkt der Textdekoration.
- `auto`
  - : Der Browser wählt eine Ein- und Ausrückung, um sicherzustellen, dass, wenn zwei dekorierte Textboxen nebeneinander erscheinen, zwischen ihren Textdekorationen eine Lücke entsteht, sodass sie nicht wie eine einzige Textdekoration erscheinen.

## Beschreibung

Standardmäßig ist die Textdekoration eines Elements, wie sie durch die {{cssxref("text-decoration")}} Kurzform und die zugehörigen Langform-Eigenschaften festgelegt wird, genauso groß wie der gerenderte Text.

Mit der Eigenschaft `text-decoration-inset` können Sie die Start- und/oder Endpunkte der Textdekoration eines Textcontainers anpassen. Dies ist nützlich, um Effekte zu erstellen, bei denen die Textdekoration vom Text selbst eingerückt oder ausgerückt oder ihre Position verschoben werden soll. Siehe [Grundlegende Anwendungsfälle](#grundlegende_anwendungsfälle) für ein Beispiel für jeden Fall.

Ein einzelner `<length>`-Wert setzt das Einrücken (wenn positiv) oder Ausrücken (wenn negativ) an den Start- und Endpositionen der Textdekoration. Um die Start- und Endpositionen separat festzulegen, können Sie zwei `<length>`-Werte verwenden – der erste gilt für die Startposition der Textdekoration und der zweite für die Endposition.

Die Eigenschaft `text-decoration-inset` kann auch das Schlüsselwort `auto` annehmen. Dies bewirkt, dass der Browser die Start- und Endpunkte der Textdekoration einrückt, um sicherzustellen, dass, wenn zwei dekorierte Textboxen nebeneinander erscheinen, sie nicht wie eine einzige Textdekoration aussehen. Der Wert `auto` ist besonders wichtig beim Rendern von chinesischem Text, wo Unterstreichen verwendet wird, um [Eigenname zu kennzeichnen](https://www.w3.org/International/clreq/#id88), und benachbarte Eigennamen sollten getrennte Unterstreichungen haben. Siehe [Effekt des `auto` Werts](#effect_of_the_auto_value) für ein Beispiel.

Der Wert `auto` hat nicht die gleiche Wirkung wie der Initialwert `0`. Wenn Sie `text-decoration-inset` auf `0` setzen, entsteht kein Abstand zwischen den Dekorationen.

Die Eigenschaft `text-decoration-inset` wird nicht vererbt und ist kein Bestandteil der {{cssxref("text-decoration")}} Kurzform.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Anwendungsfälle

In diesem Beispiel demonstrieren wir die Anwendungen: Ausrücken, Einrücken und "Verschieben".

#### HTML

Wir definieren eine ungeordnete Liste mit drei Listenelementen, die jeweils eine separate `id` haben.

```html live-sample___use-case-examples
<ul>
  <li id="one">Outset decoration</li>
  <li id="two">Inset decoration</li>
  <li id="three">Shifted decoration</li>
</ul>
```

#### CSS

Wir geben jedem Listenelement eine andere {{cssxref("text-decoration")}} und `text-decoration-inset`:

- Die erste hat eine dicke limettengrüne Unterstreichung, die auf beiden Seiten um `10px` ausgerückt ist.
- Die zweite hat eine mittlere weiße Durchstreichung, die auf beiden Seiten um `0.5em` eingerückt ist.
- Die dritte hat eine dünne wellige blaue Unterstreichung, die um `1em` nach rechts verschoben ist.

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

Dies wird folgendermaßen gerendert:

{{embedlivesample("use-case-examples", "100%", "230")}}

### Effekt des `auto` Werts

Dieses Beispiel zeigt den Effekt des Werts `text-decoration-inset: auto`.

#### HTML

Wir definieren zwei Gruppen seitlich nebeneinanderstehender {{htmlelement("u")}} Elemente:

```html live-sample___auto-example
<p lang="zh" id="one"><u>石井</u><u>艾俐俐</u></p>

<p lang="zh" id="two"><u>石井</u><u>艾俐俐</u></p>
```

#### CSS

Jedes `<u>`-Element hat eine `rote` Farbe und `3px` Dicke bei seiner Unterstreichung. Die erste Gruppe von `<u>`-Elementen hat den `text-decoration-inset` Wert `auto` gesetzt, während die zweite Gruppe explizit den Initialwert `text-decoration-inset` von `0` gesetzt hat, zu Vergleichszwecken:

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

Dies wird folgendermaßen gerendert:

{{embedlivesample("auto-example", "100%", "200")}}

Beachten Sie, wie der `auto` Wert die Textdekoration dezent auf beiden Seiten einrückt, wodurch eine Lücke zwischen den Unterstreichungen der beiden Elemente entsteht (zwischen den beiden Elementen selbst wird kein Abstand hinzugefügt). Der Wert `0` führt zu keiner Lücke.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("text-decoration")}}
- Das [CSS Textdekoration](/de/docs/Web/CSS/Guides/Text_decoration) Modul
