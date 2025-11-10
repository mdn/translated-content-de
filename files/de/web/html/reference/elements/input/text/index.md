---
title: <input type="text">
slug: Web/HTML/Reference/Elements/input/text
l10n:
  sourceCommit: ed6dbfb03ede1bf676e0216f61ae934024b8bddc
---

{{HTMLElement("input")}} Elemente vom Typ **`text`** erstellen grundlegende einzeilige Textfelder.

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

Das [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Attribut ist eine Zeichenkette, die den aktuellen Wert des in das Textfeld eingegebenen Textes enthält. Sie können dies mit der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) `value`-Eigenschaft in JavaScript abrufen.

```js
let theText = myTextInput.value;
```

Wenn keine Validierungsbeschränkungen für die Eingabe bestehen (siehe [Validierung](#validierung) für weitere Details), kann der Wert eine leere Zeichenkette (`""`) sein.

## Zusätzliche Attribute

Zusätzlich zu den [globalen Attributen](/de/docs/Web/HTML/Reference/Global_attributes) und den Attributen, die auf alle {{HTMLElement("input")}} Elemente unabhängig von ihrem Typ wirken, unterstützen Texteingaben die folgenden Attribute.

### `list`

Die Werte des `list`-Attributs sind die [`id`](/de/docs/Web/API/Element/id) eines im selben Dokument befindlichen {{HTMLElement("datalist")}} Elements. Das {{HTMLElement("datalist")}} bietet eine Liste vorgegebener Werte, die dem Benutzer für diese Eingabe vorgeschlagen werden. Alle Werte in der Liste, die mit dem [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) nicht kompatibel sind, werden nicht in die vorgeschlagenen Optionen einbezogen. Die angebotenen Werte sind Vorschläge und keine Anforderungen: Benutzer können aus dieser vorgegebenen Liste auswählen oder einen anderen Wert eingeben.

### `maxlength`

Die maximale Zeichenlänge (gemessen in {{Glossary("UTF-16", "UTF-16-Codeeinheiten")}}), die der Benutzer in die `text`-Eingabe eingeben kann. Dieser muss ein Ganzzahlwert von 0 oder höher sein. Wenn kein `maxlength` angegeben ist oder ein ungültiger Wert angegeben wird, hat die `text`-Eingabe keine maximale Länge. Dieser Wert muss auch größer oder gleich dem Wert von `minlength` sein.

Die Eingabe schlägt bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl, wenn die Länge des Textwertes des Feldes länger als `maxlength` {{Glossary("UTF-16", "UTF-16-Codeeinheiten")}} ist. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### `minlength`

Die minimale Zeichenlänge (gemessen in {{Glossary("UTF-16", "UTF-16-Codeeinheiten")}}), die der Benutzer in die `text`-Eingabe eingeben kann. Dieser muss ein nicht-negativer Ganzzahlwert sein, der kleiner oder gleich dem durch `maxlength` angegebenen Wert ist. Wenn kein `minlength` angegeben ist, oder ein ungültiger Wert angegeben wird, hat die `text`-Eingabe keine Mindestlänge.

Die Eingabe schlägt bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl, wenn die Länge des in das Feld eingegebenen Texts kürzer ist als `minlength` {{Glossary("UTF-16", "UTF-16-Codeeinheiten")}}. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### `pattern`

Das `pattern`-Attribut ist ein regulärer Ausdruck, den der [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) der Eingabe erfüllen muss, damit der Wert die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) besteht. Es muss ein gültiger regulärer Ausdruck in JavaScript sein, wie er vom {{jsxref("RegExp")}}-Typ verwendet wird und in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert ist. Das `'u'`-Flag wird angegeben, wenn der reguläre Ausdruck kompiliert wird, damit das Muster als Folge von Unicode-Codepunkten behandelt wird, anstatt als {{Glossary("ASCII", "ASCII")}}. Es sollten keine Schrägstriche um den Mustertext angegeben werden.

Wenn das angegebene Muster nicht angegeben ist oder ungültig ist, wird kein regulärer Ausdruck angewendet, und dieses Attribut wird vollständig ignoriert.

> [!NOTE]
> Verwenden Sie das [`title`](/de/docs/Web/HTML/Reference/Elements/input#title)-Attribut, um einen Text anzugeben, der von den meisten Browsern als Tooltip angezeigt wird, um zu erklären, welche Anforderungen erfüllt werden müssen, damit das Muster passt. Sie sollten auch anderen erklärenden Text in der Nähe einfassen.

Siehe [Eine Muster spezifizieren](#ein_muster_angeben) für weitere Details und ein Beispiel.

### `placeholder`

Das `placeholder`-Attribut ist eine Zeichenkette, die dem Benutzer einen kurzen Hinweis darauf gibt, welche Art von Information in das Feld erwartet wird. Es sollte ein Wort oder eine kurze Phrase sein, die den erwarteten Datentyp demonstriert, anstatt einer erklärenden Nachricht. Der Text _darf nicht_ Zeilenumbrüche oder Zeilenabschlüsse enthalten.

Wenn der Inhalt des Controls eine Richtung (LTR) oder (RTL) hat, der Placeholder aber in der entgegengesetzten Richtung dargestellt werden muss, können Sie Unicode-Bidi-Formatierungszeichen verwenden, um die Richtung im Placeholder zu überschreiben; siehe [How to use Unicode controls for bidi text](https://www.w3.org/International/questions/qa-bidi-unicode-controls) für weitere Informationen.

> [!NOTE]
> Vermeiden Sie, wenn möglich, die Verwendung des `placeholder`-Attributs. Es ist nicht so semantisch nützlich wie andere Möglichkeiten, Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Siehe [`<input>` Zugänglichkeitsbedenken](/de/docs/Web/HTML/Reference/Elements/input#accessibility) für weitere Informationen.

### `readonly`

Ein boolesches Attribut, das, wenn es vorhanden ist, bedeutet, dass dieses Feld vom Benutzer nicht bearbeitet werden kann. Sein `value` kann jedoch weiterhin durch direktes Setzen der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) `value`-Eigenschaft durch JavaScript-Code geändert werden.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keine Auswirkungen auf Eingaben mit dem ebenfalls angegebenen `readonly`-Attribut.

### `size`

Das `size`-Attribut ist ein numerischer Wert, der angibt, wie viele Zeichen breit das Eingabefeld sein soll. Der Wert muss eine Zahl größer als null sein, und der Standardwert ist 20. Da Zeichenbreiten variieren, ist dies möglicherweise nicht exakt und sollte nicht darauf verlassen werden, dass es so ist; die resultierende Eingabe kann je nach Zeichen und Schriftart ({{cssxref("font")}}-Einstellungen) schmaler oder breiter als die angegebene Anzahl von Zeichen sein.

Dies setzt _keine_ Begrenzung darauf, wie viele Zeichen der Benutzer in das Feld eingeben kann. Es gibt nur an, wie viele Zeichen ungefähr gleichzeitig angezeigt werden können. Um ein oberes Limit für die Länge der Eingabedaten festzulegen, verwenden Sie das [`maxlength`](#maxlength)-Attribut.

### `spellcheck`

Das [`spellcheck`](/de/docs/Web/HTML/Reference/Global_attributes/spellcheck) globale Attribut wird verwendet, um anzugeben, ob die Rechtschreibprüfung für ein Element aktiviert werden soll. Es kann für jeden bearbeitbaren Inhalt verwendet werden, aber hier betrachten wir spezifische Details zur Verwendung von `spellcheck` auf {{HTMLElement("input")}}-Elementen. Die erlaubten Werte für `spellcheck` sind:

- `false`
  - : Deaktivieren Sie die Rechtschreibprüfung für dieses Element.
- `true`
  - : Aktivieren Sie die Rechtschreibprüfung für dieses Element.
- `""` (leere Zeichenkette) oder kein Wert
  - : Befolgen Sie das Standardverhalten des Elements für die Rechtschreibprüfung. Dies kann auf den `spellcheck`-Einstellungen eines Elternteils oder anderen Faktoren basieren.

Ein Eingabefeld kann die Rechtschreibprüfung aktivieren, wenn es nicht das [readonly](#readonly)-Attribut hat und nicht deaktiviert ist.

Der Wert, der durch das Lesen von `spellcheck` zurückgegeben wird, spiegelt möglicherweise nicht den tatsächlichen Zustand der Rechtschreibprüfung innerhalb einer Steuerung wider, wenn die {{Glossary("user_agent", "Nutzeragenten")}}-Präferenzen die Einstellung überschreiben.

## Verwendung von Texteingaben

`<input>`-Elemente vom Typ `text` erstellen grundlegende, einzeilige Eingaben. Sie sollten diese überall verwenden, wo Sie möchten, dass der Benutzer einen einzeiligen Wert eingibt und kein speziellerer Eingabetyp für das Erfassen dieses Wertes verfügbar ist (beispielsweise, wenn es sich um ein [Datum](/de/docs/Web/HTML/Reference/Elements/input/datetime-local), [URL](/de/docs/Web/HTML/Reference/Elements/input/url), [E-Mail](/de/docs/Web/HTML/Reference/Elements/input/email) oder [Suchbegriff](/de/docs/Web/HTML/Reference/Elements/input/search) handelt, stehen bessere Optionen zur Verfügung).

### Grundlegendes Beispiel

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

Wenn gesendet, wird das Daten-Name/Wert-Paar an den Server gesendet als `name=Chris` (wenn "Chris" als Eingabewert vor der Einreichung eingegeben wurde). Sie müssen daran denken, das [`name`](/de/docs/Web/HTML/Reference/Elements/input#name)-Attribut auf dem {{HTMLElement("input")}}-Element einzuschließen, da sonst der Wert des Textfeldes nicht mit den gesendeten Daten berücksichtigt wird.

### Platzhalter setzen

Sie können einen nützlichen Platzhalter in Ihrem Texteingabefeld bieten, der einen Hinweis darauf geben kann, was eingegeben werden soll, indem Sie das [`placeholder`](/de/docs/Web/HTML/Reference/Elements/input#placeholder)-Attribut verwenden. Sehen Sie sich das folgende Beispiel an:

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

Der Platzhalter wird in der Regel in einer helleren Farbe als die Vordergrundfarbe des Elements dargestellt und verschwindet automatisch, wenn der Benutzer beginnt, Text in das Feld einzugeben (oder wann immer das Feld programmgesteuert durch Setzen seines `value`-Attributs einen Wert erhält).

### Physische Größe des Eingabeelements

Die physische Größe des Eingabefelds kann mit dem [`size`](/de/docs/Web/HTML/Reference/Elements/input#size)-Attribut gesteuert werden. Damit können Sie die Anzahl der Zeichen angeben, die das Textinput gleichzeitig anzeigen kann. Dies beeinflusst die Breite des Elements, sodass Sie die Breite in Zeichen, anstatt in Pixeln, angeben können. In diesem Beispiel zum Beispiel ist die Eingabe 30 Zeichen breit:

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

`<input>`-Elemente vom Typ `text` haben keine automatische Validierung, die auf sie angewendet wird (da eine einfache Texteingabe in der Lage sein muss, beliebige Zeichenfolgen zu akzeptieren), aber es gibt einige clientseitige Validierungsoptionen, die wir im Folgenden besprechen werden.

> [!NOTE]
> Die HTML-Formularvalidierung ist _kein_ Ersatz für Serverskripte, die sicherstellen, dass die eingegebenen Daten im richtigen Format vorliegen. Es ist viel zu einfach für jemanden, Anpassungen am HTML vorzunehmen, die es ihm ermöglichen, die Validierung zu umgehen oder sie vollständig zu entfernen. Es ist auch möglich für jemanden, Ihr HTML vollständig zu umgehen und die Daten direkt an Ihren Server zu übermitteln. Wenn Ihr serverseitiger Code die empfangenen Daten nicht validiert, könnte ein Desaster passieren, wenn nicht richtig formatierte Daten (oder Daten, die zu groß sind, falschen Typs sind usw.) in Ihre Datenbank eingegeben werden.

### Eine Anmerkung zur Gestaltung

Für die Gestaltung von Formularelementen, um dem Benutzer anzuzeigen, wann ihre Werte gültig oder ungültig sind, stehen nützliche Pseudoklassen zur Verfügung. Diese sind {{cssxref(":valid")}} und {{cssxref(":invalid")}}. In diesem Abschnitt verwenden wir das folgende CSS, das neben Eingaben mit gültigen Werten ein Häkchen (Tick) und neben Eingaben mit ungültigen Werten ein Kreuz (X) anzeigt.

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

Die Technik erfordert auch, dass ein {{htmlelement("span")}}-Element nach dem Formularelement platziert wird, das als Halter für die Symbole dient. Dies war notwendig, da einige Input-Typen in einigen Browsern Symbole, die direkt nach ihnen platziert sind, nicht gut anzeigen.

### Eingabe erforderlich machen

Sie können das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attribut verwenden, um eine Eingabe vor der Formularübermittlung erforderlich zu machen:

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

Wenn Sie versuchen, das Formular ohne eingetragenen Benutzernamen einzureichen, zeigt der Browser eine Fehlermeldung an.

### Eingabewertlänge

Sie können eine Mindestlänge (in Zeichen) für den eingegebenen Wert mit dem [`minlength`](/de/docs/Web/HTML/Reference/Elements/input#minlength)-Attribut festlegen; ähnlich können Sie das [`maxlength`](/de/docs/Web/HTML/Reference/Elements/input#maxlength)-Attribut verwenden, um die maximale Länge des eingegebenen Wertes in Zeichen festzulegen.

Das Beispiel unten erfordert, dass der eingegebene Wert eine Länge von 4 bis 8 Zeichen hat.

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

Wenn Sie versuchen, das Formular mit weniger als 4 Zeichen einzureichen, erhalten Sie eine entsprechende Fehlermeldung (die sich zwischen den Browsern unterscheidet). Wenn Sie versuchen, mehr als 8 Zeichen einzugeben, lässt der Browser dies nicht zu.

> [!NOTE]
> Wenn Sie eine `minlength` angeben, aber keine `required`-Attribute, wird die Eingabe als gültig betrachtet, da der Benutzer nicht verpflichtet ist, einen Wert anzugeben.

### Ein Muster angeben

Sie können das [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern)-Attribut verwenden, um einen regulären Ausdruck anzugeben, den der eingegebene Wert erfüllen muss, um als gültig angesehen zu werden (siehe [Validierung mit regulären Ausdrücken](/de/docs/Learn_web_development/Extensions/Forms/Form_validation#validating_against_a_regular_expression) für einen Schnellkurs zur Verwendung von regulären Ausdrücken zur Validierung von Eingaben).

Das Beispiel unten schränkt den Wert auf 4–8 Zeichen ein und erfordert, dass er nur Kleinbuchstaben enthält.

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

Dies wird folgendermaßen dargestellt:

{{EmbedLiveSample('Specifying_a_pattern', 600, 130)}}

## Beispiele

Gute Beispiele für die Verwendung von Texteingaben im Kontext finden Sie in unseren Artikeln [Ihr erstes HTML-Formular](/de/docs/Learn_web_development/Extensions/Forms/Your_first_form) und [Wie man ein HTML-Formular strukturiert](/de/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form).

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>
        Eine Zeichenkette, die den Text im Textfeld darstellt.
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

- [HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms)
- {{HTMLElement("input")}} und die [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) Schnittstelle, auf der es basiert.
- [`<input type="search">`](/de/docs/Web/HTML/Reference/Elements/input/search)
- {{HTMLElement("textarea")}}: Mehrzeilige Texteingabe
