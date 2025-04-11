---
title: <input type="url">
slug: Web/HTML/Reference/Elements/input/url
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

{{HTMLElement("input")}} Elemente vom Typ **`url`** werden verwendet, um dem Benutzer die Eingabe und Bearbeitung einer URL zu ermöglichen.

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

Der Eingabewert wird automatisch validiert, um sicherzustellen, dass er entweder leer ist oder eine korrekt formatierte URL darstellt, bevor das Formular gesendet werden kann. Die CSS-Pseudoklassen {{cssxref(":valid")}} und {{cssxref(":invalid")}} werden automatisch angewendet, um visuell zu kennzeichnen, ob der aktuelle Wert des Feldes eine gültige URL ist oder nicht.

## Wert

Das [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) Attribut des {{HTMLElement("input")}} Elements enthält einen String, der automatisch als konform zur URL-Syntax validiert wird. Genauer gesagt, gibt es zwei mögliche Wertformate, die die Validierung bestehen:

1. Ein leerer String („“) zeigt an, dass der Benutzer keinen Wert eingegeben oder dass der Wert entfernt wurde.
2. Eine einzelne korrekt formatierte absolute URL. Das bedeutet nicht unbedingt, dass die URL-Adresse existiert, aber sie ist zumindest korrekt formatiert. Ein Eintrag, der `urlscheme://rest-of-url` entspricht, kann gültig sein, auch wenn das eingegebene `urlscheme` nicht existiert.

Siehe [Validierung](#validierung) für Details dazu, wie URLs validiert werden, um sicherzustellen, dass sie korrekt formatiert sind.

## Zusätzliche Attribute

Zusätzlich zu den [globalen Attributen](/de/docs/Web/HTML/Reference/Global_attributes) und den Attributen, die auf alle {{HTMLElement("input")}}-Elemente unabhängig von ihrem Typ angewendet werden, unterstützen `url`-Eingaben die folgenden Attribute.

> [!NOTE]
> Das globale Attribut [`autocorrect`](/de/docs/Web/HTML/Reference/Global_attributes/autocorrect) kann zu URL-Eingaben hinzugefügt werden, aber der gespeicherte Status ist immer `off`.

### list

Der Wert des list-Attributs ist die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements, das sich im selben Dokument befindet. Die {{HTMLElement("datalist")}} bietet eine Liste vordefinierter Werte, die dem Benutzer als Vorschläge für diese Eingabe angeboten werden. Alle Werte in der Liste, die nicht mit dem [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) kompatibel sind, werden nicht in die vorgeschlagenen Optionen aufgenommen. Die angegebenen Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert eingeben.

### maxlength

Die maximale Zeichenlänge (gemessen in UTF-16-Codeeinheiten), die der Benutzer in das `url`-Eingabefeld eingeben kann. Dies muss ein ganzzahliger Wert von `0` oder höher sein. Wenn kein `maxlength` angegeben ist oder ein ungültiger Wert angegeben ist, hat die URL-Eingabe keine maximale Länge. Dieser Wert muss auch größer oder gleich dem Wert von `minlength` sein.

Die Eingabe wird [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehlschlagen, wenn die Länge des Textwerts des Feldes länger als `maxlength` UTF-16-Codeeinheiten ist. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### minlength

Die minimale Zeichenlänge (gemessen in UTF-16-Codeeinheiten), die der Benutzer in das `url`-Eingabefeld eingeben kann. Dies muss ein nicht-negativer ganzzahliger Wert sein, der kleiner oder gleich dem durch `maxlength` angegebenen Wert ist. Wenn `minlength` nicht angegeben ist oder ein ungültiger Wert angegeben ist, hat die URL-Eingabe keine Mindestlänge.

Die Eingabe wird [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehlschlagen, wenn die Länge des in das Feld eingegebenen Textes kürzer als `minlength` UTF-16-Codeeinheiten ist. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### pattern

Das `pattern` Attribut, wenn angegeben, ist ein regulärer Ausdruck, mit dem der [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) der Eingabe übereinstimmen muss, damit der Wert die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) besteht. Es muss ein gültiger JavaScript-Regulärer Ausdruck sein, wie von der {{jsxref("RegExp")}} Type verwendet und wie in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert; das `'u'`-Flag ist angegeben, wenn der reguläre Ausdruck kompiliert wird, sodass das Muster als Sequenz von Unicode-Codepunkten behandelt wird, anstatt als {{Glossary("ASCII", "ASCII")}}. Es sollten keine Schrägstriche um den Mustertext angegeben werden.

Wenn das angegebene Muster nicht angegeben oder ungültig ist, wird kein regulärer Ausdruck angewendet und dieses Attribut wird vollständig ignoriert.

> [!NOTE]
> Verwenden Sie das [`title`](/de/docs/Web/HTML/Reference/Elements/input#title) Attribut, um Text anzugeben, den die meisten Browser als Tooltip anzeigen, um zu erklären, welche Anforderungen erfüllt sein müssen, um dem Muster zu entsprechen. Sie sollten auch andere erklärende Texte in der Nähe einfügen.

Siehe den Abschnitt [Muster-Validierung](#muster-validierung) für Details und ein Beispiel.

### placeholder

Das `placeholder` Attribut ist ein String, der dem Benutzer einen kurzen Hinweis darauf gibt, welche Art von Informationen in das Feld erwartet werden. Es sollte ein Wort oder eine kurze Phrase sein, die den erwarteten Datentyp zeigt, anstatt eine erklärende Nachricht. Der Text _darf keine_ Wagenrückläufe oder Zeilenumbrüche enthalten.

Wenn der Inhalt der Steuerung eine Richtung (LTR oder RTL) hat, aber der Platzhalter in der entgegengesetzten Richtung angezeigt werden muss, können Sie Unicode-Bidi-Algorithmusformatierungszeichen verwenden, um die Richtung innerhalb des Platzhalters zu überschreiben; siehe [Wie man Unicode-Steuerungen für bidi-Text verwendet](https://www.w3.org/International/questions/qa-bidi-unicode-controls) für weitere Informationen.

> [!NOTE]
> Vermeiden Sie, wenn möglich, die Verwendung des `placeholder` Attributs. Es ist nicht so semantisch nützlich wie andere Möglichkeiten, Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Siehe [<input>-Beschriftungen](/de/docs/Web/HTML/Reference/Elements/input#labels) für weitere Informationen.

### readonly

Das [`readonly`](/de/docs/Web/HTML/Reference/Attributes/readonly) Boolean-Attribut, falls vorhanden, bedeutet, dass dieses Feld nicht vom Benutzer bearbeitet werden kann. Sein `value` kann jedoch weiterhin direkt durch das Setzen der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) `value`-Eigenschaft durch JavaScript geändert werden.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat [`required`](/de/docs/Web/HTML/Reference/Attributes/required) keine Wirkung auf Eingaben mit dem ebenfalls angegebenen `readonly`-Attribut.

### size

Das `size` Attribut ist ein numerischer Wert, der angibt, wie viele Zeichen breit das Eingabefeld sein sollte. Der Wert muss eine Zahl größer als null sein und der Standardwert ist 20. Da Zeichenbreiten variieren, kann dies mehr oder weniger genau sein und sollte nicht darauf verlassen werden; die resultierende Eingabe kann schmaler oder breiter als die angegebene Anzahl von Zeichen sein, abhängig von den Zeichen und der ({{cssxref("font")}}) Schriftart-Einstellungen, die in Gebrauch sind.

Dies setzt _kein_ Limit dafür, wie viele Zeichen der Benutzer in das Feld eingeben kann. Es gibt nur an, wie viele gleichzeitig ungefähr sichtbar sein können. Um ein oberes Limit für die Länge der Eingabedaten festzulegen, verwenden Sie das [`maxlength`](#maxlength) Attribut.

### spellcheck

Das [`spellcheck`](/de/docs/Web/HTML/Reference/Global_attributes/spellcheck) globale Attribut wird verwendet, um anzugeben, ob die Rechtschreibprüfung für ein Element aktiviert werden soll. Es kann auf allen bearbeitbaren Inhalten verwendet werden, aber hier betrachten wir spezifische Details zur Verwendung von `spellcheck` bei {{HTMLElement("input")}}-Elementen. Die zulässigen Werte für `spellcheck` sind:

- `false`
  - : Deaktiviert die Rechtschreibprüfung für dieses Element.
- `true`
  - : Aktiviert die Rechtschreibprüfung für dieses Element.
- "" (leerer String) oder kein Wert
  - : Befolgt das Standardverhalten des Elements für die Rechtschreibprüfung. Dies kann auf der `spellcheck`-Einstellung eines übergeordneten Elements oder anderen Faktoren basieren.

Ein Eingabefeld kann die Rechtschreibprüfung aktiviert haben, wenn es nicht das [readonly](#readonly) Attribut hat und nicht deaktiviert ist.

Der Wert, der durch das Lesen von `spellcheck` zurückgegeben wird, spiegelt möglicherweise nicht den tatsächlichen Status der Rechtschreibprüfung innerhalb eines Steuerelements wider, wenn die Einstellungen des {{Glossary("user_agent", "Benutzeragenten")}} die Einstellungen überschreiben.

## Verwendung von URL-Eingaben

Wenn Sie ein URL-Eingabefeld mit dem richtigen `type` Wert, `url`, erstellen, erhalten Sie eine automatische Validierung, dass der eingegebene Text zumindest die richtige Form hat, um potenziell eine legitime URL zu sein. Dies kann helfen, Fälle zu vermeiden, in denen der Benutzer die Adresse seiner Website falsch eingibt oder eine ungültige angibt.

Es ist jedoch wichtig zu beachten, dass dies nicht ausreicht, um sicherzustellen, dass der angegebene Text eine tatsächlich existierende URL ist, die dem Benutzer der Website entspricht oder in irgendeiner anderen Weise akzeptabel ist. Es stellt sicher, dass der Wert des Feldes korrekt formatiert ist, um eine URL zu sein.

> [!NOTE]
> Ein Benutzer kann hinter den Kulissen mit Ihrem HTML spielen, sodass Ihre Website diese Validierung _nicht_ für Sicherheitszwecke verwenden darf. Sie _müssen_ die URL auf der Serverseite einer Transaktion überprüfen, in der der bereitgestellte Text Sicherheitsimplikationen jeglicher Art haben kann.

### Eine grundlegende URL-Eingabe

Dieses Element wird als Standard-Text-Eingabefeld mit grundlegenden Validierungsfunktionen implementiert. In seiner grundlegendsten Form kann eine URL-Eingabe so implementiert werden:

```html
<input id="myURL" name="myURL" type="url" />
```

{{ EmbedLiveSample('A_basic_URL_input', 600, 40) }}

Beachten Sie, dass es als gültig angesehen wird, wenn es leer ist und wenn eine einzelne gültig formatierte URL-Adresse eingegeben wird, aber ansonsten nicht als gültig gilt. Durch Hinzufügen des [`required`](/de/docs/Web/HTML/Reference/Elements/input#required) Attributs sind nur korrekt formatiere URLs erlaubt; die Eingabe wird nicht mehr als gültig angesehen, wenn sie leer ist.

Hier passiert nichts Magisches. Das Absenden dieses Formulars würde dazu führen, dass die folgenden Daten an den Server gesendet werden: `myURL=http%3A%2F%2Fwww.example.com`. Beachten Sie, wie Zeichen bei Bedarf maskiert werden.

### Platzhalter

Manchmal ist es hilfreich, einen kontextbezogenen Hinweis darauf zu geben, in welcher Form die Eingabedaten sein sollten. Dies kann besonders wichtig sein, wenn das Seitendesign keine beschreibenden Beschriftungen für jedes {{HTMLElement("input")}} bietet. Hier kommen **Platzhalter** ins Spiel. Ein Platzhalter ist ein Wert, der die Form zeigt, die der `value` annehmen sollte, indem ein Beispiel für einen gültigen Wert angezeigt wird, der im Bearbeitungsfeld angezeigt wird, wenn der `value` des Elements „“ ist. Sobald Daten in das Feld eingegeben wurden, verschwindet der Platzhalter; wenn das Feld geleert ist, erscheint der Platzhalter erneut.

Hier haben wir ein `url`-Eingabefeld mit dem Platzhalter `http://www.example.com`. Beachten Sie, wie der Platzhalter verschwindet und wieder erscheint, wenn Sie den Inhalt des Bearbeitungsfelds manipulieren.

```html
<input
  id="myURL"
  name="myURL"
  type="url"
  placeholder="http://www.example.com" />
```

{{ EmbedLiveSample('Placeholders', 600, 40) }}

### Steuerung der Eingabegröße

Sie können sowohl die physische Länge des Eingabefeldes als auch die minimal und maximal zulässige Länge des eingegebenen Textes steuern.

#### Physische Eingabeelementgröße

Die physische Größe des Eingabefeldes kann mit dem [`size`](/de/docs/Web/HTML/Reference/Elements/input#size) Attribut gesteuert werden. Damit können Sie angeben, wie viele Zeichen das Eingabefeld gleichzeitig anzeigen kann. In diesem Beispiel ist zum Beispiel das `url`-Bearbeitungsfeld 30 Zeichen breit:

```html
<input id="myURL" name="myURL" type="url" size="30" />
```

{{ EmbedLiveSample('Physical_input_element_size', 600, 40) }}

#### Elementwertlänge

Die `size` ist unabhängig von der Längenbegrenzung der tatsächlich eingegebenen URL. Sie können eine Mindestlänge in Zeichen für die eingegebene URL mit dem [`minlength`](/de/docs/Web/HTML/Reference/Elements/input#minlength) Attribut angeben; verwenden Sie ähnlich [`maxlength`](/de/docs/Web/HTML/Reference/Elements/input#maxlength), um die maximale Länge der eingegebenen URL festzulegen. Wenn `maxLength` `size` übersteigt, scrollen die Inhalte des Eingabefeldes bei Bedarf, um die aktuelle Auswahl oder Einfügemarke anzuzeigen, während der Inhalt bearbeitet wird.

Das folgende Beispiel erstellt ein 30 Zeichen breites URL-Adressen-Eingabefeld, das erfordert, dass der Inhalt nicht kürzer als 10 Zeichen und nicht länger als 80 Zeichen ist.

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
> Diese Attribute wirken sich auch auf die Validierung aus; ein Wert, der kürzer oder länger als die festgelegten Mindest-/Höchstlängen ist, wird als ungültig eingestuft; in den meisten Browsern können Benutzer keinen Wert eingeben, der länger ist als die angegebene Maximallänge.

### Bereitstellung von Standardoptionen

#### Bereitstellung eines einzigen Standards über das value-Attribut

Wie immer können Sie für ein `url`-Eingabefeld eine Standardeinstellung angeben, indem Sie das [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) Attribut setzen:

```html
<input id="myURL" name="myURL" type="url" value="http://www.example.com" />
```

{{EmbedLiveSample("Providing_a_single_default_using_the_value_attribute", 600, 40)}}

#### Anbieten vorgeschlagener Werte

Einen Schritt weiter können Sie eine Liste von Standardoptionen angeben, aus denen der Benutzer auswählen kann, indem Sie das [`list`](/de/docs/Web/HTML/Reference/Elements/input#list) Attribut spezifizieren. Dies schränkt den Benutzer nicht auf diese Optionen ein, ermöglicht es ihm jedoch, gängige URLs schneller auszuwählen. Dies bietet auch Hinweise für [`autocomplete`](/de/docs/Web/HTML/Reference/Elements/input#autocomplete). Das `list` Attribut spezifiziert die ID eines {{HTMLElement("datalist")}}, das seinerseits ein {{HTMLElement("option")}} Element pro vorgeschlagenem Wert enthält; jeder `option` Wert ist der entsprechende vorgeschlagene Wert für das URL-Eingabefeld.

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

Mit dem {{HTMLElement("datalist")}} Element und dessen {{HTMLElement("option")}}s wird der Browser die angegebenen Werte als potenzielle Werte für die URL anbieten; dies wird typischerweise als Popup oder Dropdown-Menü mit den Vorschlägen angezeigt. Während die spezielle Benutzererfahrung je nach Browser variieren kann, wird durch Klicken in das Bearbeitungsfeld typischerweise ein Dropdown mit den vorgeschlagenen URLs angezeigt. Während der Benutzer tippt, wird die Liste angepasst, um nur passende Werte anzuzeigen. Jedes eingegebene Zeichen schränkt die Liste ein, bis der Benutzer eine Auswahl trifft oder einen eigenen Wert eingibt.

#### Verwendung von Labels für vorgeschlagene Werte

Sie können sich entscheiden, das [`label`](/de/docs/Web/HTML/Reference/Elements/option#label) Attribut auf eines oder alle Ihrer `<option>` Elemente zu setzen, um Textbeschriftungen bereitzustellen. Einige Browser zeigen möglicherweise nur die Labels an, während andere sowohl das Label als auch die URL anzeigen.

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

Für `url` Eingaben stehen zwei Ebenen der Inhaltsvalidierung zur Verfügung. Erstens gibt es das auf allen {{HTMLElement("input")}}-Elementen standardmäßig angebotene Validierungsniveau, das automatisch sicherstellt, dass die Inhalte die Anforderungen erfüllen, um eine gültige URL zu sein. Es besteht jedoch auch die Möglichkeit, zusätzliche Filter hinzuzufügen, um sicherzustellen, dass Ihre eigenen speziellen Anforderungen erfüllt sind, falls es welche gibt.

> [!WARNING]
> Die HTML-Formularvalidierung ist _kein_ Ersatz für Skripte, die sicherstellen, dass die eingegebenen Daten das richtige Format haben. Es ist viel zu einfach, Änderungen am HTML vorzunehmen, die es einer Person ermöglichen, die Validierung zu umgehen oder sie vollständig zu entfernen. Es ist auch möglich, dass jemand Ihr HTML vollständig umgeht und die Daten direkt an Ihren Server sendet. Wenn Ihr Server-Side-Code die empfangenen Daten nicht validiert, könnte es zu Katastrophen kommen, wenn falsch formatierte Daten (oder Daten, die zu groß sind, vom falschen Typ sind usw.) in Ihre Datenbank eingegeben werden.

### Grundlegende Validierung

Browser, die den `url` Eingabetyp unterstützen, bieten automatisch eine Validierung, um sicherzustellen, dass nur Text eingegeben wird, der dem Standardformat für URLs entspricht.

Die Syntax einer URL ist ziemlich komplex. Sie wird durch den WHATWG [URL Living Standard](https://url.spec.whatwg.org/) definiert und in unserem Artikel [Was ist eine URL?](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL) für Anfänger beschrieben.

### Eine URL erforderlich machen

Wie bereits erwähnt, um sicherzustellen, dass eine URL-Eingabe erforderlich ist, bevor das Formular übermittelt werden kann (das Feld darf nicht leer gelassen werden), müssen Sie lediglich das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required) Attribut zur Eingabe hinzufügen.

```html
<form>
  <input id="myURL" name="myURL" type="url" required />
  <button>Submit</button>
</form>
```

{{EmbedLiveSample("Making_a_URL_required", 600, 40)}}

Versuchen Sie, das obige Formular ohne eingegebenen Wert zu übermitteln, um zu sehen, was passiert.

### Muster-Validierung

Wenn Sie verlangen, dass die eingegebene URL strenger ist als nur "beliebiger Text, der wie eine URL aussieht", können Sie das [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern) Attribut verwenden, um einen {{Glossary("regular_expression", "regulären Ausdruck")}} anzugeben, dem der Wert entsprechen muss, damit der Wert gültig ist.

Angenommen, Sie erstellen eine Supportseite für Mitarbeiter der Firma Myco, Inc., die es ihnen ermöglicht, sich an ihre IT-Abteilung zu wenden, wenn eine ihrer Seiten ein Problem hat. In unserem vereinfachten Formular muss der Benutzer die URL der problematischen Seite eingeben und eine Nachricht beschreiben, was nicht stimmt. Aber wir wollen, dass die URL nur erfolgreich validiert wird, wenn die eingegebene URL in einer Myco-Domain liegt.

Da Eingaben vom Typ `url` sowohl gegen die Standard-URL-Validierung als auch gegen das angegebene [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern) validieren, können Sie dies mit einem regulären Ausdruck umsetzen. Sehen wir uns an, wie das funktioniert:

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

Erstens, das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required) Attribut ist angegeben, wodurch es obligatorisch wird, dass eine gültige URL bereitgestellt wird.

Zweitens setzen wir im `url` Eingabefeld `pattern` auf `".*\.myco\..*"`. Dieser reguläre Ausdruck verlangt einen String, der eine beliebige Anzahl von Zeichen, gefolgt von einem Punkt, gefolgt von "myco", gefolgt von einem Punkt, gefolgt von einer beliebigen Anzahl von Zeichen enthält. Da der Browser sowohl den Standard-URL-Filter als auch unser benutzerdefiniertes Muster gegen den angegebenen Text ausführt, erhalten wir eine Validierung, die sagt "stellen Sie sicher, dass dies eine gültige URL ist und sich auch in einer Myco-Domain befindet."

Das ist nicht perfekt, aber es reicht für die Anforderungen dieses einfachen Demos.

Es ist ratsam, das [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title) Attribut mit `pattern` zu verwenden. Wenn Sie dies tun, _muss_ das `title` das Muster beschreiben; es sollte erklären, welches Format die Daten annehmen sollten, anstatt Informationen jeglicher anderer Art. Das liegt daran, dass das `title` möglicherweise als Teil einer Validierungsfehlermeldung angezeigt oder gesprochen wird. Zum Beispiel könnte der Browser die Nachricht „Der eingegebene Text entspricht nicht dem erforderlichen Muster.“ gefolgt von Ihrem angegebenen `title` präsentieren. Wenn Ihr `title` so etwas wie "URL" ist, wäre das Ergebnis die Nachricht „Der eingegebene Text entspricht nicht dem erforderlichen Muster. URL.“, was keine gute Benutzererfahrung wäre.

Deshalb geben wir stattdessen den String "Die URL muss aus einer Myco-Domain stammen" an. Dadurch könnte die resultierende vollständige Fehlermeldung etwa so lauten: „Der eingegebene Text entspricht nicht dem erforderlichen Muster. Die URL sollte aus einer Myco-Domain stammen.“

> [!NOTE]
> Wenn Sie Probleme beim Schreiben Ihrer Validierungsregulären Ausdrücke haben und diese nicht richtig funktionieren, schauen Sie in der Konsole Ihres Browsers nach; dort könnten hilfreiche Fehlermeldungen vorhanden sein, die Ihnen beim Lösen des Problems helfen.

## Beispiele

Es gibt nicht viel mehr über `url` Typ Eingaben zu sagen; schauen Sie die Abschnitte [Muster-Validierung](#muster-validierung) und [Verwendung von URL-Eingaben](#verwendung_von_url-eingaben) für zahlreiche Beispiele an.

Sie finden auch unser [Muster-Validierungsbeispiel auf GitHub](https://github.com/mdn/learning-area/blob/main/html/forms/url-example/index.html) (siehe es [live in Aktion](https://mdn.github.io/learning-area/html/forms/url-example/)).

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#wert">Wert</a></strong></td>
      <td>Ein String, der eine URL repräsentiert oder leer ist</td>
    </tr>
    <tr>
      <td><strong>Ereignisse</strong></td>
      <td>
        [`change`](/de/docs/Web/API/HTMLElement/change_event) und
        [`input`](/de/docs/Web/API/Element/input_event)
      </td>
    </tr>
    <tr>
      <td><strong>Unterstützte Gemeinsame Attribute</strong></td>
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

- [HTML Formulare Leitfaden](/de/docs/Learn_web_development/Extensions/Forms)
- {{HTMLElement("input")}}
- [`<input type="tel">`](/de/docs/Web/HTML/Reference/Elements/input/tel)
- [`<input type="email">`](/de/docs/Web/HTML/Reference/Elements/input/email)
