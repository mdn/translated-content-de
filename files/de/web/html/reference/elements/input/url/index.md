---
title: <input type="url">
slug: Web/HTML/Reference/Elements/input/url
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

{{HTMLElement("input")}}-Elemente vom Typ **`url`** werden verwendet, um den Benutzer eine URL eingeben und bearbeiten zu lassen.

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

Der Eingabewert wird automatisch validiert, um sicherzustellen, dass er entweder leer oder eine korrekt formatierte URL ist, bevor das Formular abgesendet werden kann. Die CSS-Pseudoklassen {{cssxref(":valid")}} und {{cssxref(":invalid")}} werden automatisch angewendet, um visuell anzuzeigen, ob der aktuelle Wert des Feldes eine gültige URL ist oder nicht.

## Wert

Das [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Attribut des {{HTMLElement("input")}}-Elements enthält einen String, der automatisch auf Konformität mit der URL-Syntax geprüft wird. Spezieller gibt es zwei mögliche Wertformate, die die Validierung bestehen:

1. Ein leerer String („“) zeigt an, dass der Benutzer keinen Wert eingegeben hat oder der Wert entfernt wurde.
2. Eine einzelne korrekt geformte absolute URL. Das bedeutet nicht unbedingt, dass die URL-Adresse existiert, aber sie ist zumindest korrekt formatiert. Ein Eintrag, der dem Muster `urlscheme://rest-of-url` entspricht, kann gültig sein, auch wenn das eingegebene `urlscheme` nicht existiert.

Details zur Validierung von URLs, um sicherzustellen, dass sie korrekt formatiert sind, finden Sie unter [Validierung](#validierung).

## Zusätzliche Attribute

Zusätzlich zu den [globalen Attributen](/de/docs/Web/HTML/Reference/Global_attributes) und den Attributen, die auf alle {{HTMLElement("input")}}-Elemente unabhängig von ihrem Typ wirken, unterstützen `url`-Eingaben die folgenden Attribute.

> [!NOTE]
> Das [`autocorrect`](/de/docs/Web/HTML/Reference/Global_attributes/autocorrect)-Attribut kann zu URL-Eingaben hinzugefügt werden, aber der gespeicherte Zustand ist immer `off`.

### list

Der Wert des list-Attributs ist die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements im selben Dokument. Der {{HTMLElement("datalist")}} stellt eine Liste vordefinierter Werte bereit, die dem Benutzer für diese Eingabe vorgeschlagen werden. Jegliche Werte in der Liste, die nicht mit dem [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) kompatibel sind, werden nicht in den Vorschlagsoptionen aufgenommen. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert angeben.

### maxlength

Die maximale String-Länge (gemessen in [UTF-16-Code-Einheiten](/de/docs/Glossary/UTF-16)), die der Benutzer in die `url`-Eingabe eingeben kann. Dies muss ein ganzzahliger Wert von `0` oder höher sein. Wenn kein `maxlength` angegeben ist oder ein ungültiger Wert angegeben wird, hat die `url`-Eingabe keine maximale Länge. Dieser Wert muss auch größer oder gleich dem Wert von `minlength` sein.

Die Eingabe schlägt fehl [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation), wenn die Länge des Textwertes des Feldes größer als `maxlength` [UTF-16-Code-Einheiten](/de/docs/Glossary/UTF-16) ist. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### minlength

Die minimale String-Länge (gemessen in [UTF-16-Code-Einheiten](/de/docs/Glossary/UTF-16)), die der Benutzer in die `url`-Eingabe eingeben kann. Dies muss ein nicht-negativer, ganzzahliger Wert sein, der kleiner oder gleich dem von `maxlength` angegebenen Wert ist. Wenn kein `minlength` angegeben ist oder ein ungültiger Wert angegeben wird, hat die `url`-Eingabe keine Mindestlänge.

Die Eingabe schlägt fehl [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation), wenn die Länge des in das Feld eingegebenen Textes weniger als `minlength` [UTF-16-Code-Einheiten](/de/docs/Glossary/UTF-16) beträgt. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### pattern

Das `pattern`-Attribut, wenn angegeben, ist ein regulärer Ausdruck, den der [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) der Eingabe erfüllen muss, um die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) zu bestehen. Es muss sich um einen gültigen JavaScript-Regulären Ausdruck handeln, der vom {{jsxref("RegExp")}}-Typ verwendet wird und wie in unserem [Leitfaden zu Regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert ist; das `'u'`-Flag ist beim Kompilieren des regulären Ausdrucks festgelegt, damit das Muster als Sequenz von Unicode-Codepunkten behandelt wird, anstatt als [ASCII](/de/docs/Glossary/ASCII). Vorwärtsschrägstriche sollten nicht um den Mustertext angegeben werden.

Wenn das angegebene Muster nicht angegeben oder ungültig ist, wird kein regulärer Ausdruck angewendet und dieses Attribut vollständig ignoriert.

> [!NOTE]
> Verwenden Sie das [`title`](/de/docs/Web/HTML/Reference/Elements/input#title)-Attribut, um Text anzugeben, den die meisten Browser als Tooltip anzeigen, um zu erklären, welche Anforderungen erfüllt werden müssen, um dem Muster zu entsprechen. Sie sollten auch anderen erklärenden Text in der Nähe hinzufügen.

Weitere Details und ein Beispiel finden Sie im Abschnitt [Muster-Validierung](#muster-validierung).

### placeholder

Das `placeholder`-Attribut ist ein String, der dem Benutzer einen kurzen Hinweis darauf gibt, welche Art von Informationen im Feld erwartet werden. Es sollte ein Wort oder eine kurze Phrase sein, die die erwartete Art der Daten demonstriert, anstatt eine erklärende Nachricht. Der Text _darf keine_ Wagenrückläufe oder Zeilenvorschübe enthalten.

Wenn der Inhalt des Steuerungselements eine Richtung ([LTR](/de/docs/Glossary/LTR) oder [RTL](/de/docs/Glossary/RTL)) hat, der Platzhalter jedoch in der entgegengesetzten Richtung angezeigt werden muss, können Sie Unicode-Bidi-Algorithmus-Formatierungszeichen verwenden, um die Richtung innerhalb des Platzhalters zu überschreiben. Weitere Informationen finden Sie unter [Anleitung zur Verwendung von Unicode-Steuerelementen für bidi-Text](https://www.w3.org/International/questions/qa-bidi-unicode-controls).

> [!NOTE]
> Vermeiden Sie die Verwendung des `placeholder`-Attributs, wenn möglich. Es ist nicht so semantisch nützlich wie andere Wege, Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Weitere Informationen finden Sie unter [`<input>`-Labels](/de/docs/Web/HTML/Reference/Elements/input#labels).

### readonly

Das [`readonly`](/de/docs/Web/HTML/Reference/Attributes/readonly)-Boolesche Attribut bedeutet, dass dieses Feld, falls vorhanden, nicht vom Benutzer bearbeitet werden kann. Sein `value` kann jedoch direkt vom JavaScript-Code geändert werden, indem die [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) `value`-Eigenschaft gesetzt wird.

> [!NOTE]
> Weil ein schreibgeschütztes Feld keinen Wert haben kann, hat [`required`](/de/docs/Web/HTML/Reference/Attributes/required) keine Wirkung auf Eingaben, bei denen auch das `readonly`-Attribut angegeben ist.

### size

Das `size`-Attribut ist ein Zahlenwert, der angibt, wie viele Zeichen breit das Eingabefeld sein soll. Der Wert muss eine Zahl größer als null sein, und der Standardwert ist 20. Da Zeichenbreiten variieren, kann dies genau sein oder auch nicht und darauf sollte nicht vertraut werden; das resultierende Eingabefeld kann je nach den Zeichen und den Einstellungen ({{cssxref("font")}}) schmaler oder breiter sein als die angegebenen Anzahl von Zeichen.

Dies setzt _kein_ Limit dafür, wie viele Zeichen der Benutzer in das Feld eingeben kann. Es gibt nur an, wie viele ungefähr gleichzeitig sichtbar sein können. Um ein oberes Limit für die Länge der Eingabedaten festzulegen, verwenden Sie das [`maxlength`](#maxlength)-Attribut.

### spellcheck

Das [`spellcheck`](/de/docs/Web/HTML/Reference/Global_attributes/spellcheck)-Globale-Attribut wird verwendet, um anzugeben, ob die Rechtschreibprüfung für ein Element aktiviert werden soll. Es kann auf jeden bearbeitbaren Inhalt angewendet werden, aber hier betrachten wir spezifische Details zur Verwendung von `spellcheck` auf {{HTMLElement("input")}}-Elementen. Die zulässigen Werte für `spellcheck` sind:

- `false`
  - : Deaktivieren Sie die Rechtschreibprüfung für dieses Element.
- `true`
  - : Aktivieren Sie die Rechtschreibprüfung für dieses Element.
- "" (leerer String) oder kein Wert
  - : Folgen Sie dem Standardsverhalten des Elements für die Rechtschreibprüfung. Dies kann auf den `spellcheck`-Einstellungen eines übergeordneten Elements oder anderen Faktoren basieren.

Ein Eingabefeld kann die Rechtschreibprüfung aktivieren, wenn es nicht das [`readonly`](#readonly)-Attribut gesetzt hat und nicht deaktiviert ist.

Der durch das Lesen von `spellcheck` zurückgegebene Wert entspricht möglicherweise nicht dem tatsächlichen Zustand des Textprüfung innerhalb eines Steuerelements, wenn die Einstellungen des [User-Agent](/de/docs/Glossary/User_agent) die Einstellung außer Kraft setzen.

## Verwenden von URL-Eingaben

Wenn Sie eine URL-Eingabe mit dem richtigen `type`-Wert, `url`, erstellen, erhalten Sie automatisch eine Validierung, dass der eingegebene Text zumindest die richtige Form hat, um potenziell eine legitime URL zu sein. Dies kann helfen, Fälle zu vermeiden, in denen der Benutzer die Adresse seiner Website falsch eingibt, oder eine ungültige angibt.

Es ist jedoch wichtig, zu beachten, dass dies nicht ausreicht, um sicherzustellen, dass der angegebene Text eine tatsächlich existierende URL ist, die dem Benutzer der Seite gehört, oder in irgendeiner anderen Weise akzeptabel ist. Es stellt sicher, dass der Wert des Feldes korrekt formatiert ist, um eine URL zu sein.

> [!NOTE]
> Ein Benutzer kann hinter den Kulissen an Ihrem HTML basteln, daher _darf_ Ihre Seite diese Validierung nicht für Sicherheitszwecke verwenden. Sie _müssen_ die URL auf der Serverseite jeder Transaktion überprüfen, bei der der bereitgestellte Text irgendwelche Sicherheitsimplikationen hat.

### Eine grundlegende URL-Eingabe

Dieses Element wird als standardmäßiges Texteinabefeld mit grundlegenden Validierungsfunktionen implementiert. In seiner einfachsten Form kann eine URL-Eingabe wie folgt implementiert werden:

```html
<input id="myURL" name="myURL" type="url" />
```

{{EmbedLiveSample('A_basic_URL_input', 600, 40) }}

Beachten Sie, dass es als gültig angesehen wird, wenn es leer ist und wenn eine einzige gültig formatierte URL-Adresse eingegeben wird, ansonsten jedoch nicht als gültig betrachtet wird. Durch das Hinzufügen des [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attributs sind nur korrekt geformte URLs erlaubt; die Eingabe wird bei leerem Zustand nicht mehr als gültig angesehen.

Es passiert nichts Magisches hier. Wenn dieses Formular übermittelt würde, würden folgende Daten an den Server gesendet: `myURL=http%3A%2F%2Fwww.example.com`. Beachten Sie, wie Zeichen bei Bedarf maskiert werden.

### Platzhalter

Manchmal ist es hilfreich, einen kontextualen Hinweis zu geben, welche Form die eingegebenen Daten haben sollten. Dies kann besonders wichtig sein, wenn das Design der Seite keine beschreibenden Labels für jedes {{HTMLElement("input")}} bietet. Hier kommen **Platzhalter** ins Spiel. Ein Platzhalter ist ein Wert, der zeigt, welche Form der `value` haben sollte, indem ein Beispiel für einen gültigen Wert präsentiert wird, der innerhalb des Eingabefelds angezeigt wird, wenn der `value`-Wert des Elements `""` ist. Sobald Daten in das Feld eingegeben werden, verschwindet der Platzhalter; wenn das Feld geleert wird, erscheint der Platzhalter wieder.

Hier haben wir eine `url`-Eingabe mit dem Platzhalter `http://www.example.com`. Beachten Sie, wie der Platzhalter verschwindet und wieder erscheint, wenn Sie die Inhalte des Eingabefelds bearbeiten.

```html
<input
  id="myURL"
  name="myURL"
  type="url"
  placeholder="http://www.example.com" />
```

{{EmbedLiveSample('Placeholders', 600, 40) }}

### Steuerung der Eingabegröße

Sie können sowohl die physische Länge des Eingabefelds als auch die minimalen und maximalen Längen, die für den Eingabetext erlaubt sind, steuern.

#### Physische Eingabeelementgröße

Die physische Größe des Eingabefelds kann mit dem [`size`](/de/docs/Web/HTML/Reference/Elements/input#size)-Attribut gesteuert werden. Damit können Sie die Anzahl der Zeichen festlegen, die das Eingabefeld gleichzeitig anzeigen kann. In diesem Beispiel ist das `url`-Eingabefeld 30 Zeichen breit:

```html
<input id="myURL" name="myURL" type="url" size="30" />
```

{{EmbedLiveSample('Physical_input_element_size', 600, 40) }}

#### Länge des Elementwerts

Das `size` ist von der Längenbeschränkung des eingegebenen URLs selbst getrennt. Sie können mit dem [`minlength`](/de/docs/Web/HTML/Reference/Elements/input#minlength)-Attribut die minimale Länge in Zeichen für die eingegebene URL festlegen; verwenden Sie entsprechend [`maxlength`](/de/docs/Web/HTML/Reference/Elements/input#maxlength), um die maximale Länge der eingegebenen URL festzulegen. Wenn `maxlength` den `size`-Wert übersteigt, scrollen die Inhalte des Eingabefelds bei Bedarf, damit der aktuelle Auswahl- oder Einfügepunkt angezeigt wird, während der Inhalt manipuliert wird.

Das folgende Beispiel erstellt ein 30 Zeichen breites URL-Adress-Eingabefeld, das erfordert, dass der Inhalt nicht kürzer als 10 Zeichen und nicht länger als 80 Zeichen ist.

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
> Diese Attribute wirken sich auch auf die Validierung aus; ein Wert kürzer oder länger als die angegebenen Mindest-/Höchstlängen wird als ungültig eingestuft; darüber hinaus werden die meisten Browser dem Benutzer nicht erlauben, einen Wert einzugeben, der länger ist als die angegebene maximale Länge.

### Bereitstellung von Standardoptionen

#### Bereitstellung eines einzelnen Standards mit dem value-Attribut

Wie immer können Sie einen Standardwert für ein `url`-Eingabefeld bereitstellen, indem Sie sein [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Attribut festlegen:

```html
<input id="myURL" name="myURL" type="url" value="http://www.example.com" />
```

{{EmbedLiveSample("Providing_a_single_default_using_the_value_attribute", 600, 40)}}

#### Anbieten vorgeschlagener Werte

Um einen Schritt weiter zu gehen, können Sie eine Liste von Standardoptionen bereitstellen, aus denen der Benutzer auswählen kann, indem Sie das [`list`](/de/docs/Web/HTML/Reference/Elements/input#list)-Attribut angeben. Dies begrenzt den Benutzer nicht auf diese Optionen, ermöglicht es ihm jedoch, häufiger genutzte URLs schneller auszuwählen. Dies bietet auch Hinweise für die [`autocomplete`](/de/docs/Web/HTML/Reference/Elements/input#autocomplete). Das `list`-Attribut gibt die ID eines {{HTMLElement("datalist")}} an, der wiederum ein {{HTMLElement("option")}}-Element pro vorgeschlagenem Wert enthält; jeder `option`'s `value` ist der entsprechende vorgeschlagene Wert für das URL-Eingabefeld.

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

Mit dem {{HTMLElement("datalist")}}-Element und seinen {{HTMLElement("option")}}s wird der Browser die angegebenen Werte als potenzielle Werte für die URL anbieten; dies wird typischerweise als Popup oder Dropdown-Menü präsentiert, das die Vorschläge enthält. Während die spezifische Benutzererfahrung von Browser zu Browser variieren kann, wird das Klicken in das Eingabefeld typischerweise ein Dropdown mit den vorgeschlagenen URLs anzeigen. Dann wird die Liste beim Tippen des Benutzers angepasst, um nur passende Werte anzuzeigen. Jeder eingegebene Buchstabe reduziert die Liste, bis der Benutzer eine Auswahl trifft oder einen benutzerdefinierten Wert eingibt.

#### Verwendung von Labels für vorgeschlagene Werte

Sie können das [`label`](/de/docs/Web/HTML/Reference/Elements/option#label)-Attribut bei einem oder allen `<option>`-Elementen hinzufügen, um Textlabels bereitzustellen. Einige Browser zeigen möglicherweise nur die Labels an, während andere sowohl das Label als auch die URL anzeigen.

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

Für `url`-Eingaben stehen zwei Stufen der Inhaltsvalidierung zur Verfügung. Erstens gibt es die Standardvalidierungsstufe, die allen {{HTMLElement("input")}}s angeboten wird, die automatisch sicherstellt, dass die Inhalte die Anforderungen erfüllen, um eine gültige URL zu sein. Aber es gibt auch die Möglichkeit, zusätzliche Filter hinzuzufügen, um sicherzustellen, dass Ihre eigenen speziellen Bedürfnisse erfüllt werden, falls Sie welche haben.

> [!WARNING]
> HTML-Formularvalidierung ist _kein_ Ersatz für Skripte, die sicherstellen, dass die eingetragenen Daten im richtigen Format sind. Es ist viel zu einfach für jemanden, das HTML so anzupassen, dass er die Validierung umgehen oder sie vollständig entfernen kann. Es ist auch möglich, dass jemand Ihr HTML vollständig umgeht und die Daten direkt an Ihren Server sendet. Wenn Ihr Serverseitencode die empfangenen Daten nicht validiert, könnte es zu einer Katastrophe kommen, wenn falsch formatierte Daten (oder Daten, die zu groß sind, den falschen Typ haben, usw.) in Ihre Datenbank eingegeben werden.

### Grundlegende Validierung

Browser, die den `url`-Eingabetyp unterstützen, bieten automatisch eine Validierung, um sicherzustellen, dass nur Text eingegeben wird, der dem Standardformat für URLs entspricht, in das Eingabefeld eingegeben wird.

Die Syntax einer URL ist ziemlich kompliziert. Sie wird durch den WHATWG's [URL Living Standard](https://url.spec.whatwg.org/) definiert und wird für Neulinge in unserem Artikel [Was ist eine URL?](/de/docs/Learn/Web/Development/Howto/Web_mechanics/What_is_a_URL) beschrieben.

### Eine URL erforderlich machen

Wie bereits erwähnt, um eine URL-Eingabe zu erzwingen, bevor das Formular eingereicht werden kann (sie dürfen das Feld nicht leer lassen), müssen Sie nur das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attribut auf dem Eingabefeld hinzufügen.

### Muster-Validierung

Wenn Sie die eingegebene URL weiter einschränken müssen als nur auf „jede Zeichenfolge, die wie eine URL aussieht“, können Sie das [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern)-Attribut verwenden, um einen [regulären Ausdruck](/de/docs/Glossary/Regular_expression) anzugeben, mit dem der Wert übereinstimmen muss, damit der Wert gültig ist.

## Beispiele

### URL-Validierung

In diesem Beispiel stellen wir sicher, dass eine URL mit dem [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attribut ausgefüllt wird und dass die URL etwas auf `mozilla.org` ist, indem zur Veranschaulichung das [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern)-Attribut verwendet wird.

#### HTML

Im `url`-Eingabefeld setzen wir `pattern` auf `".*\.mozilla\.org.*"`. Dieser reguläre Ausdruck validiert eine Zeichenfolge, die eine beliebige Anzahl von Zeichen hat, gefolgt von ".mozilla.org", gefolgt von einer beliebigen Anzahl von Zeichen. Da der Browser sowohl den Standard-URL-Filter als auch unser benutzerdefiniertes Muster gegen den angegebenen Text ausführt, enden wir mit einer Validierung, die sagt: „Stellen Sie sicher, dass dies eine gültige URL ist und auch `.mozilla.org` enthält.“

Beachten Sie, dass ein strenges Muster wie `https://developer\.mozilla\.org.*` robuster wäre, aber das würde in diesem Fall das `type="url"`-Attribut redundant machen.

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

Das CSS gibt visuelle Hinweise, um dem Benutzer zu zeigen, ob der Inhalt {{cssxref(":valid")}} oder {{cssxref(":invalid")}} ist, indem eine entsprechende {{cssxref("content")}}-Eigenschaft hinzugefügt und [Alternativtext](/de/docs/Web/CSS/content#alternative_text_string_counter) für Benutzer mit unterstützenden Technologien eingeschlossen wird.

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

Kopieren Sie die URL dieser Seite und fügen Sie sie in das Eingabefeld ein und Sie sehen einen grünen Rahmen und ein grünes Häkchen. Geben Sie eine andere URL ein, die nicht **mozilla.org** enthält, oder eine ungültige URL, und Sie sehen einen roten Rahmen und ein rotes Kreuz.

{{EmbedLiveSample("url-validation", "40px", , , , , "allow-forms")}}

Überprüfen Sie die Abschnitte [Muster-Validierung](#muster-validierung) und [Verwendung von URL-Eingaben](#verwenden_von_url-eingaben) für weitere Beispiele.

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
        <a href="https://developer.mozilla.org/de/docs/Web/HTML/Reference/Elements/input#autocomplete"><code>autocomplete</code></a>,
        <a href="https://developer.mozilla.org/de/docs/Web/HTML/Reference/Elements/input#list"><code>list</code></a>,
        <a href="https://developer.mozilla.org/de/docs/Web/HTML/Reference/Elements/input#maxlength"><code>maxlength</code></a>,
        <a href="https://developer.mozilla.org/de/docs/Web/HTML/Reference/Elements/input#minlength"><code>minlength</code></a>,
        <a href="https://developer.mozilla.org/de/docs/Web/HTML/Reference/Elements/input#pattern"><code>pattern</code></a>,
        <a href="https://developer.mozilla.org/de/docs/Web/HTML/Reference/Elements/input#placeholder"><code>placeholder</code></a>,
        <a href="https://developer.mozilla.org/de/docs/Web/HTML/Reference/Elements/input#readonly"><code>readonly</code></a>,
        <a href="https://developer.mozilla.org/de/docs/Web/HTML/Reference/Elements/input#required"><code>required</code></a> und
        <a href="https://developer.mozilla.org/de/docs/Web/HTML/Reference/Elements/input#size"><code>size</code></a>
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
                <code><a href="https://developer.mozilla.org/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role">textbox</a></code></td>
      <td>mit <code>list</code>-Attribut: <code><a href="https://developer.mozilla.org/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role">combobox</a></code></td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTML-Formulare-Leitfaden](/de/docs/Learn/Web/Development/Extensions/Forms)
- {{HTMLElement("input")}}
- [`<input type="tel">`](/de/docs/Web/HTML/Reference/Elements/input/tel)
- [`<input type="email">`](/de/docs/Web/HTML/Reference/Elements/input/email)
