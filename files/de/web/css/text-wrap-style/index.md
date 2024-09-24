---
title: text-wrap-style
slug: Web/CSS/text-wrap-style
l10n:
  sourceCommit: aac4966bd12c77281f9374bbfaf4e17e2680ac3b
---

{{CSSRef}}

Die **`text-wrap-style`** [CSS](/de/docs/Web/CSS) Eigenschaft steuert, wie der Text innerhalb eines Elements umbrochen wird. Die verschiedenen Werte bieten alternative Möglichkeiten, den Inhalt eines Blockelements umzubrechen. Sie kann auch mithilfe der {{CSSXRef("text-wrap")}} Kurzform gesetzt und zurückgesetzt werden.

{{EmbedInteractiveExample("pages/css/text-wrap-style.html")}}

## Syntax

```css
/* Schlüsselwortwerte */
text-wrap-style: auto;
text-wrap-style: balance;
text-wrap-style: pretty;
text-wrap-style: stable;

/* Globale Werte */
text-wrap-style: inherit;
text-wrap-style: initial;
text-wrap-style: revert;
text-wrap-style: revert-layer;
text-wrap-style: unset;
```

Wenn das Umbruch erlaubt ist (siehe {{CSSXRef("text-wrap-mode")}}), wird die Eigenschaft `text-wrap-style` als einzelnes Schlüsselwort aus der unten stehenden Werteliste angegeben.

### Werte

- `auto`
  - : Der Text wird auf die für den Browser leistungsfähigste Weise umbrochen und berücksichtigt nicht die Anzahl der Zeichen.
- `balance`
  - : Der Text wird so umgebrochen, dass die Anzahl der Zeichen pro Zeile bestmöglich ausgeglichen wird, was die Layoutqualität und Lesbarkeit verbessert. Da das Zählen der Zeichen und ihr Ausgleich über mehrere Zeilen rechenintensiv ist, wird diese Option nur für Textblöcke unterstützt, die nur auf eine begrenzte Anzahl von Zeilen verteilt sind (sechs oder weniger für Chromium und zehn oder weniger für Firefox).
- `pretty`
  - : Der Text wird mit einem langsameren Algorithmus umbrochen, der eine bessere Gestaltung gegenüber Geschwindigkeit bevorzugt. Dies ist für den Haupttext gedacht, bei dem gute Typografie über Leistung gestellt wird (zum Beispiel, wenn die Anzahl der [Waisenkinder](/de/docs/Web/CSS/orphans) minimiert werden soll).
- `stable`
  - : Der Text wird so umbrochen, dass, wenn der Benutzer den Inhalt bearbeitet, die Zeilen, die den bearbeiteten Zeilen vorausgehen, unverändert bleiben, anstatt dass der gesamte Textblock neu umbrochen wird.

## Beschreibung

Wenn dem Inhalt erlaubt ist, umgebrochen zu werden, was standardmäßig der Fall ist, gibt es eine Reihe von Optionen, die die Art und Weise beeinflussen können, wie der Inhalt umbrochen wird.

Der von Ihnen gewählte Wert für `text-wrap-style` hängt davon ab, wie viele Textzeilen Sie stilisieren möchten, ob der Text `contenteditable` ist und ob Sie das Erscheinungsbild oder die Leistung priorisieren müssen.

Wenn der gestylte Inhalt auf eine kurze Anzahl von Zeilen, wie Überschriften, Bildunterschriften und Zitate, beschränkt ist, kann `text-wrap-style: balance` hinzugefügt werden, um die Anzahl der Zeichen pro Zeile auszugleichen, was die Layoutqualität und Lesbarkeit verbessert. Da Browser die Anzahl der von dieser Eigenschaft betroffenen Zeilen begrenzen, ist der Einfluss dieses Wertes auf die Leistung vernachlässigbar.

Für längere Textabschnitte kann `text-wrap-style: pretty` verwendet werden. Beachten Sie, dass `pretty` negative Auswirkungen auf die Leistung hat und daher nur für längere Textblöcke verwendet werden sollte, wenn das Layout wichtiger als die Geschwindigkeit ist.

Der Wert `stable` verbessert die Benutzererfahrung bei der Bearbeitung von [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) Inhalten. Dieser Wert stellt sicher, dass die vorhergehenden Zeilen im bearbeiteten Bereich stabil bleiben, während der Benutzer den Text bearbeitet.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Ausgeglichener Text

Dieses Beispiel enthält zwei Absätze, der erste ist der Standardwert `auto` und der zweite ist `balance`.

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
