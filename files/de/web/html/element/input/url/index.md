---
title: <input type="url">
slug: Web/HTML/Element/input/url
l10n:
  sourceCommit: 783ffd9c1cf35421242e028a1b8743cf2b1918dd
---

{{HTMLSidebar}}

{{HTMLElement("input")}} Elemente des Typs **`url`** werden verwendet, um dem Benutzer das Eingeben und Bearbeiten einer URL zu ermöglichen.

{{EmbedInteractiveExample("pages/tabbed/input-url.html", "tabbed-shorter")}}

Der Eingabewert wird automatisch validiert, um sicherzustellen, dass er entweder leer oder eine korrekt formatierte URL ist, bevor das Formular gesendet werden kann. Die CSS-Pseudoklassen {{cssxref(":valid")}} und {{cssxref(":invalid")}} werden automatisch angewendet, um optisch anzuzeigen, ob der aktuelle Wert des Feldes eine gültige URL ist oder nicht.

## Wert

Das [`value`](/de/docs/Web/HTML/Element/input#value)-Attribut des {{HTMLElement("input")}} Elements enthält einen String, der automatisch als URL-Syntax validiert wird. Es gibt speziell zwei mögliche Wertformate, die die Validierung bestehen werden:

1. Ein leerer String ("") zeigt an, dass der Benutzer keinen Wert eingegeben hat oder dass der Wert entfernt wurde.
2. Eine korrekt formatierte absolute URL. Dies bedeutet nicht zwangsläufig, dass die URL-Adresse existiert, aber sie ist zumindest korrekt formatiert. Ein Eintrag, der dem Muster `urlscheme://rest-of-url` entspricht, kann gültig sein, selbst wenn das eingegebene `urlscheme` nicht existiert.

Details zur Validierung von URLs, um sicherzustellen, dass sie korrekt formatiert sind, finden Sie unter [Validierung](#validierung).

## Zusätzliche Attribute

Zusätzlich zu den Attributen, die auf alle {{HTMLElement("input")}} Elemente unabhängig von ihrem Typ wirken, unterstützen `url` Eingaben die folgenden Attribute.

### list

Der Wert des `list`-Attributs ist die [`id`](/de/docs/Web/API/Element/id) eines im selben Dokument befindlichen {{HTMLElement("datalist")}} Elements. Die {{HTMLElement("datalist")}} bietet eine Liste vordefinierter Werte, die dem Benutzer für diese Eingabe vorgeschlagen werden. Alle Werte in der Liste, die nicht mit dem [`type`](/de/docs/Web/HTML/Element/input#type) kompatibel sind, werden nicht in den vorgeschlagenen Optionen angezeigt. Die angegebenen Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert eingeben.

### maxlength

Die maximale Zeichenlänge (gemessen in UTF-16 Code-Einheiten), die der Benutzer in das `url` Eingabefeld eingeben kann. Dies muss ein ganzzahliger Wert von `0` oder höher sein. Wenn kein `maxlength` angegeben ist oder ein ungültiger Wert angegeben wird, hat das `url` Eingabefeld keine maximale Länge. Dieser Wert muss auch größer oder gleich dem Wert von `minlength` sein.

Die Eingabe schlägt [Constraint-Validierung](/de/docs/Web/HTML/Constraint_validation) fehl, wenn die Länge des Textwerts des Feldes größer als `maxlength` UTF-16 Code-Einheiten ist. Constraint-Validierung wird nur angewandt, wenn der Wert vom Benutzer geändert wird.

### minlength

Die minimale Zeichenlänge (gemessen in UTF-16 Code-Einheiten), die der Benutzer in das `url` Eingabefeld eingeben kann. Dies muss ein nicht-negativer ganzzahliger Wert sein, der kleiner oder gleich dem von `maxlength` angegebenen Wert ist. Wenn kein `minlength` angegeben ist oder ein ungültiger Wert angegeben wird, hat das `url` Eingabefeld keine Mindestlänge.

Die Eingabe schlägt [Constraint-Validierung](/de/docs/Web/HTML/Constraint_validation) fehl, wenn die Länge des in das Feld eingegebenen Texts kürzer als `minlength` UTF-16 Code-Einheiten ist. Constraint-Validierung wird nur angewandt, wenn der Wert vom Benutzer geändert wird.

### pattern

Das `pattern`-Attribut, sofern angegeben, ist ein regulärer Ausdruck, dem der [`value`](/de/docs/Web/HTML/Element/input#value) der Eingabe entsprechen muss, damit der Wert die [Constraint-Validierung](/de/docs/Web/HTML/Constraint_validation) besteht. Es muss ein gültiger regulärer Ausdruck in JavaScript sein, wie er vom {{jsxref("RegExp")}} Typ verwendet wird und wie in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert; das `'u'`-Flag ist beim Kompilieren des regulären Ausdrucks angegeben, sodass das Muster als eine Sequenz von Unicode-Codepunkten behandelt wird, anstatt als {{Glossary("ASCII", "ASCII")}}. Keine Schrägstriche sollten um den Mustertext angegeben werden.

Wenn das angegebene Muster nicht festgelegt oder ungültig ist, wird kein regulärer Ausdruck angewendet und dieses Attribut völlig ignoriert.

> [!NOTE]
> Verwenden Sie das [`title`](/de/docs/Web/HTML/Element/input#title) Attribut, um Text anzugeben, den die meisten Browser als Tooltip anzeigen, um zu erklären, welche Anforderungen erfüllt werden müssen, um dem Muster zu entsprechen. Sie sollten auch in der Nähe weiteren erläuternden Text einfügen.

Details und ein Beispiel finden Sie im Abschnitt [Muster-Validierung](#muster-validierung).

### placeholder

Das `placeholder`-Attribut ist ein String, der dem Benutzer einen kurzen Hinweis darauf gibt, welche Art von Informationen im Feld erwartet werden. Es sollte ein Wort oder eine kurze Phrase sein, die den erwarteten Datentyp veranschaulicht, anstatt einer erklärenden Nachricht. Der Text _darf_ keine Wagenrückläufe oder Zeilenumbrüche enthalten.

Falls die Richtung des Inhalts der Steuerung ({{Glossary("LTR", "LTR")}} oder {{Glossary("RTL", "RTL")}}) die entgegengesetzte Richtung erfordert, können Sie Unicode Bidirektionales-Algorithmus-Formatierungszeichen verwenden, um die Richtung innerhalb des Platzhalters zu überschreiben; siehe [Wie man Unicode Steuerelemente für bidi-Text verwendet](https://www.w3.org/International/questions/qa-bidi-unicode-controls) für mehr Informationen.

> [!NOTE]
> Vermeiden Sie es, das `placeholder` Attribut zu verwenden, wenn Sie können. Es ist semantisch nicht so nützlich wie andere Wege, Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Weitere Informationen finden Sie bei [`<input>` Labels](/de/docs/Web/HTML/Element/input#labels).

### readonly

Das [`readonly`](/de/docs/Web/HTML/Attributes/readonly) Boolesche Attribut, falls vorhanden, bedeutet, dass das Feld nicht vom Benutzer bearbeitet werden kann. Sein `value` kann jedoch weiterhin direkt durch das JavaScript-Kommando, das die [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) `value` Eigenschaft setzt, geändert werden.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat [`required`](/de/docs/Web/HTML/Attributes/required) keine Auswirkung auf Eingaben mit dem `readonly` Attribut, das ebenfalls angegeben ist.

### size

Das `size`-Attribut ist ein numerischer Wert, der angibt, wie viele Zeichen breit das Eingabefeld sein sollte. Der Wert muss größer als Null sein, und der Standardwert ist 20. Da sich Zeichenbreiten unterscheiden, kann dies mehr oder weniger genau sein und sollte nicht als solches betrachtet werden; das resultierende Eingabefeld kann schmaler oder breiter als die angegebene Anzahl von Zeichen sein, abhängig von den Zeichen und den Schriftarteinstellungen ({{cssxref("font")}}).

Dies setzt _kein_ Limit darauf, wie viele Zeichen der Benutzer in das Feld eingeben kann. Es gibt nur an, wie viele in der Regel gleichzeitig gesehen werden können. Um ein oberes Limit für die Länge der Eingabedaten festzulegen, verwenden Sie das [`maxlength`](#maxlength) Attribut.

### spellcheck

Das [`spellcheck`](/de/docs/Web/HTML/Global_attributes/spellcheck) globale Attribut wird verwendet, um anzugeben, ob die Rechtschreibprüfung für ein Element aktiviert werden soll. Es kann für alle bearbeitbaren Inhalte verwendet werden, hier betrachten wir spezifische Aspekte der Verwendung von `spellcheck` auf {{HTMLElement("input")}} Elementen. Die zulässigen Werte für `spellcheck` sind:

- `false`
  - : Deaktivieren Sie die Rechtschreibkorrektur für dieses Element.
- `true`
  - : Aktivieren Sie die Rechtschreibkorrektur für dieses Element.
- "" (leerer String) oder kein Wert
  - : Folgen Sie dem Standardverhalten des Elements für die Rechtschreibprüfung. Dies kann auf der `spellcheck` Einstellung eines Elternteils oder anderen Faktoren basieren.

Ein Eingabefeld kann die Rechtschreibprüfung aktiviert haben, wenn es nicht das [readonly](#readonly) Attribut gesetzt und nicht deaktiviert ist.

Der Wert, der durch das Lesen von `spellcheck` zurückgegeben wird, spiegelt möglicherweise nicht den tatsächlichen Status der Rechtschreibüberprüfung innerhalb eines Steuerelements wider, wenn die Einstellungen des {{Glossary("user_agent", "Benutzer-Agents")}} die Einstellung überschreiben.

## Nicht-standardisierte Attribute

Die folgenden nicht-standardisierten Attribute sind auch in einigen Browsern verfügbar. Im Allgemeinen sollten Sie sie vermeiden, es sei denn, es ist nicht anders möglich.

### autocorrect

Eine Safari-Erweiterung, das `autocorrect`-Attribut ist ein String, der angibt, ob die automatische Korrektur aktiviert werden soll, während der Benutzer dieses Feld bearbeitet. Zulässige Werte sind:

- `on`
  - : Aktivieren Sie die automatische Korrektur von Tippfehlern, sowie die Verarbeitung von Textsubstitutionen, falls welche konfiguriert sind.
- `off`
  - : Deaktivieren Sie die automatische Korrektur und Textsubstitutionen.

## Verwendung von URL-Eingaben

Wenn Sie eine URL-Eingabe mit dem richtigen `type`-Wert anlegen, `url`, erhalten Sie eine automatische Validierung, dass der eingegebene Text zumindest in der richtigen Form ist, um potenziell eine legitime URL zu sein. Dies kann helfen, Fälle zu vermeiden, in denen der Benutzer die Adresse seiner Website falsch eingibt oder eine ungültige angibt.

Es ist jedoch wichtig zu beachten, dass dies nicht ausreicht, um sicherzustellen, dass der angegebene Text eine URL ist, die tatsächlich existiert, dem Benutzer der Seite entspricht oder in irgendeiner Weise akzeptabel ist. Es stellt sicher, dass der Feldwert korrekt formatiert ist, um eine URL zu sein.

> [!NOTE]
> Ein Benutzer kann hinter den Kulissen mit Ihrem HTML manipulieren, daher darf Ihre Seite _nicht_ diese Validierung für Sicherheitszwecke verwenden. Sie _müssen_ die URL auf der Serverseite jeder Transaktion überprüfen, bei der der angegebene Text sicherheitsrelevante Implikationen jeglicher Art haben könnte.

### Eine einfache URL-Eingabe

Dieses Element wird als Standardtexteingabefeld mit grundlegenden Validierungsfunktionen implementiert. In seiner einfachsten Form kann eine URL-Eingabe so implementiert werden:

```html
<input id="myURL" name="myURL" type="url" />
```

{{ EmbedLiveSample('A_simple_URL_input', 600, 40) }}

Beachten Sie, dass es als gültig angesehen wird, wenn es leer ist und wenn eine einzige korrekt formatierte URL-Adresse eingegeben wird, ansonsten jedoch nicht als gültig angesehen wird. Durch Hinzufügen des Attributs [`required`](/de/docs/Web/HTML/Element/input#required) sind nur korrekt formierte URLs zulässig; die Eingabe wird nicht mehr als gültig angesehen, wenn sie leer ist.

Es geschieht hier nichts Magisches. Das Absenden dieses Forms würde die folgenden Daten an den Server senden: `myURL=http%3A%2F%2Fwww.example.com`. Beachten Sie, wie Zeichen bei Bedarf eingefügt werden.

### Platzhalter

Manchmal ist es hilfreich, einen kontextbezogenen Hinweis darauf zu geben, welche Form die Eingabedaten annehmen sollten. Dies kann besonders wichtig sein, wenn das Seitendesign keine beschreibenden Beschriftungen für jedes {{HTMLElement("input")}} bietet. Hier kommen **Platzhalter** ins Spiel. Ein Platzhalter ist ein Wert, der die Form des `value` veranschaulicht, indem er ein Beispiel für einen gültigen Wert präsentiert, das im Bearbeitungsfeld angezeigt wird, wenn der `value` des Elements "" ist. Sobald Daten in das Feld eingegeben werden, verschwindet der Platzhalter; wenn das Feld geleert wird, erscheint der Platzhalter erneut.

Hier haben wir eine `url` Eingabe mit dem Platzhalter `http://www.example.com`. Beachten Sie, wie der Platzhalter verschwindet und wieder auftaucht, während Sie den Inhalt des Eingabefelds manipulieren.

```html
<input
  id="myURL"
  name="myURL"
  type="url"
  placeholder="http://www.example.com" />
```

{{ EmbedLiveSample('Placeholders', 600, 40) }}

### Kontrolle der Eingabegröße

Sie können sowohl die physische Länge der Eingabe Box als auch die minimalen und maximalen Längen für den Texteingang kontrollieren.

#### Physische Größe des Eingabeelements

Die physische Größe der Eingabe Box kann mit dem [`size`](/de/docs/Web/HTML/Element/input#size) Attribut gesteuert werden. Damit können Sie die Anzahl der Zeichen angeben, die die Eingabe Box gleichzeitig anzeigen kann. In diesem Beispiel ist das `url` Bearbeitungsfeld 30 Zeichen breit:

```html
<input id="myURL" name="myURL" type="url" size="30" />
```

{{ EmbedLiveSample('Physical_input_element_size', 600, 40) }}

#### Länge des Elementwertes

Das `size` ist von der Längenbeschränkung auf der eingegebenen URL selbst getrennt. Sie können eine Mindestlänge in Zeichen für die eingegebene URL unter Verwendung des [`minlength`](/de/docs/Web/HTML/Element/input#minlength) Attributs angeben; ähnlich verwenden Sie [`maxlength`](/de/docs/Web/HTML/Element/input#maxlength), um die maximale Länge der eingegebenen URL festzulegen. Wenn `maxLength` `size` überschreitet, scrollen die Inhalte der Eingabebox nach Bedarf, um die aktuelle Auswahl oder Einfügestelle anzuzeigen, während der Inhalt manipuliert wird.

Das folgende Beispiel erstellt eine 30 Zeichen breite URL-Adresseingabebox, die erfordert, dass der Inhalt nicht kürzer als 10 Zeichen und nicht länger als 80 Zeichen ist.

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
> Diese Attribute wirken sich auch auf die Validierung aus; ein Wert, der kürzer oder länger als die angegebenen Mindest-/Maximallängen ist, wird als ungültig klassifiziert; zudem verweigern die meisten Browser dem Benutzer die Eingabe eines Wertes, der länger als die angegebene maximale Länge ist.

### Bereitstellung von Standardoptionen

#### Bereitstellung eines einzelnen Standards mit dem `value`-Attribut

Wie üblich können Sie einen Standardwert für eine `url` Eingabebox bereitstellen, indem Sie das [`value`](/de/docs/Web/HTML/Element/input#value) Attribut setzen:

```html
<input id="myURL" name="myURL" type="url" value="http://www.example.com" />
```

{{EmbedLiveSample("Providing_a_single_default_using_the_value_attribute", 600, 40)}}

#### Anbieten vorgeschlagener Werte

Gehen Sie einen Schritt weiter, können Sie eine Liste von Standardoptionen bereitstellen, aus denen der Benutzer auswählen kann, indem Sie das [`list`](/de/docs/Web/HTML/Element/input#list) Attribut angeben. Dies beschränkt den Benutzer nicht auf diese Optionen, ermöglicht ihm jedoch, häufig verwendete URLs schneller auszuwählen. Dies bietet auch Hinweise zu [`autocomplete`](/de/docs/Web/HTML/Element/input#autocomplete). Das `list` Attribut gibt die ID einer {{HTMLElement("datalist")}} an, die wiederum ein {{HTMLElement("option")}} Element pro vorgeschlagenem Wert enthält; jedes `option` `value` ist der entsprechende vorgeschlagene Wert für die URL-Adresseingabebox.

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

Mit dem {{HTMLElement("datalist")}} Element und seinen {{HTMLElement("option")}}s in Position, bietet der Browser die angegebenen Werte als potenzielle Werte für die URL; dies wird typischerweise als Popup oder Drop-down-Menü präsentiert, das die Vorschläge enthält. Während die spezifische Benutzererfahrung von Browser zu Browser variieren kann, wird typischerweise durch das Klicken im Bearbeitungsfeld ein Drop-down der vorgeschlagenen URLs angezeigt. Dann wird die Liste beim Tippen des Benutzers angepasst, um nur übereinstimmende Werte anzuzeigen. Jedes eingegebene Zeichen begrenzt die Liste, bis der Benutzer eine Auswahl trifft oder einen benutzerdefinierten Wert eingibt.

#### Verwendung von Labels für vorgeschlagene Werte

Sie können sich entscheiden, das [`label`](/de/docs/Web/HTML/Element/option#label) Attribut auf einer oder allen Ihrer `<option>` Elemente hinzuzufügen, um Textlabels bereitzustellen. Einige Browser können nur die Labels anzeigen, während andere sowohl das Label als auch die URL anzeigen könnten.

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

Es gibt zwei Ebenen der Inhaltsvalidierung, die für `url` Eingaben verfügbar sind. Erstens gibt es die standardmäßige Validierungsebene, die allen {{HTMLElement("input")}}s angeboten wird, was automatisch gewährleistet, dass der Inhalt den Anforderungen entspricht, um eine gültige URL zu sein. Aber es gibt auch die Option, zusätzliche Filter hinzuzufügen, um sicherzustellen, dass Ihre eigenen spezifischen Anforderungen erfüllt werden, falls Sie welche haben.

> [!WARNING]
> HTML-Formularvalidierung ist _kein_ Ersatz für Skripte, die sicherstellen, dass die eingegebenen Daten im richtigen Format sind. Es ist viel zu einfach für jemanden, Änderungen am HTML vorzunehmen, die ihm erlauben, die Validierung zu umgehen, oder sie vollständig zu entfernen. Es ist auch möglich, dass jemand Ihr HTML vollständig umgeht und die Daten direkt an Ihren Server sendet. Wenn Ihr serverseitiger Code die empfangenen Daten nicht validiert, könnte eine Katastrophe eintreten, wenn unsachgemäß formatierte Daten (oder Daten, die zu groß sind, den falschen Typ haben usw.) in Ihre Datenbank gelangen.

### Grundvalidierung

Browser, die den `url` Eingabetyp unterstützen, bieten automatisch eine Validierung, um sicherzustellen, dass nur Text eingegeben wird, der dem Standardformat für URLs entspricht.

Die Syntax einer URL ist ziemlich kompliziert. Sie ist definiert durch das [URL Living Standard](https://url.spec.whatwg.org/) von WHATWG und wird für Neueinsteiger in unserem Artikel [Was ist eine URL?](/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL) beschrieben.

### Eine URL erforderlich machen

Wie bereits erwähnt, um eine URL-Eingabe erforderlich zu machen, bevor das Formular gesendet werden kann (Sie können das Feld nicht leer lassen), müssen Sie einfach das Attribut [`required`](/de/docs/Web/HTML/Element/input#required) auf der Eingabe setzen.

```html
<form>
  <input id="myURL" name="myURL" type="url" required />
  <button>Submit</button>
</form>
```

{{EmbedLiveSample("Making_a_URL_required", 600, 40)}}

Versuchen Sie, das obige Formular zu senden, ohne einen Wert einzugeben, um zu sehen, was passiert.

### Muster-Validierung

Wenn Sie möchten, dass die eingegebene URL weiter eingeschränkt wird als nur "irgendein String, der aussieht wie eine URL", können Sie das [`pattern`](/de/docs/Web/HTML/Element/input#pattern) Attribut verwenden, um einen {{Glossary("regular_expression", "regulären Ausdruck")}} anzugeben, dem der Wert entsprechen muss, um gültig zu sein.

Angenommen, Sie erstellen eine Support-Seite für Mitarbeiter von Myco, Inc., die es ihnen ermöglicht, ihre IT-Abteilung um Hilfe zu bitten, falls eine ihrer Seiten ein Problem hat. In unserem vereinfachten Formular muss der Benutzer die URL der problematischen Seite eingeben und eine Nachricht beschreiben, was das Problem ist. Aber wir möchten, dass die URL nur dann erfolgreich validiert, wenn die eingegebene URL in einer Myco-Domäne ist.

Da Eingaben des Typs `url` sowohl das Standard-URL-Filter als auch unser benutzerdefiniertes Muster gegen den angegebenen Text validieren, können Sie dies mit einem regulären Ausdruck umsetzen. Sehen wir uns an, wie:

```css hidden
div {
  margin-bottom: 10px;
  position: relative;
}

input[type="number"] {
  width: 100px;
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

```html
<form>
  <div>
    <label for="myURL">Enter the problem website address:</label>
    <input
      id="myURL"
      name="myURL"
      type="url"
      required
      pattern=".*\.myco\..*"
      title="The URL must be in a Myco domain" />
    <span class="validity"></span>
  </div>
  <div>
    <label for="myComment">What is the problem?</label>
    <input id="myComment" name="myComment" type="text" required />
    <span class="validity"></span>
  </div>
  <div>
    <button>Submit</button>
  </div>
</form>
```

{{EmbedLiveSample("Pattern_validation", 700, 150)}}

Erstens wird das Attribut [`required`](/de/docs/Web/HTML/Element/input#required) angegeben, wodurch es erforderlich ist, dass eine gültige URL bereitgestellt wird.

Zweitens setzen wir in der `url` Eingabe `pattern` auf `".*\.myco\..*"`. Dieser reguläre Ausdruck fordert einen String an, der aus einer beliebigen Anzahl von Zeichen besteht, gefolgt von einem Punkt, gefolgt von "myco", gefolgt von einem Punkt, gefolgt von einer beliebigen Anzahl von Zeichen. Da der Browser sowohl den Standard-URL-Filter als auch unser benutzerdefiniertes Muster gegen den angegebenen Text ausführt, erhalten wir somit eine Validierung, die besagt: "Stellen Sie sicher, dass dies eine gültige URL ist und auch in einer Myco-Domäne."

Dies ist nicht perfekt, erfüllt aber die Anforderungen dieses einfachen Demos ausreichend.

Es wird empfohlen, das [`title`](/de/docs/Web/HTML/Global_attributes#title) Attribut zusammen mit `pattern` zu verwenden. Wenn Sie dies tun, muss das `title` das Muster beschreiben; es sollte erklären, welches Format die Daten annehmen sollten und keine andere Information. Das liegt daran, dass das `title` möglicherweise als Teil einer Validierungsfehlermeldung angezeigt oder angesagt wird. Beispielsweise könnte der Browser die Nachricht "Der eingegebene Text entspricht nicht dem erforderlichen Muster." gefolgt von Ihrem angegebenen `title` anzeigen. Wenn Ihr `title` etwas wie "URL" ist, wäre das Ergebnis die Nachricht "Der eingegebene Text entspricht nicht dem erforderlichen Muster. URL", was keine gute Benutzererfahrung ist.

Deshalb geben wir stattdessen die Zeichenkette "Die URL muss in einer myco Domäne sein" an. Auf diese Weise könnte die vollständige Fehlermeldung etwa "Der eingegebene Text entspricht nicht dem erforderlichen Muster. Die URL sollte in einer myco Domäne sein." lauten.

> [!NOTE]
> Wenn Sie auf Probleme beim Schreiben Ihrer Validierungsregulären Ausdrücke stoßen und sie nicht richtig funktionieren, überprüfen Sie die Konsole Ihres Browsers; dort können hilfreiche Fehlermeldungen angezeigt werden, die Ihnen bei der Lösung des Problems helfen.

## Beispiele

Es gibt nicht viel mehr über `url` Typ-Eingaben zu sagen; überprüfen Sie die Abschnitte [Muster-Validierung](#muster-validierung) und [Verwendung von URL-Eingaben](#verwendung_von_url-eingaben) für zahlreiche Beispiele.

Sie können auch unser [Muster-Validierungsbeispiel auf GitHub](https://github.com/mdn/learning-area/blob/main/html/forms/url-example/index.html) finden (siehe es auch [live in Aktion](https://mdn.github.io/learning-area/html/forms/url-example/)).

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
      <td>ohne <code>list</code> Attribut:
                <code><a href="/de/docs/Web/Accessibility/ARIA/Roles/textbox_role">textbox</a></code></td>
      <td>mit <code>list</code> Attribut: <code><a href="/de/docs/Web/Accessibility/ARIA/Roles/combobox_role">combobox</a></code></td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTML-Formulare Leitfaden](/de/docs/Learn/Forms)
- {{HTMLElement("input")}}
- [`<input type="tel">`](/de/docs/Web/HTML/Element/input/tel)
- [`<input type="email">`](/de/docs/Web/HTML/Element/input/email)
- [Kompatibilität von CSS-Eigenschaften](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
