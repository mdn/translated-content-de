---
title: <input type="url">
slug: Web/HTML/Element/input/url
l10n:
  sourceCommit: 709d3a56661f895e5b0a67ff969e381d503ddd45
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente vom Typ **`url`** werden verwendet, um den Benutzer eine URL eingeben und bearbeiten zu lassen.

{{EmbedInteractiveExample("pages/tabbed/input-url.html", "tabbed-shorter")}}

Der Eingabewert wird automatisch validiert, um sicherzustellen, dass er entweder leer oder eine korrekt formatierte URL ist, bevor das Formular gesendet werden kann. Die CSS-Pseudoklassen {{cssxref(":valid")}} und {{cssxref(":invalid")}} werden automatisch angewendet, um visuell anzuzeigen, ob der aktuelle Wert des Feldes eine gültige URL ist oder nicht.

## Wert

Das [`value`](/de/docs/Web/HTML/Element/input#value)-Attribut des {{HTMLElement("input")}}-Elements enthält eine Zeichenkette, die automatisch als der URL-Syntax entsprechend validiert wird. Genauer gesagt, gibt es zwei mögliche Wertformate, die die Validierung bestehen:

1. Eine leere Zeichenkette ("") zeigt an, dass der Benutzer keinen Wert eingegeben hat oder dass der Wert entfernt wurde.
2. Eine einzelne, korrekt geformte absolute URL. Das bedeutet nicht notwendigerweise, dass die URL-Adresse existiert, aber sie ist zumindest korrekt formatiert. Ein Eintrag, der `urlscheme://rest-of-url` entspricht, kann gültig sein, sogar wenn das eingegebene `urlscheme` nicht existiert.

Sehen Sie sich den Abschnitt [Validierung](#validierung) an, um Details darüber zu erfahren, wie URLs validiert werden, um sicherzustellen, dass sie korrekt formatiert sind.

## Zusätzliche Attribute

Zusätzlich zu den [globalen Attributen](/de/docs/Web/HTML/Global_attributes) und den Attributen, die auf alle {{HTMLElement("input")}}-Elemente unabhängig von ihrem Typ wirken, unterstützen `url`-Inputs die folgenden Attribute.

> [!NOTE]
> Das globale Attribut [`autocorrect`](/de/docs/Web/HTML/Global_attributes/autocorrect) kann zu URL-Inputs hinzugefügt werden, aber der gespeicherte Zustand ist immer `off`.

### list

Der Wert des `list`-Attributs ist die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements, das im selben Dokument enthalten ist. Das {{HTMLElement("datalist")}} bietet eine Liste vordefinierter Werte, die dem Benutzer für diese Eingabe vorgeschlagen werden. Alle Werte in der Liste, die nicht mit dem [`type`](/de/docs/Web/HTML/Element/input#type) kompatibel sind, werden nicht in die vorgeschlagenen Optionen aufgenommen. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert angeben.

### maxlength

Die maximale Zeichenlänge (gemessen in UTF-16-Code-Einheiten), die der Benutzer in den `url`-Input eingeben kann. Dies muss ein ganzzahliger Wert von `0` oder höher sein. Wenn kein `maxlength` spezifiziert ist oder ein ungültiger Wert angegeben wird, hat der `url`-Input keine Maximallänge. Dieser Wert muss auch größer oder gleich dem Wert von `minlength` sein.

Die Eingabe schlägt bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) fehl, wenn die Länge des Textwertes des Feldes länger ist als `maxlength` UTF-16-Code-Einheiten. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### minlength

Die minimale Zeichenlänge (gemessen in UTF-16-Code-Einheiten), die der Benutzer in den `url`-Input eingeben kann. Dies muss ein nicht-negativer ganzzahliger Wert sein, der kleiner oder gleich dem durch `maxlength` angegebenen Wert ist. Wenn kein `minlength` spezifiziert ist oder ein ungültiger Wert angegeben wird, hat der `url`-Input keine Mindestlänge.

Die Eingabe schlägt bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) fehl, wenn die Länge des eingegebenen Textes in das Feld kürzer ist als `minlength` UTF-16-Code-Einheiten. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### pattern

Das `pattern`-Attribut ist, wenn es angegeben ist, ein regulärer Ausdruck, den der [`value`](/de/docs/Web/HTML/Element/input#value) des Inputs erfüllen muss, damit der Wert die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) besteht. Es muss ein gültiger regulärer JavaScript-Ausdruck sein, wie er vom {{jsxref("RegExp")}}-Typ verwendet wird, und wie in unserem [Leitfaden für reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert ist; das `'u'`-Flag wird beim Kompilieren des regulären Ausdrucks angegeben, damit das Muster als Folge von Unicode-Codepunkten statt als {{Glossary("ASCII", "ASCII")}} behandelt wird. Um das Muster-Text herum dürfen keine Schrägstriche angegeben werden.

Wenn das angegebene Muster nicht spezifiziert oder ungültig ist, wird kein regulärer Ausdruck angewendet und dieses Attribut wird vollständig ignoriert.

> [!NOTE]
> Verwenden Sie das [`title`](/de/docs/Web/HTML/Element/input#title)-Attribut, um Text anzugeben, den die meisten Browser als Tooltip anzeigen, um zu erklären, welche Anforderungen eingehalten werden müssen, um dem Muster zu entsprechen. Sie sollten auch einen anderen erklärenden Text in der Nähe hinzufügen.

Siehe den Abschnitt [Muster-Validierung](#muster-validierung) für Details und ein Beispiel.

### placeholder

Das `placeholder`-Attribut ist eine Zeichenkette, die dem Benutzer einen kurzen Hinweis darauf gibt, welche Art von Informationen im Feld erwartet werden. Es sollte ein Wort oder eine kurze Phrase sein, die den erwarteten Datentyp demonstriert, anstatt eine erklärende Nachricht. Der Text darf keine Wagenrückläufe oder Zeilenumbrüche enthalten.

Wenn der Inhalt der Steuerung eine Richtung ({{Glossary("LTR", "LTR")}} oder {{Glossary("RTL", "RTL")}}) hat, aber der Platzhalter in der entgegengesetzten Richtung dargestellt werden muss, können Sie die Unicode-Bidirektionalitätsalgorithmus-Formatierungszeichen verwenden, um die Richtung innerhalb des Platzhalters zu überschreiben; siehe [Wie man Unicode-Steuerungen für bidi-Text verwendet](https://www.w3.org/International/questions/qa-bidi-unicode-controls) für weitere Informationen.

> [!NOTE]
> Vermeiden Sie es, das `placeholder`-Attribut zu verwenden, wenn es möglich ist. Es ist nicht so semantisch nützlich wie andere Methoden zur Erklärung Ihres Formulars und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Siehe [`<input>`-Labels](/de/docs/Web/HTML/Element/input#labels) für mehr Informationen.

### readonly

Das [`readonly`](/de/docs/Web/HTML/Attributes/readonly)-Boolesche Attribut bedeutet, wenn es vorhanden ist, dass dieses Feld vom Benutzer nicht bearbeitet werden kann. Sein `value` kann jedoch weiterhin direkt durch JavaScript-Code geändert werden, indem die `value`-Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) gesetzt wird.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat [`required`](/de/docs/Web/HTML/Attributes/required) keine Wirkung auf Eingaben mit dem ebenfalls angegebenen `readonly`-Attribut.

### size

Das `size`-Attribut ist ein numerischer Wert, der angibt, wie viele Zeichen breit das Eingabefeld sein soll. Der Wert muss eine Zahl größer als null sein, und der Standardwert ist 20. Da Zeichenbreiten variieren, kann dies mehr oder weniger genau sein und sollte nicht darauf vertraut werden; das resultierende Eingabefeld kann je nach den Zeichen und der verwendeten Schriftart ({{cssxref("font")}}-Einstellungen) schmaler oder breiter sein als die angegebene Anzahl von Zeichen.

Dies legt kein Limit fest, wie viele Zeichen der Benutzer in das Feld eingeben kann. Es gibt nur ungefähr an, wie viele gleichzeitig sichtbar sein können. Um eine obere Grenze für die Länge der Eingabedaten festzulegen, verwenden Sie das [`maxlength`](#maxlength)-Attribut.

### spellcheck

Das [`spellcheck`](/de/docs/Web/HTML/Global_attributes/spellcheck)-Globale-Attribut wird verwendet, um anzugeben, ob die Rechtschreibprüfung für ein Element aktiviert werden soll. Es kann auf jedem bearbeitbaren Inhalt verwendet werden, aber hier betrachten wir spezifisch die Verwendung von `spellcheck` auf {{HTMLElement("input")}}-Elementen. Die zulässigen Werte für `spellcheck` sind:

- `false`
  - : Deaktivieren Sie die Rechtschreibprüfung für dieses Element.
- `true`
  - : Aktivieren Sie die Rechtschreibprüfung für dieses Element.
- "" (leere Zeichenkette) oder kein Wert
  - : Befolgen Sie das Standardverhalten des Elements zur Rechtschreibprüfung. Dies kann auf einer übergeordneten `spellcheck`-Einstellung oder anderen Faktoren basieren.

Ein Eingabefeld kann die Rechtschreibprüfung aktiviert haben, wenn es nicht das [readonly](#readonly)-Attribut gesetzt hat und nicht deaktiviert ist.

Der Wert, der durch Lesen von `spellcheck` zurückgegeben wird, spiegelt möglicherweise nicht den tatsächlichen Rechtschreibprüfungszustand eines Steuerelements wider, wenn die {{Glossary("user_agent", "Benutzeragenten")}}-Einstellungen die Einstellung überschreiben.

## Verwendung von URL-Inputs

Wenn Sie einen URL-Input mit dem richtigen `type`-Wert `url` erstellen, erhalten Sie eine automatische Validierung, dass der eingegebene Text zumindest in der richtigen Form ist, um möglicherweise eine legitime URL zu sein. Dies kann helfen, Fälle zu vermeiden, in denen der Benutzer die Adresse seiner Website falsch eingibt oder eine ungültige angibt.

Es ist jedoch wichtig zu beachten, dass dies nicht ausreicht, um sicherzustellen, dass der angegebene Text eine URL ist, die tatsächlich existiert, zum Benutzer der Website gehört oder anderweitig akzeptabel ist. Es stellt sicher, dass der Wert des Feldes korrekt formatiert ist, um eine URL zu sein.

> [!NOTE]
> Ein Benutzer kann hinter den Kulissen mit Ihrem HTML herumspielen, daher darf Ihre Website diese Validierung nicht für Sicherheitszwecke verwenden. Sie müssen die URL auf der Serverseite jeder Transaktion überprüfen, in der der bereitgestellte Text sicherheitsrelevante Implikationen haben kann.

### Ein einfaches URL-Input

Dieses Element wird als Standardtexteingabefeld mit grundlegenden Validierungsfunktionen implementiert. In seiner einfachsten Form kann ein URL-Input so implementiert werden:

```html
<input id="myURL" name="myURL" type="url" />
```

{{ EmbedLiveSample('A_simple_URL_input', 600, 40) }}

Beachten Sie, dass es als gültig angesehen wird, wenn es leer ist und wenn eine einzelne gültig formatierte URL-Adresse eingegeben wird, aber ansonsten nicht als gültig betrachtet wird. Indem Sie das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut hinzufügen, werden nur korrekt geformte URLs zugelassen; die Eingabe wird nicht mehr als gültig betrachtet, wenn sie leer ist.

Hier passiert nichts Magisches. Das Absenden dieses Formulars würde dazu führen, dass die folgenden Daten an den Server gesendet werden: `myURL=http%3A%2F%2Fwww.example.com`. Beachten Sie, wie Zeichen bei Bedarf kodiert werden.

### Platzhalter

Manchmal ist es hilfreich, einen kontextbezogenen Hinweis darauf zu geben, in welcher Form die Eingabedaten sein sollten. Dies kann besonders wichtig sein, wenn das Seitendesign keine beschreibenden Labels für jedes {{HTMLElement("input")}}-Element bietet. Hier kommen **Platzhalter** ins Spiel. Ein Platzhalter ist ein Wert, der die Form veranschaulicht, die der `value` annehmen sollte, indem er ein Beispiel für einen gültigen Wert präsentiert, der im Eingabefeld angezeigt wird, wenn der `value` des Elements "". Sobald Daten in das Feld eingegeben werden, verschwindet der Platzhalter; wenn das Feld geleert wird, erscheint der Platzhalter erneut.

Hier haben wir ein `url`-Input mit dem Platzhalter `http://www.example.com`. Beachten Sie, wie der Platzhalter verschwindet und wieder erscheint, während Sie den Inhalt des Bearbeitungsfeldes manipulieren.

```html
<input
  id="myURL"
  name="myURL"
  type="url"
  placeholder="http://www.example.com" />
```

{{ EmbedLiveSample('Placeholders', 600, 40) }}

### Kontrolle der Eingabegröße

Sie können sowohl die physische Länge der Eingabebox als auch die minimale und maximale Länge für den eingegebenen Text kontrollieren.

#### Physische Eingabeelementgröße

Die physische Größe der Eingabebox kann mithilfe des [`size`](/de/docs/Web/HTML/Element/input#size)-Attributs gesteuert werden. Mit ihm können Sie die Anzahl der Zeichen angeben, die die Eingabebox gleichzeitig anzeigen kann. In diesem Beispiel ist die `url`-Eingabebox 30 Zeichen breit:

```html
<input id="myURL" name="myURL" type="url" size="30" />
```

{{ EmbedLiveSample('Physical_input_element_size', 600, 40) }}

#### Wertlänge des Elements

Die `size` ist getrennt von der Längenbeschränkung der eingegebenen URL selbst. Sie können eine minimale Länge in Zeichen für die eingegebene URL mithilfe des [`minlength`](/de/docs/Web/HTML/Element/input#minlength)-Attributs angeben; verwenden Sie ebenso [`maxlength`](/de/docs/Web/HTML/Element/input#maxlength), um die maximale Länge der eingegebenen URL festzulegen. Wenn `maxLength` `size` überschreitet, scrollen die Inhalte der Eingabebox bei Bedarf, um die aktuelle Auswahl oder den Einfügepunkt zu zeigen, während der Inhalt bearbeitet wird.

Das folgende Beispiel erstellt ein 30 Zeichen breites URL-Adresseingabefeld, das fordert, dass der Inhalt nicht kürzer als 10 Zeichen und nicht länger als 80 Zeichen ist.

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
> Diese Attribute beeinflussen auch die Validierung; ein Wert, der kürzer oder länger ist als die angegebenen Mindest-/Maximallängen, wird als ungültig klassifiziert; außerdem werden die meisten Browser den Benutzer daran hindern, einen Wert einzugeben, der länger ist als die angegebene maximale Länge.

### Bereitstellungsstandardoptionen

#### Bereitstellung eines einzigen Standards mithilfe des Value-Attributs

Wie immer können Sie einen Standardwert für eine `url`-Eingabebox bereitstellen, indem Sie das [`value`](/de/docs/Web/HTML/Element/input#value)-Attribut setzen:

```html
<input id="myURL" name="myURL" type="url" value="http://www.example.com" />
```

{{EmbedLiveSample("Providing_a_single_default_using_the_value_attribute", 600, 40)}}

#### Vorschlagen von Werten

Wenn Sie einen Schritt weiter gehen, können Sie eine Liste von Standardoptionen bereitstellen, aus denen der Benutzer auswählen kann, indem Sie das [`list`](/de/docs/Web/HTML/Element/input#list)-Attribut angeben. Dies schränkt den Benutzer nicht auf diese Optionen ein, ermöglicht ihm jedoch, häufiger verwendete URLs schneller auszuwählen. Dies bietet auch Hinweise auf [`autocomplete`](/de/docs/Web/HTML/Element/input#autocomplete). Das `list`-Attribut gibt die ID eines {{HTMLElement("datalist")}}-Elemenattrs an, das wiederum ein {{HTMLElement("option")}}-Element pro vorgeschlagenem Wert enthält; der `value` jeder `option` ist der entsprechende vorgeschlagene Wert für die URL-Eingabebox.

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

Mit dem {{HTMLElement("datalist")}}-Element und seinen {{HTMLElement("option")}}s wird der Browser die angegebenen Werte als potenzielle Werte für die URL anbieten; dies wird typischerweise als Popup-Menü oder Dropdown-Menü der Vorschläge dargestellt. Während die spezifische Benutzererfahrung von einem Browser zum anderen variieren kann, präsentiert das Eingabefeld in der Regel bei einem Klick darauf ein Dropdown-Menü der vorgeschlagenen URLs. Dann wird, während der Benutzer tippt, die Liste angepasst, um nur übereinstimmende Werte anzuzeigen. Jedes getippte Zeichen reduziert die Liste, bis der Benutzer eine Auswahl trifft oder einen benutzerdefinierten Wert eingibt.

#### Verwenden von Labels für vorgeschlagene Werte

Sie können wählen, das [`label`](/de/docs/Web/HTML/Element/option#label)-Attribut zu einem oder all Ihren `<option>`-Elementen hinzuzufügen, um Textlabels bereitzustellen. Einige Browser zeigen möglicherweise nur die Labels an, während andere sowohl das Label als auch die URL anzeigen.

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

Für `url`-Inputs stehen zwei Ebenen der Inhaltsvalidierung zur Verfügung. Einerseits gibt es die standardmäßige Validierungsebene, die allen {{HTMLElement("input")}}s angeboten wird, die automatisch sicherstellt, dass der Inhalt die Anforderungen erfüllt, um eine gültige URL zu sein. Darüber hinaus besteht die Möglichkeit, zusätzliche Filter hinzuzufügen, um sicherzustellen, dass Ihre eigenen speziellen Anforderungen erfüllt werden, falls vorhanden.

> [!WARNING]
> Die HTML-Formularvalidierung ist kein Ersatz für Skripte, die sicherstellen, dass die eingegebenen Daten im korrekten Format sind. Es ist zu einfach für jemanden, Anpassungen am HTML vorzunehmen, die es ihm ermöglichen, die Validierung zu umgehen oder sie vollständig zu entfernen. Es ist auch möglich, dass jemand Ihr HTML vollständig umgeht und die Daten direkt an Ihren Server sendet. Wenn Ihr serverseitiger Code die empfangenen Daten nicht validiert, könnte es zu einem Problem kommen, wenn falsch formatierte Daten (oder Daten, die zu groß sind, den falschen Typ haben usw.) in Ihre Datenbank gelangen.

### Grundlegende Validierung

Browser, die den `url`-Eingabetyp unterstützen, bieten automatisch eine Validierung, um sicherzustellen, dass nur Text eingegeben wird, der dem Standardformat für URLs entspricht.

Die Syntax einer URL ist ziemlich komplex. Sie wird durch den [URL Living Standard](https://url.spec.whatwg.org/) der WHATWG definiert und wird für Anfänger in unserem Artikel [Was ist eine URL?](/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL) beschrieben.

### Eine URL erforderlich machen

Wie bereits erwähnt, um sicherzustellen, dass ein URL-Eintrag erforderlich ist, bevor das Formular gesendet werden kann (Sie können das Feld nicht leer lassen), müssen Sie einfach das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut in das Eingabefeld einfügen.

```html
<form>
  <input id="myURL" name="myURL" type="url" required />
  <button>Submit</button>
</form>
```

{{EmbedLiveSample("Making_a_URL_required", 600, 40)}}

Versuchen Sie, das obige Formular zu senden, ohne einen Wert einzugeben, um zu sehen, was passiert.

### Muster-Validierung

Wenn Sie die eingegebene URL strikter einschränken müssen als einfach "irgendeine Zeichenkette, die wie eine URL aussieht", können Sie das [`pattern`](/de/docs/Web/HTML/Element/input#pattern)-Attribut verwenden, um einen {{Glossary("regular_expression", "regulären Ausdruck")}} anzugeben, den der Wert erfüllen muss, damit er gültig ist.

Angenommen, Sie erstellen eine Support-Seite für Mitarbeiter von Myco, Inc., die es ihnen ermöglicht, ihre IT-Abteilung um Hilfe zu bitten, wenn eine ihrer Seiten ein Problem hat. In unserem vereinfachten Formular muss der Benutzer die URL der Seite angeben, die ein Problem hat, und eine Nachricht, die beschreibt, was falsch ist. Aber wir wollen, dass die URL nur dann erfolgreich validiert wird, wenn die eingegebene URL in einer Myco-Domain liegt.

Da Inputs des Typs `url` sowohl gegen die standardisierte URL-Validierung als auch gegen das spezifizierte [`pattern`](/de/docs/Web/HTML/Element/input#pattern) validieren, können Sie dies mit einem regulären Ausdruck implementieren. Lassen Sie uns sehen, wie:

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

Erstens wird das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut angegeben, was es verpflichtend macht, eine gültige URL bereitzustellen.

Zweitens setzen wir im `url`-Input `pattern` auf `".*\.myco\..*"`. Dieser reguläre Ausdruck fordert eine Zeichenfolge, die eine beliebige Anzahl von Zeichen hat, gefolgt von einem Punkt, gefolgt von "myco", gefolgt von einem Punkt, gefolgt von einer beliebigen Anzahl von Zeichen. Da der Browser sowohl den standardmäßigen URL-Filter als auch unser benutzerdefiniertes Muster auf den angegebenen Text anwendet, haben wir am Ende eine Validierung, die sagt: "Stellen Sie sicher, dass dies eine gültige URL ist und auch in einer Myco-Domain."

Dies ist nicht perfekt, aber es reicht aus für die Anforderungen dieses einfachen Demos.

Es ist ratsam, das [`title`](/de/docs/Web/HTML/Global_attributes/title)-Attribut zusammen mit `pattern` zu verwenden. Wenn Sie dies tun, muss der `title` das Muster beschreiben; er sollte erklären, in welchem Format die Daten sein sollten, anstatt irgendwelche anderen Informationen. Das liegt daran, dass der `title` möglicherweise als Teil einer Validierungsfehlermeldung angezeigt oder gesprochen wird. Zum Beispiel könnte der Browser die Meldung "Der eingegebene Text entspricht nicht dem erforderlichen Muster." gefolgt von Ihrem angegebenen `title` präsentieren. Wenn Ihr `title` so etwas wie "URL" ist, würde die Ergebnisnachricht "Der eingegebene Text entspricht nicht dem erforderlichen Muster. URL" lauten, was keine gute Benutzererfahrung ist.

Deshalb geben wir stattdessen die Zeichenkette "Die URL muss in einer Myco-Domain sein" an. Durch diese Angabe wäre die resultierende Fehlermeldung möglicherweise etwas wie "Der eingegebene Text entspricht nicht dem erforderlichen Muster. Die URL sollte in einer Myco-Domain sein."

> [!NOTE]
> Wenn Sie auf Schwierigkeiten stoßen, während Sie Ihre Validierungsregulärausdrücke schreiben und sie nicht richtig funktionieren, überprüfen Sie die Konsole Ihres Browsers; dort könnten hilfreiche Fehlermeldungen erscheinen, die Ihnen bei der Problemlösung helfen.

## Beispiele

Es gibt nicht viel mehr zu `url`-Eingaben zu sagen; schauen Sie sich die Abschnitte [Muster-Validierung](#muster-validierung) und [Verwendung von URL-Inputs](#verwendung_von_url-inputs) für zahlreiche Beispiele an.

Sie können auch unser [Muster-Validierungsbeispiel auf GitHub](https://github.com/mdn/learning-area/blob/main/html/forms/url-example/index.html) finden (sehen Sie sich auch die [laufende Live-Version](https://mdn.github.io/learning-area/html/forms/url-example/) an).

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>Eine Zeichenfolge, die eine URL repräsentiert, oder leer</td>
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
      <td><strong>IDL Attribute</strong></td>
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

- [Leitfaden für HTML-Formulare](/de/docs/Learn/Forms)
- {{HTMLElement("input")}}
- [`<input type="tel">`](/de/docs/Web/HTML/Element/input/tel)
- [`<input type="email">`](/de/docs/Web/HTML/Element/input/email)
- [Kompatibilität von CSS-Eigenschaften](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
