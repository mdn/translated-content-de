---
title: "@layer"
slug: Web/CSS/@layer
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`@layer`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) wird verwendet, um eine Kaskadenschicht zu deklarieren und kann auch verwendet werden, um die Reihenfolge der Priorität bei mehreren Kaskadenschichten zu definieren.

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

wobei:

- _layer-name_
  - : Der Name der Kaskadenschicht.
- _rules_
  - : Der Satz von CSS-Regeln in der Kaskadenschicht.

## Beschreibung

Regeln innerhalb einer Kaskadenschicht kaskadieren zusammen und geben Webentwicklern mehr Kontrolle über die Kaskade. Stile, die nicht in einer Schicht definiert sind, überschreiben immer Stile, die in benannten und anonymen Schichten deklariert sind.

Das folgende Diagramm zeigt Schichtprioritäten, wobei Schichten in der Reihenfolge 1, 2, ..., N deklariert werden.

![Diagramm zeigt Prioritäten der Kaskadenschichten](https://mdn.github.io/shared-assets/images/diagrams/css/at-rules/layer-cascade.svg)

Wie im obigen Diagramm erwähnt, haben _wichtige Deklarationen_, Deklarationen mit dem `!important`-Flag, Vorrang vor _normalen Deklarationen_ oder regulären Deklarationen ohne das `!important`-Flag. Die Reihenfolge der Priorität unter wichtigen Regeln ist das Gegenteil der normalen Regeln. Übergänge haben die höchste Priorität. Als nächstes in der Reihenfolge von höchster bis niedrigster Priorität stehen die wichtigen {{Glossary("user_agent", "Benutzeragenten")}}-Deklarationen, wichtige Benutzerdokumentationen und wichtige Autorendokumentationen; in dieser Reihenfolge. Benutzer können Stile durch Browser-Einstellungen, Betriebssystemeinstellungen oder Browser-Erweiterungen angeben. Ihre wichtigen Deklarationen haben Vorrang vor den von _Autoren_ oder _Webentwicklern_ geschriebenen wichtigen Deklarationen.

Innerhalb von Autorenstilen haben alle wichtigen Deklarationen innerhalb von CSS-Schichten Vorrang vor allen wichtigen Deklarationen, die außerhalb einer Schicht erklärt werden, während alle normalen Deklarationen innerhalb von CSS-Schichten eine niedrigere Priorität haben als Deklarationen, die außerhalb einer Schicht erklärt werden.
Die Reihenfolge der Deklaration ist wichtig. Die zuerst deklarierte Schicht hat die niedrigste Priorität, und die zuletzt deklarierte Schicht hat die höchste Priorität. Jedoch wird die Priorität umgekehrt, wenn das [`!important`](/de/docs/Web/CSS/important) Flag verwendet wird.

Die `@layer` At-Regel wird verwendet, um auf eine von drei Arten eine Kaskadenschicht zu erstellen.

Die erste Methode besteht darin, eine benannte Kaskadenschicht mit den CSS-Regeln für diese Schicht innerhalb eines `@layer`-Block At-Regels zu erstellen:

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

Die zweite Methode besteht darin, eine oder mehrere mit Kommas getrennte benannte Kaskadenschichten zu erstellen, ohne Stile zuzuweisen. Dies kann eine einzelne Schicht sein, wie unten gezeigt:

```css
@layer utilities;
```

Es können mehrere Schichten auf einmal definiert werden, wie unten gezeigt:

```css
@layer theme, layout, utilities;
```

Dies ist nützlich, da die anfängliche Reihenfolge, in der Schichten deklariert werden, angibt, welche Schicht Vorrang hat. Wie bei Deklarationen gewinnt die zuletzt aufgeführte Schicht, wenn Deklarationen in mehreren Schichten gefunden werden. Daher, wenn ein konkurrierender Regel in `theme` und `utilities` gefunden wird, würde die Regel in `utilities` gewinnen und angewendet werden.

Eine Regel in `utilities` würde angewendet, _selbst wenn sie eine geringere Spezifität_ als die Regel in `theme` hat. Dies liegt daran, dass, sobald die Schichtenreihenfolge festgelegt wurde, Spezifität und Reihenfolge des Auftretens ignoriert werden. Dies ermöglicht die Verwendung einfacherer CSS-Selektoren, da Sie nicht sicherstellen müssen, dass ein Selektor eine hohe genug Spezifität hat, um konkurrierende Regeln zu überschreiten; alles, was Sie sicherstellen müssen, ist, dass er in einer späteren Schicht erscheint.

> [!NOTE]
> Nachdem Sie die Namen Ihrer Schichten deklariert und damit ihre Reihenfolge festgelegt haben, können Sie CSS-Regeln zur Schicht hinzufügen, indem Sie den Namen erneut deklarieren. Die Stile werden dann der Schicht hinzugefügt und die Schichtenreihenfolge wird nicht geändert.

Die dritte Methode besteht darin, eine unbenannte Schicht zu erstellen, indem ein `@layer`-Block At-Regel ohne Angabe eines Schichtnamens erstellt wird. Zum Beispiel:

```css
@layer {
  p {
    margin-block: 1rem;
  }
}
```

Dies erstellt eine _anonyme Kaskadenschicht_. Diese Schicht funktioniert auf die gleiche Weise wie benannte Schichten; jedoch können ihr später keine Regeln zugewiesen werden. Die Reihenfolge der Priorität anonymer Schichten ist die Reihenfolge, in der Schichten deklariert werden, ob benannt oder nicht, und niedriger als die Stile, die außerhalb einer Schicht deklariert werden.

Eine weitere Möglichkeit, eine Kaskadenschicht zu erstellen, ist die Verwendung von {{cssxref("@import")}}. In diesem Fall würden die Regeln im importierten Stylesheet enthalten sein. Denken Sie daran, dass die `@import` At-Regel allen anderen Regeltypen außer `@charset`- und `@layer`-Regeln vorausgehen muss.

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

Ohne Schichten hätte der Selektor `.box p` die höchste Spezifität, sodass der Text `Hello, world!` in Grün dargestellt würde. Da die `type`-Schicht vor der anonymen Schicht kommt, die für nicht geschichteten Inhalt erstellt wurde, wird der Text lila sein.

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

{{EmbedLiveSample("Basic_example")}}

### Zuordnung von Regeln zu bestehenden Schichten

Im folgenden Beispiel werden zwei Schichten ohne angewendete Regeln erstellt, dann werden CSS-Regeln auf die beiden Schichten angewendet. Die `base`-Schicht definiert eine `color`, `border`, `font-size` und `padding`. Die `special`-Schicht definiert eine andere Farbe. Da `special` zuletzt definiert wurde, wird die von ihr bereitgestellte Farbe verwendet und der Text wird mit `rebeccapurple` angezeigt. Alle anderen Regeln von `base` gelten weiterhin.

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
- [Einführung in die CSS-Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade)
- [Lernen: Umgang mit Konflikten](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
- [Lernen: Kaskadenschichten](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
- [Die Zukunft von CSS: Kaskadenschichten](https://www.bram.us/2021/09/15/the-future-of-css-cascade-layers-css-at-layer/) auf bram.us (2021)
