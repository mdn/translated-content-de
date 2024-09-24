---
title: ":optional"
slug: Web/CSS/:optional
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}

Die **`:optional`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert jedes {{HTMLElement("input")}}, {{HTMLElement("select")}}, oder {{HTMLElement("textarea")}} Element, das nicht das [`required`](/de/docs/Web/HTML/Element/input#required) Attribut gesetzt hat.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-optional.html", "tabbed-standard")}}

Diese Pseudoklasse ist nützlich für die Gestaltung von Feldern, die nicht erforderlich sind, um ein Formular abzusenden.

> [!NOTE]
> Die {{cssxref(":required")}} Pseudoklasse wählt _erforderliche_ Formularfelder aus.

## Syntax

```css
:optional {
  /* ... */
}
```

## Barrierefreiheit

Wenn ein [Formular](/de/docs/Web/HTML/Element/form) optionale {{htmlelement("input")}}-Felder enthält, sollten erforderliche Eingaben mit dem [`required`](/de/docs/Web/HTML/Element/input#required) Attribut gekennzeichnet werden. Dies stellt sicher, dass Personen, die mit Unterstützungstechnologien wie einem Bildschirmlesegerät navigieren, verstehen können, welche Eingaben gültige Inhalte benötigen, um eine erfolgreiche Formularübermittlung zu gewährleisten.

Erforderliche Eingaben sollten auch visuell gekennzeichnet werden, mit einer Darstellung, die nicht ausschließlich auf Farbe basiert, um Bedeutung zu vermitteln. Typischerweise werden beschreibender Text und/oder ein Symbol verwendet.

- [MDN Understanding WCAG, Guideline 3.3 Erläuterungen](/de/docs/Web/Accessibility/Understanding_WCAG/Understandable#guideline_3.3_%e2%80%94_input_assistance_help_users_avoid_and_correct_mistakes)
- [Understanding Success Criterion 3.3.2 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-cues.html)

## Beispiele

### Das optionale Feld hat einen lila Rand

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

- Weitere validierungsbezogene Pseudoklassen: {{ cssxref(":required") }}, {{ cssxref(":invalid") }}, {{ cssxref(":valid") }}
- [Formulardatenvalidierung](/de/docs/Learn/Forms/Form_validation)
