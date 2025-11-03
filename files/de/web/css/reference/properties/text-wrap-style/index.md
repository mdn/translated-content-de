---
title: text-wrap-style
slug: Web/CSS/Reference/Properties/text-wrap-style
l10n:
  sourceCommit: aff319cd81d10cfda31b13adb3263deafb284b20
---

Die **`text-wrap-style`** [CSS](/de/docs/Web/CSS)-Eigenschaft steuert, wie der Text innerhalb eines Elements umbrochen wird. Die verschiedenen Werte bieten alternative Möglichkeiten, den Inhalt eines Blockelements umzubrechen. Es kann auch mit der {{CSSXRef("text-wrap")}} Kurzform eingestellt und zurückgesetzt werden.

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

Wenn Umbrechen erlaubt ist (siehe {{CSSXRef("text-wrap-mode")}}), wird die Eigenschaft `text-wrap-style` als ein einzelnes Schlüsselwort aus der untenstehenden Liste von Werten angegeben.

### Werte

- `auto`
  - : Der Text wird auf die für den Browser performanteste Weise umbrochen und berücksichtigt nicht die Anzahl der Zeichen.
- `balance`
  - : Der Text wird so umbrochen, dass die Anzahl der Zeichen in jeder Zeile möglichst gut ausgeglichen wird, was die Layoutqualität und Lesbarkeit verbessert. Da das Zählen und Ausgleichen von Zeichen über mehrere Zeilen hinweg rechnerisch aufwändig ist, wird dieser Wert nur für Textblöcke unterstützt, die eine begrenzte Anzahl von Zeilen umfassen (sechs oder weniger für Chromium und zehn oder weniger für Firefox).
- `pretty`
  - : Der Text wird unter Verwendung eines langsameren Algorithmus umbrochen, der eine bessere Gestaltung gegenüber der Geschwindigkeit bevorzugt. Dies ist für Fließtext gedacht, bei dem gute Typografie wichtiger als Performance ist (zum Beispiel, wenn die Anzahl an [orphans](/de/docs/Web/CSS/Reference/Properties/orphans) minimiert werden soll).
- `stable`
  - : Der Text wird so umbrochen, dass, wenn der Benutzer den Inhalt bearbeitet, die Zeilen vor den Zeilen, die sie bearbeiten, statisch bleiben, anstatt dass der gesamte Textblock neu umbrochen wird.

> [!NOTE]
> Das [CSS text](/de/docs/Web/CSS/CSS_text) Modul definiert einen Wert `avoid-orphans` für die Eigenschaft `text-wrap-style`, um übermäßig kurze letzte Zeilen zu vermeiden und erwartet, dass der Benutzeragent mehr als eine Zeile berücksichtigt, wenn er Entscheidungen über Umbrüche trifft. Dieser Wert wird bisher von keinem Browser unterstützt.

## Beschreibung

Wenn der Inhalt umbrochen werden kann, was standardmäßig der Fall ist, gibt es eine Reihe von Auswahlmöglichkeiten, die die Art und Weise, wie der Inhalt umbrochen wird, beeinflussen können.

Der gewählte Wert für `text-wrap-style` hängt davon ab, wie viele Zeilen Text Sie gestalten möchten, ob der Text `contenteditable` ist und ob Erscheinungsbild oder Leistung priorisiert werden muss.

Wenn der gestaltete Inhalt auf eine geringe Anzahl von Zeilen beschränkt wird, wie z.B. Überschriften, Bildunterschriften und Blockzitate, kann `text-wrap-style: balance` hinzugefügt werden, um die Anzahl der Zeichen in jeder Zeile auszugleichen, was die Layoutqualität und Lesbarkeit verbessert. Da Browser die Anzahl der von dieser Eigenschaft betroffenen Zeilen begrenzen, ist der Einfluss dieses Wertes auf die Performance vernachlässigbar.

Für längere Textabschnitte kann `text-wrap-style: pretty` verwendet werden. Beachten Sie, dass `pretty` eine negative Auswirkung auf die Performance hat und daher nur bei längeren Textblöcken eingesetzt werden sollte, wenn das Layout wichtiger ist als die Geschwindigkeit.

Der Wert `stable` verbessert die Benutzererfahrung, wenn er auf Inhalte angewendet wird, die [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) sind. Dieser Wert stellt sicher, dass beim Bearbeiten des Textes die vorherigen Zeilen im bearbeiteten Bereich stabil bleiben.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Ausgeglichener Text

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
