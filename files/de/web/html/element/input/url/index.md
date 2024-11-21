---
title: <input type="url">
slug: Web/HTML/Element/input/url
l10n:
  sourceCommit: f10015d1752d5668d8fe0de29f9d9807de475d58
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente vom Typ **`url`** werden verwendet, um dem Benutzer das Eingeben und Bearbeiten einer URL zu ermöglichen.

{{EmbedInteractiveExample("pages/tabbed/input-url.html", "tabbed-shorter")}}

Der Eingabewert wird automatisch validiert, um sicherzustellen, dass er entweder leer oder eine korrekt formatierte URL ist, bevor das Formular gesendet werden kann. Die CSS-Pseudoklassen {{cssxref(":valid")}} und {{cssxref(":invalid")}} werden automatisch angewendet, um visuell anzuzeigen, ob der aktuelle Feldwert eine gültige URL ist oder nicht.

## Wert

Das `value`-Attribut des {{HTMLElement("input")}}-Elements enthält eine Zeichenkette, die automatisch darauf geprüft wird, ob sie der URL-Syntax entspricht. Genauer gesagt gibt es zwei mögliche Wertformate, die die Validierung bestehen:

1. Ein leerer String ("") zeigt an, dass der Benutzer keinen Wert eingegeben hat oder dass der Wert entfernt wurde.
2. Eine einzelne, korrekt formatierte absolute URL. Dies bedeutet nicht unbedingt, dass die URL-Adresse existiert, aber sie ist zumindest korrekt formatiert. Ein Eintrag, der `urlschema://rest-of-url` entspricht, kann gültig sein, selbst wenn das eingegebene `urlschema` nicht existiert.

Weitere Informationen zur Validierung von URLs, um sicherzustellen, dass sie korrekt formatiert sind, finden Sie unter [Validierung](#validierung).

## Zusätzliche Attribute

Zusätzlich zu den [globalen Attributen](/de/docs/Web/HTML/Global_attributes) und den Attributen, die auf alle {{HTMLElement("input")}}-Elemente unabhängig von ihrem Typ angewendet werden, unterstützen `url`-Eingaben die folgenden Attribute.

> [!NOTE]
> Das globale Attribut [`autocorrect`](/de/docs/Web/HTML/Global_attributes/autocorrect) kann zu `url`-Eingaben hinzugefügt werden, aber der gespeicherte Zustand ist immer `off`.

### list

Der Wert des `list`-Attributs ist die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements im gleichen Dokument. Das {{HTMLElement("datalist")}} bietet eine Liste vorkonfigurierter Werte, die dem Benutzer für diese Eingabe vorgeschlagen werden sollen. Alle Werte in der Liste, die mit dem `type` nicht kompatibel sind, werden nicht in die vorgeschlagenen Optionen aufgenommen. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert eingeben.

### maxlength

Die maximale Zeichenlänge (gemessen in UTF-16-Codeeinheiten), die der Benutzer in die `url`-Eingabe eingeben kann. Dies muss ein ganzzahliger Wert von `0` oder höher sein. Wenn kein `maxlength` angegeben ist oder ein ungültiger Wert angegeben ist, hat die `url`-Eingabe keine maximale Länge. Dieser Wert muss auch größer oder gleich dem Wert von `minlength` sein.

Die Eingabe schlägt bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) fehl, wenn die Länge des Textwerts des Feldes größer als `maxlength` UTF-16 Codeeinheiten ist. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### minlength

Die minimale Zeichenlänge (gemessen in UTF-16-Codeeinheiten), die der Benutzer in die `url`-Eingabe eingeben kann. Dies muss ein nicht-negativer Ganzzahlwert sein, der kleiner oder gleich dem mit `maxlength` angegebenen Wert ist. Wenn kein `minlength` angegeben oder ein ungültiger Wert angegeben ist, hat die `url`-Eingabe keine Mindestlänge.

Die Eingabe schlägt bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) fehl, wenn die Länge des in das Feld eingegebenen Textes weniger als `minlength` UTF-16 Codeeinheiten beträgt. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### pattern

Das `pattern`-Attribut, wenn angegeben, ist ein regulärer Ausdruck, den der `value` der Eingabe erfüllen muss, um die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) zu bestehen. Er muss ein gültiger JavaScript-Regulärer-Ausdruck sein, wie er vom {{jsxref("RegExp")}}-Typ verwendet wird und wie er in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert ist; das `'u'`-Flag wird beim Kompilieren des regulären Ausdrucks angegeben, sodass das Muster als eine Sequenz von Unicode-Codepunkten behandelt wird, anstatt als {{Glossary("ASCII", "ASCII")}}. Es sollten keine Schrägstriche um den Mustertest angegeben werden.

Wenn das angegebene Muster nicht angegeben oder ungültig ist, wird kein regulärer Ausdruck angewendet und dieses Attribut wird vollständig ignoriert.

> [!NOTE]
> Verwenden Sie das [`title`](/de/docs/Web/HTML/Element/input#title)-Attribut, um Text zu spezifizieren, den die meisten Browser als Tooltip anzeigen, um zu erklären, welche Anforderungen erfüllt werden müssen, um das Muster zu erfüllen. Sie sollten auch anderen erklärenden Text in der Nähe hinzufügen.

Siehe den Abschnitt [Muster-Validierung](#muster-validierung) für Details und ein Beispiel.

### placeholder

Das `placeholder`-Attribut ist eine Zeichenkette, die dem Benutzer einen kurzen Hinweis darauf bietet, welche Art von Informationen in dem Feld erwartet werden. Es sollte ein Wort oder eine kurze Phrase sein, die den erwarteten Datentyp demonstriert, anstatt eine erläuternde Nachricht. Der Text _darf keine_ Wagenrückläufe oder Zeilenumbrüche enthalten.

Wenn der Inhalt der Steuerung eine Richtung ({{Glossary("LTR", "LTR")}} oder {{Glossary("RTL", "RTL")}}) aufweist, der Platzhalter jedoch in der entgegengesetzten Richtung dargestellt werden muss, können Sie die Unicode-Bidirektionalitätsalgorithmus-Formatierungszeichen verwenden, um die Richtung innerhalb des Platzhalters zu überschreiben; siehe [Anleitung zur Verwendung von Unicode-Steuerzeichen für bidi-Text](https://www.w3.org/International/questions/qa-bidi-unicode-controls) für weitere Informationen.

> [!NOTE]
> Vermeiden Sie es, wenn möglich, das `placeholder`-Attribut zu verwenden. Es ist nicht so semantisch nützlich wie andere Möglichkeiten, Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Siehe [`<input>`-Labels](/de/docs/Web/HTML/Element/input#labels) für weitere Informationen.

### readonly

Das [`readonly`](/de/docs/Web/HTML/Attributes/readonly)-Boolean-Attribut bedeutet, wenn es vorhanden ist, dass dieses Feld vom Benutzer nicht bearbeitet werden kann. Sein `value` kann jedoch weiterhin direkt durch JavaScript-Code geändert werden, der die [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Eigenschaft `value` setzt.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat [`required`](/de/docs/Web/HTML/Attributes/required) keine Auswirkungen auf Eingaben mit dem ebenfalls angegebenen `readonly`-Attribut.

### size

Das `size`-Attribut ist ein numerischer Wert, der angibt, wie viele Zeichen breit das Eingabefeld sein soll. Der Wert muss eine Zahl größer als null sein, und der Standardwert ist 20. Da Zeichenbreiten variieren, kann dies genau sein oder nicht; es sollte nicht darauf vertraut werden, dass dies so bleibt; das resultierende Eingabefeld kann je nach den Zeichen und der Schriftart ({{cssxref("font")}}-Einstellungen) schmaler oder breiter sein als die angegebene Zeichenanzahl.

Dies setzt _kein_ Limit für die Menge an Zeichen, die der Benutzer in das Feld eingeben kann. Es gibt nur an, wie viele gleichzeitig ungefähr angezeigt werden können. Um eine obere Grenze für die Länge der Eingabedaten festzulegen, verwenden Sie das `maxlength`-Attribut.

### spellcheck

Das [`spellcheck`](/de/docs/Web/HTML/Global_attributes/spellcheck)-Globale-Attribut wird verwendet, um anzugeben, ob die Rechtschreibprüfung für ein Element aktiviert werden soll. Es kann auf jedem bearbeitbaren Inhalt verwendet werden, aber hier betrachten wir die Besonderheiten bei der Verwendung von `spellcheck` auf {{HTMLElement("input")}}-Elementen. Die erlaubten Werte für `spellcheck` sind:

- `false`
  - : Deaktivieren der Rechtschreibprüfung für dieses Element.
- `true`
  - : Aktivieren der Rechtschreibprüfung für dieses Element.
- "" (leerer String) oder kein Wert
  - : Folgen Sie dem Standardverhalten des Elements für die Rechtschreibprüfung. Dies kann basierend auf den `spellcheck`-Einstellungen eines übergeordneten Elements oder anderen Faktoren basieren.

Ein Eingabefeld kann die Rechtschreibprüfung aktivieren, wenn es nicht das [readonly](#readonly)-Attribut gesetzt hat und nicht deaktiviert ist.

Der Wert, der durch das Lesen von `spellcheck` zurückgegeben wird, spiegelt möglicherweise nicht den tatsächlichen Zustand der Rechtschreibprüfung innerhalb einer Steuerung wider, wenn die Präferenzen des {{Glossary("user_agent", "Benutzeragenten")}} die Einstellung überschreiben.

## Verwendung von URL-Eingaben

Wenn Sie eine URL-Eingabe mit dem richtigen `type`-Wert, `url`, erstellen, erhalten Sie automatische Validierung, dass der eingegebene Text zumindest in der richtigen Form ist, um möglicherweise eine legitime URL zu sein. Dies kann helfen, Fälle zu vermeiden, in denen der Benutzer die Adresse seiner Website falsch eingibt oder eine ungültige angibt.

Es ist jedoch wichtig zu beachten, dass dies nicht ausreicht, um sicherzustellen, dass der angegebene Text eine URL ist, die tatsächlich existiert, dem Benutzer der Seite entspricht, oder auf andere Weise akzeptabel ist. Es stellt sicher, dass der Wert des Feldes korrekt formatiert ist, um eine URL zu sein.

> [!NOTE]
> Ein Benutzer kann im Hintergrund mit Ihrem HTML manipulieren, daher darf Ihre Website _niemals_ diese Validierung für Sicherheitszwecke verwenden. Sie _müssen_ die URL serverseitig bei jeder Transaktion überprüfen, bei der der bereitgestellte Text Sicherheitsimplikationen irgendeiner Art haben könnte.

### Eine grundlegende URL-Eingabe

Dieses Element wird als reguläres Texteingabefeld mit grundlegenden Validierungsfunktionen implementiert. In seiner grundlegendsten Form kann eine URL-Eingabe folgendermaßen implementiert werden:

```html
<input id="myURL" name="myURL" type="url" />
```

{{EmbedLiveSample('A_basic_URL_input', 600, 40)}}

Beachten Sie, dass es als gültig angesehen wird, wenn es leer ist und wenn eine einzige gültig formatierte URL-Adresse eingegeben wird, aber ansonsten nicht als gültig angesehen wird. Indem Sie das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut hinzufügen, sind nur korrekt formulierte URLs zulässig; die Eingabe wird nicht mehr als gültig angesehen, wenn sie leer ist.

Hier passiert nichts Magisches. Das Absenden dieses Formulars würde dazu führen, dass die folgenden Daten an den Server gesendet werden: `myURL=http%3A%2F%2Fwww.example.com`. Beachten Sie, wie Zeichen bei Bedarf maskiert werden.

### Platzhalter

Manchmal ist es hilfreich, im Kontext einen Hinweis darauf zu geben, welche Form die Eingabedaten annehmen sollten. Dies kann besonders wichtig sein, wenn das Seitendesign keine beschreibenden Labels für jedes {{HTMLElement("input")}} bietet. Hier kommen **Platzhalter** ins Spiel. Ein Platzhalter ist ein Wert, der demonstriert, welche Form der `value` annehmen sollte, indem er ein Beispiel eines gültigen Werts präsentiert, das innerhalb der Bearbeitungsbox angezeigt wird, wenn der `value` des Elements "" ist. Sobald Daten in die Box eingegeben werden, verschwindet der Platzhalter; wenn die Box geleert wird, erscheint der Platzhalter wieder.

Hier haben wir eine `url`-Eingabe mit dem Platzhalter `http://www.example.com`. Beachten Sie, wie der Platzhalter verschwindet und wieder erscheint, während Sie den Inhalt des Bearbeitungsfelds manipulieren.

```html
<input
  id="myURL"
  name="myURL"
  type="url"
  placeholder="http://www.example.com" />
```

{{EmbedLiveSample('Placeholders', 600, 40)}}

### Steuern der Eingabegröße

Sie können sowohl die physische Länge des Eingabefelds als auch die minimal und maximal erlaubten Längen für den Eingabetext steuern.

#### Physikalische Eingabefeldgröße

Die physikalische Größe des Eingabefelds kann mit dem `size`-Attribut gesteuert werden. Mit diesem können Sie angeben, wie viele Zeichen das Eingabefeld gleichzeitig anzeigen kann. In diesem Beispiel ist zum Beispiel das `url`-Bearbeitungsfeld 30 Zeichen breit:

```html
<input id="myURL" name="myURL" type="url" size="30" />
```

{{EmbedLiveSample('Physical_input_element_size', 600, 40)}}

#### Elementwertlänge

Das `size` ist getrennt von der Längenbeschränkung für die tatsächlich eingetragene URL. Sie können eine Mindestlänge, in Zeichen, für die eingegebene URL mit dem `minlength`-Attribut festlegen; ähnlich verwenden Sie `maxlength`, um die maximale Länge der eingegebenen URL festzulegen. Wenn `maxLength` größer als `size` ist, scrollen die Inhalte des Eingabefelds nach Bedarf, um die aktuelle Auswahl oder Einfügemarke anzuzeigen, während der Inhalt manipuliert wird.

Das Beispiel unten erstellt eine 30 Zeichen breite URL-Adresseneingabebox, die erfordert, dass die Inhalte nicht kürzer als 10 Zeichen und nicht länger als 80 Zeichen sind.

```html
<input
  id="myURL"
  name="myURL"
  type="url"
  size="30"
  minlength="10"
  maxlength="80" />
```

{{EmbedLiveSample("Element_value_length", 600, 40)}}

> [!NOTE]
> Diese Attribute beeinflussen auch die Validierung; ein Wert, der kürzer oder länger als die angegebenen minimalen/maximalen Längen ist, wird als ungültig klassifiziert; zusätzlich werden die meisten Browser dem Benutzer nicht erlauben, einen Wert einzugeben, der länger als die angegebene maximale Länge ist.

### Bereitstellung von Standardoptionen

#### Bereitstellung eines einzelnen Standards mithilfe des `value`-Attributs

Wie immer können Sie einen Standardwert für ein `url`-Eingabefeld bereitstellen, indem Sie sein `value`-Attribut setzen:

```html
<input id="myURL" name="myURL" type="url" value="http://www.example.com" />
```

{{EmbedLiveSample("Providing_a_single_default_using_the_value_attribute", 600, 40)}}

#### Vorschlagen von Werten

Gehen Sie einen Schritt weiter und bieten Sie eine Liste von Standardoptionen an, aus denen der Benutzer wählen kann, indem Sie das `list`-Attribut angeben. Dies beschränkt den Benutzer nicht auf diese Optionen, ermöglicht es ihm aber, häufig verwendete URLs schneller auszuwählen. Dies bietet auch Hinweise für [`autocomplete`](/de/docs/Web/HTML/Element/input#autocomplete). Das `list`-Attribut gibt die ID eines {{HTMLElement("datalist")}} an, das wiederum ein {{HTMLElement("option")}}-Element für jeden vorgeschlagenen Wert enthält; der `value` jedes `option` ist der entsprechende Vorschlagswert für die URL-Eingabebox.

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

Mit dem {{HTMLElement("datalist")}}-Element und seinen {{HTMLElement("option")}}s an Ort und Stelle bietet der Browser die angegebenen Werte als potenzielle Werte für die URL an; dies wird typischerweise als Popup oder Dropdown-Menü mit den Vorschlägen präsentiert. Während die spezifische Benutzererfahrung von einem Browser zum anderen variieren kann, zeigt das Klicken in die Bearbeitungsbox normalerweise eine Dropdown-Liste der vorgeschlagenen URLs. Dann wird die Liste während der Eingabe des Benutzers angepasst, um nur übereinstimmende Werte anzuzeigen. Jeder eingegebene Buchstabe schränkt die Liste weiter ein, bis der Benutzer eine Auswahl trifft oder einen benutzerdefinierten Wert eingibt.

#### Verwendung von Labels für vorgeschlagene Werte

Sie können das `label`-Attribut auf einem oder allen Ihrer `<option>`-Elemente hinzufügen, um Textlabels bereitzustellen. Einige Browser zeigen möglicherweise nur die Labels an, während andere möglicherweise sowohl das Label als auch die URL anzeigen.

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

Für `url`-Eingaben stehen zwei Ebenen der Inhaltsvalidierung zur Verfügung. Erstens gibt es die Standardebene der Validierung, die allen {{HTMLElement("input")}}s angeboten wird und automatisch sicherstellt, dass die Inhalte den Anforderungen entsprechen, um eine gültige URL zu sein. Es besteht jedoch auch die Option, zusätzliche Filter hinzuzufügen, um sicherzustellen, dass Ihre eigenen speziellen Anforderungen erfüllt werden, falls Sie welche haben.

> [!WARNING]
> Die HTML-Formularvalidierung ist _kein_ Ersatz für Skripte, die sicherstellen, dass die eingegebenen Daten im richtigen Format vorliegen. Es ist viel zu einfach für jemanden, Anpassungen am HTML vorzunehmen, die es ihm ermöglichen, die Validierung zu umgehen oder sie vollständig zu entfernen. Es ist auch möglich, dass jemand Ihr HTML vollständig umgeht und die Daten direkt an Ihren Server sendet. Wenn Ihr serverseitiger Code die empfangenen Daten nicht validiert, kann eine Katastrophe eintreten, wenn falsch formatierte Daten (oder Daten, die zu groß sind, die falschen Typs sind usw.) in Ihre Datenbank eingegeben werden.

### Grundlegende Validierung

Browser, die den Eingabetyp `url` unterstützen, bieten automatisch eine Validierung an, um sicherzustellen, dass nur Text, der dem Standardformat für URLs entspricht, in die Eingabebox eingegeben wird.

Die Syntax einer URL ist ziemlich kompliziert. Sie wird durch den WHATWG-Standard [URL Living Standard](https://url.spec.whatwg.org/) definiert und ist für Anfänger in unserem Artikel [Was ist eine URL?](/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL) beschrieben.

### Eine URL erforderlich machen

Wie bereits erwähnt, müssen Sie, um eine URL-Eingabe zu einer erforderlichen Eingabe zu machen, bevor das Formular gesendet werden kann (Sie können das Feld nicht leer lassen), einfach das `required`-Attribut auf der Eingabe hinzufügen.

```html
<form>
  <input id="myURL" name="myURL" type="url" required />
  <button>Submit</button>
</form>
```

{{EmbedLiveSample("Making_a_URL_required", 600, 40)}}

Versuchen Sie, das obige Formular ohne eingetragenen Wert zu senden, um zu sehen, was passiert.

### Muster-Validierung

Wenn Sie die eingegebene URL weiter einschränken müssen als nur "jede Zeichenkette, die wie eine URL aussieht", können Sie das `pattern`-Attribut verwenden, um einen regulären Ausdruck anzugeben, den der Wert erfüllen muss, um gültig zu sein.

Nehmen wir zum Beispiel an, Sie erstellen eine Support-Seite für Mitarbeiter von Myco, Inc., die es ihnen ermöglicht, ihre IT-Abteilung um Hilfe zu bitten, wenn eine ihrer Seiten ein Problem hat. In unserem vereinfachten Formular muss der Benutzer die URL der Seite eingeben, die ein Problem hat, und eine Nachricht dazu schreiben, was falsch ist. Wir möchten jedoch, dass die URL nur dann erfolgreich validiert wird, wenn die eingegebene URL sich in einer Myco-Domain befindet.

Da Eingaben vom Typ `url` sowohl gegen den Standard-URL-Filter als auch gegen das angegebene `pattern` validieren, können Sie dies mit einem regulären Ausdruck umsetzen. Sehen wir uns an, wie das geht:

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

Zunächst wird das `required`-Attribut angegeben, was es erforderlich macht, dass eine gültige URL eingegeben wird.

Zweitens setzen wir in der `url`-Eingabe `pattern` auf `".*\.myco\..*"`. Dieser reguläre Ausdruck verlangt eine Zeichenkette, die durch einen Punkt, gefolgt von "myco", gefolgt von einem Punkt und einer beliebigen Anzahl von Zeichen besteht. Da der Browser sowohl den Standard-URL-Filter als auch unser benutzerdefiniertes Muster gegen den angegebenen Text laufen lässt, haben wir letztendlich eine Validierung, die sagt: "stellen Sie sicher, dass dies eine gültige URL ist und sich auch in einer Myco-Domain befindet."

Das ist nicht perfekt, aber für die Anforderungen dieser grundlegenden Demo ausreichend.

Es wird empfohlen, das `title`-Attribut zusammen mit `pattern` zu verwenden. Wenn Sie das tun, _muss_ der `title` das Muster beschreiben; er sollte erklären, welches Format die Daten haben sollten, anstatt jede andere Information. Das liegt daran, dass der `title` möglicherweise als Teil einer Validierungsfehlermeldung angezeigt oder gesprochen wird. Zum Beispiel könnte der Browser die Nachricht "Der eingegebene Text stimmt nicht mit dem erforderlichen Muster überein." und anschließend Ihren angegebenen `title` präsentieren. Wenn Ihr `title` etwas wie "URL" ist, würde das zur Nachricht "Der eingegebene Text stimmt nicht mit dem erforderlichen Muster überein. URL" führen, was keine gute Benutzererfahrung darstellt.

Deshalb geben wir stattdessen die Zeichenkette "Die URL muss in einer Myco-Domain sein" an. Indem wir dies tun, könnte die resultierende vollständige Fehlermeldung etwa so lauten: "Der eingegebene Text entspricht nicht dem erforderlichen Muster. Die URL sollte in einer Myco-Domain sein."

> [!NOTE]
> Wenn Sie auf Schwierigkeiten stoßen, während Sie Ihre Validierungsregulären Ausdrücke schreiben und sie nicht richtig funktionieren, prüfen Sie die Konsole Ihres Browsers; dort könnten hilfreiche Fehlermeldungen zu finden sein, die Ihnen bei der Lösung des Problems helfen.

## Beispiele

Es gibt nicht viel mehr über Eingaben vom Typ `url` zu sagen; schauen Sie sich die Abschnitte [Muster-Validierung](#muster-validierung) und [Verwendung von URL-Eingaben](#verwendung_von_url-eingaben) für zahlreiche Beispiele an.

Sie können auch unser [Muster-Validierungsbeispiel auf GitHub](https://github.com/mdn/learning-area/blob/main/html/forms/url-example/index.html) finden (sehen Sie es auch [live in Aktion](https://mdn.github.io/learning-area/html/forms/url-example/)).

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>Ein String, der eine URL repräsentiert, oder leer</td>
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
      <td>ohne <code>list</code>-Attribut:
                <code><a href="/de/docs/Web/Accessibility/ARIA/Roles/textbox_role">textbox</a></code></td>
      <td>mit <code>list</code>-Attribut: <code><a href="/de/docs/Web/Accessibility/ARIA/Roles/combobox_role">combobox</a></code></td>
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
