---
title: ":default"
slug: Web/CSS/:default
l10n:
  sourceCommit: 33a12980eb49cc795a41f15ec7a0181270ad3048
---

{{CSSRef}}

Die **`:default`** [CSS](/de/docs/Web/CSS) [Pseudo-Klasse](/de/docs/Web/CSS/Pseudo-classes) wählt Formularelemente aus, die innerhalb einer Gruppe von verwandten Elementen als Standard festgelegt sind.

{{InteractiveExample("CSS Demo: :default", "tabbed-shorter")}}

```css interactive-example
label,
input[type="submit"] {
  display: block;
  margin-top: 1em;
}

input:default {
  border: none;
  outline: 2px solid deeppink;
}
```

```html interactive-example
<form>
  <p>How did you find out about us?</p>
  <label
    ><input name="origin" type="radio" value="google" checked /> Google</label
  >
  <label><input name="origin" type="radio" value="facebook" /> Facebook</label>
  <p>Please agree to our terms:</p>

  <label
    ><input name="newsletter" type="checkbox" checked /> I want to subscribe to
    a personalized newsletter.</label
  >

  <label
    ><input name="privacy" type="checkbox" /> I have read and I agree to the
    Privacy Policy.</label
  >

  <input type="submit" value="Submit form" />
</form>
```

Was dieser Selektor auswählt, ist im [HTML Standard §4.16.3 Pseudo-classes](https://html.spec.whatwg.org/multipage/semantics-other.html#selector-default) definiert — er kann die {{htmlelement("button")}}, [`<input type="checkbox">`](/de/docs/Web/HTML/Element/input/checkbox), [`<input type="radio">`](/de/docs/Web/HTML/Element/input/radio) und {{htmlelement("option")}} Elemente betreffen:

- Ein Standard-Optionselement ist das erste mit dem `selected`-Attribut oder die erste aktivierte Option in DOM-Reihenfolge. `multiple` {{htmlelement("select")}}s können mehr als eine `selected` Option haben, daher werden alle `:default` entsprechen.
- `<input type="checkbox">` und `<input type="radio">` entsprechen, wenn sie das `checked`-Attribut haben.
- {{htmlelement("button")}} entspricht, wenn es der [Standard-Submit-Button](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#implicit-submission) eines {{htmlelement("form")}} ist: der erste `<button>` in DOM-Reihenfolge, der zum Formular gehört. Dies gilt auch für {{htmlelement("input")}}-Typen, die Formulare abschicken, wie `image` oder `submit`.

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

- [Webformulare — Arbeiten mit Benutzerdaten](/de/docs/Learn_web_development/Extensions/Forms)
- [Styling von Webformularen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- Verwandte HTML-Elemente: {{htmlelement("button")}}, [`<input type="checkbox">`](/de/docs/Web/HTML/Element/input/checkbox), [`<input type="radio">`](/de/docs/Web/HTML/Element/input/radio) und {{htmlelement("option")}}
