---
title: <input type="email">
slug: Web/HTML/Element/input/email
l10n:
  sourceCommit: 245715b48674c1729cb63417e4a27628e30ae28c
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente des Typs **`email`** werden verwendet, um den Benutzer eine E-Mail-Adresse eingeben und bearbeiten zu lassen oder, falls das [`multiple`](/de/docs/Web/HTML/Attributes/multiple)-Attribut angegeben ist, eine Liste von E-Mail-Adressen.

{{EmbedInteractiveExample("pages/tabbed/input-email.html", "tabbed-shorter")}}

Der Eingabewert wird automatisch validiert, um sicherzustellen, dass er entweder leer oder eine korrekt formatierte E-Mail-Adresse (oder Liste von Adressen) ist, bevor das Formular abgeschickt werden kann. Die CSS-Pseudoklassen {{cssxref(":valid")}} und {{cssxref(":invalid")}} werden automatisch entsprechend angewendet, um visuell anzuzeigen, ob der aktuelle Wert des Feldes eine gültige E-Mail-Adresse ist oder nicht.

## Wert

Das [`value`](/de/docs/Web/HTML/Element/input#value)-Attribut des {{HTMLElement("input")}}-Elements enthält einen String, der automatisch als konform zur E-Mail-Syntax validiert wird. Genauer gesagt, gibt es drei mögliche Wertformate, die die Validierung bestehen:

1. Ein leerer String (""), was anzeigt, dass der Benutzer keinen Wert eingegeben hat oder dass der Wert entfernt wurde.
2. Eine einzelne, korrekt geformte E-Mail-Adresse. Dies bedeutet nicht unbedingt, dass die E-Mail-Adresse existiert, aber sie ist zumindest korrekt formatiert. Einfach ausgedrückt, bedeutet dies `username@domain` oder `username@domain.tld`. Natürlich gibt es mehr dazu; siehe [Validierung](#validierung) für einen {{Glossary("regular expression")}}, der dem Algorithmus zur E-Mail-Adressvalidierung entspricht.
3. Wenn und nur wenn das [`multiple`](/de/docs/Web/HTML/Element/input#multiple)-Attribut angegeben ist, kann der Wert eine Liste von korrekt geformten, durch Kommas getrennten E-Mail-Adressen sein. Führende und nachfolgende Leerzeichen werden bei jeder Adresse in der Liste entfernt.

Siehe [Validierung](#validierung) für Details darüber, wie E-Mail-Adressen validiert werden, um sicherzustellen, dass sie korrekt formatiert sind.

## Zusätzliche Attribute

Zusätzlich zu den Attributen, die auf alle {{HTMLElement("input")}}-Elemente unabhängig von ihrem Typ wirken, unterstützen `email`-Eingaben die folgenden Attribute.

### list

Der Wert des `list`-Attributs ist die {{domxref("Element.id", "id")}} eines {{HTMLElement("datalist")}}-Elements, das im gleichen Dokument steht. Das {{HTMLElement("datalist")}} bietet eine Liste von vordefinierten Werten, die dem Benutzer für diese Eingabe vorgeschlagen werden. Werte in der Liste, die nicht mit dem [`type`](/de/docs/Web/HTML/Element/input#type) kompatibel sind, werden nicht in die vorgeschlagenen Optionen aufgenommen. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert angeben.

### maxlength

Die maximale Zeichenlänge (gemessen in UTF-16-Codeeinheiten), die der Benutzer in das `email`-Eingabefeld eingeben kann. Dies muss ein Ganzzahlwert von 0 oder höher sein. Wenn kein `maxlength` angegeben ist oder ein ungültiger Wert angegeben ist, hat die `email`-Eingabe keine maximale Länge. Dieser Wert muss auch größer oder gleich dem Wert von `minlength` sein.

Die Eingabe schlägt bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) fehl, wenn die Länge des Textwerts des Feldes größer ist als `maxlength` UTF-16-Codeeinheiten. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### minlength

Die minimale Zeichenlänge (gemessen in UTF-16-Codeeinheiten), die der Benutzer in das `email`-Eingabefeld eingeben kann. Dies muss ein nicht-negativer Ganzzahlwert sein, der kleiner oder gleich dem Wert ist, der durch `maxlength` angegeben ist. Wenn kein `minlength` angegeben ist oder ein ungültiger Wert angegeben ist, hat die `email`-Eingabe keine minimale Länge.

Die Eingabe schlägt bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) fehl, wenn die Länge des eingegebenen Textes im Feld kürzer ist als `minlength` UTF-16-Codeeinheiten. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### multiple

Ein Boolean-Attribut, das, falls vorhanden, angibt, dass der Benutzer eine Liste von mehreren E-Mail-Adressen eingeben kann, getrennt durch Kommas und optional Leerzeichen. Siehe [Mehrere E-Mail-Adressen zulassen](#mehrere_e-mail-adressen_zulassen) für ein Beispiel oder [HTML-Attribut: multiple](/de/docs/Web/HTML/Attributes/multiple) für weitere Details.

> [!NOTE]
> Normalerweise, wenn Sie das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut angeben, muss der Benutzer eine gültige E-Mail-Adresse eingeben, damit das Feld als gültig angesehen wird. Wenn Sie jedoch das `multiple`-Attribut hinzufügen, ist eine Liste von null E-Mail-Adressen (ein leerer String oder einer, der vollständig aus Leerzeichen besteht) ein gültiger Wert. Mit anderen Worten, der Benutzer muss nicht einmal eine E-Mail-Adresse eingeben, wenn `multiple` angegeben ist, unabhängig von dem Wert von `required`.

### pattern

Das `pattern`-Attribut, wenn spezifiziert, ist ein regulärer Ausdruck, den der [`value`](/de/docs/Web/HTML/Element/input#value) der Eingabe erfüllen muss, um die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) zu bestehen. Es muss ein gültiger JavaScript-Regulärausdruck sein, wie er vom Typ {{jsxref("RegExp")}} verwendet wird, und wie er in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert ist; das `'u'`-Flag wird beim Kompilieren des Regulärausdrucks angegeben, damit das Muster als Sequenz von Unicode-Codepunkten behandelt wird, anstatt als {{Glossary("ASCII")}}. Es sollten keine Schrägstriche um den Mustertext angegeben werden.

Wenn das spezifizierte Muster nicht angegeben oder ungültig ist, wird kein Regulärausdruck angewendet und dieses Attribut wird vollständig ignoriert.

> [!NOTE]
> Verwenden Sie das [`title`](/de/docs/Web/HTML/Element/input#title)-Attribut, um Text anzugeben, den die meisten Browser als Tooltip anzeigen, um zu erklären, welche Anforderungen erfüllt werden müssen, um dem Muster zu entsprechen. Sie sollten auch andere erläuternde Texte in der Nähe einfügen.

Siehe den Abschnitt [Muster-Validierung](#muster-validierung) für Details und ein Beispiel.

### `placeholder`

Das `placeholder`-Attribut ist ein String, der dem Benutzer kurz zeigt, welche Art von Informationen im Feld erwartet werden. Es sollte ein Wort oder eine kurze Phrase sein, die den erwarteten Datentyp verdeutlicht, anstatt eine erklärende Nachricht. Der Text _darf keine_ Wagenrückläufe oder Zeilenumbrüche enthalten.

Falls der Inhalt der Steuerung eine Richtung ({{Glossary("LTR")}} oder {{Glossary("RTL")}}) hat, aber den Platzhalter in der entgegengesetzten Richtung präsentieren muss, können Sie Unicode-Bidi-Algorithmus-Formatierungszeichen verwenden, um die Ausrichtung innerhalb des Platzhalters zu überschreiben; siehe [Wie man Unicode-Steuerzeichen für bidi-Text verwendet](https://www.w3.org/International/questions/qa-bidi-unicode-controls) für mehr Informationen.

> [!NOTE]
> Vermeiden Sie nach Möglichkeit die Verwendung des `placeholder`-Attributs. Es ist semantisch nicht so nützlich wie andere Möglichkeiten, Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Siehe [`<input>` Labels](/de/docs/Web/HTML/Element/input#labels) für mehr Informationen.

### `readonly`

Ein Boolean-Attribut, das, falls vorhanden, bedeutet, dass dieses Feld vom Benutzer nicht bearbeitet werden kann. Sein `value` kann jedoch dennoch direkt durch JavaScript-Code geändert werden, indem die {{domxref("HTMLInputElement")}} `value`-Eigenschaft gesetzt wird.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keine Wirkung auf Eingaben mit dem ebenfalls spezifizierten `readonly`-Attribut.

### `size`

Das `size`-Attribut ist ein numerischer Wert, der angibt, wie viele Zeichen breit das Eingabefeld sein soll. Der Wert muss eine Zahl größer als null sein, und der Standardwert ist 20. Da Zeichenbreiten variieren, kann dies unter Umständen ungenau sein und sollte nicht darauf verlassen werden; die resultierende Eingabe kann schmaler oder breiter als die angegebene Anzahl von Zeichen sein, je nach den Zeichen und der Schriftart ({{cssxref("font")}}-Einstellungen, die verwendet werden).

Dies setzt _keine_ Begrenzung, wie viele Zeichen der Benutzer in das Feld eingeben kann. Es spezifiziert nur ungefähr, wie viele gleichzeitig gesehen werden können. Um ein oberes Limit für die Länge der Eingabedaten zu setzen, verwenden Sie das [`maxlength`](#maxlength)-Attribut.

## Verwendung von email-Eingaben

E-Mail-Adressen gehören zu den am häufigsten eingegebenen Textdatenformen im Web; sie werden bei der Anmeldung auf Websites, bei Anfragen nach Informationen, zur Bestellbestätigung, für Webmail usw. verwendet. Daher kann der `email` Eingabetyp Ihre Arbeit als Webentwickler erheblich erleichtern, da er bei der Erstellung der Benutzeroberfläche und Logik für E-Mail-Adressen helfen kann. Wenn Sie ein E-Mail-Eingabefeld mit dem richtigen `type`-Wert, `email`, erstellen, erhalten Sie eine automatische Validierung, dass der eingegebene Text zumindest in der richtigen Form vorliegt, um potenziell eine legitime E-Mail-Adresse zu sein. Dies kann helfen, Fälle zu vermeiden, in denen der Benutzer seine Adresse falsch eingibt oder eine ungültige Adresse bereitstellt.

Es ist jedoch wichtig zu beachten, dass dies nicht ausreicht, um sicherzustellen, dass der angegebene Text eine E-Mail-Adresse ist, die tatsächlich existiert, dem Benutzer der Website entspricht oder in irgendeiner Weise akzeptabel ist. Es stellt lediglich sicher, dass der Wert des Feldes ordnungsgemäß formatiert ist, um eine E-Mail-Adresse zu sein.

> [!NOTE]
> Es ist auch entscheidend zu bedenken, dass ein Benutzer Ihr HTML hinter den Kulissen manipulieren kann, sodass Ihre Website diese Validierung _nicht_ für Sicherheitszwecke verwenden darf. Sie _müssen_ die E-Mail-Adresse auf der Serverseite jeder Transaktion überprüfen, bei der der bereitgestellte Text irgendwelche Sicherheitsimplikationen haben könnte.

### Eine einfache E-Mail-Eingabe

Derzeit implementieren alle Browser, die dieses Element unterstützen, es als ein normales Texteingabefeld mit grundlegenden Validierungsfunktionen. Die Spezifikation erlaubt den Browsern jedoch einen Spielraum dabei. Zum Beispiel könnte das Element mit dem integrierten Adressbuch des Geräts des Benutzers integriert werden, um das Auswählen von E-Mail-Adressen aus dieser Liste zu ermöglichen. In seiner einfachsten Form kann eine `email`-Eingabe wie folgt implementiert werden:

```html
<input id="emailAddress" type="email" />
```

{{ EmbedLiveSample('A_simple_email_input', 600, 40) }}

Beachten Sie, dass es als gültig angesehen wird, wenn es leer ist und wenn eine einzige korrekt formatierte E-Mail-Adresse eingegeben wird, aber ansonsten nicht als gültig angesehen wird. Durch Hinzufügen des [`required`](/de/docs/Web/HTML/Element/input#required)-Attributs werden nur korrekt geformte E-Mail-Adressen zugelassen; die Eingabe wird nicht mehr als gültig angesehen, wenn sie leer ist.

### Mehrere E-Mail-Adressen zulassen

Durch das Hinzufügen des [`multiple`](/de/docs/Web/HTML/Attributes/multiple) Boolean-Attributs kann die Eingabe so konfiguriert werden, dass sie mehrere E-Mail-Adressen akzeptiert.

```html
<input id="emailAddress" type="email" multiple />
```

{{ EmbedLiveSample('Allowing multiple email addresses', 600, 40) }}

Die Eingabe wird jetzt als gültig angesehen, wenn eine einzelne E-Mail-Adresse eingegeben wird oder wenn eine beliebige Anzahl von durch Kommas getrennten E-Mail-Adressen und optional einige Leerzeichen vorhanden sind.

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

Manchmal ist es hilfreich, einen Hinweis im Kontext anzubieten, in welcher Form die Eingabedaten vorliegen sollten. Dies kann besonders wichtig sein, wenn das Seitendesign keine beschreibenden Labels für jedes {{HTMLElement("input")}} bietet. Hier kommen die **Platzhalter** ins Spiel. Ein Platzhalter ist ein Wert, der zeigt, welche Form der `value` haben sollte, indem ein Beispiel für einen gültigen Wert angezeigt wird, der innerhalb des Bearbeitungsfelds angezeigt wird, wenn der Wert des Elements "" ist. Sobald Daten in das Feld eingegeben werden, verschwindet der Platzhalter; wenn das Feld geleert wird, erscheint der Platzhalter wieder.

Hier haben wir eine `email`-Eingabe mit dem Platzhalter `sophie@example.com`. Beachten Sie, wie der Platzhalter verschwindet und wieder erscheint, wenn Sie den Inhalt des Bearbeitungsfelds manipulieren.

```html
<input type="email" placeholder="sophie@example.com" />
```

{{ EmbedLiveSample('Placeholders', 600, 40) }}

### Steuerung der Eingabegröße

Sie können nicht nur die physische Länge des Eingabefelds steuern, sondern auch die Mindest- und Höchstlängen für den eingegebenen Text selbst.

#### Physische Eingabeelementgröße

Die physische Größe des Eingabefelds kann mit dem [`size`](/de/docs/Web/HTML/Element/input#size)-Attribut gesteuert werden. Damit können Sie angeben, wie viele Zeichen das Eingabefeld auf einmal anzeigen kann. In diesem Beispiel ist das `email`-Bearbeitungsfeld 15 Zeichen breit:

```html
<input type="email" size="15" />
```

{{ EmbedLiveSample('Physical_input_element_size', 600, 40) }}

#### Elementwertlänge

Die `size` ist unabhängig von der Längenbeschränkung für die tatsächlich eingegebene E-Mail-Adresse, sodass Sie Felder in einem kleinen Raum unterbringen können, während Sie dennoch längere E-Mail-Adressstrings eingeben können. Sie können eine Mindestlänge in Zeichen für die eingegebene E-Mail-Adresse mit Hilfe des [`minlength`](/de/docs/Web/HTML/Element/input#minlength)-Attributs festlegen; verwenden Sie entsprechend [`maxlength`](/de/docs/Web/HTML/Element/input#maxlength), um die maximale Länge der eingegebenen E-Mail-Adresse festzulegen.

Das folgende Beispiel erstellt ein 32 Zeichen breites Eingabefeld für E-Mail-Adressen, bei dem der Inhalt mindestens 3 Zeichen und höchstens 64 Zeichen lang sein muss.

```html
<input type="email" size="32" minlength="3" maxlength="64" />
```

{{EmbedLiveSample("Element_value_length", 600, 40) }}

### Standardoptionen bereitstellen

#### Einzelstandard mit dem value-Attribut bereitstellen

Wie immer können Sie einen Standardwert für ein `email`-Eingabefeld bereitstellen, indem Sie sein [`value`](/de/docs/Web/HTML/Element/input#value)-Attribut setzen:

```html
<input type="email" value="default@example.com" />
```

{{EmbedLiveSample("Providing_a_single_default_using_the_value_attribute", 600, 40)}}

#### Vorschlagswerte anbieten

Gehen Sie einen Schritt weiter, können Sie eine Liste von Standardoptionen bereitstellen, aus denen der Benutzer auswählen kann, indem Sie das [`list`](/de/docs/Web/HTML/Element/input#list)-Attribut angeben. Dies beschränkt den Benutzer nicht auf diese Optionen, ermöglicht ihm jedoch, gebräuchliche E-Mail-Adressen schneller auszuwählen. Dies bietet auch Hinweise für [`autocomplete`](/de/docs/Web/HTML/Element/input#autocomplete). Das `list`-Attribut gibt die ID eines {{HTMLElement("datalist")}} an, die wiederum ein {{HTMLElement("option")}}-Element pro vorgeschlagenem Wert enthält; der `value` jedes `option` ist der entsprechende vorgeschlagene Wert für das E-Mail-Eingabefeld.

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

Mit dem {{HTMLElement("datalist")}}-Element und seinen {{HTMLElement("option")}}s an Ort und Stelle bietet der Browser die angegebenen Werte als potenzielle Werte für die E-Mail-Adresse an; dies wird normalerweise als Popup oder Dropdown-Menü mit den Vorschlägen angezeigt. Während das spezifische Benutzererlebnis je nach Browser variieren kann, wird normalerweise durch das Klicken in das Bearbeitungsfeld ein Dropdown-Menü mit den vorgeschlagenen E-Mail-Adressen angezeigt. Dann wird beim Tippen die Liste gefiltert, um nur die passenden Werte anzuzeigen. Jedes eingegebene Zeichen verengt die Liste weiter, bis der Benutzer eine Auswahl trifft oder einen benutzerdefinierten Wert eingibt.

## Validierung

Es gibt zwei Ebenen der Inhaltsvalidierung, die für `email`-Eingaben verfügbar sind. Zuerst gibt es das Standardvalidierungsniveau, das allen {{HTMLElement("input")}}s geboten wird, das automatisch sicherstellt, dass die Inhalte den Anforderungen für eine gültige E-Mail-Adresse entsprechen. Aber es gibt auch die Möglichkeit, zusätzliche Filter hinzuzufügen, um sicherzustellen, dass Ihre speziellen Bedürfnisse erfüllt werden, falls vorhanden.

> [!WARNING]
> Die HTML-Formularvalidierung ist _kein_ Ersatz für Skripte, die sicherstellen, dass die eingegebenen Daten im richtigen Format vorliegen. Es ist viel zu einfach für jemanden, Anpassungen am HTML vorzunehmen, die es ihm ermöglichen, die Validierung zu umgehen oder komplett zu entfernen. Es ist auch möglich, dass jemand Ihr HTML vollständig umgeht und die Daten direkt an Ihren Server sendet. Wenn Ihr serverseitiger Code die empfangenen Daten nicht validiert, könnte es zu einem Desaster kommen, wenn falsch formatierte Daten (oder Daten, die zu groß sind, den falschen Typ haben usw.) in Ihre Datenbank eingegeben werden.

### Basisvalidierung

Browser bieten automatisch eine Validierung, um sicherzustellen, dass nur Text eingegeben wird, der dem Standardformat für Internet-E-Mail-Adressen entspricht. Browser verwenden einen Algorithmus, der äquivalent zu folgendem regulärem Ausdruck ist:

```js
/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
```

Um mehr darüber zu erfahren, wie die Formularvalidierung funktioniert und wie Sie die {{cssxref(":valid")}}- und {{cssxref(":invalid")}}-CSS-Eigenschaften nutzen können, um die Eingabe basierend darauf zu stylen, ob der aktuelle Wert gültig ist oder nicht, siehe [Formulardatenvalidierung](/de/docs/Learn/Forms/Form_validation).

> [!NOTE]
> Es gibt bekannte Spezifikationsprobleme im Zusammenhang mit internationalen Domain-Namen und der Validierung von E-Mail-Adressen in HTML. Siehe [W3C Bug 15489](https://www.w3.org/Bugs/Public/show_bug.cgi?id=15489) für Details.

### Muster-Validierung

Wenn Sie die eingegebene E-Mail-Adresse weiter einschränken möchten, als nur "jeder String, der wie eine E-Mail-Adresse aussieht", können Sie das [`pattern`](/de/docs/Web/HTML/Element/input#pattern)-Attribut verwenden, um einen {{Glossary("regular expression")}} anzugeben, den der Wert erfüllen muss, um gültig zu sein. Wenn das [`multiple`](/de/docs/Web/HTML/Element/input#multiple)-Attribut angegeben ist, muss jeder einzelne Eintrag in der durch Kommas getrennten Liste von Werten dem {{Glossary("regular expression")}} entsprechen.

Angenommen, Sie erstellen eine Seite für Angestellte der Best Startup Ever, Inc., die ihnen erlaubt, sich an ihre IT-Abteilung zu wenden, um Hilfe zu bekommen. In unserem vereinfachten Formular muss der Benutzer seine E-Mail-Adresse und eine Nachricht eingeben, die das Problem beschreibt, bei dem er Hilfe benötigt. Wir möchten sicherstellen, dass der Benutzer nicht nur eine gültige E-Mail-Adresse angibt, sondern aus Sicherheitsgründen auch, dass die Adresse eine interne Unternehmens-E-Mail-Adresse ist.

Da Eingaben vom Typ `email` sowohl gegen die Standard-E-Mail-Adressvalidierung als auch gegen das angegebene [`pattern`](/de/docs/Web/HTML/Element/input#pattern) validiert werden, können Sie dies einfach umsetzen. Lassen Sie uns sehen, wie:

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
    <label for="emailAddress">Ihre E-Mail-Adresse</label><br />
    <input
      id="emailAddress"
      type="email"
      size="64"
      maxlength="64"
      required
      placeholder="username@beststartupever.com"
      pattern=".+@beststartupever\.com"
      title="Bitte geben Sie nur eine Unternehmens-E-Mail-Adresse von Best Startup Ever an" />
  </div>

  <div class="messageBox">
    <label for="message">Anfrage</label><br />
    <textarea
      id="message"
      cols="80"
      rows="8"
      required
      placeholder="Meine Schuhe sind zu eng und ich habe das Tanzen vergessen."></textarea>
  </div>
  <input type="submit" value="Anfrage senden" />
</form>
```

{{EmbedLiveSample("Pattern_validation", 700, 300)}}

Unser {{HTMLElement("form")}} enthält ein {{HTMLElement("input")}} vom Typ `email` für die E-Mail-Adresse des Benutzers, ein {{HTMLElement("textarea")}}, in das der Benutzer seine IT-Anfrage eingeben kann, und ein `<input>` vom Typ [`"submit"`](/de/docs/Web/HTML/Element/input/submit), das eine Schaltfläche zum Absenden des Formulars erstellt. Jede Texteingabebox hat ein {{HTMLElement("label")}}, das mit ihr assoziiert ist, um dem Benutzer mitzuteilen, was von ihm erwartet wird.

Sehen wir uns das E-Mail-Adresseneingabefeld genauer an. Die [`size`](/de/docs/Web/HTML/Element/input#size)- und [`maxlength`](/de/docs/Web/HTML/Element/input#maxlength)-Attribute sind beide auf 64 gesetzt, um Platz für 64 Zeichen einer E-Mail-Adresse anzuzeigen und um die maximal eingegebene Zeichenanzahl auf 64 zu begrenzen. Das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut ist angegeben, wodurch es Pflicht ist, eine gültige E-Mail-Adresse anzugeben.

Ein entsprechender [`placeholder`](/de/docs/Web/HTML/Element/input#placeholder) wird bereitgestellt – `username@beststartupever.com` – um zu zeigen, was ein gültiger Eintrag wäre. Dieser String zeigt nicht nur, dass eine E-Mail-Adresse eingegeben werden sollte, sondern schlägt auch vor, dass es sich um ein Konto beststartupever.com handeln sollte. Dies zusätzlich zu der Tatsache, dass die Verwendung des Typs `email` den Text validiert, um sicherzustellen, dass er im Format einer E-Mail-Adresse ist. Wenn der Text in der Eingabebox keine E-Mail-Adresse ist, erhalten Sie eine Fehlermeldung, die so ähnlich aussieht wie diese:

![Ungültige E-Mail-Adresse im Fehlerzustand mit einem Pop-out aus dem Eingabefeld, das 'Bitte geben Sie eine E-Mail-Adresse ein' anzeigt.](enter-valid-email-address.png)

Würden wir es dabei belassen, würden wir zumindest auf legitime E-Mail-Adressen validieren. Wir wollen jedoch einen Schritt weitergehen: wir wollen sicherstellen, dass die E-Mail-Adresse tatsächlich in der Form `[username]@beststartupever.com` ist. Hier kommt [`pattern`](/de/docs/Web/HTML/Element/input#pattern) ins Spiel. Wir setzen `pattern` auf `.+@beststartupever.com`. Dieser einfache reguläre Ausdruck fordert eine Zeichenkette, die mindestens ein beliebiges Zeichen enthält, gefolgt von einem "@" und dann dem Domain-Namen "beststartupever.com".

Beachten Sie, dass dies nicht annähernd ein ausreichender Filter für gültige E-Mail-Adressen ist; er würde Dinge wie " @beststartupever.com" (beachten Sie das führende Leerzeichen) oder "@@beststartupever.com" zulassen, von denen keines gültig ist. Der Browser überprüft jedoch sowohl den Standardfilter für E-Mail-Adressen als auch unser benutzerdefiniertes Muster gegen den angegebenen Text. Dadurch erhalten wir eine Validierung, die sagt: "Stellen Sie sicher, dass dies wie eine gültige E-Mail-Adresse aussieht, und falls es eine ist, stellen Sie sicher, dass es sich auch um eine beststartupever.com-Adresse handelt."

Es ist ratsam, das [`title`](/de/docs/Web/HTML/Global_attributes#title)-Attribut zusammen mit `pattern` zu verwenden. Wenn Sie dies tun, _muss_ das `title`-Attribut das Muster beschreiben. Das bedeutet, dass es erklären sollte, welches Format die Daten haben sollten, anstatt jede andere Information. Das liegt daran, dass `title` möglicherweise als Teil einer Validierungsfehlermeldung angezeigt oder gesprochen wird. Zum Beispiel könnte der Browser die Meldung "Der eingegebene Text entspricht nicht dem erforderlichen Muster." gefolgt von Ihrem angegebenen `title` präsentieren. Wenn Ihr `title` etwas ist wie "E-Mail-Adresse", würde das Ergebnis die Meldung "Der eingegebene Text entspricht nicht dem erforderlichen Muster. E-Mail-Adresse" sein, was nicht sehr gut ist.

Deshalb geben wir stattdessen die Zeichenkette "Bitte geben Sie nur eine Unternehmens-E-Mail-Adresse von Best Startup Ever an" an. Indem wir das tun, könnte die resultierende Fehlermeldung so etwas sein wie: "Der eingegebene Text entspricht nicht dem erforderlichen Muster. Bitte geben Sie nur eine Unternehmens-E-Mail-Adresse von Best Startup Ever an."

![Eine gültige E-Mail-Adresse, aber die Eingabe ist im Fehlerstatus mit einem Pop-out aus dem Eingabefeld, das 'Der eingegebene Text entspricht nicht dem erforderlichen Muster. Bitte geben Sie nur eine Unternehmens-E-Mail-Adresse von Best Startup Ever an.' liest.](email-pattern-match-bad.png)

> [!NOTE]
> Wenn Sie beim Schreiben Ihrer Validierungsregulärausdrücke auf Probleme stoßen und sie nicht richtig funktionieren, überprüfen Sie die Konsole Ihres Browsers; dort könnten hilfreiche Fehlermeldungen zu finden sein, die Ihnen bei der Lösung des Problems helfen.

## Beispiele

Hier haben wir eine E-Mail-Eingabe mit der ID `emailAddress`, die bis zu einer maximalen Länge von 256 Zeichen erlaubt ist. Die Eingabebox selbst ist physisch 64 Zeichen breit und zeigt den Text `user@example.gov` als Platzhalter an, wann immer das Feld leer ist. Zudem ist die Box durch die Verwendung des [`multiple`](/de/docs/Web/HTML/Attributes/multiple)-Attributs so konfiguriert, dass der Benutzer null oder mehr E-Mail-Adressen eingeben kann, die durch Kommas getrennt sind, wie in [Mehrere E-Mail-Adressen zulassen](#mehrere_e-mail-adressen_zulassen) beschrieben. Als finalen Touch enthält das [`list`](/de/docs/Web/HTML/Element/input#list)-Attribut die ID eines {{HTMLElement("datalist")}}, dessen {{HTMLElement("option")}}s eine Reihe von vorgeschlagenen Werten angeben, aus denen der Benutzer auswählen kann.

Als zusätzlichen Vorteil wird das {{HTMLElement("label")}}-Element verwendet, um ein Label für das E-Mail-Eingabefeld zu erstellen, wobei sein [`for`](/de/docs/Web/HTML/Element/label#for)-Attribut auf die `emailAddress`-ID des {{HTMLElement("input")}}-Elements verweist. Durch die Assoziation der beiden Elemente auf diese Weise wird das Eingabeelement fokussiert, wenn auf das Label geklickt wird.

```html
<label for="emailAddress">E-Mail</label><br />
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
        Ein String, der eine E-Mail-Adresse oder
        leer repräsentiert
      </td>
    </tr>
    <tr>
      <td><strong>Ereignisse</strong></td>
      <td>
        {{domxref("HTMLElement/change_event", "change")}} und
        {{domxref("Element/input_event", "input")}}
      </td>
    </tr>
    <tr>
      <td><strong>Unterstützte Gemeinsame Attribute</strong></td>
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
      <td><p>{{domxref("HTMLInputElement")}}</p></td>
    </tr>
    <tr>
      <td><strong>Methoden</strong></td>
      <td>
        {{domxref("HTMLInputElement.select", "select()")}}
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
