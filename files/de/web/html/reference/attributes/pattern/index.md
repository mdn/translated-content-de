---
title: "HTML-Attribut: pattern"
short-title: pattern
slug: Web/HTML/Reference/Attributes/pattern
l10n:
  sourceCommit: 1b7dbf06b84237832fc9108e1531542fd6a21a5b
---

{{HTMLSidebar}}

Das **`pattern`**-Attribut legt einen [regulären Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions) fest, dem der Wert des Formularelements entsprechen soll. Wenn ein nicht-`null`-Wert nicht den durch den `pattern`-Wert festgelegten Einschränkungen entspricht, ist die schreibgeschützte Eigenschaft [`patternMismatch`](/de/docs/Web/API/ValidityState/patternMismatch) des [`ValidityState`](/de/docs/Web/API/ValidityState)-Objekts wahr.

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

## Überblick

Das `pattern`-Attribut ist ein Attribut der {{HTMLElement("input/text", "text")}}, {{HTMLElement("input/tel", "tel")}}, {{HTMLElement("input/email", "email")}}, {{HTMLElement("input/url", "url")}}, {{HTMLElement("input/password", "password")}} und {{HTMLElement("input/search", "search")}} Eingabetypen.

Das `pattern`-Attribut ist, wenn angegeben, ein regulärer Ausdruck, dem der [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) des Eingabeelements entsprechen muss, damit der Wert die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) besteht. Es muss ein gültiger JavaScript-regulärer Ausdruck sein, wie er vom {{jsxref("RegExp")}}-Typ verwendet wird und wie in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert ist.

Der reguläre Ausdruck des Patterns wird mit dem [`'v'`-Flag](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#v-mode_character_class) kompiliert. Dies macht den regulären Ausdruck [unicode-bewusst](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) und ändert auch, wie Zeichenklassen interpretiert werden. Dies ermöglicht Zeichenklassen-Durchschnitts- und Subtraktionsoperationen, und zusätzlich zu `]` und `\` müssen die folgenden Zeichen mit einem `\`-Backslash maskiert werden, wenn sie als Literalzeichen dargestellt werden: `(`, `)`, `[`, `{`, `}`, `/`, `-`, `|`. Bis Mitte 2023 wurde das `'u'`-Flag stattdessen angegeben; Wenn Sie älteren Code aktualisieren, lesen Sie bitte die Referenz zu [`unicodeSets`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets).

Der reguläre Ausdruck des Patterns muss dem gesamten Eingabewert entsprechen, anstatt einem Substring zu entsprechen - als ob ein `^(?:` am Anfang des Patterns und `)$` am Ende impliziert wäre.

Es sollten keine Schrägstriche um den Patterntext angegeben werden. Es wird kein regulärer Ausdruck angewendet, wenn der Attributwert fehlt, eine leere Zeichenfolge oder ungültig ist.

Einige der Eingabetypen, die das Pattern-Attribut unterstützen, insbesondere die Eingabetypen {{HTMLElement("input/email", "email")}} und {{HTMLElement("input/url", "url")}}, haben erwartete Wertesyntaxen, die übereinstimmen müssen. Wenn das Pattern-Attribut nicht vorhanden ist und der Wert nicht der erwarteten Syntax für diesen Wertetyp entspricht, ist die schreibgeschützte Eigenschaft [`typeMismatch`](/de/docs/Web/API/ValidityState/typeMismatch) des [`ValidityState`](/de/docs/Web/API/ValidityState)-Objekts wahr.

### Einschränkungsvalidierung

Wenn der Eingabewert nicht die leere Zeichenfolge ist und der Wert nicht dem gesamten regulären Ausdruck entspricht, wird ein Einschränkungsverstoß durch die Eigenschaft [`patternMismatch`](/de/docs/Web/API/ValidityState/patternMismatch) des [`ValidityState`](/de/docs/Web/API/ValidityState)-Objekts gemeldet, indem sie `true` ist.

> [!NOTE]
> Wenn das `pattern`-Attribut ohne Wert angegeben ist, ist sein Wert implizit die leere Zeichenfolge. Daher führt **jeder nicht-leere** Eingabewert zu einem Einschränkungsverstoß.

### Benutzerfreundlichkeits- und Zugänglichkeitsüberlegungen

Wenn Sie ein `pattern` angeben, sollten Sie eine Beschreibung des Musters in sichtbarem Text in der Nähe des Eingabeelements anbringen. Zusätzlich sollten Sie ein [`title`](/de/docs/Web/HTML/Reference/Elements/input#title)-Attribut einfügen, das eine Beschreibung des Musters liefert. Benutzeragenten können die Inhalte des Titels während der Einschränkungsvalidierung verwenden, um dem Benutzer mitzuteilen, dass das Muster nicht übereinstimmt. Einige Browser zeigen ein Tooltip mit den Titelinhalten an, was die Bedienbarkeit für sehende Benutzer verbessert. Außerdem kann unterstützende Technologie den Titel laut vorlesen, wenn das Steuerelement den Fokus erhält, aber darauf sollte nicht für die Zugänglichkeit vertraut werden.

Es wird davon abgeraten, sich nur auf das `title`-Attribut zur visuellen Darstellung von Textinhalten zu verlassen, da viele Benutzeragenten das Attribut nicht barrierefrei bereitstellen. Obwohl einige Browser ein Tooltip anzeigen, wenn ein Element mit einem Titel fokussiert wird, sind Tastatur- und nur-Touch-Benutzer ausgeschlossen. Dies ist einer der Gründe, warum Sie Informationen bereitstellen müssen, die Benutzern mitteilen, wie sie das Steuerelement ausfüllen sollen, um die Anforderungen zu erfüllen.

Da `title`s von einigen Browsern zur Befüllung von Fehlermeldungen verwendet werden, zeigen sie den Titel manchmal auch als Text beim Hover an. Daher erscheint er in Nicht-Fehlersituationen, also achten Sie darauf, die Titel nicht so zu formulieren, als sei ein Fehler aufgetreten.

## Beispiele

### Eine Telefonnummer validieren

Angenommen, folgendes:

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

Hier haben wir drei Abschnitte für eine nordamerikanische Telefonnummer mit einem impliziten Label, das alle drei Komponenten der Telefonnummer umfasst und jeweils 3 Ziffern, 3 Ziffern und 4 Ziffern erwartet, wie es durch das `pattern`-Attribut für jedes festgelegt ist.

Wenn die Werte zu lang oder zu kurz sind oder Zeichen enthalten, die keine Ziffern sind, wird die `patternMismatch`-Eigenschaft wahr. Wenn `true`, dann entspricht das Element den {{cssxref(":invalid")}} CSS-Pseudoklassen.

```css
input:invalid {
  border: red solid 3px;
}
```

{{EmbedLiveSample("Matching_a_phone_number", 300, 80)}}

Hätte man stattdessen die [`minlength`](/de/docs/Web/HTML/Reference/Attributes/minlength) und [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength)-Attribute verwendet, könnte man sehen, dass [`validityState.tooLong`](/de/docs/Web/API/ValidityState/tooLong) oder [`validityState.tooShort`](/de/docs/Web/API/ValidityState/tooShort) wahr sind.

### Ein Muster angeben

Sie können das [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern)-Attribut verwenden, um einen regulären Ausdruck festzulegen, dem der eingegebene Wert entsprechen muss, um als gültig zu gelten (siehe [Validierung gegen einen regulären Ausdruck](/de/docs/Learn_web_development/Extensions/Forms/Form_validation#validating_against_a_regular_expression) für einen Schnellkurs zur Verwendung von regulären Ausdrücken zur Validierung von Eingaben).

Das folgende Beispiel beschränkt den Wert auf 4-8 Zeichen und verlangt, dass er nur Kleinbuchstaben enthält.

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

Dies wird wie folgt angezeigt:

{{EmbedLiveSample('Specifying_a_pattern', 600, 110)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation)
- [Formulare: Datenformularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions)
