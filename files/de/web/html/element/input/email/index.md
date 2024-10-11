---
title: <input type="email">
slug: Web/HTML/Element/input/email
l10n:
  sourceCommit: 816cc4d4a5a318a23222946b6981bb92b499aebb
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente vom Typ **`email`** werden verwendet, um dem Benutzer die Eingabe und Bearbeitung einer E-Mail-Adresse oder, falls das [`multiple`](/de/docs/Web/HTML/Attributes/multiple)-Attribut angegeben ist, einer Liste von E-Mail-Adressen zu ermöglichen.

{{EmbedInteractiveExample("pages/tabbed/input-email.html", "tabbed-shorter")}}

Der Eingabewert wird automatisch validiert, um sicherzustellen, dass er entweder leer oder eine korrekt formatierte E-Mail-Adresse (oder Liste von Adressen) ist, bevor das Formular abgesendet werden kann. Die CSS-Pseudoklassen {{cssxref(":valid")}} und {{cssxref(":invalid")}} werden automatisch angewendet, um visuell anzuzeigen, ob der aktuelle Wert des Feldes eine gültige E-Mail-Adresse ist oder nicht.

## Wert

Das [`value`](/de/docs/Web/HTML/Element/input#value)-Attribut des {{HTMLElement("input")}}-Elements enthält eine Zeichenkette, die automatisch gemäß der E-Mail-Syntax validiert wird. Genauer gesagt gibt es drei mögliche Werteformate, die die Validierung bestehen:

1. Eine leere Zeichenkette (""), die anzeigt, dass der Benutzer keinen Wert eingegeben oder den Wert entfernt hat.
2. Eine einzelne korrekt formatierte E-Mail-Adresse. Dies bedeutet nicht unbedingt, dass die E-Mail-Adresse existiert, aber zumindest ist sie korrekt formatiert. Einfach ausgedrückt bedeutet dies `username@domain` oder `username@domain.tld`. Natürlich gibt es mehr dazu; siehe [Validierung](#validierung) für einen {{Glossary("regular_expression", "regulären Ausdruck")}}, der den Algorithmus zur Validierung von E-Mail-Adressen beschreibt.
3. Wenn und nur wenn das [`multiple`](/de/docs/Web/HTML/Element/input#multiple)-Attribut angegeben ist, kann der Wert eine Liste korrekt formatierter, durch Kommata getrennten E-Mail-Adressen sein. Jegliches führende oder nachfolgende Leerzeichen wird von jeder Adresse in der Liste entfernt.

Siehe [Validierung](#validierung) für Details dazu, wie E-Mail-Adressen validiert werden, um sicherzustellen, dass sie korrekt formatiert sind.

## Zusätzliche Attribute

Zusätzlich zu den Attributen, die auf alle {{HTMLElement("input")}}-Elemente unabhängig von ihrem Typ wirken, unterstützen `email`-Eingaben die folgenden Attribute.

### list

Der Wert des list-Attributs ist die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements, das im selben Dokument enthalten ist. Das {{HTMLElement("datalist")}} bietet eine Liste vordefinierter Werte, die dem Benutzer für diese Eingabe vorgeschlagen werden. Alle Werte in der Liste, die nicht mit dem [`type`](/de/docs/Web/HTML/Element/input#type) kompatibel sind, werden nicht in die vorgeschlagenen Optionen einbezogen. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste wählen oder einen anderen Wert angeben.

### maxlength

Die maximale Zeichenlänge (gemessen in UTF-16-Codeeinheiten), die der Benutzer in die `email`-Eingabe eingeben kann. Dies muss ein ganzzahliger Wert von null oder höher sein. Wenn kein `maxlength` angegeben ist oder ein ungültiger Wert angegeben ist, gibt es keine maximale Länge für die `email`-Eingabe. Dieser Wert muss auch größer oder gleich dem Wert von `minlength` sein.

Die Eingabe wird die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) nicht bestehen, wenn die Länge des Textwerts des Feldes länger als `maxlength` UTF-16-Codeeinheiten ist. Eine Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### minlength

Die minimale Zeichenlänge (gemessen in UTF-16-Codeeinheiten), die der Benutzer in die `email`-Eingabe eingeben kann. Dies muss ein nicht-negativer ganzzahliger Wert sein, der kleiner oder gleich dem durch `maxlength` angegebenen Wert ist. Wenn kein `minlength` angegeben ist oder ein ungültiger Wert angegeben ist, gibt es keine Mindestlänge für die `email`-Eingabe.

Die Eingabe wird die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) nicht bestehen, wenn die Länge des in das Feld eingegebenen Textes weniger als `minlength` UTF-16-Codeeinheiten beträgt. Eine Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### multiple

Ein Boolean-Attribut, das, falls vorhanden, angibt, dass der Benutzer eine Liste mehrerer E-Mail-Adressen eingeben kann, die durch Kommas und optional Leerzeichen getrennt sind. Siehe [Erlauben mehrerer E-Mail-Adressen](#erlauben_mehrerer_e-mail-adressen) für ein Beispiel, oder [HTML-Attribut: multiple](/de/docs/Web/HTML/Attributes/multiple) für weitere Details.

> [!NOTE]
> Normalerweise, wenn Sie das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut angeben, muss der Benutzer eine gültige E-Mail-Adresse eingeben, damit das Feld als gültig angesehen wird. Wenn Sie jedoch das `multiple`-Attribut hinzufügen, ist eine Liste von null E-Mail-Adressen (eine leere Zeichenkette oder eine, die vollständig aus Leerzeichen besteht) ein gültiger Wert. Mit anderen Worten, der Benutzer muss nicht einmal eine E-Mail-Adresse eingeben, wenn `multiple` angegeben ist, unabhängig vom Wert von `required`.

### pattern

Das `pattern`-Attribut, wenn es angegeben ist, ist ein regulärer Ausdruck, den der [`value`](/de/docs/Web/HTML/Element/input#value) der Eingabe erfüllen muss, damit der Wert die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) besteht. Es muss ein gültiger JavaScript-regulärer Ausdruck sein, wie er vom {{jsxref("RegExp")}}-Typ verwendet wird, und wie in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert ist; das `'u'`-Flag wird beim Kompilieren des regulären Ausdrucks angegeben, sodass das Muster als Sequenz von Unicode-Codepunkten behandelt wird, anstatt als {{Glossary("ASCII", "ASCII")}}. Es sollten keine Schrägstriche im Mustertext angegeben werden.

Wenn das angegebene Muster nicht angegeben ist oder ungültig ist, wird kein regulärer Ausdruck angewendet und dieses Attribut wird vollständig ignoriert.

> [!NOTE]
> Verwenden Sie das [`title`](/de/docs/Web/HTML/Element/input#title)-Attribut, um Text anzugeben, den die meisten Browser als Tooltip anzeigen, um zu erläutern, welche Anforderungen erfüllt sein müssen, um das Muster zu erfüllen. Sie sollten auch andere erläuternde Texte in der Nähe hinzufügen.

Siehe den Abschnitt [Musterüberprüfung](#musterüberprüfung) für Details und ein Beispiel.

### `placeholder`

Das `placeholder`-Attribut ist eine Zeichenkette, die dem Benutzer einen kurzen Hinweis darauf gibt, welche Art von Information im Feld erwartet wird. Es sollte ein Wort oder eine kurze Phrase sein, die den erwarteten Datentyp demonstriert, anstatt eine erläuternde Nachricht. Der Text _darf keine_ Wagenrückläufe oder Zeilenvorschübe enthalten.

Wenn der Inhalt der Steuerung eine Richtung ({{Glossary("LTR", "LTR")}} oder {{Glossary("RTL", "RTL")}}) hat, der Platzhalter jedoch in der entgegengesetzten Richtung angezeigt werden muss, können Sie die Unicode-Bidi-Algorithmus-Formatierungszeichen verwenden, um die Richtung im Platzhalter zu überschreiben; siehe [Wie Sie Unicode-Steuerelemente für bidirektionalen Text verwenden](https://www.w3.org/International/questions/qa-bidi-unicode-controls) für weitere Informationen.

> [!NOTE]
> Vermeiden Sie die Verwendung des `placeholder`-Attributs, wenn Sie können. Es ist nicht so semantisch nützlich wie andere Möglichkeiten, Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Siehe [`<input>`-Labels](/de/docs/Web/HTML/Element/input#labels) für weitere Informationen.

### `readonly`

Ein Boolean-Attribut, das, falls vorhanden, bedeutet, dass dieses Feld vom Benutzer nicht bearbeitet werden kann. Sein `value` kann jedoch weiterhin durch direktes Setzen der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-`value`-Eigenschaft durch JavaScript-Code geändert werden.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keine Auswirkungen auf Eingaben, bei denen das `readonly`-Attribut auch angegeben ist.

### `size`

Das `size`-Attribut ist ein numerischer Wert, der angibt, wie viele Zeichen breit das Eingabefeld sein soll. Der Wert muss eine Zahl größer als null sein, und der Standardwert ist 20. Da sich Zeichenbreiten unterscheiden, kann dies genau sein oder nicht und sollte nicht darauf verlassen werden, dass es so ist; das resultierende Eingabefeld kann je nach den Zeichen und der ({{cssxref("font")}}-Einstellungen in Verwendung) enger oder breiter als die angegebene Anzahl von Zeichen sein.

Dies setzt _keine_ Grenze dafür, wie viele Zeichen der Benutzer in das Feld eingeben kann. Es legt nur fest, wie viele in einem Durchgang ungefähr zu sehen sind. Um ein oberes Limit für die Länge der Eingabedaten festzulegen, verwenden Sie das [`maxlength`](#maxlength)-Attribut.

## Verwendung von E-Mail-Eingaben

E-Mail-Adressen gehören zu den am häufigsten in Textformularen auf dem Web eingegebenen Daten; sie werden beim Anmelden auf Websites, beim Anfordern von Informationen, zur Bestellbestätigung, bei Webmail und so weiter verwendet. Insofern kann der `email`-Eingabetyp Ihnen als Webentwickler die Arbeit erheblich erleichtern, da er helfen kann, Ihre Arbeit beim Erstellen der Benutzeroberfläche und Logik für E-Mail-Adressen zu vereinfachen. Wenn Sie eine E-Mail-Eingabe mit dem richtigen `type`-Wert, `email`, erstellen, erhalten Sie eine automatische Validierung, dass der eingegebene Text zumindest im richtigen Format ist, um potenziell eine legitime E-Mail-Adresse zu sein. Dies kann helfen, Fälle zu vermeiden, in denen der Benutzer seine Adresse falsch eintippt oder eine ungültige Adresse angibt.

Es ist jedoch wichtig zu beachten, dass dies nicht ausreicht, um sicherzustellen, dass der angegebene Text eine E-Mail-Adresse ist, die tatsächlich existiert, dem Benutzer der Website entspricht oder in irgendeiner Weise akzeptabel ist. Es stellt sicher, dass der Wert des Feldes korrekt formatiert ist, um eine E-Mail-Adresse zu sein.

> [!NOTE]
> Es ist auch wichtig zu beachten, dass ein Benutzer Ihr HTML hinter den Kulissen manipulieren kann, sodass Ihre Website _diese Validierung nicht_ für Sicherheitszwecke verwenden darf. Sie _müssen_ die E-Mail-Adresse serverseitig bei jeder Transaktion validieren, bei der der bereitgestellte Text sicherheitsrelevante Implikationen haben kann.

### Eine einfache E-Mail-Eingabe

Derzeit implementieren alle Browser, die dieses Element implementieren, es als Standard-Text-Eingabefeld mit grundlegenden Validierungsfunktionen. Die Spezifikation erlaubt jedoch den Browsern Spielraum hierfür. Beispielsweise könnte das Element in das integrierte Adressbuch des Benutzergeräts integriert werden, um das Auswählen von E-Mail-Adressen aus dieser Liste zu ermöglichen. In seiner grundlegendsten Form kann eine `email`-Eingabe so implementiert werden:

```html
<input id="emailAddress" type="email" />
```

{{EmbedLiveSample('A_simple_email_input', 600, 40)}}

Beachten Sie, dass es als gültig angesehen wird, wenn es leer ist und wenn eine einzelne korrekt formatierte E-Mail-Adresse eingegeben wurde, aber andernfalls nicht als gültig betrachtet wird. Durch Hinzufügen des [`required`](/de/docs/Web/HTML/Element/input#required)-Attributs sind nur korrekt geformte E-Mail-Adressen erlaubt; die Eingabe wird nicht mehr als gültig angesehen, wenn sie leer ist.

### Erlauben mehrerer E-Mail-Adressen

Durch Hinzufügen des [`multiple`](/de/docs/Web/HTML/Attributes/multiple)-Boolean-Attributs kann die Eingabe so konfiguriert werden, dass mehrere E-Mail-Adressen akzeptiert werden.

```html
<input id="emailAddress" type="email" multiple />
```

{{EmbedLiveSample('Allowing_multiple_email_addresses', 600, 40)}}

Die Eingabe wird nun als gültig angesehen, wenn eine einzelne E-Mail-Adresse eingegeben ist, oder wenn eine beliebige Anzahl von E-Mail-Adressen, die durch Kommas und optional einige Leerzeichen getrennt sind, vorhanden ist.

> [!NOTE]
> Wenn `multiple` verwendet wird, darf der Wert leer sein.

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

Manchmal ist es hilfreich, einen kontextbezogenen Hinweis zu geben, in welcher Form die Eingabedaten sein sollten. Dies kann besonders wichtig sein, wenn das Seitendesign keine beschreibenden Labels für jedes {{HTMLElement("input")}} bietet. Hier kommen **Platzhalter** ins Spiel. Ein Platzhalter ist ein Wert, der die Form demonstriert, die der `value` annehmen sollte, indem er ein Beispiel für einen gültigen Wert zeigt, der im Bearbeitungsfeld angezeigt wird, wenn der `value` des Elements eine leere Zeichenkette ist. Sobald Daten in das Feld eingegeben werden, verschwindet der Platzhalter; wenn das Feld geleert wird, erscheint der Platzhalter wieder.

Hier haben wir eine `email`-Eingabe mit dem Platzhalter `sophie@example.com`. Beachten Sie, wie der Platzhalter verschwindet und wieder erscheint, während Sie die Inhalte des Bearbeitungsfeldes manipulieren.

```html
<input type="email" placeholder="sophie@example.com" />
```

{{EmbedLiveSample('Placeholders', 600, 40)}}

### Steuerung der Eingabegröße

Sie können nicht nur die physische Länge des Eingabefeldes steuern, sondern auch die minimale und maximale Länge der tatsächlich eingegebenen Text selbst.

#### Physische Eingabefeldgröße

Die physische Größe des Eingabefeldes kann mit dem [`size`](/de/docs/Web/HTML/Element/input#size)-Attribut gesteuert werden. Damit können Sie die Anzahl der Zeichen angeben, die das Eingabefeld gleichzeitig anzeigen kann. In diesem Beispiel ist das `email`-Bearbeitungsfeld 15 Zeichen breit:

```html
<input type="email" size="15" />
```

{{EmbedLiveSample('Physical_input_element_size', 600, 40)}}

#### Elementwertlänge

Die `size` ist getrennt von der Längenbeschränkung der tatsächlich eingegebenen E-Mail-Adresse, damit Sie Felder haben können, die in einen kleinen Raum passen, während Sie dennoch längere E-Mail-Adresszeichenfolgen eingeben können. Sie können eine Mindestlänge in Zeichen für die eingegebene E-Mail-Adresse mit dem [`minlength`](/de/docs/Web/HTML/Element/input#minlength)-Attribut angeben; auf ähnliche Weise verwenden Sie [`maxlength`](/de/docs/Web/HTML/Element/input#maxlength), um die maximale Länge der eingegebenen E-Mail-Adresse festzulegen.

Im folgenden Beispiel wird ein 32 Zeichen breites Eingabefeld für E-Mail-Adressen erstellt, das verlangt, dass der Inhalt nicht kürzer als 3 Zeichen und nicht länger als 64 Zeichen ist.

```html
<input type="email" size="32" minlength="3" maxlength="64" />
```

{{EmbedLiveSample("Element_value_length", 600, 40)}}

### Bereitstellung von Standardoptionen

#### Bereitstellung eines einzelnen Standards mit dem value-Attribut

Wie immer können Sie einen Standardwert für ein `email`-Eingabefeld festlegen, indem Sie sein [`value`](/de/docs/Web/HTML/Element/input#value)-Attribut setzen:

```html
<input type="email" value="default@example.com" />
```

{{EmbedLiveSample("Providing_a_single_default_using_the_value_attribute", 600, 40)}}

#### Anbieten vorgeschlagener Werte

Einen Schritt weitergehend können Sie eine Liste von Standardoptionen aus denen der Benutzer wählen kann, indem Sie das [`list`](/de/docs/Web/HTML/Element/input#list)-Attribut angeben. Dies schränkt den Benutzer nicht auf diese Optionen ein, erlaubt ihnen jedoch, häufiger verwendete E-Mail-Adressen schneller auszuwählen. Es bietet auch Hinweise für [`autocomplete`](/de/docs/Web/HTML/Element/input#autocomplete). Das `list`-Attribut gibt die ID eines {{HTMLElement("datalist")}} an, die wiederum ein {{HTMLElement("option")}}-Element pro vorgeschlagenem Wert enthält; der `value` jedes `option` ist der entsprechende vorgeschlagene Wert für das E-Mail-Eingabefeld.

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

Mit dem {{HTMLElement("datalist")}}-Element und seinen {{HTMLElement("option")}}s an Ort und Stelle bietet der Browser die angegebenen Werte als potenzielle Werte für die E-Mail-Adresse an; dies wird typischerweise als Popup oder Dropdown-Menü mit den Vorschlägen präsentiert. Während die spezifische Nutzererfahrung von Browser zu Browser variieren kann, wird häufig durch Klicken in das Bearbeitungsfeld ein Dropdown der vorgeschlagenen E-Mail-Adressen angezeigt. Dann, während der Benutzer tippt, wird die Liste gefiltert, um nur noch passende Werte zu zeigen. Jede eingetippte Zeichenfolge engt die Liste weiter ein, bis der Benutzer eine Auswahl trifft oder einen benutzerdefinierten Wert eintippt.

## Validierung

Es stehen zwei Ebenen der Inhaltsvalidierung für `email`-Eingaben zur Verfügung. Erstens gibt es die Standard-Validierungsebene, die allen {{HTMLElement("input")}}s angeboten wird, die automatisch sicherstellt, dass die Inhalte den Anforderungen an eine gültige E-Mail-Adresse entsprechen. Aber es besteht auch die Möglichkeit, zusätzliche Filter hinzuzufügen, um sicherzustellen, dass Ihre eigenen speziellen Anforderungen erfüllt werden, falls Sie welche haben.

> [!WARNING]
> Die HTML-Formularvalidierung ist _kein_ Ersatz für Skripte, die sicherstellen, dass die eingegebenen Daten im richtigen Format vorliegen. Es ist viel zu einfach für jemanden, Anpassungen am HTML vorzunehmen, die es ihm ermöglichen, die Validierung zu umgehen oder sie vollständig zu entfernen. Es ist auch möglich, dass jemand Ihr HTML vollständig umgeht und die Daten direkt an Ihren Server sendet. Wenn Ihr serverseitiger Code die empfangenen Daten nicht validiert, könnte eine Katastrophe eintreten, wenn falsch formatierte Daten (oder Daten, die zu groß sind, den falschen Typ aufweisen usw.) in Ihre Datenbank eingegeben werden.

### Grundlegende Validierung

Browser bieten automatisch eine Validierung, um sicherzustellen, dass nur Text, der dem Standardformat für Internet-E-Mail-Adressen entspricht, in das Eingabefeld eingegeben wird. Browser verwenden einen Algorithmus, der dem folgenden regulären Ausdruck entspricht:

```js
/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
```

Um mehr darüber zu erfahren, wie Formularvalidierung funktioniert und wie Sie die CSS-Eigenschaften {{cssxref(":valid")}} und {{cssxref(":invalid")}} nutzen können, um das Eingabefeld basierend darauf zu stylen, ob der aktuelle Wert gültig ist, siehe [Formulardatenvalidierung](/de/docs/Learn/Forms/Form_validation).

> [!NOTE]
> Es gibt bekannte Spezifikationsprobleme im Zusammenhang mit internationalen Domain-Namen und der Validierung von E-Mail-Adressen in HTML. Einzelheiten finden Sie im [W3C-Bug 15489](https://www.w3.org/Bugs/Public/show_bug.cgi?id=15489).

### Musterüberprüfung

Falls Sie die eingegebene E-Mail-Adresse weiter einschränken müssen als nur "eine Zeichenkette, die wie eine E-Mail-Adresse aussieht", können Sie das [`pattern`](/de/docs/Web/HTML/Element/input#pattern)-Attribut verwenden, um einen {{Glossary("regular_expression", "regulären Ausdruck")}} anzugeben, den der Wert erfüllen muss, damit er gültig ist. Wenn das [`multiple`](/de/docs/Web/HTML/Element/input#multiple)-Attribut angegeben ist, muss jedes einzelne Element in der durch Kommas getrennten Liste von Werten dem {{Glossary("regular_expression", "regulären Ausdruck")}} entsprechen.

Zum Beispiel, sagen wir, Sie bauen eine Seite für Mitarbeiter von Best Startup Ever, Inc., die es ihnen ermöglicht, sich mit ihrer IT-Abteilung in Verbindung zu setzen, um Hilfe zu erhalten. In unserem vereinfachten Formular muss der Benutzer seine E-Mail-Adresse und eine Nachricht eingeben, die das Problem beschreibt, bei dem er Hilfe benötigt. Wir wollen sicherstellen, dass nicht nur eine gültige E-Mail-Adresse angegeben wird, sondern aus Sicherheitsgründen auch, dass es sich um eine interne Unternehmense-Mail-Adresse handelt.

Da Eingaben des Typs `email` sowohl gegen die Standard-E-Mail-Adressvalidierung als auch gegen das angegebene [`pattern`](/de/docs/Web/HTML/Element/input#pattern) validieren, können Sie dies leicht umsetzen. Lassen Sie uns sehen, wie:

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

Unser {{HTMLElement("form")}} enthält ein {{HTMLElement("input")}} des Typs `email` für die E-Mail-Adresse des Benutzers, ein {{HTMLElement("textarea")}}, um ihre Nachricht an die IT einzugeben und ein `<input>` des Typs [`"submit"`](/de/docs/Web/HTML/Element/input/submit), das eine Schaltfläche zum Absenden des Formulars erstellt. Jedes Texteingabefeld hat ein mit ihm assoziiertes {{HTMLElement("label")}}, um dem Benutzer mitzuteilen, was von ihm erwartet wird.

Lassen Sie uns einen genaueren Blick auf das E-Mail-Adresseingabefeld werfen. Seine [`size`](/de/docs/Web/HTML/Element/input#size) und [`maxlength`](/de/docs/Web/HTML/Element/input#maxlength)-Attribute sind auf 64 gesetzt, um Platz für 64 Zeichen an E-Mail-Adresse zu zeigen und um die Zahl der tatsächlich eingegebenen Zeichen auf maximal 64 zu begrenzen. Das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut ist angegeben, was es zwingend notwendig macht, dass eine gültige E-Mail-Adresse bereitgestellt wird.

Ein angemessener [`placeholder`](/de/docs/Web/HTML/Element/input#placeholder) – `username@beststartupever.com` – wird bereitgestellt, um zu zeigen, was eine gültige Eingabe darstellt. Diese Zeichenkette zeigt sowohl, dass eine E-Mail-Adresse eingegeben werden soll, als auch, dass es sich um ein Unternehmenskonto bei beststartupever.com handelt. Dies ist zusätzlich zu der Tatsache, dass der Einsatz des Typs `email` den Text validiert, um sicherzustellen, dass er wie eine E-Mail-Adresse formatiert ist. Wenn der Text im Eingabefeld keine E-Mail-Adresse ist, wird eine Fehlermeldung angezeigt, die ungefähr so aussieht:

![Ungültige E-Mail-Adresse im Fehlerzustand mit einem Popup aus der Eingabe mit der Aufschrift "Bitte geben Sie eine E-Mail-Adresse ein".](enter-valid-email-address.png)

Wenn wir es dabei belassen würden, würden wir zumindest auf legitime E-Mail-Adressen validieren. Aber wir möchten einen Schritt weiter gehen: Wir möchten sicherstellen, dass die E-Mail-Adresse tatsächlich im Format `[username]@beststartupever.com` ist. Hier verwenden wir das [`pattern`](/de/docs/Web/HTML/Element/input#pattern). Wir setzen `pattern` auf `.+@beststartupever.com`. Dieser einfache reguläre Ausdruck fordert eine Zeichenkette an, die aus mindestens einem beliebigen Zeichen besteht, gefolgt von einem "@" und dem Domainnamen "beststartupever.com".

Beachten Sie, dass dies kein annähernd angemessener Filter für gültige E-Mail-Adressen ist; es würde Dinge wie " @beststartupever.com" (beachten Sie das führende Leerzeichen) oder "@@beststartupever.com" zulassen, von denen keine gültig ist. Der Browser läuft jedoch sowohl den Standard-E-Mail-Adressfilter als auch unser benutzerdefiniertes Muster gegen den angegebenen Text. Dadurch erhalten wir eine Validierung, die sagt "Stelle sicher, dass dies wie eine gültige E-Mail-Adresse aussieht, und wenn es ist, stelle sicher, dass es auch eine beststartupever.com-Adresse ist."

Es wird empfohlen, das [`title`](/de/docs/Web/HTML/Global_attributes/title)-Attribut zusammen mit `pattern` zu verwenden. Wenn Sie dies tun, _muss_ der `title` das Muster beschreiben. Das heißt, er sollte erklären, welches Format die Daten annehmen sollten, anstatt andere Informationen. Das liegt daran, dass der `title` möglicherweise als Teil einer Validierungsfehlermeldung angezeigt oder ausgesprochen wird. Beispielsweise könnte der Browser die Meldung "Der eingegebene Text entspricht nicht dem erforderlichen Muster." gefolgt von Ihrem angegebenen `title` präsentieren. Wenn Ihr `title` so etwas wie "E-Mail-Adresse" ist, wäre das Ergebnis die Meldung "Der eingegebene Text entspricht nicht dem erforderlichen Muster. E-Mail-Adresse", was nicht sehr gut ist.

Deshalb geben wir stattdessen den String "Bitte geben Sie nur eine Unternehmens-E-Mail-Adresse von Best Startup Ever an" an. Dadurch könnte die resultierende vollständige Fehlermeldung so etwas sein wie "Der eingegebene Text entspricht nicht dem erforderlichen Muster. Bitte geben Sie nur eine Unternehmens-E-Mail-Adresse von Best Startup Ever an."

![Eine gültige E-Mail-Adresse, aber die Eingabe ist im Fehlerzustand mit einem Popup aus der Eingabe mit der Aufschrift "Der eingegebene Text entspricht nicht dem erforderlichen Muster. Bitte geben Sie nur eine Unternehmens-E-Mail-Adresse von Best Startup Ever an."](email-pattern-match-bad.png)

> [!NOTE]
> Falls Sie auf Probleme stoßen, während Sie Ihre Validierungsregulären Ausdrücke schreiben und diese nicht richtig funktionieren, überprüfen Sie die Konsole Ihres Browsers; dort könnten hilfreiche Fehlermeldungen sein, die Ihnen helfen, das Problem zu lösen.

## Beispiele

Hier haben wir eine E-Mail-Eingabe mit der ID `emailAddress`, die bis zu einer maximalen Länge von 256 Zeichen erlaubt ist. Das Eingabefeld selbst ist physisch 64 Zeichen breit und zeigt den Text `user@example.gov` als Platzhalter an, immer wenn das Feld leer ist. Darüber hinaus ist die Box durch die Verwendung des [`multiple`](/de/docs/Web/HTML/Attributes/multiple)-Attributs so konfiguriert, dass der Benutzer null oder mehr E-Mail-Adressen eingeben kann, die durch Kommas getrennt sind, wie in [Erlauben von mehreren E-Mail-Adressen](#erlauben_mehrerer_e-mail-adressen) beschrieben. Als letzte Ergänzung enthält das [`list`](/de/docs/Web/HTML/Element/input#list)-Attribut die ID eines {{HTMLElement("datalist")}}, dessen {{HTMLElement("option")}}s eine Reihe vorgeschlagener Werte angeben, die der Benutzer wählen kann.

Zusätzlich wird das {{HTMLElement("label")}}-Element verwendet, um dem E-Mail-Eingabefeld ein Label zuzuweisen, wobei sein [`for`](/de/docs/Web/HTML/Element/label#for)-Attribut auf die ID `emailAddress` des {{HTMLElement("input")}}-Elements verweist. Durch das Verbinden der beiden Elemente auf diese Weise wird durch Klicken auf das Label das Eingabeelement fokussiert.

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
        Eine Zeichenfolge, die eine E-Mail-Adresse darstellt, oder
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
