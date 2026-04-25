---
title: "`text-wrap-style` CSS property"
short-title: text-wrap-style
slug: Web/CSS/Reference/Properties/text-wrap-style
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`text-wrap-style`** [CSS](/de/docs/Web/CSS) Eigenschaft steuert, wie Text innerhalb eines Elements umbrochen wird. Die verschiedenen Werte bieten alternative Möglichkeiten, den Inhalt eines Blockelements zu umschließen. Sie kann auch mithilfe des {{CSSXRef("text-wrap")}} Shorthands gesetzt und zurückgesetzt werden.

{{InteractiveExample("CSS Demo: text-wrap-style")}}

```css interactive-example-choice
text-wrap-style: auto;
```

```css interactive-example-choice
text-wrap-style: balance;
```

```css interactive-example-choice
text-wrap-style: pretty;
```

```css interactive-example-choice
text-wrap-style: stable;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="whole-content-wrapper">
    <p>Edit the text in the box:</p>
    <div class="transition-all" id="example-element">
      <p contenteditable>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem aut
        cum eum id quos est.
      </p>
    </div>
  </div>
</section>
```

```css interactive-example
.whole-content-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

#example-element {
  border: 1px solid #c5c5c5;
  width: 250px;
}
```

## Syntax

```css
/* Keyword values */
text-wrap-style: auto;
text-wrap-style: balance;
text-wrap-style: pretty;
text-wrap-style: stable;

/* Global values */
text-wrap-style: inherit;
text-wrap-style: initial;
text-wrap-style: revert;
text-wrap-style: revert-layer;
text-wrap-style: unset;
```

Wenn das Umbruch erlaubt ist (siehe {{CSSXRef("text-wrap-mode")}}), wird die `text-wrap-style` Eigenschaft als einzelnes Schlüsselwort aus der untenstehenden Liste von Werten angegeben.

### Werte

- `auto`
  - : Der Text wird auf die für den Browser performanteste Weise umbrochen und berücksichtigt nicht die Anzahl der Zeichen.
- `balance`
  - : Der Text wird auf eine Weise umbrochen, die die Anzahl der Zeichen in jeder Zeile optimal ausgleicht und die Qualität des Layouts und die Lesbarkeit verbessert. Da das Zählen von Zeichen und deren Ausgleich über mehrere Zeilen hinweg rechnerisch aufwendig ist, wird dieser Wert nur für Textblöcke unterstützt, die eine begrenzte Anzahl von Zeilen umfassen (sechs oder weniger für Chromium und zehn oder weniger für Firefox).
- `pretty`
  - : Der Text wird mit einem langsameren Algorithmus umbrochen, der ein besseres Layout gegenüber Geschwindigkeit priorisiert. Dies ist für Fließtext gedacht, bei dem eine gute Typografie der Leistung vorgezogen wird (zum Beispiel, wenn die Anzahl von [Waise](/de/docs/Web/CSS/Reference/Properties/orphans) minimiert werden soll).
- `stable`
  - : Der Text wird so umbrochen, dass, wenn der Benutzer den Inhalt bearbeitet, die Zeilen, die vor den bearbeiteten Linien kommen, statisch bleiben, anstatt dass der ganze Textblock neu umbrochen wird.

> [!NOTE]
> Das [CSS text](/de/docs/Web/CSS/Guides/Text) Modul definiert einen `avoid-orphans` Wert für die `text-wrap-style` Eigenschaft, um übermäßig kurze letzte Zeilen zu vermeiden und erwartet, dass der Benutzeragent bei Entscheidungen über Zeilenumbrüche mehr als eine Zeile berücksichtigt. Dieser Wert wird derzeit von keinem Browser unterstützt.

## Beschreibung

Wenn der Inhalt umbrochen werden darf, was standardmäßig der Fall ist, gibt es einige Auswahlmöglichkeiten, die den Umbruch des Inhalts beeinflussen können.

Der gewählte Wert für `text-wrap-style` hängt davon ab, wie viele Textzeilen Sie stylen möchten, ob der Text `contenteditable` ist und ob Sie Erscheinungsbild oder Leistung priorisieren müssen.

Wenn der gestylte Inhalt auf eine kurze Anzahl von Zeilen beschränkt ist, wie Überschriften, Bildunterschriften und Blockzitate, kann `text-wrap-style: balance` hinzugefügt werden, um die Anzahl der Zeichen in jeder Zeile auszugleichen und die Layoutqualität und Lesbarkeit zu verbessern. Da Browser die Anzahl der von dieser Eigenschaft betroffenen Zeilen begrenzen, ist der Einfluss dieses Wertes auf die Leistung vernachlässigbar.

Für längere Textabschnitte kann `text-wrap-style: pretty` verwendet werden. Beachten Sie, dass `pretty` eine negative Auswirkung auf die Leistung hat, daher sollte es nur für längere Textblöcke verwendet werden, wenn das Layout wichtiger als die Geschwindigkeit ist.

Der Wert `stable` verbessert die Benutzererfahrung bei der Verwendung auf Inhalten, die [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) sind. Dieser Wert stellt sicher, dass, während der Benutzer Text bearbeitet, die vorherigen Zeilen im bearbeiteten Bereich stabil bleiben.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Ausgeglichener Text

Dieses Beispiel enthält zwei Absätze, der erste ist der Standard `auto` und der zweite ist `balance`.

#### HTML

```html
<h2>Unbalanced</h2>
<p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, ad. Impedit
  adipisci rerum modi praesentium atque aperiam vitae nesciunt consectetur
  assumenda deleniti repudiandae perferendis sed odio doloremque, aliquid natus
  laboriosam?
</p>
<h2>Balanced</h2>
<p class="balanced">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, ad. Impedit
  adipisci rerum modi praesentium atque aperiam vitae nesciunt consectetur
  assumenda deleniti repudiandae perferendis sed odio doloremque, aliquid natus
  laboriosam?
</p>
```

#### CSS

```css
p {
  max-width: 60ch;
}
.balanced {
  text-wrap-style: balance;
}
```

#### Ergebnis

{{EmbedLiveSample("balanced_text", "100%",310)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("text-wrap")}}
- {{CSSxRef("text-wrap-mode")}}
