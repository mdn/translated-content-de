---
title: ":required"
slug: Web/CSS/:required
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}

Die **`:required`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert jedes {{HTMLElement("input")}}, {{HTMLElement("select")}}, oder {{HTMLElement("textarea")}} Element, das das [`required`](/de/docs/Web/HTML/Element/input#required) Attribut gesetzt hat.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-required.html", "tabbed-standard")}}

Diese Pseudoklasse ist nützlich, um Felder hervorzuheben, die gültige Daten benötigen, bevor ein Formular abgeschickt werden kann.

> [!NOTE]
> Die {{cssxref(":optional")}} Pseudoklasse selektiert _optionale_ Formularfelder.

## Syntax

```css
:required {
  /* ... */
}
```

## Barrierefreiheit

Verpflichtende {{htmlelement("input")}}s sollten das [`required`](/de/docs/Web/HTML/Element/input#required) Attribut haben. Dies stellt sicher, dass Personen, die mit Hilfe von assistiver Technologie wie einem Screenreader navigieren, verstehen können, welche Eingaben gültige Inhalte benötigen, um eine erfolgreiche Einreichung sicherzustellen.

Wenn das Formular auch [optionale](/de/docs/Web/CSS/:optional) Eingaben enthält, sollten erforderliche Eingaben visuell hervorgehoben werden, ohne dass nur Farbe zur Bedeutungsvermittlung genutzt wird. Typischerweise werden erläuternde Texte und/oder ein Symbol verwendet.

- [MDN Verständnis von WCAG, Richtlinie 3.3 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Understandable#guideline_3.3_%e2%80%94_input_assistance_help_users_avoid_and_correct_mistakes)
- [Verständnis von Erfolgskriterium 3.3.2 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-cues.html)

## Beispiele

### Das erforderliche Feld hat einen roten Rahmen

#### HTML

```html
<form>
  <div class="field">
    <label for="url_input">Geben Sie eine URL ein:</label>
    <input type="url" id="url_input" />
  </div>

  <div class="field">
    <label for="email_input">Geben Sie eine E-Mail-Adresse ein:</label>
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
- [Formulardatenvalidierung](/de/docs/Learn/Forms/Form_validation)
