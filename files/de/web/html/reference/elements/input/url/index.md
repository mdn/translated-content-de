---
title: <input type="url">
slug: Web/HTML/Reference/Elements/input/url
l10n:
  sourceCommit: 03e992bd263d9bd3d0c8db197dd1c4829e8dd206
---

{{HTMLSidebar}}

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

Der Eingabewert wird automatisch validiert, um sicherzustellen, dass er entweder leer oder eine korrekt formatierte URL ist, bevor das Formular abgesendet werden kann. Die CSS-Pseudoklassen {{cssxref(":valid")}} und {{cssxref(":invalid")}} werden je nach Bedarf automatisch angewendet, um visuell anzuzeigen, ob der aktuelle Wert des Felds eine gültige URL ist oder nicht.

## Wert

Das [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Attribut des {{HTMLElement("input")}}-Elements enthält einen String, der automatisch auf die Konformität mit der URL-Syntax überprüft wird. Genauer gesagt, gibt es zwei mögliche Wertformate, die die Validierung bestehen:

1. Eine leere Zeichenkette ("") zeigt an, dass der Benutzer keinen Wert eingegeben hat oder dass der Wert entfernt wurde.
2. Eine korrekt formatiert absolute URL. Das bedeutet nicht unbedingt, dass die URL-Adresse existiert, aber zumindest ist sie korrekt formatiert. Ein Eintrag, der `urlscheme://rest-of-url` entspricht, kann gültig sein, auch wenn das eingetragene `urlscheme` nicht existiert.

Siehe [Validierung](#validierung) für Details dazu, wie URLs validiert werden, um sicherzustellen, dass sie korrekt formatiert sind.

## Zusätzliche Attribute

Zusätzlich zu den [globalen Attributen](/de/docs/Web/HTML/Reference/Global_attributes) und den Attributen, die auf alle {{HTMLElement("input")}}-Elemente unabhängig von ihrem Typ wirken, unterstützen `url`-Eingaben die folgenden Attribute.

> [!NOTE]
> Das globale Attribut [`autocorrect`](/de/docs/Web/HTML/Reference/Global_attributes/autocorrect) kann zu URL-Eingaben hinzugefügt werden, aber der gespeicherte Zustand ist immer `off`.

### list

Der Wert des `list`-Attributs ist die [`id`](/de/docs/Web/API/Element/id) eines im selben Dokument befindlichen {{HTMLElement("datalist")}}-Elements. Die {{HTMLElement("datalist")}} bietet eine Liste vordefinierter Werte, die dem Benutzer für diese Eingabe vorgeschlagen werden. Alle Werte in der Liste, die mit dem [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) inkompatibel sind, werden nicht in den vorgeschlagenen Optionen enthalten. Die angegebenen Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste wählen oder einen anderen Wert eingeben.

### maxlength

Die maximale Stringlänge (gemessen in {{Glossary("UTF-16", "UTF-16-Codeeinheiten")}}), die der Benutzer in die `url`-Eingabe eingeben kann. Dies muss ein ganzzahliger Wert von `0` oder höher sein. Wenn kein `maxlength` angegeben ist oder ein ungültiger Wert angegeben ist, hat die `url`-Eingabe keine maximale Länge. Dieser Wert muss auch größer oder gleich dem Wert von `minlength` sein.

Die Eingabe schlägt bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl, wenn die Länge des Textwerts des Feldes größer als `maxlength` {{Glossary("UTF-16", "UTF-16-Codeeinheiten")}} ist. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### minlength

Die minimale Stringlänge (gemessen in {{Glossary("UTF-16", "UTF-16-Codeeinheiten")}}), die der Benutzer in die `url`-Eingabe eingeben kann. Dies muss ein nicht-negativer ganzzahliger Wert sein, der kleiner oder gleich dem Wert ist, der durch `maxlength` angegeben wird. Wenn kein `minlength` angegeben ist oder ein ungültiger Wert angegeben ist, hat die `url`-Eingabe keine Mindestlänge.

Die Eingabe schlägt bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl, wenn die Länge des in das Feld eingegebenen Textes kürzer als `minlength` {{Glossary("UTF-16", "UTF-16-Codeeinheiten")}} ist. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### pattern

Das `pattern`-Attribut ist, wenn es angegeben ist, ein regulärer Ausdruck, dem der Wert des Eingabe-Feldes entsprechen muss, um die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) zu bestehen. Es muss ein gültiger JavaScript-Regulärer Ausdruck sein, wie er vom {{jsxref("RegExp")}}-Typ verwendet wird, und wie in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert; das `'u'`-Flag ist beim Kompilieren des regulären Ausdrucks angegeben, damit das Muster als Folge von Unicode-Codepunkten behandelt wird, anstatt als {{Glossary("ASCII", "ASCII")}}. Keine Schrägstriche sollten um den Mustertext herum angegeben werden.

Wenn das angegebene Muster nicht angegeben oder ungültig ist, wird kein regulärer Ausdruck angewendet und dieses Attribut wird vollständig ignoriert.

> [!NOTE]
> Verwenden Sie das [`title`](/de/docs/Web/HTML/Reference/Elements/input#title)-Attribut, um Text anzugeben, den die meisten Browser als Tooltip anzeigen, um zu erklären, welche Anforderungen erfüllt sein müssen, um das Muster zu erfüllen. Sie sollten auch andere erklärende Texte in der Nähe einfügen.

Siehe den Abschnitt [Muster-Validierung](#muster-validierung) für Details und ein Beispiel.

### placeholder

Das `placeholder`-Attribut ist ein String, der dem Benutzer einen kurzen Hinweis darauf gibt, welche Art von Informationen im Feld erwartet werden. Es sollte ein Wort oder eine kurze Phrase sein, die den erwarteten Datentyp demonstriert, anstatt eine erklärende Nachricht. Der Text _darf keine_ Wagenrückläufe oder Zeilenumbrüche enthalten.

Wenn der Inhalt des Steuerungselements eine Richtung ({{Glossary("LTR", "LTR")}} oder {{Glossary("RTL", "RTL")}}) hat, aber der Platzhalter in der entgegengesetzten Richtung angezeigt werden muss, können Sie die Unicode-bidirektionale Algorithmus-Formatierungszeichen verwenden, um die Richtung im Platzhalter zu überschreiben; siehe [Wie man Unicode-Steuerzeichen für bidirektionalen Text verwendet](https://www.w3.org/International/questions/qa-bidi-unicode-controls) für weitere Informationen.

> [!NOTE]
> Vermeiden Sie die Verwendung des `placeholder`-Attributs, wenn möglich. Es ist nicht so semantisch nützlich wie andere Möglichkeiten, Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Siehe [`<input>` label](/de/docs/Web/HTML/Reference/Elements/input#labels) für weitere Informationen.

### readonly

Das [`readonly`](/de/docs/Web/HTML/Reference/Attributes/readonly)-Attribut, wenn vorhanden, bedeutet, dass dieses Feld vom Benutzer nicht bearbeitet werden kann. Sein `value` kann jedoch weiterhin durch direktes Festlegen der `value`-Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) durch JavaScript-Code geändert werden.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat das [`required`](/de/docs/Web/HTML/Reference/Attributes/required)-Attribut keine Auswirkung auf Eingaben, bei denen das `readonly`-Attribut ebenfalls angegeben ist.

### size

Das `size`-Attribut ist ein numerischer Wert, der angibt, wie viele Zeichen das Eingabefeld breit sein soll. Der Wert muss eine Zahl größer als null sein, und der Standardwert ist 20. Da sich Zeichenbreiten unterscheiden, kann dies mehr oder weniger genau sein und sollte nicht darauf verlassen werden, genau zu sein; das resultierende Eingabefeld kann schmaler oder breiter sein als die angegebene Anzahl von Zeichen, abhängig von den Zeichen und der verwendeten Schriftart ({{cssxref("font")}}-Einstellungen).

Dies setzt _keine_ Begrenzung darauf, wie viele Zeichen der Benutzer in das Feld eingeben kann. Es gibt nur ungefähr an, wie viele gleichzeitig sichtbar sein können. Um ein oberes Limit für die Länge der Eingabedaten festzulegen, verwenden Sie das [`maxlength`](#maxlength)-Attribut.

### spellcheck

Das globale Attribut [`spellcheck`](/de/docs/Web/HTML/Reference/Global_attributes/spellcheck) wird verwendet, um anzugeben, ob die Rechtschreibprüfung für ein Element aktiviert werden soll. Es kann auf jedem editierbaren Inhalt verwendet werden, aber hier betrachten wir die spezifische Verwendung von `spellcheck` auf {{HTMLElement("input")}}-Elementen. Die zulässigen Werte für `spellcheck` sind:

- `false`
  - : Deaktiviert die Rechtschreibprüfung für dieses Element.
- `true`
  - : Aktiviert die Rechtschreibprüfung für dieses Element.
- "" (leerer String) oder kein Wert
  - : Folgt dem Standardverhalten des Elements für die Rechtschreibprüfung. Dies kann auf der Einstellung `spellcheck` eines Elternteils oder anderen Faktoren basieren.

Ein Eingabefeld kann die Rechtschreibprüfung aktiviert haben, wenn es nicht das [readonly](#readonly)-Attribut gesetzt hat und nicht deaktiviert ist.

Der durch Lesen von `spellcheck` zurückgegebene Wert kann nicht den tatsächlichen Status der Rechtschreibprüfung in einem Steuerungselement widerspiegeln, wenn die Präferenzen des {{Glossary("user_agent", "Benutzeragenten")}} die Einstellung überschreiben.

## Verwendung von URL-Eingaben

Wenn Sie eine URL-Eingabe mit dem richtigen `type`-Wert `url` erstellen, erhalten Sie eine automatische Validierung, die sicherstellt, dass der eingegebene Text zumindest im richtigen Format vorliegt, um potenziell eine gültige URL zu sein. Dies kann helfen, Fälle zu vermeiden, in denen der Benutzer die Adresse seiner Website falsch eingibt oder eine ungültige eingibt.

Es ist jedoch wichtig zu beachten, dass dies nicht ausreicht, um sicherzustellen, dass der angegebene Text eine tatsächlich existierende URL ist, die zum Benutzer der Website gehört oder in irgendeiner anderen Weise akzeptabel ist. Es stellt sicher, dass der Wert des Felds korrekt formatiert ist, um eine URL zu sein.

> [!NOTE]
> Ein Benutzer kann hinter den Kulissen an Ihrem HTML basteln, daher _darf_ Ihre Website diese Validierung nicht für Sicherheitszwecke verwenden. Sie _müssen_ die URL auf der Serverseite jeder Transaktion verifizieren, bei der der bereitgestellte Text Sicherheitsimplikationen jeglicher Art haben könnte.

### Eine grundlegende URL-Eingabe

Dieses Element wird als Standardtext-Eingabefeld mit grundlegenden Validierungsfunktionen implementiert. In seiner grundlegendsten Form kann ein URL-Eingabefeld wie folgt implementiert werden:

```html
<input id="myURL" name="myURL" type="url" />
```

{{ EmbedLiveSample('A_basic_URL_input', 600, 40) }}

Beachten Sie, dass es als gültig betrachtet wird, wenn es leer ist und wenn eine einzelne gültig formatierte URL-Adresse eingegeben wird, ansonsten jedoch nicht als gültig gilt. Durch Hinzufügen des [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attributs sind nur korrekt geformte URLs zulässig; die Eingabe wird nicht mehr als gültig betrachtet, wenn sie leer ist.

Hier passiert nichts Magisches. Die Übermittlung dieses Formulars würde die folgenden Daten an den Server senden: `myURL=http%3A%2F%2Fwww.example.com`. Beachten Sie, wie Zeichen bei Bedarf maskiert (escaped) werden.

### Platzhalter

Manchmal ist es hilfreich, einen kontextualen Hinweis zu geben, welche Form die Eingabedaten annehmen sollten. Dies kann besonders wichtig sein, wenn das Seitendesign keine beschreibenden Etiketten für jedes {{HTMLElement("input")}} bietet. Hier kommen **Platzhalter** ins Spiel. Ein Platzhalter ist ein Wert, der demonstriert, welche Form der `value` annehmen sollte, indem er ein Beispiel für einen gültigen Wert angibt, der im Bearbeitungsfeld angezeigt wird, wenn der `value` des Elements `""` ist. Sobald Daten in das Feld eingegeben werden, verschwindet der Platzhalter; wenn das Feld geleert wird, erscheint der Platzhalter wieder.

Hier haben wir eine `url`-Eingabe mit dem Platzhalter `http://www.example.com`. Beachten Sie, wie der Platzhalter verschwindet und wieder erscheint, wenn Sie die Inhalte des Bearbeitungsfelds manipulieren.

```html
<input
  id="myURL"
  name="myURL"
  type="url"
  placeholder="http://www.example.com" />
```

{{ EmbedLiveSample('Placeholders', 600, 40) }}

### Steuerung der Eingabegröße

Sie können sowohl die physische Länge des Eingabefelds als auch die minimalen und maximalen Längen der erlaubten Eingabetexte kontrollieren.

#### Physische Eingabeelementgröße

Die physische Größe des Eingabefelds kann mit dem [`size`](/de/docs/Web/HTML/Reference/Elements/input#size)-Attribut gesteuert werden. Damit können Sie die Anzahl der Zeichen angeben, die das Eingabefeld gleichzeitig anzeigen kann. In diesem Beispiel ist die `url`-Eingabe zum Beispiel 30 Zeichen breit:

```html
<input id="myURL" name="myURL" type="url" size="30" />
```

{{ EmbedLiveSample('Physical_input_element_size', 600, 40) }}

#### Elementwertlänge

Das `size` ist unabhängig von der Längenbeschränkung der eingegebenen URL selbst. Sie können eine Mindestlänge in Zeichen für die eingegebene URL mit dem [`minlength`](/de/docs/Web/HTML/Reference/Elements/input#minlength)-Attribut festlegen; ähnlich verwenden Sie [`maxlength`](/de/docs/Web/HTML/Reference/Elements/input#maxlength), um die maximale Länge der eingegebenen URL festzulegen. Wenn `maxLength` `size` überschreitet, scrollen die Inhalte der Eingabe, um die aktuelle Auswahl oder den Einfügepunkt anzuzeigen, während Inhalte manipuliert werden.

Das folgende Beispiel stellt ein 30 Zeichen breites URL-Adresseingabefeld bereit, das erfordert, dass die Inhalte nicht kürzer als 10 Zeichen und nicht länger als 80 Zeichen sind.

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
> Diese Attribute wirken sich auch auf die Validierung aus; ein kürzerer oder längerer Wert als die angegebenen Minimal-/Maximallängen wird als ungültig klassifiziert; außerdem werden die meisten Browser dem Benutzer die Eingabe eines Werts, der länger als die angegebene maximale Länge ist, nicht erlauben.

### Vorgabewerte bereitstellen

#### Einen einzelnen Standardwert mit dem value-Attribut bereitstellen

Wie immer können Sie einen Standardwert für eine `url`-Eingabe bereitstellen, indem Sie das [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Attribut festlegen:

```html
<input id="myURL" name="myURL" type="url" value="http://www.example.com" />
```

{{EmbedLiveSample("Providing_a_single_default_using_the_value_attribute", 600, 40)}}

#### Vorgeschlagene Werte anbieten

Noch einen Schritt weiter können Sie eine Liste von Standardoptionen anbieten, aus denen der Benutzer auswählen kann, indem Sie das [`list`](/de/docs/Web/HTML/Reference/Elements/input#list)-Attribut angeben. Dies beschränkt den Benutzer nicht auf diese Optionen, erlaubt ihm jedoch, häufig verwendete URLs schneller auszuwählen. Dies bietet auch Hinweise für [`autocomplete`](/de/docs/Web/HTML/Reference/Elements/input#autocomplete). Das `list`-Attribut gibt die ID einer {{HTMLElement("datalist")}} an, die wiederum ein {{HTMLElement("option")}}-Element pro vorgeschlagenem Wert enthält; der `value` jeder `option` ist der entsprechende vorgeschlagene Wert für die URL-Eingabe.

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

Mit dem {{HTMLElement("datalist")}}-Element und seinen {{HTMLElement("option")}}-Elementen an Ort und Stelle bietet der Browser die angegebenen Werte als potenzielle Werte für die URL an; dies wird typischerweise als Popup- oder Dropdown-Menü mit den Vorschlägen präsentiert. Während die spezifische Benutzererfahrung je nach Browser variieren kann, wird normalerweise ein Dropdown mit den URL-Vorschlägen angezeigt, wenn Sie in das Bearbeitungsfeld klicken. Dann wird die Liste beim Tippen des Benutzers angepasst, um nur passende Werte anzuzeigen. Jeder eingegebene Buchstabe reduziert die Liste der Vorschläge, bis der Benutzer eine Auswahl trifft oder einen benutzerdefinierten Wert eingibt.

#### Labels für vorgeschlagene Werte verwenden

Sie können sich entscheiden, das [`label`](/de/docs/Web/HTML/Reference/Elements/option#label)-Attribut bei einem oder allen Ihrer `<option>`-Elemente einzuschließen, um textuelle Labels bereitzustellen. Einige Browser können nur die Labels anzeigen, während andere möglicherweise sowohl das Label als auch die URL anzeigen.

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

Für `url`-Eingaben stehen zwei Ebenen der Inhaltsvalidierung zur Verfügung. Erstens gibt es die Standard-Validierungsebene, die allen {{HTMLElement("input")}}-Elementen geboten wird und automatisch sicherstellt, dass die Inhalte die Anforderungen an eine gültige URL erfüllen. Aber es gibt auch die Möglichkeit, zusätzliche Filter hinzuzufügen, um sicherzustellen, dass Ihre eigenen spezialisierten Anforderungen erfüllt werden, falls vorhanden.

> [!WARNING]
> Die HTML-Formularvalidierung ist _kein_ Ersatz für Skripte, die sicherstellen, dass die eingegebenen Daten im richtigen Format vorliegen. Es ist viel zu einfach für jemanden, die HTML anzupassen, um die Validierung zu umgehen oder sie ganz zu entfernen. Es ist auch möglich, dass jemand Ihr HTML komplett umgeht und die Daten direkt an Ihren Server übermittelt. Wenn Ihr Serverskript die empfangenen Daten nicht validiert, könnte es zu schwerwiegenden Problemen kommen, wenn nicht korrekt formatierte Daten (oder Daten, die zu groß sind oder vom falschen Typ sind usw.) in Ihre Datenbank eingegeben werden.

### Grundlegende Validierung

Browser, die den `url`-Eingabetyp unterstützen, bieten automatisch eine Validierung, um sicherzustellen, dass nur Text, der dem Standardformat für URLs entspricht, in das Eingabefeld eingegeben wird.

Die Syntax einer URL ist recht kompliziert. Sie wird durch den [URL Living Standard](https://url.spec.whatwg.org/) des WHATWG definiert und für Einsteiger in unserem Artikel [Was ist eine URL?](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL) beschrieben.

### Eine URL erforderlich machen

Wie bereits erwähnt, müssen Sie das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attribut auf der Eingabe einschließen, um eine URL-Eingabe erforderlich zu machen, bevor das Formular abgesendet werden kann (Sie können das Feld nicht leer lassen).

### Muster-Validierung

Wenn Sie möchten, dass die eingegebene URL weiter eingeschränkt wird als nur "jede Zeichenkette, die wie eine URL aussieht", können Sie das [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern)-Attribut verwenden, um einen {{Glossary("regular_expression", "regulären Ausdruck")}} anzugeben, dem der Wert entsprechen muss, um gültig zu sein.

## Beispiele

### URL-Validierung

In diesem Beispiel stellen wir sicher, dass eine URL mit dem [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attribut ausgefüllt wird und dass die URL etwas auf `mozilla.org` ist, indem wir das [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern)-Attribut zur Illustration verwenden.

#### HTML

In der `url`-Eingabe setzen wir `pattern` auf `".*\.mozilla\.org.*"`. Dieser reguläre Ausdruck validiert eine Zeichenkette, die aus einer beliebigen Anzahl von Zeichen, gefolgt von ".mozilla.org", gefolgt von einer beliebigen Anzahl von Zeichen besteht. Da der Browser sowohl den Standard-URL-Filter als auch unser benutzerdefiniertes Muster gegen den angegebenen Text ausführt, erhalten wir eine Validierung, die besagt: "Stellen Sie sicher, dass dies eine gültige URL ist und auch `.mozilla.org` enthält."

Beachten Sie, dass ein striktes Muster wie `https://developer\.mozilla\.org.*` robuster wäre, aber dies würde das `type="url"`-Attribut in diesem Fall überflüssig machen.

Das [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title)-Attribut beschreibt auch das `pattern` für Benutzer mit unterstützenden Technologien.

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

Das CSS gibt visuelle Hinweise, um dem Benutzer zu zeigen, ob der Inhalt {{cssxref(":valid")}} oder {{cssxref(":invalid")}} ist, indem eine passende {{cssxref("content")}}-Eigenschaft hinzugefügt wird, und schließt [alternativen Text](/de/docs/Web/CSS/content#alternative_text_string_counter) für Benutzer mit unterstützenden Technologien ein.

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

Kopieren Sie die URL dieser Seite und fügen Sie sie in das Eingabefeld ein, und Sie sehen einen grünen Rand und ein grünes Häkchen. Geben Sie eine andere URL ein, die **mozilla.org** nicht enthält, oder eine ungültige URL, und Sie sehen einen roten Rand und ein rotes Kreuz.

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
      <td><strong>Unterstützte gemeinsame Attribute</strong></td>
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

- [HTML-Formular-Leitfaden](/de/docs/Learn_web_development/Extensions/Forms)
- {{HTMLElement("input")}}
- [`<input type="tel">`](/de/docs/Web/HTML/Reference/Elements/input/tel)
- [`<input type="email">`](/de/docs/Web/HTML/Reference/Elements/input/email)
