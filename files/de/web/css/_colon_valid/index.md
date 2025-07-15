---
title: :valid
slug: Web/CSS/:valid
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`:valid`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert jedes {{HTMLElement("input")}} oder andere {{HTMLElement("form")}}-Element, dessen Inhalt erfolgreich [validiert](/de/docs/Web/HTML/Guides/Constraint_validation) wird. Dies ermöglicht es, gültige Felder leicht so zu gestalten, dass sie dem Benutzer helfen, zu bestätigen, dass ihre Daten richtig formatiert sind.

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

Diese Pseudoklasse ist nützlich, um korrekte Felder für den Benutzer hervorzuheben.

## Syntax

```css
:valid {
  /* ... */
}
```

## Barrierefreiheit

Die Farbe Grün wird häufig verwendet, um gültige Eingaben anzuzeigen. Personen, die eine bestimmte Art von Farbenblindheit haben, können den Status der Eingabe nicht erkennen, es sei denn, sie wird von einem zusätzlichen Indikator begleitet, der nicht auf Farbe angewiesen ist, um Bedeutung zu vermitteln. In der Regel werden erläuternde Texte und/oder ein Symbol verwendet.

- [MDN Understanding WCAG, Guideline 1.4 Erläuterungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis von Erfolgskriterium 1.4.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-without-color.html)

## Beispiele

### Anzeige gültiger und ungültiger Formularfelder

In diesem Beispiel verwenden wir Strukturen wie diese, die zusätzliche `<span>`s enthalten, um Inhalte darauf zu generieren; wir verwenden diese, um Indikatoren für gültige/ungültige Daten bereitzustellen:

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

Wir setzen die `<span>`s auf `position: relative`, damit wir den erzeugten Inhalt relativ zu ihnen positionieren können. Wir positionieren dann absolut verschiedene erzeugte Inhalte, je nachdem, ob die Daten im Formular gültig oder ungültig sind — ein grüner Haken oder ein rotes Kreuz. Um der ungültigen Eingabe etwas mehr Dringlichkeit zu verleihen, haben wir den Eingaben auch einen dicken roten Rahmen hinzugefügt, wenn sie ungültig sind.

> [!NOTE]
> Wir haben `::before` verwendet, um diese Labels hinzuzufügen, da wir bereits `::after` für die "erforderlich"-Labels benutzt hatten.

Sie können es unten ausprobieren:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/valid-invalid.html", '100%', 430)}}

Beachten Sie, wie die erforderlichen Texteingaben ungültig sind, wenn sie leer sind, aber gültig, wenn sie ausgefüllt sind. Das E-Mail-Eingabefeld hingegen ist gültig, wenn es leer ist, da es nicht erforderlich ist, aber ungültig, wenn es etwas enthält, das keine gültige E-Mail-Adresse ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Andere Validierungspseudoklassen: {{ cssxref(":required") }}, {{ cssxref(":optional") }}, {{ cssxref(":invalid") }}
- [Formulardatenvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- Zugriff auf den [validity state](/de/docs/Web/API/ValidityState) aus JavaScript
