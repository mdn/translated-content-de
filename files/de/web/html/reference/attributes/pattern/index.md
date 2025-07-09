---
title: "HTML-Attribut: pattern"
short-title: pattern
slug: Web/HTML/Reference/Attributes/pattern
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Das **`pattern`**-Attribut gibt einen [regulären Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions) an, den der Wert des Formularelements erfüllen muss. Wenn ein nicht-`null`-Wert nicht den durch den `pattern`-Wert festgelegten Einschränkungen entspricht, wird die schreibgeschützte [`patternMismatch`](/de/docs/Web/API/ValidityState/patternMismatch)-Eigenschaft des [`ValidityState`](/de/docs/Web/API/ValidityState)-Objekts auf `true` gesetzt.

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

Das `pattern`-Attribut ist ein Attribut der {{HTMLElement("input/text", "text")}}, {{HTMLElement("input/tel", "tel")}}, {{HTMLElement("input/email", "email")}}, {{HTMLElement("input/url", "url")}}, {{HTMLElement("input/password", "password")}}, und {{HTMLElement("input/search", "search")}} Eingabetypen.

Das `pattern`-Attribut, falls angegeben, ist ein regulärer Ausdruck, den der [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) des Eingabefelds erfüllen muss, damit der Wert die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) besteht. Es muss ein gültiger JavaScript-Regulärer Ausdruck sein, wie er vom {{jsxref("RegExp")}}-Typ verwendet wird und wie es in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert ist.

Der reguläre Ausdruck des `pattern` wird mit dem [`'v'`-Flag](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#v-mode_character_class) kompiliert. Dadurch wird der reguläre Ausdruck [unicode-bewusst](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) und ändert auch die Interpretation der Zeichenklassen. Dies ermöglicht Schnittmengen- und Subtraktionsoperationen von Zeichenklassen, und zusätzlich zu `]` und `\` müssen die folgenden Zeichen mit einem `\` Backslash maskiert werden, wenn sie als literale Zeichen gelten sollen: `(`, `)`, `[`, `{`, `}`, `/`, `-`, `|`. Vor Mitte 2023 wurde stattdessen das `'u'`-Flag verwendet; Wenn Sie älteren Code aktualisieren, lesen Sie den [`unicodeSets`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets)-Referenz.

Der reguläre Ausdruck des `pattern` muss den gesamten `value` der Eingabe abgleichen, anstatt ein Teilstring - als ob ein `^(?:` am Anfang des Musters und ein `)$` am Ende impliziert wäre.

Es dürfen keine Schrägstriche um den Mustertext angegeben werden. Es wird kein regulärer Ausdruck angewendet, wenn der Attributwert fehlt, ein leerer String oder ungültig ist.

Einige der Eingabetypen, die das Pattern-Attribut unterstützen, insbesondere die {{HTMLElement("input/email", "email")}} und {{HTMLElement("input/url", "url")}} Eingabetypen, haben erwartete Werte-Syntaxen, die abgeglichen werden müssen. Wenn das Pattern-Attribut nicht vorhanden ist und der Wert nicht der erwarteten Syntax für diesen Werttyp entspricht, wird die schreibgeschützte [`typeMismatch`](/de/docs/Web/API/ValidityState/typeMismatch)-Eigenschaft des [`ValidityState`](/de/docs/Web/API/ValidityState)-Objekts auf `true` gesetzt.

### Einschränkungsvalidierung

Wenn der Wert der Eingabe nicht der leere String ist und der Wert den gesamten regulären Ausdruck nicht erfüllt, gibt es eine Einschränkungsverletzung, die durch die [`patternMismatch`](/de/docs/Web/API/ValidityState/patternMismatch)-Eigenschaft des [`ValidityState`](/de/docs/Web/API/ValidityState)-Objekts, die `true` ist, angezeigt wird.

> [!NOTE]
> Wenn das `pattern`-Attribut ohne Wert angegeben wird, ist sein Wert implizit der leere String. Daher wird **jeder nicht-leere** Eingabewert zu einer Einschränkungsverletzung führen.

### Verwendbarkeits- und Barrierefreiheitserwägungen

Beim Einfügen eines `pattern` stellen Sie eine Beschreibung des Mustertextes in sichtbarem Text in der Nähe des Steuerelements bereit. Zusätzlich fügen Sie ein [`title`](/de/docs/Web/HTML/Reference/Elements/input#title)-Attribut hinzu, das eine Beschreibung des Musters gibt. Benutzeragenten können den Inhalt des Titels während der Einschränkungsvalidierung verwenden, um dem Benutzer mitzuteilen, dass das Muster nicht übereinstimmt. Einige Browser zeigen ein Tooltip mit Titeln an, was die Benutzbarkeit für sehende Benutzer verbessert. Zusätzlich kann unterstützende Technologie den Titel laut vorlesen, wenn das Steuerelement den Fokus erhält, aber dies sollte nicht als barrierefreie Lösung angesehen werden.

Das alleinige Verlassen auf das `title`-Attribut für die visuelle Darstellung von Textinhalten wird nicht empfohlen, da viele Benutzeragenten das Attribut nicht auf barrierefreie Weise verfügbar machen. Obwohl einige Browser ein Tooltip anzeigen, wenn ein Element mit einem Titel angefahren wird, schließt dies Benutzer aus, die nur eine Tastatur oder nur Berührung verwenden. Dies ist einer der mehreren Gründe, warum Sie Informationen bereitstellen müssen, die die Benutzer darüber informieren, wie sie das Steuerelement ausfüllen sollen, um die Anforderungen zu erfüllen.

Während `title`s von einigen Browsern verwendet werden, um Fehlermeldungen zu erstellen, da Browser manchmal auch den Titel als Text beim Hover anzeigen, erscheint er daher in Nicht-Fehler-Situationen, also seien Sie vorsichtig, Titel nicht so zu formulieren, als ob ein Fehler aufgetreten ist.

## Beispiele

### Abgleich einer Telefonnummer

Angenommen folgendes:

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

Hier haben wir 3 Abschnitte für eine nordamerikanische Telefonnummer mit einem impliziten Etikett, das alle drei Komponenten der Telefonnummer umfasst, wobei jeweils 3 Ziffern, 3 Ziffern und 4 Ziffern erwartet werden, wie durch das `pattern`-Attribut auf jedem definiert.

Sind die Werte zu lang oder zu kurz, oder enthalten sie Zeichen, die keine Ziffern sind, wird `patternMismatch` auf `true` gesetzt. Ist `true`, stimmt das Element mit den {{cssxref(":invalid")}} CSS-Pseudoklassen überein.

```css
input:invalid {
  border: red solid 3px;
}
```

{{EmbedLiveSample("Matching_a_phone_number", 300, 80)}}

Wenn wir stattdessen die Attribute [`minlength`](/de/docs/Web/HTML/Reference/Attributes/minlength) und [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength) verwendet hätten, könnten wir gesehen haben, wie [`validityState.tooLong`](/de/docs/Web/API/ValidityState/tooLong) oder [`validityState.tooShort`](/de/docs/Web/API/ValidityState/tooShort) auf `true` gesetzt werden.

### Ein Muster angeben

Sie können das [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern)-Attribut verwenden, um einen regulären Ausdruck anzugeben, der mit dem eingegebenen Wert übereinstimmen muss, um als gültig angesehen zu werden (siehe [Validieren mit einem regulären Ausdruck](/de/docs/Learn_web_development/Extensions/Forms/Form_validation#validating_against_a_regular_expression) für einen Schnellkurs zur Verwendung regulärer Ausdrücke zur Validierung von Eingaben).

Das folgende Beispiel beschränkt den Wert auf 4-8 Zeichen und verlangt, dass nur Kleinbuchstaben enthalten sind.

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

Dies wird folgendermaßen gerendert:

{{EmbedLiveSample('Specifying_a_pattern', 600, 110)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation)
- [Formulare: Validierung von Formulardaten](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions)
