---
title: ":optional"
slug: Web/CSS/:optional
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{CSSRef}}

Die **`:optional`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert jedes {{HTMLElement("input")}}, {{HTMLElement("select")}} oder {{HTMLElement("textarea")}} Element, das nicht das Attribut [`required`](/de/docs/Web/HTML/Element/input#required) gesetzt hat.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-optional.html", "tabbed-standard")}}

Diese Pseudoklasse ist hilfreich, um Felder zu gestalten, die nicht erforderlich sind, um ein Formular abzusenden.

> [!NOTE]
> Die {{cssxref(":required")}}-Pseudoklasse wählt _erforderliche_ Formularfelder aus.

## Syntax

```css
:optional {
  /* ... */
}
```

## Barrierefreiheit

Wenn ein [Formular](/de/docs/Web/HTML/Element/form) optionale {{htmlelement("input")}}s enthält, sollten erforderliche Eingabefelder mit dem Attribut [`required`](/de/docs/Web/HTML/Element/input#required) gekennzeichnet werden. Dies stellt sicher, dass Personen, die mit unterstützender Technologie wie einem Screenreader navigieren, verstehen können, welche Eingaben erforderlich sind, um eine erfolgreiche Formularübermittlung zu gewährleisten.

Erforderliche Eingaben sollten auch visuell hervorgehoben werden, dabei jedoch nicht ausschließlich auf Farbe setzen, um Bedeutung zu vermitteln. Typischerweise wird beschreibender Text und/oder ein Symbol verwendet.

- [MDN Verständnis der WCAG, Erklärung zu Richtlinie 3.3](/de/docs/Web/Accessibility/Understanding_WCAG/Understandable#guideline_3.3_%e2%80%94_input_assistance_help_users_avoid_and_correct_mistakes)
- [Verständnis des Erfolgskriteriums 3.3.2 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-cues.html)

## Beispiele

### Das optionale Feld hat einen lila Rahmen

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
- [Formulardaten-Validierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
