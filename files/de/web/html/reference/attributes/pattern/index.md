---
title: "`pattern` HTML-Attribut"
short-title: pattern
slug: Web/HTML/Reference/Attributes/pattern
l10n:
  sourceCommit: b50ed7ac1c2ca21b4b5cfb594474a17da3f2e6c2
---

Das **`pattern`**-Attribut gibt einen [regulären Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions) an, dem der Wert des Formularelements entsprechen sollte. Wenn ein nicht `null`-Wert nicht den durch den `pattern`-Wert festgelegten Einschränkungen entspricht, wird die schreibgeschützte [`patternMismatch`](/de/docs/Web/API/ValidityState/patternMismatch)-Eigenschaft des [`ValidityState`](/de/docs/Web/API/ValidityState)-Objekts `true` sein.

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

Das `pattern`-Attribut, wenn angegeben, ist ein regulärer Ausdruck, den der [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) der Eingabe erfüllen muss, damit der Wert die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) besteht. Es muss ein gültiger JavaScript-regulärer Ausdruck sein, wie er vom {{jsxref("RegExp")}}-Typ verwendet wird und in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert ist.

Der reguläre Ausdruck des Musters wird mit dem [`'v'`-Flag](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#v-mode_character_class) kompiliert. Dies macht den regulären Ausdruck [unicode-bewusst](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) und ändert auch die Interpretation von Zeichenklassen. Dies ermöglicht Schnittmengen- und Subtraktionsoperationen von Zeichenklassensätzen, und zusätzlich zu `]` und `\` müssen die folgenden Zeichen mit einem `\`-Backslash maskiert werden, wenn sie literale Zeichen darstellen: `(`, `)`, `[`, `{`, `}`, `/`, `-`, `|`. Vor Mitte 2023 wurde stattdessen das `'u'`-Flag verwendet; wenn Sie älteren Code aktualisieren, lesen Sie die [`unicodeSets`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets)-Referenz.

Der reguläre Ausdruck des Musters muss zum gesamten `value` der Eingabe passen und nicht nur zu einem Teilstring, als ob ein `^(?:` am Anfang des Musters und ein `)$` am Ende impliziert wären.

Es sollten keine Schrägstriche um den Mustertest angegeben werden. Kein regulärer Ausdruck wird angewendet, wenn der Attributwert fehlt, eine leere Zeichenkette ist oder ungültig ist.

Einige der Eingabetypen, die das `pattern`-Attribut unterstützen, insbesondere die {{HTMLElement("input/email", "email")}}- und {{HTMLElement("input/url", "url")}}-Eingabetypen, haben erwartete Werte-Syntaxen, die erfüllt werden müssen. Wenn das `pattern`-Attribut nicht vorhanden ist und der Wert nicht der erwarteten Syntax für diesen Werttyp entspricht, wird die schreibgeschützte [`typeMismatch`](/de/docs/Web/API/ValidityState/typeMismatch)-Eigenschaft des [`ValidityState`](/de/docs/Web/API/ValidityState)-Objekts `true` sein.

### Einschränkungsvalidierung

Wenn der Wert der Eingabe nicht die leere Zeichenkette ist und nicht dem gesamten regulären Ausdruck entspricht, wird eine Einschränkungsverletzung gemeldet, indem die [`patternMismatch`](/de/docs/Web/API/ValidityState/patternMismatch)-Eigenschaft des [`ValidityState`](/de/docs/Web/API/ValidityState)-Objekts `true` ist.

> [!NOTE]
> Wenn das `pattern`-Attribut ohne Wert angegeben ist, ist sein Wert implizit die leere Zeichenkette. Daher führt jeder nicht-leere Eingabe-`value` zu einer Einschränkungsverletzung.

### Benutzerfreundlichkeit und Zugänglichkeitsüberlegungen

Beim Einschließen eines `pattern` sollten Sie eine Beschreibung des Musters in sichtbarem Text in der Nähe der Steuerung bereitstellen. Fügen Sie außerdem ein [`title`](/de/docs/Web/HTML/Reference/Elements/input#title)-Attribut hinzu, das eine Beschreibung des Musters gibt. Benutzeragenten können die Titelinhalte während der Einschränkungsvalidierung verwenden, um dem Benutzer mitzuteilen, dass das Muster nicht übereinstimmt. Einige Browser zeigen ein Tooltipp mit den Titelinhalten, was die Benutzerfreundlichkeit für sehende Benutzer verbessert. Darüber hinaus kann unterstützende Technologie den Titel beim Fokuserhalt der Steuerung laut vorlesen, dies sollte jedoch nicht für die Barrierefreiheit als allein ausreichend betrachtet werden.

Nur auf das `title`-Attribut für die visuelle Darstellung von Textinhalten zu setzen, wird nicht empfohlen, da viele Benutzeragenten das Attribut nicht auf zugängliche Weise bereitstellen. Obwohl einige Browser einen Tooltipp anzeigen, wenn ein Element mit einem Titel überflogen wird, werden Tastatur- und Touch-Only-Benutzer ausgeschlossen. Dies ist einer der mehreren Gründe, warum Sie Informationen bereitstellen müssen, um Benutzer darüber zu informieren, wie die Steuerung ausgefüllt werden muss, um die Anforderungen zu erfüllen.

Während einige Browser `title`s verwenden, um Fehlermeldungen zu generieren, da Browser manchmal auch den Titel als Text beim Überfliegen anzeigen, wird er daher in Nicht-Fehlersituationen angezeigt. Seien Sie also vorsichtig, Titel nicht so zu formulieren, als ob ein Fehler aufgetreten wäre.

## Beispiele

### Übereinstimmung einer Telefonnummer

Gegebenes Beispiel:

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

Hier haben wir 3 Sektionen für eine nordamerikanische Telefonnummer mit einem impliziten Label, das alle drei Komponenten der Telefonnummer umfasst und jeweils 3 Ziffern, 3 Ziffern und 4 Ziffern erwartet, wie durch das `pattern`-Attribut festgelegt.

Wenn die Werte zu lang oder zu kurz sind oder Zeichen enthalten, die keine Ziffern sind, wird `patternMismatch` `true` sein. Wenn `true`, entspricht das Element den {{cssxref(":invalid")}} CSS-Pseudoklassen.

```css
input:invalid {
  border: red solid 3px;
}
```

{{EmbedLiveSample("Matching_a_phone_number", 300, 80)}}

Hätten wir stattdessen die [`minlength`](/de/docs/Web/HTML/Reference/Attributes/minlength)- und [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength)-Attribute verwendet, hätten wir möglicherweise gesehen, dass [`validityState.tooLong`](/de/docs/Web/API/ValidityState/tooLong) oder [`validityState.tooShort`](/de/docs/Web/API/ValidityState/tooShort) `true` sind.

### Spezifikation eines Musters

Sie können das [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern)-Attribut verwenden, um einen regulären Ausdruck zu spezifizieren, dem der eingegebene Wert entsprechen muss, um als gültig betrachtet zu werden (sehen Sie [Validation gegen einen regulären Ausdruck](/de/docs/Learn_web_development/Extensions/Forms/Form_validation#validating_against_a_regular_expression) für ein Schnellsprung-buch zur Nutzung regulärer Ausdrücke zur Validierung von Eingaben).

Das folgende Beispiel beschränkt den Wert auf 4-8 Zeichen und erfordert, dass es nur Kleinbuchstaben enthält.

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

Dies wird folgendermaßen dargestellt:

{{ EmbedLiveSample('Specifying_a_pattern', 600, 110) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation)
- [Formulare: Datenformularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions)
