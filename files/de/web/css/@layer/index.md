---
title: "@layer"
slug: Web/CSS/@layer
l10n:
  sourceCommit: 33a12980eb49cc795a41f15ec7a0181270ad3048
---

{{CSSRef}}

Die **`@layer`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) wird verwendet, um eine Kaskadenschicht zu deklarieren und kann auch verwendet werden, um die Reihenfolge der Priorität im Falle mehrerer Kaskadenschichten festzulegen.

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
  - : Die Menge der CSS-Regeln in der Kaskadenschicht.

## Beschreibung

Regeln innerhalb einer Kaskadenschicht kaskadieren zusammen und geben Webentwicklern mehr Kontrolle über die Kaskade. Stile, die nicht in einer Schicht definiert sind, überschreiben immer Stile, die in benannten und anonymen Schichten deklariert sind.

Das folgende Diagramm zeigt die Prioritäten der Schichten, bei denen Schichten in der Reihenfolge 1, 2, ..., N deklariert werden.

![Diagramm, das die Prioritäten von Kaskadenschichten zeigt](https://mdn.github.io/shared-assets/images/diagrams/css/at-rules/layer-cascade.svg)

Wie im obigen Diagramm dargestellt, haben _wichtige Deklarationen_, Deklarationen mit dem `!important`-Flag, Priorität über _normalen Deklarationen_, oder regulären Deklarationen ohne das `!important`-Flag. Die Reihenfolge der Priorität unter wichtigen Regeln ist das Gegenteil der normalen Regeln. Transitions haben die höchste Priorität. In der Reihenfolge von höchster zu niedrigster Priorität kommen danach die wichtigen {{Glossary("user_agent", "User-Agent")}}-Deklarationen, wichtigen Benutzerdeklarationen und wichtigen Autorendeklarationen; in dieser Reihenfolge. Benutzer können Stile mit Browser-Einstellungen, Betriebssystemeinstellungen oder Browser-Erweiterungen angeben. Ihre wichtigen Deklarationen haben Vorrang vor von _Autoren_, oder _Webentwicklern_, geschriebenen wichtigen Deklarationen.

Innerhalb von Autorenstilen haben alle wichtigen Deklarationen innerhalb von CSS-Schichten Vorrang vor allen wichtigen Deklarationen, die außerhalb einer Schicht deklariert sind, während alle normalen Deklarationen innerhalb von CSS-Schichten eine niedrigere Priorität haben als Deklarationen, die außerhalb einer Schicht deklariert sind.
Die Reihenfolge der Deklarationen ist entscheidend. Die zuerst deklarierte Schicht erhält die niedrigste Priorität und die zuletzt deklarierte Schicht erhält die höchste Priorität. Die Priorität wird jedoch umgekehrt, wenn das [`!important`](/de/docs/Web/CSS/important)-Flag verwendet wird.

Die `@layer` At-Regel wird verwendet, um eine Kaskadenschicht auf eine von drei Arten zu erstellen.

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

Die zweite Möglichkeit besteht darin, eine `@layer`-Anweisung zu verwenden, um eine oder mehrere kommagetrennte benannte Kaskadenschichten zu erstellen, ohne Stile zuzuweisen. Dies kann eine einzelne Schicht sein, wie unten gezeigt:

```css
@layer utilities;
```

Mehrere Schichten können auf einmal definiert werden, wie unten gezeigt:

```css
@layer theme, layout, utilities;
```

Dies ist nützlich, da die anfängliche Reihenfolge, in der Schichten deklariert werden, angibt, welche Schicht Vorrang hat. Wie bei Deklarationen gewinnt die zuletzt aufgelistete Schicht, wenn Deklarationen in mehreren Schichten gefunden werden. Daher würde im vorherigen Beispiel, wenn eine konkurrierende Regel in `theme` und `utilities` gefunden würde, die in `utilities` gewinnen und angewendet werden.

Eine Regel in `utilities` würde _selbst wenn sie eine geringere Spezifität_ als die Regel in `theme` hat, angewendet. Dies liegt daran, dass, sobald die Schichtreihenfolge festgelegt wurde, Spezifität und Erscheinungsreihenfolge ignoriert werden. Dadurch können einfachere CSS-Selektoren verwendet werden, da Sie nicht sicherstellen müssen, dass ein Selektor eine ausreichend hohe Spezifität hat, um konkurrierende Regeln zu überschreiben; Sie müssen nur sicherstellen, dass er in einer späteren Schicht erscheint.

> [!NOTE]
> Wenn Sie Ihre Schichtnamen deklariert haben und damit deren Reihenfolge festgelegt haben, können Sie CSS-Regeln zur Schicht hinzufügen, indem Sie den Namen erneut deklarieren. Die Stile werden dann zur Schicht hinzugefügt und die Reihenfolge der Schicht wird nicht geändert.

Die dritte Möglichkeit besteht darin, eine unbenannte Schicht unter Verwendung einer `@layer`-Blockregel zu erstellen, ohne einen Schichtnamen einzuschließen. Zum Beispiel:

```css
@layer {
  p {
    margin-block: 1rem;
  }
}
```

Dies erstellt eine _anonyme Kaskadenschicht_. Diese Schicht funktioniert genauso wie benannte Schichten; jedoch können ihr später keine Regeln zugewiesen werden. Die Reihenfolge der Priorität für anonyme Schichten ist die Reihenfolge, in der Schichten deklariert werden, egal ob sie benannt sind oder nicht, und niedriger als die Stile, die außerhalb einer Schicht deklariert sind.

Eine andere Möglichkeit, eine Kaskadenschicht zu erstellen, besteht darin, {{cssxref("@import")}} zu verwenden. In diesem Fall würden die Regeln im importierten Stylesheet enthalten sein. Denken Sie daran, dass die `@import` At-Regel allen anderen Regeltypen vorausgehen muss, mit Ausnahme von `@charset` und `@layer` Regeln.

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

Um Regeln zur `layout` Schicht innerhalb von `framework` hinzuzufügen, verbinden Sie die beiden Namen mit einem `.`.

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

Ohne Schichten hätte der Selektor `.box p` die höchste Spezifität, und deshalb würde der Text `Hello, world!` in Grün angezeigt. Da die `type` Schicht vor der anonymen Schicht kommt, die Inhalte ohne Schichten enthält, wird der Text in Lila dargestellt.

Beachten Sie auch die Reihenfolge. Auch wenn wir den nicht geschichteten Stil zuerst deklarieren, wird er _nach_ den geschichteten Stilen angewendet.

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

Im folgenden Beispiel werden zwei Schichten ohne angewendete Regeln erstellt, dann werden CSS-Regeln auf die beiden Schichten angewendet. Die `base` Schicht definiert eine `color`, `border`, `font-size` und `padding`. Die `special` Schicht definiert eine andere Farbe. Da `special` zuletzt kommt, wenn die Schichten definiert wurden, wird die von ihr angegebene Farbe verwendet und der Text wird mit `rebeccapurple` dargestellt. Alle anderen Regeln von `base` werden weiterhin angewendet.

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
