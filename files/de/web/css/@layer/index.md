---
title: "@layer"
slug: Web/CSS/@layer
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}

Die **`@layer`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/At-rule) wird verwendet, um eine Kaskadenschicht zu deklarieren und kann auch verwendet werden, um die Reihenfolge der Priorität im Falle mehrerer Kaskadenschichten zu definieren.

{{EmbedInteractiveExample("pages/tabbed/at-rule-layer.html", "tabbed-standard")}}

## Syntax

```css
/* statement at-rules */
@layer layer-name;
@layer layer-name, layer-name, layer-name;

/* block at-rules */
@layer {rules}
@layer layer-name {rules}
```

wobei:

- _layer-name_
  - : Der Name der Kaskadenschicht ist.
- _rules_
  - : Das Set von CSS-Regeln in der Kaskadenschicht ist.

## Beschreibung

Regeln innerhalb einer Kaskadenschicht kaskadieren zusammen und geben Webentwicklern mehr Kontrolle über die Kaskade. Stile, die nicht in einer Schicht definiert sind, überschreiben immer Stile, die in benannten und anonymen Schichten deklariert sind.

Das folgende Diagramm zeigt Schichtprioritäten, bei denen Schichten in der Reihenfolge 1, 2, ..., N deklariert werden.

![Diagramm, das die Prioritäten von Kaskadenschichten zeigt](https://mdn.github.io/shared-assets/images/diagrams/css/at-rules/layer-cascade.svg)

Die Deklarationsreihenfolge ist entscheidend. Die zuerst deklarierte Schicht hat die niedrigste Priorität, und die zuletzt deklarierte Schicht hat die höchste Priorität. Die Priorität wird jedoch umgekehrt, wenn das [`!important`](/de/docs/Web/CSS/important)-Flag verwendet wird.

Die `@layer`-At-Regel wird verwendet, um eine Kaskadenschicht auf eine von drei Arten zu erstellen.

Der erste Weg ist die Verwendung einer `@layer`-Block-At-Regel, um eine benannte Kaskadenschicht mit den CSS-Regeln für diese Schicht zu erstellen, wie folgt:

```css
@layer utilities {
  .padding-sm {
    padding: 0.5rem;
  }

  .padding-lg {
    padding: 0.8rem;
  }
}
```

Der zweite Weg ist die Verwendung einer `@layer`-Statement-At-Regel, um eine oder mehrere durch Komma getrennte benannte Kaskadenschichten zu erstellen, ohne irgendwelche Stile zuzuweisen. Dies kann eine einzelne Schicht sein, wie unten gezeigt:

```css
@layer utilities;
```

Mehrere Schichten können gleichzeitig definiert werden, wie unten gezeigt:

```css
@layer theme, layout, utilities;
```

Dies ist nützlich, weil die anfängliche Reihenfolge, in der Schichten deklariert werden, anzeigt, welche Schicht Priorität hat. Wie bei Deklarationen gewinnt die zuletzt aufgelistete Schicht, wenn Deklarationen in mehreren Schichten gefunden werden. Daher würde in dem obigen Beispiel, wenn eine konkurrierende Regel in `theme` und `utilities` gefunden wird, die in `utilities` gewinnen und angewendet werden.

Eine Regel in `utilities` würde _auch dann angewendet_, wenn sie eine niedrigere Spezifität hat als die Regel in `theme`. Dies liegt daran, dass, sobald die Schichtreihenfolge festgelegt wurde, Spezifität und Erscheinungsreihenfolge ignoriert werden. Dies ermöglicht die Erstellung einfacherer CSS-Selektoren, da Sie nicht sicherstellen müssen, dass ein Selektor eine ausreichend hohe Spezifität aufweist, um konkurrierende Regeln zu überschreiben; Sie müssen lediglich sicherstellen, dass er in einer späteren Schicht erscheint.

> [!NOTE]
> Nachdem Sie Ihre Schichtnamen deklariert haben und damit deren Reihenfolge festgelegt ist, können Sie der Schicht durch erneutes Deklarieren des Namens CSS-Regeln hinzufügen. Die Stile werden dann der Schicht hinzugefügt und die Schichtreihenfolge wird nicht geändert.

Der dritte Weg ist die Erstellung einer unbenannten Schicht durch eine `@layer`-Block-At-Regel ohne Einbeziehung eines Schichtnamens. Zum Beispiel:

```css
@layer {
  p {
    margin-block: 1rem;
  }
}
```

Dies erstellt eine _anonyme Kaskadenschicht_. Diese Schicht funktioniert genauso wie benannte Schichten, jedoch können später keine Regeln ihr zugewiesen werden. Die Reihenfolge der Priorität für anonyme Schichten ist die Reihenfolge, in der Schichten deklariert werden, unabhängig davon, ob benannt oder nicht, und niedriger als die Stile, die außerhalb einer Schicht deklariert sind.

Eine andere Möglichkeit, eine Kaskadenschicht zu erstellen, besteht darin, {{cssxref("@import")}} zu verwenden. In diesem Fall wären die Regeln im importierten Stylesheet. Denken Sie daran, dass die `@import`-At-Regel allen anderen Regeltypen vorausgehen muss, außer `@charset`- und `@layer`-Regeln.

```css
@import "theme.css" layer(utilities);
```

### Verschachtelung von Schichten

Schichten können verschachtelt werden. Zum Beispiel:

```css
@layer framework {
  @layer layout {
  }
}
```

Um Regeln zur `layout`-Schicht innerhalb von `framework` hinzuzufügen, verbinden Sie die beiden Namen mit einem `.`.

```css
@layer framework.layout {
  p {
    margin-block: 1rem;
  }
}
```

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Beispiel

Im folgenden Beispiel werden zwei CSS-Regeln erstellt. Eine für das {{htmlelement("p")}}-Element außerhalb jeder Schicht und eine innerhalb einer Schicht namens `type` für `.box p`.

Ohne Schichten hätte der Selektor `.box p` die höchste Spezifität, und daher würde der Text `Hello, world!` in Grün angezeigt. Da die `type`-Schicht vor der anonymen Schicht kommt, die erstellt wurde, um nicht-Schichtinhalte zu halten, wird der Text lila.

Beachten Sie auch die Reihenfolge. Auch wenn wir den nicht geschichteten Stil zuerst deklarieren, wird er _nach_ den Schichtstilen angewendet.

#### HTML

```html
<div class="box">
  <p>Hello, world!</p>
</div>
```

#### CSS

```css
p {
  color: rebeccapurple;
}

@layer type {
  .box p {
    font-weight: bold;
    font-size: 1.3em;
    color: green;
  }
}
```

#### Ergebnis

{{EmbedLiveSample("Simple_example")}}

### Zuweisung von Regeln zu bestehenden Schichten

Im folgenden Beispiel werden zwei Schichten ohne angewendete Regeln erstellt, dann werden CSS-Regeln auf die beiden Schichten angewendet. Die `base`-Schicht definiert eine `color`, `border`, `font-size` und `padding`. Die `special`-Schicht definiert eine andere Farbe. Da `special` zuletzt kommt, wenn die Schichten definiert wurden, wird die von ihm bereitgestellte Farbe verwendet und der Text wird in `rebeccapurple` angezeigt. Alle anderen Regeln aus `base` gelten jedoch weiterhin.

#### HTML

```html
<div class="item">
  Ich werde in <code>color: rebeccapurple</code> angezeigt, weil die
  <code>special</code>-Schicht nach der <code>base</code>-Schicht kommt. Mein grüner
  Rand, Schriftgröße und Padding kommen aus der <code>base</code>-Schicht.
</div>
```

#### CSS

```css
@layer base, special;

@layer special {
  .item {
    color: rebeccapurple;
  }
}

@layer base {
  .item {
    color: green;
    border: 5px solid green;
    font-size: 1.3em;
    padding: 0.5em;
  }
}
```

#### Ergebnis

{{EmbedLiveSample("Assigning_rules_to_existing_layers")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`@import`](/de/docs/Web/CSS/@import)
- {{domxref("CSSLayerBlockRule")}}
- {{domxref("CSSLayerStatementRule")}}
- [`!important`](/de/docs/Web/CSS/important)
- [`revert-layer`](/de/docs/Web/CSS/revert-layer)
- [Einführung in die CSS-Kaskade](/de/docs/Web/CSS/Cascade)
- [Kaskade, Spezifität und Vererbung](/de/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)
- [Kaskadenschichten](/de/docs/Learn/CSS/Building_blocks/Cascade_layers)
- [Die Zukunft von CSS: Kaskadenschichten](https://www.bram.us/2021/09/15/the-future-of-css-cascade-layers-css-at-layer/) auf bram.us (2021)
