---
title: text-wrap-style
slug: Web/CSS/text-wrap-style
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{CSSRef}}

Die **`text-wrap-style`** [CSS](/de/docs/Web/CSS) Eigenschaft steuert, wie Text innerhalb eines Elements umbrochen wird. Die verschiedenen Werte bieten alternative Möglichkeiten, den Inhalt eines Blockelements umzubrechen. Sie kann auch gesetzt und zurückgesetzt werden, indem die {{CSSXRef("text-wrap")}} Kurzschreibweise verwendet wird.

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

Wenn Umbrüche erlaubt sind (siehe {{CSSXRef("text-wrap-mode")}}), wird die `text-wrap-style` Eigenschaft als einzelnes Schlüsselwort aus der untenstehenden Liste von Werten angegeben.

### Werte

- `auto`
  - : Text wird auf die für den Browser performanteste Weise umbrochen und berücksichtigt nicht die Anzahl der Zeichen.
- `balance`
  - : Text wird so umbrochen, dass die Anzahl der Zeichen pro Zeile bestmöglich ausbalanciert wird, wodurch die Layoutqualität und Lesbarkeit verbessert wird. Da das Zählen von Zeichen und deren Ausbalancieren über mehrere Zeilen hinweg rechenintensiv ist, wird dieser Wert nur für Textblöcke unterstützt, die sich über eine begrenzte Anzahl von Zeilen erstrecken (sechs oder weniger für Chromium und zehn oder weniger für Firefox).
- `pretty`
  - : Text wird unter Verwendung eines langsameren Algorithmus umbrochen, der eine bessere Layoutqualität gegenüber Geschwindigkeit bevorzugt. Dies ist für längere Texte gedacht, bei denen gute Typografie wichtiger als Leistung ist (zum Beispiel, wenn die Anzahl der [orphans](/de/docs/Web/CSS/orphans) minimal gehalten werden soll).
- `stable`
  - : Text wird so umbrochen, dass beim Bearbeiten des Inhalts von Benutzern die Zeilen, die vor den bearbeiteten Zeilen kommen, statisch bleiben und sich nicht der gesamte Textblock neu umbreicht.

> [!NOTE]
> Das [CSS Text](/de/docs/Web/CSS/CSS_text) Modul definiert einen `avoid-orphans` Wert für die `text-wrap-style` Eigenschaft, um übermäßig kurze letzte Zeilen zu vermeiden und erwartet, dass der Benutzeragent mehr als eine Zeile bei Entscheidungen über Umbrüche berücksichtigt. Dieser Wert wird bisher von keinem Browser unterstützt.

## Beschreibung

Wenn der Inhalt umbrochen werden darf, was standardmäßig der Fall ist, gibt es mehrere Möglichkeiten, die die Art des Umbruchs beeinflussen können.

Der gewählte Wert für `text-wrap-style` hängt davon ab, wie viele Textzeilen Sie stilisieren möchten, ob der Text `contenteditable` ist und ob Sie das Erscheinungsbild oder die Leistung priorisieren müssen.

Wenn der formatierte Inhalt auf eine geringe Anzahl von Zeilen beschränkt ist, wie z.B. Überschriften, Bildunterschriften und Zitate, kann `text-wrap-style: balance` hinzugefügt werden, um die Anzahl der Zeichen pro Zeile auszugleichen und die Layoutqualität und Lesbarkeit zu verbessern. Da Browser die Anzahl der Zeilen, die von dieser Eigenschaft betroffen sind, begrenzen, ist die Auswirkung auf die Leistung vernachlässigbar.

Für längere Textabschnitte kann `text-wrap-style: pretty` verwendet werden. Beachten Sie, dass `pretty` einen negativen Einfluss auf die Leistung hat und daher nur für längere Textblöcke verwendet werden sollte, bei denen das Layout wichtiger als die Geschwindigkeit ist.

Der `stable` Wert verbessert die Benutzererfahrung, wenn er auf Inhalte angewendet wird, die [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) sind. Dieser Wert sorgt dafür, dass beim Bearbeiten von Text durch den Benutzer die vorherigen Zeilen im bearbeiteten Bereich stabil bleiben.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Ausbalancierter Text

Dieses Beispiel enthält zwei Absätze, der erste ist standardmäßig `auto` und der zweite ist `balance`.

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
