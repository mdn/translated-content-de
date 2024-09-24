---
title: user-select
slug: Web/CSS/user-select
l10n:
  sourceCommit: 6732005dce0503eebc227e4fb3cc1c72f21d9d81
---

{{CSSRef}}

Die **`user-select`** [CSS](/de/docs/Web/CSS)-Eigenschaft steuert, ob der Benutzer Text auswählen kann. Dies hat keine Auswirkungen auf Inhalte, die als Teil der Benutzeroberfläche eines Browsers geladen werden (seines {{Glossary("Chrome", "chrome")}}), außer in Textfeldern.

{{EmbedInteractiveExample("pages/css/user-select.html")}}

## Syntax

```css
/* Schlüsselwortwerte */
user-select: none;
user-select: auto;
user-select: text;
user-select: all;

/* Globale Werte */
user-select: inherit;
user-select: initial;
user-select: revert;
user-select: revert-layer;
user-select: unset;
```

> **Hinweis:** `user-select` ist keine vererbte Eigenschaft, obwohl der Anfangswert `auto` dazu führt, dass sie sich meistens so verhält, als wäre sie vererbt. WebKit/Chromium-basierte Browser implementieren die Eigenschaft als vererbt, was das im Standard beschriebene Verhalten verletzt, was einige Probleme mit sich bringen wird. Bis jetzt hat Chromium beschlossen, [die Probleme zu beheben](https://chromium.googlesource.com/chromium/src/+/b01af0b296ecb855aac95c4ed335d188e6eac2de), um das endgültige Verhalten den Spezifikationen entsprechend zu gestalten.

### Werte

- `none`
  - : Der Text des Elements und seiner Unterelemente ist nicht auswählbar. Beachten Sie, dass das {{domxref("Selection")}}-Objekt diese Elemente enthalten kann.
- `auto`

  - : Der verwendete Wert von `auto` wird wie folgt bestimmt:

    - Bei den Pseudo-Elementen `::before` und `::after` ist der verwendete Wert `none`.
    - Wenn der verwendete Wert von `user-select` beim übergeordneten Element `none` ist, ist der verwendete Wert `none`.
    - Andernfalls, wenn der verwendete Wert von `user-select` beim übergeordneten Element `all` ist, ist der verwendete Wert `all`.
    - Andernfalls ist der verwendete Wert `text`.

- `text`
  - : Der Text kann vom Benutzer ausgewählt werden.
- `all`
  - : Der Inhalt des Elements soll atomar ausgewählt werden: Wenn eine Auswahl einen Teil des Elements enthalten würde, muss die Auswahl das gesamte Element einschließlich aller seiner Nachkommen umfassen. Wenn ein Doppelklick oder Kontextklick in Unterelementen erfolgt, wird der höchste Vorfahre mit diesem Wert ausgewählt.

> [!NOTE]
> Das [CSS basic user interface](/de/docs/Web/CSS/CSS_basic_user_interface)-Modul definiert einen `contain`-Wert für die `user-select`-Eigenschaft, um die Auswahl innerhalb des Elements zu starten und durch die Grenzen dieses Elements eingeschlossen zu werden. Dies wird jedoch in keinem Browser unterstützt.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### HTML

```html
<p>Sie sollten diesen Text auswählen können.</p>
<p class="unselectable">Hey, Sie können diesen Text nicht auswählen!</p>
<p class="all">Einmal klicken wird diesen gesamten Text auswählen.</p>
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
- Das JavaScript-Objekt {{domxref("Selection")}}
