---
title: <input type="url">
slug: Web/HTML/Element/input/url
l10n:
  sourceCommit: cd56d512284c5765f115cb002c1be5d23e7281d2
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente vom Typ **`url`** werden verwendet, um dem Benutzer die Eingabe und Bearbeitung einer URL zu ermöglichen.

{{EmbedInteractiveExample("pages/tabbed/input-url.html", "tabbed-shorter")}}

Der Eingabewert wird automatisch validiert, um sicherzustellen, dass er entweder leer oder eine korrekt formatierte URL ist, bevor das Formular gesendet werden kann. Die CSS-Pseudoklassen {{cssxref(":valid")}} und {{cssxref(":invalid")}} werden automatisch angewendet, um visuell anzuzeigen, ob der aktuelle Wert des Feldes eine gültige URL darstellt oder nicht.

## Wert

Das [`value`](/de/docs/Web/HTML/Element/input#value)-Attribut des {{HTMLElement("input")}}-Elements enthält einen String, der automatisch auf die Einhaltung der URL-Syntax validiert wird. Genauer gesagt gibt es zwei mögliche Wertformate, die die Validierung bestehen:

1. Ein leerer String („“), der anzeigt, dass der Benutzer keinen Wert eingegeben hat oder dass der Wert entfernt wurde.
2. Eine korrekt formulierte absolute URL. Dies bedeutet nicht unbedingt, dass die URL-Adresse existiert, aber zumindest ist sie korrekt formatiert. Ein Eintrag, der `urlscheme://restofurl` entspricht, kann gültig sein, selbst wenn das eingegebene `urlscheme` nicht existiert.

Im Abschnitt [Validierung](#validierung) finden Sie Details dazu, wie URLs validiert werden, um sicherzustellen, dass sie korrekt formatiert sind.

## Zusätzliche Attribute

Zusätzlich zu den Attributen, die auf alle {{HTMLElement("input")}}-Elemente unabhängig von ihrem Typ wirken, unterstützen `url`-Eingaben die folgenden Attribute.

### list

Der Wert des list-Attributs ist die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements, das sich im selben Dokument befindet. Die {{HTMLElement("datalist")}} bietet eine Liste vordefinierter Werte, die dem Benutzer für diese Eingabe vorgeschlagen werden. Werte in der Liste, die nicht kompatibel mit dem [`type`](/de/docs/Web/HTML/Element/input#type) sind, werden nicht in die vorgeschlagenen Optionen aufgenommen. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert angeben.

### maxlength

Die maximale Zeichenlänge (gemessen in UTF-16-Codeeinheiten), die der Benutzer in das `url`-Eingabefeld eingeben kann. Dies muss ein Ganzzahlenwert von 0 oder höher sein. Wenn kein `maxlength` angegeben ist oder ein ungültiger Wert angegeben ist, hat das `url`-Eingabefeld keine maximale Länge. Dieser Wert muss auch größer oder gleich dem Wert von `minlength` sein.

Die Eingabe wird die [Constraint-Validierung](/de/docs/Web/HTML/Constraint_validation) nicht bestehen, wenn die Länge des Textwerts des Feldes größer als `maxlength`-UTF-16-Codereinheiten ist. Constraint-Validierung wird nur angewendet, wenn der Wert durch den Benutzer geändert wird.

### minlength

Die minimale Zeichenlänge (gemessen in UTF-16-Codeeinheiten), die der Benutzer in das `url`-Eingabefeld eingeben kann. Dies muss ein nicht-negativer Ganzzahlenwert sein, der kleiner oder gleich dem durch `maxlength` angegebenen Wert ist. Wenn kein `minlength` angegeben ist oder ein ungültiger Wert angegeben ist, hat das `url`-Eingabefeld keine Mindestlänge.

Die Eingabe wird die [Constraint-Validierung](/de/docs/Web/HTML/Constraint_validation) nicht bestehen, wenn die Länge des in das Feld eingegebenen Textes weniger Zeichen als `minlength`-UTF-16-Codereinheiten hat. Constraint-Validierung wird nur angewendet, wenn der Wert durch den Benutzer geändert wird.

### pattern

Das `pattern`-Attribut, wenn angegeben, ist ein regulärer Ausdruck, den der [`value`](/de/docs/Web/HTML/Element/input#value) der Eingabe erfüllen muss, damit der Wert die [Constraint-Validierung](/de/docs/Web/HTML/Constraint_validation) besteht. Es muss ein gültiger regulärer Ausdruck in JavaScript sein, wie er vom {{jsxref("RegExp")}}-Typ verwendet wird, und wie in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert; das `'u'`-Flag wird beim Kompilieren des regulären Ausdrucks angegeben, sodass das Muster als eine Folge von Unicode-Zeichencodes behandelt wird, anstatt als [ASCII](/de/docs/Glossary/ASCII). Um das Muster herum sollten keine Schrägstriche angegeben werden.

Wenn das angegebene Muster nicht angegeben oder ungültig ist, wird kein regulärer Ausdruck angewendet und dieses Attribut wird vollständig ignoriert.

> [!NOTE]
> Verwenden Sie das [`title`](/de/docs/Web/HTML/Element/input#title)-Attribut, um Text anzugeben, den die meisten Browser als Tooltip anzeigen, um zu erklären, was die Anforderungen sind, um das Muster zu erfüllen. Sie sollten auch weiteren erläuternden Text in der Nähe einfügen.

Siehe den Abschnitt [Pattern Validation](#pattern-validierung) für Details und ein Beispiel.

### placeholder

Das `placeholder`-Attribut ist ein String, der dem Benutzer einen kurzen Hinweis darauf bietet, welche Art von Informationen im Feld erwartet werden. Es sollte ein Wort oder eine kurze Phrase sein, die den erwarteten Datentyp demonstriert, anstatt eine erläuternde Nachricht. Der Text _darf keine_ Wagenrückläufe oder Zeilenumbrüche enthalten.

Wenn der Inhalt des Steuerungselements eine Richtung ([LTR](/de/docs/Glossary/LTR) oder [RTL](/de/docs/Glossary/RTL)) aufweist, der Platzhalter aber in der entgegengesetzten Richtung angezeigt werden muss, können Sie Zeichen zur Formatierung des Unicode-Bidi-Algorithmus verwenden, um die Richtung im Platzhalter zu überschreiben; siehe [Anleitung zur Verwendung von Unicode-Steuerungen für bidi-Text](https://www.w3.org/International/questions/qa-bidi-unicode-controls) für weitere Informationen.

> [!NOTE]
> Vermeiden Sie die Verwendung des `placeholder`-Attributs, wenn Sie können. Es ist nicht so semantisch nützlich wie andere Möglichkeiten, Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Siehe [`<input>`-Labels](/de/docs/Web/HTML/Element/input#labels) für weitere Informationen.

### readonly

Das [Boolean-Attribut `readonly`](/de/docs/Web/HTML/Attributes/readonly), wenn vorhanden, bedeutet, dass dieses Feld vom Benutzer nicht bearbeitet werden kann. Sein `value` kann jedoch weiterhin geändert werden, indem JavaScript-Code direkt die `value`-Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) festlegt.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat [`required`](/de/docs/Web/HTML/Attributes/required) keine Wirkung auf Eingaben, bei denen das `readonly`-Attribut ebenfalls angegeben ist.

### size

Das `size`-Attribut ist ein numerischer Wert, der angibt, wie viele Zeichen breit das Eingabefeld sein soll. Der Wert muss eine Zahl größer als null sein, und der Standardwert ist 20. Da Zeichenbreiten variieren, kann dies mehr oder weniger genau sein und sollte nicht darauf verlassen werden, dass es so ist; das resultierende Eingabefeld kann schmaler oder breiter sein als die angegebene Anzahl von Zeichen, abhängig von den Zeichen und der Schrift ({{cssxref("font")}}-Einstellungen in Gebrauch).

Dies setzt _kein_ Limit dafür, wie viele Zeichen der Benutzer in das Feld eingeben kann. Es gibt nur ungefähr an, wie viele gleichzeitig zu sehen sind. Um eine obere Grenze für die Länge der Eingabedaten festzulegen, verwenden Sie das [`maxlength`](#maxlength)-Attribut.

### spellcheck

Das [globale Attribut `spellcheck`](/de/docs/Web/HTML/Global_attributes/spellcheck) wird verwendet, um festzulegen, ob die Rechtschreibprüfung für ein Element aktiviert werden soll. Es kann für jeden bearbeitbaren Inhalt verwendet werden, aber hier betrachten wir die Details zur Verwendung von `spellcheck` bei {{HTMLElement("input")}}-Elementen. Die zulässigen Werte für `spellcheck` sind:

- `false`
  - : Deaktivieren Sie die Rechtschreibprüfung für dieses Element.
- `true`
  - : Aktivieren Sie die Rechtschreibprüfung für dieses Element.
- "" (leerer String) oder kein Wert
  - : Folgen Sie dem Standardverhalten des Elements für die Rechtschreibprüfung. Dies kann auf den `spellcheck`-Einstellungen eines übergeordneten Elements oder anderen Faktoren basieren.

Ein Eingabefeld kann die Rechtschreibprüfung aktiviert haben, wenn es nicht das [readonly](#readonly)-Attribut gesetzt hat und nicht deaktiviert ist.

Der beim Lesen von `spellcheck` zurückgegebene Wert könnte nicht den tatsächlichen Zustand der Rechtschreibprüfung innerhalb eines Steuerungselements widerspiegeln, wenn die Präferenzen des [Benutzeragenten](/de/docs/Glossary/user_agent) die Einstellung übersteuern.

## Nicht-standardisierte Attribute

Die folgenden nicht-standardisierten Attribute sind auch in einigen Browsern verfügbar. Generell sollten Sie deren Verwendung vermeiden, es sei denn, es lässt sich nicht vermeiden.

### autocorrect

Eine Safari-Erweiterung, das `autocorrect`-Attribut ist ein String, der angibt, ob während der Bearbeitung des Feldes die automatische Korrektur aktiviert wird. Zulässige Werte sind:

- `on`
  - : Aktivieren Sie die automatische Korrektur von Tippfehlern sowie die Verarbeitung von Textersatz, falls welche konfiguriert sind.
- `off`
  - : Deaktivieren Sie die automatische Korrektur und Textersetzungen.

## Verwendung von URL-Eingaben

Wenn Sie eine URL-Eingabemöglichkeit mit dem richtigen `type`-Wert `url` erstellen, erhalten Sie eine automatische Validierung, die sicherstellt, dass der eingegebene Text zumindest die richtige Form hat, um möglicherweise eine legitime URL zu sein. Dies kann helfen, Fälle zu vermeiden, in denen der Benutzer die Adresse seiner Website falsch eingibt oder eine ungültige URL angibt.

Es ist jedoch wichtig zu beachten, dass dies nicht ausreicht, um sicherzustellen, dass der angegebene Text eine URL ist, die tatsächlich existiert, dem Benutzer der Website entspricht oder in irgendeiner Weise akzeptabel ist. Es stellt nur sicher, dass der Wert des Feldes ordnungsgemäß formatiert ist, um eine URL zu sein.

> [!NOTE]
> Ein Benutzer kann im Hintergrund mit Ihrem HTML herumspielen, daher darf Ihre Website diese Validierung nicht für Sicherheitszwecke verwenden. Sie müssen die URL auf der Serverseite jeder Transaktion überprüfen, bei der der bereitgestellte Text Sicherheitsimplikationen jeglicher Art haben könnte.

### Eine einfache URL-Eingabe

Dieses Element wird als normales Texteingabefeld mit grundlegenden Validierungsfunktionen implementiert. In seiner grundlegendsten Form kann eine URL-Eingabe so implementiert werden:

```html
<input id="myURL" name="myURL" type="url" />
```

{{ EmbedLiveSample('A_simple_URL_input', 600, 40) }}

Beachten Sie, dass es als gültig angesehen wird, wenn es leer ist und wenn eine einzelne gültig formatierte URL-Adresse eingegeben wird, ansonsten jedoch nicht als gültig gilt. Durch Hinzufügen des [`required`](/de/docs/Web/HTML/Element/input#required)-Attributs sind nur ordnungsgemäß formatierte URLs zulässig; die Eingabe wird nicht mehr als gültig angesehen, wenn sie leer ist.

Es passiert nichts Magisches. Durch das Einreichen dieses Formulars würden die folgenden Daten an den Server gesendet: `myURL=http%3A%2F%2Fwww.example.com`. Beachten Sie, wie Zeichen bei Bedarf maskiert werden.

### Platzhalter

Manchmal ist es hilfreich, einen kontextuellen Hinweis darauf zu geben, welche Form die Eingabedaten haben sollten. Dies kann besonders wichtig sein, wenn das Seitendesign keine beschreibenden Labels für jedes {{HTMLElement("input")}}-Element bietet. Hier kommen **Platzhalter** ins Spiel. Ein Platzhalter ist ein Wert, der die Form des `value` demonstriert, indem er ein Beispiel für einen gültigen Wert anzeigt, der innerhalb des Bearbeitungsfelds angezeigt wird, wenn der `value` des Elements „“ ist. Sobald Daten in das Feld eingegeben werden, verschwindet der Platzhalter; Wenn das Feld geleert wird, erscheint der Platzhalter erneut.

Hier haben wir ein `url`-Eingabefeld mit dem Platzhalter `http://www.example.com`. Beachten Sie, wie der Platzhalter verschwindet und wieder erscheint, während Sie den Inhalt des Bearbeitungsfelds manipulieren.

```html
<input
  id="myURL"
  name="myURL"
  type="url"
  placeholder="http://www.example.com" />
```

{{ EmbedLiveSample('Placeholders', 600, 40) }}

### Steuerung der Eingabegröße

Sie können sowohl die physische Länge des Eingabefeldes als auch die minimal und maximal zulässigen Längen für den Eingabetext steuern.

#### Physische Größe des Eingabeelements

Die physische Größe des Eingabefelds kann durch das [`size`](/de/docs/Web/HTML/Element/input#size)-Attribut gesteuert werden. Damit können Sie die Anzahl der Zeichen spezifizieren, die das Eingabefeld gleichzeitig anzeigen kann. In diesem Beispiel ist das `url`-Bearbeitungsfeld z.B. 30 Zeichen breit:

```html
<input id="myURL" name="myURL" type="url" size="30" />
```

{{ EmbedLiveSample('Physical_input_element_size', 600, 40) }}

#### Elementwertlänge

Die `size` ist von der Längenbeschränkung für die eingegebene URL selbst getrennt. Sie können eine Mindestlänge in Zeichen für die eingegebene URL mittels des [`minlength`](/de/docs/Web/HTML/Element/input#minlength)-Attributs festlegen; ähnlich verwenden Sie [`maxlength`](/de/docs/Web/HTML/Element/input#maxlength), um die maximale Länge der eingegebenen URL festzulegen. Wenn `maxlength` die `size` überschreitet, werden die Inhalte des Eingabefeldes bei Bedarf durch Blättern angezeigt, um die aktuelle Auswahl oder den Einfügepunkt zu zeigen, während der Inhalt manipuliert wird.

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

{{EmbedLiveSample("Element_value_length", 600, 40) }}

> [!NOTE]
> Diese Attribute beeinflussen auch die Validierung; ein kürzerer oder längerer Wert als die angegebenen Minimal-/Maximallängen wird als ungültig klassifiziert; die meisten Browser werden außerdem dem Benutzer nicht erlauben, einen Wert länger als die angegebene Maximallänge einzugeben.

### Standardoptionen bereitstellen

#### Bereitstellung eines einzelnen Standards mit dem value-Attribut

Wie immer können Sie einen Standardwert für ein `url`-Eingabefeld bereitstellen, indem Sie sein [`value`](/de/docs/Web/HTML/Element/input#value)-Attribut setzen:

```html
<input id="myURL" name="myURL" type="url" value="http://www.example.com" />
```

{{EmbedLiveSample("Providing_a_single_default_using_the_value_attribute", 600, 40)}}

#### Vorschlagswerte anbieten

Ein Schritt weiter, können Sie eine Liste von Standardoptionen angeben, aus denen der Benutzer auswählen kann, indem Sie das [`list`](/de/docs/Web/HTML/Element/input#list)-Attribut spezifizieren. Dies beschränkt den Benutzer nicht auf diese Optionen, aber es ermöglicht ihm, häufig verwendete URLs schneller auszuwählen. Dies bietet auch Hinweise für [`autocomplete`](/de/docs/Web/HTML/Element/input#autocomplete). Das `list`-Attribut gibt die ID einer {{HTMLElement("datalist")}} an, die wiederum ein {{HTMLElement("option")}}-Element pro vorgeschlagenem Wert enthält; jeder `option`-Wert ist der entsprechende vorgeschlagene Wert für das URL-Eingabefeld.

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

Mit dem {{HTMLElement("datalist")}}-Element und seinen {{HTMLElement("option")}}-Elementen wird der Browser die angegebenen Werte als potenzielle Werte für die URL anbieten; dies wird typischerweise als Popup oder Dropdown-Menü mit den Vorschlägen präsentiert. Während das spezifische Benutzererlebnis von einem Browser zum anderen variieren kann, wird normalerweise das Anklicken des Bearbeitungsfeldes ein Dropdown mit den vorgeschlagenen URLs präsentieren. Dann, während der Benutzer tippt, wird die Liste angepasst, um nur übereinstimmende Werte anzuzeigen. Jeder getippte Buchstabe reduziert die Liste, bis der Benutzer eine Auswahl trifft oder einen benutzerdefinierten Wert eingibt.

#### Verwendung von Labels für Vorschlagswerte

Sie können sich dafür entscheiden, das [`label`](/de/docs/Web/HTML/Element/option#label)-Attribut auf einem oder allen Ihren `<option>`-Elementen zu verwenden, um textliche Beschriftungen bereitzustellen. Einige Browser zeigen möglicherweise nur die Beschriftungen an, während andere sowohl die Beschriftung als auch die URL anzeigen.

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

Es gibt zwei Ebenen der Inhaltsvalidierung für `url`-Eingaben. Erstens, die standardmäßige Validierungsebene, die für alle {{HTMLElement("input")}}s angeboten wird, die automatisch sicherstellt, dass die Inhalte die Anforderungen erfüllen, eine gültige URL zu sein. Außerdem besteht die Möglichkeit, zusätzliche Filter hinzuzufügen, um sicherzustellen, dass Ihre eigenen speziellen Bedürfnisse, falls vorhanden, erfüllt werden.

> [!WARNING]
> HTML-Formularvalidierung ersetzt nicht die Skripte, die sicherstellen, dass die eingegebenen Daten das richtige Format haben. Es ist viel zu einfach für jemanden, das HTML so anzupassen, dass er die Validierung umgehen oder sie vollständig entfernen kann. Es ist auch möglich, dass jemand Ihr HTML vollständig umgeht und die Daten direkt an Ihren Server sendet. Wenn Ihr serverseitiger Code die empfangenen Daten nicht validiert, könnte ein Desaster eintreten, wenn falsch formatierte Daten (oder Daten, die zu groß sind, vom falschen Typ sind usw.) in Ihre Datenbank eingegeben werden.

### Grundlegende Validierung

Browser, die den Eingabetyp `url` unterstützen, bieten automatisch eine Validierung, um sicherzustellen, dass nur Text, der dem Standardformat für URLs entspricht, in das Eingabefeld eingegeben wird.

Die Syntax einer URL ist ziemlich komplex. Sie wird durch den [URL Living Standard](https://url.spec.whatwg.org/) von WHATWG definiert und ist für Anfänger in unserem Artikel [Was ist eine URL?](/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL) beschrieben.

### Eine URL erforderlich machen

Wie bereits erwähnt, um eine URL-Eingabe erforderlich zu machen, bevor das Formular gesendet werden kann (Sie können das Feld nicht leer lassen), müssen Sie nur das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut auf der Eingabe einfügen.

```html
<form>
  <input id="myURL" name="myURL" type="url" required />
  <button>Submit</button>
</form>
```

{{EmbedLiveSample("Making_a_URL_required", 600, 40)}}

Versuchen Sie, das obige Formular ohne eingegebenen Wert zu übermitteln, um zu sehen, was passiert.

### Pattern-Validierung

Wenn Sie wollen, dass die eingegebene URL weiter als nur auf "jedes Zeichen, das wie eine URL aussieht" beschränkt wird, können Sie das [`pattern`](/de/docs/Web/HTML/Element/input#pattern)-Attribut verwenden, um einen [regulären Ausdruck](/de/docs/Glossary/regular_expression) zu spezifizieren, den der Wert erfüllen muss, um gültig zu sein.

Nehmen wir zum Beispiel an, Sie erstellen eine Support-Seite für Mitarbeiter der Myco, Inc., die ihnen ermöglicht, ihre IT-Abteilung zu kontaktieren, wenn eine ihrer Seiten ein Problem hat. In unserem vereinfachten Formular muss der Benutzer die URL der Seite eingeben, die ein Problem hat, und eine Nachricht eingeben, die beschreibt, was falsch ist. Aber wir wollen, dass die URL nur dann validiert wird, wenn die eingegebene URL in einer Myco-Domain liegt.

Da Eingaben des Typs `url` sowohl gegen die Standard-URL-Validierung als auch gegen das angegebene [`pattern`](/de/docs/Web/HTML/Element/input#pattern) validiert werden, können Sie dies mit einem regulären Ausdruck implementieren. Schauen wir uns das an:

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

Zuerst wird das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut festgelegt, wodurch es zwingend erforderlich ist, dass eine gültige URL angegeben wird.

Zweitens, in der `url`-Eingabe setzen wir `pattern` auf `".*\.myco\..*"`. Dieser reguläre Ausdruck verlangt eine Zeichenkette, die eine beliebige Anzahl von Zeichen hat, gefolgt von einem Punkt, gefolgt von „myco“, gefolgt von einem Punkt, gefolgt von einer beliebigen Anzahl von Zeichen. Da der Browser sowohl den Standard-URL-Filter als auch unser benutzerdefiniertes Muster der angegebenen Zeichenfolge gegenüberstellt, erhalten wir eine Validierung, die sagt: „Stellen Sie sicher, dass dies eine gültige URL ist und auch in einer Myco-Domain.“

Perfekt ist das nicht, aber es ist gut genug für die Anforderungen dieses einfachen Demos.

Es ist ratsam, das [`title`](/de/docs/Web/HTML/Global_attributes#title)-Attribut zusammen mit `pattern` zu verwenden. Wenn Sie dies tun, _muss_ der `title` das Muster beschreiben; er sollte erklären, welches Format die Daten annehmen sollten und keine andere Information. Das liegt daran, dass der `title` möglicherweise als Teil einer Validierungsfehlermeldung angezeigt oder gesprochen wird. Zum Beispiel könnte der Browser die Meldung „Der eingegebene Text entspricht nicht dem erforderlichen Muster.“ gefolgt von Ihrem angegebenen `title` präsentieren. Wenn Ihr `title` so etwas wie „URL“ ist, wäre das Ergebnis die Meldung „Der eingegebene Text entspricht nicht dem erforderlichen Muster. URL“, was keine gute Benutzererfahrung ist.

Deshalb spezifizieren wir stattdessen den String „Die URL muss in einer Myco-Domain sein“. Dadurch könnte die vollständige Fehlermeldung etwa lauten: "Der eingegebene Text entspricht nicht dem erforderlichen Muster. Die URL sollte in einer Myco-Domain sein."

> [!NOTE]
> Wenn Sie beim Schreiben Ihrer Validierungsregulären Ausdrücke auf Probleme stoßen und sie nicht richtig funktionieren, schauen Sie in die Konsole Ihres Browsers; möglicherweise gibt es dort hilfreiche Fehlermeldungen, die Ihnen bei der Lösung des Problems helfen.

## Beispiele

Es gibt nicht viel mehr über `url`-Eingabetypen zu sagen; schauen Sie sich die Abschnitte [Pattern-Validierung](#pattern-validierung) und [Verwendung von URL-Eingaben](#verwendung_von_url-eingaben) für zahlreiche Beispiele an.

Sie können auch unser [Pattern-Validierungsbeispiel auf GitHub](https://github.com/mdn/learning-area/blob/main/html/forms/url-example/index.html) finden (sehen Sie es sich [auch live an](https://mdn.github.io/learning-area/html/forms/url-example/)).

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>Ein String, der eine URL darstellt, oder leer</td>
    </tr>
    <tr>
      <td><strong>Events</strong></td>
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

- [HTML-Formular-Leitfaden](/de/docs/Learn/Forms)
- {{HTMLElement("input")}}
- [`<input type="tel">`](/de/docs/Web/HTML/Element/input/tel)
- [`<input type="email">`](/de/docs/Web/HTML/Element/input/email)
- [Kompatibilität von CSS-Eigenschaften](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
