---
title: "HTML-Attribut: pattern"
short-title: pattern
slug: Web/HTML/Attributes/pattern
l10n:
  sourceCommit: 4d3605197ea5c6407aacca2a80cc27a398f04fc8
---

{{HTMLSidebar}}

Das **`pattern`**-Attribut gibt einen [regulären Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions) an, dem der Wert des Formularsteuerelements entsprechen sollte. Wenn ein nicht `null`-Wert nicht den durch das `pattern`-Attribut festgelegten Einschränkungen entspricht, wird die schreibgeschützte Eigenschaft [`patternMismatch`](/de/docs/Web/API/ValidityState/patternMismatch) des [`ValidityState`](/de/docs/Web/API/ValidityState)-Objekts wahr sein.

{{EmbedInteractiveExample("pages/tabbed/attribute-pattern.html", "tabbed-shorter")}}

## Übersicht

Das `pattern`-Attribut ist ein Attribut der Eingabetypen {{HTMLElement("input/text", "text")}}, {{HTMLElement("input/tel", "tel")}}, {{HTMLElement("input/email", "email")}}, {{HTMLElement("input/url", "url")}}, {{HTMLElement("input/password", "password")}} und {{HTMLElement("input/search", "search")}}.

Das `pattern`-Attribut, wenn es festgelegt ist, ist ein regulärer Ausdruck, dem der [`value`](/de/docs/Web/HTML/Element/input#value) der Eingabe entsprechen muss, damit der Wert die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) besteht. Es muss ein gültiger JavaScript-Regulärer Ausdruck sein, wie er vom {{jsxref("RegExp")}}-Typ verwendet wird und in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert ist.

Der reguläre Ausdruck des Musters wird mit dem [`'v'`-Flag](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#v-mode_character_class) kompiliert. Dies macht den regulären Ausdruck [unicode-bewusst](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) und ändert auch, wie Zeichengruppen interpretiert werden. Dies ermöglicht Schnittmengen- und Subtraktionsoperationen mit Zeichengruppen, und zusätzlich zu `]` und `\` müssen die folgenden Zeichen, wenn sie für wörtliche Zeichen stehen, mit einem `\`-Rückwärtsschrägstrich maskiert werden: `(`, `)`, `[`, `{`, `}`, `/`, `-`, `|`. Vor Mitte 2023 wurde stattdessen das `'u'`-Flag verwendet; Wenn Sie älteren Code aktualisieren, [erläutert dieses Dokument die Unterschiede](https://github.com/tc39/proposal-regexp-v-flag#how-is-the-v-flag-different-from-the-u-flag).

Der reguläre Ausdruck des Musters muss mit dem gesamten `value` der Eingabe übereinstimmen, anstatt mit einer Unterzeichenfolge übereinzustimmen - als ob ein `^(?:` am Anfang des Musters und ein `)$` am Ende impliziert wäre.

Es sollten keine Schrägstriche um den Mustertext angegeben werden. Kein regulärer Ausdruck wird angewendet, wenn der Attributwert fehlt, eine leere Zeichenfolge ist oder ungültig ist.

Einige der Eingabetypen, die das `pattern`-Attribut unterstützen, insbesondere die Eingabetypen {{HTMLElement("input/email", "email")}} und {{HTMLElement("input/url", "url")}}, haben erwartete Wertsyntaxen, die eingehalten werden müssen. Wenn das `pattern`-Attribut nicht vorhanden ist und der Wert nicht der erwarteten Syntax für diesen Werttyp entspricht, wird die schreibgeschützte Eigenschaft [`typeMismatch`](/de/docs/Web/API/ValidityState/typeMismatch) des [`ValidityState`](/de/docs/Web/API/ValidityState)-Objekts wahr sein.

### Einschränkungsvalidierung

Wenn der Wert der Eingabe nicht die leere Zeichenfolge ist und der Wert nicht dem gesamten regulären Ausdruck entspricht, wird eine Einschränkungsverletzung angezeigt, da die [`patternMismatch`](/de/docs/Web/API/ValidityState/patternMismatch)-Eigenschaft des [`ValidityState`](/de/docs/Web/API/ValidityState)-Objekts `true` ist.

> [!NOTE]
> Wenn das `pattern`-Attribut ohne Wert angegeben wird, ist sein Wert implizit die leere Zeichenfolge. Daher führt **jeder nicht leere** Eingabe`wert` zu einer Einschränkungsverletzung.

### Nutzbarkeits- und Zugänglichkeitsüberlegungen

Wenn ein `pattern` enthalten ist, geben Sie eine Beschreibung des Musters in sichtbarem Text in der Nähe der Steuerung an. Fügen Sie außerdem ein [`title`](/de/docs/Web/HTML/Element/input#title)-Attribut hinzu, das eine Beschreibung des Musters enthält. Benutzeragenten können die Titelinhalte während der Einschränkungsvalidierung verwenden, um dem Benutzer mitzuteilen, dass das Muster nicht übereinstimmt. Einige Browser zeigen ein Tooltip mit den Titelinhalten an, was die Nutzbarkeit für sehende Benutzer verbessert. Darüber hinaus kann unterstützende Technologie den Titel vorlesen, wenn die Steuerung den Fokus erhält, aber darauf sollte nicht ausschließlich für die Barrierefreiheit vertraut werden.

Es wird davon abgeraten, sich nur auf das `title`-Attribut für die visuelle Darstellung von Textinhalten zu verlassen, da viele Benutzeragenten das Attribut nicht auf zugängliche Weise verfügbar machen. Obwohl einige Browser ein Tooltip anzeigen, wenn ein Element mit einem Titel gehov. wird, werden somit Tastatur- und Touch-Benutzer ausgeschlossen. Dies ist einer der Gründe, warum Sie Informationen bereitstellen müssen, die Benutzern mitteilen, wie sie die Steuerung ausfüllen müssen, um den Anforderungen zu entsprechen.

Da einige Browser `title`s verwenden, um Fehlermeldungen zu generieren, während die Titel manchmal auch als Text beim Hover angezeigt werden, werden sie auch in Nicht-Fehlersituationen angezeigt. Daher sollte darauf geachtet werden, die Titel nicht so zu artikulieren, als sei ein Fehler aufgetreten.

## Beispiele

### Übereinstimmung einer Telefonnummer

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

Hier haben wir 3 Abschnitte für eine nordamerikanische Telefonnummer mit einem impliziten Label, das alle drei Komponenten der Telefonnummer umfasst, und erwarten jeweils 3-stellige, 3-stellige und 4-stellige Nummern, wie sie durch das `pattern`-Attribut auf jedem Abschnitt definiert sind.

Wenn die Werte zu lang oder zu kurz sind oder Zeichen enthalten, die keine Ziffern sind, wird `patternMismatch` wahr sein. Wenn `true`, entspricht das Element den CSS-Pseudoklassen {{cssxref(":invalid")}}.

```css
input:invalid {
  border: red solid 3px;
}
```

{{EmbedLiveSample("Matching_a_phone_number", 300, 80)}}

Wenn wir stattdessen die Attribute [`minlength`](/de/docs/Web/HTML/Attributes/minlength) und [`maxlength`](/de/docs/Web/HTML/Attributes/maxlength) verwendet hätten, könnten [`validityState.tooLong`](/de/docs/Web/API/ValidityState/tooLong) oder [`validityState.tooShort`](/de/docs/Web/API/ValidityState/tooShort) wahr sein.

### Ein Muster angeben

Sie können das [`pattern`](/de/docs/Web/HTML/Element/input#pattern)-Attribut verwenden, um einen regulären Ausdruck anzugeben, dem der eingegebene Wert entsprechen muss, um als gültig betrachtet zu werden (siehe [Validierung gegen einen regulären Ausdruck](/de/docs/Learn/Forms/Form_validation#validating_against_a_regular_expression) für einen Crashkurs zur Verwendung regulärer Ausdrücke zur Validierung von Eingaben).

Das folgende Beispiel schränkt den Wert auf 4–8 Zeichen ein und erfordert, dass er nur Kleinbuchstaben enthält.

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

- [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation)
- [Formulare: Datenformularvalidierung](/de/docs/Learn/Forms/Form_validation)
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions)
