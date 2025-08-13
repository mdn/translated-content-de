---
title: "HTML-Attribut: pattern"
short-title: pattern
slug: Web/HTML/Reference/Attributes/pattern
l10n:
  sourceCommit: a1765c2cad20118be0dad322d3548908787b5791
---

Das **`pattern`** Attribut spezifiziert einen [regulären Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions), dem der Wert des Formularelements entsprechen sollte. Wenn ein Wert ungleich `null` nicht den durch das `pattern` Attribut festgelegten Einschränkungen entspricht, wird die schreibgeschützte Eigenschaft [`patternMismatch`](/de/docs/Web/API/ValidityState/patternMismatch) des [`ValidityState`](/de/docs/Web/API/ValidityState)-Objekts auf true gesetzt.

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

Das `pattern` Attribut ist ein Attribut der Input-Typen {{HTMLElement("input/text", "text")}}, {{HTMLElement("input/tel", "tel")}}, {{HTMLElement("input/email", "email")}}, {{HTMLElement("input/url", "url")}}, {{HTMLElement("input/password", "password")}} und {{HTMLElement("input/search", "search")}}.

Wenn das `pattern` Attribut angegeben ist, handelt es sich um einen regulären Ausdruck, dem der [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) des Eingabefeldes entsprechen muss, um die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) zu bestehen. Es muss ein gültiger JavaScript-regulärer Ausdruck sein, wie er vom {{jsxref("RegExp")}} Typ verwendet wird und in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert ist.

Der reguläre Ausdruck des Musters wird mit dem [`'v'` Flag](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#v-mode_character_class) kompiliert. Dies macht den regulären Ausdruck [Unicode-bewusst](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) und ändert auch die Interpretation von Zeichenklassen. Dies ermöglicht Schnittmengen- und Subtraktionsoperationen für Zeichenklassen, und zusätzlich zu `]` und `\` müssen folgende Zeichen mit einem `\` Backslash maskiert werden, wenn sie als Literalzeichen fungieren: `(`, `)`, `[`, `{`, `}`, `/`, `-`, `|`. Vor Mitte 2023 wurde stattdessen das `'u'`-Flag verwendet; Wenn Sie älteren Code aktualisieren, lesen Sie die [`unicodeSets`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets) Referenz.

Der reguläre Ausdruck des Musters muss den gesamten `value` des Eingabefeldes entsprechen, anstatt ein Teilstring zu treffen - als ob ein `^(?:` am Anfang des Musters und ein `)$` am Ende impliziert wäre.

Es sollten keine Schrägstriche um den Mustertest angegeben werden. Kein regulärer Ausdruck wird angewendet, wenn der Attributwert fehlt, ein leerer String oder ungültig ist.

Einige der Eingabetypen, die das Musterattribut unterstützen, insbesondere die Eingabetypen {{HTMLElement("input/email", "email")}} und {{HTMLElement("input/url", "url")}}, haben erwartete Wertsyntaxe, die eingehalten werden müssen. Wenn das Musterattribut nicht vorhanden ist und der Wert nicht der erwarteten Syntax für diesen Wertetyp entspricht, wird die schreibgeschützte Eigenschaft [`typeMismatch`](/de/docs/Web/API/ValidityState/typeMismatch) des [`ValidityState`](/de/docs/Web/API/ValidityState)-Objekts auf true gesetzt.

### Einschränkungsvalidierung

Wenn der Wert des Eingabefeldes nicht der leere String ist und der Wert nicht dem gesamten regulären Ausdruck entspricht, wird durch die Eigenschaft [`patternMismatch`](/de/docs/Web/API/ValidityState/patternMismatch) des [`ValidityState`](/de/docs/Web/API/ValidityState)-Objekts auf `true` eine Einschränkungsverletzung gemeldet.

> [!NOTE]
> Wenn das `pattern` Attribut ohne Wert angegeben ist, ist sein Wert implizit der leere String. Daher wird **jeder nicht leere** Eingabewert zu einer Verletzung der Einschränkung führen.

### Bedenken zu Benutzerfreundlichkeit und Barrierefreiheit

Wenn Sie ein `pattern` angeben, stellen Sie eine Beschreibung des Musters in sichtbarem Text in der Nähe des Eingabefeldes bereit. Fügen Sie außerdem ein [`title`](/de/docs/Web/HTML/Reference/Elements/input#title) Attribut hinzu, das eine Beschreibung des Musters gibt. Benutzeragenten können die Titelinhalte während der Einschränkungsvalidierung verwenden, um dem Benutzer mitzuteilen, dass das Muster nicht übereinstimmt. Einige Browser zeigen ein Tooltip mit den Titelinhalten an, was die Benutzerfreundlichkeit für sehende Benutzer verbessert. Zusätzlich kann unterstützende Technologie den Titel vorlesen, wenn das Steuerelement den Fokus erhält, aber dies sollte nicht als Barrierefreiheitshilfe angesehen werden.

Nur auf das `title` Attribut für die visuelle Anzeige von Textinhalten zu vertrauen, wird nicht empfohlen, da viele Benutzeragenten das Attribut nicht auf barrierefreie Weise zugänglich machen. Obwohl einige Browser ein Tooltip anzeigen, wenn ein Element mit einem Titel überfahren wird, werden Tastatur- und Touch-Nutzer ausgeschlossen. Dies ist einer der mehreren Gründe, warum Sie Informationen bereitstellen müssen, die Benutzer darüber informieren, wie das Steuerelement ausgefüllt werden muss, um die Anforderungen zu erfüllen.

Da `title`s von einigen Browsern verwendet werden, um Fehlermeldungen zu erzeugen, und da Browser manchmal auch den Titel als Text beim Überfahren anzeigen, wird er daher in Nicht-Fehlersituationen angezeigt. Seien Sie deshalb vorsichtig, Titel nicht so zu formulieren, als ob ein Fehler aufgetreten ist.

## Beispiele

### Anpassen einer Telefonnummer

Unter der Annahme des folgenden:

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

Hier haben wir drei Abschnitte für eine nordamerikanische Telefonnummer mit einem impliziten Label, das alle drei Komponenten der Telefonnummer umfasst, wobei jeweils 3, 3 und 4 Ziffern erwartet werden, wie durch das `pattern` Attribut definiert.

Wenn die Werte zu lang oder zu kurz sind oder Zeichen enthalten, die keine Ziffern sind, wird `patternMismatch` auf true gesetzt. Wenn `true`, entspricht das Element den {{cssxref(":invalid")}} CSS-Pseudoklassen.

```css
input:invalid {
  border: red solid 3px;
}
```

{{EmbedLiveSample("Matching_a_phone_number", 300, 80)}}

Wenn wir stattdessen die Attribute [`minlength`](/de/docs/Web/HTML/Reference/Attributes/minlength) und [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength) verwendet hätten, hätten wir möglicherweise [`validityState.tooLong`](/de/docs/Web/API/ValidityState/tooLong) oder [`validityState.tooShort`](/de/docs/Web/API/ValidityState/tooShort) auf true gesehen.

### Ein Muster spezifizieren

Sie können das [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern) Attribut verwenden, um einen regulären Ausdruck zu spezifizieren, dem der eingegebene Wert entsprechen muss, um als gültig zu gelten (siehe [Validierung gegen einen regulären Ausdruck](/de/docs/Learn_web_development/Extensions/Forms/Form_validation#validating_against_a_regular_expression) für einen Crashkurs darüber, wie man reguläre Ausdrücke zur Validierung von Eingaben verwendet).

Das folgende Beispiel beschränkt den Wert auf 4-8 Zeichen und erfordert, dass dieser nur aus Kleinbuchstaben besteht.

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

Dies wird wie folgt dargestellt:

{{ EmbedLiveSample('Specifying_a_pattern', 600, 110) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation)
- [Formen: Datenformularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions)
