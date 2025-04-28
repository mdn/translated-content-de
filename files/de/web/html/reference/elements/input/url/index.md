---
title: <input type="url">
slug: Web/HTML/Reference/Elements/input/url
l10n:
  sourceCommit: 7c0cd9f9b667fe9be0887e8902d09f0013290930
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente vom Typ **`url`** werden verwendet, um dem Benutzer das Eingeben und Bearbeiten einer URL zu ermöglichen.

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

Der Eingabewert wird automatisch validiert, um sicherzustellen, dass er entweder leer oder eine korrekt formatierte URL ist, bevor das Formular übermittelt werden kann. Die CSS-Pseudoklassen {{cssxref(":valid")}} und {{cssxref(":invalid")}} werden automatisch angewendet, um visuell anzuzeigen, ob der aktuelle Wert des Felds eine gültige URL ist oder nicht.

## Wert

Das [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Attribut des {{HTMLElement("input")}}-Elements enthält eine Zeichenkette, die automatisch auf Konformität zur URL-Syntax überprüft wird. Genauer gesagt gibt es zwei mögliche Wertformate, die die Validierung bestehen:

1. Eine leere Zeichenkette ("") zeigt an, dass der Benutzer keinen Wert eingegeben hat oder dass der Wert entfernt wurde.
2. Eine einzelne korrekt geformte absolute URL. Das bedeutet nicht zwangsläufig, dass die URL-Adresse existiert, aber sie ist zumindest korrekt formatiert. Ein Eintrag, der `urlscheme://rest-of-url` entspricht, kann gültig sein, auch wenn das eingegebene `urlscheme` nicht existiert.

Sehen Sie sich den Abschnitt [Validierung](#validierung) an, um Details darüber zu erfahren, wie URLs validiert werden, um sicherzustellen, dass sie korrekt formatiert sind.

## Zusätzliche Attribute

Zusätzlich zu den [globalen Attributen](/de/docs/Web/HTML/Reference/Global_attributes) und den Attributen, die auf alle {{HTMLElement("input")}}-Elemente unabhängig von ihrem Typ angewendet werden, unterstützen `url`-Eingaben die folgenden Attribute.

> [!NOTE]
> Das [`autocorrect`](/de/docs/Web/HTML/Reference/Global_attributes/autocorrect)-globale Attribut kann zu url-Eingaben hinzugefügt werden, aber der gespeicherte Status ist immer `off`.

### list

Der Wert des `list`-Attributs ist die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements, das sich im gleichen Dokument befindet. Das {{HTMLElement("datalist")}}-Element bietet eine Liste vordefinierter Werte, die dem Benutzer für diese Eingabe vorgeschlagen werden. Alle Werte in der Liste, die nicht mit dem [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) kompatibel sind, werden nicht in die vorgeschlagenen Optionen aufgenommen. Die bereitgestellten Werte sind Vorschläge, keine Voraussetzungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert angeben.

### maxlength

Die maximale Zeichenlänge (gemessen in UTF-16 Code-Einheiten), die der Benutzer in die `url`-Eingabe eintragen kann. Dies muss ein Integer-Wert von `0` oder höher sein. Wenn kein `maxlength` festgelegt oder ein ungültiger Wert angegeben wird, hat die `url`-Eingabe keine maximale Länge. Dieser Wert muss auch größer oder gleich dem Wert von `minlength` sein.

Die Eingabe wird die [Bedingungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) nicht bestehen, wenn die Länge des Textwertes des Feldes mehr als `maxlength` UTF-16 Code-Einheiten beträgt. Die Bedingungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### minlength

Die minimale Zeichenlänge (gemessen in UTF-16 Code-Einheiten), die der Benutzer in die `url`-Eingabe eintragen kann. Dies muss ein nicht-negativer Integer-Wert sein, der kleiner oder gleich dem durch `maxlength` angegebenen Wert ist. Wenn kein `minlength` festgelegt oder ein ungültiger Wert angegeben wird, hat die `url`-Eingabe keine Mindestlänge.

Die Eingabe wird die [Bedingungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) nicht bestehen, wenn die Länge des in das Feld eingegebenen Textes weniger als `minlength` UTF-16 Code-Einheiten beträgt. Die Bedingungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### pattern

Das `pattern`-Attribut ist ein regulärer Ausdruck, dem der [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) der Eingabe entsprechen muss, um die [Bedingungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) zu bestehen. Es muss ein gültiger JavaScript-regulärer Ausdruck sein, wie er durch den {{jsxref("RegExp")}}-Typ verwendet und in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert ist; das `'u'`-Flag ist angegeben, wenn der reguläre Ausdruck kompiliert wird, damit das Muster als Folge von Unicode-Codepunkten behandelt wird, anstatt als {{Glossary("ASCII", "ASCII")}}. Es sollten keine Schrägstriche um den Mustertext angegeben werden.

Wenn das angegebene Muster nicht angegeben oder ungültig ist, wird kein regulärer Ausdruck angewendet, und dieses Attribut wird vollständig ignoriert.

> [!NOTE]
> Verwenden Sie das [`title`](/de/docs/Web/HTML/Reference/Elements/input#title)-Attribut, um Text zu spezifizieren, den die meisten Browser als Tooltip anzeigen, um zu erklären, welche Anforderungen erfüllt werden müssen, um dem Muster zu entsprechen. Sie sollten auch anderen erklärenden Text in der Nähe aufnehmen.

Sehen Sie sich den Abschnitt [Musterüberprüfung](#musterüberprüfung) für Details und ein Beispiel an.

### placeholder

Das `placeholder`-Attribut ist eine Zeichenkette, die dem Benutzer einen kurzen Hinweis darauf gibt, welche Art von Information im Feld erwartet wird. Es sollte ein Wort oder eine kurze Phrase sein, die die erwartete Art von Daten demonstriert, anstatt eine erklärende Nachricht. Der Text _darf keine_ Wagenrückläufe oder Zeilenumbrüche enthalten.

Hat der Inhalt der Steuerung eine Richtung ([[LTR]](/de/docs/Glossary/LTR) oder [[RTL]](/de/docs/Glossary/RTL)), muss jedoch der Platzhalter in die entgegengesetzte Richtung dargestellt werden, können Sie Unicode-Bidirektional-Algorithmus-Formatierungszeichen verwenden, um die Richtung innerhalb des Platzhalters zu überschreiben; sehen Sie [Wie man Unicode-Steuerzeichen für bidirektionalen Text verwendet](https://www.w3.org/International/questions/qa-bidi-unicode-controls) für weitere Informationen.

> [!NOTE]
> Vermeiden Sie nach Möglichkeit die Verwendung des `placeholder`-Attributs. Es ist nicht so semantisch nützlich wie andere Möglichkeiten, Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Sehen Sie sich [`<input>`-Labels](/de/docs/Web/HTML/Reference/Elements/input#labels) für weitere Informationen an.

### readonly

Das [`readonly`](/de/docs/Web/HTML/Reference/Attributes/readonly)-Boolean-Attribut bedeutet, falls vorhanden, dass dieses Feld vom Benutzer nicht bearbeitet werden kann. Sein `value` kann jedoch weiterhin durch direktes Setzen der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-`value`-Eigenschaft durch JavaScript-Code geändert werden.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat [`required`](/de/docs/Web/HTML/Reference/Attributes/required) keinen Effekt auf Eingaben mit dem ebenfalls angegebenen `readonly`-Attribut.

### size

Das `size`-Attribut ist ein numerischer Wert, der angibt, wie viele Zeichen breit das Eingabefeld sein sollte. Der Wert muss eine Zahl größer als null sein, und der Standardwert ist 20. Da Zeichenbreiten variieren, ist dies möglicherweise nicht genau und sollte nicht darauf verlassen werden; das resultierende Eingabefeld kann je nach Zeichen und Schriftart ({{cssxref("font")}} Einstellungen in Verwendung) schmaler oder breiter als die angegebene Zeichenanzahl sein.

Dies setzt _keine_ Begrenzung dafür, wie viele Zeichen der Benutzer in das Feld eingeben kann. Es spezifiziert nur, wie viele in der Regel gleichzeitig gesehen werden können. Um eine Obergrenze für die Länge der Eingabedaten festzulegen, verwenden Sie das [`maxlength`](#maxlength)-Attribut.

### spellcheck

Das [`spellcheck`](/de/docs/Web/HTML/Reference/Global_attributes/spellcheck)-globale Attribut wird verwendet, um anzugeben, ob die Rechtschreibprüfung für ein Element aktiviert werden soll. Es kann auf jedem bearbeitbaren Inhalt verwendet werden, aber hier betrachten wir besondere Aspekte im Zusammenhang mit der Verwendung von `spellcheck` auf {{HTMLElement("input")}}-Elementen. Die zulässigen Werte für `spellcheck` sind:

- `false`
  - : Deaktiviert die Rechtschreibprüfung für dieses Element.
- `true`
  - : Aktiviert die Rechtschreibprüfung für dieses Element.
- "" (leere Zeichenkette) oder kein Wert
  - : Verwenden Sie das Standardverhalten des Elements für die Rechtschreibprüfung. Dies kann auf dem `spellcheck`-Einstellung eines Elternteils oder anderen Faktoren basieren.

Ein Eingabefeld kann die Rechtschreibprüfung aktiviert haben, wenn es nicht das [readonly](#readonly)-Attribut gesetzt und nicht deaktiviert ist.

Der Wert, der durch das Lesen von `spellcheck` zurückgegeben wird, kann nicht den tatsächlichen Status der Rechtschreibprüfung innerhalb eines Steuerelements widerspiegeln, wenn die Präferenzen des {{Glossary("user_agent", "Benutzeragents")}} die Einstellung überschreiben.

## Verwendung von URL-Eingaben

Wenn Sie eine URL-Eingabe mit dem richtigen `type`-Wert, `url`, erstellen, erhalten Sie eine automatische Validierung, dass der eingegebene Text zumindest in der richtigen Form ist, um potenziell eine legitime URL zu sein. Dies kann helfen, Fälle zu vermeiden, in denen der Benutzer die Adresse seiner Webseite falsch eingibt oder eine ungültige eingibt.

Es ist jedoch wichtig zu beachten, dass dies nicht ausreicht, um sicherzustellen, dass der angegebene Text eine URL ist, die tatsächlich existiert, dem Benutzer der Seite entspricht oder auf andere Weise akzeptabel ist. Es stellt sicher, dass der Wert des Feldes korrekt formatiert ist, um eine URL zu sein.

> [!NOTE]
> Ein Benutzer kann Ihre HTML hinter den Kulissen manipulieren, daher _darf_ Ihre Seite diese Validierung nicht für Sicherheitszwecke verwenden. Sie _müssen_ die URL auf der Serverseite jeder Transaktion überprüfen, bei der der bereitgestellte Text Sicherheitsauswirkungen jeglicher Art haben könnte.

### Eine einfache URL-Eingabe

Dieses Element wird als standardmäßiges Texteinabefeld mit grundlegenden Validierungsfunktionen implementiert. In seiner grundlegendsten Form kann eine URL-Eingabe so implementiert werden:

```html
<input id="myURL" name="myURL" type="url" />
```

{{EmbedLiveSample('A_basic_URL_input', 600, 40)}}

Beachten Sie, dass es als gültig angesehen wird, wenn es leer ist und wenn eine einzelne gültig formatierte URL-Adresse eingegeben wird, aber ansonsten nicht als gültig angesehen wird. Indem Sie das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attribut hinzufügen, werden nur korrekt formatiert URLs zugelassen; die Eingabe wird nicht mehr als gültig angesehen, wenn sie leer ist.

Hier passiert nichts Magisches. Wenn Sie dieses Formular übermitteln würden, würden die folgenden Daten an den Server gesendet werden: `myURL=http%3A%2F%2Fwww.example.com`. Beachten Sie, wie Zeichen bei Bedarf maskiert werden.

### Platzhalter

Manchmal ist es hilfreich, einen kontextbezogenen Hinweis darauf zu geben, in welcher Form die Eingabedaten vorliegen sollten. Dies kann besonders wichtig sein, wenn das Design der Seite keine beschreibenden Labels für jeweils {{HTMLElement("input")}}-Element bietet. Hier kommen **Platzhalter** ins Spiel. Ein Platzhalter ist ein Wert, der die Form demonstriert, die der `value` annehmen sollte, indem ein Beispiel für einen gültigen Wert präsentiert wird, der innerhalb des Bearbeitungsfelds angezeigt wird, wenn der `value` des Elements "" ist. Sobald Daten in das Feld eingegeben werden, verschwindet der Platzhalter; wenn das Feld geleert wird, erscheint der Platzhalter wieder.

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

Sie können sowohl die physikalische Länge des Eingabefeldes als auch die minimale und maximale Länge des zulässigen Eingabetextes steuern.

#### Physikalische Eingabeelementgröße

Die physikalische Größe des Eingabefeldes kann mithilfe des [`size`](/de/docs/Web/HTML/Reference/Elements/input#size)-Attributs gesteuert werden. Damit können Sie die Anzahl der Zeichen spezifizieren, die das Eingabefeld gleichzeitig anzeigen kann. In diesem Beispiel ist das `url`-Bearbeitungsfeld beispielsweise 30 Zeichen breit:

```html
<input id="myURL" name="myURL" type="url" size="30" />
```

{{EmbedLiveSample('Physical_input_element_size', 600, 40)}}

#### Element-Wertlänge

Das `size` ist vom Längenlimit für die tatsächlich eingegebene URL selbst getrennt. Sie können eine Mindestlänge in Zeichen für die eingegebene URL mit dem [`minlength`](/de/docs/Web/HTML/Reference/Elements/input#minlength)-Attribut festlegen; verwenden Sie ähnlich [`maxlength`](/de/docs/Web/HTML/Reference/Elements/input#maxlength), um die maximale Länge der eingegebenen URL festzulegen. Wenn `maxlength` `size` überschreitet, wird der Inhalt des Eingabefeldes nach Bedarf scrollen, um die aktuelle Auswahl oder den Einfügepunkt anzuzeigen, während der Inhalt bearbeitet wird.

Das folgende Beispiel erstellt eine 30 Zeichen breite URL-Adresseingabebox, bei der der Inhalt nicht kürzer als 10 Zeichen und nicht länger als 80 Zeichen sein darf.

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
> Diese Attribute beeinflussen auch die Validierung; ein Wert, der kürzer oder länger als die angegebenen Mindest-/Höchstlängen ist, wird als ungültig eingestuft; außerdem werden die meisten Browser es dem Benutzer verweigern, einen Wert einzugeben, der länger als die angegebene maximale Länge ist.

### Vorgabewerte bereitstellen

#### Ein einzelnes Standardangebot mit dem Wert-Attribut bereitstellen

Wie immer können Sie einen Standardwert für eine `url`-Eingabebox bereitstellen, indem Sie ihr [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Attribut setzen:

```html
<input id="myURL" name="myURL" type="url" value="http://www.example.com" />
```

{{EmbedLiveSample("Providing_a_single_default_using_the_value_attribute", 600, 40)}}

#### Vorgeschlagene Werte anbieten

Einen Schritt weitergehend können Sie eine Liste von Standardoptionen bereitstellen, aus denen der Benutzer wählen kann, indem Sie das [`list`](/de/docs/Web/HTML/Reference/Elements/input#list)-Attribut angeben. Dies beschränkt den Benutzer nicht auf diese Optionen, ermöglicht es ihm jedoch, gängige URLs schneller auszuwählen. Dies bietet auch Hinweise auf die [`autocomplete`](/de/docs/Web/HTML/Reference/Elements/input#autocomplete)-Funktion. Das `list`-Attribut gibt die ID eines {{HTMLElement("datalist")}} an, das wiederum ein {{HTMLElement("option")}}-Element pro vorgeschlagenem Wert enthält; jedes `option`-`value` ist der entsprechende vorgeschlagene Wert für die URL-Eingabebox.

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

Mit dem {{HTMLElement("datalist")}}-Element und dessen {{HTMLElement("option")}}s an Ort und Stelle bietet der Browser die angegebenen Werte als potenzielle Werte für die URL an; dies wird normalerweise als Popup- oder Dropdown-Menü mit den Vorschlägen präsentiert. Während die spezifische Benutzererfahrung von Browser zu Browser variieren kann, wird normalerweise beim Klicken in das Bearbeitungsfeld ein Dropdown der vorgeschlagenen URLs angezeigt. Dann wird die Liste angepasst, während der Benutzer tippt, um nur passende Werte anzuzeigen. Jedes eingegebene Zeichen grenzt die Liste ein, bis der Benutzer eine Auswahl trifft oder einen benutzerdefinierten Wert eingibt.

#### Labels für vorgeschlagene Werte verwenden

Sie können optional das [`label`](/de/docs/Web/HTML/Reference/Elements/option#label)-Attribut für eines oder alle Ihre `<option>`-Elemente einfügen, um Textlabels bereitzustellen. Einige Browser zeigen möglicherweise nur die Labels an, während andere möglicherweise sowohl das Label als auch die URL anzeigen.

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

Es gibt zwei Ebenen der Inhaltsvalidierung für `url`-Eingaben. Zuerst gibt es die standardmäßige Ebene der Validierung, die allen {{HTMLElement("input")}}s angeboten wird, die automatisch sicherstellt, dass die Inhalte den Anforderungen entsprechen, um eine gültige URL zu sein. Es besteht aber auch die Möglichkeit, zusätzliche Filter hinzu zu fügen, um sicherzustellen, dass Ihre eigenen spezialisierten Anforderungen erfüllt werden, falls solche vorliegen.

> [!WARNING]
> HTML-Formularvalidierung ist _kein_ Ersatz für Skripte, die sicherstellen, dass die eingegebenen Daten im richtigen Format sind. Es ist viel zu einfach für jemanden, Änderungen am HTML vorzunehmen, die es ihm ermöglichen, die Validierung zu umgehen, oder sie vollständig zu entfernen. Es ist auch möglich, dass jemand Ihr HTML vollständig umgeht und die Daten direkt an Ihren Server sendet. Wenn Ihr serverseitiger Code die empfangenen Daten nicht validiert, könnte eine Katastrophe passieren, wenn falsch formatierte Daten (oder zu große Daten, Daten des falschen Typs usw.) in Ihre Datenbank eingegeben werden.

### Grundlegende Validierung

Browser, die den `url`-Eingabetyp unterstützen, bieten automatisch eine Validierung, um sicherzustellen, dass nur Text eingegeben wird, der dem Standardformat für URLs entspricht.

Die Syntax einer URL ist ziemlich komplex. Sie ist durch den WHATWG-URL-Living-Standard ([URL Living Standard](https://url.spec.whatwg.org/)) definiert und wird für Anfänger in unserem Artikel [Was ist eine URL?](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL) beschrieben.

### Eine URL erforderlich machen

Wie bereits erwähnt, müssen Sie, um eine URL-Eingabe erforderlich zu machen, bevor das Formular übermittelt werden kann (d.h. das Feld darf nicht leer bleiben), einfach das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attribut bei der Eingabe hinzufügen.

### Musterüberprüfung

Wenn Sie möchten, dass die eingegebene URL weiter eingeschränkt wird als nur "irgendeine Zeichenfolge, die wie eine URL aussieht", können Sie das [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern)-Attribut verwenden, um einen regulären Ausdruck zu spezifizieren, dem der Wert für die Gültigkeit entsprechen muss.

## Beispiele

### URL-Validierung

In diesem Beispiel stellen wir sicher, dass mit dem [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attribut eine URL ausgefüllt wird und dass die URL ein Element von `mozilla.org` ist, indem das [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern)-Attribut zur Illustration verwendet wird.

#### HTML

Innerhalb der `url`-Eingabe setzen wir `pattern` auf `".*\.mozilla\.org.*"`. Dieser Reguläre Ausdruck validiert eine Zeichenkette, die eine beliebige Anzahl Zeichen, gefolgt von ".mozilla.org", gefolgt von einer beliebigen Anzahl Zeichen enthält. Da der Browser sowohl den Standard-URL-Filter _als auch_ unser benutzerdefiniertes Muster gegen den angegebenen Text ausführt, erhalten wir eine Validierung, die sagt: "Stellen Sie sicher, dass dies eine gültige URL ist und auch `.mozilla.org` enthält."

Beachten Sie, dass ein strenges Muster wie `https://developer\.mozilla\.org.*` robuster wäre, aber dies würde das `type="url"`-Attribut in diesem Fall redundant machen.

Das [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title)-Attribut beschreibt auch das `pattern` für Benutzer mit unterstützenden Technologien.

```html live-sample___url-validation
<form>
  <label for="myURL">
    Enter a url from this site:
    <input
      id="myURL"
      name="myURL"
      type="url"
      required
      pattern=".*\.mozilla\.org.*"
      title="URL should include mozilla.org" />
    <span class="validity"></span>
  </label>
  <button>Submit</button>
</form>
```

#### CSS

Das CSS gibt visuelle Hinweise zur Darstellung des Inhalts als {{cssxref(":valid")}} oder {{cssxref(":invalid")}}, indem eine geeignete {{cssxref("content")}}-Eigenschaft hinzugefügt wird und [alternativer Text](/de/docs/Web/CSS/content#alternative_text_string_counter) für Benutzer mit unterstützenden Technologien eingeschlossen wird.

```css live-sample___url-validation
input:focus:invalid {
  outline: 2px solid red;
}

input:focus:valid {
  outline: 2px solid green;
}

input + span {
  padding: 0 0.3rem;
}

input:invalid + span:after {
  content: "✖" / "Content is not valid";
  color: red;
}

input:valid + span:after {
  content: "✓" / "Content is valid";
  color: green;
}
```

#### Ergebnis

Kopieren Sie die URL dieser Seite und fügen Sie sie in das Eingabefeld ein. Sie werden einen grünen Umriss und ein grünes Häkchen sehen. Geben Sie eine andere URL ein, die nicht **mozilla.org** enthält oder eine ungültige URL, und Sie werden einen roten Umriss und ein rotes Kreuz sehen.

{{EmbedLiveSample("url-validation", "40px", , , , , "allow-forms")}}

Sehen Sie sich die Abschnitte [Musterüberprüfung](#musterüberprüfung) und [Verwendung von URL-Eingaben](#verwendung_von_url-eingaben) für weitere Beispiele an.

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
      <td><strong>Implizierte ARIA-Rolle</strong></td>
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

- [HTML-Formulare Leitfaden](/de/docs/Learn_web_development/Extensions/Forms)
- {{HTMLElement("input")}}
- [`<input type="tel">`](/de/docs/Web/HTML/Reference/Elements/input/tel)
- [`<input type="email">`](/de/docs/Web/HTML/Reference/Elements/input/email)
