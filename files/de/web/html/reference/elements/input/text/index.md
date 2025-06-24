---
title: <input type="text">
slug: Web/HTML/Reference/Elements/input/text
l10n:
  sourceCommit: 3e097148b4c6cb9c6d8824275599f855ca63827b
---

{{HTMLSidebar}}

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

Das [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Attribut ist eine Zeichenkette, die den aktuellen Wert des in das Textfeld eingegebenen Textes enthält. Sie können diesen Wert mit der `value`-Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) in JavaScript abrufen.

```js
let theText = myTextInput.value;
```

Wenn keine Validierungseinschränkungen für die Eingabe vorhanden sind (siehe [Validierung](#validierung) für mehr Details), kann der Wert ein leerer String (`""`) sein.

## Zusätzliche Attribute

Zusätzlich zu den [globalen Attributen](/de/docs/Web/HTML/Reference/Global_attributes) und den Attributen, die auf alle {{HTMLElement("input")}}-Elemente unabhängig von ihrem Typ angewendet werden, unterstützen Texteingaben die folgenden Attribute.

### `list`

Der Wert des `list`-Attributs ist die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements, das sich im selben Dokument befindet. Das {{HTMLElement("datalist")}} bietet eine Liste vordefinierter Werte, die dem Benutzer für diese Eingabe vorgeschlagen werden. Alle Werte in der Liste, die nicht kompatibel mit dem [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) sind, werden nicht in den vorgeschlagenen Optionen enthalten. Die bereitgestellten Werte sind Vorschläge und keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert eingeben.

### `maxlength`

Die maximale Zeichenkettenlänge (gemessen in {{Glossary("UTF-16", "UTF-16 Code-Einheiten")}}), die der Benutzer in die `text`-Eingabe eingeben kann. Dies muss ein ganzzahliger Wert von 0 oder höher sein. Wenn kein `maxlength` angegeben ist oder ein ungültiger Wert angegeben wird, hat die `text`-Eingabe keine maximale Länge. Dieser Wert muss auch größer oder gleich dem Wert von `minlength` sein.

Die Eingabe schlägt bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl, wenn die Länge des Textwerts des Feldes länger ist als `maxlength` {{Glossary("UTF-16", "UTF-16 Code-Einheiten")}}. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### `minlength`

Die minimale Zeichenkettenlänge (gemessen in {{Glossary("UTF-16", "UTF-16 Code-Einheiten")}}), die der Benutzer in die `text`-Eingabe eingeben kann. Dies muss ein nicht-negativer ganzzahliger Wert sein, der kleiner oder gleich dem durch `maxlength` angegebenen Wert ist. Wenn kein `minlength` angegeben ist oder ein ungültiger Wert angegeben wird, hat die `text`-Eingabe keine Mindestlänge.

Die Eingabe wird die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) nicht bestehen, wenn die Länge des in das Feld eingegebenen Textes kürzer ist als `minlength` {{Glossary("UTF-16", "UTF-16 Code-Einheiten")}}. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### `pattern`

Das `pattern`-Attribut ist, wenn angegeben, ein regulärer Ausdruck, den der `value` der Eingabe erfüllen muss, um die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) zu bestehen. Es muss ein gültiger JavaScript-Regulärer Ausdruck sein, wie er vom {{jsxref("RegExp")}}-Typ verwendet wird und in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert ist; das `'u'`-Flag wird beim Kompilieren des regulären Ausdrucks angegeben, damit das Muster als eine Sequenz von Unicode-Codepunkten und nicht als {{Glossary("ASCII", "ASCII")}} behandelt wird. In das Mustertext sollten keine Schrägstriche eingefügt werden.

Wenn das angegebene Muster nicht angegeben wird oder ungültig ist, wird kein regulärer Ausdruck angewendet und dieses Attribut wird vollständig ignoriert.

> [!NOTE]
> Verwenden Sie das [`title`](/de/docs/Web/HTML/Reference/Elements/input#title)-Attribut, um Text anzugeben, den die meisten Browser als Tooltip anzeigen, um zu erklären, welche Anforderungen erfüllt werden müssen, um das Muster zu erfüllen. Sie sollten auch andere erklärende Texte in der Nähe einfügen.

Siehe [Ein Muster angeben](#ein_muster_angeben) für weitere Details und ein Beispiel.

### `placeholder`

Das `placeholder`-Attribut ist eine Zeichenkette, die dem Benutzer einen kurzen Hinweis darauf gibt, welche Art von Informationen im Feld erwartet werden. Es sollte ein Wort oder ein kurzer Satz sein, der die erwartete Art von Daten demonstriert, anstatt eine erklärende Nachricht. Der Text _darf keine_ Wagenrückläufe oder Zeilenumbrüche enthalten.

Wenn der Inhalt der Kontrolle eine Richtung (LTR) oder (RTL) hat, aber der Platzhalter in der entgegengesetzten Richtung dargestellt werden muss, können Sie Unicode-Bidirektionale Algorithmus-Formatierungszeichen verwenden, um die Richtung innerhalb des Platzhalters zu überschreiben; sehen Sie [Wie man Unicode-Kontrollen für bidi-Text verwendet](https://www.w3.org/International/questions/qa-bidi-unicode-controls) für mehr Informationen.

> [!NOTE]
> Vermeiden Sie es, das `placeholder`-Attribut zu verwenden, wenn Sie können. Es ist nicht so semantisch nützlich wie andere Möglichkeiten, Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Siehe [`<input>`-Barrierefreiheitsfragen](/de/docs/Web/HTML/Reference/Elements/input#accessibility) für mehr Informationen.

### `readonly`

Ein Boolesches Attribut, das, wenn vorhanden, bedeutet, dass dieses Feld vom Benutzer nicht bearbeitet werden kann. Sein `value` kann jedoch immer noch durch direktes Setzen der `value`-Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) per JavaScript geändert werden.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keinen Effekt auf Eingaben mit dem ebenfalls angegebenen `readonly`-Attribut.

### `size`

Das `size`-Attribut ist ein Zahlenwert, der angibt, wie viele Zeichen breit das Eingabefeld sein sollte. Der Wert muss eine Zahl größer als Null sein, und der Standardwert ist 20. Da sich die Zeichenbreiten unterscheiden, kann dies unter Umständen nicht genau sein und sollte nicht darauf vertraut werden; die resultierende Eingabe kann schmaler oder breiter sein als die angegebene Anzahl von Zeichen, abhängig von den Zeichen und der Schriftart ({{cssxref("font")}}-Einstellungen in Gebrauch).

Dies setzt _keine_ Begrenzung, wie viele Zeichen der Benutzer in das Feld eingeben kann. Es gibt lediglich an, wie viele gleichzeitig sichtbar sein können. Um ein oberes Limit für die Länge der Eingabedaten festzulegen, verwenden Sie das [`maxlength`](#maxlength)-Attribut.

### `spellcheck`

Das [`spellcheck`](/de/docs/Web/HTML/Reference/Global_attributes/spellcheck)-Globale Attribut wird verwendet, um anzugeben, ob die Rechtschreibprüfung für ein Element aktiviert werden soll. Es kann auf jedem editierbaren Inhalt verwendet werden, aber hier betrachten wir die Besonderheiten der Verwendung von `spellcheck` auf {{HTMLElement("input")}}-Elementen. Die zulässigen Werte für `spellcheck` sind:

- `false`
  - : Rechtschreibprüfung für dieses Element deaktivieren.
- `true`
  - : Rechtschreibprüfung für dieses Element aktivieren.
- `""` (leerer String) oder kein Wert
  - : Dem Standardverhalten des Elements für die Rechtschreibprüfung folgen. Dies kann basierend auf einer übergeordneten `spellcheck`-Einstellung oder anderen Faktoren sein.

Ein Eingabefeld kann die Rechtschreibprüfung aktiviert haben, wenn es nicht das [readonly](#readonly)-Attribut gesetzt hat und nicht deaktiviert ist.

Der durch das Lesen von `spellcheck` zurückgegebene Wert reflektiert möglicherweise nicht den tatsächlichen Zustand der Rechtschreibprüfung innerhalb einer Kontrolle, wenn die {{Glossary("user_agent", "Benutzeragenten-")}} Präferenzen die Einstellung überschreiben.

## Verwendung von Texteingaben

`<input>`-Elemente vom Typ `text` erstellen einfache, einzeilige Eingaben. Sie sollten sie überall verwenden, wo Sie möchten, dass der Benutzer einen einzeiligen Wert eingibt und es keinen spezifischeren Eingabetyp gibt, um diesen Wert zu sammeln (zum Beispiel, wenn es sich um ein [Datum](/de/docs/Web/HTML/Reference/Elements/input/datetime-local), eine [URL](/de/docs/Web/HTML/Reference/Elements/input/url), eine [E-Mail](/de/docs/Web/HTML/Reference/Elements/input/email) oder einen [Suchbegriff](/de/docs/Web/HTML/Reference/Elements/input/search) handelt, haben Sie bessere Optionen zur Verfügung).

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

Dies wird wie folgt gerendert:

{{EmbedLiveSample("Basic_example", 600, 80)}}

Wenn das Formular eingereicht wird, werden der Daten-Name/Wert-Paar, das an den Server gesendet wird, `name=Chris` sein (wenn "Chris" als Eingabewert vor der Einreichung eingegeben wurde). Sie müssen daran denken, das [`name`](/de/docs/Web/HTML/Reference/Elements/input#name)-Attribut auf dem {{HTMLElement("input")}}-Element einzuschließen, da ansonsten der Wert des Textfeldes nicht mit den übermittelten Daten enthalten ist.

### Platzhalter festlegen

Sie können einen nützlichen Platzhalter innerhalb Ihrer Texteingabe bereitstellen, der einen Hinweis darauf geben kann, was eingegeben werden soll, indem Sie das [`placeholder`](/de/docs/Web/HTML/Reference/Elements/input#placeholder)-Attribut verwenden. Schauen Sie sich das folgende Beispiel an:

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

Sie können sehen, wie der Platzhalter unten gerendert wird:

{{EmbedLiveSample("Setting_placeholders", 600, 80)}}

Der Platzhalter wird typischerweise in einer helleren Farbe als die Vordergrundfarbe des Elements dargestellt und verschwindet automatisch, wenn der Benutzer beginnt, Text in das Feld einzugeben (oder wann immer das Feld einen Wert hat, der programmgesteuert durch Setzen seines `value`-Attributs festgelegt wird).

### Physische Größe des Eingabeelements

Die physische Größe des Eingabefelds kann mit dem [`size`](/de/docs/Web/HTML/Reference/Elements/input#size)-Attribut gesteuert werden. Damit können Sie die Anzahl der Zeichen angeben, die das Texteingabefeld gleichzeitig anzeigen kann. Dies beeinflusst die Breite des Elements und ermöglicht Ihnen, die Breite in Zeichen anzugeben statt in Pixeln. In diesem Beispiel ist die Eingabe 30 Zeichen breit:

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

`<input>`-Elemente vom Typ `text` haben keine automatische Validierung, die auf sie angewendet wird (da eine einfache Texteingabe dazu in der Lage sein muss, jeden beliebigen String zu akzeptieren), aber es gibt einige Validierungsoptionen auf Client-Seite, die wir unten besprechen.

> [!NOTE]
> Die HTML-Formularvalidierung ist _kein_ Ersatz für Serverskripte, die sicherstellen, dass die eingegebenen Daten im richtigen Format sind. Es ist viel zu einfach für jemanden, Einstellungen am HTML vorzunehmen, die es ihm erlauben, die Validierung zu umgehen oder sie vollständig zu entfernen. Es ist auch möglich für jemanden, Ihr HTML komplett zu umgehen und die Daten direkt an Ihren Server zu übermitteln. Wenn Ihr serverseitiger Code es versäumt, die empfangenen Daten zu validieren, könnte es zu einer Katastrophe kommen, wenn falsch formatierte Daten (oder Daten, die zu groß sind, der falsche Typ sind usw.) in Ihre Datenbank eingegeben werden.

### Ein Hinweis zum Styling

Es gibt nützliche Pseudoklassen zum Styling von Formularelementen, um dem Benutzer zu helfen zu erkennen, wann ihre Werte gültig oder ungültig sind. Diese sind {{cssxref(":valid")}} und {{cssxref(":invalid")}}. In diesem Abschnitt verwenden wir das folgende CSS, das ein Häkchen neben Eingaben mit gültigen Werten und ein Kreuz (X) neben Eingaben mit ungültigen Werten anzeigt.

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

Die Technik erfordert auch ein {{htmlelement("span")}}-Element, das nach dem Formularelement platziert wird und als Halter für die Symbole dient. Dies war notwendig, weil manche Eingabetypen in manchen Browsern keine gut platzierten Symbole direkt nach ihnen anzeigen.

### Eingabe erforderlich machen

Sie können das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attribut verwenden, um einfach das Eingeben eines Wertes erforderlich zu machen, bevor das Formular abgesendet werden kann:

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

Dies wird wie folgt gerendert:

{{EmbedLiveSample('Making_input_required', 600, 100)}}

Wenn Sie versuchen, das Formular ohne eingegebenen Suchbegriff einzureichen, zeigt der Browser eine Fehlermeldung an.

### Eingabewertlänge

Sie können eine Mindestlänge (in Zeichen) für den eingegebenen Wert mit dem [`minlength`](/de/docs/Web/HTML/Reference/Elements/input#minlength)-Attribut angeben; ebenso verwenden Sie [`maxlength`](/de/docs/Web/HTML/Reference/Elements/input#maxlength), um die maximale Länge des eingegebenen Werts in Zeichen festzulegen.

Das folgende Beispiel erfordert, dass der eingegebene Wert eine Länge von 4–8 Zeichen hat.

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

Dies wird wie folgt gerendert:

{{EmbedLiveSample('Input_value_length', 600, 100)}}

Wenn Sie versuchen, das Formular mit weniger als 4 Zeichen zu übermitteln, erhalten Sie eine entsprechende Fehlermeldung (die zwischen den Browsern unterschiedlich ausfällt). Wenn Sie versuchen, mehr als 8 Zeichen einzugeben, lässt der Browser dies nicht zu.

> [!NOTE]
> Wenn Sie ein `minlength` angeben, aber keine `required`, wird die Eingabe als gültig betrachtet, da der Benutzer nicht verpflichtet ist, einen Wert anzugeben.

### Ein Muster angeben

Sie können das [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern)-Attribut verwenden, um einen regulären Ausdruck anzugeben, den der eingegebene Wert erfüllen muss, um als gültig betrachtet zu werden (siehe [Validierung gegen einen regulären Ausdruck](/de/docs/Learn/web_development/Extensions/Forms/Form_validation#validating_against_a_regular_expression) für einen Schnellkurs zur Verwendung regulärer Ausdrücke zur Validierung von Eingaben).

Das folgende Beispiel schränkt den Wert auf 4-8 Zeichen ein und erfordert, dass er nur Kleinbuchstaben enthält.

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

Dies wird wie folgt gerendert:

{{EmbedLiveSample('Specifying_a_pattern', 600, 130)}}

## Beispiele

Gute Beispiele für die Verwendung von Texteingaben im Kontext finden Sie in unseren Artikeln über [Ihr erstes HTML-Formular](/de/docs/Learn/web_development/Extensions/Forms/Your_first_form) und [Wie man ein HTML-Formular strukturiert](/de/docs/Learn/web_development/Extensions/Forms/How_to_structure_a_web_form).

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>
        Eine Zeichenkette, die den Text enthält,
        der im Textfeld steht.
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
                <code><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role">textbox</a></code></td>
      <td>mit <code>list</code>-Attribut: <code><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role">combobox</a></code></td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTML-Formulare](/de/docs/Learn/web_development/Extensions/Forms)
- {{HTMLElement("input")}} und die [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle, auf der es basiert.
- [`<input type="search">`](/de/docs/Web/HTML/Reference/Elements/input/search)
- {{HTMLElement("textarea")}}: Mehrzeilige Texteingabe
