---
title: text-decoration-inset
slug: Web/CSS/Reference/Properties/text-decoration-inset
l10n:
  sourceCommit: 9b359a7194311720fc84450fdb6a066725e703e5
---

{{SeeCompatTable}}

Die **`text-decoration-inset`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht die Anpassung der Anfangs- und Endpunkte der Textdekoration eines Elements, sodass diese verkürzt, verlängert oder in ihrer Position im Verhältnis zum gerenderten Text verschoben werden kann.

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
  - : Gibt die Menge an, um die die Position der Textdekoration angepasst werden soll. Positive Werte rücken die Textdekoration ein (verkürzen sie), während negative Werte die Textdekoration ausrücken (verlängern sie). Wenn ein Wert angegeben ist, gilt er sowohl für die Anfangs- als auch Endpunkte der Textdekoration. Wenn zwei Werte angegeben sind, gilt der erste für den Anfangspunkt und der zweite für den Endpunkt der Textdekoration.
- `auto`
  - : Der Browser wählt eine Anfangs- und Endeinsetzung, um sicherzustellen, dass, wenn zwei dekorierte Textboxen nebeneinander erscheinen, ein Lücke zwischen ihren Textdekorationen angezeigt wird, sodass sie nicht wie eine einzelne Textdekoration erscheinen.

## Beschreibung

Standardmäßig ist die Textdekoration eines Elements, wie durch die Kurzform {{cssxref("text-decoration")}} und zugehörige Langform-Eigenschaften festgelegt, gleich groß wie der gerenderte Text.

Die Eigenschaft `text-decoration-inset` ermöglicht es Ihnen, die Anfangs- und/oder Endpunkte der Textdekoration eines Textcontainers anzupassen. Dies ist nützlich, um Effekte zu erzeugen, bei denen die Textdekoration vom Text selbst eingerückt oder ausgerückt oder in ihrer Position verschoben ist. Sehen Sie [Grundlegende Anwendungsfälle](/de/docs/Web/CSS/Reference/Properties/text-decoration-inset#basic_use_cases) für ein Beispiel jedes Falles.

Ein einzelner `<length>` Wert setzt die Einrückung (wenn positiv) oder Ausrückung (wenn negativ) der Anfangs- und Endpositionen der Textdekoration. Um die Anfangs- und Endpositionen separat zu setzen, können Sie zwei `<length>` Werte verwenden — der erste gilt für die Anfangsposition der Textdekoration und der zweite für das Ende.

Die Eigenschaft `text-decoration-inset` kann auch das Schlüsselwort `auto` annehmen. Dadurch rückt der Browser die Anfangs- und Endpunkte der Textdekoration ein, um sicherzustellen, dass, wenn zwei dekorierte Textboxen nebeneinander erscheinen, sie nicht wie eine einzelne Textdekoration erscheinen. Der `auto`-Wert ist besonders wichtig beim Rendern chinesischen Textes, wo Unterstreichungen verwendet werden, um [Eigennamen zu kennzeichnen](https://www.w3.org/TR/clreq/#id88), und benachbarte Eigennamen separate Unterstreichungen haben sollten. Sehen Sie [Wirkung des `auto` Wertes](/de/docs/Web/CSS/Reference/Properties/text-decoration-inset#effect_of_the_auto_value) für ein Beispiel.

Der `auto` Wert hat nicht die gleiche Wirkung wie der Anfangswert `0`. Wenn `text-decoration-inset` auf `0` gesetzt ist, gibt es keinen Zwischenraum zwischen den Dekorationen.

Die `text-decoration-inset` Eigenschaft wird nicht vererbt und ist keine konstituierende Eigenschaft der Kurzform {{cssxref("text-decoration")}}.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Anwendungsfälle

In diesem Beispiel zeigen wir die Anwendungsfälle Ausrückung, Einrückung und "Verschiebung".

#### HTML

Wir definieren eine ungeordnete Liste mit drei Listeneinträgen, jeder mit einer separaten `id`.

```html live-sample___use-case-examples
<ul>
  <li id="one">Outset decoration</li>
  <li id="two">Inset decoration</li>
  <li id="three">Shifted decoration</li>
</ul>
```

#### CSS

Wir geben jedem Listeneintrag eine andere {{cssxref("text-decoration")}} und `text-decoration-inset`:

- Der erste hat eine dicke limettengrüne Unterstreichung, die auf beiden Seiten gleich mit `10px` auseinandersetzt ist.
- Der zweite hat eine mitteldicke weiße Durchstreichung, die auf beiden Seiten gleich mit `0.5em` eingerückt ist.
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

Dies wird wie folgt dargestellt:

{{embedlivesample("use-case-examples", "100%", "230")}}

### Wirkung des `auto` Wertes

Dieses Beispiel zeigt die Wirkung des Wertes `text-decoration-inset: auto`.

#### HTML

Wir definieren zwei Gruppen von nebeneinander liegenden {{htmlelement("u")}} Elementen:

```html live-sample___auto-example
<p lang="zh" id="one"><u>石井</u><u>艾俐俐</u></p>

<p lang="zh" id="two"><u>石井</u><u>艾俐俐</u></p>
```

#### CSS

Jedes `<u>` Element hat eine `rote` Farbe und eine `3px` Dicke bei der Unterstreichung. Die erste Gruppe von `<u>` Elementen hat den Wert `text-decoration-inset` von `auto`, während die zweite Gruppe den anfänglichen Wert `text-decoration-inset` von `0` explizit gesetzt hat, zu Vergleichszwecken:

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

Dies wird wie folgt dargestellt:

{{embedlivesample("auto-example", "100%", "200")}}

Beachten Sie, wie der `auto`-Wert die Textdekoration subtil auf beiden Seiten einrückt, wodurch eine Lücke zwischen den Unterstreichungen der beiden Elemente entsteht (keine Lücke wird zwischen den beiden Elementen selbst hinzugefügt). Der `0`-Wert führt zu keiner Lücke.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("text-decoration")}}
- Das [CSS Textdekoration](/de/docs/Web/CSS/Guides/Text_decoration) Modul
