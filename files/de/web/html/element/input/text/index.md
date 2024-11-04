---
title: <input type="text">
slug: Web/HTML/Element/input/text
l10n:
  sourceCommit: 709d3a56661f895e5b0a67ff969e381d503ddd45
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente vom Typ **`text`** erzeugen einfache einzeilige Textfelder.

{{EmbedInteractiveExample("pages/tabbed/input-text.html", "tabbed-shorter")}}

## Wert

Das [`value`](/de/docs/Web/HTML/Element/input#value)-Attribut ist ein String, der den aktuellen Wert des in das Textfeld eingegebenen Texts enthält. Sie können diesen mit der `value`-Eigenschaft von [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) in JavaScript abrufen.

```js
let theText = myTextInput.value;
```

Sind keine Validierungsbeschränkungen für die Eingabe vorhanden (siehe [Validierung](#validierung) für weitere Details), kann der Wert ein leerer String (`""`) sein.

## Zusätzliche Attribute

Neben den [globalen Attributen](/de/docs/Web/HTML/Global_attributes) und den Attributen, die auf alle {{HTMLElement("input")}}-Elemente unabhängig vom Typ wirken, unterstützen Texteingaben die folgenden Attribute.

### `list`

Der Wert des `list`-Attributs ist die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements, das sich im selben Dokument befindet. Die {{HTMLElement("datalist")}} bietet eine Liste vordefinierter Werte an, die dem Benutzer für diese Eingabe vorgeschlagen werden. Werte in der Liste, die nicht mit dem `type` kompatibel sind, werden nicht in den Vorschlägen aufgenommen. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert eingeben.

### `maxlength`

Die maximale Zeichenlänge (gemessen in UTF-16-Codeeinheiten), die der Benutzer in die `text`-Eingabe eingeben kann. Dies muss ein ganzzahliger Wert von 0 oder höher sein. Wenn `maxlength` nicht angegeben oder ein ungültiger Wert angegeben ist, gibt es keine maximale Länge für die `text`-Eingabe. Dieser Wert muss auch größer oder gleich dem Wert von `minlength` sein.

Die Eingabe wird die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) nicht bestehen, wenn die Länge des Textwertes des Feldes mehr als `maxlength` UTF-16-Codeeinheiten beträgt. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### `minlength`

Die minimale Zeichenlänge (gemessen in UTF-16-Codeeinheiten), die der Benutzer in die `text`-Eingabe eingeben kann. Dies muss ein nicht-negativer Ganzzahlenwert sein, der kleiner oder gleich dem durch `maxlength` angegebenen Wert ist. Wenn `minlength` nicht angegeben oder ein ungültiger Wert angegeben ist, gibt es keine Mindestlänge für die `text`-Eingabe.

Die Eingabe wird die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) nicht bestehen, wenn die Länge des in das Feld eingegebenen Textes weniger als `minlength` UTF-16-Codeeinheiten beträgt. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### `pattern`

Das `pattern`-Attribut ist ein regulärer Ausdruck, den der [`value`](/de/docs/Web/HTML/Element/input#value) der Eingabe erfüllen muss, um die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) zu bestehen. Es muss ein gültiger JavaScript-Regulärer Ausdruck sein, wie er vom {{jsxref("RegExp")}}-Typ verwendet wird, und wie in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert; das `u`-Flag wird beim Kompilieren des regulären Ausdrucks angegeben, so dass das Muster als Abfolge von Unicode-Codepunkten behandelt wird, anstatt als [ASCII](/de/docs/Glossary/ASCII). Keine Schrägstriche sollten um den Mustertext angegeben werden.

Wenn das angegebene Muster nicht angegeben oder ungültig ist, wird kein regulärer Ausdruck angewendet und dieses Attribut wird vollständig ignoriert.

> [!NOTE]
> Verwenden Sie das [`title`](/de/docs/Web/HTML/Element/input#title)-Attribut, um Text anzugeben, den die meisten Browser als Tooltip anzeigen, um zu erklären, wie die Anforderungen zum Erfüllen des Musters aussehen. Sie sollten auch andere erläuternde Texte in der Nähe einfügen.

Weitere Details und ein Beispiel finden Sie unter [Ein Muster angeben](#ein_muster_angeben).

### `placeholder`

Das `placeholder`-Attribut ist ein String, der dem Benutzer einen kurzen Hinweis darauf gibt, welche Art von Informationen in dem Feld erwartet wird. Es sollte ein Wort oder eine kurze Phrase sein, die den erwarteten Datentyp demonstriert, anstatt eine erläuternde Nachricht zu sein. Der Text _darf keine_ Wagenrückläufe oder Zeilenumbrüche enthalten.

Wenn der Inhalt des Steuerelements eine Richtung ([LTR](/de/docs/Glossary/LTR) oder [RTL](/de/docs/Glossary/RTL)) hat, aber der Platzhalter in der entgegengesetzten Richtung dargestellt werden muss, können Sie Unicode-Bidirektionale-Algo-Formatierelemente verwenden, um die Richtung im Platzhalter zu überschreiben; siehe [Wie man Unicode-Steuerelemente für bidi-Text verwendet](https://www.w3.org/International/questions/qa-bidi-unicode-controls) für weitere Informationen.

> [!NOTE]
> Vermeiden Sie die Verwendung des `placeholder`-Attributs, wenn möglich. Es ist nicht so semantisch nützlich wie andere Methoden, um Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Siehe [`<input>`-Barrierefreiheitsbedenken](/de/docs/Web/HTML/Element/input#accessibility) für weitere Informationen.

### `readonly`

Ein boolesches Attribut, das bedeutet, dass dieses Feld nicht vom Benutzer bearbeitet werden kann, wenn es vorhanden ist. Sein `value` kann jedoch weiterhin geändert werden, indem der JavaScript-Code direkt die `value`-Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) setzt.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keine Wirkung auf Eingaben mit dem ebenfalls angegebenen `readonly`-Attribut.

### `size`

Das `size`-Attribut ist ein numerischer Wert, der angibt, wie viele Zeichen breit das Eingabefeld sein soll. Der Wert muss größer als Null sein, der Standardwert ist 20. Da Zeichenbreiten variieren, kann dies genau oder ungenau sein und sollte nicht darauf vertraut werden, dass dies der Fall ist; die resultierende Eingabe kann schmaler oder breiter sein als die angegebene Anzahl von Zeichen, abhängig von den Zeichen und der Schriftart ({{cssxref("font")}}-Einstellungen, die verwendet werden).

Dies legt _keine_ Grenze dafür fest, wie viele Zeichen Sie in das Feld eingeben können. Es gibt nur an, wie viele Zeichen ungefähr gleichzeitig sichtbar sein können. Um ein obere Grenze für die Länge der Eingabedaten festzulegen, verwenden Sie das [`maxlength`](#maxlength)-Attribut.

### `spellcheck`

Das globale [`spellcheck`](/de/docs/Web/HTML/Global_attributes/spellcheck)-Attribut wird verwendet, um anzugeben, ob für ein Element die Rechtschreibprüfung aktiviert werden soll. Es kann für alle bearbeitbaren Inhalte verwendet werden, doch hier betrachten wir spezifische Aspekte in Bezug auf die Verwendung von `spellcheck` bei {{HTMLElement("input")}}-Elementen. Die erlaubten Werte für `spellcheck` sind:

- `false`
  - : Deaktivieren Sie die Rechtschreibprüfung für dieses Element.
- `true`
  - : Aktivieren Sie die Rechtschreibprüfung für dieses Element.
- `""` (leerer String) oder kein Wert
  - : Folgen Sie dem Standardverhalten des Elements für die Rechtschreibprüfung. Dies kann auf den `spellcheck`-Einstellung eines Elternteils oder anderen Faktoren basieren.

Ein Eingabefeld kann die Rechtschreibprüfung aktiviert haben, wenn nicht das [readonly](#readonly)-Attribut gesetzt ist und es nicht deaktiviert ist.

Der Wert, der durch das Lesen von `spellcheck` zurückgegeben wird, spiegelt möglicherweise nicht den tatsächlichen Zustand der Rechtschreibprüfung innerhalb eines Steuerelements wider, wenn die {{Glossary("user_agent", "Benutzereinstellungen")}} diese Einstellung überschreiben.

## Verwendung von Texteingaben

`<input>`-Elemente des Typs `text` erzeugen einfache, einzeilige Eingaben. Sie sollten sie überall verwenden, wo Sie möchten, dass der Benutzer einen einzeiligen Wert eingibt und kein spezifischeres Eingabetyp verfügbar ist, um diesen Wert zu sammeln (wenn es beispielsweise ein [Datum](/de/docs/Web/HTML/Element/input/datetime-local), eine [URL](/de/docs/Web/HTML/Element/input/url), eine [E-Mail-Adresse](/de/docs/Web/HTML/Element/input/email) oder ein [Suchbegriff](/de/docs/Web/HTML/Element/input/search) ist, haben Sie bessere Optionen zur Verfügung).

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

Dies wird so gerendert:

{{EmbedLiveSample("Basic_example", 600, 80)}}

Wenn das Formular übermittelt wird, wird das Datenname/Wert-Paar an den Server gesendet als `name=Chris` (wenn "Chris" vor der Übermittlung als Eingabewert eingegeben wurde). Sie müssen daran denken, das [`name`](/de/docs/Web/HTML/Element/input#name)-Attribut auf dem {{HTMLElement("input")}}-Element einzuschließen, andernfalls wird der Wert des Textfelds nicht mit den übermittelten Daten einbezogen.

### Platzhalter setzen

Sie können einen nützlichen Platzhalter innerhalb Ihrer Texteingabe bereitstellen, der einen Hinweis darauf geben kann, was eingegeben werden sollte, indem Sie das [`placeholder`](/de/docs/Web/HTML/Element/input#placeholder)-Attribut verwenden. Betrachten Sie das folgende Beispiel:

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

Sie sehen, wie der Platzhalter unten gerendert wird:

{{EmbedLiveSample("Setting_placeholders", 600, 80)}}

Der Platzhalter wird typischerweise in einer helleren Farbe als die Vordergrundfarbe des Elements dargestellt und verschwindet automatisch, wenn der Benutzer beginnt, Text in das Feld einzugeben (oder wann immer das Feld programmatisch durch Setzen seines `value`-Attributs einen Wert erhält).

### Physische Größe des Eingabeelements

Die physische Größe des Eingabefeldes kann mit dem [`size`](/de/docs/Web/HTML/Element/input#size)-Attribut gesteuert werden. Damit können Sie angeben, wie viele Zeichen die Texteingabe gleichzeitig anzeigen kann. Dies beeinträchtigt die Breite des Elements und ermöglicht es Ihnen, die Breite in Zeichen anstelle von Pixeln anzugeben. In diesem Beispiel ist das Eingabefeld 30 Zeichen breit:

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

`<input>`-Elemente des Typs `text` haben keine automatische Validierung, da eine einfache Texteingabe in der Lage sein muss, beliebige Strings zu akzeptieren. Es gibt jedoch einige clientseitige Validierungsoptionen, die wir im Folgenden besprechen werden.

> [!NOTE]
> HTML-Formularvalidierung ist _kein_ Ersatz für Server-Skripte, die sicherstellen, dass die eingegebenen Daten das richtige Format haben. Es ist viel zu einfach, Anpassungen am HTML vorzunehmen, die es jemandem ermöglichen, die Validierung zu umgehen oder sie ganz zu entfernen. Es ist auch möglich, dass jemand Ihr HTML komplett umgeht und die Daten direkt an Ihren Server sendet. Wenn Ihr serverseitiger Code die Daten nicht validiert, könnten katastrophale Folgen auftreten, wenn fehlerhaft formatierte Daten (oder Daten, die zu groß sind, den falschen Typ haben usw.) in Ihre Datenbank eingegeben werden.

### Eine Anmerkung zum Styling

Für das Styling von Formularelementen gibt es nützliche Pseudoklassen, um dem Benutzer anzuzeigen, wann ihre Werte gültig oder ungültig sind. Diese sind {{cssxref(":valid")}} und {{cssxref(":invalid")}}. In diesem Abschnitt verwenden wir das folgende CSS, das ein Häkchen (Tick) neben Eingaben mit gültigen Werten und ein Kreuz (X) neben Eingaben mit ungültigen Werten anzeigt.

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

Die Technik erfordert auch ein {{htmlelement("span")}}-Element, das nach dem Formularelement platziert wird, um als Halter für die Symbole zu fungieren. Dies war notwendig, weil einige Eingabetypen in einigen Browsern Symbole, die direkt nach ihnen platziert werden, nicht sehr gut anzeigen.

### Eingabe erforderlich machen

Sie können das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut verwenden, um einfach das Eingeben eines Wertes erforderlich zu machen, bevor das Formular übermittelt werden kann:

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

Dies wird so gerendert:

{{EmbedLiveSample('Making_input_required', 600, 100)}}

Wenn Sie versuchen, das Formular ohne eingegebenen Suchbegriff zu übermitteln, zeigt der Browser eine Fehlermeldung an.

### Eingabewertlänge

Sie können eine minimale Länge (in Zeichen) für den eingegebenen Wert mit dem [`minlength`](/de/docs/Web/HTML/Element/input#minlength)-Attribut angeben; genauso verwenden Sie [`maxlength`](/de/docs/Web/HTML/Element/input#maxlength) um die maximale Länge des eingegebenen Wertes in Zeichen festzulegen.

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

Dies wird so gerendert:

{{EmbedLiveSample('Input_value_length', 600, 100)}}

Wenn Sie versuchen, das Formular mit weniger als 4 Zeichen zu übermitteln, erhalten Sie eine entsprechende Fehlermeldung (die sich zwischen den Browsern unterscheidet). Wenn Sie versuchen, mehr als 8 Zeichen einzugeben, lässt der Browser dies nicht zu.

> [!NOTE]
> Geben Sie ein `minlength` an, ohne `required` anzugeben, wird die Eingabe als gültig angesehen, da der Benutzer nicht verpflichtet ist, einen Wert anzugeben.

### Ein Muster angeben

Sie können das [`pattern`](/de/docs/Web/HTML/Element/input#pattern)-Attribut verwenden, um einen regulären Ausdruck anzugeben, den der eingegebene Wert erfüllen muss, um als gültig angesehen zu werden (siehe [Validierung gegen einen regulären Ausdruck](/de/docs/Learn/Forms/Form_validation#validating_against_a_regular_expression) für einen einfachen Crash-Kurs zur Verwendung regulärer Ausdrücke zur Validierung von Eingaben).

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

Dies wird so gerendert:

{{EmbedLiveSample('Specifying_a_pattern', 600, 130)}}

## Beispiele

Gute Beispiele für die Kontexteinbindung von Texteingaben finden Sie in unserem Artikel [Ihr erstes HTML-Formular](/de/docs/Learn/Forms/Your_first_form) und [Wie man ein HTML-Formular strukturiert](/de/docs/Learn/Forms/How_to_structure_a_web_form).

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>
        Ein String, der den im Textfeld enthaltenen Text darstellt.
      </td>
    </tr>
    <tr>
      <td><strong>Events</strong></td>
      <td>
        [`change`](/de/docs/Web/API/HTMLElement/change_event) und
        [`input`](/de/docs/Web/API/Element/input_event)
      </td>
    </tr>
    <tr>
      <td><strong>Unterstützte gemeinsame Attribute</strong></td>
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
      <td> ohne <code>list</code>-Attribut:
                <code><a href="/de/docs/Web/Accessibility/ARIA/Roles/textbox_role">textbox</a></code></td>
      <td> mit <code>list</code>-Attribut: <code><a href="/de/docs/Web/Accessibility/ARIA/Roles/combobox_role">combobox</a></code></td>
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
