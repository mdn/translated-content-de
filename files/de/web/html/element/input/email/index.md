---
title: <input type="email">
slug: Web/HTML/Element/input/email
l10n:
  sourceCommit: 8b02826c79b090b5af0d68ae1ef39f932a66a7f1
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente des Typs **`email`** werden verwendet, um dem Benutzer das Eingeben und Bearbeiten einer E-Mail-Adresse zu ermöglichen oder, wenn das [`multiple`](/de/docs/Web/HTML/Attributes/multiple)-Attribut angegeben ist, eine Liste von E-Mail-Adressen.

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

Der Eingabewert wird automatisch validiert, um sicherzustellen, dass er entweder leer ist oder als korrekt formatierte E-Mail-Adresse (oder Liste von Adressen) vorliegt, bevor das Formular abgeschickt werden kann. Die CSS-Pseudoklassen {{cssxref(":valid")}} und {{cssxref(":invalid")}} werden automatisch angewendet, um visuell anzuzeigen, ob der aktuelle Wert des Feldes eine gültige E-Mail-Adresse darstellt oder nicht.

## Wert

Das [`value`](/de/docs/Web/HTML/Element/input#value)-Attribut des {{HTMLElement("input")}}-Elements enthält eine Zeichenkette, die automatisch als den E-Mail-Syntaxvorschriften entsprechend validiert wird. Genauer gesagt gibt es drei mögliche Wertformate, die die Validierung bestehen:

1. Eine leere Zeichenkette ("''), die anzeigt, dass der Benutzer keinen Wert eingegeben oder den Wert entfernt hat.
2. Eine einzelne korrekt formatierte E-Mail-Adresse. Dies bedeutet nicht unbedingt, dass die E-Mail-Adresse existiert, aber sie ist zumindest korrekt formatiert. In einfachen Worten bedeutet dies `username@domain` oder `username@domain.tld`. Natürlich gibt es noch mehr dazu; siehe [Validierung](#validierung) für einen {{Glossary("regular_expression", "regulären Ausdruck")}}, der den Algorithmus zur Validierung von E-Mail-Adressen abbildet.
3. Wenn und nur wenn das [`multiple`](/de/docs/Web/HTML/Element/input#multiple)-Attribut angegeben ist, kann der Wert eine Liste von korrekt geformten, durch Kommas getrennten E-Mail-Adressen sein. Ein nachfolgendes und führendes Leerzeichen wird von jeder Adresse in der Liste entfernt.

Siehe [Validierung](#validierung), um Details darüber zu erfahren, wie E-Mail-Adressen validiert werden, um sicherzustellen, dass sie korrekt formatiert sind.

## Zusätzliche Attribute

Zusätzlich zu den [globalen Attributen](/de/docs/Web/HTML/Global_attributes) und den Attributen, die auf alle {{HTMLElement("input")}}-Elemente unabhängig von ihrem Typ wirken, unterstützen `email`-Inputs die folgenden Attribute.

> [!NOTE]
> Das globale [`autocorrect`](/de/docs/Web/HTML/Global_attributes/autocorrect)-Attribut kann zu E-Mail-Inputs hinzugefügt werden, aber der gespeicherte Zustand ist immer `off`.

### list

Der Wert des list-Attributs ist die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements, das sich im selben Dokument befindet. Die {{HTMLElement("datalist")}} bietet eine Liste vordefinierter Werte, die dem Benutzer für diese Eingabe vorgeschlagen werden. Alle Werte in der Liste, die mit dem [`type`](/de/docs/Web/HTML/Element/input#type) nicht kompatibel sind, werden nicht in den vorgeschlagenen Optionen aufgenommen. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert eingeben.

### maxlength

Die maximale Zeichenlänge (gemessen in UTF-16-Codeeinheiten), die der Benutzer in das `email`-Input eingeben kann. Dies muss ein ganzzahliger Wert von 0 oder höher sein. Wenn kein `maxlength` angegeben oder ein ungültiger Wert angegeben ist, hat das `email`-Input keine maximale Länge. Dieser Wert muss auch größer oder gleich dem Wert von `minlength` sein.

Die Eingabe wird [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) fehlschlagen, wenn die Länge des Textwerts des Feldes größer als `maxlength` UTF-16-Codeeinheiten ist. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### minlength

Die minimale Zeichenlänge (gemessen in UTF-16-Codeeinheiten), die der Benutzer in das `email`-Input eingeben kann. Dies muss ein nicht-negativer ganzzahliger Wert sein, der kleiner oder gleich dem durch `maxlength` angegebenen Wert ist. Wenn kein `minlength` angegeben oder ein ungültiger Wert angegeben ist, hat das `email`-Input keine Mindestlänge.

Die Eingabe wird [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) fehlschlagen, wenn die Länge des in das Feld eingegebenen Texts weniger als `minlength` UTF-16-Codeeinheiten beträgt. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### multiple

Ein Boolean-Attribut, das, wenn vorhanden, anzeigt, dass der Benutzer eine Liste von mehreren E-Mail-Adressen eingeben kann, die durch Kommas und optional durch Leerzeichen getrennt sind. Siehe [Erlaubte mehrere E-Mail-Adressen](#erlauben_mehrerer_e-mail-adressen) für ein Beispiel oder [HTML-Attribut: multiple](/de/docs/Web/HTML/Attributes/multiple) für weitere Details.

> [!NOTE]
> Normalerweise, wenn Sie das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut angeben, muss der Benutzer eine gültige E-Mail-Adresse eingeben, damit das Feld als gültig angesehen wird. Wenn Sie jedoch das `multiple`-Attribut hinzufügen, ist eine Liste von null E-Mail-Adressen (eine leere Zeichenkette oder eine, die nur aus Leerzeichen besteht) ein gültiger Wert. Anders gesagt, der Benutzer muss keine einzige E-Mail-Adresse eingeben, wenn `multiple` angegeben ist, unabhängig vom Wert von `required`.

### pattern

Das `pattern`-Attribut ist, wenn angegeben, ein regulärer Ausdruck, den der [`value`](/de/docs/Web/HTML/Element/input#value) des Inputs erfüllen muss, um die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) zu bestehen. Es muss ein gültiger regulärer JavaScript-Ausdruck sein, wie er im {{jsxref("RegExp")}}-Typ verwendet wird, und wie in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert; das 'u'-Flag wird beim Kompilieren des regulären Ausdrucks angegeben, damit das Muster als eine Sequenz von Unicode-Codepunkten behandelt wird, anstatt als {{Glossary("ASCII", "ASCII")}}. Es sollten keine Schrägstriche um den Mustertext angegeben werden.

Wenn das angegebene Muster nicht angegeben oder ungültig ist, wird kein regulärer Ausdruck angewendet, und dieses Attribut wird komplett ignoriert.

> [!NOTE]
> Verwenden Sie das [`title`](/de/docs/Web/HTML/Element/input#title)-Attribut, um Text anzugeben, den die meisten Browser als Tooltip anzeigen, um zu erklären, welche Anforderungen erfüllt werden müssen, um dem Muster zu entsprechen. Sie sollten auch anderen erklärenden Text in der Nähe hinzufügen.

Siehe den Abschnitt [Mustervalidierung](#mustervalidierung) für Details und ein Beispiel.

### `placeholder`

Das `placeholder`-Attribut ist eine Zeichenkette, die dem Benutzer einen kurzen Hinweis darauf gibt, welche Art von Informationen im Feld erwartet werden. Es sollte ein Wort oder eine kurze Phrase sein, die den erwarteten Datentyp zeigt, anstatt eine erklärende Nachricht. Der Text _darf keine_ Zeilenumbrüche oder Wagenrückläufe enthalten.

Wenn der Inhalt der Steuerung eine Richtung ({{Glossary("LTR", "LTR")}} oder {{Glossary("RTL", "RTL")}}) hat, der Platzhalter jedoch in der entgegengesetzten Richtung angezeigt werden muss, können Sie Unicode-Algorithmus-Formatierungszeichen zur Übersteuerung der Leserichtung innerhalb des Platzhalters verwenden; siehe [Wie man Unicode-Steuerungen für bidi-Text nutzt](https://www.w3.org/International/questions/qa-bidi-unicode-controls) für mehr Informationen.

> [!NOTE]
> Vermeiden Sie die Verwendung des `placeholder`-Attributs, wenn Sie können. Es ist nicht so semantisch nützlich wie andere Möglichkeiten, Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Siehe [`<input>`-Labels](/de/docs/Web/HTML/Element/input#labels) für mehr Informationen.

### `readonly`

Ein Boolean-Attribut, das, wenn vorhanden, bedeutet, dass dieses Feld nicht vom Benutzer bearbeitet werden kann. Sein `value` kann jedoch immer noch von JavaScript-Code direkt durch Setzen der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) `value`-Eigenschaft geändert werden.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keine Wirkung auf Eingaben mit dem `readonly`-Attribut, das ebenfalls angegeben ist.

### `size`

Das `size`-Attribut ist ein Zahlenwert, der angibt, wie viele Zeichen breit das Eingabefeld sein soll. Der Wert muss eine Zahl größer als null sein, und der Standardwert ist 20. Da Zeichenbreiten variieren, kann dies ungefähr sein und sollte nicht als genau angesehen werden; die resultierende Eingabe kann schmaler oder breiter als die angegebene Anzahl an Zeichen sein, abhängig von den Zeichen und den Schrifteinstellungen ({{cssxref("font")}}) im Einsatz.

Dies setzt _keine_ Grenze für die Anzahl der Zeichen, die der Benutzer in das Feld eingeben kann. Es gibt nur ungefähr an, wie viele auf einmal gesehen werden können. Um eine Obergrenze für die Länge der Eingabedaten festzulegen, verwenden Sie das [`maxlength`](#maxlength)-Attribut.

## Verwendung von E-Mail-Inputs

E-Mail-Adressen gehören zu den am häufigsten eingegebenen Textdatenformen im Web; sie werden zur Anmeldung auf Websites, beim Anfordern von Informationen, zur Bestellbestätigung, für Webmail usw. verwendet. Daher kann der `email`-Inputtyp Ihre Arbeit als Webentwickler erheblich erleichtern, da er Ihre Arbeit beim Erstellen der Benutzeroberfläche und der Logik für E-Mail-Adressen vereinfachen kann. Wenn Sie ein E-Mail-Input mit dem richtigen `type`-Wert `email` erstellen, erhalten Sie automatische Validierung, dass der eingegebene Text zumindest in der richtigen Form ist, um potenziell eine legitime E-Mail-Adresse zu sein. Dies kann dazu beitragen, Fälle zu vermeiden, in denen der Benutzer seine Adresse falsch eingibt oder eine ungültige Adresse angibt.

Es ist jedoch wichtig zu beachten, dass dies nicht ausreicht, um sicherzustellen, dass der angegebene Text eine tatsächlich existierende E-Mail-Adresse ist, die dem Benutzer der Website entspricht oder in irgendeiner Weise akzeptabel ist. Es stellt sicher, dass der Wert des Feldes korrekt formatiert ist, um eine E-Mail-Adresse zu sein.

> [!NOTE]
> Es ist auch entscheidend zu beachten, dass ein Benutzer Ihr HTML hinter den Kulissen manipulieren kann, weshalb Ihre Website _diese Validierung nicht_ zu Sicherheitszwecken verwenden darf. Sie _müssen_ die E-Mail-Adresse auf der Serverseite jeder Transaktion überprüfen, bei der der angegebene Text sicherheitsrelevante Auswirkungen irgendeiner Art haben könnte.

### Ein grundlegendes E-Mail-Input

Derzeit implementieren alle Browser, die dieses Element implementieren, es als ein Standard-Text-Eingabefeld mit grundlegenden Validierungsfunktionen. Die Spezifikation lässt den Browsern jedoch Spielraum. Zum Beispiel könnte das Element in das integrierte Adressbuch des Benutzergeräts integriert werden, um das Auswählen von E-Mail-Adressen aus dieser Liste zu ermöglichen. In seiner grundlegendsten Form kann ein `email`-Input so implementiert werden:

```html
<input id="emailAddress" type="email" />
```

{{ EmbedLiveSample('A_basic_email_input', 600, 40) }}

Beachten Sie, dass es als gültig angesehen wird, wenn es leer ist und wenn eine einzelne gültig formatierte E-Mail-Adresse eingegeben wird, jedoch sonst nicht als gültig angesehen wird. Durch Hinzufügen des [`required`](/de/docs/Web/HTML/Element/input#required)-Attributs sind nur gültig formatierte E-Mail-Adressen erlaubt; die Eingabe wird nicht mehr als gültig angesehen, wenn sie leer ist.

### Erlauben mehrerer E-Mail-Adressen

Durch Hinzufügen des [`multiple`](/de/docs/Web/HTML/Attributes/multiple)-Boolean-Attributs kann die Eingabe konfiguriert werden, um mehrere E-Mail-Adressen zu akzeptieren.

```html
<input id="emailAddress" type="email" multiple />
```

{{ EmbedLiveSample('Allowing multiple email addresses', 600, 40) }}

Die Eingabe wird jetzt als gültig angesehen, wenn eine einzelne E-Mail-Adresse eingegeben wird, oder wenn eine beliebige Anzahl von durch Kommas getrennten E-Mail-Adressen und optional einigen Leerzeichen vorhanden sind.

> [!NOTE]
> Wenn `multiple` verwendet wird, darf der Wert _leer_ sein.

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

Manchmal ist es hilfreich, einen kontextuellen Hinweis zu geben, in welcher Form die Eingabedaten vorliegen sollten. Dies kann besonders wichtig sein, wenn das Seitendesign keine beschreibenden Labels für jedes {{HTMLElement("input")}} bietet. Hier kommen **Platzhalter** ins Spiel. Ein Platzhalter ist ein Wert, der das Formular der einzutragenden `value` demonstriert, indem er ein Beispiel für einen gültigen Wert präsentiert, der in der Eingabe angezeigt wird, wenn der `value` des Elements "". Sobald Daten in das Feld eingegeben werden, verschwindet der Platzhalter; wenn das Feld geleert wird, erscheint der Platzhalter wieder.

Hier haben wir ein `email`-Input mit dem Platzhalter `sophie@example.com`. Beachten Sie, wie der Platzhalter verschwindet und wieder erscheint, wenn Sie den Inhalt des Eingabefelds manipulieren.

```html
<input type="email" placeholder="sophie@example.com" />
```

{{ EmbedLiveSample('Placeholders', 600, 40) }}

### Steuerung der Eingabegröße

Sie können nicht nur die physische Länge des Eingabefelds steuern, sondern auch die minimalen und maximalen Längen, die für den eingegebenen Text selbst erlaubt sind.

#### Physische Größe des Eingabeelements

Die physische Größe des Eingabefelds kann mit dem [`size`](/de/docs/Web/HTML/Element/input#size)-Attribut gesteuert werden. Damit können Sie die Anzahl der Zeichen angeben, die das Eingabefeld gleichzeitig anzeigen kann. In diesem Beispiel ist das `email`-Eingabefeld 15 Zeichen breit:

```html
<input type="email" size="15" />
```

{{ EmbedLiveSample('Physical_input_element_size', 600, 40) }}

#### Längenwert des Elements

Die `size` ist getrennt von der Längenbeschränkung für die eingegebene E-Mail-Adresse selbst, sodass Sie Felder in einen kleinen Raum passen lassen können, während längere E-Mail-Zeichenfolgen eingegeben werden können. Sie können eine minimale Länge in Zeichen für die eingegebene E-Mail-Adresse mit dem [`minlength`](/de/docs/Web/HTML/Element/input#minlength)-Attribut angeben; verwenden Sie ähnlich [`maxlength`](/de/docs/Web/HTML/Element/input#maxlength), um die maximale Länge der eingegebenen E-Mail-Adresse festzulegen.

Das folgende Beispiel erstellt ein 32 Zeichen breites Eingabefeld zur Eingabe von E-Mail-Adressen, das fordert, dass der Inhalt nicht kürzer als 3 Zeichen und nicht länger als 64 Zeichen ist.

```html
<input type="email" size="32" minlength="3" maxlength="64" />
```

{{EmbedLiveSample("Element_value_length", 600, 40) }}

### Bereitstellung von Standardoptionen

#### Bereitstellung eines einzelnen Standards mit dem Wertattribut

Wie immer können Sie einen Standardwert für ein `email`-Eingabefeld bereitstellen, indem Sie sein [`value`](/de/docs/Web/HTML/Element/input#value)-Attribut setzen:

```html
<input type="email" value="default@example.com" />
```

{{EmbedLiveSample("Providing_a_single_default_using_the_value_attribute", 600, 40)}}

#### Anbieten vorgeschlagener Werte

Einen Schritt weiter, Sie können eine Liste von Standardoptionen angeben, aus denen der Benutzer auswählen kann, indem Sie das [`list`](/de/docs/Web/HTML/Element/input#list)-Attribut angeben. Dies beschränkt den Benutzer nicht auf diese Optionen, ermöglicht es ihm jedoch, häufig verwendete E-Mail-Adressen schneller auszuwählen. Dies bietet auch Hinweise für [`autocomplete`](/de/docs/Web/HTML/Element/input#autocomplete). Das `list`-Attribut gibt die ID eines {{HTMLElement("datalist")}} an, das wiederum ein {{HTMLElement("option")}}-Element pro vorgeschlagenem Wert enthält; jedes `option`'s `value` ist der entsprechende vorgeschlagene Wert für das E-Mail-Eingabefeld.

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

Mit dem {{HTMLElement("datalist")}}-Element und seinen {{HTMLElement("option")}}s an Ort und Stelle wird der Browser die angegebenen Werte als potenzielle Werte für die E-Mail-Adresse anbieten; dies wird typischerweise als Popup- oder Dropdown-Menü mit den Vorschlägen dargestellt. Während die spezifische Benutzererfahrung von einem Browser zum anderen variieren kann, bietet das Klicken in das Eingabefeld typischerweise eine Dropdown-Liste mit den vorgeschlagenen E-Mail-Adressen. Dann wird die Liste, während der Benutzer tippt, gefiltert, um nur passende Werte anzuzeigen. Jeder getippte Buchstabe reduziert die Liste, bis der Benutzer eine Auswahl trifft oder einen benutzerdefinierten Wert eingibt.

## Validierung

Es gibt zwei Ebenen der Inhaltsvalidierung für `email`-Inputs. Erstens gibt es die Standardvalidierungsebene, die allen {{HTMLElement("input")}}s geboten wird, die automatisch sicherstellt, dass der Inhalt die Anforderungen erfüllt, eine gültige E-Mail-Adresse zu sein. Aber es gibt auch die Möglichkeit, zusätzliche Filter einzuführen, um sicherzustellen, dass Ihre eigenen speziellen Anforderungen erfüllt werden, falls Sie welche haben.

> [!WARNING]
> Die HTML-Formularvalidierung ist _kein_ Ersatz für Skripte, die sicherstellen, dass die eingegebenen Daten im richtigen Format vorliegen. Es ist viel zu einfach für jemanden, Anpassungen an dem HTML vorzunehmen, die es ihm ermöglichen, die Validierung zu umgehen oder sie vollständig zu entfernen. Es ist auch möglich, dass jemand Ihr HTML vollständig umgeht und die Daten direkt an Ihren Server sendet. Wenn Ihr serverseitiger Code die empfangenen Daten nicht validiert, könnte ein Desaster passieren, wenn falsch formatierte Daten (oder Daten, die zu groß sind, den falschen Typ haben usw.) in Ihre Datenbank eingegeben werden.

### Grundlegende Validierung

Browser bieten automatisch Validierung, um sicherzustellen, dass nur Text, der dem Standardformat für Internet-E-Mail-Adressen entspricht, in das Eingabefeld eingegeben wird. Browser verwenden einen Algorithmus, der einem regulären Ausdruck wie dem folgenden entspricht:

```js
/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
```

Um mehr darüber zu erfahren, wie Formularvalidierung funktioniert und wie Sie die CSS-Eigenschaften {{cssxref(":valid")}} und {{cssxref(":invalid")}} nutzen können, um das Input-Feld basierend darauf zu stylen, ob der aktuelle Wert gültig ist oder nicht, siehe [Formulardatenvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation).

> [!NOTE]
> Es gibt bekannte Spezifikationsprobleme im Zusammenhang mit internationalen Domainnamen und der Validierung von E-Mail-Adressen in HTML. Siehe [W3C Fehler 15489](https://www.w3.org/Bugs/Public/show_bug.cgi?id=15489) für Details.

### Mustervalidierung

Wenn Sie möchten, dass die eingegebene E-Mail-Adresse weiter eingeschränkt wird als nur "irgendein Text, der wie eine E-Mail-Adresse aussieht", können Sie das [`pattern`](/de/docs/Web/HTML/Element/input#pattern)-Attribut verwenden, um einen {{Glossary("regular_expression", "regulären Ausdruck")}} anzugeben, den der Wert erfüllen muss, um gültig zu sein. Wenn das [`multiple`](/de/docs/Web/HTML/Element/input#multiple)-Attribut angegeben ist, muss jeder einzelne Eintrag in der durch Kommas getrennten Liste der Werte den {{Glossary("regular_expression", "regulären Ausdruck")}} erfüllen.

Angenommen, Sie erstellen eine Seite für Mitarbeiter von Best Startup Ever, Inc., die ihnen den Kontakt mit ihrer IT-Abteilung ermöglichen soll, um Hilfe zu erhalten. In unserem vereinfachten Formular muss der Benutzer seine E-Mail-Adresse und eine Nachricht, die das Problem beschreibt, bei dem er Hilfe benötigt, eingeben. Wir möchten sicherstellen, dass der Benutzer nicht nur eine gültige E-Mail-Adresse angibt, sondern aus Sicherheitsgründen verlangen wir, dass die Adresse eine interne Unternehmens-E-Mail-Adresse ist.

Da Inputs vom Typ `email` sowohl gegen den Standardprüfmechanismus für E-Mail-Adressen als auch gegen das angegebene [`pattern`](/de/docs/Web/HTML/Element/input#pattern) validieren, können Sie dies einfach implementieren. Schauen wir uns an, wie:

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

Unser {{HTMLElement("form")}} enthält ein {{HTMLElement("input")}} vom Typ `email` für die E-Mail-Adresse des Benutzers, ein {{HTMLElement("textarea")}}, in dem der Benutzer seine Nachricht an die IT-Abteilung eingeben kann, und ein `<input>` vom Typ [`"submit"`](/de/docs/Web/HTML/Element/input/submit), das einen Button zum Absenden des Formulars erstellt. Jede Texteingabezelle hat ein zugeordnetes {{HTMLElement("label")}}, um dem Benutzer mitzuteilen, was von ihm erwartet wird.

Werfen wir einen genaueren Blick auf das E-Mail-Eingabefeld. Seine [`size`](/de/docs/Web/HTML/Element/input#size) und [`maxlength`](/de/docs/Web/HTML/Element/input#maxlength)-Attribute sind beide auf 64 gesetzt, um Platz für 64 Zeichen der E-Mail-Adresse zu zeigen und die Anzahl der tatsächlich eingegebenen Zeichen auf maximal 64 zu begrenzen. Das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut ist angegeben, wodurch es zwingend erforderlich ist, eine gültige E-Mail-Adresse anzugeben.

Ein geeigneter [`placeholder`](/de/docs/Web/HTML/Element/input#placeholder) wird bereitgestellt: `username@beststartupever.com` – um zu demonstrieren, was einen gültigen Eintrag darstellt. Diese Zeichenfolge zeigt sowohl, dass eine E-Mail-Adresse eingegeben werden sollte, als auch, dass es sich um ein Unternehmens-Konto der Domain beststartupever.com handeln sollte. Dies ist zusätzlich zu dem Umstand, dass beim Typ `email` der Text validiert wird, um sicherzustellen, dass er als E-Mail-Adresse formatiert ist. Wenn der Text im Eingabefeld keine E-Mail-Adresse ist, erhalten Sie eine Fehlermeldung, die ungefähr so aussieht:

![Ungültige E-Mail-Adresse im Fehlerzustand mit einem Popout aus der Eingabe, das „Bitte geben Sie eine E-Mail-Adresse ein“ liest.](enter-valid-email-address.png)

Wenn wir es dabei belassen würden, würden wir zumindest verhindern, dass ungültige E-Mail-Adressen eingegeben werden. Aber wir wollen einen Schritt weiter gehen: Wir wollen sicherstellen, dass die E-Mail-Adresse tatsächlich die Form `[username]@beststartupever.com` hat. Hier verwenden wir das [`pattern`](/de/docs/Web/HTML/Element/input#pattern). Wir setzen `pattern` auf `.+@beststartupever.com`. Dieser reguläre Ausdruck fordert eine Zeichenfolge an, die aus mindestens einem Zeichen jeglicher Art besteht, gefolgt von einem „@“ und anschließend dem Domänennamen „beststartupever.com“.

Beachten Sie, dass dies keineswegs ein adäquater Filter für gültige E-Mail-Adressen ist; es würde Dinge zulassen wie „ @beststartupever.com“ (beachten Sie das führende Leerzeichen) oder „@@beststartupever.com“, die beide nicht gültig sind. Der Browser führt jedoch sowohl den Standardfilter für E-Mail-Adressen _als auch_ unser benutzerdefiniertes Muster gegen den angegebenen Text aus. Das Ergebnis ist eine Validierung, die sagt: „Stellen Sie sicher, dass dies eine gültige E-Mail-Adresse ist, und wenn es das ist, stellen Sie sicher, dass es sich auch um eine beststartupever.com-Adresse handelt.“

Es ist ratsam, das [`title`](/de/docs/Web/HTML/Global_attributes/title)-Attribut zusammen mit `pattern` zu verwenden. Wenn Sie das tun, _muss_ `title` das Muster beschreiben. Das heißt, es sollte erklären, welches Format die Daten haben sollen, und keine anderen Informationen. Denn das `title`-Attribut könnte als Teil einer Validierungsfehlermeldung angezeigt oder gesprochen werden. Der Browser könnte zum Beispiel die Meldung darstellen „Der eingegebene Text entspricht nicht dem erforderlichen Muster.“, gefolgt von dem angegebenen `title`. Wenn Ihr `title` etwa „E-Mail-Adresse“ ist, würde die Meldung etwa lauten: „Der eingegebene Text entspricht nicht dem erforderlichen Muster. E-Mail-Adresse“, was nicht sehr hilfreich ist.

Deshalb geben wir stattdessen die Zeichenfolge „Bitte geben Sie nur eine Best Startup Ever Unternehmens-E-Mail-Adresse ein.“ an. Dadurch könnte die vollständige Fehlermeldung in etwa lauten: „Der eingegebene Text entspricht nicht dem erforderlichen Muster. Bitte geben Sie nur eine Best Startup Ever Unternehmens-E-Mail-Adresse ein.“

![Eine gültige E-Mail-Adresse, aber die Eingabe befindet sich im Fehlerzustand mit einem Popout aus der Eingabe, das „Der eingegebene Text entspricht nicht dem erforderlichen Muster. Bitte geben Sie nur eine Best Startup Ever Unternehmens-E-Mail-Adresse ein.“ liest.](email-pattern-match-bad.png)

> [!NOTE]
> Wenn Sie auf Probleme stoßen, während Sie Ihre Validierungsregulärausdrücke schreiben und sie nicht richtig funktionieren, überprüfen Sie die Konsole Ihres Browsers; dort könnten hilfreiche Fehlermeldungen sein, die Ihnen bei der Lösung des Problems helfen.

## Beispiele

Hier haben wir ein E-Mail-Input mit der ID `emailAddress`, das bis zu maximal 256 Zeichen lang sein darf. Das Eingabefeld selbst ist physisch 64 Zeichen breit und zeigt den Text `user@example.gov` als Platzhalter immer dann an, wenn das Feld leer ist. Zusätzlich ist das Feld mit dem [`multiple`](/de/docs/Web/HTML/Attributes/multiple)-Attribut konfiguriert, um dem Benutzer zu erlauben, null oder mehr E-Mail-Adressen einzugeben, getrennt durch Kommas, wie in [Erlaubte mehrere E-Mail-Adressen](#erlauben_mehrerer_e-mail-adressen) beschrieben. Als zusätzlicher Anreiz enthält das [`list`](/de/docs/Web/HTML/Element/input#list)-Attribut die ID eines {{HTMLElement("datalist")}}, dessen {{HTMLElement("option")}}s einen Satz vorgeschlagener Werte angeben, aus denen der Benutzer auswählen kann.

Als zusätzliches Touch wird das {{HTMLElement("label")}}-Element verwendet, um ein Label für das E-Mail-Eingabefeld zu erstellen, wobei sein [`for`](/de/docs/Web/HTML/Element/label#for)-Attribut auf die `emailAddress` ID des {{HTMLElement("input")}}-Elements verweist. Durch die Verknüpfung der beiden Elemente in dieser Weise wird das Fokussieren des Eingabefelds durch Klicken auf das Label ermöglicht.

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
      <td><strong>Events</strong></td>
      <td>
        [`change`](/de/docs/Web/API/HTMLElement/change_event) und
        [`input`](/de/docs/Web/API/Element/input_event)
      </td>
    </tr>
    <tr>
      <td><strong>Unterstützte Allgemeine Attribute</strong></td>
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
      <td><strong>Implizite ARIA-Rolle</strong></td>
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

- [HTML-Formularleitfaden](/de/docs/Learn_web_development/Extensions/Forms)
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
