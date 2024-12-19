---
title: "HTML-Attribut: pattern"
short-title: pattern
slug: Web/HTML/Attributes/pattern
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{HTMLSidebar}}

Das **`pattern`**-Attribut gibt einen [regulären Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions) an, den der Wert des Formularelements erfüllen sollte. Wenn ein nicht-`null`-Wert nicht den durch den `pattern`-Wert festgelegten Einschränkungen entspricht, ist die schreibgeschützte [`patternMismatch`](/de/docs/Web/API/ValidityState/patternMismatch)-Eigenschaft des [`ValidityState`](/de/docs/Web/API/ValidityState)-Objekts `true`.

{{EmbedInteractiveExample("pages/tabbed/attribute-pattern.html", "tabbed-shorter")}}

## Überblick

Das `pattern`-Attribut ist ein Attribut der Eingabetypen {{HTMLElement("input/text", "text")}}, {{HTMLElement("input/tel", "tel")}}, {{HTMLElement("input/email", "email")}}, {{HTMLElement("input/url", "url")}}, {{HTMLElement("input/password", "password")}} und {{HTMLElement("input/search", "search")}}.

Wenn das `pattern`-Attribut angegeben ist, handelt es sich um einen regulären Ausdruck, den der [`value`](/de/docs/Web/HTML/Element/input#value) der Eingabe erfüllen muss, um die [Constraint-Validierung](/de/docs/Web/HTML/Constraint_validation) zu bestehen. Es muss ein gültiger JavaScript-Regulärer Ausdruck sein, wie er vom {{jsxref("RegExp")}}-Typ verwendet wird und wie in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert ist.

Der reguläre Ausdruck des Patterns wird mit dem [`'v'`-Flag](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#v-mode_character_class) kompiliert. Dies macht den regulären Ausdruck [unicode-bewusst](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) und verändert auch die Interpretation von Zeichenklassen. Dies ermöglicht Schnitt- und Subtraktionsoperationen von Zeichenklassensets, und zusätzlich zu `]` und `\` müssen die folgenden Zeichen bei ihrer wörtlichen Darstellung mit einem `\` Backslash maskiert werden: `(`, `)`, `[`, `{`, `}`, `/`, `-`, `|`. Vor Mitte 2023 war stattdessen das `'u'`-Flag spezifiziert; Falls Sie älteren Code aktualisieren, [beschreibt dieses Dokument die Unterschiede](https://github.com/tc39/proposal-regexp-v-flag#how-is-the-v-flag-different-from-the-u-flag).

Der reguläre Ausdruck des Patterns muss mit dem gesamten `value` der Eingabe übereinstimmen, und nicht mit einem Teilstring - als ob ein `^(?:` am Anfang des Patterns und ein `)$` am Ende impliziert wären.

Es sollten keine Schrägstriche um den Text des Patterns angegeben werden. Kein regulärer Ausdruck wird angewendet, wenn der Attributwert fehlt, ein leerer String oder ungültig ist.

Einige der Eingabetypen, die das pattern-Attribut unterstützen, insbesondere die Eingabetypen {{HTMLElement("input/email", "email")}} und {{HTMLElement("input/url", "url")}}, haben erwartete Wertsyntaxen, die erfüllt werden müssen. Wenn das pattern-Attribut nicht vorhanden ist und der Wert nicht der erwarteten Syntax für diesen Wertetyp entspricht, ist die schreibgeschützte [`typeMismatch`](/de/docs/Web/API/ValidityState/typeMismatch)-Eigenschaft des [`ValidityState`](/de/docs/Web/API/ValidityState)-Objekts `true`.

### Constraint-Validierung

Wenn der Wert der Eingabe nicht der leere String ist und der Wert nicht mit dem gesamten regulären Ausdruck übereinstimmt, wird ein Verletzung des Constraints durch die `patternMismatch`-Eigenschaft des `ValidityState`-Objekts gemeldet, die `true` ist.

> [!NOTE]
> Wenn das `pattern`-Attribut ohne Wert angegeben ist, ist sein Wert implizit der leere String. Somit wird **jeder nicht-leere** Eingabewert zu einer Constraint-Verletzung führen.

### Nutzbarkeit und Barrierefreiheit

Wenn ein `pattern` enthalten ist, bieten Sie eine Beschreibung des Musters in sichtbarem Text in der Nähe der Steuerung an. Zusätzlich fügen Sie ein [`title`](/de/docs/Web/HTML/Element/input#title)-Attribut hinzu, das eine Beschreibung des Musters liefert. Benutzeragenten können den Inhalt des Titels während der Constraint-Validierung verwenden, um dem Benutzer mitzuteilen, dass das Muster nicht übereinstimmt. Einige Browser zeigen beim Titelinhalt ein Tooltip an, was die Benutzerfreundlichkeit für sehende Benutzer verbessert. Zusätzlich kann Technologie zur Unterstützung Behinderter den Titel vorlesen, wenn die Steuerung den Fokus erhält, aber darauf sollte nicht ausschließlich für die Barrierefreiheit vertraut werden.

Nur auf das `title`-Attribut für die visuelle Anzeige von Textinhalten zu vertrauen, wird nicht empfohlen, da viele Benutzeragenten das Attribut nicht in einer zugänglichen Weise präsentieren. Obwohl einige Browser ein Tooltip anzeigen, wenn ein Element mit einem Titel gehovt wird, bleiben Tastatur- und Nur-Touch-Benutzer außen vor. Dies ist einer der mehreren Gründe, warum Sie Informationen bereitstellen müssen, die Benutzer darüber informieren, wie sie die Steuerung ausfüllen sollen, um die Anforderungen zu erfüllen.

Während einige Browser `title`s verwenden, um Fehlermeldungen auszufüllen, wird manchmal der Titel als Text bei Hover angezeigt, und daher erscheint er in nicht-Fehlersituationen, daher achten Sie darauf, Titel nicht so zu formulieren, als ob ein Fehler aufgetreten wäre.

## Beispiele

### Eine Telefonnummer abgleichen

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

Hier haben wir 3 Abschnitte für eine nordamerikanische Telefonnummer mit einem impliziten Label, das alle drei Komponenten der Telefonnummer umfasst, und erwarten jeweils 3 Ziffern, 3 Ziffern und 4 Ziffern, wie sie durch das `pattern`-Attribut festgelegt sind.

Wenn die Werte zu lang oder zu kurz sind oder Zeichen enthalten, die keine Ziffern sind, ist das `patternMismatch` wahr. Wenn `true`, entspricht das Element den CSS-Pseudoklassen {{cssxref(":invalid")}}.

```css
input:invalid {
  border: red solid 3px;
}
```

{{EmbedLiveSample("Matching_a_phone_number", 300, 80)}}

Wenn wir stattdessen die Attribute [`minlength`](/de/docs/Web/HTML/Attributes/minlength) und [`maxlength`](/de/docs/Web/HTML/Attributes/maxlength) verwendet hätten, könnten wir sehen, dass [`validityState.tooLong`](/de/docs/Web/API/ValidityState/tooLong) oder [`validityState.tooShort`](/de/docs/Web/API/ValidityState/tooShort) wahr sind.

### Ein Muster angeben

Sie können das [`pattern`](/de/docs/Web/HTML/Element/input#pattern)-Attribut verwenden, um einen regulären Ausdruck anzugeben, den der eingegebene Wert erfüllen muss, um als gültig zu gelten (siehe [Validierung mit einem regulären Ausdruck](/de/docs/Learn_web_development/Extensions/Forms/Form_validation#validating_against_a_regular_expression) für einen kurzen Kurs zur Verwendung regulärer Ausdrücke zur Validierung von Eingaben).

Das folgende Beispiel beschränkt den Wert auf 4-8 Zeichen und erfordert, dass er nur aus Kleinbuchstaben besteht.

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

- [Constraint-Validierung](/de/docs/Web/HTML/Constraint_validation)
- [Formulare: Datenvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions)
