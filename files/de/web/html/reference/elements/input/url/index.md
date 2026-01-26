---
title: <input type="url">
slug: Web/HTML/Reference/Elements/input/url
l10n:
  sourceCommit: 5ebca2edd6095fb3f61d442ed3146fa37fffbf7d
---

{{HTMLElement("input")}}-Elemente vom Typ **`url`** werden verwendet, um dem Benutzer das Eingeben und Bearbeiten einer URL zu ermöglichen.

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

Der Eingabewert wird automatisch validiert, um sicherzustellen, dass er entweder leer oder eine korrekt formatierte URL ist, bevor das Formular gesendet werden kann. Die CSS-Pseudoklassen {{cssxref(":valid")}} und {{cssxref(":invalid")}} werden automatisch entsprechend angewendet, um visuell anzuzeigen, ob der aktuelle Wert des Feldes eine gültige URL ist oder nicht.

## Wert

Das [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Attribut des {{HTMLElement("input")}}-Elements enthält eine Zeichenkette, die automatisch als URL-Syntax validiert wird. Genauer gesagt gibt es zwei mögliche Werteformate, die die Validierung bestehen:

1. Eine leere Zeichenkette ("") gibt an, dass der Benutzer keinen Wert eingegeben hat oder dass der Wert entfernt wurde.
2. Eine einzelne, richtig geformte absolute URL. Dies bedeutet nicht unbedingt, dass die URL-Adresse existiert, aber sie ist zumindest korrekt formatiert. Ein Eintrag, der `urlscheme://rest-of-url` entspricht, kann gültig sein, selbst wenn das eingegebene `urlscheme` nicht existiert.

Weitere Details zur Validierung finden Sie im Abschnitt [Validierung](#validierung), in dem erläutert wird, wie URLs validiert werden, um sicherzustellen, dass sie korrekt formatiert sind.

## Zusätzliche Attribute

Zusätzlich zu den [globalen Attributen](/de/docs/Web/HTML/Reference/Global_attributes) und den Attributen, die auf alle {{HTMLElement("input")}}-Elemente unabhängig von ihrem Typ anzuwenden sind, unterstützen `url`-Inputs die folgenden Attribute.

> [!NOTE]
> Das globale Attribut [`autocorrect`](/de/docs/Web/HTML/Reference/Global_attributes/autocorrect) kann zu URL-Eingaben hinzugefügt werden, aber der gespeicherte Status ist immer `off`.

### list

Der Wert des `list`-Attributs ist die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements, das sich im selben Dokument befindet. Die {{HTMLElement("datalist")}} bietet eine Liste vordefinierter Werte, die dem Benutzer für diese Eingabe vorgeschlagen werden. Werte in der Liste, die nicht mit dem [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) kompatibel sind, werden nicht in die Vorschlagsliste aufgenommen. Die bereitgestellten Werte sind Vorschläge und keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert eingeben.

### maxlength

Die maximale Zeichenlänge (gemessen in {{Glossary("UTF-16", "UTF-16 Code-Einheiten")}}), die der Benutzer in das `url`-Input eingeben kann. Dies muss ein ganzzahliger Wert von `0` oder höher sein. Wenn kein `maxlength` angegeben ist oder ein ungültiger Wert angegeben wird, hat das `url`-Input keine maximale Länge. Dieser Wert muss auch größer oder gleich dem Wert von `minlength` sein.

Die Eingabe schlägt bei [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl, wenn die Länge des Textwerts des Feldes länger als `maxlength` {{Glossary("UTF-16", "UTF-16 Code-Einheiten")}} ist. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### minlength

Die minimale Zeichenlänge (gemessen in {{Glossary("UTF-16", "UTF-16 Code-Einheiten")}}), die der Benutzer in das `url`-Input eingeben kann. Dies muss ein nicht-negativer ganzzahliger Wert sein, der kleiner oder gleich dem durch `maxlength` angegebenen Wert ist. Wenn kein `minlength` angegeben ist oder ein ungültiger Wert angegeben wird, hat das `url`-Input keine Mindestlänge.

Die Eingabe schlägt bei [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl, wenn die Länge des in das Feld eingegebenen Textes kürzer als `minlength` {{Glossary("UTF-16", "UTF-16 Code-Einheiten")}} ist. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### pattern

Das `pattern`-Attribut ist, wenn es angegeben wird, ein regulärer Ausdruck, den der [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) der Eingabe für die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) erfüllen muss. Es muss ein gültiger regulärer Ausdruck in JavaScript sein, wie er vom {{jsxref("RegExp")}}-Typ verwendet wird und in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert ist; das `'u'`-Flag wird beim Kompilieren des regulären Ausdrucks angegeben, damit das Muster als Unicode-Zeichenfolgensequenz behandelt wird, statt als {{Glossary("ASCII", "ASCII")}}. Es sollten keine Schrägstriche um den Mustertest angegeben werden.

Wenn das angegebene Muster nicht festgelegt oder ungültig ist, wird kein regulärer Ausdruck angewendet und dieses Attribut wird vollständig ignoriert.

> [!NOTE]
> Verwenden Sie das [`title`](/de/docs/Web/HTML/Reference/Elements/input#title)-Attribut, um Text anzugeben, den die meisten Browser als Tooltip anzeigen, um zu erklären, welche Anforderungen erfüllt sein müssen, um dem Muster zu entsprechen. Sie sollten auch andere erläuternde Texte in der Nähe einfügen.

Weitere Details und ein Beispiel finden Sie im Abschnitt [Musterüberprüfung](#musterüberprüfung).

### placeholder

Das `placeholder`-Attribut ist eine Zeichenkette, die dem Benutzer einen kurzen Hinweis darauf gibt, welche Art von Informationen im Feld erwartet werden. Es sollte ein Wort oder eine kurze Phrase sein, die den erwarteten Datentyp demonstriert, statt einer erklärenden Nachricht. Der Text darf _keine_ Zeilenumbrüche oder Wagenrückläufe enthalten.

Wenn der Inhalt der Steuerung eine Richtung ({{Glossary("LTR", "LTR")}} oder {{Glossary("RTL", "RTL")}}) hat, aber der Platzhalter in der entgegengesetzten Richtung angezeigt werden muss, können Sie Unicode-Bidirektionale-Algorithmus-Formatierungszeichen verwenden, um die Richtung im Platzhalter zu überschreiben; Weitere Informationen finden Sie unter [Wie man Unicode-Steuerelemente für bidi-Text verwendet](https://www.w3.org/International/questions/qa-bidi-unicode-controls).

> [!NOTE]
> Vermeiden Sie die Verwendung des `placeholder`-Attributs, wenn möglich. Es ist nicht so semantisch nützlich wie andere Möglichkeiten, Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Weitere Informationen finden Sie unter [`<input>` Beschriftungen](/de/docs/Web/HTML/Reference/Elements/input#labels).

### readonly

Das [`readonly`](/de/docs/Web/HTML/Reference/Attributes/readonly) Boolean-Attribut, wenn vorhanden, bedeutet, dass dieses Feld vom Benutzer nicht bearbeitet werden kann. Sein `value` kann jedoch weiterhin durch direktes Festlegen der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) `value`-Eigenschaft per JavaScript-Programm beeinflusst werden.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat [`required`](/de/docs/Web/HTML/Reference/Attributes/required) keine Auswirkungen auf Eingaben mit dem ebenfalls spezifizierten `readonly`-Attribut.

### size

Das `size`-Attribut ist ein numerischer Wert, der angibt, wie viele Zeichen breit das Eingabefeld sein soll. Der Wert muss eine Zahl größer als null sein und der Standardwert ist 20. Da Schriftzeichenbreiten variieren, kann dies ungenau sein und es sollte nicht darauf vertraut werden; das resultierende Eingabefeld kann schmaler oder breiter sein als die angegebene Anzahl von Zeichen, abhängig von den Zeichen und der Schriftart ({{cssxref("font")}} Einstellungen in Verwendung).

Dies setzt _keine_ Begrenzung, wie viele Zeichen der Benutzer in das Feld eingeben kann. Es gibt nur an, wie viele ungefähr gleichzeitig angezeigt werden können. Um eine obere Grenze für die Länge der Eingabedaten zu setzen, verwenden Sie das [`maxlength`](#maxlength)-Attribut.

### spellcheck

Das [`spellcheck`](/de/docs/Web/HTML/Reference/Global_attributes/spellcheck) globale Attribut dient zur Angabe, ob die Rechtschreibprüfung für ein Element aktiviert werden soll. Es kann auf jedem bearbeitbaren Inhalt verwendet werden, aber hier betrachten wir Einzelheiten im Zusammenhang mit der Verwendung von `spellcheck` auf {{HTMLElement("input")}}-Elementen. Die zulässigen Werte für `spellcheck` sind:

- `false`
  - : Deaktivieren der Rechtschreibprüfung für dieses Element.
- `true`
  - : Aktivieren der Rechtschreibprüfung für dieses Element.
- "" (leere Zeichenkette) oder kein Wert
  - : Der Standardverhalten des Elements bezüglich der Rechtschreibprüfung beibehalten. Dies kann auf die `spellcheck`-Einstellung eines Elternteils oder andere Faktoren basieren.

Ein Eingabefeld kann die Rechtschreibprüfung aktiviert haben, wenn es nicht über das [readonly](#readonly)-Attribut verfügt und nicht deaktiviert ist.

Der Wert, der durch Lesen von `spellcheck` zurückgegeben wird, spiegelt möglicherweise nicht den tatsächlichen Zustand der Rechtschreibprüfung innerhalb einer Steuerung wider, wenn die {{Glossary("user_agent", "Benutzeragenten")}}-Einstellungen die Einstellung überschreiben.

## Verwendung von URL-Eingaben

Wenn Sie eine URL-Eingabe mit dem richtigen `type`-Wert, `url`, erstellen, erhalten Sie eine automatische Validierung, dass der eingegebene Text zumindest in der korrekten Form ist, um potenziell eine legitime URL zu sein. Dies kann helfen, Fälle zu vermeiden, in denen der Benutzer die Adresse seiner Website falsch eingibt oder eine ungültige angibt.

Es ist jedoch wichtig zu beachten, dass dies nicht ausreicht, um sicherzustellen, dass der angegebene Text tatsächlich eine existierende URL ist, die zum Benutzer der Website gehört oder in irgendeiner anderen Weise akzeptabel ist. Es stellt lediglich sicher, dass der Wert des Feldes korrekt formatiert ist, um eine URL darzustellen.

> [!NOTE]
> Ein Benutzer kann im Hintergrund mit Ihrem HTML herumspielen, daher darf Ihre Website diese Validierung _nicht_ für Sicherheitszwecke verwenden. Sie _müssen_ die URL auf der Serverseite jeder Transaktion verifizieren, bei der der bereitgestellte Text möglicherweise sicherheitsrelevante Auswirkungen jeglicher Art haben könnte.

### Ein grundlegendes URL-Eingabefeld

Dieses Element wird als Standard-Texteingabefeld mit grundlegenden Validierungsfunktionen implementiert. In seiner einfachsten Form kann ein URL-Eingabefeld wie folgt implementiert werden:

```html
<input id="myURL" name="myURL" type="url" />
```

{{ EmbedLiveSample('A_basic_URL_input', 600, 40) }}

Beachten Sie, dass es als gültig angesehen wird, wenn es leer ist und wenn eine einzelne korrekt formatierte URL-Adresse eingegeben wird, aber ansonsten nicht als gültig betrachtet wird. Durch Hinzufügen des [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attributs werden nur korrekt geformte URLs erlaubt; die Eingabe wird nicht mehr als gültig angesehen, wenn sie leer ist.

Hier passiert nichts Magisches. Das Senden dieses Formulars würde die folgenden Daten an den Server senden: `myURL=http%3A%2F%2Fwww.example.com`. Beachten Sie, wie Zeichen bei Bedarf maskiert werden.

### Platzhalter

Manchmal ist es hilfreich, einen kontextabhängigen Hinweis zu geben, in welcher Form die Eingabedaten vorliegen sollten. Dies kann besonders wichtig sein, wenn das Seitendesign keine beschreibenden Beschriftungen für jedes {{HTMLElement("input")}} bietet. Hier kommen **Platzhalter** ins Spiel. Ein Platzhalter ist ein Wert, der die Form, die der `value` annehmen sollte, durch das Präsentieren eines Beispiels eines gültigen Werts demonstriert, welches innerhalb des Eingabefelds angezeigt wird, wenn der `value` des Elements `""` ist. Sobald Daten in das Feld eingegeben werden, verschwindet der Platzhalter; wenn das Feld geleert wird, erscheint der Platzhalter wieder.

Hier haben wir ein `url`-Input mit dem Platzhalter `http://www.example.com`. Beachten Sie, wie der Platzhalter verschwindet und wieder erscheint, während Sie den Inhalt des Eingabefeldes manipulieren.

```html
<input
  id="myURL"
  name="myURL"
  type="url"
  placeholder="http://www.example.com" />
```

{{ EmbedLiveSample('Placeholders', 600, 40) }}

### Kontrolle der Eingabegröße

Sie können sowohl die physische Länge des Eingabefeldes als auch die minimale und maximale Länge, die für den eingegebenen Text zulässig ist, steuern.

#### Physische Größe des Eingabeelements

Die physische Größe des Eingabefeldes kann mithilfe des [`size`](/de/docs/Web/HTML/Reference/Elements/input#size)-Attributs gesteuert werden. Damit können Sie angeben, wie viele Zeichen das Eingabefeld gleichzeitig anzeigen kann. In diesem Beispiel ist beispielsweise das `url`-Eingabefeld 30 Zeichen breit:

```html
<input id="myURL" name="myURL" type="url" size="30" />
```

{{ EmbedLiveSample('Physical_input_element_size', 600, 40) }}

#### Wertlänge des Elements

Die `size` ist von der Längenbegrenzung der tatsächlich eingegebenen URL selbst getrennt. Sie können eine Mindestlänge in Zeichen für die eingegebene URL mit dem [`minlength`](/de/docs/Web/HTML/Reference/Elements/input#minlength)-Attribut festlegen; ähnlich verwenden Sie [`maxlength`](/de/docs/Web/HTML/Reference/Elements/input#maxlength), um die maximale Länge der eingegebenen URL festzulegen. Wenn `maxLength` `size` überschreitet, wird der Inhalt des Eingabefeldes bei Bedarf so gescrollt, dass die aktuelle Auswahl oder der Einfügepunkt bei Manipulationen des Inhalts angezeigt wird.

Das folgende Beispiel erstellt ein 30 Zeichen breites URL-Adresseingabefeld, das erfordert, dass der Inhalt nicht kürzer als 10 Zeichen und nicht länger als 80 Zeichen ist.

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
> Diese Attribute beeinflussen auch die Validierung; ein Wert, der kürzer oder länger als die festgelegten Mindest-/Maximallängen ist, wird als ungültig klassifiziert; in den meisten Browsern wird zudem der Benutzer daran gehindert, einen Wert einzugeben, der länger ist als die angegebene maximale Länge.

### Bereitstellung von Standardoptionen

#### Bereitstellung eines einzelnen Standards mit dem Value-Attribut

Wie immer können Sie einen Standardwert für ein `url`-Eingabefeld angeben, indem Sie sein [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Attribut setzen:

```html
<input id="myURL" name="myURL" type="url" value="http://www.example.com" />
```

{{EmbedLiveSample("Providing_a_single_default_using_the_value_attribute", 600, 40)}}

#### Angebot vorgeschlagener Werte

Sie können einen Schritt weiter gehen und eine Liste von Standardoptionen bereitstellen, aus denen der Benutzer auswählen kann, indem Sie das [`list`](/de/docs/Web/HTML/Reference/Elements/input#list)-Attribut angeben. Dies beschränkt den Benutzer nicht auf diese Optionen, ermöglicht jedoch eine schnellere Auswahl häufig verwendeter URLs. Dies bietet auch Hinweise zum [`autocomplete`](/de/docs/Web/HTML/Reference/Elements/input#autocomplete). Das `list`-Attribut gibt die ID einer {{HTMLElement("datalist")}} an, die wiederum ein {{HTMLElement("option")}}-Element pro vorgeschlagenem Wert enthält; der `value` jedes `option` entspricht dem entsprechenden vorgeschlagenen Wert für das URL-Eingabefeld.

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

Mit dem {{HTMLElement("datalist")}}-Element und seinen {{HTMLElement("option")}}s an Ort und Stelle, wird der Browser die angegebenen Werte als mögliche Werte für die URL vorschlagen; dies wird typischerweise als Popup oder Dropdown-Menü mit den Vorschlägen dargestellt. Die spezifische Benutzererfahrung kann sich je nach Browser unterscheiden, typischerweise wird beim Klicken in das Eingabefeld eine Dropdown-Liste der vorgeschlagenen URLs angezeigt. Während der Benutzer tippt, wird die Liste so angepasst, dass nur übereinstimmende Werte angezeigt werden. Jedes getippte Zeichen engt die Liste weiter ein, bis der Benutzer eine Auswahl trifft oder einen benutzerdefinierten Wert eingibt.

#### Verwendung von Labels für vorgeschlagene Werte

Sie können das [`label`](/de/docs/Web/HTML/Reference/Elements/option#label)-Attribut bei einem oder allen Ihrer `<option>`-Elemente einfügen, um Textbeschriftungen bereitzustellen. Einige Browser zeigen möglicherweise nur die Labels an, während andere sowohl das Label als auch die URL anzeigen.

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

Für `url`-Eingaben stehen zwei Ebenen der Inhaltvalidierung zur Verfügung. Erstens gibt es das Standardvalidierungslevel für alle {{HTMLElement("input")}}s, das automatisch sicherstellt, dass die Inhalte die Anforderungen zum Ein gültiges URL erfüllen. Es besteht jedoch auch die Möglichkeit, zusätzliche Filter hinzuzufügen, um sicherzustellen, dass Ihre eigenen speziellen Anforderungen erfüllt werden, falls vorhanden.

> [!WARNING]
> Die HTML-Formularvalidierung ist _kein_ Ersatz für Skripte, die sicherstellen, dass die eingegebenen Daten im richtigen Format sind. Es ist viel zu einfach für jemanden, die HTML so zu ändern, dass er die Validierung umgehen oder ganz entfernen kann. Es ist auch möglich, dass jemand Ihr HTML vollständig umgeht und die Daten direkt an Ihren Server sendet. Wenn Ihr serverseitiger Code die empfangenen Daten nicht validiert, könnte es katastrophal werden, wenn falsch formatierte Daten (oder Daten, die zu groß sind, vom falschen Typ und so weiter) in Ihre Datenbank eingegeben werden.

### Grundlegende Validierung

Browser, die den `url`-Inputtyp unterstützen, bieten automatisch eine Validierung, um sicherzustellen, dass nur Text, der dem Standardformat für URLs entspricht, in das Eingabefeld eingegeben wird.

Die Syntax einer URL ist ziemlich ausgeklügelt. Sie wird vom WHATWG's [URL Living Standard](https://url.spec.whatwg.org/) definiert und für Anfänger in unserem Artikel [Was ist eine URL?](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL) beschrieben.

### Eine URL erforderlich machen

Wie bereits erwähnt, um eine URL-Eingabe erforderlich zu machen, bevor das Formular gesendet werden kann (das Feld darf nicht leer gelassen werden), müssen Sie einfach das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attribut auf die Eingabe anwenden.

### Musterüberprüfung

Wenn Sie möchten, dass die eingegebene URL weiter als nur "jede Zeichenkette, die wie eine URL aussieht" eingeschränkt wird, können Sie das [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern)-Attribut verwenden, um einen regulären Ausdruck anzugeben, den der Wert erfüllen muss, um gültig zu sein.

## Beispiele

### URL-Validierung

In diesem Beispiel stellen wir sicher, dass eine URL mithilfe des [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attributs ausgefüllt wird und dass die URL etwas auf `mozilla.org` ist, indem wir das [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern)-Attribut zur Veranschaulichung verwenden.

#### HTML

Im `url`-Input setzen wir `pattern` auf `".*\.mozilla\.org.*"`. Dieser reguläre Ausdruck validiert eine Zeichenkette, die eine beliebige Anzahl von Zeichen hat, gefolgt von ".mozilla.org", gefolgt von einer beliebigen Anzahl von Zeichen. Da der Browser sowohl den Standard-URL-Filter als auch unser benutzerdefiniertes Muster gegen den angegebenen Text ausführt, erhalten wir eine Validierung, die sagt: "Stellen Sie sicher, dass dies eine gültige URL ist und auch `.mozilla.org` enthält."

Beachten Sie, dass ein strikteres Muster wie `https://developer\.mozilla\.org.*` robuster wäre, aber das würde das Attribut `type="url"` in diesem Fall redundant machen.

Das [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title)-Attribut beschreibt das Muster auch für Benutzer mit unterstützenden Technologien.

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

Das CSS gibt visuelle Hinweise, um dem Benutzer zu zeigen, ob der Inhalt {{cssxref(":valid")}} oder {{cssxref(":invalid")}} ist, indem eine entsprechende {{cssxref("content")}}-Eigenschaft hinzugefügt wird und enthält [alternativen Text](/de/docs/Web/CSS/Reference/Properties/content#alternative_text_string_counter_attr) für Benutzer mit unterstützenden Technologien.

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

Kopieren Sie die URL dieser Seite und fügen Sie sie in das Eingabefeld ein und Sie werden einen grünen Rahmen und ein grünes Häkchen sehen. Geben Sie eine andere URL ein, die **mozilla.org** nicht enthält oder eine ungültige URL und Sie sehen einen roten Rahmen und ein rotes Kreuz.

{{EmbedLiveSample("url-validation", "40px", , , , , "allow-forms")}}

Sehen Sie sich die Abschnitte [Musterüberprüfung](#musterüberprüfung) und [Verwendung von URL-Eingaben](#verwendung_von_url-eingaben) für andere Beispiele an.

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
