---
title: <input type="email">
slug: Web/HTML/Reference/Elements/input/email
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

{{HTMLElement("input")}} Elemente vom Typ **`email`** werden verwendet, um dem Benutzer zu ermöglichen, eine E-Mail-Adresse einzugeben und zu bearbeiten, oder, wenn das Attribut [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple) angegeben ist, eine Liste von E-Mail-Adressen.

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

Der Eingabewert wird automatisch validiert, um sicherzustellen, dass er entweder leer oder eine korrekt formatierte E-Mail-Adresse (oder Liste von Adressen) ist, bevor das Formular abgeschickt werden kann. Die CSS-Pseudoklassen {{cssxref(":valid")}} und {{cssxref(":invalid")}} werden automatisch angewendet, um optisch anzuzeigen, ob der aktuelle Wert des Feldes eine gültige E-Mail-Adresse ist oder nicht.

## Wert

Das [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Attribut des {{HTMLElement("input")}} Elements enthält eine Zeichenkette, die automatisch zum Anpassen an die E-Mail-Syntax validiert wird. Genauer gesagt gibt es drei mögliche Wertformate, die die Validierung bestehen:

1. Eine leere Zeichenkette ("") die anzeigt, dass der Benutzer keinen Wert eingegeben hat oder dass der Wert entfernt wurde.
2. Eine einzelne korrekt formatierte E-Mail-Adresse. Das bedeutet nicht unbedingt, dass die E-Mail-Adresse existiert, aber sie ist zumindest korrekt formatiert. Dies bedeutet `username@domain` oder `username@domain.tld`. Natürlich gibt es mehr Details; siehe [Validierung](#validierung) für einen {{Glossary("regular_expression", "regulären Ausdruck")}}, der mit dem E-Mail-Adressen-Validierungsalgorithmus übereinstimmt.
3. Und nur unter der Voraussetzung, dass das Attribut [`multiple`](/de/docs/Web/HTML/Reference/Elements/input#multiple) angegeben ist, kann der Wert eine Liste von korrekt geformten, kommagetrennten E-Mail-Adressen sein. Eventuelle führende und nachfolgende Leerzeichen werden aus jeder Adresse in der Liste entfernt.

Details zur E-Mail-Adressvalidierung, um sicherzustellen, dass sie korrekt formatiert ist, finden Sie unter [Validierung](#validierung).

## Zusätzliche Attribute

Neben den [globalen Attributen](/de/docs/Web/HTML/Reference/Global_attributes) und den Attributen, die auf alle {{HTMLElement("input")}} Elemente unabhängig von ihrem Typ zutreffen, unterstützen `email` Eingaben die folgenden Attribute.

> [!NOTE]
> Das globale Attribut [`autocorrect`](/de/docs/Web/HTML/Reference/Global_attributes/autocorrect) kann zu E-Mail-Eingaben hinzugefügt werden, aber der gespeicherte Zustand ist immer `off`.

### list

Der Wert des list-Attributs ist die [`id`](/de/docs/Web/API/Element/id) eines im selben Dokument befindlichen {{HTMLElement("datalist")}} Elements. Der {{HTMLElement("datalist")}} bietet eine Liste vordefinierter Werte, die dem Benutzer als Vorschläge für diese Eingabe angezeigt werden. Werte, die in der Liste vorhanden sind und nicht mit dem [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) kompatibel sind, werden nicht in den vorgeschlagenen Optionen aufgenommen. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert angeben.

### maxlength

Die maximale Zeichenkettenlänge (gemessen in UTF-16 Codeeinheiten), die der Benutzer in die `email` Eingabe eingeben kann. Dies muss ein ganzzahliger Wert von 0 oder höher sein. Wenn kein `maxlength` angegeben oder ein ungültiger Wert angegeben ist, hat die `email` Eingabe keine maximale Länge. Dieser Wert muss auch größer oder gleich dem Wert von `minlength` sein.

Die Eingabe schlägt bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl, wenn die Länge des Textwertes des Feldes größer als `maxlength` UTF-16 Codeeinheiten ist. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### minlength

Die minimale Zeichenkettenlänge (gemessen in UTF-16 Codeeinheiten), die der Benutzer in die `email` Eingabe eingeben kann. Dies muss ein nicht-negativer ganzzahliger Wert sein, der kleiner oder gleich dem durch `maxlength` angegebenen Wert ist. Wenn kein `minlength` angegeben oder ein ungültiger Wert angegeben ist, hat die `email` Eingabe keine Mindestlänge.

Die Eingabe schlägt bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl, wenn die Länge des in das Feld eingegebenen Textes weniger als `minlength` UTF-16 Codeeinheiten beträgt. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### multiple

Ein Boolean-Attribut, das, wenn es vorhanden ist, anzeigt, dass der Benutzer eine Liste mehrerer E-Mail-Adressen eingeben kann, getrennt durch Kommas und optional Leerzeichen. Sehen Sie sich das Beispiel unter [Erlauben mehrerer E-Mail-Adressen](#erlauben_mehrerer_e-mail-adressen) oder [HTML-Attribut: multiple](/de/docs/Web/HTML/Reference/Attributes/multiple) für weitere Details an.

> [!NOTE]
> Normalerweise, wenn Sie das Attribut [`required`](/de/docs/Web/HTML/Reference/Elements/input#required) angeben, muss der Benutzer eine gültige E-Mail-Adresse eingeben, damit das Feld als gültig angesehen wird. Wenn Sie jedoch das `multiple` Attribut hinzufügen, ist eine Liste mit null E-Mail-Adressen (eine leere Zeichenkette oder eine, die ausschließlich aus Leerzeichen besteht) ein gültiger Wert. Anders ausgedrückt, der Benutzer muss keine einzige E-Mail-Adresse eingeben, wenn `multiple` angegeben ist, unabhängig vom Wert von `required`.

### pattern

Das `pattern` Attribut, wenn es angegeben ist, ist ein regulärer Ausdruck, den der [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) der Eingabe erfüllen muss, damit der Wert die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) besteht. Es muss ein gültiger JavaScript-reger Ausdruck sein, wie er vom {{jsxref("RegExp")}} Typ verwendet wird und wie in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert ist; das `'u'` Flag wird beim Kompilieren des regulären Ausdrucks angegeben, damit das Muster als eine Sequenz von Unicode-Codepunkten anstelle von {{Glossary("ASCII", "ASCII")}} behandelt wird. Es sollten keine Schrägstriche um den Text des Musters angegeben werden.

Wenn das angegebene Muster nicht spezifiziert oder ungültig ist, wird kein regulärer Ausdruck angewendet und dieses Attribut wird vollständig ignoriert.

> [!NOTE]
> Verwenden Sie das [`title`](/de/docs/Web/HTML/Reference/Elements/input#title) Attribut, um einen Text anzugeben, den die meisten Browser als Tooltip anzeigen, um zu erklären, welche Anforderungen erfüllt sein müssen, um dem Muster zu entsprechen. Sie sollten auch andere erklärende Texte in der Nähe einfügen.

Siehe den Abschnitt [Muster Validierung](#muster-validierung) für Details und ein Beispiel.

### `placeholder`

Das `placeholder` Attribut ist eine Zeichenkette, die dem Benutzer einen kurzen Hinweis darauf gibt, welche Art von Informationen in dem Feld erwartet werden. Es sollte ein Wort oder eine kurze Phrase sein, die den erwarteten Datentyp demonstriert, anstatt eine erklärende Nachricht zu sein. Der Text _darf keine_ Wagenrückläufe oder Zeilenvorschübe enthalten.

Wenn der Inhalt des Steuerelements eine Richtung (LTR oder RTL) hat, der Platzhalter jedoch in der entgegengesetzten Richtung präsentiert werden muss, können Sie Unicode-Bidi-Steuerzeichen verwenden, um die Ausrichtung innerhalb des Platzhalters zu überschreiben; siehe [So verwenden Sie Unicode-Steuerelemente für bidirektionalen Text](https://www.w3.org/International/questions/qa-bidi-unicode-controls) für weitere Informationen.

> [!NOTE]
> Vermeiden Sie, wenn möglich, die Verwendung des `placeholder` Attributs. Es ist nicht so semantisch nützlich wie andere Möglichkeiten, Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Weitere Informationen finden Sie unter [`<input>` Labels](/de/docs/Web/HTML/Reference/Elements/input#labels).

### `readonly`

Ein Boolean-Attribut, das, wenn es vorhanden ist, bedeutet, dass dieses Feld nicht vom Benutzer bearbeitet werden kann. Der `value` kann jedoch weiterhin durch JavaScript-Code direkt durch Einstellen der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) `value` Eigenschaft geändert werden.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keine Auswirkungen auf Eingaben, bei denen auch das `readonly` Attribut angegeben ist.

### `size`

Das `size` Attribut ist ein numerischer Wert, der angibt, wie viele Zeichen breit das Eingabefeld sein soll. Der Wert muss eine Zahl größer als null sein, und der Standardwert ist 20. Da sich Zeichenbreiten unterscheiden, kann dies genauer oder weniger genau sein und sollte nicht als solches angesehen werden; das resultierende Eingabefeld kann schmaler oder breiter als die angegebene Anzahl von Zeichen sein, abhängig von den Zeichen und der Schriftart ({{cssxref("font")}} Einstellungen in Verwendung).

Dies setzt _keine_ Obergrenze für die Anzahl der Zeichen, die der Benutzer in das Feld eingeben kann. Es bestimmt nur ungefähr, wie viele auf einmal angezeigt werden können. Um ein oberes Limit für die Länge der Eingabedaten festzulegen, verwenden Sie das [`maxlength`](#maxlength) Attribut.

## Verwendung von E-Mail-Eingaben

E-Mail-Adressen gehören zu den häufigsten Texteingabe-Daten in Formularen im Web; sie werden verwendet beim Einloggen auf Websites, beim Anfordern von Informationen, zur Auftragsbestätigung, für Webmail und so weiter. Als solches kann der Eingabetyp `email` Ihre Arbeit als Webentwickler erheblich erleichtern, da er helfen kann, Ihre Arbeit bei der Erstellung der Benutzeroberfläche und Logik für E-Mail-Adressen zu vereinfachen. Wenn Sie eine E-Mail-Eingabe mit dem richtigen `type` Wert, `email`, erstellen, erhalten Sie eine automatische Validierung, dass der eingegebene Text zumindest in der richtigen Form vorliegt, um potenziell eine legitime E-Mail-Adresse zu sein. Dies kann helfen, Fälle zu vermeiden, in denen der Benutzer seine Adresse falsch eingibt oder eine ungültige Adresse angibt.

Es ist jedoch wichtig zu beachten, dass dies nicht ausreicht, um sicherzustellen, dass der angegebene Text eine E-Mail-Adresse ist, die tatsächlich existiert, dem Benutzer der Seite gehört oder auf irgendeine andere Weise akzeptabel ist. Es stellt sicher, dass der Wert des Feldes korrekt formatiert ist, um eine E-Mail-Adresse zu sein.

> [!NOTE]
> Es ist auch entscheidend zu bedenken, dass ein Benutzer hinter den Kulissen an Ihrem HTML herumbasteln kann, so dass Ihre Seite _dieser Validierung für keinerlei Sicherheitszwecke vertrauen darf_. Sie _müssen_ die E-Mail-Adresse auf der Serverseite jeder Transaktion verifizieren, in der der bereitgestellte Text Sicherheitsimplikationen jeglicher Art haben könnte.

### Eine grundlegende E-Mail-Eingabe

Derzeit implementieren alle Browser, die dieses Element implementieren, es als standardmäßigen Texteingabefeld mit grundlegenden Validierungsfunktionen. Die Spezifikation erlaubt den Browsern jedoch gewisse Freiheit in dieser Hinsicht. Zum Beispiel könnte das Element in das integrierte Adressbuch des Geräts des Benutzers integriert werden, um das Auswählen von E-Mail-Adressen aus dieser Liste zu ermöglichen. In seiner einfachsten Form kann eine `email` Eingabe folgendermaßen implementiert werden:

```html
<input id="emailAddress" type="email" />
```

{{ EmbedLiveSample('A_basic_email_input', 600, 40) }}

Beachten Sie, dass es als gültig betrachtet wird, wenn es leer ist und wenn eine einzelne korrekt formatierte E-Mail-Adresse eingegeben wurde, aber ansonsten nicht als gültig betrachtet wird. Indem man das Attribut [`required`](/de/docs/Web/HTML/Reference/Elements/input#required) hinzufügt, werden nur korrekt geformte E-Mail-Adressen zugelassen; die Eingabe wird nicht mehr als gültig betrachtet, wenn sie leer ist.

### Erlauben mehrerer E-Mail-Adressen

Durch das Hinzufügen des [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple) Boolean-Attributs kann die Eingabe so konfiguriert werden, dass mehrere E-Mail-Adressen akzeptiert werden.

```html
<input id="emailAddress" type="email" multiple />
```

{{ EmbedLiveSample('Allowing multiple email addresses', 600, 40) }}

Die Eingabe wird jetzt als gültig betrachtet, wenn eine einzelne E-Mail-Adresse eingegeben wird oder wenn eine beliebige Anzahl von E-Mail-Adressen durch Kommas getrennt und optional einige Leerzeichen vorhanden sind.

> [!NOTE]
> Bei Verwendung von `multiple` ist der Wert _erlaubt_, leer zu sein.

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

Manchmal ist es hilfreich, einen kontextuell passenden Hinweis darauf zu geben, in welcher Form die Eingabedaten vorliegen sollten. Dies kann besonders wichtig sein, wenn das Seitendesign keine beschreibenden Labels für jedes {{HTMLElement("input")}} bietet. Hier kommen **Platzhalter** zum Einsatz. Ein Platzhalter ist ein Wert, der die Form zeigt, die der `value` annehmen sollte, indem er ein Beispiel für einen gültigen Wert präsentiert, das innerhalb des Bearbeitungsfelds angezeigt wird, wenn der `value` des Elements "" ist. Sobald Daten im Feld eingegeben werden, verschwindet der Platzhalter; wenn das Feld geleert wird, erscheint der Platzhalter wieder.

Hier haben wir eine `email` Eingabe mit dem Platzhalter `sophie@example.com`. Beachten Sie, wie der Platzhalter verschwindet und erneut erscheint, wenn Sie den Inhalt des Bearbeitungsfelds verändern.

```html
<input type="email" placeholder="sophie@example.com" />
```

{{ EmbedLiveSample('Placeholders', 600, 40) }}

### Kontrolle der Eingabegröße

Sie können nicht nur die physische Länge der Eingabebox steuern, sondern auch die minimalen und maximalen Längen, die für den Eingabetext selbst erlaubt sind.

#### Physische Größe des Eingabeelements

Die physische Größe der Eingabebox kann mit dem [`size`](/de/docs/Web/HTML/Reference/Elements/input#size) Attribut gesteuert werden. Damit können Sie die Anzahl der Zeichen angeben, die die Eingabebox gleichzeitig anzeigen kann. In diesem Beispiel ist die `email` Eingabebox 15 Zeichen breit:

```html
<input type="email" size="15" />
```

{{ EmbedLiveSample('Physical_input_element_size', 600, 40) }}

#### Länge des Elementwerts

Die `size` ist separat von der Längenbegrenzung für die tatsächlich eingegebene E-Mail-Adresse, sodass Sie Felder in einen kleinen Raum passen können, während Sie dennoch längere E-Mail-Adresseingaben zulassen können. Sie können eine Mindestlänge in Zeichen für die eingegebene E-Mail-Adresse mithilfe des [`minlength`](/de/docs/Web/HTML/Reference/Elements/input#minlength) Attributs festlegen; verwenden Sie ähnlich [`maxlength`](/de/docs/Web/HTML/Reference/Elements/input#maxlength), um die maximale Länge der eingegebenen E-Mail-Adresse festzulegen.

Das folgende Beispiel erstellt ein 32 Zeichen breites Eingabefeld für E-Mail-Adressen, das erfordert, dass der Inhalt nicht kürzer als 3 Zeichen und nicht länger als 64 Zeichen ist.

```html
<input type="email" size="32" minlength="3" maxlength="64" />
```

{{EmbedLiveSample("Element_value_length", 600, 40) }}

### Vorgabewerte anbieten

#### Ein einzelner Standardwert mit dem Wertattribut bereitstellen

Wie immer können Sie einen Standardwert für eine `email` Eingabebox bereitstellen, indem Sie ihr [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) Attribut festlegen:

```html
<input type="email" value="default@example.com" />
```

{{EmbedLiveSample("Providing_a_single_default_using_the_value_attribute", 600, 40)}}

#### Vorschlagswerte anbieten

Sie können es weiter reduzieren und eine Liste von Standardoptionen bereitstellen, aus denen der Benutzer auswählen kann, indem Sie das [`list`](/de/docs/Web/HTML/Reference/Elements/input#list) Attribut angeben. Dies beschränkt den Benutzer nicht auf diese Optionen, ermöglicht ihm jedoch, häufiger verwendete E-Mail-Adressen schneller auszuwählen. Es bietet auch Hinweise auf [`autocomplete`](/de/docs/Web/HTML/Reference/Elements/input#autocomplete). Das `list` Attribut gibt die ID eines {{HTMLElement("datalist")}} an, das seinerseits ein {{HTMLElement("option")}} Element pro vorgeschlagenem Wert enthält; jedes `option` `value` ist der entsprechende vorgeschlagene Wert für die E-Mail-Eingabebox.

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

Mit dem {{HTMLElement("datalist")}} Element und seinen {{HTMLElement("option")}}s an seinem Platz bietet der Browser die angegebenen Werte als potenzielle Werte für die E-Mail-Adresse an; dies wird normalerweise als Popup oder Dropdown-Menü mit den Vorschlägen präsentiert. Obwohl das spezifische Benutzererlebnis von einem Browser zum anderen variieren kann, zeigt das Klicken in das Bearbeitungsfeld typischerweise ein Dropdown-Menü mit den vorgeschlagenen E-Mail-Adressen an. Dann, wenn der Benutzer tippt, wird die Liste gefiltert, um nur passende Werte anzuzeigen. Jedes eingegebene Zeichen engt die Liste weiter ein, bis der Benutzer eine Auswahl trifft oder einen benutzerdefinierten Wert eingibt.

## Validierung

Es stehen zwei Ebenen der Inhaltsvalidierung für `email` Eingaben zur Verfügung. Zunächst gibt es die standardmäßige Validierungsebene, die allen {{HTMLElement("input")}}s geboten wird und automatisch sicherstellt, dass die Inhalte die Anforderungen erfüllen, um eine gültige E-Mail-Adresse zu sein. Es besteht aber auch die Möglichkeit, zusätzliche Filter hinzuzufügen, um sicherzustellen, dass Ihre eigenen speziellen Bedürfnisse erfüllt werden, falls Sie welche haben.

> [!WARNING]
> Die HTML-Formularvalidierung ist _kein_ Ersatz für Skripte, die sicherstellen, dass die eingegebenen Daten im korrekten Format vorliegen. Es ist viel zu einfach für jemanden, Änderungen an dem HTML vorzunehmen, die es ihm ermöglicht, die Validierung zu umgehen oder vollständig zu entfernen. Es ist auch möglich, dass jemand Ihr HTML vollständig umgeht und die Daten direkt an Ihren Server sendet. Wenn Ihr serverseitiger Code die empfangenen Daten nicht validiert, könnte eine Katastrophe eintreten, wenn falsch formatierte Daten (oder Daten, die zu groß sind, vom falschen Typ sind usw.) in Ihre Datenbank eingegeben werden.

### Grundlegende Validierung

Browser bieten automatisch eine Validierung, um sicherzustellen, dass nur Text, der dem Standardformat für Internet-E-Mail-Adressen entspricht, in das Eingabefeld eingegeben wird. Browser verwenden einen Algorithmus, der dem folgenden regulären Ausdruck entspricht:

```js
/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
```

Erfahren Sie mehr darüber, wie Formularvalidierung funktioniert und wie Sie die CSS-Eigenschaften {{cssxref(":valid")}} und {{cssxref(":invalid")}} verwenden können, um die Eingabe basierend darauf zu stylen, ob der aktuelle Wert gültig ist, siehe [Formulardatenvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation).

> [!NOTE]
> Es gibt bekannte Spezifikationsprobleme im Zusammenhang mit internationalen Domänennamen und der Validierung von E-Mail-Adressen in HTML. Siehe [W3C Bug 15489](https://www.w3.org/Bugs/Public/show_bug.cgi?id=15489) für Details.

### Muster-Validierung

Wenn Sie die eingegebene E-Mail-Adresse weiter einschränken müssen als nur "jede Zeichenfolge, die wie eine E-Mail-Adresse aussieht", können Sie das [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern) Attribut verwenden, um einen {{Glossary("regular_expression", "Regulären Ausdruck")}} anzugeben, dem der Wert entsprechen muss, damit er gültig ist. Wenn das [`multiple`](/de/docs/Web/HTML/Reference/Elements/input#multiple) Attribut angegeben ist, muss jedes einzelne Element in der kommagetrennten Liste von Werten dem {{Glossary("regular_expression", "Regulären Ausdruck")}} entsprechen.

Zum Beispiel, sagen wir, Sie erstellen eine Seite für Mitarbeiter von Best Startup Ever, Inc., die es ihnen ermöglicht, sich mit ihrer IT-Abteilung in Verbindung zu setzen, um Hilfe zu erhalten. In unserem vereinfachten Formular muss der Benutzer seine E-Mail-Adresse eingeben und eine Nachricht eingeben, die das Problem beschreibt, bei dem er Hilfe benötigt. Wir möchten sicherstellen, dass der Benutzer nicht nur eine gültige E-Mail-Adresse angibt, sondern aus Sicherheitsgründen erfordern wir, dass die Adresse eine interne Unternehmens-E-Mail-Adresse ist.

Da Eingaben vom Typ `email` sowohl gegen die Standard-E-Mail-Adressvalidierung als auch gegen das angegebene [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern) validieren, können Sie dies einfach implementieren. Schauen wir uns an, wie:

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

Unser {{HTMLElement("form")}} enthält eine {{HTMLElement("input")}} vom Typ `email` für die E-Mail-Adresse des Benutzers, ein {{HTMLElement("textarea")}} zur Eingabe ihrer Nachricht für die IT und ein `<input>` vom Typ [`"submit"`](/de/docs/Web/HTML/Reference/Elements/input/submit), das einen Button zum Senden des Formulars erstellt. Jede Texteingabebox hat ein zugeordnetes {{HTMLElement("label")}}, das dem Benutzer mitteilt, was von ihm erwartet wird.

Werfen wir einen genaueren Blick auf die Eingabebox für die E-Mail-Adresse. Ihre [`size`](/de/docs/Web/HTML/Reference/Elements/input#size) und [`maxlength`](/de/docs/Web/HTML/Reference/Elements/input#maxlength) Attribute sind beide auf 64 gesetzt, um Platz für 64 Zeichen der E-Mail-Adresse anzuzeigen und die Anzahl der tatsächlich eingegebenen Zeichen auf maximal 64 zu begrenzen. Das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required) Attribut ist angegeben, was es erforderlich macht, eine gültige E-Mail-Adresse anzugeben.

Ein geeigneter [`placeholder`](/de/docs/Web/HTML/Reference/Elements/input#placeholder) wird bereitgestellt — `username@beststartupever.com` — um zu zeigen, was als gültige Eingabe betrachtet wird. Diese Zeichenfolge zeigt sowohl, dass eine E-Mail-Adresse eingegeben werden sollte, als auch, dass es sich um einen Unternehmens-Account von beststartupever.com handelt. Zusätzlich dazu, dass die Verwendung des Typs `email` den Text validieren wird, um sicherzustellen, dass er wie eine E-Mail-Adresse formatiert ist. Wenn der Text im Eingabefeld keine E-Mail-Adresse ist, erhalten Sie eine Fehlermeldung, die in etwa so aussieht:

![Ungültige E-Mail-Adresse im Fehlerzustand mit einem Popup aus der Eingabe, das 'Bitte geben Sie eine E-Mail-Adresse ein' liest.](enter-valid-email-address.png)

Wenn wir es dabei beließen, würden wir zumindest legitime E-Mail-Adressen validieren. Aber wir möchten einen Schritt weiter gehen: Wir möchten sicherstellen, dass die E-Mail-Adresse tatsächlich im Format `[username]@beststartupever.com` ist. Hier verwenden wir [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern). Wir setzen `pattern` auf `.+@beststartupever.com`. Dieser reguläre Ausdruck fordert eine Zeichenfolge an, die aus mindestens einem Zeichen jeglicher Art, dann einem "@" gefolgt von dem Domainnamen "beststartupever.com" besteht.

Beachten Sie, dass dies kein ausreichender Filter für gültige E-Mail-Adressen ist; er würde Dinge wie " @beststartupever.com" (beachten Sie das führende Leerzeichen) oder "@@beststartupever.com" zulassen, von denen keiner gültig ist. Browser führen jedoch sowohl den Standard-E-Mail-Adressenfilter als auch unser benutzerdefiniertes Muster gegen den angegebenen Text aus. Dadurch erhalten wir eine Validierung, die besagt: "Stellen Sie sicher, dass dies wie eine gültige E-Mail-Adresse aussieht, und wenn es so ist, stellen Sie sicher, dass es sich auch um eine beststartupever.com Adresse handelt."

Es ist ratsam, das [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title) Attribut zusammen mit `pattern` zu verwenden. Wenn Sie dies tun, _muss_ das `title` das Muster beschreiben. Das heißt, es sollte erklären, welches Format die Daten annehmen sollten, anstatt andere Informationen. Das liegt daran, dass das `title` möglicherweise als Teil einer Validierungsfehlermeldung angezeigt oder gesprochen wird. Zum Beispiel könnte der Browser die Nachricht "Der eingegebene Text stimmt nicht mit dem erforderlichen Muster überein." anzeigen, gefolgt von Ihrem angegebenen `title`. Wenn Ihr `title` etwas wie "E-Mail-Adresse" ist, wäre das Ergebnis die Nachricht "Der eingegebene Text stimmt nicht mit dem erforderlichen Muster überein. E-Mail-Adresse", was nicht sehr hilfreich ist.

Deshalb spezifizieren wir stattdessen den String "Bitte geben Sie nur eine Unternehmens-E-Mail-Adresse von Best Startup Ever ein." Indem wir dies tun, könnte die resultierende vollständige Fehlermeldung etwa so lauten: "Der eingegebene Text stimmt nicht mit dem erforderlichen Muster überein. Bitte geben Sie nur eine Unternehmens-E-Mail-Adresse von Best Startup Ever ein."

![Eine gültige E-Mail-Adresse, aber die Eingabe ist im Fehlerzustand mit einem Popup aus der Eingabe, das 'Der eingegebene Text stimmt nicht mit dem erforderlichen Muster überein. Bitte geben Sie nur eine Unternehmens-E-Mail-Adresse von Best Startup Ever ein.' liest.](email-pattern-match-bad.png)

> [!NOTE]
> Wenn Sie auf Probleme stoßen, während Sie Ihre Validierungsregulären Ausdrücke schreiben und sie nicht richtig funktionieren, überprüfen Sie die Konsole Ihres Browsers; möglicherweise gibt es hilfreiche Fehlermeldungen, die Ihnen bei der Lösung des Problems helfen können.

## Beispiele

Hier haben wir eine E-Mail-Eingabe mit der ID `emailAddress`, die auf maximal 256 Zeichen begrenzt ist. Die Eingabebox selbst ist physisch 64 Zeichen breit und zeigt den Text `user@example.gov` als Platzhalter an, wenn das Feld leer ist. Außerdem ist die Box durch Verwendung des [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple) Attributs so konfiguriert, dass der Benutzer null oder mehr E-Mail-Adressen eingeben kann, die durch Kommas getrennt sind, wie unter [Erlauben mehrerer E-Mail-Adressen](#erlauben_mehrerer_e-mail-adressen) beschrieben. Als letzten Schliff enthält das [`list`](/de/docs/Web/HTML/Reference/Elements/input#list) Attribut die ID eines {{HTMLElement("datalist")}}, dessen {{HTMLElement("option")}}s einen Satz vorgeschlagener Werte angeben, aus denen der Benutzer wählen kann.

Ein zusätzlicher Raffinesse besteht darin, dass das {{HTMLElement("label")}} Element verwendet wird, um ein Label für die E-Mail-Eingabebox zu erstellen, wobei sein [`for`](/de/docs/Web/HTML/Reference/Elements/label#for) Attribut auf die `emailAddress` ID des {{HTMLElement("input")}} Elements verweist. Durch das Assoziieren der beiden Elemente auf diese Weise wird durch Klicken auf das Label das Eingabeelement fokussiert.

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
      <td><strong>Unterstützte allgemeine Attribute</strong></td>
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
        <a href="/de/docs/Web/HTML/Reference/Elements/input#size"><code>size</code></a> und
        <a href="/de/docs/Web/HTML/Reference/Elements/input#type"><code>type</code></a>
      </td>
    </tr>
    <tr>
      <td><strong>IDL Attribute</strong></td>
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

- [HTML-Formularleitfaden](/de/docs/Learn_web_development/Extensions/Forms)
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
