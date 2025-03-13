---
title: <input type="email">
slug: Web/HTML/Element/input/email
l10n:
  sourceCommit: c9dfe0dcc81a7414922637600bf318156bf83387
---

{{HTMLSidebar}}

{{HTMLElement("input")}} Elemente vom Typ **`email`** werden verwendet, um dem Benutzer das Eingeben und Bearbeiten einer E-Mail-Adresse zu ermöglichen oder, wenn das [`multiple`](/de/docs/Web/HTML/Attributes/multiple) Attribut angegeben ist, einer Liste von E-Mail-Adressen.

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

Der Eingabewert wird automatisch validiert, um sicherzustellen, dass er entweder leer oder eine korrekt formatierte E-Mail-Adresse (oder Liste von Adressen) ist, bevor das Formular abgeschickt werden kann. Die CSS-Pseudoklassen {{cssxref(":valid")}} und {{cssxref(":invalid")}} werden automatisch angewendet, um visuell anzuzeigen, ob der aktuelle Wert des Feldes eine gültige E-Mail-Adresse ist oder nicht.

## Wert

Das [`value`](/de/docs/Web/HTML/Element/input#value) Attribut des {{HTMLElement("input")}} Elements enthält einen String, der automatisch dahingehend validiert wird, dass er der E-Mail-Syntax entspricht. Genauer gesagt gibt es drei mögliche Wertformate, die die Validierung bestehen:

1. Ein leerer String ("") zeigt an, dass der Benutzer keinen Wert eingegeben oder den Wert entfernt hat.
2. Eine einzelne korrekt geformte E-Mail-Adresse. Dies bedeutet nicht unbedingt, dass die E-Mail-Adresse existiert, aber sie ist zumindest korrekt formatiert. Das bedeutet `username@domain` oder `username@domain.tld`. Es steckt natürlich mehr dahinter; sehen Sie [Validierung](#validierung) für einen {{Glossary("regular_expression", "regulären Ausdruck")}}, der den E-Mail-Validierungsalgorithmus abbildet.
3. Nur wenn das [`multiple`](/de/docs/Web/HTML/Element/input#multiple) Attribut angegeben ist, kann der Wert eine Liste von korrekt geformten, durch Kommata getrennten E-Mail-Adressen sein. Jegliche vorangestellten und nachfolgenden Leerzeichen werden von jeder Adresse in der Liste entfernt.

Details zur Validierung von E-Mail-Adressen, um sicherzustellen, dass sie korrekt formatiert sind, finden Sie unter [Validierung](#validierung).

## Zusätzliche Attribute

Neben den [globalen Attributen](/de/docs/Web/HTML/Global_attributes) und den Attributen, die auf alle {{HTMLElement("input")}} Elemente angewendet werden, unabhängig von ihrem Typ, unterstützen `email` Eingaben die folgenden Attribute.

> [!NOTE]
> Das globale [`autocorrect`](/de/docs/Web/HTML/Global_attributes/autocorrect) Attribut kann zu E-Mail-Eingaben hinzugefügt werden, aber der gespeicherte Zustand ist immer `off`.

### list

Der Wert des list Attributs ist die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}} Elements, das sich im selben Dokument befindet. Die {{HTMLElement("datalist")}} stellt eine Liste von vordefinierten Werten bereit, die dem Benutzer für diese Eingabe vorgeschlagen werden. Jegliche Werte in der Liste, die nicht mit dem [`type`](/de/docs/Web/HTML/Element/input#type) kompatibel sind, werden in den vorgeschlagenen Optionen nicht berücksichtigt. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert eingeben.

### maxlength

Die maximale Zeichenanzahl (gemessen in UTF-16 Codeeinheiten), die der Benutzer in das `email` Eingabefeld eingeben kann. Dies muss eine Ganzzahl mit einem Wert von 0 oder höher sein. Wenn kein `maxlength` angegeben ist oder ein ungültiger Wert angegeben wird, hat das `email` Eingabefeld keine maximale Länge. Dieser Wert muss auch größer oder gleich dem Wert von `minlength` sein.

Die Eingabe wird die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) nicht bestehen, wenn die Länge des Textwertes des Feldes größer ist als `maxlength` UTF-16 Codeeinheiten. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### minlength

Die minimale Zeichenanzahl (gemessen in UTF-16 Codeeinheiten), die der Benutzer in das `email` Eingabefeld eingeben kann. Dies muss ein nichtnegativer Ganzzahlenwert sein, der kleiner oder gleich dem durch `maxlength` angegebenen Wert ist. Wenn kein `minlength` angegeben ist oder ein ungültiger Wert angegeben wird, hat das `email` Eingabefeld keine Mindestlänge.

Die Eingabe wird die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) nicht bestehen, wenn die Länge des in das Feld eingegebenen Textes kürzer ist als `minlength` UTF-16 Codeeinheiten. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### multiple

Ein boolesches Attribut, das, wenn vorhanden, anzeigt, dass der Benutzer eine Liste mehrerer E-Mail-Adressen eingeben kann, die durch Kommata und, optional, Leerzeichen getrennt sind. Sehen Sie [Mehrere E-Mail-Adressen zulassen](#mehrere_e-mail-adressen_erlauben) für ein Beispiel oder [HTML-Attribut: multiple](/de/docs/Web/HTML/Attributes/multiple) für weitere Details.

> [!NOTE]
> Normalerweise, wenn Sie das [`required`](/de/docs/Web/HTML/Element/input#required) Attribut angeben, muss der Benutzer eine gültige E-Mail-Adresse eingeben, damit das Feld als gültig angesehen wird. Wenn Sie jedoch das `multiple` Attribut hinzufügen, ist eine Liste von null E-Mail-Adressen (ein leerer String oder einer, der nur aus Leerzeichen besteht) ein gültiger Wert. Mit anderen Worten: Der Benutzer muss nicht einmal eine einzige E-Mail-Adresse eingeben, wenn `multiple` angegeben ist, unabhängig vom Wert von `required`.

### pattern

Das `pattern` Attribut ist, wenn angegeben, ein regulärer Ausdruck, den der [`value`](/de/docs/Web/HTML/Element/input#value) der Eingabe erfüllen muss, damit der Wert die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) besteht. Es muss ein gültiger JavaScript-Regulärer Ausdruck sein, wie er von dem {{jsxref("RegExp")}} Typ verwendet wird, und wie in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert ist; das `'u'` Flag wird beim Kompilieren des regulären Ausdrucks angegeben, sodass das Muster als eine Sequenz von Unicode-Codepunkten, anstatt als {{Glossary("ASCII", "ASCII")}}, behandelt wird. Keine Schrägstriche sollten um den Text des Musters angegeben werden.

Wenn das angegebene Muster nicht angegeben oder ungültig ist, wird kein regulärer Ausdruck angewendet und dieses Attribut wird vollständig ignoriert.

> [!NOTE]
> Verwenden Sie das [`title`](/de/docs/Web/HTML/Element/input#title) Attribut, um Text anzugeben, den die meisten Browser als Tooltip anzeigen, um zu erklären, was die Anforderungen sind, um das Muster zu erfüllen. Sie sollten auch andere erklärende Texte in der Nähe hinzufügen.

Sehen Sie den Abschnitt [Mustervalidierung](#mustervalidierung) für Details und ein Beispiel.

### `placeholder`

Das `placeholder` Attribut ist ein String, der dem Benutzer einen kurzen Hinweis darauf gibt, welche Art von Informationen in dem Feld erwartet werden. Es sollte sich um ein Wort oder eine kurze Phrase handeln, die die erwartete Art der Daten demonstriert, anstatt einer erklärenden Nachricht. Der Text _darf_ keine Wagenrückläufe oder Zeilenwechsel enthalten.

Wenn der Inhalt der Steuerung eine Textflussrichtung ({{Glossary("LTR", "LTR")}} oder {{Glossary("RTL", "RTL")}}) hat, aber der Platzhalter in der entgegengesetzten Textflussrichtung präsentiert werden muss, können Sie Unicode-Bidirektionssteuerzeichen verwenden, um die Textflussrichtung innerhalb des Platzhalters zu überschreiben; sehen Sie [Wie man Unicode-Steuerzeichen für bidi Text verwendet](https://www.w3.org/International/questions/qa-bidi-unicode-controls) für mehr Informationen.

> [!NOTE]
> Vermeiden Sie, wenn möglich, das `placeholder` Attribut. Es ist nicht so semantisch nützlich wie andere Möglichkeiten, Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Sehen Sie [`<input>` Labels](/de/docs/Web/HTML/Element/input#labels) für mehr Informationen.

### `readonly`

Ein boolesches Attribut, das, wenn vorhanden, bedeutet, dass dieses Feld vom Benutzer nicht bearbeitet werden kann. Sein `value` kann jedoch weiterhin durch direktes Setzen der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) `value` Eigenschaft per JavaScript-Code geändert werden.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keine Auswirkungen auf Eingaben, die ebenfalls das `readonly` Attribut spezifiziert haben.

### `size`

Das `size` Attribut ist ein Zahlenwert, der angibt, wie viele Zeichen breit das Eingabefeld sein soll. Der Wert muss eine Zahl größer als null sein, und der Standardwert ist 20. Da Zeichenbreiten variieren, kann dies mehr oder weniger genau sein und sollte nicht darauf verlassen werden; das resultierende Eingabefeld kann schmaler oder breiter sein als die angegebene Anzahl von Zeichen, abhängig von den Zeichen und der Schriftart ({{cssxref("font")}} Einstellungen in Verwendung).

Dies setzt _kein_ Limit, wie viele Zeichen der Benutzer in das Feld eingeben kann. Es gibt nur an, wie viele ungefähr gleichzeitig gesehen werden können. Um eine Obergrenze für die Länge der Eingabedaten festzulegen, verwenden Sie das [`maxlength`](#maxlength) Attribut.

## Verwendung von E-Mail-Eingaben

E-Mail-Adressen sind eine der häufigsten Formen von eingegebenen Textdaten im Web; sie werden beim Einloggen auf Websites verwendet, beim Anfordern von Informationen, um Bestätigungen zu erhalten, für Webmail und so weiter. Daher kann der Eingabetyp `email` Ihre Arbeit als Webentwickler erheblich erleichtern, da er helfen kann, Ihre Arbeit bei der Erstellung der Benutzeroberfläche und Logik für E-Mail-Adressen zu vereinfachen. Wenn Sie ein E-Mail-Eingabefeld mit dem richtigen `type` Wert, `email`, erstellen, erhalten Sie automatische Validierung, dass der eingegebene Text zumindest in der korrekten Form ist, um möglicherweise eine legitime E-Mail-Adresse zu sein. Dies kann helfen, Fälle zu vermeiden, in denen der Benutzer seine Adresse falsch eingibt oder eine ungültige Adresse angibt.

Es ist jedoch wichtig zu beachten, dass dies nicht ausreicht, um sicherzustellen, dass der angegebene Text eine E-Mail-Adresse ist, die tatsächlich existiert, dem Benutzer der Website entspricht oder in irgendeiner anderen Weise akzeptabel ist. Es wird sichergestellt, dass der Wert des Feldes korrekt formatiert ist, um eine E-Mail-Adresse zu sein.

> [!NOTE]
> Es ist auch entscheidend zu erinnern, dass ein Benutzer Ihr HTML hinter den Kulissen verändern kann, sodass Ihre Website _diese Validierung nicht_ für Sicherheitszwecke verwenden darf. Sie _müssen_ die E-Mail-Adresse auf der Serverseite jeder Transaktion verifizieren, bei der der bereitgestellte Text irgendwelche Sicherheitsimplikationen haben könnte.

### Eine grundlegende E-Mail-Eingabe

Derzeit implementieren alle Browser, die dieses Element implementieren, es als ein standardmäßiges Texteingabefeld mit grundlegenden Validierungsfunktionen. Die Spezifikation ermöglicht es den Browsern jedoch sich diesbezüglich Freiheit zu nehmen. Zum Beispiel könnte das Element mit dem integrierten Adressbuch des Geräts des Benutzers integriert werden, um das Auswählen von E-Mail-Adressen aus dieser Liste zu ermöglichen. In seiner grundlegendsten Form kann eine `email` Eingabe wie folgt implementiert werden:

```html
<input id="emailAddress" type="email" />
```

{{EmbedLiveSample('A_basic_email_input', 600, 40)}}

Beachten Sie, dass es als gültig gilt, wenn es leer ist und wenn eine einzelne korrekt formatierte E-Mail-Adresse eingegeben wird, aber sonst als ungültig angesehen wird. Durch Hinzufügen des [`required`](/de/docs/Web/HTML/Element/input#required) Attributs werden nur korrekt geformte E-Mail-Adressen erlaubt; die Eingabe wird nicht mehr als gültig angesehen, wenn sie leer ist.

### Mehrere E-Mail-Adressen erlauben

Durch Hinzufügen des [`multiple`](/de/docs/Web/HTML/Attributes/multiple) booleschen Attributs kann die Eingabe konfiguriert werden, um mehrere E-Mail-Adressen zu akzeptieren.

```html
<input id="emailAddress" type="email" multiple />
```

{{EmbedLiveSample('Allowing multiple email addresses', 600, 40)}}

Die Eingabe wird nun als gültig angesehen, wenn eine einzelne E-Mail-Adresse eingegeben wird, oder wenn irgendeine Anzahl von E-Mail-Adressen, getrennt durch Kommata und optional durch eine Anzahl von Leerzeichen, vorhanden ist.

> [!NOTE]
> Wenn `multiple` verwendet wird, darf der Wert _leer_ sein.

Einige Beispiele für gültige Strings, wenn `multiple` angegeben ist:

- `""`
- `"me@example"`
- `"me@example.org"`
- `"me@example.org,you@example.org"`
- `"me@example.org, you@example.org"`
- `"me@example.org,you@example.org, us@example.org"`

Einige Beispiele für ungültige Strings:

- `","`
- `"me"`
- `"me@example.org you@example.org"`

### Platzhalter

Manchmal ist es hilfreich, einen Hinweis im Kontext anzubieten, in welcher Form die Eingabedaten vorliegen sollten. Dies kann besonders wichtig sein, wenn das Seitendesign keine beschreibenden Labels für jedes {{HTMLElement("input")}} bietet. Hier kommen **Platzhalter** ins Spiel. Ein Platzhalter ist ein Wert, der die Form der `value` durch das Präsentieren eines Beispiels eines gültigen Werts demonstriert, der im Bearbeitungsfeld angezeigt wird, wenn der `value` des Elements "". Sobald Daten in das Feld eingegeben werden, verschwindet der Platzhalter; wird das Feld geleert, erscheint der Platzhalter wieder.

Hier haben wir eine `email` Eingabe mit dem Platzhalter `sophie@example.com`. Beachten Sie, wie der Platzhalter verschwindet und wieder erscheint, während Sie den Inhalt des Bearbeitungsfeldes manipulieren.

```html
<input type="email" placeholder="sophie@example.com" />
```

{{EmbedLiveSample('Placeholders', 600, 40)}}

### Steuerung der Eingabegröße

Sie können nicht nur die physische Länge des Eingabefeldes, sondern auch die minimalen und maximalen Längen für den Eingabetext selbst steuern.

#### Physische Eingabeelementgröße

Die physische Größe des Eingabefeldes kann mit dem [`size`](/de/docs/Web/HTML/Element/input#size) Attribut gesteuert werden. Mit ihm können Sie angeben, wie viele Zeichen das Eingabefeld gleichzeitig anzeigen kann. In diesem Beispiel ist das `email` Bearbeitungsfeld 15 Zeichen breit:

```html
<input type="email" size="15" />
```

{{EmbedLiveSample('Physical_input_element_size', 600, 40)}}

#### Elementwertlänge

Die `size` ist getrennt von der Längenbeschränkung der eingegebenen E-Mail-Adresse selbst, sodass Sie Felder in einem kleinen Raum unterbringen können, während Sie trotzdem längere E-Mail-Adresszeichenfolgen zulassen. Sie können eine Mindestlänge in Zeichen für die eingegebene E-Mail-Adresse mit dem [`minlength`](/de/docs/Web/HTML/Element/input#minlength) Attribut festlegen; verwenden Sie ebenso [`maxlength`](/de/docs/Web/HTML/Element/input#maxlength) zur Festlegung der maximalen Länge der eingegebenen E-Mail-Adresse.

Das folgende Beispiel erstellt ein 32 Zeichen breites E-Mail-Adresseneingabefeld, welches erfordert, dass der Inhalt nicht kürzer als 3 Zeichen und nicht länger als 64 Zeichen ist.

```html
<input type="email" size="32" minlength="3" maxlength="64" />
```

{{EmbedLiveSample("Element_value_length", 600, 40)}}

### Bereitstellung von Standardoptionen

#### Bereitstellung eines einzelnen Standards durch das value Attribut

Wie immer können Sie einen Standardwert für ein `email` Eingabefeld angeben, indem Sie dessen [`value`](/de/docs/Web/HTML/Element/input#value) Attribut setzen:

```html
<input type="email" value="default@example.com" />
```

{{EmbedLiveSample("Providing_a_single_default_using_the_value_attribute", 600, 40)}}

#### Angebot von vorgeschlagenen Werten

Einen Schritt weitergehend können Sie eine Liste von Standardoptionen bereitstellen, aus denen der Benutzer auswählen kann, indem Sie das [`list`](/de/docs/Web/HTML/Element/input#list) Attribut verwenden. Dies beschränkt den Benutzer nicht auf diese Optionen, bietet jedoch die Möglichkeit, gebräuchlichere E-Mail-Adressen schneller auszuwählen. Dies bietet auch Hinweise für [`autocomplete`](/de/docs/Web/HTML/Element/input#autocomplete). Das `list` Attribut spezifiziert die ID eines {{HTMLElement("datalist")}}, das wiederum ein {{HTMLElement("option")}} Element pro vorgeschlagenem Wert enthält; der `value` jedes `option` ist der entsprechende vorgeschlagene Wert für das E-Mail-Eingabefeld.

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

Mit dem {{HTMLElement("datalist")}} Element und seinen {{HTMLElement("option")}}s an Ort und Stelle bietet der Browser die angegebenen Werte als potenzielle Werte für die E-Mail-Adresse an; dies wird normalerweise als Popup oder Dropdown-Menü mit den Vorschlägen präsentiert. Obwohl das spezifische Benutzererlebnis von einem Browser zum anderen variieren kann, präsentiert das Klicken in das Bearbeitungsfeld normalerweise ein Dropdown mit den vorgeschlagenen E-Mail-Adressen. Während der Benutzer tippt, wird die Liste gefiltert, um nur übereinstimmende Werte anzuzeigen. Jedes getippte Zeichen verengt die Liste, bis der Benutzer eine Auswahl trifft oder einen benutzerdefinierten Wert eingibt.

## Validierung

Es gibt zwei Ebenen der Inhaltsvalidierung für `email` Eingaben. Erstens gibt es die Standardvalidierungsebene, die allen {{HTMLElement("input")}}s zur Verfügung steht und automatisch sicherstellt, dass der Inhalt den Anforderungen entspricht, um eine gültige E-Mail-Adresse zu sein. Aber es gibt auch die Option, zusätzliche Filter hinzuzufügen, um sicherzustellen, dass Ihre eigenen speziellen Bedürfnisse erfüllt werden, falls Sie welche haben.

> [!WARNING]
> Die HTML-Formularvalidierung ist _kein_ Ersatz für Skripte, die sicherstellen, dass die eingegebenen Daten im richtigen Format sind. Es ist viel zu einfach für jemanden, Änderungen am HTML vorzunehmen, die es ihm erlauben, die Validierung zu umgehen oder völlig zu entfernen. Es ist auch möglich, dass jemand Ihr HTML vollständig umgeht und die Daten direkt an Ihren Server übermittelt. Wenn Ihr Serverseitencode die empfangenen Daten nicht validiert, könnte es zu einem Desaster kommen, wenn falsch formatierte Daten (oder Daten, die zu groß sind, den falschen Typ haben usw.) in Ihre Datenbank eingegeben werden.

### Basisvalidierung

Browser stellen automatisch sicher, dass nur Text, der dem Standardformat für Internet-E-Mail-Adressen entspricht, in das Eingabefeld eingetragen wird. Browser verwenden einen Algorithmus, der einem regulären Ausdruck entspricht:

```js
/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
```

Um mehr darüber zu erfahren, wie die Formularvalidierung funktioniert und wie Sie die Eigenschaften {{cssxref(":valid")}} und {{cssxref(":invalid")}} nutzen können, um die Eingabe abhängig davon zu stylen, ob der aktuelle Wert gültig ist, sehen Sie [Formulardatenvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation).

> [!NOTE]
> Es gibt bekannte Spezifikationsprobleme im Zusammenhang mit internationalen Domainnamen und der Validierung von E-Mail-Adressen in HTML. Siehe [W3C Fehler 15489](https://www.w3.org/Bugs/Public/show_bug.cgi?id=15489) für Details.

### Mustervalidierung

Falls Sie die eingegebene E-Mail-Adresse weiter beschränken müssen als nur "jede Zeichenfolge, die wie eine E-Mail-Adresse aussieht", können Sie das [`pattern`](/de/docs/Web/HTML/Element/input#pattern) Attribut verwenden, um einen {{Glossary("regular_expression", "regulären Ausdruck")}} anzugeben, den der Wert erfüllen muss, damit er gültig ist. Wenn das [`multiple`](/de/docs/Web/HTML/Element/input#multiple) Attribut angegeben ist, muss jedes einzelne Element in der kommaseparierten Liste von Werten den {{Glossary("regular_expression", "regulären Ausdruck")}} erfüllen.

Zum Beispiel, nehmen wir an, Sie erstellen eine Seite für Mitarbeiter von Best Startup Ever, Inc., die es ihnen ermöglicht, ihre IT-Abteilung um Hilfe zu kontaktieren. In unserem vereinfachten Formular muss der Benutzer seine E-Mail-Adresse eingeben und eine Nachricht mit der Beschreibung des Problems, bei dem er Hilfe benötigt. Wir möchten sicherstellen, dass der Benutzer nicht nur eine gültige E-Mail-Adresse angibt, sondern aus Sicherheitsgründen muss es eine interne Unternehmens-E-Mail-Adresse sein.

Da Eingaben vom Typ `email` sowohl gegen die Standard-E-Mail-Adressvalidierung als auch das angegebene [`pattern`](/de/docs/Web/HTML/Element/input#pattern) validiert werden, können Sie dies einfach implementieren. Lassen Sie uns sehen, wie:

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

Unser {{HTMLElement("form")}} enthält eine {{HTMLElement("input")}} vom Typ `email` für die E-Mail-Adresse des Benutzers, ein {{HTMLElement("textarea")}}, um ihre Nachricht an die IT einzugeben und ein `<input>` vom Typ [`"submit"`](/de/docs/Web/HTML/Element/input/submit), welches einen Button zum Absenden des Formulars erstellt. Jede Texteingabe hat ein {{HTMLElement("label")}}, das mit ihr verbunden ist, um dem Benutzer mitzuteilen, was von ihm erwartet wird.

Schauen wir genauer auf die E-Mail-Adresseneingabe. Ihre [`size`](/de/docs/Web/HTML/Element/input#size) und [`maxlength`](/de/docs/Web/HTML/Element/input#maxlength) Attribute sind beide auf 64 gesetzt, um Platz für 64 Zeichen der E-Mail-Adresse zu zeigen und die Anzahl der tatsächlich eingegebenen Zeichen auf maximal 64 zu begrenzen. Das [`required`](/de/docs/Web/HTML/Element/input#required) Attribut ist angegeben und macht es obligatorisch, dass eine gültige E-Mail-Adresse bereitgestellt wird.

Ein entsprechender [`placeholder`](/de/docs/Web/HTML/Element/input#placeholder) ist vorhanden — `username@beststartupever.com` — um zu demonstrieren, was eine gültige Eingabe ausmacht. Dieser String demonstriert sowohl, dass eine E-Mail-Adresse eingegeben werden sollte, als auch wird angedeutet, dass es sich um ein Unternehmens-Beststartupever.com-Konto handeln sollte. Dies ist zusätzlich zu der Tatsache, dass die Verwendung von Typ `email` den Text so validiert, dass er sicherstellt, dass er im E-Mail-Adressformat vorliegt. Wenn der Text im Eingabefeld keine E-Mail-Adresse ist, erhalten Sie eine Fehlermeldung, die etwa wie folgt aussieht:

![Ungültige E-Mail-Adresse im Fehlerzustand mit einem Popup aus dem Eingabefeld, auf dem 'bitte eine E-Mail-Adresse eingeben' steht.](enter-valid-email-address.png)

Wenn wir die Dinge dabei belassen, würden wir zumindest auf legitime E-Mail-Adressen validieren. Aber wir möchten noch einen Schritt weiter gehen: Wir möchten sicherstellen, dass die E-Mail-Adresse tatsächlich in der Form `[username]@beststartupever.com` vorliegt. Hier verwenden wir [`pattern`](/de/docs/Web/HTML/Element/input#pattern). Wir setzen `pattern` auf `.+@beststartupever.com`. Dieser reguläre Ausdruck verlangt eine Zeichenfolge, die aus mindestens einem beliebigen Zeichen, dann einem "@" gefolgt von dem Domänennamen "beststartupever.com" besteht.

Beachten Sie, dass dies nicht einmal ansatzweise ein adäquater Filter für gültige E-Mail-Adressen ist; es würde Dinge wie " @beststartupever.com" (beachten Sie das führende Leerzeichen) oder "@@beststartupever.com", die beide ungültig sind, zulassen. Der Browser führt jedoch sowohl den Standard-E-Mail-Adressfilter als auch unser benutzerdefiniertes Muster an dem angegebenen Text aus. Dadurch erhalten wir eine Validierung, die besagt: "Stellen Sie sicher, dass dies einer gültigen E-Mail-Adresse ähnelt und wenn ja, stellen Sie sicher, dass es sich um eine beststartupever.com Adresse handelt."

Es wird empfohlen, das [`title`](/de/docs/Web/HTML/Global_attributes/title) Attribut zusammen mit `pattern` zu verwenden. Sollte dies der Fall sein, _muss_ `title` das Muster beschreiben. Das heißt, es sollte erklären, welches Format die Daten annehmen sollten, anstatt irgendwelche anderen Informationen. Denn `title` könnte als Teil einer Validierungsfehlermeldung angezeigt oder gesprochen werden. Zum Beispiel könnte der Browser die Meldung "Der eingegebene Text entspricht nicht dem erforderlichen Muster." gefolgt von Ihrem angegebenen `title` präsentieren. Wenn Ihr `title` etwas wie "E-Mail-Adresse" ist, wäre das Ergebnis die Nachricht "Der eingegebene Text entspricht nicht dem erforderlichen Muster. E-Mail-Adresse", was nicht sehr gut ist.

Aus diesem Grund geben wir stattdessen den String "Bitte nur eine Best Startup Ever Firmen-E-Mail-Adresse angeben" an. Dadurch könnte die resultierende vollständige Fehlermeldung etwa so lauten: "Der eingegebene Text entspricht nicht dem erforderlichen Muster. Bitte nur eine Best Startup Ever Firmen-E-Mail-Adresse angeben."

![Eine gültige E-Mail-Adresse, aber die Eingabe befindet sich im Fehlerzustand mit einem Popup aus der Eingabe, das 'Der eingegebene Text entspricht nicht dem erforderlichen Muster. Bitte nur eine Best Startup Ever Firmen-E-Mail-Adresse angeben.' liest.](email-pattern-match-bad.png)

> [!NOTE]
> Wenn Sie Probleme beim Erstellen Ihrer Validierungsregulären Ausdrücke haben und diese nicht richtig funktionieren, überprüfen Sie die Konsole Ihres Browsers; dort könnten hilfreiche Fehlermeldungen sein, die Ihnen bei der Lösung des Problems helfen.

## Beispiele

Hier haben wir eine E-Mail-Eingabe mit der ID `emailAddress`, die bis zu einer maximalen Länge von 256 Zeichen erlaubt ist. Das Eingabefeld selbst ist physisch 64 Zeichen breit und zeigt den Text `user@example.gov` als Platzhalter an, wann immer das Feld leer ist. Zusätzlich ist durch die Verwendung des [`multiple`](/de/docs/Web/HTML/Attributes/multiple) Attributs das Feld so konfiguriert, dass es dem Benutzer erlaubt ist, null oder mehr E-Mail-Adressen einzugeben, die durch Kommata getrennt sind, wie in [Mehrere E-Mail-Adressen zulassen](#mehrere_e-mail-adressen_erlauben) beschrieben. Als letzte Ergänzung enthält das [`list`](/de/docs/Web/HTML/Element/input#list) Attribut die ID einer {{HTMLElement("datalist")}}, deren {{HTMLElement("option")}}s eine Reihe von vorgeschlagenen Werten angeben, aus denen der Benutzer wählen kann.

Als zusätzliche Note wird das {{HTMLElement("label")}} Element verwendet, um ein Label für das E-Mail-Eingabefeld zu erstellen, wobei sein [`for`](/de/docs/Web/HTML/Element/label#for) Attribut die `emailAddress` ID des {{HTMLElement("input")}} Elements referenziert. Indem die beiden Elemente auf diese Weise verbunden werden, fokussiert ein Klick auf das Label das Eingabelement.

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
        Ein String, der eine E-Mail-Adresse darstellt oder
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
      <td><strong>Unterstützte allgemeine Attribute</strong></td>
      <td>
        <a href="/de/docs/Web/HTML/Element/input#autocomplete"><code>autocomplete</code></a>,
        <a href="/de/docs/Web/HTML/Element/input#list"><code>list</code></a>,
        <a href="/de/docs/Web/HTML/Element/input#maxlength"><code>maxlength</code></a>,
        <a href="/de/docs/Web/HTML/Element/input#minlength"><code>minlength</code></a>,
        <a href="/de/docs/Web/HTML/Element/input#multiple"><code>multiple</code></a>,
        <a href="/de/docs/Web/HTML/Element/input#name"><code>name</code></a>,
        <a href="/de/docs/Web/HTML/Element/input#pattern"><code>pattern</code></a>,
        <a href="/de/docs/Web/HTML/Element/input#placeholder"><code>placeholder</code></a>,
        <a href="/de/docs/Web/HTML/Element/input#readonly"><code>readonly</code></a>,
        <a href="/de/docs/Web/HTML/Element/input#required"><code>required</code></a>,
        <a href="/de/docs/Web/HTML/Element/input#size"><code>size</code></a>, und
        <a href="/de/docs/Web/HTML/Element/input#type"><code>type</code></a>
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
      <td><strong>Implizierte ARIA-Rolle</strong></td>
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

- [HTML-Formular Leitfaden](/de/docs/Learn_web_development/Extensions/Forms)
- {{HTMLElement("input")}}
- [`<input type="tel">`](/de/docs/Web/HTML/Element/input/tel)
- [`<input type="url">`](/de/docs/Web/HTML/Element/input/url)
- Attribute:
  - [`list`](/de/docs/Web/HTML/Element/input#list)
  - [`minlength`](/de/docs/Web/HTML/Attributes/minlength)
  - [`maxlength`](/de/docs/Web/HTML/Attributes/maxlength)
  - [`multiple`](/de/docs/Web/HTML/Attributes/multiple)
  - [`pattern`](/de/docs/Web/HTML/Attributes/pattern)
  - [`placeholder`](/de/docs/Web/HTML/Element/input#placeholder)
  - [`readonly`](/de/docs/Web/HTML/Attributes/readonly)
  - [`size`](/de/docs/Web/HTML/Attributes/size)
