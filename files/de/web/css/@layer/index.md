---
title: "@layer"
slug: Web/CSS/@layer
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{CSSRef}}

Die **`@layer`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/At-rule) wird verwendet, um eine Kaskadenschicht zu deklarieren und kann auch verwendet werden, um die Reihenfolge der Vorrangstellung im Falle mehrerer Kaskadenschichten festzulegen.

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
  - : Der Satz von CSS-Regeln in der Kaskadenschicht ist.

## Beschreibung

Regeln innerhalb einer Kaskadenschicht kaskadieren zusammen und geben Webentwicklern mehr Kontrolle über die Kaskade. Stile, die nicht in einer Schicht definiert sind, überschreiben immer Stile, die in benannten und anonymen Schichten erklärt werden.

Das folgende Diagramm zeigt die Schichtprioritäten, wobei Schichten in der Reihenfolge 1, 2, ..., N deklariert werden.

![Diagramm, das die Prioritäten der Kaskadenschicht zeigt](https://mdn.github.io/shared-assets/images/diagrams/css/at-rules/layer-cascade.svg)

Wie im obigen Diagramm vermerkt, haben _wichtige Deklarationen_, Deklarationen mit dem `!important`-Flag, Vorrang vor _normalen Deklarationen_, oder regulären Deklarationen ohne das `!important`-Flag. Die Reihenfolge der Vorrangstellung unter wichtigen Regeln ist das Gegenteil von normalen Regeln. Übergänge haben den höchsten Vorrang. In der Reihenfolge von höchster bis niedrigster Priorität folgen wichtige {{Glossary("user_agent", "User-Agent")}}-Deklarationen, wichtige Benutzerdeklarationen und wichtige Autoren-Deklarationen; in dieser Reihenfolge. Benutzer können Stile mithilfe von Browsereinstellungen, Betriebssystemeinstellungen oder Browsererweiterungen angeben. Ihre wichtigen Deklarationen haben Vorrang vor den _Autor_- oder _Webentwickler_ geschriebenen wichtigen Deklarationen.

Innerhalb der Autorenstile haben alle wichtigen Deklarationen innerhalb von CSS-Schichten Vorrang vor allen wichtigen Deklarationen, die außerhalb einer Schicht deklariert sind, während alle normalen Deklarationen innerhalb von CSS-Schichten niedriger priorisiert sind als Deklarationen, die außerhalb einer Schicht deklariert sind.
Die Deklarationsreihenfolge ist wichtig. Die erste deklarierte Schicht hat die niedrigste Priorität und die letzte deklarierte Schicht hat die höchste Priorität. Wenn jedoch das [`!important`](/de/docs/Web/CSS/important)-Flag verwendet wird, wird die Priorität umgekehrt.

Die `@layer` At-Regel wird verwendet, um eine Kaskadenschicht auf eine von drei Arten zu erstellen.

Die erste Möglichkeit besteht darin, einen `@layer` Block At-Regel zu verwenden, um eine benannte Kaskadenschicht mit den CSS-Regeln für diese Schicht darin zu erstellen, wie folgt:

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

Die zweite Möglichkeit besteht darin, eine `@layer` Anweisung At-Regel zu verwenden, um eine oder mehrere durch Kommas getrennte benannte Kaskadenschichten zu erstellen, ohne Stile zuzuweisen. Dies kann eine einzelne Schicht sein, wie unten gezeigt:

```css
@layer utilities;
```

Mehrere Schichten können auf einmal definiert werden, wie unten gezeigt:

```css
@layer theme, layout, utilities;
```

Dies ist nützlich, da die anfängliche Reihenfolge, in der Schichten deklariert werden, angibt, welche Schicht Vorrang hat. Wie bei Deklarationen wird die zuletzt gelistete Schicht gewinnen, wenn sich Deklarationen in mehreren Schichten befinden. Daher, wenn ein konkurrierendes Regelwerk in `theme` und `utilities` gefunden wird, würde das in `utilities` gewinnen und angewendet werden.

Eine Regel in `utilities` würde angewendet, _selbst wenn sie eine niedrigere Spezifität_ als die Regel in `theme` hat. Dies liegt daran, dass, sobald die Schichtreihenfolge festgelegt ist, Spezifität und Erscheinungsreihenfolge ignoriert werden. Dies ermöglicht die Verwendung einfacherer CSS-Selektoren, da Sie nicht sicherstellen müssen, dass ein Selektor eine hohe genug Spezifität hat, um konkurrierende Regeln zu überschreiben; Sie müssen nur sicherstellen, dass er in einer späteren Schicht erscheint.

> [!NOTE]
> Wenn Sie Ihre Schichtnamen deklariert haben und somit ihre Reihenfolge festgelegt haben, können Sie der Schicht CSS-Regeln hinzufügen, indem Sie den Namen erneut deklarieren. Die Stile werden dann an die Schicht angehängt und die Schichtreihenfolge wird nicht geändert.

Die dritte Möglichkeit besteht darin, eine unbenannte Schicht mit einer `@layer` Block At-Regel zu erstellen, ohne einen Schichtnamen einzuschließen. Zum Beispiel:

```css
@layer {
  p {
    margin-block: 1rem;
  }
}
```

Dies erstellt eine _anonyme Kaskadenschicht_. Diese Schicht funktioniert auf die gleiche Weise wie benannte Schichten; es können jedoch später keine Regeln dafür zugewiesen werden. Die Reihenfolge der Priorität für anonyme Schichten ist die Reihenfolge, in der Schichten deklariert werden, benannt oder nicht, und niedriger als die Stile, die außerhalb einer Schicht deklariert sind.

Eine weitere Möglichkeit, eine Kaskadenschicht zu erstellen, besteht darin, {{cssxref("@import")}} zu verwenden. In diesem Fall wären die Regeln im importierten Stylesheet. Beachten Sie, dass die `@import` At-Regel allen anderen Regeltypen vorausgehen muss, außer `@charset` und `@layer` Regeln.

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

### Grundlegendes Beispiel

Im folgenden Beispiel werden zwei CSS-Regeln erstellt. Eine für das {{htmlelement("p")}}-Element außerhalb einer Schicht und eine innerhalb einer Schicht namens `type` für `.box p`.

Ohne Schichten hätte der Selektor `.box p` die höchste Spezifität, und daher würde der Text "Hello, world!" in grün angezeigt werden. Da die `type` Schicht vor der anonymen Schicht kommt, die erstellt wird, um nicht geschichtete Inhalte zu halten, wird der Text lila sein.

Beachten Sie auch die Reihenfolge. Auch wenn wir den nicht geschichteten Stil zuerst deklarieren, wird er trotzdem _nach_ den Schichtstilen angewendet.

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

Im folgenden Beispiel werden zwei Schichten ohne angewendete Regeln erstellt, dann werden CSS-Regeln auf die beiden Schichten angewendet. Die `base` Schicht definiert eine `color`, `border`, `font-size` und `padding`. Die `special` Schicht definiert eine andere Farbe. Da `special` zuletzt kommt, wenn die Schichten definiert wurden, wird die von ihr bereitgestellte Farbe verwendet und der Text wird mit `rebeccapurple` angezeigt. Alle anderen Regeln aus `base` gelten weiterhin.

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
- [Lernen: Umgang mit Konflikten](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
- [Lernen: Kaskadenschichten](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
- [Die Zukunft von CSS: Kaskadenschichten](https://www.bram.us/2021/09/15/the-future-of-css-cascade-layers-css-at-layer/) auf bram.us (2021)
