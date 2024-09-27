---
title: ":required"
slug: Web/CSS/:required
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}

Die **`:required`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert jedes {{HTMLElement("input")}}, {{HTMLElement("select")}} oder {{HTMLElement("textarea")}} Element, das das [`required`](/de/docs/Web/HTML/Element/input#required) Attribut gesetzt hat.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-required.html", "tabbed-standard")}}

Diese Pseudoklasse ist nützlich, um Felder hervorzuheben, die gültige Daten enthalten müssen, bevor ein Formular übermittelt werden kann.

> [!NOTE]
> Die {{cssxref(":optional")}} Pseudoklasse wählt _optionale_ Formularfelder aus.

## Syntax

```css
:required {
  /* ... */
}
```

## Barrierefreiheit

Obligatorische {{htmlelement("input")}}s sollten das [`required`](/de/docs/Web/HTML/Element/input#required) Attribut haben. Dies stellt sicher, dass Personen, die assistive Technologien, wie z.B. einen Bildschirmleser, nutzen, verstehen können, welche Eingaben gültige Inhalte benötigen, um eine erfolgreiche Übermittlung zu gewährleisten.

Falls das Formular auch [optionale](/de/docs/Web/CSS/:optional) Eingaben enthält, sollten erforderliche Eingaben visuell gekennzeichnet werden, wobei die Bedeutung nicht nur durch Farbe vermittelt wird. Typischerweise werden beschreibende Texte und/oder ein Symbol verwendet.

- [MDN Verständnis der WCAG, Richtlinie 3.3 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Understandable#guideline_3.3_%e2%80%94_input_assistance_help_users_avoid_and_correct_mistakes)
- [Verständnis des Erfolgskriteriums 3.3.2 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-cues.html)

## Beispiele

### Das erforderliche Feld hat einen roten Rand

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

- Andere mit Validierung zusammenhängende Pseudoklassen: {{ cssxref(":optional") }}, {{ cssxref(":invalid") }}, {{ cssxref(":valid") }}
- [Formulardatenvalidierung](/de/docs/Learn/Forms/Form_validation)
