---
title: :required
slug: Web/CSS/:required
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{CSSRef}}

Die **`:required`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert jedes {{HTMLElement("input")}}, {{HTMLElement("select")}} oder {{HTMLElement("textarea")}}-Element, das das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut gesetzt hat.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-required.html", "tabbed-standard")}}

Diese Pseudoklasse ist nützlich, um Felder hervorzuheben, die gültige Daten enthalten müssen, bevor ein Formular gesendet werden kann.

> [!NOTE]
> Die {{cssxref(":optional")}}-Pseudoklasse wählt _optionale_ Formularfelder aus.

## Syntax

```css
:required {
  /* ... */
}
```

## Barrierefreiheit

Pflicht-Felder ({{htmlelement("input")}}s) sollten das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut angewendet haben. Dies stellt sicher, dass Personen, die sich mit unterstützender Technologie wie einem Screenreader fortbewegen, erkennen können, welche Felder valide Inhalte benötigen, um eine erfolgreiche Übermittlung zu gewährleisten.

Wenn das Formular auch [optionale](/de/docs/Web/CSS/:optional) Eingaben enthält, sollten Pflichtfelder visuell gekennzeichnet werden, ohne allein auf Farbe zur Bedeutungsvermittlung zu vertrauen. Typischerweise werden beschreibender Text und/oder ein Symbol verwendet.

- [MDN Erklärung zu WCAG, Richtlinie 3.3](/de/docs/Web/Accessibility/Understanding_WCAG/Understandable#guideline_3.3_%e2%80%94_input_assistance_help_users_avoid_and_correct_mistakes)
- [Erklärung des Erfolgs-Kriteriums 3.3.2 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-cues.html)

## Beispiele

### Das Pflichtfeld hat einen roten Rahmen

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
- [Formular-Datenvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
