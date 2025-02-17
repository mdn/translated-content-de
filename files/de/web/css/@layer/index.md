---
title: "@layer"
slug: Web/CSS/@layer
l10n:
  sourceCommit: a850ca867a8b380a53320bab6870fb7335f22d52
---

{{CSSRef}}

Die **`@layer`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) wird verwendet, um eine Cascade-Layer zu deklarieren, und kann auch verwendet werden, um die Prioritätsreihenfolge bei mehreren Cascade-Layern festzulegen.

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
  - : Der Name der Cascade-Layer ist.
- _rules_
  - : Die Menge der CSS-Regeln innerhalb der Cascade-Layer ist.

## Beschreibung

Regeln innerhalb einer Cascade-Layer werden zusammengeführt, was Webentwickler*innen mehr Kontrolle über die Cascade gibt. Stile, die nicht innerhalb einer Layer definiert sind, überschreiben immer Stile, die in benannten und anonymen Layern deklariert sind.

Das folgende Diagramm zeigt die Priorität der Layer, wobei die Layer in der Reihenfolge 1, 2, ..., N deklariert werden.

![Diagramm, das die Prioritäten von Cascade-Layern zeigt](https://mdn.github.io/shared-assets/images/diagrams/css/at-rules/layer-cascade.svg)

Wie im obigen Diagramm dargestellt, haben _wichtige Deklarationen_, also Deklarationen mit dem `!important`-Flag, Vorrang vor _normalen Deklarationen_, also regulären Deklarationen ohne das `!important`-Flag. Die Reihenfolge der Priorität bei wichtigen Regeln ist das Gegenteil von normalen Regeln. Übergänge haben die höchste Priorität. Danach folgen die wichtigen {{Glossary("user_agent", "User-Agent")}}-Deklarationen, wichtige Benutzer-Deklarationen und wichtige Autor-Deklarationen in dieser Reihenfolge. Benutzer*innen können Stile über Browsereinstellungen, Betriebssystemeinstellungen oder Browsererweiterungen festlegen. Ihre wichtigen Deklarationen haben Vorrang vor _Autor*innen_-, also von Webentwickler*innen geschriebenen, wichtigen Deklarationen.

Innerhalb von Autor*innenstilen haben alle wichtigen Deklarationen innerhalb von CSS-Layern Vorrang vor allen wichtigen Deklarationen außerhalb einer Layer, während alle normalen Deklarationen innerhalb von CSS-Layern eine niedrigere Priorität haben als Deklarationen außerhalb einer Layer.
Die Reihenfolge der Deklarationen ist entscheidend. Die zuerst deklarierte Layer hat die niedrigste Priorität, und die zuletzt deklarierte Layer hat die höchste Priorität. Allerdings wird die Priorität umgekehrt, wenn das [`!important`](/de/docs/Web/CSS/important)-Flag verwendet wird.

Die `@layer`-At-Regel wird auf drei Arten verwendet, um eine Cascade-Layer zu erstellen.

Die erste Möglichkeit besteht darin, einen `@layer`-Block zu verwenden, um eine benannte Cascade-Layer zu erstellen, mit den CSS-Regeln für diese Layer innerhalb, wie folgt:

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

Die zweite Möglichkeit besteht darin, eine `@layer`-Anweisung zu verwenden, um eine oder mehrere durch Kommas getrennte benannte Cascade-Layer zu erstellen, ohne ihnen Stile zuzuweisen. Dies kann eine einzelne Layer sein, wie unten gezeigt:

```css
@layer utilities;
```

Mehrere Layer können gleichzeitig definiert werden, wie unten gezeigt:

```css
@layer theme, layout, utilities;
```

Dies ist nützlich, da die anfängliche Reihenfolge, in der Layer deklariert werden, angibt, welche Layer Vorrang hat. Wie bei Deklarationen wird die zuletzt gelistete Layer bevorzugt, wenn Deklarationen in mehreren Layern gefunden werden. Im vorherigen Beispiel würde eine konkurrierende Regel in `theme` und `utilities` dazu führen, dass die Regel in `utilities` angewendet wird.

Eine Regel in `utilities` würde angewendet, _selbst wenn ihre Spezifität niedriger ist_ als die Regel in `theme`. Dies liegt daran, dass nach Festlegung der Layer-Reihenfolge die Spezifität und die Reihenfolge des Erscheinens keine Rolle mehr spielen. Dies ermöglicht die Verwendung einfacherer CSS-Selektoren, da Sie nicht sicherstellen müssen, dass ein Selektor eine ausreichend hohe Spezifität hat, um konkurrierende Regeln zu überschreiben; alles, was Sie sicherstellen müssen, ist, dass er in einer späteren Layer erscheint.

> [!NOTE]
> Nachdem Sie Ihre Layer-Namen deklariert und damit ihre Reihenfolge festgelegt haben, können Sie CSS-Regeln zur Layer hinzufügen, indem Sie den Namen erneut deklarieren. Die Stile werden dann der Layer hinzugefügt, und die Layer-Reihenfolge wird nicht geändert.

Die dritte Möglichkeit besteht darin, eine anonyme Layer zu erstellen, indem ein `@layer`-Block ohne Layer-Namen verwendet wird. Zum Beispiel:

```css
@layer {
  p {
    margin-block: 1rem;
  }
}
```

Dies erstellt eine _anonyme Cascade-Layer_. Diese Layer funktioniert genauso wie benannte Layer, jedoch können Regeln später nicht dieser zugewiesen werden. Die Prioritätsreihenfolge für anonyme Layer richtet sich nach ihrer Deklarationsreihenfolge, unabhängig davon, ob sie benannt oder anonym sind, und liegt unterhalb der Stile, die außerhalb einer Layer deklariert wurden.

Eine andere Möglichkeit, eine Cascade-Layer zu erstellen, ist die Verwendung von {{cssxref("@import")}}. In diesem Fall würden sich die Regeln im importierten Stylesheet befinden. Denken Sie daran, dass die `@import`-At-Regel allen anderen Regeltypen, mit Ausnahme von `@charset`- und `@layer`-Regeln, vorangehen muss.

```css
@import "theme.css" layer(utilities);
```

### Verschachteln von Layern

Layer können verschachtelt werden. Zum Beispiel:

```css
@layer framework {
  @layer layout {
  }
}
```

Um Regeln zur `layout`-Layer innerhalb von `framework` hinzuzufügen, verbinden Sie die beiden Namen mit einem `.`.

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

### Basisches Beispiel

Im folgenden Beispiel werden zwei CSS-Regeln erstellt. Eine für das {{htmlelement("p")}}-Element außerhalb einer Layer und eine innerhalb einer Layer namens `type` für `.box p`.

Ohne Layer würde der Selektor `.box p` die höchste Spezifität haben, und daher würde der Text „Hello, world!“ in Grün angezeigt. Da die `type`-Layer vor der anonymen Layer kommt, die erstellt wurde, um nicht-geschichtete Inhalte zu halten, wird der Text lila.

Beachten Sie auch die Reihenfolge. Obwohl der nicht-geschichtete Stil zuerst deklariert wird, wird er _nach_ den Layer-Stilen angewendet.

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

### Zuordnung von Regeln zu bestehenden Layern

Im folgenden Beispiel werden zwei Layer erstellt, ohne dass Regeln angewendet werden, und anschließend werden CSS-Regeln zu den beiden Layern hinzugefügt. Die `base`-Layer definiert eine `color`, `border`, `font-size` und `padding`. Die `special`-Layer definiert eine andere Farbe. Da `special` zuletzt definiert wurde, wird die von ihr bereitgestellte Farbe verwendet, und der Text wird in `rebeccapurple` angezeigt. Alle anderen Regeln von `base` gelten weiterhin.

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
- [Einführung in die CSS-Cascade](/de/docs/Web/CSS/CSS_cascade/Cascade)
- [Leitfaden: Umgang mit Konflikten](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
- [Leitfaden: Cascade Layers](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
- [Die Zukunft von CSS: Cascade Layers](https://www.bram.us/2021/09/15/the-future-of-css-cascade-layers-css-at-layer/) auf bram.us (2021)
