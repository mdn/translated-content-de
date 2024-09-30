---
title: ":required"
slug: Web/CSS/:required
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}

Die **`:required`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert jedes {{HTMLElement("input")}}, {{HTMLElement("select")}} oder {{HTMLElement("textarea")}} Element, das das [`required`](/de/docs/Web/HTML/Element/input#required) Attribut gesetzt hat.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-required.html", "tabbed-standard")}}

Diese Pseudoklasse ist nützlich, um Felder hervorzuheben, die gültige Daten enthalten müssen, bevor ein Formular gesendet werden kann.

> [!NOTE]
> Die {{cssxref(":optional")}} Pseudoklasse wählt _optionale_ Formularfelder aus.

## Syntax

```css
:required {
  /* ... */
}
```

## Barrierefreiheit

Pflicht-{{htmlelement("input")}}s sollten das [`required`](/de/docs/Web/HTML/Element/input#required) Attribut haben. Dies stellt sicher, dass Personen, die mit Hilfe von unterstützenden Technologien wie einem Screenreader navigieren, verstehen können, welche Eingaben gültige Inhalte benötigen, um eine erfolgreiche Übermittlung sicherzustellen.

Wenn das Formular auch [optionale](/de/docs/Web/CSS/:optional) Eingaben enthält, sollten Pflichtfelder visuell mit einer Gestaltung angezeigt werden, die nicht ausschließlich auf Farbe setzt, um Bedeutung zu vermitteln. Typischerweise werden beschreibender Text und/oder ein Symbol verwendet.

- [MDN Verständnis für WCAG, Leitlinie 3.3 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Understandable#guideline_3.3_%e2%80%94_input_assistance_help_users_avoid_and_correct_mistakes)
- [Verständnis des Erfolgskriteriums 3.3.2 | W3C Verständnis für WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-cues.html)

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
- [Formular-Datenvalidierung](/de/docs/Learn/Forms/Form_validation)
