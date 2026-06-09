---
title: '`<input type="email">` HTML-Attributwert'
short-title: <input type="email">
slug: Web/HTML/Reference/Elements/input/email
l10n:
  sourceCommit: 3944506d4afeeed774687cf3fd950878c6229bbc
---

{{HTMLElement("input")}}-Elemente vom Typ **`email`** werden verwendet, um dem Benutzer das Eingeben und Bearbeiten einer E-Mail-Adresse, oder, falls das Attribut [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple) spezifiziert ist, einer Liste von E-Mail-Adressen zu ermöglichen.

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

Der Eingabewert wird automatisch validiert, um sicherzustellen, dass er entweder leer ist oder eine korrekt formatierte E-Mail-Adresse (oder Liste von Adressen) bevor das Formular gesendet werden kann. Die CSS-Pseudoklassen {{cssxref(":valid")}} und {{cssxref(":invalid")}} werden automatisch angewendet, um optisch anzuzeigen, ob der aktuelle Wert des Feldes eine gültige E-Mail-Adresse ist oder nicht.

## Wert

Das Attribut [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) des {{HTMLElement("input")}}-Elements enthält eine Zeichenkette, die automatisch als konform zur E-Mail-Syntax validiert wird. Genauer gesagt gibt es drei mögliche Wertformate, die die Validierung bestehen:

1. Eine leere Zeichenkette ("") zeigt an, dass der Benutzer keinen Wert eingegeben hat oder dass der Wert entfernt wurde.
2. Eine einzelne korrekt geformte E-Mail-Adresse. Das bedeutet nicht unbedingt, dass die E-Mail-Adresse existiert, aber sie ist zumindest korrekt formatiert. Das bedeutet `username@domain` oder `username@domain.tld`. Natürlich gibt es mehr dazu; siehe [Validierung](#validierung) für einen {{Glossary("regular_expression", "regulären Ausdruck")}}, der den E-Mail-Adressvalidierungsalgorithmus abgleicht.
3. Nur wenn das Attribut [`multiple`](/de/docs/Web/HTML/Reference/Elements/input#multiple) spezifiziert ist, kann der Wert eine Liste von korrekt geformten, kommagetrennten E-Mail-Adressen sein. Jeglicher führender und nachgestellter Leerraum wird von jeder Adresse in der Liste entfernt.

Siehe [Validierung](#validierung) für Details dazu, wie E-Mail-Adressen validiert werden, um sicherzustellen, dass sie korrekt formatiert sind.

## Zusätzliche Attribute

Zusätzlich zu den [globalen Attributen](/de/docs/Web/HTML/Reference/Global_attributes) und den Attributen, die für alle {{HTMLElement("input")}}-Elemente unabhängig vom Typ gelten, unterstützen `email`-Eingabefelder die folgenden Attribute.

> [!NOTE]
> Das globale Attribut [`autocorrect`](/de/docs/Web/HTML/Reference/Global_attributes/autocorrect) kann zu E-Mail-Eingaben hinzugefügt werden, aber der gespeicherte Zustand ist immer `off`.

### list

Der Wert des Attributs list ist die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements, das sich im gleichen Dokument befindet. Der {{HTMLElement("datalist")}} bietet eine Liste vordefinierter Werte, um dem Benutzer Vorschläge für diese Eingabe zu machen. Alle Werte in der Liste, die mit dem [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) nicht kompatibel sind, werden nicht in den vorgeschlagenen Optionen enthalten. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert eingeben.

### maxlength

Die maximale Zeichenkettenlänge (gemessen in {{Glossary("UTF-16", "UTF-16-Codeeinheiten")}}), die der Benutzer in das `email`-Eingabefeld eingeben kann. Dies muss ein ganzzahliger Wert von 0 oder höher sein. Wenn kein `maxlength` angegeben oder ein ungültiger Wert angegeben ist, hat das `email`-Eingabefeld keine maximale Länge. Dieser Wert muss auch größer oder gleich dem Wert von `minlength` sein.

Die Eingabe wird die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) nicht bestehen, wenn die Länge des Textwertes des Feldes länger als `maxlength` {{Glossary("UTF-16", "UTF-16-Codeeinheiten")}} ist. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### minlength

Die minimale Zeichenkettenlänge (gemessen in {{Glossary("UTF-16", "UTF-16-Codeeinheiten")}}), die der Benutzer in das `email`-Eingabefeld eingeben kann. Dies muss ein nicht-negativer ganzzahliger Wert sein, der kleiner oder gleich dem mit `maxlength` angegebenen Wert ist. Wenn kein `minlength` angegeben oder ein ungültiger Wert angegeben ist, hat das `email`-Eingabefeld keine Mindestlänge.

Die Eingabe wird die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) nicht bestehen, wenn die Länge des in das Feld eingegebenen Textes kürzer ist als `minlength` {{Glossary("UTF-16", "UTF-16-Codeeinheiten")}}. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### multiple

Ein Boolean-Attribut, das, wenn vorhanden, angibt, dass der Benutzer eine Liste mehrerer E-Mail-Adressen eingeben kann, getrennt durch Kommas und, optional, Leerzeichen. Siehe [Erlauben mehrerer E-Mail-Adressen](#erlauben_mehrerer_e-mail-adressen) für ein Beispiel oder [HTML-Attribut: multiple](/de/docs/Web/HTML/Reference/Attributes/multiple) für weitere Details.

> [!NOTE]
> Normalerweise muss der Benutzer, wenn Sie das Attribut [`required`](/de/docs/Web/HTML/Reference/Elements/input#required) spezifizieren, eine gültige E-Mail-Adresse eingeben, damit das Feld als gültig betrachtet wird. Wenn Sie jedoch das Attribut `multiple` hinzufügen, ist eine Liste von null E-Mail-Adressen (eine leere Zeichenkette oder eine, die nur aus Leerzeichen besteht) ein gültiger Wert. Mit anderen Worten, der Benutzer muss nicht einmal eine E-Mail-Adresse eingeben, wenn `multiple` spezifiziert ist, unabhängig vom Wert von `required`.

### pattern

Das `pattern`-Attribut ist ein regulärer Ausdruck, den der [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) der Eingabe erfüllen muss, um die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) zu bestehen. Es muss ein gültiger JavaScript-Regulärer Ausdruck sein, wie er durch den {{jsxref("RegExp")}}-Typ verwendet wird und in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert ist; das `'u'`-Flag wird beim Kompilieren des regulären Ausdrucks spezifiziert, sodass das Muster als eine Sequenz von Unicode-Codepunkten behandelt wird, anstelle von {{Glossary("ASCII", "ASCII")}}. Es sollten keine Schrägstriche um den Mustertext angegeben werden.

Wenn das angegebene Muster nicht angegeben oder ungültig ist, wird kein regulärer Ausdruck angewendet und dieses Attribut wird vollständig ignoriert.

> [!NOTE]
> Verwenden Sie das [`title`](/de/docs/Web/HTML/Reference/Elements/input#title)-Attribut, um Text anzugeben, den die meisten Browser als Tooltip anzeigen, um zu erklären, welche Anforderungen erfüllt sein müssen, um dem Muster zu entsprechen. Sie sollten auch anderen erläuternden Text in der Nähe einschließen.

Siehe den Abschnitt [Muster-Validierung](#muster-validierung) für Details und ein Beispiel.

### `placeholder`

Das `placeholder`-Attribut ist eine Zeichenkette, die dem Benutzer einen kurzen Hinweis darauf gibt, welche Art von Informationen im Feld erwartet werden. Es sollte ein Wort oder eine kurze Phrase sein, die den erwarteten Datentyp demonstriert, anstatt einer erklärenden Nachricht. Der Text _darf_ keine Wagenrückläufe oder Zeilenumbrüche enthalten.

Wenn der Inhalt des Steuerelements eine Richtung ({{Glossary("LTR", "LTR")}} oder {{Glossary("RTL", "RTL")}}) hat, der Platzhalter jedoch in der entgegengesetzten Richtung angezeigt werden muss, können Sie Unicode-Bidirektional-Algorithmus-Formatierungszeichen verwenden, um die Richtung im Platzhalter zu überschreiben; siehe [Anleitung zur Verwendung von Unicode-Steuerzeichen für bidi-Text](https://www.w3.org/International/questions/qa-bidi-unicode-controls) für weitere Informationen.

> [!NOTE]
> Vermeiden Sie die Verwendung des `placeholder`-Attributs, wenn Sie können. Es ist nicht so semantisch nützlich wie andere Möglichkeiten, Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Siehe [`<input>`-Labels](/de/docs/Web/HTML/Reference/Elements/input#labels) für weitere Informationen.

### `readonly`

Ein Boolean-Attribut, das, wenn vorhanden, bedeutet, dass dieses Feld vom Benutzer nicht bearbeitet werden kann. Der `value` kann jedoch weiterhin durch direktes Setzen der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) `value`-Eigenschaft durch JavaScript-Code geändert werden.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keine Wirkung auf Eingabefelder mit dem ebenfalls spezifizierten Attribut `readonly`.

### `size`

Das `size`-Attribut ist ein numerischer Wert, der angibt, wie viele Zeichen breit das Eingabefeld sein soll. Der Wert muss eine Zahl größer als Null sein, und der Standardwert ist 20. Da Zeichenbreiten variieren, kann dies mehr oder weniger genau sein und sollte nicht darauf verlassen werden, dass es so ist; das resultierende Eingabefeld kann je nach Zeichen und Schriftart ({{cssxref("font")}}-Einstellungen in Gebrauch) schmaler oder breiter sein als die angegebene Anzahl von Zeichen.

Dies legt _keine_ Beschränkung fest, wie viele Zeichen der Benutzer in das Feld eingeben kann. Es gibt nur ungefähr an, wie viele auf einmal gesehen werden können. Um ein oberes Limit für die Länge der Eingabedaten festzulegen, verwenden Sie das Attribut [`maxlength`](#maxlength).

## Verwendung von E-Mail-Eingaben

E-Mail-Adressen gehören zu den am häufigsten eingegebenen Textdatenformen im Web; sie werden beim Einloggen auf Websites, beim Anfordern von Informationen, zur Bestätigungsbestätigung von Bestellungen, für Webmail usw. verwendet. Daher kann der `email`-Eingabetyp Ihre Arbeit als Webentwickler erheblich erleichtern, da er dazu beitragen kann, Ihre Arbeit bei der Erstellung der Benutzeroberfläche und Logik für E-Mail-Adressen zu vereinfachen. Wenn Sie eine E-Mail-Eingabe mit dem richtigen `type`-Wert, `email`, erstellen, erhalten Sie eine automatische Validierung, dass der eingegebene Text zumindest in der richtigen Form vorliegt, um potenziell eine legitime E-Mail-Adresse zu sein. Dies kann helfen, Fälle zu vermeiden, in denen der Benutzer seine Adresse falsch eingibt oder eine ungültige Adresse angibt.

Es ist jedoch wichtig zu beachten, dass dies nicht ausreicht, um sicherzustellen, dass der angegebene Text eine E-Mail-Adresse ist, die tatsächlich existiert, dem Benutzer der Website entspricht oder in irgendeiner anderen Weise akzeptabel ist. Es stellt sicher, dass der Wert des Feldes richtig formatiert ist, um eine E-Mail-Adresse zu sein.

> [!NOTE]
> Es ist auch wichtig zu beachten, dass ein Benutzer im Hintergrund mit Ihrem HTML spielen kann, sodass Ihre Website _diese Validierung nicht für Sicherheitszwecke_ verwenden darf. Sie _müssen_ die E-Mail-Adresse auf der Serverseite jeder Transaktion, bei der der bereitgestellte Text irgendwelche Sicherheitsimplikationen haben könnte, überprüfen.

### Eine grundlegende E-Mail-Eingabe

Derzeit implementieren alle Browser, die dieses Element implementieren, es als Standard-Text-Eingabefeld mit grundlegenden Validierungsfunktionen. Die Spezifikation erlaubt den Browsern jedoch gewisse Freiheiten darin. Zum Beispiel könnte das Element in das eingebaute Adressbuch des Benutzers integriert werden, um E-Mail-Adressen aus dieser Liste auszuwählen. In seiner grundlegendsten Form kann eine `email`-Eingabe folgendermaßen implementiert werden:

```html
<input id="emailAddress" type="email" />
```

{{ EmbedLiveSample('A_basic_email_input', 600, 40) }}

Beachten Sie, dass sie als gültig betrachtet wird, wenn sie leer ist und wenn eine einzelne gültig formatierte E-Mail-Adresse eingegeben wird, aber ansonsten nicht als gültig angesehen wird. Durch Hinzufügen des Attributs [`required`](/de/docs/Web/HTML/Reference/Elements/input#required) werden nur gültig geformte E-Mail-Adressen erlaubt; die Eingabe wird nicht mehr als gültig betrachtet, wenn sie leer ist.

### Erlauben mehrerer E-Mail-Adressen

Durch Hinzufügen des Boolean-Attributs [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple) kann die Eingabe konfiguriert werden, um mehrere E-Mail-Adressen zu akzeptieren.

```html
<input id="emailAddress" type="email" multiple />
```

{{ EmbedLiveSample('Allowing multiple email addresses', 600, 40) }}

Die Eingabe wird jetzt als gültig betrachtet, wenn eine einzige E-Mail-Adresse eingegeben wird, oder wenn eine beliebige Anzahl von E-Mail-Adressen, getrennt durch Kommas und optional eine Anzahl von Leerzeichen vorhanden ist.

> [!NOTE]
> Wenn `multiple` verwendet wird, darf der Wert _leer_ sein.

Einige Beispiele für gültige Zeichenketten, wenn `multiple` angegeben ist:

- `""`
- `"me@example"`
- `"me@example.org"`
- `"me@example.org,you@example.org"`
- `"me@example.org, you@example.org"`
- `"me@example.org,you@example.org, us@example.org"`

Einige Beispiele für ungültige Zeichenketten:

- `","`
- `"me"`
- `"me@example.org you@example.org"`

### Platzhalter

Manchmal ist es hilfreich, einen kontextbezogenen Hinweis darauf zu geben, welche Form die Eingabedaten haben sollten. Dies kann besonders wichtig sein, wenn das Seitendesign keine beschreibenden Labels für jedes {{HTMLElement("input")}} bietet. Hier kommen **Platzhalter** ins Spiel. Ein Platzhalter ist ein Wert, der die Form des `value` demonstriert, indem ein Beispiel für einen gültigen Wert präsentiert wird, der im Bearbeitungsfeld angezeigt wird, wenn der `value` des Elements "". Sobald Daten in das Feld eingegeben werden, verschwindet der Platzhalter; wenn das Feld geleert wird, erscheint der Platzhalter wieder.

Hier haben wir ein `email`-Feld mit dem Platzhalter `sophie@example.com`. Beachten Sie, wie der Platzhalter verschwindet und wieder erscheint, während Sie den Inhalt des Eingabefelds manipulieren.

```html
<input type="email" placeholder="sophie@example.com" />
```

{{ EmbedLiveSample('Placeholders', 600, 40) }}

### Steuerung der Eingabefeldgröße

Sie können nicht nur die physische Länge des Eingabefelds kontrollieren, sondern auch die minimalen und maximalen Längen für den eingegebenen Text selbst.

#### Physische Größe des Eingabeelements

Die physische Größe des Eingabefeldes kann mittels des Attributs [`size`](/de/docs/Web/HTML/Reference/Elements/input#size) gesteuert werden. Damit können Sie die Anzahl der Zeichen angeben, die das Eingabefeld gleichzeitig anzeigen kann. In diesem Beispiel ist das `email`-Bearbeitungsfeld 15 Zeichen breit:

```html
<input type="email" size="15" />
```

{{ EmbedLiveSample('Physical_input_element_size', 600, 40) }}

#### Wertlänge des Elements

Der `size` ist unabhängig von der Begrenzung der Länge der eingegebenen E-Mail-Adresse selbst, sodass Sie Felder in einen kleinen Raum passen lassen können, während trotzdem längere E-Mail-Adresszeichenfolgen eingegeben werden können. Sie können eine Mindestlänge der Zeichen für die eingegebene E-Mail-Adresse mit dem Attribut [`minlength`](/de/docs/Web/HTML/Reference/Elements/input#minlength) angeben; ähnlich verwenden Sie [`maxlength`](/de/docs/Web/HTML/Reference/Elements/input#maxlength), um die maximale Länge der eingegebenen E-Mail-Adresse festzulegen.

Das untenstehende Beispiel erstellt ein 32 Zeichen breites Eingabefeld für E-Mail-Adressen, das verlangt, dass der Inhalt nicht kürzer als 3 Zeichen und nicht länger als 64 Zeichen ist.

```html
<input type="email" size="32" minlength="3" maxlength="64" />
```

{{EmbedLiveSample("Element_value_length", 600, 40) }}

### Bereitstellung von Standardoptionen

#### Bereitstellung eines einzelnen Standards mit dem Wertattribut

Wie immer können Sie einen Standardwert für ein `email`-Eingabefeld angeben, indem Sie dessen [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Attribut festlegen:

```html
<input type="email" value="default@example.com" />
```

{{EmbedLiveSample("Providing_a_single_default_using_the_value_attribute", 600, 40)}}

#### Bereitstellung vorgeschlagener Werte

Gehen Sie einen Schritt weiter, indem Sie eine Liste von Standardoptionen bereitstellen, aus denen der Benutzer auswählen kann, indem Sie das Attribut [`list`](/de/docs/Web/HTML/Reference/Elements/input#list) spezifizieren. Dies beschränkt den Benutzer nicht auf diese Optionen, ermöglicht es ihm jedoch, gängig verwendete E-Mail-Adressen schneller auszuwählen. Dies bietet auch Hinweise auf [`autocomplete`](/de/docs/Web/HTML/Reference/Elements/input#autocomplete). Das `list`-Attribut spezifiziert die ID eines {{HTMLElement("datalist")}}, der wiederum ein {{HTMLElement("option")}}-Element pro vorgeschlagenem Wert enthält; jeder `option`-Wert ist der entsprechende vorgeschlagene Wert für das E-Mail-Eingabefeld.

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

Mit dem {{HTMLElement("datalist")}}-Element und seinen {{HTMLElement("option")}}s an Ort und Stelle wird der Browser die angegebenen Werte als potenzielle Werte für die E-Mail-Adresse anbieten; dies wird typischerweise als Popup- oder Dropdown-Menü mit den Vorschlägen präsentiert. Während die spezifische Benutzererfahrung von einem Browser zum anderen variieren kann, präsentiert das Klicken in das Bearbeitungsfeld typischerweise ein Dropdown-Menü der vorgeschlagenen E-Mail-Adressen. Dann wird die Liste beim Tippen gefiltert, um nur passende Werte anzuzeigen. Jeder eingegebene Buchstabe grenzt die Liste weiter ein, bis der Benutzer eine Auswahl trifft oder einen benutzerdefinierten Wert eingibt.

## Validierung

Es gibt zwei Ebenen der Inhaltsvalidierung für `email`-Eingaben. Zunächst gibt es die standardmäßige Validierungsebene, die für alle {{HTMLElement("input")}}s angeboten wird, die automatisch sicherstellt, dass der Inhalt den Anforderungen einer gültigen E-Mail-Adresse entspricht. Es gibt jedoch auch die Möglichkeit, zusätzliche Filter hinzuzufügen, um sicherzustellen, dass Ihre eigenen speziellen Anforderungen erfüllt werden, falls Sie welche haben.

> [!WARNING]
> HTML-Formularvalidierung ist _kein_ Ersatz für Skripte, die sicherstellen, dass die eingegebenen Daten im richtigen Format vorliegen. Es ist viel zu einfach, Anpassungen am HTML vorzunehmen, um die Validierung zu umgehen oder sie vollständig zu entfernen. Es ist auch möglich, dass jemand Ihr HTML vollständig umgeht und die Daten direkt an Ihren Server übermittelt. Wenn Ihr serverseitiger Code die empfangenen Daten nicht validiert, kann es zu einer Katastrophe kommen, wenn nicht korrekt formatierte Daten (oder Daten, die zu groß sind, die falschen Typs sind usw.) in Ihre Datenbank eingegeben werden.

### Grundlegende Validierung

Browser bieten automatisch eine Validierung, um sicherzustellen, dass nur Text, der dem Standardformat für Internet-E-Mail-Adressen entspricht, in das Eingabefeld eingegeben wird. Browser verwenden einen Algorithmus, der einem der folgenden regulären Ausdrücke entspricht:

```js
/^[\w.!#$%&'*+/=?^`{|}~-]+@[a-z\d](?:[a-z\d-]{0,61}[a-z\d])?(?:\.[a-z\d](?:[a-z\d-]{0,61}[a-z\d])?)*$/i;
```

Um mehr darüber zu erfahren, wie die Formularvalidierung funktioniert und wie Sie die {{cssxref(":valid")}}- und {{cssxref(":invalid")}}-CSS-Eigenschaften verwenden, um die Eingabe basierend darauf zu stylen, ob der aktuelle Wert gültig ist, siehe [Formulardatenvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation).

> [!NOTE]
> Es gibt bekannte Spezifikationsprobleme im Zusammenhang mit internationalen Domain-Namen und der Validierung von E-Mail-Adressen in HTML. Siehe [W3C-Bug 15489](https://www.w3.org/Bugs/Public/show_bug.cgi?id=15489) und [whatwg/html#4562](https://github.com/whatwg/html/issues/4562) für Details.

### Muster-Validierung

Wenn Sie möchten, dass die eingegebene E-Mail-Adresse weiter als nur auf "jede Zeichenkette, die wie eine E-Mail-Adresse aussieht" eingeschränkt wird, können Sie das Attribut [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern) verwenden, um einen {{Glossary("regular_expression", "regulären Ausdruck")}} anzugeben, den der Wert erfüllen muss, damit er gültig ist. Wenn das Attribut [`multiple`](/de/docs/Web/HTML/Reference/Elements/input#multiple) angegeben ist, muss jeder einzelne Eintrag in der durch Komma abgegrenzten Liste von Werten den {{Glossary("regular_expression", "regulären Ausdruck")}} erfüllen.

Beispielsweise nehmen wir an, Sie erstellen eine Seite für Mitarbeiter von Best Startup Ever, Inc., auf der sie ihre IT-Abteilung für Hilfe kontaktieren können. In unserem vereinfachten Formular muss der Benutzer seine E-Mail-Adresse und eine Nachricht, die das Problem beschreibt, für das er Hilfe benötigt, eingeben. Wir möchten sicherstellen, dass der Benutzer nicht nur eine gültige E-Mail-Adresse angibt, sondern aus Sicherheitsgründen auch erforderlich ist, dass die Adresse eine interne Unternehmens-E-Mail-Adresse ist.

Da Eingaben vom Typ `email` sowohl gegen die Standard-E-Mail-Adressvalidierung als auch gegen das spezifizierte [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern) validiert werden, können Sie dies problemlos umsetzen. Lassen Sie uns sehen, wie:

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

Unser {{HTMLElement("form")}} enthält ein {{HTMLElement("input")}} vom Typ `email` für die E-Mail-Adresse des Benutzers, ein {{HTMLElement("textarea")}}, um ihre Nachricht an die IT einzugeben, und ein `<input>` vom Typ [`"submit"`](/de/docs/Web/HTML/Reference/Elements/input/submit), das eine Schaltfläche zum Absenden des Formulars erstellt. Jedes Texteingabefeld hat ein {{HTMLElement("label")}} zugeordnet, um dem Benutzer mitzuteilen, was von ihm erwartet wird.

Werfen wir einen genaueren Blick auf das E-Mail-Adresse-Eingabefeld. Seine [`size`](/de/docs/Web/HTML/Reference/Elements/input#size)- und [`maxlength`](/de/docs/Web/HTML/Reference/Elements/input#maxlength)-Attribute sind beide auf 64 gesetzt, um Platz für 64 Zeichen einer E-Mail-Adresse zu bieten und die tatsächlich eingegebene Zeichenanzahl auf maximal 64 zu beschränken. Das Attribut [`required`](/de/docs/Web/HTML/Reference/Elements/input#required) wird spezifiziert, was es zwingend erforderlich macht, dass eine gültige E-Mail-Adresse bereitgestellt wird.

Ein angemessener [`placeholder`](/de/docs/Web/HTML/Reference/Elements/input#placeholder) wird bereitgestellt—`username@beststartupever.com`—um zu demonstrieren, was eine gültige Eingabe darstellt. Diese Zeichenkette zeigt sowohl, dass eine E-Mail-Adresse eingegeben werden sollte, als auch, dass es sich um ein Unternehmen-beststartupever.com-Konto handeln sollte. Dies ist zusätzlich zur Tatsache, dass durch die Verwendung von Typ `email` der Text validiert wird, um sicherzustellen, dass er wie eine E-Mail-Adresse formatiert ist. Wenn der Text im Eingabefeld keine E-Mail-Adresse ist, erhalten Sie eine Fehlermeldung, die ungefähr so aussieht:

![Invalid email address in error state with a popout from the input reading 'please enter an email address'.](enter-valid-email-address.png)

Wenn wir die Dinge dabei belassen würden, würden wir zumindest auf legitime E-Mail-Adressen validieren. Aber wir wollen einen Schritt weiter gehen: Wir wollen sicherstellen, dass die E-Mail-Adresse tatsächlich in der Form [username]@beststartupever.com steht. Hierbei verwenden wir [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern). Wir setzen `pattern` auf `.+@beststartupever.com`. Dieser reguläre Ausdruck fordert eine Zeichenkette, die aus mindestens einem Zeichen beliebiger Art, dann einem "@" gefolgt vom Domainnamen "beststartupever.com" besteht.

Beachten Sie, dass dies nicht annähernd ein ausreichender Filter für gültige E-Mail-Adressen ist; es würde Dinge wie " @beststartupever.com" (beachten Sie das führende Leerzeichen) oder "@@beststartupever.com" zulassen, die beide nicht gültig sind. Der Browser führt jedoch sowohl den Standard-E-Mail-Adressfilter _als auch_ unser benutzerdefiniertes Muster gegen den angegebenen Text aus. Als Ergebnis erhalten wir eine Validierung, die besagt: "Stellen Sie sicher, dass dies einer gültigen E-Mail-Adresse ähnelt, und sicherstellen, dass es sich auch um eine beststartupever.com-Adresse handelt."

Es ist ratsam, das [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title)-Attribut zusammen mit `pattern` zu verwenden. Wenn Sie dies tun, _muss_ der `title` das Muster beschreiben. Das heißt, es sollte erklären, in welchem Format die Daten sich ausdrücken sollen, anstatt andere Informationen bereitzustellen. Das liegt daran, dass der `title` möglicherweise als Teil einer Validierungsfehlermeldung angezeigt oder gesprochen wird. Beispielsweise könnte der Browser die Nachricht "The entered text doesn't match the required pattern." gefolgt von Ihrem angegebenen `title` präsentieren. Wenn Ihr `title` etwas wie "Email address" ist, wäre das Ergebnis die Nachricht "The entered text doesn't match the required pattern. Email address", was nicht sehr gut ist.

Deshalb geben wir stattdessen den string "Please provide only a Best Startup Ever corporate email address" an. Indem wir das tun, könnte die resultierende vollständige Fehlermeldung etwa so sein: "The entered text doesn't match the required pattern. Please provide only a Best Startup Ever corporate email address."

![A valid email address, but the input is in error state with a popout from the input reading 'The entered text doesn't match the required pattern. Please provide only a Best Startup Ever corporate email address.'](email-pattern-match-bad.png)

> [!NOTE]
> Wenn Sie auf Probleme stoßen, während Sie Ihre Validierungsregulären Ausdrücke schreiben und sie nicht richtig funktionieren, überprüfen Sie die Konsole Ihres Browsers; dort könnten hilfreiche Fehlermeldungen zu finden sein, die Ihnen beim Lösen des Problems helfen.

## Beispiele

Hier haben wir ein E-Mail-Eingabefeld mit der ID `emailAddress`, das bis zu maximal 256 Zeichen lang sein darf. Das Eingabefeld selbst ist physisch 64 Zeichen breit und zeigt den Text `user@example.gov` als Platzhalter an, sobald das Feld leer ist. Zusätzlich ist durch das Attribut [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple) das Feld so konfiguriert, dass der Benutzer null oder mehr E-Mail-Adressen eingeben kann, getrennt durch Kommas, wie in [Erlauben mehrerer E-Mail-Adressen](#erlauben_mehrerer_e-mail-adressen) beschrieben. Als zusätzlichen Kniff enthält das Attribut [`list`](/de/docs/Web/HTML/Reference/Elements/input#list) die ID eines {{HTMLElement("datalist")}}, dessen {{HTMLElement("option")}}s eine Reihe von vorgeschlagenen Werten spezifizieren, aus denen der Benutzer wählen kann.

Ein zusätzlicher Touch ist das {{HTMLElement("label")}}-Element, das ein Label für das E-Mail-Eingabefeld festlegt, wobei sein [`for`](/de/docs/Web/HTML/Reference/Elements/label#for)-Attribut auf die ID `emailAddress` des {{HTMLElement("input")}}-Elements verweist. Indem die beiden Elemente auf diese Weise verknüpft werden, wird beim Klicken auf das Label das Eingabeelement fokussiert.

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
        Eine Zeichenkette, die eine E-Mail-Adresse darstellt, oder
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
      <td><strong>Unterstützte gemeinsame Attribute</strong></td>
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
      <td><strong>IDL-Attribute</strong></td>
      <td><code>list</code> und <code>value</code></td>
    </tr>
    <tr>
      <td><strong>DOM-Schnittstelle</strong></td>
      <td><p>[`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)</p></td>
    </tr>
    <tr>
      <td><strong>Implizite ARIA-Rolle</strong></td>
      <td>
        ohne <code>list</code>-Attribut:
        <code><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role">textbox</a></code><br />
        mit <code>list</code>-Attribut: <code><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role">combobox</a></code>
      </td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Leitfaden für HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms)
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
