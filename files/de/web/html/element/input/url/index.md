---
title: <input type="url">
slug: Web/HTML/Element/input/url
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{HTMLSidebar}}

{{HTMLElement("input")}} Elemente des Typs **`url`** werden verwendet, um dem Benutzer das Eingeben und Bearbeiten einer URL zu ermöglichen.

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

Der eingegebene Wert wird automatisch validiert, um sicherzustellen, dass er entweder leer oder eine korrekt formatierte URL ist, bevor das Formular abgeschickt werden kann. Die CSS-Pseudoklassen {{cssxref(":valid")}} und {{cssxref(":invalid")}} werden automatisch entsprechend angewendet, um visuell anzuzeigen, ob der aktuelle Wert des Feldes eine gültige URL ist oder nicht.

## Wert

Das [`value`](/de/docs/Web/HTML/Element/input#value)-Attribut eines {{HTMLElement("input")}} Elements enthält einen String, der automatisch validiert wird, um sicherzustellen, dass er der URL-Syntax entspricht. Es gibt speziell zwei mögliche Wertformate, die die Validierung bestehen:

1. Ein leerer String ("") zeigt an, dass der Benutzer keinen Wert eingegeben hat oder dass der Wert entfernt wurde.
2. Eine einzelne korrekt formatierte absolute URL. Das bedeutet nicht unbedingt, dass die URL-Adresse existiert, aber sie ist zumindest korrekt formatiert. Ein Eintrag, der `urlscheme://rest-of-url` entspricht, kann gültig sein, selbst wenn das eingegebene `urlscheme` nicht existiert.

Details zur Validierung von URLs, um sicherzustellen, dass sie korrekt formatiert sind, finden Sie unter [Validierung](#validierung).

## Zusätzliche Attribute

Zusätzlich zu den [globalen Attributen](/de/docs/Web/HTML/Global_attributes) und den Attributen, die für alle {{HTMLElement("input")}} Elemente unabhängig von ihrem Typ gelten, unterstützen `url`-Eingaben die folgenden Attribute.

> [!NOTE]
> Das globale Attribut [`autocorrect`](/de/docs/Web/HTML/Global_attributes/autocorrect) kann zu url-Eingaben hinzugefügt werden, aber der gespeicherte Zustand ist immer `off`.

### list

Der Wert des `list`-Attributs ist die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}} Elements, das sich im selben Dokument befindet. Der {{HTMLElement("datalist")}} bietet eine Liste vordefinierter Werte an, die dem Benutzer für diese Eingabe vorgeschlagen werden. Alle Werte in der Liste, die nicht mit dem [`type`](/de/docs/Web/HTML/Element/input#type) kompatibel sind, werden nicht in den vorgeschlagenen Optionen enthalten. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert angeben.

### maxlength

Die maximale Zeichenlänge (gemessen in UTF-16 Code-Einheiten), die der Benutzer in das `url`-Eingabefeld eingeben kann. Dies muss ein ganzzahliger Wert von 0 oder höher sein. Wenn kein `maxlength` angegeben ist oder ein ungültiger Wert festgelegt ist, hat das `url`-Feld keine maximale Länge. Dieser Wert muss auch größer oder gleich dem Wert von `minlength` sein.

Die Eingabe wird [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) fehlschlagen, wenn die Länge des Textwertes des Feldes mehr als `maxlength` UTF-16 Code-Einheiten beträgt. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert durch den Benutzer geändert wird.

### minlength

Die minimale Zeichenlänge (gemessen in UTF-16 Code-Einheiten), die der Benutzer in das `url`-Eingabefeld eingeben kann. Dies muss ein nicht-negativer Ganzzahlwert sein, der gleich oder kleiner als der durch `maxlength` angegebene Wert ist. Wenn kein `minlength` angegeben ist oder ein ungültiger Wert festgelegt ist, hat das `url`-Feld keine minimale Länge.

Die Eingabe wird [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) fehlschlagen, wenn die Länge des in das Feld eingegebenen Textes weniger als `minlength` UTF-16 Code-Einheiten beträgt. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert durch den Benutzer geändert wird.

### pattern

Das `pattern`-Attribut ist, wenn angegeben, ein regulärer Ausdruck, den der `value`-Wert des Eingabefelds bestehen muss, um die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) zu bestehen. Es muss ein gültiger JavaScript-Regulärer Ausdruck sein, wie er von dem {{jsxref("RegExp")}}-Typ verwendet wird, und wie in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert; das `'u'`-Flag wird beim Kompilieren des regulären Ausdrucks angegeben, damit das Muster als Unicode-Codepunksequenz und nicht als {{Glossary("ASCII", "ASCII")}} behandelt wird. Keine Schrägstriche sollten um den Mustertext angegeben werden.

Wenn das angegebene Muster nicht angegeben oder ungültig ist, wird kein regulärer Ausdruck angewendet und dieses Attribut wird vollständig ignoriert.

> [!NOTE]
> Verwenden Sie das [`title`](/de/docs/Web/HTML/Element/input#title)-Attribut, um Text anzugeben, den die meisten Browser als Tooltip anzeigen werden, um zu erklären, welche Anforderungen erfüllt werden müssen, um dem Muster zu entsprechen. Sie sollten auch anderen erklärenden Text in der Nähe einschließen.

Einzelheiten und ein Beispiel finden Sie im Abschnitt [Muster-Validierung](#muster-validierung).

### placeholder

Das `placeholder`-Attribut ist ein String, der dem Benutzer einen kurzen Hinweis darauf gibt, welche Art von Information in dem Feld erwartet wird. Es sollte ein Wort oder eine kurze Phrase sein, die den erwarteten Datentyp demonstriert, anstelle einer erklärenden Nachricht. Der Text _darf keine_ Zeilenumbrüche oder -sprünge enthalten.

Wenn der Inhalt der Steuerung eine andere Richtung (LTR oder RTL) hat, aber den Platzhalter in der entgegengesetzten Richtung darstellen muss, können Sie Unicode-Bidi-Algorithmus-Formatierungscode verwenden, um die Richtung innerhalb des Platzhalters außer Kraft zu setzen; siehe [Wie man Unicode-Kontrollen für bidi Text verwendet](https://www.w3.org/International/questions/qa-bidi-unicode-controls) für weitere Informationen.

> [!NOTE]
> Vermeiden Sie die Verwendung des `placeholder`-Attributs, wenn Sie können. Es ist nicht so semantisch nützlich wie andere Möglichkeiten, Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Weitere Informationen finden Sie unter [`<input>` Labels](/de/docs/Web/HTML/Element/input#labels).

### readonly

Das [`readonly`](/de/docs/Web/HTML/Attributes/readonly) Boolean-Attribut bedeutet, falls vorhanden, dass dieses Feld nicht vom Benutzer bearbeitet werden kann. Sein `value` kann jedoch weiterhin von JavaScript-Code direkt eingestellt werden, indem die [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) `value`-Eigenschaft gesetzt wird.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat [`required`](/de/docs/Web/HTML/Attributes/required) keine Wirkung auf Eingaben mit ebenfalls angegebenem `readonly`-Attribut.

### size

Das `size`-Attribut ist ein numerischer Wert, der angibt, wie viele Zeichen breit das Eingabefeld sein soll. Der Wert muss eine Zahl größer als Null sein, und der Standardwert ist 20. Da Zeichenbreiten variieren, kann dies möglicherweise nicht exakt sein und sollte nicht darauf vertraut werden, dass es so ist; die resultierende Eingabe kann schmaler oder breiter als die angegebene Anzahl von Zeichen sein, abhängig von den Zeichen und dem ({{cssxref("font")}}-Einstellungen verwendeten) Schriftart.

Dies legt _keine_ Begrenzung fest, wie viele Zeichen der Benutzer in das Feld eingeben kann. Es gibt nur an, wie viele man ungefähr auf einmal sehen kann. Um eine Obergrenze für die Länge der Eingabedaten festzulegen, verwenden Sie das [`maxlength`](#maxlength)-Attribut.

### spellcheck

Das [`spellcheck`](/de/docs/Web/HTML/Global_attributes/spellcheck) globale Attribut wird verwendet, um anzugeben, ob Rechtschreibprüfung für ein Element aktiviert werden soll. Es kann auf allen bearbeitbaren Inhalten verwendet werden, aber hier betrachten wir spezifische Aspekte der Verwendung von `spellcheck` bei {{HTMLElement("input")}} Elementen. Die erlaubten Werte für `spellcheck` sind:

- `false`
  - : Deaktiviert die Rechtschreibprüfung für dieses Element.
- `true`
  - : Aktiviert die Rechtschreibprüfung für dieses Element.
- "" (leerer String) oder kein Wert
  - : Verfolgen des Standardverhaltens des Elements für die Rechtschreibprüfung. Dies kann auf dem `spellcheck`-Einstellung des Elternteils oder anderen Faktoren basieren.

Ein Eingabefeld kann die Rechtschreibprüfung aktiviert haben, wenn es nicht das [readonly](#readonly)-Attribut gesetzt hat und nicht deaktiviert ist.

Der Wert, der durch das Lesen von `spellcheck` zurückgegeben wird, kann möglicherweise nicht den tatsächlichen Zustand der Rechtschreibprüfung innerhalb einer Steuerung widerspiegeln, wenn die Voreinstellungen des {{Glossary("user_agent", "Benutzeragenten")}} die Einstellung außer Kraft setzen.

## Verwendung von URL-Eingaben

Wenn Sie eine URL-Eingabe mit dem richtigen `type`-Wert, `url`, erstellen, erhalten Sie eine automatische Validierung, dass der eingegebene Text mindestens in der richtigen Form ist, um potenziell eine gültige URL zu sein. Dies kann helfen, Fälle zu vermeiden, in denen der Benutzer die Adresse seiner Website falsch eintippt oder eine ungültige angibt.

Es ist jedoch wichtig zu beachten, dass dies nicht ausreicht, um sicherzustellen, dass der angegebene Text eine URL ist, die tatsächlich existiert, dem Benutzer der Website entspricht oder in irgendeiner Weise akzeptabel ist. Es wird sichergestellt, dass der Wert des Feldes korrekt formatiert ist, um eine URL zu sein.

> [!NOTE]
> Ein Benutzer kann heimlich Ihre HTML-Daten manipulieren, so dass Ihre Website _niemals_ diese Validierung für Sicherheitszwecke nutzen darf. Sie _müssen_ die URL serverseitig bei jeder Transaktion validieren, bei der der bereitgestellte Text irgendwelche Sicherheitsimplikationen haben könnte.

### Eine grundlegende URL-Eingabe

Dieses Element wird als Standardtexteingabefeld mit grundlegenden Validierungsfunktionen implementiert. In seiner einfachsten Form kann eine URL-Eingabe so implementiert werden:

```html
<input id="myURL" name="myURL" type="url" />
```

{{ EmbedLiveSample('A_basic_URL_input', 600, 40) }}

Beachten Sie, dass es als gültig angesehen wird, wenn es leer ist und wenn eine einzelne korrekt formatierte URL-Adresse eingegeben ist, aber sonst nicht als gültig betrachtet wird. Durch das Hinzufügen des [`required`](/de/docs/Web/HTML/Element/input#required)-Attributs sind nur korrekt formatierte URLs erlaubt; die Eingabe wird nicht mehr als gültig angesehen, wenn sie leer ist.

Hier geschieht nichts Magisches. Das Einreichen dieses Formulars würde folgende Daten an den Server senden: `myURL=http%3A%2F%2Fwww.example.com`. Beachten Sie, wie Zeichen nach Bedarf maskiert werden.

### Platzhalter

Manchmal ist es hilfreich, einen kontextuellen Hinweis darauf zu geben, welche Form die Eingabedaten annehmen sollten. Dies kann besonders wichtig sein, wenn das Seitendesign keine beschreibenden Labels für jedes {{HTMLElement("input")}} bietet. Hier kommen **Platzhalter** ins Spiel. Ein Platzhalter ist ein Wert, der die Form des `value` zeigt, indem er ein Beispiel für einen gültigen Wert präsentiert, der im Eingabebereich angezeigt wird, wenn der `value` des Elements "" ist. Sobald Daten in das Feld eingegeben werden, verschwindet der Platzhalter; wenn der Bereich geleert wird, erscheint der Platzhalter erneut.

Hier haben wir eine `url`-Eingabe mit dem Platzhalter `http://www.example.com`. Beachten Sie, wie der Platzhalter verschwindet und wieder erscheint, wenn Sie die Inhalte des Eingabefeldes manipulieren.

```html
<input
  id="myURL"
  name="myURL"
  type="url"
  placeholder="http://www.example.com" />
```

{{ EmbedLiveSample('Placeholders', 600, 40) }}

### Steuerung der Eingabegröße

Sie können sowohl die physische Länge des Eingabefeldes als auch die minimal und maximal erlaubte Länge für den Eingabetext steuern.

#### Physische Eingabeelementgröße

Die physische Größe des Eingabefeldes kann durch das [`size`](/de/docs/Web/HTML/Element/input#size)-Attribut gesteuert werden. Damit können Sie die Anzahl der Zeichen angeben, die das Eingabefeld auf einmal anzeigen kann. In diesem Beispiel ist das `url`-Bearbeitungsfeld 30 Zeichen breit:

```html
<input id="myURL" name="myURL" type="url" size="30" />
```

{{ EmbedLiveSample('Physical_input_element_size', 600, 40) }}

#### Elementwertlänge

Die `size` ist getrennt von der Längenbegrenzung der eingegebenen URL selbst. Sie können eine Mindestlänge, in Zeichen, für die eingegebene URL mit dem [`minlength`](/de/docs/Web/HTML/Element/input#minlength)-Attribut angeben; ebenso verwenden Sie [`maxlength`](/de/docs/Web/HTML/Element/input#maxlength) um die maximale Länge der eingegebenen URL festzulegen. Wenn `maxLength` `size` überschreitet, rollen die Inhalte des Eingabefeldes nach Bedarf, um die aktuelle Auswahl oder den Einfügepunkt anzuzeigen, während der Inhalt bearbeitet wird.

Das folgende Beispiel erstellt ein 30 Zeichen breites URL-Eingabefeld, bei dem die Inhalte nicht kürzer als 10 Zeichen und nicht länger als 80 Zeichen sein dürfen.

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
> Diese Attribute wirken sich auch auf die Validierung aus; ein Wert, der kürzer oder länger als die angegebene minimale/maximale Länge ist, wird als ungültig eingestuft; und die meisten Browser werden dem Benutzer nicht erlauben, einen Wert einzugeben, der länger als die angegebene maximale Länge ist.

### Bereitstellung von Standardoptionen

#### Bereitstellung eines einzelnen Standards über das Wertattribut

Wie immer können Sie einen Standardwert für ein `url`-Eingabefeld bereitstellen, indem Sie sein [`value`](/de/docs/Web/HTML/Element/input#value)-Attribut einstellen:

```html
<input id="myURL" name="myURL" type="url" value="http://www.example.com" />
```

{{EmbedLiveSample("Providing_a_single_default_using_the_value_attribute", 600, 40)}}

#### Angebot vorgeschlagener Werte

Ein Stück weiter können Sie eine Liste von Standardoptionen bereitstellen, aus der der Benutzer auswählen kann, indem Sie das [`list`](/de/docs/Web/HTML/Element/input#list)-Attribut angeben. Dies beschränkt den Benutzer nicht auf diese Optionen, aber es erlaubt ihm, gängig verwendete URLs schneller auszuwählen. Dies bietet auch Hinweise für [`autocomplete`](/de/docs/Web/HTML/Element/input#autocomplete). Das `list`-Attribut gibt die ID einer {{HTMLElement("datalist")}} an, die wiederum ein {{HTMLElement("option")}}-Element pro vorgeschlagenem Wert enthält; der `value` EACH_option-`value` ist der entsprechende vorgeschlagene Wert für das URL-Eingabefeld.

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

Mit dem {{HTMLElement("datalist")}}-Element und seinen {{HTMLElement("option")}} entlang werden dem Browser die angegebenen Werte als potenzielle Werte für die URL angeboten; in der Regel wird dies als Popup- oder Dropdown-Menü mit den Vorschlägen präsentiert. Während die spezifische Benutzererfahrung von einem Browser zum anderen variieren kann, wird normalerweise beim Klicken in das Bearbeitungsfeld eine Dropdown-Liste der vorgeschlagenen URLs angezeigt. Dann, während der Benutzer tippt, wird die Liste angepasst, um nur passende Werte anzuzeigen. Jeder getippte Buchstabe reduziert die Liste, bis der Benutzer eine Auswahl trifft oder einen eigenen Wert eingibt.

#### Verwendung von Labels für vorgeschlagene Werte

Sie können wählen, das [`label`](/de/docs/Web/HTML/Element/option#label)-Attribut auf einen oder alle Ihrer `<option>`-Elemente hinzuzufügen, um Textlabels bereitzustellen. Einige Browser zeigen möglicherweise nur die Labels an, während andere sowohl das Label als auch die URL anzeigen.

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

Es gibt zwei Inhaltsvalidierungsstufen für `url`-Eingaben. Zunächst gibt es das Standard-Validierungsniveau, das allen {{HTMLElement("input")}}s angeboten wird, welches automatisch sicherstellt, dass die Inhalte die Anforderungen erfüllen, um eine gültige URL zu sein. Aber es gibt auch die Möglichkeit, zusätzliche Filter hinzuzufügen, um sicherzustellen, dass Ihre eigenen speziellen Bedürfnisse erfüllt werden, sofern Sie welche haben.

> [!WARNING]
> Die HTML-Formularvalidierung ist _kein_ Ersatz für Skripte, die sicherstellen, dass die eingegebenen Daten im richtigen Format sind. Es ist viel zu einfach für jemanden, Änderungen am HTML vorzunehmen, die es ihm ermöglichen, die Validierung zu umgehen oder sie vollständig zu entfernen. Es ist auch möglich, dass jemand Ihr HTML vollständig umgeht und die Daten direkt an Ihren Server übermittelt. Wenn Ihr serverseitiger Code die empfangenen Daten nicht validiert, könnte es zu Katastrophen kommen, wenn falsch formatierte Daten (oder Daten, die zu groß sind, den falschen Typ haben usw.) in Ihre Datenbank eingegeben werden.

### Grundlegende Validierung

Browser, die den Eingabetyp `url` unterstützen, stellen automatisch sicher, dass nur Text, der dem Standardformat für URLs entspricht, in das Eingabefeld eingegeben wird.

Die Syntax einer URL ist ziemlich komplex. Sie wird durch den [URL Living Standard von WHATWG](https://url.spec.whatwg.org/) definiert und wird für Anfänger in unserem Artikel [Was ist eine URL?](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL) beschrieben.

### Eine URL erforderlich machen

Wie bereits erwähnt, um eine URL-Eingabe erforderlich zu machen, bevor das Formular abgeschickt werden kann (Sie können das Feld nicht leer lassen), müssen Sie lediglich das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut auf die Eingabe hinzufügen.

```html
<form>
  <input id="myURL" name="myURL" type="url" required />
  <button>Submit</button>
</form>
```

{{EmbedLiveSample("Making_a_URL_required", 600, 40)}}

Versuchen Sie, das obige Formular ohne eingegebenen Wert zu übermitteln, um zu sehen, was passiert.

### Muster-Validierung

Wenn Sie möchten, dass die eingegebene URL weiter eingeschränkt wird als nur "jeder String, der wie eine URL aussieht", können Sie das [`pattern`](/de/docs/Web/HTML/Element/input#pattern)-Attribut verwenden, um einen {{Glossary("regular_expression", "regulären Ausdruck")}} anzugeben, den der Wert erfüllen muss, um gültig zu sein.

Angenommen, Sie erstellen eine Support-Seite für Mitarbeiter von Myco, Inc., auf der sie die IT-Abteilung um Hilfe bitten können, wenn auf einer ihrer Seiten ein Problem auftritt. In unserem vereinfachten Formular muss der Benutzer die URL der Seite angeben, die ein Problem hat, und eine Nachricht beschreiben, was falsch ist. Aber wir möchten, dass die URL nur dann erfolgreich validiert wird, wenn die eingegebene URL in einer Myco-Domain liegt.

Da Eingaben des Typs `url` sowohl gegen die Standard-URL-Validierung _als auch_ gegen das angegebene [`pattern`](/de/docs/Web/HTML/Element/input#pattern) validieren, können Sie dies mit einem regulären Ausdruck umsetzen. Sehen wir uns an, wie:

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

Erstens ist das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut angegeben, wodurch es zwingend erforderlich ist, dass eine gültige URL angegeben wird.

Zweitens setzen wir in der `url`-Eingabe `pattern` auf `".*\.myco\..*"`. Dieser reguläre Ausdruck fordert einen String an, der beliebig viele Zeichen hat, gefolgt von einem Punkt, gefolgt von "myco", gefolgt von einem Punkt, gefolgt von beliebig vielen Zeichen. Da der Browser sowohl den Standard-URL-Filter _als auch_ unser benutzerdefiniertes Muster gegen den angegebenen Text ausführt, erhalten wir eine Validierung, die besagt "stellen Sie sicher, dass dies eine gültige URL ist und auch in der Myco-Domain liegt".

Das ist nicht perfekt, aber es ist gut genug für die Anforderungen dieses einfachen Demos.

Es ist ratsam, das [`title`](/de/docs/Web/HTML/Global_attributes/title)-Attribut zusammen mit `pattern` zu verwenden. Wenn Sie dies tun, _muss_ der `title` das Muster beschreiben; er sollte erklären, welches Format die Daten haben sollten, anstelle von Informationen anderer Art. Das liegt daran, dass der `title` möglicherweise als Teil einer Validierungsfehlermeldung angezeigt oder gesprochen wird. Zum Beispiel könnte der Browser die Meldung "Der eingegebene Text stimmt nicht mit dem erforderlichen Muster überein." gefolgt von Ihrem angegebenen `title` präsentieren. Wenn Ihr `title` so etwas wie "URL" ist, wäre das Ergebnis die Meldung "Der eingegebene Text stimmt nicht mit dem erforderlichen Muster überein. URL", was keine gute Benutzererfahrung wäre.

Deshalb geben wir stattdessen den String "Die URL muss in einer Myco-Domäne sein" an. Indem wir das tun, könnte die resultierende vollständige Fehlermeldung so etwas sein wie "Der eingegebene Text stimmt nicht mit dem erforderlichen Muster überein. Die URL sollte in einer Myco-Domäne sein."

> [!NOTE]
> Wenn Sie auf Schwierigkeiten stoßen, während Sie Ihre Validierungsregulären Ausdrücke schreiben und sie nicht richtig funktionieren, überprüfen Sie die Konsole Ihres Browsers; möglicherweise finden Sie dort nützliche Fehlermeldungen, die Ihnen helfen, das Problem zu lösen.

## Beispiele

Es gibt nicht viel mehr über `url`-Typ-Eingaben zu sagen. Sehen Sie sich die Abschnitte [Muster-Validierung](#muster-validierung) und [Verwendung von URL-Eingaben](#verwendung_von_url-eingaben) für zahlreiche Beispiele an.

Sie können auch unser [Muster-Validierungsbeispiel auf GitHub](https://github.com/mdn/learning-area/blob/main/html/forms/url-example/index.html) finden (sehen Sie es auch [live](https://mdn.github.io/learning-area/html/forms/url-example/)).

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
- [`<input type="tel">`](/de/docs/Web/HTML/Element/input/tel)
- [`<input type="email">`](/de/docs/Web/HTML/Element/input/email)
