---
title: HTML-Attributwert `<input type="email">`
short-title: <input type="email">
slug: Web/HTML/Reference/Elements/input/email
l10n:
  sourceCommit: 100cf25d92d3953f3c70ecaa2af637d5e42179d8
---

{{HTMLElement("input")}}-Elemente vom Typ **`email`** werden verwendet, damit Benutzer eine E-Mail-Adresse eingeben und bearbeiten können oder, falls das Attribut [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple) angegeben ist, eine Liste von E-Mail-Adressen.

Der Eingabewert wird automatisch validiert, um sicherzustellen, dass er entweder leer oder eine korrekt formatierte E-Mail-Adresse (bzw. Liste von Adressen) ist, bevor das Formular übermittelt werden kann. Die CSS-Pseudoklassen {{cssxref(":valid")}} und {{cssxref(":invalid")}} werden automatisch entsprechend angewendet, um visuell anzuzeigen, ob der aktuelle Wert des Felds eine gültige E-Mail-Adresse ist oder nicht.

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

## Wert

Das Attribut [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) des {{HTMLElement("input")}}-Elements enthält eine Zeichenkette, die automatisch darauf validiert wird, ob sie der E-Mail-Syntax entspricht. Genauer gesagt gibt es drei mögliche Wertformate, die die Validierung bestehen:

1. Eine leere Zeichenkette (`""`), die angibt, dass der Benutzer keinen Wert eingegeben hat oder dass der Wert entfernt wurde.
2. Eine einzelne korrekt gebildete E-Mail-Adresse. Das bedeutet nicht unbedingt, dass die E-Mail-Adresse existiert, aber sie ist zumindest korrekt formatiert. Das bedeutet `username@domain` oder `username@domain.tld`. Natürlich gehört mehr dazu; siehe [Validierung](#validierung) für einen {{Glossary("regular_expression", "regulären Ausdruck")}}, der dem Algorithmus zur Validierung von E-Mail-Adressen entspricht.
3. Wenn und nur wenn das Attribut [`multiple`](/de/docs/Web/HTML/Reference/Elements/input#multiple) angegeben ist, kann der Wert eine Liste korrekt gebildeter, durch Kommas getrennter E-Mail-Adressen sein. Vorangestellte und nachgestellte Leerzeichen werden aus jeder Adresse in der Liste entfernt.

Details dazu, wie E-Mail-Adressen validiert werden, um ihre korrekte Formatierung sicherzustellen, finden Sie unter [Validierung](#validierung).

## Zusätzliche Attribute

Zusätzlich zu den [globalen Attributen](/de/docs/Web/HTML/Reference/Global_attributes) und den Attributen, die unabhängig von ihrem Typ auf alle {{HTMLElement("input")}}-Elemente angewendet werden, unterstützen `email`-Eingaben die folgenden Attribute.

> [!NOTE]
> Das globale Attribut [`autocorrect`](/de/docs/Web/HTML/Reference/Global_attributes/autocorrect) kann zu E-Mail-Eingaben hinzugefügt werden, aber der gespeicherte Zustand ist immer `off`.

### list

Der Wert des Attributs `list` ist die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements, das sich im selben Dokument befindet. Das {{HTMLElement("datalist")}} stellt eine Liste vordefinierter Werte bereit, die dem Benutzer für diese Eingabe vorgeschlagen werden. Werte in der Liste, die nicht mit [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) kompatibel sind, werden nicht in die vorgeschlagenen Optionen aufgenommen. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert angeben.

### maxlength

Die maximale Zeichenkettenlänge (gemessen in {{Glossary("UTF-16", "UTF-16-Codeeinheiten")}}), die der Benutzer in die `email`-Eingabe eingeben kann. Dies muss ein ganzzahliger Wert von 0 oder größer sein. Wenn kein `maxlength` angegeben ist oder ein ungültiger Wert angegeben wird, hat die `email`-Eingabe keine maximale Länge. Dieser Wert muss außerdem größer oder gleich dem Wert von `minlength` sein.

Die Eingabe besteht die [Constraint-Validierung](/de/docs/Web/HTML/Guides/Constraint_validation) nicht, wenn die Länge des Textwerts des Felds mehr als `maxlength` {{Glossary("UTF-16", "UTF-16-Codeeinheiten")}} beträgt. Die Constraint-Validierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### minlength

Die minimale Zeichenkettenlänge (gemessen in {{Glossary("UTF-16", "UTF-16-Codeeinheiten")}}), die der Benutzer in die `email`-Eingabe eingeben kann. Dies muss ein nicht negativer ganzzahliger Wert sein, der kleiner oder gleich dem durch `maxlength` angegebenen Wert ist. Wenn kein `minlength` angegeben ist oder ein ungültiger Wert angegeben wird, hat die `email`-Eingabe keine minimale Länge.

Die Eingabe besteht die [Constraint-Validierung](/de/docs/Web/HTML/Guides/Constraint_validation) nicht, wenn die Länge des in das Feld eingegebenen Texts weniger als `minlength` {{Glossary("UTF-16", "UTF-16-Codeeinheiten")}} beträgt. Die Constraint-Validierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### multiple

Ein boolesches Attribut, das bei Vorhandensein angibt, dass der Benutzer eine Liste mehrerer E-Mail-Adressen eingeben kann, die durch Kommas und optional Leerzeichen getrennt sind. Ein Beispiel finden Sie unter [Mehrere E-Mail-Adressen erlauben](#mehrere_e-mail-adressen_erlauben), weitere Details unter [HTML-Attribut: multiple](/de/docs/Web/HTML/Reference/Attributes/multiple).

> [!NOTE]
> Wenn Sie das Attribut [`required`](/de/docs/Web/HTML/Reference/Elements/input#required) angeben, muss der Benutzer normalerweise eine gültige E-Mail-Adresse eingeben, damit das Feld als gültig betrachtet wird. Wenn Sie jedoch das Attribut `multiple` hinzufügen, ist eine Liste mit null E-Mail-Adressen (eine leere Zeichenkette oder eine Zeichenkette, die ausschließlich aus Leerzeichen besteht) ein gültiger Wert. Mit anderen Worten: Der Benutzer muss keine einzige E-Mail-Adresse eingeben, wenn `multiple` angegeben ist, unabhängig vom Wert von `required`.

### pattern

Das Attribut `pattern` ist, wenn es angegeben ist, ein regulärer Ausdruck, mit dem der [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) der Eingabe übereinstimmen muss, damit der Wert die [Constraint-Validierung](/de/docs/Web/HTML/Guides/Constraint_validation) besteht. Es muss ein gültiger JavaScript-regulärer Ausdruck sein, wie er vom Typ {{jsxref("RegExp")}} verwendet und in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert wird; beim Kompilieren des regulären Ausdrucks wird das Flag `'u'` angegeben, sodass das Muster als Folge von Unicode-Codepunkten statt als {{Glossary("ASCII", "ASCII")}} behandelt wird. Um den Mustertext sollten keine Schrägstriche angegeben werden.

Wenn das angegebene Muster nicht vorhanden oder ungültig ist, wird kein regulärer Ausdruck angewendet und dieses Attribut vollständig ignoriert.

> [!NOTE]
> Verwenden Sie das Attribut [`title`](/de/docs/Web/HTML/Reference/Elements/input#title), um Text anzugeben, den die meisten Browser als Tooltip anzeigen, um zu erläutern, welche Anforderungen für eine Übereinstimmung mit dem Muster gelten. Sie sollten außerdem in der Nähe weiteren erläuternden Text bereitstellen.

Details und ein Beispiel finden Sie im Abschnitt [Muster-Validierung](#muster-validierung).

### `placeholder`

Das Attribut `placeholder` ist eine Zeichenkette, die dem Benutzer einen kurzen Hinweis darauf gibt, welche Art von Information im Feld erwartet wird. Es sollte ein Wort oder eine kurze Formulierung sein, die den erwarteten Datentyp demonstriert, und keine erläuternde Nachricht. Der Text _darf keine_ Wagenrückläufe oder Zeilenvorschübe enthalten.

Wenn der Inhalt des Steuerelements eine Schreibrichtung ({{Glossary("LTR", "LTR")}} oder {{Glossary("RTL", "RTL")}}) hat, der Platzhalter aber in der entgegengesetzten Schreibrichtung dargestellt werden muss, können Sie Zeichen zur Formatierung des Unicode-Algorithmus für bidirektionalen Text verwenden, um die Schreibrichtung innerhalb des Platzhalters zu überschreiben. Weitere Informationen finden Sie unter [How to use Unicode controls for bidi text](https://www.w3.org/International/questions/qa-bidi-unicode-controls).

> [!NOTE]
> Vermeiden Sie nach Möglichkeit die Verwendung des Attributs `placeholder`. Es ist semantisch nicht so nützlich wie andere Möglichkeiten, Ihr Formular zu erläutern, und kann unerwartete technische Probleme mit Ihren Inhalten verursachen. Weitere Informationen finden Sie unter [`<input>`-Beschriftungen](/de/docs/Web/HTML/Reference/Elements/input#labels).

### `readonly`

Ein boolesches Attribut, das bei Vorhandensein bedeutet, dass dieses Feld nicht vom Benutzer bearbeitet werden kann. Sein `value` kann jedoch weiterhin durch JavaScript-Code geändert werden, der die Eigenschaft `value` von [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) direkt setzt.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keine Wirkung auf Eingaben, bei denen auch das Attribut `readonly` angegeben ist.

### `size`

Das Attribut `size` ist ein numerischer Wert, der angibt, wie viele Zeichen breit das Eingabefeld sein soll. Der Wert muss eine Zahl größer als null sein; der Standardwert ist 20. Da Zeichenbreiten variieren, ist dies möglicherweise nicht exakt und sollte nicht als exakt vorausgesetzt werden; die resultierende Eingabe kann abhängig von den Zeichen und der verwendeten Schriftart ({{cssxref("font")}}-Einstellungen) schmaler oder breiter als die angegebene Zeichenanzahl sein.

Dies legt _keine_ Begrenzung dafür fest, wie viele Zeichen der Benutzer in das Feld eingeben kann. Es gibt nur ungefähr an, wie viele gleichzeitig sichtbar sein können. Um eine Obergrenze für die Länge der Eingabedaten festzulegen, verwenden Sie das Attribut [`maxlength`](#maxlength).

## E-Mail-Eingaben verwenden

E-Mail-Adressen gehören zu den am häufigsten im Web eingegebenen Textdaten; sie werden bei der Anmeldung bei Websites, beim Anfordern von Informationen, für Bestellbestätigungen, für Webmail usw. verwendet. Daher kann der Eingabetyp `email` Ihre Arbeit als Webentwickler erheblich erleichtern, da er beim Erstellen der Benutzeroberfläche und Logik für E-Mail-Adressen helfen kann. Wenn Sie eine E-Mail-Eingabe mit dem korrekten `type`-Wert `email` erstellen, erhalten Sie eine automatische Validierung, dass der eingegebene Text zumindest die korrekte Form hat, um möglicherweise eine legitime E-Mail-Adresse zu sein. Dies kann Fälle vermeiden helfen, in denen der Benutzer seine Adresse falsch eingibt oder eine ungültige Adresse angibt.

Es ist jedoch wichtig zu beachten, dass dies nicht ausreicht, um sicherzustellen, dass der angegebene Text eine tatsächlich existierende E-Mail-Adresse ist, dem Benutzer der Website entspricht oder auf andere Weise akzeptabel ist. Es stellt sicher, dass der Wert des Felds korrekt formatiert ist, um eine E-Mail-Adresse zu sein.

> [!NOTE]
> Denken Sie außerdem unbedingt daran, dass ein Benutzer Ihr HTML im Hintergrund manipulieren kann; Ihre Website _darf diese Validierung daher nicht_ für Sicherheitszwecke verwenden. Sie _müssen_ die E-Mail-Adresse serverseitig bei jeder Transaktion überprüfen, bei der der bereitgestellte Text sicherheitsrelevante Auswirkungen irgendeiner Art haben kann.

### Eine grundlegende E-Mail-Eingabe

Derzeit implementieren alle Browser, die dieses Element implementieren, es als ein Standard-Texteingabefeld mit grundlegenden Validierungsfunktionen. Die Spezifikation lässt Browsern dabei jedoch Spielraum. Beispielsweise könnte das Element in das integrierte Adressbuch des Geräts des Benutzers integriert sein, um die Auswahl von E-Mail-Adressen aus dieser Liste zu ermöglichen. In seiner grundlegendsten Form kann eine `email`-Eingabe folgendermaßen implementiert werden:

```html
<input id="emailAddress" type="email" />
```

{{ EmbedLiveSample('A_basic_email_input', 600, 40) }}

Beachten Sie, dass sie als gültig betrachtet wird, wenn sie leer ist und wenn eine einzelne korrekt formatierte E-Mail-Adresse eingegeben wird, ansonsten jedoch nicht. Durch Hinzufügen des Attributs [`required`](/de/docs/Web/HTML/Reference/Elements/input#required) sind nur korrekt gebildete E-Mail-Adressen zulässig; die Eingabe wird nicht mehr als gültig betrachtet, wenn sie leer ist.

### Mehrere E-Mail-Adressen erlauben

Durch Hinzufügen des booleschen Attributs [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple) kann die Eingabe so konfiguriert werden, dass sie mehrere E-Mail-Adressen akzeptiert.

```html
<input id="emailAddress" type="email" multiple />
```

{{ EmbedLiveSample('Allowing multiple email addresses', 600, 40) }}

Die Eingabe wird nun als gültig betrachtet, wenn eine einzelne E-Mail-Adresse eingegeben wird oder wenn eine beliebige Anzahl von E-Mail-Adressen vorhanden ist, die durch Kommas und optional eine beliebige Anzahl von Leerzeichen getrennt sind.

> [!NOTE]
> Wenn `multiple` verwendet wird, _darf_ der Wert leer sein.

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

Manchmal ist es hilfreich, einen kontextbezogenen Hinweis darauf anzubieten, welche Form die Eingabedaten haben sollten. Dies kann besonders wichtig sein, wenn das Seitendesign keine aussagekräftigen Beschriftungen für jedes {{HTMLElement("input")}} bereitstellt. Hier kommen **Platzhalter** ins Spiel. Ein Platzhalter ist ein Wert, der die erwartete Form von `value` anhand eines Beispiels für einen gültigen Wert demonstriert. Er wird innerhalb des Bearbeitungsfelds angezeigt, wenn das `value` des Elements `""` ist. Sobald Daten in das Feld eingegeben werden, verschwindet der Platzhalter; wird das Feld geleert, erscheint er wieder.

Hier haben wir eine `email`-Eingabe mit dem Platzhalter `sophie@example.com`. Beachten Sie, wie der Platzhalter verschwindet und wieder erscheint, wenn Sie den Inhalt des Bearbeitungsfelds ändern.

```html
<input type="email" placeholder="sophie@example.com" />
```

{{ EmbedLiveSample('Placeholders', 600, 40) }}

### Die Eingabegröße steuern

Sie können nicht nur die physische Länge des Eingabefelds steuern, sondern auch die zulässigen Mindest- und Maximallängen für den Eingabetext selbst.

#### Physische Größe des Eingabeelements

Die physische Größe des Eingabefelds kann mit dem Attribut [`size`](/de/docs/Web/HTML/Reference/Elements/input#size) gesteuert werden. Damit können Sie die Anzahl der Zeichen angeben, die das Eingabefeld gleichzeitig anzeigen kann. In diesem Beispiel ist das `email`-Bearbeitungsfeld 15 Zeichen breit:

```html
<input type="email" size="15" />
```

{{ EmbedLiveSample('Physical_input_element_size', 600, 40) }}

#### Länge des Elementwerts

`size` ist von der Längenbegrenzung für die eingegebene E-Mail-Adresse selbst getrennt, sodass Felder in einen kleinen Bereich passen können, während weiterhin längere E-Mail-Adresszeichenketten eingegeben werden dürfen. Sie können mit dem Attribut [`minlength`](/de/docs/Web/HTML/Reference/Elements/input#minlength) eine Mindestlänge in Zeichen für die eingegebene E-Mail-Adresse angeben; verwenden Sie entsprechend [`maxlength`](/de/docs/Web/HTML/Reference/Elements/input#maxlength), um die maximale Länge der eingegebenen E-Mail-Adresse festzulegen.

Das folgende Beispiel erstellt ein 32 Zeichen breites Eingabefeld für E-Mail-Adressen und verlangt, dass der Inhalt nicht kürzer als 3 und nicht länger als 64 Zeichen ist.

```html
<input type="email" size="32" minlength="3" maxlength="64" />
```

{{EmbedLiveSample("Element_value_length", 600, 40) }}

### Standardoptionen bereitstellen

#### Einen einzelnen Standardwert mit dem value-Attribut bereitstellen

Wie immer können Sie einen Standardwert für ein `email`-Eingabefeld bereitstellen, indem Sie sein Attribut [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) setzen:

```html
<input type="email" value="default@example.com" />
```

{{EmbedLiveSample("Providing_a_single_default_using_the_value_attribute", 600, 40)}}

#### Vorgeschlagene Werte anbieten

Sie können noch einen Schritt weitergehen und eine Liste von Standardoptionen bereitstellen, aus denen der Benutzer auswählen kann, indem Sie das Attribut [`list`](/de/docs/Web/HTML/Reference/Elements/input#list) angeben. Dies beschränkt den Benutzer nicht auf diese Optionen, ermöglicht ihm jedoch, häufig verwendete E-Mail-Adressen schneller auszuwählen. Außerdem bietet dies Hinweise für [`autocomplete`](/de/docs/Web/HTML/Reference/Elements/input#autocomplete). Das Attribut `list` gibt die ID eines {{HTMLElement("datalist")}} an, das wiederum ein {{HTMLElement("option")}}-Element pro vorgeschlagenem Wert enthält; der `value` jeder `option` ist der entsprechende vorgeschlagene Wert für das Eingabefeld für E-Mail-Adressen.

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

Wenn das Element {{HTMLElement("datalist")}} und seine {{HTMLElement("option")}}s vorhanden sind, bietet der Browser die angegebenen Werte als mögliche Werte für die E-Mail-Adresse an; dies wird normalerweise als Popup- oder Dropdown-Menü mit den Vorschlägen dargestellt. Während die konkrete Benutzererfahrung von Browser zu Browser variieren kann, zeigt ein Klick in das Bearbeitungsfeld typischerweise eine Dropdown-Liste der vorgeschlagenen E-Mail-Adressen an. Während der Benutzer tippt, wird die Liste gefiltert, um nur übereinstimmende Werte anzuzeigen. Jedes eingegebene Zeichen schränkt die Liste weiter ein, bis der Benutzer eine Auswahl trifft oder einen benutzerdefinierten Wert eingibt.

## Validierung

Für `email`-Eingaben stehen zwei Ebenen der Inhaltsvalidierung zur Verfügung. Erstens gibt es die Standard-Validierungsebene, die für alle {{HTMLElement("input")}}s bereitgestellt wird und automatisch sicherstellt, dass der Inhalt die Anforderungen an eine gültige E-Mail-Adresse erfüllt. Darüber hinaus besteht die Möglichkeit, zusätzliche Filter hinzuzufügen, um gegebenenfalls eigene spezialisierte Anforderungen zu erfüllen.

> [!WARNING]
> Die HTML-Formularvalidierung ist _kein_ Ersatz für Skripte, die sicherstellen, dass die eingegebenen Daten das richtige Format haben. Es ist viel zu einfach, Änderungen am HTML vorzunehmen, die eine Umgehung oder vollständige Entfernung der Validierung ermöglichen. Es ist auch möglich, Ihr HTML vollständig zu umgehen und die Daten direkt an Ihren Server zu senden. Wenn Ihr serverseitiger Code die empfangenen Daten nicht validiert, kann es zu schwerwiegenden Problemen kommen, wenn falsch formatierte Daten (oder Daten, die zu groß sind, den falschen Typ haben usw.) in Ihre Datenbank eingegeben werden.

### Grundlegende Validierung

Browser stellen automatisch eine Validierung bereit, um sicherzustellen, dass nur Text in das Eingabefeld eingegeben wird, der dem Standardformat für Internet-E-Mail-Adressen entspricht. Browser verwenden einen Algorithmus, der dem folgenden regulären Ausdruck entspricht:

```js
/^[\w.!#$%&'*+/=?^`{|}~-]+@[a-z\d](?:[a-z\d-]{0,61}[a-z\d])?(?:\.[a-z\d](?:[a-z\d-]{0,61}[a-z\d])?)*$/i;
```

Weitere Informationen zur Funktionsweise der Formularvalidierung und zur Verwendung der CSS-Eigenschaften {{cssxref(":valid")}} und {{cssxref(":invalid")}}, um die Eingabe danach zu gestalten, ob der aktuelle Wert gültig ist, finden Sie unter [Validierung von Formulardaten](/de/docs/Learn_web_development/Extensions/Forms/Form_validation).

> [!NOTE]
> Es gibt bekannte Spezifikationsprobleme im Zusammenhang mit internationalen Domainnamen und der Validierung von E-Mail-Adressen in HTML. Details finden Sie in [W3C bug 15489](https://www.w3.org/Bugs/Public/show_bug.cgi?id=15489) und [whatwg/html#4562](https://github.com/whatwg/html/issues/4562).

### Muster-Validierung

Wenn die eingegebene E-Mail-Adresse stärker eingeschränkt werden muss als nur auf „eine beliebige Zeichenkette, die wie eine E-Mail-Adresse aussieht“, können Sie mit dem Attribut [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern) einen {{Glossary("regular_expression", "regulären Ausdruck")}} angeben, mit dem der Wert übereinstimmen muss, damit er gültig ist. Wenn das Attribut [`multiple`](/de/docs/Web/HTML/Reference/Elements/input#multiple) angegeben ist, muss jedes einzelne Element in der durch Kommas getrennten Werteliste mit dem {{Glossary("regular_expression", "regulären Ausdruck")}} übereinstimmen.

Nehmen wir beispielsweise an, Sie erstellen eine Seite für Mitarbeiter von Best Startup Ever, Inc., über die sie sich an ihre IT-Abteilung wenden können, um Hilfe zu erhalten. In unserem vereinfachten Formular muss der Benutzer seine E-Mail-Adresse und eine Nachricht eingeben, die das Problem beschreibt, bei dem er Hilfe benötigt. Wir möchten sicherstellen, dass der Benutzer nicht nur eine gültige E-Mail-Adresse angibt, sondern aus Sicherheitsgründen auch, dass es sich um eine interne geschäftliche E-Mail-Adresse handelt.

Da Eingaben vom Typ `email` sowohl gegen die Standardvalidierung für E-Mail-Adressen _als auch_ gegen das angegebene [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern) validieren, können Sie dies einfach implementieren. Sehen wir uns an, wie:

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

Unser {{HTMLElement("form")}} enthält ein {{HTMLElement("input")}} vom Typ `email` für die E-Mail-Adresse des Benutzers, ein {{HTMLElement("textarea")}} zur Eingabe seiner Nachricht an die IT und ein `<input>` vom Typ [`"submit"`](/de/docs/Web/HTML/Reference/Elements/input/submit), das eine Schaltfläche zum Übermitteln des Formulars erstellt. Jedes Texteingabefeld hat ein zugeordnetes {{HTMLElement("label")}}, damit der Benutzer weiß, was von ihm erwartet wird.

Sehen wir uns das Eingabefeld für die E-Mail-Adresse genauer an. Die Attribute [`size`](/de/docs/Web/HTML/Reference/Elements/input#size) und [`maxlength`](/de/docs/Web/HTML/Reference/Elements/input#maxlength) sind beide auf 64 gesetzt, um Platz für 64 Zeichen einer E-Mail-Adresse anzuzeigen und die tatsächlich eingegebene Zeichenanzahl auf maximal 64 zu begrenzen. Das Attribut [`required`](/de/docs/Web/HTML/Reference/Elements/input#required) ist angegeben, wodurch die Angabe einer gültigen E-Mail-Adresse obligatorisch wird.

Ein geeigneter [`placeholder`](/de/docs/Web/HTML/Reference/Elements/input#placeholder) wird bereitgestellt – `username@beststartupever.com` –, um zu demonstrieren, was einen gültigen Eintrag darstellt. Diese Zeichenkette zeigt sowohl, dass eine E-Mail-Adresse eingegeben werden soll, als auch, dass es sich um ein geschäftliches beststartupever.com-Konto handeln sollte. Dies kommt zusätzlich dazu, dass der Typ `email` den Text daraufhin validiert, ob er wie eine E-Mail-Adresse formatiert ist. Wenn der Text im Eingabefeld keine E-Mail-Adresse ist, erhalten Sie eine Fehlermeldung, die ungefähr so aussieht:

![Ungültige E-Mail-Adresse im Fehlerzustand mit einem Hinweisfenster der Eingabe, das „please enter an email address“ anzeigt.](enter-valid-email-address.png)

Wenn wir es dabei belassen würden, würden wir zumindest auf legitime E-Mail-Adressen validieren. Aber wir möchten noch einen Schritt weitergehen: Wir möchten sicherstellen, dass die E-Mail-Adresse tatsächlich die Form `[username]@beststartupever.com` hat. Hier verwenden wir [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern). Wir setzen `pattern` auf `.+@beststartupever.com`. Dieser reguläre Ausdruck verlangt eine Zeichenkette, die aus mindestens einem beliebigen Zeichen besteht, gefolgt von einem „@“ und dem Domainnamen „beststartupever.com“.

Beachten Sie, dass dies bei Weitem kein ausreichender Filter für gültige E-Mail-Adressen ist; er würde beispielsweise „ @beststartupever.com“ (beachten Sie das vorangestellte Leerzeichen) oder „@@beststartupever.com“ erlauben, obwohl keines davon gültig ist. Der Browser führt jedoch sowohl den Standardfilter für E-Mail-Adressen _als auch_ unser benutzerdefiniertes Muster für den angegebenen Text aus. Daher erhalten wir eine Validierung, die besagt: „Stellen Sie sicher, dass dies einer gültigen E-Mail-Adresse ähnelt, und stellen Sie, falls dies der Fall ist, sicher, dass es auch eine beststartupever.com-Adresse ist.“

Es ist ratsam, das Attribut [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title) zusammen mit `pattern` zu verwenden. Wenn Sie dies tun, _muss_ `title` das Muster beschreiben. Das heißt, es sollte erläutern, welches Format die Daten haben sollen, und keine anderen Informationen enthalten. Das liegt daran, dass `title` möglicherweise als Teil einer Validierungsfehlermeldung angezeigt oder vorgelesen wird. Beispielsweise könnte der Browser die Meldung „Der eingegebene Text entspricht nicht dem erforderlichen Muster.“ gefolgt von Ihrem angegebenen `title` anzeigen. Wenn Ihr `title` etwa „E-Mail-Adresse“ lautet, wäre das Ergebnis die Meldung „Der eingegebene Text entspricht nicht dem erforderlichen Muster. E-Mail-Adresse“, was nicht besonders hilfreich ist.

Deshalb geben wir stattdessen die Zeichenkette „Please provide only a Best Startup Ever corporate email address“ an. Dadurch könnte die vollständige resultierende Fehlermeldung etwa lauten: „Der eingegebene Text entspricht nicht dem erforderlichen Muster. Please provide only a Best Startup Ever corporate email address.“

![Eine gültige E-Mail-Adresse, aber die Eingabe befindet sich im Fehlerzustand mit einem Hinweisfenster der Eingabe, das „The entered text doesn't match the required pattern. Please provide only a Best Startup Ever corporate email address.“ anzeigt.](email-pattern-match-bad.png)

> [!NOTE]
> Wenn Sie beim Schreiben Ihrer regulären Ausdrücke für die Validierung auf Probleme stoßen und sie nicht korrekt funktionieren, überprüfen Sie die Konsole Ihres Browsers; dort können hilfreiche Fehlermeldungen angezeigt werden, die Sie bei der Lösung des Problems unterstützen.

## Beispiele

Hier haben wir eine E-Mail-Eingabe mit der ID `emailAddress`, die maximal 256 Zeichen lang sein darf. Das Eingabefeld selbst ist physisch 64 Zeichen breit und zeigt den Text `user@example.gov` als Platzhalter an, sobald das Feld leer ist. Darüber hinaus ist das Feld durch die Verwendung des Attributs [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple) so konfiguriert, dass der Benutzer null oder mehr E-Mail-Adressen eingeben kann, die durch Kommas getrennt sind, wie unter [Mehrere E-Mail-Adressen erlauben](#mehrere_e-mail-adressen_erlauben) beschrieben. Abschließend enthält das Attribut [`list`](/de/docs/Web/HTML/Reference/Elements/input#list) die ID eines {{HTMLElement("datalist")}}, dessen {{HTMLElement("option")}}s eine Reihe vorgeschlagener Werte angeben, aus denen der Benutzer auswählen kann.

Zusätzlich wird das Element {{HTMLElement("label")}} verwendet, um eine Beschriftung für das Eingabefeld für E-Mail-Adressen festzulegen, wobei sein Attribut [`for`](/de/docs/Web/HTML/Reference/Elements/label#for) auf die ID `emailAddress` des {{HTMLElement("input")}}-Elements verweist. Durch die Zuordnung der beiden Elemente auf diese Weise wird durch Klicken auf die Beschriftung das Eingabeelement fokussiert.

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

- [Leitfaden zu HTML-Formularen](/de/docs/Learn_web_development/Extensions/Forms)
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
