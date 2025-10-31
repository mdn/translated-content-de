---
title: text-wrap-style
slug: Web/CSS/Reference/Properties/text-wrap-style
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`text-wrap-style`** [CSS](/de/docs/Web/CSS) Eigenschaft steuert, wie Text innerhalb eines Elements umbrochen wird. Die verschiedenen Werte bieten alternative Möglichkeiten, den Inhalt eines Blockelements umzubrechen. Sie kann auch mit der Kurzschrift {{CSSXRef("text-wrap")}} gesetzt und zurückgesetzt werden.

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

Wenn ein Umbruch erlaubt ist (siehe {{CSSXRef("text-wrap-mode")}}), wird die Eigenschaft `text-wrap-style` als ein einzelnes Schlüsselwort aus der unten stehenden Werteliste angegeben.

### Werte

- `auto`
  - : Text wird auf die performanteste Weise für den Browser umbrochen und berücksichtigt nicht die Anzahl der Zeichen.
- `balance`
  - : Text wird so umbrochen, dass die Anzahl der Zeichen pro Zeile am besten ausbalanciert wird, wodurch die Layoutqualität und Lesbarkeit verbessert werden. Da das Zählen der Zeichen und das Ausbalancieren über mehrere Zeilen hinweg rechenintensiv ist, wird dieser Wert nur für Textblöcke mit einer begrenzten Anzahl von Zeilen unterstützt (sechs oder weniger für Chromium und zehn oder weniger für Firefox).
- `pretty`
  - : Text wird mit einem langsameren Algorithmus umbrochen, der ein besseres Layout gegenüber der Geschwindigkeit bevorzugt. Dies ist für Fließtext gedacht, wo gute Typografie über Leistung gestellt wird (zum Beispiel, wenn die Anzahl der [Orphans](/de/docs/Web/CSS/Reference/Properties/orphans) auf ein Minimum reduziert werden soll).
- `stable`
  - : Text wird so umbrochen, dass beim Bearbeiten des Inhalts durch den Benutzer die Zeilen, die vor den bearbeiteten Zeilen stehen, statisch bleiben, anstatt dass der gesamte Textblock neu umbricht.

> [!NOTE]
> Das [CSS text](/de/docs/Web/CSS/CSS_text) Modul definiert einen `avoid-orphans` Wert für die `text-wrap-style` Eigenschaft, um übermäßig kurze letzte Zeilen zu vermeiden. Es wird erwartet, dass die Benutzeragenten bei der Entscheidung über Umbrüche mehr als eine Zeile berücksichtigen. Dieser Wert wird in keinem Browser bisher unterstützt.

## Beschreibung

Wenn der Inhalt umbrochen werden darf, was standardmäßig der Fall ist, gibt es eine Reihe von Optionen, die die Art und Weise beeinflussen können, wie der Inhalt umbrochen wird.

Der gewählte Wert für `text-wrap-style` hängt davon ab, wie viele Textzeilen Sie zu stylen beabsichtigen, ob der Text `contenteditable` ist und ob Sie das Aussehen oder die Leistung priorisieren müssen.

Wenn der gestylte Inhalt auf eine geringe Anzahl von Zeilen beschränkt ist, wie z.B. Überschriften, Bildunterschriften und Blockzitate, kann `text-wrap-style: balance` hinzugefügt werden, um die Anzahl der Zeichen pro Zeile auszugleichen und so die Layoutqualität und Lesbarkeit zu verbessern. Da Browser die Anzahl der von dieser Eigenschaft betroffenen Zeilen einschränken, ist der Einfluss dieses Wertes auf die Leistung vernachlässigbar.

Für längere Textabschnitte kann `text-wrap-style: pretty` verwendet werden. Beachten Sie, dass `pretty` einen negativen Einfluss auf die Leistung hat und daher nur für längere Textblöcke verwendet werden sollte, wenn das Layout wichtiger ist als die Geschwindigkeit.

Der Wert `stable` verbessert die Benutzererfahrung, wenn er für Inhalte verwendet wird, die [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) sind. Dieser Wert sorgt dafür, dass die vorherigen Zeilen im bearbeiteten Bereich stabil bleiben, während der Benutzer den Text bearbeitet.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Ausbalancierter Text

Dieses Beispiel enthält zwei Absätze, der erste hat die Standardeinstellung `auto` und der zweite ist `balance`.

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
