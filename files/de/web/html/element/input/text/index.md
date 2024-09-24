---
title: <input type="text">
slug: Web/HTML/Element/input/text
l10n:
  sourceCommit: 38cdfeff63f67ebea8effa2866d5a18efdf7e62a
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente vom Typ **`text`** erstellen einfache einzeilige Textfelder.

{{EmbedInteractiveExample("pages/tabbed/input-text.html", "tabbed-shorter")}}

## Wert

Das [`value`](/de/docs/Web/HTML/Element/input#value)-Attribut ist ein String, der den aktuellen Wert des in das Textfeld eingegebenen Textes enthält. Sie können dies mit der {{domxref("HTMLInputElement")}} `value`-Eigenschaft in JavaScript abrufen.

```js
let theText = myTextInput.value;
```

Wenn keine Validierungseinschränkungen für die Eingabe festgelegt sind (siehe [Validierung](#validierung) für weitere Details), kann der Wert ein leerer String (`""`) sein.

## Zusätzliche Attribute

Zusätzlich zu den Attributen, die auf alle {{HTMLElement("input")}}-Elemente unabhängig von ihrem Typ wirken, unterstützen Texteingaben die folgenden Attribute.

### `list`

Der Wert des list-Attributs ist die {{domxref("Element.id", "id")}} eines {{HTMLElement("datalist")}}-Elements, das im selben Dokument befindet. Das {{HTMLElement("datalist")}} bietet eine Liste vordefinierter Werte an, um dem Benutzer Vorschläge für diese Eingabe zu geben. Jede Werte in der Liste, die mit dem [`type`](/de/docs/Web/HTML/Element/input#type) nicht kompatibel sind, werden nicht in die vorgeschlagenen Optionen einbezogen. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert eingeben.

### `maxlength`

Die maximale Stringlänge (gemessen in UTF-16 Codeeinheiten), die der Benutzer in die `text`-Eingabe eingeben kann. Dies muss ein ganzzahliger Wert von 0 oder größer sein. Wenn kein `maxlength` angegeben ist oder ein ungültiger Wert angegeben wurde, hat das `text`-Eingabefeld keine maximale Länge. Dieser Wert muss auch gleich oder größer als der Wert von `minlength` sein.

Die Eingabe scheitert an der [Constraint-Validierung](/de/docs/Web/HTML/Constraint_validation), wenn die Länge des Textwertes des Feldes größer als `maxlength` UTF-16 Codeeinheiten ist. Die Constraint-Validierung wird nur angewendet, wenn der Wert durch den Benutzer geändert wird.

### `minlength`

Die minimale Stringlänge (gemessen in UTF-16 Codeeinheiten), die der Benutzer in die `text`-Eingabe eingeben kann. Dies muss ein nicht-negativer ganzzahliger Wert sein, der kleiner oder gleich dem durch `maxlength` angegebenen Wert ist. Wenn kein `minlength` angegeben wurde oder ein ungültiger Wert angegeben wurde, hat das `text`-Eingabefeld keine minimale Länge.

Die Eingabe scheitert an der [Constraint-Validierung](/de/docs/Web/HTML/Constraint_validation), wenn die Länge des in das Feld eingegebenen Texts weniger als `minlength` UTF-16 Codeeinheiten beträgt. Die Constraint-Validierung wird nur angewendet, wenn der Wert durch den Benutzer geändert wird.

### `pattern`

Das `pattern`-Attribut, wenn angegeben, ist ein regulärer Ausdruck, den der [`value`](/de/docs/Web/HTML/Element/input#value) der Eingabe erfüllen muss, damit der Wert die [Constraint-Validierung](/de/docs/Web/HTML/Constraint_validation) besteht. Es muss ein gültiger JavaScript-regulärer Ausdruck sein, wie er durch den {{jsxref("RegExp")}} Typ verwendet wird und wie in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert ist; das `'u'`-Flag wird beim Kompilieren des regulären Ausdrucks angegeben, damit das Muster als Folge von Unicode-Codes behandelt wird, anstatt als {{Glossary("ASCII")}}. Es sollten keine Schrägstriche um den Mustertext angegeben werden.

Wenn das angegebene Muster nicht angegeben oder ungültig ist, wird kein regulärer Ausdruck angewendet und dieses Attribut wird vollständig ignoriert.

> [!NOTE]
> Verwenden Sie das [`title`](/de/docs/Web/HTML/Element/input#title)-Attribut, um Text anzugeben, den die meisten Browser als Tooltip anzeigen, um zu erklären, welche Anforderungen gelten, um das Muster zu erfüllen. Sie sollten auch anderen erläuternden Text in der Nähe enthalten.

Siehe [Angabe eines Musters](#angabe_eines_musters) für weitere Details und ein Beispiel.

### `placeholder`

Das `placeholder`-Attribut ist ein String, der dem Benutzer einen kurzen Hinweis darauf gibt, welche Art von Information im Feld erwartet wird. Es sollte ein Wort oder eine kurze Phrase sein, die den erwarteten Datentyp demonstriert, anstatt eine erläuternde Nachricht zu sein. Der Text _darf_ keine Wagenrückläufe oder Zeilenumbrüche enthalten.

Wenn der Inhalt der Steuerung eine Direktionalität hat ({{Glossary("LTR")}} oder {{Glossary("RTL")}}) aber der Placeholder in der entgegengesetzten Direktionalität präsentiert werden muss, können Sie Unicode-Bidi-Algorithmus-Steuerzeichen verwenden, um die Direktionalität innerhalb des Platzhalters zu überschreiben; siehe [Wie man Unicode-Steuerzeichen für bidi-Text verwendet](https://www.w3.org/International/questions/qa-bidi-unicode-controls) für weitere Informationen.

> [!NOTE]
> Vermeiden Sie nach Möglichkeit die Verwendung des `placeholder`-Attributs. Es ist nicht so semantisch nützlich wie andere Methoden, um Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Siehe [`<input>` Barrierefreiheitsprobleme](/de/docs/Web/HTML/Element/input#accessibility) für weitere Informationen.

### `readonly`

Ein Boolesches Attribut, das, wenn vorhanden, bedeutet, dass dieses Feld nicht vom Benutzer bearbeitet werden kann. Sein `value` kann jedoch immer noch durch JavaScript code direkt über die {{domxref("HTMLInputElement")}} `value`-Eigenschaft geändert werden.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keine Wirkung auf Eingaben mit dem auch spezifizierten `readonly`-Attribut.

### `size`

Das `size`-Attribut ist ein numerischer Wert, der angibt, wie viele Zeichen breit das Eingabefeld sein soll. Der Wert muss eine Zahl größer als Null sein, und der Standardwert ist 20. Da Zeichenbreiten variieren, kann dies mehr oder weniger genau sein und sollte nicht als genau angesehen werden; die resultierende Eingabe kann schmaler oder breiter sein als die angegebene Anzahl von Zeichen, abhängig von den Zeichen und den ({{cssxref("font")}}-Einstellungen in Verwendung).

Dies legt _keine_ Grenze fest, wie viele Zeichen der Benutzer in das Feld eingeben kann. Es gibt nur an, wie viele ungefähr auf einmal gesehen werden können. Um ein Obergrenze für die Länge der Eingabedaten festzulegen, verwenden Sie das [`maxlength`](#maxlength)-Attribut.

### `spellcheck`

Das globale [`spellcheck`](/de/docs/Web/HTML/Global_attributes#spellcheck)-Attribut wird verwendet, um anzugeben, ob die Rechtschreibprüfung für ein Element aktiviert werden soll. Es kann auf jedem bearbeitbaren Inhalt verwendet werden, aber hier betrachten wir die Besonderheiten im Zusammenhang mit der Verwendung von `spellcheck` auf {{HTMLElement("input")}}-Elementen. Die erlaubten Werte für `spellcheck` sind:

- `false`
  - : Deaktivieren Sie die Rechtschreibprüfung für dieses Element.
- `true`
  - : Aktivieren Sie die Rechtschreibprüfung für dieses Element.
- `""` (leer) oder kein Wert
  - : Befolgen Sie das Standardverhalten des Elements für die Rechtschreibprüfung. Dies kann auf einer `spellcheck`-Einstellung des übergeordneten Elements oder anderen Faktoren basieren.

Ein Eingabefeld kann die Rechtschreibprüfung aktiviert haben, wenn es nicht das [readonly](#readonly)-Attribut gesetzt und nicht deaktiviert ist.

Der durch das Lesen von `spellcheck` zurückgegebene Wert spiegelt möglicherweise nicht den tatsächlichen Zustand der Rechtschreibprüfung in einem Steuerelement wider, wenn die {{Glossary("user agent", "Benutzeragent")}}-Präferenzen die Einstellung überschreiben.

## Nicht-standardisierte Attribute

Die folgenden nicht-standardisierten Attribute sind auch auf einigen Browsern verfügbar. Als allgemeine Regel sollten Sie deren Verwendung vermeiden, es sei denn, es ist unvermeidbar.

### `autocorrect`

Eine Erweiterung für Safari, das `autocorrect`-Attribut ist ein String, der angibt, ob die automatische Korrektur aktiviert werden soll, während der Benutzer dieses Feld bearbeitet. Zulässige Werte sind:

- `on`
  - : Aktivieren Sie die automatische Korrektur von Tippfehlern sowie die Verarbeitung von Textersetzungen, falls welche konfiguriert sind.
- `off`
  - : Deaktivieren Sie automatische Korrekturen und Textersetzungen.

## Verwendung von Texteingaben

`<input>`-Elemente vom Typ `text` erstellen einfache, einzeilige Eingabefelder. Sie sollten sie überall dort verwenden, wo der Benutzer einen einzeiligen Wert eingeben soll und kein spezifischerer Eingabetyp für das Erfassen dieses Wertes verfügbar ist (zum Beispiel, wenn es sich um ein [Datum](/de/docs/Web/HTML/Element/input/datetime-local), eine [URL](/de/docs/Web/HTML/Element/input/url), eine [E-Mail](/de/docs/Web/HTML/Element/input/email) oder einen [Suchbegriff](/de/docs/Web/HTML/Element/input/search) handelt, stehen Ihnen bessere Optionen zur Verfügung).

### Einfaches Beispiel

```html
<form>
  <div>
    <label for="uname">Wählen Sie einen Benutzernamen: </label>
    <input type="text" id="uname" name="name" />
  </div>
  <div>
    <button>Absenden</button>
  </div>
</form>
```

Dies wird so angezeigt:

{{EmbedLiveSample("Basic_example", 600, 80)}}

Wenn es übermittelt wird, wird das Daten-Namen/Wert-Paar an den Server gesendet als `name=Chris` (wenn "Chris" als Eingabewert vor der Übermittlung eingegeben wurde). Sie müssen daran denken, dass `name`-Attribut auf dem {{HTMLElement("input")}}-Element einzuschließen, da sonst der Wert des Textfeldes nicht mit den übermittelten Daten einbezogen wird.

### Einstellungen von Platzhaltern

Sie können ein nützlichen Platzhalter innerhalb Ihrer Texteingabe bereitstellen, der einen Hinweis darauf geben kann, was eingegeben werden soll, indem Sie das [`placeholder`](/de/docs/Web/HTML/Element/input#placeholder)-Attribut verwenden. Sehen Sie sich das folgende Beispiel an:

```html
<form>
  <div>
    <label for="uname">Wählen Sie einen Benutzernamen: </label>
    <input
      type="text"
      id="uname"
      name="name"
      placeholder="Kleinbuchstaben, alles in einem Wort" />
  </div>
  <div>
    <button>Absenden</button>
  </div>
</form>
```

Sie können sehen, wie der Platzhalter unten gerendert wird:

{{EmbedLiveSample("Setting_placeholders", 600, 80)}}

Der Platzhalter wird normalerweise in einer helleren Farbe als die Vordergrundfarbe des Elements angezeigt und verschwindet automatisch, wenn der Benutzer beginnt, Text in das Feld einzugeben (oder wann immer der Wert des Feldes programmatisch durch Setzen seines `value`-Attributs festgelegt wird).

### Physische Größe des Eingabeelements

Die physische Größe des Eingabefelds kann mit dem [`size`](/de/docs/Web/HTML/Element/input#size)-Attribut gesteuert werden. Damit können Sie angeben, wie viele Zeichen die Texteingabe gleichzeitig anzeigen kann. Dies wirkt sich auf die Breite des Elements aus, sodass Sie die Breite in Zeichen statt in Pixeln definieren können. In diesem Beispiel ist das Eingabefeld 30 Zeichen breit:

```html
<form>
  <div>
    <label for="uname">Wählen Sie einen Benutzernamen: </label>
    <input
      type="text"
      id="uname"
      name="name"
      placeholder="Kleinbuchstaben, alles in einem Wort"
      size="30" />
  </div>
  <div>
    <button>Absenden</button>
  </div>
</form>
```

{{EmbedLiveSample('Physical_input_element_size', 600, 80)}}

## Validierung

`<input>` Elemente vom Typ `text` haben keine automatische Validierung, da eine einfache Texteingabe in der Lage sein muss, jeden beliebigen String zu akzeptieren. Es gibt jedoch einige clientseitige Validierungsoptionen, die wir unten besprechen werden.

> [!NOTE]
> Die Validierung von HTML-Formularen ersetzt _nicht_ Serverseiten-Skripte, die sicherstellen, dass die eingegebenen Daten im richtigen Format vorliegen. Es ist viel zu einfach für jemanden, Anpassungen am HTML vorzunehmen, die es ihm ermöglichen, die Validierung zu umgehen oder sie ganz zu entfernen. Es ist auch möglich, dass jemand Ihr HTML vollständig umgeht und die Daten direkt an Ihren Server übermittelt. Wenn Ihr Serverseiten-Code die erhaltenen Daten nicht validiert, könnte eine Katastrophe eintreten, wenn falsch formatierte Daten (oder Daten, die zu groß sind, den falschen Typ haben usw.) in Ihre Datenbank eingegeben werden.

### Eine Anmerkung zum Styling

Es gibt nützliche Pseudoklassen, um Formularelemente zu stylen und dem Benutzer anzuzeigen, wenn seine Werte gültig oder ungültig sind. Diese sind {{cssxref(":valid")}} und {{cssxref(":invalid")}}. In diesem Abschnitt werden wir das folgende CSS verwenden, das ein Häkchen bei Eingaben mit gültigen Werten und ein Kreuz bei Eingaben mit ungültigen Werten platziert.

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

Die Technik erfordert auch, dass ein {{htmlelement("span")}}-Element nach dem Formularelement platziert wird, das als Halter für die Icons dient. Dies war erforderlich, da einige Eingabetypen auf einigen Browsern Icons nicht gut anzeigen, die direkt nach ihnen platziert sind.

### Eingabe erforderlich machen

Sie können das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut verwenden, um einfach sicherzustellen, dass vor der Formulargestaltung ein Wert eingegeben werden muss:

```html
<form>
  <div>
    <label for="uname">Wählen Sie einen Benutzernamen: </label>
    <input type="text" id="uname" name="name" required />
    <span class="validity"></span>
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

Dies wird so angezeigt:

{{EmbedLiveSample('Making_input_required', 600, 100)}}

Wenn Sie versuchen, das Formular ohne eingegebenen Suchbegriff abzusenden, zeigt der Browser eine Fehlermeldung an.

### Eingabewertlänge

Sie können eine minimale Länge (in Zeichen) für den eingegebenen Wert mit dem [`minlength`](/de/docs/Web/HTML/Element/input#minlength)-Attribut angeben; analog verwenden Sie [`maxlength`](/de/docs/Web/HTML/Element/input#maxlength), um die maximale Länge des eingegebenen Wertes in Zeichen festzulegen.

Das Beispiel unten fordert, dass der eingegebene Wert 4-8 Zeichen lang ist.

```html
<form>
  <div>
    <label for="uname">Wählen Sie einen Benutzernamen: </label>
    <input
      type="text"
      id="uname"
      name="name"
      required
      size="10"
      placeholder="Benutzername"
      minlength="4"
      maxlength="8" />
    <span class="validity"></span>
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

Dies wird so angezeigt:

{{EmbedLiveSample('Input_value_length', 600, 100)}}

Wenn Sie versuchen, das Formular mit weniger als vier Zeichen abzusenden, erhalten Sie eine entsprechende Fehlermeldung (die je nach Browser unterschiedlich ist). Wenn Sie versuchen, mehr als acht Zeichen einzugeben, lässt der Browser dies nicht zu.

> [!NOTE]
> Wenn Sie ein `minlength`-Attribut angeben, aber kein `required`, wird die Eingabe als gültig betrachtet, da der Benutzer nicht verpflichtet ist, einen Wert anzugeben.

### Angabe eines Musters

Sie können das [`pattern`](/de/docs/Web/HTML/Element/input#pattern)-Attribut verwenden, um einen regulären Ausdruck anzugeben, den der eingegebene Wert erfüllen muss, um als gültig betrachtet zu werden (siehe [Validierung gegen einen regulären Ausdruck](/de/docs/Learn/Forms/Form_validation#validating_against_a_regular_expression) für einen einfachen Schnellkurs über die Verwendung regulärer Ausdrücke zur Validierung von Eingaben).

Das untenstehende Beispiel beschränkt den Wert auf 4-8 Zeichen und fordert, dass er nur aus Kleinbuchstaben besteht.

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
      pattern="[a-z]{4,8}" />
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

Dies wird so angezeigt:

{{EmbedLiveSample('Specifying_a_pattern', 600, 130)}}

## Beispiele

Sie können gute Beispiele für die Verwendung von Texteingaben in unserem Artikel [Ihr erstes HTML-Formular](/de/docs/Learn/Forms/Your_first_form) und [Wie man ein HTML-Formular strukturiert](/de/docs/Learn/Forms/How_to_structure_a_web_form) sehen.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>
        Ein String, der den Text enthält, der im
        Textfeld enthalten ist.
      </td>
    </tr>
    <tr>
      <td><strong>Ereignisse</strong></td>
      <td>
        {{domxref("HTMLElement/change_event", "change")}} und
        {{domxref("Element/input_event", "input")}}
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
      <td><p>{{domxref("HTMLInputElement")}}</p></td>
    </tr>
    <tr>
      <td><strong>Methoden</strong></td>
      <td>
        {{domxref("HTMLInputElement.select", "select()")}},
        {{domxref("HTMLInputElement.setRangeText", "setRangeText()")}}
        und
        {{domxref("HTMLInputElement.setSelectionRange", "setSelectionRange()")}}.
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

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [HTML Forms](/de/docs/Learn/Forms)
- {{HTMLElement("input")}} und die {{domxref("HTMLInputElement")}} Schnittstelle, auf der es basiert.
- [`<input type="search">`](/de/docs/Web/HTML/Element/input/search)
- {{HTMLElement("textarea")}}: Mehrzeilige Texteingabe
- [Kompatibilität von CSS-Eigenschaften](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
