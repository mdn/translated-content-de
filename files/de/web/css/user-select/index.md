---
title: user-select
slug: Web/CSS/user-select
l10n:
  sourceCommit: 6732005dce0503eebc227e4fb3cc1c72f21d9d81
---

{{CSSRef}}

Die **`user-select`** [CSS](/de/docs/Web/CSS) Eigenschaft steuert, ob der Benutzer Text auswählen kann. Dies hat keine Auswirkungen auf Inhalte, die als Teil der Benutzeroberfläche eines Browsers (seines [Chrome](/de/docs/Glossary/Chrome)) geladen werden, außer in Textfeldern.

{{EmbedInteractiveExample("pages/css/user-select.html")}}

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

> **Note:** `user-select` ist keine vererbte Eigenschaft, obwohl der initiale `auto`-Wert sie meistens so verhalten lässt, als wäre sie vererbt. WebKit/Chromium-basierte Browser _implementieren_ die Eigenschaft jedoch als vererbt, was das in der Spezifikation beschriebene Verhalten verletzt und zu einigen Problemen führen wird. Bis jetzt hat sich Chromium entschieden, [die Probleme zu beheben](https://chromium.googlesource.com/chromium/src/+/b01af0b296ecb855aac95c4ed335d188e6eac2de), um das endgültige Verhalten den Spezifikationen anzupassen.

### Werte

- `none`
  - : Der Text des Elements und seiner Unterelemente ist nicht auswählbar. Beachten Sie, dass das [`Selection`](/de/docs/Web/API/Selection) Objekt diese Elemente enthalten kann.
- `auto`

  - : Der verwendete Wert von `auto` wird wie folgt bestimmt:

    - Bei den `::before` und `::after` Pseudo-Elementen ist der verwendete Wert `none`.
    - Wenn der verwendete Wert von `user-select` des übergeordneten Elements dieses Elements `none` ist, ist der verwendete Wert `none`.
    - Andernfalls, wenn der verwendete Wert von `user-select` des übergeordneten Elements dieses Elements `all` ist, ist der verwendete Wert `all`.
    - Andernfalls ist der verwendete Wert `text`.

- `text`
  - : Der Text kann vom Benutzer ausgewählt werden.
- `all`
  - : Der Inhalt des Elements sollte atomar ausgewählt werden: Wenn eine Auswahl einen Teil des Elements enthalten würde, muss die Auswahl das gesamte Element einschließlich aller seiner Nachkommen enthalten. Wenn in Unterelementen ein Doppelklick oder ein Kontextklick auftrat, wird der höchste Vorfahre mit diesem Wert ausgewählt.

> [!NOTE]
> Das [CSS basic user interface](/de/docs/Web/CSS/CSS_basic_user_interface) Modul definiert einen `contain`-Wert für die `user-select` Eigenschaft, um die Auswahl zu ermöglichen, innerhalb des Elements zu beginnen, das durch die Grenzen dieses Elements begrenzt ist, jedoch wird dies in keinem Browser unterstützt.

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
