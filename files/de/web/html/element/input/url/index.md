---
title: '`<input type="url">`'
slug: Web/HTML/Element/input/url
l10n:
  sourceCommit: cd56d512284c5765f115cb002c1be5d23e7281d2
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente vom Typ **`url`** werden verwendet, um dem Benutzer die Eingabe und Bearbeitung einer URL zu ermöglichen.

{{EmbedInteractiveExample("pages/tabbed/input-url.html", "tabbed-shorter")}}

Der Eingabewert wird automatisch validiert, um sicherzustellen, dass er entweder leer ist oder eine richtig formatierte URL darstellt, bevor das Formular übermittelt werden kann. Die CSS-Pseudoklassen {{cssxref(":valid")}} und {{cssxref(":invalid")}} werden automatisch angewendet, um visuell anzuzeigen, ob der aktuelle Wert des Feldes eine gültige URL ist oder nicht.

## Wert

Das [`value`](/de/docs/Web/HTML/Element/input#value)-Attribut des {{HTMLElement("input")}}-Elements enthält eine Zeichenkette, die automatisch validiert wird, um der URL-Syntax zu entsprechen. Genauer gesagt, gibt es zwei mögliche Wertformate, die die Validierung bestehen:

1. Eine leere Zeichenkette ("") zeigt an, dass der Benutzer keinen Wert eingegeben hat oder dass der Wert entfernt wurde.
2. Eine einzelne korrekt formatierte absolute URL. Dies bedeutet nicht notwendigerweise, dass die URL-Adresse existiert, aber sie ist zumindest korrekt formatiert. Ein Eintrag, der `urlscheme://restofurl` entspricht, kann gültig sein, auch wenn das eingegebene `urlscheme` nicht existiert.

Details zur Validierung von URLs, um sicherzustellen, dass sie richtig formatiert sind, finden Sie unter [Validierung](#validierung).

## Zusätzliche Attribute

Neben den Attributen, die für alle {{HTMLElement("input")}}-Elemente unabhängig von ihrem Typ gelten, unterstützen `url`-Eingaben die folgenden Attribute.

### list

Der Wert des list-Attributs ist die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements, das sich im selben Dokument befindet. Der {{HTMLElement("datalist")}} bietet eine Liste vordefinierter Werte, die dem Benutzer für diese Eingabe vorgeschlagen werden. Werte in der Liste, die nicht mit dem [`type`](/de/docs/Web/HTML/Element/input#type) kompatibel sind, werden nicht in die vorgeschlagenen Optionen aufgenommen. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert angeben.

### maxlength

Die maximale Zeichenkettenlänge (gemessen in UTF-16 Code-Einheiten), die der Benutzer in das `url`-Eingabefeld eingeben kann. Dies muss ein ganzzahliger Wert von `0` oder höher sein. Wenn kein `maxlength` angegeben ist oder ein ungültiger Wert angegeben ist, gibt es keine maximale Länge für die `url`-Eingabe. Dieser Wert muss auch größer oder gleich dem Wert von `minlength` sein.

Die Eingabe wird die [Constraint-Validierung](/de/docs/Web/HTML/Constraint_validation) nicht bestehen, wenn die Länge des Textwertes des Feldes länger als `maxlength` UTF-16 Code-Einheiten ist. Die Constraint-Validierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### minlength

Die minimale Zeichenkettenlänge (gemessen in UTF-16 Code-Einheiten), die der Benutzer in die `url`-Eingabe eingeben kann. Dies muss ein nicht-negativer Ganzzahlenwert sein, der kleiner oder gleich dem durch `maxlength` angegebenen Wert ist. Wenn kein `minlength` angegeben ist oder ein ungültiger Wert angegeben ist, gibt es keine Mindestlänge für die `url`-Eingabe.

Die Eingabe wird die [Constraint-Validierung](/de/docs/Web/HTML/Constraint_validation) nicht bestehen, wenn die Länge des eingegebenen Textes im Feld kürzer als `minlength` UTF-16 Code-Einheiten ist. Die Constraint-Validierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### pattern

Das `pattern`-Attribut, wenn angegeben, ist ein regulärer Ausdruck, den der [`value`](/de/docs/Web/HTML/Element/input#value) der Eingabe erfüllen muss, um die [Constraint-Validierung](/de/docs/Web/HTML/Constraint_validation) zu bestehen. Es muss ein gültiger JavaScript-Regulärausdruck sein, wie er vom {{jsxref("RegExp")}}-Typ verwendet wird, und wie in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert ist; das `'u'`-Flag wird beim Kompilieren des regulären Ausdrucks angegeben, sodass das Muster als Folge von Unicode-Codepunkten anstatt als {{Glossary("ASCII", "ASCII")}} behandelt wird. Es sollten keine Schrägstriche um den Mustertext angegeben werden.

Wenn das angegebene Muster nicht angegeben ist oder ungültig ist, wird kein regulärer Ausdruck angewendet und dieses Attribut wird vollständig ignoriert.

> [!NOTE]
> Verwenden Sie das [`title`](/de/docs/Web/HTML/Element/input#title)-Attribut, um Text anzugeben, den die meisten Browser als Tooltip anzeigen, um zu erklären, welche Anforderungen erfüllt werden müssen, um dem Muster zu entsprechen. Sie sollten auch andere erläuternde Texte in der Nähe einschließen.

Details und ein Beispiel finden Sie im Abschnitt [Pattern-Validierung](#muster-validierung).

### placeholder

Das `placeholder`-Attribut ist eine Zeichenkette, die dem Benutzer einen kurzen Hinweis darauf gibt, welche Art von Informationen im Feld erwartet werden. Es sollte ein Wort oder ein kurzer Ausdruck sein, der den erwarteten Datentyp demonstriert, anstatt eine erklärende Nachricht. Der Text _darf keine_ Wagenrücklauf- oder Zeilenvorschubzeichen enthalten.

Wenn der Inhalt der Steuerung eine Richtung ({{Glossary("LTR", "LTR")}} oder {{Glossary("RTL", "RTL")}}) hat, der Platzhalter jedoch in der entgegengesetzten Richtung angezeigt werden muss, können Sie Unicode-Bidi-Algorithmus-Formatierungszeichen verwenden, um die Richtung im Platzhalter zu überschreiben. Weitere Informationen finden Sie unter [Anleitung zur Verwendung von Unicode-Steuerelementen für Bidi-Text](https://www.w3.org/International/questions/qa-bidi-unicode-controls).

> [!NOTE]
> Vermeiden Sie nach Möglichkeit die Verwendung des `placeholder`-Attributs. Es ist nicht so semantisch nützlich wie andere Möglichkeiten zur Erklärung Ihres Formulars und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Weitere Informationen finden Sie unter [`<input>`-Labels](/de/docs/Web/HTML/Element/input#labels).

### readonly

Das [`readonly`](/de/docs/Web/HTML/Attributes/readonly) Boolean-Attribut, falls vorhanden, bedeutet, dass dieses Feld nicht vom Benutzer bearbeitet werden kann. Sein `value` kann jedoch dennoch durch JavaScript-Code geändert werden, der direkt die `value`-Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) setzt.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat [`required`](/de/docs/Web/HTML/Attributes/required) keine Auswirkungen auf Eingaben mit ebenfalls angegebenem `readonly`-Attribut.

### size

Das `size`-Attribut ist ein numerischer Wert, der angibt, wie viele Zeichen das Eingabefeld breit sein sollte. Der Wert muss eine Zahl größer als null sein, und der Standardwert ist 20. Da Zeichenbreiten variieren, kann dies genau sein oder nicht, und es sollte nicht darauf vertraut werden; das resultierende Eingabefeld kann je nach Zeichen und Schriftart ({{cssxref("font")}}-Einstellungen in Verwendung) schmaler oder breiter als die angegebene Anzahl von Zeichen sein.

Dies setzt _kein_ Limit für die Anzahl der Zeichen, die der Benutzer in das Feld eingeben kann. Es gibt nur ungefähr an, wie viele gleichzeitig gesehen werden können. Um ein oberes Limit für die Länge der Eingabedaten festzulegen, verwenden Sie das [`maxlength`](#maxlength)-Attribut.

### spellcheck

Das globale [`spellcheck`](/de/docs/Web/HTML/Global_attributes/spellcheck)-Attribut wird verwendet, um anzugeben, ob für ein Element die Rechtschreibprüfung aktiviert werden soll. Es kann bei jedem bearbeitbaren Inhalt verwendet werden, aber hier betrachten wir spezifische Details zur Verwendung von `spellcheck` in {{HTMLElement("input")}}-Elementen. Die zulässigen Werte für `spellcheck` sind:

- `false`
  - : Deaktivieren Sie die Rechtschreibprüfung für dieses Element.
- `true`
  - : Aktivieren Sie die Rechtschreibprüfung für dieses Element.
- "" (leere Zeichenkette) oder kein Wert
  - : Befolgen Sie das Standardverhalten des Elements für die Rechtschreibprüfung. Dies kann auf den `spellcheck`-Einstellungen eines Elternteils oder anderen Faktoren basieren.

Ein Eingabefeld kann die Rechtschreibprüfung aktiviert haben, wenn es nicht das [readonly](#readonly)-Attribut gesetzt ist und nicht deaktiviert ist.

Der durch das Lesen von `spellcheck` zurückgegebene Wert spiegelt möglicherweise nicht den tatsächlichen Status der Rechtschreibprüfung innerhalb einer Steuerung wider, wenn die {{Glossary("user_agent", "Benutzeragent")}}-Einstellungen die Einstellung überschreiben.

## Nicht-standardisierte Attribute

Die folgenden nicht-standardisierten Attribute sind auch in einigen Browsern verfügbar. In der Regel sollten Sie sie vermeiden, es sei denn, es lässt sich nicht anders bewerkstelligen.

### autocorrect

Eine Safari-Erweiterung, das `autocorrect`-Attribut ist eine Zeichenkette, die angibt, ob die automatische Korrektur während der Bearbeitung dieses Feldes aktiviert werden soll. Zulässige Werte sind:

- `on`
  - : Aktivieren Sie die automatische Korrektur von Tippfehlern sowie die Verarbeitung von Textsubstitutionen, falls vorhanden.
- `off`
  - : Deaktivieren Sie die automatische Korrektur und Textsubstitutionen.

## Verwendung von URL-Eingaben

Wenn Sie eine URL-Eingabe mit dem richtigen `type`-Wert `url` erstellen, erhalten Sie eine automatische Validierung, dass der eingegebene Text zumindest die richtige Form hat, um potenziell eine legitime URL zu sein. Dies kann helfen, Fälle zu vermeiden, in denen der Benutzer die Adresse seiner Website falsch eingibt oder eine ungültige angibt.

Es ist jedoch wichtig zu beachten, dass dies nicht ausreicht, um sicherzustellen, dass der angegebene Text eine URL ist, die tatsächlich existiert, zum Benutzer der Website gehört oder in irgendeiner anderen Weise akzeptabel ist. Es stellt lediglich sicher, dass der Wert des Feldes richtig formatiert ist, um eine URL zu sein.

> [!NOTE]
> Ein Benutzer kann im Hintergrund an Ihrem HTML basteln, daher _darf_ Ihre Website diese Validierung nicht für Sicherheitszwecke verwenden. Sie _müssen_ die URL auf der Serverseite jeder Transaktion verifizieren, bei der der bereitgestellte Text jegliche sicherheitsrelevante Bedeutung haben könnte.

### Eine einfache URL-Eingabe

Dieses Element wird als standardmäßiges Texteingabefeld mit grundlegenden Validierungsfunktionen implementiert. In seiner grundlegendsten Form kann eine URL-Eingabe wie folgt implementiert werden:

```html
<input id="myURL" name="myURL" type="url" />
```

{{EmbedLiveSample('A_simple_URL_input', 600, 40)}}

Beachten Sie, dass sie als gültig angesehen wird, wenn sie leer ist und wenn eine einzig gültig formatierte URL-Adresse eingegeben wurde, jedoch sonst nicht als gültig gilt. Indem Sie das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut hinzufügen, sind nur korrekt formatierte URLs erlaubt; die Eingabe wird nicht mehr als gültig angesehen, wenn sie leer ist.

Es gibt nichts Magisches dabei. Die Übermittlung dieses Formulars würde die folgenden Daten an den Server senden: `myURL=http%3A%2F%2Fwww.example.com`. Beachten Sie, wie Zeichen bei Bedarf maskiert werden.

### Platzhalter

Manchmal ist es hilfreich, einen kontextbezogenen Hinweis darauf zu geben, in welcher Form die Eingabedaten stehen sollten. Dies kann besonders wichtig sein, wenn das Seitendesign keine beschreibenden Labels für jede {{HTMLElement("input")}}-Eingabe anbietet. Hier kommen **Platzhalter** ins Spiel. Ein Platzhalter ist ein Wert, der die Form demonstriert, die der `value` annehmen sollte, indem er ein Beispiel für einen gültigen Wert anzeigt, der innerhalb des Bearbeitungsfeldes angezeigt wird, wenn der Wert des Elements leer ist (""). Sobald Daten in das Feld eingegeben werden, verschwindet der Platzhalter; wenn das Feld geleert wird, erscheint der Platzhalter erneut.

Hier haben wir eine `url`-Eingabe mit dem Platzhalter `http://www.example.com`. Beachten Sie, wie der Platzhalter verschwindet und wieder erscheint, wenn Sie die Inhalte des Bearbeitungsfeldes manipulieren.

```html
<input
  id="myURL"
  name="myURL"
  type="url"
  placeholder="http://www.example.com" />
```

{{EmbedLiveSample('Placeholders', 600, 40)}}

### Steuerung der Eingabegröße

Sie können sowohl die physische Länge des Eingabefeldes als auch die minimale und maximale Länge der erlaubten Texteingabe steuern.

#### Physische Eingabeelementgröße

Die physische Größe des Eingabefeldes kann mit dem [`size`](/de/docs/Web/HTML/Element/input#size)-Attribut gesteuert werden. Damit können Sie die Anzahl der Zeichen angeben, die das Eingabefeld gleichzeitig anzeigen kann. In diesem Beispiel ist beispielsweise das `url`-Bearbeitungsfeld 30 Zeichen breit:

```html
<input id="myURL" name="myURL" type="url" size="30" />
```

{{EmbedLiveSample('Physical_input_element_size', 600, 40)}}

#### Elemente-Wertlänge

Die `size` ist unabhängig von der Längenbeschränkung der eingegebenen URL selbst. Sie können eine Mindestlänge in Zeichen für die eingegebene URL mit dem [`minlength`](/de/docs/Web/HTML/Element/input#minlength)-Attribut angeben; verwenden Sie analog dazu [`maxlength`](/de/docs/Web/HTML/Element/input#maxlength), um die maximale Länge der eingegebenen URL festzulegen. Wenn `maxLength` `size` überschreitet, wird der Inhalt des Eingabefeldes bei Bedarf scrollen, um die aktuelle Auswahl oder Einfügestelle während der Bearbeitung anzuzeigen.

Das folgende Beispiel erstellt ein 30 Zeichen breites Eingabefeld für URL-Adressen, das erfordert, dass der Inhalt nicht kürzer als 10 Zeichen und nicht länger als 80 Zeichen ist.

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
> Diese Attribute beeinflussen auch die Validierung; ein Wert, der kürzer oder länger als die angegebene Mindest-/Maximallänge ist, wird als ungültig klassifiziert; in den meisten Browsern wird es dem Benutzer außerdem verweigert, einen Wert einzugeben, der länger als die angegebene maximale Länge ist.

### Bereitstellung von Standardoptionen

#### Bereitstellen eines einzelnen Standards mit dem value-Attribut

Wie immer können Sie einen Standardwert für ein `url`-Eingabefeld bereitstellen, indem Sie dessen [`value`](/de/docs/Web/HTML/Element/input#value)-Attribut setzen:

```html
<input id="myURL" name="myURL" type="url" value="http://www.example.com" />
```

{{EmbedLiveSample("Providing_a_single_default_using_the_value_attribute", 600, 40)}}

#### Vorschlagen von Werten

Einen Schritt weitergehend, können Sie eine Liste von Standardoptionen bereitstellen, aus denen der Benutzer auswählen kann, indem Sie das [`list`](/de/docs/Web/HTML/Element/input#list)-Attribut angeben. Dies beschränkt den Benutzer nicht auf diese Optionen, ermöglicht es ihm jedoch, häufig verwendete URLs schneller auszuwählen. Es bietet auch Hinweise für [`autocomplete`](/de/docs/Web/HTML/Element/input#autocomplete). Das `list`-Attribut gibt die ID eines {{HTMLElement("datalist")}} an, der wiederum ein {{HTMLElement("option")}}-Element pro vorgeschlagenem Wert enthält; der `value` jedes `option` entspricht dem entsprechenden vorgeschlagenen Wert für das URL-Eingabefeld.

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

Mit dem {{HTMLElement("datalist")}}-Element und seinen {{HTMLElement("option")}}s wird der Browser die angegebenen Werte als mögliche Werte für die URL anbieten; dies wird typischerweise als Popup oder Dropdown-Menü mit den Vorschlägen dargestellt. Während das spezifische Benutzererlebnis von einem Browser zum anderen variieren kann, wird typischerweise das Klicken im Bearbeitungsfeld ein Dropdown der vorgeschlagenen URLs anzeigen. Wenn der Benutzer tippt, wird die Liste angepasst, um nur passende Werte anzuzeigen. Jeder eingegebene Buchstabe grenzt die Liste weiter ein, bis der Benutzer eine Auswahl trifft oder einen benutzerdefinierten Wert eingibt.

#### Labels für vorgeschlagene Werte verwenden

Sie können das [`label`](/de/docs/Web/HTML/Element/option#label)-Attribut optional auf einem oder allen Ihrer `<option>`-Elemente hinzufügen, um Textbeschriftungen bereitzustellen. Einige Browser können nur die Beschriftungen anzeigen, während andere sowohl die Beschriftung als auch die URL anzeigen können.

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

Es gibt zwei Ebenen der Inhaltsvalidierung für `url`-Eingaben. Erstens gibt es die standardmäßige Validierungsebene, die für alle {{HTMLElement("input")}}s bereitgestellt wird, die automatisch sicherstellt, dass der Inhalt den Anforderungen entspricht, um eine gültige URL zu sein. Außerdem besteht die Möglichkeit, zusätzliche Filter hinzuzufügen, um sicherzustellen, dass Ihre eigenen speziellen Bedürfnisse erfüllt werden, falls welche existieren.

> [!WARNING]
> HTML-Formularvalidierung ist _kein_ Ersatz für Skripte, die sicherstellen, dass die eingegebenen Daten im richtigen Format vorliegen. Es ist viel zu einfach für jemanden, Anpassungen an dem HTML vorzunehmen, die es ihm ermöglichen, die Validierung zu umgehen oder sie ganz zu entfernen. Es ist auch möglich, dass jemand Ihr HTML vollständig umgeht und die Daten direkt an Ihren Server übermittelt. Wenn Ihr serverseitiger Code die empfangenen Daten nicht validiert, könnte eine Katastrophe eintreten, wenn falsch formatierte Daten (oder Daten, die zu groß sind, den falschen Typ haben usw.) in Ihre Datenbank eingegeben werden.

### Grundlegende Validierung

Browser, die den `url`-Eingabetyp unterstützen, bieten automatisch eine Validierung an, um sicherzustellen, dass nur Text eingegeben wird, der dem Standardformat für URLs entspricht.

Die Syntax einer URL ist recht komplex. Sie wird durch den [URL Living Standard von WHATWG](https://url.spec.whatwg.org/) definiert und in unserem Artikel [Was ist eine URL?](/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL) für Neueinsteiger beschrieben.

### Eine URL erforderlich machen

Wie bereits erwähnt, um sicherzustellen, dass eine URL-Eingabe erforderlich ist, bevor das Formular eingereicht werden kann (Sie können das Feld nicht leer lassen), müssen Sie einfach das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut zur Eingabe hinzufügen.

```html
<form>
  <input id="myURL" name="myURL" type="url" required />
  <button>Submit</button>
</form>
```

{{EmbedLiveSample("Making_a_URL_required", 600, 40)}}

Versuchen Sie, das obige Formular ohne eingegebenen Wert zu übermitteln, um zu sehen, was passiert.

### Muster-Validierung

Wenn Sie die eingegebene URL weiter einschränken möchten als nur auf "beliebiger Text, der wie eine URL aussieht", können Sie das [`pattern`](/de/docs/Web/HTML/Element/input#pattern)-Attribut verwenden, um einen {{Glossary("regular_expression", "regulären Ausdruck")}} anzugeben, den der Wert erfüllen muss, um gültig zu sein.

Angenommen, Sie bauen eine Support-Seite für Mitarbeiter von Myco, Inc., die es ihnen ermöglicht, mit ihrer IT-Abteilung in Kontakt zu treten, wenn eine ihrer Seiten ein Problem hat. In unserem vereinfachten Formular muss der Benutzer die URL der Seite eingeben, die ein Problem aufweist, und eine Nachricht, die das Problem beschreibt. Wir möchten jedoch, dass die URL nur dann erfolgreich validiert wird, wenn die eingegebene URL in einer Myco-Domain liegt.

Da Eingaben vom Typ `url` sowohl gegen die Standard-URL-Validierung _als auch_ das angegebene [`pattern`](/de/docs/Web/HTML/Element/input#pattern) validieren, können Sie dies mit einem regulären Ausdruck umsetzen. Sehen wir, wie das geht:

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

Zuerst wird das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut angegeben, wodurch zwingend erforderlich ist, dass eine gültige URL bereitgestellt wird.

Zweitens setzen wir im `url`-Eingabefeld das `pattern` auf `".*\.myco\..*"`. Dieser reguläre Ausdruck fordert eine Zeichenkette an, die eine beliebige Anzahl von Zeichen gefolgt von einem Punkt, gefolgt von "myco", gefolgt von einem Punkt, gefolgt von einer beliebigen Anzahl von Zeichen hat. Weil der Browser sowohl den Standard-URL-Filter _als auch_ unser benutzerdefiniertes Muster gegen den angegebenen Text laufen lässt, erhalten wir eine Validierung, die besagt "Stellen Sie sicher, dass dies eine gültige URL ist und sie sich in einer Myco-Domain befindet."

Das ist nicht perfekt, aber es erfüllt die Anforderungen dieses einfachen Demos.

Es ist ratsam, das [`title`](/de/docs/Web/HTML/Global_attributes#title)-Attribut zusammen mit dem `pattern` zu verwenden. Wenn Sie dies tun, _muss_ das `title`-Attribut das Muster beschreiben; es sollte erklären, in welchem Format die Daten vorliegen sollen, und nicht andere Informationen. Das liegt daran, dass das `title` möglicherweise als Teil einer Validierungsfehlermeldung angezeigt oder gesprochen wird. Zum Beispiel könnte der Browser die Nachricht "Der eingegebene Text entspricht nicht dem erforderlichen Muster." zusammen mit Ihrem angegebenen `title` präsentieren. Wenn Ihr `title` etwas wie "URL" ist, wäre das Ergebnis die Nachricht "Der eingegebene Text entspricht nicht dem erforderlichen Muster. URL", was keine gute Benutzererfahrung ist.

Aus diesem Grund geben wir stattdessen die Zeichenkette "Die URL muss sich in einer Myco-Domain befinden" an. Dadurch könnte die resultierende vollständige Fehlermeldung etwa so aussehen: "Der eingegebene Text entspricht nicht dem erforderlichen Muster. Die URL sollte in einer Myco-Domain liegen."

> [!NOTE]
> Wenn Sie beim Schreiben Ihrer Validierungsregulären Ausdrücke auf Schwierigkeiten stoßen und diese nicht richtig funktionieren, überprüfen Sie die Konsole Ihres Browsers; dort könnten hilfreiche Fehlermeldungen zu finden sein, die Ihnen bei der Problemlösung helfen.

## Beispiele

Es gibt nicht viel mehr über `url`-Eingabetypen zu sagen; unter den Abschnitten [Pattern-Validierung](#muster-validierung) und [Verwendung von URL-Eingaben](#verwendung_von_url-eingaben) finden Sie zahlreiche Beispiele.

Sie können auch unser [Beispiel zur Muster-Validierung auf GitHub](https://github.com/mdn/learning-area/blob/main/html/forms/url-example/index.html) finden (Siehe es auch [live ausgeführt](https://mdn.github.io/learning-area/html/forms/url-example/)).

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>Eine Zeichenkette, die eine URL darstellt oder leer ist</td>
    </tr>
    <tr>
      <td><strong>Ereignisse</strong></td>
      <td>
        [`change`](/de/docs/Web/API/HTMLElement/change_event) und
        [`input`](/de/docs/Web/API/Element/input_event)
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
