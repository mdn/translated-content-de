---
title: "@layer"
slug: Web/CSS/Reference/At-rules/@layer
l10n:
  sourceCommit: 5005d73d35175d72a470c2285f1c3953a54e3688
---

Die **`@layer`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules) wird verwendet, um eine Kaskadenschicht zu deklarieren und kann auch verwendet werden, um die Reihenfolge der Prioritäten bei mehreren Kaskadenschichten zu definieren.

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
  - : Das Set der CSS-Regeln in der Kaskadenschicht.

## Beschreibung

Regeln innerhalb einer Kaskadenschicht kaskadieren zusammen, was Webentwicklern mehr Kontrolle über die Kaskade gibt. Stile, die nicht in einer Schicht definiert sind, überschreiben immer Stile, die in benannten und anonymen Schichten deklariert sind.

Das folgende Diagramm zeigt die Schichtprioritäten, wobei Schichten in der Reihenfolge 1, 2, ..., N deklariert werden.

![Diagramm, das die Prioritäten von Kaskadenschichten zeigt](https://mdn.github.io/shared-assets/images/diagrams/css/at-rules/layer-cascade.svg)

Wie im obigen Diagramm vermerkt, haben _wichtige Deklarationen_, Deklarationen mit dem `!important`-Flag, Priorität vor _normalen Deklarationen_ oder regulären Deklarationen ohne das `!important`-Flag. Die Reihenfolge der Priorität bei wichtigen Regeln ist das Gegenteil von normalen Regeln. Transitionen haben die höchste Priorität. Danach folgen in der Reihenfolge von höchster zu niedrigster Priorität die wichtigen {{Glossary("user_agent", "Benutzeragenten")}}-Deklarationen, wichtige Benutzendeklarationen und wichtige Autorendeklarationen; in dieser Reihenfolge. Benutzer können Stile über Browsereinstellungen, Betriebssystempräferenzen oder Browsererweiterungen angeben. Ihre wichtigen Deklarationen haben Vorrang vor wichtigen Deklarationen, die vom _Autor_ oder _Webentwickler_ geschrieben wurden.

Innerhalb von Autorenstilen haben alle wichtigen Deklarationen innerhalb von CSS-Schichten Vorrang vor wichtigen Deklarationen, die außerhalb einer Schicht erklärt wurden, während alle normalen Deklarationen innerhalb von CSS-Schichten eine niedrigere Priorität haben als Deklarationen, die außerhalb einer Schicht erklärt wurden. Die Reihenfolge der Deklarationen ist wichtig. Die zuerst deklarierte Schicht hat die niedrigste Priorität und die zuletzt deklarierte Schicht hat die höchste Priorität. Allerdings ist die Priorität umgekehrt, wenn das [`!important`](/de/docs/Web/CSS/Reference/Values/important)-Flag verwendet wird.

Die `@layer` At-Regel wird verwendet, um eine Kaskadenschicht auf eine der folgenden drei Arten zu erstellen.

Die erste Möglichkeit ist die Verwendung einer `@layer` Blockatregel zur Erstellung einer benannten Kaskadenschicht mit den CSS-Regeln für diese Schicht innerhalb, wie folgt:

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

Die zweite Möglichkeit ist die Verwendung einer `@layer` Anweisungsregel, um eine oder mehrere durch Kommas getrennte benannte Kaskadenschichten zu erstellen, ohne Stile zuzuweisen. Dies kann eine einzelne Schicht sein, wie unten gezeigt:

```css
@layer utilities;
```

Mehrere Schichten können gleichzeitig definiert werden, wie unten gezeigt:

```css
@layer theme, layout, utilities;
```

Dies ist nützlich, da die anfängliche Reihenfolge, in der Schichten deklariert werden, angibt, welche Schicht Vorrang hat. Wie bei Deklarationen wird die zuletzt aufgeführte Schicht gewinnen, wenn Deklarationen in mehreren Schichten gefunden werden. Daher, wie im vorherigen Beispiel, würde, wenn eine konkurrierende Regel in `theme` und `utilities` gefunden wird, die Regel in `utilities` gewinnen und angewendet werden.

Eine Regel in `utilities` würde angewendet, _auch wenn sie eine geringere Spezifität_ als die Regel in `theme` hat. Dies liegt daran, dass, sobald die Schichtreihenfolge festgelegt wurde, Spezifität und Erscheinungsreihenfolge ignoriert werden. Dies ermöglicht die Verwendung einfacherer CSS-Selektoren, da Sie nicht sicherstellen müssen, dass ein Selektor eine ausreichend hohe Spezifität hat, um konkurrierende Regeln zu überschreiben; alles, was Sie sicherstellen müssen, ist, dass er in einer späteren Schicht erscheint.

> [!NOTE]
> Nachdem Sie Ihre Schichtnamen deklariert haben und damit deren Reihenfolge festgelegt haben, können Sie der Schicht CSS-Regeln hinzufügen, indem Sie den Namen erneut deklarieren. Die Stile werden dann der Schicht hinzugefügt, und die Schichtreihenfolge wird nicht geändert.

Die dritte Möglichkeit ist, eine unbenannte Schicht mit einer `@layer` Blockatregel zu erstellen, ohne einen Schichtnamen anzugeben. Zum Beispiel:

```css
@layer {
  p {
    margin-block: 1rem;
  }
}
```

Dies erstellt eine _anonyme Kaskadenschicht_. Diese Schicht funktioniert genauso wie benannte Schichten; es können jedoch später keine Regeln zugewiesen werden. Die Reihenfolge der Priorität für anonyme Schichten ist die Reihenfolge, in der die Schichten deklariert werden, benannt oder nicht, und niedriger als die Stile, die außerhalb einer Schicht deklariert sind.

Eine andere Möglichkeit, eine Kaskadenschicht zu erstellen, ist die Verwendung von {{cssxref("@import")}}. In diesem Fall wären die Regeln im importierten Stylesheet. Denken Sie daran, dass die `@import` At-Regel allen anderen Regeltypen vorausgehen muss, außer `@charset` und `@layer` Anweisungen (nicht `@layer` Blöcke).

```css
@import "theme.css" layer(utilities);
```

### Verschachteln von Schichten

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

Ohne Schichten hätte der Selektor `.box p` die höchste Spezifität und daher würde der Text "Hello, world!" in Grün angezeigt werden. Da die `type`-Schicht vor der anonymen Schicht kommt, die für nicht geschichteten Inhalt erstellt wurde, wird der Text lila sein.

Beachten Sie auch die Reihenfolge. Auch wenn wir den nicht geschichteten Stil zuerst deklarieren, wird er dennoch _nach_ den geschichteten Stilen angewendet.

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

Im folgenden Beispiel werden zwei Schichten erstellt, ohne dass Regeln angewendet werden, dann werden CSS-Regeln auf die beiden Schichten angewendet. Die `base`-Schicht definiert eine `color`, `border`, `font-size` und `padding`. Die `special`-Schicht definiert eine andere Farbe. Da `special` an letzter Stelle definiert wurde, wird die von ihr bereitgestellte Farbe verwendet und der Text wird in `rebeccapurple` angezeigt. Alle anderen Regeln von `base` gelten weiterhin.

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
- [Lernen: Umgang mit Konflikten](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
- [Lernen: Kaskadenschichten](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
- [Die Zukunft von CSS: Kaskadenschichten](https://www.bram.us/2021/09/15/the-future-of-css-cascade-layers-css-at-layer/) auf bram.us (2021)
