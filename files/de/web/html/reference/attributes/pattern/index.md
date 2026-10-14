---
title: HTML-Attribut `pattern`
short-title: pattern
slug: Web/HTML/Reference/Attributes/pattern
l10n:
  sourceCommit: 46afd57950146568819d0bf98175a2ffdbe079d7
---

Das Attribut **`pattern`** gibt einen [regulären Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions) an, mit dem der Wert des Formularelements übereinstimmen muss. Wenn ein Wert ungleich `null` die durch `pattern` festgelegten Bedingungen nicht erfüllt, ist die schreibgeschützte Eigenschaft [`patternMismatch`](/de/docs/Web/API/ValidityState/patternMismatch) des [`ValidityState`](/de/docs/Web/API/ValidityState)-Objekts `true`.

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

Das Attribut `pattern` kann für die Input-Typen {{HTMLElement("input/text", "text")}}, {{HTMLElement("input/tel", "tel")}}, {{HTMLElement("input/email", "email")}}, {{HTMLElement("input/url", "url")}}, {{HTMLElement("input/password", "password")}} und {{HTMLElement("input/search", "search")}} verwendet werden.

Wenn das Attribut `pattern` angegeben ist, enthält es einen regulären Ausdruck, mit dem der [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) des Eingabefelds übereinstimmen muss, damit der Wert die [Gültigkeitsprüfung](/de/docs/Web/HTML/Guides/Constraint_validation) besteht. Der Ausdruck muss ein gültiger regulärer JavaScript-Ausdruck sein, wie er vom Typ {{jsxref("RegExp")}} verwendet und in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) beschrieben wird.

Der reguläre Ausdruck des Musters wird mit dem [Flag `'v'`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#v-mode_character_class) kompiliert. Dadurch wird der reguläre Ausdruck [Unicode-fähig](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode); außerdem ändert sich die Interpretation von Zeichenklassen. Das ermöglicht Schnittmengen- und Differenzoperationen mit Zeichenklassen. Zusätzlich zu `]` und `\` müssen die folgenden Zeichen mit einem Backslash `\` maskiert werden, wenn sie wörtliche Zeichen darstellen: `(`, `)`, `[`, `{`, `}`, `/`, `-`, `|`. Vor Mitte 2023 war stattdessen das Flag `'u'` vorgesehen. Wenn Sie älteren Code aktualisieren, lesen Sie die Referenz zu [`unicodeSets`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets).

Der reguläre Ausdruck des Musters muss mit dem gesamten `value` des Eingabefelds übereinstimmen, nicht nur mit einer Teilzeichenfolge – so, als stünde am Anfang des Musters implizit `^(?:` und am Ende `)$`.

Der Mustertext darf nicht von Schrägstrichen umgeben sein. Wenn das Attribut fehlt oder sein Wert eine leere Zeichenfolge oder ungültig ist, wird kein regulärer Ausdruck angewendet.

Einige der Input-Typen, die das Attribut `pattern` unterstützen, insbesondere {{HTMLElement("input/email", "email")}} und {{HTMLElement("input/url", "url")}}, erwarten eine bestimmte Syntax für ihren Wert. Wenn das Attribut `pattern` fehlt und der Wert nicht der erwarteten Syntax des jeweiligen Werttyps entspricht, ist die schreibgeschützte Eigenschaft [`typeMismatch`](/de/docs/Web/API/ValidityState/typeMismatch) des [`ValidityState`](/de/docs/Web/API/ValidityState)-Objekts `true`.

### Gültigkeitsprüfung

Wenn der Wert des Eingabefelds keine leere Zeichenfolge ist und nicht mit dem gesamten regulären Ausdruck übereinstimmt, liegt eine Verletzung der Gültigkeitsbedingungen vor. Dies wird dadurch angezeigt, dass die Eigenschaft [`patternMismatch`](/de/docs/Web/API/ValidityState/patternMismatch) des [`ValidityState`](/de/docs/Web/API/ValidityState)-Objekts `true` ist.

> [!NOTE]
> Wenn das Attribut `pattern` ohne Wert angegeben wird, ist sein Wert implizit die leere Zeichenfolge. Daher führt **jeder nicht leere** `value` des Eingabefelds zu einer Verletzung der Gültigkeitsbedingungen.

### Hinweise zur Benutzerfreundlichkeit und Barrierefreiheit

Wenn Sie ein `pattern` verwenden, beschreiben Sie das Muster in sichtbarem Text in der Nähe des Eingabefelds. Fügen Sie außerdem ein [`title`](/de/docs/Web/HTML/Reference/Elements/input#title)-Attribut hinzu, das das Muster beschreibt. Benutzeragenten können dessen Inhalt bei der Gültigkeitsprüfung verwenden, um darauf hinzuweisen, dass der Wert nicht mit dem Muster übereinstimmt. Einige Browser zeigen den Inhalt als Tooltip an, was die Benutzerfreundlichkeit für sehende Nutzer verbessert. Assistive Technologien können den Titel außerdem vorlesen, wenn das Eingabefeld den Fokus erhält. Für die Barrierefreiheit sollten Sie sich jedoch nicht darauf verlassen.

Es wird davon abgeraten, Textinformationen ausschließlich über das Attribut `title` visuell bereitzustellen, da viele Benutzeragenten das Attribut nicht auf barrierefreie Weise zugänglich machen. Einige Browser zeigen zwar einen Tooltip an, wenn der Mauszeiger über einem Element mit einem Titel verweilt, doch Nutzer, die ausschließlich eine Tastatur oder einen Touchscreen verwenden, erreichen diese Information nicht. Auch deshalb müssen Sie Informationen bereitstellen, die erklären, wie das Eingabefeld entsprechend den Anforderungen auszufüllen ist.

Manche Browser verwenden `title`-Attribute für Fehlermeldungen. Da sie den Titel mitunter auch beim Darüberfahren mit der Maus anzeigen, erscheint er jedoch ebenfalls, wenn kein Fehler vorliegt. Formulieren Sie Titel daher nicht so, als sei bereits ein Fehler aufgetreten.

## Beispiele

### Eine Telefonnummer abgleichen

Betrachten Sie Folgendes:

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

Hier gibt es drei Abschnitte für eine nordamerikanische Telefonnummer. Eine implizite Beschriftung umfasst alle drei Bestandteile der Telefonnummer. Erwartet werden jeweils 3, 3 und 4 Ziffern, wie durch das für jeden Abschnitt festgelegte Attribut `pattern` definiert.

Wenn die Werte zu lang oder zu kurz sind oder andere Zeichen als Ziffern enthalten, ist `patternMismatch` `true`. In diesem Fall entspricht das Element der CSS-Pseudoklasse {{cssxref(":invalid")}}.

```css
input:invalid {
  border: red solid 3px;
}
```

{{EmbedLiveSample("Matching_a_phone_number", 300, 80)}}

Hätten wir stattdessen die Attribute [`minlength`](/de/docs/Web/HTML/Reference/Attributes/minlength) und [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength) verwendet, wäre möglicherweise [`validityState.tooLong`](/de/docs/Web/API/ValidityState/tooLong) oder [`validityState.tooShort`](/de/docs/Web/API/ValidityState/tooShort) `true`.

### Ein Muster festlegen

Mit dem Attribut [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern) können Sie einen regulären Ausdruck festlegen, mit dem der eingegebene Wert übereinstimmen muss, um als gültig zu gelten. Eine kurze Einführung in die Verwendung regulärer Ausdrücke zur Überprüfung von Eingaben finden Sie unter [Validierung anhand eines regulären Ausdrucks](/de/docs/Learn_web_development/Extensions/Forms/Form_validation#validating_against_a_regular_expression).

Das folgende Beispiel beschränkt den Wert auf 4 bis 8 Zeichen und verlangt, dass er ausschließlich Kleinbuchstaben enthält.

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

```js hidden
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
});
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

Das Ergebnis sieht so aus:

{{ EmbedLiveSample('Specifying_a_pattern', 600, 110) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Gültigkeitsprüfung](/de/docs/Web/HTML/Guides/Constraint_validation)
- [Formulare: Validierung von Formulardaten](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions)
