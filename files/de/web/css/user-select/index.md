---
title: user-select
slug: Web/CSS/user-select
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`user-select`** [CSS](/de/docs/Web/CSS) Eigenschaft steuert, ob der Benutzer Text auswählen kann. Diese Eigenschaft hat keine Wirkung auf Inhalte, die als Teil der Benutzeroberfläche eines Browsers (seines {{Glossary("Chrome", "chrome")}}) geladen werden, außer in Textfeldern.

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
> `user-select` ist keine vererbte Eigenschaft, obwohl der anfängliche `auto` Wert sie meistens so verhalten lässt, als wäre sie vererbt. WebKit/Chromium-basierte Browser implementieren die Eigenschaft _als_ vererbt, was das Verhalten gemäß der Spezifikation verletzt und einige Probleme verursachen wird. Bis jetzt hat Chromium entschieden, die [Probleme zu beheben](https://chromium.googlesource.com/chromium/src/+/b01af0b296ecb855aac95c4ed335d188e6eac2de), um das finale Verhalten an die Spezifikationen anzugleichen.

### Werte

- `none`
  - : Der Text des Elements und seiner Unterelemente ist nicht auswählbar. Beachten Sie, dass das [`Selection`](/de/docs/Web/API/Selection) Objekt diese Elemente enthalten kann.
- `auto`
  - : Der verwendete Wert von `auto` wird wie folgt bestimmt:
    - Auf den `::before` und `::after` Pseudo-Elementen ist der verwendete Wert `none`
    - Wenn der verwendete Wert von `user-select` auf dem übergeordneten Element `none` ist, ist der verwendete Wert `none`
    - Andernfalls, wenn der verwendete Wert von `user-select` auf dem übergeordneten Element `all` ist, ist der verwendete Wert `all`
    - Andernfalls ist der verwendete Wert `text`

- `text`
  - : Der Text kann vom Benutzer ausgewählt werden.
- `all`
  - : Der Inhalt des Elements soll atomar ausgewählt werden: Wenn eine Auswahl einen Teil des Elements enthalten würde, muss die Auswahl das gesamte Element einschließlich aller Nachkommen enthalten. Wenn ein Doppelklick oder Kontextklick in Unterelementen erfolgt, wird der höchste Vorfahre mit diesem Wert ausgewählt.

> [!NOTE]
> Das Modul der [grundlegenden CSS-Benutzeroberfläche](/de/docs/Web/CSS/CSS_basic_user_interface) definiert einen `contain` Wert für die `user-select` Eigenschaft, um zu ermöglichen, dass die Auswahl innerhalb des Elements beginnt und durch die Grenzen dieses Elements eingeschlossen wird, jedoch wird dies in keinem Browser unterstützt.

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

- {{Cssxref("::selection")}} Pseudo-Element
- Das JavaScript [`Selection`](/de/docs/Web/API/Selection) Objekt
