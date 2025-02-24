---
title: <input type="url">
slug: Web/HTML/Element/input/url
l10n:
  sourceCommit: 8b02826c79b090b5af0d68ae1ef39f932a66a7f1
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

Der Eingabewert wird automatisch validiert, um sicherzustellen, dass er entweder leer oder eine korrekt formatierte URL ist, bevor das Formular abgeschickt werden kann. Die CSS-Pseudoklassen {{cssxref(":valid")}} und {{cssxref(":invalid")}} werden bei Bedarf automatisch angewendet, um visuell anzuzeigen, ob der aktuelle Wert des Feldes eine gültige URL ist oder nicht.

## Wert

Das `value`-Attribut des {{HTMLElement("input")}} Elements enthält einen String, der automatisch validiert wird, um der URL-Syntax zu entsprechen. Genauer gesagt, gibt es zwei mögliche Wertformate, die die Validierung bestehen:

1. Ein leerer String ("") zeigt an, dass der Benutzer keinen Wert eingegeben hat oder der Wert entfernt wurde.
2. Eine einzelne korrekt geformte absolute URL. Dies bedeutet nicht zwingend, dass die URL-Adresse existiert, aber sie ist zumindest korrekt formatiert. Ein Eintrag, der `urlscheme://rest-of-url` entspricht, kann gültig sein, auch wenn das eingegebene `urlscheme` nicht existiert.

Siehe [Validierung](#validierung) für Details zur Validierung von URLs, um sicherzustellen, dass sie korrekt formatiert sind.

## Zusätzliche Attribute

Zusätzlich zu den [globalen Attributen](/de/docs/Web/HTML/Global_attributes) und den Attributen, die auf alle {{HTMLElement("input")}} Elemente unabhängig von ihrem Typ wirken, unterstützen `url` Eingaben die folgenden Attribute.

> [!NOTE]
> Das [`autocorrect`](/de/docs/Web/HTML/Global_attributes/autocorrect) globale Attribut kann zu `url` Eingaben hinzugefügt werden, aber der gespeicherte Zustand ist immer `off`.

### list

Der Wert des `list`-Attributs ist die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}} Elements, das im selben Dokument enthalten ist. Das {{HTMLElement("datalist")}} bietet eine Liste vordefinierter Werte, die dem Benutzer für diese Eingabe vorgeschlagen werden. Alle Werte in der Liste, die nicht kompatibel mit dem [`type`](/de/docs/Web/HTML/Element/input#type) sind, werden nicht in den vorgeschlagenen Optionen aufgenommen. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert angeben.

### maxlength

Die maximale Zeichenlänge (gemessen in UTF-16 Code-Einheiten), die der Benutzer in die `url` Eingabe eingeben kann. Dies muss ein ganzzahliger Wert von `0` oder höher sein. Wenn kein `maxlength` angegeben ist oder ein ungültiger Wert spezifiziert wird, hat die `url` Eingabe keine maximale Länge. Dieser Wert muss auch größer oder gleich dem Wert von `minlength` sein.

Die Eingabe wird die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) nicht bestehen, wenn die Länge des Textwertes des Feldes länger ist als `maxlength` UTF-16 Code-Einheiten. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### minlength

Die minimale Zeichenlänge (gemessen in UTF-16 Code-Einheiten), die der Benutzer in die `url` Eingabe eingeben kann. Dies muss ein nicht-negativer Ganzzahlenwert sein, der kleiner oder gleich dem Wert ist, der durch `maxlength` spezifiziert wird. Wenn kein `minlength` angegeben ist oder ein ungültiger Wert spezifiziert wird, hat die `url` Eingabe keine Mindestlänge.

Die Eingabe wird die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) nicht bestehen, wenn die Länge des in das Feld eingegebenen Textes weniger als `minlength` UTF-16 Code-Einheiten beträgt. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### pattern

Das `pattern`-Attribut, wenn angegeben, ist ein regulärer Ausdruck, den der [`value`](/de/docs/Web/HTML/Element/input#value) der Eingabe einhalten muss, um die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) zu bestehen. Es muss ein gültiger JavaScript regulärer Ausdruck sein, wie er vom {{jsxref("RegExp")}} Typ verwendet wird, und wie in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert; das `'u'` Flag wird beim Kompilieren des regulären Ausdrucks angegeben, damit das Muster als eine Sequenz von Unicode-Codepunkten behandelt wird, anstatt als {{Glossary("ASCII", "ASCII")}}. Keine Schrägstriche sollten um den Mustertest angegeben werden.

Wenn das angegebene Muster nicht angegeben ist oder ungültig ist, wird kein regulärer Ausdruck angewendet und dieses Attribut wird vollständig ignoriert.

> [!NOTE]
> Verwenden Sie das [`title`](/de/docs/Web/HTML/Element/input#title) Attribut, um Text anzugeben, den die meisten Browser als Tooltip anzeigen, um zu erklären, welche Anforderungen erfüllt werden müssen, um dem Muster zu entsprechen. Sie sollten auch anderen erläuternden Text in der Nähe einfügen.

Siehe den Abschnitt [Muster-Validierung](#muster-basierte_validierung) für Details und ein Beispiel.

### placeholder

Das `placeholder`-Attribut ist ein String, der dem Benutzer einen kurzen Hinweis darauf gibt, welche Art von Information im Feld erwartet wird. Es sollte ein Wort oder eine kurze Phrase sein, die den erwarteten Datentyp zeigt, anstatt eine erklärende Nachricht. Der Text _darf keine_ Wagenrückläufe oder Zeilenumbrüche enthalten.

Wenn der Inhalt der Steuerung eine Richtung hat ({{Glossary("LTR", "LTR")}} oder {{Glossary("RTL", "RTL")}}), der Platzhalter jedoch in der entgegengesetzten Richtung angezeigt werden muss, können Sie Unicode-Bidirektional-Algorithmus-Formatierungszeichen verwenden, um die Richtung im Platzhalter zu überschreiben; siehe [Wie man Unicode-Steuerelemente für bidi-Text verwendet](https://www.w3.org/International/questions/qa-bidi-unicode-controls) für weitere Informationen.

> [!NOTE]
> Vermeiden Sie die Verwendung des `placeholder`-Attributs, wenn möglich. Es ist semantisch nicht so nützlich wie andere Möglichkeiten, Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Siehe [`<input>` labels](/de/docs/Web/HTML/Element/input#labels) für mehr Informationen.

### readonly

Das [`readonly`](/de/docs/Web/HTML/Attributes/readonly) Boolean-Attribut bedeutet, wenn es vorhanden ist, dass dieses Feld vom Benutzer nicht bearbeitet werden kann. Sein `value` kann jedoch weiterhin durch direktes Setzen der `value`-Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) durch JavaScript geändert werden.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat [`required`](/de/docs/Web/HTML/Attributes/required) keine Auswirkung auf Eingaben mit dem `readonly`-Attribut.

### size

Das `size`-Attribut ist ein numerischer Wert, der angibt, wie viele Zeichenbreiten das Eingabefeld haben sollte. Der Wert muss eine Zahl größer als null sein, und der Standardwert ist 20. Da sich die Zeichenbreiten unterscheiden, kann dies genau sein oder nicht, und es sollte nicht darauf vertraut werden; die resultierende Eingabe kann schmaler oder breiter sein als die angegebene Anzahl von Zeichen, abhängig von den Zeichen und der Schriftart ({{cssxref("font")}} Einstellungen in Gebrauch).

Dies begrenzt _nicht_ die Anzahl der Zeichen, die der Benutzer in das Feld eingeben kann. Es gibt nur an, wie viele gleichzeitig ungefähr sichtbar sein können. Um ein oberes Limit für die Länge der Eingabedaten festzulegen, verwenden Sie das [`maxlength`](#maxlength)-Attribut.

### spellcheck

Das globale Attribut [`spellcheck`](/de/docs/Web/HTML/Global_attributes/spellcheck) wird verwendet, um anzuzeigen, ob das Rechtschreibprüfung für ein Element aktiviert werden soll. Es kann auf jedem bearbeitbaren Inhalt verwendet werden, aber hier betrachten wir spezielle Aspekte in Bezug auf die Verwendung von `spellcheck` bei {{HTMLElement("input")}} Elementen. Die zulässigen Werte für `spellcheck` sind:

- `false`
  - : Deaktivieren der Rechtschreibprüfung für dieses Element.
- `true`
  - : Aktivieren der Rechtschreibprüfung für dieses Element.
- "" (leerer String) oder kein Wert
  - : Das Standardverhalten der Rechtschreibprüfung für das Element befolgen. Dies kann auf den `spellcheck`-Einstellungen eines Elternteils oder anderen Faktoren basieren.

Ein Eingabefeld kann die Rechtschreibprüfung aktiviert haben, wenn es nicht das [readonly](#readonly) Attribut gesetzt und nicht deaktiviert ist.

Der Wert, der durch das Lesen von `spellcheck` zurückgegeben wird, kann möglicherweise nicht den tatsächlichen Zustand der Rechtschreibprüfung innerhalb eines Steuerelements widerspiegeln, wenn die [Benutzer-Agent]-Einstellungen(/de/docs/Glossary/user_agent) die Einstellung überschreiben.

## Verwendung von URL-Eingaben

Wenn Sie eine URL-Eingabe mit dem richtigen `type`-Wert `url` erstellen, erhalten Sie eine automatische Validierung, dass der eingegebene Text zumindest in der richtigen Form ist, um potenziell eine legitime URL zu sein. Dies kann helfen, Fälle zu vermeiden, in denen der Benutzer seine Website-Adresse falsch eingibt oder eine ungültige angibt.

Es ist jedoch wichtig zu beachten, dass dies nicht ausreicht, um sicherzustellen, dass der angegebene Text eine URL ist, die tatsächlich existiert, zum Benutzer der Website gehört oder auf irgendeine andere Weise akzeptabel ist. Es stellt sicher, dass der Wert des Feldes korrekt formatiert ist, um eine URL zu sein.

> [!NOTE]
> Ein Benutzer kann hinter den Kulissen an Ihrem HTML herumbasteln, sodass Ihre Website _diese Validierung nicht für Sicherheitszwecke_ verwenden darf. Sie _müssen_ die URL auf der Serverseite jeder Transaktion verifizieren, bei der der bereitgestellte Text Sicherheitsimplikationen jeglicher Art haben könnte.

### Eine grundlegende URL-Eingabe

Dieses Element wird als Standard-Textfeld mit grundlegenden Validierungsfunktionen implementiert. In seiner grundlegendsten Form kann eine URL-Eingabe so implementiert werden:

```html
<input id="myURL" name="myURL" type="url" />
```

{{ EmbedLiveSample('A_basic_URL_input', 600, 40) }}

Beachten Sie, dass es als gültig betrachtet wird, wenn es leer ist und wenn eine einzelne gültig formatierte URL-Adresse eingegeben wurde, aber andernfalls nicht als gültig betrachtet wird. Durch Hinzufügen des [`required`](/de/docs/Web/HTML/Element/input#required) Attributs sind nur korrekt geformte URLs zulässig; die Eingabe wird nicht mehr als gültig betrachtet, wenn sie leer ist.

Hier ist nichts Magisches im Gange. Das Absenden dieses Formulars würde die folgenden Daten an den Server senden: `myURL = http%3A%2F%2Fwww.example.com`. Beachten Sie, wie notwendige Zeichen escapet werden.

### Platzhalter

Manchmal ist es hilfreich, einen kontextbezogenen Hinweis darauf zu geben, welche Form die Eingabedaten annehmen sollten. Dies kann besonders wichtig sein, wenn das Seitendesign keine beschreibenden Labels für jedes {{HTMLElement("input")}} bietet. Hier kommen **Platzhalter** ins Spiel. Ein Platzhalter ist ein Wert, der die Form angibt, die der `value` annehmen sollte, indem er ein Beispiel für einen gültigen Wert anzeigt, der im Bearbeitungsfeld angezeigt wird, wenn der `value` des Elements "" ist. Sobald Daten in die Box eingegeben wurden, verschwindet der Platzhalter; wenn die Box geleert wird, erscheint der Platzhalter wieder.

Hier haben wir eine `url` Eingabe mit dem Platzhalter `http://www.example.com`. Beachten Sie, wie der Platzhalter verschwindet und wieder auftaucht, während Sie den Inhalt des Bearbeitungsfelds manipulieren.

```html
<input
  id="myURL"
  name="myURL"
  type="url"
  placeholder="http://www.example.com" />
```

{{ EmbedLiveSample('Placeholders', 600, 40) }}

### Steuerung der Eingabegröße

Sie können sowohl die physische Länge des Eingabefelds als auch die minimale und maximale Länge der erfassten Eingabetext steuern.

#### Physische Größe des Eingabeelements

Die physische Größe des Eingabefelds kann mit dem [`size`](/de/docs/Web/HTML/Element/input#size) Attribut gesteuert werden. Damit können Sie angeben, wie viele Zeichen das Eingabefeld auf einmal anzeigen kann. In diesem Beispiel ist das `url` Bearbeitungsfeld 30 Zeichen breit:

```html
<input id="myURL" name="myURL" type="url" size="30" />
```

{{ EmbedLiveSample('Physical_input_element_size', 600, 40) }}

#### Länge des Elementwerts

Das `size` ist getrennt von der Längenbegrenzung der tatsächlich eingegebenen URL selbst. Sie können eine minimale Länge in Zeichen für die eingegebene URL mit dem Attribut [`minlength`](/de/docs/Web/HTML/Element/input#minlength) spezifizieren; ebenso können Sie `maxlength` verwenden, um die maximale Länge der eingegebenen URL festzulegen. Wenn `maxLength` größer als `size` ist, werden die Inhalte des Eingabefelds bei Bedarf gescrollt, um die aktuelle Auswahl oder den Einfügepunkt anzuzeigen, während der Inhalt bearbeitet wird.

Das folgende Beispiel erstellt ein 30 Zeichen breites URL-Adressen-Eingabefeld, das erfordert, dass der Inhalt mindestens 10 Zeichen und höchstens 80 Zeichen lang ist.

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
> Diese Attribute beeinflussen auch die Validierung; ein Wert, der kürzer oder länger als die angegebene Minimum-/Maximumslänge ist, wird als ungültig eingestuft; außerdem werden die meisten Browser es dem Benutzer verweigern, einen längeren Wert als die angegebene Maximallänge einzugeben.

### Vorgabewerte bereitstellen

#### Einen einzelnen Standardwert mithilfe des Wert-Attributs bereitstellen

Wie immer können Sie einen Standardwert für ein `url` Eingabefeld bereitstellen, indem Sie dessen [`value`](/de/docs/Web/HTML/Element/input#value) Attribut festlegen:

```html
<input id="myURL" name="myURL" type="url" value="http://www.example.com" />
```

{{EmbedLiveSample("Providing_a_single_default_using_the_value_attribute", 600, 40)}}

#### Vorgeschlagene Werte anbieten

Einen Schritt weitergehend können Sie eine Liste von Standardoptionen bereitstellen, aus denen der Benutzer auswählen kann, indem Sie das [`list`](/de/docs/Web/HTML/Element/input#list) Attribut spezifizieren. Dies schränkt den Benutzer nicht auf diese Optionen ein, ermöglicht jedoch eine schnellere Auswahl häufig verwendeter URLs. Dies bietet auch Hinweise für [`autocomplete`](/de/docs/Web/HTML/Element/input#autocomplete). Das `list` Attribut gibt die ID eines {{HTMLElement("datalist")}} an, der wiederum ein {{HTMLElement("option")}} Element pro vorgeschlagenem Wert enthält; jedes `option` `value` ist der entsprechende vorgeschlagene Wert für das URL-Eingabefeld.

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

Mit dem {{HTMLElement("datalist")}} Element und seinen {{HTMLElement("option")}} in Platz wird der Browser die angegebenen Werte als potenzielle Werte für die URL anbieten; dies wird typischerweise als Popup oder Dropdown-Menü mit den Vorschlägen präsentiert. Während die spezifische Benutzererfahrung von Browser zu Browser variieren kann, zeigt das Klicken im Bearbeitungsfeld typischerweise ein Dropdown-Menü der vorgeschlagenen URLs an. Dann, während der Benutzer tippt, wird die Liste angepasst, um nur übereinstimmende Werte anzuzeigen. Jedes eingegebene Zeichen verengt die Liste, bis der Benutzer eine Auswahl trifft oder einen benutzerdefinierten Wert eingibt.

#### Labels für vorgeschlagene Werte verwenden

Sie können das [`label`](/de/docs/Web/HTML/Element/option#label) Attribut auf einem oder allen Ihrer `<option>` Elemente verwenden, um Textetiketten bereitzustellen. Einige Browser zeigen möglicherweise nur die Labels an, während andere sowohl das Label als auch die URL anzeigen.

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

Für `url` Eingaben sind zwei Ebenen der Inhaltsvalidierung verfügbar. Erstens gibt es die Standardvalidierungsebene, die für alle {{HTMLElement("input")}}s verfügbar ist, die automatisch sicherstellt, dass die Inhalte die Voraussetzungen für eine gültige URL erfüllen. Es gibt jedoch auch die Möglichkeit, zusätzliche Filter hinzuzufügen, um sicherzustellen, dass Ihre eigenen speziellen Bedürfnisse erfüllt werden, falls Sie welche haben.

> [!WARNING]
> HTML-Formularvalidierung ist _kein_ Ersatz für Skripte, die sicherstellen, dass die eingegebenen Daten im richtigen Format sind. Es ist viel zu einfach für jemanden, das HTML so anzupassen, dass er die Validierung umgehen oder sie vollständig entfernen kann. Es ist auch möglich, dass jemand Ihr HTML vollständig umgeht und die Daten direkt an Ihren Server sendet. Wenn Ihr Serverseitencode die empfangenen Daten nicht validiert, könnte ein Desaster bevorstehen, wenn unsachgemäß formatierte Daten (oder Daten, die zu groß sind, vom falschen Typ sind usw.) in Ihre Datenbank eingegeben werden.

### Grundlegende Validierung

Browser, die den `url` Eingabetyp unterstützen, bieten automatisch eine Validierung, um sicherzustellen, dass nur Text eingegeben wird, der dem Standardformat für URLs entspricht.

Die Syntax einer URL ist ziemlich komplex. Sie wird von dem WHATWG's [URL Living Standard](https://url.spec.whatwg.org/) definiert und wird für Neulinge in unserem Artikel [Was ist eine URL?](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL) beschrieben.

### Eine URL erforderlich machen

Wie bereits erwähnt, um einen URL-Eintrag erforderlich zu machen, bevor das Formular abgeschickt werden kann (Sie können das Feld nicht leer lassen), müssen Sie einfach das [`required`](/de/docs/Web/HTML/Element/input#required) Attribut für das Eingabeelement angeben.

```html
<form>
  <input id="myURL" name="myURL" type="url" required />
  <button>Submit</button>
</form>
```

{{EmbedLiveSample("Making_a_URL_required", 600, 40)}}

Versuchen Sie, das obige Formular abzusenden, ohne einen Wert einzugeben, um zu sehen, was passiert.

### Muster-basierte Validierung

Wenn Sie die eingegebene URL weiter einschränken müssen als nur "jede Zeichenfolge, die wie eine URL aussieht", können Sie das [`pattern`](/de/docs/Web/HTML/Element/input#pattern) Attribut verwenden, um einen {{Glossary("regular_expression", "regulären Ausdruck")}} zu spezifizieren, den der Wert einhalten muss, um gültig zu sein.

Angenommen, Sie bauen eine Support-Seite für Mitarbeiter von Myco, Inc., die es ihnen ermöglicht, sich an ihre IT-Abteilung zu wenden, wenn eine ihrer Seiten ein Problem hat. In unserem vereinfachten Formular muss der Benutzer die URL der Seite eingeben, die ein Problem hat, und eine Nachricht hinzufügen, die beschreibt, was das Problem ist. Aber wir möchten, dass die URL nur dann erfolgreich validiert wird, wenn die eingegebene URL in einer Myco-Domain ist.

Da Eingaben des Typs `url` sowohl gegen die Standard-URL-Validierung als auch das angegebene [`pattern`](/de/docs/Web/HTML/Element/input#pattern) validieren, können Sie dies mit einem regulären Ausdruck implementieren. Schauen wir uns an, wie:

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

Zunächst ist das [`required`](/de/docs/Web/HTML/Element/input#required) Attribut angegeben, was es obligatorisch macht, dass eine gültige URL bereitgestellt wird.

Zweitens, in der `url` Eingabe setzen wir `pattern` auf `".*\.myco\..*"` fest. Dieser reguläre Ausdruck fordert eine Zeichenfolge an, die eine beliebige Anzahl von Zeichen hat, gefolgt von einem Punkt, gefolgt von "myco", gefolgt von einem Punkt, gefolgt von einer beliebigen Anzahl von Zeichen. Da der Browser sowohl den Standard-URL-Filter als auch unser benutzerdefiniertes Muster gegen den angegebenen Text ausführt, ergibt sich eine Validierung, die besagt: "Stelle sicher, dass dies eine gültige URL ist und auch in einer Myco-Domain."

Dies ist nicht perfekt, aber es ist gut genug für die Anforderungen dieses einfachen Demos.

Es wird empfohlen, das [`title`](/de/docs/Web/HTML/Global_attributes/title) Attribut zusammen mit `pattern` zu verwenden. Wenn Sie dies tun, _muss_ das `title` das Muster beschreiben; es sollte erklären, welches Format die Daten haben sollten, anstatt irgendwelche anderen Informationen. Das liegt daran, dass das `title` als Teil einer Validierungsfehlermeldung angezeigt oder gesprochen werden könnte. Zum Beispiel könnte der Browser die Meldung "Der eingegebene Text entspricht nicht dem erforderlichen Muster." gefolgt von dem angegebenen `title` präsentieren. Wenn Ihr `title` lautet beispielsweise "URL", wäre das Ergebnis die Nachricht "Der eingegebene Text entspricht nicht dem erforderlichen Muster. URL", was keine gute Benutzererfahrung ist.

Deshalb spezifizieren wir stattdessen den String "Die URL muss in einer myco-Domain sein". Dadurch könnte die resultierende vollständige Fehlermeldung etwa lauten "Der eingegebene Text entspricht nicht dem erforderlichen Muster. Die URL sollte in einer myco-Domain sein."

> [!NOTE]
> Wenn Sie auf Schwierigkeiten stoßen, während Sie Ihre Validierungsregulärausdrücke schreiben und diese nicht ordnungsgemäß funktionieren, überprüfen Sie die Konsole Ihres Browsers; es gibt möglicherweise hilfreiche Fehlermeldungen dort, die Ihnen bei der Lösung des Problems helfen können.

## Beispiele

Es gibt nicht viel mehr zu sagen über `url` Typ Eingaben; schauen Sie sich die Abschnitte [Pattern-Validierung](#muster-basierte_validierung) und [Verwenden von URL-Eingaben](#verwendung_von_url-eingaben) für zahlreiche Beispiele an.

Sie können auch unser [Beispiel zur Pattern-Validierung auf GitHub](https://github.com/mdn/learning-area/blob/main/html/forms/url-example/index.html) finden (sehen Sie es sich [auch live an](https://mdn.github.io/learning-area/html/forms/url-example/)).

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
      <td><strong>Implizite ARIA Rolle</strong></td>
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

- [HTML-Formular-Leitfaden](/de/docs/Learn_web_development/Extensions/Forms)
- {{HTMLElement("input")}}
- [`<input type="tel">`](/de/docs/Web/HTML/Element/input/tel)
- [`<input type="email">`](/de/docs/Web/HTML/Element/input/email)
