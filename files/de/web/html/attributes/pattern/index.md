---
title: "HTML-Attribut: pattern"
short-title: pattern
slug: Web/HTML/Attributes/pattern
l10n:
  sourceCommit: 8b02826c79b090b5af0d68ae1ef39f932a66a7f1
---

{{HTMLSidebar}}

Das **`pattern`**-Attribut gibt einen [regulären Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions) an, den der Wert des Formularfeldes erfüllen muss. Wenn ein Wert ungleich `null` den durch den `pattern`-Wert festgelegten Bedingungen nicht entspricht, ist die `patternMismatch`-Eigenschaft des [`ValidityState`](/de/docs/Web/API/ValidityState)-Objekts auf `true` gesetzt.

{{InteractiveExample("HTML Demo: pattern", "tabbed-shorter")}}

```html interactive-example
<label for="username">Username: (3-16 characters)</label>
<input
  id="username"
  name="username"
  type="text"
  value="Sasha"
  pattern="\w{3,16}"
  required />

<label for="pin">PIN: (4 digits)</label>
<input id="pin" name="pin" type="password" pattern="\d{4,4}" required />
```

```css interactive-example
label {
  display: block;
  margin-top: 1em;
}

input:valid {
  background-color: palegreen;
}

input:invalid {
  background-color: lightpink;
}
```

## Übersicht

Das `pattern`-Attribut ist ein Attribut der Eingabetypen {{HTMLElement("input/text", "text")}}, {{HTMLElement("input/tel", "tel")}}, {{HTMLElement("input/email", "email")}}, {{HTMLElement("input/url", "url")}}, {{HTMLElement("input/password", "password")}} und {{HTMLElement("input/search", "search")}}.

Das `pattern`-Attribut, wenn spezifiziert, ist ein regulärer Ausdruck, den der `value` des Eingabefeldes erfüllen muss, damit der Wert die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) besteht. Es muss ein gültiger JavaScript-regulärer Ausdruck sein, wie er vom {{jsxref("RegExp")}}-Typ verwendet wird, und wie in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert.

Der reguläre Ausdruck des Musters wird mit dem [`'v'`-Flag](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#v-mode_character_class) kompiliert. Dies macht den regulären Ausdruck [unicode-bewusst](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) und ändert auch die Art und Weise, wie Zeichenklassen interpretiert werden. Dies erlaubt Schnitt- und Subtraktionsoperationen von Zeichenklassenmengen. Neben `]` und `\` müssen die folgenden Zeichen mit einem `\`-Backslash maskiert werden, wenn sie als literale Zeichen dargestellt werden sollen: `(`, `)`, `[`, `{`, `}`, `/`, `-`, `|`. Vor Mitte 2023 wurde stattdessen das `'u'`-Flag festgelegt; Wenn Sie älteren Code aktualisieren, [dokumentiert dieses Dokument die Unterschiede](https://github.com/tc39/proposal-regexp-v-flag#how-is-the-v-flag-different-from-the-u-flag).

Der reguläre Ausdruck des Musters muss zum gesamten `value` des Eingabefeldes passen, anstatt zu einem Teilstring – als ob ein `^(?:` am Start des Musters und ein `)$` am Ende impliziert wäre.

Es sollten keine Schrägstriche um den Mustertext angegeben werden. Kein regulärer Ausdruck wird angewendet, wenn der Attributwert fehlt, eine leere Zeichenkette ist oder ungültig ist.

Einige der Eingabetypen, die das pattern-Attribut unterstützen, insbesondere die {{HTMLElement("input/email", "email")}}- und {{HTMLElement("input/url", "url")}}-Eingabetypen, haben erwartete Wertsyntaxen, die erfüllt werden müssen. Wenn das pattern-Attribut nicht vorhanden ist und der Wert nicht der erwarteten Syntax für diesen Werttyp entspricht, ist die `typeMismatch`-Eigenschaft des [`ValidityState`](/de/docs/Web/API/ValidityState)-Objekts auf `true` gesetzt.

### Einschränkungsvalidierung

Wenn der Wert des Eingabefeldes nicht die leere Zeichenkette ist und der Wert nicht dem gesamten regulären Ausdruck entspricht, wird eine Einschränkungsverletzung gemeldet, indem die `patternMismatch`-Eigenschaft des [`ValidityState`](/de/docs/Web/API/ValidityState)-Objekts auf `true` gesetzt wird.

> [!NOTE]
> Wenn das `pattern`-Attribut ohne Wert angegeben ist, ist sein Wert implizit die leere Zeichenkette. Somit wird **jede nicht-leere** Eingabe eines `value` zu einer Einschränkungsverletzung führen.

### Benutzerfreundlichkeit und Barrierefreiheit

Wenn Sie ein `pattern` einfügen, sollten Sie eine Beschreibung des Musters in sichtbarem Text in der Nähe des Kontrollfeldes bereitstellen. Außerdem sollten Sie ein [`title`](/de/docs/Web/HTML/Element/input#title)-Attribut einfügen, welches eine Beschreibung des Musters liefert. Benutzeragenten können den Titelinhalt während der Einschränkungsvalidierung verwenden, um dem Benutzer mitzuteilen, dass das Muster nicht erfüllt ist. Einige Browser zeigen ein Tooltip mit den Titelinhalten an, was die Benutzerfreundlichkeit für sehende Benutzer verbessert. Zusätzlich kann assistive Technologie den Titel vorlesen, wenn das Kontrollfeld den Fokus erhält. Darauf sollte jedoch nicht ausschließlich für die Barrierefreiheit vertraut werden.

Nur auf das `title`-Attribut für die visuelle Darstellung von Textinhalten zu vertrauen, wird nicht empfohlen, da viele Benutzeragenten das Attribut nicht auf eine zugängliche Weise darstellen. Obwohl einige Browser ein Tooltip anzeigen, wenn ein Element mit einem Titel überfahren wird, lässt dies Tastatur- und nur touchfähige Benutzer außen vor. Aus diesen und mehreren anderen Gründen muss zusätzliche Information bereitgestellt werden, die den Benutzern erklärt, wie sie das Kontrollfeld ausfüllen müssen, um die Anforderungen zu erfüllen.

Während `title`s von einigen Browsern verwendet werden, um Fehlermeldungen zu bevölkern, werden Titel manchmal auch als Text bei Hover angezeigt, daher erscheinen sie auch in Nicht-Fehlersituationen. Deshalb sollten Titel vorsichtig formuliert werden, sodass sie nicht so wirken, als sei ein Fehler aufgetreten.

## Beispiele

### Eine Telefonnummer abgleichen

Angenommen die folgende Situation:

```html
<p>
  <label>
    Enter your phone number in the format (123) - 456 - 7890 (<input
      name="tel1"
      type="tel"
      pattern="[0-9]{3}"
      placeholder="###"
      aria-label="3-digit area code"
      size="2" />) -
    <input
      name="tel2"
      type="tel"
      pattern="[0-9]{3}"
      placeholder="###"
      aria-label="3-digit prefix"
      size="2" />
    -
    <input
      name="tel3"
      type="tel"
      pattern="[0-9]{4}"
      placeholder="####"
      aria-label="4-digit number"
      size="3" />
  </label>
</p>
```

Hier haben wir drei Abschnitte für eine nordamerikanische Telefonnummer mit einem impliziten Label, das alle drei Komponenten der Telefonnummer umfasst, und erwarten jeweils 3 Ziffern, 3 Ziffern und 4 Ziffern, wie es durch das `pattern`-Attribut festgelegt ist.

Wenn die Werte zu lang oder zu kurz sind oder Zeichen enthalten, die keine Ziffern sind, wird `patternMismatch` auf `true` gesetzt. Wenn `true`, entspricht das Element den {{cssxref(":invalid")}} CSS-Pseudoklassen.

```css
input:invalid {
  border: red solid 3px;
}
```

{{EmbedLiveSample("Matching_a_phone_number", 300, 80)}}

Hätten wir die Attribute [`minlength`](/de/docs/Web/HTML/Attributes/minlength) und [`maxlength`](/de/docs/Web/HTML/Attributes/maxlength) stattdessen benutzt, könnten wir [`validityState.tooLong`](/de/docs/Web/API/ValidityState/tooLong) oder [`validityState.tooShort`](/de/docs/Web/API/ValidityState/tooShort) als `true` gesehen haben.

### Ein Muster festlegen

Sie können das [`pattern`](/de/docs/Web/HTML/Element/input#pattern)-Attribut verwenden, um einen regulären Ausdruck festzulegen, den der eingegebene Wert erfüllen muss, um als gültig betrachtet zu werden (siehe [Validierung gegen einen regulären Ausdruck](/de/docs/Learn_web_development/Extensions/Forms/Form_validation#validating_against_a_regular_expression) für einen Kurzlehrgang zur Verwendung von regulären Ausdrücken zur Validierung von Eingaben).

Das folgende Beispiel beschränkt den Wert auf 4-8 Zeichen und erfordert, dass er nur Kleinbuchstaben enthält.

```html
<form>
  <div>
    <label for="uname">Choose a username: </label>
    <input
      type="text"
      id="uname"
      name="name"
      required
      size="45"
      pattern="[a-z]{4,8}"
      title="4 to 8 lowercase letters" />
    <span class="validity"></span>
    <p>Usernames must be lowercase and 4-8 characters in length.</p>
  </div>
  <div>
    <button>Submit</button>
  </div>
</form>
```

```css hidden
div {
  margin-bottom: 10px;
  position: relative;
}

p {
  font-size: 80%;
  color: #999;
}

input + span {
  padding-right: 30px;
}

input:invalid + span::after {
  position: absolute;
  content: "✖";
  padding-left: 5px;
}

input:valid + span::after {
  position: absolute;
  content: "✓";
  padding-left: 5px;
}
```

Dies wird wie folgt dargestellt:

{{EmbedLiveSample('Specifying_a_pattern', 600, 110)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation)
- [Formulare: Datenformularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions)
