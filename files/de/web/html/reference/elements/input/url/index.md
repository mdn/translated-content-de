---
title: <input type="url">
slug: Web/HTML/Reference/Elements/input/url
l10n:
  sourceCommit: 6f2d784a17e90fcbd3d5ea17f50a2b5ca5fc2d96
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente vom Typ **`url`** werden verwendet, um dem Benutzer die Eingabe und Bearbeitung einer URL zu ermöglichen.

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

Der Eingabewert wird automatisch validiert, um sicherzustellen, dass er entweder leer ist oder eine korrekt formatierte URL ist, bevor das Formular gesendet werden kann. Die CSS-Pseudoklassen {{cssxref(":valid")}} und {{cssxref(":invalid")}} werden automatisch entsprechend angewendet, um visuell anzuzeigen, ob der aktuelle Wert des Feldes eine gültige URL ist oder nicht.

## Wert

Das [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Attribut des {{HTMLElement("input")}}-Elements enthält einen String, der automatisch auf die Übereinstimmung mit der URL-Syntax validiert wird. Genauer gesagt gibt es zwei mögliche Wertformate, die die Validierung bestehen:

1. Ein leerer String ("") zeigt an, dass der Benutzer keinen Wert eingegeben hat oder dass der Wert entfernt wurde.
2. Eine einzelne korrekt geformte absolute URL. Dies bedeutet nicht notwendigerweise, dass die URL-Adresse existiert, aber zumindest ist sie korrekt formatiert. Ein Eintrag, der `urlscheme://rest-of-url` entspricht, kann gültig sein, auch wenn das eingegebene `urlscheme` nicht existiert.

Siehe [Validierung](#validierung) für Details darüber, wie URLs validiert werden, um sicherzustellen, dass sie korrekt formatiert sind.

## Zusätzliche Attribute

Zusätzlich zu den [globalen Attributen](/de/docs/Web/HTML/Reference/Global_attributes) und den Attributen, die bei allen {{HTMLElement("input")}}-Elementen unabhängig von ihrem Typ funktionieren, unterstützen `url`-Eingaben die folgenden Attribute.

> [!NOTE]
> Das globale Attribut [`autocorrect`](/de/docs/Web/HTML/Reference/Global_attributes/autocorrect) kann zu URL-Eingaben hinzugefügt werden, aber der gespeicherte Zustand ist immer `off`.

### list

Der Wert des `list`-Attributs ist die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements, das im selben Dokument vorhanden ist. Das {{HTMLElement("datalist")}} bietet eine Liste vordefinierter Werte, die dem Benutzer für diese Eingabe vorgeschlagen werden. Alle Werte in der Liste, die nicht mit dem [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) kompatibel sind, werden nicht in den vorgeschlagenen Optionen aufgenommen. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert bereitstellen.

### maxlength

Die maximale Zeichenlänge (gemessen in UTF-16-Codeeinheiten), die der Benutzer in die `url`-Eingabe eingeben kann. Dies muss ein ganzzahliger Wert von `0` oder höher sein. Wenn kein `maxlength` angegeben ist oder ein ungültiger Wert angegeben wird, hat die `url`-Eingabe keine maximale Länge. Dieser Wert muss auch größer oder gleich dem Wert von `minlength` sein.

Die Eingabe wird die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) nicht bestehen, wenn die Länge des Textwertes des Feldes länger als `maxlength` UTF-16-Codeeinheiten ist. Die Eingeschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### minlength

Die minimale Zeichenlänge (gemessen in UTF-16-Codeeinheiten), die der Benutzer in die `url`-Eingabe eingeben kann. Dies muss ein nicht-negativer ganzzahliger Wert sein, der kleiner oder gleich dem im `maxlength` angegebenen Wert ist. Wenn kein `minlength` angegeben oder ein ungültiger Wert angegeben wird, hat die `url`-Eingabe keine Mindestlänge.

Die Eingabe wird die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) nicht bestehen, wenn die Länge des in das Feld eingegebenen Textes geringer ist als `minlength` UTF-16-Codeeinheiten. Die Eingeschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### pattern

Das `pattern`-Attribut, wenn angegeben, ist ein regulärer Ausdruck, den der [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) der Eingabe erfüllen muss, um die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) zu bestehen. Es muss ein gültiger regulärer JavaScript-Ausdruck sein, wie er durch den {{jsxref("RegExp")}}-Typ verwendet wird, und wie in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert ist; das `'u'`-Flag wird beim Kompilieren des regulären Ausdrucks angegeben, damit das Muster als Folge von Unicode-Codepunkten behandelt wird, anstatt als {{Glossary("ASCII", "ASCII")}}. Keine Schrägstriche sollten um den Text des Musters angegeben werden.

Wenn das angegebene Muster nicht angegeben oder ungültig ist, wird kein regulärer Ausdruck angewendet und dieses Attribut wird vollständig ignoriert.

> [!NOTE]
> Verwenden Sie das [`title`](/de/docs/Web/HTML/Reference/Elements/input#title)-Attribut, um einen Text anzugeben, den die meisten Browser als Tooltip anzeigen, um zu erklären, welche Anforderungen erfüllt werden müssen, um das Muster zu erfüllen. Sie sollten auch anderen erläuternden Text in der Nähe angeben.

Siehe den Abschnitt [Muster-Validierung](#muster-validierung) für Details und ein Beispiel.

### placeholder

Das `placeholder`-Attribut ist ein String, der dem Benutzer einen kurzen Hinweis darauf gibt, welche Art von Informationen im Feld erwartet werden. Es sollte ein Wort oder kurzer Satz sein, der den erwarteten Datentyp demonstriert, anstatt einer erklärenden Nachricht. Der Text _darf keine_ Wagenrückläufe oder Zeilenumbrüche enthalten.

Wenn der Inhalt des Steuerungselements eine Richtung ({{Glossary("LTR", "LTR")}} oder {{Glossary("RTL", "RTL")}}) hat, aber der Platzhalter in der entgegengesetzten Richtung dargestellt werden muss, können Sie Unicode-Bidi-Algorithmus-Formatierungszeichen verwenden, um die Richtung innerhalb des Platzhalters zu überschreiben; siehe [Wie man Unicode-Kontrollen für Bidi-Text verwendet](https://www.w3.org/International/questions/qa-bidi-unicode-controls) für mehr Informationen.

> [!NOTE]
> Vermeiden Sie, das `placeholder`-Attribut zu verwenden, wenn möglich. Es ist nicht so semantisch nützlich wie andere Möglichkeiten, Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Siehe [`<input>`-Labels](/de/docs/Web/HTML/Reference/Elements/input#labels) für mehr Informationen.

### readonly

Das [`readonly`](/de/docs/Web/HTML/Reference/Attributes/readonly)-Boolesche Attribut bedeutet, wenn es vorhanden ist, dass dieses Feld vom Benutzer nicht bearbeitet werden kann. Sein `value` kann jedoch weiterhin direkt durch JavaScript-Code geändert werden, indem die [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-`value`-Eigenschaft festgelegt wird.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat [`required`](/de/docs/Web/HTML/Reference/Attributes/required) keine Wirkung auf Eingaben mit dem ebenfalls angegebenen `readonly`-Attribut.

### size

Das `size`-Attribut ist ein numerischer Wert, der angibt, wie viele Zeichen breit das Eingabefeld sein soll. Der Wert muss eine Zahl größer als null sein, und der Standardwert ist 20. Da sich Zeichenbreiten unterscheiden, kann dies exakt sein oder auch nicht, und es sollte nicht darauf vertraut werden, dass es so ist; das resultierende Eingabefeld kann schmaler oder breiter als die angegebene Anzahl von Zeichen sein, abhängig von den Zeichen und der Schriftart ({{cssxref("font")}}-Einstellungen in Gebrauch).

Dies setzt _kein_ Limit darauf, wie viele Zeichen der Benutzer in das Feld eingeben kann. Es gibt nur ungefähr an, wie viele gleichzeitig gesehen werden können. Um ein oberes Limit für die Länge der Eingabedaten festzulegen, verwenden Sie das [`maxlength`](#maxlength)-Attribut.

### spellcheck

Das [`spellcheck`](/de/docs/Web/HTML/Reference/Global_attributes/spellcheck)-globale Attribut wird verwendet, um anzugeben, ob die Rechtschreibprüfung für ein Element aktiviert werden soll. Es kann bei jeder bearbeitbaren Inhalt verwendet werden, aber hier betrachten wir die Besonderheiten in Bezug auf die Verwendung von `spellcheck` bei {{HTMLElement("input")}}-Elementen. Die zulässigen Werte für `spellcheck` sind:

- `false`
  - : Deaktivieren Sie die Rechtschreibprüfung für dieses Element.
- `true`
  - : Aktivieren Sie die Rechtschreibprüfung für dieses Element.
- "" (leerer String) oder kein Wert
  - : Folgen Sie dem Standardverhalten des Elements für die Rechtschreibprüfung. Dies kann auf der `spellcheck`-Einstellung eines übergeordneten Elements oder anderen Faktoren basieren.

Ein Eingabefeld kann die Rechtschreibprüfung aktiviert haben, wenn es nicht das [readonly](#readonly)-Attribut gesetzt hat und nicht deaktiviert ist.

Der durch das Lesen von `spellcheck` zurückgegebene Wert spiegelt möglicherweise nicht den tatsächlichen Zustand der Rechtschreibprüfung innerhalb eines Steuerungselements wider, wenn die {{Glossary("user_agent", "Präferenzen des Benutzeragenten")}} die Einstellung überschreiben.

## Verwendung von URL-Eingaben

Wenn Sie eine URL-Eingabe mit dem richtigen `type`-Wert erstellen, `url`, erhalten Sie eine automatische Validierung, dass der eingegebene Text zumindest im richtigen Format ist, um potenziell eine legitime URL zu sein. Dies kann helfen, Fälle zu vermeiden, in denen der Benutzer die Adresse seiner Website falsch eingibt oder eine ungültige eingibt.

Es ist jedoch wichtig zu beachten, dass dies nicht ausreicht, um sicherzustellen, dass der angegebene Text eine tatsächlich existierende URL ist, die einem Benutzer der Seite gehört oder in irgendeiner anderen Weise akzeptabel ist. Es stellt sicher, dass der Wert des Feldes korrekt formatiert ist, um eine URL zu sein.

> [!NOTE]
> Ein Benutzer kann hinter den Kulissen an Ihrem HTML basteln, sodass Ihre Website diese Validierung _nicht_ für Sicherheitszwecke verwenden darf. Sie _müssen_ die URL auf der Serverseite jeder Transaktion verifizieren, bei der der bereitgestellte Text Sicherheitsimplikationen jeglicher Art haben könnte.

### Eine grundlegende URL-Eingabe

Dieses Element ist als standardmäßiges Texteingabefeld mit grundlegenden Validierungsfunktionen implementiert. In seiner grundlegendsten Form kann eine URL-Eingabe wie folgt implementiert werden:

```html
<input id="myURL" name="myURL" type="url" />
```

{{ EmbedLiveSample('A_basic_URL_input', 600, 40) }}

Beachten Sie, dass es als gültig angesehen wird, wenn es leer ist und wenn eine einzelne korrekt formatierte URL-Adresse eingegeben wird, aber ansonsten nicht als gültig betrachtet wird. Durch Hinzufügen des [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attributs werden nur korrekt geformte URLs zugelassen; die Eingabe wird nicht mehr als gültig angesehen, wenn sie leer ist.

Es geschieht hier nichts Magisches. Das Absenden dieses Formulars würde dazu führen, dass die folgenden Daten an den Server gesendet werden: `myURL=http%3A%2F%2Fwww.example.com`. Beachten Sie, wie Zeichen bei Bedarf maskiert werden.

### Platzhalter

Manchmal ist es hilfreich, einen kontextbezogenen Hinweis zu bieten, in welcher Form die Eingabedaten stehen sollten. Dies kann besonders wichtig sein, wenn das Seitendesign keine beschreibenden Labels für jedes {{HTMLElement("input")}} bietet. Hier kommen **Platzhalter** ins Spiel. Ein Platzhalter ist ein Wert, der die Form des `value` demonstriert, indem ein Beispiel eines gültigen Wertes präsentiert wird, das im Bearbeitungsfeld angezeigt wird, wenn der `value` des Elements "" ist. Sobald Daten in das Feld eingegeben werden, verschwindet der Platzhalter; wenn das Feld geleert wird, erscheint der Platzhalter erneut.

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

Sie können sowohl die physische Länge des Eingabefeldes als auch die minimal und maximal erlaubte Länge des Eingabetextes steuern.

#### Physische Größe des Eingabeelements

Die physische Größe des Eingabefeldes kann mit dem [`size`](/de/docs/Web/HTML/Reference/Elements/input#size)-Attribut gesteuert werden. Damit können Sie angeben, wie viele Zeichen das Eingabefeld gleichzeitig anzeigen kann. In diesem Beispiel ist das `url`-Bearbeitungsfeld beispielsweise 30 Zeichen breit:

```html
<input id="myURL" name="myURL" type="url" size="30" />
```

{{ EmbedLiveSample('Physical_input_element_size', 600, 40) }}

#### Länge des Elementwerts

Die `size` ist getrennt von der Längenbeschränkung der selbst eingegebenen URL. Sie können eine minimale Länge, in Zeichen, für die eingegebene URL mit dem [`minlength`](/de/docs/Web/HTML/Reference/Elements/input#minlength)-Attribut angeben; ebenso verwenden Sie [`maxlength`](/de/docs/Web/HTML/Reference/Elements/input#maxlength), um die maximale Länge der eingegebenen URL festzulegen. Wenn `maxLength` größer als `size` ist, wird der Inhalt des Eingabefeldes bei Bedarf verschoben, um die aktuelle Auswahl oder den Einfügepunkt anzuzeigen, während der Inhalt manipuliert wird.

Das folgende Beispiel erstellt ein 30 Zeichen breites URL-Adressen-Eingabefeld, das erfordert, dass der Inhalt nicht kürzer als 10 Zeichen und nicht länger als 80 Zeichen ist.

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
> Diese Attribute beeinflussen auch die Validierung; ein Wert, der kürzer oder länger ist als die angegebenen Mindest- oder Höchstlängen, wird als ungültig klassifiziert; zusätzlich werden die meisten Browser dem Benutzer nicht erlauben, einen Wert einzugeben, der länger ist als die angegebene Maximalanzahl.

### Vorgabeoptionen bereitstellen

#### Bereitstellung eines einzelnen Standardwerts mithilfe des value-Attributs

Wie immer können Sie einen Standardwert für ein `url`-Eingabefeld bereitstellen, indem Sie dessen [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Attribut setzen:

```html
<input id="myURL" name="myURL" type="url" value="http://www.example.com" />
```

{{EmbedLiveSample("Providing_a_single_default_using_the_value_attribute", 600, 40)}}

#### Angebot von vorgeschlagenen Werten

Einen Schritt weiter gehend können Sie eine Liste von Standardoptionen bereitstellen, aus denen der Benutzer wählen kann, indem Sie das [`list`](/de/docs/Web/HTML/Reference/Elements/input#list)-Attribut angeben. Dies beschränkt den Benutzer nicht auf diese Optionen, ermöglicht ihm jedoch, häufig verwendete URLs schneller auszuwählen. Dies bietet auch Hinweise auf [`autocomplete`](/de/docs/Web/HTML/Reference/Elements/input#autocomplete). Das `list`-Attribut gibt die ID eines {{HTMLElement("datalist")}} an, das wiederum ein {{HTMLElement("option")}}-Element pro vorgeschlagenem Wert enthält; jeder `option`'s `value` ist der entsprechende vorgeschlagene Wert für das URL-Eingabefeld.

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

Mit dem {{HTMLElement("datalist")}}-Element und seinen {{HTMLElement("option")}}s an Ort und Stelle wird der Browser die angegebenen Werte als potenzielle Werte für die URL anbieten; dies wird typischerweise als Popup- oder Dropdown-Menü mit den Vorschlägen präsentiert. Obwohl das spezielle Benutzererlebnis von Browser zu Browser variieren kann, wird in der Regel durch Klicken in das Bearbeitungsfeld ein Dropdown mit den vorgeschlagenen URLs angezeigt. Wenn der Benutzer dann tippt, wird die Liste so angepasst, dass nur passende Werte angezeigt werden. Jedes eingetippte Zeichen verkleinert die Liste, bis der Benutzer eine Auswahl trifft oder einen benutzerdefinierten Wert eingibt.

#### Verwendung von Labels für vorgeschlagene Werte

Sie können das [`label`](/de/docs/Web/HTML/Reference/Elements/option#label)-Attribut in einem oder allen Ihren `<option>`-Elementen einfügen, um Textlabels bereitzustellen. Einige Browser zeigen möglicherweise nur die Labels an, während andere sowohl das Label als auch die URL anzeigen.

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

Es gibt zwei Ebenen der Inhaltsvalidierung für `url`-Eingaben. Erstens gibt es die Standardvalidierungsstufe, die allen {{HTMLElement("input")}}s angeboten wird und automatisch sicherstellt, dass der Inhalt die Anforderungen erfüllt, um eine gültige URL zu sein. Aber es gibt auch die Möglichkeit, zusätzliche Filter hinzuzufügen, um sicherzustellen, dass Ihre eigenen speziellen Anforderungen erfüllt werden, falls Sie welche haben.

> [!WARNING]
> Die HTML-Formularvalidierung ist _keine_ Alternative zu Skripten, die sicherstellen, dass die eingegebenen Daten im richtigen Format sind. Es ist viel zu einfach für jemanden, Anpassungen am HTML vorzunehmen, die es ihm ermöglichen, die Validierung zu umgehen oder sie vollständig zu entfernen. Es ist auch möglich, dass jemand Ihr HTML vollständig umgeht und die Daten direkt an Ihren Server sendet. Wenn Ihr Serverseiten-Code die empfangenen Daten nicht validiert, könnte es zu Katastrophen kommen, wenn unsachgemäß formatierte Daten (oder Daten, die zu groß sind, vom falschen Typ sind und so weiter) in Ihre Datenbank eingegeben werden.

### Grundlegende Validierung

Browser, die den `url`-Eingabetyp unterstützen, bieten automatisch eine Validierung, um sicherzustellen, dass nur Text, der dem Standardformat für URLs entspricht, in das Eingabefeld eingegeben wird.

Die Syntax einer URL ist recht komplex. Sie wird im [URL Living Standard](https://url.spec.whatwg.org/) von WHATWG definiert und ist für Einsteiger in unserem Artikel [Was ist eine URL?](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL) beschrieben.

### Eine URL benötigt

Wie bereits erwähnt, muss die Eingabe einer URL erforderlich gemacht werden, bevor das Formular gesendet werden kann (Sie können das Feld nicht leer lassen), Sie müssen lediglich das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attribut auf der Eingabe hinzufügen.

### Muster-Validierung

Wenn Sie möchten, dass die eingegebene URL weiter eingeschränkt wird als nur "jede Zeichenkette, die wie eine URL aussieht", können Sie das [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern)-Attribut verwenden, um einen {{Glossary("regular_expression", "regulären Ausdruck")}} anzugeben, den der Wert erfüllen muss, damit der Wert gültig ist.

## Beispiele

### URL-Validierung

In diesem Beispiel stellen wir sicher, dass eine URL mit dem [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attribut ausgefüllt ist und dass die URL etwas auf `mozilla.org` ist, indem wir das [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern)-Attribut zur Veranschaulichung verwenden.

#### HTML

In der `url`-Eingabe setzen wir `pattern` auf `".*\.mozilla\.org.*"`. Dieser reguläre Ausdruck validiert eine Zeichenkette, die eine beliebige Anzahl von Zeichen enthält, gefolgt von ".mozilla.org", gefolgt von einer beliebigen Anzahl von Zeichen. Da sowohl der standardmäßige URL-Filter als auch unser benutzerdefiniertes Muster gegen den angegebenen Text ausgeführt wird, erhalten wir eine Validierung, die besagt "Stellen Sie sicher, dass dies eine gültige URL ist und auch `.mozilla.org` enthält."

Beachten Sie, dass ein strenges Muster wie `https://developer\.mozilla\.org.*` robuster wäre, aber das würde das `type="url"`-Attribut in diesem Fall überflüssig machen.

Das [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title)-Attribut beschreibt das `pattern` auch für Benutzer mit assistiven Technologien.

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

Das CSS gibt visuelle Hinweise, um dem Benutzer zu zeigen, ob der Inhalt {{cssxref(":valid")}} oder {{cssxref(":invalid")}} ist, indem eine entsprechende {{cssxref("content")}}-Eigenschaft hinzugefügt wird, und enthält {{cssxref("content", "alternative text", "#alternative_text_string_counter")}} für Benutzer mit assistiven Technologien.

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

Kopieren Sie die URL dieser Seite und fügen Sie sie in das Eingabefeld ein, und Sie sehen einen grünen Umriss und ein grünes Häkchen. Geben Sie eine andere URL ein, die nicht `mozilla.org` enthält, oder eine ungültige URL, und Sie sehen einen roten Umriss und ein rotes Kreuz.

{{EmbedLiveSample("url-validation", "40px", , , , , "allow-forms")}}

Überprüfen Sie die Abschnitte [Muster-Validierung](#muster-validierung) und [Verwendung von URL-Eingaben](#verwendung_von_url-eingaben) für weitere Beispiele.

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
      <td><strong>Unterstützte Gemeinsame Attribute</strong></td>
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

- [Leitfaden zu HTML-Formularen](/de/docs/Learn_web_development/Extensions/Forms)
- {{HTMLElement("input")}}
- [`<input type="tel">`](/de/docs/Web/HTML/Reference/Elements/input/tel)
- [`<input type="email">`](/de/docs/Web/HTML/Reference/Elements/input/email)
