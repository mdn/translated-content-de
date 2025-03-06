---
title: <input type="email">
slug: Web/HTML/Element/input/email
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{HTMLSidebar}}

{{HTMLElement("input")}} Elemente des Typs **`email`** werden verwendet, um dem Benutzer das Eingeben und Bearbeiten einer E-Mail-Adresse oder, falls das Attribut [`multiple`](/de/docs/Web/HTML/Attributes/multiple) angegeben ist, einer Liste von E-Mail-Adressen zu ermöglichen.

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

Der Eingabewert wird automatisch validiert, um sicherzustellen, dass er entweder leer oder eine korrekt formatierte E-Mail-Adresse (oder Liste von Adressen) ist, bevor das Formular eingereicht werden kann. Die CSS-Pseudoklassen {{cssxref(":valid")}} und {{cssxref(":invalid")}} werden entsprechend angewendet, um visuell anzuzeigen, ob der aktuelle Wert des Feldes eine gültige E-Mail-Adresse ist oder nicht.

## Wert

Das [`value`](/de/docs/Web/HTML/Element/input#value)-Attribut des {{HTMLElement("input")}} Elements enthält einen String, der automatisch auf die Einhaltung der E-Mail-Syntax validiert wird. Genauer gesagt gibt es drei mögliche Wertformate, die die Validierung bestehen:

1. Ein leerer String (" "), der anzeigt, dass der Benutzer keinen Wert eingegeben hat oder dass der Wert entfernt wurde.
2. Eine einzelne korrekt formatierte E-Mail-Adresse. Dies bedeutet nicht unbedingt, dass die E-Mail-Adresse existiert, aber zumindest ist sie korrekt formatiert. In einfachen Worten bedeutet dies `username@domain` oder `username@domain.tld`. Natürlich gibt es mehr dazu; siehe [Validierung](#validierung) für einen regulären Ausdruck, der den Validierungsalgorithmus für E-Mail-Adressen widerspiegelt.
3. Nur und ausschließlich wenn das Attribut [`multiple`](/de/docs/Web/HTML/Element/input#multiple) angegeben ist, kann der Wert eine Liste von korrekt formatieren, kommagetrennten E-Mail-Adressen sein. Jeder führende und schließende Leerraum wird von jeder Adresse in der Liste entfernt.

Details zur Validierung von E-Mail-Adressen, um sicherzustellen, dass sie korrekt formatiert sind, finden Sie unter [Validierung](#validierung).

## Zusätzliche Attribute

Zusätzlich zu den [globalen Attributen](/de/docs/Web/HTML/Global_attributes) und den Attributen, die bei allen {{HTMLElement("input")}} Elementen unabhängig von ihrem Typ funktionieren, unterstützen `email` Eingaben die folgenden Attribute.

> [!NOTE]
> Das globale Attribut [`autocorrect`](/de/docs/Web/HTML/Global_attributes/autocorrect) kann zu E-Mail-Eingaben hinzugefügt werden, aber der gespeicherte Zustand ist immer `off`.

### list

Der Wert des list-Attributs ist die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}} Elements, das sich im selben Dokument befindet. Das {{HTMLElement("datalist")}} bietet eine Liste vordefinierter Werte an, die dem Benutzer für diese Eingabe vorgeschlagen werden. Alle Werte in der Liste, die nicht mit dem [`type`](/de/docs/Web/HTML/Element/input#type) kompatibel sind, werden in den vorgeschlagenen Optionen nicht aufgenommen. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert eingeben.

### maxlength

Die maximale Zeichenlänge (gemessen in UTF-16 Codeeinheiten), die der Benutzer in die `email` Eingabe eingeben kann. Dies muss ein ganzzahliger Wert von 0 oder höher sein. Wenn kein `maxlength` angegeben ist oder ein ungültiger Wert angegeben wird, hat die `email` Eingabe keine maximale Länge. Dieser Wert muss auch größer oder gleich dem Wert von `minlength` sein.

Die Eingabe scheitert bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation), wenn die Länge des Textwertes des Feldes größer ist als die festgelegten UTF-16 Codeeinheiten. Eine Einschränkungsvalidierung wird nur dann angewendet, wenn der Wert vom Benutzer geändert wird.

### minlength

Die minimale Zeichenlänge (gemessen in UTF-16 Codeeinheiten), die der Benutzer in die `email` Eingabe eingeben kann. Dies muss eine nicht-negative ganze Zahl sein, die kleiner oder gleich dem Wert ist, der durch `maxlength` festgelegt wird. Wenn kein `minlength` angegeben ist oder ein ungültiger Wert angegeben wird, hat die `email` Eingabe keine Mindestlänge.

Die Eingabe scheitert bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation), wenn die Länge des in das Feld eingegebenen Textes kürzer ist als die festgelegten UTF-16 Codeeinheiten. Eine Einschränkungsvalidierung wird nur dann angewendet, wenn der Wert vom Benutzer geändert wird.

### multiple

Ein Boolesches Attribut, das, wenn vorhanden, anzeigt, dass der Benutzer eine Liste mehrerer E-Mail-Adressen eingeben kann, die durch Kommas und optional Leerzeichen getrennt sind. Siehe [Mehrere E-Mail-Adressen zulassen](#mehrere_e-mail-adressen_zulassen) für ein Beispiel oder [HTML Attribut: multiple](/de/docs/Web/HTML/Attributes/multiple) für weitere Details.

> [!NOTE]
> Normalerweise, wenn Sie das Attribut [`required`](/de/docs/Web/HTML/Element/input#required) angeben, muss der Benutzer eine gültige E-Mail-Adresse eingeben, damit das Feld als gültig angesehen wird. Wenn Sie jedoch das Attribut `multiple` hinzufügen, ist eine Liste von null E-Mail-Adressen (ein leerer String oder einer, der vollständig Leerraum enthält) ein gültiger Wert. Mit anderen Worten, der Benutzer muss nicht einmal eine E-Mail-Adresse eingeben, wenn `multiple` angegeben ist, unabhängig vom Wert von `required`.

### pattern

Das `pattern` Attribut gibt eine reguläre Ausdruck an, dem der [`value`](/de/docs/Web/HTML/Element/input#value) der Eingabe entsprechen muss, um die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) zu bestehen. Es muss ein gültiger JavaScript regulärer Ausdruck sein, wie er vom {{jsxref("RegExp")}} Typ verwendet wird und in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert ist; das `'u'` Flag wird beim Kompilieren des regulären Ausdrucks angegeben, sodass das Muster als Folge von Unicode-Codepunkten behandelt wird, anstelle von {{Glossary("ASCII", "ASCII")}}. Es sollten keine Schrägstriche um den Text des Musters angegeben werden.

Wenn das angegebene Muster nicht angegeben oder ungültig ist, wird kein regulärer Ausdruck angewendet und dieses Attribut vollständig ignoriert.

> [!NOTE]
> Verwenden Sie das [`title`](/de/docs/Web/HTML/Element/input#title) Attribut, um Text anzugeben, den die meisten Browser als Tooltip anzeigen, um zu erklären, was die Anforderungen sind, um dem Muster zu entsprechen. Sie sollten auch anderen erklärenden Text in der Nähe enthalten.

Siehe den Abschnitt [Muster-Validierung](#muster-validierung) für Details und ein Beispiel.

### `placeholder`

Das `placeholder` Attribut ist ein String, der dem Benutzer einen kurzen Hinweis darauf gibt, welche Art von Informationen in dem Feld erwartet werden. Es sollte ein Wort oder eine kurze Phrase sein, die den erwarteten Datentyp demonstriert, anstatt eine erklärende Nachricht. Der Text _darf keine_ Wagenrückläufe oder Zeilenumbrüche enthalten.

Wenn der Inhalt des Steuerelements eine Richtung ({{Glossary("LTR", "LTR")}} oder {{Glossary("RTL", "RTL")}}) hat, der Platzhalter jedoch in der entgegengesetzten Richtung präsentiert werden muss, können Sie Unicode-Steuerelemente der bidirektionalen Algorithmusformatierung verwenden, um die Richtung innerhalb des Platzhalters zu überschreiben; siehe [Wie man Unicode-Steuerelemente für bidi-Text verwendet](https://www.w3.org/International/questions/qa-bidi-unicode-controls) für weitere Informationen.

> [!NOTE]
> Vermeiden Sie die Verwendung des `placeholder` Attributs, wenn Sie können. Es ist nicht so semantisch nützlich wie andere Möglichkeiten, Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Siehe [`<input>` Etiketten](/de/docs/Web/HTML/Element/input#labels) für weitere Informationen.

### `readonly`

Ein Boolesches Attribut, das, wenn vorhanden, bedeutet, dass dieses Feld vom Benutzer nicht bearbeitet werden kann. Sein `value` kann jedoch noch durch direktes Setzen der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) `value` Eigenschaft durch JavaScript-Code geändert werden.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keinen Effekt auf Eingaben mit dem zusätzlich angegebenen `readonly` Attribut.

### `size`

Das `size` Attribut ist ein numerischer Wert, der angibt, wie viele Zeichen breit das Eingabefeld sein sollte. Der Wert muss eine Zahl größer als null sein und der Standardwert ist 20. Da sich die Zeichenbreite unterscheidet, kann dies möglicherweise nicht exakt sein und sollte nicht als solches herangezogen werden; das resultierende Eingabefeld kann schmaler oder breiter sein als die angegebene Anzahl von Zeichen, abhängig von den Zeichen und der verwendeten Schriftart ({{cssxref("font")}} Einstellungen).

Dies setzt _keine_ Begrenzung, wie viele Zeichen der Benutzer in das Feld eingeben kann. Es gibt nur an, wie viele ungefähr gleichzeitig gesehen werden können. Um eine Obergrenze für die Länge der Eingabedaten festzulegen, verwenden Sie das [`maxlength`](#maxlength) Attribut.

## Verwendung von E-Mail-Eingaben

E-Mail-Adressen gehören zu den am häufigsten eingegebenen Textdatenformularen im Web; sie werden beim Anmelden auf Websites verwendet, beim Anfordern von Informationen, um Bestellungen zu bestätigen, für Webmail, und so weiter. Daher kann Ihnen der `email` Eingabetyp als Webentwickler die Arbeit erheblich erleichtern, da er die Arbeit an der Benutzeroberfläche und Logik für E-Mail-Adressen vereinfachen kann. Wenn Sie eine E-Mail-Eingabe mit dem richtigen `type` Wert, `email`, erstellen, erhalten Sie eine automatische Validierung, dass der eingegebene Text zumindest in der richtigen Form ist, um potenziell eine legitime E-Mail-Adresse zu sein. Dies kann helfen, Fälle zu vermeiden, in denen der Benutzer seine Adresse falsch eingibt oder eine ungültige Adresse angibt.

Es ist jedoch wichtig anzumerken, dass dies nicht ausreicht, um sicherzustellen, dass der angegebene Text eine tatsächlich existierende, dem Benutzer der Website entsprechende oder anderweitig akzeptable E-Mail-Adresse ist. Es wird sichergestellt, dass der Wert des Feldes korrekt formatiert ist, um eine E-Mail-Adresse zu sein.

> [!NOTE]
> Es ist auch wichtig zu beachten, dass ein Benutzer Ihre HTML "hinter den Kulissen" ändern kann, daher _darf_ Ihre Website diese Validierung nicht für Sicherheitszwecke verwenden. Sie _müssen_ die E-Mail-Adresse auf der Serverseite jeder Transaktion überprüfen, bei der der bereitgestellte Text irgendwelche Sicherheitsimplikationen haben könnte.

### Eine grundlegende E-Mail-Eingabe

Derzeit implementieren alle Browser, die dieses Element implementieren, es als ein Standard-Text-Eingabefeld mit grundlegenden Validierungsfunktionen. Die Spezifikation erlaubt jedoch den Browsern Spielraum hierzu. Beispielsweise könnte das Element mit dem in das Gerät des Benutzers integrierten Adressbuch verbunden werden, um E-Mail-Adressen aus dieser Liste auszuwählen. In seiner einfachsten Form kann eine `email`-Eingabe so implementiert werden:

```html
<input id="emailAddress" type="email" />
```

{{ EmbedLiveSample('A_basic_email_input', 600, 40) }}

Beachten Sie, dass es als gültig angesehen wird, wenn es leer ist und wenn eine einzelne gültig formatiert E-Mail-Adresse eingegeben wird, gilt jedoch ansonsten nicht als gültig. Durch das Hinzufügen des Attributs [`required`](/de/docs/Web/HTML/Element/input#required) dürfen nur gültig geformte E-Mail-Adressen erlaubt; die Eingabe gilt nicht mehr als gültig, wenn sie leer ist.

### Mehrere E-Mail-Adressen zulassen

Durch das Hinzufügen des Boolean-Attributes [`multiple`](/de/docs/Web/HTML/Attributes/multiple) kann die Eingabe so konfiguriert werden, dass sie mehrere E-Mail-Adressen akzeptiert.

```html
<input id="emailAddress" type="email" multiple />
```

{{ EmbedLiveSample('Allowing multiple email addresses', 600, 40) }}

Die Eingabe wird jetzt als gültig angesehen, wenn eine einzelne E-Mail-Adresse eingegeben wird oder wenn eine beliebige Anzahl von durch Kommas und optional einer Anzahl von Leerzeichen getrennten E-Mail-Adressen vorhanden ist.

> [!NOTE]
> Wenn `multiple` verwendet wird, _darf_ der Wert leer sein.

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

Manchmal ist es hilfreich, einen kontextbezogenen Hinweis darauf zu geben, in welcher Form die Eingabedaten vorliegen sollten. Dies kann besonders wichtig sein, wenn das Seitendesign keine beschreibenden Etiketten für jedes {{HTMLElement("input")}} bietet. Hier kommen **Platzhalter** ins Spiel. Ein Platzhalter ist ein Wert, der die Form des `value` demonstriert, indem er ein Beispiel eines gültigen Wertes präsentiert, der im Bearbeitungsfeld angezeigt wird, wenn der `value` des Elements "" ist. Sobald Daten in das Feld eingegeben werden, verschwindet der Platzhalter; wenn das Feld geleert wird, erscheint der Platzhalter wieder.

Hier haben wir eine `email` Eingabe mit dem Platzhalter `sophie@example.com`. Beachten Sie, wie der Platzhalter verschwindet und wieder erscheint, während Sie den Inhalt des Bearbeitungsfeldes manipulieren.

```html
<input type="email" placeholder="sophie@example.com" />
```

{{ EmbedLiveSample('Placeholders', 600, 40) }}

### Steuerung der Eingabegröße

Sie können nicht nur die physische Länge des Eingabefeldes steuern, sondern auch die Mindest- und Höchstlängen für den erlaubten Eingabetext selbst.

#### Physische Eingabeelementgröße

Die physische Größe des Eingabefelds kann mithilfe des [`size`](/de/docs/Web/HTML/Element/input#size) Attributs gesteuert werden. Damit können Sie angeben, wie viele Zeichen das Eingabefeld gleichzeitig anzeigen kann. In diesem Beispiel ist das `email` Bearbeitungsfeld 15 Zeichen breit:

```html
<input type="email" size="15" />
```

{{ EmbedLiveSample('Physical_input_element_size', 600, 40) }}

#### Elemente-Wertlänge

Die `size` ist getrennt von der Längenbegrenzung der eingegebenen E-Mail-Adresse selbst, sodass Sie Felder in einem kleinen Raum haben können, während Sie dennoch längere E-Mail-Adressstrings eingegeben lassen können. Sie können eine Mindestlänge in Zeichen für die eingegebene E-Mail-Adresse mithilfe des [`minlength`](/de/docs/Web/HTML/Element/input#minlength) Attributs angeben; nutzen Sie in ähnlicher Weise [`maxlength`](/de/docs/Web/HTML/Element/input#maxlength), um die maximale Länge der eingetragenen E-Mail-Adresse zu setzen.

Das folgende Beispiel erstellt ein 32 Zeichen breites Eingabefeld für E-Mail-Adressen, wobei die Inhalte nicht kürzer als 3 Zeichen und nicht länger als 64 Zeichen sein dürfen.

```html
<input type="email" size="32" minlength="3" maxlength="64" />
```

{{EmbedLiveSample("Element_value_length", 600, 40) }}

### Vorgabewerte bereitstellen

#### Einen einzigen Vorgabewert mit dem value-Attribut bereitstellen

Wie immer können Sie einen Standardwert für ein `email` Eingabefeld bereitstellen, indem Sie das `value` Attribut festlegen:

```html
<input type="email" value="default@example.com" />
```

{{EmbedLiveSample("Providing_a_single_default_using_the_value_attribute", 600, 40)}}

#### Vorgeschlagene Werte anbieten

Einen Schritt weiter können Sie eine Liste von Standardoptionen bereitstellen, aus denen der Benutzer wählen kann, indem Sie das `list` Attribut angeben. Damit beschränken Sie den Benutzer nicht auf diese Optionen, aber sie ermöglichen es ihm, häufiger genutzte E-Mail-Adressen schneller auszuwählen. Dies bietet auch Hinweise zur [`autocomplete`](/de/docs/Web/HTML/Element/input#autocomplete) Funktion. Das `list` Attribut gibt die ID eines {{HTMLElement("datalist")}} an, das wiederum ein {{HTMLElement("option")}} Element pro vorgeschlagenem Wert enthält; der `value` jedes `option` ist der entsprechende vorgeschlagene Wert für das E-Mail-Eingabefeld.

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

Mit dem {{HTMLElement("datalist")}} Element und seinen {{HTMLElement("option")}}s an Ort und Stelle bietet der Browser die angegebenen Werte als potenzielle Werte für die E-Mail-Adresse an; dies wird in der Regel als Popup oder Dropdown-Menü mit den Vorschlägen präsentiert. Während die spezifische Benutzererfahrung von Browser zu Browser variieren kann, präsentiert normalerweise ein Klick in das Bearbeitungsfeld ein Dropdown der vorgeschlagenen E-Mail-Adressen. Dann filtert die Liste beim Tippen des Benutzers auf nur übereinstimmende Werte. Mit jedem eingegebenen Zeichen wird die Liste verkleinert, bis der Benutzer eine Auswahl trifft oder einen benutzerdefinierten Wert eingibt.

## Validierung

Es gibt zwei Stufen der Inhaltsvalidierung für `email` Eingaben. Zunächst gibt es das Standardvalidierungslevel, das allen {{HTMLElement("input")}}s angeboten wird, das automatisch sicherstellt, dass die Inhalte die Anforderungen an eine gültige E-Mail-Adresse erfüllen. Es gibt jedoch auch die Option, zusätzliche Filter hinzuzufügen, um sicherzustellen, dass Ihre eigenen, speziellen Anforderungen erfüllt werden, falls Sie welche haben.

> [!WARNING]
> HTML-Formularvalidierung ist _kein_ Ersatz für Skripte, die sicherstellen, dass die eingegebenen Daten im richtigen Format vorliegen. Es ist viel zu einfach, Anpassungen am HTML vorzunehmen, die es einer Person ermöglichen, die Validierung zu umgehen oder sie vollständig zu entfernen. Es ist auch möglich, dass jemand Ihr HTML vollständig umgeht und die Daten direkt an Ihren Server sendet. Wenn Ihr serverseitiger Code die erhaltenen Daten nicht validiert, könnten katastrophale Folgen eintreten, wenn unsachgemäß formatierte Daten (oder Daten, die zu groß sind, den falschen Typ haben und so weiter) in Ihre Datenbank gelangen.

### Grundlegende Validierung

Browser bieten automatisch eine Validierung an, um sicherzustellen, dass nur Text eingegeben wird, der dem Standardformat für Internet-E-Mail-Adressen entspricht. Browser verwenden einen Algorithmus, der dem folgenden regulären Ausdruck entspricht:

```js
/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
```

Um mehr darüber zu erfahren, wie Formularvalidierung funktioniert und wie Sie die {{cssxref(":valid")}} und {{cssxref(":invalid")}} CSS Eigenschaften nutzen können, um die Eingabe basierend darauf zu stylen, ob der aktuelle Wert gültig ist, siehe [Formulardatenvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation).

> [!NOTE]
> Es gibt bekannte Spezifikationsprobleme im Zusammenhang mit internationalen Domain-Namen und der Validierung von E-Mail-Adressen in HTML. Siehe [W3C Fehler 15489](https://www.w3.org/Bugs/Public/show_bug.cgi?id=15489) für Details.

### Muster-Validierung

Wenn Sie die eingegebene E-Mail-Adresse weiter einschränken müssen als nur "beliebiger String, der wie eine E-Mail-Adresse aussieht", können Sie das Attribut `pattern` verwenden, um einen {{Glossary("regular_expression", "regulären Ausdruck")}} anzugeben, dem der Wert entsprechen muss, um gültig zu sein. Falls das Attribut `multiple` angegeben ist, muss jedes einzelne Element in der kommagetrennten Liste von Werten dem {{Glossary("regular_expression", "regulären Ausdruck")}} entsprechen.

Wenn Sie beispielsweise eine Seite für Arbeitnehmer von "Best Startup Ever, Inc." erstellen, die es ihnen ermöglicht, ihre IT-Abteilung zu kontaktieren, müssen sie ihre E-Mail-Adresse und eine Nachricht eingeben, die das Problem beschreibt, bei dem sie Hilfe benötigen. Wir möchten sicherstellen, dass der Benutzer nicht nur eine gültige E-Mail-Adresse angibt, sondern aus Sicherheitsgründen verlangen wir, dass die Adresse eine interne Unternehmens-E-Mail-Adresse ist.

Da Eingaben vom Typ `email` sowohl gegen die Standard-E-Mail-Adressvalidierung als auch gegen das angegebene `pattern` validieren, können Sie dies leicht implementieren. Schauen wir, wie:

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

Unser {{HTMLElement("form")}} enthält ein {{HTMLElement("input")}} vom Typ `email` für die E-Mail-Adresse des Benutzers, ein {{HTMLElement("textarea")}}, um ihre Nachricht an die IT einzutippen, und ein `<input>` vom Typ [`"submit"`](/de/docs/Web/HTML/Element/input/submit), das eine Schaltfläche zum Einreichen des Formulars erstellt. Jedes Texteingabefeld hat mit {{HTMLElement("label")}} ein zugehöriges Beschriftungselement, das den Benutzer wissen lässt, was von ihm erwartet wird.

Werfen wir einen genaueren Blick auf das Eingabefeld für die E-Mail-Adresse. Seine Attribute [`size`](/de/docs/Web/HTML/Element/input#size) und [`maxlength`](/de/docs/Web/HTML/Element/input#maxlength) sind beide auf 64 gesetzt, um Platz für 64 Zeichen in der E-Mail-Adresse zu zeigen und die Anzahl der insgesamt eingegebenen Zeichen auf maximal 64 zu beschränken. Das Attribut [`required`](/de/docs/Web/HTML/Element/input#required) ist angegeben, was es Pflicht macht, eine gültige E-Mail-Adresse anzugeben.

Ein angemessener [`placeholder`](/de/docs/Web/HTML/Element/input#placeholder) wird bereitgestellt — `username@beststartupever.com` — um zu zeigen, was einen gültigen Eintrag ausmacht. Dieser String veranschaulicht sowohl, dass eine E-Mail-Adresse eingegeben werden sollte, als auch deutet darauf hin, dass es sich um ein Unternehmens-konto von beststartupever.com handeln sollte. Dies ist neben dem Fakt, dass durch Verwendung des Typs `email` der Text validiert wird, um sicherzustellen, dass er wie eine E-Mail-Adresse formatiert ist. Wenn der Text im Eingabefeld keine E-Mail-Adresse ist, erhalten Sie eine Fehlermeldung, die ungefähr so aussieht:

![Ungültige E-Mail-Adresse im Fehlerzustand mit einem Popout vom Eingabefeld, das 'Bitte geben Sie eine E-Mail-Adresse ein' liest.](enter-valid-email-address.png)

Wenn wir es dabei belassen, würden wir zumindest auf legitime E-Mail-Adressen validieren. Wir möchten jedoch noch einen Schritt weiter gehen: Wir möchten sicherstellen, dass die E-Mail-Adresse tatsächlich in der Form `[username]@beststartupever.com` ist. Hierzu verwenden wir `pattern`. Wir setzen `pattern` auf `.+@beststartupever.com`. Dieser reguläre Ausdruck fordert einen String an, der aus mindestens einem Zeichen jeder Art besteht, gefolgt von einem "@" und dann dem Domain-Namen "beststartupever.com".

Beachten Sie, dass dies nicht annähernd ein adäquater Filter für gültige E-Mail-Adressen ist; es würden Dinge wie " @beststartupever.com" (beachten Sie das führende Leerzeichen) oder "@@beststartupever.com" erlaubt, die beide nicht gültig sind. Der Browser führt jedoch sowohl den Standard-E-Mail-Adressfilter als auch unser benutzerdefiniertes Muster gegen den angegebenen Text aus. Infolgedessen erhalten wir eine Validierung, die besagt: "Stellen Sie sicher, dass dies einer gültigen E-Mail-Adresse ähnelt, und wenn es so ist, stellen Sie sicher, dass es auch eine beststartupever.com Adresse ist."

Es ist ratsam, das `title` Attribut in Verbindung mit `pattern` zu nutzen. Wenn Sie dies tun, muss das `title` das Muster beschreiben. Das heißt, es sollte erklären, welches Format die Daten haben sollten, anstatt irgendwelche anderen Informationen. Das liegt daran, dass das `title` möglicherweise als Teil der Validierungsfehlermeldung angezeigt oder gesprochen wird. Beispielsweise könnte der Browser die Nachricht "Der eingegebene Text entspricht nicht dem erforderlichen Muster." gefolgt von Ihrem angegebenen `title` präsentieren. Wenn Ihr `title` etwas wie "Email Adresse" ist, wäre das Ergebnis die Nachricht "Der eingegebene Text entspricht nicht dem erforderlichen Muster. Email Adresse", was nicht sehr gut ist.

Stattdessen geben wir die Zeichenfolge "Bitte geben Sie nur eine Best Startup Ever Unternehmens-E-Mail-Adresse an". Dadurch könnte die resultierende vollständige Fehlermeldung in etwa so aussehen: "Der eingegebene Text entspricht nicht dem erforderlichen Muster. Bitte geben Sie nur eine Best Startup Ever Unternehmens-E-Mail-Adresse an."

![Eine gültige E-Mail-Adresse, aber die Eingabe ist im Fehlerzustand mit einem Popout vom Eingabefeld, das 'Der eingegebene Text entspricht nicht dem erforderlichen Muster. Bitte geben Sie nur eine Best Startup Ever Unternehmens-E-Mail-Adresse an.' liest.](email-pattern-match-bad.png)

> [!NOTE]
> Wenn Sie beim Schreiben Ihrer Validierungsregulären Ausdrücke auf Probleme stoßen und diese nicht richtig funktionieren, überprüfen Sie die Konsole Ihres Browsers; möglicherweise gibt es dort hilfreiche Fehlermeldungen, die Ihnen bei der Lösung des Problems helfen.

## Beispiele

Hier haben wir eine E-Mail-Eingabe mit der ID `emailAddress`, die bis zu einer maximalen Länge von 256 Zeichen erlaubt ist. Das Eingabefeld selbst ist physisch 64 Zeichen breit und zeigt den Text `user@example.gov` als Platzhalter an, wenn das Feld leer ist. Darüber hinaus ist es durch Verwendung des Attributs [`multiple`](/de/docs/Web/HTML/Attributes/multiple) konfiguriert, um dem Benutzer zu erlauben, null oder mehr E-Mail-Adressen einzugeben, getrennt durch Kommata, wie in [Mehrere E-Mail-Adressen zulassen](#mehrere_e-mail-adressen_zulassen) beschrieben. Als letzten Schliff enthält das [`list`](/de/docs/Web/HTML/Element/input#list) Attribut die ID eines {{HTMLElement("datalist")}}, dessen {{HTMLElement("option")}}s eine Reihe vorgeschlagener Werte angeben, die der Benutzer auswählen kann.

Als zusätzliche Feinheit wird das {{HTMLElement("label")}} Element verwendet, um ein Etikett für das E-Mail-Eingabefeld festzulegen, wobei ihr [`for`](/de/docs/Web/HTML/Element/label#for) Attribut auf die ID `emailAddress` des {{HTMLElement("input")}} Elements verweist. Durch die Assoziierung der beiden Elemente auf diese Weise, wird das Eingabeelement fokussiert, wenn auf das Etikett geklickt wird.

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
        Ein String, der eine E-Mail-Adresse darstellt oder
        leer ist
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
      <td><strong>Implizierte ARIA-Rolle</strong></td>
      <td>
        ohne <code>list</code> Attribut:
        <code><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role">textbox</a></code><br />
        mit <code>list</code> Attribut:
        <code><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role">combobox</a></code>
      </td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTML-Formulare Leitfaden](/de/docs/Learn_web_development/Extensions/Forms)
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
