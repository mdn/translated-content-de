---
title: "HTML-Attribut: pattern"
short-title: pattern
slug: Web/HTML/Reference/Attributes/pattern
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

Das **`pattern`**-Attribut gibt einen [regulären Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions) an, dem der Wert des Formularelements entsprechen soll. Wenn ein Wert ungleich `null` nicht den durch das `pattern`-Attribut gesetzten Einschränkungen entspricht, wird die [`patternMismatch`](/de/docs/Web/API/ValidityState/patternMismatch)-Eigenschaft des schreibgeschützten [`ValidityState`](/de/docs/Web/API/ValidityState)-Objekts auf `true` gesetzt.

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

Das `pattern`-Attribut ist ein Attribut der Eingabetypen {{HTMLElement("input/text", "text")}}, {{HTMLElement("input/tel", "tel")}}, {{HTMLElement("input/email", "email")}}, {{HTMLElement("input/url", "url")}}, {{HTMLElement("input/password", "password")}} und {{HTMLElement("input/search", "search")}}.

Das `pattern`-Attribut, wenn es spezifiziert ist, ist ein regulärer Ausdruck, den der [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) des Eingabefelds erfüllen muss, damit der Wert die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) besteht. Es muss ein gültiger regulärer JavaScript-Ausdruck sein, wie er vom {{jsxref("RegExp")}}-Typ verwendet wird, und wie in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert.

Der reguläre Ausdruck des Musters wird mit dem [`'v'`-Flag](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#v-mode_character_class) kompiliert. Dadurch wird der reguläre Ausdruck [unicode-fähig](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) und verändert außerdem die Interpretation von Zeichenklassen. Dies erlaubt Schnittmengen- und Subtraktionsoperationen in Zeichenklassen, und zusätzlich zu `]` und `\` müssen die folgenden Zeichen, wenn sie literale Zeichen darstellen, mit einem `\` Backslash maskiert werden: `(`, `)`, `[`, `{`, `}`, `/`, `-`, `|`. Vor Mitte 2023 war das `'u'`-Flag stattdessen vorgesehen; wenn Sie älteren Code aktualisieren, [legt dieses Dokument die Unterschiede dar](https://github.com/tc39/proposal-regexp-v-flag#how-is-the-v-flag-different-from-the-u-flag).

Der reguläre Ausdruck des Musters muss dem gesamten `value` des Eingabefelds entsprechen, anstatt einem Teilstring zu entsprechen – als ob ein `^(?:` am Anfang des Musters und `)$` am Ende impliziert wäre.

Es sollten keine Schrägstriche um den Text des Musters angegeben werden. Kein regulärer Ausdruck wird angewendet, wenn der Attributwert fehlt, eine leere Zeichenkette oder ungültig ist.

Einige der Eingabetypen, die das pattern-Attribut unterstützen, insbesondere die Eingabetypen {{HTMLElement("input/email", "email")}} und {{HTMLElement("input/url", "url")}}, haben erwartete Wertesyntaxen, die erfüllt werden müssen. Wenn das pattern-Attribut nicht vorhanden ist und der Wert nicht der erwarteten Syntax für diesen Wertetyp entspricht, wird die [`typeMismatch`](/de/docs/Web/API/ValidityState/typeMismatch)-Eigenschaft des schreibgeschützten [`ValidityState`](/de/docs/Web/API/ValidityState)-Objekts auf `true` gesetzt.

### Einschränkungsvalidierung

Wenn der Wert des Eingabefelds nicht die leere Zeichenkette ist und der Wert nicht dem gesamten regulären Ausdruck entspricht, wird durch die [`patternMismatch`](/de/docs/Web/API/ValidityState/patternMismatch)-Eigenschaft des [`ValidityState`](/de/docs/Web/API/ValidityState)-Objekts eine Einschränkungsverletzung gemeldet, indem sie auf `true` gesetzt wird.

> [!NOTE]
> Wenn das `pattern`-Attribut ohne Wert angegeben wird, ist sein Wert implizit die leere Zeichenkette. Somit wird **jeder nicht-leere** Eingabe-`value` zu einer Einschränkungsverletzung führen.

### Benutzbarkeit und Zugänglichkeitsüberlegungen

Wenn Sie ein `pattern` angeben, sollten Sie eine Beschreibung des Musters in sichtbarem Text in der Nähe der Steuerung bereitstellen. Zusätzlich sollten Sie ein [`title`](/de/docs/Web/HTML/Reference/Elements/input#title)-Attribut einschließen, das eine Beschreibung des Musters liefert. Benutzeragenten können die Titelinhalte während der Einschränkungsvalidierung verwenden, um dem Benutzer mitzuteilen, dass das Muster nicht übereinstimmt. Einige Browser zeigen ein Tooltip mit den Titelinhalten an, was die Benutzbarkeit für sehende Benutzer verbessert. Darüber hinaus kann unterstützende Technologie den Titel vorlesen, wenn die Steuerung den Fokus erhält, aber dies sollte nicht als zugänglichkeitsrelevant angesehen werden.

Es wird davon abgeraten, ausschließlich auf das `title`-Attribut für die visuelle Darstellung von Textinhalten zurückzugreifen, da viele Benutzeragenten das Attribut nicht auf zugängliche Art und Weise bereitstellen. Obwohl einige Browser ein Tooltip anzeigen, wenn ein Element mit einem Titel schwebt, werden dadurch Tastatur- und Nur-Touch-Benutzer ausgelassen. Dies ist einer der mehreren Gründe, warum Sie Informationen bereitstellen müssen, die Benutzer darüber informieren, wie die Steuerung ausgefüllt werden soll, um die Anforderungen zu erfüllen.

Während die `title`s von einigen Browsern zur Erstellung von Fehlermeldungen verwendet werden, da Browser manchmal auch den Titel als Text beim Überfahren anzeigen, erscheint er daher in Nicht-Fehlersituationen, weshalb Sie darauf achten sollten, Titel nicht so zu formulieren, als ob ein Fehler aufgetreten wäre.

## Beispiele

### Telefonnummerabgleich

Unter Berücksichtigung des Folgenden:

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

Hier haben wir 3 Abschnitte für eine nordamerikanische Telefonnummer mit einem impliziten Label, das alle drei Komponenten der Telefonnummer umfasst, wobei erwartet wird, dass es sich um jeweils 3, 3 und 4 Ziffern handelt, wie im `pattern`-Attribut für jede Komponente festgelegt.

Sind die Werte zu lang oder zu kurz oder enthalten sie Zeichen, die keine Ziffern sind, wird `patternMismatch` auf true gesetzt. Bei `true` entspricht das Element den {{cssxref(":invalid")}} CSS-Pseudoklassen.

```css
input:invalid {
  border: red solid 3px;
}
```

{{EmbedLiveSample("Matching_a_phone_number", 300, 80)}}

Wenn wir stattdessen die Attribute [`minlength`](/de/docs/Web/HTML/Reference/Attributes/minlength) und [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength) verwendet hätten, könnten wir möglicherweise sehen, dass [`validityState.tooLong`](/de/docs/Web/API/ValidityState/tooLong) oder [`validityState.tooShort`](/de/docs/Web/API/ValidityState/tooShort) wahr sind.

### Ein Muster festlegen

Sie können das [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern)-Attribut verwenden, um einen regulären Ausdruck anzugeben, dem der eingegebene Wert entsprechen muss, um als gültig angesehen zu werden (siehe [Überprüfung gegen einen regulären Ausdruck](/de/docs/Learn_web_development/Extensions/Forms/Form_validation#validating_against_a_regular_expression) für einen Schnellkurs über die Verwendung von regulären Ausdrücken zur Überprüfung von Eingaben).

Das folgende Beispiel schränkt den Wert auf 4-8 Zeichen ein und erfordert, dass er nur Kleinbuchstaben enthält.

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

Dies wird wie folgt gerendert:

{{ EmbedLiveSample('Specifying_a_pattern', 600, 110) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation)
- [Formulare: Datenformularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions)
