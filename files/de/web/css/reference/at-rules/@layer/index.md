---
title: "@layer"
slug: Web/CSS/Reference/At-rules/@layer
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`@layer`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules) wird verwendet, um eine Kaskadenschicht zu deklarieren und kann auch verwendet werden, um die Reihenfolge der Priorität bei mehreren Kaskadenschichten zu definieren.

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
  - : Ist der Name der Kaskadenschicht.
- _rules_
  - : Ist die Menge der CSS-Regeln in der Kaskadenschicht.

## Beschreibung

Regeln innerhalb einer Kaskadenschicht kaskadieren zusammen, wodurch Webentwickler mehr Kontrolle über die Kaskade erhalten. Stile, die nicht in einer Schicht definiert sind, überschreiben immer Stile, die in benannten und anonymen Schichten deklariert sind.

Das folgende Diagramm zeigt die Prioritäten von Schichten, wo Schichten in der Reihenfolge 1, 2, ..., N deklariert sind.

![Diagramm, das die Prioritäten von Kaskadenschichten zeigt](https://mdn.github.io/shared-assets/images/diagrams/css/at-rules/layer-cascade.svg)

Wie im obigen Diagramm vermerkt, haben _wichtige Deklarationen_, Deklarationen mit dem `!important`-Flag, Priorität über _normalen Deklarationen_ oder regulären Deklarationen ohne das `!important`-Flag. Die Reihenfolge der Priorität unter wichtigen Regeln ist das Gegenteil von normalen Regeln. Übergänge haben die höchste Priorität. Als nächstes in absteigender Reihenfolge der Priorität kommen wichtige {{Glossary("user_agent", "User-Agent")}}-Deklarationen, wichtige Benutzer-Deklarationen und wichtige Autoren-Deklarationen; in dieser Reihenfolge. Benutzer können Stile durch Browser-Einstellungen, Betriebssystem-Einstellungen oder Browser-Erweiterungen spezifizieren. Ihre wichtigen Deklarationen haben Vorrang vor vom _Autor_ oder _Webentwickler_ geschriebenen wichtigen Deklarationen.

Innerhalb von Autorenstilen haben alle wichtigen Deklarationen innerhalb von CSS-Schichten Vorrang vor allen wichtigen Deklarationen, die außerhalb einer Schicht deklariert sind, während alle normalen Deklarationen innerhalb von CSS-Schichten eine niedrigere Priorität haben als Deklarationen, die außerhalb einer Schicht deklariert sind.
Die Deklarationsreihenfolge ist wichtig. Die zuerst deklarierte Schicht hat die niedrigste Priorität und die zuletzt deklarierte Schicht die höchste Priorität. Die Priorität wird jedoch umgekehrt, wenn das [`!important`](/de/docs/Web/CSS/Reference/Values/important)-Flag verwendet wird.

Die `@layer`-At-Regel wird verwendet, um eine Kaskadenschicht auf eine von drei Arten zu erstellen.

Die erste Möglichkeit besteht darin, eine `@layer`-Block-At-Regel zu verwenden, um eine benannte Kaskadenschicht mit den CSS-Regeln für diese Schicht zu erstellen, wie folgt:

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

Die zweite Möglichkeit besteht darin, eine `@layer`-Anweisungs-At-Regel zu verwenden, um eine oder mehrere durch Kommas getrennte benannte Kaskadenschichten zu erstellen, ohne Stile zuzuweisen. Dies kann eine einzelne Schicht sein, wie unten gezeigt:

```css
@layer utilities;
```

Mehrere Schichten können auf einmal definiert werden, wie unten gezeigt:

```css
@layer theme, layout, utilities;
```

Dies ist nützlich, da die anfängliche Reihenfolge, in der Schichten deklariert werden, darauf hinweist, welche Schicht Vorrang hat. Wie bei Deklarationen wird die zuletzt aufgeführte Schicht gewinnen, wenn Deklarationen in mehreren Schichten gefunden werden. Daher würde im obigen Beispiel, wenn eine konkurrierende Regel in `theme` und `utilities` gefunden wird, die in `utilities` gewinnen und angewendet werden.

Eine Regel in `utilities` würde angewendet werden, _selbst wenn sie eine niedrigere Spezifität_ als die Regel in `theme` hat. Das liegt daran, dass, sobald die Schichtreihenfolge festgelegt wurde, Spezifität und Erscheinungsreihenfolge ignoriert werden. Dies ermöglicht die Verwendung einfacherer CSS-Selektoren, da Sie nicht sicherstellen müssen, dass ein Selektor eine hohe genug Spezifität hat, um konkurrierende Regeln zu überschreiben; alles, was Sie sicherstellen müssen, ist, dass er in einer späteren Schicht erscheint.

> [!NOTE]
> Nachdem Sie Ihre Schichtnamen deklariert haben, und damit ihre Reihenfolge festgelegt haben, können Sie CSS-Regeln zur Schicht hinzufügen, indem Sie den Namen erneut deklarieren. Die Stile werden dann der Schicht hinzugefügt, und die Schichtreihenfolge wird nicht geändert.

Die dritte Möglichkeit besteht darin, eine unbenannte Schicht zu erstellen, indem eine `@layer`-Block-At-Regel ohne Einschließen eines Schichtnamens verwendet wird. Zum Beispiel:

```css
@layer {
  p {
    margin-block: 1rem;
  }
}
```

Dies erstellt eine _anonyme Kaskadenschicht_. Diese Schicht funktioniert genauso wie benannte Schichten; allerdings können später keine Regeln zugeordnet werden. Die Vorrangreihenfolge für anonyme Schichten ist die Reihenfolge, in der die Schichten deklariert werden, benannt oder nicht, und niedriger als die Stile, die außerhalb einer Schicht deklariert sind.

Eine weitere Möglichkeit, eine Kaskadenschicht zu erstellen, ist die Verwendung von {{cssxref("@import")}}. In diesem Fall würden die Regeln im importierten Stylesheet sein. Denken Sie daran, dass die `@import`-At-Regel allen anderen Regeltypen vorausgehen muss, außer `@charset` und `@layer`-Regeln.

```css
@import "theme.css" layer(utilities);
```

### Verschachtelte Schichten

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

Ohne Schichten würde der Selektor `.box p` die höchste Spezifität haben und daher würde der Text `Hello, world!` in Grün angezeigt. Da die `type`-Schicht vor der anonymen Schicht kommt, die geschaffen wurde, um nicht-Schicht-Inhalte zu halten, wird der Text violett sein.

Beachten Sie auch die Reihenfolge. Auch wenn wir den nicht-geschichteten Stil zuerst deklarieren, wird er dennoch _nach_ den Schichtstilen angewendet.

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

Im folgenden Beispiel werden zwei Schichten ohne zugewiesene Regeln erstellt, dann werden CSS-Regeln auf die beiden Schichten angewendet. Die `base`-Schicht definiert eine `color`, `border`, `font-size` und `padding`. Die `special`-Schicht definiert eine andere Farbe. Da `special` zuletzt kommt, als die Schichten definiert wurden, wird die von ihr bereitgestellte Farbe verwendet und der Text in `rebeccapurple` angezeigt. Alle anderen Regeln von `base` gelten weiterhin.

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
- [Einführung in die CSS-Kaskade](/de/docs/Web/CSS/Guides/Cascade/Introduction)
- [Lernen: Umgang mit Konflikten](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
- [Lernen: Kaskadenschichten](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
- [Die Zukunft von CSS: Kaskadenschichten](https://www.bram.us/2021/09/15/the-future-of-css-cascade-layers-css-at-layer/) auf bram.us (2021)
