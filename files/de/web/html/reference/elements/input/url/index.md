---
title: HTML-Attributwert `<input type="url">`
short-title: <input type="url">
slug: Web/HTML/Reference/Elements/input/url
l10n:
  sourceCommit: 46afd57950146568819d0bf98175a2ffdbe079d7
---

{{HTMLElement("input")}}-Elemente vom Typ **`url`** ermöglichen es Benutzern, eine URL einzugeben und zu bearbeiten.

Der Eingabewert wird automatisch darauf geprüft, ob er entweder leer oder eine korrekt formatierte URL ist, bevor das Formular gesendet werden kann. Die CSS-Pseudoklassen {{cssxref(":valid")}} und {{cssxref(":invalid")}} werden entsprechend angewendet, um sichtbar zu machen, ob der aktuelle Feldwert eine gültige URL ist.

{{InteractiveExample("HTML Demo: &lt;input type=&quot;url&quot;&gt;", "tabbed-shorter")}}

```html interactive-example
<label for="url">Enter an https:// URL:</label>
<input
  type="url"
  name="url"
  id="url"
  placeholder="https://example.com"
  pattern="https://.*"
  size="30"
  required />
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

Das Attribut [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) des {{HTMLElement("input")}}-Elements enthält eine Zeichenfolge, die automatisch auf Übereinstimmung mit der URL-Syntax geprüft wird. Genauer gesagt bestehen zwei mögliche Wertformate die Validierung:

1. Eine leere Zeichenfolge ("") zeigt an, dass der Benutzer keinen Wert eingegeben hat oder dass der Wert entfernt wurde.
2. Eine einzelne, korrekt formatierte absolute URL. Das bedeutet nicht unbedingt, dass die URL-Adresse existiert, aber sie ist zumindest korrekt formatiert. Eine Eingabe nach dem Muster `urlscheme://rest-of-url` kann gültig sein, selbst wenn das eingegebene `urlscheme` nicht existiert.

Weitere Informationen dazu, wie URLs auf korrekte Formatierung geprüft werden, finden Sie unter [Validierung](#validierung).

## Zusätzliche Attribute

Neben den [globalen Attributen](/de/docs/Web/HTML/Reference/Global_attributes) und den Attributen, die für alle {{HTMLElement("input")}}-Elemente unabhängig von ihrem Typ gelten, unterstützen `url`-Eingabefelder die folgenden Attribute.

> [!NOTE]
> Das globale Attribut [`autocorrect`](/de/docs/Web/HTML/Reference/Global_attributes/autocorrect) kann zu `url`-Eingabefeldern hinzugefügt werden, der gespeicherte Zustand ist jedoch immer `off`.

### list

Der Wert des Attributs `list` ist die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements im selben Dokument. Das {{HTMLElement("datalist")}}-Element stellt eine Liste vordefinierter Werte bereit, die dem Benutzer für dieses Eingabefeld vorgeschlagen werden. Werte in der Liste, die nicht mit dem [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) kompatibel sind, werden nicht in die Vorschläge aufgenommen. Die bereitgestellten Werte sind Vorschläge, keine Vorgaben: Benutzer können einen Wert aus der vordefinierten Liste auswählen oder einen anderen Wert eingeben.

### maxlength

Die maximale Länge der Zeichenfolge (gemessen in {{Glossary("UTF-16", "UTF-16-Codeeinheiten")}}), die der Benutzer in das `url`-Eingabefeld eingeben kann. Der Wert muss eine ganze Zahl ab `0` sein. Wenn `maxlength` nicht angegeben ist oder einen ungültigen Wert hat, hat das `url`-Eingabefeld keine maximale Länge. Der Wert muss außerdem größer oder gleich dem Wert von `minlength` sein.

Das Eingabefeld besteht die [Constraint-Validierung](/de/docs/Web/HTML/Guides/Constraint_validation) nicht, wenn der Textwert des Feldes länger als `maxlength` {{Glossary("UTF-16", "UTF-16-Codeeinheiten")}} ist. Die Constraint-Validierung wird nur angewendet, wenn der Benutzer den Wert ändert.

### minlength

Die minimale Länge der Zeichenfolge (gemessen in {{Glossary("UTF-16", "UTF-16-Codeeinheiten")}}), die der Benutzer in das `url`-Eingabefeld eingeben kann. Der Wert muss eine nicht negative ganze Zahl sein, die kleiner oder gleich dem durch `maxlength` angegebenen Wert ist. Wenn `minlength` nicht angegeben ist oder einen ungültigen Wert hat, hat das `url`-Eingabefeld keine minimale Länge.

Das Eingabefeld besteht die [Constraint-Validierung](/de/docs/Web/HTML/Guides/Constraint_validation) nicht, wenn der in das Feld eingegebene Text kürzer als `minlength` {{Glossary("UTF-16", "UTF-16-Codeeinheiten")}} ist. Die Constraint-Validierung wird nur angewendet, wenn der Benutzer den Wert ändert.

### pattern

Das Attribut `pattern` gibt, falls vorhanden, einen regulären Ausdruck an, mit dem der [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) des Eingabefelds übereinstimmen muss, um die [Constraint-Validierung](/de/docs/Web/HTML/Guides/Constraint_validation) zu bestehen. Es muss sich um einen gültigen regulären JavaScript-Ausdruck handeln, wie er vom Typ {{jsxref("RegExp")}} verwendet und in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) beschrieben wird. Beim Kompilieren des regulären Ausdrucks wird das Flag `'u'` gesetzt, damit das Muster als Folge von Unicode-Codepunkten und nicht als {{Glossary("ASCII", "ASCII")}} behandelt wird. Der Mustertext darf nicht von Schrägstrichen umschlossen sein.

Wenn das Muster nicht angegeben oder ungültig ist, wird kein regulärer Ausdruck angewendet und das Attribut vollständig ignoriert.

> [!NOTE]
> Verwenden Sie das Attribut [`title`](/de/docs/Web/HTML/Reference/Elements/input#title), um einen Text anzugeben, den die meisten Browser als Tooltip anzeigen und der die Anforderungen für die Übereinstimmung mit dem Muster erklärt. Sie sollten außerdem einen weiteren erklärenden Text in der Nähe einfügen.

Einzelheiten und ein Beispiel finden Sie im Abschnitt [Validierung anhand eines Musters](#validierung_anhand_eines_musters).

### placeholder

Das Attribut `placeholder` enthält eine Zeichenfolge, die dem Benutzer einen kurzen Hinweis darauf gibt, welche Informationen im Feld erwartet werden. Es sollte ein Wort oder eine kurze Wortgruppe sein, die den erwarteten Datentyp veranschaulicht, und keine ausführliche Erklärung. Der Text darf _keine_ Wagenrückläufe oder Zeilenumbrüche enthalten.

Wenn der Inhalt des Steuerelements eine Schreibrichtung hat ({{Glossary("LTR", "LTR")}} oder {{Glossary("RTL", "RTL")}}), der Platzhalter aber in der entgegengesetzten Schreibrichtung dargestellt werden soll, können Sie Formatierungszeichen des bidirektionalen Unicode-Algorithmus verwenden, um die Schreibrichtung innerhalb des Platzhalters zu ändern. Weitere Informationen finden Sie unter [Unicode-Steuerzeichen für bidirektionalen Text verwenden](https://www.w3.org/International/questions/qa-bidi-unicode-controls).

> [!NOTE]
> Vermeiden Sie nach Möglichkeit das Attribut `placeholder`. Es ist semantisch weniger hilfreich als andere Möglichkeiten, Ihr Formular zu erläutern, und kann unerwartete technische Probleme mit Ihren Inhalten verursachen. Weitere Informationen finden Sie unter [Beschriftungen für `<input>`](/de/docs/Web/HTML/Reference/Elements/input#labels).

### readonly

Wenn das boolesche Attribut [`readonly`](/de/docs/Web/HTML/Reference/Attributes/readonly) vorhanden ist, kann der Benutzer dieses Feld nicht bearbeiten. Sein `value` kann jedoch weiterhin durch JavaScript-Code geändert werden, der die `value`-Eigenschaft von [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) direkt setzt.

> [!NOTE]
> Da für ein schreibgeschütztes Feld kein Wert erforderlich sein kann, hat [`required`](/de/docs/Web/HTML/Reference/Attributes/required) bei Eingabefeldern mit dem Attribut `readonly` keine Wirkung.

### size

Das Attribut `size` ist ein numerischer Wert, der angibt, wie viele Zeichen breit das Eingabefeld sein soll. Der Wert muss größer als null sein; der Standardwert ist 20. Da Zeichen unterschiedlich breit sind, ist diese Angabe möglicherweise nicht exakt und sollte nicht als exakte Breitenangabe betrachtet werden. Je nach Zeichen und verwendeter Schriftart (den {{cssxref("font")}}-Einstellungen) kann das resultierende Eingabefeld schmaler oder breiter als die angegebene Zeichenanzahl sein.

Dadurch wird _nicht_ begrenzt, wie viele Zeichen der Benutzer in das Feld eingeben kann. Es wird nur ungefähr festgelegt, wie viele Zeichen gleichzeitig sichtbar sind. Um die Länge der Eingabedaten nach oben zu begrenzen, verwenden Sie das Attribut [`maxlength`](#maxlength).

### spellcheck

Das globale Attribut [`spellcheck`](/de/docs/Web/HTML/Reference/Global_attributes/spellcheck) gibt an, ob die Rechtschreibprüfung für ein Element aktiviert werden soll. Es kann für jeden bearbeitbaren Inhalt verwendet werden; hier betrachten wir die Besonderheiten bei der Verwendung von `spellcheck` für {{HTMLElement("input")}}-Elemente. Zulässige Werte für `spellcheck` sind:

- `false`
  - : Deaktiviert die Rechtschreibprüfung für dieses Element.
- `true`
  - : Aktiviert die Rechtschreibprüfung für dieses Element.
- "" (leere Zeichenfolge) oder kein Wert
  - : Übernimmt das Standardverhalten des Elements für die Rechtschreibprüfung. Dieses kann von der `spellcheck`-Einstellung eines übergeordneten Elements oder von anderen Faktoren abhängen.

Für ein Eingabefeld kann die Rechtschreibprüfung aktiviert werden, wenn das Attribut [readonly](#readonly) nicht gesetzt und das Feld nicht deaktiviert ist.

Der beim Lesen von `spellcheck` zurückgegebene Wert spiegelt möglicherweise nicht den tatsächlichen Zustand der Rechtschreibprüfung in einem Steuerelement wider, wenn die Einstellungen des {{Glossary("user_agent", "User Agents")}} die Einstellung überschreiben.

## URL-Eingabefelder verwenden

Wenn Sie ein URL-Eingabefeld mit dem passenden `type`-Wert `url` erstellen, wird automatisch geprüft, ob der eingegebene Text zumindest so formatiert ist, dass er eine gültige URL sein könnte. So lässt sich vermeiden, dass Benutzer die Adresse ihrer Website falsch eingeben oder eine ungültige Adresse angeben.

Beachten Sie jedoch, dass dies nicht ausreicht, um sicherzustellen, dass die angegebene URL tatsächlich existiert, dem Benutzer der Website zugeordnet ist oder anderweitig akzeptabel ist. Es stellt lediglich sicher, dass der Feldwert als URL korrekt formatiert ist.

> [!NOTE]
> Benutzer können Ihr HTML im Hintergrund verändern. Ihre Website darf sich daher _nicht_ aus Sicherheitsgründen auf diese Validierung verlassen. Sie _müssen_ die URL serverseitig bei jeder Transaktion überprüfen, bei der der angegebene Text in irgendeiner Weise sicherheitsrelevant sein könnte.

### Ein einfaches URL-Eingabefeld

Dieses Element wird als normales Texteingabefeld mit grundlegenden Validierungsfunktionen umgesetzt. In seiner einfachsten Form kann ein URL-Eingabefeld so implementiert werden:

```html
<input id="myURL" name="myURL" type="url" />
```

{{ EmbedLiveSample('A_basic_URL_input', 600, 40) }}

Beachten Sie, dass das Feld sowohl leer als auch mit einer einzelnen korrekt formatierten URL-Adresse als gültig gilt, andernfalls jedoch nicht. Wenn Sie das Attribut [`required`](/de/docs/Web/HTML/Reference/Elements/input#required) hinzufügen, sind nur korrekt formatierte URLs zulässig; ein leeres Eingabefeld gilt dann nicht mehr als gültig.

Hier geschieht nichts Besonderes. Beim Absenden dieses Formulars würden die folgenden Daten an den Server gesendet: `myURL=http%3A%2F%2Fwww.example.com`. Beachten Sie, wie Zeichen bei Bedarf maskiert werden.

### Platzhalter

Manchmal ist es hilfreich, direkt im Eingabefeld einen Hinweis darauf zu geben, welches Format die Eingabedaten haben sollen. Das kann besonders wichtig sein, wenn das Seitendesign keine aussagekräftigen Beschriftungen für jedes {{HTMLElement("input")}}-Element vorsieht. Hier kommen **Platzhalter** ins Spiel. Ein Platzhalter veranschaulicht anhand eines gültigen Beispielwerts, welches Format der `value` haben soll. Er wird im Eingabefeld angezeigt, wenn der `value` des Elements "" ist. Sobald Daten in das Feld eingegeben werden, verschwindet der Platzhalter; wird das Feld geleert, erscheint er erneut.

Hier verwenden wir ein `url`-Eingabefeld mit dem Platzhalter `http://www.example.com`. Beachten Sie, wie der Platzhalter beim Bearbeiten des Feldinhalts verschwindet und wieder erscheint.

```html
<input
  id="myURL"
  name="myURL"
  type="url"
  placeholder="http://www.example.com" />
```

{{ EmbedLiveSample('Placeholders', 600, 40) }}

### Größe und Länge der Eingabe steuern

Sie können sowohl die sichtbare Breite des Eingabefelds als auch die zulässige Mindest- und Höchstlänge des eingegebenen Textes steuern.

#### Sichtbare Größe des Eingabeelements

Die sichtbare Größe des Eingabefelds lässt sich mit dem Attribut [`size`](/de/docs/Web/HTML/Reference/Elements/input#size) steuern. Damit können Sie angeben, wie viele Zeichen das Eingabefeld gleichzeitig anzeigen kann. In diesem Beispiel ist das `url`-Eingabefeld beispielsweise 30 Zeichen breit:

```html
<input id="myURL" name="myURL" type="url" size="30" />
```

{{ EmbedLiveSample('Physical_input_element_size', 600, 40) }}

#### Länge des Elementwerts

`size` ist unabhängig von der Längenbeschränkung der eingegebenen URL. Mit dem Attribut [`minlength`](/de/docs/Web/HTML/Reference/Elements/input#minlength) können Sie eine Mindestlänge in Zeichen für die eingegebene URL festlegen; mit [`maxlength`](/de/docs/Web/HTML/Reference/Elements/input#maxlength) legen Sie entsprechend die Höchstlänge fest. Wenn `maxLength` größer als `size` ist, wird der Inhalt des Eingabefelds bei Bedarf gescrollt, damit die aktuelle Auswahl oder Einfügeposition während der Bearbeitung sichtbar bleibt.

Das folgende Beispiel erstellt ein 30 Zeichen breites Eingabefeld für eine URL-Adresse. Sein Inhalt muss mindestens 10 und darf höchstens 80 Zeichen lang sein.

```html
<input
  id="myURL"
  name="myURL"
  type="url"
  size="30"
  minlength="10"
  maxlength="80" />
```

{{EmbedLiveSample("Element_value_length", 600, 40) }}

> [!NOTE]
> Diese Attribute wirken sich auch auf die Validierung aus: Ein Wert, der kürzer oder länger als die festgelegte Mindest- beziehungsweise Höchstlänge ist, wird als ungültig eingestuft. Außerdem verhindern die meisten Browser, dass Benutzer einen Wert eingeben, der länger als die festgelegte Höchstlänge ist.

### Standardoptionen bereitstellen

#### Einen einzelnen Standardwert mit dem Attribut value bereitstellen

Wie üblich können Sie einen Standardwert für ein `url`-Eingabefeld festlegen, indem Sie sein Attribut [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) setzen:

```html
<input id="myURL" name="myURL" type="url" value="http://www.example.com" />
```

{{EmbedLiveSample("Providing_a_single_default_using_the_value_attribute", 600, 40)}}

#### Werte vorschlagen

Darüber hinaus können Sie mit dem Attribut [`list`](/de/docs/Web/HTML/Reference/Elements/input#list) eine Liste vordefinierter Optionen bereitstellen, aus denen Benutzer auswählen können. Die Auswahl ist nicht auf diese Optionen beschränkt, aber häufig verwendete URLs lassen sich so schneller auswählen. Die Liste liefert auch Hinweise für [`autocomplete`](/de/docs/Web/HTML/Reference/Elements/input#autocomplete). Das Attribut `list` gibt die ID eines {{HTMLElement("datalist")}}-Elements an, das wiederum für jeden vorgeschlagenen Wert ein {{HTMLElement("option")}}-Element enthält. Der `value` jedes `option`-Elements ist der entsprechende Vorschlagswert für das URL-Eingabefeld.

```html
<input id="myURL" name="myURL" type="url" list="defaultURLs" />

<datalist id="defaultURLs">
  <option value="https://developer.mozilla.org/"></option>
  <option value="http://www.google.com/"></option>
  <option value="http://www.microsoft.com/"></option>
  <option value="https://www.mozilla.org/"></option>
  <option value="http://w3.org/"></option>
</datalist>
```

{{EmbedLiveSample("Offering_suggested_values", 600, 40)}}

Mit dem {{HTMLElement("datalist")}}-Element und seinen {{HTMLElement("option")}}-Elementen bietet der Browser die angegebenen Werte als mögliche URLs an. Üblicherweise erscheinen die Vorschläge in einem Popup- oder Dropdown-Menü. Die genaue Bedienung kann sich je nach Browser unterscheiden. In der Regel wird beim Klicken in das Eingabefeld eine Dropdown-Liste mit vorgeschlagenen URLs angezeigt. Während der Benutzer tippt, wird die Liste auf passende Werte eingegrenzt. Jedes eingegebene Zeichen schränkt die Liste weiter ein, bis der Benutzer einen Vorschlag auswählt oder einen eigenen Wert eingibt.

#### Beschriftungen für vorgeschlagene Werte verwenden

Sie können bei einem oder allen `<option>`-Elementen das Attribut [`label`](/de/docs/Web/HTML/Reference/Elements/option#label) hinzufügen, um Textbeschriftungen bereitzustellen. Manche Browser zeigen möglicherweise nur die Beschriftungen an, andere sowohl die Beschriftung als auch die URL.

```html
<input id="myURL" name="myURL" type="url" list="defaultURLs" />

<datalist id="defaultURLs">
  <option value="https://developer.mozilla.org/" label="MDN Web Docs"></option>
  <option value="http://www.google.com/" label="Google"></option>
  <option value="http://www.microsoft.com/" label="Microsoft"></option>
  <option value="https://www.mozilla.org/" label="Mozilla"></option>
  <option value="http://w3.org/" label="W3C"></option>
</datalist>
```

{{EmbedLiveSample("Using_labels_for_suggested_values", 600, 40)}}

## Validierung

Für `url`-Eingabefelder stehen zwei Ebenen der Inhaltsvalidierung zur Verfügung. Zunächst gibt es die Standardvalidierung für alle {{HTMLElement("input")}}-Elemente. Sie stellt automatisch sicher, dass der Inhalt die Anforderungen an eine gültige URL erfüllt. Zusätzlich können Sie eine weitere Prüfung hinzufügen, um gegebenenfalls eigene Anforderungen durchzusetzen.

> [!WARNING]
> Die HTML-Formularvalidierung ist _kein_ Ersatz für Skripte, die sicherstellen, dass eingegebene Daten das richtige Format haben. Es ist viel zu einfach, das HTML so zu verändern, dass die Validierung umgangen oder vollständig entfernt wird. Außerdem kann jemand Ihr HTML vollständig umgehen und Daten direkt an Ihren Server senden. Wenn Ihr serverseitiger Code die empfangenen Daten nicht validiert, kann die Eingabe falsch formatierter Daten – oder beispielsweise zu großer Daten oder Daten des falschen Typs – in Ihre Datenbank schwerwiegende Folgen haben.

### Grundlegende Validierung

Browser, die den Eingabetyp `url` unterstützen, prüfen automatisch, ob der in das Eingabefeld eingegebene Text dem Standardformat für URLs entspricht.

Die Syntax einer URL ist recht komplex. Sie wird durch den [URL Living Standard](https://url.spec.whatwg.org/) der WHATWG definiert und für Einsteiger in unserem Artikel [Was ist eine URL?](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL) beschrieben.

### Eine URL zur Pflichtangabe machen

Wie bereits erwähnt, müssen Sie lediglich das Attribut [`required`](/de/docs/Web/HTML/Reference/Elements/input#required) zum Eingabefeld hinzufügen, wenn vor dem Absenden des Formulars eine URL eingegeben werden muss und das Feld nicht leer bleiben darf.

### Validierung anhand eines Musters

Wenn Sie die eingegebene URL stärker einschränken müssen als auf „eine beliebige Zeichenfolge, die wie eine URL aussieht“, können Sie mit dem Attribut [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern) einen {{Glossary("regular_expression", "regulären Ausdruck")}} angeben, mit dem der Wert übereinstimmen muss, um gültig zu sein.

## Beispiele

### URL-Validierung

In diesem Beispiel stellen wir mit dem Attribut [`required`](/de/docs/Web/HTML/Reference/Elements/input#required) sicher, dass eine URL eingegeben wird. Zur Veranschaulichung verwenden wir außerdem das Attribut [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern), um die URL auf `mozilla.org` zu beschränken.

#### HTML

Im `url`-Eingabefeld setzen wir `pattern` auf `".*\.mozilla\.org.*"`. Dieser reguläre Ausdruck akzeptiert eine Zeichenfolge mit beliebig vielen Zeichen, gefolgt von „.mozilla.org“ und anschließend beliebig vielen weiteren Zeichen. Da der Browser den angegebenen Text sowohl mit dem Standardfilter für URLs _als auch_ mit unserem eigenen Muster prüft, muss der Wert eine gültige URL sein und außerdem `.mozilla.org` enthalten.

Beachten Sie, dass ein strengeres Muster wie `https://developer\.mozilla\.org.*` robuster wäre, in diesem Fall aber das Attribut `type="url"` überflüssig machen würde.

Das Attribut [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title) beschreibt das `pattern` außerdem für Benutzer assistiver Technologien.

```html live-sample___url-validation
<form>
  <label for="myURL">
    Enter a url from this site:
    <input
      id="myURL"
      name="myURL"
      type="url"
      required
      pattern=".*\.mozilla\.org.*"
      title="URL should include mozilla.org" />
    <span class="validity"></span>
  </label>
  <button>Submit</button>
</form>
```

```js hidden live-sample___url-validation
document.querySelectorAll("form").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
  });
});
```

#### CSS

Das CSS gibt Benutzern durch eine passende {{cssxref("content")}}-Eigenschaft visuelle Hinweise darauf, ob der Inhalt {{cssxref(":valid")}} oder {{cssxref(":invalid")}} ist, und enthält [Alternativtext](/de/docs/Web/CSS/Reference/Properties/content#alternative_text_string_counter_attr) für Benutzer assistiver Technologien.

```css live-sample___url-validation
input:focus:invalid {
  outline: 2px solid red;
}

input:focus:valid {
  outline: 2px solid green;
}

input + span {
  padding: 0 0.3rem;
}

input:invalid + span::after {
  content: "✖" / "Content is not valid";
  color: red;
}

input:valid + span::after {
  content: "✓" / "Content is valid";
  color: green;
}
```

#### Ergebnis

Kopieren Sie die URL dieser Seite und fügen Sie sie in das Eingabefeld ein. Daraufhin sehen Sie einen grünen Rahmen und ein grünes Häkchen. Geben Sie eine andere URL ein, die **mozilla.org** nicht enthält, oder eine ungültige URL, sehen Sie einen roten Rahmen und ein rotes Kreuz.

{{EmbedLiveSample("url-validation", "40px", , , , , "allow-forms")}}

Weitere Beispiele finden Sie in den Abschnitten [Validierung anhand eines Musters](#validierung_anhand_eines_musters) und [URL-Eingabefelder verwenden](#url-eingabefelder_verwenden).

## Technische Übersicht

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>Eine Zeichenfolge, die eine URL darstellt, oder eine leere Zeichenfolge</td>
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
      <td>
        <code>list</code>, <code>value</code>, <code>selectionEnd</code>,
        <code>selectionDirection</code>
      </td>
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

- [Leitfaden für HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms)
- {{HTMLElement("input")}}
- [`<input type="tel">`](/de/docs/Web/HTML/Reference/Elements/input/tel)
- [`<input type="email">`](/de/docs/Web/HTML/Reference/Elements/input/email)
