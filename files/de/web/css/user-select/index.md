---
title: user-select
slug: Web/CSS/user-select
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{CSSRef}}

Die **`user-select`** [CSS](/de/docs/Web/CSS) Eigenschaft steuert, ob der Benutzer Text auswählen kann. Dies hat keinen Effekt auf Inhalte, die als Teil der Benutzeroberfläche eines Browsers geladen werden (sein {{Glossary("Chrome", "chrome")}}), außer in Textfeldern.

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

> [!NOTE] > `user-select` ist keine vererbte Eigenschaft, obwohl der anfängliche `auto`-Wert dazu führt, dass sie sich meistens wie eine vererbte Eigenschaft verhält. WebKit/Chromium-basierte Browser implementieren die Eigenschaft _doch_ als vererbte Eigenschaft, was gegen das im Standard beschriebene Verhalten verstößt, und dies wird einige Probleme mit sich bringen. Bis jetzt hat Chromium sich entschieden, [die Probleme zu beheben](https://chromium.googlesource.com/chromium/src/+/b01af0b296ecb855aac95c4ed335d188e6eac2de), um das endgültige Verhalten den Spezifikationen anzupassen.

### Werte

- `none`
  - : Der Text des Elements und seiner Unterelemente ist nicht auswählbar. Beachten Sie, dass das [`Selection`](/de/docs/Web/API/Selection) Objekt diese Elemente enthalten kann.
- `auto`

  - : Der verwendete Wert von `auto` wird wie folgt bestimmt:
    - Auf den `::before` und `::after` Pseudoelementen ist der verwendete Wert `none`
    - Wenn der verwendete Wert von `user-select` auf dem übergeordneten Element `none` ist, ist der verwendete Wert `none`
    - Andernfalls, wenn der verwendete Wert von `user-select` auf dem übergeordneten Element `all` ist, ist der verwendete Wert `all`
    - Andernfalls ist der verwendete Wert `text`

- `text`
  - : Der Text kann vom Benutzer ausgewählt werden.
- `all`
  - : Der Inhalt des Elements soll atomar ausgewählt werden: Wenn eine Auswahl einen Teil des Elements enthalten würde, muss die Auswahl das gesamte Element einschließlich aller Nachfahren enthalten. Wenn ein Doppelklick oder Kontextklick in Unterelementen auftritt, wird der höchste Vorfahre mit diesem Wert ausgewählt.

> [!NOTE]
> Das Modul [CSS basic user interface](/de/docs/Web/CSS/CSS_basic_user_interface) definiert einen `contain` Wert für die `user-select` Eigenschaft, um zu ermöglichen, dass die Auswahl innerhalb des Elements beginnt und durch die Grenzen dieses Elements eingeschlossen wird, jedoch wird dies in keinem Browser unterstützt.

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
