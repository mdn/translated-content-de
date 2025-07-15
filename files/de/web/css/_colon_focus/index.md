---
title: :focus
slug: Web/CSS/:focus
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`:focus`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert ein Element (wie z.B. ein Formulareingabefeld), das den Fokus erhalten hat. Sie wird in der Regel ausgelöst, wenn der Benutzer auf ein Element klickt oder tippt oder es mit der <kbd>Tab</kbd>-Taste der Tastatur auswählt.

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
<form>
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
</form>
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

Stellen Sie sicher, dass der visuelle Fokusindikator für Menschen mit eingeschränktem Sehvermögen sichtbar ist. Dies kommt auch Personen zugute, die einen Bildschirm in einem hell beleuchteten Raum verwenden (wie draußen in der Sonne). [WCAG 2.1 SC 1.4.11 Kontrast ohne Text](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html) erfordert, dass der visuelle Fokusindikator mindestens 3 zu 1 beträgt.

- Zugängliche visuelle Fokusindikatoren: [Geben Sie Ihrer Website etwas Fokus! Tipps zum Entwerfen nützlicher und benutzerfreundlicher Fokusindikatoren](https://www.deque.com/blog/give-site-focus-tips-designing-usable-focus-indicators/)

### `:focus { outline: none; }`

Entfernen Sie niemals nur den Fokusumriss (sichtbarer Fokusindikator), ohne ihn durch einen Fokusumriss zu ersetzen, der den [WCAG 2.1 SC 1.4.11 Kontrast ohne Text](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html) erfüllt.

- Schnelltipps: [Niemals CSS-Umrisse entfernen](https://www.a11yproject.com/posts/never-remove-css-outlines/)

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
