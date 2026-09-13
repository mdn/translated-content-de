---
title: HTML-Attributwert `<input type="url">`
short-title: <input type="url">
slug: Web/HTML/Reference/Elements/input/url
l10n:
  sourceCommit: 100cf25d92d3953f3c70ecaa2af637d5e42179d8
---

{{HTMLElement("input")}}-Elemente vom Typ **`url`** werden verwendet, damit Benutzer eine URL eingeben und bearbeiten können.

Der Eingabewert wird automatisch validiert, um sicherzustellen, dass er entweder leer oder eine korrekt formatierte URL ist, bevor das Formular übermittelt werden kann. Die CSS-Pseudoklassen {{cssxref(":valid")}} und {{cssxref(":invalid")}} werden automatisch entsprechend angewendet, um visuell anzuzeigen, ob der aktuelle Wert des Feldes eine gültige URL ist oder nicht.

{{InteractiveExample("HTML Demo: &lt;input type=&quot;url&quot;&gt;", "tabbed-shorter")}}

```html interactive-example
<form>
  <label for="url">Enter an https:// URL:</label>
  <input
    type="url"
    name="url"
    id="url"
    placeholder="https://example.com"
    pattern="https://.*"
    size="30"
    required />
</form>
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

Das Attribut [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) des {{HTMLElement("input")}}-Elements enthält einen String, der automatisch darauf validiert wird, ob er der URL-Syntax entspricht. Genauer gesagt gibt es zwei mögliche Wertformate, welche die Validierung bestehen:

1. Ein leerer String ("") zeigt an, dass der Benutzer keinen Wert eingegeben oder den Wert entfernt hat.
2. Eine einzelne, korrekt gebildete absolute URL. Dies bedeutet nicht zwingend, dass die URL-Adresse existiert, sie ist aber zumindest korrekt formatiert. Ein Eintrag, der `urlscheme://rest-of-url` entspricht, kann gültig sein, auch wenn das eingegebene `urlscheme` nicht existiert.

Weitere Informationen darüber, wie URLs validiert werden, um sicherzustellen, dass sie korrekt formatiert sind, finden Sie unter [Validierung](#validierung).

## Zusätzliche Attribute

Zusätzlich zu den [globalen Attributen](/de/docs/Web/HTML/Reference/Global_attributes) und den Attributen, die unabhängig von ihrem Typ auf alle {{HTMLElement("input")}}-Elemente wirken, unterstützen `url`-Eingaben die folgenden Attribute.

> [!NOTE]
> Das globale Attribut [`autocorrect`](/de/docs/Web/HTML/Reference/Global_attributes/autocorrect) kann zu URL-Eingaben hinzugefügt werden, der gespeicherte Zustand ist jedoch immer `off`.

### list

Der Wert des Attributs `list` ist die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements, das sich im selben Dokument befindet. Das {{HTMLElement("datalist")}} stellt eine Liste vordefinierter Werte bereit, die dem Benutzer für diese Eingabe vorgeschlagen werden. Werte in der Liste, die nicht mit [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) kompatibel sind, werden nicht in die vorgeschlagenen Optionen aufgenommen. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert angeben.

### maxlength

Die maximale Stringlänge (gemessen in {{Glossary("UTF-16", "UTF-16-Code-Einheiten")}}), die der Benutzer in die `url`-Eingabe eingeben kann. Dies muss ein ganzzahliger Wert von `0` oder höher sein. Wenn kein `maxlength` angegeben wird oder ein ungültiger Wert angegeben wird, hat die `url`-Eingabe keine maximale Länge. Dieser Wert muss außerdem größer oder gleich dem Wert von `minlength` sein.

Die Eingabe besteht die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) nicht, wenn die Länge des Textwerts des Feldes größer als `maxlength` {{Glossary("UTF-16", "UTF-16-Code-Einheiten")}} ist. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### minlength

Die minimale Stringlänge (gemessen in {{Glossary("UTF-16", "UTF-16-Code-Einheiten")}}), die der Benutzer in die `url`-Eingabe eingeben kann. Dies muss ein nicht negativer ganzzahliger Wert sein, der kleiner oder gleich dem durch `maxlength` angegebenen Wert ist. Wenn kein `minlength` angegeben wird oder ein ungültiger Wert angegeben wird, hat die `url`-Eingabe keine Mindestlänge.

Die Eingabe besteht die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) nicht, wenn die Länge des in das Feld eingegebenen Textes weniger als `minlength` {{Glossary("UTF-16", "UTF-16-Code-Einheiten")}} beträgt. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### pattern

Das Attribut `pattern` ist, falls angegeben, ein regulärer Ausdruck, dem der [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) der Eingabe entsprechen muss, damit der Wert die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) besteht. Er muss ein gültiger JavaScript-regulärer Ausdruck sein, wie er vom Typ {{jsxref("RegExp")}} verwendet wird und wie in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert; beim Kompilieren des regulären Ausdrucks wird das Flag `'u'` angegeben, damit das Muster als Folge von Unicode-Codepunkten und nicht als {{Glossary("ASCII", "ASCII")}} behandelt wird. Um den Mustertext herum dürfen keine Schrägstriche angegeben werden.

Wenn das angegebene Muster nicht vorhanden oder ungültig ist, wird kein regulärer Ausdruck angewendet und dieses Attribut vollständig ignoriert.

> [!NOTE]
> Verwenden Sie das Attribut [`title`](/de/docs/Web/HTML/Reference/Elements/input#title), um Text anzugeben, den die meisten Browser als Tooltip anzeigen, um zu erklären, welche Anforderungen erfüllt sein müssen, damit das Muster übereinstimmt. Sie sollten außerdem weiteren erläuternden Text in der Nähe hinzufügen.

Weitere Informationen und ein Beispiel finden Sie im Abschnitt [Musterprüfung](#musterprüfung).

### placeholder

Das Attribut `placeholder` ist ein String, der dem Benutzer einen kurzen Hinweis darauf gibt, welche Art von Informationen im Feld erwartet wird. Es sollte ein Wort oder eine kurze Phrase sein, die den erwarteten Datentyp veranschaulicht, und keine erläuternde Nachricht. Der Text _darf keine_ Wagenrückläufe oder Zeilenvorschübe enthalten.

Wenn der Inhalt des Steuerelements eine Schreibrichtung ({{Glossary("LTR", "LTR")}} oder {{Glossary("RTL", "RTL")}}) besitzt, der Platzhalter jedoch in der entgegengesetzten Schreibrichtung dargestellt werden muss, können Sie Unicode-Formatierungszeichen des bidirektionalen Algorithmus verwenden, um die Schreibrichtung innerhalb des Platzhalters zu überschreiben. Weitere Informationen finden Sie unter [How to use Unicode controls for bidi text](https://www.w3.org/International/questions/qa-bidi-unicode-controls).

> [!NOTE]
> Vermeiden Sie nach Möglichkeit die Verwendung des Attributs `placeholder`. Es ist semantisch nicht so nützlich wie andere Möglichkeiten, Ihr Formular zu erläutern, und kann unerwartete technische Probleme mit Ihren Inhalten verursachen. Weitere Informationen finden Sie unter [`<input>`-Labels](/de/docs/Web/HTML/Reference/Elements/input#labels).

### readonly

Das boolesche Attribut [`readonly`](/de/docs/Web/HTML/Reference/Attributes/readonly) bedeutet, falls vorhanden, dass dieses Feld nicht vom Benutzer bearbeitet werden kann. Sein `value` kann jedoch weiterhin durch JavaScript-Code geändert werden, der die Eigenschaft `value` von [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) direkt setzt.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat [`required`](/de/docs/Web/HTML/Reference/Attributes/required) keine Wirkung auf Eingaben, bei denen auch das Attribut `readonly` angegeben ist.

### size

Das Attribut `size` ist ein numerischer Wert, der angibt, wie viele Zeichen breit das Eingabefeld sein soll. Der Wert muss eine Zahl größer als null sein; der Standardwert ist 20. Da Zeichenbreiten variieren, kann dies exakt sein oder auch nicht und sollte nicht als exakt angenommen werden; die resultierende Eingabe kann je nach Zeichen und verwendeter Schriftart ({{cssxref("font")}}-Einstellungen) schmaler oder breiter als die angegebene Anzahl von Zeichen sein.

Dadurch wird _keine_ Begrenzung dafür festgelegt, wie viele Zeichen der Benutzer in das Feld eingeben kann. Es wird nur ungefähr angegeben, wie viele gleichzeitig sichtbar sein können. Um eine Obergrenze für die Länge der Eingabedaten festzulegen, verwenden Sie das Attribut [`maxlength`](#maxlength).

### spellcheck

Das globale Attribut [`spellcheck`](/de/docs/Web/HTML/Reference/Global_attributes/spellcheck) wird verwendet, um anzugeben, ob die Rechtschreibprüfung für ein Element aktiviert werden soll. Es kann für jeden bearbeitbaren Inhalt verwendet werden, aber hier betrachten wir Besonderheiten im Zusammenhang mit der Verwendung von `spellcheck` bei {{HTMLElement("input")}}-Elementen. Die zulässigen Werte für `spellcheck` sind:

- `false`
  - : Deaktiviert die Rechtschreibprüfung für dieses Element.
- `true`
  - : Aktiviert die Rechtschreibprüfung für dieses Element.
- "" (leerer String) oder kein Wert
  - : Folgt dem Standardverhalten des Elements für die Rechtschreibprüfung. Dies kann auf der `spellcheck`-Einstellung eines Elternelements oder anderen Faktoren basieren.

Für ein Eingabefeld kann die Rechtschreibprüfung aktiviert sein, wenn das Attribut [readonly](#readonly) nicht gesetzt und das Feld nicht deaktiviert ist.

Der durch Auslesen von `spellcheck` zurückgegebene Wert spiegelt möglicherweise nicht den tatsächlichen Zustand der Rechtschreibprüfung innerhalb eines Steuerelements wider, wenn die Einstellungen des {{Glossary("user_agent", "User-Agents")}} die Einstellung überschreiben.

## Verwendung von URL-Eingaben

Wenn Sie eine URL-Eingabe mit dem korrekten `type`-Wert `url` erstellen, erhalten Sie eine automatische Validierung, dass der eingegebene Text zumindest die korrekte Form hat, um möglicherweise eine legitime URL zu sein. Dies kann helfen, Fälle zu vermeiden, in denen der Benutzer die Adresse seiner Website falsch eingibt oder eine ungültige Adresse angibt.

Es ist jedoch wichtig zu beachten, dass dies nicht ausreicht, um sicherzustellen, dass der angegebene Text eine URL ist, die tatsächlich existiert, dem Benutzer der Website entspricht oder auf andere Weise akzeptabel ist. Es stellt sicher, dass der Wert des Feldes korrekt formatiert ist, um eine URL zu sein.

> [!NOTE]
> Ein Benutzer kann Ihr HTML im Hintergrund manipulieren. Ihre Website _darf diese Validierung daher nicht_ für Sicherheitszwecke verwenden. Sie _müssen_ die URL serverseitig bei jeder Transaktion überprüfen, bei der der bereitgestellte Text Sicherheitsauswirkungen jeglicher Art haben könnte.

### Eine grundlegende URL-Eingabe

Dieses Element wird als Standard-Texteingabefeld mit grundlegenden Validierungsfunktionen implementiert. In seiner einfachsten Form kann eine URL-Eingabe wie folgt implementiert werden:

```html
<input id="myURL" name="myURL" type="url" />
```

{{ EmbedLiveSample('A_basic_URL_input', 600, 40) }}

Beachten Sie, dass sie als gültig gilt, wenn sie leer ist und wenn eine einzelne gültig formatierte URL-Adresse eingegeben wird, ansonsten jedoch nicht. Durch Hinzufügen des Attributs [`required`](/de/docs/Web/HTML/Reference/Elements/input#required) sind nur korrekt gebildete URLs erlaubt; die Eingabe gilt nicht mehr als gültig, wenn sie leer ist.

Hier geschieht nichts Magisches. Das Übermitteln dieses Formulars würde dazu führen, dass die folgenden Daten an den Server gesendet werden: `myURL=http%3A%2F%2Fwww.example.com`. Beachten Sie, wie Zeichen bei Bedarf maskiert werden.

### Platzhalter

Manchmal ist es hilfreich, einen kontextbezogenen Hinweis darauf zu geben, welche Form die Eingabedaten haben sollten. Dies kann besonders wichtig sein, wenn das Seitendesign keine beschreibenden Labels für jedes {{HTMLElement("input")}} bietet. Hier kommen **Platzhalter** ins Spiel. Ein Platzhalter ist ein Wert, der anhand eines Beispiels für einen gültigen Wert veranschaulicht, welche Form `value` haben sollte. Er wird im Bearbeitungsfeld angezeigt, wenn der `value` des Elements "". Sobald Daten in das Feld eingegeben werden, verschwindet der Platzhalter; wird das Feld geleert, erscheint der Platzhalter wieder.

Hier haben wir eine `url`-Eingabe mit dem Platzhalter `http://www.example.com`. Beachten Sie, wie der Platzhalter verschwindet und wieder erscheint, wenn Sie den Inhalt des Bearbeitungsfelds ändern.

```html
<input
  id="myURL"
  name="myURL"
  type="url"
  placeholder="http://www.example.com" />
```

{{ EmbedLiveSample('Placeholders', 600, 40) }}

### Steuern der Eingabegröße

Sie können sowohl die physische Länge des Eingabefelds als auch die erlaubten Mindest- und Maximallängen für den Eingabetext steuern.

#### Physische Größe des Eingabeelements

Die physische Größe des Eingabefelds kann über das Attribut [`size`](/de/docs/Web/HTML/Reference/Elements/input#size) gesteuert werden. Damit können Sie die Anzahl der Zeichen angeben, die das Eingabefeld gleichzeitig anzeigen kann. In diesem Beispiel ist das `url`-Bearbeitungsfeld beispielsweise 30 Zeichen breit:

```html
<input id="myURL" name="myURL" type="url" size="30" />
```

{{ EmbedLiveSample('Physical_input_element_size', 600, 40) }}

#### Länge des Elementwerts

`size` ist von der Längenbegrenzung der eingegebenen URL selbst getrennt. Sie können mit dem Attribut [`minlength`](/de/docs/Web/HTML/Reference/Elements/input#minlength) eine Mindestlänge der eingegebenen URL in Zeichen angeben; verwenden Sie entsprechend [`maxlength`](/de/docs/Web/HTML/Reference/Elements/input#maxlength), um die maximale Länge der eingegebenen URL festzulegen. Wenn `maxLength` größer als `size` ist, scrollt der Inhalt des Eingabefelds bei Bedarf, um die aktuelle Auswahl oder Einfügemarke anzuzeigen, während der Inhalt bearbeitet wird.

Das folgende Beispiel erstellt ein 30 Zeichen breites Eingabefeld für URL-Adressen und erfordert, dass der Inhalt mindestens 10 und höchstens 80 Zeichen lang ist.

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
> Diese Attribute beeinflussen auch die Validierung; ein Wert, der kürzer oder länger als die angegebenen Mindest-/Maximallängen ist, wird als ungültig klassifiziert. Außerdem lassen die meisten Browser den Benutzer keinen Wert eingeben, der länger als die angegebene Maximallänge ist.

### Standardoptionen bereitstellen

#### Einen einzelnen Standardwert mit dem value-Attribut bereitstellen

Wie immer können Sie einen Standardwert für ein `url`-Eingabefeld angeben, indem Sie dessen Attribut [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) setzen:

```html
<input id="myURL" name="myURL" type="url" value="http://www.example.com" />
```

{{EmbedLiveSample("Providing_a_single_default_using_the_value_attribute", 600, 40)}}

#### Vorgeschlagene Werte anbieten

Als Erweiterung können Sie durch Angabe des Attributs [`list`](/de/docs/Web/HTML/Reference/Elements/input#list) eine Liste von Standardoptionen bereitstellen, aus denen der Benutzer auswählen kann. Dies beschränkt den Benutzer nicht auf diese Optionen, ermöglicht ihm jedoch, häufig verwendete URLs schneller auszuwählen. Außerdem bietet dies Hinweise für [`autocomplete`](/de/docs/Web/HTML/Reference/Elements/input#autocomplete). Das Attribut `list` gibt die ID eines {{HTMLElement("datalist")}} an, das wiederum ein {{HTMLElement("option")}}-Element für jeden vorgeschlagenen Wert enthält; der `value` jeder `option` ist der entsprechende vorgeschlagene Wert für das URL-Eingabefeld.

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

Wenn das {{HTMLElement("datalist")}}-Element und seine {{HTMLElement("option")}}s vorhanden sind, bietet der Browser die angegebenen Werte als mögliche Werte für die URL an; dies wird üblicherweise als Popup- oder Dropdown-Menü mit den Vorschlägen dargestellt. Die konkrete Benutzererfahrung kann zwar von Browser zu Browser variieren, aber typischerweise wird beim Klicken in das Bearbeitungsfeld ein Dropdown mit den vorgeschlagenen URLs angezeigt. Während der Benutzer tippt, wird die Liste angepasst, sodass nur übereinstimmende Werte angezeigt werden. Jedes eingegebene Zeichen grenzt die Liste weiter ein, bis der Benutzer eine Auswahl trifft oder einen benutzerdefinierten Wert eingibt.

#### Labels für vorgeschlagene Werte verwenden

Sie können das Attribut [`label`](/de/docs/Web/HTML/Reference/Elements/option#label) bei einem oder allen Ihren `<option>`-Elementen verwenden, um Textlabels bereitzustellen. Einige Browser zeigen möglicherweise nur die Labels an, während andere sowohl das Label als auch die URL anzeigen.

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

Für `url`-Eingaben sind zwei Ebenen der Inhaltsvalidierung verfügbar. Erstens gibt es die Standardvalidierung, die für alle {{HTMLElement("input")}}s angeboten wird und automatisch sicherstellt, dass der Inhalt die Anforderungen für eine gültige URL erfüllt. Darüber hinaus besteht die Möglichkeit, zusätzliche Filter hinzuzufügen, um eigene spezielle Anforderungen zu erfüllen, falls vorhanden.

> [!WARNING]
> Die HTML-Formularvalidierung ist _kein_ Ersatz für Skripte, die sicherstellen, dass die eingegebenen Daten das korrekte Format haben. Es ist viel zu einfach, Änderungen am HTML vorzunehmen, die es ermöglichen, die Validierung zu umgehen oder sie vollständig zu entfernen. Außerdem kann jemand Ihr HTML vollständig umgehen und die Daten direkt an Ihren Server übermitteln. Wenn Ihr serverseitiger Code die empfangenen Daten nicht validiert, kann dies zu schwerwiegenden Problemen führen, wenn falsch formatierte Daten (oder Daten, die zu groß sind, den falschen Typ haben usw.) in Ihre Datenbank eingegeben werden.

### Grundlegende Validierung

Browser, die den Eingabetyp `url` unterstützen, stellen automatisch eine Validierung bereit, um sicherzustellen, dass nur Text in das Eingabefeld eingegeben wird, der dem Standardformat für URLs entspricht.

Die Syntax einer URL ist recht komplex. Sie wird durch den [URL Living Standard](https://url.spec.whatwg.org/) der WHATWG definiert und für Einsteiger in unserem Artikel [What is a URL?](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL) beschrieben.

### Eine URL erforderlich machen

Wie bereits erwähnt, müssen Sie nur das Attribut [`required`](/de/docs/Web/HTML/Reference/Elements/input#required) zur Eingabe hinzufügen, um die Eingabe einer URL vor dem Übermitteln des Formulars erforderlich zu machen (das Feld darf nicht leer bleiben).

### Musterprüfung

Wenn die eingegebene URL stärker eingeschränkt werden soll als auf „jeder String, der wie eine URL aussieht“, können Sie das Attribut [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern) verwenden, um einen {{Glossary("regular_expression", "regulären Ausdruck")}} anzugeben, dem der Wert entsprechen muss, damit er gültig ist.

## Beispiele

### URL-Validierung

In diesem Beispiel stellen wir mithilfe des Attributs [`required`](/de/docs/Web/HTML/Reference/Elements/input#required) sicher, dass eine URL eingegeben wird, und veranschaulichen mithilfe des Attributs [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern), dass die URL auf `mozilla.org` liegt.

#### HTML

In der `url`-Eingabe setzen wir `pattern` auf `".*\.mozilla\.org.*"`. Dieser reguläre Ausdruck validiert einen String, der eine beliebige Anzahl von Zeichen enthält, gefolgt von „.mozilla.org“ und anschließend einer beliebigen Anzahl von Zeichen. Da der Browser sowohl den Standard-URL-Filter _als auch_ unser benutzerdefiniertes Muster auf den angegebenen Text anwendet, erhalten wir eine Validierung mit der Aussage: „Stellen Sie sicher, dass dies eine gültige URL ist und außerdem `.mozilla.org` enthält.“

Beachten Sie, dass ein strenges Muster wie `https://developer\.mozilla\.org.*` robuster wäre, das Attribut `type="url"` in diesem Fall jedoch überflüssig machen würde.

Das Attribut [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title) beschreibt das `pattern` auch für Benutzer assistiver Technologien.

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

#### CSS

Das CSS gibt visuelle Hinweise, um dem Benutzer durch Hinzufügen einer geeigneten Eigenschaft {{cssxref("content")}} anzuzeigen, ob der Inhalt {{cssxref(":valid")}} oder {{cssxref(":invalid")}} ist, und enthält [alternativen Text](/de/docs/Web/CSS/Reference/Properties/content#alternative_text_string_counter_attr) für Benutzer assistiver Technologien.

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

Kopieren Sie die URL dieser Seite und fügen Sie sie in das Eingabefeld ein. Sie sehen dann einen grünen Umriss und ein grünes Häkchen. Geben Sie eine andere URL ein, die **mozilla.org** nicht enthält, oder eine ungültige URL, sehen Sie einen roten Umriss und ein rotes Kreuz.

{{EmbedLiveSample("url-validation", "40px", , , , , "allow-forms")}}

Weitere Beispiele finden Sie in den Abschnitten [Musterprüfung](#musterprüfung) und [Verwendung von URL-Eingaben](#verwendung_von_url-eingaben).

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>Ein String, der eine URL darstellt, oder leer</td>
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

- [Leitfaden zu HTML-Formularen](/de/docs/Learn_web_development/Extensions/Forms)
- {{HTMLElement("input")}}
- [`<input type="tel">`](/de/docs/Web/HTML/Reference/Elements/input/tel)
- [`<input type="email">`](/de/docs/Web/HTML/Reference/Elements/input/email)
