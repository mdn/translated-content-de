---
title: '`<input type="email">` HTML-Attributwert'
short-title: <input type="email">
slug: Web/HTML/Reference/Elements/input/email
l10n:
  sourceCommit: bf5017c389132af39b50106cf1763fa7106e87b4
---

{{HTMLElement("input")}}-Elemente des Typs **`email`** werden verwendet, um dem Benutzer das Eingeben und Bearbeiten einer E-Mail-Adresse oder, wenn das [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple)-Attribut spezifiziert ist, einer Liste von E-Mail-Adressen zu ermöglichen.

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

Der Eingabewert wird automatisch validiert, um sicherzustellen, dass er entweder leer oder eine richtig formatierte E-Mail-Adresse (oder Liste von Adressen) ist, bevor das Formular abgeschickt werden kann. Die CSS-Pseudoklassen {{cssxref(":valid")}} und {{cssxref(":invalid")}} werden automatisch angewendet, um visuell zu kennzeichnen, ob der aktuelle Wert des Feldes eine gültige E-Mail-Adresse ist oder nicht.

## Wert

Das [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Attribut des {{HTMLElement("input")}}-Elements enthält einen String, der automatisch validiert wird, um der E-Mail-Syntax zu entsprechen. Genauer gesagt gibt es drei mögliche Wertformate, die die Validierung bestehen:

1. Ein leerer String ("") zeigt an, dass der Benutzer keinen Wert eingegeben hat oder dass der Wert entfernt wurde.
2. Eine einzelne, richtig formatierte E-Mail-Adresse. Das bedeutet nicht unbedingt, dass die E-Mail-Adresse existiert, aber sie ist zumindest korrekt formatiert. Dies bedeutet `username@domain` oder `username@domain.tld`. Natürlich ist dies nicht alles; siehe [Validierung](#validierung) für einen {{Glossary("regular_expression", "regulären Ausdruck")}}, der den E-Mail-Adressvalidierungsalgorithmus entspricht.
3. Nur wenn das [`multiple`](/de/docs/Web/HTML/Reference/Elements/input#multiple)-Attribut spezifiziert ist, kann der Wert eine Liste von richtig formatierten, kommagetrennten E-Mail-Adressen sein. Jegliche führenden und nachstehenden Leerzeichen werden bei jeder Adresse in der Liste entfernt.

Siehe [Validierung](#validierung) für Details zur Validierung von E-Mail-Adressen, um sicherzustellen, dass sie korrekt formatiert sind.

## Zusätzliche Attribute

Neben den [globalen Attributen](/de/docs/Web/HTML/Reference/Global_attributes) und den Attributen, die auf alle {{HTMLElement("input")}}-Elemente unabhängig von ihrem Typ angewendet werden, unterstützen `email`-Eingaben die folgenden Attribute.

> [!NOTE]
> Das [`autocorrect`](/de/docs/Web/HTML/Reference/Global_attributes/autocorrect)-Globale Attribut kann zu E-Mail-Eingaben hinzugefügt werden, aber der gespeicherte Zustand ist immer `off`.

### list

Der Wert des list-Attributs ist die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements, das sich im selben Dokument befindet. Die {{HTMLElement("datalist")}} bietet eine Liste von vordefinierten Werten, die dem Benutzer für diese Eingabe vorgeschlagen werden. Alle Werte in der Liste, die mit dem [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) nicht kompatibel sind, werden nicht in die vorgeschlagenen Optionen aufgenommen. Die angegebenen Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste wählen oder einen anderen Wert eingeben.

### maxlength

Die maximale Zeichenlänge (gemessen in {{Glossary("UTF-16", "UTF-16-Codierungseinheiten")}}), die der Benutzer in die `email`-Eingabe eingeben kann. Dies muss ein ganzzahliger Wert von 0 oder höher sein. Wenn kein `maxlength`-Wert angegeben oder ein ungültiger Wert angegeben wird, hat die `email`-Eingabe keine maximale Länge. Dieser Wert muss auch größer oder gleich dem Wert des `minlength`-Attributs sein.

Die Eingabe wird die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) nicht bestehen, wenn die Länge des Textwerts des Feldes länger ist als `maxlength` {{Glossary("UTF-16", "UTF-16-Codierungseinheiten")}}. Einschränkungsvalidierung wird nur angewendet, wenn der Wert durch den Benutzer geändert wird.

### minlength

Die minimale Zeichenlänge (gemessen in {{Glossary("UTF-16", "UTF-16-Codierungseinheiten")}}), die der Benutzer in die `email`-Eingabe eingeben kann. Dies muss ein nicht-negativer ganzzahliger Wert sein, der kleiner oder gleich dem Wert ist, der durch `maxlength` spezifiziert wird. Wenn kein `minlength` angegeben oder ein ungültiger Wert angegeben wird, hat die `email`-Eingabe keine minimale Länge.

Die Eingabe wird die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) nicht bestehen, wenn die Länge des in das Feld eingegebenen Textes kürzer ist als `minlength` {{Glossary("UTF-16", "UTF-16-Codierungseinheiten")}}. Einschränkungsvalidierung wird nur angewendet, wenn der Wert durch den Benutzer geändert wird.

### multiple

Ein Boolesches Attribut, das, falls vorhanden, angibt, dass der Benutzer eine Liste mehrerer E-Mail-Adressen eingeben kann, die durch Kommas und optional Leerzeichen getrennt sind. Siehe [Erlauben mehrerer E-Mail-Adressen](#erlauben_mehrerer_e-mail-adressen) für ein Beispiel oder [HTML-Attribut: multiple](/de/docs/Web/HTML/Reference/Attributes/multiple) für weitere Details.

> [!NOTE]
> Normalerweise muss der Benutzer, wenn Sie das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attribut angeben, eine gültige E-Mail-Adresse eingeben, damit das Feld als gültig angesehen wird. Wenn Sie jedoch das `multiple`-Attribut hinzufügen, ist eine Liste von null E-Mail-Adressen (ein leerer String oder einer, der vollständig aus Leerzeichen besteht) ein gültiger Wert. Mit anderen Worten, der Benutzer muss keine einzige E-Mail-Adresse eingeben, wenn `multiple` angegeben ist, unabhängig vom Wert von `required`.

### pattern

Das `pattern`-Attribut, wenn es spezifiziert ist, ist ein regulärer Ausdruck, den der [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) der Eingabe zum Bestehen der [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) erfüllen muss. Es muss ein gültiger JavaScript-Regulärer Ausdruck sein, wie er vom {{jsxref("RegExp")}}-Typ verwendet wird und wie in unserem [Leitfaden für reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert ist; das `'u'`-Flag wird beim Kompilieren des regulären Ausdrucks angegeben, sodass das Muster als Sequenz von Unicode-Codepunkten anstelle von {{Glossary("ASCII", "ASCII")}} behandelt wird. Es sollten keine Schrägstriche um den Mustertext angegeben werden.

Wenn das angegebene Muster nicht angegeben ist oder ungültig ist, wird kein regulärer Ausdruck angewendet und dieses Attribut wird vollständig ignoriert.

> [!NOTE]
> Verwenden Sie das [`title`](/de/docs/Web/HTML/Reference/Elements/input#title)-Attribut, um Text zu spezifizieren, den die meisten Browser als Tooltip anzeigen, um zu erklären, welche Anforderungen erfüllt sein müssen, um das Muster zu erfüllen. Sie sollten auch anderen erklärenden Text in der Nähe einschließen.

Siehe den Abschnitt [Mustervalidierung](#mustervalidierung) für Details und ein Beispiel.

### `placeholder`

Das `placeholder`-Attribut ist ein String, der dem Benutzer einen kurzen Hinweis darauf gibt, welche Art von Informationen im Feld erwartet werden. Es sollte ein Wort oder eine kurze Phrase sein, die den erwarteten Datentyp demonstriert, anstatt eine erklärende Nachricht. Der Text darf keine Wagenrückläufe oder Zeilenumbrüche enthalten.

Wenn der Inhalt des Steuerelements eine Richtung ({{Glossary("LTR", "LTR")}} oder {{Glossary("RTL", "RTL")}}) hat, aber der Platzhalter in der entgegengesetzten Richtung dargestellt werden soll, können Sie Zeichen der Unicode-Bidirektionalitätsalgorithmus verwenden, um die Richtung im Platzhalter zu überschreiben; siehe [Wie man Unicode-Steuerelemente für bidirektionalen Text verwendet](https://www.w3.org/International/questions/qa-bidi-unicode-controls) für weitere Informationen.

> [!NOTE]
> Vermeiden Sie die Verwendung des `placeholder`-Attributs, wenn Sie können. Es ist nicht so semantisch nützlich wie andere Möglichkeiten, Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Weitere Informationen finden Sie unter [`<input>`-Labels](/de/docs/Web/HTML/Reference/Elements/input#labels).

### `readonly`

Ein Boolesches Attribut, das, falls vorhanden, bedeutet, dass dieses Feld vom Benutzer nicht bearbeitet werden kann. Sein `value` kann jedoch weiterhin durch JavaScript-Code geändert werden, indem die `value`-Eigenschaft von [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) direkt gesetzt wird.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keine Wirkung auf Eingaben mit dem ebenfalls angegebenen `readonly`-Attribut.

### `size`

Das `size`-Attribut ist ein numerischer Wert, der angibt, wie viele Zeichen breit das Eingabefeld sein soll. Der Wert muss eine Zahl größer als null sein, und der Standardwert ist 20. Da Zeichenbreiten variieren, kann dies möglicherweise nicht genau sein und sollte nicht darauf verlassen werden; die resultierende Eingabe kann schmaler oder breiter sein als die angegebene Anzahl von Zeichen, abhängig von den Zeichen und der Schriftart ({{cssxref("font")}}-Einstellungen in Verwendung).

Dies setzt kein Limit für die Anzahl der Zeichen, die der Benutzer in das Feld eingeben kann. Es gibt nur an, wie viele Zeichen ungefähr gleichzeitig angezeigt werden können. Um ein oberes Limit für die Länge der Eingabedaten festzulegen, verwenden Sie das [`maxlength`](#maxlength)-Attribut.

## Verwendung von `email`-Eingaben

E-Mail-Adressen gehören zu den am häufigsten eingegebenen Textdaten im Web; sie werden beim Einloggen in Websites, bei Anfragen nach Informationen, zur Bestätigung von Bestellungen, für Webmail usw. verwendet. Daher kann der Eingabetyp `email` Ihre Arbeit als Webentwickler erheblich erleichtern, da er dazu beitragen kann, Ihre Arbeit bei der Erstellung der Benutzeroberfläche und Logik für E-Mail-Adressen zu vereinfachen. Wenn Sie eine `email`-Eingabe mit dem richtigen `type`-Wert erstellen, erhalten Sie eine automatische Validierung, dass der eingegebene Text mindestens die richtige Form hat, um möglicherweise eine legitime E-Mail-Adresse zu sein. Dies kann dazu beitragen, Fälle zu vermeiden, in denen der Benutzer seine Adresse falsch eingibt oder eine ungültige Adresse angibt.

Es ist jedoch wichtig zu beachten, dass dies nicht ausreicht, um sicherzustellen, dass der angegebene Text eine tatsächlich existierende E-Mail-Adresse ist, die der Benutzer der Website entspricht oder in irgendeiner anderen Weise akzeptabel ist. Es wird sichergestellt, dass der Wert des Feldes korrekt formatiert ist, um eine E-Mail-Adresse zu sein.

> [!NOTE]
> Es ist auch entscheidend, sich daran zu erinnern, dass ein Benutzer Ihr HTML im Hintergrund verändern kann, daher darf Ihre Website diese Validierung _nicht_ für Sicherheitszwecke verwenden. Sie _müssen_ die E-Mail-Adresse auf der Serverseite jeder Transaktion validieren, bei der der bereitgestellte Text sicherheitsrelevante Implikationen jeglicher Art haben könnte.

### Eine grundlegende `email`-Eingabe

Derzeit implementieren alle Browser, die dieses Element unterstützen, es als ein Standard-Text-Eingabefeld mit grundlegenden Validierungsfunktionen. Die Spezifikation erlaubt den Browsern jedoch Spielraum hierbei. Zum Beispiel könnte das Element in das integrierte Adressbuch des Geräts des Benutzers integriert werden, um das Auswählen von E-Mail-Adressen aus dieser Liste zu ermöglichen. In seiner einfachsten Form kann eine `email`-Eingabe wie folgt implementiert werden:

```html
<input id="emailAddress" type="email" />
```

{{ EmbedLiveSample('A_basic_email_input', 600, 40) }}

Beachten Sie, dass es als gültig betrachtet wird, wenn es leer ist und wenn eine einzige, gültig formatierte E-Mail-Adresse eingegeben wird, aber ansonsten nicht als gültig betrachtet wird. Durch das Hinzufügen des [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attributs sind nur gültig formatierte E-Mail-Adressen erlaubt; die Eingabe wird nicht mehr als gültig betrachtet, wenn sie leer ist.

### Erlauben mehrerer E-Mail-Adressen

Durch das Hinzufügen des [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple)-Booleschen Attributs kann die Eingabe so konfiguriert werden, dass mehrere E-Mail-Adressen akzeptiert werden.

```html
<input id="emailAddress" type="email" multiple />
```

{{ EmbedLiveSample('Allowing multiple email addresses', 600, 40) }}

Die Eingabe wird jetzt als gültig betrachtet, wenn eine einzelne E-Mail-Adresse eingegeben wird oder wenn eine beliebige Anzahl von E-Mail-Adressen, getrennt durch Kommas und optional eine oder mehrere Leerzeichen, vorhanden sind.

> [!NOTE]
> Wenn `multiple` verwendet wird, darf der Wert leer sein.

Einige Beispiele für gültige Strings, wenn `multiple` spezifiziert ist:

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

Manchmal ist es hilfreich, einen kontextbezogenen Hinweis zu geben, in welcher Form die Eingabedaten vorliegen sollen. Dies kann besonders wichtig sein, wenn das Seitendesign keine beschreibenden Labels für jedes {{HTMLElement("input")}} bietet. Hier kommen **Platzhalter** ins Spiel. Ein Platzhalter ist ein Wert, der die Form des `value` demonstriert, indem er ein Beispiel für einen gültigen Wert präsentiert, der angezeigt wird, wenn der `value` des Elements leer ist. Sobald Daten in das Feld eingegeben werden, verschwindet der Platzhalter; wenn das Feld geleert wird, erscheint der Platzhalter erneut.

Hier haben wir eine `email`-Eingabe mit dem Platzhalter `sophie@example.com`. Beachten Sie, wie der Platzhalter verschwindet und wieder erscheint, wenn Sie den Inhalt des Bearbeitungsfelds manipulieren.

```html
<input type="email" placeholder="sophie@example.com" />
```

{{ EmbedLiveSample('Placeholders', 600, 40) }}

### Steuerung der Eingabegröße

Sie können nicht nur die physische Länge des Eingabefeldes steuern, sondern auch die minimalen und maximalen Längen, die für den eingegebenen Text selbst erlaubt sind.

#### Physische Größe des Eingabefeldes

Die physische Größe des Eingabefeldes kann mit dem [`size`](/de/docs/Web/HTML/Reference/Elements/input#size)-Attribut gesteuert werden. Damit können Sie die Anzahl der Zeichen angeben, die das Eingabefeld gleichzeitig anzeigen kann. In diesem Beispiel ist das `email`-Bearbeitungsfeld 15 Zeichen breit:

```html
<input type="email" size="15" />
```

{{ EmbedLiveSample('Physical_input_element_size', 600, 40) }}

#### Länge des Elementwerts

Die festgelegte `size` ist von der Längenbeschränkung der tatsächlich eingegebenen E-Mail-Adresse getrennt, sodass Sie Felder in einem kleinen Raum haben können, während Sie dennoch längere E-Mail-Adressen zulassen. Sie können eine Mindestlänge in Zeichen für die eingegebene E-Mail-Adresse mit dem [`minlength`](/de/docs/Web/HTML/Reference/Elements/input#minlength)-Attribut angeben; ebenso verwenden Sie [`maxlength`](/de/docs/Web/HTML/Reference/Elements/input#maxlength), um die maximale Länge der eingegebenen E-Mail-Adresse festzulegen.

Das untenstehende Beispiel erstellt ein 32 Zeichen breites Eingabefeld für die E-Mail-Adresse, wobei die Inhalte nicht kürzer als 3 Zeichen und nicht länger als 64 Zeichen sein dürfen.

```html
<input type="email" size="32" minlength="3" maxlength="64" />
```

{{EmbedLiveSample("Element_value_length", 600, 40) }}

### Bereitstellung standardmäßiger Optionen

#### Bereitstellung eines einzelnen Standardwerts mit dem value-Attribut

Wie immer können Sie einen Standardwert für ein `email`-Eingabefeld durch Festlegen seines [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Attributs bereitstellen:

```html
<input type="email" value="default@example.com" />
```

{{EmbedLiveSample("Providing_a_single_default_using_the_value_attribute", 600, 40)}}

#### Anbieten vorgeschlagener Werte

Als weiteren Schritt können Sie eine Liste von Standardoptionen bereitstellen, aus denen der Benutzer wählen kann, indem Sie das [`list`](/de/docs/Web/HTML/Reference/Elements/input#list)-Attribut spezifizieren. Dies beschränkt den Benutzer nicht auf diese Optionen, ermöglicht es ihm jedoch, häufig verwendete E-Mail-Adressen schneller auszuwählen. Dies bietet auch Hinweise zu [`autocomplete`](/de/docs/Web/HTML/Reference/Elements/input#autocomplete). Das `list`-Attribut spezifiziert die ID eines {{HTMLElement("datalist")}}, die wiederum ein {{HTMLElement("option")}}-Element pro vorgeschlagenem Wert enthält; der `value` jedes `option` ist der entsprechende vorgeschlagene Wert für das Eingabefeld der E-Mail-Adresse.

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

Mit dem {{HTMLElement("datalist")}}-Element und seinen {{HTMLElement("option")}}s an Ort und Stelle wird der Browser die angegebenen Werte als Potenzialwerte für die E-Mail-Adresse anbieten; dies wird typischerweise als Popup oder Dropdown-Menü mit den Vorschlägen präsentiert. Während das spezifische Benutzererlebnis von einem Browser zum anderen variieren kann, führt das Klicken in das Bearbeitungsfeld typischerweise zu einer Dropdown-Liste der vorgeschlagenen E-Mail-Adressen. Dann wird die Liste gefiltert, um nur passende Werte anzuzeigen, während der Benutzer tippt. Jedes getippte Zeichen engt die Liste ein, bis der Benutzer eine Auswahl trifft oder einen benutzerdefinierten Wert eingibt.

## Validierung

Es gibt zwei Ebenen der Inhaltsvalidierung für `email`-Eingaben. Zum einen gibt es die standardmäßige Validierungsebene, die allen {{HTMLElement("input")}}-Elementen angeboten wird, welche automatisch sicherstellt, dass die Inhalte den Anforderungen entsprechen, um eine gültige E-Mail-Adresse zu sein. Es gibt aber auch die Möglichkeit, zusätzliche Filterung hinzuzufügen, um sicherzustellen, dass Ihre eigenen speziellen Anforderungen erfüllt werden, falls Sie welche haben.

> [!WARNING]
> HTML-Formularvalidierung ist _kein_ Ersatz für Skripte, die sicherstellen, dass die eingegebenen Daten im richtigen Format vorliegen. Es ist viel zu einfach für jemanden, Anpassungen am HTML vorzunehmen, die es ihm ermöglichen, die Validierung zu umgehen oder völlig zu entfernen. Es ist auch möglich, dass jemand Ihr HTML vollständig umgeht und die Daten direkt an Ihren Server übermittelt. Wenn Ihr serverseitiger Code die empfangenen Daten nicht validiert, könnte es zu Katastrophen kommen, wenn fälschlich formatierte Daten (oder Daten, die zu groß sind oder vom falschen Typ) in Ihre Datenbank eingegeben werden.

### Grundlegende Validierung

Browser bieten automatisch Validierung, um sicherzustellen, dass nur Text, der dem Standardformat für Internet-E-Mail-Adressen entspricht, in das Eingabefeld eingegeben wird. Browser verwenden einen Algorithmus, der einem regulären Ausdruck entspricht, der wie folgt ist:

```js
/^[\w.!#$%&'*+/=?^`{|}~-]+@[a-z\d](?:[a-z\d-]{0,61}[a-z\d])?(?:\.[a-z\d](?:[a-z\d-]{0,61}[a-z\d])?)*$/i;
```

Um mehr darüber zu erfahren, wie Formularvalidierung funktioniert und wie Sie die {{cssxref(":valid")}} und {{cssxref(":invalid")}} CSS-Eigenschaften verwenden können, um die Eingabe basierend darauf zu stylen, ob der aktuelle Wert gültig ist, siehe [Formulardatenvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation).

> [!NOTE]
> Es gibt bekannte Spezifikationsprobleme im Zusammenhang mit internationalen Domänennamen und der Validierung von E-Mail-Adressen in HTML. Weitere Details finden Sie in [W3C Bug 15489](https://www.w3.org/Bugs/Public/show_bug.cgi?id=15489) und [whatwg/html#4562](https://github.com/whatwg/html/issues/4562).

### Mustervalidierung

Wenn Sie benötigen, dass die eingegebene E-Mail-Adresse weiter eingeschränkt wird als nur "jeder String, der wie eine E-Mail-Adresse aussieht", können Sie das [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern)-Attribut verwenden, um einen {{Glossary("regular_expression", "regulären Ausdruck")}} anzugeben, mit dem der Wert übereinstimmen muss, um gültig zu sein. Wenn das [`multiple`](/de/docs/Web/HTML/Reference/Elements/input#multiple)-Attribut spezifiziert ist, muss jedes einzelne Element in der mit Kommas abgegrenzten Liste von Werten mit dem {{Glossary("regular_expression", "regulären Ausdruck")}} übereinstimmen.

Angenommen, Sie erstellen eine Seite für Mitarbeiter von Best Startup Ever, Inc., die es ihnen ermöglicht, die IT-Abteilung um Hilfe zu bitten. In unserem vereinfachten Formular muss der Benutzer seine E-Mail-Adresse eingeben und eine Nachricht beschreiben, die das Problem schildert, bei dem er Hilfe benötigt. Wir wollen sicherstellen, dass der Benutzer nicht nur eine gültige E-Mail-Adresse angibt, sondern aus Sicherheitsgründen verlangen wir, dass die Adresse eine interne Unternehmens-E-Mail-Adresse ist.

Da Eingaben des Typs `email` sowohl gegen die Standardvalidierung von E-Mail-Adressen als auch das angegebene [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern) validieren, können Sie dies einfach implementieren. Schauen wir uns an, wie:

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

Unser {{HTMLElement("form")}} enthält eine {{HTMLElement("input")}} des Typs `email` für die E-Mail-Adresse des Benutzers, ein {{HTMLElement("textarea")}}, um die Nachricht an die IT-Abteilung einzugeben, und ein `<input>`-Element vom Typ [`"submit"`](/de/docs/Web/HTML/Reference/Elements/input/submit), das einen Button zum Abschicken des Formulars erstellt. Jedes Texteingabefeld hat ein zugehöriges {{HTMLElement("label")}}, um dem Benutzer mitzuteilen, was von ihm erwartet wird.

Schauen wir uns das Eingabefeld für die E-Mail-Adresse genauer an. Seine [`size`](/de/docs/Web/HTML/Reference/Elements/input#size) und [`maxlength`](/de/docs/Web/HTML/Reference/Elements/input#maxlength)-Attribute sind beide auf 64 gesetzt, um Platz für 64 Zeichen der E-Mail-Adresse zu schaffen und die Anzahl der tatsächlich eingegebenen Zeichen auf maximal 64 zu beschränken. Das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attribut ist spezifiziert, was es erforderlich macht, dass eine gültige E-Mail-Adresse angegeben wird.

Ein passender [`placeholder`](/de/docs/Web/HTML/Reference/Elements/input#])) ist angegeben—`username@beststartupever.com`—um zu demonstrieren, was eine gültige Eingabe ausmacht. Diese Zeichenkette demonstriert sowohl, dass eine E-Mail-Adresse eingegeben werden soll, als auch, dass es sich um ein unternehmensinternes beststartupever.com-Konto handeln sollte. Zusätzlich dazu validiert die Verwendung des Typs `email` den Text, um sicherzustellen, dass er wie eine E-Mail-Adresse formatiert ist. Wenn der Text im Eingabefeld keine E-Mail-Adresse ist, erhalten Sie eine Fehlermeldung, die in etwa so aussieht:

![Ungültige E-Mail-Adresse im Fehlerzustand mit einer Meldung, die aus dem Eingabefeld herausspringt, 'bitte geben Sie eine E-Mail-Adresse ein'.](enter-valid-email-address.png)

Wenn wir es dabei belassen würden, würden wir zumindest eine Validierung auf legitime E-Mail-Adressen haben. Aber wir wollen einen Schritt weiter gehen: Wir wollen sicherstellen, dass die E-Mail-Adresse tatsächlich in der Form `[username]@beststartupever.com` vorliegt. Hierfür verwenden wir das [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern). Wir setzen `pattern` auf `.+@beststartupever.com`. Dieser reguläre Ausdruck erfordert eine Zeichenkette, die aus mindestens einem Zeichen jeglicher Art besteht, gefolgt von einem "@", gefolgt vom Domainnamen "beststartupever.com".

Beachten Sie, dass dies nicht einmal annähernd ein ausreichender Filter für gültige E-Mail-Adressen ist; es würde Dinge wie " @beststartupever.com" (beachten Sie das führende Leerzeichen) oder "@@beststartupever.com" zulassen, von denen keines gültig ist. Der Browser führt jedoch sowohl den Standardfilter für E-Mail-Adressen als auch unser benutzerdefiniertes Muster gegen den angegebenen Text aus. Dadurch haben wir eine Validierung, die sagt: "stell sicher, dass dies wie eine gültige E-Mail-Adresse aussieht, und wenn es das ist, stelle sicher, dass es auch eine beststartupever.com-Adresse ist."

Es ist ratsam, das [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title)-Attribut zusammen mit `pattern` zu verwenden. Wenn Sie das tun, _muss_ der `title` das Muster beschreiben. Das heißt, er sollte erklären, welches Format die Daten annehmen sollen und keine anderen Informationen. Das liegt daran, dass der `title` als Teil einer Validierungsfehlermeldung angezeigt oder gesprochen werden könnte. Zum Beispiel könnte der Browser die Meldung "Der eingegebene Text stimmt nicht mit dem erforderlichen Muster überein." anzeigen, gefolgt von dem von Ihnen angegebenen `title`. Wenn Ihr `title` etwas wie "E-Mail-Adresse" ist, wäre das Ergebnis die Meldung "Der eingegebene Text stimmt nicht mit dem erforderlichen Muster überein. E-Mail-Adresse", was nicht sehr gut ist.

Aus diesem Grund spezifizieren wir stattdessen die Zeichenfolge "Bitte geben Sie nur eine Best Startup Ever Unternehmens-E-Mail-Adresse an". Dadurch wird die resultierende vollständige Fehlermeldung möglicherweise so ähnlich wie "Der eingegebene Text stimmt nicht mit dem erforderlichen Muster überein. Bitte geben Sie nur eine Best Startup Ever Unternehmens-E-Mail-Adresse an."

![Eine gültige E-Mail-Adresse, jedoch befindet sich die Eingabe im Fehlerzustand mit einer Meldung, die aus der Eingabe herausspringt, die 'Der eingegebene Text stimmt nicht mit dem erforderlichen Muster überein. Bitte geben Sie nur eine Best Startup Ever Unternehmens-E-Mail-Adresse an.' liest](email-pattern-match-bad.png)

> [!NOTE]
> Wenn Sie auf Probleme stoßen, während Sie Ihre Validierungsregulären Ausdrücke schreiben und diese nicht richtig funktionieren, überprüfen Sie die Konsole Ihres Browsers; dort könnten hilfreiche Fehlermeldungen sein, die Ihnen bei der Lösung des Problems helfen.

## Beispiele

Hier haben wir eine E-Mail-Eingabe mit der ID `emailAddress`, die bis zu maximal 256 Zeichen lang sein darf. Das Eingabefeld selbst ist physisch 64 Zeichen breit und zeigt den Text `user@example.gov` als Platzhalter an, wann immer das Feld leer ist. Zusätzlich ist das Fenster durch die Verwendung des [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple)-Attributs so konfiguriert, dass es dem Benutzer erlaubt, null oder mehr E-Mail-Adressen einzugeben, die durch Kommas getrennt sind, wie beschrieben unter [Erlauben mehrerer E-Mail-Adressen](#erlauben_mehrerer_e-mail-adressen). Als zusätzlichen Touch enthält das [`list`](/de/docs/Web/HTML/Reference/Elements/input#list)-Attribut die ID eines {{HTMLElement("datalist")}}, deren {{HTMLElement("option")}}s eine Reihe von vorgeschlagenen Werten angeben, aus denen der Benutzer wählen kann.

Als zusätzlichen Touch wird das {{HTMLElement("label")}}-Element verwendet, um ein Label für das E-Mail-Eingabefeld zu erstellen, wobei sein [`for`](/de/docs/Web/HTML/Reference/Elements/label#for)-Attribut auf die `emailAddress` ID des {{HTMLElement("input")}}-Elements verweist. Durch das Verknüpfen der beiden Elemente auf diese Weise wird bei einem Klick auf das Label das Eingabefeld fokussiert.

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
        Ein String, der eine E-Mail-Adresse darstellt, oder
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

- [HTML-Formular-Leitfaden](/de/docs/Learn_web_development/Extensions/Forms)
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
