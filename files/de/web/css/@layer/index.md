---
title: "@layer"
slug: Web/CSS/@layer
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}

Die **`@layer`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/At-rule) wird verwendet, um eine Kaskadenschicht zu deklarieren und kann auch verwendet werden, um die Vorrangreihenfolge im Falle mehrerer Kaskadenschichten festzulegen.

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

Regeln innerhalb einer Kaskadenschicht kaskadieren zusammen und bieten Webentwicklern mehr Kontrolle über die Kaskade. Stile, die nicht in einer Schicht definiert sind, überschreiben immer Stile, die in benannten und anonymen Schichten deklariert wurden.

Das folgende Diagramm zeigt die Schichtprioritäten, in denen Schichten in der Reihenfolge 1, 2, ..., N deklariert werden.

![Diagramm, das die Prioritäten von Kaskadenschichten zeigt](https://mdn.github.io/shared-assets/images/diagrams/css/at-rules/layer-cascade.svg)

Die Deklarationsreihenfolge ist entscheidend. Die zuerst deklarierte Schicht hat die niedrigste Priorität, und die zuletzt deklarierte Schicht hat die höchste Priorität. Die Priorität wird jedoch umgekehrt, wenn das [`!important`](/de/docs/Web/CSS/important) Kennzeichen verwendet wird.

Die `@layer` At-Regel wird verwendet, um eine Kaskadenschicht auf eine von drei Arten zu erstellen.

Die erste Möglichkeit besteht darin, eine `@layer` Block-At-Regel zu verwenden, um eine benannte Kaskadenschicht mit den CSS-Regeln für diese Schicht zu erstellen, wie folgt:

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

Die zweite Möglichkeit besteht darin, eine `@layer` Anweisungs-At-Regel zu verwenden, um eine oder mehrere durch Kommas getrennte benannte Kaskadenschichten zu erstellen, ohne ihnen Stile zuzuweisen. Dies kann eine einzelne Schicht sein, wie unten gezeigt:

```css
@layer utilities;
```

Es können mehrere Schichten gleichzeitig definiert werden, wie unten gezeigt:

```css
@layer theme, layout, utilities;
```

Dies ist nützlich, da die anfängliche Reihenfolge, in der Schichten deklariert werden, angibt, welche Schicht Vorrang hat. Wie bei Deklarationen wird die letzte aufgeführte Schicht gewinnen, wenn Deklarationen in mehreren Schichten gefunden werden. Daher würde im vorherigen Beispiel, wenn eine konkurrierende Regel in `theme` und `utilities` gefunden wird, die in `utilities` gewinnen und angewendet werden.

Eine Regel in `utilities` würde _selbst wenn sie eine geringere Spezifität als die Regel in `theme` hätte_ angewendet werden. Dies liegt daran, dass einmal die Schichtreihenfolge festgelegt ist, Spezifität und Erscheinungsreihenfolge ignoriert werden. Dies ermöglicht die Erstellung einfacherer CSS-Selektoren, da Sie nicht sicherstellen müssen, dass ein Selektor eine ausreichend hohe Spezifität hat, um konkurrierende Regeln zu überschreiben; alles, was Sie sicherstellen müssen, ist, dass er in einer späteren Schicht erscheint.

> [!NOTE]
> Wenn Sie Ihre Schichtnamen deklariert haben und damit ihre Reihenfolge festgelegt haben, können Sie CSS-Regeln zur Schicht hinzufügen, indem Sie den Namen erneut deklarieren. Die Stile werden dann an die Schicht angehängt und die Schichtreihenfolge wird nicht verändert.

Die dritte Möglichkeit besteht darin, eine unbenannte Schicht mithilfe einer `@layer` Block-At-Regel zu erstellen, ohne einen Schichtnamen einzuschließen. Beispiel:

```css
@layer {
  p {
    margin-block: 1rem;
  }
}
```

Dies erstellt eine _anonyme Kaskadenschicht_. Diese Schicht funktioniert auf dieselbe Weise wie benannte Schichten; jedoch können Regeln ihr später nicht zugewiesen werden. Die Reihenfolge der Priorität für anonyme Schichten entspricht der Reihenfolge, in der Schichten deklariert werden, unabhängig davon, ob sie benannt sind oder nicht, und sie sind niedriger als die Stile, die außerhalb einer Schicht deklariert sind.

Eine weitere Möglichkeit, eine Kaskadenschicht zu erstellen, ist die Verwendung von {{cssxref("@import")}}. In diesem Fall würden die Regeln im importierten Stylesheet stehen. Denken Sie daran, dass die `@import` At-Regel allen anderen Regeltypen vorausgehen muss, außer `@charset` und `@layer` Regeln.

```css
@import "theme.css" layer(utilities);
```

### Verschachtelung von Schichten

Schichten können verschachtelt sein. Beispiel:

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

Im folgenden Beispiel werden zwei CSS-Regeln erstellt. Eine für das {{htmlelement("p")}}-Element außerhalb jeder Schicht und eine innerhalb einer Schicht namens `type` für `.box p`.

Ohne Schichten hätte der Selektor `.box p` die höchste Spezifität, und daher würde der Text `Hello, world!` in Grün angezeigt. Da die `type` Schicht vor der anonymen Schicht erstellt wird, die nicht-schichtdefinierte Inhalte enthält, wird der Text lila dargestellt.

Beachten Sie auch die Reihenfolge. Auch wenn wir den nicht-schichtigen Stil zuerst deklarieren, wird er trotzdem _nach_ den Schichtstilen angewendet.

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

### Zuweisung von Regeln zu bestehenden Schichten

Im folgenden Beispiel werden zwei Schichten erstellt, ohne dass ihnen Regeln zugewiesen werden. Dann werden CSS-Regeln auf die beiden Schichten angewendet. Die `base` Schicht definiert eine `color`, `border`, `font-size` und `padding`. Die `special` Schicht definiert eine andere Farbe. Da `special` zuletzt deklariert wurde, wird die von ihr bereitgestellte Farbe verwendet, und der Text wird mit `rebeccapurple` angezeigt. Alle anderen Regeln von `base` gelten weiterhin.

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
