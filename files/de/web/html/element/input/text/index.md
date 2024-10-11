---
title: <input type="text">
slug: Web/HTML/Element/input/text
l10n:
  sourceCommit: 816cc4d4a5a318a23222946b6981bb92b499aebb
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente des Typs **`text`** erstellen einfache einzeilige Textfelder.

{{EmbedInteractiveExample("pages/tabbed/input-text.html", "tabbed-shorter")}}

## Wert

Das [`value`](/de/docs/Web/HTML/Element/input#value) Attribut ist ein String, der den aktuellen Wert des in das Textfeld eingegebenen Textes enthält. Sie können diesen mithilfe der `value`-Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) in JavaScript abrufen.

```js
let theText = myTextInput.value;
```

Wenn keine Validierungsbeschränkungen für die Eingabe vorhanden sind (siehe [Validierung](#validierung) für weitere Details), kann der Wert ein leerer String (`""`) sein.

## Zusätzliche Attribute

Zusätzlich zu den Attributen, die auf alle {{HTMLElement("input")}}-Elemente unabhängig von ihrem Typ wirken, unterstützen Texteingaben die folgenden Attribute.

### `list`

Der Wert des `list`-Attributs ist die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements, das sich im selben Dokument befindet. Das {{HTMLElement("datalist")}} bietet eine Liste vordefinierter Werte, die dem Benutzer für diese Eingabe vorgeschlagen werden. Alle Werte in der Liste, die nicht mit dem [`type`](/de/docs/Web/HTML/Element/input#type) kompatibel sind, werden nicht in den vorgeschlagenen Optionen aufgenommen. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert angeben.

### `maxlength`

Die maximale Zeichenlänge (gemessen in UTF-16-Codeeinheiten), die der Benutzer in die `text`-Eingabe eingeben kann. Dies muss ein ganzzahliger Wert von 0 oder höher sein. Wenn kein `maxlength` angegeben ist oder ein ungültiger Wert angegeben wird, hat die `text`-Eingabe keine maximale Länge. Dieser Wert muss auch größer als oder gleich dem Wert von `minlength` sein.

Die Eingabe schlägt bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) fehl, wenn die Länge des Textwertes des Feldes größer ist als `maxlength` UTF-16-Codeeinheiten. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### `minlength`

Die minimale Zeichenlänge (gemessen in UTF-16-Codeeinheiten), die der Benutzer in die `text`-Eingabe eingeben kann. Dies muss ein nicht-negativer ganzzahliger Wert sein, der kleiner als oder gleich dem Wert ist, der durch `maxlength` angegeben wird. Wenn kein `minlength` angegeben ist oder ein ungültiger Wert angegeben wird, hat die `text`-Eingabe keine Mindestlänge.

Die Eingabe schlägt bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) fehl, wenn die Länge des in das Feld eingegebenen Textes kürzer ist als `minlength` UTF-16-Codeeinheiten. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### `pattern`

Das `pattern`-Attribut ist, wenn es angegeben ist, ein regulärer Ausdruck, den der [`value`](/de/docs/Web/HTML/Element/input#value) der Eingabe erfüllen muss, damit der Wert die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) besteht. Es muss ein gültiger JavaScript-Regulärer Ausdruck sein, wie er vom {{jsxref("RegExp")}}-Typ verwendet wird und in unserem [Leitfaden über reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert ist; das `u`-Flag wird beim Kompilieren des regulären Ausdrucks angegeben, sodass das Muster als eine Folge von Unicode-Codepunkten behandelt wird, anstatt als {{Glossary("ASCII", "ASCII")}}. Um das Muster sollten keine Schrägstriche angegeben werden.

Wenn das angegebene Muster nicht angegeben oder ungültig ist, wird kein regulärer Ausdruck angewendet und dieses Attribut wird vollständig ignoriert.

> [!NOTE]
> Verwenden Sie das [`title`](/de/docs/Web/HTML/Element/input#title) Attribut, um Text anzugeben, den die meisten Browser als Tooltip anzeigen, um die Anforderungen zur Erfüllung des Musters zu erklären. Sie sollten auch anderen erklärenden Text in der Nähe einschließen.

Siehe [Spezifizieren eines Musters](#ein_muster_spezifizieren) für weitere Details und ein Beispiel.

### `placeholder`

Das `placeholder`-Attribut ist ein String, der dem Benutzer einen kurzen Hinweis auf die Art der erwarteten Informationen im Feld gibt. Es sollte ein Wort oder eine kurze Phrase sein, die den erwarteten Datentyp demonstriert, anstatt einer erklärenden Nachricht. Der Text _darf_ keine Wagenrückläufe oder Zeilenumbrüche enthalten.

Wenn der Inhalt des Steuerelements eine Richtung (entweder {{Glossary("LTR", "LTR")}} oder {{Glossary("RTL", "RTL")}}) hat, der Platzhalter jedoch in der entgegengesetzten Richtung angezeigt werden muss, können Sie Unicode-Bidi-Algorithmus-Formatierungszeichen verwenden, um die Richtung im Platzhalter zu überschreiben; siehe [Wie man Unicode-Steuerzeichen für Bidirektionalen Text verwendet](https://www.w3.org/International/questions/qa-bidi-unicode-controls) für weitere Informationen.

> [!NOTE]
> Vermeiden Sie es, das `placeholder`-Attribut zu verwenden, wenn Sie können. Es ist nicht so semantisch nützlich wie andere Möglichkeiten, Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Siehe [`<input>`-Barrierefreiheitshinweise](/de/docs/Web/HTML/Element/input#accessibility) für mehr Informationen.

### `readonly`

Ein Boolesches Attribut, das, wenn vorhanden, bedeutet, dass dieses Feld vom Benutzer nicht bearbeitet werden kann. Sein `value` kann jedoch weiterhin vom JavaScript-Code durch direktes Setzen der `value`-Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) geändert werden.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keine Wirkung auf Eingaben, bei denen auch das `readonly`-Attribut angegeben ist.

### `size`

Das `size`-Attribut ist ein numerischer Wert, der angibt, wie viele Zeichen breit das Eingabefeld sein soll. Der Wert muss eine Zahl größer als Null sein, und der Standardwert ist 20. Da sich Zeichenbreiten unterscheiden, kann dies mehr oder weniger genau sein und sollte nicht darauf vertraut werden; die resultierende Eingabe könnte schmaler oder breiter als die angegebene Anzahl von Zeichen sein, abhängig von den Zeichen und den verwendeten Schriftarten ({{cssxref("font")}}-Einstellungen).

Dies setzt _kein_ Limit für die Anzahl der Zeichen, die der Benutzer in das Feld eingeben kann. Es gibt lediglich an, wie viele ungefähr gleichzeitig zu sehen sind. Um ein oberes Limit für die Länge der Eingabedaten festzulegen, verwenden Sie das [`maxlength`](#maxlength)-Attribut.

### `spellcheck`

Das globale Attribut [`spellcheck`](/de/docs/Web/HTML/Global_attributes/spellcheck) wird verwendet, um anzugeben, ob die Rechtschreibprüfung für ein Element aktiviert werden soll. Es kann für alle bearbeitbaren Inhalte verwendet werden, doch hier betrachten wir spezielle Aspekte bezüglich der Verwendung von `spellcheck` auf {{HTMLElement("input")}}-Elementen. Die erlaubten Werte für `spellcheck` sind:

- `false`
  - : Deaktivieren der Rechtschreibprüfung für dieses Element.
- `true`
  - : Aktivieren der Rechtschreibprüfung für dieses Element.
- `""` (leerer String) oder kein Wert
  - : Dem Standardverhalten des Elements für die Rechtschreibprüfung folgen. Dies kann auf der `spellcheck`-Einstellung eines übergeordneten Elements oder anderen Faktoren basieren.

Ein Eingabefeld kann die Rechtschreibprüfung aktiviert haben, wenn es nicht das [readonly](#readonly)-Attribut gesetzt hat und nicht deaktiviert ist.

Der Wert, der durch das Lesen von `spellcheck` zurückgegeben wird, kann möglicherweise nicht den tatsächlichen Zustand der Rechtschreibprüfung innerhalb eines Steuerungselements widerspiegeln, wenn die Einstellungen des {{Glossary("user_agent", "Benutzeragenten")}} die Einstellung überschreiben.

## Nicht-standardmäßige Attribute

Die folgenden nicht-standardmäßigen Attribute sind auch in einigen Browsern verfügbar. Als allgemeine Regel sollten Sie sie nur verwenden, wenn es nicht anders geht.

### `autocorrect`

Eine Safari-Erweiterung, das `autocorrect`-Attribut ist ein String, der angibt, ob die automatische Korrektur beim Bearbeiten dieses Feldes aktiviert werden soll. Erlaubte Werte sind:

- `on`
  - : Aktivieren der automatischen Korrektur von Tippfehlern sowie die Verarbeitung von Textsubstitutionen, falls konfiguriert.
- `off`
  - : Deaktivieren der automatischen Korrektur und Textsubstitutionen.

## Verwendung von Texteingaben

`<input>`-Elemente des Typs `text` erstellen einfache, einzeilige Eingaben. Sie sollten sie überall dort verwenden, wo der Benutzer einen einzeiligen Wert eingeben soll und es keinen spezifischeren Eingabetyp gibt, der zur Erfassung dieses Wertes verfügbar ist (zum Beispiel, wenn es sich um ein [Datum](/de/docs/Web/HTML/Element/input/datetime-local), eine [URL](/de/docs/Web/HTML/Element/input/url), eine [E-Mail-Adresse](/de/docs/Web/HTML/Element/input/email) oder einen [Suchbegriff](/de/docs/Web/HTML/Element/input/search) handelt, haben Sie bessere Optionen zur Verfügung).

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

Beim Absenden wird das Daten Name/Wert-Paar, das an den Server gesendet wird, `name=Chris` sein (wenn "Chris" vor der Übermittlung als Eingabewert eingegeben wurde). Sie müssen sicherstellen, dass das [`name`](/de/docs/Web/HTML/Element/input#name)-Attribut im {{HTMLElement("input")}}-Element enthalten ist, da andernfalls der Wert des Textfeldes nicht mit den übermittelten Daten eingeschlossen wird.

### Platzhalter festlegen

Sie können einen nützlichen Platzhalter in Ihrem Texteingabefeld bereitstellen, der einen Hinweis darauf gibt, was eingegeben werden sollte, indem Sie das [`placeholder`](/de/docs/Web/HTML/Element/input#placeholder)-Attribut verwenden. Schauen Sie sich das folgende Beispiel an:

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

Der Platzhalter wird typischerweise in einer helleren Farbe als die Vordergrundfarbe des Elements angezeigt und verschwindet automatisch, wenn der Benutzer beginnt, Text in das Feld einzugeben (oder wann immer das Feld programmgesteuert durch Setzen seines `value`-Attributs einen Wert erhält).

### Physische Größe des Eingabeelements

Die physische Größe des Eingabefelds kann mithilfe des [`size`](/de/docs/Web/HTML/Element/input#size)-Attributs gesteuert werden. Damit können Sie die Anzahl der Zeichen festlegen, die die Texteingabe auf einmal anzeigen kann. Dies beeinflusst die Breite des Elements und ermöglicht es Ihnen, die Breite in Form von Zeichen anstatt von Pixeln anzugeben. In diesem Beispiel ist die Eingabe beispielsweise 30 Zeichen breit:

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

`<input>`-Elemente des Typs `text` haben keine automatische Validierung, da eine grundlegende Texteingabe in der Lage sein muss, beliebige Zeichenfolgen zu akzeptieren. Es gibt jedoch einige clientseitige Validierungsoptionen verfügbar, die wir im Folgenden besprechen.

> [!NOTE]
> Die HTML-Formularvalidierung ist _kein_ Ersatz für Serverskripte, die sicherstellen, dass die eingegebenen Daten im richtigen Format vorliegen. Es ist viel zu leicht für jemanden, das HTML so zu ändern, dass er die Validierung umgehen oder sie vollständig entfernen kann. Es ist auch möglich, dass jemand Ihr HTML vollständig umgeht und die Daten direkt an Ihren Server sendet. Wenn Ihr serverseitiger Code die empfangenen Daten nicht validiert, kann es zu Katastrophen kommen, wenn unsachgemäß formatierte Daten (oder Daten, die zu groß sind, den falschen Typ haben usw.) in Ihre Datenbank eingegeben werden.

### Eine Anmerkung zur Gestaltung

Es gibt nützliche Pseudoklassen für die Gestaltung von Formularelementen, um dem Benutzer anzuzeigen, wann ihre Werte gültig oder ungültig sind. Diese sind {{cssxref(":valid")}} und {{cssxref(":invalid")}}. In diesem Abschnitt verwenden wir das folgende CSS, das ein Häkchen (Tick) neben Eingaben mit gültigen Werten und ein Kreuz (X) neben Eingaben mit ungültigen Werten platziert.

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

Die Technik erfordert auch ein {{htmlelement("span")}}-Element, das nach dem Formularelement platziert wird und als Halter für die Symbole dient. Dies war notwendig, da einige Eingabetypen in einigen Browsern Symbole, die direkt nach ihnen platziert werden, nicht gut anzeigen.

### Eingabe erforderlich machen

Sie können das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut als einfache Möglichkeit verwenden, um das Eingeben eines Wertes erforderlich zu machen, bevor eine Formularübermittlung erlaubt ist:

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

Wenn Sie versuchen, das Formular ohne Eingabe eines Suchbegriffs abzusenden, zeigt der Browser eine Fehlermeldung an.

### Eingabewertlänge

Sie können eine Mindestlänge (in Zeichen) für den eingegebenen Wert mit dem [`minlength`](/de/docs/Web/HTML/Element/input#minlength)-Attribut angeben; verwenden Sie entsprechend [`maxlength`](/de/docs/Web/HTML/Element/input#maxlength), um die maximale Länge des eingegebenen Wertes in Zeichen festzulegen.

Das folgende Beispiel erfordert, dass der eingegebene Wert 4-8 Zeichen lang ist.

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

Wenn Sie versuchen, das Formular mit weniger als 4 Zeichen abzuschicken, erhalten Sie eine entsprechende Fehlermeldung (die je nach Browser unterschiedlich ist). Wenn Sie versuchen, mehr als 8 Zeichen einzugeben, lässt der Browser dies nicht zu.

> [!NOTE]
> Wenn Sie ein `minlength` spezifizieren, jedoch kein `required`, wird die Eingabe als gültig angesehen, da der Benutzer keinen Wert angeben muss.

### Ein Muster spezifizieren

Sie können das [`pattern`](/de/docs/Web/HTML/Element/input#pattern)-Attribut verwenden, um einen regulären Ausdruck anzugeben, den der eingegebene Wert erfüllen muss, um als gültig zu gelten (siehe [Validierung gegen einen regulären Ausdruck](/de/docs/Learn/Forms/Form_validation#validating_against_a_regular_expression) für einen einfachen Einführungskurs zur Verwendung von regulären Ausdrücken zur Validierung von Eingaben).

Das folgende Beispiel beschränkt den Wert auf 4–8 Zeichen und erfordert, dass er nur Kleinbuchstaben enthält.

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

Gute Beispiele für in Kontext verwendete Texteingaben finden Sie in unseren Artikeln [Ihr erstes HTML-Formular](/de/docs/Learn/Forms/Your_first_form) und [Wie man ein HTML-Formular strukturiert](/de/docs/Learn/Forms/How_to_structure_a_web_form).

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>
        Ein String, der den Text enthält, der im
        Textfeld steht.
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
- {{HTMLElement("input")}} und die darauf basierende [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle.
- [`<input type="search">`](/de/docs/Web/HTML/Element/input/search)
- {{HTMLElement("textarea")}}: Mehrzeilige Texteingabe
- [Kompatibilität von CSS-Eigenschaften](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
