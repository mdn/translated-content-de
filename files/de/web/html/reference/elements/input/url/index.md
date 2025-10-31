---
title: <input type="url">
slug: Web/HTML/Reference/Elements/input/url
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{HTMLElement("input")}} Elemente des Typs **`url`** werden verwendet, um dem Benutzer die Eingabe und Bearbeitung einer URL zu ermöglichen.

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

Der Eingabewert wird automatisch validiert, um sicherzustellen, dass er entweder leer oder eine korrekt formatierte URL ist, bevor das Formular abgeschickt werden kann. Die CSS-Pseudoklassen {{cssxref(":valid")}} und {{cssxref(":invalid")}} werden automatisch angewendet, um visuell anzuzeigen, ob der aktuelle Wert des Feldes eine gültige URL ist oder nicht.

## Wert

Das [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Attribut des {{HTMLElement("input")}} Elements enthält einen String, der automatisch so validiert wird, dass er der URL-Syntax entspricht. Genauer gesagt, gibt es zwei mögliche Wertformate, die die Validierung bestehen:

1. Ein leerer String ("") zeigt an, dass der Benutzer keinen Wert eingegeben hat oder dass der Wert entfernt wurde.
2. Eine korrekt gebildete absolute URL. Das bedeutet nicht unbedingt, dass die URL-Adresse existiert, aber sie ist zumindest korrekt formatiert. Ein Eintrag im Format `urlscheme://rest-of-url` kann gültig sein, selbst wenn das eingegebene `urlscheme` nicht existiert.

Siehe [Validierung](#validierung) für Details zur Validierung von URLs, um sicherzustellen, dass sie korrekt formatiert sind.

## Zusätzliche Attribute

Zusätzlich zu den [globalen Attributen](/de/docs/Web/HTML/Reference/Global_attributes) und den Attributen, die für alle {{HTMLElement("input")}} Elemente unabhängig von ihrem Typ gelten, unterstützen `url` Eingaben die folgenden Attribute.

> [!NOTE]
> Das globale Attribut [`autocorrect`](/de/docs/Web/HTML/Reference/Global_attributes/autocorrect) kann zu URL-Eingaben hinzugefügt werden, aber der gespeicherte Zustand ist immer `off`.

### list

Der Wert des `list` Attributs ist die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}} Elements, das im gleichen Dokument enthalten ist. Das {{HTMLElement("datalist")}} bietet eine Liste vordefinierter Werte, die dem Benutzer für diese Eingabe vorgeschlagen werden. Alle Werte in der Liste, die mit dem [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) nicht kompatibel sind, werden nicht in die vorgeschlagenen Optionen aufgenommen. Die bereitgestellten Werte sind Vorschläge und keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert angeben.

### maxlength

Die maximale Zeichenlänge (gemessen in {{Glossary("UTF-16", "UTF-16-Codeeinheiten")}}), die der Benutzer in das `url` Eingabefeld eingeben kann. Dies muss ein ganzzahliger Wert von `0` oder höher sein. Wenn keine `maxlength` angegeben ist oder ein ungültiger Wert angegeben wird, hat die `url` Eingabe keine maximale Länge. Dieser Wert muss außerdem größer oder gleich dem Wert von `minlength` sein.

Die Eingabe schlägt die [Constraint-Validierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl, wenn die Länge des Textwerts des Feldes größer als `maxlength` {{Glossary("UTF-16", "UTF-16-Codeeinheiten")}} ist. Constraint-Validierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### minlength

Die minimale Zeichenlänge (gemessen in {{Glossary("UTF-16", "UTF-16-Codeeinheiten")}}), die der Benutzer in das `url` Eingabefeld eingeben kann. Dies muss ein nicht-negativer ganzzahliger Wert sein, der kleiner oder gleich dem von `maxlength` angegebenen Wert ist. Wenn keine `minlength` angegeben ist oder ein ungültiger Wert angegeben wird, hat die `url` Eingabe keine Mindestlänge.

Die Eingabe schlägt die [Constraint-Validierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl, wenn die Länge des in das Feld eingegebenen Textes kürzer als `minlength` {{Glossary("UTF-16", "UTF-16-Codeeinheiten")}} ist. Constraint-Validierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### pattern

Das `pattern` Attribut, wenn angegeben, ist ein regulärer Ausdruck, den der [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) der Eingabe übereinstimmen muss, damit der Wert die [Constraint-Validierung](/de/docs/Web/HTML/Guides/Constraint_validation) besteht. Es muss ein gültiger JavaScript-Regulärer Ausdruck sein, wie er vom {{jsxref("RegExp")}} Typ verwendet wird und in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert ist; das `'u'` Flag wird beim Kompilieren des regulären Ausdrucks angegeben, damit das Muster als Folge von Unicode-Codepunkten behandelt wird, anstatt als {{Glossary("ASCII", "ASCII")}}. Vorwärtsschrägstriche sollten nicht um den Mustertest angegeben werden.

Wenn das angegebene Muster nicht angegeben oder ungültig ist, wird kein regulärer Ausdruck angewendet und dieses Attribut wird vollständig ignoriert.

> [!NOTE]
> Verwenden Sie das [`title`](/de/docs/Web/HTML/Reference/Elements/input#title) Attribut, um Text anzugeben, den die meisten Browser als Tooltip anzeigen, um zu erklären, welche Anforderungen erfüllt werden müssen, um dem Muster zu entsprechen. Sie sollten auch andere erklärende Texte in der Nähe einfügen.

Siehe den Abschnitt [Muster-Validierung](#muster-validierung) für Details und ein Beispiel.

### placeholder

Das `placeholder` Attribut ist ein String, der dem Benutzer einen kurzen Hinweis darauf gibt, welche Art von Informationen in dem Feld erwartet werden. Es sollte ein Wort oder eine kurze Phrase sein, die den erwarteten Datentyp demonstriert, anstatt eine erklärende Nachricht. Der Text _darf_ keine Wagenrückläufe oder Zeilenumbrüche enthalten.

Wenn der Inhalt der Steuerung eine Richtung hat ({{Glossary("LTR", "LTR")}} oder {{Glossary("RTL", "RTL")}}), aber der Platzhalter in der entgegengesetzten Richtung angezeigt werden soll, können Sie die Formatierungszeichen der bidirektionalen Unicode-Algorithmus verwenden, um die Richtung innerhalb des Platzhalters zu überschreiben; siehe [Wie man Unicode-Steuerzeichen für bidi-Text verwendet](https://www.w3.org/International/questions/qa-bidi-unicode-controls) für weitere Informationen.

> [!NOTE]
> Vermeiden Sie nach Möglichkeit die Verwendung des `placeholder` Attributs. Es ist nicht so semantisch nützlich wie andere Möglichkeiten, Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Siehe [`<input>` Labels](/de/docs/Web/HTML/Reference/Elements/input#labels) für weitere Informationen.

### readonly

Das [`readonly`](/de/docs/Web/HTML/Reference/Attributes/readonly) Boolean-Attribut, falls vorhanden, bedeutet, dass dieses Feld vom Benutzer nicht bearbeitet werden kann. Sein `value` kann jedoch immer noch durch JavaScript-Code direkt durch Einstellen der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) `value` Eigenschaft geändert werden.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat [`required`](/de/docs/Web/HTML/Reference/Attributes/required) keinen Effekt auf Eingaben mit dem `readonly` Attribut auch angegeben.

### size

Das `size` Attribut ist ein numerischer Wert, der angibt, wie viele Zeichen breit das Eingabefeld sein soll. Der Wert muss eine Zahl größer als Null sein, und der Standardwert beträgt 20. Da sich Zeichenbreiten unterscheiden, kann dies möglicherweise nicht genau sein und sollte nicht darauf verlassen werden; das resultierende Eingabefeld kann je nach Zeichen und Schriftart ({{cssxref("font")}} Einstellungen in Verwendung) schmaler oder breiter als die angegebene Anzahl von Zeichen sein.

Dies setzt _kein_ Limit auf die Anzahl der Zeichen, die der Benutzer in das Feld eingeben kann. Es gibt nur an, wie viele ungefähr gleichzeitig sichtbar sein können. Um ein oberes Limit für die Länge der Eingabedaten festzulegen, verwenden Sie das [`maxlength`](#maxlength) Attribut.

### spellcheck

Das [`spellcheck`](/de/docs/Web/HTML/Reference/Global_attributes/spellcheck) globale Attribut wird verwendet, um anzugeben, ob die Rechtschreibprüfung für ein Element aktiviert werden soll. Es kann auf jedem bearbeitbaren Inhalt verwendet werden, hier betrachten wir jedoch die Spezifika im Zusammenhang mit der Verwendung von `spellcheck` auf {{HTMLElement("input")}} Elementen. Die zulässigen Werte für `spellcheck` sind:

- `false`
  - : Deaktiviert die Rechtschreibprüfung für dieses Element.
- `true`
  - : Aktiviert die Rechtschreibprüfung für dieses Element.
- "" (leer) oder kein Wert
  - : Folgt dem Standardverhalten des Elements für die Rechtschreibprüfung. Dies kann auf den `spellcheck` Einstellungen eines übergeordneten Elements oder anderen Faktoren basieren.

Ein Eingabefeld kann die Rechtschreibprüfung aktiviert haben, wenn es nicht das [readonly](#readonly) Attribut gesetzt hat und nicht deaktiviert ist.

Der durch das Lesen von `spellcheck` zurückgegebene Wert spiegelt möglicherweise nicht den tatsächlichen Status der Rechtschreibprüfung innerhalb einer Steuerung wider, wenn die Präferenzen des {{Glossary("user_agent", "Benutzeragenten")}} die Einstellung überschreiben.

## Verwendung von URL-Eingaben

Wenn Sie eine URL-Eingabe mit dem richtigen `type` Wert `url` erstellen, erhalten Sie eine automatische Validierung, dass der eingegebene Text zumindest in der richtigen Form ist, um potenziell eine legitime URL zu sein. Dies kann helfen, Fälle zu vermeiden, in denen der Benutzer die Adresse seiner Website falsch eingibt oder eine ungültige angibt.

Es ist jedoch wichtig zu beachten, dass dies nicht ausreicht, um sicherzustellen, dass es sich bei dem angegebenen Text um eine URL handelt, die tatsächlich existiert, dem Benutzer der Site entspricht oder auf andere Weise akzeptabel ist. Es stellt sicher, dass der Wert des Feldes korrekt formatiert ist, um eine URL zu sein.

> [!NOTE]
> Ein Benutzer kann hinter den Kulissen mit Ihrem HTML herumtüfteln, daher _darf_ Ihre Seite diese Validierung _nicht_ für Sicherheitszwecke verwenden. Sie _müssen_ die URL serverseitig verifizieren, wenn der bereitgestellte Text Sicherheitsimplikationen jeglicher Art haben könnte.

### Eine grundlegende URL-Eingabe

Dieses Element wird als Standard-Text-Eingabefeld mit grundlegenden Validierungsfunktionen implementiert. In seiner grundlegendsten Form kann eine URL-Eingabe so implementiert werden:

```html
<input id="myURL" name="myURL" type="url" />
```

{{ EmbedLiveSample('A_basic_URL_input', 600, 40) }}

Beachten Sie, dass es als gültig betrachtet wird, wenn es leer ist und wenn eine einzelne gültig formatierte URL-Adresse eingegeben wird, aber ansonsten nicht als gültig angesehen wird. Durch Hinzufügen des [`required`](/de/docs/Web/HTML/Reference/Elements/input#required) Attributs sind nur korrekt gebildete URLs erlaubt; die Eingabe wird nicht mehr als gültig angesehen, wenn sie leer ist.

Hier passiert nichts Magisches. Das Absenden dieses Formulars würde dazu führen, dass die folgenden Daten an den Server gesendet werden: `myURL=http%3A%2F%2Fwww.example.com`. Beachten Sie, wie Zeichen bei Bedarf escaped werden.

### Platzhalter

Manchmal ist es hilfreich, einen kontextabhängigen Hinweis darauf zu geben, in welchem Format die Eingabedaten vorliegen sollten. Dies kann besonders wichtig sein, wenn das Seitendesign keine beschreibenden Labels für jedes {{HTMLElement("input")}} bietet. Hier kommen **Platzhalter** ins Spiel. Ein Platzhalter ist ein Wert, der die Form des `value` veranschaulicht, indem er ein Beispiel für einen gültigen Wert präsentiert, der innerhalb des Bearbeitungsfeldes angezeigt wird, wenn der `value` des Elements "". Sobald Daten in das Feld eingegeben werden, verschwindet der Platzhalter; wenn das Feld geleert wird, erscheint der Platzhalter wieder.

Hier haben wir eine `url` Eingabe mit dem Platzhalter `http://www.example.com`. Beachten Sie, wie der Platzhalter verschwindet und wieder auftaucht, während Sie den Inhalt des Bearbeitungsfeldes manipulieren.

```html
<input
  id="myURL"
  name="myURL"
  type="url"
  placeholder="http://www.example.com" />
```

{{ EmbedLiveSample('Placeholders', 600, 40) }}

### Steuerung der Eingabegröße

Sie können sowohl die physische Länge des Eingabefeldes als auch die minimal und maximal erlaubten Längen für den eingegebenen Text steuern.

#### Physische Eingabeelementgröße

Die physische Größe des Eingabefeldes kann mit dem [`size`](/de/docs/Web/HTML/Reference/Elements/input#size) Attribut gesteuert werden. Damit können Sie die Anzahl der Zeichen angeben, die das Eingabefeld gleichzeitig anzeigen kann. In diesem Beispiel ist das `url` Bearbeitungsfeld 30 Zeichen breit:

```html
<input id="myURL" name="myURL" type="url" size="30" />
```

{{ EmbedLiveSample('Physical_input_element_size', 600, 40) }}

#### Elementwertlänge

Das `size` ist getrennt von der Längenbegrenzung für die eingegebene URL selbst. Sie können eine Mindestlänge in Zeichen für die eingegebene URL mithilfe des [`minlength`](/de/docs/Web/HTML/Reference/Elements/input#minlength) Attributs festlegen; verwenden Sie ähnlich [`maxlength`](/de/docs/Web/HTML/Reference/Elements/input#maxlength), um die maximale Länge der eingegebenen URL festzulegen. Wenn `maxLength` `size` übersteigt, scrollt der Inhalt des Eingabefeldes nach Bedarf, um die aktuelle Auswahl oder den Einfügepunkt anzuzeigen, während der Inhalt manipuliert wird.

Das untenstehende Beispiel erstellt ein 30 Zeichen breites URL-Eingabefeld, das verlangt, dass der Inhalt nicht kürzer als 10 Zeichen und nicht länger als 80 Zeichen ist.

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
> Diese Attribute beeinflussen auch die Validierung; ein Wert, der kürzer oder länger als die angegebenen Mindest-/Höchstlängen ist, wird als ungültig eingestuft; zudem werden die meisten Browser den Benutzer nicht zulassen, einen Wert einzugeben, der länger als die angegebene maximale Länge ist.

### Standardoptionen bereitstellen

#### Bereitstellung eines einzigen Standards mit dem value-Attribut

Wie immer können Sie einen Standardwert für ein `url` Eingabefeld bereitstellen, indem Sie das [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) Attribut festlegen:

```html
<input id="myURL" name="myURL" type="url" value="http://www.example.com" />
```

{{EmbedLiveSample("Providing_a_single_default_using_the_value_attribute", 600, 40)}}

#### Vorschlag von Werten

Einen Schritt weiter können Sie eine Liste von Standardoptionen bereitstellen, aus denen der Benutzer auswählen kann, indem Sie das [`list`](/de/docs/Web/HTML/Reference/Elements/input#list) Attribut spezifizieren. Dies schränkt den Benutzer nicht auf diese Optionen ein, ermöglicht ihm jedoch die schnellere Auswahl häufig benutzter URLs. Dies bietet auch Hinweise für [`autocomplete`](/de/docs/Web/HTML/Reference/Elements/input#autocomplete). Das `list` Attribut spezifiziert die ID eines {{HTMLElement("datalist")}}, das seinerseits ein {{HTMLElement("option")}} Element pro vorgeschlagenem Wert enthält; der `value` jedes `option` ist der entsprechende vorgeschlagene Wert für das URL-Eingabefeld.

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

Mit dem {{HTMLElement("datalist")}} Element und seinen {{HTMLElement("option")}} s an Ort und Stelle wird der Browser die angegebenen Werte als mögliche Werte für die URL anbieten; dies wird typischerweise als Popup- oder Dropdown-Menü mit den Vorschlägen präsentiert. Während die spezifische Benutzererfahrung von einem Browser zum anderen variieren kann, wird typischerweise durch Klicken in das Bearbeitungsfeld ein Dropdown-Menü der vorgeschlagenen URLs präsentiert. Dann wird die Liste, während der Benutzer tippt, angepasst, um nur übereinstimmende Werte anzuzeigen. Jede eingetippte Zeichen verringert die Liste, bis der Benutzer eine Auswahl trifft oder einen benutzerdefinierten Wert eingibt.

#### Verwenden von Labels für vorgeschlagene Werte

Sie können das [`label`](/de/docs/Web/HTML/Reference/Elements/option#label) Attribut an einem oder allen Ihrer `<option>` Elemente angeben, um textuelle Labels bereitzustellen. Einige Browser zeigen möglicherweise nur die Labels an, während andere sowohl das Label als auch die URL anzeigen.

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

Es gibt zwei Ebenen der Inhaltsvalidierung für `url` Eingaben. Erstens gibt es die Standard-Ebene der Validierung, die allen {{HTMLElement("input")}} s angeboten wird, die automatisch sicherstellt, dass die Inhalte den Anforderungen entsprechen, um eine gültige URL zu sein. Aber es besteht auch die Möglichkeit, zusätzliche Filter hinzuzufügen, um sicherzustellen, dass Ihre eigenen speziellen Bedürfnisse erfüllt werden, falls Sie welche haben.

> [!WARNING]
> Die HTML-Formularvalidierung ist _kein_ Ersatz für Skripte, die sicherstellen, dass die eingegebenen Daten im richtigen Format vorliegen. Es ist viel zu einfach für jemanden, Änderungen am HTML vorzunehmen, die es ihm erlauben, die Validierung zu umgehen oder sie vollständig zu entfernen. Es ist auch möglich, dass jemand Ihr HTML vollständig umgeht und die Daten direkt an Ihren Server sendet. Wenn Ihr serverseitiger Code die empfangenen Daten nicht validiert, könnte ein Desaster eintreten, wenn falsch formatierte Daten (oder Daten, die zu groß sind, vom falschen Typ sind usw.) in Ihre Datenbank eingegeben werden.

### Grundlegende Validierung

Browser, die den `url` Eingabetyp unterstützen, bieten automatisch eine Validierung an, um sicherzustellen, dass nur Text, der dem Standardformat für URLs entspricht, in das Eingabefeld eingegeben wird.

Die Syntax einer URL ist ziemlich kompliziert. Sie wird durch den WHATWG's [URL Living Standard](https://url.spec.whatwg.org/) definiert und für Neulinge in unserem Artikel [Was ist eine URL?](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL) beschrieben.

### Eine URL erforderlich machen

Wie vorhin erwähnt, um eine URL-Eingabe erforderlich zu machen, bevor das Formular abgeschickt werden kann (Sie können das Feld nicht leer lassen), müssen Sie einfach das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required) Attribut angeben.

### Muster-Validierung

Wenn Sie möchten, dass die eingegebene URL weiter eingeschränkt wird als nur "jede Zeichenkette, die wie eine URL aussieht", können Sie das [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern) Attribut verwenden, um einen {{Glossary("regular_expression", "regulären Ausdruck")}} anzugeben, dem der Wert entsprechen muss, damit der Wert gültig ist.

## Beispiele

### URL-Validierung

In diesem Beispiel stellen wir sicher, dass eine URL mit dem [`required`](/de/docs/Web/HTML/Reference/Elements/input#required) Attribut angegeben wurde und dass die URL eine auf `mozilla.org` ist, indem das [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern) Attribut als Illustration verwendet wird.

#### HTML

In der `url` Eingabe setzen wir `pattern` auf `".*\.mozilla\.org.*"`. Dieser reguläre Ausdruck validiert eine Zeichenkette, die eine beliebige Anzahl von Zeichen enthält, gefolgt von ".mozilla.org", gefolgt von einer beliebigen Anzahl von Zeichen. Da der Browser sowohl den Standard-URL-Filter _als auch_ unser benutzerdefiniertes Muster gegen den spezifizierten Text ausführt, erhalten wir eine Validierung, die sagt "stellen Sie sicher, dass dies eine gültige URL ist, und dass sie `.mozilla.org` enthält."

Beachten Sie, dass ein striktes Muster wie `https://developer\.mozilla\.org.*` robuster wäre, aber dadurch wäre das `type="url"` Attribut in diesem Fall redundant.

Das [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title) Attribut beschreibt auch das `pattern` für Nutzer mit unterstützenden Technologien.

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

Das CSS gibt visuelle Hinweise, um den Benutzer zu zeigen, ob der Inhalt {{cssxref(":valid")}} oder {{cssxref(":invalid")}} ist, indem eine entsprechende {{cssxref("content")}} Eigenschaft hinzugefügt wird und [alternativer Text](/de/docs/Web/CSS/Reference/Properties/content#alternative_text_string_counter) für Nutzer von unterstützenden Technologien enthalten ist.

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

Kopieren Sie die URL dieser Seite und fügen Sie sie in das Eingabefeld ein und Sie werden einen grünen Umriss und ein grünes Häkchen sehen. Geben Sie eine beliebige andere URL ein, die **mozilla.org** nicht enthält oder eine ungültige URL, und Sie werden einen roten Umriss und ein rotes Kreuz sehen.

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
      <td><strong>IDL Attribute</strong></td>
      <td>
        <code>list</code>, <code>value</code>, <code>selectionEnd</code>,
        <code>selectionDirection</code>
      </td>
    </tr>
    <tr>
      <td><strong>DOM Schnittstelle</strong></td>
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
      <td><strong>Implizite ARIA Rolle</strong></td>
      <td>ohne <code>list</code> Attribut:
                <code><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role">textbox</a></code></td>
      <td>mit <code>list</code> Attribut: <code><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role">combobox</a></code></td>
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
