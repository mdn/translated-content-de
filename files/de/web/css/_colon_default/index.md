---
title: ":default"
slug: Web/CSS/:default
l10n:
  sourceCommit: 5fea7c9593f5e4b4ef13ec65064acf1eabf01e4e
---

{{CSSRef}}

Die **`:default`** [CSS](/de/docs/Web/CSS)-[Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) wählt Formularelemente aus, die in einer Gruppe verwandter Elemente die Standardeinstellung sind.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-default.html", "tabbed-shorter")}}

Welche Elemente dieser Selektor auswählt, ist im [HTML-Standard §4.16.3 Pseudoklassen](https://html.spec.whatwg.org/multipage/semantics-other.html#selector-default) definiert — er kann die {{htmlelement("button")}}, [`<input type="checkbox">`](/de/docs/Web/HTML/Element/input/checkbox), [`<input type="radio">`](/de/docs/Web/HTML/Element/input/radio) und {{htmlelement("option")}} Elemente umfassen:

- Ein Standard-`option`-Element ist das erste mit dem Attribut `selected` oder die erste aktivierte Option in der DOM-Reihenfolge. `multiple` {{htmlelement("select")}}s können mehr als eine `selected` Option haben, sodass alle mit `:default` übereinstimmen.
- `<input type="checkbox">` und `<input type="radio">` stimmen überein, wenn sie das Attribut `checked` haben.
- {{htmlelement("button")}} stimmt überein, wenn es der [Standard-Übermittlungsknopf](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#implicit-submission) eines {{htmlelement("form")}} ist: der erste `<button>` in DOM-Reihenfolge, der zum Formular gehört. Dies gilt auch für {{htmlelement("input")}}-Typen, die Formulare übermitteln, wie `image` oder `submit`.

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

- [Webformulare — Arbeiten mit Benutzerdaten](/de/docs/Learn/Forms)
- [Webformulare stylen](/de/docs/Learn/Forms/Styling_web_forms)
- Verwandte HTML-Elemente: {{htmlelement("button")}}, [`<input type="checkbox">`](/de/docs/Web/HTML/Element/input/checkbox), [`<input type="radio">`](/de/docs/Web/HTML/Element/input/radio), und {{htmlelement("option")}}
