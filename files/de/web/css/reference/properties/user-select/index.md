---
title: user-select
slug: Web/CSS/Reference/Properties/user-select
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`user-select`** [CSS](/de/docs/Web/CSS) Eigenschaft steuert, ob der Benutzer Text auswählen kann. Dies hat keine Auswirkungen auf Inhalte, die als Teil der Benutzeroberfläche eines Browsers geladen werden (sein {{Glossary("Chrome", "Chrome")}}), außer in Textboxen.

{{InteractiveExample("CSS Demo: user-select")}}

```css interactive-example-choice
user-select: none;
```

```css interactive-example-choice
user-select: text;
```

```css interactive-example-choice
user-select: all;
```

```html interactive-example
<section id="default-example">
  <p id="example-element">Try to select this text</p>
</section>
```

```css interactive-example
#example-element {
  font-size: 1.5rem;
}
```

## Syntax

```css
/* Keyword values */
user-select: none;
user-select: auto;
user-select: text;
user-select: all;

/* Global values */
user-select: inherit;
user-select: initial;
user-select: revert;
user-select: revert-layer;
user-select: unset;
```

> [!NOTE]
> `user-select` ist keine vererbte Eigenschaft, obwohl der initiale `auto`-Wert es meistens so verhalten lässt, als wäre sie vererbt. WebKit/Chromium-basierte Browser implementieren die Eigenschaft _doch_ als vererbt, was das Verhalten laut Spezifikation verletzt und einige Probleme verursachen wird. Bis jetzt hat Chromium sich entschieden, die [Probleme zu beheben](https://chromium.googlesource.com/chromium/src/+/b01af0b296ecb855aac95c4ed335d188e6eac2de), um das endgültige Verhalten mit den Spezifikationen in Einklang zu bringen.

### Werte

- `none`
  - : Der Text des Elements und seiner Unterelemente ist nicht auswählbar. Beachten Sie, dass das [`Selection`](/de/docs/Web/API/Selection) Objekt diese Elemente enthalten kann.
- `auto`
  - : Der verwendete Wert von `auto` wird wie folgt bestimmt:
    - Bei den `::before` und `::after` Pseudoelementen ist der verwendete Wert `none`
    - Wenn der verwendete Wert von `user-select` des übergeordneten Elements `none` ist, ist der verwendete Wert `none`
    - Andernfalls, wenn der verwendete Wert von `user-select` des übergeordneten Elements `all` ist, ist der verwendete Wert `all`
    - Andernfalls ist der verwendete Wert `text`

- `text`
  - : Der Text kann vom Benutzer ausgewählt werden.
- `all`
  - : Der Inhalt des Elements soll atomar ausgewählt werden: Wenn eine Auswahl einen Teil des Elements enthalten würde, muss die Auswahl das gesamte Element einschließlich aller Nachkommen enthalten. Wenn ein Doppelklick oder Kontextklick in Unterelementen erfolgt, wird der höchste Vorfahre mit diesem Wert ausgewählt.

> [!NOTE]
> Das [CSS-Benutzeroberflächenmodul](/de/docs/Web/CSS/CSS_basic_user_interface) definiert einen `contain`-Wert für die `user-select`-Eigenschaft, um eine Auswahl innerhalb des Elements zu ermöglichen, die auf die Grenzen dieses Elements beschränkt ist. Dies wird jedoch in keinem Browser unterstützt.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### HTML

```html
<p>You should be able to select this text.</p>
<p class="unselectable">Hey, you can't select this text!</p>
<p class="all">Clicking once will select all of this text.</p>
```

### CSS

```css
.unselectable {
  -webkit-user-select: none; /* Safari */
  user-select: none;
}

.all {
  -webkit-user-select: all;
  user-select: all;
}
```

### Ergebnis

{{EmbedLiveSample("Examples")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{Cssxref("::selection")}} Pseudoelement
- Das JavaScript [`Selection`](/de/docs/Web/API/Selection) Objekt
