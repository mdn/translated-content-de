---
title: text-wrap-style
slug: Web/CSS/text-wrap-style
l10n:
  sourceCommit: 429d45679a29f386af0ddfcf2a64498843c3e1e5
---

{{CSSRef}}

Die **`text-wrap-style`** [CSS](/de/docs/Web/CSS) Eigenschaft steuert, wie Text innerhalb eines Elements umbrochen wird. Die verschiedenen Werte bieten alternative Möglichkeiten, den Inhalt eines Blockelements umzubrechen. Diese Eigenschaft kann auch mit der {{CSSXRef("text-wrap")}} Kurzform gesetzt und zurückgesetzt werden.

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
      <p contenteditable="">
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

Wenn ein Umbruch erlaubt ist (siehe {{CSSXRef("text-wrap-mode")}}), wird die `text-wrap-style` Eigenschaft als einzelnes Schlüsselwort festgelegt, das aus der unten stehenden Werteliste ausgewählt wird.

### Werte

- `auto`
  - : Der Text wird auf die für den Browser performanteste Weise umbrochen und berücksichtigt nicht die Anzahl der Zeichen.
- `balance`
  - : Der Text wird so umgebrochen, dass die Anzahl der Zeichen auf jeder Zeile bestmöglich ausgeglichen ist, wodurch die Layoutqualität und Lesbarkeit verbessert wird. Da das Zählen der Zeichen und deren Ausgleich über mehrere Zeilen rechentechnisch aufwendig ist, wird dieser Wert nur für Textblöcke unterstützt, die eine begrenzte Anzahl an Zeilen umfassen (sechs oder weniger für Chromium und zehn oder weniger für Firefox).
- `pretty`
  - : Der Text wird mit einem langsameren Algorithmus umbrochen, der ein besseres Layout gegenüber der Geschwindigkeit bevorzugt. Dies ist für Fließtext gedacht, bei dem gute Typografie über der Leistung steht (zum Beispiel, wenn die Anzahl von [orphans](/de/docs/Web/CSS/orphans) auf ein Minimum beschränkt werden soll).
- `stable`
  - : Der Text wird so umbrochen, dass bei der Bearbeitung des Inhalts durch den Benutzer die Zeilen, die vor den bearbeiteten Zeilen liegen, statisch bleiben, anstatt dass der gesamte Textblock neu umbrochen wird.

> [!NOTE]
> Das [CSS text](/de/docs/Web/CSS/CSS_text) Modul definiert einen `avoid-orphans` Wert für die `text-wrap-style` Eigenschaft, um allzu kurze letzte Zeilen zu vermeiden und erwartet, dass der Benutzeragent bei der Entscheidungsfindung mehr als eine Zeile berücksichtigt. Dieser Wert wird derzeit von keinem Browser unterstützt.

## Beschreibung

Wenn der Inhalt umgebrochen werden darf, was standardmäßig der Fall ist, gibt es eine Reihe von Auswahlmöglichkeiten, die die Art des Umbruchs beeinflussen können.

Der gewählte Wert für `text-wrap-style` hängt davon ab, wie viele Zeilen Text Sie stylingmäßig erwarten, ob der Text `contenteditable` ist und ob Sie das Erscheinungsbild oder die Leistung priorisieren müssen.

Wenn der gestylte Inhalt auf eine kurze Anzahl von Zeilen beschränkt ist, wie Überschriften, Bildunterschriften und Blockzitate, kann `text-wrap-style: balance` hinzugefügt werden, um die Anzahl der Zeichen auf jeder Zeile auszugleichen, wodurch die Layoutqualität und Lesbarkeit verbessert wird. Da Browser die Anzahl der von dieser Eigenschaft betroffenen Zeilen begrenzen, ist der Einfluss dieses Wertes auf die Leistung vernachlässigbar.

Für längere Textabschnitte kann `text-wrap-style: pretty` verwendet werden. Beachten Sie, dass `pretty` negative Auswirkungen auf die Leistung hat, daher sollte es nur für längere Textblöcke verwendet werden, wenn das Layout wichtiger als die Geschwindigkeit ist.

Der Wert `stable` verbessert das Benutzererlebnis bei Verwendung auf Inhalten, die [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) sind. Dieser Wert stellt sicher, dass, wenn der Benutzer Text bearbeitet, die vorherigen Zeilen im bearbeiteten Bereich stabil bleiben.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Ausgeglichener Text

Dieses Beispiel hat zwei Absätze, der erste ist der Standardwert `auto` und der zweite ist `balance`.

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
