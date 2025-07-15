---
title: text-wrap-style
slug: Web/CSS/text-wrap-style
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`text-wrap-style`** [CSS](/de/docs/Web/CSS) Eigenschaft steuert die Art und Weise, wie Text innerhalb eines Elements umbrochen wird. Die verschiedenen Werte bieten alternative Möglichkeiten, den Inhalt eines Blockelements umzubrechen. Sie kann auch über die Kurzschreibweise {{CSSXRef("text-wrap")}} gesetzt und zurückgesetzt werden.

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

Wenn das Umbruch erlaubt ist (siehe {{CSSXRef("text-wrap-mode")}}), wird die Eigenschaft `text-wrap-style` als ein einzelnes Schlüsselwort aus der unten stehenden Werteliste angegeben.

### Werte

- `auto`
  - : Der Text wird auf die für den Browser performanteste Weise umbrochen und berücksichtigt nicht die Anzahl der Zeichen.
- `balance`
  - : Der Text wird so umbrochen, dass die Anzahl der Zeichen auf jeder Zeile am besten ausbalanciert ist, was die Layoutqualität und Lesbarkeit verbessert. Da das Zählen von Zeichen und das Balancieren über mehrere Zeilen hinweg Rechenaufwand erfordert, wird dieser Wert nur für Textblöcke unterstützt, die sich über eine begrenzte Anzahl von Zeilen erstrecken (sechs oder weniger für Chromium und zehn oder weniger für Firefox).
- `pretty`
  - : Der Text wird mit einem langsameren Algorithmus umbrochen, der ein besseres Layout gegenüber der Geschwindigkeit bevorzugt. Dies ist für den Fließtext gedacht, bei dem gute Typografie gegenüber der Performance bevorzugt wird (zum Beispiel, wenn die Anzahl der [orphans](/de/docs/Web/CSS/orphans) auf ein Minimum reduziert werden soll).
- `stable`
  - : Der Text wird so umbrochen, dass beim Bearbeiten des Inhalts durch den Benutzer die Zeilen, die sich vor den bearbeiteten Zeilen befinden, statisch bleiben, anstatt dass der gesamte Textblock neu umbrochen wird.

> [!NOTE]
> Das [CSS text](/de/docs/Web/CSS/CSS_text) Modul definiert einen `avoid-orphans` Wert für die Eigenschaft `text-wrap-style`, um übermäßig kurze letzte Zeilen zu vermeiden und erwartet, dass der Benutzeragent mehr als eine Linie in Betracht zieht, wenn er Entscheidungen über Umbrüche trifft. Dieser Wert wird bisher in keinem Browser unterstützt.

## Beschreibung

Wenn das Umbruch des Inhalts erlaubt ist, was standardmäßig der Fall ist, gibt es eine Reihe von Optionen, die die Art und Weise beeinflussen können, wie der Inhalt umbrochen wird.

Der Wert, den Sie für `text-wrap-style` wählen, hängt davon ab, wie viele Zeilen Text Sie gestalten möchten, ob der Text `contenteditable` ist und ob Sie das Aussehen oder die Leistung priorisieren müssen.

Wenn der gestylte Inhalt auf eine geringe Anzahl von Zeilen beschränkt ist, wie z.B. Überschriften, Bildunterschriften und Blockzitate, kann `text-wrap-style: balance` hinzugefügt werden, um die Anzahl der Zeichen auf jeder Zeile auszugleichen und die Layoutqualität und Lesbarkeit zu verbessern. Da Browser die Anzahl der Zeilen begrenzen, die von dieser Eigenschaft betroffen sind, ist seine Auswirkung auf die Leistung vernachlässigbar.

Für längere Textabschnitte kann `text-wrap-style: pretty` verwendet werden. Beachten Sie, dass `pretty` negative Auswirkungen auf die Leistung hat, daher sollte es nur für längere Textblöcke verwendet werden, wenn das Layout wichtiger ist als die Geschwindigkeit.

Der Wert `stable` verbessert die Benutzererfahrung, wenn er auf Inhalte angewendet wird, die [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) sind. Dieser Wert stellt sicher, dass beim Bearbeiten von Text durch den Benutzer die vorherigen Zeilen im bearbeiteten Bereich stabil bleiben.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Ausbalancierter Text

Dieses Beispiel hat zwei Absätze, der erste ist der Standard `auto` und der zweite ist `balance`.

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
