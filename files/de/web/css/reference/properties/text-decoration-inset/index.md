---
title: text-decoration-inset
slug: Web/CSS/Reference/Properties/text-decoration-inset
l10n:
  sourceCommit: 0fe625f488d9b548f57bb7f4c714287ba093d96b
---

{{SeeCompatTable}}

Die **`text-decoration-inset`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es, die Anfangs- und Endpunkte der Textdekoration eines Elements anzupassen, sodass sie verkürzt, verlängert oder ihre Position in Bezug auf den gerenderten Text verschoben werden kann.

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
  - : Gibt die Menge an, um die die Position der Textdekoration angepasst werden soll. Positive Werte insetzen die Textdekoration (machen sie kürzer), während negative Werte die Textdekoration outsetzen (machen sie länger). Wenn ein Wert angegeben ist, gilt er sowohl für die Anfangs- als auch für die Endpunkte der Textdekoration. Wenn zwei Werte angegeben sind, gilt der erste für den Anfangspunkt und der zweite für den Endpunkt der Textdekoration.
- `auto`
  - : Der Browser wählt eine Menge für das Inset von Anfang und Ende, um sicherzustellen, dass, wenn zwei dekorierte Textboxen nebeneinander erscheinen, der Anschein einer Lücke zwischen ihren Textdekorationen entsteht, sodass sie nicht den Anschein haben, eine einzelne Textdekoration zu haben.

## Beschreibung

Standardmäßig ist die Textdekoration eines Elements, wie durch die Abkürzung {{cssxref("text-decoration")}} und die zugehörigen Langformeigenschaften festgelegt, gleich groß wie der gerenderte Text.

Die Eigenschaft `text-decoration-inset` ermöglicht es Ihnen, die Anfangs- und/oder Endpunkte der Textdekoration eines Textcontainers anzupassen. Dies ist nützlich, um Effekte zu erzeugen, bei denen Sie die Textdekoration insetzen oder outsetzen möchten oder in ihrer Position verschieben möchten. Siehe [Grundlegende Anwendungsfälle](#grundlegende_anwendungsfälle) für ein Beispiel für jeden Fall.

Ein einzelner `<length>`-Wert setzt das Inset (wenn positiv) oder das Outset (wenn negativ) an den Anfangs- und Endpositionen der Textdekoration. Um die Anfangs- und Endpositionen separat festzulegen, können Sie zwei `<length>`-Werte verwenden — der erste bezieht sich auf die Startposition der Textdekoration und der zweite auf das Ende.

Die Eigenschaft `text-decoration-inset` kann auch das Schlüsselwort `auto` annehmen. Dadurch insetzt der Browser die Anfangs- und Endpunkte der Textdekoration, um sicherzustellen, dass, wenn zwei dekorierte Textboxen nebeneinander erscheinen, sie nicht den Anschein haben, eine einzige Textdekoration zu haben. Der Wert `auto` ist besonders wichtig beim Rendern chinesischer Texte, wo das Unterstreichen zur [Interpunktion von Eigennamen](https://www.w3.org/International/clreq/#id88) verwendet wird und benachbarte Eigennamen separate Unterstreichungen haben sollten. Siehe [Auswirkung des `auto`-Wertes](#effect_of_the_auto_value) für ein Beispiel.

Der Wert `auto` hat nicht die gleiche Wirkung wie der Initialwert `0`. Wenn `text-decoration-inset` auf `0` gesetzt wird, entsteht kein Abstand zwischen den Dekorationen.

Die Eigenschaft `text-decoration-inset` wird nicht vererbt und ist keine Bestandteil-Eigenschaft der Abkürzung {{cssxref("text-decoration")}}.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Anwendungsfälle

In diesem Beispiel zeigen wir die Anwendungsfälle für Outset, Inset und "verschoben".

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

- Der erste hat eine dicke limettengrüne Unterstreichung, die auf beiden Seiten um `10px` outgesetzt wird.
- Der zweite hat einen mittelstarken weißen Durchstreichung, der auf beiden Seiten um `0.5em` insetzt wird.
- Der dritte hat eine dünne wellenförmige blaue Unterstreichung, die um `1em` nach rechts verschoben wird.

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

Dies wird wie folgt gerendert:

{{embedlivesample("use-case-examples", "100%", "230")}}

### Auswirkung des `auto`-Wertes

Dieses Beispiel zeigt die Auswirkung des Wertes `text-decoration-inset: auto`.

#### HTML

Wir definieren zwei Gruppen von nebeneinander angeordneten {{htmlelement("u")}}-Elementen:

```html live-sample___auto-example
<p lang="zh" id="one"><u>石井</u><u>艾俐俐</u></p>

<p lang="zh" id="two"><u>石井</u><u>艾俐俐</u></p>
```

#### CSS

Jedes `<u>`-Element hat eine `red`-Farbe und eine `3px`-dicke Unterstreichung. Auf die erste Gruppe von `<u>`-Elementen ist der Wert `text-decoration-inset: auto` gesetzt, während auf die zweite Gruppe der Initialwert `text-decoration-inset: 0` explizit gesetzt ist, zum Vergleich:

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

Dies wird wie folgt gerendert:

{{embedlivesample("auto-example", "100%", "200")}}

Beachten Sie, wie der `auto` Wert die Textdekoration subtil auf beiden Seiten insetzt, wodurch eine Lücke zwischen den Unterstreichungen der beiden Elemente entsteht (zwischen den beiden Elementen selbst wird kein Abstand hinzugefügt). Der Wert `0` führt zu keiner Lücke.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("text-decoration")}}
- Das [CSS-Textdekorationsmodul](/de/docs/Web/CSS/Guides/Text_decoration)
