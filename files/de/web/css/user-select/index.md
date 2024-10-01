---
title: user-select
slug: Web/CSS/user-select
l10n:
  sourceCommit: 6732005dce0503eebc227e4fb3cc1c72f21d9d81
---

{{CSSRef}}

Die **`user-select`** [CSS](/de/docs/Web/CSS)-Eigenschaft steuert, ob der Benutzer Text auswählen kann. Dies hat keine Auswirkung auf Inhalte, die als Teil der Benutzeroberfläche eines Browsers geladen werden (sein {{Glossary("Chrome", "Chrome")}}), außer in Textfeldern.

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

> **Note:** `user-select` ist keine vererbte Eigenschaft, obwohl der anfängliche `auto`-Wert sie meistens wie eine geerbte Eigenschaft verhalten lässt. WebKit/Chromium-basierte Browser implementieren die Eigenschaft _als_ vererbt, was das im Standard beschriebene Verhalten verletzt und zu einigen Problemen führen wird. Bis jetzt hat Chromium beschlossen, [die Probleme zu beheben](https://chromium.googlesource.com/chromium/src/+/b01af0b296ecb855aac95c4ed335d188e6eac2de), um das endgültige Verhalten an die Spezifikationen anzupassen.

### Werte

- `none`
  - : Der Text des Elements und seiner Unterelemente ist nicht auswählbar. Beachten Sie, dass das [`Selection`](/de/docs/Web/API/Selection)-Objekt diese Elemente enthalten kann.
- `auto`

  - : Der verwendete Wert von `auto` wird wie folgt bestimmt:

    - Auf den `::before`- und `::after`-Pseudoelementen ist der verwendete Wert `none`
    - Wenn der verwendete Wert von `user-select` des übergeordneten Elements `none` ist, ist der verwendete Wert `none`
    - Andernfalls, wenn der verwendete Wert von `user-select` des übergeordneten Elements `all` ist, ist der verwendete Wert `all`
    - Andernfalls ist der verwendete Wert `text`

- `text`
  - : Der Text kann vom Benutzer ausgewählt werden.
- `all`
  - : Der Inhalt des Elements soll atomar ausgewählt werden: Wenn eine Auswahl einen Teil des Elements enthalten würde, muss die Auswahl das gesamte Element einschließlich aller Nachkommen enthalten. Wenn ein Doppelklick oder Kontextklick in Unterelementen auftritt, wird der höchste Vorfahre mit diesem Wert ausgewählt.

> [!NOTE]
> Das Modul [CSS basic user interface](/de/docs/Web/CSS/CSS_basic_user_interface) definiert einen `contain`-Wert für die `user-select`-Eigenschaft, um die Auswahl innerhalb des Elements zu starten und auf die Grenzen dieses Elements zu beschränken. Dies wird jedoch in keinem Browser unterstützt.

## Formal Definition

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
- Das JavaScript [`Selection`](/de/docs/Web/API/Selection)-Objekt
