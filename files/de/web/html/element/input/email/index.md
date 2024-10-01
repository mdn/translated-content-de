---
title: <input type="email">
slug: Web/HTML/Element/input/email
l10n:
  sourceCommit: 245715b48674c1729cb63417e4a27628e30ae28c
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente des Typs **`email`** werden verwendet, um dem Benutzer das Eingeben und Bearbeiten einer E-Mail-Adresse oder, falls das [`multiple`](/de/docs/Web/HTML/Attributes/multiple)-Attribut angegeben ist, einer Liste von E-Mail-Adressen zu ermöglichen.

{{EmbedInteractiveExample("pages/tabbed/input-email.html", "tabbed-shorter")}}

Der Eingabewert wird automatisch validiert, um sicherzustellen, dass er entweder leer oder eine korrekt formatierte E-Mail-Adresse (oder eine Liste von Adressen) ist, bevor das Formular gesendet werden kann. Die CSS-Pseudoklassen {{cssxref(":valid")}} und {{cssxref(":invalid")}} werden automatisch angewendet, um visuell anzuzeigen, ob der aktuelle Feldwert eine gültige E-Mail-Adresse ist oder nicht.

## Wert

Das [`value`](/de/docs/Web/HTML/Element/input#value)-Attribut des {{HTMLElement("input")}}-Elements enthält eine Zeichenfolge, die automatisch als konform zur E-Mail-Syntax validiert wird. Genauer gesagt, gibt es drei mögliche Wertformate, die die Validierung bestehen:

1. Eine leere Zeichenfolge ("") zeigt an, dass der Benutzer keinen Wert eingegeben hat oder dass der Wert entfernt wurde.
2. Eine einzelne korrekt formatierte E-Mail-Adresse. Dies bedeutet nicht unbedingt, dass die E-Mail-Adresse existiert, aber sie ist zumindest korrekt formatiert. Einfach ausgedrückt bedeutet dies `username@domain` oder `username@domain.tld`. Weitere Informationen finden Sie unter [Validierung](#validierung) für einen {{Glossary("regular_expression", "regulären Ausdruck")}}, der den Algorithmus zur Validierung von E-Mail-Adressen abbildet.
3. Nur wenn das [`multiple`](/de/docs/Web/HTML/Element/input#multiple)-Attribut angegeben ist, kann der Wert eine durch Kommas getrennte Liste korrekt formatierter E-Mail-Adressen sein. Jegliche vorangestellten und nachgestellten Leerzeichen werden von jeder Adresse in der Liste entfernt.

Details zur Validierung von E-Mail-Adressen finden Sie unter [Validierung](#validierung), um sicherzustellen, dass sie korrekt formatiert sind.

## Zusätzliche Attribute

Zusätzlich zu den Attributen, die auf alle {{HTMLElement("input")}}-Elemente unabhängig von ihrem Typ wirken, unterstützen `email`-Eingaben die folgenden Attribute.

### list

Der Wert des `list`-Attributs ist die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements im selben Dokument. Das {{HTMLElement("datalist")}} bietet eine Liste vordefinierter Werte, die dem Benutzer für diese Eingabe vorgeschlagen werden. Jegliche Werte in der Liste, die nicht mit dem [`type`](/de/docs/Web/HTML/Element/input#type) kompatibel sind, werden nicht zu den Vorschlägen hinzugefügt. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert eingeben.

### maxlength

Die maximale Zeichenfolgenlänge (in UTF-16 Code-Einheiten gemessen), die der Benutzer in die `email`-Eingabe eingeben kann. Dies muss ein ganzzahliger Wert von 0 oder höher sein. Wenn kein `maxlength` angegeben ist oder ein ungültiger Wert angegeben wird, hat die `email`-Eingabe keine maximale Länge. Dieser Wert muss auch größer oder gleich dem Wert von `minlength` sein.

Die Eingabe schlägt die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) fehl, wenn die Länge des Textwerts des Feldes länger als `maxlength` UTF-16 Code-Einheiten ist. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### minlength

Die minimale Zeichenfolgenlänge (in UTF-16 Code-Einheiten gemessen), die der Benutzer in die `email`-Eingabe eingeben kann. Dies muss ein nicht-negativer ganzzahliger Wert sein, der kleiner oder gleich dem durch `maxlength` angegebenen Wert ist. Wenn kein `minlength` angegeben ist oder ein ungültiger Wert angegeben wird, hat die `email`-Eingabe keine Mindestlänge.

Die Eingabe schlägt die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) fehl, wenn die Länge des eingegebenen Textes kürzer ist als `minlength` UTF-16 Code-Einheiten. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### multiple

Ein boolesches Attribut, das, wenn es vorhanden ist, angibt, dass der Benutzer eine Liste mehrerer E-Mail-Adressen eingeben kann, die durch Kommas und optional Leerzeichen getrennt sind. Siehe [Mehrere E-Mail-Adressen erlauben](#mehrere_e-mail-adressen_erlauben) für ein Beispiel, oder [HTML-Attribut: multiple](/de/docs/Web/HTML/Attributes/multiple) für weitere Details.

> [!NOTE]
> Normalerweise, wenn Sie das `required`-Attribut angeben, muss der Benutzer eine gültige E-Mail-Adresse eingeben, damit das Feld als gültig angesehen wird. Wenn Sie jedoch das `multiple`-Attribut hinzufügen, ist eine Liste von null E-Mail-Adressen (eine leere Zeichenfolge oder eine, die nur Leerzeichen enthält) ein gültiger Wert. Mit anderen Worten, der Benutzer muss nicht einmal eine E-Mail-Adresse eingeben, wenn `multiple` angegeben ist, unabhängig vom Wert von `required`.

### pattern

Das `pattern`-Attribut, wenn angegeben, ist ein regulärer Ausdruck, den der [`value`](/de/docs/Web/HTML/Element/input#value) der Eingabe für den Wert bestehen muss, um die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) zu bestehen. Es muss ein gültiger regulärer JavaScript-Ausdruck sein, wie er vom {{jsxref("RegExp")}}-Typ verwendet wird und wie in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert; das `'u'`-Flag wird beim Kompilieren des regulären Ausdrucks angegeben, sodass das Muster als Folge von Unicode-Codepunkten behandelt wird, anstatt als {{Glossary("ASCII", "ASCII")}}. Keine Schrägstriche sollten um den Mustertext angegeben werden.

Wenn das angegebene Muster nicht angegeben oder ungültig ist, wird kein regulärer Ausdruck angewendet und dieses Attribut vollständig ignoriert.

> [!NOTE]
> Verwenden Sie das `title`-Attribut, um Text anzugeben, der von den meisten Browsern als Tooltip angezeigt wird, um zu erklären, welche Anforderungen erfüllt werden müssen, um das Muster zu erfüllen. Sie sollten auch einen anderen erläuternden Text in der Nähe platzieren.

Siehe den Abschnitt [Mustervalidierung](#mustervalidierung) für Details und ein Beispiel.

### `placeholder`

Das `placeholder`-Attribut ist eine Zeichenfolge, die dem Benutzer einen kurzen Hinweis darauf gibt, welche Art von Information im Feld erwartet wird. Es sollte ein Wort oder eine kurze Phrase sein, die die erwartete Datenart demonstriert, anstatt eine erläuternde Nachricht. Der Text _darf keine_ Wagenrückläufe oder Zeilenumbrüche enthalten.

Wenn der Inhalt des Steuerelements eine Richtung ({{Glossary("LTR", "LTR")}} oder {{Glossary("RTL", "RTL")}}) hat, der Platzhalter jedoch in der entgegengesetzten Richtung sein muss, können Sie die Formatierungszeichen des bidirektionalen Unicode-Algorithmus verwenden, um die Richtung im Platzhalter zu überschreiben; siehe [Wie man Unicode-Steuerelemente für bidi-Text verwendet](https://www.w3.org/International/questions/qa-bidi-unicode-controls) für weitere Informationen.

> [!NOTE]
> Vermeiden Sie, wenn möglich, das `placeholder`-Attribut zu verwenden. Es ist nicht so semantisch nützlich wie andere Möglichkeiten, Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Siehe [`<input>`-Labels](/de/docs/Web/HTML/Element/input#labels) für weitere Informationen.

### `readonly`

Ein boolesches Attribut, das, wenn es vorhanden ist, bedeutet, dass dieses Feld nicht vom Benutzer bearbeitet werden kann. Sein `value` kann jedoch weiterhin durch JavaScript-Code direkt durch Setzen der `value`-Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) geändert werden.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keine Wirkung auf Eingaben mit ebenfalls angegebenem `readonly`-Attribut.

### `size`

Das `size`-Attribut ist ein numerischer Wert, der angibt, wie viele Zeichen breit das Eingabefeld sein sollte. Der Wert muss eine Zahl größer als null sein, und der Standardwert ist 20. Da die Zeichenbreiten variieren, kann dies möglicherweise nicht genau sein, und es sollte nicht darauf vertraut werden; die resultierende Eingabe kann je nach Zeichen und Schriftart ({{cssxref("font")}}-Einstellungen in Verwendung) schmaler oder breiter als die angegebene Anzahl von Zeichen sein.

Dies setzt _keine_ Grenze dafür, wie viele Zeichen der Benutzer in das Feld eingeben kann. Es legt nur fest, wie viele gleichzeitig ungefähr sichtbar sein können. Um eine Obergrenze für die Länge der Eingabedaten festzulegen, verwenden Sie das [`maxlength`](#maxlength)-Attribut.

## Verwendung von E-Mail-Eingaben

E-Mail-Adressen gehören zu den am häufigsten eingegebenen Textdatenformularen im Web; sie werden beim Einloggen auf Websites, bei der Anforderung von Informationen, zur Auftragsbestätigung, für Webmail und so weiter verwendet. Insofern kann der `email`-Eingabetyp Ihre Arbeit als Webentwickler erheblich erleichtern, da er Ihre Arbeit beim Erstellen der Benutzeroberfläche und Logik für E-Mail-Adressen vereinfachen kann. Wenn Sie eine E-Mail-Eingabe mit dem richtigen `type`-Wert `email` erstellen, erhalten Sie eine automatische Validierung, ob der eingegebene Text zumindest in der richtigen Form ist, um potenziell eine legitime E-Mail-Adresse zu sein. Dies kann dazu beitragen, Fälle zu vermeiden, in denen der Benutzer seine Adresse falsch eingibt oder eine ungültige Adresse angibt.

Es ist jedoch wichtig zu beachten, dass dies nicht ausreicht, um sicherzustellen, dass der angegebene Text eine E-Mail-Adresse ist, die tatsächlich existiert, dem Benutzer der Site entspricht oder in irgendeiner anderen Weise akzeptabel ist. Es stellt sicher, dass der Wert des Feldes korrekt formatiert ist, um eine E-Mail-Adresse zu sein.

> [!NOTE]
> Es ist auch entscheidend, sich daran zu erinnern, dass ein Benutzer im Hintergrund mit Ihrem HTML herumspielen kann, daher _darf_ Ihre Seite diese Validierung nicht für Sicherheitszwecke nutzen. Sie _müssen_ die E-Mail-Adresse auf der Serverseite jeder Transaktion überprüfen, bei der der bereitgestellte Text sicherheitsrelevante Auswirkungen haben könnte.

### Eine einfache E-Mail-Eingabe

Derzeit implementieren alle Browser, die dieses Element implementieren, es als ein Standardtexteingabefeld mit grundlegenden Validierungsfunktionen. Die Spezifikation erlaubt Browsern jedoch Spielraum hierbei. Zum Beispiel könnte das Element mit dem im Gerät des Benutzers integrierten Adressbuch so integriert werden, dass E-Mail-Adressen aus dieser Liste ausgewählt werden können. In seiner einfachsten Form kann eine `email`-Eingabe wie folgt implementiert werden:

```html
<input id="emailAddress" type="email" />
```

{{ EmbedLiveSample('A_simple_email_input', 600, 40) }}

Beachten Sie, dass es als gültig betrachtet wird, wenn es leer ist und wenn eine einzelne gültig formatierte E-Mail-Adresse eingegeben wird, ansonsten jedoch nicht als gültig betrachtet wird. Wenn Sie das `required`-Attribut hinzufügen, sind nur gültig geformte E-Mail-Adressen erlaubt; die Eingabe wird bei leerem Zustand nicht mehr als gültig betrachtet.

### Mehrere E-Mail-Adressen erlauben

Durch Hinzufügen des booleschen `multiple`-Attributs kann die Eingabe so konfiguriert werden, dass mehrere E-Mail-Adressen akzeptiert werden.

```html
<input id="emailAddress" type="email" multiple />
```

{{ EmbedLiveSample('Allowing multiple email addresses', 600, 40) }}

Die Eingabe wird jetzt als gültig erachtet, wenn eine einzelne E-Mail-Adresse eingegeben wurde oder wenn eine beliebige Anzahl von durch Kommas getrennten E-Mail-Adressen und, optional, eine Anzahl von Leerzeichen vorhanden sind.

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

Manchmal ist es hilfreich, einen kontextbezogenen Hinweis darauf zu geben, welche Form die Eingabedaten annehmen sollten. Dies kann besonders wichtig sein, wenn das Design der Seite keine beschreibenden Labels für jedes {{HTMLElement("input")}} bietet. Hier kommen **Platzhalter** ins Spiel. Ein Platzhalter ist ein Wert, der die Form zeigt, die der `value` annehmen soll, indem ein Beispiel für einen gültigen Wert präsentiert wird, das im Bearbeitungsfeld angezeigt wird, wenn der `value` des Elements "" ist. Sobald Daten in das Feld eingegeben werden, verschwindet der Platzhalter; wenn das Feld geleert wird, erscheint der Platzhalter erneut.

Hier haben wir eine `email`-Eingabe mit dem Platzhalter `sophie@example.com`. Beachten Sie, wie der Platzhalter verschwindet und wieder erscheint, während Sie den Inhalt des Bearbeitungsfelds manipulieren.

```html
<input type="email" placeholder="sophie@example.com" />
```

{{ EmbedLiveSample('Placeholders', 600, 40) }}

### Kontrolle der Eingabegröße

Sie können nicht nur die physische Länge des Eingabefelds steuern, sondern auch die minimale und maximale Länge des Eingabetextes selbst.

#### Physische Eingabeelementgröße

Die physische Größe des Eingabefeldes kann mit dem `size`-Attribut kontrolliert werden. Damit können Sie die Anzahl der Zeichen angeben, die das Eingabefeld gleichzeitig anzeigen kann. In diesem Beispiel ist das `email`-Bearbeitungsfeld 15 Zeichen breit:

```html
<input type="email" size="15" />
```

{{ EmbedLiveSample('Physical_input_element_size', 600, 40) }}

#### Länge des Elementwerts

Die `size` ist getrennt von der Längenbeschränkung für die eingegebene E-Mail-Adresse selbst, sodass Sie Felder haben können, die in einen kleinen Bereich passen, während Sie dennoch längere E-Mail-Adress-Strings eingeben können. Sie können eine Mindestlänge in Zeichen für die eingegebene E-Mail-Adresse mit dem `minlength`-Attribut spezifizieren; ähnlich verwenden Sie `maxlength`, um die maximale Länge der eingegebenen E-Mail-Adresse festzulegen.

Das folgende Beispiel erstellt ein 32-Zeichen-breites E-Mail-Adress-Eingabefeld, das erfordert, dass die Inhalte nicht kürzer als 3 Zeichen und nicht länger als 64 Zeichen sind.

```html
<input type="email" size="32" minlength="3" maxlength="64" />
```

{{EmbedLiveSample("Element_value_length", 600, 40) }}

### Bereitstellung von Standardoptionen

#### Bereitstellung eines einzelnen Standards mit dem value-Attribut

Wie immer, können Sie einen Standardwert für ein `email`-Eingabefeld bereitstellen, indem Sie dessen [`value`](/de/docs/Web/HTML/Element/input#value)-Attribut setzen:

```html
<input type="email" value="default@example.com" />
```

{{EmbedLiveSample("Providing_a_single_default_using_the_value_attribute", 600, 40)}}

#### Vorschläge für Werte anbieten

Einen Schritt weitergehend können Sie eine Liste von Standardoptionen bereitstellen, aus denen der Benutzer auswählen kann, indem Sie das `list`-Attribut spezifizieren. Dies beschränkt den Benutzer nicht auf diese Optionen, ermöglicht jedoch eine schnellere Auswahl häufig verwendeter E-Mail-Adressen. Dies bietet auch Hinweise auf `autocomplete`. Das `list`-Attribut gibt die ID einer {{HTMLElement("datalist")}} an, die wiederum ein {{HTMLElement("option")}}-Element pro vorgeschlagenem Wert enthält; der `value` jedes `option`s ist der entsprechende vorgeschlagene Wert für das E-Mail-Eingabefeld.

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

Mit dem {{HTMLElement("datalist")}}-Element und seinen {{HTMLElement("option")}}-Elementen an Ort und Stelle bietet der Browser die angegebenen Werte als potenzielle Werte für die E-Mail-Adresse an; dies wird normalerweise als Popup-Menü oder Dropdown-Liste mit den Vorschlägen präsentiert. Während die spezifische Benutzererfahrung von einem Browser zum anderen variieren kann, wird normalerweise durch Klicken in das Eingabefeld eine Dropdown-Liste mit den vorgeschlagenen E-Mail-Adressen angezeigt. Wenn der Benutzer dann tippt, wird die Liste gefiltert, um nur passende Werte anzuzeigen. Jeder eingegebene Charakter schränkt die Liste weiter ein, bis der Benutzer eine Auswahl trifft oder einen benutzerdefinierten Wert eingibt.

## Validierung

Es gibt zwei Ebenen der Inhaltsvalidierung, die für `email`-Eingaben verfügbar sind. Zum einen gibt es die Standardvalidierungsstufe, die allen {{HTMLElement("input")}}s zur Verfügung steht und automatisch sicherstellt, dass die Inhalte den Anforderungen entsprechen, um eine gültige E-Mail-Adresse zu sein. Zum anderen gibt es die Möglichkeit, zusätzliche Filter hinzuzufügen, um sicherzustellen, dass Ihre eigenen speziellen Bedürfnisse erfüllt werden, falls vorhanden.

> [!WARNING]
> HTML-Formularvalidierung ist _kein_ Ersatz für Skripte, die sicherstellen, dass die eingegebenen Daten im richtigen Format vorliegen. Es ist viel zu leicht für jemanden, Anpassungen am HTML vorzunehmen, die es ihm ermöglichen, die Validierung zu umgehen oder sie vollständig zu entfernen. Es ist auch möglich, dass jemand Ihr HTML vollständig umgeht und die Daten direkt an Ihren Server sendet. Wenn Ihr Server-seitiger Code die empfangenen Daten nicht validiert, könnte ein Desaster geschehen, wenn unsachgemäß formatierte Daten (oder Daten, die zu groß sind, den falschen Typ haben usw.) in Ihre Datenbank eingegeben werden.

### Grundlegende Validierung

Browser bieten automatisch eine Validierung, um sicherzustellen, dass nur Text, der dem Standardformat für Internet-E-Mail-Adressen entspricht, in das Eingabefeld eingegeben wird. Browser verwenden einen Algorithmus, der dem folgenden regulären Ausdruck entspricht:

```js
/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
```

Um mehr darüber zu erfahren, wie die Formularvalidierung funktioniert und wie Sie die {{cssxref(":valid")}}- und {{cssxref(":invalid")}}-CSS-Eigenschaften nutzen können, um die Eingabe basierend darauf zu gestalten, ob der aktuelle Wert gültig ist oder nicht, siehe [Formulardatenvalidierung](/de/docs/Learn/Forms/Form_validation).

> [!NOTE]
> Es gibt bekannte Spezifikationsprobleme im Zusammenhang mit internationalen Domain-Namen und der Validierung von E-Mail-Adressen in HTML. Details finden Sie im [W3C-Bug 15489](https://www.w3.org/Bugs/Public/show_bug.cgi?id=15489).

### Mustervalidierung

Wenn Sie möchten, dass die eingegebene E-Mail-Adresse weiter eingeschränkt wird als nur "jede Zeichenfolge, die wie eine E-Mail-Adresse aussieht", können Sie das `pattern`-Attribut verwenden, um einen {{Glossary("regular_expression", "regulären Ausdruck")}} anzugeben, mit dem der Wert übereinstimmen muss, damit er gültig ist. Wenn das `multiple`-Attribut angegeben ist, muss jedes einzelne Element in der durch Kommas getrennten Liste von Werten mit dem {{Glossary("regular_expression", "regulären Ausdruck")}} übereinstimmen.

Zum Beispiel, nehmen wir an, Sie erstellen eine Seite für Mitarbeiter von Best Startup Ever, Inc., die es ihnen ermöglicht, ihre IT-Abteilung um Hilfe zu bitten. In unserem vereinfachten Formular muss der Benutzer seine E-Mail-Adresse und eine Nachricht, die das Problem beschreibt, für das er Hilfe braucht, eingeben. Wir möchten sicherstellen, dass nicht nur eine gültige E-Mail-Adresse angegeben wird, sondern aus Sicherheitsgründen, dass die Adresse eine interne Unternehmens-E-Mail-Adresse ist.

Da Eingaben des Typs `email` sowohl gegen die Standard-E-Mail-Adressvalidierung _als auch_ das angegebene `pattern` validiert werden, können Sie dies einfach implementieren. Sehen wir uns an, wie:

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

Unser {{HTMLElement("form")}} enthält eine {{HTMLElement("input")}} des Typs `email` für die E-Mail-Adresse des Benutzers, ein {{HTMLElement("textarea")}} zum Eingeben ihrer Nachricht an die IT und ein `<input>` des Typs [`"submit"`](/de/docs/Web/HTML/Element/input/submit), das eine Schaltfläche zum Senden des Formulars erstellt. Jedes Texteingabefeld hat ein {{HTMLElement("label")}} zugeordnet, um dem Benutzer mitzuteilen, was von ihm erwartet wird.

Schauen wir uns das Eingabefeld für die E-Mail-Adresse genauer an. Seine [`size`](/de/docs/Web/HTML/Element/input#size)- und [`maxlength`](/de/docs/Web/HTML/Element/input#maxlength)-Attribute sind beide auf 64 gesetzt, um Platz für 64 Zeichen der E-Mail-Adresse anzuzeigen und um die Anzahl der tatsächlich eingegebenen Zeichen auf maximal 64 zu beschränken. Das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut ist angegeben, was es obligatorisch macht, dass eine gültige E-Mail-Adresse bereitgestellt wird.

Ein geeigneter [`placeholder`](/de/docs/Web/HTML/Element/input#placeholder) wird zur Verfügung gestellt – `username@beststartupever.com` –, um zu demonstrieren, was eine gültige Eingabe ausmacht. Diese Zeichenfolge zeigt sowohl an, dass eine E-Mail-Adresse eingegeben werden sollte, als auch dass es ein Unternehmensaccount bei beststartupever.com sein sollte. Dies ist zusätzlich zu der Tatsache, dass bei Verwendung des Typs `email` der Text validiert wird, um sicherzustellen, dass er wie eine E-Mail-Adresse formatiert ist. Wenn der Text im Eingabefeld keine E-Mail-Adresse ist, erhalten Sie eine Fehlermeldung, die ungefähr so aussieht:

![Ungültige E-Mail-Adresse im Fehlerzustand mit einem Popout aus der Eingabe, das 'Bitte geben Sie eine E-Mail-Adresse ein' liest.](enter-valid-email-address.png)

Wenn wir es dabei belassen würden, würden wir zumindest auf legitime E-Mail-Adressen validieren. Aber wir wollen einen Schritt weiter gehen: Wir möchten sicherstellen, dass die E-Mail-Adresse tatsächlich die Form [username]@beststartupever.com hat. Hier werden wir das `pattern` verwenden. Wir setzen `pattern` auf `.+@beststartupever.com`. Dieser einfache reguläre Ausdruck fordert eine Zeichenfolge an, die aus mindestens einem beliebigen Zeichen besteht, gefolgt von einem "@" und der Domain "beststartupever.com".

Beachten Sie, dass dies nicht einmal annähernd ein ausreichender Filter für gültige E-Mail-Adressen ist; es würde Dinge wie " @beststartupever.com" (beachten Sie das führende Leerzeichen) oder "@@beststartupever.com" erlauben, von denen keines gültig ist. Der Browser führt jedoch sowohl den Standard-E-Mail-Adressfilter _als auch_ unser benutzerdefiniertes Muster gegen den angegebenen Text aus. Als Ergebnis erhalten wir eine Validierung, die sagt "Stellen Sie sicher, dass dies aussieht wie eine gültige E-Mail-Adresse, und wenn es das tut, stellen Sie sicher, dass es auch eine beststartupever.com-Adresse ist."

Es ist ratsam, das `title`-Attribut zusammen mit dem Muster zu verwenden. Wenn Sie dies tun, _muss_ der `title` das Muster beschreiben. Das heißt, es sollte erklären, welche Form die Daten annehmen sollten, anstatt jede andere Information. Das liegt daran, dass der `title` möglicherweise als Teil einer Validierungsfehlermeldung angezeigt oder gesprochen wird. Zum Beispiel könnte der Browser die Meldung "Der eingegebene Text stimmt nicht mit dem erforderlichen Muster überein." gefolgt von Ihrem angegebenen `title` präsentieren. Wenn Ihr `title` etwa "E-Mail-Adresse" ist, wäre das Ergebnis die Meldung "Der eingegebene Text stimmt nicht mit dem erforderlichen Muster überein. E-Mail-Adresse", was nicht sehr gut ist.

Deshalb spezifizieren wir statt dessen die Zeichenkette "Bitte geben Sie nur eine Firmen-E-Mail-Adresse von Best Startup Ever an". Auf diese Weise könnte die resultierende vollständige Fehlermeldung etwa so aussehen: "Der eingegebene Text stimmt nicht mit dem erforderlichen Muster überein. Bitte geben Sie nur eine Firmen-E-Mail-Adresse von Best Startup Ever an."

![Eine gültige E-Mail-Adresse, aber die Eingabe ist im Fehlerzustand mit einem Popout aus der Eingabe, das 'Der eingegebene Text stimmt nicht mit dem erforderlichen Muster überein. Bitte geben Sie nur eine Firmen-E-Mail-Adresse von Best Startup Ever an.' liest.](email-pattern-match-bad.png)

> [!NOTE]
> Wenn Sie beim Schreiben Ihrer Validierungsregulärausdrücke auf Probleme stoßen und diese nicht richtig funktionieren, überprüfen Sie die Konsole Ihres Browsers; dort könnten hilfreiche Fehlermeldungen zu finden sein, die Ihnen bei der Problemlösung helfen.

## Beispiele

Hier haben wir eine E-Mail-Eingabe mit der ID `emailAddress`, die bis zu einer maximalen Länge von 256 Zeichen erlaubt ist. Das Eingabefeld selbst ist physisch 64 Zeichen breit und zeigt den Text `user@example.gov` als Platzhalter an, solange das Feld leer ist. Zusätzlich ist die Box durch das `multiple`-Attribut so konfiguriert, dass der Benutzer null oder mehr E-Mail-Adressen, getrennt durch Kommas, eingeben kann, wie in [Mehrere E-Mail-Adressen erlauben](#mehrere_e-mail-adressen_erlauben) beschrieben. Als letzte Verfeinerung enthält das `list`-Attribut die ID einer {{HTMLElement("datalist")}}, deren {{HTMLElement("option")}}s eine Reihe von vorgeschlagenen Werten spezifizieren, die der Benutzer auswählen kann.

Als zusätzliche Maßnahme wird das {{HTMLElement("label")}}-Element verwendet, um ein Label für das E-Mail-Eingabefeld zu etablieren, dessen `for`-Attribut auf die `emailAddress` ID des {{HTMLElement("input")}}-Elements verweist. Durch die Verknüpfung der beiden Elemente auf diese Weise wird das Eingabeelement durch Klicken auf das Label fokussiert.

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
- [Kompatibilität der CSS-Eigenschaften](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
