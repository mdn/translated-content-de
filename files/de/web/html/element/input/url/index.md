---
title: <input type="url">
slug: Web/HTML/Element/input/url
l10n:
  sourceCommit: 816cc4d4a5a318a23222946b6981bb92b499aebb
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente des Typs **`url`** werden verwendet, um dem Benutzer das Eingeben und Bearbeiten einer URL zu ermöglichen.

{{EmbedInteractiveExample("pages/tabbed/input-url.html", "tabbed-shorter")}}

Der Eingabewert wird automatisch validiert, um sicherzustellen, dass er entweder leer oder eine korrekt formatierte URL ist, bevor das Formular abgeschickt werden kann. Die CSS-Pseudoklassen {{cssxref(":valid")}} und {{cssxref(":invalid")}} werden automatisch angewendet, um visuell anzuzeigen, ob der aktuelle Wert des Feldes eine gültige URL ist oder nicht.

## Wert

Das [`value`](/de/docs/Web/HTML/Element/input#value)-Attribut des {{HTMLElement("input")}}-Elements enthält eine Zeichenkette, die automatisch darauf überprüft wird, ob sie der URL-Syntax entspricht. Es gibt dabei zwei mögliche Wertformate, die die Validierung bestehen:

1. Eine leere Zeichenkette ("") zeigt an, dass der Benutzer keinen Wert eingegeben hat oder der Wert entfernt wurde.
2. Eine einzelne richtig geformte absolute URL. Dies bedeutet nicht notwendigerweise, dass die URL-Adresse existiert, aber sie ist zumindest korrekt formatiert. Ein Eintrag, der `urlscheme://rest-of-url` entspricht, kann gültig sein, auch wenn das eingegebene `urlscheme` nicht existiert.

Siehe [Validierung](#validierung) für Details dazu, wie URLs validiert werden, um sicherzustellen, dass sie korrekt formatiert sind.

## Zusätzliche Attribute

Zusätzlich zu den Attributen, die für alle {{HTMLElement("input")}}-Elemente unabhängig von ihrem Typ gelten, unterstützen `url`-Inputs die folgenden Attribute.

### list

Der Wert des list-Attributs ist die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements, das sich im selben Dokument befindet. Der {{HTMLElement("datalist")}} stellt eine Liste vordefinierter Werte bereit, die dem Benutzer für diese Eingabe vorgeschlagen werden. Werte, die in der Liste enthalten sind, aber nicht mit dem [`type`](/de/docs/Web/HTML/Element/input#type) kompatibel sind, werden nicht in die vorgeschlagenen Optionen aufgenommen. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Die Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert angeben.

### maxlength

Die maximale Zeichenlänge (gemessen in UTF-16 Codeeinheiten), die der Benutzer in das `url`-Eingabefeld eingeben kann. Dies muss ein ganzzahliger Wert von `0` oder höher sein. Wenn kein `maxlength` angegeben ist oder ein ungültiger Wert angegeben wird, hat das `url`-Eingabefeld keine maximale Länge. Dieser Wert muss auch größer oder gleich dem Wert von `minlength` sein.

Das Eingabefeld wird die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) nicht bestehen, wenn die Länge des Textwerts des Feldes größer als `maxlength` UTF-16 Codeeinheiten ist. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### minlength

Die minimale Zeichenlänge (gemessen in UTF-16 Codeeinheiten), die der Benutzer in das `url`-Eingabefeld eingeben kann. Dies muss ein nicht-negativer ganzzahliger Wert sein, der kleiner oder gleich dem durch `maxlength` angegebenen Wert ist. Wenn kein `minlength` angegeben ist oder ein ungültiger Wert angegeben wird, hat das `url`-Eingabefeld keine Mindestlänge.

Das Eingabefeld wird die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) nicht bestehen, wenn die Länge des in das Feld eingegebenen Textes weniger als `minlength` UTF-16 Codeeinheiten beträgt. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### pattern

Das `pattern`-Attribut, wenn angegeben, ist ein regulärer Ausdruck, den der [`value`](/de/docs/Web/HTML/Element/input#value) des Eingabefeldes erfüllen muss, damit der Wert die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) besteht. Es muss ein gültiger JavaScript-Regulärausdruck sein, wie er durch den {{jsxref("RegExp")}}-Typ verwendet wird und wie in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert ist; das `'u'`-Flag wird beim Kompilieren des regulären Ausdrucks angegeben, sodass das Muster als Folge von Unicode-Codepunkten behandelt wird, anstatt als {{Glossary("ASCII", "ASCII")}}. Um den Text des Musters sollten keine Schrägstriche angegeben werden.

Wenn das angegebene Muster nicht angegeben oder ungültig ist, wird kein regulärer Ausdruck angewendet und dieses Attribut vollständig ignoriert.

> [!NOTE]
> Verwenden Sie das [`title`](/de/docs/Web/HTML/Element/input#title)-Attribut, um Text zu spezifizieren, den die meisten Browser als Tooltip anzeigen, um zu erklären, was die Anforderungen sind, um das Muster zu erfüllen. Sie sollten auch anderen erklärenden Text in der Nähe hinzufügen.

Siehe den Abschnitt [Muster-Validierung](#muster-validierung) für Details und ein Beispiel.

### placeholder

Das `placeholder`-Attribut ist eine Zeichenkette, die dem Benutzer einen kurzen Hinweis darauf gibt, welche Art von Informationen im Feld erwartet wird. Es sollte sich um ein Wort oder eine kurze Phrase handeln, die den erwarteten Datentyp demonstriert, anstatt eine erklärende Nachricht. Der Text _darf_ keine Wagenrückläufe oder Zeilenumbrüche enthalten.

Wenn der Inhalt des Steuerelements eine Richtung hat ({{Glossary("LTR", "LTR")}} oder {{Glossary("RTL", "RTL")}}), der Platzhalter jedoch in der entgegengesetzten Richtung angezeigt werden muss, können Sie Unicode-Bidi-Algorithmus-Formatierungszeichen verwenden, um die Richtung im Platzhalter zu überschreiben; siehe [Anleitung zur Verwendung von Unicode-Steuerungen für bidi-Text](https://www.w3.org/International/questions/qa-bidi-unicode-controls) für weitere Informationen.

> [!NOTE]
> Vermeiden Sie es, das `placeholder`-Attribut zu verwenden, wenn Sie können. Es ist semantisch nicht so nützlich wie andere Methoden zur Erklärung Ihres Formulars und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Siehe [`<input>`-Labels](/de/docs/Web/HTML/Element/input#labels) für weitere Informationen.

### readonly

Das [`readonly`](/de/docs/Web/HTML/Attributes/readonly)-Attribut, ein boolesches Attribut, bedeutet, dass dieses Feld, falls vorhanden, vom Benutzer nicht bearbeitet werden kann. Sein `value` kann jedoch weiterhin direkt durch JavaScript-Code geändert werden, indem die `value`-Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) gesetzt wird.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat [`required`](/de/docs/Web/HTML/Attributes/required) keine Wirkung auf Eingabefelder mit dem ebenfalls angegebenen `readonly`-Attribut.

### size

Das `size`-Attribut ist ein numerischer Wert, der angibt, wie viele Zeichen breit das Eingabefeld sein sollte. Der Wert muss eine Zahl größer als Null sein und der Standardwert ist 20. Da Zeichenbreiten variieren, kann dies mehr oder weniger genau sein und sollte nicht darauf verlassen werden, dass es so ist; das resultierende Eingabefeld kann schmaler oder breiter als die angegebene Anzahl von Zeichen sein, abhängig von den Zeichen und den Schriftart-({{cssxref("font")}})-Einstellungen, die in Gebrauch sind.

Dies setzt _kein_ Limit dafür, wie viele Zeichen der Benutzer in das Feld eingeben kann. Es gibt nur an, wie viele ungefähr gleichzeitig gesehen werden können. Um ein oberes Limit für die Länge der Eingabedaten festzulegen, verwenden Sie das [`maxlength`](#maxlength)-Attribut.

### spellcheck

Das [`spellcheck`](/de/docs/Web/HTML/Global_attributes/spellcheck)-globale Attribut wird verwendet, um anzugeben, ob die Rechtschreibprüfung für ein Element aktiviert werden soll. Es kann auf jedem bearbeitbaren Inhalt verwendet werden, aber hier betrachten wir spezifische Details zur Verwendung von `spellcheck` mit {{HTMLElement("input")}}-Elementen. Die erlaubten Werte für `spellcheck` sind:

- `false`
  - : Deaktiviert die Rechtschreibprüfung für dieses Element.
- `true`
  - : Aktiviert die Rechtschreibprüfung für dieses Element.
- "" (leere Zeichenkette) oder kein Wert
  - : Folge dem Standardverhalten des Elements für die Rechtschreibprüfung. Dies kann auf einer übergeordneten `spellcheck`-Einstellung oder anderen Faktoren basieren.

Ein Eingabefeld kann die Rechtschreibprüfung aktiviert haben, wenn das [readonly](#readonly)-Attribut nicht gesetzt ist und es nicht deaktiviert ist.

Der zurückgegebene Wert bei der Leseoperation `spellcheck` spiegelt möglicherweise nicht den tatsächlichen Zustand der Rechtschreibprüfung in einem Steuerelement wider, wenn die Einstellungen des {{Glossary("user_agent", "Benutzeragenten")}} die Einstellung überschreiben.

## Nicht-standardmäßige Attribute

Die folgenden nicht-standardmäßigen Attribute sind ebenfalls in einigen Browsern verfügbar. Als allgemeine Regel sollten Sie deren Verwendung vermeiden, es sei denn, es ist nicht anders möglich.

### autocorrect

Eine Safari-Erweiterung, das `autocorrect`-Attribut ist eine Zeichenkette, die angibt, ob automatische Korrektur aktiviert werden soll, während der Benutzer dieses Feld bearbeitet. Zugelassene Werte sind:

- `on`
  - : Aktiviert die automatische Korrektur von Tippfehlern sowie die Verarbeitung von Textsubstitutionen, wenn welche konfiguriert sind.
- `off`
  - : Deaktiviert die automatische Korrektur und Textsubstitutionen.

## Verwendung von URL-Eingaben

Wenn Sie eine URL-Eingabe mit dem richtigen `type`-Wert, `url`, erstellen, erhalten Sie eine automatische Validierung, die sicherstellt, dass der eingegebene Text zumindest in der korrekten Form ist, um möglicherweise eine legitime URL darzustellen. Dies kann helfen, Fälle zu vermeiden, in denen der Benutzer die Adresse seiner Website falsch eingibt oder eine ungültige Adresse angibt.

Es ist jedoch wichtig zu beachten, dass dies nicht ausreicht, um sicherzustellen, dass der angegebene Text eine URL ist, die tatsächlich existiert, zum Benutzer der Website gehört oder in irgendeiner Weise akzeptabel ist. Es stellt lediglich sicher, dass der Wert des Feldes korrekt formatiert ist, um eine URL zu sein.

> [!NOTE]
> Ein Benutzer kann an Ihrer HTML im Hintergrund arbeiten, daher _darf_ Ihre Seite diese Validierung nicht für Sicherheitszwecke verwenden. Sie _müssen_ die URL auf der Serverseite jeder Transaktion, bei der der bereitgestellte Text irgendwelche Sicherheitsimplikationen haben könnte, verifizieren.

### Eine einfache URL-Eingabe

Dieses Element wird als ein Standard-Text-Eingabefeld mit grundlegenden Validierungsfunktionen implementiert. In seiner einfachsten Form kann eine URL-Eingabe so implementiert werden:

```html
<input id="myURL" name="myURL" type="url" />
```

{{EmbedLiveSample('A_simple_URL_input', 600, 40)}}

Beachten Sie, dass es als gültig angesehen wird, wenn es leer ist und wenn eine einzelne gültig formatierte URL-Adresse eingegeben wird, aber ansonsten nicht als gültig angesehen wird. Durch Hinzufügen des [`required`](/de/docs/Web/HTML/Element/input#required)-Attributs sind nur richtig geformte URLs erlaubt; die Eingabe wird nicht mehr als gültig angesehen, wenn sie leer ist.

Hier passiert nichts Magisches. Das Absenden dieses Formulars würde die folgenden Daten an den Server senden: `myURL=http%3A%2F%2Fwww.example.com`. Beachten Sie, wie Zeichen bei Bedarf umgewandelt werden.

### Platzhalter

Manchmal ist es hilfreich, einen kontextbezogenen Hinweis darauf zu geben, in welcher Form die Eingabedaten vorliegen sollten. Dies kann besonders wichtig sein, wenn das Seitendesign keine beschreibenden Labels für jedes {{HTMLElement("input")}} bietet. Hier kommen **Platzhalter** ins Spiel. Ein Platzhalter ist ein Wert, der die Form aufzeigt, die der `value` annehmen sollte, indem ein Beispiel für einen gültigen Wert angezeigt wird, der innerhalb des Bearbeitungsfeldes angezeigt wird, wenn der `value` des Elements "" ist. Sobald Daten in das Feld eingegeben werden, verschwindet der Platzhalter; wenn das Feld geleert wird, erscheint der Platzhalter wieder.

Hier haben wir eine `url`-Eingabe mit dem Platzhalter `http://www.example.com`. Beachten Sie, wie der Platzhalter verschwindet und erneut erscheint, wenn Sie den Inhalt des Bearbeitungsfeldes manipulieren.

```html
<input
  id="myURL"
  name="myURL"
  type="url"
  placeholder="http://www.example.com" />
```

{{EmbedLiveSample('Placeholders', 600, 40)}}

### Steuerung der Eingabegröße

Sie können sowohl die physische Länge des Eingabefeldes als auch die minimal und maximal zulässigen Längen für den eingegebenen Text steuern.

#### Physische Eingabeelementgröße

Die physische Größe des Eingabefeldes kann mit dem [`size`](/de/docs/Web/HTML/Element/input#size)-Attribut gesteuert werden. Mit ihm können Sie die Anzahl der Zeichen angeben, die das Eingabefeld gleichzeitig anzeigen kann. In diesem Beispiel ist das `url`-Bearbeitungsfeld 30 Zeichen breit:

```html
<input id="myURL" name="myURL" type="url" size="30" />
```

{{EmbedLiveSample('Physical_input_element_size', 600, 40)}}

#### Länge des Elementwerts

Die `size` ist separat von der Längenbegrenzung für die eingegebene URL selbst. Sie können eine Mindestlänge, in Zeichen, für die eingegebene URL mit dem [`minlength`](/de/docs/Web/HTML/Element/input#minlength)-Attribut spezifizieren; entsprechend verwenden Sie [`maxlength`](/de/docs/Web/HTML/Element/input#maxlength), um die maximale Länge der eingegebenen URL festzulegen. Wenn `maxLength` die `size` übersteigt, scrollen die Inhalte des Eingabefeldes bei Bedarf, um die aktuelle Auswahl oder die Einfügeposition zu zeigen, während der Inhalt bearbeitet wird.

Das folgende Beispiel erstellt ein 30 Zeichen breites Eingabefeld für URL-Adressen, das verlangt, dass der Inhalt nicht kürzer als 10 Zeichen und nicht länger als 80 Zeichen ist.

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
> Diese Attribute beeinflussen auch die Validierung; ein Wert, der kürzer oder länger als die angegebene Mindest- oder Höchstlänge ist, wird als ungültig eingestuft; darüber hinaus verweigern die meisten Browser dem Benutzer das Eingeben eines Wertes, der länger als die angegebene Maximallänge ist.

### Bereitstellung von Standardoptionen

#### Bereitstellung eines einzelnen Standards mit dem Wert-Attribut

Wie gewohnt, können Sie einen Standardwert für ein `url`-Eingabefeld bereitstellen, indem Sie das [`value`](/de/docs/Web/HTML/Element/input#value)-Attribut setzen:

```html
<input id="myURL" name="myURL" type="url" value="http://www.example.com" />
```

{{EmbedLiveSample("Providing_a_single_default_using_the_value_attribute", 600, 40)}}

#### Anbieten vorgeschlagener Werte

Wenn Sie einen Schritt weitergehen, können Sie eine Liste von Standardoptionen anbieten, aus denen der Benutzer wählen kann, indem Sie das [`list`](/de/docs/Web/HTML/Element/input#list)-Attribut angeben. Dies beschränkt den Benutzer nicht auf diese Optionen, ermöglicht jedoch das schnellere Auswählen häufig verwendeter URLs. Dies bietet auch Hinweise auf [`autocomplete`](/de/docs/Web/HTML/Element/input#autocomplete). Das `list`-Attribut spezifiziert die ID eines {{HTMLElement("datalist")}}, der wiederum ein {{HTMLElement("option")}}-Element pro vorgeschlagenen Wert enthält; der `value` jedes `option` ist der entsprechende vorgeschlagene Wert für das URL-Eingabefeld.

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

Mit dem {{HTMLElement("datalist")}}-Element und dessen {{HTMLElement("option")}}s an Ort und Stelle wird der Browser die angegebenen Werte als potenzielle Werte für die URL anbieten; dies wird typischerweise als Popup- oder Dropdown-Menü mit den Vorschlägen präsentiert. Während das spezifische Benutzererlebnis von einem Browser zum anderen unterschiedlich sein kann, führt normalerweise ein Klick in das Bearbeitungsfeld dazu, dass ein Dropdown mit den vorgeschlagenen URLs angezeigt wird. Dann, während der Benutzer tippt, wird die Liste so angepasst, dass nur passende Werte angezeigt werden. Jeder eingegebene Buchstabe schränkt die Liste weiter ein, bis der Benutzer eine Auswahl trifft oder einen benutzerdefinierten Wert eingibt.

#### Verwendung von Labels für vorgeschlagene Werte

Sie können wählen, das [`label`](/de/docs/Web/HTML/Element/option#label)-Attribut bei einem oder allen Ihrer `<option>`-Elemente einzubeziehen, um textliche Labels bereitzustellen. Einige Browser zeigen möglicherweise nur die Labels an, während andere sowohl das Label als auch die URL anzeigen.

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

Für `url`-Eingaben stehen zwei Ebenen der Inhaltsvalidierung zur Verfügung. Erstens gibt es das Standardniveau der Validierung, das allen {{HTMLElement("input")}}s angeboten wird, das automatisch sicherstellt, dass der Inhalt die Anforderungen erfüllt, eine gültige URL zu sein. Sie haben jedoch auch die Möglichkeit, zusätzliche Filter hinzuzufügen, um sicherzustellen, dass Ihre speziellen Bedürfnisse erfüllt werden, falls Sie welche haben.

> [!WARNING]
> HTML-Formularvalidierung ist _kein_ Ersatz für Skripte, die sicherstellen, dass die eingegebenen Daten im richtigen Format vorliegen. Es ist viel zu einfach für jemanden, Anpassungen an Ihrem HTML vorzunehmen, die es ihm ermöglichen, die Validierung zu umgehen oder sie vollständig zu entfernen. Es ist auch möglich, dass jemand Ihr HTML vollständig umgehen und die Daten direkt an Ihren Server übermitteln kann. Wenn Ihr serverseitiger Code die empfangenen Daten nicht validiert, könnte eine Katastrophe eintreten, wenn falsch formatierte Daten (oder Daten, die zu groß sind, vom falschen Typ sind und so weiter) in Ihre Datenbank eingegeben werden.

### Grundlegende Validierung

Browser, die den `url`-Eingabetyp unterstützen, bieten automatisch eine Validierung, um sicherzustellen, dass nur Text, der dem Standardformat für URLs entspricht, in das Eingabefeld eingegeben wird.

Die Syntax einer URL ist ziemlich kompliziert. Sie wird durch den URL-Living-Standard der WHATWG definiert und wird für Anfänger in unserem Artikel [Was ist eine URL?](/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL) beschrieben.

### Eine URL erforderlich machen

Wie bereits erwähnt, um einen URL-Eintrag erforderlich zu machen, bevor das Formular abgeschickt werden kann (das Feld kann nicht leer bleiben), müssen Sie lediglich das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut bei der Eingabe hinzufügen.

```html
<form>
  <input id="myURL" name="myURL" type="url" required />
  <button>Submit</button>
</form>
```

{{EmbedLiveSample("Making_a_URL_required", 600, 40)}}

Versuchen Sie, das obige Formular ohne eingegebenen Wert abzuschicken, um zu sehen, was passiert.

### Muster-Validierung

Wenn Sie möchten, dass die eingegebene URL weiter eingeschränkt wird als nur "jede Zeichenkette, die wie eine URL aussieht", können Sie das [`pattern`](/de/docs/Web/HTML/Element/input#pattern)-Attribut verwenden, um einen {{Glossary("regular_expression", "regulären Ausdruck")}} anzugeben, den der Wert erfüllen muss, damit der Wert gültig ist.

Angenommen, Sie erstellen eine Support-Seite für Mitarbeiter von Myco, Inc., mit der sie sich an die IT-Abteilung wenden können, wenn eine ihrer Seiten ein Problem hat. In unserem vereinfachten Formular muss der Benutzer die URL der Seite eingeben, die ein Problem hat, und eine Nachricht beschreiben, was falsch ist. Aber wir wollen, dass die URL nur erfolgreich validiert wird, wenn die eingegebene URL in einer Myco-Domain ist.

Da Eingaben des Typs `url` sowohl gegen den Standard-URL-Filter als auch das angegebene `pattern` validiert werden, können Sie dies mit einem regulären Ausdruck implementieren. Schauen wir uns an, wie:

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

Erstens ist das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut angegeben, das es zwingend macht, dass eine gültige URL bereitgestellt wird.

Zweitens, in der `url`-Eingabe setzen wir das `pattern` auf `".*\.myco\..*"`. Dieser reguläre Ausdruck fordert eine Zeichenkette, die irgendeine Anzahl von Zeichen hat, gefolgt von einem Punkt, gefolgt von "myco", gefolgt von einem Punkt, gefolgt von irgendeiner Anzahl von Zeichen. Da der Browser sowohl den Standard-URL-Filter als auch unser eigenes Muster gegen den angegebenen Text laufen lässt, haben wir eine Validierung, die sagt: "Stellen Sie sicher, dass dies eine gültige URL ist und außerdem in einer Myco-Domain."

Das ist nicht perfekt, aber es ist gut genug für die Anforderungen dieses einfachen Demos.

Es wird empfohlen, das [`title`](/de/docs/Web/HTML/Global_attributes/title)-Attribut zusammen mit `pattern` zu verwenden. Wenn Sie das tun, _muss_ das `title` das Muster beschreiben; es sollte erklären, in welchem Format die Daten vorliegen sollen, anstatt andere Informationen. Das liegt daran, dass das `title` möglicherweise als Teil einer Validierungsfehlermeldung angezeigt oder vorgelesen wird. Zum Beispiel könnte der Browser die Nachricht "Der eingegebene Text entspricht nicht dem erforderlichen Muster." gefolgt von Ihrem angegebenen `title` präsentieren. Wenn Ihr `title` etwas wie "URL" ist, wäre das Ergebnis die Nachricht "Der eingegebene Text entspricht nicht dem erforderlichen Muster. URL", was keine gute Benutzererfahrung ist.

Deshalb spezifizieren wir stattdessen den String "Die URL muss in einer Myco-Domain sein". Durch das Tun dessen könnte die resultierende vollständige Fehlermeldung so lauten: "Der eingegebene Text entspricht nicht dem erforderlichen Muster. Die URL sollte in einer Myco-Domain sein."

> [!NOTE]
> Wenn Sie auf Probleme beim Schreiben Ihrer Validierungsregulärausdrücke stoßen und diese nicht richtig funktionieren, überprüfen Sie die Konsole Ihres Browsers; dort könnten hilfreiche Fehlermeldungen zu finden sein, die Ihnen bei der Lösung des Problems helfen.

## Beispiele

Es gibt nicht viel mehr über Eingaben vom Typ `url` zu sagen; werfen Sie einen Blick auf die Abschnitte [Muster-Validierung](#muster-validierung) und [Verwendung von URL-Eingaben](#verwendung_von_url-eingaben) für zahlreiche Beispiele.

Sie können auch unser [Beispiel zur Muster-Validierung auf GitHub](https://github.com/mdn/learning-area/blob/main/html/forms/url-example/index.html) finden (siehe es auch [live ausgeführt](https://mdn.github.io/learning-area/html/forms/url-example/)).

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
      <td><strong>Implizierte ARIA-Rolle</strong></td>
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

- [HTML-Formular-Leitfaden](/de/docs/Learn/Forms)
- {{HTMLElement("input")}}
- [`<input type="tel">`](/de/docs/Web/HTML/Element/input/tel)
- [`<input type="email">`](/de/docs/Web/HTML/Element/input/email)
- [Kompatibilität von CSS-Eigenschaften](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
