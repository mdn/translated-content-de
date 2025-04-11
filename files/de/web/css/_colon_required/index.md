---
title: :required
slug: Web/CSS/:required
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{CSSRef}}

Die **`:required`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert jedes {{HTMLElement("input")}}, {{HTMLElement("select")}} oder {{HTMLElement("textarea")}} Element, auf dem das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required) Attribut gesetzt ist.

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

Diese Pseudoklasse ist nützlich, um Felder hervorzuheben, die gültige Daten enthalten müssen, bevor ein Formular abgeschickt werden kann.

> [!NOTE]
> Die {{cssxref(":optional")}} Pseudoklasse wählt _optionale_ Formularfelder aus.

## Syntax

```css
:required {
  /* ... */
}
```

## Barrierefreiheit

Pflicht-{{htmlelement("input")}}s sollten das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required) Attribut haben. Dies gewährleistet, dass Personen, die mit Unterstützungstechnologien wie Bildschirmlesegeräten navigieren, verstehen können, welche Eingaben gültige Inhalte benötigen, um eine erfolgreiche Übermittlung sicherzustellen.

Falls das Formular auch [optionale](/de/docs/Web/CSS/:optional) Eingaben enthält, sollten Pflichtangaben visuell so gekennzeichnet werden, dass nicht nur Farbe genutzt wird, um Bedeutung zu vermitteln. Typischerweise werden beschreibender Text und/oder ein Icon verwendet.

- [MDN Erklärung zu WCAG, Richtlinie 3.3 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Understandable#guideline_3.3_%e2%80%94_input_assistance_help_users_avoid_and_correct_mistakes)
- [Verständnis des Erfolgskriteriums 3.3.2 | W3C Erklärung zu WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-cues.html)

## Beispiele

### Das erforderliche Feld hat eine rote Umrandung

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
