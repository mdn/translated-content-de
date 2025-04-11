---
title: :valid
slug: Web/CSS/:valid
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{CSSRef}}

Die **`:valid`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert jedes {{HTMLElement("input")}} oder ein anderes {{HTMLElement("form")}}-Element, dessen Inhalt erfolgreich [validiert](/de/docs/Web/HTML/Guides/Constraint_validation) wird. Dies ermöglicht es, dass gültige Felder leicht ein Aussehen annehmen, das dem Benutzer hilft, zu bestätigen, dass ihre Daten richtig formatiert sind.

{{InteractiveExample("CSS Demo: :valid", "tabbed-shorter")}}

```css interactive-example
label {
  display: block;
  margin-top: 1em;
}

input:valid {
  background-color: ivory;
  border: none;
  outline: 2px solid deepskyblue;
  border-radius: 5px;
  accent-color: gold;
}
```

```html interactive-example
<form>
  <label for="email">Email Address:</label>
  <input id="email" name="email" type="email" value="na@me@example.com" />

  <label for="secret">Secret Code: (lower case letters)</label>
  <input id="secret" name="secret" type="text" value="test" pattern="[a-z]+" />

  <label for="age">Your age: (18+)</label>
  <input id="age" name="age" type="number" value="5" min="18" />

  <label
    ><input name="tos" type="checkbox" required checked /> - Do you agree to
    ToS?</label
  >
</form>
```

Diese Pseudoklasse ist nützlich, um dem Benutzer korrekte Felder hervorzuheben.

## Syntax

```css
:valid {
  /* ... */
}
```

## Barrierefreiheit

Die Farbe Grün wird häufig verwendet, um gültige Eingaben anzuzeigen. Menschen mit bestimmten Arten von Farbenblindheit werden den Zustand der Eingabe nicht bestimmen können, es sei denn, es gibt einen zusätzlichen Indikator, der nicht auf Farbe angewiesen ist, um Bedeutung zu vermitteln. Typischerweise werden beschreibender Text und/oder ein Symbol verwendet.

- [MDN Verständnis der WCAG, Leitlinie 1.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgskriteriums 1.4.1 | W3C Verständnis der WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-without-color.html)

## Beispiele

### Anzeige gültiger und ungültiger Formularfelder

In diesem Beispiel verwenden wir Strukturen wie diese, die zusätzliche `<span>`-Elemente enthalten, auf denen wir Inhalte generieren; wir nutzen diese, um Indikatoren für gültige/ungültige Daten bereitzustellen:

```html
<div>
  <label for="fname">First name *: </label>
  <input id="fname" name="fname" type="text" required />
  <span></span>
</div>
```

Um diese Indikatoren bereitzustellen, verwenden wir das folgende CSS:

```css
input + span {
  position: relative;
}

input + span::before {
  position: absolute;
  right: -20px;
  top: 5px;
}

input:invalid {
  border: 2px solid red;
}

input:invalid + span::before {
  content: "✖";
  color: red;
}

input:valid + span::before {
  content: "✓";
  color: green;
}
```

Wir setzen die `<span>`-Elemente auf `position: relative`, damit wir den generierten Inhalt relativ zu Ihnen positionieren können. Dann positionieren wir je nach Gültigkeit der Formulardaten verschieden generierten Inhalt absolut – ein grünes Häkchen oder ein rotes Kreuz. Um die Dringlichkeit ungültiger Daten zu erhöhen, haben wir den Eingaben außerdem einen dicken roten Rand gegeben, wenn sie ungültig sind.

> [!NOTE]
> Wir haben `::before` verwendet, um diese Labels hinzuzufügen, da `::after` bereits für die "erforderlich"-Labels genutzt wurde.

Sie können es unten ausprobieren:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/valid-invalid.html", '100%', 430)}}

Beachten Sie, wie die erforderlichen Texteingaben leer ungültig sind, aber gültig werden, wenn sie ausgefüllt sind. Die E-Mail-Eingabe dagegen ist leer gültig, da sie nicht erforderlich ist, wird jedoch ungültig, wenn sie etwas enthält, das keine richtige E-Mail-Adresse ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Andere validierungsbezogene Pseudoklassen: {{ cssxref(":required") }}, {{ cssxref(":optional") }}, {{ cssxref(":invalid") }}
- [Formulardatenvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- Zugriff auf den [Gültigkeitsstatus](/de/docs/Web/API/ValidityState) mit JavaScript
