---
title: "@layer"
slug: Web/CSS/@layer
l10n:
  sourceCommit: 0326d9301650304ef67a56e88b542b160093042e
---

{{CSSRef}}

Die **`@layer`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/At-rule) wird verwendet, um eine Kaskadenschicht zu deklarieren und kann auch verwendet werden, um die Vorrangordnung im Falle mehrerer Kaskadenschichten zu definieren.

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

Regeln innerhalb einer Kaskadenschicht kaskadieren zusammen und geben Webentwicklern mehr Kontrolle über die Kaskade. Stile, die nicht in einer Schicht definiert sind, überschreiben immer Stile, die in benannten und anonymen Schichten deklariert sind.

Das folgende Diagramm zeigt Prioritäten von Schichten, wobei Schichten in der Reihenfolge 1, 2, ..., N deklariert werden.

![Diagramm, das die Prioritäten der Kaskadenschicht zeigt](https://mdn.github.io/shared-assets/images/diagrams/css/at-rules/layer-cascade.svg)

Wie im obigen Diagramm dargestellt, haben _wichtige Deklarationen_, also Deklarationen mit dem `!important`-Flag, Vorrang vor _normalen Deklarationen_, oder regulären Deklarationen ohne das `!important`-Flag. Die Vorrangordnung unter wichtigen Regeln ist das Gegenteil der normalen Regeln. Übergänge haben den höchsten Vorrang. Als nächstes kommen die wichtigen Deklarationen von {{Glossary("user_agent", "Benutzeragenten")}}, wichtige Benutzerdireklarationen und wichtige Authorendeklarationen; in dieser Reihenfolge. Benutzer können Stile über Browsereinstellungen, Betriebssystemeinstellungen oder Browsererweiterungen angeben. Ihre wichtigen Deklarationen haben Vorrang vor den _Autoren_ oder _Webentwickler_ geschriebenen, wichtigen Deklarationen.

Innerhalb von Autorenstilen haben alle wichtigen Deklarationen innerhalb von CSS-Schichten Vorrang vor allen wichtigen Deklarationen, die außerhalb einer Schicht deklariert sind, während alle normalen Deklarationen innerhalb von CSS-Schichten eine niedrigere Priorität haben als Deklarationen, die außerhalb einer Schicht deklariert sind.
Die Deklarationsreihenfolge ist wichtig. Die zuerst deklarierte Schicht erhält die niedrigste Priorität und die zuletzt deklarierte Schicht erhält die höchste Priorität. Jedoch ist die Priorität umgekehrt, wenn das [`!important`](/de/docs/Web/CSS/important)-Flag verwendet wird.

Die `@layer`-At-Regel wird verwendet, um eine Kaskadenschicht auf eine der drei folgenden Arten zu erstellen.

Die erste Möglichkeit besteht darin, eine benannte Kaskadenschicht mit einem `@layer`-Block-At-Regel zu erstellen, wobei die CSS-Regeln für diese Schicht innerhalb gezeigt werden:

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

Die zweite Möglichkeit besteht darin, eine oder mehrere durch Kommas getrennte benannte Kaskadenschichten mit einer `@layer`-Anweisungs-At-Regel zu erstellen, ohne irgendwelche Stile zuzuweisen. Dies kann eine einzige Schicht sein, wie unten gezeigt:

```css
@layer utilities;
```

Mehrere Schichten können auf einmal definiert werden, wie unten gezeigt:

```css
@layer theme, layout, utilities;
```

Dies ist nützlich, da die anfängliche Reihenfolge, in der Schichten deklariert werden, angibt, welche Schicht Vorrang hat. Wie bei Deklarationen, gewinnt die zuletzt aufgelistete Schicht, wenn Deklarationen in mehreren Schichten gefunden werden. Daher würde im vorherigen Beispiel eine konkurrierende Regel in `theme` und `utilities`, die in `utilities` gewinnen und angewendet werden.

Eine Regel in `utilities` würde angewendet werden, _auch wenn sie eine niedrigere Spezifität_ als die Regel in `theme` hat. Dies liegt daran, dass, sobald die Schichtreihenfolge festgelegt wurde, Spezifität und Erscheinungsreihenfolge ignoriert werden. Dies ermöglicht die Verwendung einfacherer CSS-Selektoren, da Sie nicht sicherstellen müssen, dass ein Selektor eine ausreichend hohe Spezifität hat, um konkurrierende Regeln zu überschreiben; alles, was Sie sicherstellen müssen, ist, dass es in einer späteren Schicht erscheint.

> [!NOTE]
> Nachdem Sie Ihre Schichtnamen deklariert und somit deren Reihenfolge festgelegt haben, können Sie der Schicht CSS-Regeln hinzufügen, indem Sie den Namen erneut deklarieren. Die Stile werden dann der Schicht hinzugefügt, und die Schichtreihenfolge wird nicht verändert.

Die dritte Möglichkeit besteht darin, eine unbenannte Schicht mithilfe eines `@layer`-Block-At-Regel ohne Einbeziehung eines Schichtnamens zu erstellen. Beispiel:

```css
@layer {
  p {
    margin-block: 1rem;
  }
}
```

Dies erzeugt eine _anonyme Kaskadenschicht_. Diese Schicht funktioniert auf die gleiche Weise wie benannte Schichten; jedoch können Regeln ihr später nicht zugewiesen werden. Die Vorrangordnung für anonyme Schichten ist die Reihenfolge, in der die Schichten deklariert werden, ob benannt oder nicht, und niedriger als die Stile, die außerhalb einer Schicht deklariert sind.

Eine weitere Möglichkeit, eine Kaskadenschicht zu erstellen, ist die Verwendung von {{cssxref("@import")}}. In diesem Fall würden sich die Regeln im importierten Stylesheet befinden. Denken Sie daran, dass die `@import`-At-Regel allen anderen Regeltypen vorausgehen muss, außer `@charset` und `@layer`-Regeln.

```css
@import "theme.css" layer(utilities);
```

### Verschachtelung von Schichten

Schichten können verschachtelt sein. Zum Beispiel:

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

Ohne Schichten hätte der Selektor `.box p` die höchste Spezifität, und daher würde der Text `Hello, world!` in Grün angezeigt. Da die `type`-Schicht vor der anonymen Schicht kommt, die nicht-Schicht-Inhalte hält, wird der Text Lila sein.

Beachten Sie auch die Reihenfolge. Auch wenn wir den nicht geschichteten Stil zuerst deklarieren, wird er _nach_ den Schichtstilen trotzdem angewendet.

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

Im folgenden Beispiel werden zwei Schichten erstellt, denen zunächst keine Regeln zugeordnet sind, dann werden CSS-Regeln auf die zwei Schichten angewendet. Die `base`-Schicht definiert eine `color`, einen `border`, eine `font-size` und ein `padding`. Die `special`-Schicht definiert eine andere Farbe. Da `special` zuletzt kommt, wenn die Schichten definiert wurden, wird die von ihm bereitgestellte Farbe verwendet und der Text wird in `rebeccapurple` angezeigt. Alle anderen Regeln von `base` gelten weiterhin.

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
