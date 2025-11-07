---
title: text-wrap-style
slug: Web/CSS/Reference/Properties/text-wrap-style
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`text-wrap-style`** [CSS](/de/docs/Web/CSS) Eigenschaft steuert, wie Text innerhalb eines Elements umbrochen wird. Die verschiedenen Werte bieten alternative Möglichkeiten, den Inhalt eines Blockelements zu umbrechen. Es kann auch mit der {{CSSXRef("text-wrap")}} Kurzschrift gesetzt und zurückgesetzt werden.

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

Wenn ein Umbruch erlaubt ist (siehe {{CSSXRef("text-wrap-mode")}}), wird die Eigenschaft `text-wrap-style` als ein einzelnes Schlüsselwort angegeben, das aus der unten stehenden Werteliste ausgewählt wird.

### Werte

- `auto`
  - : Text wird auf die performanteste Weise für den Browser umbrochen und berücksichtigt nicht die Anzahl der Zeichen.
- `balance`
  - : Text wird so umbrochen, dass die Anzahl der Zeichen auf jeder Zeile bestmöglich ausgewogen ist, was die Layoutqualität und Lesbarkeit verbessert. Da das Zählen und Ausgleichen der Zeichen über mehrere Zeilen hinweg rechenintensiv ist, wird dieser Wert nur bei Textblöcken unterstützt, die eine begrenzte Anzahl von Zeilen umfassen (sechs oder weniger für Chromium und zehn oder weniger für Firefox).
- `pretty`
  - : Text wird mit einem langsameren Algorithmus umbrochen, der eine bessere Layout-Qualität gegenüber Geschwindigkeit bevorzugt. Dies ist für Fließtext gedacht, bei dem gute Typografie wichtiger als Leistung ist (zum Beispiel, wenn die Anzahl der [orphans](/de/docs/Web/CSS/Reference/Properties/orphans) auf ein Minimum reduziert werden sollte).
- `stable`
  - : Text wird so umbrochen, dass beim Bearbeiten des Inhalts die Zeilen, die vor den bearbeiteten Zeilen liegen, statisch bleiben, anstatt dass der gesamte Textblock neu umgebrochen wird.

> [!NOTE]
> Das [CSS text](/de/docs/Web/CSS/Guides/Text) Modul definiert einen `avoid-orphans` Wert für die Eigenschaft `text-wrap-style`, um übermäßig kurze letzte Zeilen zu vermeiden und erwartet, dass der Benutzeragent bei der Festlegung von Umbruchentscheidungen mehr als eine Zeile berücksichtigt. Dieser Wert wird derzeit in keinem Browser unterstützt.

## Beschreibung

Wenn der Inhalt umgebrochen werden darf, was standardmäßig der Fall ist, gibt es eine Reihe von Optionen, die die Art und Weise beeinflussen können, wie der Inhalt umbrochen wird.

Der Wert, den Sie für `text-wrap-style` wählen, hängt davon ab, wie viele Textzeilen Sie stylen möchten, ob der Text `contenteditable` ist und ob Sie das Erscheinungsbild oder die Leistung priorisieren müssen.

Wenn der gestylte Inhalt auf eine kurze Anzahl von Zeilen beschränkt wird, wie Überschriften, Bildunterschriften und Zitate, kann `text-wrap-style: balance` hinzugefügt werden, um die Anzahl der Zeichen auf jeder Zeile auszubalancieren und so die Layoutqualität und Lesbarkeit zu verbessern. Da Browser die Anzahl der von dieser Eigenschaft betroffenen Zeilen begrenzen, ist der Einfluss dieses Werts auf die Leistung vernachlässigbar.

Für längere Textabschnitte kann `text-wrap-style: pretty` verwendet werden. Beachten Sie, dass `pretty` eine negative Auswirkung auf die Leistung hat, daher sollte es nur für längere Textblöcke verwendet werden, wenn das Layout wichtiger als die Geschwindigkeit ist.

Der Wert `stable` verbessert die Benutzererfahrung bei der Verwendung auf Inhalt, der [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) ist. Dieser Wert stellt sicher, dass beim Bearbeiten von Text die vorherigen Zeilen im bearbeiteten Bereich stabil bleiben.

## Offizielle Definition

{{CSSInfo}}

## Offizielle Syntax

{{CSSSyntax}}

## Beispiele

### Ausgewogener Text

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
