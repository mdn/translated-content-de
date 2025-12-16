---
title: "@layer"
slug: Web/CSS/Reference/At-rules/@layer
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Die **`@layer`**-[CSS](/de/docs/Web/CSS)[at-rule](/de/docs/Web/CSS/Guides/Syntax/At-rules) wird verwendet, um eine Kaskadenebene zu deklarieren und kann auch verwendet werden, um die Reihenfolge der Priorität im Falle mehrerer Kaskadenebenen zu definieren.

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
  - : Ist der Name der Kaskadenebene.
- _rules_
  - : Ist das Set von CSS-Regeln in der Kaskadenebene.

## Beschreibung

Regeln innerhalb einer Kaskadenebene kaskadieren zusammen und geben Webentwicklern mehr Kontrolle über die Kaskade. Stile, die nicht in einer Ebene definiert sind, überschreiben immer Stile, die in benannten und anonymen Ebenen deklariert sind.

Das folgende Diagramm zeigt die Prioritäten der Ebenen, wobei Ebenen in der Reihenfolge 1, 2, ..., N deklariert werden.

![Diagramm, das die Prioritäten von Kaskadenebenen zeigt](https://mdn.github.io/shared-assets/images/diagrams/css/at-rules/layer-cascade.svg)

Wie im obigen Diagramm angegeben, haben _wichtige Deklarationen_, also Deklarationen mit dem `!important`-Flag, Vorrang vor _normalen Deklarationen_ oder regulären Deklarationen ohne das `!important`-Flag. Die Reihenfolge der Priorität bei wichtigen Regeln ist das Gegenteil der normalen Regeln. Übergänge haben die höchste Priorität. Als nächstes in der Reihenfolge von höchster zu niedrigster Priorität folgen die wichtigen Benutzeragenten-Deklarationen, die wichtigen Benutzer-Deklarationen und die wichtigen Autor-Deklarationen, in dieser Reihenfolge. Benutzer können Stile mithilfe von Browsereinstellungen, Betriebssystemeinstellungen oder Browsererweiterungen angeben. Ihre wichtigen Deklarationen haben Vorrang vor _Autor_- oder _Webentwickler_ geschriebenen wichtigen Deklarationen.

Innerhalb von Autorenstilen haben alle wichtigen Deklarationen innerhalb von CSS-Ebenen Vorrang vor allen wichtigen Deklarationen, die außerhalb einer Ebene deklariert sind, während alle normalen Deklarationen innerhalb von CSS-Ebenen eine niedrigere Priorität haben als Deklarationen, die außerhalb einer Ebene deklariert sind. Die Reihenfolge der Deklaration ist wichtig. Die zuerst deklarierte Ebene hat die niedrigste Priorität und die zuletzt deklarierte Ebene hat die höchste Priorität. Die Priorität wird jedoch umgekehrt, wenn das [`!important`](/de/docs/Web/CSS/Reference/Values/important)-Flag verwendet wird.

Die `@layer`-at-rule wird verwendet, um eine Kaskadenebene auf eine von drei Arten zu erstellen.

Die erste Möglichkeit besteht darin, einen `@layer`-Block zu verwenden, um eine benannte Kaskadenebene mit den CSS-Regeln für diese Ebene zu erstellen, wie folgt:

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

Die zweite Möglichkeit besteht darin, eine `@layer`-Anweisung zu verwenden, um eine oder mehrere durch Kommas getrennte benannte Kaskadenebenen zu erstellen, ohne Stile zuzuweisen. Dies kann eine einzelne Ebene sein, wie unten gezeigt:

```css
@layer utilities;
```

Mehrere Ebenen können gleichzeitig definiert werden, wie unten gezeigt:

```css
@layer theme, layout, utilities;
```

Dies ist nützlich, da die anfängliche Reihenfolge, in der Ebenen deklariert werden, anzeigt, welche Ebene Vorrang hat. Wie bei Deklarationen gewinnt die zuletzt aufgeführte Ebene, wenn Deklarationen in mehreren Ebenen gefunden werden. Daher würde im vorherigen Beispiel, wenn eine konkurrierende Regel in `theme` und `utilities` gefunden wird, die in `utilities` gewinnen und angewendet werden.

Eine Regel in `utilities` würde angewendet werden _selbst wenn sie eine geringere Spezifität_ als die Regel in `theme` hat. Dies liegt daran, dass, sobald die Ebenenreihenfolge festgelegt ist, Spezifität und Erscheinungsreihenfolge ignoriert werden. Dies ermöglicht die Verwendung einfacherer CSS-Selektoren, da Sie nicht sicherstellen müssen, dass ein Selektor eine hohe Spezifität hat, um konkurrierende Regeln zu überschreiben; alles, was Sie sicherstellen müssen, ist, dass sie in einer späteren Ebene erscheint.

> [!NOTE]
> Nachdem Sie Ihre Ebenennamen deklariert und ihre Reihenfolge festgelegt haben, können Sie einer Ebene CSS-Regeln hinzufügen, indem Sie den Namen erneut deklarieren. Die Stile werden dann an die Ebene angehängt und die Ebenenreihenfolge wird nicht geändert.

Die dritte Möglichkeit besteht darin, eine unbenannte Ebene mit einem `@layer`-Block ohne einen Ebenennamen zu erstellen. Zum Beispiel:

```css
@layer {
  p {
    margin-block: 1rem;
  }
}
```

Dies erstellt eine _anonyme Kaskadenebene_. Diese Ebene funktioniert auf die gleiche Weise wie benannte Ebenen; jedoch können später keine Regeln zugewiesen werden. Die Reihenfolge der Priorität für anonyme Ebenen ist die Reihenfolge, in der die Ebenen deklariert werden, unabhängig davon, ob sie benannt sind oder nicht, und niedriger als die außerhalb einer Ebene deklarierten Stile.

Eine weitere Möglichkeit, eine Kaskadenebene zu erstellen, besteht darin, {{cssxref("@import")}} zu verwenden. In diesem Fall würden sich die Regeln im importierten Stylesheet befinden. Denken Sie daran, dass die `@import`-at-rule allen anderen Regeltypen vorausgehen muss, außer `@charset` und `@layer` Regeln.

```css
@import "theme.css" layer(utilities);
```

### Verschachtelung von Ebenen

Ebenen können verschachtelt werden. Zum Beispiel:

```css
@layer framework {
  @layer layout {
  }
}
```

Um Regeln an die `layout`-Ebene innerhalb von `framework` anzuhängen, verbinden Sie die beiden Namen mit einem `.`.

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

Im folgenden Beispiel werden zwei CSS-Regeln erstellt. Eine für das {{htmlelement("p")}}-Element außerhalb einer Ebene und eine innerhalb einer Ebene namens `type` für `.box p`.

Ohne Ebenen hätte der Selektor `.box p` die höchste Spezifität und der Text `Hello, world!` würde in Grün angezeigt. Da die `type`-Ebene vor der anonymen Ebene kommt, die erstellt wurde, um nicht-ebenen Inhalt zu halten, wird der Text lila sein.

Beachten Sie auch die Reihenfolge. Obwohl wir den nicht-ebenbasierten Stil zuerst deklarieren, wird er _nach_ den Ebenenstilen angewendet.

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

### Zuweisung von Regeln zu vorhandenen Ebenen

Im folgenden Beispiel werden zwei Ebenen erstellt, ohne dass Regeln angewendet werden, dann werden CSS-Regeln auf die beiden Ebenen angewendet. Die `base`-Ebene definiert eine `Farbe`, `Rahmen`, `Schriftgröße` und `Abstand`. Die `special`-Ebene definiert eine andere Farbe. Da `special` zuletzt in der Reihenfolge der definierten Ebenen kommt, wird die von ihm bereitgestellte Farbe verwendet und der Text mit `rebeccapurple` angezeigt. Alle anderen Regeln von `base` gelten weiterhin.

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
- [Lernen: Kaskadenebenen](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
- [Die Zukunft von CSS: Kaskadenebenen](https://www.bram.us/2021/09/15/the-future-of-css-cascade-layers-css-at-layer/) auf bram.us (2021)
