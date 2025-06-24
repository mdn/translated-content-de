---
title: <input type="url">
slug: Web/HTML/Reference/Elements/input/url
l10n:
  sourceCommit: 3e097148b4c6cb9c6d8824275599f855ca63827b
---

{{HTMLSidebar}}

{{HTMLElement("input")}} Elemente vom Typ **`url`** werden verwendet, um dem Benutzer das Eingeben und Bearbeiten einer URL zu ermöglichen.

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

Der Eingabewert wird automatisch validiert, um sicherzustellen, dass er entweder leer ist oder eine korrekt formatierte URL darstellt, bevor das Formular gesendet werden kann. Die CSS-Pseudoklassen {{cssxref(":valid")}} und {{cssxref(":invalid")}} werden je nach Bedarf automatisch angewendet, um visuell anzuzeigen, ob der aktuelle Wert des Feldes eine gültige URL ist oder nicht.

## Wert

Das `value`-Attribut des {{HTMLElement("input")}}-Elements enthält eine Zeichenkette, die automatisch auf Konformität mit der URL-Syntax validiert wird. Genauer gesagt, gibt es zwei mögliche Wertformate, die die Validierung bestehen:

1. Eine leere Zeichenkette ("") zeigt an, dass der Benutzer keinen Wert eingegeben oder den Wert entfernt hat.
2. Eine einzelne, korrekt geformte absolute URL. Dies bedeutet nicht zwangsläufig, dass die URL-Adresse existiert, aber sie ist zumindest korrekt formatiert. Ein Eintrag, der `urlscheme://rest-of-url` entspricht, kann gültig sein, selbst wenn das eingegebene `urlscheme` nicht existiert.

Siehe [Validierung](#validierung) für Details, wie URLs validiert werden, um sicherzustellen, dass sie korrekt formatiert sind.

## Zusätzliche Attribute

Neben den [globalen Attributen](/de/docs/Web/HTML/Reference/Global_attributes) und den Attributen, die für alle {{HTMLElement("input")}}-Elemente unabhängig von ihrem Typ gelten, unterstützen `url`-Eingaben die folgenden Attribute.

> [!NOTE]
> Das globale Attribut [`autocorrect`](/de/docs/Web/HTML/Reference/Global_attributes/autocorrect) kann zu URL-Eingaben hinzugefügt werden, aber der gespeicherte Zustand ist immer `off`.

### list

Der Wert des `list`-Attributs ist die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements, das sich im selben Dokument befindet. Die {{HTMLElement("datalist")}} bietet eine Liste vordefinierter Werte, die dem Benutzer für diese Eingabe vorgeschlagen werden. Alle Werte in der Liste, die nicht mit dem [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) kompatibel sind, werden nicht in die vorgeschlagenen Optionen aufgenommen. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert eingeben.

### maxlength

Die maximale Zeichenlänge (gemessen in {{Glossary("UTF-16", "UTF-16 Codeeinheiten")}}), die der Benutzer in die `url`-Eingabe eingeben kann. Dies muss ein ganzzahliger Wert von `0` oder höher sein. Wenn `maxlength` nicht angegeben ist oder ein ungültiger Wert angegeben ist, hat die `url`-Eingabe keine maximale Länge. Dieser Wert muss auch größer oder gleich dem Wert von `minlength` sein.

Die Eingabe wird die [Einschränkungsüberprüfung](/de/docs/Web/HTML/Guides/Constraint_validation) nicht bestehen, wenn die Länge des Textwertes des Feldes mehr als `maxlength` {{Glossary("UTF-16", "UTF-16 Codeeinheiten")}} beträgt. Die Einschränkungsüberprüfung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### minlength

Die minimale Zeichenlänge (gemessen in {{Glossary("UTF-16", "UTF-16 Codeeinheiten")}}), die der Benutzer in die `url`-Eingabe eingeben kann. Dies muss ein nicht-negativer ganzzahliger Wert sein, der kleiner oder gleich dem von `maxlength` angegebenen Wert ist. Wenn `minlength` nicht angegeben ist oder ein ungültiger Wert angegeben ist, hat die `url`-Eingabe keine Mindestlänge.

Die Eingabe wird die [Einschränkungsüberprüfung](/de/docs/Web/HTML/Guides/Constraint_validation) nicht bestehen, wenn die Länge des in das Feld eingegebenen Textes weniger als `minlength` {{Glossary("UTF-16", "UTF-16 Codeeinheiten")}} beträgt. Die Einschränkungsüberprüfung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### pattern

Das `pattern`-Attribut, wenn es angegeben ist, ist ein regulärer Ausdruck, den der `value` der Eingabe erfüllen muss, um die [Einschränkungsüberprüfung](/de/docs/Web/HTML/Guides/Constraint_validation) zu bestehen. Es muss ein gültiger JavaScript-regulärer Ausdruck sein, wie er vom {{jsxref("RegExp")}}-Typ verwendet wird und wie er in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert ist; das `'u'`-Flag wird angegeben, wenn der reguläre Ausdruck kompiliert wird, damit das Muster als Sequenz von Unicode-Codepunkten behandelt wird, anstelle von {{Glossary("ASCII", "ASCII")}}. Um das Muster herum sollten keine Schrägstriche angegeben werden.

Wenn das angegebene Muster nicht angegeben oder ungültig ist, wird kein regulärer Ausdruck angewendet und dieses Attribut wird vollständig ignoriert.

> [!NOTE]
> Verwenden Sie das [`title`](/de/docs/Web/HTML/Reference/Elements/input#title)-Attribut, um einen Text anzugeben, den die meisten Browser als Tooltip anzeigen, um zu erklären, welche Anforderungen erfüllt werden müssen, um dem Muster zu entsprechen. Sie sollten auch andere erläuternde Texte in der Nähe einfügen.

Siehe den Abschnitt [Musterüberprüfung](#musterüberprüfung) für Details und ein Beispiel.

### placeholder

Das `placeholder`-Attribut ist eine Zeichenkette, die dem Benutzer einen kurzen Hinweis darauf gibt, welche Art von Information im Feld erwartet wird. Es sollte ein Wort oder ein kurzer Satz sein, der den erwarteten Datentyp demonstriert und keine erläuternde Nachricht ist. Der Text _darf_ keine Wagenrückläufe oder Zeilenumbrüche enthalten.

Wenn der Inhalt der Steuerung eine Richtung ({{Glossary("LTR", "LTR")}} oder {{Glossary("RTL", "RTL")}}) hat, der Platzhalter jedoch in der entgegengesetzten Richtung dargestellt werden muss, können Sie Unicode-Bidirektionale-Algorithmus-Formatierungszeichen verwenden, um die Richtung innerhalb des Platzhalters zu überschreiben; siehe [Verwendung von Unicode-Steuerzeichen für bidi Text](https://www.w3.org/International/questions/qa-bidi-unicode-controls) für weitere Informationen.

> [!NOTE]
> Vermeiden Sie die Verwendung des `placeholder`-Attributs, wenn möglich. Es ist nicht so semantisch nützlich wie andere Methoden, um Ihr Formular zu erklären und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Siehe [`<input>`-Labels](/de/docs/Web/HTML/Reference/Elements/input#labels) für weitere Informationen.

### readonly

Das [`readonly`](/de/docs/Web/HTML/Reference/Attributes/readonly)-Boolesche Attribut, wenn vorhanden, bedeutet, dass dieses Feld vom Benutzer nicht bearbeitet werden kann. Sein `value` kann jedoch auch weiterhin durch direktes Festlegen der `value`-Eigenschaft des API `HTMLInputElement` über JavaScript geändert werden.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat [`required`](/de/docs/Web/HTML/Reference/Attributes/required) keine Auswirkungen auf Eingaben mit dem ebenfalls angegebenen Attribut `readonly`.

### size

Das `size`-Attribut ist ein numerischer Wert, der angibt, wie viele Zeichen das Eingabefeld breit sein soll. Der Wert muss eine Zahl größer als null sein, und der Standardwert ist 20. Da Zeichenbreiten variieren, ist dies möglicherweise nicht genau und sollte nicht darauf verlassen werden; das resultierende Eingabefeld kann schmaler oder breiter sein als die angegebene Anzahl von Zeichen, abhängig von den Zeichen und den ({{cssxref("font")}}-Einstellungen in Verwendung).

Dies setzt _kein_ Limit, wie viele Zeichen der Benutzer in das Feld eingeben kann. Es wird nur festgelegt, wie viele Zeichen gleichzeitig ungefähr sichtbar sein können. Um ein oberes Limit für die Länge der Eingabedaten festzulegen, verwenden Sie das [`maxlength`](#maxlength)-Attribut.

### spellcheck

Das [`spellcheck`](/de/docs/Web/HTML/Reference/Global_attributes/spellcheck)-globale Attribut wird verwendet, um anzugeben, ob die Rechtschreibprüfung für ein Element aktiviert werden soll. Es kann auf jedem bearbeitbaren Inhalt verwendet werden, aber hier betrachten wir Spezifisches in Bezug auf die Verwendung von `spellcheck` auf {{HTMLElement("input")}}-Elementen. Die zulässigen Werte für `spellcheck` sind:

- `false`
  - : Deaktivieren Sie die Rechtschreibprüfung für dieses Element.
- `true`
  - : Aktivieren Sie die Rechtschreibprüfung für dieses Element.
- "" (leere Zeichenkette) oder kein Wert
  - : Der Standardwert des Elements für die Rechtschreibprüfung wird befolgt. Dies kann auf der `spellcheck`-Einstellung des übergeordneten Elements oder anderen Faktoren basieren.

Ein Eingabefeld kann die Rechtschreibprüfung aktivieren, wenn es nicht das [readonly](#readonly)-Attribut gesetzt hat und nicht deaktiviert ist.

Der Wert, der durch das Lesen von `spellcheck` zurückgegeben wird, spiegelt möglicherweise nicht den tatsächlichen Status der Rechtschreibprüfung innerhalb einer Steuerung wider, wenn die Einstellungen des {{Glossary("user_agent", "User Agents")}} die Einstellung überschreiben.

## Verwendung von URL-Eingaben

Wenn Sie eine URL-Eingabe mit dem richtigen `type`-Wert `url` erstellen, erhalten Sie eine automatische Validierung, dass der eingegebene Text zumindest die richtige Form hat, um potenziell eine legitime URL zu sein. Dies kann helfen, Fälle zu vermeiden, in denen der Benutzer die Adresse seiner Website falsch eingibt oder eine ungültige angibt.

Es ist jedoch wichtig zu beachten, dass dies nicht ausreicht, um sicherzustellen, dass der angegebene Text eine tatsächlich existierende URL ist, die dem Benutzer der Website entspricht oder in irgendeiner Weise akzeptabel ist. Es stellt nur sicher, dass der Wert des Feldes ordnungsgemäß formatiert ist, um eine URL zu sein.

> [!NOTE]
> Ein Benutzer kann mit Ihrem HTML im Hintergrund basteln, sodass Ihr Website _nicht_ diese Validierung für sicherheitsrelevante Zwecke verwenden darf. Sie _müssen_ die URL serverseitig bei jeder Transaktion verifizieren, bei der der bereitgestellte Text sicherheitsrelevante Implikationen jeglicher Art haben kann.

### Eine grundlegende URL-Eingabe

Dieses Element wird als Standard-Text-Eingabefeld mit grundlegenden Validierungsfunktionen implementiert. In seiner einfachsten Form kann eine URL-Eingabe so implementiert werden:

```html
<input id="myURL" name="myURL" type="url" />
```

{{ EmbedLiveSample('A_basic_URL_input', 600, 40) }}

Beachten Sie, dass es als gültig angesehen wird, wenn es leer ist und wenn eine einzige gültig formatierte URL-Adresse eingegeben wird, aber ansonsten nicht als gültig angesehen wird. Durch das Hinzufügen des [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attributs sind nur korrekt geformte URLs erlaubt; die Eingabe wird nicht mehr als gültig angesehen, wenn sie leer ist.

Hier passiert nichts Magisches. Das Senden dieses Formulars würde die folgenden Daten an den Server senden: `myURL=http%3A%2F%2Fwww.example.com`. Beachten Sie, wie Zeichen gegebenenfalls maskiert werden.

### Platzhalter

Manchmal ist es hilfreich, einen kontextualen Hinweis darauf zu geben, welche Form die Eingabedaten annehmen sollten. Dies kann besonders wichtig sein, wenn das Seitendesign keine beschreibenden Labels für jedes {{HTMLElement("input")}} bietet. Hier kommen **Platzhalter** ins Spiel. Ein Platzhalter ist ein Wert, der die Form des `value` demonstriert, indem er ein Beispiel für einen gültigen Wert präsentiert, der im Bearbeitungsfeld angezeigt wird, wenn der `value` des Elements "" ist. Sobald Daten in das Feld eingegeben werden, verschwindet der Platzhalter; wenn das Feld geleert wird, erscheint der Platzhalter wieder.

Hier haben wir eine `url`-Eingabe mit dem Platzhalter `http://www.example.com`. Beachten Sie, wie der Platzhalter verschwindet und wieder erscheint, während Sie den Inhalt des Bearbeitungsfeldes manipulieren.

```html
<input
  id="myURL"
  name="myURL"
  type="url"
  placeholder="http://www.example.com" />
```

{{ EmbedLiveSample('Placeholders', 600, 40) }}

### Steuerung der Eingabegröße

Sie können sowohl die physische Länge des Eingabefeldes als auch die minimalen und maximalen Längen, die für den eingegebenen Text erlaubt sind, steuern.

#### Physische Größe des Eingabeelements

Die physische Größe des Eingabefeldes kann mit dem [`size`](/de/docs/Web/HTML/Reference/Elements/input#size)-Attribut gesteuert werden. Damit können Sie angeben, wie viele Zeichen das Eingabefeld auf einmal anzeigen kann. In diesem Beispiel ist die `url`-Bearbeitungsbox z. B. 30 Zeichen breit:

```html
<input id="myURL" name="myURL" type="url" size="30" />
```

{{ EmbedLiveSample('Physical_input_element_size', 600, 40) }}

#### Länge des Elementwertes

Die `size` ist getrennt von der Längenbegrenzung der eingegebenen URL selbst. Sie können eine Mindestlänge, in Zeichen, für die eingegebene URL mit dem [`minlength`](/de/docs/Web/HTML/Reference/Elements/input#minlength)-Attribut angeben; ähnlich verwenden Sie [`maxlength`](/de/docs/Web/HTML/Reference/Elements/input#maxlength) um die maximale Länge der eingegebenen URL festzulegen. Wenn `maxLength` größer ist als `size`, scrollt der Inhalt des Eingabefeldes je nach Bedarf, um die aktuelle Auswahl oder Einfügeposition anzuzeigen, während der Inhalt manipuliert wird.

Das folgende Beispiel erstellt eine 30 Zeichen breite URL-Adresseneingabebox, die erfordert, dass der Inhalt nicht kürzer als 10 Zeichen und nicht länger als 80 Zeichen ist.

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
> Diese Attribute beeinflussen auch die Validierung; ein Wert, der kürzer als die angegebene minimale Länge oder länger als die maximale Länge ist, wird als ungültig eingestuft; zudem werden die meisten Browser den Benutzer nicht zulassen, einen Wert einzugeben, der länger als die angegebene maximale Länge ist.

### Bereitstellung von Standardoptionen

#### Bereitstellung eines einzelnen Standards mit dem value-Attribut

Wie immer können Sie einen Standardwert für ein `url`-Eingabefeld bereitstellen, indem Sie dessen [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Attribut festlegen:

```html
<input id="myURL" name="myURL" type="url" value="http://www.example.com" />
```

{{EmbedLiveSample("Providing_a_single_default_using_the_value_attribute", 600, 40)}}

#### Anbieten vorgeschlagener Werte

Ein Schritt weiter können Sie eine Liste von Standardoptionen bereitstellen, aus denen der Benutzer wählen kann, indem Sie das [`list`](/de/docs/Web/HTML/Reference/Elements/input#list)-Attribut angeben. Dies schränkt den Benutzer nicht auf diese Optionen ein, ermöglicht ihm jedoch, häufiger verwendete URLs schneller auszuwählen. Dies bietet auch Hinweise auf [`autocomplete`](/de/docs/Web/HTML/Reference/Elements/input#autocomplete). Das `list`-Attribut gibt die ID einer {{HTMLElement("datalist")}} an, die wiederum ein {{HTMLElement("option")}}-Element pro vorgeschlagenem Wert enthält; jeder `option`'s `value` ist der entsprechende vorgeschlagene Wert für das URL-Eingabefeld.

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

Mit dem {{HTMLElement("datalist")}}-Element und seinen {{HTMLElement("option")}}s kann der Browser die angegebenen Werte als potenzielle Werte für die URL anbieten; dies wird in der Regel als Popup- oder Dropdown-Menü präsentiert, das die Vorschläge enthält. Während die Erfahrung der Nutzer von Browser zu Browser variieren kann, wird beim Klicken in das Bearbeitungsfeld normalerweise ein Dropdown mit den vorgeschlagenen URLs angezeigt. Dann wird die Liste angepasst, während der Benutzer tippt, um nur übereinstimmende Werte anzuzeigen. Jedes getippte Zeichen schränkt die Liste weiter ein, bis der Benutzer eine Auswahl trifft oder einen benutzerdefinierten Wert eingibt.

#### Verwendung von Labels für vorgeschlagene Werte

Sie können das [`label`](/de/docs/Web/HTML/Reference/Elements/option#label)-Attribut bei einem oder allen Ihrer `<option>`-Elemente verwenden, um Textbeschriftungen bereitzustellen. Einige Browser zeigen möglicherweise nur die Labels an, während andere sowohl das Label als auch die URL anzeigen.

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

Es gibt zwei Ebenen der Inhaltsvalidierung für `url`-Eingaben. Erstens gibt es die Standardvalidierung, die für alle {{HTMLElement("input")}}s angeboten wird und die automatisch sicherstellt, dass die Inhalte die Anforderungen für eine gültige URL erfüllen. Es besteht jedoch auch die Möglichkeit, zusätzliche Filter hinzuzufügen, um sicherzustellen, dass Ihre eigenen spezifischen Anforderungen erfüllt werden, falls vorhanden.

> [!WARNING]
> Die HTML-Formularvalidierung ist _kein_ Ersatz für Skripte, die sicherstellen, dass die eingegebenen Daten im richtigen Format vorliegen. Es ist viel zu einfach, Anpassungen am HTML vorzunehmen, die es ermöglichen, die Validierung zu umgehen oder sie vollständig zu entfernen. Es ist auch möglich, dass jemand Ihr HTML vollständig umgeht und die Daten direkt an Ihren Server sendet. Wenn Ihr serverseitiger Code die empfangenen Daten nicht validiert, könnte eine Katastrophe eintreten, wenn unsachgemäß formatierte Daten (oder Daten, die zu groß sind, den falschen Typ haben und so weiter) in Ihre Datenbank eingegeben werden.

### Grundlegende Validierung

Browser, die den `url`-Eingabetyp unterstützen, bieten automatisch eine Validierung, um sicherzustellen, dass nur Text, der dem Standardformat für URLs entspricht, in das Eingabefeld eingegeben wird.

Die Syntax einer URL ist ziemlich komplex. Sie ist durch die Lebendige Norm „URL“ des WHATWG definiert und wird für Neulinge in unserem Artikel [Was ist eine URL?](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL) beschrieben.

### Eine URL erforderlich machen

Wie bereits erwähnt, müssen Sie das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attribut zur Eingabe hinzufügen, um das Eingeben einer URL erforderlich zu machen, bevor das Formular gesendet werden kann (das Feld darf nicht leer bleiben).

### Musterüberprüfung

Wenn Sie die eingegebene URL weiter einschränken müssen als nur auf „jede Zeichenkette, die wie eine URL aussieht“, können Sie das [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern)-Attribut verwenden, um einen {{Glossary("regular_expression", "regulären Ausdruck")}} anzugeben, den der Wert erfüllen muss, um gültig zu sein.

## Beispiele

### URL-Validierung

In diesem Beispiel stellen wir sicher, dass eine URL mit dem [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attribut ausgefüllt wird und dass die URL etwas auf `mozilla.org` ist, indem wir das [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern)-Attribut zur Veranschaulichung verwenden.

#### HTML

In der `url`-Eingabe setzen wir `pattern` auf `".*\.mozilla\.org.*"`. Dieser reguläre Ausdruck validiert eine Zeichenkette, die eine beliebige Anzahl von Zeichen hat, gefolgt von ".mozilla.org", gefolgt von einer beliebigen Anzahl von Zeichen. Da der Browser sowohl den Standard-URL-Filter als auch unser benutzerdefiniertes Muster gegen den angegebenen Text ausführt, ergibt sich eine Validierung, die sagt: „Stellen Sie sicher, dass dies eine gültige URL ist, und enthält auch `.mozilla.org`.“

Beachten Sie, dass ein striktes Muster wie `https://developer\.mozilla\.org.*` robuster wäre, aber dass es in diesem Fall das `type="url"`-Attribut redundant machen würde.

Das [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title)-Attribut beschreibt das `pattern` auch für Benutzer mit unterstützenden Technologien.

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

Das CSS bietet visuelle Hinweise, um dem Benutzer zu zeigen, ob der Inhalt {{cssxref(":valid")}} oder {{cssxref(":invalid")}} ist, indem eine entsprechende {{cssxref("content")}}-Eigenschaft hinzugefügt wird und [alternative Texte](/de/docs/Web/CSS/content#alternative_text_string_counter) für Benutzer mit unterstützenden Technologien enthält.

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

input:invalid + span:after {
  content: "✖" / "Content is not valid";
  color: red;
}

input:valid + span:after {
  content: "✓" / "Content is valid";
  color: green;
}
```

#### Ergebnis

Kopieren Sie die URL dieser Seite und fügen Sie sie in das Eingabefeld ein. Sie sehen einen grünen Umriss und ein grünes Häkchen. Geben Sie eine andere URL ein, die **mozilla.org** nicht enthält, oder eine ungültige URL, und Sie werden einen roten Umriss und ein rotes Kreuz sehen.

{{EmbedLiveSample("url-validation", "40px", , , , , "allow-forms")}}

Überprüfen Sie die Abschnitte [Musterüberprüfung](#musterüberprüfung) und [Verwendung von URL-Eingaben](#verwendung_von_url-eingaben) für weitere Beispiele.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>Eine Zeichenkette, die eine URL darstellt, oder leer</td>
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

- [HTML-Formulare Leitfaden](/de/docs/Learn_web_development/Extensions/Forms)
- {{HTMLElement("input")}}
- [`<input type="tel">`](/de/docs/Web/HTML/Reference/Elements/input/tel)
- [`<input type="email">`](/de/docs/Web/HTML/Reference/Elements/input/email)
