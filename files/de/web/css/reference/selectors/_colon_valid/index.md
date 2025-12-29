---
title: :valid
slug: Web/CSS/Reference/Selectors/:valid
l10n:
  sourceCommit: 423161782178b119c64cd0b41bff8df20dc84a56
---

Der **`:valid`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) repräsentiert jedes {{HTMLElement("input")}} oder ein anderes {{HTMLElement("form")}}-Element, dessen Inhalt erfolgreich [validiert](/de/docs/Web/HTML/Guides/Constraint_validation) wird. Dies ermöglicht es, dass gültige Felder einfach ein Erscheinungsbild annehmen, das dem Benutzer hilft, zu bestätigen, dass ihre Daten richtig formatiert sind.

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

Die Farbe Grün wird häufig verwendet, um gültige Eingaben anzuzeigen. Personen mit bestimmten Arten von Farbenblindheit können den Zustand der Eingabe nicht erkennen, es sei denn, sie wird von einem zusätzlichen Indikator begleitet, der nicht auf Farbe als Bedeutungsträger angewiesen ist. Typischerweise werden beschreibender Text und/oder ein Symbol verwendet.

- [MDN Verständnis WCAG, Leitfaden 1.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgskriteriums 1.4.1 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-without-color.html)

## Beispiele

### Anzeige von gültigen und ungültigen Formfeldern

In diesem Beispiel fügen wir zusätzliche `<span>`-Elemente hinzu, um Inhalte zu erzeugen, die gültige oder ungültige Daten anzeigen:

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

Um diese Indikatoren bereitzustellen, verwenden wir folgendes CSS:

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
  margin: 0;
  box-sizing: border-box;
  width: 100%;
  padding: 5px;
  height: 30px;
}

input {
  box-shadow: inset 1px 1px 3px #ccccccs;
  border-radius: 5px;
}

input:hover,
input:focus {
  background-color: #eeeeee;
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

Wir setzen die `<span>`s auf `position: relative`, damit wir den erzeugten Inhalt relativ zu ihnen positionieren können. Wir positionieren dann verschiedene erzeugte Inhalte absolut, je nachdem, ob die Formulardaten gültig oder ungültig sind – ein grüner Haken oder ein rotes Kreuz, jeweils. Um den ungültigen Daten etwas mehr Dringlichkeit zu verleihen, haben wir den Eingaben auch einen dicken roten Rand gegeben, wenn sie ungültig sind.

> [!NOTE]
> Wir haben `::before` verwendet, um diese Labels hinzuzufügen, da wir `::after` bereits für die "erforderlichen" Labels verwendet haben.

Sie können es unten ausprobieren:

{{EmbedLiveSample("indicating_valid_and_invalid_form_fields", "", 430)}}

Beachten Sie, wie die erforderlichen Texteingaben ungültig sind, wenn sie leer sind, aber gültig, wenn sie etwas ausgefüllt haben. Die E-Mail-Eingabe hingegen ist gültig, wenn sie leer ist, da sie nicht erforderlich ist, aber ungültig, wenn sie etwas enthält, das keine richtige E-Mail-Adresse ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Andere validierungsbezogene Pseudoklassen: {{ cssxref(":required") }}, {{ cssxref(":optional") }}, {{ cssxref(":invalid") }}
- [Formulardatenvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- Zugriff auf den [ValidityState](/de/docs/Web/API/ValidityState) über JavaScript
