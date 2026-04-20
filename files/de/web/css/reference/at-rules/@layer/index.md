---
title: "`@layer` CSS at-rule"
short-title: "@layer"
slug: Web/CSS/Reference/At-rules/@layer
l10n:
  sourceCommit: e328268bb418551ab451881845881b5837c9da83
---

Die **`@layer`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules) wird verwendet, um eine Kaskadenschicht zu deklarieren und kann auch verwendet werden, um die Rangfolge bei mehreren Kaskadenschichten zu definieren.

{{InteractiveExample("CSS Demo: @layer", "tabbed-standard")}}

```css interactive-example
@layer module, state;

@layer state {
  .alert {
    background-color: brown;
  }
  p {
    border: medium solid limegreen;
  }
}

@layer module {
  .alert {
    border: medium solid violet;
    background-color: yellow;
    color: white;
  }
}
```

```html interactive-example
<p class="alert">Beware of the zombies</p>
```

## Syntax

```css
/* statement at-rules */
@layer layer-name;
@layer layer-name, layer-name, layer-name;

/* block at-rules */
@layer {rules}
@layer layer-name {rules}
```

wo:

- _layer-name_
  - : Der Name der Kaskadenschicht.
- _rules_
  - : Das Set von CSS-Regeln in der Kaskadenschicht.

## Beschreibung

Regeln innerhalb einer Kaskadenschicht kaskadieren zusammen, was Entwicklern mehr Kontrolle über die Kaskade gibt. Stile, die nicht in einer Schicht definiert sind, überschreiben immer Stile, die in benannten und anonymen Schichten deklariert sind.

Das folgende Diagramm zeigt die Schichtprioritäten, wobei die Schichten in der Reihenfolge 1, 2, ..., N deklariert werden.

![Diagramm, das die Prioritäten der Kaskadenschicht zeigt](https://mdn.github.io/shared-assets/images/diagrams/css/at-rules/layer-cascade.svg)

Wie im obigen Diagramm erwähnt, haben _wichtige Deklarationen_, Deklarationen mit dem `!important`-Flag, Vorrang vor _normalen Deklarationen_ oder regulären Deklarationen ohne `!important`-Flag. Die Rangfolge unter wichtigen Regeln ist entgegen der normalen Regeln. Übergänge haben die höchste Priorität. Danach folgen in absteigender Reihenfolge der Priorität die wichtigen {{Glossary("user_agent", "User-Agent")}}-Deklarationen, wichtigen Nutzer-Deklarationen und wichtigen Autor-Deklarationen; in dieser Reihenfolge. Nutzer können Stile durch Browsereinstellungen, Betriebssystemeinstellungen oder Browser-Erweiterungen festlegen. Ihre wichtigen Deklarationen haben Vorrang vor den _Autor_- oder _Webentwickler_ geschriebenen, wichtigen Deklarationen.

Innerhalb der Autorenstile haben alle wichtigen Deklarationen innerhalb von CSS-Schichten Vorrang vor allen wichtigen Deklarationen, die außerhalb einer Schicht deklariert sind, während alle normalen Deklarationen innerhalb von CSS-Schichten eine niedrigere Priorität haben als Deklarationen, die außerhalb einer Schicht deklariert sind. Die Deklarationsreihenfolge ist wichtig. Die zuerst deklarierte Schicht hat die niedrigste Priorität und die zuletzt deklarierte Schicht hat die höchste Priorität. Die Priorität wird jedoch umgekehrt, wenn das [`!important`](/de/docs/Web/CSS/Reference/Values/important)-Flag verwendet wird.

Die `@layer`-At-Regel wird verwendet, um eine Kaskadenschicht auf eine von drei Arten zu erstellen.

Die erste Möglichkeit besteht darin, eine `@layer`-Blockregel zu verwenden, um eine benannte Kaskadenschicht mit den CSS-Regeln für diese Schicht darin zu erstellen, wie folgt:

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

Die zweite Möglichkeit besteht darin, eine `@layer`-Anweisungsregel zu verwenden, um eine oder mehrere durch Kommas getrennte benannte Kaskadenschichten zu erstellen, ohne irgendwelche Stile zuzuweisen. Dies kann eine einzelne Schicht sein, wie unten gezeigt:

```css
@layer utilities;
```

Mehrere Schichten können auf einmal definiert werden, wie unten gezeigt:

```css
@layer theme, layout, utilities;
```

Dies ist nützlich, weil die anfängliche Reihenfolge, in der die Schichten deklariert werden, angibt, welche Schicht Vorrang hat. Wie bei Deklarationen wird die zuletzt gelistete Schicht gewinnen, wenn Deklarationen in mehreren Schichten gefunden werden. Daher würde im vorherigen Beispiel, wenn eine konkurrierende Regel in `theme` und `utilities` gefunden wurde, die in `utilities` gewinnen und angewendet werden.

Eine Regel in `utilities` würde angewendet werden, _selbst wenn sie eine geringere Spezifität_ hat als die Regel in `theme`. Dies liegt daran, dass, sobald die Schichtreihenfolge festgelegt ist, Spezifität und Reihenfolge des Erscheinens ignoriert werden. Dies ermöglicht die Verwendung einfacher CSS-Selektoren, weil Sie nicht sicherstellen müssen, dass ein Selektor eine hohe genug Spezifität hat, um konkurrierende Regeln zu überschreiben; Sie müssen nur sicherstellen, dass er in einer späteren Schicht erscheint.

> [!NOTE]
> Nachdem Sie Ihre Schichtnamen deklariert haben und damit deren Reihenfolge festgelegt haben, können Sie der Schicht CSS-Regeln hinzufügen, indem Sie den Namen erneut deklarieren. Die Stile werden dann an die Schicht angehängt und die Schichtreihenfolge wird nicht geändert.

Die dritte Möglichkeit besteht darin, eine unbenannte Schicht mit einer `@layer`-Blockregel zu erstellen, ohne einen Schichtnamen anzugeben. Zum Beispiel:

```css
@layer {
  p {
    margin-block: 1rem;
  }
}
```

Dies erstellt eine _anonyme Kaskadenschicht_. Diese Schicht funktioniert auf die gleiche Weise wie benannte Schichten; jedoch können ihr später keine Regeln zugewiesen werden. Die Rangfolge für anonyme Schichten ist die Reihenfolge, in der Schichten deklariert werden, benannt oder nicht, und niedriger als die außerhalb einer Schicht deklarierten Stile.

Eine weitere Möglichkeit, eine Kaskadenschicht zu erstellen, besteht in der Verwendung von {{cssxref("@import")}}. In diesem Fall würden die Regeln im importierten Stylesheet stehen. Denken Sie daran, dass die `@import`-At-Regel allen anderen Regeltypen vorangehen muss, außer `@charset` und `@layer`-Anweisungen (nicht `@layer`-Blöcke).

```css
@import "theme.css" layer(utilities);
```

### Verschachteln von Schichten

Schichten können verschachtelt sein. Zum Beispiel:

```css
@layer framework {
  @layer layout {
  }
}
```

Um Regeln zu der `layout`-Schicht innerhalb von `framework` hinzuzufügen, verbinden Sie die beiden Namen mit einem `.`.

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

Ohne Schichten hätte der Selektor `.box p` die höchste Spezifität, und daher würde der Text `Hello, world!` grün angezeigt. Da die `type`-Schicht vor der anonymen Schicht kommt, die geschaffen wurde, um nicht-Schicht-Inhalt zu halten, wird der Text lila sein.

Achten Sie auch auf die Reihenfolge. Auch wenn wir den nicht geschichteten Stil zuerst deklarieren, wird er _nach_ den Schichtstilen angewendet.

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

{{EmbedLiveSample("Basic_example")}}

### Zuweisen von Regeln zu bestehenden Schichten

Im folgenden Beispiel werden zwei Schichten ohne angewandte Regeln erstellt, dann werden CSS-Regeln auf die beiden Schichten angewendet. Die `base`-Schicht definiert eine `color`, `border`, `font-size` und `padding`. Die `special`-Schicht definiert eine andere Farbe. Da `special` zuletzt definiert wurde, wird die definierte Farbe verwendet und der Text wird in `rebeccapurple` angezeigt. Alle anderen Regeln von `base` gelten weiterhin.

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

- {{cssxref("@import")}}
- [`CSSLayerBlockRule`](/de/docs/Web/API/CSSLayerBlockRule)
- [`CSSLayerStatementRule`](/de/docs/Web/API/CSSLayerStatementRule)
- [`!important`](/de/docs/Web/CSS/Reference/Values/important)
- {{cssxref("revert-layer")}}
- [Einführung in die CSS-Kaskade](/de/docs/Web/CSS/Guides/Cascade/Introduction)
- [Lernen: Konflikte behandeln](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
- [Lernen: Kaskadenschichten](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
- [Die Zukunft von CSS: Kaskadenschichten](https://www.bram.us/2021/09/15/the-future-of-css-cascade-layers-css-at-layer/) auf bram.us (2021)
