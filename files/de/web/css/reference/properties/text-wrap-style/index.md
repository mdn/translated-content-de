---
title: "`text-wrap-style` CSS property"
short-title: text-wrap-style
slug: Web/CSS/Reference/Properties/text-wrap-style
l10n:
  sourceCommit: 7d82de65fb43700d2053f13d8344ec4a78759b2c
---

Die **`text-wrap-style`** [CSS](/de/docs/Web/CSS) Eigenschaft steuert, wie Text innerhalb eines Elements umbrochen wird, und bietet alternative Methoden, um festzulegen, wo Zeilenumbrüche erstellt werden, um den Inhalt innerhalb eines Blockelements anzupassen.

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

### Werte

Die `text-wrap-style` Eigenschaft wird als einer der folgenden Schlüsselwortwerte festgelegt:

- `auto`
  - : Text wird auf die performanteste Weise für den Browser umbrochen und berücksichtigt nicht die Anzahl der Zeichen.
- `balance`
  - : Text wird so umbrochen, dass die Anzahl der Zeichen auf jeder Zeile bestmöglich ausgeglichen wird, um die Layoutqualität und Lesbarkeit zu verbessern. Da das Zählen von Zeichen und deren Ausgleich über mehrere Zeilen hinweg rechenintensiv ist, wird dieser Wert nur für Textblöcke unterstützt, die eine begrenzte Anzahl von Zeilen umfassen (sechs oder weniger bei Chromium und zehn oder weniger bei Firefox).
- `pretty`
  - : Text wird mit einem langsameren Algorithmus umbrochen, der ein besseres Layout gegenüber der Geschwindigkeit bevorzugt. Dies ist für Fließtext gedacht, bei dem gutes Typografie über der Leistung bevorzugt wird (zum Beispiel, wenn die Anzahl von [Waisenkindern](/de/docs/Web/CSS/Reference/Properties/orphans) auf ein Minimum beschränkt werden soll).
- `stable`
  - : Text wird so umbrochen, dass beim Bearbeiten des Inhalts durch den Benutzer die Zeilen, die sich vor den bearbeiteten Zeilen befinden, statisch bleiben, anstatt dass der gesamte Textblock neu umbrochen wird.

Die Spezifikation definiert auch einen `avoid-orphans` Wert, bei dem Browser mehr als eine Zeile berücksichtigen, um übermäßig kurze letzte Zeilen zu vermeiden. Dieser Wert wird derzeit noch von keinem Browser unterstützt.

## Beschreibung

Die `text-wrap-style` Eigenschaft kann verwendet werden, um einen Hinweis darauf zu geben, wie der Benutzeragent weiche Zeilenumbrüche einfügen sollte, wenn der Inhalt umbrochen werden darf. Jeder Wert definiert einen anderen Ansatz zum Umbrechen von Zeilen, wobei Geschwindigkeit, Qualität, Layoutstil und Stabilität ausgewogen werden, um alternative Möglichkeiten zum Umbrechen des Inhalts eines Blockelements zu bieten.

Wenn der Inhalt umbrochen werden darf — das übliche Verhalten, da der Standardwert der {{CSSXRef("text-wrap-mode")}} Eigenschaft `wrap` ist — gibt der einzelne Schlüsselwortwert der `text-wrap-style` Eigenschaft an, _wie_ der Entwickler möchte, dass der Text umbrochen wird. Die Werte haben keine Auswirkung darauf, wo eine weiche Umbruchmöglichkeit besteht, sondern nur darauf, wie der Browser unter ihnen auswählt. Wenn `text-wrap-mode` auf `nowrap` gesetzt ist, hat diese Eigenschaft keine Wirkung.

### Auswahl eines Werts

Der von Ihnen gewählte Wert für `text-wrap-style` hängt davon ab, wie viele Textzeilen Sie stilisieren möchten, ob der Text `contenteditable` ist und ob Sie das Erscheinungsbild oder die Leistung priorisieren müssen.

Wenn der formatierte Inhalt auf eine kurze Anzahl von Zeilen beschränkt wird, wie Überschriften, Bildunterschriften und Zitate, kann `text-wrap-style: balance` hinzugefügt werden, um die Anzahl der Zeichen auf jeder Zeile auszugleichen und die Layoutqualität und Lesbarkeit zu verbessern. Da Browser die Anzahl der von dieser Eigenschaft betroffenen Zeilen begrenzen, ist der Einfluss dieses Werts auf die Leistung vernachlässigbar.

Für längere Textabschnitte kann `text-wrap-style: pretty` verwendet werden. Beachten Sie, dass `pretty` negative Auswirkungen auf die Leistung hat, daher sollte es nur für längere Textblöcke verwendet werden, wenn das Layout wichtiger ist als die Geschwindigkeit.

Der `stable` Wert verbessert die Benutzererfahrung, wenn er auf Inhalte angewendet wird, die [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) sind. Dieser Wert stellt sicher, dass beim Bearbeiten von Text durch den Benutzer die vorherigen Zeilen im bearbeiteten Bereich stabil bleiben.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Ausbalancierter Text

Dieses Beispiel enthält zwei Absätze, der erste ist der Standard-`auto` und der zweite ist `balance`.

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
- {{CSSxRef("hyphens")}}
- {{CSSxRef("hyphenate-limit-chars")}}
- [CSS Text](/de/docs/Web/CSS/Guides/Text) Modul
