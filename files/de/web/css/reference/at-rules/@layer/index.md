---
title: "@layer"
slug: Web/CSS/Reference/At-rules/@layer
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Die **`@layer`** [CSS](/de/docs/Web/CSS) [at-rule](/de/docs/Web/CSS/CSS_syntax/At-rules) wird verwendet, um eine Kaskadenschicht zu deklarieren und kann auch verwendet werden, um die Reihenfolge der Prioritäten im Falle mehrerer Kaskadenschichten zu definieren.

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
  - : Der Name der Kaskadenschicht ist.
- _rules_
  - : Die Menge der CSS-Regeln in der Kaskadenschicht ist.

## Beschreibung

Regeln innerhalb einer Kaskadenschicht kaskadieren zusammen und geben Webentwicklern mehr Kontrolle über die Kaskade. Stile, die nicht in einer Schicht definiert sind, überschreiben immer Stile, die in benannten und anonymen Schichten deklariert sind.

Das folgende Diagramm zeigt die Priorität von Schichten, wobei Schichten in der Reihenfolge 1, 2, ..., N deklariert sind.

![Diagramm, das die Prioritäten von Kaskadenschichten zeigt](https://mdn.github.io/shared-assets/images/diagrams/css/at-rules/layer-cascade.svg)

Wie im obigen Diagramm vermerkt, haben _wichtige Deklarationen_, Deklarationen mit dem `!important`-Flag, Vorrang vor _normalen Deklarationen_ oder regulären Deklarationen ohne das `!important`-Flag. Die Reihenfolge der Priorität unter wichtigen Regeln ist das Gegenteil von normalen Regeln. Übergänge haben die höchste Priorität. In der Reihenfolge von höchster bis niedrigster Priorität folgen dann die wichtigen {{Glossary("user_agent", "Benutzer-Agent")}}-Deklarationen, wichtige Benutzerdeklarationen und wichtige Autorendeklarationen; in dieser Reihenfolge. Benutzer können Stile über Browsereinstellungen, Betriebssystemeinstellungen oder Browsererweiterungen angeben. Ihre wichtigen Deklarationen haben Vorrang vor den von _Autor_ oder _Webentwickler_ geschriebenen wichtigen Deklarationen.

Innerhalb von Autorenstilen haben alle wichtigen Deklarationen innerhalb von CSS-Schichten Vorrang vor allen wichtigen Deklarationen, die außerhalb einer Schicht deklariert sind, während alle normalen Deklarationen innerhalb von CSS-Schichten eine geringere Priorität haben als Deklarationen, die außerhalb einer Schicht deklariert sind.
Die Reihenfolge der Deklarationen ist entscheidend. Die zuerst deklarierte Schicht hat die niedrigste Priorität und die zuletzt deklarierte Schicht hat die höchste Priorität. Die Priorität wird jedoch umgekehrt, wenn das [`!important`](/de/docs/Web/CSS/Reference/Values/important)-Flag verwendet wird.

Die `@layer`-At-Regel wird auf eine von drei Arten verwendet, um eine Kaskadenschicht zu erstellen.

Die erste Methode ist die Verwendung einer `@layer`-Blockregel, um eine benannte Kaskadenschicht mit den CSS-Regeln für diese Schicht zu erstellen:

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

Die zweite Methode ist die Verwendung einer `@layer`-Anweisungsregel, um eine oder mehrere durch Kommas getrennte benannte Kaskadenschichten zu erstellen, ohne dabei Stile zuzuweisen. Dies kann eine einzelne Schicht sein, wie weiter unten gezeigt:

```css
@layer utilities;
```

Mehrere Schichten können gleichzeitig definiert werden, wie unten gezeigt:

```css
@layer theme, layout, utilities;
```

Dies ist nützlich, da die anfängliche Reihenfolge, in der Schichten deklariert werden, anzeigt, welche Schicht Vorrang hat. Wie bei Deklarationen wird die zuletzt aufgeführte Schicht gewinnen, wenn Deklarationen in mehreren Schichten gefunden werden. Daher würde im vorhergehenden Beispiel, wenn eine konkurrierende Regel in `theme` und `utilities` gefunden würde, die in `utilities` gewinnen und angewendet werden.

Eine Regel in `utilities` würde angewendet, _selbst wenn sie eine geringere Spezifität_ als die Regel in `theme` hat. Dies liegt daran, dass, sobald die Schichtreihenfolge festgelegt wurde, Spezifität und Erscheinungsreihenfolge ignoriert werden. Dies ermöglicht die Verwendung einfacherer CSS-Selektoren, da Sie nicht sicherstellen müssen, dass ein Selektor eine ausreichend hohe Spezifität hat, um konkurrierende Regeln zu überschreiben; Sie müssen lediglich sicherstellen, dass er in einer späteren Schicht erscheint.

> [!NOTE]
> Nachdem Sie Ihre Schichtnamen deklariert haben und damit deren Reihenfolge festgelegt haben, können Sie der Schicht CSS-Regeln hinzufügen, indem Sie den Namen erneut deklarieren. Die Stile werden dann an die Schicht angehängt, und die Schichtreihenfolge wird nicht geändert.

Die dritte Methode ist das Erstellen einer unbenannten Schicht durch eine `@layer`-Blockregel ohne Einschluss eines Schichtnamens. Zum Beispiel:

```css
@layer {
  p {
    margin-block: 1rem;
  }
}
```

Dies erstellt eine _anonyme Kaskadenschicht_. Diese Schicht funktioniert genauso wie benannte Schichten; jedoch können ihr später keine Regeln zugewiesen werden. Die Reihenfolge der Prioritäten für anonyme Schichten ist die Reihenfolge, in der Schichten deklariert werden, benannt oder nicht, und unterhalb der Stile, die außerhalb einer Schicht deklariert sind.

Eine andere Möglichkeit, eine Kaskadenschicht zu erstellen, besteht in der Verwendung von {{cssxref("@import")}}. In diesem Fall wären die Regeln im importierten Stylesheet. Denken Sie daran, dass die `@import`-At-Regel allen anderen Regeltypen, außer `@charset` und `@layer`-Regeln, vorausgehen muss.

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

Um Regeln an die `layout`-Schicht innerhalb von `framework` anzuhängen, verbinden Sie die beiden Namen mit einem `.`.

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

Im folgenden Beispiel werden zwei CSS-Regeln erstellt. Eine für das {{htmlelement("p")}}-Element außerhalb einer Schicht und eine innerhalb einer Schicht namens `type` für `.box p`.

Ohne Schichten würde der Selektor `.box p` die höchste Spezifität besitzen, und der Text `Hello, world!` wird in Grün angezeigt. Da jedoch die `type`-Schicht vor der anonymen Schicht kommt, die für nicht in einer Schicht enthaltene Inhalte erstellt wurde, wird der Text lila sein.

Beachten Sie auch die Reihenfolge. Auch wenn wir den nicht verschichteten Stil zuerst deklarieren, wird er _nach_ den Schichtstilen angewendet.

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

### Zuweisung von Regeln zu bestehenden Schichten

Im folgenden Beispiel werden zwei Schichten erstellt, ohne dass Regeln angewendet werden. Dann werden CSS-Regeln auf die beiden Schichten angewendet. Die `base`-Schicht definiert eine `color`, `border`, `font-size` und `padding`. Die `special`-Schicht definiert eine andere Farbe. Da `special` zuletzt definiert wurde, wird die Farbe verwendet, die es bereitstellt, und der Text wird mit `rebeccapurple` angezeigt. Alle anderen Regeln von `base` bleiben weiterhin gültig.

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

- [`@import`](/de/docs/Web/CSS/Reference/At-rules/@import)
- [`CSSLayerBlockRule`](/de/docs/Web/API/CSSLayerBlockRule)
- [`CSSLayerStatementRule`](/de/docs/Web/API/CSSLayerStatementRule)
- [`!important`](/de/docs/Web/CSS/Reference/Values/important)
- [`revert-layer`](/de/docs/Web/CSS/Reference/Values/revert-layer)
- [Einführung in die CSS-Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade)
- [Lernen: Umgang mit Konflikten](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
- [Lernen: Kaskadenschichten](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
- [Die Zukunft von CSS: Kaskadenschichten](https://www.bram.us/2021/09/15/the-future-of-css-cascade-layers-css-at-layer/) auf bram.us (2021)
