---
title: <input type="email">
slug: Web/HTML/Reference/Elements/input/email
l10n:
  sourceCommit: 3e097148b4c6cb9c6d8824275599f855ca63827b
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente vom Typ **`email`** werden verwendet, um dem Benutzer das Eingeben und Bearbeiten einer E-Mail-Adresse zu ermöglichen oder, wenn das [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple)-Attribut angegeben ist, einer Liste von E-Mail-Adressen.

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

Der Eingabewert wird automatisch validiert, um sicherzustellen, dass er entweder leer oder eine ordnungsgemäß formatierte E-Mail-Adresse (oder Liste von Adressen) ist, bevor das Formular abgeschickt werden kann. Die CSS-Pseudoklassen {{cssxref(":valid")}} und {{cssxref(":invalid")}} werden automatisch angewendet, um visuell zu kennzeichnen, ob der aktuelle Wert des Feldes eine gültige E-Mail-Adresse ist oder nicht.

## Wert

Das [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Attribut des {{HTMLElement("input")}}-Elements enthält einen String, der automatisch als konform zur E-Mail-Syntax validiert wird. Genauer gesagt gibt es drei mögliche Wertformate, die die Validierung bestehen:

1. Ein leerer String (""), der anzeigt, dass der Benutzer keinen Wert eingegeben hat oder dass der Wert entfernt wurde.
2. Eine einzelne, korrekt geformte E-Mail-Adresse. Dies bedeutet nicht unbedingt, dass die E-Mail-Adresse existiert, aber zumindest ist sie korrekt formatiert. Dies bedeutet `username@domain` oder `username@domain.tld`. Natürlich gibt es noch mehr dazu; siehe [Validierung](#validierung) für ein {{Glossary("regular_expression", "reguläres Ausdruck")}}, das mit dem E-Mail-Adressvalidierungsalgorithmus übereinstimmt.
3. Nur wenn das [`multiple`](/de/docs/Web/HTML/Reference/Elements/input#multiple)-Attribut angegeben ist, kann der Wert eine Liste von korrekt geformten, durch Kommas getrennten E-Mail-Adressen sein. Jegliche führenden und nachfolgenden Leerzeichen werden von jeder Adresse in der Liste entfernt.

Siehe [Validierung](#validierung) für Details, wie E-Mail-Adressen validiert werden, um sicherzustellen, dass sie ordnungsgemäß formatiert sind.

## Zusätzliche Attribute

Zusätzlich zu den [globalen Attributen](/de/docs/Web/HTML/Reference/Global_attributes) und den Attributen, die auf alle {{HTMLElement("input")}}-Elemente unabhängig von ihrem Typ wirken, unterstützen `email`-Eingaben die folgenden Attribute.

> [!NOTE]
> Das globale Attribut [`autocorrect`](/de/docs/Web/HTML/Reference/Global_attributes/autocorrect) kann zu E-Mail-Eingaben hinzugefügt werden, aber der gespeicherte Zustand ist immer `off`.

### list

Der Wert des `list`-Attributs ist die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements, das sich im selben Dokument befindet. Das {{HTMLElement("datalist")}} bietet eine Liste von vordefinierten Werten, die dem Benutzer für diese Eingabe vorgeschlagen werden. Alle Werte in der Liste, die nicht mit dem [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) kompatibel sind, werden nicht in den vorgeschlagenen Optionen berücksichtigt. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert angeben.

### maxlength

Die maximale Zeichenlänge (gemessen in {{Glossary("UTF-16", "UTF-16-Codeeinheiten")}}), die der Benutzer in das `email`-Eingabefeld eingeben kann. Dies muss ein ganzzahliger Wert von 0 oder höher sein. Wenn kein `maxlength` angegeben ist oder ein ungültiger Wert angegeben ist, hat das `email`-Eingabefeld keine maximale Länge. Dieser Wert muss auch größer oder gleich dem Wert von `minlength` sein.

Die Eingabe wird [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) nicht bestehen, wenn die Länge des Textwerts des Feldes länger als `maxlength` {{Glossary("UTF-16", "UTF-16-Codeeinheiten")}} ist. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### minlength

Die minimale Zeichenlänge (gemessen in {{Glossary("UTF-16", "UTF-16-Codeeinheiten")}}), die der Benutzer in das `email`-Eingabefeld eingeben kann. Dies muss ein nicht-negativer Ganzzahlwert sein, der kleiner oder gleich dem Wert ist, der durch `maxlength` angegeben wird. Wenn kein `minlength` angegeben ist oder ein ungültiger Wert angegeben ist, hat das `email`-Eingabefeld keine Mindestlänge.

Die Eingabe wird [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) nicht bestehen, wenn die Länge des in das Feld eingegebenen Textes kürzer als `minlength` {{Glossary("UTF-16", "UTF-16-Codeeinheiten")}} ist. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### multiple

Ein boolesches Attribut, das, falls vorhanden, anzeigt, dass der Benutzer eine Liste von mehreren E-Mail-Adressen eingeben kann, getrennt durch Kommas und, optional, Leerzeichen. Siehe [Zulassung mehrerer E-Mail-Adressen](#zulassung_mehrerer_e-mail-adressen) für ein Beispiel oder [HTML-Attribut: multiple](/de/docs/Web/HTML/Reference/Attributes/multiple) für mehr Details.

> [!NOTE]
> Normalerweise, wenn Sie das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attribut angeben, muss der Benutzer eine gültige E-Mail-Adresse eingeben, damit das Feld als gültig betrachtet wird. Wenn Sie jedoch das `multiple`-Attribut hinzufügen, ist eine Liste von null E-Mail-Adressen (ein leerer String oder einer, der vollständig Leerzeichen ist) ein gültiger Wert. Mit anderen Worten, der Benutzer muss keine einzige E-Mail-Adresse eingeben, wenn `multiple` angegeben ist, unabhängig vom Wert von `required`.

### pattern

Das `pattern`-Attribut, falls angegeben, ist ein regulärer Ausdruck, den der [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) der Eingabe erfüllen muss, um die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) zu bestehen. Es muss ein gültiger JavaScript-Regulärer Ausdruck sein, wie er vom {{jsxref("RegExp")}}-Typ verwendet wird, und wie in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert; das `'u'`-Flag wird beim Kompilieren des regulären Ausdrucks angegeben, damit das Muster als Folge von Unicode-Codepunkten behandelt wird, anstatt als {{Glossary("ASCII", "ASCII")}}. Keine Schrägstriche sollten um den Mustertext herum angegeben werden.

Wenn das angegebene Muster nicht angegeben oder ungültig ist, wird kein regulärer Ausdruck angewendet, und dieses Attribut wird vollständig ignoriert.

> [!NOTE]
> Verwenden Sie das [`title`](/de/docs/Web/HTML/Reference/Elements/input#title)-Attribut, um Text anzugeben, der von den meisten Browsern als Tooltip angezeigt wird, um zu erklären, welche Anforderungen bestehen, um das Muster zu erfüllen. Sie sollten auch zusätzlichen erklärenden Text in der Nähe einfügen.

Siehe den Abschnitt [Muster-Validierung](#muster-validierung) für Details und ein Beispiel.

### `placeholder`

Das `placeholder`-Attribut ist ein String, der dem Benutzer einen kurzen Hinweis darauf gibt, welche Art von Information im Feld erwartet wird. Es sollte ein Wort oder ein kurzer Satz sein, der den erwarteten Datentyp demonstriert, anstatt eine erklärende Nachricht. Der Text _darf keine_ Wagenrückläufe oder Zeilenumbrüche enthalten.

Wenn der Inhalt der Steuerung eine Richtung ({{Glossary("LTR", "LTR")}} oder {{Glossary("RTL", "RTL")}}) hat, der Platzhalter jedoch in entgegengesetzter Richtung angezeigt werden muss, können Sie die Unicode-Bidi-Algorithmusformatierungszeichen verwenden, um die Richtung innerhalb des Platzhalters zu überschreiben; siehe [Anleitung zur Verwendung von Unicode-Steuerzeichen für Bidi-Text](https://www.w3.org/International/questions/qa-bidi-unicode-controls) für weitere Informationen.

> [!NOTE]
> Vermeiden Sie die Verwendung des `placeholder`-Attributs, wenn möglich. Es ist nicht so semantisch nützlich wie andere Möglichkeiten, Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Weitere Informationen finden Sie unter [`<input>`-Beschriftungen](/de/docs/Web/HTML/Reference/Elements/input#labels).

### `readonly`

Ein boolesches Attribut, das, falls vorhanden, bedeutet, dass dieses Feld vom Benutzer nicht bearbeitet werden kann. Sein `value` kann jedoch immer noch durch direktes Setzen der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) `value`-Eigenschaft durch JavaScript-Code geändert werden.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keine Wirkung auf Eingabefelder, bei denen das `readonly`-Attribut ebenfalls angegeben ist.

### `size`

Das `size`-Attribut ist ein numerischer Wert, der angibt, wie viele Zeichen breit das Eingabefeld sein sollte. Der Wert muss eine Zahl größer als null sein und der Standardwert ist 20. Da sich Zeichenbreiten unterscheiden, kann dies möglicherweise nicht genau sein und sollte nicht darauf vertraut werden; das resultierende Eingabefeld kann schmaler oder breiter als die angegebene Anzahl von Zeichen sein, abhängig von den Zeichen und der ({{cssxref("font")}}) Einstellung.

Dies legt _kein_ Limit für die Anzahl der Zeichen fest, die der Benutzer in das Feld eingeben kann. Es gibt nur an, wie viele gleichzeitig sichtbar sein können. Um das obere Limit der Länge der Eingabedaten festzulegen, verwenden Sie das [`maxlength`](#maxlength)-Attribut.

## Verwendung von E-Mail-Eingaben

E-Mail-Adressen gehören zu den am häufigsten eingegebenen Textformulardaten im Web; sie werden bei der Anmeldung auf Websites, bei Informationsanfragen, zur Bestellbestätigung, für Webmail und so weiter verwendet. Daher kann der `email`-Eingabetyp Ihre Arbeit als Webentwickler erheblich erleichtern, da er Ihnen helfen kann, Ihre Arbeit beim Aufbau der Benutzeroberfläche und der Logik für E-Mail-Adressen zu vereinfachen. Wenn Sie eine E-Mail-Eingabe mit dem richtigen `type`-Wert, `email`, erstellen, erhalten Sie eine automatische Validierung, dass der eingegebene Text zumindest in der korrekten Form vorliegt, um potenziell eine legitime E-Mail-Adresse zu sein. Dies kann helfen, Fälle zu vermeiden, in denen der Benutzer seine Adresse falsch eingibt oder eine ungültige Adresse angibt.

Es ist jedoch wichtig zu beachten, dass dies nicht ausreicht, um sicherzustellen, dass der angegebene Text eine E-Mail-Adresse ist, die tatsächlich existiert, dem Benutzer der Site entspricht oder auf andere Weise akzeptabel ist. Es stellt sicher, dass der Wert des Feldes ordnungsgemäß formatiert ist, um eine E-Mail-Adresse zu sein.

> [!NOTE]
> Es ist auch entscheidend, daran zu denken, dass ein Benutzer im Hintergrund Ihre HTML-Datei ändern kann, sodass Ihre Website _diese Validierung nicht_ für Sicherheitszwecke verwenden darf. Sie _müssen_ die E-Mail-Adresse auf der Serverseite jeder Transaktion verifizieren, bei der der bereitgestellte Text Sicherheitsimplikationen jeglicher Art haben könnte.

### Ein einfacher E-Mail-Eingang

Derzeit implementieren alle Browser, die dieses Element implementieren, es als Standard-Text-Eingabefeld mit grundlegenden Validierungsfunktionen. Die Spezifikation erlaubt den Browsern jedoch Spielraum dafür. Zum Beispiel könnte das Element mit dem integrierten Adressbuch des Benutzergeräts integriert werden, um E-Mail-Adressen aus dieser Liste auszuwählen. In seiner einfachsten Form kann ein `email`-Eingabefeld wie folgt implementiert werden:

```html
<input id="emailAddress" type="email" />
```

{{ EmbedLiveSample('A_basic_email_input', 600, 40) }}

Beachten Sie, dass es als gültig angesehen wird, wenn es leer ist und wenn eine einzelne gültig formatierte E-Mail-Adresse eingegeben wird, aber sonst nicht als gültig betrachtet wird. Durch Hinzufügen des [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attributs sind nur gültig formatierte E-Mail-Adressen erlaubt; die Eingabe wird nicht mehr als gültig angesehen, wenn sie leer ist.

### Zulassung mehrerer E-Mail-Adressen

Durch Hinzufügen des [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple)-Boolean-Attributs kann die Eingabe so konfiguriert werden, dass sie mehrere E-Mail-Adressen akzeptiert.

```html
<input id="emailAddress" type="email" multiple />
```

{{ EmbedLiveSample('Allowing multiple email addresses', 600, 40) }}

Die Eingabe wird jetzt als gültig angesehen, wenn eine einzige E-Mail-Adresse eingegeben wird oder wenn eine beliebige Anzahl von E-Mail-Adressen eingegeben wird, die durch Kommas und, optional, eine Anzahl von Leerzeichen getrennt sind.

> [!NOTE]
> Bei Verwendung von `multiple` ist der Wert _erlaubt_, leer zu sein.

Einige Beispiele für gültige Strings, wenn `multiple` angegeben ist:

- `""`
- `"me@example"`
- `"me@example.org"`
- `"me@example.org,Sie@example.org"`
- `"me@example.org, Sie@example.org"`
- `"me@example.org,Sie@example.org, wir@example.org"`

Einige Beispiele für ungültige Strings:

- `","`
- `"me"`
- `"me@example.org Sie@example.org"`

### Platzhalter

Manchmal ist es hilfreich, einen kontextuellen Hinweis darauf zu geben, welche Form die Eingabedaten haben sollten. Dies kann besonders wichtig sein, wenn das Seitendesign keine beschreibenden Labels für jedes {{HTMLElement("input")}} bietet. Hier kommen **Platzhalter** ins Spiel. Ein Platzhalter ist ein Wert, der die Form des `value` demonstriert, indem ein Beispiel für einen gültigen Wert präsentiert wird, der innerhalb des Bearbeitungsfelds angezeigt wird, wenn der Wert des Elements "" ist. Sobald Daten in das Feld eingegeben wurden, verschwindet der Platzhalter; wenn das Feld geleert wird, erscheint der Platzhalter erneut.

Hier haben wir ein `email`-Eingabefeld mit dem Platzhalter `sophie@example.com`. Beachten Sie, wie der Platzhalter verschwindet und wieder erscheint, während Sie den Inhalt des Bearbeitungsfelds manipulieren.

```html
<input type="email" placeholder="sophie@example.com" />
```

{{ EmbedLiveSample('Placeholders', 600, 40) }}

### Steuerung der Eingabengröße

Sie können nicht nur die physische Länge des Eingabefeldes steuern, sondern auch die minimalen und maximalen Längen, die für den Eingabetext selbst erlaubt sind.

#### Physische Größe des Eingabeelements

Die physische Größe des Eingabefeldes kann mit dem [`size`](/de/docs/Web/HTML/Reference/Elements/input#size)-Attribut gesteuert werden. Damit können Sie die Anzahl der Zeichen angeben, die das Eingabefeld gleichzeitig anzeigen kann. In diesem Beispiel ist das `email`-Feld 15 Zeichen breit:

```html
<input type="email" size="15" />
```

{{ EmbedLiveSample('Physical_input_element_size', 600, 40) }}

#### Wertelänge des Elements

Die `size` ist getrennt von der Längsbeschränkung für die eingegebene E-Mail-Adresse selbst, sodass Sie Felder in einen kleinen Raum passen lassen können, während Sie dennoch längere E-Mail-Adressstrings eingeben dürfen. Sie können eine Mindestlänge in Zeichen für die eingegebene E-Mail-Adresse mit dem [`minlength`](/de/docs/Web/HTML/Reference/Elements/input#minlength)-Attribut angeben; ebenso verwenden Sie [`maxlength`](/de/docs/Web/HTML/Reference/Elements/input#maxlength), um die maximale Länge der eingegebenen E-Mail-Adresse festzulegen.

Das folgende Beispiel erstellt ein 32 Zeichen breites E-Mail-Adress-Eingabefeld, das verlangt, dass der Inhalt nicht kürzer als 3 Zeichen und nicht länger als 64 Zeichen ist.

```html
<input type="email" size="32" minlength="3" maxlength="64" />
```

{{EmbedLiveSample("Element_value_length", 600, 40) }}

### Bereitstellung von Standardoptionen

#### Bereitstellung eines einzelnen Standardwerts mithilfe des Wertattributs

Wie immer können Sie einen Standardwert für eine `email`-Eingabebox bereitstellen, indem Sie ihr [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Attribut setzen:

```html
<input type="email" value="default@example.com" />
```

{{EmbedLiveSample("Providing_a_single_default_using_the_value_attribute", 600, 40)}}

#### Vorschlagen von Werten

Einen Schritt weiter können Sie eine Liste von Standardoptionen bereitstellen, aus denen der Benutzer auswählen kann, indem Sie das [`list`](/de/docs/Web/HTML/Reference/Elements/input#list)-Attribut angeben. Dies schränkt den Benutzer nicht auf diese Optionen ein, ermöglicht ihm jedoch, gängige E-Mail-Adressen schneller auszuwählen. Dies bietet auch Hinweise zu [`autocomplete`](/de/docs/Web/HTML/Reference/Elements/input#autocomplete). Das `list`-Attribut gibt die ID eines {{HTMLElement("datalist")}} an, das wiederum ein {{HTMLElement("option")}}-Element für jeden vorgeschlagenen Wert enthält; jedes `option`-`value` ist der entsprechende Vorschlagswert für die E-Mail-Eingabebox.

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

Mit dem {{HTMLElement("datalist")}}-Element und seinen {{HTMLElement("option")}}s wird der Browser die angegebenen Werte als mögliche Werte für die E-Mail-Adresse vorschlagen; dies wird typischerweise als Popup oder Dropdown-Menü mit den Vorschlägen präsentiert. Während die spezifische Benutzererfahrung von Browser zu Browser variieren kann, wird typischerweise ein Klick in das Bearbeitungsfeld ein Dropdown mit den vorgeschlagenen E-Mail-Adressen präsentieren. Dann wird, während der Benutzer tippt, die Liste gefiltert, um nur passende Werte anzuzeigen. Jedes getippte Zeichen verengt die Liste, bis der Benutzer eine Auswahl trifft oder einen benutzerdefinierten Wert eingibt.

## Validierung

Es gibt zwei Ebenen der Inhaltsvalidierung für `email`-Eingaben. Erstens gibt es die standardmäßige Validierungsstufe, die allen {{HTMLElement("input")}}s angeboten wird und die automatisch sicherstellt, dass der Inhalt den Anforderungen entspricht, um eine gültige E-Mail-Adresse zu sein. Es gibt jedoch auch die Möglichkeit, zusätzliche Filterung hinzuzufügen, um sicherzustellen, dass Ihre eigenen speziellen Anforderungen erfüllt werden, falls Sie welche haben.

> [!WARNING]
> Die HTML-Formularvalidierung ist _kein_ Ersatz für Skripte, die sicherstellen, dass die eingegebenen Daten im richtigen Format sind. Es ist viel zu einfach für jemanden, Anpassungen am HTML vorzunehmen, die ihm ermöglichen, die Validierung zu umgehen oder ganz zu entfernen. Es ist auch möglich, dass jemand Ihr HTML völlig umgeht und die Daten direkt an Ihren Server übermittelt. Wenn Ihr serverseitiger Code die empfangenen Daten nicht validiert, könnte eine Katastrophe eintreten, wenn falsch formatierte Daten (oder Daten, die zu groß sind, vom falschen Typ sind usw.) in Ihre Datenbank eingegeben werden.

### Grundlegende Validierung

Browser bieten automatisch eine Validierung, um sicherzustellen, dass nur Text, der dem Standardformat für Internet-E-Mail-Adressen entspricht, in das Eingabefeld eingegeben wird. Browser verwenden einen Algorithmus, der dem folgenden regulären Ausdruck entspricht:

```js
/^[\w.!#$%&'*+/=?^`{|}~-]+@[a-z\d](?:[a-z\d-]{0,61}[a-z\d])?(?:\.[a-z\d](?:[a-z\d-]{0,61}[a-z\d])?)*$/i;
```

Um mehr darüber zu erfahren, wie die Formularvalidierung funktioniert und wie Sie die {{cssxref(":valid")}} und {{cssxref(":invalid")}} CSS-Eigenschaften verwenden können, um die Eingabe basierend darauf zu gestalten, ob der aktuelle Wert gültig ist, siehe [Formular-Datenvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation).

> [!NOTE]
> Es gibt bekannte Spezifikationsprobleme im Zusammenhang mit internationalen Domainnamen und der Validierung von E-Mail-Adressen in HTML. Siehe [W3C-Fehler 15489](https://www.w3.org/Bugs/Public/show_bug.cgi?id=15489) für Details.

### Muster-Validierung

Wenn Sie die eingegebene E-Mail-Adresse weiter einschränken müssen als nur "irgendein String, der wie eine E-Mail-Adresse aussieht", können Sie das [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern)-Attribut verwenden, um einen {{Glossary("regular_expression", "regulären Ausdruck")}} anzugeben, dem der Wert entsprechen muss, damit er gültig ist. Wenn das [`multiple`](/de/docs/Web/HTML/Reference/Elements/input#multiple)-Attribut angegeben ist, muss jeder einzelne Eintrag in der kommaseparierten Liste von Werten dem {{Glossary("regular_expression", "regulären Ausdruck")}} entsprechen.

Angenommen, Sie entwickeln eine Seite für Mitarbeiter der "Best Startup Ever, Inc."-Firma, mit der sie ihre IT-Abteilung um Hilfe bitten können. In unserem vereinfachten Formular muss der Benutzer seine E-Mail-Adresse und eine Nachricht eingeben, in der das Problem beschrieben wird, bei dem er Hilfe benötigt. Wir möchten sicherstellen, dass der Benutzer nicht nur eine gültige E-Mail-Adresse angibt, sondern aus Sicherheitsgründen auch die Adresse eine interne Firmenadresse ist.

Da Eingaben vom Typ `email` sowohl gegen die Standard-E-Mail-Validierung als auch gegen das angegebene [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern) validieren, können Sie dies einfach implementieren. Sehen wir uns an, wie:

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

Unser {{HTMLElement("form")}} enthält ein {{HTMLElement("input")}} vom Typ `email` für die E-Mail-Adresse des Benutzers, ein {{HTMLElement("textarea")}} zum Eingeben ihrer Nachricht an die IT und ein `<input>` vom Typ [`"submit"`](/de/docs/Web/HTML/Reference/Elements/input/submit), das einen Button erstellt, um das Formular abzusenden. Jedes Texteingabefeld hat ein zugeordnetes {{HTMLElement("label")}}, um dem Benutzer mitzuteilen, was von ihm erwartet wird.

Werfen wir einen genaueren Blick auf die Eingabebox für die E-Mail-Adresse. Ihre [`size`](/de/docs/Web/HTML/Reference/Elements/input#size) und [`maxlength`](/de/docs/Web/HTML/Reference/Elements/input#maxlength)-Attribute sind beide auf 64 gesetzt, um Platz für 64 Zeichen E-Mail-Adresse zu bieten und die Anzahl der tatsächlich eingegebenen Zeichen auf maximal 64 zu begrenzen. Das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attribut ist angegeben, was bedeutet, dass eine gültige E-Mail-Adresse obligatorisch angegeben werden muss.

Ein passender [`placeholder`](/de/docs/Web/HTML/Reference/Elements/input#placeholder) wird bereitgestellt—`username@beststartupever.com`—um zu demonstrieren, was einen gültigen Eintrag ausmacht. Dieser String demonstriert sowohl, dass eine E-Mail-Adresse eingegeben werden sollte, als auch, dass es sich um einen Firmenaccount von beststartupever.com handeln sollte. Dies zusätzlich zum Fakt, dass bei Verwendung des Typs `email` der Text validiert wird, um sicherzustellen, dass er im E-Mail-Format vorliegt. Ist der Text im Eingabefeld keine E-Mail-Adresse, wird Ihnen eine Fehlermeldung angezeigt, die etwa so aussieht:

![Ungültige E-Mail-Adresse im Fehlerzustand mit einem Popup aus dem Eingabefeld mit der Aufschrift "Bitte geben Sie eine E-Mail-Adresse ein".](enter-valid-email-address.png)

Wenn wir es dabei belassen würden, würden wir zumindest auf legitime E-Mail-Adressen validieren. Aber wir möchten einen Schritt weiter gehen: Wir möchten sicherstellen, dass die E-Mail-Adresse tatsächlich die Form `[username]@beststartupever.com` hat. Hier verwenden wir [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern). Wir setzen `pattern` auf `.+@beststartupever.com`. Dieser reguläre Ausdruck fordert einen String, der aus mindestens einem Zeichen irgendeiner Art besteht, dann einem "@" gefolgt vom Domainnamen "beststartupever.com".

Beachten Sie, dass dies bei weitem kein adäquater Filter für gültige E-Mail-Adressen ist; es würde Dinge wie " @beststartupever.com" (beachten Sie das führende Leerzeichen) oder "@@beststartupever.com" erlauben, von denen keines gültig ist. Der Browser führt jedoch sowohl den Standard-E-Mail-Filter als auch unser benutzerdefiniertes Muster gegen den angegebenen Text aus. Daher erhalten wir am Ende eine Validierung, die sagt: "Stellen Sie sicher, dass dies einer gültigen E-Mail-Adresse ähnelt, und wenn das der Fall ist, vergewissern Sie sich auch, dass es eine beststartupever.com-Adresse ist."

Es wird empfohlen, das [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title)-Attribut zusammen mit `pattern` zu verwenden. Wenn Sie das tun, _muss_ der `title` das Muster beschreiben. Das heißt, es sollte das Format der Daten erklären, anstatt andere Informationen. Das liegt daran, dass `title` möglicherweise als Teil einer Validierungsfehlermeldung angezeigt oder gesprochen werden kann. Zum Beispiel könnte der Browser die Meldung "Der eingegebene Text stimmt nicht mit dem erforderlichen Muster überein." zusammen mit Ihrem angegebenen `title` anzeigen. Wenn Ihr `title` so etwas wie "E-Mail-Adresse" ist, würde die resultierende Meldung "Der eingegebene Text stimmt nicht mit dem erforderlichen Muster überein. E-Mail-Adresse" lauten, was nicht sehr hilfreich ist.

Stattdessen geben wir daher den String "Bitte geben Sie nur eine Firmen-E-Mail-Adresse von Best Startup Ever an" an. Dadurch könnte die vollständige Fehlermeldung etwa wie folgt lauten: "Der eingegebene Text stimmt nicht mit dem erforderlichen Muster überein. Bitte geben Sie nur eine Firmen-E-Mail-Adresse von Best Startup Ever an."

![Eine gültige E-Mail-Adresse, aber das Eingabefeld ist im Fehlerzustand mit einem Popup aus dem Eingabefeld, das "Der eingegebene Text stimmt nicht mit dem erforderlichen Muster überein. Bitte geben Sie nur eine Firmen-E-Mail-Adresse von Best Startup Ever an." anzeigt.](email-pattern-match-bad.png)

> [!NOTE]
> Wenn Sie beim Schreiben Ihrer Validierungsregulärausdrücke Probleme haben und sie nicht richtig funktionieren, überprüfen Sie die Konsole Ihres Browsers; dort könnten hilfreiche Fehlermeldungen sein, um Ihnen bei der Lösung des Problems zu helfen.

## Beispiele

Hier haben wir ein E-Mail-Eingabefeld mit der ID `emailAddress`, das bis zu eine maximale Länge von 256 Zeichen erlaubt ist. Das Eingabefeld selbst ist physisch 64 Zeichen breit und zeigt den Text `user@example.gov` als Platzhalter an, wenn das Feld leer ist. Darüber hinaus kann durch Verwendung des [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple)-Attributs der Benutzer null oder mehr E-Mail-Adressen eingeben, die durch Kommas getrennt sind, wie im Abschnitt [Zulassung mehrerer E-Mail-Adressen](#zulassung_mehrerer_e-mail-adressen) beschrieben. Als letzten Schliff enthält das [`list`](/de/docs/Web/HTML/Reference/Elements/input#list)-Attribut die ID einer {{HTMLElement("datalist")}}, deren {{HTMLElement("option")}}s eine Reihe von vorgeschlagenen Werten spezifizieren, aus denen der Benutzer wählen kann.

Als zusätzliche Note wird das {{HTMLElement("label")}}-Element verwendet, um eine Bezeichnung für die E-Mail-Eingabebox zu erstellen, wobei sein [`for`](/de/docs/Web/HTML/Reference/Elements/label#for)-Attribut auf die `emailAddress`-ID des {{HTMLElement("input")}}-Elements verweist. Durch eine solche Assoziation der beiden Elemente wird durch Klicken auf das Label das Fokussieren des Eingabeelements initiiert.

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
