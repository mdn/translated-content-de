---
title: <input type="email">
slug: Web/HTML/Element/input/email
l10n:
  sourceCommit: 245715b48674c1729cb63417e4a27628e30ae28c
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente des Typs **`email`** werden verwendet, um dem Benutzer das Eingeben und Bearbeiten einer E-Mail-Adresse zu ermöglichen oder, wenn das [`multiple`](/de/docs/Web/HTML/Attributes/multiple)-Attribut angegeben ist, eine Liste von E-Mail-Adressen.

{{EmbedInteractiveExample("pages/tabbed/input-email.html", "tabbed-shorter")}}

Der Eingabewert wird automatisch validiert, um sicherzustellen, dass er entweder leer ist oder eine korrekt formatierte E-Mail-Adresse (oder Adressliste) enthält, bevor das Formular gesendet werden kann. Die {{cssxref(":valid")}}- und {{cssxref(":invalid")}}-CSS-Pseudoklassen werden automatisch angewendet, um visuell anzuzeigen, ob der aktuelle Wert des Feldes eine gültige E-Mail-Adresse ist oder nicht.

## Wert

Das [`value`](/de/docs/Web/HTML/Element/input#value)-Attribut des {{HTMLElement("input")}}-Elements enthält eine Zeichenkette, die automatisch als konform zur E-Mail-Syntax validiert wird. Genauer gesagt gibt es drei mögliche Werteformate, die die Validierung bestehen:

1. Eine leere Zeichenkette ("") zeigt an, dass der Benutzer keinen Wert eingegeben oder den Wert entfernt hat.
2. Eine einzelne, korrekt gebildete E-Mail-Adresse. Das bedeutet nicht unbedingt, dass die E-Mail-Adresse existiert, aber sie ist zumindest korrekt formatiert. In einfachen Worten bedeutet das `username@domain` oder `username@domain.tld`. Es gibt natürlich mehr dazu; siehe [Validierung](#validierung) für einen [regulären Ausdruck](/de/docs/Glossary/regular_expression), der den Algorithmus zur Validierung von E-Mail-Adressen entspricht.
3. Nur wenn das [`multiple`](/de/docs/Web/HTML/Element/input#multiple)-Attribut angegeben ist, kann der Wert eine Liste von korrekt gebildeten, kommagetrennten E-Mail-Adressen sein. Alle nachfolgenden und führenden Leerzeichen werden von jeder Adresse in der Liste entfernt.

Siehe [Validierung](#validierung) für Details zur Validierung von E-Mail-Adressen, um sicherzustellen, dass sie korrekt formatiert sind.

## Zusätzliche Attribute

Zusätzlich zu den Attributen, die auf alle {{HTMLElement("input")}}-Elemente unabhängig von ihrem Typ wirken, unterstützen `email`-Eingaben die folgenden Attribute.

### list

Der Wert des list-Attributs ist die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements im selben Dokument. Die {{HTMLElement("datalist")}} stellt eine Liste von vordefinierten Werten bereit, die dem Benutzer für diese Eingabe vorgeschlagen werden. Alle Werte in der Liste, die mit dem [`type`](/de/docs/Web/HTML/Element/input#type) unvereinbar sind, werden nicht in den vorgeschlagenen Optionen aufgenommen. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert angeben.

### maxlength

Die maximale Zeichenlänge (gemessen in UTF-16-Codeeinheiten), die der Benutzer in die `email`-Eingabe eingeben kann. Dies muss ein ganzzahliger Wert von 0 oder höher sein. Wenn kein `maxlength` angegeben wird oder ein ungültiger Wert angegeben wird, hat die `email`-Eingabe keine maximale Länge. Dieser Wert muss auch größer als oder gleich dem Wert von `minlength` sein.

Die Eingabe wird die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) nicht bestehen, wenn die Länge des Textwerts des Feldes mehr als `maxlength` UTF-16-Codeeinheiten beträgt. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### minlength

Die minimale Zeichenlänge (gemessen in UTF-16-Codeeinheiten), die der Benutzer in die `email`-Eingabe eingeben kann. Dies muss ein nicht-negativer ganzzahliger Wert sein, der kleiner oder gleich dem Wert ist, der vom `maxlength` angegeben wird. Wenn kein `minlength` angegeben wird oder ein ungültiger Wert angegeben wird, hat die `email`-Eingabe keine Mindestlänge.

Die Eingabe wird die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) nicht bestehen, wenn die Länge des eingegebenen Texts im Feld weniger als `minlength` UTF-16-Codeeinheiten beträgt. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### multiple

Ein Boolean-Attribut, das, falls vorhanden, anzeigt, dass der Benutzer eine Liste von mehreren E-Mail-Adressen eingeben kann, getrennt durch Kommas und optional durch Leerzeichen. Siehe [Erlauben von mehreren E-Mail-Adressen](#mehrere_e-mail-adressen_erlauben) für ein Beispiel oder [HTML-Attribut: multiple](/de/docs/Web/HTML/Attributes/multiple) für weitere Details.

> [!NOTE]
> Normalerweise, wenn Sie das Attribut [`required`](/de/docs/Web/HTML/Element/input#required) angeben, muss der Benutzer eine gültige E-Mail-Adresse eingeben, damit das Feld als gültig betrachtet wird. Wenn Sie jedoch das `multiple`-Attribut hinzufügen, ist eine Liste von null E-Mail-Adressen (eine leere Zeichenkette oder eine, die vollständig aus Leerzeichen besteht) ein gültiger Wert. Mit anderen Worten, der Benutzer muss nicht einmal eine E-Mail-Adresse eingeben, wenn `multiple` angegeben ist, unabhängig vom Wert von `required`.

### pattern

Das `pattern`-Attribut, wenn es spezifiziert ist, ist ein regulärer Ausdruck, mit dem der [`value`](/de/docs/Web/HTML/Element/input#value) der Eingabe übereinstimmen muss, damit der Wert die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) besteht. Es muss ein gültiger JavaScript-regulärer Ausdruck sein, wie er vom {{jsxref("RegExp")}}-Typ verwendet wird, und wie in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert; das `'u'`-Flag wird beim Kompilieren des regulären Ausdrucks angegeben, damit das Muster als Sequenz von Unicode-Codepunkten behandelt wird, statt als [ASCII](/de/docs/Glossary/ASCII). Es sollten keine Schrägstriche um den Mustertext angegeben werden.

Wenn das spezifizierte Muster nicht angegeben oder ungültig ist, wird kein regulärer Ausdruck angewendet und dieses Attribut wird komplett ignoriert.

> [!NOTE]
> Verwenden Sie das [`title`](/de/docs/Web/HTML/Element/input#title)-Attribut, um einen Text anzugeben, den die meisten Browser als Tooltip anzeigen, um zu erklären, welche Anforderungen erfüllt werden müssen, um das Muster zu entsprechen. Sie sollten auch einen anderen erklärenden Text in der Nähe einfügen.

Siehe den Abschnitt [Mustervalidierung](#mustervalidierung) für Details und ein Beispiel.

### `placeholder`

Das `placeholder`-Attribut ist eine Zeichenkette, die dem Benutzer einen kurzen Hinweis darauf gibt, welche Art von Informationen im Feld erwartet werden. Es sollte ein Wort oder eine kurze Phrase sein, die den erwarteten Datentyp demonstriert und keine erklärende Nachricht ist. Der Text darf _keine_ Wagenrückläufe oder Zeilenumbrüche enthalten.

Wenn der Inhalt des Steuerelements eine Richtung (englisch LTR oder RTL) hat, der Platzhalter jedoch in der entgegengesetzten Richtung erscheinen muss, können Sie Unicode-Bidi-Algorithmus-Steuerzeichen verwenden, um die Richtung des Platzhalters zu überschreiben; siehe [Anleitung zur Verwendung von Unicode-Steuerelementen für Bidi-Text](https://www.w3.org/International/questions/qa-bidi-unicode-controls) für weitere Informationen.

> [!NOTE]
> Vermeiden Sie die Verwendung des `placeholder`-Attributs, wenn Sie können. Es ist nicht so semantisch nützlich wie andere Möglichkeiten, Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Siehe [`<input>`-Labels](/de/docs/Web/HTML/Element/input#labels) für weitere Informationen.

### `readonly`

Ein Boolean-Attribut, das, falls vorhanden, bedeutet, dass dieses Feld nicht vom Benutzer bearbeitet werden kann. Sein `value` kann jedoch weiterhin direkt durch JavaScript-Code geändert werden, indem die [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) `value` Eigenschaft gesetzt wird.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keine Wirkung auf Eingaben mit ebenfalls angegebenem `readonly`-Attribut.

### `size`

Das `size`-Attribut ist ein numerischer Wert, der angibt, wie viele Zeichen breit das Eingabefeld sein soll. Der Wert muss eine Zahl größer als null sein, und der Standardwert ist 20. Da sich Zeichenbreiten unterscheiden, kann dies genauer oder ungenauer sein, und es sollte nicht darauf vertraut werden, dass es exakt ist; das resultierende Eingabefeld kann schmaler oder breiter als die angegebene Zeichenanzahl sein, abhängig von den Zeichen und der Schriftart ({{cssxref("font")}}-Einstellungen in Verwendung).

Dies legt _keine_ Grenze fest, wie viele Zeichen der Benutzer in das Feld eingeben kann. Es spezifiziert nur ungefähr, wie viele auf einmal gesehen werden können. Um eine Obergrenze für die Länge der Eingabedaten festzulegen, verwenden Sie das [`maxlength`](#maxlength)-Attribut.

## Verwendung von E-Mail-Eingaben

E-Mail-Adressen gehören zu den am häufigsten eingegebenen Textdatenformen im Web; sie werden beim Einloggen auf Websites verwendet, bei der Anforderung von Informationen, um Bestellungen zu bestätigen, für Webmail und so weiter. Daher kann der `email`-Eingabetyp Ihre Arbeit als Webentwickler erheblich erleichtern, da er helfen kann, Ihre Arbeit beim Erstellen der Benutzeroberfläche und -logik für E-Mail-Adressen zu vereinfachen. Wenn Sie eine E-Mail-Eingabe mit dem richtigen `type`-Wert `email` erstellen, erhalten Sie eine automatische Validierung, dass der eingegebene Text zumindest in der richtigen Form vorliegt, um potenziell eine legitime E-Mail-Adresse zu sein. Dies kann helfen, Fälle zu vermeiden, in denen der Benutzer seine Adresse falsch eingibt oder eine ungültige Adresse angibt.

Es ist jedoch wichtig zu beachten, dass dies nicht ausreicht, um sicherzustellen, dass der angegebene Text eine tatsächlich existierende E-Mail-Adresse ist, die dem Benutzer der Site entspricht oder auf andere Weise akzeptabel ist. Es stellt sicher, dass der Wert des Feldes korrekt formatiert ist, um eine E-Mail-Adresse zu sein.

> [!NOTE]
> Es ist auch entscheidend, sich daran zu erinnern, dass ein Benutzer Ihr HTML hinter den Kulissen manipulieren kann, daher _darf_ Ihre Site diese Validierung _nicht_ für Sicherheitszwecke verwenden. Sie _müssen_ die E-Mail-Adresse auf der Serverseite jeder Transaktion verifizieren, bei der der bereitgestellte Text Sicherheitsimplikationen irgendeiner Art haben könnte.

### Eine einfache E-Mail-Eingabe

Derzeit implementieren alle Browser, die dieses Element implementieren, es als ein Standard-Text-Eingabefeld mit grundlegenden Validierungsfunktionen. Die Spezifikation erlaubt den Browsern jedoch hier gewisse Freiheiten. Beispielsweise könnte das Element mit dem im Gerät des Benutzers eingebauten Adressbuch integriert werden, um E-Mail-Adressen aus dieser Liste auszuwählen. In seiner einfachsten Form kann eine `email`-Eingabe so implementiert werden:

```html
<input id="emailAddress" type="email" />
```

{{ EmbedLiveSample('A_simple_email_input', 600, 40) }}

Beachten Sie, dass es als gültig angesehen wird, wenn es leer und wenn eine einzelne gültig formatierte E-Mail-Adresse eingegeben ist, aber ansonsten nicht als gültig angesehen wird. Durch Hinzufügen des [`required`](/de/docs/Web/HTML/Element/input#required)-Attributs sind nur gültig gebildete E-Mail-Adressen erlaubt; die Eingabe wird nicht mehr als gültig angesehen, wenn sie leer ist.

### Mehrere E-Mail-Adressen erlauben

Durch Hinzufügen des [`multiple`](/de/docs/Web/HTML/Attributes/multiple)-Boolean-Attributs kann die Eingabe so konfiguriert werden, dass sie mehrere E-Mail-Adressen akzeptiert.

```html
<input id="emailAddress" type="email" multiple />
```

{{ EmbedLiveSample('Allowing multiple email addresses', 600, 40) }}

Die Eingabe wird jetzt als gültig angesehen, wenn eine einzelne E-Mail-Adresse eingegeben wird oder wenn eine beliebige Anzahl von E-Mail-Adressen, getrennt durch Kommas und optional eine Anzahl von Leerzeichen, vorhanden ist.

> [!NOTE]
> Wenn `multiple` verwendet wird, _darf_ der Wert leer sein.

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

Manchmal ist es hilfreich, einen kontextuellen Hinweis darauf zu geben, welche Form die Eingabedaten haben sollten. Dies kann besonders wichtig sein, wenn das Seitendesign keine beschreibenden Labels für jedes {{HTMLElement("input")}} bietet. Hier kommen **Platzhalter** ins Spiel. Ein Platzhalter ist ein Wert, der die Form des `value` demonstriert, indem er ein Beispiel für einen gültigen Wert präsentiert, der im Bearbeitungsfeld angezeigt wird, wenn der `value` des Elements `""` ist. Sobald Daten in das Feld eingegeben werden, verschwindet der Platzhalter; wenn das Feld geleert wird, erscheint der Platzhalter erneut.

Hier haben wir eine `email`-Eingabe mit dem Platzhalter `sophie@example.com`. Beachten Sie, wie der Platzhalter verschwindet und wieder erscheint, während Sie den Inhalt des Bearbeitungsfelds manipulieren.

```html
<input type="email" placeholder="sophie@example.com" />
```

{{ EmbedLiveSample('Placeholders', 600, 40) }}

### Kontrolle der Eingabegröße

Sie können nicht nur die physische Länge des Eingabefelds steuern, sondern auch die minimal und maximal erlaubte Textlänge der Eingabe selbst.

#### Physische Größe des Eingabeelements

Die physische Größe des Eingabefelds kann mit dem [`size`](/de/docs/Web/HTML/Element/input#size)-Attribut gesteuert werden. Damit können Sie die Anzahl der Zeichen festlegen, die das Eingabefeld auf einmal anzeigen kann. In diesem Beispiel ist das `email`-Bearbeitungsfeld 15 Zeichen breit:

```html
<input type="email" size="15" />
```

{{ EmbedLiveSample('Physical_input_element_size', 600, 40) }}

#### Elementwertlänge

Das `size` ist getrennt von der Längenbeschränkung für die eingegebene E-Mail-Adresse selbst, sodass Sie Felder haben können, die in einen kleinen Raum passen, während Sie dennoch längere E-Mail-Adresszeichenfolgen zulassen. Sie können eine Mindestlänge in Zeichen für die eingegebene E-Mail-Adresse mit dem [`minlength`](/de/docs/Web/HTML/Element/input#minlength)-Attribut angeben; verwenden Sie ähnlich [`maxlength`](/de/docs/Web/HTML/Element/input#maxlength), um die maximale Länge der eingegebenen E-Mail-Adresse festzulegen.

Das folgende Beispiel erstellt ein Eingabefeld für E-Mail-Adressen mit einer Breite von 32 Zeichen, das erfordert, dass der Inhalt nicht kürzer als 3 Zeichen und nicht länger als 64 Zeichen ist.

```html
<input type="email" size="32" minlength="3" maxlength="64" />
```

{{EmbedLiveSample("Element_value_length", 600, 40) }}

### Bereitstellen von Standardoptionen

#### Bereitstellen eines einzelnen Standards mit dem value-Attribut

Wie immer können Sie einen Standardwert für ein `email`-Eingabefeld angeben, indem Sie das [`value`](/de/docs/Web/HTML/Element/input#value)-Attribut festlegen:

```html
<input type="email" value="default@example.com" />
```

{{EmbedLiveSample("Providing_a_single_default_using_the_value_attribute", 600, 40)}}

#### Angebot von vorgeschlagenen Werten

Einen Schritt weiter, können Sie eine Liste von Standardoptionen bereitstellen, aus denen der Benutzer auswählen kann, indem Sie das [`list`](/de/docs/Web/HTML/Element/input#list)-Attribut angeben. Dies beschränkt den Benutzer nicht auf diese Optionen, erlaubt ihm jedoch, häufiger verwendete E-Mail-Adressen schneller auszuwählen. Dies bietet auch Hinweise für [`autocomplete`](/de/docs/Web/HTML/Element/input#autocomplete). Das `list`-Attribut gibt die ID eines {{HTMLElement("datalist")}} an, die wiederum ein {{HTMLElement("option")}}-Element pro vorgeschlagenem Wert enthält; jeder `option`-Wert ist der entsprechende vorgeschlagene Wert für das E-Mail-Eingabefeld.

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

Mit dem {{HTMLElement("datalist")}}-Element und seinen {{HTMLElement("option")}}s an Ort und Stelle, bietet der Browser die angegebenen Werte als potenzielle Werte für die E-Mail-Adresse an; dies wird typischerweise als Popup- oder Dropdown-Menü mit den Vorschlägen präsentiert. Während die spezifische Benutzererfahrung von einem Browser zum anderen variieren kann, präsentiert typischerweise ein Klick in das Bearbeitungsfeld ein Dropdown der vorgeschlagenen E-Mail-Adressen. Dann, während der Benutzer tippt, wird die Liste gefiltert, um nur passende Werte anzuzeigen. Jeder eingegebene Charakter verengt die Liste, bis der Benutzer eine Auswahl trifft oder einen benutzerdefinierten Wert eingibt.

## Validierung

Es gibt zwei Ebenen der Inhaltsvalidierung, die für `email`-Eingaben verfügbar sind. Erstens gibt es die standardmäßige Ebene der Validierung, die allen {{HTMLElement("input")}}s angeboten wird, was automatisch sicherstellt, dass die Inhalte den Anforderungen entsprechen, um eine gültige E-Mail-Adresse zu sein. Es gibt jedoch auch die Möglichkeit, zusätzliche Filterung hinzuzufügen, um sicherzustellen, dass Ihre eigenen spezialisierten Bedürfnisse, falls vorhanden, erfüllt werden.

> [!WARNING]
> HTML-Formularvalidierung ist _keine_ Alternative zu Skripten, die sicherstellen, dass die eingegebenen Daten im richtigen Format vorliegen. Es ist viel zu einfach für jemanden, Anpassungen am HTML vorzunehmen, die es ihm ermöglichen, die Validierung zu umgehen oder sie komplett zu entfernen. Es ist auch möglich, dass jemand Ihr HTML vollständig umgeht und die Daten direkt an Ihren Server sendet. Wenn Ihr serverseitiger Code es versäumt, die empfangenen Daten zu validieren, könnte ein Desaster eintreten, wenn falsch formatierte Daten (oder Daten, die zu groß, vom falschen Typ sind usw.) in Ihre Datenbank eingegeben werden.

### Grundlegende Validierung

Browser bieten automatisch Validierung, um sicherzustellen, dass nur Text eingegeben wird, der dem Standardformat für Internet-E-Mail-Adressen entspricht. Browser verwenden einen Algorithmus, der einem der folgenden regulären Ausdrücke entspricht:

```js
/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
```

Um mehr darüber zu erfahren, wie Formularvalidierung funktioniert und wie Sie die {{cssxref(":valid")}}- und {{cssxref(":invalid")}}-CSS-Eigenschaften nutzen können, um die Eingabe basierend darauf zu stilisieren, ob der aktuelle Wert gültig ist, siehe [Formular-Daten-Validierung](/de/docs/Learn/Forms/Form_validation).

> [!NOTE]
> Es gibt bekannte Spezifikationsprobleme in Bezug auf internationale Domainnamen und die Validierung von E-Mail-Adressen in HTML. Siehe [W3C-Bug 15489](https://www.w3.org/Bugs/Public/show_bug.cgi?id=15489) für Details.

### Mustervalidierung

Wenn Sie die eingegebene E-Mail-Adresse weiter einschränken müssen als nur "jede Zeichenkette, die wie eine E-Mail-Adresse aussieht", können Sie das [`pattern`](/de/docs/Web/HTML/Element/input#pattern)-Attribut verwenden, um einen [regulären Ausdruck](/de/docs/Glossary/regular_expression) anzugeben, den der Wert für seine Gültigkeit erfüllen muss. Wenn das [`multiple`](/de/docs/Web/HTML/Element/input#multiple)-Attribut angegeben ist, muss jedes einzelne Element in der kommagetrennten Liste der Werte den [regulären Ausdruck](/de/docs/Glossary/regular_expression) treffen.

Nehmen wir zum Beispiel an, Sie erstellen eine Seite für Mitarbeiter von Best Startup Ever, Inc., die es ihnen ermöglicht, sich für Hilfe an ihre IT-Abteilung zu wenden. In unserem vereinfachten Formular muss der Benutzer seine E-Mail-Adresse und eine Nachricht angeben, in der das Problem beschrieben wird, bei dem Hilfe benötigt wird. Wir möchten sicherstellen, dass der Benutzer nicht nur eine gültige E-Mail-Adresse angibt, sondern aus Sicherheitsgründen verlangen wir, dass die Adresse eine interne Unternehmens-E-Mail-Adresse ist.

Da Eingaben vom Typ `email` sowohl gegen die Standard-E-Mail-Adressvalidierung als auch das angegebene [`pattern`](/de/docs/Web/HTML/Element/input#pattern) validieren, können Sie das leicht implementieren. Schauen wir uns an, wie:

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

Unser {{HTMLElement("form")}} enthält ein {{HTMLElement("input")}} des Typs `email` für die E-Mail-Adresse des Benutzers, ein {{HTMLElement("textarea")}}, in das sie ihre Nachricht an die IT eingeben können, und ein `<input>` des Typs [`"submit"`](/de/docs/Web/HTML/Element/input/submit), das eine Schaltfläche zum Absenden des Formulars erstellt. Jede Texteingabe hat ein {{HTMLElement("label")}}, das damit verknüpft ist, um dem Benutzer mitzuteilen, was von ihm erwartet wird.

Schauen wir uns das E-Mail-Adresseneingabefeld im Detail an. Seine [`size`](/de/docs/Web/HTML/Element/input#size)- und [`maxlength`](/de/docs/Web/HTML/Element/input#maxlength)-Attribute sind beide auf 64 gesetzt, um Raum für 64 Zeichen bei der E-Mail-Adresse zu zeigen und die Anzahl der tatsächlich eingegebenen Zeichen auf maximal 64 zu beschränken. Das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut ist spezifiziert, wodurch es obligatorisch wird, dass eine gültige E-Mail-Adresse bereitgestellt wird.

Ein angemessener [`placeholder`](/de/docs/Web/HTML/Element/input#placeholder) ist bereitgestellt—`username@beststartupever.com`—um zu demonstrieren, was ein gültiger Eintrag darstellt. Diese Zeichenfolge demonstriert nicht nur, dass eine E-Mail-Adresse eingegeben werden sollte, sondern auch, dass es sich um ein Unternehmens-BestStartupEver.com-Konto handeln sollte. Dies ist zusätzlich dazu, dass durch die Verwendung des Typs `email` der Text validiert wird, um sicherzustellen, dass er wie eine E-Mail-Adresse formatiert ist. Wenn der Text im Eingabefeld keine E-Mail-Adresse ist, erhalten Sie eine Fehlermeldung, die ungefähr so aussieht:

![Ungültige E-Mail-Adresse im Fehlerzustand mit einem Popup aus dem Eingabefeld, das liest 'Bitte geben Sie eine E-Mail-Adresse ein'.](enter-valid-email-address.png)

Wenn wir es dabei belassen würden, würden wir zumindest bei legitimen E-Mail-Adressen validieren. Aber wir wollen einen Schritt weiter gehen: wir möchten sicherstellen, dass die E-Mail-Adresse tatsächlich in der Form `[username]@beststartupever.com` ist. Hier verwenden wir [`pattern`](/de/docs/Web/HTML/Element/input#pattern). Wir setzen `pattern` auf `.+@beststartupever.com`. Dieser einfache reguläre Ausdruck verlangt eine Zeichenfolge, die aus mindestens einem Zeichen jeder Art besteht, dann ein "@" gefolgt vom Domainnamen "beststartupever.com".

Beachten Sie, dass dies kein ausreichender Filter für gültige E-Mail-Adressen ist; es würde Dinge wie ” @beststartupever.com“ (beachten Sie das führende Leerzeichen) oder ”@@beststartupever.com“ erlauben, von denen keines gültig ist. Allerdings führt der Browser sowohl den Standardfilter für E-Mail-Adressen als auch unser benutzerdefiniertes Muster gegen den angegebenen Text aus. Das Ergebnis ist eine Validierung, die sagt: "Stelle sicher, dass das wie eine gültige E-Mail-Adresse aussieht, und falls ja, stelle sicher, dass es sich auch um eine BestStartupEver.com-Adresse handelt."

Es ist ratsam, das [`title`](/de/docs/Web/HTML/Global_attributes#title)-Attribut zusammen mit `pattern` zu verwenden. Wenn Sie dies tun, _muss_ das `title` das Muster beschreiben. Das heißt, es sollte erklären, in welchem Format die Daten sein sollten, nicht aber jegliche andere Information. Das liegt daran, dass das `title` als Teil einer Validierungsfehlermeldung angezeigt oder gesprochen werden kann. Zum Beispiel könnte der Browser die Nachricht "Der eingegebene Text entspricht nicht dem erforderlichen Muster." gefolgt von Ihrem spezifizierten `title` präsentieren. Wenn Ihr `title` so etwas wie "E-Mail-Adresse" ist, wäre das Ergebnis die Nachricht "Der eingegebene Text entspricht nicht dem erforderlichen Muster. E-Mail-Adresse", was nicht sehr gut ist.

Stattdessen spezifizieren wir den Text "Bitte geben Sie nur eine Unternehmens-E-Mail-Adresse von Best Startup Ever an". Indem wir das tun, könnte die resultierende vollständige Fehlermeldung etwa so aussehen: "Der eingegebene Text entspricht nicht dem erforderlichen Muster. Bitte geben Sie nur eine Unternehmens-E-Mail-Adresse von Best Startup Ever an."

![Eine gültige E-Mail-Adresse, aber das Eingabefeld befindet sich im Fehlerzustand mit einem Popup, das sagt: 'The entered text doesn't match the required pattern. Please provide only a Best Startup Ever corporate email address.'](email-pattern-match-bad.png)

> [!NOTE]
> Wenn Sie auf Probleme stoßen, während Sie Ihre Validierungsregulären Ausdrücke schreiben und sie nicht richtig funktionieren, überprüfen Sie die Konsole Ihres Browsers; dort können hilfreiche Fehlermeldungen zu finden sein, die Ihnen bei der Problemlösung helfen.

## Beispiele

Hier haben wir eine E-Mail-Eingabe mit der ID `emailAddress`, die bis zu maximal 256 Zeichen lang sein darf. Das Eingabefeld selbst ist physisch 64 Zeichen breit und zeigt den Text `user@example.gov` als Platzhalter an, wenn das Feld leer ist. Darüber hinaus ist durch das Hinzufügen des [`multiple`](/de/docs/Web/HTML/Attributes/multiple)-Attributs das Feld so konfiguriert, dass der Benutzer null oder mehr E-Mail-Adressen eingeben kann, die durch Kommas getrennt sind, wie in [Erlauben von mehreren E-Mail-Adressen](#mehrere_e-mail-adressen_erlauben) beschrieben. Ein abschließender Touch ist, dass das [`list`](/de/docs/Web/HTML/Element/input#list)-Attribut die ID eines {{HTMLElement("datalist")}} enthält, dessen {{HTMLElement("option")}}s einen Satz vorgeschlagener Werte angeben, aus denen der Benutzer wählen kann.

Als zusätzliche Feinheit wird das {{HTMLElement("label")}}-Element verwendet, um ein Label für das E-Mail-Eingabefeld festzulegen, indem sein [`for`](/de/docs/Web/HTML/Element/label#for)-Attribut die `emailAddress`-ID des {{HTMLElement("input")}}-Elements referenziert. Durch die Verknüpfung der beiden Elemente in dieser Weise wird beim Klicken auf das Label das Eingabeelement fokussiert.

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
      <td><strong>IDL-Attribute</strong></td>
      <td><code>list</code> und <code>value</code></td>
    </tr>
    <tr>
      <td><strong>DOM-Schnittstelle</strong></td>
      <td><p>[`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)</p></td>
    </tr>
    <tr>
      <td><strong>Methode</strong></td>
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

- [HTML-Formulare Leitfaden](/de/docs/Learn/Forms)
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
