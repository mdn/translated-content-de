---
title: <input type="email">
slug: Web/HTML/Reference/Elements/input/email
l10n:
  sourceCommit: bccce51ad7f3fd5e5ff7e4231b6391a000c8faf6
---

{{HTMLSidebar}}

{{HTMLElement("input")}} Elemente des Typs **`email`** werden verwendet, um dem Benutzer die Eingabe und Bearbeitung einer E-Mail-Adresse zu ermöglichen oder, wenn das Attribut [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple) angegeben ist, einer Liste von E-Mail-Adressen.

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

Der Eingabewert wird automatisch überprüft, um sicherzustellen, dass er entweder leer ist oder eine korrekt formatierte E-Mail-Adresse (oder Liste von Adressen) bevor das Formular gesendet werden kann. Die CSS-Pseudo-Klassen {{cssxref(":valid")}} und {{cssxref(":invalid")}} werden automatisch entsprechend angewendet, um visuell darzustellen, ob der aktuelle Wert des Feldes eine gültige E-Mail-Adresse ist oder nicht.

## Wert

Das [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Attribut des {{HTMLElement("input")}} Elements enthält eine Zeichenkette, die automatisch validiert wird, um der E-Mail-Syntax zu entsprechen. Genauer gesagt, gibt es drei mögliche Wertformate, die die Validierung bestehen:

1. Eine leere Zeichenkette ("") zeigt an, dass der Benutzer keinen Wert eingegeben hat oder dass der Wert entfernt wurde.
2. Eine einzelne korrekt formatierte E-Mail-Adresse. Das bedeutet nicht unbedingt, dass die E-Mail-Adresse existiert, aber es ist zumindest korrekt formatiert. Dies bedeutet `username@domain` oder `username@domain.tld`. Natürlich gibt es noch mehr dazu; siehe [Validierung](#validierung) für einen {{Glossary("regular_expression", "regulären Ausdruck")}}, der den Validierungsalgorithmus für E-Mail-Adressen abbildet.
3. Nur wenn das Attribut [`multiple`](/de/docs/Web/HTML/Reference/Elements/input#multiple) angegeben ist, kann der Wert eine Liste von korrekt formatierten, durch Kommas getrennten E-Mail-Adressen sein. Alle nachgestellten und führenden Leerzeichen werden von jeder Adresse in der Liste entfernt.

Siehe [Validierung](#validierung) für Details darüber, wie E-Mail-Adressen validiert werden, um sicherzustellen, dass sie korrekt formatiert sind.

## Zusätzliche Attribute

Zusätzlich zu den [globalen Attributen](/de/docs/Web/HTML/Reference/Global_attributes) und den Attributen, die auf alle {{HTMLElement("input")}} Elemente unabhängig von ihrem Typ wirken, unterstützen `email` Eingaben die folgenden Attribute.

> [!NOTE]
> Das globale Attribut [`autocorrect`](/de/docs/Web/HTML/Reference/Global_attributes/autocorrect) kann zu E-Mail-Eingaben hinzugefügt werden, aber der gespeicherte Zustand ist immer `off`.

### list

Der Wert des list-Attributs ist die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}} Elements, das sich im selben Dokument befindet. Der {{HTMLElement("datalist")}} liefert eine Liste von vordefinierten Werten, die dem Benutzer als Vorschlag für diese Eingabe angeboten werden. Alle Werte in der Liste, die nicht mit dem [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) kompatibel sind, werden nicht in die vorgeschlagenen Optionen aufgenommen. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können von dieser vordefinierten Liste auswählen oder einen anderen Wert angeben.

### maxlength

Die maximale Zeichenlänge (gemessen in UTF-16 Code-Einheiten), die der Benutzer in das `email` Eingabefeld eingeben kann. Dies muss ein ganzzahliger Wert von 0 oder höher sein. Wenn kein `maxlength` angegeben ist oder ein ungültiger Wert angegeben ist, hat die `email` Eingabe keine maximale Länge. Dieser Wert muss auch größer oder gleich dem Wert von `minlength` sein.

Die Eingabe wird die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) nicht bestehen, wenn die Länge des Textwerts des Feldes größer als `maxlength` UTF-16 Code-Einheiten ist. Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### minlength

Die minimale Zeichenlänge (gemessen in UTF-16 Code-Einheiten), die der Benutzer in das `email` Eingabefeld eingeben kann. Dies muss ein nicht-negativer ganzzahliger Wert sein, der kleiner oder gleich dem durch `maxlength` festgelegten Wert ist. Wenn kein `minlength` angegeben ist oder ein ungültiger Wert angegeben ist, hat die `email` Eingabe keine Mindestlänge.

Die Eingabe wird die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) nicht bestehen, wenn die Länge des in das Feld eingegebenen Textes weniger als `minlength` UTF-16 Code-Einheiten beträgt. Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### multiple

Ein boolesches Attribut, das, wenn es vorhanden ist, anzeigt, dass der Benutzer eine Liste von mehreren E-Mail-Adressen eingeben kann, getrennt durch Kommas und optional durch Leerzeichen. Siehe [Erlauben mehrerer E-Mail-Adressen](#erlauben_mehrerer_e-mail-adressen) für ein Beispiel oder [HTML-Attribut: multiple](/de/docs/Web/HTML/Reference/Attributes/multiple) für weitere Details.

> [!NOTE]
> Normalerweise, wenn Sie das Attribut [`required`](/de/docs/Web/HTML/Reference/Elements/input#required) angeben, muss der Benutzer eine gültige E-Mail-Adresse eingeben, damit das Feld als gültig angesehen wird. Wenn Sie jedoch das `multiple` Attribut hinzufügen, ist eine Liste von null E-Mail-Adressen (eine leere Zeichenfolge oder eine, die nur Leerzeichen enthält) ein gültiger Wert. Mit anderen Worten, der Benutzer muss nicht einmal eine E-Mail-Adresse eingeben, wenn `multiple` angegeben ist, unabhängig vom Wert von `required`.

### pattern

Das `pattern` Attribut ist ein regulärer Ausdruck, dem der [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) der Eingabe entsprechen muss, um die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) zu bestehen. Es muss ein gültiger JavaScript regulärer Ausdruck sein, wie er vom {{jsxref("RegExp")}} Typ verwendet wird und in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert ist; das `'u'` Flag wird beim Kompilieren des regulären Ausdrucks angegeben, so dass das Muster als eine Folge von Unicode Code-Punkten behandelt wird, anstatt als {{Glossary("ASCII", "ASCII")}}. Es sollten keine Schrägstriche um den Mustertext angegeben werden.

Wenn das angegebene Muster nicht angegeben oder ungültig ist, wird kein regulärer Ausdruck angewendet und dieses Attribut wird vollständig ignoriert.

> [!NOTE]
> Verwenden Sie das [`title`](/de/docs/Web/HTML/Reference/Elements/input#title) Attribut, um Text anzugeben, den die meisten Browser als Tooltip anzeigen, um zu erklären, welche Anforderungen erfüllt werden müssen, um dem Muster zu entsprechen. Sie sollten auch anderen erklärenden Text in der Nähe einfügen.

Siehe den Abschnitt [Mustervalidierung](#mustervalidierung) für Details und ein Beispiel.

### `placeholder`

Das `placeholder` Attribut ist eine Zeichenkette, die dem Benutzer einen kurzen Hinweis darauf gibt, welche Art von Informationen im Feld erwartet werden. Es sollte ein Wort oder eine kurze Phrase sein, die den erwarteten Datentyp demonstriert, statt eine erklärende Nachricht zu sein. Der Text _darf keine_ Wagenrückläufe oder Zeilenumbrüche enthalten.

Wenn der Inhalt der Steuerung eine Richtung ({{Glossary("LTR", "LTR")}} oder {{Glossary("RTL", "RTL")}}) hat, aber der Platzhalter in der entgegengesetzten Richtung präsentiert werden muss, können Sie Unicode bidi-Algarithmus-Formatierungszeichen verwenden, um die Richtung im Platzhalter zu überschreiben; siehe [So verwenden Sie Unicode-Steuerzeichen für bidi-Text](https://www.w3.org/International/questions/qa-bidi-unicode-controls) für weitere Informationen.

> [!NOTE]
> Vermeiden Sie nach Möglichkeit die Verwendung des `placeholder` Attributs. Es ist nicht so semantisch nützlich wie andere Möglichkeiten, Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Siehe [`<input>` Etiketten](/de/docs/Web/HTML/Reference/Elements/input#labels) für weitere Informationen.

### `readonly`

Ein boolesches Attribut, das, wenn es vorhanden ist, bedeutet, dass dieses Feld vom Benutzer nicht bearbeitet werden kann. Sein `value` kann jedoch immer noch durch JavaScript-Code verändert werden, indem direkt die [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) `value` Eigenschaft gesetzt wird.

> [!NOTE]
> Da ein nur-lesbares Feld keinen Wert haben kann, hat `required` keine Auswirkung auf Eingabefelder, bei denen auch das `readonly` Attribut angegeben ist.

### `size`

Das `size` Attribut ist ein Zahlenwert, der angibt, wie viele Zeichen breit das Eingabefeld sein soll. Der Wert muss eine Zahl größer als Null sein, und der Standardwert ist 20. Da Zeichenbreiten variieren, kann dies mehr oder weniger genau sein und sollte nicht darauf vertraut werden, genau so zu sein; das resultierende Eingabefeld kann schmaler oder breiter als die angegebene Anzahl von Zeichen sein, abhängig von den Zeichen und der Schriftart ({{cssxref("font")}} Einstellungen in Gebrauch).

Dies setzt _kein_ Limit für die Anzahl der Zeichen, die der Benutzer in das Feld eingeben kann. Es gibt nur an, wie viele Zeichen ungefähr gleichzeitig sichtbar sein können. Um ein oberes Limit für die Länge der Eingabedaten festzulegen, verwenden Sie das Attribut [`maxlength`](#maxlength).

## Verwendung von E-Mail-Eingaben

E-Mail-Adressen gehören mit zu den am häufigsten in Textform eingegebenen Daten im Web; sie werden verwendet, um sich auf Websites anzumelden, Informationen anzufordern, um Bestellbestätigungen zu ermöglichen, für Webmail und so weiter. Als solche kann der Eingabetyp `email` Ihre Arbeit als Webentwickler erheblich erleichtern, da er Ihre Arbeit bei der Erstellung der Benutzeroberfläche und Logik für E-Mail-Adressen vereinfachen kann. Wenn Sie eine E-Mail-Eingabe mit dem richtigen `type` Wert, `email`, erstellen, erhalten Sie eine automatische Validierung, dass der eingegebene Text zumindest in der richtigen Form vorliegt, um möglicherweise eine legitime E-Mail-Adresse zu sein. Dadurch können Fälle vermieden werden, in denen der Benutzer seine Adresse falsch eingibt oder eine ungültige Adresse angibt.

Es ist jedoch wichtig zu beachten, dass dies nicht ausreicht, um sicherzustellen, dass der angegebene Text eine E-Mail-Adresse ist, die tatsächlich existiert, zum Benutzer der Seite gehört oder in irgendeiner Weise akzeptabel ist. Es stellt sicher, dass der Wert des Feldes korrekt formatiert ist, um eine E-Mail-Adresse zu sein.

> [!NOTE]
> Es ist auch wichtig zu bedenken, dass ein Benutzer Ihre HTML im Hintergrund manipulieren kann, daher _darf_ Ihre Seite diese Validierung _nicht_ für Sicherheitszwecke verwenden. Sie _müssen_ die E-Mail-Adresse auf der Serverseite jeder Transaktion überprüfen, bei der der bereitgestellte Text irgendwelche sicherheitsrelevanten Implikationen hat.

### Eine grundlegende E-Mail-Eingabe

Derzeit implementieren alle Browser, die dieses Element implementieren, es als ein Standardtexteingabefeld mit grundlegenden Validierungsfunktionen. Die Spezifikation erlaubt den Browsern jedoch Freiheiten dabei. Zum Beispiel könnte das Element mit dem eingebauten Adressbuch des Geräts des Benutzers integriert werden, um das Auswählen von E-Mail-Adressen aus dieser Liste zu ermöglichen. In seiner grundlegendsten Form kann eine `email` Eingabe wie folgt umgesetzt werden:

```html
<input id="emailAddress" type="email" />
```

{{EmbedLiveSample('A_basic_email_input', 600, 40)}}

Beachten Sie, dass sie als gültig angesehen wird, wenn sie leer ist und wenn eine einzelne korrekt formatierte E-Mail-Adresse eingegeben wird, aber sonst nicht als gültig angesehen wird. Durch Hinzufügen des Attributs [`required`](/de/docs/Web/HTML/Reference/Elements/input#required) werden nur korrekt formatierte E-Mail-Adressen zugelassen; die Eingabe wird nicht mehr als gültig angesehen, wenn sie leer ist.

### Erlauben mehrerer E-Mail-Adressen

Durch das Hinzufügen des booleschen Attributs [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple) kann die Eingabe so konfiguriert werden, dass sie mehrere E-Mail-Adressen akzeptiert.

```html
<input id="emailAddress" type="email" multiple />
```

{{EmbedLiveSample('Allowing_multiple_email_addresses', 600, 40)}}

Die Eingabe wird nun als gültig angesehen, wenn eine einzelne E-Mail-Adresse eingegeben wird oder wenn eine beliebige Anzahl von E-Mail-Adressen, getrennt durch Kommas und optional durch Leerzeichen, vorhanden ist.

> [!NOTE]
> Wenn `multiple` verwendet wird, _ist_ es erlaubt, dass der Wert leer ist.

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

Manchmal ist es hilfreich, kontextbezogene Hinweise darauf zu geben, welche Form die Eingabedaten haben sollten. Dies kann besonders wichtig sein, wenn das Seitendesign keine beschreibenden Etiketten für jedes {{HTMLElement("input")}} bietet. Hier kommen **Platzhalter** ins Spiel. Ein Platzhalter ist ein Wert, der die Form des `value` demonstriert, indem er ein Beispiel für einen gültigen Wert darstellt, der im Bearbeitungsfeld angezeigt wird, wenn der `value` des Elements "". Sobald Daten in das Feld eingegeben werden, verschwindet der Platzhalter; wenn das Feld geleert wird, erscheint der Platzhalter erneut.

Hier haben wir eine `email` Eingabe mit dem Platzhalter `sophie@example.com`. Beachten Sie, wie der Platzhalter verschwindet und wieder erscheint, wenn Sie den Inhalt des Bearbeitungsfeldes manipulieren.

```html
<input type="email" placeholder="sophie@example.com" />
```

{{EmbedLiveSample('Placeholders', 600, 40)}}

### Steuerung der Eingabegröße

Sie können nicht nur die physische Länge des Eingabefeldes steuern, sondern auch die minimalen und maximalen Längen, die für den eingegebenen Text selbst erlaubt sind.

#### Größe des physischen Eingabeelements

Die physische Größe der Eingabebox kann durch das Attribut [`size`](/de/docs/Web/HTML/Reference/Elements/input#size) gesteuert werden. Damit können Sie die Anzahl der Zeichen angeben, die gleichzeitig im Eingabefeld angezeigt werden können. In diesem Beispiel ist die `email` Eingabe 15 Zeichen breit:

```html
<input type="email" size="15" />
```

{{EmbedLiveSample('Physical_input_element_size', 600, 40)}}

#### Länge des Elementwerts

Die `size` ist unabhängig von der Längenbegrenzung der tatsächlich eingegebenen E-Mail-Adresse, sodass Sie Felder an einen kleinen Raum anpassen können, während Sie längere E-Mail-Adressen dennoch eingeben können. Sie können eine Mindestlänge in Zeichen für die eingegebene E-Mail-Adresse mithilfe des Attributs [`minlength`](/de/docs/Web/HTML/Reference/Elements/input#minlength) angeben; verwenden Sie ebenso [`maxlength`](/de/docs/Web/HTML/Reference/Elements/input#maxlength), um die maximale Länge der eingegebenen E-Mail-Adresse festzulegen.

Das folgende Beispiel erstellt ein 32 Zeichen breites Eingabefeld für E-Mail-Adressen, wobei der Inhalt mindestens 3 Zeichen und maximal 64 Zeichen lang sein muss.

```html
<input type="email" size="32" minlength="3" maxlength="64" />
```

{{EmbedLiveSample("Element_value_length", 600, 40)}}

### Bereitstellung von Standardoptionen

#### Bereitstellung eines einzelnen Standards mit dem value-Attribut

Wie immer können Sie einen Standardwert für ein `email` Eingabefeld angeben, indem Sie dessen [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) Attribut setzen:

```html
<input type="email" value="default@example.com" />
```

{{EmbedLiveSample("Providing_a_single_default_using_the_value_attribute", 600, 40)}}

#### Vorschlagen von Werten

Einen Schritt weiter, können Sie eine Liste von Standardoptionen bereitstellen, aus denen der Benutzer auswählen kann, indem Sie das Attribut [`list`](/de/docs/Web/HTML/Reference/Elements/input#list) angeben. Dies beschränkt den Benutzer nicht auf diese Optionen, ermöglicht es ihm jedoch, häufig verwendete E-Mail-Adressen schneller auszuwählen. Dies kann auch Hinweise für [`autocomplete`](/de/docs/Web/HTML/Reference/Elements/input#autocomplete) bieten. Das `list` Attribut gibt die ID eines {{HTMLElement("datalist")}} an, der seinerseits ein {{HTMLElement("option")}} Element pro vorgeschlagenem Wert enthält; der `value` jedes `option` ist der entsprechende vorgeschlagene Wert für das E-Mail-Eingabefeld.

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

Mit dem {{HTMLElement("datalist")}} Element und seinen {{HTMLElement("option")}}s an Ort und Stelle bietet der Browser die angegebenen Werte als mögliche Werte für die E-Mail-Adresse an; dies wird normalerweise als Popup- oder Dropdown-Menü mit den Vorschlägen präsentiert. Obwohl das spezifische Benutzererlebnis je nach Browser variieren kann, wird normalerweise beim Klicken in das Bearbeitungsfeld ein Dropdown-Menü der vorgeschlagenen E-Mail-Adressen angezeigt. Dann, während der Benutzer tippt, wird die Liste gefiltert, um nur passende Werte anzuzeigen. Jedes getippte Zeichen verkleinert die Liste, bis der Benutzer eine Auswahl trifft oder einen eigenen Wert eintippt.

## Validierung

Für `email` Eingaben stehen zwei Ebenen der Inhaltsüberprüfung zur Verfügung. Erstens gibt es die standardmäßige Validierungsebene, die für alle {{HTMLElement("input")}}s angeboten wird, die automatisch sicherstellt, dass die Inhalte die Anforderungen erfüllen, um eine gültige E-Mail-Adresse zu sein. Aber es besteht auch die Möglichkeit, zusätzliche Filterung hinzuzufügen, um sicherzustellen, dass Ihre eigenen speziellen Anforderungen erfüllt sind, falls vorhanden.

> [!WARNING]
> Die HTML-Formularvalidierung ist _kein_ Ersatz für Skripte, die sicherstellen, dass die eingegebenen Daten im richtigen Format vorliegen. Es ist viel zu einfach für jemanden, Anpassungen an der HTML vorzunehmen, die es ihm ermöglichen, die Validierung zu umgehen, oder sie vollständig zu entfernen. Es ist auch möglich, dass jemand Ihre HTML vollständig umgeht und die Daten direkt an Ihren Server sendet. Wenn Ihr serverseitiger Code die empfangenen Daten nicht validiert, könnte eine Katastrophe eintreten, wenn falsch formatierte Daten (oder Daten, die zu groß sind, vom falschen Typ sind usw.) in Ihrer Datenbank eingegeben werden.

### Basisvalidierung

Browser stellen automatisch die Überprüfung bereit, um sicherzustellen, dass nur Text, der dem Standardformat für Internet-E-Mail-Adressen entspricht, in das Eingabefeld eingegeben wird. Browser verwenden einen Algorithmus, der dem folgenden regulären Ausdruck entspricht:

```js
/^[\w.!#$%&'*+/=?^`{|}~-]+@[a-z\d](?:[a-z\d-]{0,61}[a-z\d])?(?:\.[a-z\d](?:[a-z\d-]{0,61}[a-z\d])?)*$/i;
```

Um mehr über die Funktionsweise der Formularvalidierung zu erfahren und wie Sie die Eigenschaften {{cssxref(":valid")}} und {{cssxref(":invalid")}} verwenden können, um die Eingabe abhängig davon zu gestalten, ob der aktuelle Wert gültig ist oder nicht, siehe [Formulardatenvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation).

> [!NOTE]
> Es gibt bekannte Spezifikationsprobleme im Zusammenhang mit internationalen Domänennamen und der Validierung von E-Mail-Adressen in HTML. Details finden Sie in [W3C Bug 15489](https://www.w3.org/Bugs/Public/show_bug.cgi?id=15489).

### Mustervalidierung

Wenn Sie möchten, dass die eingegebene E-Mail-Adresse stärker eingeschränkt wird als nur "jede Zeichenfolge, die wie eine E-Mail-Adresse aussieht", können Sie das Attribut [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern) verwenden, um einen {{Glossary("regular_expression", "regulären Ausdruck")}} anzugeben, dem der Wert entsprechen muss, damit er gültig ist. Wenn das Attribut [`multiple`](/de/docs/Web/HTML/Reference/Elements/input#multiple) angegeben ist, muss jeder einzelne Eintrag in der durch Kommas getrennten Wertegruppe dem {{Glossary("regular_expression", "regulären Ausdruck")}} entsprechen.

Zum Beispiel nehmen wir an, Sie erstellen eine Seite für Mitarbeiter des Unternehmens Best Startup Ever, Inc., die ihnen ermöglicht, ihre IT-Abteilung um Hilfe zu bitten. In unserem vereinfachten Formular muss der Benutzer seine E-Mail-Adresse und eine Nachricht zur Beschreibung des Problems, bei dem er Hilfe benötigt, eingeben. Wir möchten sicherstellen, dass der Benutzer nicht nur eine gültige E-Mail-Adresse angibt, sondern aus Sicherheitsgründen auch verlangen, dass es sich um eine interne Unternehmens-E-Mail-Adresse handelt.

Da Eingaben vom Typ `email` sowohl gegen die Standard-E-Mail-Adressvalidierung als auch gegen das angegebene [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern) validiert werden, können Sie dies einfach umsetzen. Sehen wir uns an, wie:

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

Unser {{HTMLElement("form")}} enthält eine {{HTMLElement("input")}} vom Typ `email` für die E-Mail-Adresse des Benutzers, ein {{HTMLElement("textarea")}}, um eine Nachricht an den IT-Support einzugeben, und ein `<input>` vom Typ [`"submit"`](/de/docs/Web/HTML/Reference/Elements/input/submit), das einen Button zum Senden des Formulars erstellt. Jedes Texteingabefeld hat eine zugehörige {{HTMLElement("label")}}, um dem Benutzer mitzuteilen, was von ihm erwartet wird.

Werfen wir einen genaueren Blick auf das Eingabefeld für die E-Mail-Adresse. Seine [`size`](/de/docs/Web/HTML/Reference/Elements/input#size) und [`maxlength`](/de/docs/Web/HTML/Reference/Elements/input#maxlength) Attribute sind beide auf 64 gesetzt, um Platz für 64 Zeichen einer E-Mail-Adresse zu zeigen und die tatsächliche Eingabeanzahl auf maximal 64 Zeichen zu begrenzen. Das Attribut [`required`](/de/docs/Web/HTML/Reference/Elements/input#required) ist angegeben, um sicherzustellen, dass eine gültige E-Mail-Adresse zwingend erforderlich ist.

Ein passender [`placeholder`](/de/docs/Web/HTML/Reference/Elements/input#placeholder) ist angegeben—`username@beststartupever.com`—um zu demonstrieren, was als gültige Eingabe gilt. Diese Zeichenfolge zeigt sowohl an, dass eine E-Mail-Adresse eingegeben werden sollte, als auch, dass es sich um ein Firmenkonto bei beststartupever.com handeln sollte. Dies ist zusätzlich zu der Tatsache, dass durch die Verwendung des Typs `email` der Text validiert wird, um sicherzustellen, dass er wie eine E-Mail-Adresse formatiert ist. Wenn der Text im Eingabefeld keine E-Mail-Adresse ist, erhalten Sie eine Fehlermeldung, die etwa so aussieht:

![Invalid email address in error state with a popout from the input reading 'please enter an email address'.](enter-valid-email-address.png)

Würden wir die Dinge dort belassen, würden wir zumindest auf legitime E-Mail-Adressen validieren. Aber wir möchten einen Schritt weiter gehen: Wir wollen sicherstellen, dass die E-Mail-Adresse tatsächlich in der Form `[username]@beststartupever.com` vorliegt. Hier werden wir [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern) verwenden. Wir setzen `pattern` auf `.+@beststartupever.com`. Dieser reguläre Ausdruck verlangt eine Zeichenkette, die aus mindestens einem beliebigen Zeichen besteht, gefolgt von einem "@" und dem Domänennamen "beststartupever.com".

Beachten Sie, dass dies nicht einmal ansatzweise ein ausreichender Filter für gültige E-Mail-Adressen ist; es würde Dinge wie " @beststartupever.com" (beachten Sie das führende Leerzeichen) oder "@@beststartupever.com" zulassen, die beide nicht gültig sind. Der Browser führt jedoch sowohl den Standard-E-Mail-Adressenfilter als auch unser benutzerdefiniertes Muster gegen den angegebenen Text aus. Das Ergebnis ist eine Validierung, die besagt: "Stellen Sie sicher, dass dies wie eine gültige E-Mail-Adresse aussieht, und wenn es so ist, stellen Sie sicher, dass es sich auch um eine beststartupever.com Adresse handelt."

Es wird empfohlen, das [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title) Attribut zusammen mit `pattern` zu verwenden. Wenn Sie dies tun, muss das `title` das Muster beschreiben. Das heißt, es sollte erklären, in welchem Format die Daten vorliegen sollten und keine anderen Informationen. Das liegt daran, dass das `title` möglicherweise als Teil einer Validierungsfehlermeldung angezeigt oder gesprochen wird. Zum Beispiel könnte der Browser die Meldung "Der eingegebene Text entspricht nicht dem erforderlichen Muster." gefolgt von Ihrem angegebenen `title` präsentieren. Wenn Ihr `title` etwas wie "Email address" ist, wäre das Ergebnis die Meldung "Der eingegebene Text entspricht nicht dem erforderlichen Muster. Email address", was nicht sehr gut ist.

Deshalb geben wir stattdessen den Satz "Bitte nur eine Best Startup Ever Unternehmens-E-Mail-Adresse angeben" an. Auf diese Weise könnte die resultierende vollständige Fehlermeldung etwas sein wie "Der eingegebene Text entspricht nicht dem erforderlichen Muster. Bitte nur eine Best Startup Ever Unternehmens-E-Mail-Adresse angeben."

![A valid email address, but the input is in error state with a popout from the input reading 'The entered text doesn't match the required pattern. Please provide only a Best Startup Ever corporate email address.'](email-pattern-match-bad.png)

> [!NOTE]
> Wenn Sie auf Probleme beim Schreiben Ihrer Validierungsregulären Ausdrücke stoßen und diese nicht richtig funktionieren, überprüfen Sie die Konsole Ihres Browsers; dort können hilfreiche Fehlermeldungen vorhanden sein, die Ihnen bei der Lösung des Problems helfen.

## Beispiele

Hier haben wir eine E-Mail-Eingabe mit der ID `emailAddress`, die bis zu maximal 256 Zeichen lang sein darf. Die Eingabebox selbst ist physisch 64 Zeichen breit und zeigt den Text `user@example.gov` als Platzhalter an, wann immer das Feld leer ist. Zusätzlich dazu, durch die Verwendung des Attributs [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple), ist die Box konfiguriert, um dem Benutzer zu erlauben, null oder mehr E-Mail-Adressen einzugeben, getrennt durch Kommas, wie im Abschnitt [Erlauben mehrerer E-Mail-Adressen](#erlauben_mehrerer_e-mail-adressen) beschrieben. Als zusätzlichen Touch wird das {{HTMLElement("label")}} Element verwendet, um ein Etikett für das E-Mail-Eingabefeld festzulegen, bei dem sein [`for`](/de/docs/Web/HTML/Reference/Elements/label#for) Attribut auf die `emailAddress` ID des {{HTMLElement("input")}} Elements verweist. Indem die beiden Elemente auf diese Weise verknüpft werden, wird beim Klicken auf das Etikett das Eingabefeld fokussiert.

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
      <td><strong>Methoden</strong></td>
      <td>
        [`select()`](/de/docs/Web/API/HTMLInputElement/select)
      </td>
    </tr>
    <tr>
      <td><strong>Implizierte ARIA-Rolle</strong></td>
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
