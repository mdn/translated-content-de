---
title: CSS-Pseudoklasse `:default`
short-title: :default
slug: Web/CSS/Reference/Selectors/:default
l10n:
  sourceCommit: bf3b0f3217d5d5a6957e9e17f863ece19d939d20
---

Die **`:default`**-[CSS](/de/docs/Web/CSS)-[Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) wählt Formularelemente aus, die innerhalb einer Gruppe zusammengehöriger Elemente die Standardelemente sind.

{{InteractiveExample("CSS Demo: :default", "tabbed-standard")}}

```css interactive-example
label {
  display: block;
  margin-top: 0.5em;
}

fieldset {
  margin-top: 0.5em;
}

input:default {
  border: none;
  outline: 2px solid deeppink;
}
```

```html interactive-example
<label for="name">Name (required):</label>
<input id="name" name="name" type="text" required />

<label for="birth">Date of birth:</label>
<input id="birth" name="birth" type="date" />

<label for="origin">How did you find out about us? (required)</label>
<select id="origin" name="origin" required>
  <option value="">Choose an option</option>
  <option value="google">Google</option>
  <option value="facebook">Facebook</option>
  <option value="advertisement">Advertisement</option>
</select>

<fieldset>
  <legend>Preferred contact method:</legend>
  <label>
    <input name="contact" type="radio" value="email" checked /> Email
  </label>
  <label><input name="contact" type="radio" value="phone" /> Phone</label>
</fieldset>

<label>
  <input name="newsletter" type="checkbox" checked /> I want to subscribe to a
  personalized newsletter.
</label>
<label>
  <input name="privacy" type="checkbox" required /> I have read and I agree to
  the Privacy Policy (required).
</label>
```

Welche Elemente dieser Selektor auswählt, ist im [HTML-Standard §4.16.3 Pseudoklassen](https://html.spec.whatwg.org/multipage/semantics-other.html#selector-default) definiert. Er kann auf die Elemente {{htmlelement("button")}}, [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox), [`<input type="radio">`](/de/docs/Web/HTML/Reference/Elements/input/radio) und {{htmlelement("option")}} zutreffen:

- Das standardmäßig ausgewählte option-Element ist das erste mit dem Attribut `selected` oder das erste aktivierte option-Element in DOM-Reihenfolge. {{htmlelement("select")}}-Elemente mit `multiple` können mehr als eine `selected`-Option haben; daher trifft `:default` auf alle diese Optionen zu.
- Auf `<input type="checkbox">` und `<input type="radio">` trifft `:default` zu, wenn sie das Attribut `checked` haben.
- Auf {{htmlelement("button")}} trifft `:default` zu, wenn es die [Standardschaltfläche zum Absenden](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#implicit-submission) eines {{htmlelement("form")}} ist: das erste `<button>` in DOM-Reihenfolge, das zum Formular gehört. Dies gilt auch für {{htmlelement("input")}}-Typen, die Formulare absenden, etwa `image` oder `submit`.

## Syntax

```css
:default {
  /* ... */
}
```

## Beispiele

### HTML

```html
<fieldset>
  <legend>Favorite season</legend>

  <input type="radio" name="season" id="spring" value="spring" />
  <label for="spring">Spring</label>

  <input type="radio" name="season" id="summer" value="summer" checked />
  <label for="summer">Summer</label>

  <input type="radio" name="season" id="fall" value="fall" />
  <label for="fall">Fall</label>

  <input type="radio" name="season" id="winter" value="winter" />
  <label for="winter">Winter</label>
</fieldset>
```

### CSS

```css
input:default {
  box-shadow: 0 0 2px 1px coral;
}

input:default + label {
  color: coral;
}
```

### Ergebnis

{{EmbedLiveSample("Examples")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Webformulare – Arbeiten mit Benutzerdaten](/de/docs/Learn_web_development/Extensions/Forms)
- [Webformulare gestalten](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- Verwandte HTML-Elemente: {{htmlelement("button")}}, [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox), [`<input type="radio">`](/de/docs/Web/HTML/Reference/Elements/input/radio) und {{htmlelement("option")}}
