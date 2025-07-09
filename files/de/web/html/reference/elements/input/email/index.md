---
title: <input type="email">
slug: Web/HTML/Reference/Elements/input/email
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

{{HTMLElement("input")}} Elemente des Typs **`email`** werden verwendet, um dem Benutzer das Eingeben und Bearbeiten einer E-Mail-Adresse zu ermöglichen, oder, wenn das [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple) Attribut angegeben ist, eine Liste von E-Mail-Adressen.

{{InteractiveExample("HTML Demo: &lt;input type=&quot;email&quot;&gt;", "tabbed-shorter")}}

```html interactive-example
<label for="email">Enter your example.com email:</label>

<input type="email" id="email" pattern=".+@example\.com" size="30" required />
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

Der Eingabewert wird automatisch validiert, um sicherzustellen, dass er entweder leer oder eine korrekt formatierte E-Mail-Adresse (oder eine Liste von Adressen) ist, bevor das Formular abgeschickt werden kann. Die {{cssxref(":valid")}} und {{cssxref(":invalid")}} CSS-Pseudoklassen werden je nach Bedarf automatisch angewendet, um visuell anzuzeigen, ob der aktuelle Wert des Feldes eine gültige E-Mail-Adresse ist oder nicht.

## Wert

Das [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) Attribut des {{HTMLElement("input")}} Elements enthält eine Zeichenkette, die automatisch dahingehend validiert wird, dass sie der Syntax einer E-Mail entspricht. Genauer gesagt gibt es drei mögliche Wertformate, die die Validierung bestehen:

1. Eine leere Zeichenkette ("") zeigt an, dass der Benutzer keinen Wert eingegeben hat oder dass der Wert entfernt wurde.
2. Eine einzelne korrekt gebildete E-Mail-Adresse. Dies bedeutet nicht unbedingt, dass die E-Mail-Adresse existiert, aber sie ist zumindest korrekt formatiert. Dies bedeutet `username@domain` oder `username@domain.tld`. Natürlich gibt es noch mehr dazu; siehe [Validierung](#validierung) für einen {{Glossary("regular_expression", "regulären Ausdruck")}}, der dem E-Mail-Adressvalidierungsalgorithmus entspricht.
3. Nur wenn das [`multiple`](/de/docs/Web/HTML/Reference/Elements/input#multiple) Attribut angegeben ist, kann der Wert eine Liste von korrekt formatierten, kommagetrennten E-Mail-Adressen sein. Jedes führende und nachfolgende Leerzeichen wird von jeder Adresse in der Liste entfernt.

Siehe [Validierung](#validierung) für Einzelheiten zur Validierung von E-Mail-Adressen, um sicherzustellen, dass sie korrekt formatiert sind.

## Zusätzliche Attribute

Zusätzlich zu den [globalen Attributen](/de/docs/Web/HTML/Reference/Global_attributes) und den Attributen, die auf alle {{HTMLElement("input")}} Elemente unabhängig von ihrem Typ angewendet werden, unterstützen `email` Eingaben die folgenden Attribute.

> [!NOTE]
> Das globale Attribut [`autocorrect`](/de/docs/Web/HTML/Reference/Global_attributes/autocorrect) kann zu E-Mail-Eingaben hinzugefügt werden, aber der gespeicherte Zustand ist immer `off`.

### list

Der Wert des list-Attributs ist die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}} Elements, das sich im selben Dokument befindet. Der {{HTMLElement("datalist")}} bietet eine Liste von vordefinierten Werten, die dem Benutzer als Eingabevorschläge angeboten werden. Alle Werte in der Liste, die nicht mit dem [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) kompatibel sind, werden nicht in den vorgeschlagenen Optionen enthalten. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert eingeben.

### maxlength

Die maximale Zeichenlänge (gemessen in {{Glossary("UTF-16", "UTF-16 Codeeinheiten")}}), die der Benutzer in das `email` Eingabefeld eingeben kann. Dieser Wert muss eine Ganzzahl von 0 oder höher sein. Wenn kein `maxlength` angegeben ist oder ein ungültiger Wert angegeben ist, hat das `email` Eingabefeld keine maximale Länge. Dieser Wert muss außerdem größer oder gleich dem Wert von `minlength` sein.

Bei der [Einschränkung der Validierung](/de/docs/Web/HTML/Guides/Constraint_validation) schlägt die Eingabe fehl, wenn die Länge des Textwertes des Feldes größer ist als `maxlength` {{Glossary("UTF-16", "UTF-16 Codeeinheiten")}}. Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### minlength

Die minimale Zeichenlänge (gemessen in {{Glossary("UTF-16", "UTF-16 Codeeinheiten")}}), die der Benutzer in das `email` Eingabefeld eingeben kann. Dieser Wert muss eine nicht negative Ganzzahl sein, die kleiner oder gleich dem durch `maxlength` angegebenen Wert ist. Wenn kein `minlength` angegeben ist oder ein ungültiger Wert angegeben ist, hat das `email` Eingabefeld keine minimale Länge.

Die Eingabe schlägt bei der [Einschränkung der Validierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl, wenn die Länge des in das Feld eingegebenen Textes kürzer ist als `minlength` {{Glossary("UTF-16", "UTF-16 Codeeinheiten")}}. Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### multiple

Ein boolesches Attribut, das, wenn es vorhanden ist, anzeigt, dass der Benutzer eine Liste von mehreren E-Mail-Adressen eingeben kann, die durch Kommas und optional durch Leerzeichen getrennt sind. Siehe [Erlauben mehrerer E-Mail-Adressen](#zulassen_mehrerer_e-mail-adressen) für ein Beispiel oder [HTML Attribut: multiple](/de/docs/Web/HTML/Reference/Attributes/multiple) für weitere Details.

> [!NOTE]
> Normalerweise muss der Benutzer, wenn Sie das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required) Attribut angeben, eine gültige E-Mail-Adresse eingeben, damit das Feld als gültig betrachtet wird. Wenn Sie jedoch das `multiple` Attribut hinzufügen, ist eine Liste von null E-Mail-Adressen (eine leere Zeichenkette oder eine, die vollständig aus Leerzeichen besteht) ein gültiger Wert. Mit anderen Worten, der Benutzer muss bei angegebenem `multiple` Attribut keine einzige E-Mail-Adresse eingeben, unabhängig vom Wert von `required`.

### pattern

Das `pattern` Attribut, wenn angegeben, ist ein regulärer Ausdruck, den der [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) der Eingabe erfüllen muss, um die [Einschränkung der Validierung](/de/docs/Web/HTML/Guides/Constraint_validation) zu bestehen. Es muss ein gültiger JavaScript-regulärer Ausdruck sein, wie er vom {{jsxref("RegExp")}} Typ verwendet wird und wie in unserem [Leitfaden für reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert; das `'u'` Flag wird beim Kompilieren des regulären Ausdrucks angegeben, sodass das Muster als eine Folge von Unicode-Codepunkten behandelt wird, anstelle von {{Glossary("ASCII", "ASCII")}}. Es sollten keine Schrägstriche um den Mustertext angegeben werden.

Wenn das angegebene Muster nicht angegeben oder ungültig ist, wird kein regulärer Ausdruck angewendet und dieses Attribut wird vollständig ignoriert.

> [!NOTE]
> Verwenden Sie das [`title`](/de/docs/Web/HTML/Reference/Elements/input#title) Attribut, um einen Text anzugeben, der von den meisten Browsern als Tooltip angezeigt wird, um zu erläutern, welche Anforderungen erfüllt sein müssen, um dem Muster zu entsprechen. Sie sollten auch andere erläuternde Texte in der Nähe einfügen.

Siehe den Abschnitt [Muster-Validierung](#muster-validierung) für Details und ein Beispiel.

### `placeholder`

Das `placeholder` Attribut ist eine Zeichenkette, die einen kurzen Hinweis darauf gibt, welche Art von Information im Feld erwartet wird. Es sollte ein Wort oder eine kurze Phrase sein, die den erwarteten Datentyp demonstriert, anstelle einer erklärenden Nachricht. Der Text _darf keine_ Zeilen- oder Seitenumbrüche enthalten.

Wenn die Richtung des Inhalts des Steuerungselements ({{Glossary("LTR", "LTR")}} oder {{Glossary("RTL", "RTL")}}) entgegengesetzt zur Richtung des Platzhalters sein muss, können Sie Unicode-Bidi-Algorithmusformatierungszeichen verwenden, um die Richtung innerhalb des Platzhalters zu überschreiben; siehe [Anleitung zur Verwendung von Unicode-Steuerelementen für bidi-Text](https://www.w3.org/International/questions/qa-bidi-unicode-controls) für weitere Informationen.

> [!NOTE]
> Vermeiden Sie es, das `placeholder` Attribut zu verwenden, wenn Sie können. Es ist nicht so semantisch nützlich wie andere Möglichkeiten, Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Siehe [`<input>` Labels](/de/docs/Web/HTML/Reference/Elements/input#labels) für weitere Informationen.

### `readonly`

Ein boolesches Attribut, das, wenn es vorhanden ist, bedeutet, dass dieses Feld nicht vom Benutzer bearbeitet werden kann. Sein `value` kann jedoch immer noch durch direktes Setzen der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) `value` Eigenschaft in JavaScript-Code geändert werden.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keine Auswirkung auf Eingaben, bei denen das `readonly` Attribut ebenfalls angegeben ist.

### `size`

Das `size` Attribut ist ein Zahlenwert, der angibt, wie viele Zeichen breit das Eingabefeld sein soll. Der Wert muss eine Zahl größer als null sein, und der Standardwert ist 20. Da sich die Zeichenbreiten unterscheiden, kann dies genau sein oder nicht und sollte nicht als solches angenommen werden; die resultierende Eingabe kann je nach Zeichen und den verwendeten Schriftarten ({{cssxref("font")}} Einstellungen) schmaler oder breiter als die angegebene Anzahl von Zeichen sein.

Dies legt _keine_ Begrenzung fest, wie viele Zeichen der Benutzer in das Feld eingeben kann. Es gibt lediglich an, wie viele Zeichen ungefähr gleichzeitig sichtbar sein können. Um eine Obergrenze für die Länge der Eingabedaten festzulegen, verwenden Sie das [`maxlength`](#maxlength) Attribut.

## Verwendung von E-Mail-Eingaben

E-Mail-Adressen gehören zu den am häufigsten eingegebenen Textformularen im Web; sie werden beim Anmelden auf Websites, beim Anfordern von Informationen, zur Bestätigung von Bestellungen, für Webmail usw. verwendet. Daher kann der `email` Eingabetyp Ihre Arbeit als Webentwickler erheblich vereinfachen, da er Ihre Arbeit bei der Erstellung der Benutzeroberfläche und der Logik für E-Mail-Adressen vereinfachen kann. Wenn Sie eine E-Mail-Eingabe mit dem richtigen `type` Wert, also `email`, erstellen, erhalten Sie eine automatische Validierung, dass der eingegebene Text zumindest in der korrekten Form vorliegt, um möglicherweise eine legitime E-Mail-Adresse zu sein. Dies kann helfen, Fälle zu vermeiden, in denen der Benutzer seine Adresse vertippt oder eine ungültige Adresse angibt.

Es ist jedoch wichtig zu beachten, dass dies nicht ausreicht, um sicherzustellen, dass der angegebene Text eine tatsächlich existierende E-Mail-Adresse ist, die dem Benutzer der Website entspricht oder in irgendeiner anderen Weise akzeptabel ist. Es stellt lediglich sicher, dass der Wert des Feldes korrekt formatiert ist, um eine E-Mail-Adresse zu sein.

> [!NOTE]
> Es ist auch wichtig, daran zu denken, dass ein Benutzer Ihre HTML-Datei hinter den Kulissen manipulieren kann, sodass Ihre Website _keinesfalls_ diese Validierung zu Sicherheitszwecken verwenden darf. Sie _müssen_ die E-Mail-Adresse auf der Serverseite jeder Transaktion verifizieren, bei der der bereitgestellte Text irgendwelche sicherheitsrelevante Auswirkungen haben könnte.

### Eine einfache E-Mail-Eingabe

Derzeit implementieren alle Browser, die dieses Element verwenden, es als standardmäßiges Textfeld mit grundlegenden Validierungsfunktionen. Die Spezifikation ermöglicht den Browsern jedoch Freiheit darin. Zum Beispiel könnte das Element mit dem integrierten Adressbuch des Geräts des Benutzers integriert werden, um das Auswählen von E-Mail-Adressen aus dieser Liste zu ermöglichen. In seiner einfachsten Form kann eine `email` Eingabe wie folgt umgesetzt werden:

```html
<input id="emailAddress" type="email" />
```

{{ EmbedLiveSample('A_basic_email_input', 600, 40) }}

Beachten Sie, dass es als gültig angesehen wird, wenn es leer ist und wenn eine einzelne gültig formatierte E-Mail-Adresse eingegeben wird, aber sonst nicht als gültig angesehen wird. Indem das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required) Attribut hinzugefügt wird, werden nur gültig gebildete E-Mail-Adressen erlaubt; die Eingabe wird nicht mehr als gültig betrachtet, wenn sie leer ist.

### Zulassen mehrerer E-Mail-Adressen

Durch Hinzufügen des [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple) booleschen Attributs kann die Eingabe so konfiguriert werden, dass sie mehrere E-Mail-Adressen akzeptiert.

```html
<input id="emailAddress" type="email" multiple />
```

{{ EmbedLiveSample('Allowing multiple email addresses', 600, 40) }}

Die Eingabe wird jetzt als gültig angesehen, wenn eine einzelne E-Mail-Adresse oder eine beliebige Anzahl von E-Mail-Adressen eingegeben werden, die durch Kommas und optional eine Anzahl von Leerzeichen getrennt sind.

> [!NOTE]
> Bei Verwendung von `multiple` darf der Wert _leer_ sein.

Einige Beispiele für gültige Zeichenfolgen, wenn `multiple` angegeben ist:

- `""`
- `"me@example"`
- `"me@example.org"`
- `"me@example.org,you@example.org"`
- `"me@example.org, you@example.org"`
- `"me@example.org,you@example.org, us@example.org"`

Einige Beispiele für ungültige Zeichenfolgen:

- `","`
- `"me"`
- `"me@example.org you@example.org"`

### Platzhalter

Manchmal ist es hilfreich, einen kontextspezifischen Hinweis darauf zu geben, in welcher Form die Eingabedaten erfolgen sollten. Dies kann besonders wichtig sein, wenn das Seitendesign keine beschreibenden Labels für jedes {{HTMLElement("input")}} bietet. Hier kommen **Platzhalter** ins Spiel. Ein Platzhalter ist ein Wert, der die Form des `value` demonstriert, indem er ein Beispiel für einen gültigen Wert anzeigt, das im Bearbeitungsfeld angezeigt wird, wenn der `value` des Elements "". Sobald Daten in das Feld eingegeben werden, verschwindet der Platzhalter; wenn das Feld geleert wird, erscheint der Platzhalter erneut.

Hier haben wir eine `email` Eingabe mit dem Platzhalter `sophie@example.com`. Beachten Sie, wie der Platzhalter verschwindet und erneut erscheint, während Sie den Inhalt des Bearbeitungsfeldes manipulieren.

```html
<input type="email" placeholder="sophie@example.com" />
```

{{ EmbedLiveSample('Placeholders', 600, 40) }}

### Steuerung der Eingabegröße

Sie können nicht nur die physische Länge des Eingabefeldes steuern, sondern auch die minimale und maximale Länge der zulässigen Eingabetexte selbst.

#### Physische Größe des Eingabeelements

Die physische Größe des Eingabefeldes kann mit dem [`size`](/de/docs/Web/HTML/Reference/Elements/input#size) Attribut gesteuert werden. Damit können Sie die Anzahl der Zeichen angeben, die das Eingabefeld gleichzeitig anzeigen kann. In diesem Beispiel ist das `email` Bearbeitungsfeld 15 Zeichen breit:

```html
<input type="email" size="15" />
```

{{ EmbedLiveSample('Physical_input_element_size', 600, 40) }}

#### Wertlänge des Elements

Die `size` ist unabhängig von der Längenbegrenzung der tatsächlich eingegebenen E-Mail-Adresse, sodass Sie Felder in einem kleinen Raum haben können, während Sie dennoch längere E-Mail-Adresseingaben zulassen. Sie können eine minimale Länge, in Zeichen, für die eingegebene E-Mail-Adresse mit dem [`minlength`](/de/docs/Web/HTML/Reference/Elements/input#minlength) Attribut angeben; ähnlich verwenden Sie [`maxlength`](/de/docs/Web/HTML/Reference/Elements/input#maxlength), um die maximale Länge der eingegebenen E-Mail-Adresse anzugeben.

Das untenstehende Beispiel erstellt ein E-Mail-Adresseingabefeld mit einer Breite von 32 Zeichen und erfordert, dass der Inhalt nicht kürzer als 3 Zeichen und nicht länger als 64 Zeichen ist.

```html
<input type="email" size="32" minlength="3" maxlength="64" />
```

{{EmbedLiveSample("Element_value_length", 600, 40)}}

### Vorgabeoptionen bereitstellen

#### Eine einzelne Vorgabe mit dem Value-Attribut bereitstellen

Wie immer können Sie für ein `email` Eingabefeld einen Standardwert festlegen, indem Sie sein [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) Attribut setzen:

```html
<input type="email" value="default@example.com" />
```

{{EmbedLiveSample("Providing_a_single_default_using_the_value_attribute", 600, 40)}}

#### Vorgeschlagene Werte anbieten

Einen Schritt weiter können Sie eine Liste von Standardoptionen bereitstellen, aus der der Benutzer auswählen kann, indem Sie das [`list`](/de/docs/Web/HTML/Reference/Elements/input#list) Attribut angeben. Dies begrenzt den Benutzer nicht auf diese Optionen, ermöglicht es ihm jedoch, häufiger verwendete E-Mail-Adressen schneller auszuwählen. Dies bietet auch Hinweise zu [`autocomplete`](/de/docs/Web/HTML/Reference/Elements/input#autocomplete). Das `list` Attribut gibt die ID eines {{HTMLElement("datalist")}} an, das wiederum pro vorgeschlagenem Wert ein {{HTMLElement("option")}} Element enthält; jedes `option` Element hat einen `value`, der dem entsprechenden vorgeschlagenen Wert für das E-Mail-Eingabefeld entspricht.

```html
<input type="email" size="40" list="defaultEmails" />

<datalist id="defaultEmails">
  <option value="jbond007@mi6.defence.gov.uk"></option>
  <option value="jbourne@unknown.net"></option>
  <option value="nfury@shield.org"></option>
  <option value="tony@starkindustries.com"></option>
  <option value="hulk@grrrrrrrr.arg"></option>
</datalist>
```

{{EmbedLiveSample("Offering_suggested_values", 600, 40)}}

Mit dem {{HTMLElement("datalist")}} Element und seinen {{HTMLElement("option")}}s an Ort und Stelle, bietet der Browser die angegebenen Werte als potenzielle Werte für die E-Mail-Adresse an; dies wird typischerweise als Popup- oder Drop-down-Menü mit den Vorschlägen präsentiert. Während die spezifische Benutzererfahrung von Browser zu Browser variieren kann, wird normalerweise beim Klicken in das Bearbeitungsfeld ein Dropdown mit den vorgeschlagenen E-Mail-Adressen präsentiert. Dann, während der Benutzer tippt, wird die Liste gefiltert, um nur passende Werte anzuzeigen. Jedes getippte Zeichen schränkt die Liste weiter ein, bis der Benutzer eine Auswahl trifft oder einen benutzerdefinierten Wert eingibt.

## Validierung

Für `email` Eingaben sind zwei Ebenen der Inhaltsvalidierung verfügbar. Zuerst gibt es die standardmäßige Validierungsebene, die für alle {{HTMLElement("input")}}s angeboten wird und automatisch sicherstellt, dass die Inhalte den Anforderungen entsprechen, um eine gültige E-Mail-Adresse zu sein. Aber es gibt auch die Möglichkeit, zusätzliche Filter hinzuzufügen, um sicherzustellen, dass Ihre eigenen spezifischen Anforderungen erfüllt werden, falls Sie welche haben.

> [!WARNING]
> HTML-Formularvalidierung ist _kein_ Ersatz für Skripte, die sicherstellen, dass die eingegebenen Daten im richtigen Format vorliegen. Es ist viel zu einfach, Anpassungen am HTML vorzunehmen, die es ermöglichen, die Validierung zu umgehen oder ganz zu entfernen. Es ist auch möglich, dass jemand Ihr HTML vollständig umgeht und die Daten direkt an Ihren Server übermittelt. Wenn Ihr serverseitiger Code die empfangenen Daten nicht validiert, könnte es zu einem Desaster kommen, wenn falsch formatierte Daten (oder Daten, die zu groß sind, den falschen Typ haben usw.) in Ihre Datenbank gelangen.

### Grundlegende Validierung

Browser bieten automatisch eine Validierung, um sicherzustellen, dass nur Text eingegeben wird, der dem Standardformat für Internet-E-Mail-Adressen entspricht, in das Eingabefeld eingegeben wird. Browser verwenden einen Algorithmus, der einem regulären Ausdruck entspricht:

```js
/^[\w.!#$%&'*+/=?^`{|}~-]+@[a-z\d](?:[a-z\d-]{0,61}[a-z\d])?(?:\.[a-z\d](?:[a-z\d-]{0,61}[a-z\d])?)*$/i;
```

Um mehr darüber zu erfahren, wie die Formularvalidierung funktioniert und wie Sie die {{cssxref(":valid")}} und {{cssxref(":invalid")}} CSS-Eigenschaften nutzen können, um die Eingabe basierend darauf zu gestalten, ob der aktuelle Wert gültig ist, siehe [Formulardatenvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation).

> [!NOTE]
> Es gibt bekannte Spezifikationsprobleme im Zusammenhang mit internationalen Domain-Namen und der Validierung von E-Mail-Adressen in HTML. Einzelheiten dazu finden Sie in [W3C Bug 15489](https://www.w3.org/Bugs/Public/show_bug.cgi?id=15489).

### Muster-Validierung

Wenn Sie möchten, dass die eingegebene E-Mail-Adresse zusätzlich eingeschränkt wird, können Sie das [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern) Attribut verwenden, um einen {{Glossary("regular_expression", "regulären Ausdruck")}} anzugeben, den der Wert erfüllen muss, damit er gültig ist. Wenn das [`multiple`](/de/docs/Web/HTML/Reference/Elements/input#multiple) Attribut angegeben ist, muss jedes einzelne Element in der durch Komma separierten Liste von Werten dem {{Glossary("regular_expression", "regulären Ausdruck")}} entsprechen.

Zum Beispiel, sagen wir, Sie erstellen eine Seite für Mitarbeiter von Best Startup Ever, Inc., die es ihnen ermöglicht, ihre IT-Abteilung um Hilfe zu bitten. In unserem vereinfachten Formular muss der Benutzer seine E-Mail-Adresse und eine Nachricht angeben, die das Problem beschreibt, bei dem er Hilfe benötigt. Wir möchten sicherstellen, dass der Benutzer nicht nur eine gültige E-Mail-Adresse angibt, sondern aus Sicherheitsgründen auch, dass die Adresse eine interne firmeninterne E-Mail-Adresse ist.

Da Eingaben vom Typ `email` sowohl gegen die Standard-E-Mail-Adressvalidierung als auch das angegebene [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern) validiert werden, können Sie dies einfach umsetzen. Schauen wir uns an, wie:

```css hidden
body {
  font: 16px sans-serif;
}

.emailBox {
  padding-bottom: 20px;
}

.messageBox {
  padding-bottom: 20px;
}

label {
  line-height: 22px;
}

label::after {
  content: ":";
}
```

```html
<form>
  <div class="emailBox">
    <label for="emailAddress">Your email address</label><br />
    <input
      id="emailAddress"
      type="email"
      size="64"
      maxlength="64"
      required
      placeholder="username@beststartupever.com"
      pattern=".+@beststartupever\.com"
      title="Please provide only a Best Startup Ever corporate email address" />
  </div>

  <div class="messageBox">
    <label for="message">Request</label><br />
    <textarea
      id="message"
      cols="80"
      rows="8"
      required
      placeholder="My shoes are too tight, and I have forgotten how to dance."></textarea>
  </div>
  <input type="submit" value="Send Request" />
</form>
```

{{EmbedLiveSample("Pattern_validation", 700, 300)}}

Unser {{HTMLElement("form")}} enthält ein {{HTMLElement("input")}} vom Typ `email` für die E-Mail-Adresse des Benutzers, ein {{HTMLElement("textarea")}}, um ihre Nachricht an die IT einzugeben, und ein `<input>` vom Typ [`"submit"`](/de/docs/Web/HTML/Reference/Elements/input/submit), das eine Schaltfläche zum Absenden des Formulars erstellt. Jede Texteingabe hat ein zugehöriges {{HTMLElement("label")}}, das den Benutzer wissen lässt, was von ihm erwartet wird.

Schauen wir uns die E-Mail-Adresseneingabe näher an. Ihre [`size`](/de/docs/Web/HTML/Reference/Elements/input#size) und [`maxlength`](/de/docs/Web/HTML/Reference/Elements/input#maxlength) Attribute sind beide auf 64 eingestellt, um Platz für 64 Zeichen einer E-Mail-Adresse zu bieten und um die Anzahl der tatsächlich eingegebenen Zeichen auf maximal 64 zu begrenzen. Das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required) Attribut ist angegeben, wodurch es zwingend erforderlich ist, dass eine gültige E-Mail-Adresse angegeben wird.

Ein passender [`placeholder`](/de/docs/Web/HTML/Reference/Elements/input#placeholder) wird angegeben—`username@beststartupever.com`—um zu zeigen, wie ein gültiger Eintrag aussehen sollte. Diese Zeichenkette veranschaulicht sowohl, dass eine E-Mail-Adresse eingegeben werden sollte, als auch dass es sich um ein Firmenkonto von beststartupever.com handeln sollte. Dies ist zusätzlich zur Tatsache, dass durch die Verwendung des Typs `email` der Text validiert wird, um sicherzustellen, dass er wie eine E-Mail-Adresse formatiert ist. Wenn der Text im Eingabefeld keine E-Mail-Adresse ist, erhalten Sie eine Fehlermeldung, die ungefähr so aussieht:

![Ungültige E-Mail-Adresse im Fehlerzustand mit einem Popout aus der Eingabe, das 'bitte geben Sie eine E-Mail-Adresse ein' anzeigt.](enter-valid-email-address.png)

Wenn wir es dabei belassen, würden wir zumindest auf legitime E-Mail-Adressen validieren. Aber wir wollen einen Schritt weiter gehen: Wir wollen sicherstellen, dass die E-Mail-Adresse tatsächlich im Format `[username]@beststartupever.com` vorliegt. Hier werden wir das [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern) verwenden. Wir setzen `pattern` auf `.+@beststartupever.com`. Dieser reguläre Ausdruck verlangt eine Zeichenkette, die aus mindestens einem beliebigen Zeichen besteht, gefolgt von einem "@" und der Domain "beststartupever.com".

Beachten Sie, dass dies bei weitem kein adäquater Filter für gültige E-Mail-Adressen ist; es würde Dinge wie " @beststartupever.com" (beachten Sie das führende Leerzeichen) oder "@@beststartupever.com" erlauben, von denen keines gültig ist. Der Browser führt jedoch sowohl den standardmäßigen E-Mail-Adressfilter als auch unser benutzerdefiniertes Muster gegen den angegebenen Text aus. Dadurch erhalten wir eine Validierung, die sagt: "Stellen Sie sicher, dass dies wie eine gültige E-Mail-Adresse aussieht, und wenn dies der Fall ist, stellen Sie sicher, dass es sich auch um eine beststartupever.com Adresse handelt."

Es ist ratsam, das [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title) Attribut zusammen mit `pattern` zu verwenden. Wenn Sie dies tun, _muss_ der `title` das Muster beschreiben. Das heißt, er sollte erklären, welches Format die Daten haben sollten, anstatt andere Informationen. Das liegt daran, dass der `title` möglicherweise als Teil einer Validierungsfehlermeldung angezeigt oder gesprochen wird. Zum Beispiel könnte der Browser die Nachricht "Der eingegebene Text entspricht nicht dem erforderlichen Muster." gefolgt von Ihrem angegebenen `title` präsentieren. Wenn Ihr `title` etwas wie "E-Mail-Adresse" ist, wäre das Ergebnis die Nachricht "Der eingegebene Text entspricht nicht dem erforderlichen Muster. E-Mail-Adresse", was nicht sehr hilfreich ist.

Stattdessen geben wir die Zeichenkette "Bitte geben Sie nur eine Corporate E-Mail-Adresse von Best Startup Ever an". Dadurch könnte die vollständige Fehlermeldung ungefähr lauten: "Der eingegebene Text entspricht nicht dem erforderlichen Muster. Bitte geben Sie nur eine Corporate E-Mail-Adresse von Best Startup Ever an."

![Eine gültige E-Mail-Adresse, aber die Eingabe ist im Fehlerzustand mit einem Popout aus der Eingabe mit dem Text 'Der eingegebene Text stimmt nicht mit dem erforderlichen Muster überein. Bitte geben Sie nur eine Corporate E-Mail-Adresse von Best Startup Ever an.'](email-pattern-match-bad.png)

> [!NOTE]
> Wenn Sie auf Probleme stoßen, während Sie Ihre Validierungsregulären Ausdrücke schreiben und diese nicht richtig funktionieren, überprüfen Sie die Konsole Ihres Browsers; dort könnten hilfreiche Fehlermeldungen zu finden sein, die Ihnen bei der Lösung des Problems helfen.

## Beispiele

Hier haben wir eine E-Mail-Eingabe mit der ID `emailAddress`, die bis zu einer maximalen Länge von 256 Zeichen zulässig ist. Das Eingabefeld selbst ist physisch 64 Zeichen breit und zeigt den Text `user@example.gov` als Platzhalter an, solange das Feld leer ist. Zusätzlich wird durch die Verwendung des [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple) Attributs das Feld so konfiguriert, dass der Benutzer null oder mehr E-Mail-Adressen eingeben kann, die durch Kommas getrennt sind, wie im Abschnitt [Erlauben mehrerer E-Mail-Adressen](#zulassen_mehrerer_e-mail-adressen) beschrieben. Als letzte Ergänzung enthält das [`list`](/de/docs/Web/HTML/Reference/Elements/input#list) Attribut die ID eines {{HTMLElement("datalist")}}, dessen {{HTMLElement("option")}}s eine Reihe von vorgeschlagenen Werten angeben, aus denen der Benutzer auswählen kann.

Als zusätzliche Ergänzung wird das {{HTMLElement("label")}} Element verwendet, um ein Label für das E-Mail-Eingabefeld zu erstellen, wobei sein [`for`](/de/docs/Web/HTML/Reference/Elements/label#for) Attribut auf die ID `emailAddress` des {{HTMLElement("input")}} Elements verweist. Durch die Verknüpfung der beiden Elemente auf diese Weise wird das Eingabefeld fokussiert, wenn auf das Label geklickt wird.

```html
<label for="emailAddress">Email</label><br />
<input
  id="emailAddress"
  type="email"
  placeholder="user@example.gov"
  list="defaultEmails"
  size="64"
  maxlength="256"
  multiple />

<datalist id="defaultEmails">
  <option value="jbond007@mi6.defence.gov.uk"></option>
  <option value="jbourne@unknown.net"></option>
  <option value="nfury@shield.org"></option>
  <option value="tony@starkindustries.com"></option>
  <option value="hulk@grrrrrrrr.arg"></option>
</datalist>
```

{{EmbedLiveSample('Examples', 600, 80)}}

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>
        Eine Zeichenkette, die eine E-Mail-Adresse darstellt oder
        leer
      </td>
    </tr>
    <tr>
      <td><strong>Ereignisse</strong></td>
      <td>
        [`change`](/de/docs/Web/API/HTMLElement/change_event) und
        [`input`](/de/docs/Web/API/Element/input_event)
      </td>
    </tr>
    <tr>
      <td><strong>Unterstützte Allgemeine Attribute</strong></td>
      <td>
        <a href="/de/docs/Web/HTML/Reference/Elements/input#autocomplete"><code>autocomplete</code></a>,
        <a href="/de/docs/Web/HTML/Reference/Elements/input#list"><code>list</code></a>,
        <a href="/de/docs/Web/HTML/Reference/Elements/input#maxlength"><code>maxlength</code></a>,
        <a href="/de/docs/Web/HTML/Reference/Elements/input#minlength"><code>minlength</code></a>,
        <a href="/de/docs/Web/HTML/Reference/Elements/input#multiple"><code>multiple</code></a>,
        <a href="/de/docs/Web/HTML/Reference/Elements/input#name"><code>name</code></a>,
        <a href="/de/docs/Web/HTML/Reference/Elements/input#pattern"><code>pattern</code></a>,
        <a href="/de/docs/Web/HTML/Reference/Elements/input#placeholder"><code>placeholder</code></a>,
        <a href="/de/docs/Web/HTML/Reference/Elements/input#readonly"><code>readonly</code></a>,
        <a href="/de/docs/Web/HTML/Reference/Elements/input#required"><code>required</code></a>,
        <a href="/de/docs/Web/HTML/Reference/Elements/input#size"><code>size</code></a>, und
        <a href="/de/docs/Web/HTML/Reference/Elements/input#type"><code>type</code></a>
      </td>
    </tr>
    <tr>
      <td><strong>IDL Attribute</strong></td>
      <td><code>list</code> und <code>value</code></td>
    </tr>
    <tr>
      <td><strong>DOM Schnittstelle</strong></td>
      <td><p>[`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)</p></td>
    </tr>
    <tr>
      <td><strong>Methoden</strong></td>
      <td>
        [`select()`](/de/docs/Web/API/HTMLInputElement/select)
      </td>
    </tr>
    <tr>
      <td><strong>Implizite ARIA-Rolle</strong></td>
      <td>
        ohne <code>list</code> Attribut:
        <code><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role">textbox</a></code><br />
        mit <code>list</code> Attribut: <code><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role">combobox</a></code>
      </td>
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
- [`<input type="url">`](/de/docs/Web/HTML/Reference/Elements/input/url)
- Attribute:
  - [`list`](/de/docs/Web/HTML/Reference/Elements/input#list)
  - [`minlength`](/de/docs/Web/HTML/Reference/Attributes/minlength)
  - [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength)
  - [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple)
  - [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern)
  - [`placeholder`](/de/docs/Web/HTML/Reference/Elements/input#placeholder)
  - [`readonly`](/de/docs/Web/HTML/Reference/Attributes/readonly)
  - [`size`](/de/docs/Web/HTML/Reference/Attributes/size)
