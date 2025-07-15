---
title: :optional
slug: Web/CSS/:optional
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`:optional`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert jedes {{HTMLElement("input")}}, {{HTMLElement("select")}} oder {{HTMLElement("textarea")}} Element, das nicht das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required) Attribut gesetzt hat.

{{InteractiveExample("CSS Demo: :optional", "tabbed-standard")}}

```css interactive-example
label {
  display: block;
  margin-top: 1em;
}

.req {
  color: red;
}

*:optional {
  background-color: palegreen;
}
```

```html interactive-example
<form>
  <label for="name">Name: <span class="req">*</span></label>
  <input id="name" name="name" type="text" required />

  <label for="birth">Date of Birth:</label>
  <input id="birth" name="birth" type="date" />

  <label for="origin"
    >How did you find out about us? <span class="req">*</span></label
  >
  <select id="origin" name="origin" required>
    <option>Google</option>
    <option>Facebook</option>
    <option>Advertisement</option>
  </select>
  <p><span class="req">*</span> - Required field</p>
</form>
```

Diese Pseudoklasse ist nützlich, um Felder zu stylen, die nicht erforderlich sind, um ein Formular abzusenden.

> [!NOTE]
> Die {{cssxref(":required")}} Pseudoklasse wählt _erforderliche_ Formularfelder aus.

## Syntax

```css
:optional {
  /* ... */
}
```

## Barrierefreiheit

Wenn ein [Formular](/de/docs/Web/HTML/Reference/Elements/form) optionale {{htmlelement("input")}}s enthält, sollten erforderliche Eingaben mit dem [`required`](/de/docs/Web/HTML/Reference/Elements/input#required) Attribut gekennzeichnet werden. Dies stellt sicher, dass Personen, die mit Unterstützungstechnologien wie einem Screenreader navigieren, verstehen können, welche Eingaben gültige Inhalte benötigen, um eine erfolgreiche Formularübermittlung zu gewährleisten.

Erforderliche Eingaben sollten auch visuell kenntlich gemacht werden, und zwar mit einer Gestaltung, die nicht allein auf Farbe setzt, um Bedeutung zu vermitteln. In der Regel werden erläuternder Text und/oder ein Symbol verwendet.

- [MDN Verstehen von WCAG, Erklärung der Richtlinie 3.3](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Understandable#guideline_3.3_%e2%80%94_input_assistance_help_users_avoid_and_correct_mistakes)
- [Verstehen des Erfolgskriteriums 3.3.2 | W3C Verstehen von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-cues.html)

## Beispiele

### Das optionale Feld hat einen lila Rand

#### HTML

```html
<form>
  <div class="field">
    <label for="url_input">Enter a URL:</label>
    <input type="url" id="url_input" />
  </div>

  <div class="field">
    <label for="email_input">Enter an email address:</label>
    <input type="email" id="email_input" required />
  </div>
</form>
```

#### CSS

```css
label {
  display: block;
  margin: 1px;
  padding: 1px;
}

.field {
  margin: 1px;
  padding: 1px;
}

input:optional {
  border-color: rebeccapurple;
  border-width: 3px;
}
```

#### Ergebnis

{{EmbedLiveSample('Examples', 600, 120)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Andere Validierungsbezogene Pseudoklassen: {{ cssxref(":required") }}, {{ cssxref(":invalid") }}, {{ cssxref(":valid") }}
- [Formulardatenvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
