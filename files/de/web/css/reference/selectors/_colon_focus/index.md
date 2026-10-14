---
title: CSS-Pseudoklasse `:focus`
short-title: :focus
slug: Web/CSS/Reference/Selectors/:focus
l10n:
  sourceCommit: bf3b0f3217d5d5a6957e9e17f863ece19d939d20
---

Die **`:focus`**-[Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) in [CSS](/de/docs/Web/CSS) steht für ein Element (beispielsweise ein Formulareingabefeld), das den Fokus erhalten hat. Sie wird in der Regel aktiviert, wenn ein Benutzer auf ein Element klickt oder tippt oder es mit der <kbd>Tab</kbd>-Taste auswählt.

{{InteractiveExample("CSS Demo: :focus", "tabbed-shorter")}}

```css interactive-example
label {
  display: block;
  margin-top: 1em;
}

input:focus {
  background-color: lightblue;
}

select:focus {
  background-color: ivory;
}
```

```html interactive-example
<p>Which flavor would you like to order?</p>
<label>Full Name: <input name="firstName" type="text" /></label>
<label
  >Flavor:
  <select name="flavor">
    <option>Cherry</option>
    <option>Green Tea</option>
    <option>Moose Tracks</option>
    <option>Mint Chip</option>
  </select>
</label>
```

> [!NOTE]
> Diese Pseudoklasse gilt nur für das fokussierte Element selbst. Verwenden Sie {{CSSxRef(":focus-within")}}, wenn Sie ein Element auswählen möchten, das ein fokussiertes Element _enthält_.

## Syntax

```css
:focus {
  /* ... */
}
```

## Barrierefreiheit

Stellen Sie sicher, dass der visuelle Fokusindikator für Menschen mit eingeschränktem Sehvermögen erkennbar ist. Davon profitieren auch alle, die einen Bildschirm in einer hell beleuchteten Umgebung verwenden (beispielsweise draußen in der Sonne). [WCAG 2.1 SC 1.4.11: Kontrast von Nicht-Text-Inhalten](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html) verlangt für den visuellen Fokusindikator ein Kontrastverhältnis von mindestens 3:1.

- Barrierefreie visuelle Fokusindikatoren: [Geben Sie Ihrer Website Fokus! Tipps zur Gestaltung nützlicher und gut verwendbarer Fokusindikatoren](https://www.deque.com/blog/give-site-focus-tips-designing-usable-focus-indicators/)

### `:focus { outline: none; }`

Entfernen Sie niemals einfach die Fokusumrandung (den sichtbaren Fokusindikator), ohne sie durch eine Fokusumrandung zu ersetzen, die [WCAG 2.1 SC 1.4.11: Kontrast von Nicht-Text-Inhalten](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html) erfüllt.

- Kurztipp: [Entfernen Sie niemals CSS-Umrandungen](https://www.a11yproject.com/posts/never-remove-css-outlines/)

## Beispiele

### HTML

```html
<div><input class="red-input" value="I'll be red when focused." /></div>
<div><input class="blue-input" value="I'll be blue when focused." /></div>
```

### CSS

```css
.red-input:focus {
  background: yellow;
  color: red;
}

.blue-input:focus {
  background: yellow;
  color: blue;
}
```

### Ergebnis

{{EmbedLiveSample("Examples")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef(":focus-visible")}}
- {{CSSxRef(":focus-within")}}
