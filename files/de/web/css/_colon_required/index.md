---
title: ":required"
slug: Web/CSS/:required
l10n:
  sourceCommit: 33a12980eb49cc795a41f15ec7a0181270ad3048
---

{{CSSRef}}

Die **`:required`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert jedes {{HTMLElement("input")}}, {{HTMLElement("select")}} oder {{HTMLElement("textarea")}} Element, das das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut gesetzt hat.

{{InteractiveExample("CSS Demo: :required", "tabbed-standard")}}

```css interactive-example
label {
  display: block;
  margin-top: 1em;
}

.req {
  color: red;
}

*:required {
  background-color: gold;
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

Diese Pseudoklasse ist nützlich, um Felder hervorzuheben, die gültige Daten enthalten müssen, bevor ein Formular eingereicht werden kann.

> [!NOTE]
> Die {{cssxref(":optional")}} Pseudoklasse wählt _optionale_ Formularfelder aus.

## Syntax

```css
:required {
  /* ... */
}
```

## Barrierefreiheit

Erforderliche {{htmlelement("input")}}s sollten das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut haben. Dies stellt sicher, dass Menschen, die mit unterstützender Technologie wie einem Bildschirmleser navigieren, verstehen können, welche Eingaben gültige Inhalte benötigen, um eine erfolgreiche Übermittlung zu gewährleisten.

Wenn das Formular auch [optionale](/de/docs/Web/CSS/:optional) Eingaben enthält, sollten erforderliche Eingaben visuell durch eine Behandlung angezeigt werden, die nicht ausschließlich auf Farbe beruht, um Bedeutung zu vermitteln. Typischerweise werden beschreibender Text und/oder ein Symbol verwendet.

- [MDN Verständnis der WCAG, Erläuterungen zu Richtlinie 3.3](/de/docs/Web/Accessibility/Understanding_WCAG/Understandable#guideline_3.3_%e2%80%94_input_assistance_help_users_avoid_and_correct_mistakes)
- [Verständnis des Erfolgskriteriums 3.3.2 | W3C Verständnis der WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-cues.html)

## Beispiele

### Das erforderliche Feld hat einen roten Rahmen

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

input:required {
  border-color: #800000;
  border-width: 3px;
}

input:required:invalid {
  border-color: #c00000;
}
```

#### Ergebnis

{{EmbedLiveSample('Examples', 600, 120)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Andere validierungsbezogene Pseudoklassen: {{ cssxref(":optional") }}, {{ cssxref(":invalid") }}, {{ cssxref(":valid") }}
- [Formulardatenvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
