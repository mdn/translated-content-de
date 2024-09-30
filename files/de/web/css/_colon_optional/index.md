---
title: ":optional"
slug: Web/CSS/:optional
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}

Die **`:optional`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert jedes {{HTMLElement("input")}}, {{HTMLElement("select")}} oder {{HTMLElement("textarea")}} Element, das nicht das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut gesetzt hat.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-optional.html", "tabbed-standard")}}

Diese Pseudoklasse ist nützlich, um Felder zu stylen, die nicht erforderlich sind, um ein Formular einzureichen.

> [!NOTE]
> Die {{cssxref(":required")}} Pseudoklasse wählt _erforderliche_ Formularfelder aus.

## Syntax

```css
:optional {
  /* ... */
}
```

## Barrierefreiheit

Wenn ein [Formular](/de/docs/Web/HTML/Element/form) optionale {{htmlelement("input")}}s enthält, sollten erforderliche Eingaben mit dem [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut gekennzeichnet werden. Dies stellt sicher, dass Personen, die mit Hilfstechnologien wie einem Bildschirmleser navigieren, verstehen können, welche Eingaben gültigen Inhalt benötigen, um eine erfolgreiche Formularübermittlung sicherzustellen.

Erforderliche Eingaben sollten auch visuell gekennzeichnet werden, wobei eine Darstellungsweise verwendet werden sollte, die sich nicht nur auf Farbe zur Bedeutungsvermittlung verlässt. Typischerweise werden beschreibender Text und/oder ein Symbol verwendet.

- [MDN Verständnis von WCAG, Richtlinie 3.3 Erläuterungen](/de/docs/Web/Accessibility/Understanding_WCAG/Understandable#guideline_3.3_%e2%80%94_input_assistance_help_users_avoid_and_correct_mistakes)
- [Verständnis vom Erfolgskriterium 3.3.2 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-cues.html)

## Beispiele

### Das optionale Feld hat einen violetten Rahmen

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
- [Formulardatenauswertung](/de/docs/Learn/Forms/Form_validation)
