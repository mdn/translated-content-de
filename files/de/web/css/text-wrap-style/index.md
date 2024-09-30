---
title: text-wrap-style
slug: Web/CSS/text-wrap-style
l10n:
  sourceCommit: aac4966bd12c77281f9374bbfaf4e17e2680ac3b
---

{{CSSRef}}

Die **`text-wrap-style`** [CSS](/de/docs/Web/CSS) Eigenschaft steuert, wie Text innerhalb eines Elements umbrochen wird. Die verschiedenen Werte bieten alternative Möglichkeiten, den Inhalt eines Blockelements umzubrechen. Sie kann auch mithilfe des {{CSSXRef("text-wrap")}} Kurzbefehls gesetzt und zurückgesetzt werden.

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

Wenn Umbrüche erlaubt sind (siehe {{CSSXRef("text-wrap-mode")}}), wird die `text-wrap-style` Eigenschaft als ein einzelnes Schlüsselwort aus der unten stehenden Werteliste angegeben.

### Werte

- `auto`
  - : Text wird auf die für den Browser effizienteste Weise umbrochen, ohne Rücksicht auf die Anzahl der Zeichen.
- `balance`
  - : Text wird so umbrochen, dass die Anzahl der Zeichen auf jeder Zeile ausgeglichen ist, was die Layoutqualität und Lesbarkeit verbessert. Da das Zählen von Zeichen und deren Ausgleich über mehrere Zeilen hinweg rechenintensiv ist, wird dieser Wert nur für Textblöcke unterstützt, die eine begrenzte Anzahl von Zeilen umfassen (bis zu sechs Zeilen für Chromium und bis zu zehn Zeilen für Firefox).
- `pretty`
  - : Text wird mit einem langsameren Algorithmus umgebrochen, der ein besseres Layout gegenüber Geschwindigkeit bevorzugt. Dies ist für Fließtext gedacht, bei dem eine gute Typografie über die Leistung gestellt wird (beispielsweise, wenn die Anzahl der [orphans](/de/docs/Web/CSS/orphans) minimiert werden sollte).
- `stable`
  - : Der Text wird so umbrochen, dass bei der Bearbeitung des Inhalts durch den Benutzer die Zeilen, die vor den bearbeiteten Zeilen stehen, statisch bleiben, anstatt dass der gesamte Textblock neu umbrochen wird.

## Beschreibung

Wenn es erlaubt ist, dass der Inhalt umbrochen wird, was standardmäßig der Fall ist, gibt es eine Reihe von Optionen, die die Art und Weise beeinflussen können, wie der Inhalt umbrochen wird.

Der gewählte Wert für `text-wrap-style` hängt davon ab, wie viele Textzeilen Sie erwarten zu gestalten, ob der Text `contenteditable` ist und ob Sie das Aussehen oder die Leistung priorisieren müssen.

Wenn der gestaltete Inhalt auf eine geringe Anzahl von Zeilen beschränkt ist, wie z.B. Überschriften, Bildunterschriften und Blockzitate, kann `text-wrap-style: balance` hinzugefügt werden, um die Anzahl der Zeichen auf jeder Zeile auszubalancieren, was die Layoutqualität und Lesbarkeit verbessert. Da Browser die Anzahl der von dieser Eigenschaft betroffenen Zeilen begrenzen, ist der Einfluss dieses Wertes auf die Leistung vernachlässigbar.

Für längere Textabschnitte kann `text-wrap-style: pretty` verwendet werden. Beachten Sie, dass `pretty` eine negative Auswirkung auf die Leistung hat, daher sollte es nur für längere Textblöcke verwendet werden, wenn das Layout wichtiger als die Geschwindigkeit ist.

Der Wert `stable` verbessert die Benutzererfahrung, wenn er auf Inhalte angewendet wird, die [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) sind. Dieser Wert stellt sicher, dass, während der Benutzer Text bearbeitet, die vorherigen Zeilen im bearbeiteten Bereich stabil bleiben.

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
