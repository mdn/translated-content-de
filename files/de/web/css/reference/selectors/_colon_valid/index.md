---
title: :valid
slug: Web/CSS/Reference/Selectors/:valid
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

Die **`:valid`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) repräsentiert jedes {{HTMLElement("input")}} oder ein anderes {{HTMLElement("form")}}-Element, dessen Inhalt erfolgreich [validiert](/de/docs/Web/HTML/Guides/Constraint_validation) wird. Dies ermöglicht es, gültigen Feldern ein Aussehen zu verleihen, das dem Benutzer hilft zu bestätigen, dass seine Daten korrekt formatiert sind.

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

Diese Pseudoklasse ist nützlich, um für den Benutzer korrekte Felder hervorzuheben.

## Syntax

```css
:valid {
  /* ... */
}
```

## Barrierefreiheit

Grün wird häufig verwendet, um gültige Eingaben anzuzeigen. Menschen mit bestimmten Arten von Farbenblindheit können den Status der Eingabe nicht erkennen, es sei denn, er wird durch einen zusätzlichen Indikator begleitet, der nicht auf Farbe angewiesen ist, um Bedeutung zu vermitteln. Typischerweise werden beschreibender Text und/oder ein Icon verwendet.

- [MDN Verständnis von WCAG, Erläuterungen zur Richtlinie 1.4](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis der Erfolgskriterien 1.4.1 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-without-color.html)

## Beispiele

### Anzeige gültiger und ungültiger Formularfelder

In diesem Beispiel verwenden wir Strukturen wie diese, die zusätzliche `<span>`s enthalten, um Inhalt zu generieren; wir verwenden diese, um Indikatoren für gültige/ungültige Daten bereitzustellen:

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

Wir setzen die `<span>`s auf `position: relative`, damit wir den generierten Inhalt relativ zu ihnen positionieren können. Dann positionieren wir verschiedenen generierten Inhalt absolut, abhängig davon, ob die Daten des Formulars gültig oder ungültig sind — ein grüner Haken oder ein rotes Kreuz. Um der ungültigen Daten etwas mehr Dringlichkeit zu verleihen, haben wir den Eingaben auch einen dicken roten Rand gegeben, wenn sie ungültig sind.

> [!NOTE]
> Wir haben `::before` verwendet, um diese Labels hinzuzufügen, da wir bereits `::after` für die "erforderlich"-Labels verwendet haben.

Sie können es unten ausprobieren:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/valid-invalid.html", '100%', 430)}}

Beachten Sie, wie die erforderlichen Texteingaben ungültig sind, wenn sie leer sind, aber gültig, wenn sie ausgefüllt sind. Die E-Mail-Eingabe hingegen ist gültig, wenn sie leer ist, da sie nicht erforderlich ist, aber ungültig, wenn sie etwas enthält, das keine korrekte E-Mail-Adresse ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Andere validierungsbezogene Pseudoklassen: {{ cssxref(":required") }}, {{ cssxref(":optional") }}, {{ cssxref(":invalid") }}
- [Formulardatenvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- Zugriff auf den [ValidityState](/de/docs/Web/API/ValidityState) von JavaScript aus
