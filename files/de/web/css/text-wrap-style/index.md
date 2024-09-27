---
title: text-wrap-style
slug: Web/CSS/text-wrap-style
l10n:
  sourceCommit: aac4966bd12c77281f9374bbfaf4e17e2680ac3b
---

{{CSSRef}}

Die **`text-wrap-style`** [CSS](/de/docs/Web/CSS) Eigenschaft steuert, wie Text innerhalb eines Elements umbrochen wird. Die verschiedenen Werte bieten alternative Möglichkeiten, den Inhalt eines Blockelements umzubrechen. Sie kann auch mit der {{CSSXRef("text-wrap")}} Kurzform gesetzt und zurückgesetzt werden.

{{EmbedInteractiveExample("pages/css/text-wrap-style.html")}}

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

Wenn das Umbrechen erlaubt ist (siehe {{CSSXRef("text-wrap-mode")}}), wird die `text-wrap-style` Eigenschaft als ein einzelnes Schlüsselwort aus der unten aufgeführten Liste von Werten spezifiziert.

### Werte

- `auto`
  - : Der Text wird auf die für den Browser performanteste Weise umbrochen und berücksichtigt nicht die Anzahl der Zeichen.
- `balance`
  - : Der Text wird so umbrochen, dass die Anzahl der Zeichen auf jeder Zeile bestmöglich ausgeglichen wird, was die Layoutqualität und Lesbarkeit verbessert. Da das Zählen von Zeichen und deren Ausgleich über mehrere Zeilen hinweg rechenintensiv ist, wird dieser Wert nur für Textblöcke unterstützt, die sich über eine begrenzte Anzahl von Zeilen erstrecken (sechs oder weniger für Chromium und zehn oder weniger für Firefox).
- `pretty`
  - : Der Text wird mit einem langsameren Algorithmus umbrochen, der ein besseres Layout gegenüber der Geschwindigkeit bevorzugt. Dies ist für den Fließtext gedacht, bei dem gute Typografie gegenüber der Leistung bevorzugt wird (zum Beispiel, wenn die Anzahl von [Hurenkindern](/de/docs/Web/CSS/orphans) auf ein Minimum beschränkt werden soll).
- `stable`
  - : Der Text wird so umbrochen, dass bei der Bearbeitung des Inhalts durch den Benutzer die Zeilen vor der bearbeiteten Zeile statisch bleiben, anstatt dass der gesamte Textblock neu umbrochen wird.

## Beschreibung

Wenn der Inhalt umbrochen werden darf, was standardmäßig der Fall ist, gibt es eine Reihe von Auswahlmöglichkeiten, die die Art des Umbruchs des Inhalts beeinflussen können.

Der Wert, den Sie für `text-wrap-style` wählen, hängt davon ab, wie viele Textzeilen Sie erwarten zu stylen, ob der Text `contenteditable` ist und ob Sie das Erscheinungsbild oder die Leistung priorisieren müssen.

Wenn der gestylte Inhalt auf eine kurze Anzahl von Zeilen begrenzt ist, wie z. B. Überschriften, Bildunterschriften und Blockzitate, kann `text-wrap-style: balance` hinzugefügt werden, um die Anzahl der Zeichen auf jeder Zeile auszugleichen und die Layoutqualität und Lesbarkeit zu verbessern. Da Browser die Anzahl der von dieser Eigenschaft beeinflussten Zeilen begrenzen, ist die Auswirkung dieses Wertes auf die Leistung vernachlässigbar.

Für längere Textabschnitte kann `text-wrap-style: pretty` verwendet werden. Beachten Sie, dass `pretty` negative Auswirkungen auf die Leistung hat, daher sollte es nur für längere Textblöcke verwendet werden, wenn das Layout wichtiger als die Geschwindigkeit ist.

Der Wert `stable` verbessert die Benutzererfahrung, wenn er auf Inhalte angewendet wird, die [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) sind. Dieser Wert stellt sicher, dass beim Bearbeiten von Text durch den Benutzer die vorherigen Zeilen im bearbeiteten Bereich stabil bleiben.

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
