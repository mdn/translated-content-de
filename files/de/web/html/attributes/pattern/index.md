---
title: "HTML-Attribut: pattern"
short-title: pattern
slug: Web/HTML/Attributes/pattern
l10n:
  sourceCommit: 067a40e4ed27ea6e1f3b8bbfec15cd9dc3078f4c
---

{{HTMLSidebar}}

Das **`pattern`**-Attribut gibt einen [regulären Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions) an, dem der Wert des Formularsteuerelements entsprechen sollte. Wenn ein nicht `null`-Wert nicht den durch den `pattern`-Wert festgelegten Einschränkungen entspricht, ist die schreibgeschützte {{domxref('ValidityState')}}-Eigenschaft {{domxref('ValidityState.patternMismatch','patternMismatch')}} des Objekts `true`.

{{EmbedInteractiveExample("pages/tabbed/attribute-pattern.html", "tabbed-shorter")}}

## Übersicht

Das `pattern`-Attribut ist ein Attribut der Eingabetypen {{HTMLElement("input/text", "text")}}, {{HTMLElement("input/tel", "tel")}}, {{HTMLElement("input/email", "email")}}, {{HTMLElement("input/url", "url")}}, {{HTMLElement("input/password", "password")}} und {{HTMLElement("input/search", "search")}}.

Das `pattern`-Attribut, wenn es festgelegt ist, ist ein regulärer Ausdruck, mit dem der [`value`](/de/docs/Web/HTML/Element/input#value) der Eingabe für die Wertüberprüfung den [Einschränkungen](/de/docs/Web/HTML/Constraint_validation) entsprechen muss. Es muss ein gültiger JavaScript-Regulärer Ausdruck sein, wie er vom {{jsxref("RegExp")}}-Typ verwendet wird und in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert ist.

Der reguläre Ausdruck des Musters wird mit dem [`'v'`-Flag](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#v-mode_character_class) kompiliert. Dies macht den regulären Ausdruck [unicode-bewusst](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) und ändert auch die Interpretation von Zeichenklassen. Dies ermöglicht Schnittmengen- und Subtraktionsoperationen bei Zeichenklassenmengen, und zusätzlich zu `]` und `\` müssen die folgenden Zeichen mithilfe eines `\`-Backslashs maskiert werden, wenn sie Literalzeichen darstellen: `(`, `)`, `[`, `{`, `}`, `/`, `-`, `|`. Vor Mitte 2023 war stattdessen das `'u'`-Flag angegeben; Wenn Sie älteren Code aktualisieren, [beschreibt dieses Dokument die Unterschiede](https://github.com/tc39/proposal-regexp-v-flag#how-is-the-v-flag-different-from-the-u-flag).

Der reguläre Ausdruck des Musters muss dem gesamten `value` der Eingabe entsprechen und nicht nur einem Teilstring – als wäre ein `^(?:` am Anfang des Musters und ein `)$` am Ende impliziert.

Um die Mustertext sollte kein Schrägstrich angegeben werden. Kein regulärer Ausdruck wird angewendet, wenn der Attributwert fehlt, ein leerer String oder ungültig ist.

Einige der Eingabetypen, die das Muster-Attribut unterstützen, insbesondere die Eingabetypen {{HTMLElement("input/email", "email")}} und {{HTMLElement("input/url", "url")}}, haben erwartete Wertsyntaxe, die übereinstimmen müssen. Wenn das Muster-Attribut nicht vorhanden ist und der Wert nicht der erwarteten Syntax für diesen Werttyp entspricht, wird die schreibgeschützte {{domxref('ValidityState')}}-Eigenschaft {{domxref('ValidityState.typeMismatch','typeMismatch')}} des Objekts `true`.

### Einschränkungsvalidierung

Wenn der Wert der Eingabe nicht der leere String ist und der Wert nicht dem gesamten regulären Ausdruck entspricht, wird eine Einschränkungsverletzung gemeldet, indem die {{domxref('ValidityState')}}-Eigenschaft {{domxref('ValidityState.patternMismatch','patternMismatch')}} des Objekts `true` ist.

> [!NOTE]
> Wenn das `pattern`-Attribut ohne Wert angegeben wird, ist sein Wert implizit der leere String. Daher wird **jeder nicht-leere** Eingabe-Wert zu einer Einschränkungsverletzung führen.

### Usability- und Zugänglichkeitsüberlegungen

Wenn Sie ein `pattern` einschließen, geben Sie eine Beschreibung des Musters in sichtbarem Text in der Nähe des Steuerelements an. Fügen Sie zusätzlich ein [`title`](/de/docs/Web/HTML/Element/input#title)-Attribut hinzu, das eine Beschreibung des Musters gibt. Benutzeragenten können die Titelinhalte während der Einschränkungsvalidierung verwenden, um dem Benutzer mitzuteilen, dass das Muster nicht übereinstimmt. Einige Browser zeigen einen Tooltip mit Titelinhalten an, was die Benutzerfreundlichkeit für sehende Benutzer verbessert. Darüber hinaus kann assistive Technologie den Titel vorlesen, wenn das Steuerelement den Fokus erhält, aber darauf sollte nicht allein für die Zugänglichkeit vertraut werden.

Sich nur auf das `title`-Attribut für die visuelle Anzeige von Textinhalten zu verlassen, ist nicht empfehlenswert, da viele Benutzeragenten das Attribut nicht auf zugängliche Weise ausgeben. Obwohl einige Browser einen Tooltip anzeigen, wenn ein Element mit einem Titel überfahren wird, werden dabei Tastatur- und Touch-Benutzer ausgelassen. Dies ist einer von mehreren Gründen, warum Sie Informationen einschließen müssen, die den Benutzern erklären, wie das Steuerelement auszufüllen ist, um die Anforderungen zu erfüllen.

Während `title`s von einigen Browsern verwendet werden, um Fehlermeldungen zu füllen, können sie, weil Browser manchmal auch den Titel als Text beim Überfahren anzeigen, daher in Nicht-Fehlersituationen angezeigt werden. Seien Sie daher vorsichtig, die Titel nicht so zu formulieren, als ob ein Fehler aufgetreten ist.

## Beispiele

### Übereinstimmung einer Telefonnummer

Angenommen, folgendes HTML:

```html
<p>
  <label>
    Geben Sie Ihre Telefonnummer im Format (123) - 456 - 7890 ein (<input
      name="tel1"
      type="tel"
      pattern="[0-9]{3}"
      placeholder="###"
      aria-label="3-stelliger Vorwahlbereich"
      size="2" />) -
    <input
      name="tel2"
      type="tel"
      pattern="[0-9]{3}"
      placeholder="###"
      aria-label="3-stelliges Präfix"
      size="2" />
    -
    <input
      name="tel3"
      type="tel"
      pattern="[0-9]{4}"
      placeholder="####"
      aria-label="4-stellige Nummer"
      size="3" />
  </label>
</p>
```

Hier haben wir 3 Bereiche für eine nordamerikanische Telefonnummer mit einem impliziten Label, das alle drei Komponenten der Telefonnummer umfasst, und erwarten 3 Ziffern, 3 Ziffern und 4 Ziffern jeweils, wie durch das `pattern`-Attribut auf jedem festgelegt.

Wenn die Werte zu lang oder zu kurz sind oder Zeichen enthalten, die keine Ziffern sind, wird das `patternMismatch` `true` sein. Wenn `true`, entspricht das Element den {{cssxref(":invalid")}} CSS-Pseudoklassen.

```css
input:invalid {
  border: red solid 3px;
}
```

{{EmbedLiveSample("Matching_a_phone_number", 300, 80)}}

Wenn wir stattdessen die [`minlength`](/de/docs/Web/HTML/Attributes/minlength) und [`maxlength`](/de/docs/Web/HTML/Attributes/maxlength)-Attribute verwendet hätten, könnten wir {{domxref('validityState.tooLong')}} oder {{domxref('validityState.tooShort')}} haben, die `true` sind.

### Spezifizierung eines Musters

Sie können das [`pattern`](/de/docs/Web/HTML/Element/input#pattern)-Attribut verwenden, um einen regulären Ausdruck anzugeben, mit dem der eingegebene Wert übereinstimmen muss, um als gültig angesehen zu werden (siehe [Validierung gegen einen regulären Ausdruck](/de/docs/Learn/Forms/Form_validation#validating_against_a_regular_expression) für einen kurzen Überblick über die Verwendung regulärer Ausdrücke zur Validierung von Eingaben).

Das folgende Beispiel beschränkt den Wert auf 4-8 Zeichen und verlangt, dass er nur Kleinbuchstaben enthält.

```html
<form>
  <div>
    <label for="uname">Wählen Sie einen Benutzernamen: </label>
    <input
      type="text"
      id="uname"
      name="name"
      required
      size="45"
      pattern="[a-z]{4,8}"
      title="4 bis 8 Kleinbuchstaben" />
    <span class="validity"></span>
    <p>Benutzernamen müssen aus Kleinbuchstaben bestehen und 4-8 Zeichen lang sein.</p>
  </div>
  <div>
    <button>Absenden</button>
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
- [Formulare: Datenformular-Validierung](/de/docs/Learn/Forms/Form_validation)
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions)
