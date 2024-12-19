---
title: <input type="email">
slug: Web/HTML/Element/input/email
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{HTMLSidebar}}

{{HTMLElement("input")}} Elemente vom Typ **`email`** werden verwendet, um dem Benutzer die Eingabe und Bearbeitung einer E-Mail-Adresse oder, wenn das [`multiple`](/de/docs/Web/HTML/Attributes/multiple) Attribut angegeben ist, einer Liste von E-Mail-Adressen zu ermöglichen.

{{EmbedInteractiveExample("pages/tabbed/input-email.html", "tabbed-shorter")}}

Der Eingabewert wird automatisch validiert, um sicherzustellen, dass er entweder leer ist oder eine korrekt formatierte E-Mail-Adresse (oder Liste von Adressen) enthält, bevor das Formular gesendet werden kann. Die CSS-Pseudoklassen {{cssxref(":valid")}} und {{cssxref(":invalid")}} werden automatisch angewendet, um visuell anzuzeigen, ob der aktuelle Wert des Feldes eine gültige E-Mail-Adresse ist oder nicht.

## Wert

Das Attribut [`value`](/de/docs/Web/HTML/Element/input#value) des {{HTMLElement("input")}} Elements enthält einen String, der automatisch darauf validiert wird, der E-Mail-Syntax zu entsprechen. Es gibt dabei drei mögliche Wertformate, die die Validierung passieren:

1. Ein leerer String („“), der anzeigt, dass der Benutzer keinen Wert eingegeben hat oder dass der Wert entfernt wurde.
2. Eine einzelne korrekt geformte E-Mail-Adresse. Dies bedeutet nicht notwendigerweise, dass die E-Mail-Adresse existiert, aber sie ist zumindest korrekt formatiert. Einfach ausgedrückt bedeutet das `username@domain` oder `username@domain.tld`. Natürlich gibt es dazu mehr zu sagen; siehe [Validierung](#validierung) für einen {{Glossary("regular_expression", "regulären Ausdruck")}}, der dem E-Mail-Adressen-Validierungsalgorithmus entspricht.
3. Falls und nur wenn das [`multiple`](/de/docs/Web/HTML/Element/input#multiple) Attribut angegeben ist, kann der Wert eine Liste von korrekt geformten, durch Kommata getrennten E-Mail-Adressen sein. Alle führenden und nachfolgenden Leerzeichen werden von jeder Adresse in der Liste entfernt.

Siehe [Validierung](#validierung) für Details, wie E-Mail-Adressen validiert werden, um sicherzustellen, dass sie korrekt formatiert sind.

## Zusätzliche Attribute

Zusätzlich zu den [globalen Attributen](/de/docs/Web/HTML/Global_attributes) und den Attributen, die auf alle {{HTMLElement("input")}} Elemente unabhängig von ihrem Typ angewendet werden, unterstützen `email` Inputs die folgenden Attribute.

> [!NOTE]
> Das globale Attribut [`autocorrect`](/de/docs/Web/HTML/Global_attributes/autocorrect) kann zu E-Mail-Eingaben hinzugefügt werden, der gespeicherte Zustand ist jedoch immer `off`.

### list

Der Wert des `list` Attributs ist die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}} Elements, das sich im selben Dokument befindet. Der {{HTMLElement("datalist")}} bietet eine Liste von vordefinierten Werten an, um dem Benutzer Vorschläge für diese Eingabe zu machen. Alle Werte in der Liste, die nicht mit dem [`type`](/de/docs/Web/HTML/Element/input#type) kompatibel sind, werden nicht in die vorgeschlagenen Optionen aufgenommen. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert angeben.

### maxlength

Die maximale Zeichenlänge (gemessen in UTF-16 Codedpunkten), die der Benutzer in die `email` Eingabe eingeben kann. Dies muss ein ganzzahliger Wert von 0 oder höher sein. Wenn kein `maxlength` angegeben ist oder ein ungültiger Wert angegeben ist, hat die `email` Eingabe keine maximale Länge. Dieser Wert muss auch größer oder gleich dem Wert von `minlength` sein.

Die Eingabe wird die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) nicht bestehen, wenn die Länge des Textwerts des Feldes länger als `maxlength` UTF-16 Codedpunkte ist. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### minlength

Die minimale Zeichenlänge (gemessen in UTF-16 Codedpunkten), die der Benutzer in die `email` Eingabe eingeben kann. Dies muss ein nicht-negativer Ganzzahlenwert kleiner oder gleich dem durch `maxlength` angegebenen Wert sein. Wenn kein `minlength` angegeben ist oder ein ungültiger Wert angegeben ist, hat die `email` Eingabe keine minimale Länge.

Die Eingabe wird die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) nicht bestehen, wenn die Länge des in das Feld eingegebenen Textes kürzer als `minlength` UTF-16 Codedpunkte ist. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### multiple

Ein boolesches Attribut, das, falls vorhanden, anzeigt, dass der Benutzer eine Liste mehrerer durch Kommas getrennte E-Mail-Adressen eingeben kann, optional mit Leerzeichenzeichen. Siehe [Mehrere E-Mail-Adressen ermöglichen](#mehrere_e-mail-adressen_ermöglichen) für ein Beispiel oder [HTML-Attribut: multiple](/de/docs/Web/HTML/Attributes/multiple) für mehr Details.

> [!NOTE]
> Normalerweise, wenn Sie das [`required`](/de/docs/Web/HTML/Element/input#required) Attribut angeben, muss der Benutzer eine gültige E-Mail-Adresse eingeben, damit das Feld als gültig betrachtet wird. Wenn Sie jedoch das `multiple` Attribut hinzufügen, ist eine Liste von null E-Mail-Adressen (ein leerer String oder einer, der vollständig Leerzeichen enthält) ein gültiger Wert. Mit anderen Worten, der Benutzer muss nicht einmal eine E-Mail-Adresse eingeben, wenn `multiple` angegeben ist, unabhängig vom Wert von `required`.

### pattern

Das `pattern` Attribut, wenn angegeben, ist ein regulärer Ausdruck, den der `value` des Inputs erfüllen muss, um die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) zu bestehen. Es muss ein gültiger JavaScript regulärer Ausdruck sein, wie er von dem {{jsxref("RegExp")}} Typ verwendet wird, und es wird in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert; das `'u'` Flag wird zum Kompilieren des regulären Ausdrucks angegeben, sodass das Muster als Sequenz von Unicode Codepunkten behandelt wird, anstelle von {{Glossary("ASCII", "ASCII")}}. Es sollten keine Schrägstriche um den Mustertext angegeben werden.

Wenn das angegebene Muster nicht angegeben oder ungültig ist, wird kein regulärer Ausdruck angewendet und dieses Attribut vollständig ignoriert.

> [!NOTE]
> Verwenden Sie das [`title`](/de/docs/Web/HTML/Element/input#title) Attribut, um Text festzulegen, der von den meisten Browsern als Tooltip angezeigt wird, um zu erklären, welche Anforderungen erfüllt werden müssen, um dem Muster zu entsprechen. Sie sollten auch anderen erklärenden Text in der Nähe einschließen.

Siehe den Abschnitt [Mustervalidierung](#mustervalidierung) für Details und ein Beispiel.

### `placeholder`

Das `placeholder` Attribut ist ein String, der dem Benutzer einen kurzen Hinweis darauf gibt, welche Art von Information im Feld erwartet wird. Es sollte ein Wort oder eine kurze Phrase sein, die den erwarteten Datentyp demonstriert, anstatt einer erklärenden Nachricht. Der Text _darf keine_ Wagenrückläufe oder Zeilenumbrüche enthalten.

Wenn der Inhalt der Steuerung eine Richtung ({{Glossary("LTR", "LTR")}} oder {{Glossary("RTL", "RTL")}}) hat, aber der Platzhalter in der entgegengesetzten Richtung präsentiert werden muss, können Sie Unicode-Algorithmus Zeichen zur bi-direktionalen Formatierung verwenden, um die Richtung innerhalb des Platzhalters zu überschreiben; siehe [Wie man Unicode-Kontrollen für bidi-Text verwendet](https://www.w3.org/International/questions/qa-bidi-unicode-controls) für weitere Informationen.

> [!NOTE]
> Vermeiden Sie die Verwendung des `placeholder` Attributs, wenn Sie können. Es ist nicht so semantisch nützlich wie andere Wege, um Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Siehe [`<input>` Labels](/de/docs/Web/HTML/Element/input#labels) für mehr Informationen.

### `readonly`

Ein boolesches Attribut, das, falls vorhanden, bedeutet, dass dieses Feld vom Benutzer nicht bearbeitet werden kann. Sein `value` kann jedoch weiterhin durch JavaScript-Code direkt durch Setzen der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) `value` Eigenschaft geändert werden.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keine Wirkung auf Eingaben mit dem zusätzlich angegebenen `readonly` Attribut.

### `size`

Das `size` Attribut ist ein numerischer Wert, der angibt, wie viele Zeichen breit das Eingabefeld sein soll. Der Wert muss eine Zahl größer als null sein, und der Standardwert ist 20. Da sich Zeichenbreiten unterscheiden, kann dies ungefähr sein und sollte nicht darauf verlassen werden; die resultierende Eingabe kann schmaler oder breiter als die angegebene Anzahl von Zeichen sein, abhängig von den Zeichen und der Schriftart ({{cssxref("font")}} Einstellungen, die verwendet werden).

Dies setzt _keine_ Begrenzung, wie viele Zeichen der Benutzer in das Feld eingeben kann. Es gibt nur ungefähr an, wie viele auf einmal gesehen werden können. Um eine Obergrenze für die Länge der Eingabedaten festzulegen, verwenden Sie das [`maxlength`](#maxlength) Attribut.

## Verwendung von E-Mail-Eingaben

E-Mail-Adressen gehören zu den am häufigsten eingegebenen textuellen Datenformen im Web; sie werden beim Einloggen auf Websites, bei Informationsanfragen, zur Bestellbestätigung, für Webmail usw. verwendet. Daher kann der `email` Eingabetyp Ihre Arbeit als Webentwickler erheblich erleichtern, da er Ihnen helfen kann, Ihre Arbeit bei der Erstellung der Benutzeroberfläche und der Logik für E-Mail-Adressen zu vereinfachen. Wenn Sie ein E-Mail-Eingabefeld mit dem richtigen `type` Wert `email` erstellen, erhalten Sie eine automatische Validierung, dass der eingegebene Text mindestens die richtige Form hat, um potenziell eine legitime E-Mail-Adresse zu sein. Dies kann dazu beitragen, Fälle zu vermeiden, in denen der Benutzer seine Adresse falsch eingibt oder eine ungültige Adresse angibt.

Es ist jedoch wichtig zu beachten, dass dies nicht ausreicht, um sicherzustellen, dass der angegebene Text eine tatsächlich existierende E-Mail-Adresse ist, die dem Benutzer der Website entspricht oder in anderer Weise akzeptabel ist. Es stellt sicher, dass der Wert des Feldes richtig formatiert ist, um eine E-Mail-Adresse zu sein.

> [!NOTE]
> Es ist auch entscheidend zu beachten, dass ein Benutzer Ihr HTML hinter den Kulissen manipulieren kann, sodass Ihre Website _diese Validierung nicht_ für Sicherheitszwecke verwenden darf. Sie _müssen_ die E-Mail-Adresse auf der Serverseite jeder Transaktion verifizieren, bei der der bereitgestellte Text Sicherheitsimplikationen jeglicher Art haben könnte.

### Ein grundlegendes E-Mail-Input

Derzeit implementieren alle Browser, die dieses Element implementieren, es als standardmäßiges Texteingabefeld mit grundlegenden Validierungsfunktionen. Die Spezifikation erlaubt Browsern jedoch Spielraum dabei. Zum Beispiel könnte das Element in das eingebaute Adressbuch des Geräts des Benutzers integriert werden, um das Auswählen von E-Mail-Adressen aus dieser Liste zu ermöglichen. In seiner grundlegendsten Form kann ein `email` Eingabefeld so implementiert werden:

```html
<input id="emailAddress" type="email" />
```

{{ EmbedLiveSample('A_basic_email_input', 600, 40) }}

Beachten Sie, dass es als gültig angesehen wird, wenn es leer ist und wenn eine einzelne korrekt formatierte E-Mail-Adresse eingegeben wird, aber ansonsten nicht als gültig angesehen wird. Durch Hinzufügen des [`required`](/de/docs/Web/HTML/Element/input#required) Attributs sind nur korrekt formatierte E-Mail-Adressen erlaubt; die Eingabe wird nicht mehr als gültig betrachtet, wenn sie leer ist.

### Mehrere E-Mail-Adressen ermöglichen

Durch das Hinzufügen des [`multiple`](/de/docs/Web/HTML/Attributes/multiple) booleschen Attributs kann die Eingabe so konfiguriert werden, dass sie mehrere E-Mail-Adressen akzeptiert.

```html
<input id="emailAddress" type="email" multiple />
```

{{ EmbedLiveSample('Allowing multiple email addresses', 600, 40) }}

Die Eingabe wird jetzt als gültig angesehen, wenn eine einzelne E-Mail-Adresse eingegeben wird oder wenn eine beliebige Anzahl von E-Mail-Adressen, getrennt durch Kommas und optional durch einige Leerzeichenzeichen, vorhanden ist.

> [!NOTE]
> Wenn `multiple` verwendet wird, darf der Wert _leer_ sein.

Einige Beispiele gültiger Strings, wenn `multiple` angegeben ist:

- `""`
- `"me@example"`
- `"me@example.org"`
- `"me@example.org,you@example.org"`
- `"me@example.org, you@example.org"`
- `"me@example.org,you@example.org, us@example.org"`

Einige Beispiele ungültiger Strings:

- `","`
- `"me"`
- `"me@example.org you@example.org"`

### Platzhalter

Manchmal ist es hilfreich, einen kontextbezogenen Hinweis darauf zu geben, in welcher Form die Eingabedaten vorliegen sollten. Dies kann besonders wichtig sein, wenn das Seitendesign nicht für jedes {{HTMLElement("input")}} beschreibende Labels bietet. Hier kommen **Platzhalter** ins Spiel. Ein Platzhalter ist ein Wert, der zeigt, in welcher Form der `value` vorliegen sollte, indem er ein Beispiel für einen gültigen Wert darstellt, der innerhalb des Bearbeitungsfelds angezeigt wird, wenn der `value` des Elements "" ist. Sobald Daten in das Feld eingegeben werden, verschwindet der Platzhalter; wenn das Feld geleert wird, erscheint der Platzhalter wieder.

Hier haben wir ein `email` Eingabefeld mit dem Platzhalter `sophie@example.com`. Beachten Sie, wie der Platzhalter verschwindet und wieder erscheint, während Sie den Inhalt des Bearbeitungsfelds verändern.

```html
<input type="email" placeholder="sophie@example.com" />
```

{{ EmbedLiveSample('Placeholders', 600, 40) }}

### Steuern der Eingabegröße

Sie können nicht nur die physische Länge des Eingabefelds steuern, sondern auch die minimal und maximal erlaubte Länge für den Eingabetext selbst.

#### Physische Größe des Eingabeelements

Die physische Größe des Eingabefelds kann mit dem [`size`](/de/docs/Web/HTML/Element/input#size) Attribut gesteuert werden. Damit können Sie die Anzahl der Zeichen angeben, die das Eingabefeld gleichzeitig anzeigen kann. In diesem Beispiel ist das `email` Bearbeitungsfeld 15 Zeichen breit:

```html
<input type="email" size="15" />
```

{{ EmbedLiveSample('Physical_input_element_size', 600, 40) }}

#### Elementwert-Länge

Die `size` ist getrennt von der Längenbeschränkung für die tatsächlich eingegebene E-Mail-Adresse, sodass Sie Felder in einen kleinen Raum einpassen können und dennoch längere E-Mail-Adresszeichenfolgen eingegeben werden können. Sie können eine Mindestlänge in Zeichen für die eingegebene E-Mail-Adresse mit dem [`minlength`](/de/docs/Web/HTML/Element/input#minlength) Attribut angeben; ebenso verwenden Sie [`maxlength`](/de/docs/Web/HTML/Element/input#maxlength), um die maximale Länge der eingegebenen E-Mail-Adresse festzulegen.

Das Beispiel unten erstellt eine 32 Zeichen breite E-Mail-Adresseingabebox, die verlangt, dass der Inhalt nicht kürzer als 3 Zeichen und nicht länger als 64 Zeichen ist.

```html
<input type="email" size="32" minlength="3" maxlength="64" />
```

{{EmbedLiveSample("Element_value_length", 600, 40) }}

### Bereitstellen von Standardoptionen

#### Bereitstellung eines einzelnen Standardwerts mit dem value Attribut

Wie immer können Sie einen Standardwert für ein `email` Eingabefeld bereitstellen, indem Sie sein [`value`](/de/docs/Web/HTML/Element/input#value) Attribut setzen:

```html
<input type="email" value="default@example.com" />
```

{{EmbedLiveSample("Providing_a_single_default_using_the_value_attribute", 600, 40)}}

#### Vorschläge anbieten

Noch einen Schritt weiter, Sie können eine Liste von Standardoptionen anbieten, aus denen der Benutzer auswählen kann, indem Sie das [`list`](/de/docs/Web/HTML/Element/input#list) Attribut angeben. Dies schränkt den Benutzer nicht auf diese Optionen ein, ermöglicht ihm jedoch, häufiger verwendete E-Mail-Adressen schneller auszuwählen. Dies bietet auch Hinweise für [`autocomplete`](/de/docs/Web/HTML/Element/input#autocomplete). Das `list` Attribut gibt die ID einer {{HTMLElement("datalist")}} an, die wiederum ein {{HTMLElement("option")}} Element pro vorgeschlagenem Wert enthält; jeder `option` `value` ist der entsprechende vorgeschlagene Wert für das E-Mail-Eingabefeld.

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

Mit dem {{HTMLElement("datalist")}} Element und seinen {{HTMLElement("option")}}s an Ort und Stelle, wird der Browser die angegebenen Werte als mögliche Werte für die E-Mail-Adresse anbieten; dies wird typischerweise als Popup oder Dropdown-Menü präsentiert, das die Vorschläge enthält. Während die spezifische Benutzererfahrung von einem Browser zum anderen variieren kann, wird typischerweise durch Klicken in das Bearbeitungsfeld ein Dropdown der vorgeschlagenen E-Mail-Adressen präsentiert. Dann, während der Benutzer tippt, wird die Liste gefiltert, um nur übereinstimmende Werte anzuzeigen. Jeder getippte Buchstabe verkleinert die Liste, bis der Benutzer eine Auswahl trifft oder einen benutzerdefinierten Wert eingibt.

## Validierung

Für `email` Eingaben stehen zwei Ebenen der Inhaltsvalidierung zur Verfügung. Zuerst gibt es die Standardvalidierungsebene, die für alle {{HTMLElement("input")}}s angeboten wird und die automatisch sicherstellt, dass der Inhalt den Anforderungen entspricht, um eine gültige E-Mail-Adresse zu sein. Aber es gibt auch die Option, zusätzliche Filterung hinzuzufügen, um sicherzustellen, dass Ihre eigenen speziellen Anforderungen erfüllt werden, falls Sie welche haben.

> [!WARNING]
> HTML-Formularvalidierung ist _kein_ Ersatz für Skripte, die sicherstellen, dass die eingegebenen Daten im richtigen Format vorliegen. Es ist viel zu einfach für jemanden, Anpassungen am HTML vorzunehmen, die es ihm ermöglichen, die Validierung zu umgehen oder sie komplett zu entfernen. Es ist auch möglich, dass jemand Ihr HTML vollständig umgeht und die Daten direkt an Ihren Server übermittelt. Wenn Ihr serverseitiger Code die empfangenen Daten nicht validiert, könnte es zu einem Desaster kommen, wenn falsch formatierte Daten (oder Daten, die zu groß sind, den falschen Typ haben usw.) in Ihre Datenbank eingegeben werden.

### Basisvalidierung

Browser bieten automatisch Validierung, um sicherzustellen, dass nur Texteingaben, die dem Standardformat für Internet-E-Mail-Adressen entsprechen, in das Eingabefeld eingegeben werden. Browser verwenden einen Algorithmus, der einem der folgenden regulären Ausdrücke entspricht:

```js
/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
```

Um mehr darüber zu erfahren, wie Formularvalidierung funktioniert und wie Sie die {{cssxref(":valid")}} und {{cssxref(":invalid")}} CSS-Eigenschaften nutzen können, um die Eingabe basierend darauf zu stylen, ob der aktuelle Wert gültig ist, siehe [Formulardatenvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation).

> [!NOTE]
> Es gibt bekannte Spezifikationsprobleme im Zusammenhang mit internationalen Domain-Namen und der Validierung von E-Mail-Adressen in HTML. Siehe [W3C Fehler 15489](https://www.w3.org/Bugs/Public/show_bug.cgi?id=15489) für Details.

### Mustervalidierung

Wenn Sie möchten, dass die eingegebene E-Mail-Adresse stärker eingeschränkt wird als nur „jeder String, der wie eine E-Mail-Adresse aussieht“, können Sie das [`pattern`](/de/docs/Web/HTML/Element/input#pattern) Attribut verwenden, um einen {{Glossary("regular_expression", "regulären Ausdruck")}} anzugeben, den der Wert erfüllen muss, um gültige zu sein. Wenn das [`multiple`](/de/docs/Web/HTML/Element/input#multiple) Attribut angegeben ist, muss jeder einzelne Eintrag in der kommaseparierten Liste von Werten dem {{Glossary("regular_expression", "regulären Ausdruck")}} entsprechen.

Angenommen, Sie erstellen eine Seite für Mitarbeiter von Best Startup Ever, Inc., die es ihnen ermöglicht, ihre IT-Abteilung um Hilfe zu bitten. In unserem vereinfachten Formular muss der Benutzer seine E-Mail-Adresse eingeben und eine Nachricht beschreiben, für die er Hilfe benötigt. Wir wollen sicherstellen, dass der Benutzer nicht nur eine gültige E-Mail-Adresse angibt, sondern aus Sicherheitsgründen verlangen, dass die Adresse eine interne Unternehmens-E-Mail-Adresse ist.

Da Eingaben vom Typ `email` sowohl gegen die Standard-E-Mail-Adressvalidierung als auch das angegebene [`pattern`](/de/docs/Web/HTML/Element/input#pattern) validiert werden, können Sie dies einfach umsetzen. Sehen wir uns an, wie:

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

Unser {{HTMLElement("form")}} enthält ein {{HTMLElement("input")}} vom Typ `email` für die E-Mail-Adresse des Benutzers, ein {{HTMLElement("textarea")}} zum Eingeben ihrer Nachricht an die IT und ein `<input>` vom Typ [`"submit"`](/de/docs/Web/HTML/Element/input/submit), das einen Button zum Abschicken des Formulars erstellt. Jedes Texteingabefeld hat ein {{HTMLElement("label")}} zugeordnet, um dem Benutzer mitzuteilen, was von ihm erwartet wird.

Werfen wir einen genaueren Blick auf das E-Mail-Adressen-Eingabefeld. Seine [`size`](/de/docs/Web/HTML/Element/input#size) und [`maxlength`](/de/docs/Web/HTML/Element/input#maxlength) Attribute sind beide auf 64 eingestellt, um Platz für 64 Zeichen einer E-Mail-Adresse zu zeigen und um die Anzahl der tatsächlich eingegebenen Zeichen auf maximal 64 zu begrenzen. Das [`required`](/de/docs/Web/HTML/Element/input#required) Attribut ist angegeben, was es zwingend macht, dass eine gültige E-Mail-Adresse bereitgestellt wird.

Ein entsprechender [`placeholder`](/de/docs/Web/HTML/Element/input#placeholder) ist bereitgestellt—`username@beststartupever.com`—um zu demonstrieren, was einen gültigen Eintrag ausmacht. Dieser String zeigt sowohl, dass eine E-Mail-Adresse eingegeben werden sollte, als auch legt nahe, dass es sich um ein Unternehmens-Beststartupever.com-Konto handeln sollte. Dies ist zusätzlich zu der Tatsache, dass die Verwendung des Typs `email` den Text validiert, um sicherzustellen, dass er als E-Mail-Adresse formatiert ist. Wenn der Text im Eingabefeld keine E-Mail-Adresse ist, erhalten Sie eine Fehlermeldung, die etwa so aussieht:

![Ungültige E-Mail-Adresse im Fehlerzustand mit einem Tooltip vom Eingabefeld, der 'Bitte geben Sie eine E-Mail-Adresse ein' liest.](enter-valid-email-address.png)

Wenn wir es dabei belassen würden, würden wir zumindest auf legitime E-Mail-Adressen validieren. Aber wir möchten noch einen Schritt weiter gehen: Wir möchten sicherstellen, dass die E-Mail-Adresse tatsächlich in der Form `[username]@beststartupever.com` vorliegt. Hier werden wir [`pattern`](/de/docs/Web/HTML/Element/input#pattern) verwenden. Wir setzen `pattern` auf `.+@beststartupever.com`. Dieser reguläre Ausdruck fordert einen String, der aus mindestens einem beliebigen Zeichen besteht, gefolgt von einem „@“ und dem Domainnamen „beststartupever.com“.

Beachten Sie, dass dies keineswegs ein ausreichender Filter für gültige E-Mail-Adressen ist; er würde Dinge wie „@beststartupever.com“ (beachten Sie das führende Leerzeichen) oder „@@beststartupever.com“ zulassen, die beide nicht gültig sind. Der Browser führt jedoch sowohl den standardmäßigen E-Mail-Adressfilter als auch unser benutzerdefiniertes Muster gegen den angegebenen Text aus. Als Ergebnis erhalten wir eine Validierung, die sagt „Stelle sicher, dass dies wie eine gültige E-Mail-Adresse aussieht und wenn dies der Fall ist, stelle sicher, dass es sich auch um eine beststartupever.com-Adresse handelt.“

Es ist ratsam, das [`title`](/de/docs/Web/HTML/Global_attributes/title) Attribut zusammen mit `pattern` zu verwenden. Wenn Sie dies tun, _muss_ das `title` den Muster beschreiben. Das heißt, es sollte erklären, in welchem Format die Daten sein sollten, anstatt jegliche andere Informationen. Das liegt daran, dass das `title` als Teil einer Validierungsfehlermeldung angezeigt oder gesprochen werden könnte. Zum Beispiel könnte der Browser die Nachricht „Der eingegebene Text entspricht nicht dem erforderlichen Muster“ anzeigen. gefolgt von Ihrem angegebenen `title`. Wenn Ihr `title` beispielsweise „E-Mail-Adresse“ lautet, würde die resultierende Meldung „Der eingegebene Text entspricht nicht dem erforderlichen Muster. E-Mail-Adresse“, was nicht sehr gut ist.

Deshalb geben wir stattdessen die Zeichenfolge „Bitte geben Sie nur eine Best Startup Ever Unternehmens-E-Mail-Adresse ein“ an. Dadurch könnte die resultierende vollständige Fehlermeldung etwa lauten „Der eingegebene Text entspricht nicht dem erforderlichen Muster. Bitte geben Sie nur eine Best Startup Ever Unternehmens-E-Mail-Adresse ein.“

![Eine gültige E-Mail-Adresse, jedoch im Fehlerzustand mit einem Tooltip vom Eingabefeld, der 'Der eingegebene Text entspricht nicht dem erforderlichen Muster. Bitte geben Sie nur eine Best Startup Ever Unternehmens-E-Mail-Adresse ein.' liest.](email-pattern-match-bad.png)

> [!NOTE]
> Wenn Sie beim Schreiben Ihrer Validierungsregulären Ausdrücke auf Probleme stoßen und diese nicht richtig funktionieren, überprüfen Sie die Konsole Ihres Browsers; dort könnten hilfreiche Fehlermeldungen sein, die Ihnen bei der Lösung des Problems helfen.

## Beispiele

Hier haben wir ein E-Mail-Eingabefeld mit der ID `emailAddress`, das eine maximale Länge von 256 Zeichen haben darf. Das Eingabefeld selbst ist physisch 64 Zeichen breit und zeigt den Text `user@example.gov` als Platzhalter an, sobald das Feld leer ist. Zusätzlich, durch die Verwendung des [`multiple`](/de/docs/Web/HTML/Attributes/multiple) Attributs, ist das Feld so konfiguriert, dass es dem Benutzer erlaubt, null oder mehr E-Mail-Adressen einzugeben, getrennt durch Kommas, wie in [Mehrere E-Mail-Adressen ermöglichen](#mehrere_e-mail-adressen_ermöglichen) beschrieben. Als letzten Schliff enthält das [`list`](/de/docs/Web/HTML/Element/input#list) Attribut die ID eines {{HTMLElement("datalist")}}, dessen {{HTMLElement("option")}}s eine Reihe von vorgeschlagenen Werten angeben, aus denen der Benutzer wählen kann.

Als zusätzliche Feinheit wird das {{HTMLElement("label")}} Element verwendet, um ein Label für das E-Mail-Eingabefeld festzulegen, indem sein [`for`](/de/docs/Web/HTML/Element/label#for) Attribut auf die `emailAddress` ID des {{HTMLElement("input")}} Elements verweist. Durch diese Assoziation der beiden Elemente wird der Eingabefokus auf das Elemente gesetzt, wenn Sie auf das Label klicken.

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

## Technische Übersicht

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>
        Ein String, der eine E-Mail-Adresse repräsentiert, oder
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
      <td><strong>Methoden</strong></td>
      <td>
        [`select()`](/de/docs/Web/API/HTMLInputElement/select)
      </td>
    </tr>
    <tr>
      <td><strong>Implizite ARIA-Rolle</strong></td>
      <td>
        ohne <code>list</code> Attribut:
        <code><a href="/de/docs/Web/Accessibility/ARIA/Roles/textbox_role">textbox</a></code><br />
        mit <code>list</code> Attribut: <code><a href="/de/docs/Web/Accessibility/ARIA/Roles/combobox_role">combobox</a></code>
      </td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTML Formulare Leitfaden](/de/docs/Learn_web_development/Extensions/Forms)
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
