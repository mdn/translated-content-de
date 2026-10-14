---
title: CSS-Pseudoklasse `:valid`
short-title: :valid
slug: Web/CSS/Reference/Selectors/:valid
l10n:
  sourceCommit: bf3b0f3217d5d5a6957e9e17f863ece19d939d20
---

Die [CSS](/de/docs/Web/CSS)-[Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) **`:valid`** steht für jedes {{HTMLElement("input")}}- oder andere {{HTMLElement("form")}}-Element, dessen Inhalt die [Validierung](/de/docs/Web/HTML/Guides/Constraint_validation) erfolgreich durchläuft. So können Sie gültigen Feldern ein Erscheinungsbild geben, an dem Benutzer erkennen, dass ihre Daten korrekt formatiert sind.

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
```

## Syntax

```css
:valid {
  /* ... */
}
```

## Barrierefreiheit

Die Farbe Grün wird häufig verwendet, um gültige Eingaben zu kennzeichnen. Menschen mit bestimmten Formen von Farbenblindheit können den Zustand einer Eingabe jedoch nicht erkennen, wenn kein zusätzlicher Hinweis vorhanden ist, der die Information unabhängig von der Farbe vermittelt. Üblicherweise werden dafür beschreibender Text und/oder ein Symbol verwendet.

- [MDN: WCAG verstehen, Erläuterungen zu Richtlinie 1.4](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Erfolgskriterium 1.4.1 verstehen | W3C: WCAG 2.0 verstehen](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-without-color.html)

## Beispiele

### Gültige und ungültige Formularfelder kennzeichnen

In diesem Beispiel fügen wir zusätzliche `<span>`-Elemente ein, um Inhalte zu erzeugen, die gültige oder ungültige Daten kennzeichnen:

```html
<fieldset>
  <legend>Contact information</legend>
  <p>Required fields are labeled with "required".</p>
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
    <label for="email"> Email address (include if you want a response): </label>
    <input id="email" name="email" type="email" />
    <span></span>
  </div>
</fieldset>
```

Für diese Kennzeichnungen verwenden wir das folgende CSS:

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
  box-shadow: inset 1px 1px 3px #cccccc;
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

Wir setzen die `<span>`-Elemente auf `position: relative`, damit wir die erzeugten Inhalte relativ zu ihnen positionieren können. Anschließend positionieren wir abhängig davon, ob die Formulardaten gültig oder ungültig sind, unterschiedliche erzeugte Inhalte absolut: ein grünes Häkchen beziehungsweise ein rotes Kreuz. Um ungültige Daten noch deutlicher hervorzuheben, geben wir den Eingabefeldern außerdem einen dicken roten Rahmen, wenn sie ungültig sind.

> [!NOTE]
> Wir haben `::before` verwendet, um diese Kennzeichnungen hinzuzufügen, da wir `::after` bereits für die Kennzeichnungen der Pflichtfelder verwenden.

Sie können es unten ausprobieren:

{{EmbedLiveSample("indicating_valid_and_invalid_form_fields", "", 430)}}

Beachten Sie, dass die Text-Eingabefelder für Pflichtangaben ungültig sind, solange sie leer sind, aber gültig werden, sobald etwas eingegeben wurde. Das E-Mail-Eingabefeld ist dagegen leer gültig, da es keine Pflichtangabe ist. Es ist jedoch ungültig, wenn es einen Wert enthält, der keine gültige E-Mail-Adresse ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Weitere Pseudoklassen zur Validierung: {{ cssxref(":required") }}, {{ cssxref(":optional") }}, {{ cssxref(":invalid") }}
- [Validierung von Formulardaten](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- Zugriff auf den [Validitätsstatus](/de/docs/Web/API/ValidityState) mit JavaScript
