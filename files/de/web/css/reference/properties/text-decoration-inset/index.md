---
title: "`text-decoration-inset` CSS property"
short-title: text-decoration-inset
slug: Web/CSS/Reference/Properties/text-decoration-inset
l10n:
  sourceCommit: 6354422058e438a2599e4eab71eaec8eb40850fa
---

{{SeeCompatTable}}

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`text-decoration-inset`** ermöglicht es, die Anfangs- und Endpunkte der Textdekoration eines Elements anzupassen, sodass sie verkürzt, verlängert oder relativ zum gerenderten Text in ihrer Position verschoben werden kann.

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

Diese Eigenschaft wird als einer oder zwei der folgenden Werte oder als Schlüsselwort `auto` angegeben:

- {{cssxref("&lt;length>")}}
  - : Gibt den Betrag an, um den die Position der Textdekoration angepasst wird. Positive Werte rücken die Textdekoration ein (machen sie kürzer), während negative Werte die Textdekoration ausrücken (machen sie länger). Wenn ein Wert angegeben wird, gilt er sowohl für den Anfangs- als auch den Endpunkt der Textdekoration. Wenn zwei Werte angegeben werden, gilt der erste für den Anfangspunkt und der zweite für den Endpunkt der Textdekoration.
- `auto`
  - : Der Browser wählt einen Einrückungsbetrag für Anfang und Ende, um sicherzustellen, dass zwischen den Textdekorationen zweier nebeneinander angezeigter dekorierter Textfelder eine Lücke entsteht, sodass sie nicht wie eine einzelne Textdekoration erscheinen.

## Beschreibung

Standardmäßig hat die Textdekoration eines Elements, wie sie durch die Kurzform {{cssxref("text-decoration")}} und die zugehörigen Longhand-Eigenschaften festgelegt wird, dieselbe Größe wie der gerenderte Text.

Die Eigenschaft `text-decoration-inset` ermöglicht Ihnen, die Anfangs- und/oder Endpunkte der Textdekoration eines Textcontainers anzupassen. Dies ist nützlich, um Effekte zu erzeugen, bei denen die Textdekoration gegenüber dem Text selbst eingerückt oder ausgerückt oder in ihrer Position verschoben sein soll. Unter [Grundlegende Anwendungsfälle](#grundlegende_anwendungsfälle) finden Sie jeweils ein Beispiel.

Ein einzelner Wert `<length>` legt die Einrückung (bei positiven Werten) oder die Ausrückung (bei negativen Werten) an der Anfangs- und Endposition der Textdekoration fest. Um Anfangs- und Endposition getrennt festzulegen, können Sie zwei Werte `<length>` verwenden — der erste gilt für die Anfangsposition der Textdekoration und der zweite für die Endposition.

Die Eigenschaft `text-decoration-inset` kann auch das Schlüsselwort `auto` annehmen. Dadurch rückt der Browser die Anfangs- und Endpunkte der Textdekoration ein, um sicherzustellen, dass zwei nebeneinander angezeigte dekorierte Textfelder nicht wie eine einzelne Textdekoration erscheinen. Der Wert `auto` ist besonders wichtig beim Rendern chinesischen Texts, bei dem Unterstreichungen verwendet werden, um [Eigennamen zu kennzeichnen](https://www.w3.org/International/clreq/#id88), und benachbarte Eigennamen separate Unterstreichungen haben sollten. Ein Beispiel finden Sie unter [Auswirkung des Werts `auto`](#effect_of_the_auto_value).

Der Wert `auto` hat nicht dieselbe Wirkung wie der Anfangswert `0`. Das Setzen von `text-decoration-inset` auf `0` bewirkt, dass kein Abstand zwischen Dekorationen vorhanden ist.

Die Eigenschaft `text-decoration-inset` wird nicht vererbt und ist keine Bestandteil-Eigenschaft der Kurzform {{cssxref("text-decoration")}}.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Anwendungsfälle

In diesem Beispiel demonstrieren wir die Anwendungsfälle Ausrückung, Einrückung und „Verschiebung“.

#### HTML

Wir definieren eine ungeordnete Liste mit drei Listenelementen, die jeweils eine eigene `id` besitzen.

```html live-sample___use-case-examples
<ul>
  <li id="one">Outset decoration</li>
  <li id="two">Inset decoration</li>
  <li id="three">Shifted decoration</li>
</ul>
```

#### CSS

Wir geben jedem Listenelement eine andere {{cssxref("text-decoration")}} und ein anderes `text-decoration-inset`:

- Das erste hat eine dicke limettengrüne Unterstreichung, die auf beiden Seiten gleichermaßen um `10px` ausgerückt ist.
- Das zweite hat eine weiße Durchstreichung mittlerer Dicke, die auf beiden Seiten gleichermaßen um `0.5em` eingerückt ist.
- Das dritte hat eine dünne, wellenförmige blaue Unterstreichung, die um `1em` nach rechts verschoben ist.

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

### Auswirkung des Werts `auto`

Dieses Beispiel demonstriert die Auswirkung des Werts `text-decoration-inset: auto`.

#### HTML

Wir definieren zwei Gruppen nebeneinander angezeigter {{htmlelement("u")}}-Elemente:

```html live-sample___auto-example
<p lang="zh" id="one"><u>石井</u><u>艾俐俐</u></p>

<p lang="zh" id="two"><u>石井</u><u>艾俐俐</u></p>
```

#### CSS

Jedes Element `<u>` besitzt für seine Unterstreichung eine Farbe `red` und eine Dicke von `3px`. Für die erste Gruppe von `<u>`-Elementen ist der Wert `auto` für `text-decoration-inset` festgelegt, während für die zweite Gruppe zum Vergleich der Anfangswert `0` für `text-decoration-inset` explizit gesetzt ist:

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

Beachten Sie, wie der Wert `auto` die Textdekoration auf beiden Seiten geringfügig einrückt und dadurch eine Lücke zwischen den Unterstreichungen der beiden Elemente erzeugt (zwischen den beiden Elementen selbst wird kein Abstand hinzugefügt). Der Wert `0` führt zu keiner Lücke.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("text-decoration")}}
- Das Modul [CSS-Textdekoration](/de/docs/Web/CSS/Guides/Text_decoration)
