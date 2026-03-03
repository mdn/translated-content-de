---
title: <input type="email">
slug: Web/HTML/Reference/Elements/input/email
l10n:
  sourceCommit: 5c7a1a6c3ccd8d2b22771f5d2bea050a207ec0f1
---

{{HTMLElement("input")}}-Elemente des Typs **`email`** werden verwendet, um dem Benutzer das Eingeben und Bearbeiten einer E-Mail-Adresse oder, falls das [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple)-Attribut angegeben ist, einer Liste von E-Mail-Adressen zu ermöglichen.

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

Der Eingabewert wird automatisch validiert, um sicherzustellen, dass er entweder leer oder eine richtig formatierte E-Mail-Adresse (oder Liste von Adressen) ist, bevor das Formular gesendet werden kann. Die {{cssxref(":valid")}} und {{cssxref(":invalid")}} CSS-Pseudoklassen werden automatisch angewendet, um visuell anzuzeigen, ob der aktuelle Wert des Feldes eine gültige E-Mail-Adresse ist oder nicht.

## Wert

Das [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Attribut des {{HTMLElement("input")}}-Elements enthält einen String, der automatisch als konform mit der E-Mail-Syntax validiert wird. Genauer gesagt gibt es drei mögliche Wertformate, die die Validierung bestehen:

1. Ein leerer String (""), der angibt, dass der Benutzer keinen Wert eingegeben hat oder dass der Wert entfernt wurde.
2. Eine einzelne korrekt geformte E-Mail-Adresse. Das bedeutet nicht unbedingt, dass die E-Mail-Adresse existiert, aber sie ist zumindest richtig formatiert. Dies bedeutet `benutzername@domain` oder `benutzername@domain.tld`. Natürlich gibt es noch mehr dazu; siehe [Validierung](#validierung) für einen {{Glossary("regular_expression", "regulären Ausdruck")}}, der den Algorithmus zur E-Mail-Adressen-Validierung beschreibt.
3. Nur wenn das [`multiple`](/de/docs/Web/HTML/Reference/Elements/input#multiple)-Attribut angegeben ist, kann der Wert eine Liste von korrekt geformten, durch Kommas getrennten E-Mail-Adressen sein. Jegliche führenden und nachfolgenden Leerzeichen werden aus jeder Adresse in der Liste entfernt.

Siehe [Validierung](#validierung) für Details dazu, wie E-Mail-Adressen validiert werden, um sicherzustellen, dass sie richtig formatiert sind.

## Zusätzliche Attribute

Zusätzlich zu den [globalen Attributen](/de/docs/Web/HTML/Reference/Global_attributes) und den Attributen, die auf alle {{HTMLElement("input")}}-Elemente unabhängig von ihrem Typ wirken, unterstützen `email`-Eingaben die folgenden Attribute.

> [!NOTE]
> Das globale [`autocorrect`](/de/docs/Web/HTML/Reference/Global_attributes/autocorrect)-Attribut kann zu E-Mail-Eingaben hinzugefügt werden, aber der gespeicherte Zustand ist immer `off`.

### list

Der Wert des `list`-Attributs ist die [`ID`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements, das sich im selben Dokument befindet. Das {{HTMLElement("datalist")}} bietet eine Liste von vordefinierten Werten, die dem Benutzer als Vorschläge für diese Eingabe angezeigt werden. Jede im `list` enthaltene Option, die nicht mit dem [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) kompatibel ist, wird nicht in den vorgeschlagenen Optionen angezeigt. Die bereitgestellten Werte sind Vorschläge und keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert angeben.

### maxlength

Die maximale Länge des Strings (gemessen in {{Glossary("UTF-16", "UTF-16-Code-Einheiten")}}), die der Benutzer in das `email`-Eingabefeld eingeben kann. Dies muss ein ganzzahliger Wert von 0 oder höher sein. Wenn kein `maxlength` angegeben ist oder ein ungültiger Wert festgelegt ist, hat die `email`-Eingabe keine maximale Länge. Dieser Wert muss auch größer oder gleich dem Wert von `minlength` sein.

Die Eingabe wird die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) nicht bestehen, wenn die Länge des Textwertes des Feldes größer ist als `maxlength` {{Glossary("UTF-16", "UTF-16-Code-Einheiten")}} lang. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### minlength

Die minimale Länge des Strings (gemessen in {{Glossary("UTF-16", "UTF-16-Code-Einheiten")}}), die der Benutzer in das `email`-Eingabefeld eingeben kann. Dies muss ein nicht-negativer Ganzzahlwert kleiner oder gleich dem durch `maxlength` angegebenen Wert sein. Wenn kein `minlength` angegeben ist oder ein ungültiger Wert festgelegt ist, hat die `email`-Eingabe keine Mindestlänge.

Die Eingabe wird die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) nicht bestehen, wenn die Länge des in das Feld eingegebenen Textes weniger als `minlength` {{Glossary("UTF-16", "UTF-16-Code-Einheiten")}} lang ist. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### multiple

Ein boolesches Attribut, das bei Anwesenheit anzeigt, dass der Benutzer eine Liste mehrerer E-Mail-Adressen eingeben kann, die durch Kommas und optional durch Leerzeichen getrennt sind. Siehe [Mehrfache E-Mail-Adressen zulassen](#mehrfache_e-mail-adressen_zulassen) für ein Beispiel oder [HTML-Attribut: multiple](/de/docs/Web/HTML/Reference/Attributes/multiple) für weitere Details.

> [!NOTE]
> Normalerweise muss der Benutzer beim Angeben des [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attributs eine gültige E-Mail-Adresse eingeben, damit das Feld als gültig angesehen wird. Wenn jedoch das `multiple`-Attribut hinzugefügt wird, ist eine Liste von null E-Mail-Adressen (ein leerer String oder einer, der vollständig aus Leerzeichen besteht) ein gültiger Wert. Das bedeutet, dass der Benutzer nicht einmal eine E-Mail-Adresse eingeben muss, wenn `multiple` angegeben ist, unabhängig vom Wert von `required`.

### pattern

Das `pattern`-Attribut, wenn angegeben, ist ein regulärer Ausdruck, den der [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) der Eingabe erfüllen muss, um die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) zu bestehen. Er muss ein gültiger JavaScript-regulärer Ausdruck sein, wie er vom {{jsxref("RegExp")}}-Typ verwendet wird und wie in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert; das `'u'`-Flag wird beim Kompilieren des regulären Ausdrucks angegeben, damit das Muster als Folge von Unicode-Codepunkten behandelt wird, anstelle von {{Glossary("ASCII", "ASCII")}}. Keine Schrägstriche sollten um den Mustertext angegeben werden.

Wenn das angegebene Muster nicht angegeben oder ungültig ist, wird kein regulärer Ausdruck angewendet und dieses Attribut komplett ignoriert.

> [!NOTE]
> Verwenden Sie das [`title`](/de/docs/Web/HTML/Reference/Elements/input#title)-Attribut, um Text anzugeben, den die meisten Browser als Tooltip anzeigen werden, um zu erklären, welche Anforderungen zur Übereinstimmung des Musters erforderlich sind. Sie sollten auch anderen erläuternden Text in der Nähe einfügen.

Siehe den Abschnitt [Muster-Validierung](#muster-validierung) für Details und ein Beispiel.

### `placeholder`

Das `placeholder`-Attribut ist ein String, der dem Benutzer einen kurzen Hinweis darauf gibt, welche Art von Information im Feld erwartet wird. Es sollte ein Wort oder eine kurze Phrase sein, die den erwarteten Datentyp demonstriert, anstelle einer erläuternden Nachricht. Der Text _darf keine_ Wagenrückläufe oder Zeilenumbrüche enthalten.

Wenn der Inhalt der Kontrolle eine Richtung ({{Glossary("LTR", "LTR")}} oder {{Glossary("RTL", "RTL")}}) aufweist, aber der Platzhalter in der entgegengesetzten Richtung dargestellt werden muss, können Sie Unicode-Bidi-Algorithmus-Formatierungszeichen verwenden, um die Richtung innerhalb des Platzhalters zu überschreiben; siehe [Wie man Unicode-Steuerelemente für Bidirektionalen Text verwendet](https://www.w3.org/International/questions/qa-bidi-unicode-controls) für mehr Informationen.

> [!NOTE]
> Vermeiden Sie die Verwendung des `placeholder`-Attributs, wenn möglich. Es ist nicht so semantisch nützlich wie andere Möglichkeiten, Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Siehe [`<input>`-Beschriftungen](/de/docs/Web/HTML/Reference/Elements/input#labels) für weitere Informationen.

### `readonly`

Ein boolesches Attribut, das bei Anwesenheit bedeutet, dass dieses Feld vom Benutzer nicht bearbeitet werden kann. Sein `value` kann jedoch weiterhin geändert werden, indem JavaScript direkt die [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-`value`-Eigenschaft setzt.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keine Auswirkungen auf Eingaben mit ebenfalls angegebenem `readonly`-Attribut.

### `size`

Das `size`-Attribut ist ein numerischer Wert, der angibt, wie breit das Eingabefeld in Zeichen sein soll. Der Wert muss eine Zahl größer als null sein, und der Standardwert ist 20. Da Zeichenbreiten variieren, kann dies genau zutreffen oder auch nicht; darauf sollte nicht gesetzt werden. Das resultierende Eingabefeld kann je nach Zeichen und Schriftart ({{cssxref("font")}}-Einstellungen in Verwendung) schmaler oder breiter als die angegebene Anzahl von Zeichen sein.

Dies setzt _kein_ Limit für die Anzahl der Zeichen, die der Benutzer in das Feld eingeben kann. Es gibt nur ungefähr an, wie viele Zeichen gleichzeitig sichtbar sein können. Um ein oberes Limit für die Länge der Eingabedaten zu setzen, verwenden Sie das [`maxlength`](#maxlength)-Attribut.

## Verwendung von `email`-Eingaben

E-Mail-Adressen sind eine der am häufigsten eingegebenen Textdatenformen im Web; sie werden beim Anmelden auf Websites, bei Informationsanfragen, zur Auftragsbestätigung, für Webmail usw. verwendet. Daher kann der `email`-Eingabetyp Ihre Arbeit als Webentwickler erheblich erleichtern, da er helfen kann, Ihre Arbeit beim Erstellen der Benutzeroberfläche und -logik für E-Mail-Adressen zu vereinfachen. Wenn Sie eine Eingabe mit dem richtigen `type`-Wert `email` erstellen, erhalten Sie automatisch eine Validierung, dass der eingegebene Text zumindest in der richtigen Form ist, um möglicherweise eine legitime E-Mail-Adresse zu sein. Dies kann helfen, Fälle zu vermeiden, in denen der Benutzer seine Adresse falsch eingibt oder eine ungültige Adresse angibt.

Es ist jedoch wichtig zu beachten, dass dies nicht ausreicht, um sicherzustellen, dass der angegebene Text eine E-Mail-Adresse ist, die tatsächlich existiert, dem Benutzer der Website entspricht oder in irgendeiner anderen Weise akzeptabel ist. Es stellt sicher, dass der Wert des Feldes korrekt formatiert ist, um eine E-Mail-Adresse zu sein.

> [!NOTE]
> Es ist auch wichtig zu beachten, dass ein Benutzer Ihr HTML im Hintergrund verändern kann, sodass Ihre Website _diese Validierung nicht_ für Sicherheitszwecke verwenden darf. Sie _müssen_ die E-Mail-Adresse auf der Serverseite jeder Transaktion überprüfen, bei der der bereitgestellte Text Sicherheitsimplikationen jeder Art haben könnte.

### Eine grundlegende `email`-Eingabe

Derzeit implementieren alle Browser, die dieses Element unterstützen, es als ein Standardtext-Eingabefeld mit grundlegenden Validierungsmerkmalen. Die Spezifikation erlaubt den Browsern jedoch Flexibilität. Das Element könnte beispielsweise in das integrierte Adressbuch des Geräts des Benutzers integriert werden, um das Auswählen von E-Mail-Adressen aus dieser Liste zu ermöglichen. In seiner grundlegendsten Form könnte eine `email`-Eingabe wie folgt implementiert werden:

```html
<input id="emailAddress" type="email" />
```

{{ EmbedLiveSample('A_basic_email_input', 600, 40) }}

Beachten Sie, dass es als gültig betrachtet wird, wenn es leer ist und wenn eine einzelne richtig formatierte E-Mail-Adresse eingegeben wird, aber ansonsten nicht als gültig angesehen wird. Durch Hinzufügen des [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attributs sind nur korrekt formatierte E-Mail-Adressen erlaubt; die Eingabe wird nicht mehr als gültig angesehen, wenn sie leer ist.

### Mehrfache E-Mail-Adressen zulassen

Durch Hinzufügen des [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple)-booleschen Attributs kann die Eingabe so konfiguriert werden, dass mehrere E-Mail-Adressen akzeptiert werden.

```html
<input id="emailAddress" type="email" multiple />
```

{{ EmbedLiveSample('Allowing multiple email addresses', 600, 40) }}

Die Eingabe wird nun als gültig angesehen, wenn eine einzelne E-Mail-Adresse eingegeben wird oder wenn eine beliebige Anzahl von E-Mail-Adressen, die durch Kommas und optional durch Leerzeichen getrennt sind, vorhanden ist.

> [!NOTE]
> Bei Verwendung von `multiple` ist der Wert _darf_ leer sein.

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

Manchmal ist es hilfreich, einen kontextbezogenen Hinweis darauf anzubieten, welche Form die Eingabedaten annehmen sollten. Dies kann besonders wichtig sein, wenn das Seitendesign keine beschreibenden Beschriftungen für jedes {{HTMLElement("input")}} bietet. Hier kommen **Platzhalter** ins Spiel. Ein Platzhalter ist ein Wert, der die Form zeigt, die der `value` annehmen sollte, indem er ein Beispiel für einen gültigen Wert anzeigt, das in das Bearbeitungsfeld eingefügt wird, wenn der `value` des Elements leer ist. Sobald Daten in das Feld eingegeben werden, verschwindet der Platzhalter; wenn das Feld geleert wird, erscheint der Platzhalter wieder.

Hier haben wir eine `email`-Eingabe mit dem Platzhalter `sophie@example.com`. Beachten Sie, wie der Platzhalter verschwindet und wieder erscheint, während Sie den Inhalt des Bearbeitungsfeldes manipulieren.

```html
<input type="email" placeholder="sophie@example.com" />
```

{{ EmbedLiveSample('Placeholders', 600, 40) }}

### Steuerung der Eingabegröße

Sie können nicht nur die physische Länge des Eingabefelds steuern, sondern auch die minimal und maximal zulässigen Längen für den Eingabetext selbst.

#### Physische Größe des Eingabeelements

Die physische Größe des Eingabefelds kann mit dem [`size`](/de/docs/Web/HTML/Reference/Elements/input#size)-Attribut gesteuert werden. Damit können Sie die Anzahl der Zeichen angeben, die das Eingabefeld gleichzeitig anzeigen kann. In diesem Beispiel ist das `email`-Bearbeitungsfeld 15 Zeichen breit:

```html
<input type="email" size="15" />
```

{{ EmbedLiveSample('Physical_input_element_size', 600, 40) }}

#### Länge des Elementwerts

Die `size` ist separat von der Längenbegrenzung für die tatsächlich eingegebene E-Mail-Adresse, sodass Sie Felder in einen kleinen Raum passen, während Sie dennoch längere E-Mail-Adress-Strings zulassen können. Sie können eine Mindestlänge in Zeichen für die eingegebene E-Mail-Adresse mit dem [`minlength`](/de/docs/Web/HTML/Reference/Elements/input#minlength)-Attribut angeben; verwenden Sie ähnlicherweise [`maxlength`](/de/docs/Web/HTML/Reference/Elements/input#maxlength), um die maximale Länge der eingegebenen E-Mail-Adresse festzulegen.

Das nachfolgende Beispiel erstellt ein E-Mail-Adressen-Eingabefeld, das 32 Zeichen breit ist, wobei die Inhalte nicht kürzer als 3 Zeichen und nicht länger als 64 Zeichen sein dürfen.

```html
<input type="email" size="32" minlength="3" maxlength="64" />
```

{{EmbedLiveSample("Element_value_length", 600, 40) }}

### Vorgaben bereitstellen

#### Eine einzelne Vorgabe mit dem `value`-Attribut bereitstellen

Wie immer können Sie einen Standardwert für ein `email`-Eingabefeld angeben, indem Sie sein [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Attribut setzen:

```html
<input type="email" value="default@example.com" />
```

{{EmbedLiveSample("Providing_a_single_default_using_the_value_attribute", 600, 40)}}

#### Vorgeschlagene Werte anbieten

Noch einen Schritt weiter, können Sie eine Liste von Standardoptionen bereitstellen, aus denen der Benutzer auswählen kann, indem Sie das [`list`](/de/docs/Web/HTML/Reference/Elements/input#list)-Attribut angeben. Dies beschränkt den Benutzer nicht auf diese Optionen, ermöglicht es ihm jedoch, häufig verwendete E-Mail-Adressen schneller auszuwählen. Dies bietet auch Hinweise für [`autocomplete`](/de/docs/Web/HTML/Reference/Elements/input#autocomplete). Das `list`-Attribut gibt die ID eines {{HTMLElement("datalist")}} an, das wiederum ein {{HTMLElement("option")}}-Element für jeden vorgeschlagenen Wert enthält; der `value` jedes `option` ist der entsprechende vorgeschlagene Wert für das E-Mail-Eingabefeld.

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

Mit dem {{HTMLElement("datalist")}}-Element und seinen {{HTMLElement("option")}}s an Ort und Stelle, bietet der Browser die angegebenen Werte als potenzielle Werte für die E-Mail-Adresse an; dies wird normalerweise als Popup oder Dropdown-Menü mit den Vorschlägen angezeigt. Während die spezifische Benutzererfahrung von einem Browser zum anderen variieren kann, werden typischerweise durch Klicken in das Bearbeitungsfeld die vorgeschlagenen E-Mail-Adressen als Dropdown angezeigt. Dann, während der Benutzer tippt, wird die Liste gefiltert, um nur übereinstimmende Werte anzuzeigen. Jedes eingegebene Zeichen verengt die Liste, bis der Benutzer eine Auswahl trifft oder einen benutzerdefinierten Wert eingibt.

## Validierung

Es gibt zwei Stufen der Inhaltsvalidierung für `email`-Eingaben. Zuerst gibt es die Standard-Ebene der Validierung, die für alle {{HTMLElement("input")}}s bereitgestellt wird, welche automatisch sicherstellt, dass die Inhalte den Anforderungen entsprechen, um eine gültige E-Mail-Adresse zu sein. Aber es gibt auch die Möglichkeit, zusätzliche Filter hinzuzufügen, um sicherzustellen, dass Ihre eigenen speziellen Anforderungen erfüllt werden, wenn Sie welche haben.

> [!WARNING]
> Die HTML-Formularvalidierung ist _kein_ Ersatz für Skripte, die sicherstellen, dass die eingegebenen Daten im richtigen Format vorliegen. Es ist viel zu einfach, das HTML anzupassen, um die Validierung zu umgehen, oder es komplett zu entfernen. Außerdem kann jemand Ihr HTML vollständig umgehen und die Daten direkt an Ihren Server senden. Wenn Ihr serverseitiger Code die empfangenen Daten nicht validiert, könnte es zur Katastrophe kommen, wenn ungültig formatierte Daten (oder Daten, die zu groß sind, den falschen Typ haben usw.) in Ihre Datenbank eingegeben werden.

### Grundlegende Validierung

Browser bieten automatisch eine Validierung, um sicherzustellen, dass nur Text eingegeben wird, der dem Standardformat für Internet-E-Mail-Adressen entspricht. Browser verwenden einen Algorithmus, der einem regulären Ausdruck wie dem folgenden entspricht:

```js
/^[\w.!#$%&'*+/=?^`{|}~-]+@[a-z\d](?:[a-z\d-]{0,61}[a-z\d])?(?:\.[a-z\d](?:[a-z\d-]{0,61}[a-z\d])?)*$/i;
```

Um mehr darüber zu erfahren, wie die Formularvalidierung funktioniert und wie Sie die {{cssxref(":valid")}}- und {{cssxref(":invalid")}}-CSS-Eigenschaften nutzen können, um die Eingabe basierend darauf zu gestalten, ob der aktuelle Wert gültig ist, sehen Sie [Formdatenvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation).

> [!NOTE]
> Es gibt bekannte Spezifikationsprobleme im Zusammenhang mit internationalen Domainnamen und der Validierung von E-Mail-Adressen in HTML. Siehe [W3C Bug 15489](https://www.w3.org/Bugs/Public/show_bug.cgi?id=15489) und [whatwg/html#4562](https://github.com/whatwg/html/issues/4562) für Details.

### Muster-Validierung

Wenn Sie möchten, dass die eingegebene E-Mail-Adresse weiter beschränkt wird als nur "jede Zeichenkette, die wie eine E-Mail-Adresse aussieht", können Sie das [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern)-Attribut verwenden, um einen {{Glossary("regular_expression", "regulären Ausdruck")}} anzugeben, dem der Wert entsprechen muss, um gültig zu sein. Wenn das [`multiple`](/de/docs/Web/HTML/Reference/Elements/input#multiple)-Attribut angegeben ist, muss jedes einzelne Element in der durch Kommas getrennten Liste von Werten dem {{Glossary("regular_expression", "regulären Ausdruck")}} entsprechen.

Zum Beispiel sagen wir, dass Sie eine Seite für Mitarbeiter von Best Startup Ever, Inc. erstellen, auf der sie ihre IT-Abteilung um Hilfe bitten können. In unserem vereinfachten Formular muss der Nutzer seine E-Mail-Adresse und eine Nachricht zu dem Problem angeben, bei dem er Hilfe benötigt. Wir wollen sicherstellen, dass der Nutzer nicht nur eine gültige E-Mail-Adresse angibt, sondern aus Sicherheitsgründen auch eine interne Unternehmens-E-Mail-Adresse.

Da Eingaben vom Typ `email` sowohl gegen die Standard-E-Mail-Adress-Validierung als auch gegen das angegebene [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern) validieren, können Sie dies einfach umsetzen. So geht das:

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

Unser {{HTMLElement("form")}} enthält ein {{HTMLElement("input")}} vom Typ `email` für die E-Mail-Adresse des Nutzers, ein {{HTMLElement("textarea")}}, um seine Nachricht an die IT einzugeben, und ein `<input>` vom Typ [`"submit"`](/de/docs/Web/HTML/Reference/Elements/input/submit), das eine Schaltfläche zum Abschicken des Formulars erstellt. Jedes Text-Eingabefeld hat ein {{HTMLElement("label")}}, das mit ihm verknüpft ist, um den Nutzer wissen zu lassen, was von ihm erwartet wird.

Schauen wir uns das E-Mail-Adress-Eingabefeld genauer an. Seine [`size`](/de/docs/Web/HTML/Reference/Elements/input#size)- und [`maxlength`](/de/docs/Web/HTML/Reference/Elements/input#maxlength)-Attribute sind beide auf 64 gesetzt, um Platz für 64 Zeichen der E-Mail-Adresse anzuzeigen und um die Anzahl der tatsächlich eingegebenen Zeichen auf maximal 64 zu begrenzen. Das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attribut ist angegeben, wodurch es erforderlich ist, dass eine gültige E-Mail-Adresse angegeben wird.

Ein geeignetes [`placeholder`](/de/docs/Web/HTML/Reference/Elements/input#placeholder) wird angegeben – `username@beststartupever.com` – um zu zeigen, was als gültige Eingabe erwartet wird. Dieser String zeigt sowohl, dass eine E-Mail-Adresse eingegeben werden sollte, als auch dass es ein Unternehmens-Konto von beststartupever.com sein sollte. Dies ergänzt die Tatsache, dass die Verwendung von Typ `email` den Text validieren wird, um sicherzustellen, dass er im Format einer E-Mail-Adresse ist. Wenn der Text im Eingabefeld keine E-Mail-Adresse ist, erhalten Sie eine Fehlermeldung, die ungefähr so aussieht:

![Ungültige E-Mail-Adresse im Fehlerzustand mit einem Ausklapptextfeld, in dem steht "Bitte geben Sie eine E-Mail-Adresse ein".](enter-valid-email-address.png)

Wenn wir es dabei belassen würden, würden wir zumindest auf legitime E-Mail-Adressen validieren. Aber wir wollen einen Schritt weiter gehen: Wir möchten sicherstellen, dass die E-Mail-Adresse tatsächlich in der Form `[benutzername]@beststartupever.com` ist. Hier werden wir das [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern) verwenden. Wir setzen `pattern` auf `.+@beststartupever.com`. Dieser reguläre Ausdruck fordert eine Zeichenfolge an, die mindestens aus einem beliebigen Zeichen besteht, dann ein "@" gefolgt vom Domain-Namen "beststartupever.com".

Beachten Sie, dass dies nicht einmal annähernd ein ausreichender Filter für gültige E-Mail-Adressen ist; es würde Dinge wie " @beststartupever.com" (BeachsmartyTokenist den führenden Leerraum) oder "@@beststartupever.com" zulassen, die beide nicht gültig sind. Jedoch führt der Browser sowohl den Standardfilter für E-Mail-Adressen als auch unser benutzerdefiniertes Muster gegen den angegebenen Text durch. Daher enden wir mit einer Validierung, die sagt: "Stellen Sie sicher, dass dies wie eine gültige E-Mail-Adresse aussieht, und wenn ja, stellen Sie sicher, dass es sich auch um eine beststartupever.com-Adresse handelt."

Es ist ratsam, das [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title)-Attribut zusammen mit `pattern` zu verwenden. Wenn Sie dies tun, muss der `title` das Muster beschreiben. Das heißt, es sollte erklären, welches Format die Daten haben sollten, anstatt jede andere Information. Das liegt daran, dass der `title` möglicherweise als Teil einer Validierungsfehlermeldung angezeigt oder gesprochen wird. Zum Beispiel könnte der Browser die Nachricht "Der eingegebene Text entspricht nicht dem erforderlichen Muster." gefolgt von Ihrem angegebenen `title` präsentieren. Wenn Ihr `title` etwas wie "E-Mail-Adresse" ist, wäre das Ergebnis die Nachricht "Der eingegebene Text entspricht nicht dem erforderlichen Muster. E-Mail-Adresse", was nicht sehr gut ist.

Deshalb geben wir stattdessen den String "Bitte geben Sie nur eine Best Startup Ever Firmen-E-Mail-Adresse" an. Indem wir das tun, könnte die resultierende Fehlermeldung so aussehen: "Der eingegebene Text entspricht nicht dem erforderlichen Muster. Bitte geben Sie nur eine Best Startup Ever Firmen-E-Mail-Adresse."

![Eine gültige E-Mail-Adresse, aber die Eingabe ist im Fehlerzustand mit einem Ausklapptextfeld, in dem steht "Der eingegebene Text entspricht nicht dem erforderlichen Muster. Bitte geben Sie nur eine Best Startup Ever Firmen-E-Mail-Adresse an."](email-pattern-match-bad.png)

> [!NOTE]
> Wenn Sie Probleme bei der Erstellung Ihrer Validierungsregulär-Ausdrücke haben und diese nicht richtig funktionieren, überprüfen Sie die Konsole Ihres Browsers; möglicherweise gibt es dort hilfreiche Fehlermeldungen, die Ihnen helfen, das Problem zu lösen.

## Beispiele

Hier haben wir eine E-Mail-Eingabe mit der ID `emailAddress`, die bis zu einer maximalen Länge von 256 Zeichen erlaubt ist. Das Eingabefeld selbst ist physisch 64 Zeichen breit und zeigt den Text `user@example.gov` als Platzhalter an, wann immer das Feld leer ist. Darüber hinaus ist das Feld durch die Verwendung des [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple)-Attributs so konfiguriert, dass der Benutzer null oder mehr E-Mail-Adressen eingeben kann, die durch Kommas getrennt sind, wie in [Mehrfache E-Mail-Adressen zulassen](#mehrfache_e-mail-adressen_zulassen) beschrieben. Als zusätzlichen Schliff enthält das [`list`](/de/docs/Web/HTML/Reference/Elements/input#list)-Attribut die ID eines {{HTMLElement("datalist")}}, dessen {{HTMLElement("option")}}s eine Reihe von vorgeschlagenen Werten angeben, aus denen der Benutzer wählen kann.

Als zusätzliches Detail wird das {{HTMLElement("label")}}-Element verwendet, um eine Beschriftung für das E-Mail-Eingabefeld zu erstellen, wobei sein [`for`](/de/docs/Web/HTML/Reference/Elements/label#for)-Attribut auf die ID `emailAddress` des {{HTMLElement("input")}}-Elements verweist. Durch die Verknüpfung der beiden Elemente auf diese Weise wird das Eingabefeld fokussiert, wenn auf die Beschriftung geklickt wird.

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
      <td><strong>Unterstützte gemeinsame Attribute</strong></td>
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
        <a href="/de/docs/Web/HTML/Reference/Elements/input#size"><code>size</code></a>, and
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
