---
title: <input type="text">
slug: Web/HTML/Element/input/text
l10n:
  sourceCommit: 38cdfeff63f67ebea8effa2866d5a18efdf7e62a
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente des Typs **`text`** erzeugen grundlegende einzeilige Texteingabefelder.

{{EmbedInteractiveExample("pages/tabbed/input-text.html", "tabbed-shorter")}}

## Wert

Das [`value`](/de/docs/Web/HTML/Element/input#value)-Attribut ist ein String, der den aktuellen Wert des in das Textfeld eingegebenen Textes enthält. Sie können diesen Wert mit der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-`value`-Eigenschaft in JavaScript abrufen.

```js
let theText = myTextInput.value;
```

Wenn keine Validierungsbeschränkungen für die Eingabe vorhanden sind (siehe [Validierung](#validierung) für weitere Details), kann der Wert ein leerer String (`""`) sein.

## Zusätzliche Attribute

Zusätzlich zu den Attributen, die auf alle {{HTMLElement("input")}}-Elemente unabhängig von ihrem Typ wirken, unterstützen Texteingaben die folgenden Attribute.

### `list`

Der Wert des `list`-Attributs ist die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements, das sich im selben Dokument befindet. Das {{HTMLElement("datalist")}} bietet eine Liste vordefinierter Werte, die dem Benutzer für diese Eingabe vorgeschlagen werden. Werte in der Liste, die mit dem [`type`](/de/docs/Web/HTML/Element/input#type) nicht kompatibel sind, werden in den vorgeschlagenen Optionen nicht aufgenommen. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert angeben.

### `maxlength`

Die maximale Zeichenlänge (gemessen in UTF-16-Code-Einheiten), die der Benutzer in die `text`-Eingabe eingeben kann. Dies muss ein Ganzzahlenwert von 0 oder höher sein. Wenn keine `maxlength` angegeben wird oder ein ungültiger Wert angegeben wird, hat die `text`-Eingabe keine Maximallänge. Dieser Wert muss auch größer oder gleich dem Wert von `minlength` sein.

Die Eingabe wird die [Einschränkungsprüfung](/de/docs/Web/HTML/Constraint_validation) nicht bestehen, wenn die Länge des Textwerts des Feldes länger als `maxlength` UTF-16-Code-Einheiten ist. Die Einschränkungsprüfung wird nur angewendet, wenn der Wert durch den Benutzer geändert wird.

### `minlength`

Die minimale Zeichenlänge (gemessen in UTF-16-Code-Einheiten), die der Benutzer in die `text`-Eingabe eingeben kann. Dies muss ein nicht-negativer Ganzzahlenwert sein, der kleiner oder gleich dem von `maxlength` angegebenen Wert ist. Wenn kein `minlength` angegeben wird oder ein ungültiger Wert angegeben wird, hat die `text`-Eingabe keine Mindestlänge.

Die Eingabe wird die [Einschränkungsprüfung](/de/docs/Web/HTML/Constraint_validation) nicht bestehen, wenn die Länge des in das Feld eingegebenen Textes kürzer als `minlength` UTF-16-Code-Einheiten ist. Die Einschränkungsprüfung wird nur angewendet, wenn der Wert durch den Benutzer geändert wird.

### `pattern`

Das `pattern`-Attribut ist, wenn angegeben, ein regulärer Ausdruck, den der [`value`](/de/docs/Web/HTML/Element/input#value) der Eingabe erfüllen muss, um die [Einschränkungsprüfung](/de/docs/Web/HTML/Constraint_validation) zu bestehen. Es muss ein gültiger JavaScript-Regulärer Ausdruck sein, wie er vom {{jsxref("RegExp")}}-Typ verwendet wird, und wie in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert ist; das `'u'`-Flag wird beim Kompilieren des regulären Ausdrucks angegeben, damit das Muster als Sequenz von Unicode-Codepunkten und nicht als [ASCII](/de/docs/Glossary/ASCII) behandelt wird. Vorwärtsschrägstriche sollten nicht um den Mustertext angegeben werden.

Wenn das angegebene Muster nicht angegeben wird oder ungültig ist, wird kein regulärer Ausdruck angewendet und dieses Attribut wird vollständig ignoriert.

> [!NOTE]
> Verwenden Sie das [`title`](/de/docs/Web/HTML/Element/input#title)-Attribut, um Text anzugeben, der von den meisten Browsern als Tooltip angezeigt wird, um zu erklären, welche Anforderungen erfüllt werden müssen, um dem Muster zu entsprechen. Sie sollten auch andere erklärende Texte in der Nähe einfügen.

Siehe [Ein Muster angeben](#ein_muster_angeben) für weitere Details und ein Beispiel.

### `placeholder`

Das `placeholder`-Attribut ist ein String, der dem Benutzer einen kurzen Hinweis darauf gibt, welche Art von Informationen im Feld erwartet werden. Es sollte ein Wort oder eine kurze Phrase sein, die den erwarteten Datentyp demonstriert, anstatt eine erklärende Nachricht. Der Text _darf keine_ Wagenrückläufe oder Zeilenumbrüche enthalten.

Wenn der Inhalt des Steuerungselements eine Richtungsangabe hat ([LTR](/de/docs/Glossary/LTR) oder [RTL](/de/docs/Glossary/RTL)), der Platzhalter jedoch in der entgegengesetzten Richtung dargestellt werden muss, können Sie Unicode-Bidirektionale-Algorithmus-Formatierungszeichen verwenden, um die Richtung innerhalb des Platzhalters zu überschreiben; siehe [Wie man Unicode-Kontrollen für bidirektionalen Text verwendet](https://www.w3.org/International/questions/qa-bidi-unicode-controls) für weitere Informationen.

> [!NOTE]
> Vermeiden Sie nach Möglichkeit die Verwendung des `placeholder`-Attributs. Es ist nicht so semantisch nützlich wie andere Methoden, Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Siehe [`<input>` Zugänglichkeitsbedenken](/de/docs/Web/HTML/Element/input#accessibility) für weitere Informationen.

### `readonly`

Ein Boolean-Attribut, das, wenn es vorhanden ist, bedeutet, dass dieses Feld vom Benutzer nicht bearbeitet werden kann. Sein `value` kann jedoch immer noch durch direktes Festlegen der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-`value`-Eigenschaft mittels JavaScript geändert werden.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keine Wirkung auf Eingaben mit dem ebenfalls angegebenen `readonly`-Attribut.

### `size`

Das `size`-Attribut ist ein numerischer Wert, der angibt, wie viele Zeichen breit das Eingabefeld sein soll. Der Wert muss eine Zahl größer als null sein, und der Standardwert ist 20. Da Zeichenbreiten variieren, könnte dies genau oder ungenau sein und sollte nicht darauf verlassen werden; die resultierende Eingabe kann schmaler oder breiter sein als die angegebene Zeichenanzahl, abhängig von den Zeichen und der Schrift ({{cssxref("font")}}-Einstellungen in Gebrauch).

Dies setzt _kein_ Limit dafür, wie viele Zeichen der Benutzer in das Feld eingeben kann. Es gibt nur ungefähr an, wie viele gleichzeitig sichtbar sein können. Um ein oberes Limit für die Länge der Eingabedaten festzulegen, verwenden Sie das [`maxlength`](#maxlength)-Attribut.

### `spellcheck`

Das globale [`spellcheck`](/de/docs/Web/HTML/Global_attributes#spellcheck)-Attribut wird verwendet, um anzugeben, ob eine Rechtschreibprüfung für ein Element aktiviert werden soll. Es kann für jeden bearbeitbaren Inhalt verwendet werden, aber hier betrachten wir spezifische Details zur Verwendung von `spellcheck` auf {{HTMLElement("input")}}-Elementen. Die zulässigen Werte für `spellcheck` sind:

- `false`
  - : Rechtschreibprüfung für dieses Element deaktivieren.
- `true`
  - : Rechtschreibprüfung für dieses Element aktivieren.
- `""` (leerer String) oder kein Wert
  - : Standardverhalten des Elements für die Rechtschreibprüfung befolgen. Dies kann sich auf die `spellcheck`-Einstellung eines übergeordneten Elements oder andere Faktoren stützen.

Ein Eingabefeld kann die Rechtschreibprüfung aktiviert haben, wenn es nicht das [readonly](#readonly)-Attribut gesetzt hat und nicht deaktiviert ist.

Der durch das Lesen von `spellcheck` zurückgegebene Wert spiegelt möglicherweise nicht den tatsächlichen Zustand der Rechtschreibprüfung innerhalb eines Steuerungselements wider, wenn die Einstellungen des [User-Agents](/de/docs/Glossary/user_agent) die Einstellung überschreiben.

## Nicht-standardisierte Attribute

Die folgenden nicht-standardisierten Attribute sind auch in einigen Browsern verfügbar. Als allgemeine Regel sollten Sie deren Verwendung vermeiden, es sei denn, es lässt sich nicht anders machen.

### `autocorrect`

Eine Safari-Erweiterung, das `autocorrect`-Attribut ist ein String, der angibt, ob die automatische Korrektur während der Bearbeitung dieses Feldes aktiviert werden soll. Erlaubte Werte sind:

- `on`
  - : Automatische Korrektur von Tippfehlern sowie Verarbeitung von Textersetzungen aktivieren, wenn welche konfiguriert sind.
- `off`
  - : Automatische Korrektur und Textersetzungen deaktivieren.

## Verwendung von Texteingaben

`<input>`-Elemente des Typs `text` erstellen grundlegende, einzeilige Eingaben. Sie sollten sie überall dort verwenden, wo Sie möchten, dass der Benutzer einen einzeiligen Wert eingibt, und es keinen spezifischeren Eingabetyp gibt, der zum Sammeln dieses Werts verfügbar ist (zum Beispiel, wenn es sich um ein [Datum](/de/docs/Web/HTML/Element/input/datetime-local), eine [URL](/de/docs/Web/HTML/Element/input/url), eine [E-Mail](/de/docs/Web/HTML/Element/input/email) oder einen [Suchbegriff](/de/docs/Web/HTML/Element/input/search) handelt, haben Sie bessere Optionen verfügbar).

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

Wenn das Formular übermittelt wird, wird das Datenpaar Name/Wert, das an den Server gesendet wird, `name=Chris` sein (wenn "Chris" als Eingabewert vor der Übermittlung eingegeben wurde). Sie müssen daran denken, das [`name`](/de/docs/Web/HTML/Element/input#name)-Attribut im {{HTMLElement("input")}}-Element einzuschließen, da sonst der Wert des Textfeldes nicht mit den übermittelten Daten aufgenommen wird.

### Platzhalter festlegen

Sie können einen nützlichen Platzhalter innerhalb Ihrer Texteingabe bereitstellen, der einen Hinweis darauf geben kann, was eingegeben werden soll, indem Sie das [`placeholder`](/de/docs/Web/HTML/Element/input#placeholder)-Attribut verwenden. Schauen Sie sich das folgende Beispiel an:

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

Der Platzhalter wird typischerweise in einer helleren Farbe als die Vordergrundfarbe des Elements dargestellt und verschwindet automatisch, wenn der Benutzer beginnt, Text in das Feld einzugeben (oder wann immer das Feld programmgesteuert durch seine `value`-Eigenschaft gesetzt wird).

### Physische Größe des Eingabeelements

Die physische Größe des Eingabefeldes kann mit dem [`size`](/de/docs/Web/HTML/Element/input#size)-Attribut gesteuert werden. Damit können Sie die Anzahl der Zeichen angeben, die die Texteingabe gleichzeitig anzeigen kann. Dies beeinflusst die Breite des Elements, sodass Sie die Breite in Bezug auf Zeichen anstelle von Pixeln angeben können. In diesem Beispiel ist die Eingabe beispielsweise 30 Zeichen breit:

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

`<input>`-Elemente des Typs `text` haben keine automatische Validierung, da eine grundlegende Texteingabe in der Lage sein muss, beliebige Zeichenfolgen zu akzeptieren. Es gibt jedoch einige clientseitige Validierungsoptionen, die wir unten besprechen werden.

> [!NOTE]
> Die HTML-Formularvalidierung ist _kein_ Ersatz für Server-Skripte, die sicherstellen, dass die eingegebenen Daten im richtigen Format vorliegen. Es ist viel zu einfach für jemanden, die HTML so zu ändern, dass er die Validierung umgehen oder sie ganz entfernen kann. Es ist auch möglich, dass jemand Ihr HTML ganz umgeht und die Daten direkt an Ihren Server sendet. Wenn Ihr serverseitiger Code es versäumt, die empfangenen Daten zu validieren, könnte das zu einem Desaster führen, wenn nicht korrekt formatierte Daten (oder Daten, die zu groß sind, vom falschen Typ sind usw.) in Ihrer Datenbank eingegeben werden.

### Eine Anmerkung zum Styling

Es gibt nützliche Pseudoklassen zum Stylen von Formularelementen, um dem Benutzer anzuzeigen, wann ihre Werte gültig oder ungültig sind. Diese sind {{cssxref(":valid")}} und {{cssxref(":invalid")}}. In diesem Abschnitt verwenden wir das folgende CSS, das ein Häkchen (Zeichen) neben Eingaben mit gültigen Werten und ein Kreuz (X) neben Eingaben mit ungültigen Werten platzieren wird.

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

Die Technik erfordert auch ein {{htmlelement("span")}}-Element, das nach dem Formularelement platziert wird und als Halter für die Symbole dient. Dies war notwendig, da einige Eingabetypen in einigen Browsern Symbole, die direkt nach ihnen platziert sind, nicht sehr gut anzeigen.

### Eingabe erforderlich machen

Sie können das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut verwenden, um auf einfache Weise das Eintragen eines Wertes vor dem Zulassen der Formularübermittlung erforderlich zu machen:

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

Wenn Sie versuchen, das Formular ohne eine eingegebene Suchanfrage zu übermitteln, zeigt der Browser eine Fehlermeldung an.

### Eingabewertlänge

Sie können eine minimale Länge (in Zeichen) für den eingegebenen Wert mit dem [`minlength`](/de/docs/Web/HTML/Element/input#minlength)-Attribut angeben; verwenden Sie analog dazu [`maxlength`](/de/docs/Web/HTML/Element/input#maxlength), um die maximale Länge des eingegebenen Wertes in Zeichen festzulegen.

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

Dies wird so gerendert:

{{EmbedLiveSample('Input_value_length', 600, 100)}}

Wenn Sie versuchen, das Formular mit weniger als 4 Zeichen zu übermitteln, erhalten Sie eine entsprechende Fehlermeldung (die sich zwischen den Browsern unterscheidet). Wenn Sie versuchen, mehr als 8 Zeichen einzugeben, lässt der Browser dies nicht zu.

> [!NOTE]
> Wenn Sie ein `minlength` spezifizieren, aber kein `required`, wird die Eingabe als gültig betrachtet, da der Benutzer nicht verpflichtet ist, einen Wert anzugeben.

### Ein Muster angeben

Sie können das [`pattern`](/de/docs/Web/HTML/Element/input#pattern)-Attribut verwenden, um einen regulären Ausdruck anzugeben, den der eingegebene Wert erfüllen muss, um als gültig betrachtet zu werden (siehe [Validierung gegen einen regulären Ausdruck](/de/docs/Learn/Forms/Form_validation#validating_against_a_regular_expression) für einen kurzen Überblick darüber, wie reguläre Ausdrücke zur Validierung von Eingaben verwendet werden können).

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

Dies wird so gerendert:

{{EmbedLiveSample('Specifying_a_pattern', 600, 130)}}

## Beispiele

Sie können gute Beispiele für Texteingaben im Kontext in unseren Artikeln [Ihr erstes HTML-Formular](/de/docs/Learn/Forms/Your_first_form) und [Wie man ein HTML-Formular strukturiert](/de/docs/Learn/Forms/How_to_structure_a_web_form) sehen.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>
        Ein String, der den im Textfeld enthaltenen Text repräsentiert.
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
