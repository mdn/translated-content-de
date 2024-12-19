---
title: ":optional"
slug: Web/CSS/:optional
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{CSSRef}}

Die **`:optional`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert jedes {{HTMLElement("input")}}, {{HTMLElement("select")}} oder {{HTMLElement("textarea")}}-Element, das das Attribut [`required`](/de/docs/Web/HTML/Element/input#required) nicht gesetzt hat.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-optional.html", "tabbed-standard")}}

Diese Pseudoklasse ist nützlich für die Gestaltung von Feldern, die nicht erforderlich sind, um ein Formular einzureichen.

> [!NOTE]
> Die {{cssxref(":required")}} Pseudoklasse wählt _erforderliche_ Formularfelder aus.

## Syntax

```css
:optional {
  /* ... */
}
```

## Barrierefreiheit

Falls ein [Formular](/de/docs/Web/HTML/Element/form) optionale {{htmlelement("input")}}-Felder enthält, sollten erforderliche Eingaben mit dem Attribut [`required`](/de/docs/Web/HTML/Element/input#required) gekennzeichnet werden. Dies stellt sicher, dass Personen, die mit Hilfe von unterstützender Technologie wie einem Screenreader navigieren, verstehen können, welche Eingaben gültigen Inhalt benötigen, um eine erfolgreiche Formulareinreichung zu gewährleisten.

Erforderliche Eingaben sollten auch visuell angezeigt werden, wobei eine Darstellung verwendet wird, die nicht ausschließlich auf Farbe angewiesen ist, um Bedeutung zu vermitteln. Typischerweise werden beschreibender Text und/oder ein Symbol verwendet.

- [MDN Verständnis von WCAG, Leitlinie 3.3 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Understandable#guideline_3.3_%e2%80%94_input_assistance_help_users_avoid_and_correct_mistakes)
- [Verständnis des Erfolgskriteriums 3.3.2 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-cues.html)

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

- Andere validierungsbezogene Pseudoklassen: {{ cssxref(":required") }}, {{ cssxref(":invalid") }}, {{ cssxref(":valid") }}
- [Formulardatenvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
