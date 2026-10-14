---
title: HTML-Attributwert `<input type="text">`
short-title: <input type="text">
slug: Web/HTML/Reference/Elements/input/text
l10n:
  sourceCommit: 46afd57950146568819d0bf98175a2ffdbe079d7
---

{{HTMLElement("input")}}-Elemente vom Typ **`text`** erstellen einfache einzeilige Textfelder.

{{InteractiveExample("HTML Demo: &lt;input type=&quot;text&quot;&gt;", "tabbed-shorter")}}

```html interactive-example
<label for="name">Name (4 to 8 characters):</label>

<input
  type="text"
  id="name"
  name="name"
  required
  minlength="4"
  maxlength="8"
  size="10" />
```

```css interactive-example
label {
  display: block;
  font:
    1rem "Fira Sans",
    sans-serif;
}

input,
label {
  margin: 0.4rem 0;
}
```

## Wert

Das Attribut [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) ist eine Zeichenfolge, die den aktuellen Wert des in das Textfeld eingegebenen Textes enthält. Sie können diesen Wert in JavaScript über die Eigenschaft `value` von [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) abrufen.

```js
let theText = myTextInput.value;
```

Wenn für das Eingabefeld keine Validierungsbedingungen gelten (weitere Informationen finden Sie unter [Validierung](#validierung)), kann der Wert eine leere Zeichenfolge (`""`) sein.

## Zusätzliche Attribute

Neben den [globalen Attributen](/de/docs/Web/HTML/Reference/Global_attributes) und den Attributen, die für alle {{HTMLElement("input")}}-Elemente unabhängig von ihrem Typ gelten, unterstützen Texteingabefelder die folgenden Attribute.

### `list`

Der Wert des Attributs `list` ist die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements im selben Dokument. Das {{HTMLElement("datalist")}}-Element stellt eine Liste vordefinierter Werte bereit, die für dieses Eingabefeld vorgeschlagen werden. Werte in der Liste, die nicht mit dem [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) kompatibel sind, werden nicht in die Vorschläge aufgenommen. Die bereitgestellten Werte sind Vorschläge, keine Vorgaben: Benutzer können einen Wert aus der vordefinierten Liste auswählen oder einen anderen Wert eingeben.

### `maxlength`

Die maximale Länge der Zeichenfolge (gemessen in {{Glossary("UTF-16", "UTF-16-Codeeinheiten")}}), die Benutzer in das `text`-Eingabefeld eingeben können. Der Wert muss eine ganze Zahl größer oder gleich 0 sein. Wenn `maxlength` nicht angegeben wird oder einen ungültigen Wert hat, gibt es für das `text`-Eingabefeld keine maximale Länge. Dieser Wert muss außerdem größer oder gleich dem Wert von `minlength` sein.

Die [Constraint Validation](/de/docs/Web/HTML/Guides/Constraint_validation) schlägt fehl, wenn der Textwert des Feldes länger als `maxlength` {{Glossary("UTF-16", "UTF-16-Codeeinheiten")}} ist. Die Constraint Validation wird nur angewendet, wenn Benutzer den Wert ändern.

### `minlength`

Die minimale Länge der Zeichenfolge (gemessen in {{Glossary("UTF-16", "UTF-16-Codeeinheiten")}}), die Benutzer in das `text`-Eingabefeld eingeben können. Der Wert muss eine nicht negative ganze Zahl sein, die kleiner oder gleich dem durch `maxlength` angegebenen Wert ist. Wenn `minlength` nicht angegeben wird oder einen ungültigen Wert hat, gibt es für das `text`-Eingabefeld keine minimale Länge.

Die [Constraint Validation](/de/docs/Web/HTML/Guides/Constraint_validation) schlägt fehl, wenn der in das Feld eingegebene Text kürzer als `minlength` {{Glossary("UTF-16", "UTF-16-Codeeinheiten")}} ist. Die Constraint Validation wird nur angewendet, wenn Benutzer den Wert ändern.

### `pattern`

Wenn das Attribut `pattern` angegeben ist, enthält es einen regulären Ausdruck, mit dem der [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) des Eingabefeldes übereinstimmen muss, damit er die [Constraint Validation](/de/docs/Web/HTML/Guides/Constraint_validation) besteht. Es muss sich um einen gültigen regulären JavaScript-Ausdruck handeln, wie er vom Typ {{jsxref("RegExp")}} verwendet und in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert wird. Beim Kompilieren des regulären Ausdrucks wird das Flag `'u'` angegeben, damit das Muster als Folge von Unicode-Codepunkten und nicht als {{Glossary("ASCII", "ASCII")}} behandelt wird. Der Mustertext darf nicht von Schrägstrichen umgeben sein.

Wenn kein Muster angegeben ist oder das angegebene Muster ungültig ist, wird kein regulärer Ausdruck angewendet und dieses Attribut vollständig ignoriert.

> [!NOTE]
> Verwenden Sie das Attribut [`title`](/de/docs/Web/HTML/Reference/Elements/input#title), um einen Text anzugeben, den die meisten Browser als Tooltip anzeigen und der die Anforderungen für die Übereinstimmung mit dem Muster erläutert. Fügen Sie außerdem einen weiteren erklärenden Text in der Nähe hinzu.

Weitere Informationen und ein Beispiel finden Sie unter [Ein Muster angeben](#ein_muster_angeben).

### `placeholder`

Das Attribut `placeholder` ist eine Zeichenfolge, die Benutzern einen kurzen Hinweis darauf gibt, welche Informationen im Feld erwartet werden. Es sollte ein Wort oder eine kurze Wortgruppe sein, die den erwarteten Datentyp veranschaulicht, und keine ausführliche Erklärung. Der Text darf _keine_ Wagenrückläufe oder Zeilenumbrüche enthalten.

Wenn der Inhalt des Steuerelements eine Schreibrichtung ({{Glossary("LTR", "LTR")}} oder {{Glossary("RTL", "RTL")}}) hat, der Platzhalter aber in der entgegengesetzten Richtung angezeigt werden soll, können Sie Formatierungszeichen des bidirektionalen Unicode-Algorithmus verwenden, um die Schreibrichtung innerhalb des Platzhalters zu ändern. Weitere Informationen finden Sie unter [Unicode-Steuerzeichen für bidirektionalen Text verwenden](https://www.w3.org/International/questions/qa-bidi-unicode-controls).

> [!NOTE]
> Vermeiden Sie nach Möglichkeit das Attribut `placeholder`. Es ist semantisch weniger aussagekräftig als andere Möglichkeiten, Ihr Formular zu erläutern, und kann unerwartete technische Probleme mit Ihren Inhalten verursachen. Weitere Informationen finden Sie unter [Hinweise zur Barrierefreiheit von `<input>`](/de/docs/Web/HTML/Reference/Elements/input#accessibility).

### `readonly`

Ein boolesches Attribut, das angibt, dass Benutzer dieses Feld nicht bearbeiten können. Sein `value` kann jedoch weiterhin durch JavaScript-Code geändert werden, der die Eigenschaft `value` von [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) direkt setzt.

> [!NOTE]
> Da für ein schreibgeschütztes Feld kein Wert erforderlich sein kann, hat `required` bei Eingabefeldern, für die auch das Attribut `readonly` angegeben ist, keine Wirkung.

### `size`

Das Attribut `size` ist ein numerischer Wert, der angibt, wie viele Zeichen breit das Eingabefeld sein soll. Der Wert muss größer als null sein; der Standardwert ist 20. Da Zeichen unterschiedlich breit sind, ist die Angabe nicht unbedingt exakt. Je nach Zeichen und Schriftart (den verwendeten {{cssxref("font")}}-Einstellungen) kann das resultierende Eingabefeld schmaler oder breiter als die angegebene Anzahl von Zeichen sein.

Dadurch wird _nicht_ begrenzt, wie viele Zeichen Benutzer in das Feld eingeben können. Es wird lediglich ungefähr festgelegt, wie viele Zeichen gleichzeitig sichtbar sind. Verwenden Sie das Attribut [`maxlength`](#maxlength), um die Länge der eingegebenen Daten nach oben zu begrenzen.

### `spellcheck`

Mit dem globalen Attribut [`spellcheck`](/de/docs/Web/HTML/Reference/Global_attributes/spellcheck) wird angegeben, ob die Rechtschreibprüfung für ein Element aktiviert werden soll. Es kann für alle bearbeitbaren Inhalte verwendet werden; hier betrachten wir die Besonderheiten bei der Verwendung von `spellcheck` für {{HTMLElement("input")}}-Elemente. Für `spellcheck` sind folgende Werte zulässig:

- `false`
  - : Deaktiviert die Rechtschreibprüfung für dieses Element.
- `true`
  - : Aktiviert die Rechtschreibprüfung für dieses Element.
- `""` (leere Zeichenfolge) oder kein Wert
  - : Übernimmt das Standardverhalten des Elements für die Rechtschreibprüfung. Dieses kann von der `spellcheck`-Einstellung eines übergeordneten Elements oder anderen Faktoren abhängen.

Die Rechtschreibprüfung kann für ein Eingabefeld aktiviert werden, wenn das Attribut [readonly](#readonly) nicht gesetzt und das Feld nicht deaktiviert ist.

Der beim Auslesen von `spellcheck` zurückgegebene Wert spiegelt möglicherweise nicht den tatsächlichen Zustand der Rechtschreibprüfung innerhalb eines Steuerelements wider, wenn die Einstellungen des {{Glossary("user_agent", "User Agents")}} die Angabe überschreiben.

## Texteingabefelder verwenden

`<input>`-Elemente vom Typ `text` erstellen einfache, einzeilige Eingabefelder. Verwenden Sie sie, wenn Benutzer einen einzeiligen Wert eingeben sollen und kein speziellerer Eingabetyp für diesen Wert verfügbar ist. Für ein [Datum](/de/docs/Web/HTML/Reference/Elements/input/datetime-local), eine [URL](/de/docs/Web/HTML/Reference/Elements/input/url), eine [E-Mail-Adresse](/de/docs/Web/HTML/Reference/Elements/input/email) oder einen [Suchbegriff](/de/docs/Web/HTML/Reference/Elements/input/search) gibt es beispielsweise besser geeignete Optionen.

### Einfaches Beispiel

```html
<div>
  <label for="uname">Choose a username: </label>
  <input type="text" id="uname" name="name" />
</div>
```

Dies wird wie folgt dargestellt:

{{EmbedLiveSample("Basic_example", 600, 80)}}

Wenn dieses Eingabefeld Teil eines Formulars ist und das Formular abgesendet wird, wird das Name-Wert-Paar `name=Chris` an den Server gesendet (sofern vor dem Absenden „Chris“ als Wert eingegeben wurde). Denken Sie daran, das Attribut [`name`](/de/docs/Web/HTML/Reference/Elements/input#name) für das {{HTMLElement("input")}}-Element anzugeben. Andernfalls wird der Wert des Textfeldes nicht mit den übermittelten Daten gesendet.

### Platzhalter festlegen

Mit dem Attribut [`placeholder`](/de/docs/Web/HTML/Reference/Elements/input#placeholder) können Sie im Texteingabefeld einen hilfreichen Platzhalter angeben, der einen Hinweis auf die erwartete Eingabe gibt. Das folgende Beispiel zeigt dies:

```html
<div>
  <label for="uname">Choose a username: </label>
  <input
    type="text"
    id="uname"
    name="name"
    placeholder="Lower case, all one word" />
</div>
```

Unten sehen Sie, wie der Platzhalter dargestellt wird:

{{EmbedLiveSample("Setting_placeholders", 600, 80)}}

Der Platzhalter wird normalerweise in einer helleren Farbe als die Vordergrundfarbe des Elements dargestellt. Er verschwindet automatisch, sobald Benutzer Text in das Feld eingeben (oder sobald dem Feld durch Setzen seines Attributs `value` programmgesteuert ein Wert zugewiesen wird).

### Physische Größe des Eingabeelements

Die physische Größe des Eingabefeldes lässt sich mit dem Attribut [`size`](/de/docs/Web/HTML/Reference/Elements/input#size) steuern. Damit können Sie festlegen, wie viele Zeichen das Texteingabefeld gleichzeitig anzeigen kann. Dies beeinflusst die Breite des Elements: Sie können sie in Zeichen statt in Pixeln angeben. Im folgenden Beispiel ist das Eingabefeld etwa 30 Zeichen breit:

```html
<div>
  <label for="uname">Choose a username: </label>
  <input
    type="text"
    id="uname"
    name="name"
    placeholder="Lower case, all one word"
    size="30" />
</div>
```

{{EmbedLiveSample('Physical_input_element_size', 600, 80)}}

## Validierung

Für `<input>`-Elemente vom Typ `text` erfolgt keine automatische Validierung, da ein einfaches Texteingabefeld beliebige Zeichenfolgen akzeptieren können muss. Es gibt jedoch einige Möglichkeiten zur clientseitigen Validierung, die im Folgenden beschrieben werden.

> [!NOTE]
> Die Validierung von HTML-Formularen ist _kein_ Ersatz für serverseitige Skripte, die sicherstellen, dass die eingegebenen Daten das richtige Format haben. HTML lässt sich leicht so verändern, dass die Validierung umgangen oder vollständig entfernt wird. Es ist auch möglich, Ihr HTML vollständig zu umgehen und Daten direkt an Ihren Server zu senden. Wenn Ihr serverseitiger Code die empfangenen Daten nicht validiert, können falsch formatierte, zu große oder einem unerwarteten Typ entsprechende Daten in Ihrer Datenbank erhebliche Probleme verursachen.

### Hinweis zur Gestaltung

Für die Gestaltung von Formularelementen stehen nützliche Pseudoklassen zur Verfügung, mit denen Benutzer erkennen können, ob ihre Eingaben gültig sind. Dies sind {{cssxref(":valid")}} und {{cssxref(":invalid")}}. In diesem Abschnitt verwenden wir das folgende CSS: Es zeigt neben Eingabefeldern mit gültigen Werten ein Häkchen und neben Eingabefeldern mit ungültigen Werten ein Kreuz (X) an.

```css
div {
  margin-bottom: 10px;
  position: relative;
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

Für diese Technik muss außerdem nach dem Formularelement ein {{htmlelement("span")}}-Element platziert werden, das die Symbole aufnimmt. Das ist notwendig, weil manche Eingabetypen in einigen Browsern Symbole, die direkt nach ihnen platziert werden, nicht gut darstellen.

### Eingabe erforderlich machen

Mit dem Attribut [`required`](/de/docs/Web/HTML/Reference/Elements/input#required) können Sie einfach festlegen, dass vor dem Absenden des Formulars ein Wert eingegeben werden muss:

```html
<form>
  <div>
    <label for="uname">Choose a username: </label>
    <input type="text" id="uname" name="name" required />
    <span class="validity"></span>
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

{{EmbedLiveSample('Making_input_required', 600, 100)}}

Wenn Sie versuchen, das Formular ohne eingegebenen Benutzernamen abzusenden, zeigt der Browser eine Fehlermeldung an.

### Länge des Eingabewerts

Mit dem Attribut [`minlength`](/de/docs/Web/HTML/Reference/Elements/input#minlength) können Sie eine Mindestlänge für den eingegebenen Wert festlegen. Entsprechend legen Sie mit [`maxlength`](/de/docs/Web/HTML/Reference/Elements/input#maxlength) seine maximale Länge fest.

Im folgenden Beispiel muss der eingegebene Wert 4 bis 8 Zeichen lang sein.

```html
<form>
  <div>
    <label for="uname">Choose a username: </label>
    <input
      type="text"
      id="uname"
      name="name"
      required
      size="10"
      placeholder="Username"
      minlength="4"
      maxlength="8" />
    <span class="validity"></span>
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

{{EmbedLiveSample('Input_value_length', 600, 100)}}

Wenn Sie versuchen, das Formular mit weniger als 4 Zeichen abzusenden, erhalten Sie eine entsprechende Fehlermeldung (die sich je nach Browser unterscheidet). Der Browser verhindert, dass Sie mehr als 8 Zeichen eingeben.

> [!NOTE]
> Wenn Sie `minlength`, aber nicht `required` angeben, gilt ein leeres Eingabefeld als gültig, da Benutzer keinen Wert angeben müssen.

### Ein Muster angeben

Mit dem Attribut [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern) können Sie einen regulären Ausdruck angeben, mit dem der eingegebene Wert übereinstimmen muss, damit er als gültig gilt. Eine kurze Einführung in die Validierung von Eingaben mit regulären Ausdrücken finden Sie unter [Mit einem regulären Ausdruck validieren](/de/docs/Learn_web_development/Extensions/Forms/Form_validation#validating_against_a_regular_expression).

Im folgenden Beispiel wird der Wert auf 4 bis 8 Zeichen begrenzt und darf nur Kleinbuchstaben enthalten.

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
      pattern="[a-z]{4,8}" />
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

Dies wird wie folgt dargestellt:

{{EmbedLiveSample('Specifying_a_pattern', 600, 130)}}

## Beispiele

Gute Beispiele für die Verwendung von Texteingabefeldern im Zusammenhang finden Sie in unseren Artikeln [Ihr erstes HTML-Formular](/de/docs/Learn_web_development/Extensions/Forms/Your_first_form) und [Anleitung zur Strukturierung eines HTML-Formulars](/de/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form).

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>
        Eine Zeichenfolge, die den im Textfeld enthaltenen Text darstellt.
      </td>
    </tr>
    <tr>
      <td><strong>Ereignisse</strong></td>
      <td>
        [`change`](/de/docs/Web/API/HTMLElement/change_event) und
        [`input`](/de/docs/Web/API/Element/input_event)
      </td>
    </tr>
    <tr>
      <td><strong>Unterstützte allgemeine Attribute</strong></td>
      <td>
        <a href="/de/docs/Web/HTML/Reference/Elements/input#autocomplete"><code>autocomplete</code></a>,
        <a href="/de/docs/Web/HTML/Reference/Elements/input#list"><code>list</code></a>,
        <a href="/de/docs/Web/HTML/Reference/Elements/input#maxlength"><code>maxlength</code></a>,
        <a href="/de/docs/Web/HTML/Reference/Elements/input#minlength"><code>minlength</code></a>,
        <a href="/de/docs/Web/HTML/Reference/Elements/input#pattern"><code>pattern</code></a>,
        <a href="/de/docs/Web/HTML/Reference/Elements/input#placeholder"><code>placeholder</code></a>,
        <a href="/de/docs/Web/HTML/Reference/Elements/input#readonly"><code>readonly</code></a>,
        <a href="/de/docs/Web/HTML/Reference/Elements/input#required"><code>required</code></a> und
        <a href="/de/docs/Web/HTML/Reference/Elements/input#size"><code>size</code></a>
      </td>
    </tr>
    <tr>
      <td><strong>IDL-Attribute</strong></td>
      <td><a href="/de/docs/Web/HTML/Reference/Elements/input#list"><code>list</code></a>, <code>value</code></td>
    </tr>
    <tr>
      <td><strong>DOM-Schnittstelle</strong></td>
      <td><p>[`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)</p></td>
    </tr>
    <tr>
      <td><strong>Implizite ARIA-Rolle</strong></td>
      <td>
        ohne <code>list</code>-Attribut:
        <code><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role">textbox</a></code><br />
        mit <code>list</code>-Attribut: <code><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role">combobox</a></code>
      </td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms)
- {{HTMLElement("input")}} und die zugrunde liegende Schnittstelle [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)
- [`<input type="search">`](/de/docs/Web/HTML/Reference/Elements/input/search)
- {{HTMLElement("textarea")}}: mehrzeilige Texteingabe
