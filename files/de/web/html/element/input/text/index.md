---
title: <input type="text">
slug: Web/HTML/Element/input/text
l10n:
  sourceCommit: f10015d1752d5668d8fe0de29f9d9807de475d58
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente vom Typ **`text`** erstellen grundlegende einzeilige Textfelder.

{{EmbedInteractiveExample("pages/tabbed/input-text.html", "tabbed-shorter")}}

## Wert

Das [`value`](/de/docs/Web/HTML/Element/input#value)-Attribut ist ein String, der den aktuellen Wert des in das Textfeld eingegebenen Textes enthält. Sie können diesen Wert mit der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-`value`-Eigenschaft in JavaScript abrufen.

```js
let theText = myTextInput.value;
```

Wenn keine Validierungsbeschränkungen für die Eingabe vorhanden sind (siehe [Validierung](#validierung) für weitere Details), kann der Wert ein leerer String (`""`) sein.

## Zusätzliche Attribute

Zusätzlich zu den [globalen Attributen](/de/docs/Web/HTML/Global_attributes) und den Attributen, die auf alle {{HTMLElement("input")}}-Elemente unabhängig von ihrem Typ wirken, unterstützen Texteingaben die folgenden Attribute.

### `list`

Der Wert des `list`-Attributs ist die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements, das sich im selben Dokument befindet. Das {{HTMLElement("datalist")}} stellt eine Liste von vordefinierten Werten bereit, die dem Benutzer für diese Eingabe vorgeschlagen werden. Alle Werte in der Liste, die nicht mit dem [`type`](/de/docs/Web/HTML/Element/input#type) kompatibel sind, werden nicht in die vorgeschlagenen Optionen aufgenommen. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert angeben.

### `maxlength`

Die maximale Zeichenlänge (gemessen in UTF-16-Codeeinheiten), die der Benutzer in die `text`-Eingabe eingeben kann. Dies muss ein ganzzahliger Wert von 0 oder höher sein. Wenn `maxlength` nicht angegeben ist oder ein ungültiger Wert angegeben ist, hat die `text`-Eingabe keine maximale Länge. Dieser Wert muss auch größer oder gleich dem Wert von `minlength` sein.

Die Eingabe wird bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) fehlschlagen, wenn die Länge des Textwerts des Feldes größer als `maxlength` UTF-16 Codeeinheiten ist. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### `minlength`

Die minimale Zeichenlänge (gemessen in UTF-16-Codeeinheiten), die der Benutzer in die `text`-Eingabe eingeben kann. Dies muss ein nicht-negativer ganzzahliger Wert sein, der kleiner oder gleich dem von `maxlength` angegebenen Wert ist. Wenn `minlength` nicht angegeben ist oder ein ungültiger Wert angegeben ist, hat die `text`-Eingabe keine Mindestlänge.

Die Eingabe wird bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) fehlschlagen, wenn die Länge des in das Feld eingegebenen Textes weniger als `minlength` UTF-16-Codeeinheiten beträgt. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### `pattern`

Das `pattern`-Attribut, wenn angegeben, ist ein regulärer Ausdruck, den der [`value`](/de/docs/Web/HTML/Element/input#value) der Eingabe erfüllen muss, damit der Wert die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) besteht. Es muss ein gültiger JavaScript-regulärer Ausdruck sein, wie er vom {{jsxref("RegExp")}}-Typ verwendet wird und wie in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert; das `'u'`-Flag wird beim Kompilieren des regulären Ausdrucks festgelegt, damit das Muster als Folge von Unicode-Codepunkten und nicht als {{Glossary("ASCII", "ASCII")}} behandelt wird. Keine Schrägstriche sollten um den Mustertext angegeben werden.

Wenn das angegebene Muster nicht angegeben ist oder ungültig ist, wird kein regulärer Ausdruck angewendet und dieses Attribut wird komplett ignoriert.

> [!NOTE]
> Verwenden Sie das [`title`](/de/docs/Web/HTML/Element/input#title)-Attribut, um Text anzugeben, den die meisten Browser als Tooltip anzeigen, um zu erklären, welche Anforderungen bestehen, um das Muster zu erfüllen. Sie sollten auch anderen erläuternden Text in der Nähe einschließen.

Weitere Einzelheiten und ein Beispiel finden Sie unter [Ein Muster angeben](#muster_angeben).

### `placeholder`

Das `placeholder`-Attribut ist ein String, der dem Benutzer einen kurzen Hinweis darauf gibt, welche Art von Information in das Feld erwartet wird. Es sollte ein Wort oder ein kurzer Satz sein, der den erwarteten Datentyp demonstriert, anstatt eine erklärende Nachricht. Der Text _darf keine_ Wagenrückläufe oder Zeilenumbrüche enthalten.

Wenn der Inhalt des Steuerelements eine Richtung ({{Glossary("LTR", "LTR")}} oder {{Glossary("RTL", "RTL")}}) hat, der Platzhalter jedoch in der entgegengesetzten Richtung angezeigt werden muss, können Sie Unicode-bidirektionale Algorithmusformatierungszeichen verwenden, um die Richtung im Platzhalter außer Kraft zu setzen; siehe [Wie man Unicode-Steuerelemente für bidi-Text verwendet](https://www.w3.org/International/questions/qa-bidi-unicode-controls) für weitere Informationen.

> [!NOTE]
> Vermeiden Sie die Verwendung des `placeholder`-Attributs, wenn Sie können. Es ist nicht so semantisch nützlich wie andere Möglichkeiten, Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Siehe [Zugänglichkeitsprobleme bei `<input>`](/de/docs/Web/HTML/Element/input#accessibility) für weitere Informationen.

### `readonly`

Ein Boolean-Attribut, das, falls vorhanden, bedeutet, dass dieses Feld nicht vom Benutzer bearbeitet werden kann. Sein `value` kann jedoch weiterhin geändert werden, indem der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-`value`-Eigenschaft direkt durch JavaScript-Code festgelegt wird.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keine Auswirkung auf Eingaben, bei denen auch das `readonly`-Attribut angegeben ist.

### `size`

Das `size`-Attribut ist ein numerischer Wert, der angibt, wie viele Zeichen breit das Eingabefeld sein soll. Der Wert muss eine Zahl größer als null sein und der Standardwert ist 20. Da die Breite der Zeichen variiert, kann dies möglicherweise nicht genau sein und sollte nicht darauf vertraut werden; das resultierende Eingabefeld kann schmaler oder breiter als die angegebene Anzahl von Zeichen sein, abhängig von den Zeichen und der Schriftart ({{cssxref("font")}}-Einstellungen in Verwendung).

Dies legt keine Begrenzung fest, wie viele Zeichen der Benutzer in das Feld eingeben kann. Es gibt nur an, wie viele ungefähr gleichzeitig sichtbar sein können. Um eine obere Grenze für die Länge der Eingabedaten festzulegen, verwenden Sie das [`maxlength`](#maxlength)-Attribut.

### `spellcheck`

Das globale Attribut [`spellcheck`](/de/docs/Web/HTML/Global_attributes/spellcheck) wird verwendet, um anzugeben, ob die Rechtschreibprüfung für ein Element aktiviert werden soll. Es kann bei jedem bearbeitbaren Inhalt verwendet werden, aber hier betrachten wir die Besonderheiten in Bezug auf die Verwendung von `spellcheck` bei {{HTMLElement("input")}}-Elementen. Die erlaubten Werte für `spellcheck` sind:

- `false`
  - : Deaktivieren der Rechtschreibprüfung für dieses Element.
- `true`
  - : Aktivieren der Rechtschreibprüfung für dieses Element.
- `""` (leerer String) oder kein Wert
  - : Befolgen Sie das Standardverhalten des Elements für die Rechtschreibprüfung. Dies kann sich auf die `spellcheck`-Einstellung des übergeordneten Elements oder andere Faktoren stützen.

Ein Eingabefeld kann die Rechtschreibprüfung aktiv haben, wenn nicht das [readonly](#readonly)-Attribut festgelegt ist und es nicht deaktiviert ist.

Der Wert, der durch Lesen von `spellcheck` zurückgegeben wird, spiegelt möglicherweise nicht den tatsächlichen Zustand der Rechtschreibprüfung innerhalb eines Steuerelements wider, wenn die Einstellungen des {{Glossary("user_agent", "Benutzeragenten")}} die Einstellung außer Kraft setzen.

## Verwendung von Texteingaben

`<input>`-Elemente vom Typ `text` erstellen grundlegende, einzeilige Eingaben. Sie sollten diese verwenden, wann immer Sie wollen, dass der Benutzer einen einzeiligen Wert eingibt und es keinen spezifischeren Eingabetyp gibt, um diesen Wert zu erfassen (zum Beispiel, wenn es sich um ein [Datum](/de/docs/Web/HTML/Element/input/datetime-local), eine [URL](/de/docs/Web/HTML/Element/input/url), eine [E-Mail-Adresse](/de/docs/Web/HTML/Element/input/email) oder einen [Suchbegriff](/de/docs/Web/HTML/Element/input/search) handelt, haben Sie bessere Optionen zur Verfügung).

### Einfaches Beispiel

```html
<form>
  <div>
    <label for="uname">Choose a username: </label>
    <input type="text" id="uname" name="name" />
  </div>
  <div>
    <button>Submit</button>
  </div>
</form>
```

Dies wird folgendermaßen dargestellt:

{{EmbedLiveSample("Basic_example", 600, 80)}}

Wenn das Formular eingereicht wird, wird das Datenname/Werte-Paar `name=Chris` an den Server gesendet (falls "Chris" als Eingabewert vor der Übermittlung eingegeben wurde). Sie müssen daran denken, das [`name`](/de/docs/Web/HTML/Element/input#name)-Attribut im {{HTMLElement("input")}}-Element anzugeben, andernfalls wird der Wert des Textfelds nicht mit den übermittelten Daten aufgenommen.

### Platzhalter festlegen

Sie können innerhalb Ihrer Texteingabe einen nützlichen Platzhalter angeben, der einen Hinweis darauf geben kann, was eingegeben werden soll, indem Sie das [`placeholder`](/de/docs/Web/HTML/Element/input#placeholder)-Attribut verwenden. Sehen Sie sich das folgende Beispiel an:

```html
<form>
  <div>
    <label for="uname">Choose a username: </label>
    <input
      type="text"
      id="uname"
      name="name"
      placeholder="Lower case, all one word" />
  </div>
  <div>
    <button>Submit</button>
  </div>
</form>
```

Sie können sehen, wie der Platzhalter unten dargestellt wird:

{{EmbedLiveSample("Setting_placeholders", 600, 80)}}

Der Platzhalter wird typischerweise in einer helleren Farbe als die Vordergrundfarbe des Elements gerendert und verschwindet automatisch, wenn der Benutzer beginnt, Text in das Feld einzugeben (oder wann immer das Feld programmgesteuert durch Einstellen seines `value`-Attributs einen Wert gesetzt bekommt).

### Physische Größe des Eingabeelements

Die physische Größe des Eingabefelds kann durch das [`size`](/de/docs/Web/HTML/Element/input#size)-Attribut gesteuert werden. Damit können Sie die Anzahl der Zeichen angeben, die das Texteingabefeld gleichzeitig anzeigen kann. Dies wirkt sich auf die Breite des Elements aus und ermöglicht es Ihnen, die Breite in Zeichen anstatt in Pixeln anzugeben. In diesem Beispiel ist die Eingabe zum Beispiel 30 Zeichen breit:

```html
<form>
  <div>
    <label for="uname">Choose a username: </label>
    <input
      type="text"
      id="uname"
      name="name"
      placeholder="Lower case, all one word"
      size="30" />
  </div>
  <div>
    <button>Submit</button>
  </div>
</form>
```

{{EmbedLiveSample('Physical_input_element_size', 600, 80)}}

## Validierung

`<input>`-Elemente vom Typ `text` haben keine automatische Validierung (da eine grundlegende Texteingabe in der Lage sein muss, beliebige Strings zu akzeptieren), aber es gibt einige clientseitige Validierungsoptionen, die wir unten diskutieren werden.

> [!NOTE]
> Die HTML-Formularvalidierung ist _kein_ Ersatz für Server-Skripte, die sicherstellen, dass die eingegebenen Daten im richtigen Format sind. Es ist viel zu einfach für jemanden, Anpassungen am HTML vorzunehmen, die es ihm ermöglichen, die Validierung zu umgehen oder sie komplett zu entfernen. Es ist auch möglich, dass jemand Ihr HTML vollständig umgeht und die Daten direkt an Ihren Server sendet. Wenn Ihr serverseitiger Code die empfangenen Daten nicht validiert, könnte es zu einer Katastrophe kommen, wenn falsch formatierte Daten (oder Daten, die zu groß sind, vom falschen Typ sind usw.) in Ihre Datenbank eingegeben werden.

### Eine Notiz zur Formatierung

Es gibt hilfreiche Pseudo-Klassen zum Formatieren von Formularelementen, um dem Benutzer zu zeigen, wann ihre Werte gültig oder ungültig sind. Diese sind {{cssxref(":valid")}} und {{cssxref(":invalid")}}. In diesem Abschnitt verwenden wir das folgende CSS, das ein Häkchen neben Eingaben anzeigt, die gültige Werte enthalten, und ein Kreuz (X) neben Eingaben, die ungültige Werte enthalten.

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

Die Technik erfordert auch ein {{htmlelement("span")}}-Element, das nach dem Formelement platziert wird und als Halter für die Symbole fungiert. Dies war notwendig, weil einige Eingabetypen bei einigen Browsern keine Symbole direkt nach ihnen gut darstellen.

### Eingabe erforderlich machen

Sie können das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut verwenden, um einfach das Eingeben eines Wertes vor der Formularübermittlung erforderlich zu machen:

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

Dies wird folgendermaßen dargestellt:

{{EmbedLiveSample('Making_input_required', 600, 100)}}

Wenn Sie versuchen, das Formular ohne einen eingegebenen Suchbegriff abzusenden, zeigt der Browser eine Fehlermeldung an.

### Länge des Eingabewerts

Sie können eine Mindestlänge (in Zeichen) für den eingegebenen Wert mit dem [`minlength`](/de/docs/Web/HTML/Element/input#minlength)-Attribut angeben; ähnlich verwenden Sie [`maxlength`](/de/docs/Web/HTML/Element/input#maxlength), um die maximale Länge des eingegebenen Wertes in Zeichen festzulegen.

Das folgende Beispiel erfordert, dass der eingegebene Wert 4–8 Zeichen lang ist.

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

Dies wird folgendermaßen dargestellt:

{{EmbedLiveSample('Input_value_length', 600, 100)}}

Wenn Sie versuchen, das Formular mit weniger als 4 Zeichen abzusenden, erhalten Sie eine entsprechende Fehlermeldung (die zwischen den Browsern variiert). Wenn Sie versuchen, mehr als 8 Zeichen einzugeben, lässt der Browser dies nicht zu.

> [!NOTE]
> Wenn Sie eine `minlength` angeben, aber nicht `required`, wird die Eingabe als gültig betrachtet, da der Benutzer nicht verpflichtet ist, einen Wert anzugeben.

### Muster angeben

Sie können das [`pattern`](/de/docs/Web/HTML/Element/input#pattern)-Attribut verwenden, um einen regulären Ausdruck anzugeben, den der eingegebene Wert erfüllen muss, um als gültig betrachtet zu werden (siehe [Validierung gegen einen regulären Ausdruck](/de/docs/Learn/Forms/Form_validation#validating_against_a_regular_expression) für einen Einsteigerkurs über die Verwendung von regulären Ausdrücken zur Validierung von Eingaben).

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
      pattern="[a-z]{4,8}" />
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

Dies wird folgendermaßen dargestellt:

{{EmbedLiveSample('Specifying_a_pattern', 600, 130)}}

## Beispiele

Gute Beispiele für Texteingaben im Kontext finden Sie in unseren Artikeln [Ihr erstes HTML-Formular](/de/docs/Learn/Forms/Your_first_form) und [Anleitung: Eine HTML-Form strukturieren](/de/docs/Learn/Forms/How_to_structure_a_web_form).

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>
        Ein String, der den Text im
        Textfeld repräsentiert.
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
      <td><strong>Unterstützte Allgemeine Attribute</strong></td>
      <td>
        <a href="/de/docs/Web/HTML/Element/input#autocomplete"><code>autocomplete</code></a>,
        <a href="/de/docs/Web/HTML/Element/input#list"><code>list</code></a>,
        <a href="/de/docs/Web/HTML/Element/input#maxlength"><code>maxlength</code></a>,
        <a href="/de/docs/Web/HTML/Element/input#minlength"><code>minlength</code></a>,
        <a href="/de/docs/Web/HTML/Element/input#pattern"><code>pattern</code></a>,
        <a href="/de/docs/Web/HTML/Element/input#placeholder"><code>placeholder</code></a>,
        <a href="/de/docs/Web/HTML/Element/input#readonly"><code>readonly</code></a>,
        <a href="/de/docs/Web/HTML/Element/input#required"><code>required</code></a> und
        <a href="/de/docs/Web/HTML/Element/input#size"><code>size</code></a>
      </td>
    </tr>
    <tr>
      <td><strong>IDL-Attribute</strong></td>
      <td><a href="/de/docs/Web/HTML/Element/input#list"><code>list</code></a>, <code>value</code></td>
    </tr>
    <tr>
      <td><strong>DOM-Schnittstelle</strong></td>
      <td><p>[`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)</p></td>
    </tr>
    <tr>
      <td><strong>Methoden</strong></td>
      <td>
        [`select()`](/de/docs/Web/API/HTMLInputElement/select),
        [`setRangeText()`](/de/docs/Web/API/HTMLInputElement/setRangeText)
        und
        [`setSelectionRange()`](/de/docs/Web/API/HTMLInputElement/setSelectionRange).
      </td>
    </tr>
    <tr>
      <td><strong>Implizite ARIA-Rolle</strong></td>
      <td>ohne <code>list</code>-Attribut:
                <code><a href="/de/docs/Web/Accessibility/ARIA/Roles/textbox_role">textbox</a></code></td>
      <td>mit <code>list</code>-Attribut: <code><a href="/de/docs/Web/Accessibility/ARIA/Roles/combobox_role">combobox</a></code></td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTML-Formulare](/de/docs/Learn/Forms)
- {{HTMLElement("input")}} und die [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle, auf der es basiert.
- [`<input type="search">`](/de/docs/Web/HTML/Element/input/search)
- {{HTMLElement("textarea")}}: Mehrzeilige Texteingabe
- [Kompatibilität von CSS-Eigenschaften](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
