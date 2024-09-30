---
title: "HTML-Attribut: pattern"
short-title: pattern
slug: Web/HTML/Attributes/pattern
l10n:
  sourceCommit: 067a40e4ed27ea6e1f3b8bbfec15cd9dc3078f4c
---

{{HTMLSidebar}}

Das **`pattern`**-Attribut gibt einen [regulären Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions) an, den der Wert des Formularsteuerungselements erfüllen muss. Wenn ein nicht-`null` Wert nicht den durch den `pattern`-Wert festgelegten Einschränkungen entspricht, ist die schreibgeschützte Eigenschaft [`patternMismatch`](/de/docs/Web/API/ValidityState/patternMismatch) des [`ValidityState`](/de/docs/Web/API/ValidityState)-Objekts wahr.

{{EmbedInteractiveExample("pages/tabbed/attribute-pattern.html", "tabbed-shorter")}}

## Übersicht

Das `pattern`-Attribut ist ein Attribut der {{HTMLElement("input/text", "text")}}, {{HTMLElement("input/tel", "tel")}}, {{HTMLElement("input/email", "email")}}, {{HTMLElement("input/url", "url")}}, {{HTMLElement("input/password", "password")}} und {{HTMLElement("input/search", "search")}} Eingabetypen.

Das `pattern`-Attribut, wenn es angegeben ist, ist ein regulärer Ausdruck, den der [`value`](/de/docs/Web/HTML/Element/input#value) des Eingabefeldes erfüllen muss, um die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) zu bestehen. Es muss ein gültiger JavaScript-regulärer Ausdruck sein, wie er vom {{jsxref("RegExp")}}-Typ verwendet wird und in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert ist.

Der reguläre Ausdruck des Musters wird mit dem [`'v'`-Flag](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#v-mode_character_class) kompiliert. Dies macht den regulären Ausdruck [unicode-bewusst](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) und ändert auch die Art und Weise, wie Zeichenklassen interpretiert werden. Dies ermöglicht Schnitt- und Subtraktionsoperationen von Zeichenklassensätzen und zusätzlich zu `]` und `\` müssen die folgenden Zeichen mit einem `\` Backslash maskiert werden, wenn sie Literalzeichen darstellen: `(`, `)`, `[`, `{`, `}`, `/`, `-`, `|`. Vor Mitte 2023 wurde stattdessen das `'u'`-Flag angegeben; Wenn Sie älteren Code aktualisieren, [erläutert dieses Dokument die Unterschiede](https://github.com/tc39/proposal-regexp-v-flag#how-is-the-v-flag-different-from-the-u-flag).

Der reguläre Ausdruck des Musters muss den gesamten `value` des Eingabefeldes übereinstimmen, anstatt nur eine Teilzeichenkette zu übereinstimmen - als ob ein `^(?:` am Anfang des Musters und `)$` am Ende impliziert wäre.

Keine Schrägstriche sollten um den Mustertext angegeben werden. Kein regulärer Ausdruck wird angewendet, wenn der Attributwert fehlt, eine leere Zeichenkette oder ungültig ist.

Einige der Eingabetypen, die das Musterattribut unterstützen, insbesondere die {{HTMLElement("input/email", "email")}} und {{HTMLElement("input/url", "url")}} Eingabetypen, haben erwartete Wertesyntaxen, die übereinstimmen müssen. Wenn das Musterattribut nicht vorhanden ist und der Wert nicht der erwarteten Syntax für diesen Wertetyp entspricht, ist die schreibgeschützte Eigenschaft [`typeMismatch`](/de/docs/Web/API/ValidityState/typeMismatch) des [`ValidityState`](/de/docs/Web/API/ValidityState)-Objekts wahr.

### Einschränkungsvalidierung

Wenn der Wert des Eingabefeldes nicht die leere Zeichenkette ist und der Wert nicht den gesamten regulären Ausdruck erfüllt, wird ein Verstoß gegen die Einschränkung gemeldet, indem die Eigenschaft [`patternMismatch`](/de/docs/Web/API/ValidityState/patternMismatch) des [`ValidityState`](/de/docs/Web/API/ValidityState)-Objekts wahr ist.

> [!NOTE]
> Wenn das `pattern`-Attribut ohne Wert angegeben ist, ist sein Wert implizit die leere Zeichenkette. Daher führt **jeglicher nicht-leerer** Eingabewert zu einem Verstoß gegen die Einschränkung.

### Benutzerfreundlichkeit und Zugänglichkeitsüberlegungen

Beim Einfügen eines `pattern`-Attributs sollten Sie eine Beschreibung des Musters in sichtbarem Text in der Nähe der Steuerung bereitstellen. Außerdem sollten Sie ein [`title`](/de/docs/Web/HTML/Element/input#title)-Attribut hinzufügen, das eine Beschreibung des Musters gibt. Benutzeragenten können die Titelinhalte während der Einschränkungsvalidierung verwenden, um dem Benutzer mitzuteilen, dass das Muster nicht übereinstimmt. Einige Browser zeigen ein Tooltip mit den Titelinhalten an, was die Benutzerfreundlichkeit für sehende Benutzer verbessert. Außerdem kann Assistenztechnologie den Titel vorlesen, wenn die Steuerung den Fokus erhält, aber dies sollte nicht als Zugänglichkeitsmerkmal angesehen werden.

Nur auf das `title`-Attribut für die visuelle Anzeige von Textinhalten zu vertrauen, wird nicht empfohlen, da viele Benutzeragenten das Attribut nicht auf zugängliche Weise exponieren. Obwohl einige Browser ein Tooltip anzeigen, wenn ein Element mit einem `title`-Attribut fokussiert wird, lässt das Tastatur- und Touch-Benutzer außen vor. Dies ist einer von mehreren Gründen, warum Informationen, die zeigen, wie man die Steuerung so ausfüllt, dass sie die Anforderungen erfüllt, integriert sein müssen.

Da `title`s von einigen Browsern für die Fehlermeldung verwendet werden, sollten Sie vorsichtig sein, sie nicht so zu formulieren, als ob ein Fehler aufgetreten wäre, da Browser den Titel manchmal auch als Text beim Überfahren anzeigen, er also auch in Nicht-Fehlersituationen erscheint.

## Beispiele

### Ein Telefonmuster übereinstimmen

Gegeben sei Folgendes:

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

Hier haben wir 3 Abschnitte für eine nordamerikanische Telefonnummer mit einer impliziten Bezeichnung, die alle drei Komponenten der Telefonnummer umschließt, wobei jeweils 3 Ziffern, 3 Ziffern und 4 Ziffern erwartet werden, wie es durch das auf jedem gesetzten `pattern`-Attribut definiert ist.

Wenn die Werte zu lang oder zu kurz sind oder Zeichen enthalten, die keine Ziffern sind, wird das `patternMismatch` wahr sein. Wenn `true`, entspricht das Element den {{cssxref(":invalid")}} CSS-Pseudoklassen.

```css
input:invalid {
  border: red solid 3px;
}
```

{{EmbedLiveSample("Matching_a_phone_number", 300, 80)}}

Wenn wir stattdessen die Attribute [`minlength`](/de/docs/Web/HTML/Attributes/minlength) und [`maxlength`](/de/docs/Web/HTML/Attributes/maxlength) verwendet hätten, könnten wir gesehen haben, dass [`validityState.tooLong`](/de/docs/Web/API/ValidityState/tooLong) oder [`validityState.tooShort`](/de/docs/Web/API/ValidityState/tooShort) wahr sind.

### Ein Muster angeben

Sie können das [`pattern`](/de/docs/Web/HTML/Element/input#pattern)-Attribut verwenden, um einen regulären Ausdruck anzugeben, dem der eingegebene Wert entsprechen muss, um als gültig angesehen zu werden (sehen Sie sich [Validierung mit einem regulären Ausdruck](/de/docs/Learn/Forms/Form_validation#validating_against_a_regular_expression) an, um einen einfachen Crashkurs zur Verwendung regulärer Ausdrücke zur Validierung von Eingaben zu erhalten).

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

Dies wird wie folgt angezeigt:

{{ EmbedLiveSample('Specifying_a_pattern', 600, 110) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation)
- [Formulare: Datenformularvalidierung](/de/docs/Learn/Forms/Form_validation)
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions)
