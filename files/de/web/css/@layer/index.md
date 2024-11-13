---
title: "@layer"
slug: Web/CSS/@layer
l10n:
  sourceCommit: 54c533bb67c499db23bd1214a55b64f2bb498400
---

{{CSSRef}}

Die **`@layer`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/At-rule) wird verwendet, um eine Kaskadenschicht zu deklarieren. Sie kann auch verwendet werden, um die Reihenfolge der Priorität bei mehreren Kaskadenschichten zu definieren.

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
  - : Das Set von CSS-Regeln in der Kaskadenschicht.

## Beschreibung

Regeln innerhalb einer Kaskadenschicht kaskadieren gemeinsam, was Webentwicklern mehr Kontrolle über die Kaskade gibt. Stile, die nicht in einer Schicht definiert sind, überschreiben immer Stile, die in benannten und anonymen Schichten deklariert sind.

Das folgende Diagramm zeigt die Prioritäten der Schichten, wobei Schichten in der Reihenfolge 1, 2, ..., N deklariert werden.

![Diagramm, das die Prioritäten von Kaskadenschichten zeigt](https://mdn.github.io/shared-assets/images/diagrams/css/at-rules/layer-cascade.svg)

Wie im obigen Diagramm vermerkt, haben _wichtige Deklarationen_, Deklarationen mit dem `!important`-Flag, Vorrang vor _normalen Deklarationen_ oder regulären Deklarationen ohne das `!important`-Flag. Die Reihenfolge der Priorität zwischen wichtigen Regeln ist das Gegenteil von normalen Regeln. Transitionen haben den höchsten Vorrang. Danach folgen in absteigender Priorität wichtige {{Glossary("user_agent", "User-Agent")}}-Deklarationen, wichtige User-Deklarationen und wichtige Autor-Deklarationen, in dieser Reihenfolge. Benutzer können Stile über Browsereinstellungen, Betriebssystempräferenzen oder Browser-Erweiterungen festlegen. Ihre wichtigen Deklarationen haben Vorrang vor _Autor_- oder _Webentwickler_-Deklarationen.

Innerhalb von Autorstilen haben alle wichtigen Deklarationen innerhalb von CSS-Schichten Vorrang vor wichtigen Deklarationen, die außerhalb einer Schicht deklariert wurden, während alle normalen Deklarationen innerhalb von CSS-Schichten eine niedrigere Priorität haben als Deklarationen, die außerhalb einer Schicht deklariert werden. Die Reihenfolge der Deklaration ist wichtig. Die zuerst deklarierte Schicht hat die niedrigste Priorität, und die zuletzt deklarierte Schicht hat die höchste Priorität. Jedoch wird die Priorität umgekehrt, wenn das [`!important`](/de/docs/Web/CSS/important)-Flag verwendet wird.

Die `@layer` At-Regel wird verwendet, um eine Kaskadenschicht auf eine von drei Arten zu erstellen.

Die erste Möglichkeit ist, einen `@layer` Block-At-Regel zu verwenden, um eine benannte Kaskadenschicht mit den CSS-Regeln für diese Schicht darin zu erstellen, wie folgt:

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

Die zweite Möglichkeit ist, eine `@layer` Anweisung-At-Regel zu verwenden, um eine oder mehrere durch Kommas getrennte benannte Kaskadenschichten zu erstellen, ohne ihnen Stile zuzuweisen. Dies kann eine einzelne Schicht sein, wie unten gezeigt:

```css
@layer utilities;
```

Es können mehrere Schichten gleichzeitig definiert werden, wie unten gezeigt:

```css
@layer theme, layout, utilities;
```

Dies ist nützlich, da die anfängliche Reihenfolge, in der Schichten deklariert werden, angibt, welche Schicht Vorrang hat. Wie bei Deklarationen wird die zuletzt aufgeführte Schicht gewinnen, wenn Deklarationen in mehreren Schichten gefunden werden. Daher würde im vorherigen Beispiel, wenn eine konkurrierende Regel in `theme` und `utilities` gefunden wird, die Regel in `utilities` gewinnen und angewendet werden.

Eine Regel in `utilities` würde angewendet, _selbst wenn sie eine niedrigere Spezifität hätte_ als die Regel in `theme`. Dies liegt daran, dass sobald die Reihenfolge der Schichten festgelegt wurde, Spezifität und Reihenfolge des Erscheinens ignoriert werden. Dies ermöglicht die Erstellung einfacherer CSS-Selektoren, da Sie nicht gewährleisten müssen, dass ein Selektor eine ausreichend hohe Spezifität hat, um konkurrierende Regeln zu überschreiben; alles was Sie gewährleisten müssen, ist, dass er in einer späteren Schicht erscheint.

> [!NOTE]
> Nachdem Sie Ihre Schichtnamen deklariert haben und so ihre Reihenfolge festgelegt haben, können Sie CSS-Regeln zur Schicht hinzufügen, indem Sie den Namen erneut deklarieren. Die Stile werden dann zur Schicht hinzugefügt und die Reihenfolge der Schichten wird nicht geändert.

Die dritte Möglichkeit ist, eine unbenannte Schicht mithilfe eines `@layer` Block-At-Regel ohne einen Schichtnamen zu erstellen. Zum Beispiel:

```css
@layer {
  p {
    margin-block: 1rem;
  }
}
```

Dies erstellt eine _anonyme Kaskadenschicht_. Diese Schicht funktioniert auf die gleiche Weise wie benannte Schichten; jedoch können ihr später keine Regeln zugewiesen werden. Die Reihenfolge der Priorität für anonyme Schichten erfolgt in der Reihenfolge, in der Schichten deklariert werden, benannt oder nicht, und ist niedriger als die Stile, die außerhalb einer Schicht deklariert werden.

Eine weitere Möglichkeit, eine Kaskadenschicht zu erstellen, ist die Verwendung von {{cssxref("@import")}}. In diesem Fall wären die Regeln im importierten Stylesheet. Beachten Sie, dass die `@import` At-Regel alle anderen Regeltypen vorausgehen muss, mit Ausnahme der `@charset` und `@layer` Regeln.

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

Ohne Schichten hätte der Selektor `.box p` die höchste Spezifität und daher würde der Text `Hello, world!` in Grün angezeigt werden. Da die `type` Schicht vor der anonymen Schicht kommt, die zum Halten von nicht-Schicht-Inhalten erstellt wurde, wird der Text in Lila angezeigt.

Beachten Sie auch die Reihenfolge. Auch wenn wir den nicht geschichteten Stil zuerst deklarieren, wird dieser immer noch _nach_ den Schichtstilen angewendet.

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

### Zuweisen von Regeln zu bestehenden Schichten

Im folgenden Beispiel werden zwei Schichten erstellt, ohne dass ihnen Regeln zugewiesen werden. Dann werden CSS-Regeln auf die beiden Schichten angewendet. Die `base` Schicht definiert eine `color`, `border`, `font-size` und `padding`. Die `special` Schicht definiert eine andere Farbe. Da `special` als letzte Schicht definiert wurde, wird die von ihr bereitgestellte Farbe verwendet und der Text wird mit `rebeccapurple` angezeigt. Alle anderen Regeln von `base` gelten weiterhin.

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
