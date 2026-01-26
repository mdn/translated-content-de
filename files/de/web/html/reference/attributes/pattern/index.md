---
title: "HTML-Attribut: pattern"
short-title: pattern
slug: Web/HTML/Reference/Attributes/pattern
l10n:
  sourceCommit: 06e6e54baef7032c4e81ca93291fde0a0585de8b
---

Das **`pattern`**-Attribut gibt einen [regulären Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions) an, dem der Wert des Formularelements entsprechen muss. Wenn ein nicht-`null`-Wert nicht den vom `pattern`-Wert festgelegten Einschränkungen entspricht, ist die schreibgeschützte [`patternMismatch`](/de/docs/Web/API/ValidityState/patternMismatch)-Eigenschaft des [`ValidityState`](/de/docs/Web/API/ValidityState)-Objekts `true`.

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

Das `pattern`-Attribut ist ein Attribut der Eingabetypen {{HTMLElement("input/text", "text")}}, {{HTMLElement("input/tel", "tel")}}, {{HTMLElement("input/email", "email")}}, {{HTMLElement("input/url", "url")}}, {{HTMLElement("input/password", "password")}}, und {{HTMLElement("input/search", "search")}}.

Das `pattern`-Attribut, wenn angegeben, ist ein regulärer Ausdruck, dem der [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) der Eingabe entsprechen muss, um die [Einschränkungsprüfung](/de/docs/Web/HTML/Guides/Constraint_validation) zu bestehen. Es muss ein gültiger JavaScript-regulärer Ausdruck sein, wie er vom {{jsxref("RegExp")}}-Typ verwendet wird und in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert ist.

Der reguläre Ausdruck des Musters wird mit dem [`'v'`-Flag](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#v-mode_character_class) kompiliert. Dies macht den regulären Ausdruck [unicode-bewusst](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) und ändert auch die Interpretation von Zeichenklassen. Dies ermöglicht die Schnitt- und Subtraktionsoperationen von Zeichenklassensätzen. Zusätzlich zu `]` und `\` müssen die folgenden Zeichen mit einem `\` Backslash maskiert werden, wenn sie als Literalzeichen dargestellt werden: `(`, `)`, `[`, `{`, `}`, `/`, `-`, `|`. Vor Mitte 2023 wurde stattdessen das `'u'`-Flag angegeben; wenn Sie älteren Code aktualisieren, lesen Sie die [`unicodeSets`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets)-Referenz.

Der reguläre Ausdruck des Musters muss dem gesamten `value` der Eingabe entsprechen und nicht einem Teilstring - als ob ein `^(?:` am Anfang und ein `)$` am Ende des Musters impliziert wäre.

Es sollten keine Schrägstriche um den Text des Musters angegeben werden. Es wird kein regulärer Ausdruck angewendet, wenn der Attributwert fehlt, eine leere Zeichenfolge oder ungültig ist.

Einige der Eingabetypen, die das `pattern`-Attribut unterstützen, insbesondere die Eingabetypen {{HTMLElement("input/email", "email")}} und {{HTMLElement("input/url", "url")}}, haben erwartete Wertesyntaxen, die übereinstimmen müssen. Wenn das `pattern`-Attribut nicht vorhanden ist und der Wert nicht die erwartete Syntax für diesen Wertetyp erfüllt, ist die schreibgeschützte [`typeMismatch`](/de/docs/Web/API/ValidityState/typeMismatch)-Eigenschaft des [`ValidityState`](/de/docs/Web/API/ValidityState)-Objekts `true`.

### Einschränkungsprüfung

Wenn der Wert der Eingabe nicht die leere Zeichenfolge ist und der Wert nicht mit dem gesamten regulären Ausdruck übereinstimmt, wird eine Einschränkungsverletzung durch die [`patternMismatch`](/de/docs/Web/API/ValidityState/patternMismatch)-Eigenschaft des [`ValidityState`](/de/docs/Web/API/ValidityState)-Objekts gemeldet, die `true` ist.

> [!NOTE]
> Wenn das `pattern`-Attribut ohne Wert angegeben wird, ist sein Wert implizit die leere Zeichenfolge. Somit führt **jeder nicht-leere** Eingabewert zu einer Einschränkungsverletzung.

### Überlegungen zur Benutzerfreundlichkeit und Barrierefreiheit

Wenn Sie ein `pattern` einfügen, geben Sie in sichtbarem Text in der Nähe des Steuerelements eine Beschreibung des Musters an. Außerdem sollten Sie ein `title`-Attribut hinzufügen, das eine Beschreibung des Musters gibt. Benutzeragenten können die Titelinhalte während der Einschränkungsprüfung verwenden, um dem Nutzer mitzuteilen, dass das Muster nicht übereinstimmt. Einige Browser zeigen ein Tooltip mit den Titelinhalten an, was die Benutzerfreundlichkeit für sehende Nutzer verbessert. Assistive Technologien können den Titel ebenfalls vorlesen, wenn das Steuerelement den Fokus erhält, jedoch sollte dies nicht als einzige Maßnahme für Barrierefreiheit angesehen werden.

Sich ausschließlich auf das `title`-Attribut für die visuelle Darstellung von Textinhalt zu verlassen, wird nicht empfohlen, da viele Benutzeragenten das Attribut nicht auf eine barrierefreie Weise darstellen. Obwohl einige Browser ein Tooltip anzeigen, wenn ein Element mit einem Titel darauf schwebt, werden Keyboard- und Touch-Benutzer ausgeschlossen. Dies ist einer der mehreren Gründe, warum Sie Informationen bereitstellen müssen, die Nutzer darüber informieren, wie das Steuerelement ausgefüllt werden muss, um die Anforderungen zu erfüllen.

Da `title`s von einigen Browsern verwendet werden, um Fehlermeldungen auszufüllen, und weil Browser manchmal auch den Titel als Text beim Hover anzeigen, wird er daher auch in Nicht-Fehlersituationen angezeigt. Seien Sie daher vorsichtig, Titel nicht so zu formulieren, als ob ein Fehler aufgetreten wäre.

## Beispiele

### Übereinstimmung einer Telefonnummer

Gegeben Folgendes:

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

Hier haben wir drei Sektionen für eine nordamerikanische Telefonnummer mit einem impliziten Label, das alle drei Komponenten der Telefonnummer umfasst und jeweils 3 Ziffern, 3 Ziffern und 4 Ziffern erwartet, wie sie durch das `pattern`-Attribut festgelegt sind.

Wenn die Werte zu lang oder zu kurz sind oder Zeichen enthalten, die keine Ziffern sind, wird `patternMismatch` `true`. Wenn `true`, entspricht das Element den {{cssxref(":invalid")}} CSS-Pseudoklassen.

```css
input:invalid {
  border: red solid 3px;
}
```

{{EmbedLiveSample("Matching_a_phone_number", 300, 80)}}

Hätten wir stattdessen die Attribute [`minlength`](/de/docs/Web/HTML/Reference/Attributes/minlength) und [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength) verwendet, hätten wir möglicherweise [`validityState.tooLong`](/de/docs/Web/API/ValidityState/tooLong) oder [`validityState.tooShort`](/de/docs/Web/API/ValidityState/tooShort) als `true` gesehen.

### Festlegen eines Musters

Sie können das [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern)-Attribut verwenden, um einen regulären Ausdruck festzulegen, dem der eingegebene Wert entsprechen muss, um als gültig angesehen zu werden (siehe [Validierung gegen einen regulären Ausdruck](/de/docs/Learn_web_development/Extensions/Forms/Form_validation#validating_against_a_regular_expression) für einen Schnellkurs zur Verwendung von regulären Ausdrücken zur Validierung von Eingaben).

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
  color: #999999;
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

- [Einschränkungsprüfung](/de/docs/Web/HTML/Guides/Constraint_validation)
- [Formulare: Datenformularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions)
