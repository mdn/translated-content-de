---
title: <input type="url">
slug: Web/HTML/Element/input/url
l10n:
  sourceCommit: cd56d512284c5765f115cb002c1be5d23e7281d2
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente vom Typ **`url`** werden verwendet, um dem Benutzer das Eingeben und Bearbeiten einer URL zu ermöglichen.

{{EmbedInteractiveExample("pages/tabbed/input-url.html", "tabbed-shorter")}}

Der Eingabewert wird automatisch validiert, um sicherzustellen, dass er entweder leer oder eine korrekt formatierte URL ist, bevor das Formular gesendet werden kann. Die CSS-Pseudoklassen {{cssxref(":valid")}} und {{cssxref(":invalid")}} werden automatisch angewendet, um visuell anzuzeigen, ob der aktuelle Wert des Feldes eine gültige URL ist oder nicht.

## Wert

Das [`value`](/de/docs/Web/HTML/Element/input#value)-Attribut des {{HTMLElement("input")}}-Elements enthält eine Zeichenkette, die automatisch als URL-Syntax validiert wird. Genauer gesagt gibt es zwei mögliche Wertformate, die die Validierung bestehen:

1. Eine leere Zeichenkette („“) zeigt an, dass der Benutzer keinen Wert eingegeben hat oder dass der Wert entfernt wurde.
2. Eine einzelne korrekt geformte absolute URL. Dies bedeutet nicht unbedingt, dass die URL-Adresse existiert, aber zumindest ist sie korrekt formatiert. Ein Eintrag, der `urlscheme://restofurl` entspricht, kann gültig sein, selbst wenn das eingegebene `urlscheme` nicht existiert.

Siehe [Validierung](#validierung) für Details zur Validierung von URLs, um sicherzustellen, dass sie richtig formatiert sind.

## Zusätzliche Attribute

Zusätzlich zu den Attributen, die für alle {{HTMLElement("input")}}-Elemente funktionieren, unabhängig von ihrem Typ, unterstützen `url`-Eingaben die folgenden Attribute.

### list

Der Wert des `list`-Attributs ist die {{domxref("Element.id", "id")}} eines {{HTMLElement("datalist")}}-Elements im gleichen Dokument. Das {{HTMLElement("datalist")}} bietet eine Liste vordefinierter Werte, die dem Benutzer für diese Eingabe vorgeschlagen werden. Alle Werte in der Liste, die nicht mit dem [`type`](/de/docs/Web/HTML/Element/input#type) kompatibel sind, werden nicht in den vorgeschlagenen Optionen aufgenommen. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert eingeben.

### maxlength

Die maximale Zeichenlänge (gemessen in UTF-16 Code-Einheiten), die der Benutzer in das `url`-Eingabefeld eingeben kann. Dies muss ein ganzzahliger Wert von `0` oder höher sein. Wenn kein `maxlength` angegeben ist oder ein ungültiger Wert angegeben wird, hat das `url`-Eingabefeld keine maximale Länge. Dieser Wert muss ebenfalls größer oder gleich dem Wert von `minlength` sein.

Die Eingabe wird die [Beschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) nicht bestehen, wenn die Länge des Textwertes des Feldes länger als `maxlength` UTF-16 Code-Einheiten ist. Die Validierung von Beschränkungen wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### minlength

Die minimale Zeichenlänge (gemessen in UTF-16 Code-Einheiten), die der Benutzer in das `url`-Eingabefeld eingeben kann. Dies muss ein nicht-negativer ganzzahliger Wert sein, der kleiner oder gleich dem Wert ist, der von `maxlength` angegeben wird. Wenn kein `minlength` angegeben ist oder ein ungültiger Wert angegeben wird, hat das `url`-Eingabefeld keine Mindestlänge.

Die Eingabe wird die [Beschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) nicht bestehen, wenn die Länge des in das Feld eingegebenen Textes kürzer als `minlength` UTF-16 Code-Einheiten ist. Die Validierung von Beschränkungen wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### pattern

Das `pattern`-Attribut, falls angegeben, ist ein regulärer Ausdruck, den der [`value`](/de/docs/Web/HTML/Element/input#value) der Eingabe für die [Beschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) entsprechen muss. Es muss ein gültiger JavaScript-Regulärer Ausdruck sein, wie er durch den {{jsxref("RegExp")}}-Typ verwendet wird und wie er in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert ist; das `'u'`-Flag wird beim Kompilieren des regulären Ausdrucks angegeben, sodass das Muster als Folge von Unicode-Code-Punkten behandelt wird, anstatt als {{Glossary("ASCII")}}. Es sollten keine Schrägstriche um den Mustertest angegeben werden.

Wenn das angegebene Muster nicht angegeben oder ungültig ist, wird kein regulärer Ausdruck angewendet und dieses Attribut wird vollständig ignoriert.

> [!NOTE]
> Verwenden Sie das [`title`](/de/docs/Web/HTML/Element/input#title)-Attribut, um Text anzugeben, den die meisten Browser als Tooltip anzeigen, um zu erklären, welche Anforderungen bestehen, um das Muster zu erfüllen. Sie sollten auch weiteren erklärenden Text in der Nähe anfügen.

Siehe den Abschnitt [Mustervalidierung](#mustervalidierung) für Details und ein Beispiel.

### placeholder

Das `placeholder`-Attribut ist eine Zeichenkette, die dem Benutzer einen kurzen Hinweis darauf gibt, welche Art von Informationen im Feld erwartet werden. Es sollte sich um ein Wort oder einen kurzen Satz handeln, der den erwarteten Datentyp demonstriert, anstatt eine erläuternde Nachricht zu sein. Der Text darf _keine_ Wagenrückläufe oder Zeilenumbrüche enthalten.

Wenn der Inhalt der Steuerung eine Richtung ({{Glossary("LTR")}} oder {{Glossary("RTL")}}) hat, aber der Platzhalter in der entgegengesetzten Richtung präsentiert werden muss, können Sie die Unicode-Bidi-Algorithmus-Formatierungszeichen verwenden, um die Richtung im Platzhalter zu überschreiben; siehe [Wie verwendet man Unicode-Steuerelemente für Bidi-Text](https://www.w3.org/International/questions/qa-bidi-unicode-controls) für weitere Informationen.

> [!NOTE]
> Vermeiden Sie es, das `placeholder`-Attribut zu verwenden, wenn möglich. Es ist nicht so semantisch nützlich wie andere Möglichkeiten, Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Siehe [`<input>`-Labels](/de/docs/Web/HTML/Element/input#labels) für weitere Informationen.

### readonly

Das [`readonly`](/de/docs/Web/HTML/Attributes/readonly) Boolean-Attribut, falls vorhanden, bedeutet, dass dieses Feld vom Benutzer nicht bearbeitet werden kann. Sein `value` kann jedoch immer noch direkt durch JavaScript-Code geändert werden, indem die `value`-Eigenschaft des {{domxref("HTMLInputElement")}} gesetzt wird.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat [`required`](/de/docs/Web/HTML/Attributes/required) keinen Einfluss auf Eingaben mit dem ebenfalls angegebenen `readonly`-Attribut.

### size

Das `size`-Attribut ist ein numerischer Wert, der angibt, wie viele Zeichen das Eingabefeld breit sein soll. Der Wert muss eine Zahl größer als null sein, und der Standardwert ist 20. Da Zeichenbreiten variieren, kann dies möglicherweise nicht genau sein und sollte nicht darauf verlassen werden, dass dies so ist; das resultierende Eingabefeld kann schmaler oder breiter sein als die angegebene Anzahl von Zeichen, abhängig von den Zeichen und der Schriftart ({{cssxref("font")}}-Einstellungen in Verwendung).

Dies setzt _kein_ Limit, wie viele Zeichen der Benutzer in das Feld eingeben kann. Es gibt nur an, wie viele ungefähr auf einmal gesehen werden können. Um ein oberes Limit für die Länge der Eingabedaten festzulegen, verwenden Sie das Attribut [`maxlength`](#maxlength).

### spellcheck

Das globale Attribut [`spellcheck`](/de/docs/Web/HTML/Global_attributes/spellcheck) wird verwendet, um anzugeben, ob die Rechtschreibprüfung für ein Element aktiviert werden soll. Es kann auf jedem bearbeitbaren Inhalt verwendet werden, aber hier betrachten wir spezifische Details zur Verwendung von `spellcheck` auf {{HTMLElement("input")}}-Elementen. Die zulässigen Werte für `spellcheck` sind:

- `false`
  - : Deaktivieren Sie die Rechtschreibprüfung für dieses Element.
- `true`
  - : Aktivieren Sie die Rechtschreibprüfung für dieses Element.
- "" (leere Zeichenkette) oder kein Wert
  - : Folgen Sie dem Standardverhalten des Elements zur Rechtschreibprüfung. Dies kann auf einem übergeordneten `spellcheck`-Einstellung oder anderen Faktoren basieren.

Ein Eingabefeld kann die Rechtschreibprüfung aktiviert haben, wenn es nicht über das [readonly](#readonly)-Attribut verfügt und nicht deaktiviert ist.

Der durch das Lesen von `spellcheck` zurückgegebene Wert spiegelt möglicherweise nicht den tatsächlichen Zustand der Rechtschreibprüfung innerhalb einer Steuerung wider, wenn die Vorlieben des {{Glossary("user agent", "user agent's")}} die Einstellung überschreiben.

## Nicht-standardisierte Attribute

Die folgenden nicht-standardisierten Attribute sind auch in einigen Browsern verfügbar. Als allgemeine Regel sollten Sie sie meiden, es sei denn, Sie müssen sie verwenden.

### autocorrect

Eine Safari-Erweiterung. Das `autocorrect`-Attribut ist eine Zeichenkette, die angibt, ob automatische Korrektur aktiviert werden soll, während der Benutzer dieses Feld bearbeitet. Zulässige Werte sind:

- `on`
  - : Aktivieren Sie die automatische Korrektur von Schreibfehlern sowie die Verarbeitung von Textersetzungen, falls welche konfiguriert sind.
- `off`
  - : Deaktivieren Sie die automatische Korrektur und Textersetzungen.

## Verwendung von URL-Eingaben

Wenn Sie eine URL-Eingabe mit dem richtigen `type`-Wert `url` erstellen, erhalten Sie eine automatische Validierung, dass der eingegebene Text zumindest in der richtigen Form vorliegt, um potenziell eine gültige URL zu sein. Dies kann helfen, Fälle zu vermeiden, in denen der Benutzer die Adresse seiner Website falsch eingibt oder eine ungültige Adresse angibt.

Es ist jedoch wichtig zu beachten, dass dies nicht ausreicht, um sicherzustellen, dass der angegebene Text eine URL ist, die tatsächlich existiert, dem Benutzer der Website entspricht oder auf irgendeine andere Weise akzeptabel ist. Es stellt sicher, dass der Wert des Feldes richtig formatiert ist, um eine URL zu sein.

> [!NOTE]
> Ein Benutzer kann im Hintergrund in Ihrem HTML herumwerkeln, daher darf Ihre Website diese Validierung _nicht_ für Sicherheitszwecke verwenden. Sie _müssen_ die URL auf der Serverseite jeder Transaktion überprüfen, bei der der bereitgestellte Text sicherheitsrelevante Auswirkungen jeglicher Art haben könnte.

### Eine einfache URL-Eingabe

Dieses Element wird als Standard-Text-Eingabefeld mit grundlegenden Validierungsfunktionen implementiert. In seiner einfachsten Form kann eine URL-Eingabe so implementiert werden:

```html
<input id="myURL" name="myURL" type="url" />
```

{{ EmbedLiveSample('A_simple_URL_input', 600, 40) }}

Beachten Sie, dass es als gültig angesehen wird, wenn es leer ist und wenn eine einzelne korrekt formatierte URL-Adresse eingegeben wird, aber ansonsten nicht als gültig angesehen wird. Durch Hinzufügen des [`required`](/de/docs/Web/HTML/Element/input#required)-Attributs sind nur korrekt geformte URLs erlaubt; die Eingabe wird nicht mehr als gültig angesehen, wenn sie leer ist.

Es gibt hier nichts Magisches. Wenn Sie dieses Formular übermitteln würden, würden die folgenden Daten an den Server gesendet: `myURL=http%3A%2F%2Fwww.example.com`. Beachten Sie, wie Zeichen bei Bedarf maskiert werden.

### Platzhalter

Manchmal ist es hilfreich, einen kontextbezogenen Hinweis darauf zu geben, welche Form die Eingabedaten haben sollten. Dies kann besonders wichtig sein, wenn das Seitendesign keine beschreibenden Labels für jedes {{HTMLElement("input")}} bietet. Hier kommen **Platzhalter** ins Spiel. Ein Platzhalter ist ein Wert, der die Form des `value` demonstriert, indem er ein Beispiel für einen gültigen Wert präsentiert, der innerhalb des Bearbeitungsfeldes angezeigt wird, wenn der `value` des Elements „“ ist. Sobald Daten in das Feld eingegeben werden, verschwindet der Platzhalter; wenn das Feld geleert wird, erscheint der Platzhalter wieder.

Hier haben wir eine `url`-Eingabe mit dem Platzhalter `http://www.example.com`. Beachten Sie, wie der Platzhalter verschwindet und wieder erscheint, wenn Sie den Inhalt des Bearbeitungsfelds manipulieren.

```html
<input
  id="myURL"
  name="myURL"
  type="url"
  placeholder="http://www.example.com" />
```

{{ EmbedLiveSample('Placeholders', 600, 40) }}

### Kontrolle der Eingabegröße

Sie können sowohl die physische Länge des Eingabefeldes als auch die minimal und maximal erlaubte Länge für den eingegebenen Text steuern.

#### Physische Größe des Eingabeelements

Die physische Größe des Eingabefeldes kann mit dem [`size`](/de/docs/Web/HTML/Element/input#size)-Attribut gesteuert werden. Damit können Sie die Anzahl der Zeichen angeben, die das Eingabefeld gleichzeitig anzeigen kann. In diesem Beispiel ist das `url`-Bearbeitungsfeld beispielsweise 30 Zeichen breit:

```html
<input id="myURL" name="myURL" type="url" size="30" />
```

{{ EmbedLiveSample('Physical_input_element_size', 600, 40) }}

#### Länge des Elementwerts

Das `size` ist getrennt von der Längenbeschränkung der eingegebenen URL selbst. Sie können eine minimale Länge, in Zeichen, für die eingegebene URL mit dem [`minlength`](/de/docs/Web/HTML/Element/input#minlength)-Attribut angeben; ähnlich, verwenden Sie [`maxlength`](/de/docs/Web/HTML/Element/input#maxlength), um die maximale Länge der eingegebenen URL festzulegen. Wenn `maxLength` `size` überschreitet, scrollt der Inhalt des Eingabefeldes nach Bedarf, um die aktuelle Auswahl oder den Einfügepunkt anzuzeigen, während der Inhalt bearbeitet wird.

Das folgende Beispiel erstellt ein 30 Zeichen breites URL-Adresse-Eingabefeld, das verlangt, dass der Inhalt nicht kürzer als 10 Zeichen und nicht länger als 80 Zeichen ist.

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
> Diese Attribute beeinflussen auch die Validierung; ein kürzerer oder längerer Wert als die angegebenen minimalen/möglichen Längen wird als ungültig klassifiziert; in den meisten Browsern kann der Benutzer außerdem keinen Wert eingeben, der länger als die angegebene maximale Länge ist.

### Bereitstellung von Standardoptionen

#### Bereitstellung eines einzelnen Standards mit dem `value`-Attribut

Wie immer können Sie einen Standardwert für ein `url`-Eingabefeld bereitstellen, indem Sie sein [`value`](/de/docs/Web/HTML/Element/input#value)-Attribut festlegen:

```html
<input id="myURL" name="myURL" type="url" value="http://www.example.com" />
```

{{EmbedLiveSample("Providing_a_single_default_using_the_value_attribute", 600, 40)}}

#### Vorschläge anbieten

Einen Schritt weiter können Sie eine Liste von Standardoptionen bereitstellen, aus denen der Benutzer auswählen kann, indem Sie das [`list`](/de/docs/Web/HTML/Element/input#list)-Attribut angeben. Dies schränkt den Benutzer nicht auf diese Optionen ein, ermöglicht es ihm jedoch, häufig verwendete URLs schneller auszuwählen. Dies bietet auch Hinweise für [`autocomplete`](/de/docs/Web/HTML/Element/input#autocomplete). Das `list`-Attribut gibt die ID einer {{HTMLElement("datalist")}} an, die wiederum ein {{HTMLElement("option")}}-Element pro vorgeschlagenem Wert enthält; der `value` jedes `option` ist der entsprechende vorgeschlagene Wert für das URL-Eingabefeld.

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

Mit dem {{HTMLElement("datalist")}}-Element und seinen {{HTMLElement("option")}}s bietet der Browser die angegebenen Werte als potentielle Werte für die URL an; dies wird typischerweise als Popup oder Dropdown-Menü mit den Vorschlägen präsentiert. Während das spezifische Benutzererlebnis je nach Browser variieren kann, wird normalerweise durch Klicken in das Bearbeitungsfeld ein Dropdown mit den vorgeschlagenen URLs angezeigt. Während der Benutzer tippt, wird die Liste angepasst, um nur passende Werte anzuzeigen. Jedes getippte Zeichen schränkt die Liste ein, bis der Benutzer eine Auswahl trifft oder einen benutzerdefinierten Wert eingibt.

#### Labels für vorgeschlagene Werte verwenden

Sie können sich dafür entscheiden, das [`label`](/de/docs/Web/HTML/Element/option#label)-Attribut auf einem oder allen Ihrer `<option>`-Elemente zu verwenden, um Textlabels bereit zu stellen. Einige Browser zeigen möglicherweise nur die Labels an, während andere sowohl das Label als auch die URL anzeigen.

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

Für `url`-Eingaben stehen zwei Ebenen der Inhaltsvalidierung zur Verfügung. Zuerst gibt es die standardmäßige Validierung, die für alle {{HTMLElement("input")}}s angeboten wird, die automatisch sicherstellt, dass der Inhalt die Voraussetzungen erfüllt, um eine gültige URL zu sein. Aber es gibt auch die Möglichkeit, zusätzliche Filter hinzuzufügen, um sicherzustellen, dass Ihre eigenen speziellen Anforderungen erfüllt werden, falls Sie welche haben.

> [!WARNING]
> HTML-Formularvalidierung ist _kein_ Ersatz für Skripte, die sicherstellen, dass die eingegebenen Daten das richtige Format haben. Es ist viel zu einfach für jemanden, das HTML so anzupassen, dass die Validierung umgangen oder vollständig entfernt wird. Es ist auch möglich, dass jemand Ihr HTML vollständig umgeht und die Daten direkt an Ihren Server übermittelt. Wenn Ihr serverseitiger Code die empfangenen Daten nicht validiert, könnte dies katastrophale Folgen haben, wenn fehlerhaft formatierte Daten (oder zu große Daten, Daten des falschen Typs usw.) in Ihre Datenbank eingegeben werden.

### Grundlegende Validierung

Browser, die den `url`-Eingabetyp unterstützen, bieten automatisch eine Validierung, um sicherzustellen, dass nur Text eingegeben wird, der dem Standardformat für URLs entspricht.

Die Syntax einer URL ist ziemlich kompliziert. Sie wird durch den WHATWG's [URL Living Standard](https://url.spec.whatwg.org/) definiert und für Einsteiger in unserem Artikel [Was ist eine URL?](/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL) beschrieben.

### Eine URL erforderlich machen

Wie bereits erwähnt, um eine URL-Eingabe erforderlich zu machen, bevor das Formular gesendet werden kann (Sie können das Feld nicht leer lassen), müssen Sie nur das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut auf der Eingabe einschließen.

```html
<form>
  <input id="myURL" name="myURL" type="url" required />
  <button>Absenden</button>
</form>
```

{{EmbedLiveSample("Making_a_URL_required", 600, 40)}}

Versuchen Sie, das obige Formular ohne eingegebenen Wert zu senden, um zu sehen, was passiert.

### Mustervalidierung

Wenn Sie möchten, dass die eingegebene URL weiter eingeschränkt wird als nur „jeder String, der wie eine URL aussieht“, können Sie das [`pattern`](/de/docs/Web/HTML/Element/input#pattern)-Attribut verwenden, um einen {{Glossary("regular expression")}} anzugeben, den der Wert erfüllen muss, um gültig zu sein.

Angenommen, Sie erstellen eine Support-Seite für die Mitarbeiter von Myco, Inc., auf der sie ihre IT-Abteilung um Hilfe bitten können, wenn eine ihrer Seiten ein Problem hat. In unserem vereinfachten Formular muss der Benutzer die URL der Seite eingeben, die ein Problem hat, und eine Nachricht, die das Problem beschreibt. Wir möchten jedoch, dass die URL nur dann erfolgreich validiert wird, wenn die eingegebene URL in einer Myco-Domain liegt.

Da Eingaben vom Typ `url` sowohl gegen die Standard-URL-Validierung als auch das angegebene [`pattern`](/de/docs/Web/HTML/Element/input#pattern) validiert werden, können Sie dies mit einem regulären Ausdruck implementieren. Sehen wir uns an, wie:

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
    <label for="myURL">Geben Sie die Adresse der Problem-Website ein:</label>
    <input
      id="myURL"
      name="myURL"
      type="url"
      required
      pattern=".*\.myco\..*"
      title="Die URL muss in einer Myco-Domain sein" />
    <span class="validity"></span>
  </div>
  <div>
    <label for="myComment">Was ist das Problem?</label>
    <input id="myComment" name="myComment" type="text" required />
    <span class="validity"></span>
  </div>
  <div>
    <button>Absenden</button>
  </div>
</form>
```

{{EmbedLiveSample("Pattern_validation", 700, 150)}}

Zuerst wird das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut angegeben, wodurch es obligatorisch ist, dass eine gültige URL bereitgestellt wird.

Zweitens haben wir im `url`-Eingabefeld das `pattern` auf `".*\.myco\..*"` gesetzt. Dieser reguläre Ausdruck verlangt einen String, der aus einer beliebigen Anzahl von Zeichen besteht, gefolgt von einem Punkt, gefolgt von „myco“, gefolgt von einem Punkt, gefolgt von einer beliebigen Anzahl von Zeichen. Weil der Browser sowohl den Standard-URL-Filter als auch unser benutzerdefiniertes Muster gegen den angegebenen Text laufen lässt, endet man mit einer Validierung, die „Stellen Sie sicher, dass dies eine gültige URL ist, und auch in einer Myco-Domain“ besagt.

Dies ist nicht perfekt, aber es reicht für die Anforderungen dieses einfachen Demos.

Es ist ratsam, das [`title`](/de/docs/Web/HTML/Global_attributes#title)-Attribut zusammen mit `pattern` zu verwenden. Wenn Sie dies tun, _muss_ das `title` das Muster beschreiben; es sollte erklären, welches Format die Daten haben sollten, statt anderer Informationen. Das liegt daran, dass das `title` möglicherweise als Teil einer Validierungsfehlermeldung angezeigt oder gesprochen wird. Zum Beispiel könnte der Browser die Nachricht „Der eingegebene Text stimmt nicht mit dem erforderlichen Muster überein.“ gefolgt von Ihrem angegebenen `title` präsentieren. Wenn Ihr `title` so etwas wie „URL“ ist, wäre das Ergebnis die Nachricht „Der eingegebene Text stimmt nicht mit dem erforderlichen Muster überein. URL“, was keine gute Benutzererfahrung ist.

Deshalb geben wir stattdessen den String „Die URL sollte in einer Myco-Domain sein“ an. Dadurch könnte die resultierende vollständige Fehlermeldung etwas wie „Der eingegebene Text stimmt nicht mit dem erforderlichen Muster überein. Die URL sollte in einer Myco-Domain sein.“ sein.

> [!NOTE]
> Wenn Sie beim Schreiben Ihrer Validierungsregulären Ausdrücke auf Probleme stoßen und diese nicht richtig funktionieren, überprüfen Sie die Konsole Ihres Browsers; dort könnte es hilfreiche Fehlermeldungen geben, um Ihnen bei der Lösung des Problems zu helfen.

## Beispiele

Es gibt nicht viel mehr zu `url`-Typ-Eingaben zu sagen; schauen Sie sich die Abschnitte [Mustervalidierung](#mustervalidierung) und [Verwendung von URL-Eingaben](#verwendung_von_url-eingaben) für zahlreiche Beispiele an.

Sie können auch unser [Mustervalidierungsbeispiel auf GitHub](https://github.com/mdn/learning-area/blob/main/html/forms/url-example/index.html) finden (sehen Sie es sich auch [live an](https://mdn.github.io/learning-area/html/forms/url-example/)).

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
        {{domxref("HTMLElement/change_event", "change")}} und
        {{domxref("Element/input_event", "input")}}
      </td>
    </tr>
    <tr>
      <td><strong>Unterstützte allgemeine Attribute</strong></td>
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
      <td><p>{{domxref("HTMLInputElement")}}</p></td>
    </tr>
    <tr>
      <td><strong>Methoden</strong></td>
      <td>
        {{domxref("HTMLInputElement.select", "select()")}},
        {{domxref("HTMLInputElement.setRangeText", "setRangeText()")}}
        und
        {{domxref("HTMLInputElement.setSelectionRange", "setSelectionRange()")}}.
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

- [HTML-Formulare-Leitfaden](/de/docs/Learn/Forms)
- {{HTMLElement("input")}}
- [`<input type="tel">`](/de/docs/Web/HTML/Element/input/tel)
- [`<input type="email">`](/de/docs/Web/HTML/Element/input/email)
- [Kompatibilität von CSS-Eigenschaften](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
