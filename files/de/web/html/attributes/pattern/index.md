---
title: "HTML-Attribut: pattern"
short-title: pattern
slug: Web/HTML/Attributes/pattern
l10n:
  sourceCommit: 067a40e4ed27ea6e1f3b8bbfec15cd9dc3078f4c
---

{{HTMLSidebar}}

Das **`pattern`**-Attribut gibt einen [regulären Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions) an, den der Wert des Formularsteuerelements erfüllen muss. Wenn ein Wert, der nicht `null` ist, nicht den vom `pattern`-Wert festgelegten Einschränkungen entspricht, ist die schreibgeschützte [`patternMismatch`](/de/docs/Web/API/ValidityState/patternMismatch)-Eigenschaft des [`ValidityState`](/de/docs/Web/API/ValidityState)-Objekts auf `true` gesetzt.

{{EmbedInteractiveExample("pages/tabbed/attribute-pattern.html", "tabbed-shorter")}}

## Übersicht

Das `pattern`-Attribut ist ein Attribut der Eingabetypen {{HTMLElement("input/text", "text")}}, {{HTMLElement("input/tel", "tel")}}, {{HTMLElement("input/email", "email")}}, {{HTMLElement("input/url", "url")}}, {{HTMLElement("input/password", "password")}} und {{HTMLElement("input/search", "search")}}.

Das `pattern`-Attribut, wenn es angegeben ist, ist ein regulärer Ausdruck, den der [`value`](/de/docs/Web/HTML/Element/input#value) der Eingabe erfüllen muss, damit der Wert die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) besteht. Es muss ein gültiger JavaScript-regulärer Ausdruck sein, wie er vom {{jsxref("RegExp")}}-Typ verwendet wird, und wie in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert.

Der reguläre Ausdruck des Musters wird mit dem [`'v'`-Flag](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#v-mode_character_class) kompiliert. Dies macht den regulären Ausdruck [unicode-bewusst](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) und verändert auch die Interpretation von Zeichenklassen. Dies erlaubt Mengen- und Subtraktionsoperationen innerhalb von Zeichenklassen, und zusätzlich zu `]` und `\` müssen die folgenden Zeichen mit einem `\`-Backslash maskiert werden, wenn sie als literale Zeichen dargestellt werden: `(`, `)`, `[`, `{`, `}`, `/`, `-`, `|`. Vor Mitte 2023 wurde das `'u'`-Flag verwendet; Wenn Sie älteren Code aktualisieren, [erläutert dieses Dokument die Unterschiede](https://github.com/tc39/proposal-regexp-v-flag#how-is-the-v-flag-different-from-the-u-flag).

Der reguläre Ausdruck des Musters muss den gesamten `value` der Eingabe erfüllen und darf nicht nur eine Teilzeichenfolge abgleichen - als ob ein `^(?:` am Anfang des Musters und ein `)$` am Ende impliziert wäre.

Es sollten keine Schrägstriche um den Mustertext angegeben werden. Es wird kein regulärer Ausdruck angewendet, wenn der Attributwert fehlt, eine leere Zeichenkette ist oder ungültig ist.

Einige der Eingabetypen, die das Musterattribut unterstützen, insbesondere die {{HTMLElement("input/email", "email")}}- und {{HTMLElement("input/url", "url")}}-Eingabetypen, haben erwartete Wertesyntaxen, die erfüllt werden müssen. Wenn das Musterattribut nicht vorhanden ist und der Wert nicht mit der erwarteten Syntax für diesen Wertetyp übereinstimmt, ist die schreibgeschützte [`typeMismatch`](/de/docs/Web/API/ValidityState/typeMismatch)-Eigenschaft des [`ValidityState`](/de/docs/Web/API/ValidityState)-Objekts auf `true` gesetzt.

### Einschränkungsvalidierung

Wenn der Wert der Eingabe nicht die leere Zeichenfolge ist und der Wert nicht den gesamten regulären Ausdruck erfüllt, wird eine Einschränkungsverletzung gemeldet, indem die [`patternMismatch`](/de/docs/Web/API/ValidityState/patternMismatch)-Eigenschaft des [`ValidityState`](/de/docs/Web/API/ValidityState)-Objekts auf `true` gesetzt ist.

> [!NOTE]
> Wenn das `pattern`-Attribut ohne Wert angegeben wird, ist sein Wert implizit die leere Zeichenfolge. Daher führt **jeder nicht-leere** Eingabewert zu einer Einschränkungsverletzung.

### Benutzerfreundlichkeit und Zugänglichkeitsüberlegungen

Wenn ein `pattern` einbezogen wird, geben Sie eine Beschreibung des Musters in sichtbarem Text in der Nähe des Steuerelements an. Fügen Sie außerdem ein [`title`](/de/docs/Web/HTML/Element/input#title)-Attribut hinzu, das eine Beschreibung des Musters gibt. Benutzeragenten können die Titelinhalte während der Einschränkungsvalidierung verwenden, um dem Benutzer mitzuteilen, dass das Muster nicht erfüllt ist. Einige Browser zeigen ein Tooltip mit Titelinhalten an, was die Benutzerfreundlichkeit für sehende Benutzer verbessert. Darüber hinaus kann unterstützende Technologie den Titel laut vorlesen, wenn das Steuerelement den Fokus erlangt, aber darauf sollte für Barrierefreiheit nicht alleine vertraut werden.

Es wird davon abgeraten, sich nur auf das `title`-Attribut für die visuelle Anzeige von Textinhalten zu verlassen, da viele Benutzeragenten das Attribut nicht auf zugängliche Weise bereitstellen. Obwohl einige Browser ein Tooltip anzeigen, wenn ein Element mit einem Title gehovt wird, werden Tastatur- und Touch-only-Benutzer ausgelassen. Dies ist einer der mehreren Gründe, warum Sie Informationen bereitstellen müssen, die Benutzer informieren, wie sie das Steuerelement ausfüllen, um die Anforderungen zu erfüllen.

Obwohl `title`s von einigen Browsern verwendet werden, um Fehlermeldungen zu füllen, da Browser manchmal auch den Titel als Text beim Hover anzeigen, zeigt er sich daher in nicht-fehlerhaften Situationen, also seien Sie vorsichtig, Titel nicht so zu formulieren, als ob ein Fehler aufgetreten ist.

## Beispiele

### Telefonnummern abgleichen

Gegeben folgendes:

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

Hier haben wir 3 Abschnitte für eine nordamerikanische Telefonnummer mit einem impliziten Label, das alle drei Komponenten der Telefonnummer umfasst, die jeweils 3-stellige, 3-stellige und 4-stellige Nummern erwarten, wie durch das `pattern`-Attribut auf jeder definiert.

Wenn die Werte zu lang oder zu kurz sind oder Zeichen enthalten, die keine Ziffern sind, wird `patternMismatch` `true` sein. Wenn `true`, entspricht das Element den {{cssxref(":invalid")}} CSS-Pseudoklassen.

```css
input:invalid {
  border: red solid 3px;
}
```

{{EmbedLiveSample("Matching_a_phone_number", 300, 80)}}

Hätten wir stattdessen die Attribute [`minlength`](/de/docs/Web/HTML/Attributes/minlength) und [`maxlength`](/de/docs/Web/HTML/Attributes/maxlength) verwendet, hätten wir möglicherweise [`validityState.tooLong`](/de/docs/Web/API/ValidityState/tooLong) oder [`validityState.tooShort`](/de/docs/Web/API/ValidityState/tooShort), die auf `true` gesetzt sind, gesehen.

### Ein Muster spezifizieren

Sie können das [`pattern`](/de/docs/Web/HTML/Element/input#pattern)-Attribut verwenden, um einen regulären Ausdruck festzulegen, den der eingegebene Wert erfüllen muss, um als gültig betrachtet zu werden (siehe [Validierung gegen einen regulären Ausdruck](/de/docs/Learn/Forms/Form_validation#validating_against_a_regular_expression) für einen einfachen Crashkurs über die Verwendung regulärer Ausdrücke zur Validierung von Eingaben).

Das unten stehende Beispiel beschränkt den Wert auf 4-8 Zeichen und verlangt, dass er nur Kleinbuchstaben enthält.

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

{{ EmbedLiveSample('Specifying_a_pattern', 600, 110) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation)
- [Formulare: Datenformularvalidierung](/de/docs/Learn/Forms/Form_validation)
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions)
