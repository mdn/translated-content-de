---
title: <input type="email">
slug: Web/HTML/Element/input/email
l10n:
  sourceCommit: f10015d1752d5668d8fe0de29f9d9807de475d58
---

{{HTMLSidebar}}

{{HTMLElement("input")}} Elemente des Typs **`email`** werden verwendet, um dem Benutzer die Eingabe und Bearbeitung einer E-Mail-Adresse zu ermöglichen, oder, wenn das Attribut [`multiple`](/de/docs/Web/HTML/Attributes/multiple) festgelegt ist, einer Liste von E-Mail-Adressen.

{{EmbedInteractiveExample("pages/tabbed/input-email.html", "tabbed-shorter")}}

Der Eingabewert wird automatisch validiert, um sicherzustellen, dass er entweder leer oder als korrekt formatierte E-Mail-Adresse (oder Liste von Adressen) vorliegt, bevor das Formular gesendet werden kann. Die CSS-Pseudoklassen {{cssxref(":valid")}} und {{cssxref(":invalid")}} werden automatisch angewendet, um visuell anzuzeigen, ob der aktuelle Wert des Feldes eine gültige E-Mail-Adresse ist oder nicht.

## Wert

Das [`value`](/de/docs/Web/HTML/Element/input#value)-Attribut des {{HTMLElement("input")}}-Elements enthält einen String, der automatisch auf Konformität zur E-Mail-Syntax validiert wird. Genauer gesagt gibt es drei mögliche Wertformate, die die Validierung bestehen:

1. Ein leerer String („“), der anzeigt, dass der Benutzer keinen Wert eingegeben hat oder dass der Wert entfernt wurde.
2. Eine einzelne korrekt formatierte E-Mail-Adresse. Das bedeutet nicht unbedingt, dass die E-Mail-Adresse existiert, aber sie ist zumindest korrekt formatiert. Einfach ausgedrückt bedeutet das `username@domain` oder `username@domain.tld`. Natürlich gibt es noch mehr dazu; siehe [Validierung](#validierung) für einen {{Glossary("regular_expression", "regulären Ausdruck")}}, der dem E-Mail-Validierungsalgorithmus entspricht.
3. Wenn und nur wenn das [`multiple`](/de/docs/Web/HTML/Element/input#multiple)-Attribut festgelegt ist, kann der Wert eine Liste korrekt formatierter, durch Kommas getrennter E-Mail-Adressen sein. Führende und nachfolgende Leerzeichen werden von jeder Adresse in der Liste entfernt.

Siehe [Validierung](#validierung) für Details dazu, wie E-Mail-Adressen validiert werden, um sicherzustellen, dass sie korrekt formatiert sind.

## Zusätzliche Attribute

Zusätzlich zu den [globalen Attributen](/de/docs/Web/HTML/Global_attributes) und den Attributen, die auf alle {{HTMLElement("input")}}-Elemente angewendet werden, unabhängig von ihrem Typ, unterstützen `email`-Eingaben die folgenden Attribute.

> [!NOTE]
> Das globale Attribut [`autocorrect`](/de/docs/Web/HTML/Global_attributes/autocorrect) kann zu E-Mail-Eingaben hinzugefügt werden, aber der gespeicherte Zustand ist immer `off`.

### list

Der Wert des list-Attributs ist die [`id`](/de/docs/Web/API/Element/id) eines im selben Dokument befindlichen {{HTMLElement("datalist")}}-Elements. Die {{HTMLElement("datalist")}} bietet eine Liste vordefinierter Werte an, die dem Benutzer für diese Eingabe vorgeschlagen werden. Alle Werte in der Liste, die nicht mit dem [`type`](/de/docs/Web/HTML/Element/input#type) kompatibel sind, werden nicht in die vorgeschlagenen Optionen aufgenommen. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert angeben.

### maxlength

Die maximale Zeichenlänge (gemessen in UTF-16-Codeeinheiten), die der Benutzer in die `email`-Eingabe eingeben kann. Dies muss ein ganzzahliger Wert von 0 oder höher sein. Wenn kein `maxlength` angegeben ist oder ein ungültiger Wert angegeben wird, hat die `email`-Eingabe keine maximale Länge. Dieser Wert muss auch größer oder gleich dem Wert von `minlength` sein.

Die Eingabe wird bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) fehlschlagen, wenn die Länge des Textwerts des Feldes größer als `maxlength` UTF-16-Codeeinheiten ist. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### minlength

Die minimale Zeichenlänge (gemessen in UTF-16-Codeeinheiten), die der Benutzer in die `email`-Eingabe eingeben kann. Dies muss ein nicht-negativer ganzzahliger Wert kleiner oder gleich dem durch `maxlength` angegebenen Wert sein. Wenn kein `minlength` angegeben ist oder ein ungültiger Wert angegeben wird, hat die `email`-Eingabe keine minimale Länge.

Die Eingabe wird bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) fehlschlagen, wenn die Länge des in das Feld eingegebenen Textes weniger als `minlength` UTF-16-Codeeinheiten beträgt. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### multiple

Ein boolesches Attribut, das, wenn es vorhanden ist, anzeigt, dass der Benutzer eine Liste mehrerer, durch Kommas und optional durch Leerzeichen getrennte E-Mail-Adressen eingeben kann. Siehe [Mehrere E-Mail-Adressen erlauben](#mehrere_e-mail-adressen_zulassen) für ein Beispiel oder [HTML-Attribut: multiple](/de/docs/Web/HTML/Attributes/multiple) für weitere Details.

> [!NOTE]
> Normalerweise muss der Benutzer, wenn Sie das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut angeben, eine gültige E-Mail-Adresse eingeben, damit das Feld als gültig betrachtet wird. Wenn Sie jedoch das `multiple`-Attribut hinzufügen, ist eine Liste von null E-Mail-Adressen (ein leerer String oder einer, der ausschließlich aus Leerzeichen besteht) ein gültiger Wert. Mit anderen Worten, der Benutzer muss beim angegebenen `multiple`-Attribut keine einzige E-Mail-Adresse eingeben, unabhängig vom Wert von `required`.

### pattern

Das `pattern`-Attribut ist ein regulärer Ausdruck, den der [`value`](/de/docs/Web/HTML/Element/input#value) der Eingabe erfüllen muss, um die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) zu bestehen. Es muss ein gültiger JavaScript-Regulärer-Ausdruck sein, wie er von dem {{jsxref("RegExp")}}-Typ verwendet wird und wie in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert; das `'u'`-Flag wird beim Kompilieren des regulären Ausdrucks angegeben, damit das Muster als Folge von Unicode-Codepunkten statt als {{Glossary("ASCII", "ASCII")}} behandelt wird. Keine Schrägstriche sollten um den Mustertext angegeben werden.

Wenn das angegebene Muster nicht angegeben oder ungültig ist, wird kein regulärer Ausdruck angewendet und dieses Attribut wird vollständig ignoriert.

> [!NOTE]
> Verwenden Sie das [`title`](/de/docs/Web/HTML/Element/input#title)-Attribut, um einen Text anzugeben, den die meisten Browser als Tooltip anzeigen, um zu erläutern, welche Anforderungen erfüllt werden müssen, um dem Muster zu entsprechen. Sie sollten auch anderen erklärenden Text in der Nähe einfügen.

Siehe den Abschnitt [Musterüberprüfung](#musterüberprüfung) für Details und ein Beispiel.

### `placeholder`

Das `placeholder`-Attribut ist ein String, der dem Benutzer einen kurzen Hinweis darauf gibt, welche Art von Informationen im Feld erwartet werden. Es sollte ein Wort oder eine kurze Phrase sein, die den erwarteten Datentyp demonstriert, anstatt eine erklärende Nachricht zu liefern. Der Text _darf_ keine Wagenrückläufe oder Zeilenumbrüche enthalten.

Wenn der Inhalt des Steuerelements eine Richtung ({{Glossary("LTR", "LTR")}} oder {{Glossary("RTL", "RTL")}}) hat, aber der Platzhalter in der entgegengesetzten Richtung präsentiert werden muss, können Sie Unicode-Bidirektionale-Algorithmus-Formatierungszeichen verwenden, um die Richtung im Platzhalter zu überschreiben; siehe [Wie man Unicode-Steuerzeichen für bidi-Text verwendet](https://www.w3.org/International/questions/qa-bidi-unicode-controls) für mehr Informationen.

> [!NOTE]
> Vermeiden Sie es, das `placeholder`-Attribut zu verwenden, wenn es möglich ist. Es ist nicht so semantisch nützlich wie andere Möglichkeiten, Ihr Formular zu erläutern, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Weitere Informationen finden Sie bei [`<input>`-Labels](/de/docs/Web/HTML/Element/input#labels).

### `readonly`

Ein boolesches Attribut, das, wenn es vorhanden ist, bedeutet, dass dieses Feld vom Benutzer nicht bearbeitet werden kann. Sein `value` kann jedoch weiterhin durch JavaScript-Code direkt durch Setzen der `value`-Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) geändert werden.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keine Auswirkungen auf Eingaben mit dem ebenfalls angegebenen `readonly`-Attribut.

### `size`

Das `size`-Attribut ist ein Zahlenwert, der angibt, wie viele Zeichen breit das Eingabefeld sein soll. Der Wert muss eine Zahl größer als null sein, und der Standardwert ist 20. Da Zeichenbreiten variieren, kann dies exakt sein oder nicht und sollte nicht darauf verlassen werden; das resultierende Eingabefeld kann schmaler oder breiter als die angegebene Anzahl von Zeichen sein, abhängig von den Zeichen und den Schriftarten ({{cssxref("font")}}-Einstellungen).

Dies legt _nicht_ fest, wie viele Zeichen der Benutzer in das Feld eingeben kann. Es spezifiziert nur ungefähr, wie viele gleichzeitig sichtbar sein können. Um ein oberes Limit für die Länge der Eingabedaten festzulegen, verwenden Sie das [`maxlength`](#maxlength)-Attribut.

## Verwendung von E-Mail-Eingaben

E-Mail-Adressen gehören zu den am häufigsten auf der Website eingegebenen Textdaten; sie werden beim Einloggen auf Websites, bei Anfragen nach Informationen, zur Bestätigung von Bestellungen, für Webmail usw. verwendet. Die Eingabeart `email` kann Ihnen als Webentwickler die Arbeit erheblich erleichtern, da sie die Arbeit bei der Erstellung der Benutzeroberfläche und Logik für E-Mail-Adressen erleichtert. Wenn Sie eine E-Mail-Eingabe mit dem richtigen `type`-Wert `email` erstellen, erhalten Sie eine automatische Validierung, dass der eingegebene Text zumindest die richtige Form hat, um möglicherweise eine legitime E-Mail-Adresse zu sein. Dies kann helfen, Fälle zu vermeiden, in denen der Benutzer seine Adresse falsch eingibt oder eine ungültige Adresse angibt.

Es ist jedoch wichtig zu beachten, dass dies nicht ausreicht, um sicherzustellen, dass der eingegebene Text eine tatsächlich existierende E-Mail-Adresse ist, die dem Benutzer der Website entspricht oder in irgendeiner Weise akzeptabel ist. Es stellt lediglich sicher, dass der Wert des Feldes korrekt formatiert ist, um eine E-Mail-Adresse zu sein.

> [!NOTE]
> Es ist auch entscheidend, daran zu erinnern, dass ein Benutzer Ihr HTML hinter den Kulissen manipulieren kann, weshalb Ihre Website dieses Validierung _nicht_ für Sicherheitszwecke verwenden darf. Sie _müssen_ die E-Mail-Adresse auf der Serverseite jeder Transaktion verifizieren, bei der der bereitgestellte Text Sicherheitsimplikationen jeglicher Art haben könnte.

### Eine grundlegende E-Mail-Eingabe

Derzeit implementieren alle Browser, die dieses Element implementieren, es als ein Standard-Text-Eingabefeld mit grundlegenden Validierungsfunktionen. Die Spezifikation erlaubt es den Browsern jedoch, dies zu variieren. Beispielsweise könnte das Element in das integrierte Adressbuch des Geräts des Benutzers integriert sein, um E-Mail-Adressen aus dieser Liste auszuwählen. In seiner grundlegendsten Form kann eine `email`-Eingabe wie folgt implementiert werden:

```html
<input id="emailAddress" type="email" />
```

{{ EmbedLiveSample('A_basic_email_input', 600, 40) }}

Beachten Sie, dass sie als gültig angesehen wird, wenn sie leer ist und wenn eine korrekt formatierte E-Mail-Adresse eingegeben wird, ansonsten jedoch nicht als gültig angesehen wird. Durch Hinzufügen des [`required`](/de/docs/Web/HTML/Element/input#required)-Attributs sind nur korrekt formatierte E-Mail-Adressen erlaubt; die Eingabe wird nicht mehr als gültig angesehen, wenn sie leer ist.

### Mehrere E-Mail-Adressen zulassen

Durch Hinzufügen des booleschen Attributs [`multiple`](/de/docs/Web/HTML/Attributes/multiple) kann die Eingabe so konfiguriert werden, dass sie mehrere E-Mail-Adressen akzeptiert.

```html
<input id="emailAddress" type="email" multiple />
```

{{ EmbedLiveSample('Allowing multiple email addresses', 600, 40) }}

Die Eingabe wird nun als gültig angesehen, wenn eine einzelne E-Mail-Adresse eingegeben wird oder wenn eine beliebige Anzahl von durch Kommas getrennten E-Mail-Adressen und, optional, eine Anzahl von Leerzeichen vorhanden sind.

> [!NOTE]
> Wenn `multiple` verwendet wird, darf der Wert leer sein.

Einige Beispiele für gültige Zeichenketten, bei denen `multiple` angegeben ist:

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

Manchmal ist es hilfreich, einen kontextbezogenen Hinweis auf die erwartete Form der Eingabedaten zu geben. Dies kann besonders wichtig sein, wenn das Seitendesign keine beschreibenden Labels für jede {{HTMLElement("input")}} bietet. Hier kommen **Platzhalter** ins Spiel. Ein Platzhalter ist ein Wert, der die Form des `value` demonstriert, indem er ein Beispiel für einen gültigen Wert innerhalb des Eingabefeldes anzeigt, wenn der `value` leer ist. Sobald Daten in das Feld eingegeben werden, verschwindet der Platzhalter; wenn das Feld geleert wird, wird der Platzhalter erneut angezeigt.

Hier haben wir ein `email`-Eingabefeld mit dem Platzhalter `sophie@example.com`. Beachten Sie, wie der Platzhalter verschwindet und erscheint, während Sie den Inhalt des Eingabefelds manipulieren.

```html
<input type="email" placeholder="sophie@example.com" />
```

{{ EmbedLiveSample('Placeholders', 600, 40) }}

### Steuerung der Eingabegröße

Sie können nicht nur die physische Länge des Eingabefeldes, sondern auch die Mindest- und Höchstlängen für den Eingabetext selbst steuern.

#### Physische Größe des Eingabeelements

Die physische Größe des Eingabefeldes kann mit dem [`size`](/de/docs/Web/HTML/Element/input#size)-Attribut gesteuert werden. Damit können Sie die Anzahl der Zeichen angeben, die das Eingabefeld gleichzeitig anzeigen kann. In diesem Beispiel ist das `email`-Bearbeitungsfeld 15 Zeichen breit:

```html
<input type="email" size="15" />
```

{{ EmbedLiveSample('Physical_input_element_size', 600, 40) }}

#### Elementwertlänge

Das `size`-Attribut ist von der Längenbegrenzung der eingegebenen E-Mail-Adresse selbst getrennt, sodass Sie Felder in einen kleinen Raum einfügen können, während Sie noch längere E-Mail-Adressstrings zulassen. Sie können mit dem Attribut [`minlength`](/de/docs/Web/HTML/Element/input#minlength) eine Mindestlänge (in Zeichen) für die eingegebene E-Mail-Adresse festlegen; verwenden Sie entsprechend [`maxlength`](/de/docs/Web/HTML/Element/input#maxlength), um die maximale Länge der eingegebenen E-Mail-Adresse festzulegen.

Das untenstehende Beispiel erstellt ein Eingabefeld für E-Mail-Adressen mit einer Breite von 32 Zeichen, das erfordert, dass der Inhalt mindestens 3 Zeichen lang und maximal 64 Zeichen lang ist.

```html
<input type="email" size="32" minlength="3" maxlength="64" />
```

{{EmbedLiveSample("Element_value_length", 600, 40) }}

### Bereitstellung von Standardoptionen

#### Bereitstellung eines einzelnen Standards mit dem Wertattribut

Wie immer können Sie einen Standardwert für ein `email`-Eingabefeld bereitstellen, indem Sie dessen [`value`](/de/docs/Web/HTML/Element/input#value)-Attribut festlegen:

```html
<input type="email" value="default@example.com" />
```

{{EmbedLiveSample("Providing_a_single_default_using_the_value_attribute", 600, 40)}}

#### Anbieten vorgeschlagener Werte

Einen Schritt weiter können Sie eine Liste von Standardoptionen bereitstellen, aus denen der Benutzer wählen kann, indem Sie das [`list`](/de/docs/Web/HTML/Element/input#list)-Attribut angeben. Dies beschränkt den Benutzer nicht auf diese Optionen, ermöglicht ihm jedoch, häufig verwendete E-Mail-Adressen schneller auszuwählen. Dies bietet auch Hinweise auf [`autocomplete`](/de/docs/Web/HTML/Element/input#autocomplete). Das `list`-Attribut gibt die ID einer {{HTMLElement("datalist")}} an, die wiederum ein {{HTMLElement("option")}}-Element pro vorgeschlagenem Wert enthält; jedes `option` `value` ist der entsprechende vorgeschlagene Wert für das E-Mail-Eingabefeld.

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

Mit dem {{HTMLElement("datalist")}}-Element und seinen {{HTMLElement("option")}}s an Ort und Stelle wird der Browser die angegebenen Werte als potenzielle Werte für die E-Mail-Adresse anbieten; dies wird normalerweise als Popup oder Dropdown-Menü mit den Vorschlägen präsentiert. Während die spezifische Benutzererfahrung von einem Browser zum anderen variieren kann, wird typischerweise durch Klicken in das Eingabefeld ein Dropdown-Menü mit den vorgeschlagenen E-Mail-Adressen präsentiert. Dann wird die Liste beim Tippen gefiltert, um nur passende Werte anzuzeigen. Jedes getippte Zeichen schränkt die Liste ein, bis der Benutzer eine Auswahl trifft oder einen benutzerdefinierten Wert eintippt.

## Validierung

Es gibt zwei Ebenen der Inhaltsvalidierung für `email`-Eingaben. Erstens gibt es die Standardebene der Validierung, die alle {{HTMLElement("input")}}s erhalten, die automatisch sicherstellt, dass die Inhalte die Anforderungen für eine gültige E-Mail-Adresse erfüllen. Aber es besteht auch die Möglichkeit, zusätzliche Filter hinzuzufügen, um sicherzustellen, dass Ihre eigenen speziellen Bedürfnisse erfüllt werden, falls Sie welche haben.

> [!WARNING]
> HTML-Formularvalidierung ist _kein_ Ersatz für Skripte, die sicherstellen, dass die eingegebenen Daten im richtigen Format vorliegen. Es ist viel zu einfach, Anpassungen am HTML vorzunehmen, die es jemandem erlauben, die Validierung zu umgehen oder vollständig zu entfernen. Es ist auch möglich, dass jemand Ihr HTML vollständig umgeht und die Daten direkt an Ihren Server sendet. Wenn Ihr serverseitiger Code die empfangenen Daten nicht validiert, könnte es zu einer Katastrophe kommen, wenn falsch formatierte Daten (oder Daten, die zu groß sind, vom falschen Typ sind usw.) in Ihre Datenbank eingegeben werden.

### Grundlegende Validierung

Browser bieten automatisch Validierung, um sicherzustellen, dass nur Text eingegeben wird, der dem Standardformat für Internet-E-Mail-Adressen entspricht. Browser verwenden einen Algorithmus, der einem regulären Ausdruck wie dem folgenden entspricht:

```js
/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
```

Um mehr darüber zu erfahren, wie die Formularvalidierung funktioniert und wie Sie die {{cssxref(":valid")}} und {{cssxref(":invalid")}} CSS-Eigenschaften nutzen können, um die Eingabe basierend darauf zu stylen, ob der aktuelle Wert gültig ist, siehe [Formulardatenvalidierung](/de/docs/Learn/Forms/Form_validation).

> [!NOTE]
> Es gibt bekannte Spezifikationsprobleme im Zusammenhang mit internationalen Domainnamen und der Validierung von E-Mail-Adressen in HTML. Details finden Sie im [W3C Bug 15489](https://www.w3.org/Bugs/Public/show_bug.cgi?id=15489).

### Musterüberprüfung

Wenn Sie möchten, dass die eingegebene E-Mail-Adresse weiter eingeschränkt wird als nur „jede Zeichenkette, die wie eine E-Mail-Adresse aussieht“, können Sie das Attribut [`pattern`](/de/docs/Web/HTML/Element/input#pattern) verwenden, um einen {{Glossary("regular_expression", "regulären Ausdruck")}} anzugeben, den der Wert erfüllen muss, um gültig zu sein. Wenn das Attribut [`multiple`](/de/docs/Web/HTML/Element/input#multiple) angegeben ist, muss jedes einzelne Element in der durch Kommas getrennten Liste der Werte dem {{Glossary("regular_expression", "regulären Ausdruck")}} entsprechen.

Angenommen, Sie erstellen eine Seite für Mitarbeiter von Best Startup Ever, Inc., die es ihnen ermöglicht, sich an ihre IT-Abteilung zu wenden, um Hilfe zu erhalten. In unserem vereinfachten Formular muss der Benutzer seine E-Mail-Adresse und eine Nachricht eingeben, die das Problem beschreibt, bei dem er Hilfe benötigt. Wir möchten sicherstellen, dass der Benutzer nicht nur eine gültige E-Mail-Adresse angibt, sondern auch aus Sicherheitsgründen, dass die Adresse eine interne Unternehmens-E-Mail-Adresse ist.

Da Eingaben vom Typ `email` sowohl gegen den Standard-E-Mail-Adressfilter als auch gegen das angegebene [`pattern`](/de/docs/Web/HTML/Element/input#pattern) validiert werden, können Sie dies leicht umsetzen. Schauen wir uns an, wie:

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

Unser {{HTMLElement("form")}} enthält ein {{HTMLElement("input")}} vom Typ `email` für die E-Mail-Adresse des Benutzers, ein {{HTMLElement("textarea")}}, um ihre Nachricht an die IT-Abteilung einzugeben, und ein `<input>` vom Typ [`"submit"`](/de/docs/Web/HTML/Element/input/submit), das eine Schaltfläche zum Senden des Formulars erstellt. Jedes Texteingabefeld hat ein zugeordnetes {{HTMLElement("label")}}, um dem Benutzer mitzuteilen, was von ihm erwartet wird.

Schauen wir uns das E-Mail-Adresseingabefeld genauer an. Sowohl seine [`size`](/de/docs/Web/HTML/Element/input#size)- als auch [`maxlength`](/de/docs/Web/HTML/Element/input#maxlength)-Attribute sind auf 64 gesetzt, um Raum für 64 Zeichen der E-Mail-Adresse zu zeigen und die Anzahl der tatsächlich eingegebenen Zeichen auf maximal 64 zu begrenzen. Das Attribut [`required`](/de/docs/Web/HTML/Element/input#required) ist spezifiziert, was es erforderlich macht, dass eine gültige E-Mail-Adresse angegeben wird.

Ein geeigneter [`placeholder`](/de/docs/Web/HTML/Element/input#placeholder) wird zur Verfügung gestellt—`username@beststartupever.com`—um zu demonstrieren, was einen gültigen Eintrag darstellt. Diese Zeichenkette zeigt sowohl, dass eine E-Mail-Adresse eingegeben werden sollte, als auch, dass es sich um ein Unternehmens-BeststartupEver.com-Konto handeln sollte. Dies ist zusätzlich zu der Tatsache, dass die Verwendung des Typs `email` den Text validiert, um sicherzustellen, dass er wie eine E-Mail-Adresse formatiert ist. Wenn der Text im Eingabefeld keine E-Mail-Adresse ist, erhalten Sie eine Fehlermeldung, die ungefähr so aussieht:

![Ungültige E-Mail-Adresse im Fehlerzustand mit einem Popup vom Eingabefeld, das "Bitte geben Sie eine E-Mail-Adresse ein" liest.](enter-valid-email-address.png)

Wenn wir es dabei belassen würden, würden wir zumindest auf legitime E-Mail-Adressen validieren. Aber wir wollen einen Schritt weiter gehen: wir wollen sicherstellen, dass die E-Mail-Adresse tatsächlich in der Form `[username]@beststartupever.com` ist. Hier verwenden wir [`pattern`](/de/docs/Web/HTML/Element/input#pattern). Wir setzen `pattern` auf `.+@beststartupever.com`. Dieser reguläre Ausdruck fordert eine Zeichenkette an, die aus mindestens einem Zeichen jeder Art besteht, dann ein „@“ gefolgt von der Domain „beststartupever.com“.

Beachten Sie, dass dies keineswegs ein hinreichender Filter für gültige E-Mail-Adressen ist; es würde Dinge wie " @beststartupever.com" (beachten Sie das führende Leerzeichen) oder "@@beststartupever.com" zulassen, von denen keines gültig ist. Der Browser führt jedoch sowohl den Standard-E-Mail-Adressfilter als auch unser benutzerdefiniertes Muster gegen den angegebenen Text aus. Infolgedessen erhalten wir eine Validierung, die sagt "Stellen Sie sicher, dass dies wie eine gültige E-Mail-Adresse aussieht, und wenn ja, stellen Sie sicher, dass es sich auch um eine BeststartupEver.com-Adresse handelt."

Es ist ratsam, das [`title`](/de/docs/Web/HTML/Global_attributes/title)-Attribut zusammen mit `pattern` zu verwenden. Wenn Sie dies tun, _muss_ das `title` das Muster beschreiben. Das bedeutet, dass es erläutern sollte, welches Format die Daten annehmen sollten, anstelle anderer Informationen. Der Grund dafür ist, dass das `title` möglicherweise als Teil einer Validierungsfehlermeldung angezeigt oder gesprochen wird. Zum Beispiel könnte der Browser die Meldung "Der eingegebene Text stimmt nicht mit dem erforderlichen Muster überein." gefolgt von Ihrem angegebenen `title` anzeigen. Wenn Ihr `title` so etwas wie "E-Mail-Adresse" ist, wäre das Ergebnis die Meldung "Der eingegebene Text stimmt nicht mit dem erforderlichen Muster überein. E-Mail-Adresse", was nicht sehr aussagekräftig wäre.

Deshalb geben wir stattdessen die Zeichenfolge "Bitte geben Sie nur eine Unternehmense-Mail-Adresse von Best Startup Ever an". Mit dieser Angabe könnte die vollständige Fehlermeldung etwa so aussehen: "Der eingegebene Text stimmt nicht mit dem erforderlichen Muster überein. Bitte geben Sie nur eine Unternehmense-Mail-Adresse von Best Startup Ever an."

![Eine gültige E-Mail-Adresse, aber die Eingabe ist im Fehlerzustand mit einem Popup vom Eingabefeld, das "Der eingegebene Text stimmt nicht mit dem erforderlichen Muster überein. Bitte geben Sie nur eine Unternehmense-Mail-Adresse von Best Startup Ever an." liest](email-pattern-match-bad.png)

> [!NOTE]
> Wenn Sie auf Probleme mit Ihren Überprüfungsregulären Ausdrücken stoßen und sie nicht richtig funktionieren, überprüfen Sie die Konsole Ihres Browsers; dort können hilfreiche Fehlermeldungen angezeigt werden, die Ihnen bei der Lösung des Problems helfen.

## Beispiele

Hier haben wir eine E-Mail-Eingabe mit der ID `emailAddress`, die bis zu maximal 256 Zeichen lang sein darf. Das Eingabefeld selbst ist physisch 64 Zeichen breit und zeigt den Text `user@example.gov` als Platzhalter an, solange das Feld leer ist. Außerdem ist das Feld durch die Verwendung des [`multiple`](/de/docs/Web/HTML/Attributes/multiple)-Attributs so konfiguriert, dass der Benutzer null oder mehr E-Mail-Adressen eingeben kann, die durch Kommas getrennt sind, wie in [Mehrere E-Mail-Adressen erlauben](#mehrere_e-mail-adressen_zulassen) beschrieben. Als zusätzlicher Aspekt enthält das [`list`](/de/docs/Web/HTML/Element/input#list)-Attribut die ID einer {{HTMLElement("datalist")}}, deren {{HTMLElement("option")}}s einen Satz von vorgeschlagenen Werten spezifizieren, aus denen der Benutzer wählen kann.

Als zusätzliche Funktion wird das {{HTMLElement("label")}}-Element verwendet, um eine Bezeichnung für das E-Mail-Eingabefeld zu erstellen, wobei sein [`for`](/de/docs/Web/HTML/Element/label#for)-Attribut auf die ID `emailAddress` des {{HTMLElement("input")}}-Elements verweist. Durch das Verbinden der beiden Elemente auf diese Weise wird das Eingabeelement fokussiert, wenn auf das Label geklickt wird.

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
        Ein String, der eine E-Mail-Adresse darstellt, oder
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
        <a href="/de/docs/Web/HTML/Element/input#size"><code>size</code></a> und
        <a href="/de/docs/Web/HTML/Element/input#type"><code>type</code></a>
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
      <td><strong>Methoden</strong></td>
      <td>
        [`select()`](/de/docs/Web/API/HTMLInputElement/select)
      </td>
    </tr>
    <tr>
      <td><strong>Implizierte ARIA-Rolle</strong></td>
      <td>
        ohne <code>list</code>-Attribut:
        <code><a href="/de/docs/Web/Accessibility/ARIA/Roles/textbox_role">textbox</a></code><br />
        mit <code>list</code>-Attribut: <code><a href="/de/docs/Web/Accessibility/ARIA/Roles/combobox_role">combobox</a></code>
      </td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTML-Formularleitfaden](/de/docs/Learn/Forms)
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
- [Kompatibilität von CSS-Eigenschaften](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
