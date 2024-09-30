---
title: "@layer"
slug: Web/CSS/@layer
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}

Die **`@layer`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/At-rule) wird verwendet, um eine Kaskadenschicht zu deklarieren und kann auch verwendet werden, um die Reihenfolge der Priorität festzulegen, falls mehrere Kaskadenschichten vorhanden sind.

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
  - : Der Name der Kaskadenschicht.
- _rules_
  - : Der Satz von CSS-Regeln in der Kaskadenschicht.

## Beschreibung

Regeln innerhalb einer Kaskadenschicht kaskadieren zusammen und geben Webentwicklern mehr Kontrolle über die Kaskade. Stile, die nicht in einer Schicht definiert sind, überschreiben immer Stile, die in benannten und anonymen Schichten deklariert sind.

Das folgende Diagramm zeigt die Prioritäten der Schichten, wobei die Schichten in der Reihenfolge 1, 2, ..., N deklariert werden.

![Diagramm, das die Prioritäten der Kaskadenschichten zeigt](https://mdn.github.io/shared-assets/images/diagrams/css/at-rules/layer-cascade.svg)

Die Deklarationsreihenfolge ist wichtig. Die zuerst deklarierte Schicht erhält die niedrigste Priorität und die zuletzt deklarierte Schicht die höchste Priorität. Die Priorität wird jedoch umgekehrt, wenn das [`!important`](/de/docs/Web/CSS/important)-Flag verwendet wird.

Die `@layer`-At-Regel wird auf drei Arten verwendet, um eine Kaskadenschicht zu erstellen.

Die erste Methode ist die Verwendung eines `@layer`-Block-At-Regels, um eine benannte Kaskadenschicht mit den CSS-Regeln für diese Schicht zu erstellen, wie folgt:

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

Die zweite Methode ist die Verwendung einer `@layer`-Anweisungs-At-Regel, um eine oder mehrere durch Kommas getrennte benannte Kaskadenschichten zu erstellen, ohne Stile zuzuweisen. Dies kann eine einzelne Schicht sein, wie unten gezeigt:

```css
@layer utilities;
```

Mehrere Schichten können gleichzeitig definiert werden, wie unten gezeigt:

```css
@layer theme, layout, utilities;
```

Dies ist nützlich, da die ursprüngliche Reihenfolge, in der Schichten deklariert werden, angibt, welche Schicht Vorrang hat. Wie bei Deklarationen wird die zuletzt aufgeführte Schicht gewinnen, wenn Deklarationen in mehreren Schichten gefunden werden. Daher würde im vorhergehenden Beispiel, wenn eine konkurrierende Regel in `theme` und `utilities` gefunden würde, die in `utilities` gewinnen und angewendet werden.

Eine Regel in `utilities` würde angewendet _selbst wenn sie eine geringere Spezifität_ als die Regel in `theme` hat. Dies liegt daran, dass, sobald die Schichtreihenfolge festgelegt ist, Spezifität und Erscheinungsreihenfolge ignoriert werden. Dies ermöglicht die Erstellung einfacherer CSS-Selektoren, da Sie nicht sicherstellen müssen, dass ein Selektor eine ausreichend hohe Spezifität hat, um konkurrierende Regeln zu überschreiben; Sie müssen nur sicherstellen, dass es in einer späteren Schicht erscheint.

> [!NOTE]
> Nachdem Sie Ihre Schichtnamen deklariert und damit deren Reihenfolge festgelegt haben, können Sie der Schicht CSS-Regeln hinzufügen, indem Sie den Namen erneut deklarieren. Die Stile werden dann an die Schicht angehängt und die Schichtreihenfolge wird nicht geändert.

Die dritte Methode ist, eine unbenannte Schicht zu erstellen, indem eine `@layer`-Block-At-Regel ohne Schichtnamen verwendet wird. Zum Beispiel:

```css
@layer {
  p {
    margin-block: 1rem;
  }
}
```

Dies erstellt eine _anonyme Kaskadenschicht_. Diese Schicht funktioniert auf die gleiche Weise wie benannte Schichten; jedoch können ihr später keine Regeln zugewiesen werden. Die Reihenfolge der Prioritäten für anonyme Schichten ist die Reihenfolge, in der Schichten deklariert werden, unabhängig davon, ob sie benannt sind oder nicht, und sie liegt unter den Stilen, die außerhalb einer Schicht deklariert sind.

Eine weitere Möglichkeit, eine Kaskadenschicht zu erstellen, ist die Verwendung von {{cssxref("@import")}}. In diesem Fall würden die Regeln im importierten Stylesheet sein. Denken Sie daran, dass die `@import`-At-Regel allen anderen Regeltypen vorausgehen muss, außer `@charset` und `@layer`-Regeln.

```css
@import "theme.css" layer(utilities);
```

### Verschachtelung von Schichten

Schichten können verschachtelt werden. Beispiel:

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

Ohne Schichten hätte der Selektor `.box p` die höchste Spezifität, und daher würde der Text `Hello, world!` in Grün angezeigt werden. Da die `type`-Schicht vor der anonymen Schicht kommt, die zum Halten von Nicht-Schicht-Inhalten erstellt wurde, wird der Text lila sein.

Beachten Sie auch die Reihenfolge. Selbst wenn wir den nicht geschichteten Stil zuerst deklarieren, wird er dennoch _nach_ den Schichtstilen angewendet.

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

### Zuweisung von Regeln zu vorhandenen Schichten

Im folgenden Beispiel werden zwei Schichten erstellt, ohne dass Regeln angewendet werden, und dann werden CSS-Regeln auf die beiden Schichten angewendet. Die `base`-Schicht definiert eine `color`, einen `border`, eine `font-size` und ein `padding`. Die `special`-Schicht definiert eine andere Farbe. Da `special` zuletzt definiert wird, als die Schichten definiert wurden, wird die von ihr bereitgestellte Farbe verwendet und der Text wird mit `rebeccapurple` angezeigt. Alle anderen Regeln von `base` gelten weiterhin.

#### HTML

```html
<div class="item">
  I am displayed in <code>color: rebeccapurple</code> because the
  <code>special</code> layer comes after the <code>base</code> layer. My green
  border, font-size, and padding come from the <code>base</code> layer.
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
- [`CSSLayerBlockRule`](/de/docs/Web/API/CSSLayerBlockRule)
- [`CSSLayerStatementRule`](/de/docs/Web/API/CSSLayerStatementRule)
- [`!important`](/de/docs/Web/CSS/important)
- [`revert-layer`](/de/docs/Web/CSS/revert-layer)
- [Einführung in die CSS-Kaskade](/de/docs/Web/CSS/Cascade)
- [Kaskade, Spezifität und Vererbung](/de/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)
- [Kaskadenschichten](/de/docs/Learn/CSS/Building_blocks/Cascade_layers)
- [Die Zukunft von CSS: Kaskadenschichten](https://www.bram.us/2021/09/15/the-future-of-css-cascade-layers-css-at-layer/) auf bram.us (2021)
