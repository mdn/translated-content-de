---
title: <input type="email">
slug: Web/HTML/Element/input/email
l10n:
  sourceCommit: 709d3a56661f895e5b0a67ff969e381d503ddd45
---

{{HTMLSidebar}}

{{HTMLElement("input")}} Elemente vom Typ **`email`** werden verwendet, um dem Benutzer die Eingabe und Bearbeitung einer E-Mail-Adresse zu ermöglichen oder, wenn das [`multiple`](/de/docs/Web/HTML/Attributes/multiple) Attribut angegeben ist, einer Liste von E-Mail-Adressen.

{{EmbedInteractiveExample("pages/tabbed/input-email.html", "tabbed-shorter")}}

Der Eingabewert wird automatisch validiert, um sicherzustellen, dass er entweder leer oder eine korrekt formatierte E-Mail-Adresse (oder Liste von Adressen) ist, bevor das Formular abgeschickt werden kann. Die CSS-Pseudoklassen {{cssxref(":valid")}} und {{cssxref(":invalid")}} werden automatisch angewendet, um optisch zu kennzeichnen, ob der aktuelle Wert des Feldes eine gültige E-Mail-Adresse ist oder nicht.

## Wert

Das [`value`](/de/docs/Web/HTML/Element/input#value) Attribut des {{HTMLElement("input")}} Elements enthält einen String, der automatisch als konform zur E-Mail-Syntax validiert wird. Genauer gesagt gibt es drei mögliche Werteformate, die die Validierung bestehen:

1. Ein leerer String ("") zeigt an, dass der Benutzer keinen Wert eingegeben hat oder dass der Wert entfernt wurde.
2. Eine einzelne korrekt formatierte E-Mail-Adresse. Dies bedeutet nicht unbedingt, dass die E-Mail-Adresse existiert, aber sie ist zumindest korrekt formatiert. In einfachen Worten, das bedeutet `username@domain` oder `username@domain.tld`. Natürlich gibt es mehr dazu; siehe [Validierung](#validierung) für einen {{Glossary("regular_expression", "regulären Ausdruck")}}, der den E-Mail-Adressvalidierungs-Algorithmus abbildet.
3. Nur wenn das [`multiple`](/de/docs/Web/HTML/Element/input#multiple) Attribut angegeben ist, kann der Wert aus einer Liste von korrekt formatierten, durch Kommas getrennten E-Mail-Adressen bestehen. Jegliche nachgestellte und führende Leerzeichen werden von jeder Adresse in der Liste entfernt.

Siehe [Validierung](#validierung) für Details zur Validierung von E-Mail-Adressen, um sicherzustellen, dass sie korrekt formatiert sind.

## Zusätzliche Attribute

Zusätzlich zu den [globalen Attributen](/de/docs/Web/HTML/Global_attributes) und den Attributen, die auf alle {{HTMLElement("input")}} Elemente unabhängig von ihrem Typ wirken, unterstützen `email` Eingaben die folgenden Attribute.

> [!NOTE]
> Das globale Attribut [`autocorrect`](/de/docs/Web/HTML/Global_attributes/autocorrect) kann zu E-Mail-Eingaben hinzugefügt werden, aber der gespeicherte Zustand ist immer auf `off`.

### list

Die Werte des list-Attributs sind die [`id`](/de/docs/Web/API/Element/id) eines im selben Dokument befindlichen {{HTMLElement("datalist")}} Elements. Der {{HTMLElement("datalist")}} bietet eine Liste von vordefinierten Werten, die dem Benutzer für diese Eingabe vorgeschlagen werden. Alle Werte in der Liste, die nicht mit dem [`type`](/de/docs/Web/HTML/Element/input#type) kompatibel sind, werden nicht in die vorgeschlagenen Optionen aufgenommen. Die angegebenen Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert bereitstellen.

### maxlength

Die maximale Zeichenlänge (gemessen in UTF-16-Codeeinheiten), die der Benutzer in die `email` Eingabe eingeben kann. Dies muss ein ganzzahliger Wert von 0 oder größer sein. Wenn kein `maxlength` angegeben ist oder ein ungültiger Wert angegeben ist, hat die `email` Eingabe keine maximale Länge. Dieser Wert muss auch größer oder gleich dem Wert von `minlength` sein.

Die Eingabe wird die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) nicht bestehen, wenn die Länge des Textwerts des Feldes größer ist als `maxlength` UTF-16-Codeeinheiten lang. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert durch den Benutzer geändert wird.

### minlength

Die minimale Zeichenlänge (gemessen in UTF-16-Codeeinheiten), die der Benutzer in die `email` Eingabe eingeben kann. Dies muss ein nicht-negativer ganzzahliger Wert sein, der kleiner oder gleich dem durch `maxlength` festgelegten Wert ist. Wenn kein `minlength` angegeben ist oder ein ungültiger Wert angegeben ist, hat die `email` Eingabe keine Mindestlänge.

Die Eingabe wird die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) nicht bestehen, wenn die Länge des in das Feld eingegebenen Textes weniger als `minlength` UTF-16-Codeeinheiten beträgt. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert durch den Benutzer geändert wird.

### multiple

Ein Boolean-Attribut, das, wenn es vorhanden ist, anzeigt, dass der Benutzer eine Liste von mehreren E-Mail-Adressen, getrennt durch Kommas und optional Leerzeichen, eingeben kann. Sehen Sie sich [Mehrere E-Mail-Adressen zulassen](#mehrere_e-mail-adressen_zulassen) für ein Beispiel an oder [HTML-Attribut: multiple](/de/docs/Web/HTML/Attributes/multiple) für weitere Details.

> [!NOTE]
> Normalerweise, wenn Sie das Attribut [`required`](/de/docs/Web/HTML/Element/input#required) angeben, muss der Benutzer eine gültige E-Mail-Adresse eingeben, damit das Feld als gültig betrachtet wird. Wenn Sie jedoch das Attribut `multiple` hinzufügen, ist eine Liste von null E-Mail-Adressen (ein leerer String oder einer, der vollständig aus Leerzeichen besteht) ein gültiger Wert. Mit anderen Worten, der Benutzer muss nicht einmal eine E-Mail-Adresse eingeben, wenn `multiple` angegeben ist, unabhängig vom Wert von `required`.

### pattern

Das `pattern` Attribut, wenn angegeben, ist ein regulärer Ausdruck, den der `value` Wert des Eingabefeldes erfüllen muss, um die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) zu bestehen. Es muss ein gültiger JavaScript-Regulärer-Ausdruck sein, wie er durch den {{jsxref("RegExp")}} Typ verwendet wird, und wie in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert; das `'u'` Flag wird beim Kompilieren des regulären Ausdrucks angegeben, sodass das Muster als Folge von Unicode-Codepunkten behandelt wird, anstatt als {{Glossary("ASCII", "ASCII")}}. Es sollten keine Schrägstriche um den Mustertext herum angegeben werden.

Wenn das angegebene Muster nicht angegeben oder ungültig ist, wird kein regulärer Ausdruck angewendet und dieses Attribut wird vollständig ignoriert.

> [!NOTE]
> Verwenden Sie das Attribut [`title`](/de/docs/Web/HTML/Element/input#title), um einen Text zu spezifizieren, den die meisten Browser als Tooltip anzeigen, um zu erklären, was die Anforderungen sind, um dem Muster zu entsprechen. Sie sollten auch anderen erklärenden Text in der Nähe einfügen.

Siehe den Abschnitt [Musterüberprüfung](#musterüberprüfung) für Details und ein Beispiel.

### `placeholder`

Das `placeholder` Attribut ist ein String, der dem Benutzer einen kurzen Hinweis gibt, welche Art von Informationen im Feld erwartet wird. Es sollte ein Wort oder ein kurzer Satz sein, der den erwarteten Datentyp demonstriert, anstatt einer erläuternden Nachricht. Der Text darf _keine_ Wagenrückläufe oder Zeilenumbrüche enthalten.

Wenn der Inhalt der Steuerung eine Richtung ({{Glossary("LTR", "LTR")}} oder {{Glossary("RTL", "RTL")}}) hat, der Platzhalter aber in der entgegengesetzten Richtung angezeigt werden muss, können Sie die Unicode-Bidi-Algorithmus-Formatierungszeichen verwenden, um die Richtung im Platzhalter zu überschreiben; siehe [Anleitung zur Verwendung von Unicode-Steuerzeichen für bidirektionalen Text](https://www.w3.org/International/questions/qa-bidi-unicode-controls) für weitere Informationen.

> [!NOTE]
> Vermeiden Sie es, das `placeholder` Attribut zu verwenden, wenn Sie können. Es ist nicht so semantisch nützlich wie andere Möglichkeiten, Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Siehe [`<input>` Labels](/de/docs/Web/HTML/Element/input#labels) für weitere Informationen.

### `readonly`

Ein Boolean-Attribut, das, wenn es vorhanden ist, bedeutet, dass dieses Feld vom Benutzer nicht bearbeitet werden kann. Der `value` kann jedoch immer noch durch JavaScript-Code direkt durch Setzen der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) `value` Eigenschaft geändert werden.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keinen Effekt auf Eingaben mit dem `readonly` Attribut.

### `size`

Das `size` Attribut ist ein numerischer Wert, der angibt, wie viele Zeichen das Eingabefeld breit sein sollte. Der Wert muss eine Zahl größer als Null sein, und der Standardwert ist 20. Da Zeichenbreiten variieren, kann dies möglicherweise nicht genau sein und sollte nicht darauf verlassen werden; das resultierende Eingabefeld kann enger oder breiter sein als die angegebene Anzahl von Zeichen, abhängig von den Zeichen und den verwendeten Schrifteinstellungen ({{cssxref("font")}}).

Dies setzt _keine_ Begrenzung, wie viele Zeichen der Benutzer in das Feld eingeben kann. Es legt nur fest, wie viele in einer bestimmten Zeit zu sehen sind. Um ein oberes Limit für die Länge der Eingabedaten festzulegen, verwenden Sie das [`maxlength`](#maxlength) Attribut.

## Verwendung von E-Mail-Eingaben

E-Mail-Adressen gehören zu den am häufigsten eingegebenen Textdaten auf dem Web; sie werden beim Einloggen in Websites verwendet, bei der Anforderung von Informationen, um eine Bestellbestätigung zu ermöglichen, für Webmail und so weiter. Als solches kann der `email` Eingabetyp Ihre Arbeit als Webentwickler erheblich erleichtern, da er helfen kann, Ihre Arbeit beim Erstellen der Benutzeroberfläche und Logik für E-Mail-Adressen zu vereinfachen. Wenn Sie eine E-Mail-Eingabe mit dem richtigen `type` Wert, `email`, erstellen, erhalten Sie eine automatische Validierung, dass der eingegebene Text zumindest in der richtigen Form vorliegt, um möglicherweise eine legitime E-Mail-Adresse zu sein. Dies kann helfen, Fälle zu vermeiden, in denen der Benutzer seine Adresse falsch eingibt oder eine ungültige Adresse angibt.

Es ist jedoch wichtig zu beachten, dass dies nicht ausreicht, um sicherzustellen, dass der angegebene Text eine E-Mail-Adresse ist, die tatsächlich existiert, dem Benutzer der Website entspricht oder auf andere Weise akzeptabel ist. Es stellt lediglich sicher, dass der Wert des Feldes korrekt formatiert ist, um eine E-Mail-Adresse zu sein.

> [!NOTE]
> Es ist auch entscheidend, sich daran zu erinnern, dass ein Benutzer Ihre HTML-Daten im Hintergrund manipulieren kann, sodass Ihre Website _nicht_ diese Validierung für Sicherheitszwecke verwenden sollte. Sie _müssen_ die E-Mail-Adresse auf der Serverseite jeder Transaktion verifizieren, bei der der bereitgestellte Text Sicherheitsimplikationen jeder Art haben könnte.

### Eine einfache E-Mail-Eingabe

Derzeit implementieren alle Browser, die dieses Element implementieren, es als Standard-Text-Eingabefeld mit grundlegenden Validierungsfunktionen. Die Spezifikation lässt den Browsern jedoch Freiheiten. Zum Beispiel könnte das Element mit dem im Gerät des Benutzers integrierten Adressbuch integriert werden, um E-Mail-Adressen aus dieser Liste auszuwählen. In seiner grundlegendsten Form kann eine `email` Eingabe wie folgt implementiert werden:

```html
<input id="emailAddress" type="email" />
```

{{ EmbedLiveSample('A_simple_email_input', 600, 40) }}

Beachten Sie, dass es als gültig betrachtet wird, wenn es leer ist und wenn eine einzelne gültig formatierte E-Mail-Adresse eingegeben wird, aber sonst nicht als gültig angesehen wird. Durch das Hinzufügen des Attributs [`required`](/de/docs/Web/HTML/Element/input#required) werden nur gültig formatierte E-Mail-Adressen zugelassen; die Eingabe wird nicht mehr als gültig angesehen, wenn sie leer ist.

### Mehrere E-Mail-Adressen zulassen

Durch das Hinzufügen des booleschen Attributs [`multiple`](/de/docs/Web/HTML/Attributes/multiple) kann die Eingabe so konfiguriert werden, dass sie mehrere E-Mail-Adressen akzeptiert.

```html
<input id="emailAddress" type="email" multiple />
```

{{ EmbedLiveSample('Allowing multiple email addresses', 600, 40) }}

Die Eingabe wird nun als gültig erachtet, wenn eine einzelne E-Mail-Adresse eingegeben wird oder wenn eine beliebige Anzahl von E-Mail-Adressen, getrennt durch Kommas und optional durch einige Leerzeichen, vorhanden ist.

> [!NOTE]
> Wenn `multiple` verwendet wird, ist der Wert erlaubt, leer zu sein.

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

Manchmal ist es hilfreich, einen kontextbezogenen Hinweis anzubieten, in welcher Form die Eingabedaten vorliegen sollten. Dies kann besonders wichtig sein, wenn das Seitendesign keine beschreibenden Labels für jedes {{HTMLElement("input")}} bietet. Hier kommen **Platzhalter** ins Spiel. Ein Platzhalter ist ein Wert, der die Form des `value` demonstriert, indem er ein Beispiel eines gültigen Wertes darstellt, der im Eingabefeld angezeigt wird, wenn der `value` des Elements "" ist. Sobald Daten in das Feld eingegeben werden, verschwindet der Platzhalter; wenn das Feld geleert wird, erscheint der Platzhalter wieder.

Hier haben wir eine `email` Eingabe mit dem Platzhalter `sophie@example.com`. Beachten Sie, wie der Platzhalter verschwindet und wieder erscheint, während Sie den Inhalt des Eingabefelds manipulieren.

```html
<input type="email" placeholder="sophie@example.com" />
```

{{ EmbedLiveSample('Placeholders', 600, 40) }}

### Steuerung der Eingabegröße

Sie können nicht nur die physische Länge des Eingabekastens steuern, sondern auch die minimalen und maximalen Längen, die für den eingegebenen Text erlaubt sind.

#### Physische Größe des Eingabefeldes

Die physische Größe des Eingabefeldes kann mit dem [`size`](/de/docs/Web/HTML/Element/input#size) Attribut gesteuert werden. Damit können Sie die Anzahl der Zeichen angeben, die das Eingabefeld gleichzeitig anzeigen kann. In diesem Beispiel ist das `email` Eingabefeld 15 Zeichen breit:

```html
<input type="email" size="15" />
```

{{ EmbedLiveSample('Physical_input_element_size', 600, 40) }}

#### Länge des Elementwerts

Die `size` ist separat von der Längenbegrenzung der eingegebenen E-Mail-Adresse selbst, sodass Sie Felder für einen kleinen Raum passend haben können, während Sie trotzdem längere E-Mail-Adressen-Strings eingeben können. Sie können eine Mindestlänge in Zeichen für die eingegebene E-Mail-Adresse mit dem Attribut [`minlength`](/de/docs/Web/HTML/Element/input#minlength) angeben; verwenden Sie ähnlich [`maxlength`](/de/docs/Web/HTML/Element/input#maxlength), um die maximale Länge der eingegebenen E-Mail-Adresse festzulegen.

Das folgende Beispiel erstellt ein Eingabefeld für E-Mail-Adressen mit 32 Zeichen Breite, wobei der Inhalt mindestens 3 Zeichen und maximal 64 Zeichen lang sein muss.

```html
<input type="email" size="32" minlength="3" maxlength="64" />
```

{{EmbedLiveSample("Element_value_length", 600, 40) }}

### Bereitstellung von Standardoptionen

#### Bereitstellung eines einzelnen Standards mit dem Wertattribut

Wie immer können Sie einen Standardwert für ein `email` Eingabefeld angeben, indem Sie sein [`value`](/de/docs/Web/HTML/Element/input#value) Attribut einstellen:

```html
<input type="email" value="default@example.com" />
```

{{EmbedLiveSample("Providing_a_single_default_using_the_value_attribute", 600, 40)}}

#### Vorschlagen von Werten

Ein Schritt weiter kann man eine Liste von Standardoptionen anbieten, aus denen der Benutzer auswählen kann, indem man das Attribut [`list`](/de/docs/Web/HTML/Element/input#list) angibt. Dies beschränkt den Benutzer nicht auf diese Optionen, ermöglicht jedoch schnellere Auswahl vordefinierter E-Mail-Adressen. Dies bietet auch Hinweise auf [`autocomplete`](/de/docs/Web/HTML/Element/input#autocomplete). Das `list` Attribut gibt die ID eines {{HTMLElement("datalist")}} an, der seinerseits ein {{HTMLElement("option")}} Element pro vorgeschlagenen Wert enthält; der `value` von jedem `option` ist der entsprechende vorgeschlagene Wert für das E-Mail-Eingabefeld.

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

Mit dem {{HTMLElement("datalist")}} Element und seinen {{HTMLElement("option")}}s präsentiert der Browser die angegebenen Werte als mögliche Werte für die E-Mail-Adresse; dies wird typischerweise als Popup oder Dropdown-Menü mit den Vorschlägen dargestellt. Während die spezifische Benutzererfahrung von einem Browser zum anderen variieren kann, wird typischerweise durch Klicken in das Eingabefeld ein Dropdown mit den vorgeschlagenen E-Mail-Adressen angezeigt. Dann wird die Liste gefiltert, um nur die passenden Werte zu zeigen, wenn der Benutzer tippt. Jedes getippte Zeichen reduziert die Liste, bis der Benutzer eine Auswahl trifft oder einen benutzerdefinierten Wert eingibt.

## Validierung

Für `email` Eingaben stehen zwei Ebenen der Inhaltsvalidierung zur Verfügung. Zuerst gibt es die Standardebene der Validierung, die für alle {{HTMLElement("input")}}s angeboten wird, die automatisch sicherstellt, dass der Inhalt die Anforderungen erfüllt, eine gültige E-Mail-Adresse zu sein. Aber es gibt auch die Möglichkeit, zusätzliche Filter hinzuzufügen, um sicherzustellen, dass Ihre eigenen speziellen Bedürfnisse erfüllt werden, wenn Sie welche haben.

> [!WARNING]
> HTML Formularvalidierung ist _kein_ Ersatz für Skripte, die sicherstellen, dass die eingegebenen Daten im richtigen Format sind. Es ist viel zu einfach für jemanden, Änderungen am HTML vorzunehmen, die es ihm ermöglichen, die Validierung zu umgehen oder sie vollständig zu entfernen. Es ist auch möglich, dass jemand Ihr HTML vollständig umgeht und die Daten direkt an Ihren Server übermittelt. Wenn Ihr serverseitiger Code die Daten, die er erhält, nicht validiert, könnte ein Desaster geschehen, wenn falsch formatierte Daten oder Daten, die zu groß sind, vom falschen Typ sind usw., in Ihre Datenbank eingegeben werden.

### Grundlegende Validierung

Browser bieten automatisch Validierung, um sicherzustellen, dass nur Text eingegeben wird, der dem Standardformat für Internet-E-Mail-Adressen entspricht. Browser verwenden einen Algorithmus, der dem folgenden regulären Ausdruck entspricht:

```js
/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
```

Um mehr darüber zu erfahren, wie die Formularvalidierung funktioniert und wie Sie die {{cssxref(":valid")}} und {{cssxref(":invalid")}} CSS-Eigenschaften nutzen können, um die Eingabe auf der Basis der Gültigkeit des aktuellen Wertes zu gestalten, sehen Sie sich [Formular-Datenvalidierung](/de/docs/Learn/Forms/Form_validation) an.

> [!NOTE]
> Es gibt bekannte Spezifikationsprobleme im Zusammenhang mit internationalen Domainnamen und der Validierung von E-Mail-Adressen in HTML. Siehe [W3C-Bug 15489](https://www.w3.org/Bugs/Public/show_bug.cgi?id=15489) für Details.

### Musterüberprüfung

Wenn Sie die eingegebene E-Mail-Adresse weiter als nur "jede Zeichenfolge, die wie eine E-Mail-Adresse aussieht" einschränken müssen, können Sie das [`pattern`](/de/docs/Web/HTML/Element/input#pattern) Attribut verwenden, um einen {{Glossary("regular_expression", "regulären Ausdruck")}} anzugeben, den der Wert erfüllen muss, um gültig zu sein. Wenn das Attribut [`multiple`](/de/docs/Web/HTML/Element/input#multiple) angegeben wird, muss jedes Element in der durch Kommas getrennten Liste der Werte den {{Glossary("regular_expression", "regulären Ausdruck")}} erfüllen.

Angenommen, Sie bauen eine Seite für Mitarbeiter von Best Startup Ever, Inc., mit der sie sich an die IT-Abteilung wenden können, um Hilfe zu erhalten. In unserem vereinfachten Formular muss der Benutzer seine E-Mail-Adresse und eine Nachricht eingeben, die das Problem beschreibt, bei dem er Hilfe benötigt. Wir möchten sicherstellen, dass nicht nur eine gültige E-Mail-Adresse angegeben wird, sondern aus Sicherheitsgründen auch, dass die Adresse eine interne Unternehmens-E-Mail-Adresse ist.

Da Eingaben des Typs `email` sowohl gegen die Standard-E-Mail-Adressvalidierung als auch gegen das angegebene Muster `pattern` validiert werden, können Sie dies einfach implementieren. Sehen wir uns an, wie:

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

Unser {{HTMLElement("form")}} enthält ein {{HTMLElement("input")}} vom Typ `email` für die E-Mail-Adresse des Benutzers, ein {{HTMLElement("textarea")}}, in das der Benutzer seine Nachricht an die IT eingeben kann, und ein `<input>` vom Typ [`"submit"`](/de/docs/Web/HTML/Element/input/submit), welches eine Schaltfläche zum Absenden des Formulars erstellt. Jedes Texteingabefeld hat eine mit {{HTMLElement("label")}} verknüpfte Beschriftung, um dem Benutzer klarzumachen, was von ihm erwartet wird.

Betrachten wir das Eingabefeld für die E-Mail-Adresse genauer. Seine [`size`](/de/docs/Web/HTML/Element/input#size) und [`maxlength`](/de/docs/Web/HTML/Element/input#maxlength) Attribute sind beide auf 64 gesetzt, um Platz für 64 Zeichen lange E-Mail-Adressen zu bieten und die tatsächlich eingegebene Zeichenanzahl auf maximal 64 zu begrenzen. Das Attribut [`required`](/de/docs/Web/HTML/Element/input#required) ist angegeben, was es zwingend erforderlich macht, dass eine gültige E-Mail-Adresse bereitgestellt wird.

Ein geeigneter `placeholder` wird bereitgestellt - `username@beststartupever.com` - um zu demonstrieren, was als gültiger Eintrag akzeptiert wird. Dieser String zeigt sowohl, dass eine E-Mail-Adresse eingegeben werden soll, als auch, dass sie ein Unternehmensaccount von beststartupever.com sein sollte. Zusätzlich zu der Tatsache, dass der Typ `email` den Text validiert, um sicherzustellen, dass er wie eine E-Mail-Adresse formatiert ist. Wenn der Text im Eingabefeld keine E-Mail-Adresse ist, erhalten Sie eine Fehlermeldung, die in etwa so aussieht:

![Ungültige E-Mail-Adresse im Fehlerzustand mit einem Pop-up aus dem Feld, das 'bitte geben Sie eine E-Mail-Adresse ein' liest.](enter-valid-email-address.png)

Wenn wir die Dinge dabei belassen würden, würden wir zumindest nur gültige E-Mail-Adressen validieren. Aber wir möchten einen Schritt weiter gehen: Wir möchten sicherstellen, dass die E-Mail-Adresse tatsächlich in der Form `[username]@beststartupever.com` vorliegt. Hier kommt das Muster `pattern` ins Spiel. Wir setzen `pattern` auf `.+@beststartupever.com`. Dieser einfache reguläre Ausdruck fordert eine Zeichenfolge an, die aus mindestens einem beliebigen Zeichen besteht, gefolgt von einem "@", gefolgt vom Domainnamen "beststartupever.com".

Beachten Sie, dass dies nicht einmal annährend ein ausreichendes Filter für gültige E-Mail-Adressen ist; es würde Dinge wie " @beststartupever.com" (beachten Sie das führende Leerzeichen) oder "@@beststartupever.com" zulassen, von denen keines gültig ist. Der Browser führt jedoch sowohl den Standardfilter für E-Mail-Adressen als auch unser benutzerdefiniertes Muster gegen den angegebenen Text aus. Somit erhalten wir eine Validierung, die besagt: "Stellen Sie sicher, dass dies einer gültigen E-Mail-Adresse ähnelt, und wenn es das tut, stellen Sie auch sicher, dass es sich um eine beststartupever.com Adresse handelt."

Es ist ratsam, das Attribut [`title`](/de/docs/Web/HTML/Global_attributes/title) zusammen mit `pattern` zu verwenden. Wenn Sie dies tun, _muss_ der `title` das Muster beschreiben. Das heißt, er sollte erklären, welches Format die Daten haben sollten, anstatt andere Informationen bereitzustellen. Dies liegt daran, dass der `title` möglicherweise als Teil einer Validierungsfehlernachricht angezeigt oder gesprochen wird. Beispielsweise könnte der Browser die Nachricht "Der eingegebene Text entspricht nicht dem erforderlichen Muster." anzeigen, gefolgt von Ihrem angegebenen `title`. Wenn Ihr `title` etwas wie "E-Mail-Adresse" ist, wäre das Ergebnis die Nachricht "Der eingegebene Text entspricht nicht dem erforderlichen Muster. E-Mail-Adresse", was nicht sehr gut ist.

Deshalb geben wir stattdessen den String "Bitte geben Sie nur eine Best Startup Ever Unternehmens-E-Mail-Adresse ein." an. Auf diese Weise könnte die vollständige Fehlermeldung etwas wie "Der eingegebene Text entspricht nicht dem erforderlichen Muster. Bitte geben Sie nur eine Best Startup Ever Unternehmens-E-Mail-Adresse ein." lauten.

![Eine gültige E-Mail-Adresse, aber die Eingabe ist im Fehlerzustand mit einem Pop-up, das aus dem Feld kommt und 'Der eingegebene Text entspricht nicht dem erforderlichen Muster. Bitte geben Sie nur eine Best Startup Ever Unternehmens-E-Mail-Adresse ein.' liest.](email-pattern-match-bad.png)

> [!NOTE]
> Wenn Sie auf Probleme stoßen, während Sie Ihre Validierungsregulären-Ausdrücke schreiben und sie nicht richtig funktionieren, prüfen Sie die Konsole Ihres Browsers; dort können hilfreiche Fehlermeldungen vorhanden sein, die Ihnen bei der Lösung des Problems helfen.

## Beispiele

Hier haben wir eine E-Mail-Eingabe mit der ID `emailAddress`, die bis zu maximal 256 Zeichen lang sein darf. Das Eingabefeld selbst ist physisch 64 Zeichen breit und zeigt den Text `user@example.gov` als Platzhalter an, sobald das Feld leer ist. Darüber hinaus wird durch die Verwendung des [`multiple`](/de/docs/Web/HTML/Attributes/multiple) Attributs das Feld so konfiguriert, dass der Benutzer null oder mehr E-Mail-Adressen eingeben kann, getrennt durch Kommas, wie unter [Zulassen von mehreren E-Mail-Adressen](#mehrere_e-mail-adressen_zulassen) beschrieben. Als letzter Schliff enthält das `list` Attribut die ID eines {{HTMLElement("datalist")}}, dessen {{HTMLElement("option")}}s eine Reihe von vorgeschlagenen Werten spezifizieren, aus denen der Benutzer wählen kann.

Als zusätzliche Ergänzung wird das {{HTMLElement("label")}} Element benutzt, um ein Label für das E-Mail-Eingabefeld zu erstellen, wobei sein [`for`](/de/docs/Web/HTML/Element/label#for) Attribut auf die `emailAddress` ID des {{HTMLElement("input")}} Elements verweist. Durch das Verknüpfen der beiden Elemente auf diese Weise wird das Klick auf das Label das Eingabeelement fokussieren.

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
      <td><strong>IDL Attribute</strong></td>
      <td><code>list</code> und <code>value</code></td>
    </tr>
    <tr>
      <td><strong>DOM Schnittstelle</strong></td>
      <td><p>[`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)</p></td>
    </tr>
    <tr>
      <td><strong>Methoden</strong></td>
      <td>
        [`select()`](/de/docs/Web/API/HTMLInputElement/select)
      </td>
    </tr>
    <tr>
      <td><strong>Implizite ARIA Rolle</strong></td>
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
