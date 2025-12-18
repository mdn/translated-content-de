---
title: :valid
slug: Web/CSS/Reference/Selectors/:valid
l10n:
  sourceCommit: f86740f3a842a5a075be18185ecaf9a981eda4b9
---

Die **`:valid`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) repräsentiert jedes {{HTMLElement("input")}} oder andere {{HTMLElement("form")}}-Element, dessen Inhalt erfolgreich [validiert](/de/docs/Web/HTML/Guides/Constraint_validation) wird. Dies ermöglicht es, gültige Felder einfach so zu gestalten, dass sie dem Benutzer helfen, zu bestätigen, dass ihre Daten korrekt formatiert sind.

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

Die Farbe Grün wird häufig verwendet, um gültige Eingaben anzuzeigen. Personen mit bestimmten Arten von Farbenblindheit können den Zustand der Eingabe nicht erkennen, es sei denn, es gibt einen zusätzlichen Indikator, der nicht auf Farbe angewiesen ist, um Bedeutung zu vermitteln. In der Regel werden beschreibender Text und/oder ein Symbol verwendet.

- [MDN Verständnis von WCAG, Erläuterungen zu Richtlinie 1.4](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgskriteriums 1.4.1 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-without-color.html)

## Beispiele

### Anzeige von gültigen und ungültigen Formularfeldern

In diesem Beispiel fügen wir zusätzliche `<span>`-Elemente hinzu, um Inhalte zu generieren, die auf gültige oder ungültige Daten hinweisen:

```html
<form>
  <fieldset>
    <legend>Feedback form</legend>
    <p>Required fields are labelled with "required".</p>
    <div>
      <label for="fname">First name: </label>
      <input id="fname" name="fname" type="text" required />
      <span></span>
    </div>
    <div>
      <label for="lname">Last name: </label>
      <input id="lname" name="lname" type="text" required />
      <span></span>
    </div>
    <div>
      <label for="email">
        Email address (include if you want a response):
      </label>
      <input id="email" name="email" type="email" />
      <span></span>
    </div>
    <div><button>Submit</button></div>
  </fieldset>
</form>
```

Zur Bereitstellung dieser Indikatoren verwenden wir das folgende CSS:

```css hidden
body {
  font-family: sans-serif;
  margin: 20px auto;
  max-width: 460px;
}

fieldset {
  padding: 10px 30px 0;
}

legend {
  color: white;
  background: black;
  padding: 5px 10px;
}

fieldset > div {
  margin-bottom: 20px;
  display: flex;
  flex-flow: row wrap;
}

button,
label,
input {
  display: block;
  font-family: inherit;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  width: 100%;
  padding: 5px;
  height: 30px;
}

input {
  box-shadow: inset 1px 1px 3px #ccc;
  border-radius: 5px;
}

input:hover,
input:focus {
  background-color: #eee;
}

input:required + span::after {
  font-size: 0.7rem;
  position: absolute;
  content: "required";
  color: white;
  background-color: black;
  padding: 5px 10px;
  top: -26px;
  left: -70px;
}

button {
  width: 60%;
  margin: 0 auto;
}
```

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

Wir setzen die `<span>`s auf `position: relative`, sodass wir den generierten Inhalt relativ zu ihnen positionieren können. Wir positionieren dann unterschiedlich generierte Inhalte absolut, je nachdem, ob die Formulardaten gültig oder ungültig sind — ein grüner Haken oder ein rotes Kreuz. Um den ungültigen Daten ein bisschen zusätzliche Dringlichkeit zu verleihen, haben wir den Eingaben einen dicken roten Rand gegeben, wenn sie ungültig sind.

> [!NOTE]
> Wir haben `::before` verwendet, um diese Labels hinzuzufügen, da wir `::after` bereits für die "erforderlichen" Labels verwendeten.

Sie können es unten ausprobieren:

{{EmbedLiveSample("indicating_valid_and_invalid_form_fields", "", 430)}}

Beachten Sie, wie die erforderlichen Texteingaben ungültig sind, wenn sie leer sind, aber gültig, wenn sie ausgefüllt sind. Das E-Mail-Feld ist hingegen gültig, wenn es leer ist, da es nicht erforderlich ist, wird jedoch ungültig, wenn es etwas enthält, das keine gültige E-Mail-Adresse ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Andere Validierungsbezogene Pseudoklassen: {{ cssxref(":required") }}, {{ cssxref(":optional") }}, {{ cssxref(":invalid") }}
- [Formulardatenvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- Zugriff auf den [Gültigkeitszustand](/de/docs/Web/API/ValidityState) aus JavaScript
