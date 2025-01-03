---
title: text-wrap-style
slug: Web/CSS/text-wrap-style
l10n:
  sourceCommit: 2a3911def06e1850e2b76907b3a42c688ee7a2bc
---

{{CSSRef}}

Die **`text-wrap-style`** [CSS](/de/docs/Web/CSS) Eigenschaft steuert, wie der Text innerhalb eines Elements umbrochen wird. Die verschiedenen Werte bieten alternative Möglichkeiten, den Inhalt eines Blockelements umzubrechen. Sie kann auch gesetzt und zurückgesetzt werden, indem die Abkürzung {{CSSXRef("text-wrap")}} verwendet wird.

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

Wenn Umbruch erlaubt ist (siehe {{CSSXRef("text-wrap-mode")}}), wird die `text-wrap-style` Eigenschaft als ein einzelnes Schlüsselwort aus der folgenden Liste von Werten angegeben.

### Werte

- `auto`
  - : Text wird auf die für den Browser leistungsfähigste Weise umbrochen und berücksichtigt nicht die Anzahl der Zeichen.
- `balance`
  - : Text wird so umbrochen, dass die Anzahl der Zeichen auf jeder Zeile am besten ausbalanciert wird, was die Layoutqualität und Lesbarkeit verbessert. Da das Zählen der Zeichen und deren Ausbalancieren über mehrere Zeilen hinweg rechenintensiv ist, wird dieser Wert nur für Textblöcke unterstützt, die eine begrenzte Anzahl von Zeilen umfassen (sechs oder weniger für Chromium und zehn oder weniger für Firefox).
- `pretty`
  - : Text wird mithilfe eines langsameren Algorithmus umbrochen, der ein besseres Layout gegenüber Geschwindigkeit bevorzugt. Dies ist vorgesehen für Fließtext, bei dem gute Typografie der Leistung vorgezogen wird (zum Beispiel, wenn die Anzahl der [orphans](/de/docs/Web/CSS/orphans) auf ein Minimum reduziert werden soll).
- `stable`
  - : Text wird so umbrochen, dass, wenn der Benutzer den Inhalt bearbeitet, die Zeilen, die vor den bearbeiteten Zeilen kommen, stabil bleiben, anstatt dass der gesamte Textblock neu umbrochen wird.

> [!NOTE]
> Das [CSS text](/de/docs/Web/CSS/CSS_text) Modul definiert einen `avoid-orphans` Wert für die `text-wrap-style` Eigenschaft, um übermäßig kurze letzte Zeilen zu vermeiden und erwartet, dass der Benutzeragent mehr als eine Zeile bei der Entscheidungsfindung über Umbrüche berücksichtigt. Dieser Wert wird in keinem Browser bislang unterstützt.

## Beschreibung

Wenn der Inhalt umgebrochen werden darf, was standardmäßig der Fall ist, dann gibt es eine Reihe von Auswahlmöglichkeiten, die die Art und Weise beeinflussen können, wie der Inhalt umbrochen wird.

Der Wert, den Sie für `text-wrap-style` wählen, hängt davon ab, wie viele Textzeilen Sie zu gestalten beabsichtigen, ob der Text `contenteditable` ist und ob Sie das Erscheinungsbild oder die Leistung priorisieren müssen.

Wenn der gestylte Inhalt auf eine kurze Anzahl von Zeilen beschränkt ist, wie Überschriften, Bildunterschriften und Zitate, kann `text-wrap-style: balance` hinzugefügt werden, um die Anzahl der Zeichen auf jeder Zeile auszugleichen und die Layoutqualität und Lesbarkeit zu verbessern. Da Browser die Anzahl der von dieser Eigenschaft betroffenen Zeilen begrenzen, ist die Auswirkung auf die Leistung vernachlässigbar.

Für längere Textabschnitte kann `text-wrap-style: pretty` verwendet werden. Beachten Sie, dass `pretty` eine negative Auswirkung auf die Leistung hat, daher sollte es nur für längere Textblöcke verwendet werden, wenn das Layout wichtiger als die Geschwindigkeit ist.

Der Wert `stable` verbessert die Benutzererfahrung, wenn er für Inhalte verwendet wird, die [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) sind. Dieser Wert stellt sicher, dass beim Bearbeiten des Textes die vorherigen Zeilen im bearbeiteten Bereich stabil bleiben.

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
